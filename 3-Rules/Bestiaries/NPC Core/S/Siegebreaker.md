---
title: "Siegebreaker"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.yU434Ugr11tvU7TS" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/14
  - remaster
statblock: inline
name: "Siegebreaker"
level: 14
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Siegebreaker"
level: "Creature 14"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 24
perception:
  - name: "Perception"
    desc: "+24; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +25, Athletics: +23, Crafting: +27, Stealth: +25, Thievery: +23, Engineering Lore: +29, Siege Lore: +29"
abilityMods: [2, 5, 4, 5, 2, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 34
armorclass:
  - name: AC
    desc: "34; __Fort__ +25, __Ref__ +28, __Will__ +23"
hp: 300
health:
  - name: ""
  - name: HP
    desc: "300; __Resistances__ alchemical items 10"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Light Mace|+2 Striking Light Mace]], [[Equipment/Leather Armor|+1 Resilient Leather Armor]], [[Equipment/Alchemist's Toolkit|Alchemist's Toolkit]], [[Equipment/Formula Book (Blank)|Formula Book]]"
  - name: "Alchemical Grenades"
    desc: "  A siegebreaker carries 15 alchemical grenades that deal either acid, cold, or fire damage plus 10 persistent damage and 10 splash damage of the same type (typically five of each damage type). They replenish these grenades each day."

abilities_mid:
  - name: ""
  - name: "Explosive Compounds"
    desc: "  When an attacker scores a critical hit against the siegebreaker, one of the siegebreaker's alchemical grenades bursts. The GM determines the grenade randomly. The siegebreaker takes damage from the grenade as though they were hit by the grenade (applying their resistance normally), and any creature in a 10-foot emanation takes the splash damage."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Light Mace"
    desc: "+27 (agile, finesse, magical, shove)\n__Damage__  2d4 + 18 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+25 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 18 bludgeoning"

  - name: "**Ranged** `pf2:1` Alchemical Grenade"
    desc: "+27 (range increment 60 feet, splash)\n__Damage__  10 untyped 3d6 untyped 10 untyped"

  - name: "Expanded Splash"
    desc: "  The siegebreaker's grenades deal splash damage in a 10-foot radius"

  - name: "Quick Grenadier"
    desc: "`pf2:1`  The siegebreaker Interacts to draw a grenade, then Strikes with it."

  - name: "The Wall Must Fall"
    desc: " (exploration) **Requirements** The siegebreaker is at the base of a fortified wall\n* * *\n\n**Effect** The siegebreaker has studied for years to gain exact knowledge of how to combine the alchemical ingredients in their grenades to exponentially multiply their power, creating a terrifying siege-ender bomb that can break open a city wall. The siegebreaker spends 10 minutes combining the ingredients from 9 different alchemical grenades of their choice. The siegebreaker then sets a fuse timer up to 1 minute long. When time's up, the bomb explodes in a concentrated 20-foot burst, dealing 20d6 acid, cold, or fire damage that ignores up to 10 Hardness of structures. Any creature in the area can reduce the damage they take with a DC 37 Reflex check save."
 
```

```encounter-table
name: Siegebreaker
creatures:
  - 1: Siegebreaker
```



When a well-constructed or magically warded fortification repels every assault, a siegebreaker is called in. These masters of alchemical destruction find that the bigger and more protected the wall, the more satisfying it is to break it.

* * *

Whether they're hired to wage war, protect a caravan, or infiltrate an impenetrable fortress, there's ample work for mercenaries all over Golarion.
