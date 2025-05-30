---
title: "Orc Gamekeeper"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.hXcBMFGA45ES01Lb" 
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/orc
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Orc Gamekeeper"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Orc Gamekeeper"
level: "Creature 4"

alignment: ""
size: "Medium"
trait_01: [[humanoid]]
trait_02: [[orc]]
modifier: 13
perception:
  - name: "Perception"
    desc: "+13; Darkvision"
languages: "Common, Orcish"
skills:
  - name: "Skills"
    desc: "Athletics: +13, Diplomacy: +9, Nature: +13, Stealth: +12, Survival: +11"
abilityMods: [3, 4, 0, 0, 3, 1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__ +10, __Ref__ +12, __Will__ +9"
hp: 65
health:
  - name: ""
  - name: HP
    desc: "65"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "4x [[Equipment/Bola|Bola]], [[Equipment/Whip|Whip]], [[Equipment/Net|Net]], 2x [[Equipment/Hampering Snare|Hampering Snare]]"
abilities_mid:
  - name: ""
  - name: "Insistent Command"
    desc: "  When the gamekeeper rolls a success to [[Actions/command-an-animal|command-an-animal]], they get a critical success instead; if they roll a critical failure, they get a failure instead."

  - name: "Play Chicken"
    desc: "`pf2:r`  **Trigger** An adjacent enemy misses the gamekeeper with melee attack\n* * *\n\n**Effect** The gamekeeper attempts to capture the flailing assailant. They attempt an Athletics check to [[Actions/grapple|grapple]] the attacker."

attacks:
  - name: ""

  - name: "**Ranged** `pf2:1` Bola"
    desc: "+14 (nonlethal, ranged trip, thrown 20 ft.)\n__Damage__  1d6 + 9 bludgeoning"

  - name: "**Melee** `pf2:1` Whip"
    desc: "+14 (disarm, finesse, nonlethal, reach, trip)\n__Damage__  1d4 + 9 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+14 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 9 bludgeoning"

  - name: "Animal Tandem"
    desc: "`pf2:2`  The orc gamekeeper makes a Strike against a creature adjacent to one of the gamekeeper's animal allies. If it hits, the animal ally deals one die of damage to the target, using the highest damage die among its unarmed attacks."
 
```

```encounter-table
name: Orc Gamekeeper
creatures:
  - 1: Orc Gamekeeper
```



Gamekeepers live on the outskirts of the hold, usually remaining solitary and tending to animals they've captured. Every part of a trapped animal can be useful for making supplies or trading.

* * *

Orcs have a strict moral code encompassing valor and accomplishment, and they cast out those unwilling to follow it. For the last few generations, orcs have been trying to erase the narratives around their culture as being solely focused on war and violence. They invite other races and adventuring parties inside their holds so they may experience the truth of who the orcs are.
