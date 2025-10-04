---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Myrianaas"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/8
statblock: inline
name: "Myrianaas"
level: 8
---

```statblock
columns: 2
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Myrianaas"
level: "Creature 8"
rare_01: "Uncommon"
alignment: "CE"
size: "Medium"
trait_01: "Humanoid"
trait_02: "Drow"
trait_03: "Elf"
trait_04: "Cleric"
modifier: 16
perception:
  - name: "Perception"
    desc: "+16; __darkvision 120 ft.__"
languages: "Common, Elven, Undercommon"
skills:
  - name: "Skills"
    desc: "__Religion__ +18, __Deception__ +16, __Stealth__ +15, __Intimidation__ +16, __Occultism__ +14"
abilityMods: [3, 2, 1, 1, 4, 0]

abilities_top:
  - name: "Equipment"
    desc: "_[[armor-potency-1|+1]] [[resilient]] [[breastplate]]_, _[[Weapon Potency (+1)|+1]] [[fearsome]] [[morningstar]]_, _[[Steel Shield]]_, _[[hand-crossbow|Hand Crossbow]]_"

abilities_mid:
  - name: "Sunlight Vulnerability"
    desc: "In bright light, Myrianaas is [[dazzled]]."
  - name: "Innate Spells"
    desc: "DC 26, spell attack +18; __At will__ *dancing lights*; __1/day each__ *[[darkness]]*, *[[faerie fire]]*"
  - name: "Sharathis’s Fury (Divine Smite)"
    desc: "⬻ ([[divine]], [[evocation]]); 1/day, Myrianaas makes a melee Strike and deals an extra `dice: 2d8` 2d8 damage. On a critical hit, the target is also [[frightened|frightened 1]]."

abilities_bot:
  - name: "Divine Font"
    desc: "Myrianaas prepares additional [[harm]] spells each day and can spontaneously swap any prepared spell for [[harm]]."
  - name: "Channel Undead"
    desc: "3/day ⬺ ([[divine]], [[necromancy]]); Myrianaas channels negative energy to harm living creatures in a 30-foot emanation, dealing 4d8 negative damage (DC 26 basic Will). Undead instead regain that amount of HP."
  - name: "Spellcasting (Divine, DC 26, attack +18)"
    desc: "Myrianaas is an 8th-level spellcaster. She has prepared the following spells (from the domains of Destruction and Trickery, patron Sharathis):  __4th (2 slots)__: *[[divine wrath]] (chaos)*, *[[Heroism]]*, *[[confusion]]*  __3rd (3 slots)__: *[[dispel magic]]*, *[[3-Rules/Character Building/Spells/D/Darkness|Darkness]]*, *[[3-Rules/Character Building/Spells/H/Holy Light|Holy Light]]*  __2nd (3 slots)__: *[[spiritual weapon]]*, *[[Noise Blast]]*, *[[mirror image]]*, *[[False Vitality]]*  __1st (4 slots)__: *[[harm]]*, *[[Bless]]*, *[[bane]]*, *[[sanctuary]]*  __Cantrips (at will)__: *[[daze]]*, *[[3-Rules/Character Building/Spells/D/Detect Magic|Detect Magic]]*, *[[guidance]]*, *[[shield]]*, *[[stabilize]]*"

speed: 20 feet

ac: 26
armorclass:
  - name: "AC"
    desc: "26 (with shield raised); __Fort__ +15, __Ref__ +14, __Will__ +19; immune [[sleep]]; SR replaced with __Counteract DC 26__ vs spells"

hp: 130
health:
  - name: "HP"
    desc: "130; __Shield Block__ 5 Hardness"

attacks:
  - name: "Melee • +1 Spell Storing Morningstar"
    desc: "⬻ +18; __Damage__ `dice; 1d6+9` 1d6+9 bludgeoning plus stored spell effect (commonly *hold person*, DC 26 Will)."
  - name: "Ranged • Hand Crossbow"
    desc: "⬻ +16 (range 60 feet, reload 1); __Damage__ `dice: 1d6+6` 1d6+6 piercing plus drow poison (DC 26)."

sourcebook: "Custom"

```