---
title: "Kobold Trapper"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.nDVrJFeatah7dtvy" 
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/kobold
  - pf2eMonster
  - pf2e/creature/level/2
  - remaster
statblock: inline
name: "Kobold Trapper"
level: 2
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Kobold Trapper"
level: "Creature 2"

alignment: ""
size: "Small"
trait_01: [[humanoid]]
trait_02: [[kobold]]
modifier: 7
perception:
  - name: "Perception"
    desc: "+7; Darkvision"
languages: "Common, Sakvroth"
skills:
  - name: "Skills"
    desc: "Acrobatics: +5, Crafting: +8, Stealth: +7, Survival: +7"
abilityMods: [1, 3, 1, 3, 2, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +5, __Ref__ +11, __Will__ +8; +1 circumstance to all defenses vs. traps"
hp: 32
health:
  - name: ""
  - name: HP
    desc: "32"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Crossbow|Crossbow]], [[Equipment/Light Hammer|Light Hammer]], [[Equipment/Leather Armor|Leather Armor]], [[Equipment/Formula Book (Blank)|Formula Book (Containing formulas for three 1st- or 2nd-level snares)]], 20x [[Equipment/Bolts|Bolts]], [[Equipment/Backpack|Backpack]]"
  - name: "Booby-Trapped"
    desc: "  A kobold trapper protects items in their backpack with a booby trap. This booby trap requires a successful DC 18 Perception check check to notice, and two successful DC 15 Thievery check checks to disable.\n\nAccessing the backpack without disabling the trap destroys its contents, and splinters explode in a 10-foot burst centered on the backpack, dealing 3d6 piercing damage (DC 15 Reflex check save)."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Light Hammer"
    desc: "+7 (agile)\n__Damage__  1d6 + 1 bludgeoning"

  - name: "**Ranged** `pf2:1` Light Hammer"
    desc: "+9 (agile, thrown 20 ft.)\n__Damage__  1d6 + 1 bludgeoning"

  - name: "**Melee** `pf2:1` Claw"
    desc: "+7 (agile, unarmed)\n__Damage__  1d4 + 1 slashing"

  - name: "**Ranged** `pf2:1` Crossbow"
    desc: "+9 (range increment 120 feet, reload 1)\n__Damage__  1d8 piercing"

  - name: "Construct Trap"
    desc: "`pf2:3` (manipulate) The kobold trapper creates a rudimentary trap on a surface in an adjacent square. The trap activates the next time a creature moves adjacent to it. The creature takes 2d6 bludgeoning, piercing, or slashing damage (determined by the trapper when the trap is constructed) with a DC 18 Reflex check save. On a failure, the creature also takes a –5 status penalty to all Speeds for 1 minute. The trap is destroyed when activated or after 8 hours, whichever comes first. A trapper typically carries enough raw materials to make six traps each day.\n\n[[Bestiary Effects/Effect_ Construct Trap|Effect: Construct Trap]]"
 
```

```encounter-table
name: Kobold Trapper
creatures:
  - 1: Kobold Trapper
```



Kobolds are skillful artisans, always inventing new traps and snares to defend their territory and ambush enemies. Kobold trappers enjoy showing off their crafting prowess on the battlefield.

* * *

Kobolds are drawn to beings and objects of power, establishing their communities near them. Once a warren has been formed, the resident kobolds construct traps and set up ambushes to deter interlopers.
