---
noteType: pf2eMonster
aliases: "Duergar Scout"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/7
statblock: inline
name: "Duergar Scout"
level: 7
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "SOURCE"
name: "Duergar Scout"
level: "Creature 7"
alignment: "LE"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Duergar"
trait_05: "Dwarf"
modifier: 15
perception:
  - name: "Perception"
    desc: "Perception +15; __darkvision__;"
languages: "Common, Dwarven, Undercommon; "
skills:
  - name: "Skills"
    desc: "__Athletics__: +13 (1d20+13); __Stealth__: +15 (1d20+15); __Survival__: +15 (1d20+15); "
abilityMods: [1, 4, 4, 0, 2, -2]

abilities_mid:
  - name: "Light Blindness"
    desc: " "
abilities_bot:
  - name: "Bola Bolt"
    desc: "This shot deals no damage, but on a hit, the target must succeed at a DC 20 Reflex save or be knocked prone and immobilized until it is freed with a successful DC 17 check to Escape. This check can be attempted either by the target or a creature adjacent to the target."

speed: 20 feet

ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__: +15 (1d20+15); __Ref__: +15 (1d20+15); __Will__: +12 (1d20+12);"
hp: 82
health:
  - name: HP
    desc: "82; "


attacks:
  - name: Melee
    desc: "⬻ light mace +13 ([[agile]], [[finesse]], [[shove]]); __Damage__ 2d6+6 (2d6+6) bludgeoning"
  - name: Melee
    desc: "⬻ crossbow +18 ([[range increment 120 feet]], [[reload 1]]); __Damage__ 2d10+9 (2d10+9) piercing or bola bolt"

spellcasting:
  - name: "Occult Innate Spells"
    desc: "DC 12, attack +2; __(2nd)__ [[enlarge|Enlarge]];"

sourcebook: "_Homebrew_."
```

```encounter-table
name: Duergar Scout
creatures:
  - 1: Duergar Scout
```
