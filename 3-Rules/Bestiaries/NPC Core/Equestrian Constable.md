---
title: "Equestrian Constable"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.nVV8UBPEB9gHOh1R" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Equestrian Constable"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Equestrian Constable"
level: "Creature 4"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 11
perception:
  - name: "Perception"
    desc: "+11; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +12, Nature: +10, Settlement Lore: +8"
abilityMods: [4, 1, 3, 0, 2, 1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__ +14, __Ref__ +8, __Will__ +10"
hp: 60
health:
  - name: ""
  - name: HP
    desc: "60"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Crossbow|Crossbow]], [[Equipment/Guisarme|Guisarme]], [[Equipment/Half Plate|Half Plate]], [[Equipment/Manacles (Poor)|Manacles (Poor)]], [[Equipment/Rope|Rope]], [[Equipment/Signal Whistle|Signal Whistle]], 20x [[Equipment/Bolts|Bolts]]"
  - name: "Trained Animal"
    desc: "  The equestrian constable rides a trained mount of their level or lower, usually a [[Monster Core/War Horse|War Horse]] or, for elite equestrian constables, a [[NPC Core/Veteran War Horse|Veteran War Horse]]. The animal has the standard number of actions, uses its normal stat block, and counts toward the encounter's XP budget normally."

abilities_mid:
  - name: ""
  - name: "Opportune Maneuver"
    desc: "`pf2:r`  **Trigger** A creature within 10 feet uses an action with the move trait or leaves a space within the constable's reach during its move action\n* * *\n\n**Effect** The constable attempts to [[Actions/Trip|Trip]] the triggering creature. On a success, the triggering action is disrupted."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Guisarme"
    desc: "+14 (reach 10 feet, trip)\n__Damage__  1d8 + 8 slashing plus knockdown"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+14 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 8 bludgeoning"

  - name: "**Ranged** `pf2:1` Crossbow"
    desc: "+11 (range increment 120 feet, reload 1)\n__Damage__  1d8 + 4 piercing"

  - name: "Vigilant Vantage"
    desc: "`pf2:1`  The equestrian constable [[Actions/Seek|Seeks]] or [[Actions/Point Out|Points Out]] a target. They can [[Actions/Interact|Interact]] to draw an item or [[Actions/Command an Animal|Command an Animal]] to approach or attack the target."
 
```

```encounter-table
name: Equestrian Constable
creatures:
  - 1: Equestrian Constable
```



Equestrian constables patrol for criminals on horseback in wealthy areas or serve as reeves to enforce court orders. Some patrol major roads far from the protection of the city guard.

* * *

Larger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.
