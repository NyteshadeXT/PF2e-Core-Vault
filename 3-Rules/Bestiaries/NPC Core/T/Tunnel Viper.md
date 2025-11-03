---
title: "Tunnel Viper"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.ETSHIHmTP0Yajsci" 
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/ratfolk
  - pf2eMonster
  - pf2e/creature/level/1
  - remaster
statblock: inline
name: "Tunnel Viper"
level: 1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Tunnel Viper"
level: "Creature 1"

alignment: ""
size: "Small"
trait_01: [[humanoid]]
trait_02: [[ratfolk]]
modifier: 7
perception:
  - name: "Perception"
    desc: "+7; Darkvision"
languages: "Common, Sakvroth, Ysoki"
skills:
  - name: "Skills"
    desc: "Acrobatics: +6, Athletics: +6, Nature: +5, Stealth: +8, Survival: +5, Thievery: +6"
abilityMods: [3, 3, 0, 1, 2, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__ +5, __Ref__ +9, __Will__ +5"
hp: 20
health:
  - name: ""
  - name: HP
    desc: "20"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Arbalest|Arbalest]], [[Equipment/Ranseur|Ranseur]], [[Equipment/Scale Mail|Scale Mail]], 3x [[Equipment/Caltrops|Caltrops]], 20x [[Equipment/Bolts|Bolts]]"
abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Ranseur"
    desc: "+8 (disarm, reach 10 feet)\n__Damage__  1d10 + 3 piercing"

  - name: "**Melee** `pf2:1` Jaws"
    desc: "+8 (agile, unarmed)\n__Damage__  1d4 + 3 piercing"

  - name: "**Ranged** `pf2:1` Arbalest"
    desc: "+8 (backstabber, range increment 110 feet, reload 1)\n__Damage__  1d10 piercing"

  - name: "Running Reload"
    desc: "`pf2:1`  The tunnel viper Strides, Steps, or [[Actions/Sneak|Sneaks]], then Interacts to reload."

  - name: "Swarming"
    desc: "  A tunnel viper can end their movement in the same square as an ally that also has this ability. Only two such creatures can share the same space."

  - name: "Tunnel Fighter"
    desc: "  The tunnel viper deals an additional 1d6 precision damage to creatures that are [[Actions/Squeeze|Squeezing]] or in difficult terrain due to narrow spaces."

  - name: "Tunnel Travel"
    desc: "  Narrow spaces aren't difficult terrain for the tunnel viper, and the viper can [[Actions/Squeeze|Squeeze]] at 5 feet per round (or 10 feet on a critical success)."
 
```

```encounter-table
name: Tunnel Viper
creatures:
  - 1: Tunnel Viper
```



There is no better way for a ysoki to distinguish themself than to defend the warren, with many proving themselves by venturing out and challenging monsters they come across. Those who return triumphant from such tests find themselves among the ranks of ysoki warriors, able to wear their accomplishments as a badge of pride. They often venture out again once established and experienced to attain more notoriety as warriors.

* * *

Ysoki (or, as outsiders call them, ratfolk) in their warrens have a society that is both stern and democratic, caring and ever vigilant. And at the top is a handful of intimidating and protective figures who make sure the swarm remains safe.
