---
title: "Kholo Outrider"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.w7mf2yC3rE3CjGD5" 
tags:
  - pf2e/creature/type/gnoll
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/7
  - remaster
statblock: inline
name: "Kholo Outrider"
level: 7
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Kholo Outrider"
level: "Creature 7"

alignment: ""
size: "Medium"
trait_01: [[gnoll]]
trait_02: [[humanoid]]
modifier: 18
perception:
  - name: "Perception"
    desc: "+18; Low-Light Vision"
languages: "Common, Kholo"
skills:
  - name: "Skills"
    desc: "Acrobatics: +13, Athletics: +18, Intimidation: +13, Stealth: +15, Survival: +18"
abilityMods: [4, 3, 2, 1, 3, 0]
speed: 30 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 25
armorclass:
  - name: AC
    desc: "25; __Fort__ +14, __Ref__ +18, __Will__ +13"
hp: 120
health:
  - name: ""
  - name: HP
    desc: "120"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Composite Shortbow|+1 Composite Shortbow]], 2x [[Equipment/Hatchet|+1 Hatchet]], [[Equipment/Hide Armor|Hide Armor]], 20x [[Equipment/Arrows|Arrows]]"
  - name: "Bloody Flurry"
    desc: "`pf2:2`  The kholo outrider Strikes, Steps, then Strikes again. If the kholo outrider hits the same enemy with both Strikes, that enemy takes an additional 1d6 persistent bleed damage."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Hatchet"
    desc: "+19 (agile, magical, sweep)\n__Damage__  1d6 + 7 slashing"

  - name: "**Ranged** `pf2:1` Hatchet"
    desc: "+17 (agile, magical, sweep, thrown 10 ft.)\n__Damage__  1d6 + 7 slashing"

  - name: "**Melee** `pf2:1` Jaws"
    desc: "+18 (unarmed)\n__Damage__  1d6 + 7 piercing"

  - name: "**Ranged** `pf2:1` Composite Shortbow"
    desc: "+17 (deadly d10, magical, propulsive, range increment 60 feet, reload 0)\n__Damage__  1d6 + 5 piercing"

  - name: "Rugged Travel"
    desc: "  A kholo ignores the first square of difficult terrain they move into each time they Step or Stride."

  - name: "Solo Hunter"
    desc: "  A kholo outrider deals 1d6 extra damage while adjacent to at least 2 enemies and no allies."
 
```

```encounter-table
name: Kholo Outrider
creatures:
  - 1: Kholo Outrider
```



Many kholo packs are semi-nomadic, staying in one place until they're pushed out by others, or the local resources begin to grow sparse. Before moving the pack elsewhere, the leaders send out a single kholo to blaze a trail and ensure a safe route to their next destination. These outriders are masters of the wilderness and fight better when they're alone.

* * *

These pragmatic hunters have earned a very poor reputation for their brutality in battle and worship of demons. While many kholos live up to the terrible stories of their ferocity and cannibalism, others are scavengers and trappers just trying to get by. Many of their cultural traditions are misunderstood by other ancestries, and some kholos play into the fear provoked in those who believe the twisted tales about their people. Kholos are often criticized for their lack of honor in battle, but a kholo understands honor doesn't bring you back home alive, nor does honor put food on the table. Ambushes, feints, and deceptions that lead to fewer kholo deaths and a quicker victory are simply the logical thing to do.
