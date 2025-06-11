---
#========================================================#
#                     CORE PROPERTIES                    #
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
#                  Ability #1 PROPERTIES                 #
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
#                  Ability #2 PROPERTIES                 #
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
#                  Ability #3 PROPERTIES                 #
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
#                  Ability #4 PROPERTIES                 #
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
#                   WEAPON PROPERTIES                    #
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
#                    ARMOR PROPERTIES                    #
#========================================================#
baseAC: 
dexCap: 
strRequirement: 
checkPenalty: 
speedPenalty: 
armorCategory: 
resist: 
immunity: 
conditionImmunity: 

#========================================================#
#              INTELLIGENT ITEM PROPERTIES               #
#========================================================#
perception:
communication:
skill1:
skill2:
skill3:
skill4:
int:
wis:
cha:
will:

#========================================================#
#                   DATAVIEW PROPERTIES                  #
#========================================================#
weaponBase:
armorBase:
shieldBase:
craftBase: 

---


```dataviewjs
const name = dv.current().aliases;
const level = dv.current().level;
const identify = dv.current().identify;

let identifySection = "";
if (identify) {
  identifySection = `<div class="pf2e-item-identify"><h4>${identify}</h4></div>`;
}

dv.span(`
<div class="pf2e-item">
  <div class="pf2e-item-header">
    <h1>${name}</h1>
    <h2>Item ${level}</h2>
  </div>
  ${identifySection}
</div>
`);

```

> [!infobox|ttl-c txt-c alt-line]+
> # `= this.aliases`
> `VIEW[!\[\[{image}\]\]][text(renderMarkdown)]`

```dataviewjs
const d = dv.current();

// ─── CORE PROPERTIES & TRAITS ─────────────────────────────────
let coreOut = [];
if (d.rarity?.trim()) {
  coreOut.push(
    `<span class="pf2e-rarity ${d.rarity.toLowerCase()}">${d.rarity.toUpperCase()}</span>`
  );
}
let traitList = [];
for (let i = 1; i <= 8; i++) {
  let t = d[`trait0${i}`]?.trim();
  if (t) {
    traitList.push(`<span class="pf2e-blocktrait">[[${t.toLowerCase()}|${t.toUpperCase()}]]</span>`);
  }
}
if (traitList.length) coreOut.push(traitList.join(" "));
if (coreOut.length) dv.paragraph(coreOut.join(" "));

// ─── STATS & PROPERTIES ────────────────────────────────────────
let stats = [];

// Price / Damage / Bulk
let line1 = [];
if (d.value?.toString().trim()) {
  let p = `**Price** ${d.value}` + (d.subvalue ? ` ${d.subvalue}` : "");
  line1.push(p);
}
if (d.dmg1 && d.dmg1Type) {
  let dm = `**Damage** ${d.dmg1} ${d.dmg1Type}` +
           (d.dmg2 && d.dmg2Type ? `, ${d.dmg2} ${d.dmg2Type}` : "");
  line1.push(dm);
}
if (d.weight?.toString().trim()) line1.push(`**Bulk** ${d.weight}`);
if (line1.length) stats.push(line1.join("; "));

// Hands / Range / Reload
let line2 = [];
if (d.hands)   line2.push(`**Hands** ${d.hands}`);
if (d.range)   line2.push(`**Range** ${d.range}`);
if (d.reload)  line2.push(`**Reload** ${d.reload}`);
if (line2.length) stats.push(line2.join("; "));

// Type / Category / Group
let line3 = [];
if (d.weaponType)           line3.push(`**Type** ${d.weaponType}`);
let cats = [d.weaponCategory, d.armorCategory].filter(x => x).join(" – ");
if (cats)                   line3.push(`**Category** ${cats}`);
if (d.group)                line3.push(`**Group** ${d.group}`);
if (line3.length)           stats.push(line3.join("; "));

// Ammo
if (d.ammoType) stats.push(`**Ammo** ${d.ammoType}`);

// Str Requirement
if (d.strRequirement) stats.push(`**Str** ${d.strRequirement}`);

// Base Armor / Weapon
if (d.armorBase || d.weaponBase) {
  let b = [];
  if (d.armorBase)  b.push(`**Base Armor** ${d.armorBase}`);
  if (d.weaponBase) b.push(`**Base Weapon** ${d.weaponBase}`);
  stats.push(b.join("; "));
}

// AC / Dex Cap / Penalties
let arm = [];
if (d.baseAC      != null) arm.push(`**AC** +${d.baseAC}`);
if (d.dexCap      != null) arm.push(`**Dex Cap** +${d.dexCap}`);
if (d.checkPenalty!= null) arm.push(`**Check Penalty** ${d.checkPenalty}`);
if (d.speedPenalty!= null) arm.push(`**Speed Penalty** ${d.speedPenalty}`);
if (arm.length)           stats.push(arm.join("; "));

// Durability (Hardness / HP / BT)
let dur = [];
if (d.hardness  != null) dur.push(`**Hardness** ${d.hardness}`);
if (d.hitpoints != null) dur.push(`**HP** ${d.hitpoints}`);
if (d.break     != null) dur.push(`**BT** ${d.break}`);
if (dur.length)          stats.push(dur.join("; "));

// ─── Usage / Shield / Activate / Craft / License / Invest ─────────────
if (d.usage) stats.push(`**Usage** ${d.usage}`);

// ─── Shield fields in one line ─────────────────────────────────────────
if (d.hardness || d.hp || d.bt) {
  const shieldParts = [];
  if (d.hardness) shieldParts.push(`**Hardness** ${d.hardness}`);
  if (d.hp)       shieldParts.push(`**HP** ${d.hp}`);
  if (d.bt)       shieldParts.push(`**BT** ${d.bt}`);
  stats.push(shieldParts.join('; '));
}

// ─── Activate / Craft / License / Invest ─────────────────────────────────
const rawActivate = d.file.frontmatter.activate;
if (rawActivate?.toString().trim()) {
  stats.push(`**Activate** ${rawActivate}`);
}
if (d.craft)   stats.push(`**Craft** ${d.craft}`);
if (d.license) stats.push(`**License** ${d.license}`);
if (d.invest)  stats.push(`**Invest** ${d.invest}`);

if (stats.length) dv.list(stats);


// ─── INTELLIGENT ITEM BOX ───────────────────────────────────────
const hasIntel =
     !!d.perception?.trim() ||
     !!d.communication?.trim() ||
     !!d.skill1?.trim()    ||
     !!d.skill2?.trim()    ||
     !!d.skill3?.trim()    ||
     !!d.skill4?.trim()    ||
     typeof d.int === "number" ||
     typeof d.wis === "number" ||
     typeof d.cha === "number" ||
     !!d.will?.trim();

if (hasIntel) {
  // Create the box container
  const box = document.createElement("div");
  box.classList.add("pf2e-intelligent-item");

  // 1) Header as an H2
  const h2 = document.createElement("h2");
  h2.textContent = "Intelligent Item";
  box.appendChild(h2);

  // Helper to build each line
  function mkLine(pairs) {
    const row = document.createElement("div");
    pairs.forEach((x, i) => {
      const s = document.createElement("strong");
      s.textContent = x.label + " ";
      row.appendChild(s);
      row.appendChild(document.createTextNode(x.value));
      if (i < pairs.length - 1) {
        row.appendChild(document.createTextNode("; "));
      }
    });
    return row;
  }

  // 2) Perception / Communication
  let L1 = [];
  if (d.perception?.trim())    L1.push({ label: "Perception",    value: d.perception.trim() });
  if (d.communication?.trim()) L1.push({ label: "Communication", value: d.communication.trim() });
  if (L1.length)               box.appendChild(mkLine(L1));

  // 3) Skills
  let SK = [d.skill1, d.skill2, d.skill3, d.skill4]
             .filter(x => x?.trim())
             .map(x => x.trim());
  if (SK.length) box.appendChild(mkLine([{ label: "Skills", value: SK.join("; ") }]));

  // 4) INT / WIS / CHA
  let MS = [];
  if (typeof d.int === "number") MS.push({ label: "INT", value: d.int });
  if (typeof d.wis === "number") MS.push({ label: "WIS", value: d.wis });
  if (typeof d.cha === "number") MS.push({ label: "CHA", value: d.cha });
  if (MS.length) box.appendChild(mkLine(MS));

  // 5) Will
  if (d.will?.trim()) {
    box.appendChild(mkLine([{ label: "Will", value: d.will.trim() }]));
  }

  // 6) Inject into the document (no bullet)
  dv.paragraph("");
  dv.el("div", box, {});
}

// ─── DESCRIPTION ────────────────────────────────────────────────
if (d.description?.trim()) {
  dv.paragraph(d.description);
}

// ─── ABILITIES #1–4 ────────────────────────────────────────────
function getIcon(ae) {
  if (!ae) return "";
  let m = ae.toString().trim().toLowerCase();
  return {
    "1":"`pf2:1`","2":"`pf2:2`","3":"`pf2:3`","0":"`pf2:0`",
    "r":"`pf2:r`","reaction":"`pf2:r`",
    "f":"`pf2:f`","free":"`pf2:f`"
  }[m]||"";
}

function createPowerBlock(
  title, action, type, frequency, activate, requirement, trigger, duration, mechanics
) {
  let icon = getIcon(action);
  let block = `### **${title}** ${icon} ${type || ""}\n\n`;

  if (frequency?.toString().trim())
    block += `**Frequency:** ${frequency}\n\n`;

  if (activate?.toString().trim())
    block += `**Activate:** ${activate}\n\n`;

  if (requirement?.toString().trim())
    block += `**Requirements:** ${requirement}\n\n`;

  if (trigger?.toString().trim())
    block += `**Trigger:** ${trigger}\n\n`;

  if (duration?.toString().trim())
    block += `**Duration:** ${duration}\n\n`;

  block += `${mechanics || ""}\n`;
  return block;
}

let abilities = [];
for (let i = 1; i <= 4; i++) {
  let title = d[`powerTitle${i}`]?.trim();
  if (!title) continue;
  if (i > 1) abilities.push("<hr class='pf2e-divider'>");
  abilities.push(
    createPowerBlock(
      d[`powerTitle${i}`],
      d[`actionEconomy${i}`],
      d[`type${i}`],
      d[`frequency${i}`],
      d.file.frontmatter[`activate${i}`],
      d[`requirement${i}`],
      d[`trigger${i}`],
      d.file.frontmatter[`duration${i}`],
      d[`mechanics${i}`]
    )
  );
}

if (abilities.length) {
  dv.paragraph(
    `<div class="pf2e-ability-textbox">\n\n` +
    abilities.join("\n\n") +
    `\n\n</div>`
  );
}

// ─── DESTRUCTION & SOURCE ───────────────────────────────────────
if (d.destruction?.trim()) {
  dv.paragraph(`**Destruction:** ${d.destruction.trim()}`);
}
if (d.source?.trim() || d.pg?.toString().trim()) {
  dv.paragraph(
    `*Source: ${d.source || "Unknown"}${d.pg ? `, pg. ${d.pg}` : ""}*`
  );
}

// ─── MAGIC ITEM PROPERTIES ───────────────────────────────────────
let mg = [];
if (d.weaponBase?.trim()) mg.push(`**Weapon Base** ${d.weaponBase}`);
if (d.armorBase?.trim())  mg.push(`**Armor Base** ${d.armorBase}`);
if (d.shieldBase?.trim()) mg.push(`**Shield Base** ${d.shieldBase}`);
if (mg.length) dv.list(mg);

```

