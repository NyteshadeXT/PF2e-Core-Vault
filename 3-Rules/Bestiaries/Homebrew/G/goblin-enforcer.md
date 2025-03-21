---
noteType: pf2eMonster
aliases: "Goblin Enforcers"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/3
statblock: inline
name: "Goblin Enforcer"
level: 3
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Goblin Enforcer"
level: "Creature 3"
alignment: "CE"
size: "Small"
trait_03: "Humanoid"
trait_04: "Goblin"
modifier: 9
perception:
  - name: "Perception"
    desc: "Perception +9; __darkvision__;"
languages: "Goblin; "
skills:
  - name: "Skills"
    desc: "__Athletics__: +10 (1d20+10); __Intimidation__: +9 (1d20+9); "
abilityMods: [3, 0, 3, 0, -1, 1]

abilities_mid:
  - name: "Goblin Scuttle"
    desc: "⬲ __Trigger__ A goblin ally ends a move action adjacent to the warrior. __Effect__ The goblin warrior Steps."
abilities_top:
  - name: Items
    desc: "leather armor, dog slicer, 5 javelins;"

speed: 25 feet

ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__: +9 (1d20+9); __Ref__: +5 (1d20+5); __Will__: +3 (1d20+3);"
hp: 48
health:
  - name: HP
    desc: "48; "


attacks:
  - name: Melee
    desc: "⬻ dogslicer +10 ([[agile]], [[backstabber]], [[finesse]]); __Damage__ 1d6+5 (1d6+5) slashing"
  - name: Ranged
    desc: "⬻ javelin +8 ([[range increment 30 feet]]); __Damage__ 1d6+5 (1d6+5) piercing"

sourcebook: "_Homebrew_."
```

```encounter-table
name: Goblin Enforcer
creatures:
  - 1: Goblin Enforcer
```
