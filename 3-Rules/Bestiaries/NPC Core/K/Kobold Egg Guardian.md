---
title: "Kobold Egg Guardian"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.m7UKHHTw1WpDCfsL" 
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/kobold
  - pf2eMonster
  - pf2e/creature/level/3
  - remaster
statblock: inline
name: "Kobold Egg Guardian"
level: 3
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Kobold Egg Guardian"
level: "Creature 3"

alignment: ""
size: "Small"
trait_01: [[humanoid]]
trait_02: [[kobold]]
modifier: 9
perception:
  - name: "Perception"
    desc: "+9; Darkvision"
languages: "Common, Sakvroth"
skills:
  - name: "Skills"
    desc: "Acrobatics: +9, Athletics: +11, Deception: +9, Diplomacy: +9"
abilityMods: [3, 3, 1, 0, 0, 3]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 19
armorclass:
  - name: AC
    desc: "19; __Fort__ +9, __Ref__ +12, __Will__ +6"
hp: 48
health:
  - name: ""
  - name: HP
    desc: "48"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Crossbow|Crossbow]], [[Equipment/Longspear|Longspear]], [[Equipment/Leather Armor|Leather Armor]], 20x [[Equipment/Bolts|Bolts]]"
abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Longspear"
    desc: "+12 (reach 10 feet)\n__Damage__  1d8 + 5 piercing"

  - name: "**Melee** `pf2:1` Claw"
    desc: "+12 (agile, unarmed)\n__Damage__  1d4 + 5 slashing"

  - name: "**Ranged** `pf2:1` Crossbow"
    desc: "+12 (range increment 120 feet, reload 1)\n__Damage__  1d8 + 2 piercing"

  - name: "Immobilizing Thrust"
    desc: "`pf2:2`  The kobold egg guardian makes a longspear Strike. If the Strike hits, the target must attempt a DC 20 Reflex check save. On a failure, the creature is [[Conditions/Immobilized|Immobilized]] until the kobold egg guardian moves, attacks with the longspear, or is no longer wielding the longspear."

  - name: "Luring Retreat"
    desc: "`pf2:2` (auditory,mental,visual) The kobold egg guardian screams and Strides up to their Speed. Each enemy who sees or hears the kobold egg guardian must succeed at a DC 17 Will check save or be [[Conditions/Fascinated|Fascinated]] by the egg guardian for 1 round. On the creature's turn, it must use at least 1 action (or 2 actions on a critical failure) to move closer to the kobold egg guardian (while avoiding obvious dangers). Regardless of the result of the save, targets are then immune to Luring Retreat for 24 hours."
 
```

```encounter-table
name: Kobold Egg Guardian
creatures:
  - 1: Kobold Egg Guardian
```



Kobold egg guardians are some of the best warriors in a tribe, tasked with protecting the next generation. They pledge to give their lives to protect the tribe's eggs, though not before exhausting all their tricks.

* * *

Kobolds are drawn to beings and objects of power, establishing their communities near them. Once a warren has been formed, the resident kobolds construct traps and set up ambushes to deter interlopers.
