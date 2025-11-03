---
title: "Servant"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.mgEMfxh0VUbBepc2" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/-1
  - remaster
statblock: inline
name: "Servant"
level: -1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Servant"
level: "Creature -1"

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
    desc: "Acrobatics: +5, Diplomacy: +4, Society: +2, Household Lore (or other subcategory related to their job): +4"
abilityMods: [1, 3, 1, 0, 1, 2]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 14
armorclass:
  - name: AC
    desc: "14 (15 with platter raised); __Fort__ +5, __Ref__ +7, __Will__ +3"
hp: 7
health:
  - name: ""
  - name: HP
    desc: "7"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "10x [[Equipment/Dagger|Cutlery]], [[Equipment/Buckler|Serving Platter]], [[Equipment/Clothing (Ordinary)|Servant's Uniform]]"
abilities_mid:
  - name: ""
  - name: "Protective Platter"
    desc: "  The servant can raise their serving platter using the Raise a Shield action. The platter has the same statistics as a [[Equipment/Buckler|Buckler]] but requires a hand to hold.\n* * *\n\n[[Action Macros/Raise a Shield|Raise a Shield]]"

  - name: "Quick Catch"
    desc: "`pf2:r`  **Trigger** An object the servant could hold in one hand is dropped within the servant's reach\n\n**Requirements** The servant has at least one hand free\n* * *\n\n**Effect** The servant catches the dropped object before it hits the floor or leaves their reach."

  - name: "[[Actions/Raise a Shield|Raise a Shield]]"
    desc: "`pf2:1`  **Requirements** You are wielding a shield.\n* * *\n\nYou position your shield to protect yourself. When you have Raised a Shield, you gain its listed circumstance bonus to AC. Your shield remains raised until the start of your next turn."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Cutlery"
    desc: "+6 (agile, finesse, versatile s)\n__Damage__  1d4 + 1 piercing"

  - name: "**Ranged** `pf2:1` Cutlery"
    desc: "+6 (agile, thrown 15 ft., versatile s)\n__Damage__  1d4 + 1 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+6 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 1 bludgeoning"
 
```

```encounter-table
name: Servant
creatures:
  - 1: Servant
```



A servant might be a maid or butler, keeping a home in working order, or a server in an establishment like an inn, taking orders and serving customers.

* * *

Society is built upon the backs of laborers.
