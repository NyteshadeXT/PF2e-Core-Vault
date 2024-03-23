---
noteType: pf2eMonster
aliases: "Duergar Guard"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/1
statblock: inline
name: "Duergar Guard"
level: 1
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Duergar Guard"
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
abilities_bot:
  - name: "Infernal Anger"
    desc: "⬺ Until the start of the duergar guard's next turn, it deals an extra 4 fire damage when it's melee attacks hit, and if an adjacent enemy moves during this period the duergar guard may move 5 feet."

speed: 20 feet

ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__: +7 (1d20+7); __Ref__: +8 (1d20+8); __Will__: +4 (1d20+4);"
hp: 20
health:
  - name: HP
    desc: "20; "


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
