---
obsidianUIMode: preview
obsidianEditingMode: source
creatureName: Goblin
creatureMinCR: "0"
creatureMaxCR: "5"
creatureSource:
  - MM
  - MPMM
  - pf2eMonster
creatureType:
  - Undead
  - Plant
  - Ooze
  - Oni
  - NPC
  - Monstrosity
  - Magical Beast
  - Jelly
  - Humanoid
  - Giant
  - Fiend
  - Fey
  - Elemental
  - Dragon
  - Construct
  - Celestial
  - Beast
  - Aberration
pageLimit: 150
currentPage: 1
---

# Filters
> [!info]+ Creature Stats
> Creature Name: `INPUT[text:creatureName]` Challenge Rating: Minimum: `INPUT[text:creatureMinCR]`    Maximum `INPUT[text:creatureMaxCR]`

>[!info]- Type
>```meta-bind
>INPUT[multiSelect(option(Aberration), option(Beast), option(Celestial), option(Construct), option(Dragon), option(Elemental), option(Fey), option(Fiend), option(Giant), option(Humanoid), option(Jelly), option(Magical Beast), option(Monstrosity), option(NPC), option(Oni), option(Ooze), option(Plant), option(Undead)):creatureType]
>```

> [!info]- Sources
> ```meta-bind
> INPUT[multiSelect(option(pf2eMonster), option(MM, Monster Manual), option(MPMM, Mordenkainen Presents: Monsters of the Multiverse)):creatureSource]
> ```

# Creature List

Rows per Page: `INPUT[number:pageLimit]` Page: `INPUT[number:currentPage]` `BUTTON[cf-previous-page-demo, cf-next-page-demo]` 

```dataviewjs

function pageView (arr, p, n) {
	let start = (p - 1) * n;
	let total = arr.length / n;
    while(start + n < arr.length) {
        const end = start + n;
        const part = arr.slice(start, end);
        start = end;
        return part;
    }
    return arr.slice(start);
}

let monstersAsDvArray = 
dv.array(FantasyStatblocks.getBestiaryCreatures()).where(m => {
	if(m.cr){
		let isMonsterNameMatch = m.name.toLowerCase().contains(dv.current().creatureName.toLowerCase());
		let isSourceMatch = Array.from(m.source).some(s => dv.current().creatureSource.some(cs => s.toLowerCase() == cs.toLowerCase()));
		let isChallengeRatingMatch = m.cr == null || dv.current().creatureMinCR < 1 && (m.cr == "1/8" || m.cr == "1/4" || m.cr == "1/2") || (m.cr >= eval(dv.current().creatureMinCR) && m.cr <= eval(dv.current().creatureMaxCR));
		let isTypeMatch = dv.current().creatureType.some(ct => ct.toLowerCase() == m.type.toLowerCase());
		return isMonsterNameMatch && isSourceMatch && isChallengeRatingMatch && isTypeMatch;
	}
	else if (!dv.current().creatureMinCR){
		let isMonsterNameMatch = m.name.toLowerCase().contains(dv.current().creatureName.toLowerCase());
		let isSourceMatch = Array.from(m.source).some(s => dv.current().creatureSource.some(cs => s.toLowerCase() == cs.toLowerCase()));
		let isTypeMatch = dv.current().creatureType.some(ct => ct.toLowerCase() == m.type.toLowerCase());
		return isMonsterNameMatch && isSourceMatch && isTypeMatch;
	}
	return false;
}).sort(m => m.name);

let p = dv.current().currentPage;
let n = dv.current().pageLimit;
let pageData = pageView(monstersAsDvArray, p, n);

let tableData = pageData.map((monster) => [dv.fileLink(monster.path, false, monster.name), monster.cr]);
dv.table(["Name", "CR"], tableData);
```

Rows per Page: `INPUT[number:pageLimit]` Page: `INPUT[number:currentPage]` `BUTTON[cf-previous-page-demo, cf-next-page-demo]` 

```meta-bind-button
label: "Previous"
style: default
hidden: true
id: "cf-previous-page-demo"
actions:
  - type: updateMetadata
    bindTarget: currentPage
    evaluate: true
    value: x - 1
```

```meta-bind-button
label: "Next"
style: primary
hidden: true
id: "cf-next-page-demo"
actions:
  - type: updateMetadata
    bindTarget: currentPage
    evaluate: true
    value: x + 1
```

