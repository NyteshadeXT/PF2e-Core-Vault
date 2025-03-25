---
noteType: pf2eMonster
aliases: "Dire Boar"
tags: 
  - pf2e/creature/type/animal 
  - pf2e/creature/level/3
statblock: inline
name: "Dire Boar"
level: 3
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Dire Boar"
level: "Creature 3"
alignment: "N"
size: "Medium"
trait_03: "Animal"
modifier: 9
perception:
  - name: "Perception"
    desc: "Perception +9; __low-light vision, scent (imprecise) 30 ft__;"
skills:
  - name: "Skills"
    desc: "Acrobatics: +7 (1d20+7); Athletics: +10 (1d20+10); Intimidation: +6 (1d20+6); Survival: +8 (1d20+8);"
abilityMods: [4, 1, 4, -4, 2, -2]

abilities_top:
  - name: "Raging Frenzy"
    desc: "`pf2:0` When the Dire Boar takes damage, it flies into a rage, gaining a +2 status bonus to damage for 1 minute. It can only enter a Raging Frenzy once per encounter."

abilities_mid:

abilities_bot:
  - name: "Gore Charge"
    desc: "`pf2:1` The Dire Boar Strides at least 10 feet in a straight line before making a tusk Strike. If this movement brings it adjacent to a creature, it can make a tusk Strike against that creature with a +2 circumstance bonus to attack and damage. If it critically hits, the target is knocked [[prone]]."
    
  - name: "Squeeling Bellow"
    desc: "The Dire Boar bellows in rage, forcing all creatures within 30 feet to make a DC 18 Will save.\n\n* **Critical Failure**: Frightened 2 and stunned 1.\n\n* **Failure**: Frightened 2.\n\n* **Success**: Frightened 1"

speed: 40 feet

ac: 19
armorclass:
  - name: AC
    desc: "19; __Fort__: +10 (1d20+10); __Ref__: +7 (1d20+7); __Will__: +6 (1d20+6);"
hp: 50
health:
  - name: HP
    desc: "50"

attacks:
  - name: Melee
    desc: "⬻ tusk +11 ([[agile]]); __Damage__ 2d8+5 (2d8+5) piercing"

sourcebook: "Homebrew"
```

```encounter-table
name: Dire Boar
creatures:
  - 1: Dire Boar
```
