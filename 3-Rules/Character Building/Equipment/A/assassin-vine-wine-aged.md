---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "assassin-vine-wine-aged"
aliases: "Assassin Vine Wine (Aged)"
source: "Pathfinder Treasure Vault"
pg: "47"
rarity: ""
trait01: "alchemical"
trait02: "consumable"
trait03: "elixir"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 12
weight: L
value: "350"
subvalue: "gp"
invest:
usage: "held in one hand"
license: "ORC"
identify:
description: "Crafting wine from assassin vine berries is a dangerous process, but the resulting ruby-red drink is rich and heady. Alchemical reagents added during fermentation concentrate the vine's connection to its environment and impart them onto the imbiber. "
powerTitle: "Effect"
actionEconomy: 1
type: ([[interact]])
frequency:
trigger:
mechanics: "For 1 minute after drinking a glass of assassin vine wine, you have tremorsense at a range of 30 feet. Assassin vine wine that has been aged for several years—or artificially aged with alchemy—develops both a greater complexity of flavor and a stronger connection to an assassin vine's bond with nature. When you drink the wine, vegetation in a 20-foot emanation around you begins to writhe, becoming difficult terrain until the start of your next turn."
powerTitle2:
actionEconomy2:
type2:
frequency2:
trigger2:
mechanics2: "**Secondary Effect** "
craft:

#========================================================#
#                   WEAPON PROPERTIES                    #
#========================================================#
range: 
ammoType:
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

// Strength Requirement and Bulk
if (data.strRequirement != null || data.weight != null) {
  let line = "";
  if (data.strRequirement != null) line += "**Str** " + data.strRequirement;
  if (data.weight != null) line += (line ? "; " : "") + "**Bulk** " + data.weight;
  output.push(line);
}

// Base Armor and Base Weapon, after Bulk
if (data.armorBase != null || data.weaponBase != null) {
  let line = "";
  if (data.armorBase != null) line += "**Base Armor** " + data.armorBase;
  if (data.weaponBase != null) line += (line ? "; " : "") + "**Base Weapon** " + data.weaponBase;
  output.push(line);
}

// Category (Weapon Category and Armor Category) and Weapon Type on the same line
if (data.weaponCategory || data.armorCategory || data.weaponType || data.group) {
  let parts = [];

  // Build the category string
  let categoryParts = [];
  if (data.weaponCategory) categoryParts.push(data.weaponCategory);
  if (data.armorCategory) categoryParts.push(data.armorCategory);
  if (categoryParts.length > 0) {
    parts.push("**Category** " + categoryParts.join(" – "));
  }

  // Add Type
  if (data.weaponType) {
    parts.push("**Type** " + data.weaponType);
  }

  // Add Group
  if (data.group) {
    parts.push("**Group** " + data.group);
  }

  // Push combined line
  output.push(parts.join("; "));
}

// Damage
if (data.dmg1 != null && data.dmg1Type != null) {
  let line = "**Damage** " + data.dmg1 + " " + data.dmg1Type;
  if (data.dmg2 != null && data.dmg2Type != null) {
    line += ", " + data.dmg2 + " " + data.dmg2Type;
  }
  output.push(line);
}

// Range and Ammo Type
if (data.range != null || data.ammoType != null) {
  let line = "";
  if (data.range != null) line += "**Range** " + data.range;
  if (data.ammoType != null) line += (line ? "; " : "") + "**Ammo** " + data.ammoType;
  output.push(line);
}

// Armor Stats
if (data.baseAC != null || data.dexCap != null || data.checkPenalty != null || data.speedPenalty != null) {
  let line = "";
  if (data.baseAC != null) line += "**AC** +" + data.baseAC;
  if (data.dexCap != null) line += (line ? "; " : "") + "**Dex Cap** +" + data.dexCap;
  if (data.checkPenalty != null) line += (line ? "; " : "") + "**Check Penalty** " + data.checkPenalty;
  if (data.speedPenalty != null) line += (line ? "; " : "") + "**Speed Penalty** " + data.speedPenalty;
  output.push(line);
}

// Value (Price)
if (data.value != null) {
  let line = "**Price** " + data.value;
  if (data.subvalue != null) line += " " + data.subvalue;
  output.push(line);
}

// Usage
if (data.usage != null) output.push("**Usage** " + data.usage);

// Craft
if (data.craft != null) output.push("**Craft** " + data.craft);

// License
if (data.license != null) output.push("**License** " + data.license);

// Investment (formerly reqAttune)
if (data.invest != null) output.push("**Invest** " + data.invest);

// Output everything as a Markdown list
dv.list(output);

```

`= this.description`

---

```dataviewjs
const data = dv.current();

// Only display if there's a primary or secondary power
if (data.powerTitle || data.powerTitle2) {
  let output = "";

  function getActionIconCode(actionEconomy) {
    if (!actionEconomy) return "";

    const trimmed = actionEconomy.toString().trim().toLowerCase();

    switch (trimmed) {
      case "1":
        return "`pf2:1`";
      case "2":
        return "`pf2:2`";
      case "3":
        return "`pf2:3`";
      case "0":
        return "`pf2:0`";
      case "r":
      case "reaction":
        return "`pf2:r`";
      case "f":
      case "free":
        return "`pf2:f`";
      default:
        return "";
    }
  }

function createPowerBlock(powerTitle, actionEconomy, type, frequency, activation, requirement, trigger, mechanics) {
  const actionEconomyOutput = getActionIconCode(actionEconomy);

  const sectionLines = [];

  if (frequency && frequency.trim() !== "") {
    sectionLines.push(`**Frequency:** ${frequency}`);
  }

  if (activation && activation.trim() !== "") {
    sectionLines.push(`**Activation:** ${activation}`);
  }

  if (requirement && requirement.trim() !== "") {
    sectionLines.push(`**Requirements:** ${requirement}`);
  }

  if (trigger && trigger.trim() !== "") {
    sectionLines.push(`**Trigger:** ${trigger}`);
  }

  const combinedOutput = sectionLines.length > 0 ? sectionLines.join("\n\n") + "\n\n" : "";

  let block = `### **${powerTitle}** ${actionEconomyOutput} ${type ? type : ""}\n\n`;
  if (combinedOutput) {
    block += combinedOutput;
  }
  block += `${mechanics}\n`;

  return block;
}


  // Build the complete Markdown content (inside a div for the box)
  output += `\n<div class="pf2e-ability-textbox">\n\n`;

if (data.powerTitle) {
  output += createPowerBlock(
    data.powerTitle,
    data.actionEconomy,
    data.type,
    data.frequency,
    data.activation,
    data.requirement,
    data.trigger,
    data.mechanics
  );
}

if (data.powerTitle2) {
  if (data.powerTitle) {
    output += `\n<hr class="pf2e-divider">\n\n`;
  }
  output += createPowerBlock(
    data.powerTitle2,
    data.actionEconomy2,
    data.type2,
    data.frequency2,
    data.activation2,
    data.requirement2,
    data.trigger2,
    data.mechanics2
  );
}

  output += `\n</div>\n`;

  // Output the whole thing as Markdown
  dv.paragraph(output);
}

const { destruction, source, pg } = dv.current();

let output = "";

if (destruction && destruction.trim() !== "") {
  output += `### **Destruction**\n\n${destruction}\n\n`;
}

if (source || pg) {
  output += `*Source: ${source ?? "Unknown"}${pg ? `, pg. ${pg}` : ""}*`;
}

dv.paragraph(output);

```
