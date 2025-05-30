<%*
// Update Adventure YAML.md - Enhanced XP Tracking and Treasure Updates

// Checklist and treasure-related functions (unchanged) ---------------------------------
const CHECKED_PATTERN = /^\s*>*\s*-\s*\[x\]/;
const CONS_PATTERN = /^-\s*\[x\]\s*([^:]+)::\s*\[\[(.+?)(?:\|(.+?))?\]\]\s*\[ilvl::(\d+)\]\s*\[gp::(\d+)\]/i;

function parseChecklistLines(lines, typeFilter = "consumable") {
  const results = [];
  const regex = new RegExp(
    `^-\\s*\\[x\\]\\s*${typeFilter}::\\s*\\[\\[(.+?)(?:\\|(.+?))?\\]\\]\\s*\\[ilvl::(\\d+)\\]\\s*\\[gp::(\\d+)\\]`,
    "i"
  );

  for (const rawLine of lines ?? []) {
    if (!CHECKED_PATTERN.test(rawLine)) continue;
    const line = rawLine.replace(/^>+\s*/, "").trim();
    const match = line.match(regex);
    if (!match) continue;

    const rawName = match[1].trim();
    const displayName = (match[2] ?? rawName).trim();
    const ilvl = parseInt(match[3], 10);
    const gp = parseInt(match[4], 10);

    results.push({ name: displayName, ilvl, gp });
  }

  return results;
}

function consolidateItems(items) {
  const map = new Map();
  for (const item of items) {
    const key = item.name.trim().toLowerCase();
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

function parseAwardedCoin(lines) {
  const coinTotals = { pp: 0, gp: 0, sp: 0, cp: 0 };
  const coinTypes = Object.keys(coinTotals);

  for (const rawLine of lines ?? []) {
    if (!CHECKED_PATTERN.test(rawLine)) continue;
    const line = rawLine.replace(/^>+\s*/, "").trim();

    for (const type of coinTypes) {
      const regex = new RegExp(`${type}::(\\d+)`, "i");
      const match = line.match(regex);
      if (match) coinTotals[type] += parseInt(match[1], 10);
    }
  }

  return coinTotals;
}

function formatDateToday() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function addDateToItems(items, date) {
  return items.map(item => ({ ...item, date }));
}
// End treasure functions ---------------------------------------------------------------

// New XP-tracking patterns and functions ------------------------------------------------
const LINE_PATTERN = /^\s*>*\s*-\s*\[(?: |x|<)\]/;
const NEW_XP_PATTERN = /^\s*>*\s*-\s*\[x\]/;
const PROCESSED_XP_PATTERN = /^\s*>*\s*-\s*\[<\]/;
const XP_REGEX = /\((\d+)\s*XP\)/i;

function parseTotalXP(lines) {
  let total = 0;
  for (const rawLine of lines) {
    if (!LINE_PATTERN.test(rawLine)) continue;
    const line = rawLine.replace(/^>+\s*/, "").trim();
    const match = line.match(XP_REGEX);
    if (match) total += parseInt(match[1], 10);
  }
  return total;
}

function parseProcessedXP(lines) {
  let total = 0;
  for (const rawLine of lines) {
    if (!PROCESSED_XP_PATTERN.test(rawLine)) continue;
    const line = rawLine.replace(/^>+\s*/, "").trim();
    const match = line.match(XP_REGEX);
    if (match) total += parseInt(match[1], 10);
  }
  return total;
}

function parseNewXP(lines) {
  let total = 0;
  for (const rawLine of lines) {
    if (!NEW_XP_PATTERN.test(rawLine)) continue;
    const line = rawLine.replace(/^>+\s*/, "").trim();
    const match = line.match(XP_REGEX);
    if (match) total += parseInt(match[1], 10);
  }
  return total;
}
// End XP functions ---------------------------------------------------------------------

// Main template hook -------------------------------------------------------------------

await tp.user.update_treasure?.(tp);

tp.hooks.on_all_templates_executed(async () => {
  try {
    const file = tp.file.find_tfile(tp.file.path(true));
    const content = await app.vault.read(file);
    const lines = content.split('\n');
    const metadata = app.metadataCache.getFileCache(file);
    const fm = metadata?.frontmatter ?? {};
    const today = formatDateToday();

    // XP calculations
    const totalPossibleXP = parseTotalXP(lines);
    const newXP = parseNewXP(lines);
    const prevProcessedXP = parseProcessedXP(lines);
    const completedAfterRun = prevProcessedXP + newXP;

    // Coin and item parsing
    const coinAwarded = parseAwardedCoin(lines);
    const coinSum = Object.values(coinAwarded).reduce((a, b) => a + b, 0);
    const consumablesRaw = parseChecklistLines(lines, "consumable");
    const permanentsRaw = parseChecklistLines(lines, "permanent");
    const consumables = addDateToItems(consolidateItems(consumablesRaw), today);
    const permanents = addDateToItems(consolidateItems(permanentsRaw), today);

    // Update frontmatter
    await app.fileManager.processFrontMatter(file, (front) => {
      front.total_xp = totalPossibleXP;
      front.completed_xp = completedAfterRun;
      front.completed_xp_log = Array.isArray(front.completed_xp_log) ? [...front.completed_xp_log] : [];
      if (newXP > 0) front.completed_xp_log.push({ date: today, xp: newXP });

      if (coinSum > 0) {
        front.awarded_coin = Array.isArray(front.awarded_coin) ? [...front.awarded_coin] : [];
        front.awarded_coin.push({ date: today, ...coinAwarded });
      }
      front.awarded_consumable_items = Array.isArray(front.awarded_consumable_items)
        ? [...front.awarded_consumable_items, ...consumables]
        : consumables;
      front.awarded_permanent_items = Array.isArray(front.awarded_permanent_items)
        ? [...front.awarded_permanent_items, ...permanents]
        : permanents;
    });

    // Mark new XP entries as processed
    const updatedContent = await app.vault.read(file);
    const updatedLines = updatedContent.split("\n").map(line =>
      NEW_XP_PATTERN.test(line)
        ? line.replace(/^(\s*>*)\s*-\s*\[x\]/, '> - [<]')
        : line
    );
    await app.vault.modify(file, updatedLines.join("\n"));

    new Notice(`✅ Adventure YAML updated for ${today}`, 3000);
  } catch (err) {
    new Notice("Frontmatter update failed: " + err.message, 3000);
  }
});
%>
