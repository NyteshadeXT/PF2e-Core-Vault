---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
name: "Abadar's Flawless Scale"
aliases:
source: "Pathfinder Lost Omens: Gods & Magic"
pg: "121"
rarity: "Uncommon"
trait01: "Magical"
image: zz-Attachments/Assets/ImagePlaceholder.png
level: 3
weight: 1
subweight: 
value: "50"
subvalue: "gp"
attunement:
reqAttune: 
reqAttuneTags: 
usage: "held in 2 hands"
license: "OGL"
identify: "Identify Magic (Arcana, Nature, Occultism or Religion) DC 20"
description: "This immaculate golden set of merchant's scales is considered a divine instrument among Abadar's most faithful. Unlike most scales, this one has only a single dish for placing small objects, and calculates value rather than weight. On the other side of the fulcrum, a steel arrow indicator points to various numbers engraved on the side of the scale."
powerTitle: "Valuation"
actionEconomy: 2
type: "command, [Interact](interact.md)"
frequency: "Once per Day"
mechanics: "**Effect** By placing an object of light Bulk onto the dish, you can determine its value in gold pieces in the market in which the scale was made (most of these scales are made in Katapesh or Absalom), based on its material composition and artisanship. For example, after placing a gemstone on the dish, the scale will indicate the fairest (average, in most cases) price you can expect to fetch in the market to which the scale is calibrated, but the scale wouldn't detect the gemstone's historical significance or any magical properties. _Abadar's flawless scale_ can be calibrated to a different market by performing a 1-hour ritual in the proximity of that market."
---

# `= this.name` *Item `= this.level`*  
#### `= this.identify`
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
  output.push(`[${trait}](${value}.md "${trait} Item Trait")`);
});

// Output the combined result
dv.paragraph(output.join(" "));

```

> [!infobox|wsmall|ttl-c]+
> # `= this.name`
> `VIEW[!\[\[{image}\]\]][text(renderMarkdown)]`

```dataviewjs
//buid
const data = dv.current();
let output = "<ul>";

if (data.weight != null) output += "<li><strong>Bulk</strong> = " + data.weight + "</li>";
if (data.usage != null) output += "<li><strong>Hands</strong> = " + data.usage + "</li>";
if (data.value != null) output += "<li><strong>Price</strong> = " + data.value + " " + data.subvalue + "</li>";
if (data.license != null) output += "<li><strong>License</strong> = " + data.license + "</li>";

output += "</ul>";
dv.el("span", output);

```

`= this.description`

---

```ad-embed-ability
```dataviewjs
const data = dv.current();

let actionEconomyOutput = "";
let frequencyOutput = "";

//handle actionEconomy
if (data.actionEconomy != null) {
  actionEconomyOutput = "`pf2:" + data.actionEconomy + "`"; // Wrap in backticks for other values
}

//handle frequency
if (data.frequency != null) {
  frequencyOutput = "**Frequency** " + data.frequency; // Wrap in backticks for other values
}


//create output
let output = `
  **${data.powerTitle}** ${actionEconomyOutput} ${data.type}
  
  ${frequencyOutput ? `${frequencyOutput}` : ""}
  ${data.mechanics}
`;

dv.paragraph(output);

```


*Source: `= this.source`, pg. `= this.pg`*
