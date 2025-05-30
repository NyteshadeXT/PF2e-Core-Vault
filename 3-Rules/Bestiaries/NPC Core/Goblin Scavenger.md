---
title: "Goblin Scavenger"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.Vi0Ydmt5JGqjWhpA" 
tags:
  - pf2e/creature/type/goblin
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Goblin Scavenger"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Goblin Scavenger"
level: "Creature 4"

alignment: ""
size: "Small"
trait_01: [[goblin]]
trait_02: [[humanoid]]
modifier: 14
perception:
  - name: "Perception"
    desc: "+14; Darkvision"
languages: "Common, Goblin"
skills:
  - name: "Skills"
    desc: "Crafting: +12, Society: +8, Stealth: +11, Survival: +10, Thievery: +9"
abilityMods: [1, 3, 2, 2, 3, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__ +9, __Ref__ +11, __Will__ +13"
hp: 70
health:
  - name: ""
  - name: HP
    desc: "70"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Big Boom Gun|Big Boom Gun]], [[Equipment/Dogslicer|Dogslicer]], [[Equipment/Leather Armor|Leather Armor]], 2x [[Equipment/Fireworks Display|Fireworks Display]], 10x [[Equipment/Rounds (Axe Musket)|Rounds (Big Boom Gun)]]"
  - name: "Big Boom Gun"
    desc: "  The scavenger's gun is a comically oversized hand cannon that has the fatal d12 trait and a 20-foot range increment. If a Strike with it critically fails, the weapon misfires and explodes, dealing 1d12 fire damage to its wielder. It's a martial one-handed weapon with 2 Bulk and a Price of 10 gp. It has the uncommon, cobbled, and goblin traits. The cobbled trait means that on a failed attack roll with the gun, the user must succeed at a DC 5 Flat check or the weapon misfires."

abilities_mid:
  - name: ""
  - name: "Finders Keepers"
    desc: "`pf2:r`  **Trigger** A creature within 15 feet drops an item\n\n**Requirements** The goblin scavenger has a hand free\n* * *\n\n**Effect** The goblin scavenger Strides up to their speed to an adjacent square and Interacts to pick up the item. The movement triggers reactions as normal, but the Interact action to pick up the item does not."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Dogslicer"
    desc: "+12 (agile, backstabber, finesse)\n__Damage__  2d6 + 3 slashing"

  - name: "**Melee** `pf2:1` Jaws"
    desc: "+12 (unarmed)\n__Damage__  1d8 + 3 bludgeoning"

  - name: "**Ranged** `pf2:1` Big Boom Gun"
    desc: "+14 (cobbled, fatal d12, modular b, p, or s, range increment 20 feet, reload 1)\n__Damage__  2d6 + 2 piercing"

  - name: "Fireworks Barrage"
    desc: "`pf2:2` (manipulate) **Requirements** The goblin scavenger has a free hand\n* * *\n\n**Effect** The goblin scavenger draws a bundle of fireworks and launches them toward a point within 60 feet, where they explode, dealing 1d10 fire + 1d10 sonic damage in a 10-foot burst. Every creature in the area must attempt a DC 21 Reflex check save.\n* * *\n\n**Critical Success** The creature is unaffected. The goblin scavenger realizes that's because a firework fell at their feet and takes 2 fire damage when it explodes in their face.\n\n**Success** The creature takes half damage.\n\n**Failure** The creature takes full damage and is [[Conditions/Dazzled|Dazzled]] and [[Conditions/Deafened|Deafened]] for 1 round.\n\n**Critical Failure** As failure, except the creature is also [[Conditions/Stunned|Stunned 1]]."

  - name: "One Person's Junk"
    desc: "  The goblin scavenger intuitively knows how to make use of junk. When they use a weapon with the goblin trait or an improvised weapon, they do an additional die of damage (already included in the Strikes above)."
 
```

```encounter-table
name: Goblin Scavenger
creatures:
  - 1: Goblin Scavenger
```



Many goblins scavenge materials, shiny objects, and anything else they can get their hands on, but a goblin scavenger is the best at finding such useful items. More importantly, they're great at making use of them without killing themselves. Most of the time.

* * *

Goblins can be found across Golarion, sometimes threatening taller humanoids (whom they refer to as "longshanks") and sometimes redeeming harmful history by working alongside others.
