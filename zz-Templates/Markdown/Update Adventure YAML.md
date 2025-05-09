<%*
function parseChecklistLines(lines, typeFilter = "consumable") {
  const results = [];
  const regex = new RegExp(
    `^-\\s*\\[x\\]\\s*${typeFilter}::\\s*\\[\\[(.+?)(?:\\|(.+?))?\\]\\]\\s*\\[ilvl::(\\d+)\\]\\s*\\[gp::(\\d+)\\]`,
    "i"
  );

  for (let line of lines ?? []) {
    line = line.replace(/^>+\s*/, "").trim();
    const match = line.match(regex);
    if (!match) continue;

    const rawName = match[1];
    const displayName = match[2] ?? rawName;
    const ilvl = parseInt(match[3]);
    const gp = parseInt(match[4]);

    results.push({ name: displayName, ilvl, gp });
  }

  return results;
}

function consolidateItems(items) {
  const map = new Map();
  for (const item of items) {
    const key = item.name;
    if (!map.has(key)) {
      map.set(key, { ...item, count: 1 });
    } else {
      map.get(key).count += 1;
    }
  }

  return Array.from(map.values()).map(({ count, name, ...rest }) => ({
    name: count > 1 ? `${name} x${count}` : name,
    ...rest,
  }));
}

function parseAwardedXP(lines) {
  const xpRegex = /- \[x\].*\((\d+)\s*XP\)/i;
  let totalXP = 0;
  for (const line of lines ?? []) {
    const match = line.match(xpRegex);
    if (match) {
      totalXP += parseInt(match[1]);
    }
  }
  return totalXP;
}

function parseAwardedCoin(lines) {
  const coinTotals = { pp: 0, gp: 0, sp: 0, cp: 0 };
  const coinTypes = ["pp", "gp", "sp", "cp"];

  for (let line of lines ?? []) {
    line = line.replace(/^>+\s*/, "").trim();

    if (!line.startsWith("- [x]")) continue;

    for (let type of coinTypes) {
      const regex = new RegExp(`${type}::(\\d+)`, "i");
      const match = line.match(regex);
      if (match) {
        coinTotals[type] += parseInt(match[1]);
      }
    }
  }

  return coinTotals;
}

function formatDateToday() {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const yyyy = now.getFullYear();
  return `${mm}.${dd}.${yyyy}`;
}

function addDateToItems(items, date) {
  return items.map(item => ({ ...item, date }));
}

// Run any external user update functions (optional)
try {
  await tp.user.update_xp(tp);
  await tp.user.update_treasure(tp);
} catch (err) {
  new Notice("Error: " + err.message, 3000);
}

// Main template logic
tp.hooks.on_all_templates_executed(async () => {
  try {
    const file = tp.file.find_tfile(tp.file.path(true));
    const fileContent = await app.vault.read(file);
    const lines = fileContent.split('\n');

    const metadata = app.metadataCache.getFileCache(file);
    const frontmatter = metadata?.frontmatter ?? {};

    const newAwardedXP = parseAwardedXP(lines);
    const previousXP = frontmatter.completed_xp ?? 0;
    const deltaXP = newAwardedXP - previousXP;
    const today = formatDateToday();

    // XP log
    let completedLog = Array.isArray(frontmatter.completed_xp_log)
      ? [...frontmatter.completed_xp_log]
      : [];

    if (deltaXP > 0) {
      completedLog.push({ date: today, xp: deltaXP });
    }

    // Parse coin
    const coinAwarded = parseAwardedCoin(lines);
    const coinSum = coinAwarded.pp + coinAwarded.gp + coinAwarded.sp + coinAwarded.cp;

    // Parse and date items
    const consumablesRaw = consolidateItems(parseChecklistLines(lines, "consumable"));
    const permanentsRaw = consolidateItems(parseChecklistLines(lines, "permanent"));
    const consumables = addDateToItems(consumablesRaw, today);
    const permanents = addDateToItems(permanentsRaw, today);

    // Update frontmatter
    await app.fileManager.processFrontMatter(file, (fm) => {
      fm.total_xp = frontmatter.total_xp;
      fm.completed_xp = newAwardedXP;
      fm.completed_xp_log = completedLog;

      if (coinSum > 0) {
        const newCoinEntry = { date: today, ...coinAwarded };
        fm.awarded_coin = Array.isArray(frontmatter.awarded_coin)
          ? [...frontmatter.awarded_coin, newCoinEntry]
          : [newCoinEntry];
      }

      fm.awarded_permanent_items = permanents;
      fm.awarded_consumable_items = consumables;
    });

    new Notice(`✅ Adventure YAML updated for ${today}`, 3000);
  } catch (err) {
    new Notice("Frontmatter update failed: " + err.message, 3000);
  }
});
%>
