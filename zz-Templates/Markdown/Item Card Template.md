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

  function createPowerBlock(powerTitle, actionEconomy, type, frequency, requirement, trigger, mechanics) {
    const actionEconomyOutput = getActionIconCode(actionEconomy);

    const frequencyRequirementTriggerOutput = [];

    if (frequency && frequency.trim() !== "") {
      frequencyRequirementTriggerOutput.push(`**Frequency:** ${frequency}`);
    }

    if (requirement && requirement.trim() !== "") {
      frequencyRequirementTriggerOutput.push(`**Requirements:** ${requirement}`);
    }

    if (trigger && trigger.trim() !== "") {
      frequencyRequirementTriggerOutput.push(`**Trigger:** ${trigger}`);
    }

    const combinedOutput = frequencyRequirementTriggerOutput.length > 0 ? frequencyRequirementTriggerOutput.join("\n\n") + "\n\n" : "";

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
      data.requirement,
      data.trigger,
      data.mechanics
    );
  }

  if (data.powerTitle2) {
    if (data.powerTitle) {
      output += `\n<hr class="pf2e-divider">\n\n`; // Fancy divider between powers
    }
    output += createPowerBlock(
      data.powerTitle2,
      data.actionEconomy2,
      data.type2,
      data.frequency2,
      data.requirement2,
      data.trigger2,
      data.mechanics2
    );
  }

  output += `\n</div>\n`;

  // Output the whole thing as Markdown
  dv.paragraph(output);
}

```



*Source: `= this.source`, pg. `= this.pg`*