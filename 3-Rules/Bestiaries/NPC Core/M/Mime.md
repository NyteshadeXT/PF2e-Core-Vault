---
title: "Mime"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.sAurhtXSqv3kPAlJ" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/3
  - remaster
statblock: inline
name: "Mime"
level: 3
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Mime"
level: "Creature 3"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 11
perception:
  - name: "Perception"
    desc: "+11; "
languages: "Common; sign language"
skills:
  - name: "Skills"
    desc: "Acrobatics: +10, Athletics: +8, Deception: +10, Performance: +10, Stealth: +10"
abilityMods: [1, 3, 0, 1, 2, 4]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +6, __Ref__ +9, __Will__ +12"
hp: 45
health:
  - name: ""
  - name: HP
    desc: "45; __Resistances__ sonic 5"
abilities_top:
  - name: ""

  - name: "Mimicry Specialist"
    desc: "  For encounters involving mimicry or pantomime, the mime is a 6th-level challenge."

abilities_mid:
  - name: ""
  - name: "Skill Mimicry"
    desc: "  The mime receives a +1 circumstance bonus to skill checks to perform actions they have witnessed another creature successfully perform in the last minute, or +2 if they witness a creature critically succeed instead."

  - name: "Versatile Performance"
    desc: "  The mime can use Performance instead of Diplomacy to [[Actions/make-an-impression statistic=performance|make-an-impression statistic=performance]], instead of Intimidation to [[Actions/demoralize statistic=performance|demoralize statistic=performance]], and instead of Deception to [[Actions/impersonate statistic=performance|impersonate statistic=performance]]."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Fist"
    desc: "+12 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 5 bludgeoning"

  - name: "Mimic Assault"
    desc: "`pf2:2` (attack,mental,visual) **Frequency** once per round\n\n**Requirements** A creature damaged the mime with a weapon Strike since their previous turn\n* * *\n\n**Effect** The mime makes a Performance check against the Perception DC of the creature who damaged them, gesturing as if making an attack with the same weapon. On a success, the mime deals two dice of damage to the creature, using the same type and die size as the required weapon Strike."

  - name: "Pantomime"
    desc: "`pf2:2` (illusion,mental,visual) The mime uses exaggerated movements to emulate one of the following effects, which lasts until the end of their next turn. Any creature who sees this ability can attempt to disbelieve this ability as it is used with a DC 14 Will check save. Creatures that disbelieve are temporarily immune to pantomime for 1 minute.\n\n_Barrier_: The mime creates an [[Conditions/Invisible|Invisible]] 10-foot-by-10-foot stretch of wall adjacent to them and within their reach. The wall has AC 10, 5 hardness, and 10 HP. If the mime Sustains this effect, they can add an additional wall in the same manner.\n\n_Rope_: The mime tugs an invisible rope, trying to knock over or pull at a creature within 15 feet. If the creature fails to disbelieve the pantomime, the mime can choose to either knock the creature [[Conditions/Prone|Prone]] or to move it 5 feet towards them.\n\n_Wind_: The mime creates a 30-foot line of imaginary wind. Creatures who don't disbelieve the pantomime treat this area as difficult terrain, and if they enter or begin their turn in the area, they fall prone."
 
```

```encounter-table
name: Mime
creatures:
  - 1: Mime
```



Mimes are performers who use movement, gestures, and expressions without any speech to act out a scene or situation for onlookers.

* * *

Performances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.
