---
title: "Dancer"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.r7nprCpuqhEulxjD" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/1
  - remaster
statblock: inline
name: "Dancer"
level: 1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Dancer"
level: "Creature 1"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 4
perception:
  - name: "Perception"
    desc: "+4; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +7, Athletics: +7, Diplomacy: +6, Performance: +13, Stealth: +6, Theatre Lore: +5"
abilityMods: [1, 3, 1, 0, 0, 4]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__ +6, __Ref__ +8, __Will__ +3"
hp: 20
health:
  - name: ""
  - name: HP
    desc: "20"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "3x [[Equipment/Dagger|Dagger]], [[Equipment/Clothing (Fine)|Jewelry and Clothes]]"
abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Dagger"
    desc: "+7 (agile, finesse, versatile s)\n__Damage__  1d4 + 3 piercing"

  - name: "**Melee** `pf2:1` Foot"
    desc: "+7 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 3 bludgeoning"

  - name: "**Ranged** `pf2:1` Dagger"
    desc: "+7 (agile, thrown 10 ft., versatile s)\n__Damage__  1d4 + 3 piercing"

  - name: "Fascinating Dance"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The dancer Strides up to their Speed. Once during this movement, when the dancer is adjacent to a creature, the dancer can attempt to mesmerize that creature, who attempts a DC 17 Will check save. On a failure, that creature is [[Conditions/Fascinated|Fascinated]] with the dancer until the end of its next turn."
 
```

```encounter-table
name: Dancer
creatures:
  - 1: Dancer
```



Dance can be used to tell stories, share emotions, provide entertainment, and display a performer's athletic ability.

* * *

Performances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.
