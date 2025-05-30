---
title: "Construction Worker"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.lhhdqML98o90gXqO" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/2
  - remaster
statblock: inline
name: "Construction Worker"
level: 2
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Construction Worker"
level: "Creature 2"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 5
perception:
  - name: "Perception"
    desc: "+5; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +10, Crafting: +13, Society: +6, Architecture Lore: +15"
abilityMods: [4, 0, 3, 2, 1, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__ +11, __Ref__ +6, __Will__ +7"
hp: 35
health:
  - name: ""
  - name: HP
    desc: "35"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Maul|Sledgehammer]], [[Equipment/Leather Armor|Safety Gear]], [[Equipment/Artisan's Toolkit|Artisan's Toolkit]], 4x Bricks, 10x [[Equipment/Chalk|Chalk]]"
  - name: "By Design"
    desc: " (exploration) The construction worker spends 1 minute inspecting the layout of a room and attempts a DC 22 Architecture Lore check check. On a success, they learn the size and layout of all adjacent rooms on the same floor (or all rooms on the floor on a critical success). They can inspect each room only once per day."

  - name: "Specialty Contractor"
    desc: "  For encounters involving architecture or construction, the construction worker is a 6th-level challenge."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Sledgehammer"
    desc: "+10 (shove)\n__Damage__  1d12 + 4 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+10 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 4 bludgeoning"

  - name: "**Ranged** `pf2:1` Brick"
    desc: "+6 (thrown 10 ft.)\n__Damage__  1d6 + 4 bludgeoning"

  - name: "Demolishing Swing"
    desc: "`pf2:2`  The construction worker makes a maul Strike against a creature. If it hits, the creature is pushed 10 feet. If the target is wearing metal armor, its armor also takes the damage, which bypasses 5 of the armor's Hardness."
 
```

```encounter-table
name: Construction Worker
creatures:
  - 1: Construction Worker
```



A brilliant architect can contemplate wondrous structural marvels, but someone must pick up a hammer and make these dreams real. Construction workers are the backbone of any city's infrastructure.

* * *

Society is built upon the backs of laborers.
