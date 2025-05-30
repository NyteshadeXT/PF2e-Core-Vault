---
title: "Infantry Soldier"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.8ZkfzgUmN06j4jIu" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/2
  - remaster
statblock: inline
name: "Infantry Soldier"
level: 2
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Infantry Soldier"
level: "Creature 2"

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
    desc: "Athletics: +10, Intimidation: +7, Warfare Lore: +6"
abilityMods: [4, 0, 3, 0, 2, 1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +9, __Ref__ +6, __Will__ +6"
hp: 28
health:
  - name: ""
  - name: HP
    desc: "28"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Crossbow|Crossbow]], [[Equipment/Shortsword|Shortsword]], [[Equipment/Wooden Shield|Wooden Shield]], [[Equipment/Chain Mail|Chain Mail]], 10x [[Equipment/Bolts|Bolts]]"
abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

  - name: "[[Bestiary Ability Glossary/Shield Block|Shield Block]]"
    desc: "`pf2:r`  **Trigger** The monster has its shield raised and takes damage from a physical attack.\n* * *\n\n**Effect** The monster snaps its shield into place to deflect a blow. The shield prevents the monster from taking an amount of damage up to the shield's Hardness. The monster and the shield each take any remaining damage, possibly breaking or destroying the shield."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Shortsword"
    desc: "+10 (agile, finesse, versatile s)\n__Damage__  1d6 + 5 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+10 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 6 bludgeoning"

  - name: "**Ranged** `pf2:1` Crossbow"
    desc: "+6 (range increment 120 feet, reload 1)\n__Damage__  1d8 + 2 piercing"

  - name: "Guardian Shield"
    desc: "`pf2:1`  The infantry soldier Raises their Shield, but grants the benefit to an adjacent ally and can Shield Block for that ally. Guardian Shield ends early if at any point the ally is no longer adjacent."
 
```

```encounter-table
name: Infantry Soldier
creatures:
  - 1: Infantry Soldier
```



Though low on the military hierarchy, infantry are still highly disciplined warriors, challenging for any ordinary person to face in combat.

* * *

A military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.
