---
noteType: pf2eMonster
aliases: "Magma Hurler"
tags: 
  - pf2e/creature/type/elemental
  - pf2e/creature/level/2
statblock: inline
name: "Magma Hurler"
level: 2
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Magma Hurler"
level: "Creature 2"
token: ![[Magma Hurler.png]]
alignment: "N"
size: "Medium"
trait_03: "Elemental"
trait_04: "Fire"
modifier: 8
perception:
  - name: "Perception"
    desc: "Perception +8; __darkvision__, __smoke vision__;"
skills:
  - name: "Skills"
    desc: "__Athletics__: +7 (1d20+7); "
abilityMods: [1, 4, 2, -4, 4, 0]

abilities_top:
  - name: "Smoke Vision"
    desc: "  The magma hurler ignores the [[../../rules/conditions.md#Concealed|concealed]] condition from smoke."
abilities_bot:

speed: 20 feet

ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__: +8 (1d20+8); __Ref__: +8 (1d20+8); __Will__: +5 (1d20+5);"
hp: 155
health:
  - name: HP
    desc: "32;  __Immunities__ bleed, fire, poison, paralyzed, sleep;"


attacks:
  - name: Melee
    desc: "⬻ slam +7 __Damage__ 1d6+3 (1d6+3) bludgeoning plus 1d4 (1d4) [[persistent damage|persistent fire]]" 
  - name: Ranged
    desc: "⬻ magma ball +11 ([[fire]], [[range increment|range increment 40 feet]]); __Damage__ 1d8+4 (1d8+4) fire plus 1d4 (1d4) [[persistent damage|persistent fire]]"

sourcebook: "Homebrew"
```

```encounter-table
name: Magma Hurler
creatures:
  - 1: Magma Hurler
```
