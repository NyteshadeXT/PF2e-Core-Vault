---
title: "Bodyguard"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.3jkmJgV4zwygUqLy" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/1
  - remaster
statblock: inline
name: "Bodyguard"
level: 1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Bodyguard"
level: "Creature 1"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 8
perception:
  - name: "Perception"
    desc: "+8; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +7, Intimidation: +6, Society: +2"
abilityMods: [4, 2, 3, -1, 1, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__ +8, __Ref__ +7, __Will__ +4"
hp: 25
health:
  - name: ""
  - name: HP
    desc: "25"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Greatclub|Greatclub]], [[Equipment/Sap|Sap]], [[Equipment/Sling|Sling]]"
abilities_mid:
  - name: ""
  - name: "Bodyguard's Reprisal"
    desc: "`pf2:r`  **Trigger** A creature attacks the subject of bodyguard's defense\n* * *\n\n**Effect** The bodyguard makes a Strike against the triggering creature."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Fist"
    desc: "+7 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 4 bludgeoning"

  - name: "**Melee** `pf2:1` Greatclub"
    desc: "+7 (backswing, shove)\n__Damage__  1d10 + 4 bludgeoning"

  - name: "**Melee** `pf2:1` Sap"
    desc: "+7 (agile, nonlethal)\n__Damage__  1d6 + 4 bludgeoning"

  - name: "**Ranged** `pf2:1` Sling"
    desc: "+5 (propulsive, range increment 50 feet, reload 1)\n__Damage__  1d6 + 2 bludgeoning"

  - name: "Bodyguard's Defense"
    desc: "`pf2:1`  The bodyguard grants an adjacent ally a +2 circumstance bonus to AC. This lasts until the start of the bodyguard's next turn or until the ally is no longer adjacent, whichever comes first.\n\n[[Bestiary Effects/Effect_ Bodyguard's Defense|Effect: Bodyguard's Defense]]"
 
```

```encounter-table
name: Bodyguard
creatures:
  - 1: Bodyguard
```



Hired to protect someone famous or powerful, bodyguards use intimidation, quick wits, and martial skill to keep their charges safe. Such mercenaries might be auxiliaries to a noble's personal guards, but with special directives to safeguard their patrons.

* * *

Whether they're hired to wage war, protect a caravan, or infiltrate an impenetrable fortress, there's ample work for mercenaries all over Golarion.
