---
title: "Spy"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.PXukrrvpLA40chXN" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/6
  - remaster
statblock: inline
name: "Spy"
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Spy"
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
    desc: "Acrobatics: +14, Deception: +16, Diplomacy: +14, Intimidation: +14, Society: +14, Stealth: +16, Thievery: +14, Local Court Lore: +16"
abilityMods: [0, 4, 0, 2, 2, 4]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__ +12, __Ref__ +16, __Will__ +14"
hp: 90
health:
  - name: ""
  - name: HP
    desc: "90"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "4x [[Equipment/Dagger|Dagger]], [[Equipment/Rapier|+1 Rapier]], [[Equipment/Leather Armor|Leather Armor]], [[Equipment/Clothing (Fine)|Clothing (Fine)]], [[Equipment/Disguise Kit|Disguise Kit]], [[Equipment/Thieves' Toolkit|Thieves' Toolkit]]"
  - name: "Noble's Ally"
    desc: "  The spy has positioned themself to seem a trusted ally, gaining a +2 circumstance bonus to [[Actions/gather-information options=nobles-ally|gather-information options=nobles-ally]] or to [[Actions/make-an-impression options=nobles-ally|make-an-impression options=nobles-ally]] among the nobles of that court."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Rapier"
    desc: "+17 (deadly d8, disarm, finesse, magical)\n__Damage__  1d6 + 7 piercing"

  - name: "**Melee** `pf2:1` Dagger"
    desc: "+16 (agile, finesse, versatile s)\n__Damage__  1d4 + 7 piercing"

  - name: "**Ranged** `pf2:1` Dagger"
    desc: "+16 (agile, thrown 10 ft., versatile s)\n__Damage__  1d4 + 7 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+16 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 7 bludgeoning"

  - name: "Hidden Blade"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The spy draws a weapon and then Strikes with it. The target of the strike is [[Conditions/Off-Guard|Off-Guard]] against the attack."

  - name: "[[Bestiary Ability Glossary/Sneak Attack|Sneak Attack]]"
    desc: "  The spy deals an extra 2d6 precision damage to [[Conditions/Off-Guard|Off-Guard]] creatures."
 
```

```encounter-table
name: Spy
creatures:
  - 1: Spy
```



Any number of nobles could be spies—a beloved confidante of the queen or even the court jester. Spies use their skills to subtly manipulate courtiers, turn enemies against one another, and collect valuable information.

* * *

The denizens of a noble court are the most powerful people in a civilization, primed with wealth, station, and authority above the common people.
