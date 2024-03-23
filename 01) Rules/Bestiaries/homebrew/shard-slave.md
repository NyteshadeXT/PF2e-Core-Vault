---
noteType: pf2eMonster
aliases: "Shard Slave"
tags: 
  - pf2e/creature/type/aberration 
  - pfte/creature/type/humanoid
  - pf2e/creature/type/undead 
  - pf2e/creature/level/4
statblock: inline
name: "Shard Slave"
level: 4
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Shard Slave"
token: [[Shard Slave.jpg]]
level: "Creature 4"
alignment: "CE"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Incorporeal"
trait_05: "Aberration"
trait_06: "Undead"
modifier: 8
perception:
  - name: "Perception"
    desc: "Perception +8; __darkvision__;"
languages: "Aklo; "
skills:
  - name: "Skills"
    desc: "__Stealth__: +10 (1d20+10); "
abilityMods: [-1, 6, 3, 4, 3, 1]

abilities_top:

abilities_mid:
  - name: "Shard Reflection"
    desc: "⬲ ([[mental]]);  Upon taking damage the Shard Slave moves up to 30 feet."
abilities_bot:
  - name: "Tendril Pair"
    desc: "The Shard Slave is able to make two Dominating Tendril attacks per round at it's base attack bonus.  Penalties for the third attack apply as normal."
    
  - name: "Shard Burst"
    desc: "⬺ ([[Mental]]);  All enemies within 20 feet of the Shard Slave must succeed at a DC 21 Fortitude save or suffer 2d8+3 (2d8+3) force damage and be pushed 15 feet away."

speed: fly 25 feet

ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__: +11 (1d20+11); __Ref__: +14 (1d20+14); __Will__: +14 (1d20+14);"
hp: 78
health:
  - name: HP
    desc: "78; negative healing; __Immunities__ poison, precision, death effects, disease, paralyzed, unconscious; __Resistances__ all damage 5 (except force, ghost touch, or positive; double resistance vs. non-magical)"

attacks:
  - name: Melee
    desc: "⬻ dominating Tendril +12 ([[occult]]); __Damage__ 1d8+1 (1d8+1) mental and 5 ongoing mental damage DC 15 Fortitude save ends"

sourcebook: "Homebrew"
```

```encounter-table
name: Shard Slave
creatures:
  - 1: Shard Slave
```
