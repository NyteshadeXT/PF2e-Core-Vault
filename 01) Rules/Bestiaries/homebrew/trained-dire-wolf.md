---
noteType: pf2eMonster
aliases:
  - Trained Dire Wolf
tags:
  - pf2e/creature/type/animal
  - pf2e/creature/level/4
statblock: inline
name: Trained Dire Wolf
level: 4
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Trained Dire Wolf"
level: "Creature 4"
alignment: "N"
size: "Large"
trait_03: "Animal"
modifier: 11
perception:
  - name: "Perception"
    desc: "Perception +11; __low-light vision__, __imprecise scent 30ft__;"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +9 (1d20+9); __Athletics__: +13 (1d20+13); __Stealth__: +9 (1d20+9); __Survival__: +11 (1d20+11); "
abilityMods: [5, 3, 4, -4, 3, -2]

abilities_top:

abilities_mid:
  - name: "Buck"
    desc: "⬲ DC 20"

abilities_bot:
  - name: "Pack Attack"
    desc: "  The dire wolf's Strikes deal 2d6 (2d6) extra damage to creatures within reach of at least two of the wolf's allies."
  - name: "Worry"
    desc: " ([[attack]]); __Requirements__ The dire wolf has a creature [[grabbed|grabbed]] with its jaws.  __Effect__  The dire wolf fiercely shakes the [[grabbed|grabbed]] creature with its teeth, dealing 1d10+2 (1d10+2) damage (DC 20 basic Fortitude save)."

speed: 35 feet

ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__: +13 (1d20+13); __Ref__: +10 (1d20+10); __Will__: +10 (1d20+10);"
hp: 65
health:
  - name: HP
    desc: "65; "

attacks:
  - name: Melee
    desc: "⬻ jaws +12 ([[reach|reach 10 feet]]); __Damage__ 2d8+5 (2d8+5) piercing plus Knockdown or Grab; "

sourcebook: "_Homebrew_."
```


```

```encounter-table
name: Trained Dire Wolf
creatures:
  - 1: Trained Dire Wolf
```
