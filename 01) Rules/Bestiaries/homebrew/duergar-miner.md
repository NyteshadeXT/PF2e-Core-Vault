---
noteType: pf2eMonster
aliases: "Duergar Miner"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/1
statblock: inline
name: "Duergar Miner"
level: 1
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Duergar Miner"
level: "Creature 1"
alignment: "LE"
size: "Medium"
trait_03: "Duergar"
trait_04: "Dwarf"
trait_05: "Humanoid"
modifier: 4
perception:
  - name: "Perception"
    desc: "Perception +4; __darkvision__;"
languages: "Common, Dwarven, Undercommon; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +6 (1d20+6); __Crafting__: +6 (1d20+6); __Occultism__: +6 (1d20+6); __Stealth__: +6 (1d20+6); __Survival__: +4 (1d20+4); "
abilityMods: [3, 1, 2, 3, 1, -1]

abilities_top:

abilities_mid:
  - name: "Light Blindness"
    desc: " "

speed: 20 feet

ac: 15
armorclass:
  - name: AC
    desc: "15; __Fort__: +10 (1d20+10); __Ref__: +7 (1d20+7); __Will__: +10 (1d20+10);"
hp: 16
health:
  - name: HP
    desc: "16; "


attacks:
  - name: Melee
    desc: "⬻ warhammer +4 ([[shove]]); __Damage__ 1d8+1 (1d8+1) bludgeoning"

sourcebook: "Homebrew"
```

```encounter-table
name: Duergar Guard
creatures:
  - 1: Duergar Guard
```
