---
title: "Diver"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.Z5MNKwVxTNilWRT4" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/3
  - remaster
statblock: inline
name: "Diver"
level: 3
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Diver"
level: "Creature 3"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 9
perception:
  - name: "Perception"
    desc: "+9; "
languages: "Common, Thalassic"
skills:
  - name: "Skills"
    desc: "Acrobatics: +10, Athletics: +10, Nature: +9, Thievery: +9, Ocean Lore: +11"
abilityMods: [3, 3, 2, 0, 2, 0]
speed: 25 feet,  swim 30 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__ +9, __Ref__ +12, __Will__ +6"
hp: 50
health:
  - name: ""
  - name: HP
    desc: "50"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Trident|Trident]]"
  - name: "Adjusted Eyes"
    desc: "  Divers are used to the murky conditions underwater and train for them. If the diver spends 1 hour preparing for their dive, they have low-light vision while underwater."

  - name: "Diving Specialist"
    desc: "  For encounters involving underwater exploration, the diver is a 10th-level challenge."

  - name: "Skilled Diver"
    desc: "  The diver gains a +12 circumstance bonus to any skill check involved in underwater exploration activities and is considered a master in the skill for such checks. This bonus also applies to any initiative roll while the driver is underwater. Strong Lungs The diver can hold their breath for up to 5 minutes (50 rounds)."

  - name: "Underwater Fighter"
    desc: "  The diver isn't [[Conditions/Off-Guard|Off-Guard]] underwater and doesn't take penalties for using a bludgeoning or slashing melee weapon in water."

abilities_mid:
  - name: ""
  - name: "Underwater Awareness"
    desc: "`pf2:r`  **Trigger** An enemy Strikes the diver while they're underwater\n* * *\n\n**Effect** The diver senses the movement of their enemy in the water and jerks back in time. They gain a +2 circumstance bonus to their AC against the triggering attack."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Trident"
    desc: "+12 ()\n__Damage__  1d8 + 5 piercing"

  - name: "**Ranged** `pf2:1` Trident"
    desc: "+12 (thrown 20 ft.)\n__Damage__  1d8 + 5 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+12 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 5 bludgeoning"

  - name: "Dive"
    desc: "`pf2:1`  The diver moves up to twice their swim Speed downward."
 
```

```encounter-table
name: Diver
creatures:
  - 1: Diver
```



Divers can often make large amounts of money by diving for treasures and selling them at a markup to tourists and antiquities dealers.

* * *

Adventurers may need passage on a swift vessel, or they might face danger from raiders at sea or in coastal settlements.
