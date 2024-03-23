---
noteType: pf2eMonster
aliases: "Goblin Quickblade"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/4
statblock: inline
name: "Goblin Quickblade"
level: 4
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Goblin Quickblade"
level: "Creature 4"
alignment: "CE"
size: "Small"
trait_03: "Humanoid"
trait_04: "Goblin"
modifier: 11
perception:
  - name: "Perception"
    desc: "Perception +11; __darkvision__;"
languages: "Goblin; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +10 (1d20+10); __Stealth__: +10 (1d20+10); __Thievery__: +10 (1d20+10); "
abilityMods: [1, 4, 1, 0, -1, 1]

abilities_mid:
  - name: "Goblin Scuttle"
    desc: "⬲ __Trigger__ A goblin ally ends a move action adjacent to the warrior. __Effect__ The goblin warrior Steps."
abilities_top:
  - name: Items
    desc: "leather armor, shortbow (12 arrows), dogslicer;"

speed: 25 feet

ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__: +8 (1d20+8); __Ref__: +11 (1d20+11); __Will__: +9 (1d20+9);"
hp: 57
health:
  - name: HP
    desc: "57; "


attacks:
  - name: Melee
    desc: "⬻ dogslicer +8 ([[agile]], [[backstabber]], [[finesse]]); __Damage__ 2d6+5 (2d6+5) slashing"
  - name: Ranged
    desc: "⬻ shortbow +8 ([[deadly 1d10]], [[range increment 60 feet]], [[reload 0]]); __Damage__ 2d6+5 (2d6+5) piercing"

sourcebook: "_Homebrew_."
```

```encounter-table
name: Goblin Quickblade
creatures:
  - 1: Goblin Quickblade
```
