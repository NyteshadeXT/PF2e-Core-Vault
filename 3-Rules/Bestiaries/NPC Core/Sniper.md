---
title: "Sniper"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.liMzj39g48s8ZtIf" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/5
  - remaster
statblock: inline
name: "Sniper"
level: 5
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Sniper"
level: "Creature 5"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 15
perception:
  - name: "Perception"
    desc: "+15; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +11, Athletics: +11, Medicine: +11, Stealth: +15, Survival: +11"
abilityMods: [2, 4, 1, 1, 4, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__ +10, __Ref__ +15, __Will__ +11"
hp: 65
health:
  - name: ""
  - name: HP
    desc: "65"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Dagger|Dagger]], [[Equipment/Arquebus|Arquebus]], 4x [[Equipment/Silencer|Silencer]], 20x [[Equipment/Rounds (Arquebus)|Rounds (Arquebus)]]"
  - name: "Silencer"
    desc: "  A [[Equipment/Silencer|Silencer]] is an uncommon item worth 1 sp. It has light Bulk and can be attached to a firearm in 1 minute; the sniper typically already has one attached before going into combat. The first time a shot is fired through it, the silencer is consumed and reduces the report to a quiet noise. A silencer doesn't work on scatter firearms."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Dagger"
    desc: "+15 (agile, finesse, versatile s)\n__Damage__  1d4 + 8 piercing"

  - name: "**Ranged** `pf2:1` Dagger"
    desc: "+15 (agile, thrown 10 ft., versatile s)\n__Damage__  1d4 + 8 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+15 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 8 bludgeoning"

  - name: "**Ranged** `pf2:1` Arquebus"
    desc: "+15 (concussive, fatal d12, kickback, range increment 150 feet, reload 1)\n__Damage__  1d8 + 6 piercing"

  - name: "Concussive Shot"
    desc: "`pf2:2`  The sniper makes an arquebus Strike against a creature within the weapon's first range increment. On a success, the creature must succeed at a DC 21 Fortitude check save or be [[Conditions/Stunned|Stunned 1]] ([[Conditions/Stunned|Stunned 2]] on a critical failure)."

  - name: "Full Bore"
    desc: "`pf2:2`  The sniper makes an arquebus Strike against two creatures that are adjacent to each other. The attack ignores any lesser cover one target provides the other. Roll damage once, and apply it to each creature the sniper hits. This counts as two attacks when determining the sniper's multiple attack penalty."

  - name: "Sniper's Edge"
    desc: "  The sniper's ranged Strikes deal 2d6 extra precision damage to [[Conditions/Off-Guard|Off-Guard]] creatures."

  - name: "Surprise Attack"
    desc: "  All enemy creatures that have not yet acted in combat are [[Conditions/Off-Guard|Off-Guard]] to the sniper."
 
```

```encounter-table
name: Sniper
creatures:
  - 1: Sniper
```



A keen eye, a steady hand, and a killer instinct combine to form a ruthless, emotionless harbinger of death. A sniper usually works alone, though they're occasionally seen alongside a spotter or as part of a larger squad.

* * *

A military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.
