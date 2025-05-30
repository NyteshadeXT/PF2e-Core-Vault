---
title: "Messenger"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.z1tLeckmpJuStmlx" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/1
  - remaster
statblock: inline
name: "Messenger"
level: 1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Messenger"
level: "Creature 1"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 6
perception:
  - name: "Perception"
    desc: "+6; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +8, Athletics: +5, Diplomacy: +6, Society: +7, Survival: +4"
abilityMods: [0, 3, 4, 0, 1, 1]
speed: 30 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__ +7, __Ref__ +10, __Will__ +4"
hp: 20
health:
  - name: ""
  - name: HP
    desc: "20"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Dagger|Dagger]], [[Equipment/Sling|Sling]], Satchel of Mail, 10x [[Equipment/Sling Bullets|Sling Bullets]]"
  - name: "Don't Shoot the Messenger"
    desc: "  Messengers get a +2 circumstance bonus to Diplomacy checks to convince another creature not to blame them for any news they deliver."

  - name: "Express Messenger"
    desc: "  Allies traveling with the messenger gain a +5-foot circumstance bonus to travel Speed, to a maximum of the messenger's travel Speed. If they use the [[Actions/Hustle|Hustle]] activity, they can Hustle for a minimum of 1 hour instead of the usual amount."

  - name: "Road Runner"
    desc: "  Messengers can use Society in place of Survival to Sense Direction when they're on a road."

  - name: "Special Delivery"
    desc: "`pf2:2`  The messenger Interacts to take an item of light Bulk or less held by a willing ally within reach, Strides, then delivers the item to a willing ally in reach at their new location."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Dagger"
    desc: "+8 (agile, finesse, versatile s)\n__Damage__  1d4 + 2 piercing"

  - name: "**Ranged** `pf2:1` Dagger"
    desc: "+8 (agile, thrown 10 ft., versatile s)\n__Damage__  1d4 + 2 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+8 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 2 bludgeoning"

  - name: "**Ranged** `pf2:1` Sling"
    desc: "+8 (propulsive, range increment 50 feet, reload 1)\n__Damage__  1d6 + 2 bludgeoning"
 
```

```encounter-table
name: Messenger
creatures:
  - 1: Messenger
```



When a message, mail, or package needs to be delivered, messengers make deliveries—typically from large towns and cities or to other towns and cities.

* * *

Society is built upon the backs of laborers.
