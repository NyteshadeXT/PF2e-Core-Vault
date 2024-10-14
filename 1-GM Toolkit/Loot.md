- [[party-treasure-by-level|Party Treasure by Level]]
- [[automatic-bonus-progression-gmg|Automatic Bonus Progression]]

```dataviewjs
async function handleCheckboxClick(event) {
    const target = event.target;
    const isChecked = target.checked;
    const file = app.workspace.getActiveFile();
    const fileContent = await app.vault.read(file);

    let updatedContent = fileContent.replace(/completed: (true|false)/, `completed: ${isChecked}`);
    await app.vault.modify(file, updatedContent);
}

let page = dv.current();
let totalGp = 0;
let totalExpectation = 0;

// Function to safely parse numbers
function parseNumber(value) {
    return isNaN(value) ? 0 : Number(value);
}

// Sum gp values from the current page if the checkbox is checked
if (page.file.tasks) {
    for (let task of page.file.tasks) {
        if (task.completed) {
            let gpMatch = task.text.match(/\[gp::(\d+(\.\d+)?)\]/);
            if (gpMatch) {
                totalGp += parseNumber(gpMatch[1]);
            }
        }
    }
}

// Sum expectation values from the current page
if (page.expectation) {
    if (Array.isArray(page.expectation)) {
        for (let val of page.expectation) {
            totalExpectation += parseNumber(val);
        }
    } else {
        totalExpectation = parseNumber(page.expectation);
    }
}

let remainingGp = totalExpectation - totalGp;

dv.paragraph(`**Wealth**: ${totalGp.toFixed(2)}gp / ${totalExpectation.toFixed(2)}gp (**${remainingGp.toFixed(2)}gp left**)`);

```
**Level** :: 9

```dataviewjs
async function handleCheckboxClick(event) {
    const target = event.target;
    const isChecked = target.checked;
    const fileContent = await app.vault.read(file);

    let updatedContent = fileContent.replace(/completed: (true|false)/, `completed: ${isChecked}`);
    await updateFileContent(file, updatedContent);
}

let page = dv.current();

const items = await Promise.all(
  [...Array(page.level + 1).keys()].map(async (i) => {
    let query = `TASK FROM "${page.file.path}" WHERE ilv = ${i + 1} AND completed = true`;
    return (await dv.tryQuery(query)) || { values: [] };
  })
);

function itemsWithCheckboxes(ilv, type) {
  let lvItems = items[ilv - 1].values
    .filter(i => i.header.subpath.includes(type))
    .map(i => {
      let gpIndex = i.text.indexOf("[gp::");
      if (gpIndex >= 0) {
        return i.text.slice(0, gpIndex);
      }
      return i.text;
    });

  let currentNum = type == "Consumable"
    ? lvItems.reduce((acc, s) => acc + (s[0] == 'x' ? parseInt(s[1]) : 1), 0)
    : lvItems.length;

  let maxAllowed = type == "Consumable" ? 6 : 4;
  let remaining = Math.min(
    Math.max(0, (page.level - ilv + (type == "Consumable" ? 2 : 1)) * 2),
    maxAllowed
  ) - currentNum;

  let label = `(${currentNum}/${remaining + currentNum})`;

  if (remaining <= 0) {
    return dv.el("div", [...lvItems, label], { cls: "nolastbullet" });
  }

  return lvItems.concat(
    [...Array(remaining)].map(_ => 
      dv.el("input", "", {
        attr: { type: "checkbox", onchange: handleCheckboxClick },
      })
    )
  );
}

dv.table(
  ["Level", "Permanent", "Consumable"],
  [...Array(page.level + 1).keys()]
    .reverse()
    .map(i => [
      i + 1,
      itemsWithCheckboxes(i + 1, "Permanent"),
      itemsWithCheckboxes(i + 1, "Consumable"),
    ])
);

```


### Level Received

#### Level 4
Expectation::850
##### Permanent
- [x] [[cloak-of-repute-locg|Cloak Of Repute]] [gp::90] [ilv::4]
- [x] [[sense-dulling-hood-tv|Sense-Dulling Hood (Lesser)]] [gp::40] [ilv::6]
- [x] [[ghoul-hide|Ghoul Hide]] [gp::220] [ilv::6]
- [x] [[poisonous-dagger-bb|Poisonous Dagger]] [gp::150] [ilv::5]
##### Consumable
- [x] [[chimera-thread-da|Chimera Thread]] [gp::40] [ilv::4]
- [x] [[potion-of-resistance|Potion of Resistance (Lesser)]] [gp::45] [ilv::6]
- [x] x4 [[holy-water|Holy Water]] [gp::12] [ilv::1]
- [x] x2 [[healing-potion|Healing Potion (Lesser)]] [gp::24] [ilv::3]
- [x] [[sprite-apple-tv|Sprite Apple (Pink)]] [gp::16] [ilv::4]
- [x] [[tentacle-potion-tv|Tentacle Potion (Lesser)]] [gp::33] [ilv::6]
##### Gold
- [x] 10gp [gp::10]
- [x] 101gp [gp::101] 
- [x] 45gp [gp::45]
- [x] 14.42gp [gp::14.42]
- [x] 29.36gp [gp::29.36]

#### Level 5
Expectation::1350
##### Permanent
- [x] [[Shifting]] [gp::225] [ilv::6]
- [x] [[weapon-potency|Weapon Potency (+1)]] [gp::12] [ilv::2]
- [x] [[Striking]] [gp::65] [ilv::4]
- [x] [[sarkorian-god-caller-garb-lotgb|Sarkorian God-caller Garb]] [gp::250] [ilv::6]
- [x] [[architects-pattern-book-tv|Architect's Pattern Book]] [gp::240] [ilv::6]
- [x] [[undead-scourge-lokl|Undead Scourge]] [gp::350] [ilv::7]
##### Consumable
- [x] [[healing-potion|Healing Potion (Lesser)]] [gp::12] [ilv::3]
- [x] [[wounding-oil-tv|Wounding Oil]] [gp::35] [ilv::5]
- [x] [[eidetic-potion-tv|Eidetic Potion]] [gp::40] [ilv::6]
##### Gold
- [x] 45gp [gp::45]
- [x] 34gp [gp::34]

#### Level 6
Expectation::2000
##### Permanent
- [x] [[pathfinders-pouch-locg|Pathfinder's Pouch]] [gp::200] [ilv::6]
- [x] x5 [[weapon-potency|Weapon Potency (+1)]] [gp::60] [ilv::2]
- [x] [[cold-iron-shield|Cold Iron Shield (Buckler)]] [gp::300] [ilv::7]
- [x] [[warding-tattoo-som|Warding Tattoo]] [gp::300] [ilv::7]
- [x] [[lions-shield|Lion's Shield]] [gp::250] [ilv::6]
- [x] [[energizing-lotgb|Energizing]] [gp::250] [ilv::6]
- [x] [[bloodhound-olfactory-stimulators-tv|Bloodhound Olfactory Stimulators]] [gp::135] [ilv::5]
- [x] [[andvaranaut-hb|Andvari's Gift]] [gp::425] [ilv::8]
##### Consumable
- [x] [[elixir-of-life|Elixir of Life]] [gp::30] [ilv::5]
- [x] [[euphoric-loop-tv|Euphoric Loop]] [gp::30] [ilv::5]
- [x] [[potion-of-retaliation-apg|Potion Of Retaliation (Moderate)]] [gp::60] [ilv::6]
- [x] [[wind-ocarina-tv|Wind Ocarina]] [gp::50] [ilv::6]
- [x] [[fulu-of-the-stoic-ox-som|Fulu Of The Stoic Ox]] [gp::25] [ilv::5]
- [x] [[happy-healper-hb|Happy Healper]] [gp::95] [ilv::8]
##### Gold
- [x] 67gp [gp::67]

#### Level 7
Expectation::2900
##### Permanent
- [x] [[wand-of-crackling-lightning-apg|Wand Of Crackling Lightning]] [gp::500] [ilv::8]
- [x] [[Resilient]] [gp::340] [ilv::8]
- [x] [[armor-potency|Armor Potency (+1)]] [gp::160] [ilv::5]
- [x] [[weapon-potency|Weapon Potency (+1)]] [gp::12] [ilv::2]
- [x] [[ghost-touch|Ghost Touch]] [gp::75] [ilv::4]
- [x] [[silver-weapon|Silver Weapon (Battle Axe)]] [gp::20] [ilv::2]
- [x] [[ethersight-ring-aoe2|Ethersight Ring]] [gp::325] [ilv::7]

##### Consumable
- [x] [[heartening-missive-tv|Heartening Missive (Bull)]] [gp::50] [ilv::6]
- [x] [[sovereign-glue-apg|Sovereign Glue]] [gp::55] [ilv::7]
- [x] [[liquid-gold-ooa2|Liquid Gold]] [gp::40] [ilv::6]
- [x] [[fearcracker-tv|Fearcracker]] [gp::25] [ilv::5]
- [x] x2 [[acid-flask|Acid Flask (Moderate)]] [gp::10] [ilv::6]
- [x] [[copper-penny-tv|Copper Penny]] [gp::30] [ilv::5]
- [x] [[etheric-essence-disruptor-g-g|Etheric Essence Disruptor]] [gp::360] [ilv::7]
- [x] [[eagle-eye-elixir|Eagle Eye Elixir (Moderate)]] [gp::50] [ilv::6]
- [x] [[beckoning-cat-amulet-ec2|Beckoning Cat Amulet]] [gp::26] [ilv::5]

##### Gold
- [x] 67gp [gp::67]
- [x] 78gp [gp::78]
- [x] 9pp [gp::90]

#### Level 8
Expectation::4000
##### Permanent
- [x] x13 [[weapon-potency|Weapon Potency (+1)]] [gp::156] [ilv::2]
- [x] x6 [[Striking]] [gp::390] [ilv::4]
- [x] [[armor-potency|Armor Potency (+1)]] [gp::160] [ilv::5]
- [x] [[Frost]] [gp::500] [ilv::8]
- [x] [[Resilient]] [gp::340] [ilv::8]
- [x] [[glowmetal-weapon-hb|Glowmetal Weapon (Staff)]] [gp::275] [ilv::12]
- [x] [[madstone-hb|Madstone]] [gp::200] [ilv::6]
- [x] [[Corrosive]] [gp::500] [ilv::8]
- [x] [[warding-tablets-som|Warding Tablets]] [gp::450] [ilv::8]

##### Consumable
- [x] [[heartening-missive-tv|Heartening Missive (Bull)]] [gp::50] [ilv::6]
- [ ] x18 [[thunderstone|Thunderstone (Moderate)]] [gp::180] [ilv::3]
- [ ] x12 [[alchemists-fire|Alchemist's Fire (Moderate)]] [gp::120] [ilv::3]
- [ ] x240 [[Tindertwig]] [gp::48] [ilv::1] 
- [ ] x84 [[Sunrod]] [gp::252] [ilv::1]
- [ ] x60 [[Smokestick]] [gp::180] [ilv::1]
- [ ] x24 [[tanglefoot-bag|Tanglefoot Bag]] [gp::72] [ilv::1]
- [ ] x16 [[acid-flask|Acid Flask (Moderate)]] [gp::160] [ilv::3]
- [x] [[healing-potion|Healing Potion (Moderate)]] [gp::50] [ilv::6]
- [x] [[antiplague|Antiplague (Moderate)]] [gp::35] [ilv::6]

##### Gold
- [x] 67gp [gp::67]
- [x] Gold necklace with a pendant emblazoned with a dragon [gp::30]
- [ ] 10gp [gp::10]
- [x] x7 Pearls [gp::70]
- [x] Ruby dust [gp::20]
- [x] Jade dust [gp::9]
- [x] Diamond dust [gp::35]
- [x] Powdered Amber [gp::40]
- [x] 15.9gp [gp::15.9]
- [x] 75gp [gp::75]

#### Level 9
Expectation::5700
##### Permanent
- [ ] x4 [[weapon-potency|Weapon Potency (+1)]] [gp::48] [ilv::2] 
- [ ] [[staff-of-healing|Staff of Healing (Greater)]] [gp::470] [ilv::8]

##### Consumable
- [ ] [[tracking-fulu-som|Tracking Fulu]] [gp::25] [ilv::5]
- [ ] [[truth-potion|Truth Potion]] [gp::46] [ilv::6]
- [ ] [[assassin-vine-wine-tv|Assassin Vine Wine]] [gp::130] [ilv::9]
- [ ] [[leapers-elixir|Leaper's Elixir (Greater)]] [gp::55] [ilv::7]
- [ ] x2 Spell Scroll (3rd) [gp::60] [ilv::5]
- [ ] Spell Scroll (4th) [gp::70] [ilv::7]
- [ ] x3 Spell Scroll (5th) [gp::450] [ilv::9]

##### Gold
- [ ] 9.081gp [gp::9.08]
- [ ] 10.08gp [gp:10.08]
- [ ] 200gp [gp::200]
