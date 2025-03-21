---
noteType: pf2eMonster
aliases: "Glass Guardian Nestling"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/creature/level/2
statblock: inline
name: "Glass Guardian Nestling"
level: 2
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
statblock: true
source: "HB"
name: "Glass Guardian Nestling"
level: "Creature 2"
token: ![[Glass Guardian Nestling.png]]
alignment: "N"
size: "Small"
trait_03: "Aberration"
trait_04: "Animal"
modifier: 9
perception:
  - name: "Perception"
    desc: "Perception +8; __darkvision__, __imprecise [[tremorsense]] 60__;"
skills:
  - name: "Skills"
    desc: "__Athletics__: +8 (1d20+7); __Stealth__: +7 (1d20+3); "
abilityMods: [4, 2, 3, -5, 2, -4]

abilities_mid:
  - name: "Spire Leap"
    desc: "⬺ The glass guardian nestling must be on a surface above the target. The nestling moves (it can jump during this move) before the attack; +7; 1d4 slashing damage plus 1d4 bleed. The nestling doesn’t take falling damage from using this attack power."

abilities_bot:
  - name: "Death Burst"
    desc: "⬲  When the Glass Guardian is reduced to 0 hitpoint it explodes causing 1d4 (1d4) slashing damage, __Saving Throw__ DC 15 Reflex."

speed: 40 feet; claim 30 feet

ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__: +17 (1d20+12); __Ref__: +9 (1d20+9); __Will__: +7 (1d20+7);"
hp: 14
health:
  - name: HP
    desc: "14; "


attacks:
  - name: Melee
    desc: "⬻ pincer +9 ([[agile]], [[reach|reach 10 feet]]); __Damage__ 1d6+3 (1d6+3) slashing"

sourcebook: "Homebrew"
```

```encounter-table
name: Glass Guardian Nestling
creatures:
  - 1: Glass Guardian Nestling
```