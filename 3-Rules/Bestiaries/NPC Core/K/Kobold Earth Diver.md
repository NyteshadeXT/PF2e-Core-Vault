---
title: "Kobold Earth Diver"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.mYbZJQPzpXx9DfIq" 
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/kobold
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Kobold Earth Diver"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Kobold Earth Diver"
level: "Creature 4"
rare_03: [[Uncommon]]
alignment: ""
size: "Small"
trait_01: [[humanoid]]
trait_02: [[kobold]]
modifier: 13
perception:
  - name: "Perception"
    desc: "+13; Darkvision, Tremorsense (Imprecise) 10 Feet"
languages: "Common, Petran, Sakvroth"
skills:
  - name: "Skills"
    desc: "Acrobatics: +10, Athletics: +12, Nature: +10, Stealth: +10, Survival: +8, Geology Lore: +11"
abilityMods: [4, 3, 0, 1, 2, 0]
speed: 25 feet,  burrow 10 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__ +8, __Ref__ +14, __Will__ +11"
hp: 60
health:
  - name: ""
  - name: HP
    desc: "60"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Crossbow|Crossbow]], [[Equipment/Pick|Pick]], [[Equipment/Leather Armor|Leather Armor]], Map (depicting landmarks above and below ground in 1 square mile), 20x [[Equipment/Bolts|Bolts]]"
abilities_mid:
  - name: ""
  - name: "Sinkhole"
    desc: "`pf2:2`  **Requirements** The earth diver is burrowed beneath a Medium or smaller creature aboveground\n* * *\n\n**Effect** The earth diver creates a small sinkhole under the creature, who must attempt a DC 20 Reflex check save. Regardless of the result, the target's space becomes difficult terrain.\n\n**Failure** The creature falls into the sinkhole and is [[Conditions/Restrained|Restrained]] until it [[Actions/escape dc=18|escape dc=18]]{Escapes} (DC 18).\n\n**Critical Failure** As failure, and the creature takes 2d8 bludgeoning damage."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Pick"
    desc: "+14 (fatal d10)\n__Damage__  1d6 + 10 piercing"

  - name: "**Melee** `pf2:1` Claw"
    desc: "+14 (agile, unarmed)\n__Damage__  1d4 + 10 slashing"

  - name: "**Ranged** `pf2:1` Crossbow"
    desc: "+13 (range increment 120 feet, reload 1)\n__Damage__  1d8 + 6 piercing"

  - name: "Pick Smash"
    desc: "`pf2:2`  The kobold earth diver smashes their pick into the ground, sending debris exploding in a 5-foot emanation. All creatures and unattended objects in range take 3d6 bludgeoning damage with a DC 20 Reflex check save. A creature that is [[Conditions/Restrained|Restrained]] by an earth diver's Sinkhole takes an additional 1d6 bludgeoning damage."
 
```

```encounter-table
name: Kobold Earth Diver
creatures:
  - 1: Kobold Earth Diver
```



Kobold earth divers study the geology of the areas near their communities. The mystical influence of their community's patron or years of extensive training at digging or earth magic allow them to swiftly burrow through the ground and to feel movements in the ground beneath their feet.

* * *

Kobolds are drawn to beings and objects of power, establishing their communities near them. Once a warren has been formed, the resident kobolds construct traps and set up ambushes to deter interlopers.
