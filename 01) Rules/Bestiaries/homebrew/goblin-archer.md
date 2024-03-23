---
noteType: pf2eMonster
aliases:
  - Goblin Archer
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/6
statblock: inline
name: Goblin Archer
level: 6
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Goblin Archer"
level: "Creature 6"
alignment: "CE"
size: "Small"
trait_03: "Humanoid"
trait_04: "Goblin"
modifier: 17
perception:
  - name: "Perception"
    desc: "Perception +17; __darkvision__;"
languages: "Goblin; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +15 (1d20+15); __Athletics__: +13 (1d20+13); __Nature__: +11 (1d20+11); __Stealth__: +15 (1d20+15); __Survival__: +11 (1d20+11); "
abilityMods: [0, 4, 1, 0, -1, 1]

abilities_mid:
  - name: "Perfect Position"
    desc: "If the goblin ends its turn at least 4 squares from where it started, its ranged attacks deal 1d6 extra damage until the start of its next turn."

ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__: +14 (1d20+14); __Ref__: +17 (1d20+17); __Will__: +11 (1d20+11);"
hp: 67
health:
  - name: HP
    desc: "67; "

attacks:
  - name: Melee
    desc: "⬻ dogslicer +12 ([[agile]], [[backstabber]], [[finesse]]); __Damage__ 2d4+7 (2d4+7) slashing"
  - name: Ranged
    desc: "⬻ short bow +17 ([[deadly 1d10]], [[range increment 60ft]], [[reload 0]]); __Damage__ 2d8+9 (2d8+9) piercing"


sourcebook: "_Homebrew_."
```

```encounter-table
name: Goblin Archer
creatures:
  - 1: Goblin Archer
```
