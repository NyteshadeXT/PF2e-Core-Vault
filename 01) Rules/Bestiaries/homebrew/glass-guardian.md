---
noteType: pf2eMonster
aliases: "Glass Guardian"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/creature/level/3
statblock: inline
name: "Glass Guardian"
level: 3
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
statblock: true
source: "HB"
name: "Glass Guardian"
level: "Creature 3"
token: [[Glass Guardian Nestling.png]]
alignment: "N"
size: "Large"
trait_03: "Aberration"
trait_04: "Animal"
modifier: 9
perception:
  - name: "Perception"
    desc: "Perception +9; __darkvision__, __imprecise [[tremorsense]] 60__;"
skills:
  - name: "Skills"
    desc: "__Athletics__: +11 (1d20+11); __Stealth__: +7 (1d20+7); "
abilityMods: [4, 2, 3, -5, 2, -4]

abilities_bot:
  - name: "Death Burst"
    desc: "⬲  When the Glass Guardian is reduced to 0 hitpoint it explodes causing 2d6 (2d6) slashing damage, __Saving Throw__ DC 20 Reflex."

speed: 30 feet

ac: 19
armorclass:
  - name: AC
    desc: "19; __Fort__: +12 (1d20+12); __Ref__: +9 (1d20+9); __Will__: +7 (1d20+7);"
hp: 45
health:
  - name: HP
    desc: "45; "


attacks:
  - name: Melee
    desc: "⬻ pincer +11 ([[agile]], [[reach|reach 10 feet]]); __Damage__ 1d8+6 (1d8+6) slashing"
  - name: Ranged
    desc: "⬺ piercing shard +11 ([[range increment|range increment 30 feet]]); __Damage__ 1d8 (1d8) piercing plus 1d6 bleed"

sourcebook: "Homebrew"
```

```encounter-table
name: Glass Guardian
creatures:
  - 1: Glass Guardian
```