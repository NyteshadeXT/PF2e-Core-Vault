---
id: apostle-kyuss-l12  
obsidianUIMode: preview  
noteType: pf2eMonster  
aliases: "Apostle of Kyuss"  
tags:  
- pf2e/creature/type/undead  
- pf2e/creature/level/12  
statblock: inline  
name: "Apostle of Kyuss"  
level: 12
---

```statblock
layout: Basic Pathfinder 2e Layout
source: "Converted from D&D 3e"
name: "Apostle of Kyuss"
level: "Creature 12"
size: "Gargantuan"
rare_01: "Unique"
trait_01: "Undead"

modifier: 22
perception:
  - name: "Perception"
    desc: "+22; __darkvision__"

languages: "Common (can’t speak)"

skills:
  - name: "Skills"
    desc: "__Athletics__: +27; __Intimidation__: +24; __Religion__: +23"

abilityMods: [9, 2, 0, 3, 3, 4]

abilities_top:
  - name: "Vomited Horde"
    desc: "⬺ (divine, necromancy) The Apostle expels undead from its body:\n• 1 Level 8 creature (preferred)\n• or 1d3 Level 6 creatures\n\nThey gain +1 status bonus to attack rolls and deal +1d6 void damage for 1 round."

abilities_mid:


abilities_bot:
  - name: "Bite"
    desc: "⬻ Bite +25 ([[reach|reach 20 feet]], [[magical]]); __Damage__ `dice: 2d12+14` piercing plus `dice: 2d6` void and [[Grabbed]]"

  - name: "Necromantic Breath"
    desc: "⬺ (divine, necromancy, void) **Frequency** once per day; 50-foot cone; DC 31 Fortitude save.\n&nbsp;__Success__ `dice: 5d6` void damage\n__Failure__ `dice: 10d6` void damage and [[drained|drained 1]]\n__Critical Failure__ `dice: 10d6` void and [[drained|drained 2]]\nA creature that dies rises as a Spawn of Kyuss at the start of the Apostle’s next turn."

  - name: "Ravenous Surge"
    desc: "⬺ Stride up to Speed and make two Bite Strikes against different targets."

  - name: "Tendril Storm"
    desc: " (aura, necromancy) 30 feet. Creatures in the aura take `dice: 2d8` slashing damage at the start of their turn (DC 31 basic Reflex save) and take a –2 circumstance penalty to attack rolls. The Apostle is immune to non-magical ranged attacks while Tendril Storm is active."   

  - name: "Swallow Whole"
    desc: "⬻  Medium or smaller, DC 31 Reflex.\n__Failure__ Swallowed; takes `dice: 3d6` acid + `dice: 2d6` void each round.\nEscape DC 31; Cut Out 25 damage vs AC 30. A swallowed creature that dies rises as a Spawn of Kyuss 1 round later."

speed: 35 feet, burrow 20 feet

ac: 31
armorclass:
  - name: AC
    desc: "31; __Fort__ +26, __Ref__ +20, __Will__ +23"

hp: 240
health:
  - name: HP
    desc: "240; __Resistances__ acid 10, cold 10; __Immunities__ death effects, disease, poison, paralyzed, sleep"

attacks:
  - name: "Bite"
    desc: "⬻ +25 ([[reach|reach 20 feet]], [[magical]]); __Damage__ 2d12+14 piercing plus 2d6 void and Improved Grab"
```
