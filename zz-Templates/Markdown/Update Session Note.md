<%*
const sessionFile = tp.file.find_tfile(tp.file.path(true));
const sessionFrontmatter = app.metadataCache.getFileCache(sessionFile)?.frontmatter ?? {};
const sessionDateRaw = sessionFrontmatter.sessiondate;

if (!sessionDateRaw) {
  new Notice("No sessiondate found in session note YAML.", 3000);
  return;
}

// Convert "yyyy-mm-dd" to "mm.dd.yyyy"
const [yyyy, mm, dd] = sessionDateRaw.split("-");
const formattedSessionDate = `${mm}.${dd}.${yyyy}`;

const targetFolder = "4-Campaign/Age of Worms";
const folderFiles = app.vault.getMarkdownFiles().filter(f => f.path.startsWith(targetFolder));

let matchedXP = null;
let matchedCoin = null;
let matchedPermanents = [];
let matchedConsumables = [];

for (const file of folderFiles) {
  const cache = app.metadataCache.getFileCache(file);
  const fm = cache?.frontmatter ?? {};

  // ✅ Match XP
  const logEntries = fm.completed_xp_log ?? [];
  for (const entry of logEntries) {
    if (entry.date === formattedSessionDate) {
      matchedXP = entry.xp;
      break;
    }
  }

  // ✅ Match Coin
  const coinEntries = fm.awarded_coin ?? [];
  for (const entry of coinEntries) {
    if (entry.date === formattedSessionDate) {
      matchedCoin = {
        pp: entry.pp ?? 0,
        gp: entry.gp ?? 0,
        sp: entry.sp ?? 0,
        cp: entry.cp ?? 0
      };
      break;
    }
  }

  // ✅ Match Items
  const permanents = fm.awarded_permanent_items ?? [];
  const consumables = fm.awarded_consumable_items ?? [];

  matchedPermanents.push(...permanents.filter(i => i.date === formattedSessionDate));
  matchedConsumables.push(...consumables.filter(i => i.date === formattedSessionDate));
}

if (
  matchedXP === null &&
  matchedCoin === null &&
  matchedPermanents.length === 0 &&
  matchedConsumables.length === 0
) {
  new Notice(`❌ No matching XP, coin, or items for ${formattedSessionDate}`, 5000);
  return;
}

// ✅ Update frontmatter
await app.fileManager.processFrontMatter(sessionFile, (fm) => {
  if (matchedXP !== null) fm.session_xp = matchedXP;
  if (matchedCoin !== null) fm.session_coin = matchedCoin;
  if (matchedPermanents.length > 0) fm.session_items_permanent = matchedPermanents;
  if (matchedConsumables.length > 0) fm.session_items_consumable = matchedConsumables;
});

new Notice(`✅ Session note updated for ${formattedSessionDate}`, 4000);
%>
