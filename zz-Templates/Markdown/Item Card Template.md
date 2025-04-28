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
weight: 
value: ""
subvalue: ""
invest:
usage: ""
license: ""
identify: ""
description: ""
powerTitle: "Effect"
actionEconomy: 
type: 
frequency: 
mechanics: "**Effect** "
powerTitle2: ""
actionEconomy2: 
type2: 
frequency2: 
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

// Loop through trait01 to trait08 and add them if they exist
for (let i = 1; i <= 8; i++) {
  let trait = dv.current()[`trait0${i}`];
  if (trait) {
    traits.push(trait.toUpperCase()); // Add trait in uppercase
  }
}

// Prepare the output, starting with the rarity
let output = [];
if (rarity) {
  let value = rarity.toLowerCase();
  let label = rarity.toUpperCase();
  output.push(`[${label}](${value}.md "${rarity} Rarity Trait")`);
}

// Add each trait to the same line
traits.forEach(trait => {
  let value = trait.toLowerCase();
  output.push(`[${trait.toUpperCase()}](trait-${trait.toLowerCase()}.md "${trait} Item Trait")`);
});

// Output the combined result
dv.paragraph(output.join(" "));
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
if (data.weaponCategory != null || data.armorCategory != null || data.weaponType != null) {
  let parts = [];

  if (data.weaponCategory != null || data.armorCategory != null) {
    let categories = [];
    if (data.weaponCategory != null) categories.push(data.weaponCategory);
    if (data.armorCategory != null) categories.push(data.armorCategory);
    parts.push("**Category** " + categories.join(" – "));
  }

  if (data.weaponType != null) {
    parts.push("**Type** " + data.weaponType);
  }

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

```ad-embed-ability 
```dataviewjs
const data = dv.current();

// Primary power output
let powerBlocks = [];

function createPowerBlock(powerTitle, actionEconomy, type, frequency, mechanics) {
  let actionEconomyOutput = "";
  let frequencyOutput = "";

  if (actionEconomy != null && typeof actionEconomy === 'string') {
    actionEconomyOutput = "`pf2:" + actionEconomy.trim() + "`";
  } else if (actionEconomy != null) {
    actionEconomyOutput = "`pf2:" + actionEconomy + "`";
  }

  if (frequency != null && frequency.trim() !== "") {
    frequencyOutput = "**Frequency** " + frequency;
  }

  let titleLine = `**${powerTitle}**`;
  if (actionEconomyOutput) {
    titleLine += ` ${actionEconomyOutput}`;
  }
  if (type) {
    titleLine += ` ${type}`;
  }

  let block = `
  <span style="display: block; text-align: center;">${titleLine}</span>
  
  ${frequencyOutput ? `${frequencyOutput}\n\n` : ""}
  ${mechanics}
  `;

  return block;
}

// Add the first power always
if (data.powerTitle) {
  powerBlocks.push(createPowerBlock(data.powerTitle, data.actionEconomy, data.type, data.frequency, data.mechanics));
}

// Add the second power only if it exists
if (data.powerTitle2) {
  // Add a line separator if both powerTitle and powerTitle2 exist
  if (data.powerTitle && data.powerTitle2) {
    powerBlocks.push('<hr>');
  }
  powerBlocks.push(createPowerBlock(data.powerTitle2, data.actionEconomy2, data.type2, data.frequency2, data.mechanics2));
}

// Output everything
dv.paragraph(powerBlocks.join("\n\n"));
```



*Source: `= this.source`, pg. `= this.pg`*