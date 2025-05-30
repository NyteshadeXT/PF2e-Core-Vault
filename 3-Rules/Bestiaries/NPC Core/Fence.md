---
title: "Fence"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.HBcKkBXyGaWXZxSs" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/5
  - remaster
statblock: inline
name: "Fence"
level: 5
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Fence"
level: "Creature 5"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 11
perception:
  - name: "Perception"
    desc: "+11; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +10, Crafting: +13, Deception: +13, Diplomacy: +11, Intimidation: +11, Society: +11, Stealth: +10, Thievery: +10, Accounting Lore: +13, Underworld Lore: +15"
abilityMods: [0, 3, 0, 4, 2, 4]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__ +9, __Ref__ +12, __Will__ +15"
hp: 70
health:
  - name: ""
  - name: HP
    desc: "70"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "10x [[Equipment/Dagger|Dagger]], [[Equipment/Shortsword|Shortsword]], [[Equipment/Disguise Kit|Disguise Kit]], [[Equipment/Thieves' Toolkit|Thieves' Toolkit]], [[Equipment/Darkvision Elixir (Lesser)|Darkvision Elixir (Lesser)]], 2x [[Equipment/Smoke Ball (Lesser)|Smoke Ball (Lesser)]]"
  - name: "Fence's Eye"
    desc: "  Fences can use Underworld Lore check to identify an item's value and [[Actions/Identify Magic|Identify Magic]] on an item. They gain a +2 circumstance bonus to Underworld Lore checks when doing so, and to all Underworld Lore checks related to stolen items."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Dagger"
    desc: "+14 (agile, finesse, versatile s)\n__Damage__  1d4 + 6 piercing"

  - name: "**Ranged** `pf2:1` Dagger"
    desc: "+14 (agile, thrown 10 ft., versatile s)\n__Damage__  1d4 + 6 piercing"

  - name: "**Melee** `pf2:1` Shortsword"
    desc: "+14 (agile, finesse, versatile s)\n__Damage__  1d6 + 6 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+14 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 6 bludgeoning"

  - name: "Fence's Feint"
    desc: "`pf2:1`  The fence [[Actions/feint|feint]]{Feints}, then can Step. If the feint succeeds, the target is [[Conditions/Off-Guard|Off-Guard]] against the fence's melee attacks until the end of the fence's next turn (or to all melee attacks on a critical success)."

  - name: "Quick Rummage"
    desc: "`pf2:1`  The fence always has a few items close at hand. The fence Interacts to draw a weapon or an item that takes a single action to activate, and then Strikes with the weapon or Activates the Item."

  - name: "[[Bestiary Ability Glossary/Sneak Attack|Sneak Attack]]"
    desc: "  The fence deals an extra 2d6 precision damage to [[Conditions/Off-Guard|Off-Guard]] creatures."
 
```

```encounter-table
name: Fence
creatures:
  - 1: Fence
```



Fences make themselves indispensable to the underworld by paying for stolen goods only to resell them later, whether through a seemingly legitimate business or to a closed group of elite buyers.

* * *

In the underbelly of society, the lawless reign supreme.
