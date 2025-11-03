---
title: "Acrobat"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.5KojtpJA0T5xoum4" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/2
  - remaster
statblock: inline
name: "Acrobat"
level: 2
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Acrobat"
level: "Creature 2"

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
    desc: "Acrobatics: +15, Athletics: +8, Deception: +5, Performance: +9, Stealth: +8, Circus Lore: +5"
abilityMods: [2, 4, 2, 1, 0, 1]
speed: 30 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +8, __Ref__ +11, __Will__ +4"
hp: 30
health:
  - name: ""
  - name: HP
    desc: "30"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "5x [[Equipment/Dagger|Dagger]], [[Equipment/Climbing Kit|Climbing Kit]], [[Equipment/Rope|Rope]]"
  - name: "Steady Balance"
    desc: "  When the acrobat rolls a success on an Acrobatics check, they get a critical success instead.\n\nThey aren't [[Conditions/Off-Guard|Off-Guard]] when attempting to [[Actions/Balance|Balance]] and can attempt an Acrobatics check instead of a Reflex save to [[Actions/Grab an Edge|Grab an Edge]]."

abilities_mid:
  - name: ""
  - name: "Cat Fall"
    desc: "  The acrobat treats all falls as 25 feet shorter."

  - name: "Nimble Dodge"
    desc: "`pf2:r`  **Trigger** The acrobat is targeted with a melee or ranged attack by an attacker they can see\n* * *\n\n**Effect** The acrobat gains a +2 circumstance bonus to AC against the triggering attack."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Dagger"
    desc: "+10 (agile, finesse, versatile s)\n__Damage__  1d4 + 4 piercing"

  - name: "**Melee** `pf2:1` Foot"
    desc: "+10 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 4 bludgeoning"

  - name: "**Ranged** `pf2:1` Dagger"
    desc: "+11 (agile, thrown 10 ft., versatile s)\n__Damage__  1d4 + 4 piercing"

  - name: "[[Bestiary Ability Glossary/Sneak Attack|Sneak Attack]]"
    desc: "  The acrobat deals an extra 1d6 precision damage to [[Conditions/Off-Guard|Off-Guard]] creatures."

  - name: "Swinging Strike"
    desc: "`pf2:2`  The acrobat swings on a rope or trapeze, moving up to double their Speed. At any point during the swing, they can make a melee Strike."
 
```

```encounter-table
name: Acrobat
creatures:
  - 1: Acrobat
```



Acrobats perform feats of agility, balance, and strength.

* * *

Performances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.
