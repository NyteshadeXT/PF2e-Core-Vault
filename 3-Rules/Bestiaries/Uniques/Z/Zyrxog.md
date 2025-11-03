---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "zyrxog"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/8
statblock: inline
name: "Zyrxog"
level: 8
---

```statblock
columns: 2
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Zyrxog, Mind Flayer Sorcerer"
level: "Creature 8"
token: zyrxog.png
rare_01: "Unique"
size: "Medium"
trait_01: "Aberration"
trait_02: "Mind Flayer"
modifier: 17
perception:
  - name: "Perception"
    desc: "+17; darkvision 60 ft."
languages: "Common, Elven, Dwarven, Undercommon; telepathy 100 ft."
skills:
  - name: "Skills"
    desc: "__Arcana__ +18, __Deception__ +19, __Diplomacy__ +15, __Intimidation__ +17, __Occultism__ +18, __Stealth__ +16"
abilityMods: [0, 4, 2, 5, 4, 6]

abilities_top:
  - name: "Equipment"
    desc: "[[resilient|+1 resilient explorer's clothing]], [[arboreal-boots-greater|Arboreal Boots (Greater)]], [[ring-of-counterspells|Ring of Counterspells]]. [[Fireball|Wand of Fireball]]."

abilities_mid:
  - name: "Mind Blast"
    desc: "⬺ ([[occult]], [[enchantment]], [[mental]]); 30-foot cone, DC 26 Will save. On a failure, creatures are [[stunned|stunned 2]]; on a critical failure, they are [[unconscious]] for 1 minute. Once used, Mind Blast recharges in `dice: 1d4` 1d4 rounds."
  - name: "Improved Grab"
    desc: "When Zyrxog hits with a tentacle, he can attempt an Athletics check to [[grab]] the target."
  - name: "Extract Brain"
    desc: "⬺ ([[attack]], [[occult]], [[incapacitation]]); **Requirements** Zyrxog has a creature [[grabbed]] with all 4 tentacles. Effect: He tears into the victim’s skull. The target must succeed at a DC 26 Fortitude save or be reduced to 0 HP and [[dying|dying 2]]. On a success, they take `dice: 4d10+6` 4d10+6 piercing damage."

abilities_bot:
  - name: "Occult Innate Spells"
    desc: "DC 26, spell attack +18; __At will__ *[[detect thoughts]]*, *levitate*; __3/day__ *[[charm]]*, *[[suggestion]]*; __1/day__ *[[Interplanar Teleport]]* (self only)."
  - name: "Sorcerer Spellcasting Occult, DC 26, attack +18"
    desc: "Zyrxog is a 7th-level spellcaster.  __4th (2 slots)__: *[[confusion]]*, *[[translocate]]*  __3rd (3 slots)__: *[[dispel magic]]*, *[[fireball]]*, *[[haste]]*  __2nd (3 slots)__: *[[mirror image]]*, *[[resist energy]]*, *[[Blazing Bolt]]*  __1st (4 slots)__: *[[Force Barrage]]*, *[[Enfeeble]]*, *[[shield]]*  __Cantrips (at will)__: *[[daze]]*, *[[3-Rules/Character Building/Spells/D/Detect Magic|Detect Magic]]*, *[[read aura]]*, *[[telekinetic projectile]]*"

speed: 30 feet

ac: 26
armorclass:
  - name: "AC"
    desc: "26; __Fort__ +15, __Ref__ +16, __Will__ +20; Resist mental 5; immune sleep, controlled"

hp: 125
health:
  - name: "HP"
    desc: "125;"

attacks:
  - name: "Melee • Tentacle"
    desc: "⬻ +18 ([[reach|reach 10 feet]]); __Damage__ `dice: 2d6+6` 2d6+6 bludgeoning plus [[grab]]" 

sourcebook: "Custom"

```