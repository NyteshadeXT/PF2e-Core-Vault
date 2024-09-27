---
title: "Besieged Logging Crew"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.wardens-of-wildwood-bestiary.Actor.pO47dwHY2ulSpg7F" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Besieged Logging Crew"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #201: Pactbreaker"
name: "Besieged Logging Crew"
level: "Creature 4"

alignment: ""
size: "grg"
trait_01: [[human]]
trait_02: [[humanoid]]
trait_03: [[troop]]
modifier: 7
perception:
  - name: "Perception"
    desc: "+7; "
languages: "Common, Fey"
skills:
  - name: "Skills"
    desc: "Acrobatics: +9, Athletics: +12, Nature: +8, Survival: +10, Lumber Lore: +10"
abilityMods: [3, 2, 2, 1, 2, 1]
speed: 25 feet
sourcebook: "_Pathfinder #201: Pactbreaker_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +12, __Ref__ +9, __Will__ +10"
hp: 60
health:
  - name: ""
  - name: HP
    desc: "60, Thresholds 40 (12 squares), 20 (8 squares);; __Weaknesses__ area damage 10, splash damage 5"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Form Up|Form Up]]"
    desc: "`pf2:1`  "

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Troop Defenses|Troop Defenses]]"
    desc: "  **Thresholds** 40 (12 squares), 20 (8 squares)\n\n* * *\n"

attacks:
  - name: ""

  - name: "Hurl Axes"
    desc: "`pf2:2`  The loggers draw their hatchets, then launch a ranged attack in the form of a volley. This volley is a @Template[burst|distance:10] within 120 feet that deals 3d6 slashing damage (DC 18 Reflex check save). When the crew is reduced to 8 or fewer squares, this area decreases to a @Template[burst|distance:5]."

  - name: "Tandem Chop"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The loggers engage in a coordinated axe attack against each enemy within 10 feet, with a DC 19 Reflex check save. The damage depends on the number of actions expended.\n\n`pf2:1` 1d10 slashing damage\n\n`pf2:2` 3d6+7 slashing damage\n\n`pf2:3` 3d6+10 slashing damage"

  - name: "Troop Movement"
    desc: "  Whenever the loggers Stride, they first Form Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then move up to their Speed. This works just like a Gargantuan creature moving; for instance, if any square of the logging crew enters difficult terrain, the extra movement cost applies to all the loggers."
 
```

```encounter-table
name: Besieged Logging Crew
creatures:
  - 1: Besieged Logging Crew
```




