---
noteType: pf2eMonster
aliases: "Tiefling Guard"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/3
statblock: inline
name: "Tiefling Guard"
level: 3
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Tiefling Guard"
level: "Creature 3"
size: "Medium"
trait_03: "Human"
trait_04: "Humanoid"
trait_05: "Nephilim"
modifier: 8
perception:
  - name: "Perception"
    desc: "Perception +8; __darkvision__;"
languages: "Common, Infernal, Orc; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +9 (1d20+9); __Crafting__: +7 (1d20+7); __Intimidation__: +7 (1d20+7); __Stealth__: +8 (1d20+8); __Survival__: +7 (1d20+7); "
abilityMods: [3, 3, 2, 1, 0, -1]

abilities_top:
  - name: "Attack of Opportunity"
    desc: "`pf2:r` The Tiefling Guard can make an attack of opportunity when a foe is in its reach."
  - name: "Blind Fighting"
    desc: "The Tiefling Guard ignores the **concealed** condition and treats **invisible** creatures as only **concealed**, rather than hidden."
  - name: "Equipment"
    desc: "Chainmail, Greataxe, Composite Longbow"

abilities_bot:
  - name: "Darkness"
    desc: "`pf2:1` The Tiefling Guard can cast _darkness_ once per day as an innate spell, creating a 20-foot radius of magical darkness for 1 minute (DC 18)."

speed: 20 feet

ac: 19
armorclass:
  - name: AC
    desc: "19; __Fort__: +9 (1d20+9); __Ref__: +8 (1d20+8); __Will__: +5 (1d20+5);"
hp: 40
health:
  - name: HP
    desc: "40; "


attacks:
  - name: Melee
    desc: "⬻ greataxe +10 ([[sweep]]); __Damage__ 1d12+3 (1d12+3) slashing"
  - name: Ranged
    desc: "⬻ composite longbow +10 ([[deadly d10]], [[propulsive]], [[volley 30ft]]); __Damage__ 1d8+2 (1d8+2) piercing"

sourcebook: "Homebrew"
```

```encounter-table
name: Tiefling Guard
creatures:
  - 1: Tiefling Guard
```
