```dataviewjs 
//const {  attunement = {}, damage = {}, description = "",  mechanics = "", image, page, range = "", subweight, tags = [], //value = "", weight = "" } = dv.current();
//const name = dv.current().name;

const {  attunement = {}, damage = {}, description = "", mechanics = "", image, page, range = "", subweight, tags = [], value = "", weight = "", baseAC = "", modAC = "", dexCap = "", strRequirement = "", checkPenalty = "", speedPenalty = ""  
} = dv.current();
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
let imageFormat = app.vault.getAbstractFileByPath(image) ? `>![[${image}|hsmall]]\n` : "";

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
let armorType = "";
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

  // Construct type for weapons
  type = `${weaponClass ? weaponClass : ''} ${attackType ? attackType : ''} Weapon`.trim();
}

// Check if 'Armor' tag exists
if (tags.includes('Armor')) {
  // Determine armor classification
  if (tags.includes('Light')) {
    armorType = 'Light';
  } else if (tags.includes('Medium')) {
    armorType = 'Medium';
  } else if (tags.includes('Heavy')) {
    armorType = 'Heavy';
  }

  // Assign armor type as "Light Armor", etc.
  type = armorType ? `${armorType} Armor` : "Armor";
}

const itemlevel = dv.current().level ?? '';


// List of tags to exclude
const excludedTags = ['Weapon', 'Melee', 'Ranged', 'Martial', 'Simple', 'Armor', 'Light', 'Medium', 'Heavy', 'Uncommon', 'Rare'];

// Filter out tags that are NOT in the exclusion list
let subHeaderTags = tags.filter(tag => !excludedTags.includes(tag));

let subHeader = '';
if (subHeaderTags.length > 0) {
  subHeader = ' ' + subHeaderTags
    .map(tag => `<span style="border: 3px solid #F4E1C1; background-color: #833C0C; color: white; padding: 3px 6px; border-radius: 4px;">[[${tag}]]</span>`)
    .join(', ');
}

const rarities = ['Common', 'Uncommon', 'Rare'];
const rarity = rarities.find(rarity => tags.includes(rarity)) || ''; // Find the first matching rarity or return empty string
let itemTypeRarityAttune = [type, rarity, itemlevel].filter(Boolean).join(", ") + attune;

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
    let weightLabeled = weight < 1 ? `${weight} L` : `${weight} Bulk`;
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

// ===== USAGE AND GROUP FORMATTER =====
let usageFormat = '';
let groupFormat = '';

if (dv.current().usage) {usageFormat = `\n>|Usage:|${dv.current().usage}|`;
}

if (dv.current().group) {groupFormat = `\n>|Group:|${dv.current().group}|`;
}
// ===== /USAGE AND GROUP FORMATTER =====

// ===== ARMOR FORMATTER =====
let baseACFormat = '';
let modACFormat = '';
let dexCapFormat = '';
let strRequirementFormat = '';
let checkPenaltyFormat = '';
let speedPenaltyFormat = '';

if (dv.current().baseAC) {baseACFormat = `\n>|Base AC:|${dv.current().baseAC}|`;
}

if (dv.current().modAC) {modACFormat = `\n>|Modified AC:|${dv.current().modAC}|`;
}

if (dv.current().dexCap) {dexCapFormat = `\n>|Dex Cap:|${dv.current().dexCap}|`;
}

if (dv.current().strRequirement) {strRequirementFormat = `\n>|STR Requirement:|${dv.current().strRequirement}|`;
}
if (dv.current().checkPenalty) {checkPenaltyFormat = `\n>|Check Penalty:|${dv.current().checkPenalty}|`;
}
if (dv.current().speedPenalty) {speedPenaltyFormat = `\n>|Speed Penalty:|${dv.current().speedPenalty}|`;
}

// ===== /ARMOR FORMATTER =====


let card = `>[!infobox|s-t no-i wfull itemcard] # ${name}
${imageFormat}># <div style="position: relative; width: 100%;"><span style="color:#375623; position: absolute; left: 50%; font-size:20px; transform: translateX(-50%);">${itemTypeRarityAttune}</span><br><div style="color:#833C0C; position: absolute; left: 50%; font-size:20px; transform: translateX(-50%);">${subHeader}</div></div><br><br>
>|||
>|:-:|:-:|${baseACFormat}${modACFormat}${dexCapFormat}${strRequirementFormat}${checkPenaltyFormat}${speedPenaltyFormat}${groupFormat}${rangeFormat}${valueFormat}${weightFormat}${usageFormat}${damageFormat}
>
>>[!infobox|clean no-t no-i center item-text] <!-- -->
>>${description.split("\n").map(line => line.trim() ? `${line}` : "").join("<br>")}
>><br>
>>${mechanics.split("\n").map(line => line.trim() ? `${line}` : "").join("<br>")}
>><span style="color:#833C0C; font-size:20px; float: right; padding-right: 4px;">${formattedSource}</span>
`;


dv.paragraph(card);
console.log(card);
```
