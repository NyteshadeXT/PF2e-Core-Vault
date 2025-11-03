---
title: "Legbreaker"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.WzBMIigC3lfvZyhJ" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/6
  - remaster
statblock: inline
name: "Legbreaker"
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Legbreaker"
level: "Creature 6"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 14
perception:
  - name: "Perception"
    desc: "+14; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +16, Intimidation: +15, Stealth: +15, Thievery: +13"
abilityMods: [4, 3, 3, -1, 2, 0]
speed: 30 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__ +15, __Ref__ +15, __Will__ +12"
hp: 110
health:
  - name: ""
  - name: HP
    desc: "110"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Maul|+1 Maul]], [[Equipment/Studded Leather Armor|Studded Leather Armor]]"
abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Maul"
    desc: "+17 (magical, shove)\n__Damage__  1d10 + 10 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+16 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 10 bludgeoning"

  - name: "Break Legs!"
    desc: "`pf2:2`  The legbreaker makes a maul Strike against an adjacent creature. If it hits, the creature is knocked [[Conditions/Prone|Prone]] and becomes [[Conditions/Clumsy|Clumsy 1]] for 1 minute. As long as this clumsy condition lasts, the creature also takes a –5-foot penalty to its Speeds and has weakness 5 to the legbreaker's Strikes.\n\n[[Bestiary Effects/Effect_ Break Legs!|Effect: Break Legs!]]"

  - name: "Rushing Strike"
    desc: "`pf2:2`  The legbreaker Strides twice. If they end their movement within melee reach of an enemy, they can make a melee Strike against that enemy."

  - name: "Stampeding Shove"
    desc: "`pf2:1`  The legbreaker [[Actions/shove options=stampeding-shove|shove options=stampeding-shove]]{Shoves} a creature, gaining a +2 circumstance bonus to their Athletics check if the target is [[Conditions/Prone|Prone]]. If the Shove succeeds, the target takes 2d10 bludgeoning damage (double damage on a critical success)."
 
```

```encounter-table
name: Legbreaker
creatures:
  - 1: Legbreaker
```



Criminal organizations are always happy to loan out money at exorbitant rates, and their legbreakers are always happy to collect.

* * *

In the underbelly of society, the lawless reign supreme.
