---
title: "Gang Leader"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.AdZ4EklEmpHViycl" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/7
  - remaster
statblock: inline
name: "Gang Leader"
level: 7
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Gang Leader"
level: "Creature 7"

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
    desc: "Acrobatics: +15, Athletics: +17, Deception: +15, Intimidation: +17, Society: +11, Stealth: +17, Thievery: +15, Underworld Lore: +15"
abilityMods: [4, 4, 2, 2, -1, 4]
speed: 30 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__ +13, __Ref__ +17, __Will__ +12"
hp: 110
health:
  - name: ""
  - name: HP
    desc: "110"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Shortsword|+1 Shortsword]], [[Equipment/Sling|Sling]], [[Equipment/Glue Bomb (Moderate)|Glue Bomb (Moderate)]], [[Equipment/Studded Leather Armor|Studded Leather Armor]], 10x [[Equipment/Sling Bullets|Sling Bullets]], [[Equipment/Healing Potion (Lesser)|Healing Potion (Lesser)]]"
abilities_mid:
  - name: ""
  - name: "Deny Advantage"
    desc: "  The gang leader isn't [[Conditions/Off-Guard|Off-Guard]] to creatures of 7th level or lower that are [[Conditions/Hidden|Hidden]], [[Conditions/Undetected|Undetected]], flanking, or using surprise attack."

  - name: "Evasive Reflexes"
    desc: "  When the gang leader rolls a success on a Reflex save, they get a critical success instead."

  - name: "Nimble Dodge"
    desc: "`pf2:r`  **Trigger** The gang leader is targeted with an attack by an attacker they can see\n* * *\n\n**Effect** The gang leader gains a +2 circumstance bonus to AC against the triggering attack."

  - name: "Surprise Attacker"
    desc: "  On the first round of combat, creatures that haven't acted are [[Conditions/Off-Guard|Off-Guard]] to the gang leader."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Shortsword"
    desc: "+18 (agile, magical, versatile s)\n__Damage__  1d6 + 10 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+17 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 10 bludgeoning"

  - name: "**Ranged** `pf2:1` Sling"
    desc: "+18 (propulsive, range increment 50 feet, reload 1)\n__Damage__  1d6 + 8 bludgeoning"

  - name: "Brutal Rally"
    desc: "`pf2:r` (auditory,emotion,linguistic,mental) **Trigger** The gang leader rolls a critical hit against a creature\n* * *\n\n**Effect** All allies that can see the gang leader gain a +1 circumstance bonus to attack rolls until the start of the gang leader's next turn.\n\n[[Bestiary Effects/Effect_ Brutal Rally|Effect: Brutal Rally]]"

  - name: "Gang Up"
    desc: "  Any enemy is [[Conditions/Off-Guard|Off-Guard]] against the gang leader's melee attacks due to flanking as long as the enemy is within melee reach of both the gang leader and one of the gang leader's allies."

  - name: "Quick Draw"
    desc: "`pf2:1`  The gang leader [[Actions/Interact|Interacts]] to draw a weapon, then Strikes with that weapon."

  - name: "[[Bestiary Ability Glossary/Sneak Attack|Sneak Attack]]"
    desc: "  The gang leader deals an extra 2d6 precision damage to [[Conditions/Off-Guard|Off-Guard]] creatures."
 
```

```encounter-table
name: Gang Leader
creatures:
  - 1: Gang Leader
```



Gang leaders direct cutthroats, killers, thieves, and toughs. The gang leader often appears alongside a bandit gang or other criminals.

* * *

Villains pursue selfish and cruel goals, trampling over anyone in their way.
