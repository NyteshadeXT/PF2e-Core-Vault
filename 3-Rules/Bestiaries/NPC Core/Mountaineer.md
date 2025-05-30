---
title: "Mountaineer"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.lX6pkCTREEzPzmuY" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/5
  - remaster
statblock: inline
name: "Mountaineer"
level: 5
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Mountaineer"
level: "Creature 5"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 15
perception:
  - name: "Perception"
    desc: "+15; "
languages: "Common, Petran, Pyric"
skills:
  - name: "Skills"
    desc: "Acrobatics: +13, Athletics: +13, Nature: +12, Survival: +12, Mountain Lore: +15"
abilityMods: [4, 3, 2, 0, 3, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__ +14, __Ref__ +12, __Will__ +9"
hp: 80
health:
  - name: ""
  - name: HP
    desc: "80"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "2x [[Equipment/Hatchet|Hatchet]], [[Equipment/Pick|Pick]], [[Equipment/Hide Armor|Hide Armor]], [[Equipment/Climbing Kit (Extreme)|Climbing Kit (Extreme)]], [[Equipment/Compass|Compass]], [[Equipment/Spyglass|Spyglass]], [[Equipment/Survey Map|Survey Map]], 10x [[Equipment/Chalk|Chalk]]"
  - name: "Chasm Crossing"
    desc: "`pf2:2`  The mountaineer Strides twice and Leaps up to 20 feet horizontally."

  - name: "Experienced Steps"
    desc: "  A mountaineer isn't impeded by difficult terrain caused by snow or ice. They gain a +2 circumstance bonus to Acrobatics checks to [[Actions/Balance|Balance]] on slippery ice."

  - name: "Lost My Footing"
    desc: "  **Frequency** once per day\n\n**Trigger** The mountaineer critically fails a check to [[Actions/Balance|Balance]] or Climb\n* * *\n\n**Effect** Training kicks in, and the mountaineer catches themself, improving the check from a critical failure to a failure."

  - name: "Professional Climber"
    desc: "  While climbing, the mountaineer can have up to five allies Following the Expert and grants a +3 circumstance bonus to Athletics checks to Climb."

  - name: "Team Awareness"
    desc: "`pf2:1`  **Requirements** A creature is undetected by one or more of the mountaineer's allies but is observed by the mountaineer\n* * *\n\n**Effect** The mountaineer Points Out an enemy and makes a Strike against them."

abilities_mid:
  - name: ""
  - name: "Tuck and Roll"
    desc: "  During an avalanche, the mountaineer gains a +2 circumstance bonus to their Reflex save against bludgeoning damage and natural disasters."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Pick"
    desc: "+14 (fatal d10)\n__Damage__  1d6 + 10 piercing"

  - name: "**Melee** `pf2:1` Hatchet"
    desc: "+14 (agile, sweep)\n__Damage__  1d6 + 10 slashing"

  - name: "**Ranged** `pf2:1` Hatchet"
    desc: "+13 (agile, sweep, thrown 10 ft.)\n__Damage__  1d6 + 10 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+14 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 10 bludgeoning"

  - name: "Arctic Passage"
    desc: "  The mountaineer ignores difficult terrain caused by ice or snow."

  - name: "Quick Draw"
    desc: "`pf2:1`  The mountaineer Interacts to draw their hatchet or pick, then Strikes with the weapon."
 
```

```encounter-table
name: Mountaineer
creatures:
  - 1: Mountaineer
```



Mountaineers usually travel solo, but some guide expeditions into dangerous terrain.

* * *

Explorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.
