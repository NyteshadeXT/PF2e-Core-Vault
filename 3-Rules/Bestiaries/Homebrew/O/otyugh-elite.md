---
noteType: pf2eMonster
aliases: "Otyugh Elite"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/creature/level/5
statblock: inline
name: "Otyugh Elite"
level: 5
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Otyugh Elite"
level: "Creature 5"
alignment: "N"
size: "Large"
trait_03: "Aberration"
modifier: 12
perception:
  - name: "Perception"
    desc: "Perception +12; __darkvision__, __imprecise scent 30__;"
languages: "Common; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +10 (1d20+10); __Athletics__: +16 (1d20+16); __Stealth__: +10 (1d20+10), (Stealth: +13 (1d20+13) in lair); "
abilityMods: [6, 2, 4, -2, 2, -2]

abilities_mid:
  - name: "Stench"
    desc: " ([[aura]], [[olfactory]]);  40 feet. A creature entering the aura must succeed at a DC 22 Fortitude save or be [[sickened|sickened 1]] (plus [[slowed|slowed 1]] for the same duration on a critical failure). On a success, the creature is temporarily immune to the [[sickened|sickened]] and [[slowed|slowed]] effects of this stench for 1 hour. Regardless of the save, while within the aura, creatures take a –2 circumstance penalty to saves against diseases. An otyugh's stench is due to the offal and refuse that it wallows in, so cleaning the creature thoroughly (with create water and sufficient scrubbing, for example) deactivates the aura, while a sufficiently plugged nose allows an individual to avoid exposure to the stench."
abilities_bot:
  - name: "Constrict"
    desc: "⬻  1d6+6 (1d6+6) bludgeoning, DC 24."
  - name: "Reposition"
    desc: "⬻  The otyugh attempts to move all creatures that it has [[grab|grabed]] into other spaces within the reach of its tentacles, rolling a single [[Athletics]] check and comparing the result against each creature's Fortitude DC. On a failure, the creature remains in place, and on a critical failure, the creature is no longer grabbed."
  - name: "Filth Fever"
    desc: " ([[disease]]);  __Saving Throw__ DC 22 Fortitude. __Stage 1__ carrier with no ill effect (1d4 (1d4) hours) __Stage 2__ [[sickened|sickened 1]] (1 day) __Stage 3__ [[sickened|sickened 1]] and [[slowed|slowed 1]] as long as it remains [[sickened|sickened]] (1 day) __Stage 4__ [[unconscious|unconscious]] ; (1 day)"

speed: 20 feet

ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__: +14 (1d20+14); __Ref__: +10 (1d20+10); __Will__: +12 (1d20+12);"
hp: 85
health:
  - name: HP
    desc: "85;  __Immunities__ disease;"


attacks:
  - name: Melee
    desc: "⬻ jaws +16 __Damage__ 2d6+8 (2d6+8) piercing plus filth fever"
  - name: Melee
    desc: "⬻ tentacle +16 ([[agile]], [[reach|reach 10 feet]]); __Damage__ 1d6+8 (1d6+8) bludgeoning plus Grab"

sourcebook: "_Bestiary_, page 258."
```

```encounter-table
name: Otyugh Elite
creatures:
  - 1: Otyugh Elite
```
