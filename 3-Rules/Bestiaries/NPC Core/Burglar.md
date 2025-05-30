---
title: "Burglar"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.sSa18Ra6zGc4Mp71" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Burglar"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Burglar"
level: "Creature 4"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +10, Athletics: +8, Deception: +7, Society: +7, Stealth: +12, Thievery: +12, Underworld Lore: +7"
abilityMods: [2, 4, 1, 1, 2, 1]
speed: 30 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 21
armorclass:
  - name: AC
    desc: "21 22 vs. traps; __Fort__ +7, __Ref__ +12, __Will__ +10; +1 circumstance to all saves vs. traps"
hp: 60
health:
  - name: ""
  - name: HP
    desc: "60"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Composite Shortbow|Composite Shortbow]], [[Equipment/Shortsword|Shortsword]], [[Equipment/Leather Armor|Leather Armor]], [[Equipment/Climbing Kit|Climbing Kit]], [[Equipment/Thieves' Toolkit|Thieves' Toolkit]], 10x [[Equipment/Arrows|Arrows]], [[Equipment/Darkvision Elixir (Lesser)|Darkvision Elixir (Lesser)]]"
abilities_mid:
  - name: ""
  - name: "Deny Advantage"
    desc: "  The burglar isn't [[Conditions/Off-Guard|Off-Guard]] to creatures of 4th level or lower that are [[Conditions/Hidden|Hidden]], [[Conditions/Undetected|Undetected]], flanking, or using [[Class Features/Surprise Attack|Surprise Attack]]."

  - name: "Nimble Dodge"
    desc: "`pf2:r`  **Trigger** The burglar is targeted with a melee or ranged attack by an attacker it can see.\n* * *\n\n**Effect** The burglar gains a +2 circumstance bonus to AC against the triggering attack."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Shortsword"
    desc: "+14 (agile, finesse, versatile s)\n__Damage__  1d6 + 5 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+14 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 5 bludgeoning"

  - name: "**Ranged** `pf2:1` Composite Shortbow"
    desc: "+14 (deadly d10, propulsive, range increment 60 feet, reload 0)\n__Damage__  1d6 + 4 piercing"

  - name: "Mobility"
    desc: "  When the burglar Strides half their speed or less, that movement does not trigger reactions."

  - name: "[[Bestiary Ability Glossary/Sneak Attack|Sneak Attack]]"
    desc: "  The burglar deals 1d6 extra precision damage to [[Conditions/Off-Guard|Off-Guard]] creatures."

  - name: "Surprise Attack"
    desc: "  On the first round of combat, if the burglar rolls Deception or Stealth for initiative, creatures that haven't acted are [[Conditions/Off-Guard|Off-Guard]] to them."
 
```

```encounter-table
name: Burglar
creatures:
  - 1: Burglar
```



These criminals specialize in breaking and entering, gaining access to secure buildings and bypassing security measures undetected.

* * *

In the underbelly of society, the lawless reign supreme.
