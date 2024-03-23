---
noteType: pf2eMonster
aliases: "Dolgrim"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/aberration
  - pf2e/creature/level/3
statblock: inline
name: "Dolgrim"
level: 3
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Dolgrim"
level: "Creature 3"
token: [[Dolgrim.webp]]
alignment: "NE"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Aberration"
modifier: 5
perception:
  - name: "Perception"
    desc: "Perception +5, low-light;"
languages: "Goblin, Undercommon; "
skills:
  - name: "Skills"
    desc: "Athletics: +5 (1d20+5); "
abilityMods: [4, 3, 1, -4, 1, -4]

abilities_bot:
  - name: "Of Two Minds"
    desc: "At the start of combat, the dolgrim warrior makes two initiative checks. Each check corresponds to one of the warrior’s brains, and the warrior takes a turn on both initiative counts. The warrior has a full set of actions on each of these turns."
    
speed: 25 feet

ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__: +8 (1d20+8); __Ref__: +5 (1d20+5); __Will__: +8 (1d20+8);"
hp: 32
health:
  - name: HP
    desc: "32; "


attacks:
  - name: Melee
    desc: "⬻ club +9; __Damage__ 1d8+4 (1d8+4) bludgeoning"
  - name: Ranged
    desc: "⬻ crossbow +7 __Damage__ 1d6+3 (1d6+3) piercing"

sourcebook: "Homebrew"
```

```encounter-table
name: Dolgrim
creatures:
  - 1: Dolgrim
```
