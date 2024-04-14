---
noteType: pf2eMonster
aliases: "Twig Blight"
tags: 
  - pf2e/creature/type/fey
  - pf2e/creature/type/plant
  - pf2e/creature/level/3
statblock: inline
name: "Twig Blight"
level: 3
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Twig Blight"
token: "[[Twig Blight.png]]"
level: "Creature 3"
alignment: "CE"
size: "Small"
trait_03: "Fey"
trait_04: "Plant"
modifier: 9
perception:
  - name: "Perception"
    desc: "Perception +9; __darkvision__;"
languages: "Elven; "
skills:
  - name: "Skills"
    desc: "__Stealth__: +9 (1d20+9); "
abilityMods: [1, 4, 3, -4, 4, 3]


speed: 25 feet, climb 25 feet

ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__: +9 (1d20+9); __Ref__: +12 (1d20+12); __Will__: +6 (1d20+6);"
hp: 42
health:
  - name: HP
    desc: "42;  __Weaknesses__ fire 5; __Resistances__ poison 5"


attacks:
  - name: Melee
    desc: "⬻ claw +8 ([[poison]]); __Damage__ 1d6+5 (1d6+5) slashing{@damage +1d6} poison"
  - name: Melee
    desc: "⬺ blighted claw +8 ([[magical]], [[poison]]); __Damage__ 1d8 (1d8) slashing{@damage +1d8} poison and the target is [[Enfeebled|Enfeebled]]. Single use. Recharges when the blight uses invisitility."
    
spellcasting:
  - name: "Occult Innate Spells"
    desc: "DC 17; __(2nd)__ [[invisibility]];"

sourcebook: "Homebrew"
```

```encounter-table
name: Twig Blight
creatures:
  - 1: Twig Blight
```
