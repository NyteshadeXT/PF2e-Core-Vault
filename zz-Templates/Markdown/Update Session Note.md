<%*(async () => {
  // Locate session file and its frontmatter
  let sessionFile;
  let sessionFront;
  try {
    sessionFile = tp.file.find_tfile(tp.file.path(true));
    sessionFront = app.metadataCache.getFileCache(sessionFile)?.frontmatter ?? {};
  } catch (err) {
    new Notice("Error locating session file: " + err.message, 3000);
    return;
  }

  // Ensure sessiondate exists
  const sessionDateRaw = sessionFront.sessiondate;
  if (!sessionDateRaw) {
    new Notice("No sessiondate found in session note YAML.", 3000);
    return;
  }
  // Use ISO format directly
  const formattedSessionDate = sessionDateRaw;

  // Gather all campaign files in target folder
  const targetFolder = "4-Campaign/Age of Worms";
  let folderFiles = [];
  try {
    folderFiles = app.vault
      .getMarkdownFiles()
      .filter(f => f.path.startsWith(targetFolder));
  } catch (err) {
    new Notice("Error scanning folder: " + err.message, 3000);
    return;
  }

  // Initialize matched data
  let matchedXP = null;
  let matchedCoin = null;
  const matchedPermanents = [];
  const matchedConsumables = [];

  // Iterate and extract
  for (const file of folderFiles) {
    let fm;
    try {
      fm = app.metadataCache.getFileCache(file)?.frontmatter ?? {};
    } catch (e) {
      console.error("Frontmatter read error for " + file.path, e);
      continue;
    }
    // XP
    try {
      (fm.completed_xp_log ?? []).forEach(entry => {
        if (entry.date === formattedSessionDate) {
          matchedXP = entry.xp;
        }
      });
    } catch (e) {
      console.error("XP parse error in " + file.path, e);
    }
    // Coin
    try {
      (fm.awarded_coin ?? []).forEach(entry => {
        if (entry.date === formattedSessionDate && matchedCoin === null) {
          matchedCoin = {
            pp: entry.pp ?? 0,
            gp: entry.gp ?? 0,
            sp: entry.sp ?? 0,
            cp: entry.cp ?? 0
          };
        }
      });
    } catch (e) {
      console.error("Coin parse error in " + file.path, e);
    }
    // Items
    try {
      (fm.awarded_permanent_items ?? [])
        .filter(i => i.date === formattedSessionDate)
        .forEach(i => matchedPermanents.push(i));
      (fm.awarded_consumable_items ?? [])
        .filter(i => i.date === formattedSessionDate)
        .forEach(i => matchedConsumables.push(i));
    } catch (e) {
      console.error("Item parse error in " + file.path, e);
    }
  }

  // Nothing found?
  if (
    matchedXP === null &&
    matchedCoin === null &&
    matchedPermanents.length === 0 &&
    matchedConsumables.length === 0
  ) {
    new Notice(`❌ No matching XP, coin, or items for ${formattedSessionDate}`);
    return;
  }

  // Write back to session frontmatter
  try {
    await app.fileManager.processFrontMatter(sessionFile, fm => {
      if (matchedXP !== null) fm.session_xp = matchedXP;
      if (matchedCoin !== null) fm.session_coin = matchedCoin;
      if (matchedPermanents.length) fm.session_items_permanent = matchedPermanents;
      if (matchedConsumables.length) fm.session_items_consumable = matchedConsumables;
    });
    new Notice(`✅ Session note updated for ${formattedSessionDate}`, 4000);
  } catch (err) {
    new Notice("Error writing session frontmatter: " + err.message, 3000);
  }
})();
%>
