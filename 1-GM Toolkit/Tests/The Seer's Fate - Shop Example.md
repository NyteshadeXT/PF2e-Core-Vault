---
title: The Seer's Fate
aliases: 
category: Location
type: Enchanter Shop
location:
  - Elesora
  - Porta Ad Opulentiam
owner: Edmondo Azzarà
tags:
  - Event
  - Location
  - Shop
status: ❌
portrait: "![[Edmondo Azzarà.png | 150]]"
summary: |
  One of the foremost enchanters in Elesora outside of the Royal Palace.
---
# The Seer's Fate <span style="float:right">Status: `INPUT[inlineSelect(option(❌), option(✅)):status]`</span> 
﻿
The proprietor of The Seer's Fate is `VIEW[\[\[{owner}\]\]][text(renderMarkdown)]`, the `$=dv.page(dv.current().owner).age` `$=dv.page(dv.current().owner).gender_name` `$=dv.page(dv.current().owner).race.name`. Situated amidst a row of elegant boutiques and high-end establishments along the winding stairs/streets up the cliff side of the [[Porta Ad Opulentiam]] district, the shop stands as a beacon of enchantment and arcane mastery, drawing in patrons seeking the power of magical artifacts.
﻿
The name comes from the former owner; Edmondo's - according to himself - stupid sister who used to own the locale and who was a seer, who failed to foresee her own demise and was murder-robbed on her way home one day.
﻿
**Exterior.** The exterior of The Seer's Fate is a sight to behold, with its ornate façade adorned with intricate carvings and mystical symbols. A grand sign hangs above the entrance, crafted from polished wood and inscribed with glowing runes that seem to pulse with otherworldly energy. Twin lanterns flank the doorway, casting a warm glow that beckons travelers to step inside and discover the wonders that lie within.
﻿
**Interior.** Stepping into The Seer's Fate, patrons are greeted by a dimly lit interior that shimmers with the faint light of enchanted crystals and glowing orbs. Shelves line the walls, displaying a dazzling array of trinkets, talismans, and enchanted artifacts. Mysterious potions bubble away in glass vials, emitting soft whispers and flashes of colored light that dance across the room. In the center of the shop stands a large wooden counter, behind which [[Edmondo Azzarà]], the shop's owner, can often be found hunched over ancient tomes and scrolls, poring over the secrets of the arcane. 
﻿
Mournn and Corvus visited him in [[Session 67 - Parchment and Coin | Session 67]] to buy some stuff and also commissioned the [[Tuning Fork]] that Corvus used to travel to the Feywild with.
﻿
## Shop inventory
﻿
> [!infobox | ws-med right clean no-i]- 
>  ##### DM Scratch Notes
> ```meta-bind
> INPUT[editor():scratch_note]
> ```
﻿
Money supply: `dice+: 10^(3*(18+1d20)/19)` gp
﻿
```dataviewjs
// Define the folder to query
const folder = `"5. World Encyclopedia/Campaign Items"`;
﻿
// Define the owner to filter by
const ownerFilter = "The Seer's Fate";
const inventoryID = "TheSeersFate";
﻿
// Query all the pages in the specified folder and check if any item in the owner list matches the ownerFilter
const pages = dv.pages(folder).where(p => {
  // Check if 'owner' exists, is an array, and contains the 'ownerFilter'
  return Array.isArray(p.owner) && p.owner.some(owner => owner && String(owner).includes(ownerFilter));
});
﻿
﻿
const content = await app.vault.cachedRead(app.vault.getAbstractFileByPath(`1. DM Screen/DM Tools/Random Tables/Random Magical Items.md`));
const contentEverything1 = content.slice(content.indexOf('# Data') + '# Data'.length);
const contentEverything2 = contentEverything1.slice(0, contentEverything1.indexOf('\n#'));
const contentSplit = contentEverything1.split('\n\#\# ');
﻿
// Create the table structure
const tableRows = pages.map(p => {
        
    // Extract name, type, and other required values
	const name = p.file.frontmatter.name;
	const value = p.file.frontmatter.value;
    const type = p.type;
    const fileName = p.file.name;
    let attunement;
﻿
	let descriptor = "Null";
	let sortingvar = ""
﻿
    if ("reqAttune" in p){
      attunement = "*"
    } else {
      attunement = ""
    }
    
    // Calculate value, weight, and amount using custom expressions
    
    let amountInput = `\`INPUT[number(class(nb-mb-55)):${fileName}#amounts.${inventoryID}]\``;
    
    // Format name and type using dv.fileLink to create a clickable link
    let formattedName;
    if (name.includes("Sending Stones")){
      formattedName = dv.fileLink(name, false, `${name}`)+attunement;
    } else if (fileName.includes("(Campaign)")){
      formattedName = dv.fileLink(name+" (Campaign)", false, `${name}`)+`${attunement}`;
    } else {
      formattedName = dv.fileLink(name, false, name)+`${attunement}`;
    }
      
    // Format value with the gold piece symbol
    let formattedValue;
    if (typeof value === 'string') {
      formattedValue = `🪙<font color='#D8B800'>${value}</font>`;
    } else {
      formattedValue = `🪙<font color='#D8B800'>${value} gp</font>`;
    }
﻿
	// Format Descriptor and assign Sorting Variable
	if (name.includes("Powdered Elerium")){
	  descriptor = "Elerium Dust";
	  sortingvar = "a1";
	  amountInput = `${amountInput} mlbs`;
	  formattedName = `\`dice: 10*1d100\` ${formattedName}`;
	} else if ((p.file.frontmatter.weapon | p.file.frontmatter.ac) && !p.file.frontmatter.magic) {
	  descriptor = "Enchantable Weapon";
	  sortingvar = "b1";
	  formattedName = `\`dice: 1d4\` ${formattedName}`
	  if (typeof value === 'string') {
        formattedValue = `🪙<font color='#D8B800'>${value}</font>`;
      } else {
        formattedValue = `🪙<font color='#D8B800'>${2*value} gp</font>`;
      }	  
	} else if (name.includes("Powdered") && !name.includes("Elerium")) {
	  formattedName = `\`dice: 44721/100*(1/${p.file.frontmatter.value})^(1/2)*1d100\` ${formattedName}`
	  amountInput = `\`INPUT[number(class(nb-mb-65)):${fileName}#amounts.${inventoryID}]\` mlbs`;
	  descriptor = "Metal Dust";
	  sortingvar = `d${p.file.frontmatter.value}`;
	} else {
      for (let i = 1; i < contentSplit.length; i++){
        if (contentSplit[i].includes(name)){
          switch (contentSplit[i].split("\n")[0].split(" ")[0]) {
            case "Common":
             sortingvar = 'c1';
             break;
            case "Uncommon":
             sortingvar = 'c2';
             break;
            case "Rare":
             sortingvar = 'c3';
             break;
            case "Very Rare":
             sortingvar = 'c4';
             break;
            case "Legendary":
             sortingvar = 'c5';
             break;
            case "Artifact":
             sortingvar = 'c6';
             break;
          }
	      descriptor = `${contentSplit[i].split("\n")[0].split(" ")[0]} Item`
	      if (p.file.frontmatter.amounts.TheSeersFate === 0){
	      formattedName = `~~${formattedName}~~`
	      }
        }
      }
	}
	for (let i = 1; i < contentSplit.length; i++){
      if (descriptor === "Null"){
        if (value < 10**2.0){
          descriptor = `Common Item`;
          sortingvar = "c1"
        } else if (value < 10**2.5) {
          descriptor = `Uncommon Item`;
          sortingvar = "c2";
        } else if (value < 10**3.5) {
	      descriptor = `Rare Item`;
	      sortingvar = "c3";
        } else if (value < 10**6) {
	      descriptor = `Very Rare Item`;
	      sortingvar = "c4";
        } else {
          descriptior = `Legendary Item`;
          sortingvar = "c5";
        }
        if (p.file.frontmatter.amounts.TheSeersFate === 0){
		  formattedName = `~~${formattedName}~~`
	    }
      }
    }
       
    // Return an array representing the row
    return [sortingvar, descriptor, dv.span(formattedName), amountInput, formattedValue];
  }).sort(p => p[2], "asc").sort(p => p[0], "asc").map(item => item.slice(1));
﻿
// Create the table with the updated header
dv.table(
  [`The Seer's Fate: Stock`, "Item", "Amount", 'Value'], // Table headers with total value in "Value" column
  tableRows // Rows of the table
);
```
^Inventory
﻿
## Commissioned Enchanted Items 
﻿
| Item                                                     | Price                       | Ordered by                                                                                                   | Completion date | Retrieved?
| -------------------------------------------------------- | :-: | ------------------------------------------------------------------------------------------------------------ | --------------- | :-: |
| [[Tuning Fork]] | 🪙<font color="#D8B800">300 gp</font> | [[Corvus Castilan\|Corvus]] | <span data-date='1001-Alturiak-08' data-category='Commission' data-name='Feywild Tuning Fork complete'></span> |    ✅             |
| [[+2 Moon Battleaxe]] | 🪙<font color="#D8B800">14000 gp</font> | [[Yelungo Verdtujin \| Yelungo]] | <span data-date='1001-Tarsakh-8' data-category='Commission' data-name='+2 Moon Battleaxe complete'></span> | ✅   |
```meta-bind-button
style: primary
label: "New Entry"
action:
 type: replaceSelf
 replacement: "z_Templates/Templater/Items/commissioned_item_Templater.md"
 templater: true
```
﻿
##
﻿
﻿
﻿
﻿
﻿
﻿
