---
title: "Hero Hunter"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.qsS9EAPMfav5mmzK" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/13
  - remaster
statblock: inline
name: "Hero Hunter"
level: 13
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Hero Hunter"
level: "Creature 13"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 25
perception:
  - name: "Perception"
    desc: "+25; "
languages: ""
skills:
  - name: "Skills"
    desc: "Acrobatics: +23, Athletics: +26, Crafting: +24, Deception: +19, Nature: +21, Stealth: +27, Survival: +25"
abilityMods: [5, 4, 3, 0, 2, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 33
armorclass:
  - name: AC
    desc: "33; __Fort__ +22, __Ref__ +25, __Will__ +21"
hp: 230
health:
  - name: ""
  - name: HP
    desc: "230"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Greataxe|+1 Striking Greataxe]], [[Equipment/Hand Crossbow|+1 Striking Hand Crossbow]], [[Equipment/Studded Leather Armor|+1 Resilient Studded Leather Armor]], 15x [[Equipment/Bolts|Bolts]]"
  - name: "Prepared Trapper"
    desc: "  A hero hunter carries the materials to Craft two [[Equipment/Alarm Snare|Alarm Snares]], two [[Equipment/Grasping Snare|Grasping Snares]], one [[Equipment/Snagging Hook Snare|Snagging Hook Snare]], and one [[Equipment/Stunning Snare|Stunning Snare]]. The hero hunter replenishes any used supplies each time they make their daily preparations."

abilities_mid:
  - name: ""
  - name: "Nimble Dodge"
    desc: "  **Trigger** The hero hunter is targeted with a melee or ranged attack by an attacker they can see\n* * *\n\n**Effect** The hero hunter gains a +2 circumstance bonus to AC against the triggering attack."

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Greataxe"
    desc: "+27 (magical, sweep)\n__Damage__  2d12 + 13 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+26 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 13 bludgeoning"

  - name: "**Ranged** `pf2:1` Hand Crossbow"
    desc: "+26 (magical, range increment 60 feet, reload 1)\n__Damage__  2d6 + 8 piercing"

  - name: "Deadly Snares"
    desc: "`pf2:3` (manipulate) The hero hunter Crafts a snare that would normally take 1 minute or less to Craft. The Stealth DC to locate the snare and DC to disable it with Thievery are equal to the hero hunter's Crafting DC if it's higher than the snare's DC."

  - name: "Felling Shot"
    desc: "`pf2:1`  The hero hunter makes a ranged Strike. If it hits and deals damage to a flying target, the target falls up to 120 feet but takes no damage from the fall. The creature can't Fly, [[Actions/Leap|Leap]], levitate or otherwise leave the ground until the end of the hero hunter's next turn."

  - name: "Hunter's Precision"
    desc: "`pf2:1` (stance) The hero hunter knows how to hunt and kill any game. While in this stance, all the hero hunter's Strikes deal an additional 2d8 precision damage, and the range increment for their ranged weapon Strikes is 20 feet longer than normal. If the hunter gets a critical hit with a weapon Strike, the target also takes 2d6 persistent bleed damage."
 
```

```encounter-table
name: Hero Hunter
creatures:
  - 1: Hero Hunter
```



Some hunters grow bored of simple beasts and monsters. For them, a battle-tested warrior is the finest prey.

* * *

Villains pursue selfish and cruel goals, trampling over anyone in their way.
