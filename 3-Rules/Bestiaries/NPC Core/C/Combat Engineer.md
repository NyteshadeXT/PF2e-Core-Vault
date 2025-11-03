---
title: "Combat Engineer"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.szslWxJGvht4aM3j" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/1
  - remaster
statblock: inline
name: "Combat Engineer"
level: 1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Combat Engineer"
level: "Creature 1"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 7
perception:
  - name: "Perception"
    desc: "+7; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +8, Crafting: +13, Engineering Lore: +15, Warfare Lore: +13"
abilityMods: [3, 2, 1, 4, 2, 1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 15
armorclass:
  - name: AC
    desc: "15; __Fort__ +8, __Ref__ +5, __Will__ +7"
hp: 20
health:
  - name: ""
  - name: HP
    desc: "20"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Pick|Entrenching Tool]], [[Equipment/Heavy Crossbow|Heavy Crossbow]], [[Equipment/Studded Leather Armor|Studded Leather Armor]], 10x [[Equipment/Bolts|Bolts]]"
  - name: "Logistics Specialist"
    desc: "  In situations involving battlefield engineering or logistics, the combat engineer is a 5th-level challenge."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Entrenching Tool"
    desc: "+8 (fatal d10)\n__Damage__  1d6 + 3 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+8 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 3 bludgeoning"

  - name: "**Ranged** `pf2:1` Heavy Crossbow"
    desc: "+7 (range increment 120 feet, reload 2)\n__Damage__  1d10 piercing"

  - name: "Fortify"
    desc: " (concentrate,exploration,manipulate) The combat engineer digs trenches and constructs earthen barricades at a rate of one 5-foot cube per hour. A combat engineer can instead direct the work of four allied Small or larger creatures to quadruple this rate."

  - name: "Improvised Barricade"
    desc: "`pf2:2` (manipulate) **Requirements** The combat engineer has at least 5 Bulk of loose items or material within reach\n* * *\n\n**Effect** The combat engineer slaps together a 5-foot high barrier in an adjacent square. The barrier is an object with 10 Hit Points, 5 Hardness, AC 10, and it provides standard cover. After 1 minute, the barrier collapses under its own weight."
 
```

```encounter-table
name: Combat Engineer
creatures:
  - 1: Combat Engineer
```



Be it a bridge to get a battalion across a river, watchtowers to pierce the fog of war, or fortifications to secure territory, armies have always needed those who can build. The combat engineer is a soldier specializing in these sorts of constructions.

* * *

A military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.
