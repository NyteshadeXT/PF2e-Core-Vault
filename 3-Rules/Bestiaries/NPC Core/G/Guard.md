---
title: "Guard"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.Aktz95gNNzfAiTzk" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/1
  - remaster
statblock: inline
name: "Guard"
level: 1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Guard"
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
    desc: "Athletics: +7, Intimidation: +5, Legal Lore: +3"
abilityMods: [3, 2, 2, 0, 2, -1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__ +7, __Ref__ +5, __Will__ +5"
hp: 20
health:
  - name: ""
  - name: HP
    desc: "20"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Crossbow|Crossbow]], [[Equipment/Dagger|Dagger]], [[Equipment/Sap|Sap]], [[Equipment/Scale Mail|Scale Mail]], [[Equipment/Signal Whistle|Signal Whistle]], 10x [[Equipment/Bolts|Bolts]]"
abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Fist"
    desc: "+7 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 3 bludgeoning"

  - name: "**Melee** `pf2:1` Sap"
    desc: "+7 (agile, nonlethal)\n__Damage__  1d6 + 3 bludgeoning"

  - name: "**Ranged** `pf2:1` Crossbow"
    desc: "+6 (range increment 120 feet, reload 1)\n__Damage__  1d8 piercing"
 
```

```encounter-table
name: Guard
creatures:
  - 1: Guard
```



Guards are rank-and-file members of a town watch or city guard, trained to look for trouble, take down criminals, and follow orders.

* * *

Larger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.
