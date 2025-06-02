---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: pf2e-item, h-line
name: ""
aliases:
source: ""
pg: ""
rarity: ""
trait01: ""
trait02: ""
trait03:
trait04:
image: zz-Attachments/assets/imageplaceholder.png
level: 
group: 
weight: 
value: ""
subvalue: ""
invest:
usage: ""
craft: ""
license: ""
identify: ""
description: ""

#========================================================#
#                  Ability #1 PROPERTIES                 #
#========================================================#
powerTitle: "Effect"
actionEconomy: 
type: 
frequency: 
requirement:
activation:
trigger:
mechanics: ""

#========================================================#
#                  Ability #2 PROPERTIES                 #
#========================================================#
powerTitle2: ""
actionEconomy2: 
type2: 
frequency2: 
requirement2:
activation2:
trigger2: 
mechanics2: "**Secondary Effect** "

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
modAC: 
dexCap: 
strRequirement: 
checkPenalty: 
speedPenalty: 
armorCategory: 
resist: 
immunity: 
conditionImmunity: 

#========================================================#
#                 MAGIC ITEM PROPERTIES                  #
#========================================================#
weaponBase: 
armorBase: 
shieldBase:

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
// Get rarity and traits from YAML
let rarity = dv.current().rarity;
let traits = [];

for (let i = 1; i <= 8; i++) {
  let traitValue = dv.current()[`trait0${i}`];
  if (traitValue) {
    traits.push(traitValue);
  }
}

let output = "";
if (rarity) {
  let rarityClass = rarity.toLowerCase();
  let rarityLabel = rarity.toUpperCase();
  output += `<span class="pf2e-rarity ${rarityClass}">${rarityLabel}</span>`;
}

traits.forEach(t => {
  const traitLink = `[[${t.toLowerCase()}|${t.toUpperCase()}]]`;
  output += `<span class="pf2e-blocktrait">${traitLink}</span>`;
});

dv.paragraph(output);

```

```dataviewjs
const data = dv.current();
let output = [];

// =========================
// Line 1: Price; Damage; Bulk
// =========================
let line1 = [];

if (data.value) {
  let price = `**Price** ${data.value}`;
  if (data.subvalue) price += ` ${data.subvalue}`;
  line1.push(price);
}

if (data.dmg1 && data.dmg1Type) {
  let dmg = `**Damage** ${data.dmg1} ${data.dmg1Type}`;
  if (data.dmg2 && data.dmg2Type) dmg += `, ${data.dmg2} ${data.dmg2Type}`;
  line1.push(dmg);
}

if (data.weight) line1.push(`**Bulk** ${data.weight}`);

if (line1.length > 0) output.push(line1.join("; "));

// =========================
// Line 2: Hands; Range; Reload
// =========================
let line2 = [];

if (data.hands) line2.push(`**Hands** ${data.hands}`);
if (data.range) line2.push(`**Range** ${data.range}`);
if (data.reload) line2.push(`**Reload** ${data.reload}`);

if (line2.length > 0) output.push(line2.join("; "));

// =========================
// Line 3: Type; Category; Group
// =========================
let line3 = [];

if (data.weaponType) line3.push(`**Type** ${data.weaponType}`);

let categoryParts = [];
if (data.weaponCategory) categoryParts.push(data.weaponCategory);
if (data.armorCategory) categoryParts.push(data.armorCategory);
if (categoryParts.length > 0) line3.push(`**Category** ${categoryParts.join(" – ")}`);

if (data.group) line3.push(`**Group** ${data.group}`);

if (line3.length > 0) output.push(line3.join("; "));

// =========================
// Ammo Type
// =========================
if (data.ammoType) output.push(`**Ammo** ${data.ammoType}`);

// =========================
// Remaining Individual Stats
// =========================
if (data.strRequirement) output.push(`**Str** ${data.strRequirement}`);

if (data.armorBase || data.weaponBase) {
  let base = [];
  if (data.armorBase) base.push(`**Base Armor** ${data.armorBase}`);
  if (data.weaponBase) base.push(`**Base Weapon** ${data.weaponBase}`);
  output.push(base.join("; "));
}

let armorStats = [];
if (data.baseAC != null) armorStats.push(`**AC** +${data.baseAC}`);
if (data.dexCap != null) armorStats.push(`**Dex Cap** +${data.dexCap}`);
if (data.checkPenalty != null) armorStats.push(`**Check Penalty** ${data.checkPenalty}`);
if (data.speedPenalty != null) armorStats.push(`**Speed Penalty** ${data.speedPenalty}`);
if (armorStats.length > 0) output.push(armorStats.join("; "));

if (data.usage) output.push(`**Usage** ${data.usage}`);
if (data.craft) output.push(`**Craft** ${data.craft}`);
if (data.license) output.push(`**License** ${data.license}`);
if (data.invest) output.push(`**Invest** ${data.invest}`);

// Render final stat block
dv.list(output);

```

`= this.description`

---

```dataviewjs
const data = dv.current();

// Only display if there's a primary, secondary or tertiary power
const entry = dv.current();

if (entry.powerTitle || entry.powerTitle2 || entry.powerTitle3) {
  let output = "";

  function getActionIconCode(actionEconomy) {
    if (!actionEconomy) return "";
    const trimmed = actionEconomy.toString().trim().toLowerCase();
    switch (trimmed) {
      case "1": return "`pf2:1`";
      case "2": return "`pf2:2`";
      case "3": return "`pf2:3`";
      case "0": return "`pf2:0`";
      case "r":
      case "reaction": return "`pf2:r`";
      case "f":
      case "free": return "`pf2:f`";
      default: return "";
    }
  }

  function createPowerBlock(title, action, type, frequency, activation, requirement, trigger, mechanics) {
    const icon = getActionIconCode(action);
    let block = `### **${title}** ${icon} ${type ?? ""}\n\n`;

    if (frequency?.trim()) block += `**Frequency:** ${frequency}\n\n`;
    if (activation?.trim()) block += `**Activation:** ${activation}\n\n`;
    if (requirement?.trim()) block += `**Requirements:** ${requirement}\n\n`;
    if (trigger?.trim()) block += `**Trigger:** ${trigger}\n\n`;

    block += `${mechanics ?? ""}\n`;
    return block;
  }

  output += "<div class='pf2e-ability-textbox'>\n\n";

  if (entry.powerTitle) {
    output += createPowerBlock(
      entry.powerTitle,
      entry.actionEconomy,
      entry.type,
      entry.frequency,
      entry.activation,
      entry.requirement,
      entry.trigger,
      entry.mechanics
    );
  }

  if (entry.powerTitle2) {
    if (entry.powerTitle) output += "\n<hr class='pf2e-divider'>\n\n";
    output += createPowerBlock(
      entry.powerTitle2,
      entry.actionEconomy2,
      entry.type2,
      entry.frequency2,
      entry.activation2,
      entry.requirement2,
      entry.trigger2,
      entry.mechanics2
    );
  }

  if (entry.powerTitle3) {
    if (entry.powerTitle || entry.powerTitle2) output += "\n<hr class='pf2e-divider'>\n\n";
    output += createPowerBlock(
      entry.powerTitle3,
      entry.actionEconomy3,
      entry.type3,
      entry.frequency3,
      entry.activation3,
      entry.requirement3,
      entry.trigger3,
      entry.mechanics3
    );
  }

  output += "\n</div>\n";
  dv.paragraph(output);
}

```
