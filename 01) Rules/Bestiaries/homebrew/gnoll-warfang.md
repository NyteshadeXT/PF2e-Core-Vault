---
noteType: pf2eMonster
aliases:
  - Gnoll Warfang
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/7
statblock: inline
name: Gnoll Warfang
level: 7
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Gnoll Warfang"
level: "Creature 7"
alignment: "CE"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Gnoll"
modifier: 15
perception:
  - name: "Perception"
    desc: "Perception +15; __darkvision__;"
languages: "Abyssal, Common, Gnoll; "
skills:
  - name: "Skills"
    desc: "__Athletics__: +15 (1d20+15); __Intimidation__: +14 (1d20+14); __Medicine__: +12 (1d20+12); __Survival__: +14 (1d20+14); "
abilityMods: [3, 2, 0, 0, 3, 2]

abilities_bot:
  - name: "Pack Attack"
    desc: "  A gnoll cultist deals 1d4 (1d4) extra damage to any creature that's within reach of at least two of the gnoll cultist's allies."
  - name: "No Mercy"
    desc: "⬲ When an enemy misses the war fang with a melee attack, the gnoll can make a melee attack against it."
abilities_top:
  - name: Items
    desc: "+1 longsword, plate armor;"

speed: 25 feet

ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__: +15 (1d20+15); __Ref__: +12 (1d20+12); __Will__: +18 (1d20+18);"
hp: 115
health:
  - name: HP
    desc: "115; "


attacks:
  - name: Melee
    desc: "⬻ longsword +18 ([[versatile P]]); __Damage__ 2d10+9 (2d10+9) slashing"
  - name: Melee
    desc: "⬻ jaws +18 ([[agile]]); __Damage__ 2d6+6 (2d6+6) piercing"

sourcebook: "_Homebrew_."
```

```encounter-table
name: Gnoll Warfang
creatures:
  - 1: Gnoll Warfang
```
