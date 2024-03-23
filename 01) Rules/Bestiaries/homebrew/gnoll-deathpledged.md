---
noteType: pf2eMonster
aliases: "Gnoll Deathpledged"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/6
statblock: inline
name: "Gnoll Deathpledged"
level: 6
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Gnoll Deathpledged"
level: "Creature 6"
alignment: "CE"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Gnoll"
modifier: 13
perception:
  - name: "Perception"
    desc: "Perception +13; __darkvision__;"
languages: "Abyssal, Common, Gnoll; "
skills:
  - name: "Skills"
    desc: "__Intimidation__: +11 (1d20+11); __Medicine__: +11 (1d20+11); __Religion__: +13 (1d20+13); __Stealth__: +11 (1d20+11); __Survival__: +12 (1d20+12); "
abilityMods: [3, 2, 0, 0, 3, 2]

abilities_top:
  - name: "Claws of Yeenoghu"
    desc: "  When a deathpledged gnoll first drops to 0 hit points for lower, the gnoll immediately regains 5 hit points and gains resist 15 to all damage. At the end of its next turn, the gnoll drops to 0 hit points."
  - name: Items
    desc: "+1 longspear, leather, wooden shield;"
abilities_bot:
  - name: "Pack Attack"
    desc: "  A gnoll cultist deals 1d4 (1d4) extra damage to any creature that's within reach of at least two of the gnoll cultist's allies."
  - name: "Rugged Travel"
    desc: "  A gnoll ignores the first square of difficult terrain it moves into each time it Steps or Strides."

speed: 25 feet

ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__: +13 (1d20+13); __Ref__: +11 (1d20+11); __Will__: +17 (1d20+17);"
hp: 95
health:
  - name: HP
    desc: "95; "


attacks:
  - name: Melee
    desc: "⬻ longspear +17 ([[reach]]); __Damage__ 2d8+9 (2d8+9) slashing"
  - name: Melee
    desc: "⬻ jaws +17 ([[agile]]); __Damage__ 2d4+7 (2d4+7) piercing"

sourcebook: "_Homebrew_."
```

```encounter-table
name: Gnoll Deathpledged
creatures:
  - 1: Gnoll Deathpledged
```
