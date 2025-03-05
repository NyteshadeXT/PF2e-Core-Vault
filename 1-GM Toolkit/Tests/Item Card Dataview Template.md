```dataviewjs 
const {  attunement = {}, damage = {}, entries = "", image, page, range = "", subweight, tags = [], value = "", weight = "" } = dv.current();
const name = dv.current().name;

// ===== SOURCE HANDLER =====
let source = dv.current().source ?? "", formattedSource = source;
let pg = dv.current().pg ?? "", pgFormat = pg;

let pgpdf = ""; 
if (pg.includes('-')) { // If the pg number is "56-63" format
	pgpdf = pg.split('-')[0]; // Get the first number before the hyphen 
} else pgpdf = pg;

if (pg && pg.trim() !== "") { //formats pg if pg is not null
	pgFormat = ` pg&thinsp;${pg}`;
} else pgFormat = `` //sets pg to blank if null

//Checks to make sure that source is a .pdf & pg is not NULL
if (pg && pg.trim() !== "" && source && source.endsWith(".pdf)")) { 
	if (source) {
		source = source.replace(".pdf", `.pdf#page=${pgpdf}`);
		//Changes the link to refernce the pg value
		//[name](name.pdf) => [name](name.pdf#page=${pg})
		
		formattedSource = source.replace(/\[(.*?)\]\((.*?)\)/, `[$1<span style=\"font-size:16\">${pgFormat}<span>]($2)`);
		//Adds the pg to the link text
		//[name](name.pdf#page=${pg}) => [name ${pg}](name.pdf#page=${pg})
	} else {
		// if no source then just formats the pg number
		formattedSource = `<span style=\"font-size:16\">${pgFormat}</span>`
	}
} else { 
	// If the source is not a .pdf
	formattedSource = `${source}<span style=\"font-size:16\">${pgFormat}</span>`
}
// ===== /SOURCE HANDLER =====


// ===== IMAGE HANDLER =====
let imageFormat = app.vault.getAbstractFileByPath(image) ? `>![[${image}|itemcard200]]\n` : "";

// ===== /IMAGE HANDLER =====


// ===== ATTUNEMENT HANDLER =====
let {attuneTags, attune = ""} = "";
// Check if attunement is required
if (attunement.reqAttune === true && attunement.reqAttune) {
    // Check if reqAttuneTags is an array and not empty
    if (Array.isArray(attunement.reqAttuneTags) && attunement.reqAttuneTags.length > 0) {
        if (attunement.reqAttuneTags.length > 1) {
            // If there are multiple tags, join all except the last one with commas and add 'or' before the last one
            let lastTag = attunement.reqAttuneTags[attunement.reqAttuneTags.length - 1];  // Get the last tag
            attuneTags = attunement.reqAttuneTags.slice(0, -1).join(', ') + ' or ' + lastTag;  // Join all but the last one and add 'or' before the last one
        } else {
            // If there's only one tag, use it directly
            attuneTags = attunement.reqAttuneTags[0];
        }
        attune = ` <small>(Requires Attunement by a ${attuneTags})</small>`;
    } else if (typeof attunement.reqAttuneTags === 'string' && attunement.reqAttuneTags.trim() !== "") {
        // If it's a string, just use the value directly
        attuneTags = attunement.reqAttuneTags;
        attune = ` <small>(Requires Attunement by ${attuneTags})</small>`;
    } else {
        // If no tags or an empty string, show default
        attune = " <small>(Requires Attunement)</small>";
    }
}
// ===== /ATTUNEMENT HANDLER =====


// ===== TYPE, RARITY, ATTUNEMENT FORMATTER =====
let type = '';
let attackType = '';
let weaponClass = '';

// Check if 'Weapon' tag exists
if (tags.includes('Weapon')) {
  // Check for Melee or Ranged
  if (tags.includes('Melee')) {
    attackType = 'Melee';
  } else if (tags.includes('Ranged')) {
    attackType = '[Ranged](Range.md)';
  }

  // Check for Martial or Simple
  if (tags.includes('Martial')) {
    weaponClass = 'Martial';
  } else if (tags.includes('Simple')) {
    weaponClass = 'Simple';
  }

  // Combine the values for output, skipping blank values
  type = `${weaponClass ? weaponClass : ''} ${attackType ? attackType : ''} Weapon`.trim();
}

const tier = tags.includes('Minor') ? 'Minor tier' : (tags.includes('Major') ? 'Major tier' : '');

let subHeader = ''
if (tags.some(tag => ['Finesse', 'Heavy', 'Light', 'Reach' , 'Special' , 'Two-Handed'].includes(tag))) {
  subHeader = ' ' + tags
    .filter(tag => ['Finesse', 'Heavy', 'Light', 'Reach' , 'Special' , 'Two-Handed'].includes(tag))
    .map(tag => `[[${tag}]]`) // Wrap each tag in [[ ]]
    .join(', ');
}


const rarities = ['Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary']
const rarity = rarities.find(rarity => tags.includes(rarity)) || '';// Find the first matching rarity or returns empty string
let itemTypeRarityAttune = [subHeader, type, rarity, tier].filter(Boolean).join(", ") + attune;

// ===== /TYPE, RARITY, ATTUNEMENT FORMATTER =====


// ===== DAMAGE FORMATTER =====
let damagePieces = [];
let versatileText = "";

// Extract all damage values (dmg1, dmg2, etc.)
for (let i = 1; i <= 10; i++) {
    let dmgKey = `dmg${i}`;
    let dmgTypeKey = `dmg${i}Type`;

    if (damage[dmgKey] && damage[dmgTypeKey]) {
        damagePieces.push(`${damage[dmgKey]} ${damage[dmgTypeKey]}`);
    }
}

// Handle Versatile property
if (tags.includes("Versatile") && damage.dmg1) {
    let [diceCount, diceSize] = damage.dmg1.split("d").map(Number);
    let versatileDamage = diceSize <= 10 ? `${diceCount}d${diceSize + 2}` : "2d6";
    versatileText = `, [Versatile](Versatile.md) (${versatileDamage})`;
}

// Format damage output
let damageFormat = damagePieces.length > 0 ? `\n| Damage: | ${damagePieces.join(", ")}${versatileText} |` : "";
// ===== /DAMAGE FORMATTER =====


// ===== VALUE HANDLER (GOLD, SILVER, COPPER) =====
let valueFormat = "";

if (value != "") {
    const totalCopper = Math.round(value * 100);
    const gold = Math.floor(totalCopper / 100);
    const silver = Math.floor((totalCopper % 100) / 10);
    const copper = totalCopper % 10;

    // Create currency display, filtering out zero values
    let currencyParts = [
        gold ? `<font color="#dfc02e">&#11044; ${gold.toLocaleString()} gp</font>` : "",
        silver ? `<font color="#B5B5B5">&#11044; ${silver} sp</font>` : "",
        copper ? `<font color="#B87333">&#11044; ${copper} cp</font>` : ""
    ].filter(Boolean).join(" ");

    valueFormat = currencyParts ? `\n>|Value:|${currencyParts}|` : "\n>|Value:|No listed value|";
}
// ===== /VALUE HANDLER =====


// ===== WEIGHT FORMATTER =====
let weightFormat = "";

if (weight != "") {
    let weightLabeled = weight < 1 ? `${weight} lb` : `${weight} lbs`;
    weightFormat = `\n>|Weight:|${weightLabeled} ${subweight ? `<small>(${subweight})</small>` : ""}|`;
} else if (subweight) {
    weightFormat = `\n>|Weight:|<small>(${subweight})</small>|`;
}
// ===== /WEIGHT FORMATTER =====



// ===== RANGED AMMO AND WEAPON FORMATTER =====
let rangeFormat = '';
if (tags.includes('Ammunition') || tags.includes('Thrown')) {
	rangeFormat = `\n>|Range:|[[${tags.includes('Ammunition') ? 'Ammunition' : 'Thrown'}]] (${range} ft.)`;
}

if (tags.includes('Loading')) {
	rangeFormat += ', [Loading](Loading.md)';
}

if (rangeFormat) { rangeFormat += '|'; }
// ===== /RANGED AMMO AND WEAPON FORMATTER =====



// ===== FINAL CARD OUTPUT =====
let card = `>[!infobox|s-t no-i wfull itemcard] # ${name}
${imageFormat}># <div style="position: relative; width: 100%;"><span style="color:#BCCAD8; position: absolute; left: 50%; font-size:20px; transform: translateX(-50%);">${itemTypeRarityAttune}</span><span style="font-size:20px; float: right; padding-right: 4px;">${formattedSource}</span></div>
>|||
>|:-:|:-:|${damageFormat}${rangeFormat}${valueFormat}${weightFormat}
>
>>[!infobox|clean no-t no-i center item-text] <!-- -->
${entries.split("\n").map(line => line.trim() ? `${line}` : "").join("<br>")}
`;

dv.paragraph(card);
console.log(card);
// ===== /FINAL CARD OUTPUT =====
```