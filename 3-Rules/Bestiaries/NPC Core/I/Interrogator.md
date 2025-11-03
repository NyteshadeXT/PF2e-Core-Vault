---
title: "Interrogator"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.1V3cvVmMte15i5sJ" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/6
  - remaster
statblock: inline
name: "Interrogator"
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Interrogator"
level: "Creature 6"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 13
perception:
  - name: "Perception"
    desc: "+13; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +15, Intimidation: +13, Medicine: +13"
abilityMods: [4, 3, 1, 0, 2, 2]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__ +12, __Ref__ +12, __Will__ +11"
hp: 90
health:
  - name: ""
  - name: HP
    desc: "90"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "5x [[Equipment/Dart|Dart]], [[Equipment/War Razor|+1 War Razor]], [[Equipment/Leather Armor|Leather Apron]], [[Equipment/Healer's Toolkit|Healer's Toolkit]]"
abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Ranged** `pf2:1` Dart"
    desc: "+16 (agile, thrown 20 ft.)\n__Damage__  1d4 + 7 piercing"

  - name: "**Melee** `pf2:1` War Razor"
    desc: "+17 (agile, backstabber, deadly d8, finesse, magical)\n__Damage__  1d4 + 10 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+16 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 10 bludgeoning"

  - name: "Blood and Fear"
    desc: "`pf2:2`  The interrogator Strikes with a slashing melee weapon. If they hit and deal damage, the target takes an additional 1d4 persistent bleed damage and is [[Conditions/Frightened|Frightened 1]] (or 2d4 persistent bleed damage and [[Conditions/Frightened|Frightened 2]] on a critical hit).\n\nEach of the interrogator's other enemies in a 30-foot emanation around the target that witnesses the bloodshed must succeed at a DC 19 Will check save or be frightened 1. The frightened part of this ability is an emotion, fear, mental, and visual effect."

  - name: "Hobble"
    desc: "`pf2:1`  **Requirements** A creature is [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]] by the interrogator\n* * *\n\n**Effect** One creature grabbed or restrained by the interrogator takes 2d6 bludgeoning damage with a DC 23 Fortitude check save. If the creature fails its save, it also gains a condition of the interrogator's choice: [[Conditions/Clumsy|Clumsy 2]] for 1 minute, [[Conditions/Enfeebled|Enfeebled 2]] for 1 minute, or [[Conditions/Drained|Drained 1]]."

  - name: "Torment"
    desc: "  The interrogator's Strikes deal an additional 1d8 mental damage to [[Conditions/Frightened|Frightened]] creatures."
 
```

```encounter-table
name: Interrogator
creatures:
  - 1: Interrogator
```



Interrogators use pain and intimidation against prisoners and other helpless victims to force "confessions."

* * *

Villains pursue selfish and cruel goals, trampling over anyone in their way.
