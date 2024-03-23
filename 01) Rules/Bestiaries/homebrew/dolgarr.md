---
noteType: pf2eMonster
aliases: "Dolgarr"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/aberration
  - pf2e/creature/level/3
statblock: inline
name: "Dolgarr"
level: 3
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Dolgarr"
level: "Creature 3"
token: [[Dolgarr.webp]]
alignment: "NE"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Aberration"
modifier: 6
perception:
  - name: "Perception"
    desc: "Perception +6, low-light;"
languages: "Goblin, Undercommon; "
skills:
  - name: "Skills"
    desc: "Athletics: +9 (1d20+9);"
abilityMods: [6, 1, 4, -4, 4, -1]

abilities_bot:
  - name: "Foe-Hurler"
    desc: "The dolgarr makes a fist attack. If successful the target suffers an addtional 1d6+6 (1d6+6) bludgeoning damage and the target it [[grab|grabbed]].  The dolgurr immediately slams [[grab|grabbed]] creature to the ground and throws it an another creature adjacent to the primary target.  This secondary attack is at +7 vs the new target's Reflex save and causes both the secondary target and the thrown creature to suffer 2d6+6 (2d6+6) bludgeoning damage.  The dolgarr needs 1d6 (1d6) rounds to recover before it is able to perform this attack again."
    
speed: 25 feet

ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__: +12 (1d20+12); __Ref__: +6 (1d20+6); __Will__: +9 (1d20+9);"
hp: 59
health:
  - name: HP
    desc: "59; "


attacks:
  - name: Melee
    desc: "⬻ fist +12; __Damage__ 1d6+6 (1d6+6) bludgeoning"
  - name: Melee
    desc: "⬻ club +10 __Damage__ 1d8+6 (1d8+6) bludgeoning"

sourcebook: "Homebrew"
```

```encounter-table
name: Dolgarr
creatures:
  - 1: Dolgarr
```
