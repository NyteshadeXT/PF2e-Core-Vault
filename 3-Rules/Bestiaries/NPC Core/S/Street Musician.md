---
title: "Street Musician"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.srsib4P14wAYv4pS" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/2
  - remaster
statblock: inline
name: "Street Musician"
level: 2
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Street Musician"
level: "Creature 2"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 9
perception:
  - name: "Perception"
    desc: "+9; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +6, Crafting: +5, Deception: +8, Diplomacy: +8, Performance: +8, Society: +6"
abilityMods: [2, 1, 2, 0, 1, 4]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__ +8, __Ref__ +8, __Will__ +9"
hp: 32
health:
  - name: ""
  - name: HP
    desc: "32"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Dagger|Dagger]], [[Equipment/Musical Instrument (Handheld)|Musical Instrument (Handheld)]]"
abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Dagger"
    desc: "+9 (agile, versatile s)\n__Damage__  1d4 + 4 piercing"

  - name: "**Ranged** `pf2:1` Dagger"
    desc: "+8 (agile, thrown 10 ft., versatile s)\n__Damage__  1d4 + 4 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+9 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 4 bludgeoning"

  - name: "Occult Spontaneous Spells"
    desc: "DC 18, attack +10; __1st __ (3 slots) _[[Spells/Charm|Charm]]_, _[[Spells/Force Barrage|Force Barrage]]_, _[[Spells/Ventriloquism|Ventriloquism]]_\n__Cantrips__  __(1st)__ _[[Spells/Daze|Daze]]_, _[[Spells/Figment|Figment]]_, _[[Spells/Light|Light]]_, _[[Spells/Summon Instrument|Summon Instrument]]_"

  - name: "Distracting Drone"
    desc: "`pf2:1`  **Requirements** The street musician is playing their instrument\n* * *\n\n**Effect** The street musician attempts a Performance check check compared to the Will DC of an observer within 30 feet. On a success, the target is [[Conditions/Fascinated|Fascinated]] by the street musician and [[Conditions/Off-Guard|Off-Guard]] for 1 round."

  - name: "[[Bestiary Ability Glossary/Sneak Attack|Sneak Attack]]"
    desc: "  The street musician deals an additional 1d4 precision damage to offguard creatures. This increases to 1d6 against creatures [[Conditions/Off-Guard|Off-Guard]] due to the street musician's [[Actions/Feint|Feint]] or distracting drone."
 
```

```encounter-table
name: Street Musician
creatures:
  - 1: Street Musician
```



Many musicians make their living off stage by playing at markets, fairs, or crossroads. While their fame may not be as widespread as theatrical performers, they are nonetheless staples of many communities.

* * *

Performances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.
