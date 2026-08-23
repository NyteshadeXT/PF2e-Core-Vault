---
#========================================================#

# CORE PROPERTIES

#========================================================#  
cssclass: pf2e-items, h-line  
name: ""  
aliases:  
source: ""  
pg: ""  
rarity: ""  
trait01: ""  
trait02: ""  
trait03:  
trait04:  
trait05:  
trait06:  
trait07:  
trait08:  
image: zz-Attachments/assets/imageplaceholder.png  
level:  
group:  
weight:  
value: ""  
subvalue: ""  
invest:  
usage: ""  
license: ""  
identify: ""  
description: ""  
activate: ""  
craft:  
destruction:

#========================================================#

# Ability #1 PROPERTIES

#========================================================#  
powerTitle1: "Effect"  
actionEconomy1:  
type1:  
frequency1:  
requirement1:  
trigger1:  
activate1:  
duration1:  
mechanics1: ""

#========================================================#

# Ability #2 PROPERTIES

#========================================================#  
powerTitle2: ""  
actionEconomy2:  
type2:  
frequency2:  
requirement2:  
trigger2:  
activate2:  
duration2:  
mechanics2: "**Secondary Effect** "

#========================================================#

# Ability #3 PROPERTIES

#========================================================#  
powerTitle3: ""  
actionEconomy3:  
type3:  
frequency3:  
requirement3:  
trigger3:  
activate3:  
duration3:  
mechanics3: "**Secondary Effect** "

#========================================================#

# Ability #4 PROPERTIES

#========================================================#  
powerTitle4: ""  
actionEconomy4:  
type4:  
frequency4:  
requirement4:  
trigger4:  
activate4:  
duration4:  
mechanics4: "**Secondary Effect** "

#========================================================#

# WEAPON PROPERTIES

#========================================================#  
range:  
ammoType:  
reload:  
damage:  
dmg1:  
dmg1Type:  
dmg2:  
dmg2Type:  
weaponType:  
weaponCategory:

#========================================================#

# ARMOR/SHIELD PROPERTIES

#========================================================#  
baseAC:  
modAC:  
dexCap:  
strRequirement:  
checkPenalty:  
speedPenalty:  
armorCategory:  
resist:  
immunity:  
conditionImmunity:  
weaknesses:  
hardness:  
hp:  
bt:

#========================================================#

# INTELLIGENT ITEM PROPERTIES

#========================================================#  
perception:  
communication:  
skill1:  
skill2:  
skill3:  
skill4:  
skill5:  
int:  
wis:  
cha:  
will:

#========================================================#

# OTHER ITEM PROPERTIES

#========================================================#  
fort:  
reflex:  
speed:

#========================================================#

# ITEM BASE PROPERTIES

#========================================================#  
weaponBase:  
armorBase:  
shieldBase:  
craftBase:
---

```js-engine
// JS Engine version: no Dataview / dv dependency.
const file = context.file;
const d = context.metadata?.frontmatter
  ?? (file ? app.metadataCache.getFileCache(file)?.frontmatter : undefined)
  ?? {};

const firstValue = (value) => Array.isArray(value) ? value[0] : value;
const displayName = firstValue(d.aliases) || d.name || file?.basename || "Unnamed Item";
const level = d.level ?? 0;
const rarity = d.rarity ?? "";

const traitFields = Array.from({ length: 8 }, (_, i) => d[`trait0${i + 1}`])
  .filter(Boolean)
  .map(t => t.toString().trim());

const identifySkills = [];
const lowerTraits = traitFields.map(t => t.toLowerCase());

if (lowerTraits.includes("arcane")) identifySkills.push("Arcana");
if (lowerTraits.includes("nature")) identifySkills.push("Primal");
if (lowerTraits.includes("occult")) identifySkills.push("Occultism");
if (lowerTraits.includes("divine")) identifySkills.push("Religion");

const rarityMap = {
  Common: 0,
  Uncommon: 2,
  Rare: 5,
  Unique: 10
};

const rarityModifier = rarityMap[rarity] ?? rarityMap[rarity?.toString()] ?? 0;
const numericLevel = Number(level) || 0;
const identifyDC = Math.round(
  (numericLevel < 20
    ? numericLevel + 14 + numericLevel / 3
    : numericLevel * 2) + rarityModifier
);

// JS Engine lets us render directly into its container. When doing that,
// the block should return nothing/undefined.
container.empty();

const item = container.createDiv({ cls: "pf2e-item" });
const header = item.createDiv({ cls: "pf2e-item-header" });
header.createEl("h1", { text: displayName.toString() });
header.createEl("h2", { text: `Item ${level}` });

const identify = item.createDiv({ cls: "pf2e-item-identify" });
identify.createEl("h4", {
  text: `Identify Magic: ${identifySkills.length ? identifySkills.join(", ") : "Any"}; DC ${identifyDC}`
});
```

```js-engine
// JS Engine replacement for the former Dataview inline infobox expressions.
const file = context.file;
const d = context.metadata?.frontmatter
  ?? (file ? app.metadataCache.getFileCache(file)?.frontmatter : undefined)
  ?? {};

const firstValue = (value) => Array.isArray(value) ? value[0] : value;
const displayName = firstValue(d.aliases) || d.name || file?.basename || "Unnamed Item";
const image = d.image?.toString().trim();

let infobox = `> [!infobox|ttl-c txt-c alt-line]+
> # ${displayName}`;
if (image) infobox += `
> ![[${image}|300]]`;

return engine.markdown.create(infobox);
```

```js-engine
// JS Engine version: reads frontmatter through Obsidian and renders through
// Obsidian's MarkdownRenderer instead of Dataview's dv.* rendering helpers.
const file = context.file;
const d = context.metadata?.frontmatter
  ?? (file ? app.metadataCache.getFileCache(file)?.frontmatter : undefined)
  ?? {};

const sourcePath = file?.path ?? "";
const { MarkdownRenderer } = obsidian;

container.empty();

async function renderMarkdown(markdown, parent = container) {
  if (!markdown?.toString().trim()) return;
  await MarkdownRenderer.render(
    app,
    markdown.toString(),
    parent,
    sourcePath,
    component
  );
}

const hasText = (value) => value !== undefined && value !== null && value.toString().trim() !== "";
const clean = (value) => hasText(value) ? value.toString().trim() : "";

// ─── CORE PROPERTIES & TRAITS ─────────────────────────────────
let coreOut = [];
if (hasText(d.rarity)) {
  const rarity = clean(d.rarity);
  coreOut.push(
    `<span class="pf2e-rarity ${rarity.toLowerCase()}">${rarity.toUpperCase()}</span>`
  );
}

let traitList = [];
for (let i = 1; i <= 8; i++) {
  const t = clean(d[`trait0${i}`]);
  if (t) {
    traitList.push(
      `<span class="pf2e-blocktrait">[[${t.toLowerCase()}|${t.toUpperCase()}]]</span>`
    );
  }
}
if (traitList.length) coreOut.push(traitList.join(" "));
if (coreOut.length) await renderMarkdown(coreOut.join(" "));

// ─── STATS & PROPERTIES ────────────────────────────────────────
let stats = [];

// Price / Damage / Bulk
let line1 = [];
if (hasText(d.value)) {
  let p = `**Price** ${d.value}` + (hasText(d.subvalue) ? ` ${d.subvalue}` : "");
  line1.push(p);
}
if (hasText(d.dmg1) && hasText(d.dmg1Type)) {
  let dm = `**Damage** ${d.dmg1} ${d.dmg1Type}` +
    (hasText(d.dmg2) && hasText(d.dmg2Type) ? `, ${d.dmg2} ${d.dmg2Type}` : "");
  line1.push(dm);
}
if (hasText(d.weight)) line1.push(`**Bulk** ${d.weight}`);
if (line1.length) stats.push(line1.join("; "));

// Hands / Range / Reload
let line2 = [];
if (hasText(d.hands)) line2.push(`**Hands** ${d.hands}`);
if (hasText(d.range)) line2.push(`**Range** ${d.range}`);
if (hasText(d.reload)) line2.push(`**Reload** ${d.reload}`);
if (line2.length) stats.push(line2.join("; "));

// Type / Category / Group
let line3 = [];
if (hasText(d.weaponType)) line3.push(`**Type** ${d.weaponType}`);
const cats = [d.weaponCategory, d.armorCategory].filter(hasText).join(" – ");
if (cats) line3.push(`**Category** ${cats}`);
if (hasText(d.group)) line3.push(`**Group** ${d.group}`);
if (line3.length) stats.push(line3.join("; "));

if (hasText(d.ammoType)) stats.push(`**Ammo** ${d.ammoType}`);
if (hasText(d.strRequirement)) stats.push(`**Str** ${d.strRequirement}`);

// Base Armor / Weapon
if (hasText(d.armorBase) || hasText(d.weaponBase)) {
  let b = [];
  if (hasText(d.armorBase)) b.push(`**Base Armor** ${d.armorBase}`);
  if (hasText(d.weaponBase)) b.push(`**Base Weapon** ${d.weaponBase}`);
  stats.push(b.join("; "));
}

// AC / Dex Cap / Penalties
let arm = [];
if (d.baseAC != null || d.modAC != null) {
  const baseAC = Number(d.baseAC ?? 0) || 0;
  const modAC = Number(d.modAC ?? 0) || 0;
  const totalAC = baseAC + modAC;
  arm.push(`**AC** +${totalAC} (base ${baseAC}, mod ${modAC})`);
}
if (d.dexCap != null) arm.push(`**Dex Cap** +${d.dexCap}`);
if (d.checkPenalty != null) arm.push(`**Check Penalty** ${d.checkPenalty}`);
if (d.speedPenalty != null) arm.push(`**Speed Penalty** ${d.speedPenalty}`);
if (arm.length) stats.push(arm.join("; "));

// Resistances / Immunities / Condition Immunities / Weaknesses
{
  const parts = [];
  if (hasText(d.resist)) parts.push(`**Resistances** ${clean(d.resist)}`);
  if (hasText(d.immunity)) parts.push(`**Immunities** ${clean(d.immunity)}`);
  if (hasText(d.conditionImmunity)) parts.push(`**Condition Immunities** ${clean(d.conditionImmunity)}`);
  if (hasText(d.weaknesses)) parts.push(`**Weaknesses** ${clean(d.weaknesses)}`);
  if (parts.length) stats.push(parts.join("; "));
}

if (hasText(d.usage)) stats.push(`**Usage** ${d.usage}`);

// Shield fields
if (hasText(d.hardness) || hasText(d.hp) || hasText(d.bt)) {
  const shieldParts = [];
  if (hasText(d.hardness)) shieldParts.push(`**Hardness** ${d.hardness}`);
  if (hasText(d.hp)) shieldParts.push(`**HP** ${d.hp}`);
  if (hasText(d.bt)) shieldParts.push(`**BT** ${d.bt}`);
  stats.push(shieldParts.join("; "));
}

// Fort / Reflex / Speed
{
  const otherParts = [];
  const fmtPlus = (n) => {
    if (!hasText(n)) return null;
    const s = n.toString().trim();
    return s.startsWith("+") || s.startsWith("-") ? s : `+${s}`;
  };

  const fortStr = fmtPlus(d.fort);
  const reflexStr = fmtPlus(d.reflex);

  if (fortStr) otherParts.push(`**Fort** ${fortStr}`);
  if (reflexStr) otherParts.push(`**Reflex** ${reflexStr}`);
  if (hasText(d.speed)) otherParts.push(`**Speed** ${clean(d.speed)}`);

  if (otherParts.length) stats.push(otherParts.join("; "));
}

// Activate / Craft / License / Invest
if (hasText(d.activate)) stats.push(`**Activate** ${d.activate}`);
if (hasText(d.craft)) stats.push(`**Craft** ${d.craft}`);
if (hasText(d.license)) stats.push(`**License** ${d.license}`);
if (hasText(d.invest)) stats.push(`**Invest** ${d.invest}`);

if (stats.length) {
  await renderMarkdown(stats.map(x => `- ${x}`).join("\n"));
}

// ─── INTELLIGENT ITEM BOX ─────────────────────────────────────
const skills = [d.skill1, d.skill2, d.skill3, d.skill4, d.skill5, d.skill6]
  .filter(hasText)
  .map(clean);

const hasIntel =
  hasText(d.perception) || hasText(d.communication) || skills.length > 0 ||
  d.int != null || d.wis != null || d.cha != null || hasText(d.will);

if (hasIntel) {
  const box = container.createDiv({ cls: "pf2e-intelligent-item" });
  box.createEl("h2", { text: "Intelligent Item" });

  function addLine(pairs) {
    if (!pairs.length) return;
    const row = box.createDiv();
    pairs.forEach((x, i) => {
      row.createEl("strong", { text: `${x.label} ` });
      row.appendText(x.value.toString());
      if (i < pairs.length - 1) row.appendText("; ");
    });
  }

  const perceptionLine = [];
  if (hasText(d.perception)) perceptionLine.push({ label: "Perception", value: clean(d.perception) });
  if (hasText(d.communication)) perceptionLine.push({ label: "Communication", value: clean(d.communication) });
  addLine(perceptionLine);

  if (skills.length) addLine([{ label: "Skills", value: skills.join("; ") }]);

  const mentalStats = [];
  if (d.int != null && hasText(d.int)) mentalStats.push({ label: "INT", value: d.int });
  if (d.wis != null && hasText(d.wis)) mentalStats.push({ label: "WIS", value: d.wis });
  if (d.cha != null && hasText(d.cha)) mentalStats.push({ label: "CHA", value: d.cha });
  addLine(mentalStats);

  if (hasText(d.will)) addLine([{ label: "Will", value: clean(d.will) }]);
}

// ─── DESCRIPTION ───────────────────────────────────────────────
if (hasText(d.description)) await renderMarkdown(d.description);

// ─── DRAWBACK ──────────────────────────────────────────────────
if (hasText(d.drawback)) await renderMarkdown(`**Drawback:** ${d.drawback}`);

// ─── CLEAR INFOBOX FLOAT ────────────────────────────────────────
// The infobox callout floats on the right. Let the item's descriptive text
// wrap beside it, then force all boxed abilities/source material below it so
// short item entries cannot overlap the image.
const clearInfobox = container.createDiv({ cls: "pf2e-clear-infobox" });
clearInfobox.style.clear = "both";
clearInfobox.style.width = "100%";
clearInfobox.style.height = "0";

// ─── ABILITIES #1–4 ───────────────────────────────────────────
function getActionDisplay(ae) {
  if (!hasText(ae)) return "";

  const val = ae.toString().trim().toLowerCase();
  const map = {
    "1": "`pf2:1`",
    "2": "`pf2:2`",
    "3": "`pf2:3`",
    "0": "`pf2:0`",
    "r": "`pf2:r`",
    "reaction": "`pf2:r`",
    "f": "`pf2:f`",
    "free": "`pf2:f`",
    "free action": "`pf2:f`",
    "pf2:1": "`pf2:1`",
    "pf2:2": "`pf2:2`",
    "pf2:3": "`pf2:3`",
    "pf2:r": "`pf2:r`",
    "pf2:f": "`pf2:f`"
  };

  return map[val] || `<span class="pf2e-time">${ae}</span>`;
}

function createPowerBlock(title, action, type, frequency, activate, requirement, trigger, duration, mechanics) {
  const actionDisplay = getActionDisplay(action);
  const headerParts = [`### **${title}**`];

  if (actionDisplay) headerParts.push(actionDisplay);
  if (hasText(type)) headerParts.push(clean(type));

  let block = headerParts.join(" ") + "\n\n";

  if (hasText(frequency)) block += `**Frequency:** ${frequency}\n\n`;
  if (hasText(activate)) block += `**Activate:** ${activate}\n\n`;
  if (hasText(requirement)) block += `**Requirements:** ${requirement}\n\n`;
  if (hasText(trigger)) block += `**Trigger:** ${trigger}\n\n`;
  if (hasText(duration)) block += `**Duration:** ${duration}\n\n`;
  block += `${mechanics || ""}\n`;

  return block;
}

let abilities = [];
for (let i = 1; i <= 4; i++) {
  const title = clean(d[`powerTitle${i}`]);
  if (!title) continue;

  if (abilities.length) abilities.push("<hr class='pf2e-divider'>");
  abilities.push(
    createPowerBlock(
      d[`powerTitle${i}`],
      d[`actionEconomy${i}`],
      d[`type${i}`],
      d[`frequency${i}`],
      d[`activate${i}`],
      d[`requirement${i}`],
      d[`trigger${i}`],
      d[`duration${i}`],
      d[`mechanics${i}`]
    )
  );
}

if (abilities.length) {
  const abilityBox = container.createDiv({ cls: "pf2e-ability-textbox" });
  await renderMarkdown(abilities.join("\n\n"), abilityBox);
}

// ─── DESTRUCTION & SOURCE ──────────────────────────────────────
if (hasText(d.destruction)) await renderMarkdown(`**Destruction:** ${clean(d.destruction)}`);
if (hasText(d.source) || hasText(d.pg)) {
  await renderMarkdown(`*Source: ${hasText(d.source) ? d.source : "Unknown"}${hasText(d.pg) ? `, pg. ${d.pg}` : ""}*`);
}

// ─── MAGIC ITEM PROPERTIES ─────────────────────────────────────
let mg = [];
if (hasText(d.weaponBase)) mg.push(`**Weapon Base** ${d.weaponBase}`);
if (hasText(d.armorBase)) mg.push(`**Armor Base** ${d.armorBase}`);
if (hasText(d.shieldBase)) mg.push(`**Shield Base** ${d.shieldBase}`);
if (mg.length) await renderMarkdown(mg.map(x => `- ${x}`).join("\n"));
```