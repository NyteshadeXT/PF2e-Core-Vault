---
obsidianUIMode: preview
noteType: pf2eMonster
tags:
  - pf2e/creature/type/beast
  - pf2e/creature/level/2
statblock: inline
name: Wroggi
level: 2
---

```statblock
columns: 2
forcecolumns: true
layout: Pathfinder 2e Creature Layout
token: "[[great-wroggi.png|Show to Players]]"
source: Monster Hunter Conversion
name: "Wroggi"
level: "Creature 2"
alignment: ""
size: "[[medium]]"
traits:
  - "[[beast]]"
  - "[[poison]]"
  - "[[chimeric]]"
modifier: 7
perception: 
  - name: "Perception"
    desc: "+8; scent (imprecise) 30 feet"
languages: —
skills:
  - Acrobatics: +9
  - Athletics: +7
  - Stealth: +8
  - Survival: +6
attributes:
  - str: 2
  - dex: 3
  - con: 2
  - int: -2
  - wis: 2
  - cha: 0
speed: 35 feet
source: "_Monster Hunter Conversion_"
ac: 17
saves:
  - fort: 6
  - ref: 9
  - will: 5
hp: 32
immunities:
  - [[poison]]

abilities_mid:
  - name: Pack Coordination
    desc: "The Wroggi gains a +1 circumstance bonus to attack rolls and Reflex saves while within 10 feet of another Wroggi or the Great Wroggi."

  - name: Toxic Trail
    desc: "(poison) While moving, the Wroggi leaves behind faint poison residue in a 5-foot-wide trail. The first creature to move through this trail each round must attempt a DC 16 Fortitude save or become [[sickened 1]] (sickened 2 on a critical failure). This trail persists until the start of the Wroggi’s next turn."

abilities_bot:
  - name: Poison Spit
    desc: "`pf2:1` (arcane, poison) **Effect** The Wroggi spits a glob of poison at a creature within 20 feet. That creature must attempt a DC 18 Reflex save.<br>- **Success**: Clumsy 1 for 1 round.<br>- **Failure**: 1d6 poison damage and Clumsy 1 for 1 round.<br>- **Critical Failure**: 1d6 poison damage and Clumsy 1 for 1 minute."

attacks:
  - name: "___Melee___ `pf2:1` jaws"
    desc: "(magical, poison) +10 __Damage__ 1d8+2 piercing plus 1d4 persistent poison"

  - name: "___Melee___ `pf2:1` claw"
    desc: "(magical, agile) +8 __Damage__ 1d6+2 slashing"

```
