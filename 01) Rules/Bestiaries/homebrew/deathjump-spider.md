---
noteType: pf2eMonster
aliases: "deathjump-spider"
tags: 
  - pf2e/creature/type/animal 
  - pf2e/creature/level/5
statblock: inline
name: "Deathjump Spider"
level: 5
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Deathjump Spider"
token: [[Deathjump Spider.png]]
level: "Creature 5"
alignment: "N"
size: "Medium"
trait_03: "Animal"
modifier: 13
perception:
  - name: "Perception"
    desc: "Perception +13; __darkvision, web sense__;"
skills:
  - name: "Skills"
    desc: "__Acrobatics +13__: +13 (1d20+13), __Athletics +13__: +13 (1d20+13); "
abilityMods: [6, 4, 4, -5, 2, -4]

abilities_top:
  - name: "Web Sense"
    desc: "The deathjump spider has imprecise tremorsense to detect the vibrations of creatures touching its web."
abilities_mid:

abilities_bot:
  - name: "Death from Above"
    desc: "The deathjump spider jumps up to 6 squares. After the jump, it uses bite, knocking the target prone on a hit. Death from Above can not be used again for 1d4 (1d4) rounds."
    
  - name: "Prodigious Leap"
    desc: "The deathjump spider jumps up to 10 squares."
    
  - name: "Deathjump Spider Venom"
    desc: "(poison); **Saving Throw** Fortitude DC 22; **Maximum Duration** 6 rounds; **Stage 1** 1d6 poison damage (1 round); **Stage 2** 1d6 poison damage, clumsy 1, and enfeebled 1 (1 round); **Stage 3** 2d6 poison damage, clumsy 1, and enfeebled 1 (1 round); **Stage 4** 2d6 poison damage, clumsy 2, and enfeebled 2 (1 round)."

speed: 30 feet, climb 30 feet, jump (see special abilities)

ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__: +15 (1d20+15); __Ref__: +13 (1d20+13); __Will__: +9 (1d20+9);"
hp: 70
health:
  - name: HP
    desc: "70"

attacks:
  - name: Melee
    desc: "⬻ bite +15; __Damage__ 2d8+8 (2d8+8) piercing plus deathjump spider venom"

sourcebook: "4e Homebrew"
```

```encounter-table
name: Deathjump Spider
creatures:
  - 1: Deathjump Spider
```
