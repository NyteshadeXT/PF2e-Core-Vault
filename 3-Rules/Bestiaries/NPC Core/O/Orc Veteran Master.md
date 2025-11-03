---
title: "Orc Veteran Master"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.A4XWtiK4iStEDAUu" 
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/orc
  - pf2eMonster
  - pf2e/creature/level/10
  - remaster
statblock: inline
name: "Orc Veteran Master"
level: 10
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Orc Veteran Master"
level: "Creature 10"

alignment: ""
size: "Medium"
trait_01: [[humanoid]]
trait_02: [[orc]]
modifier: 20
perception:
  - name: "Perception"
    desc: "+20; Darkvision"
languages: "Common, Orcish"
skills:
  - name: "Skills"
    desc: "Acrobatics: +20, Athletics: +23, Diplomacy: +15, Intimidation: +20, Stealth: +20, Warfare Lore: +18"
abilityMods: [5, 4, 3, 0, 2, 1]
speed: 30 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 30
armorclass:
  - name: AC
    desc: "30; __Fort__ +19, __Ref__ +20, __Will__ +18"
hp: 175
health:
  - name: ""
  - name: HP
    desc: "175"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Bo Staff|+1 Striking Bo Staff]], [[Equipment/Composite Longbow|+1 Striking Composite Longbow]], [[Equipment/Breastplate|+1 Breastplate]], 20x [[Equipment/Arrows|Arrows]]"
abilities_mid:
  - name: ""
  - name: "Fly Through Battle"
    desc: "  The veteran master gains an additional reaction each round that can be used only to make a Reactive Pursuit."

  - name: "Reactive Pursuit"
    desc: "`pf2:r`  **Trigger** An enemy within reach attempts to move away\n* * *\n\n**Effect** The veteran master Strides up to their Speed, following the enemy and keeping it in reach throughout its movement until it stops moving or the master has moved their full Speed."

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Bo Staff"
    desc: "+24 (magical, parry, reach, trip)\n__Damage__  2d8 + 13 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+24 (agile, nonlethal, unarmed)\n__Damage__  2d4 + 13 bludgeoning"

  - name: "**Ranged** `pf2:1` Composite Longbow"
    desc: "+23 (deadly d10, magical, propulsive, range increment 100 feet, reload 0, volley 30 ft.)\n__Damage__  2d8 + 10 piercing"

  - name: "Reshape the Battle"
    desc: "`pf2:1`  The veteran master attempts a bo staff Strike. If it hits a creature of the master's size or smaller, the master can automatically [[Actions/Reposition|Reposition]] it to any space within the bo staff's reach."

  - name: "Staff Swipe"
    desc: "`pf2:2`  The veteran master extends their reach to smash multiple creatures with their bo. They attempt a bo staff Strike against each enemy in a 15-foot cone. This counts as two attacks toward their multiple attack penalty, but the penalty doesn't increase until after all the attacks."
 
```

```encounter-table
name: Orc Veteran Master
creatures:
  - 1: Orc Veteran Master
```



While the sword and shield are reliable and proven in battle, the veteran master is the weapon. They have been hardened by decades of fighting, but they still manage to find peace within themselves to gain a physical advantage.

* * *

Orcs have a strict moral code encompassing valor and accomplishment, and they cast out those unwilling to follow it. For the last few generations, orcs have been trying to erase the narratives around their culture as being solely focused on war and violence. They invite other races and adventuring parties inside their holds so they may experience the truth of who the orcs are.
