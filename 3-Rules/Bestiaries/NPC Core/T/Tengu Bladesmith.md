---
title: "Tengu Bladesmith"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.YBNskadw9c8n1E21" 
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/tengu
  - pf2eMonster
  - pf2e/creature/level/6
  - remaster
statblock: inline
name: "Tengu Bladesmith"
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Tengu Bladesmith"
level: "Creature 6"

alignment: ""
size: "Medium"
trait_01: [[humanoid]]
trait_02: [[tengu]]
modifier: 14
perception:
  - name: "Perception"
    desc: "+14; Low-Light Vision"
languages: "Common, Tengu; plus two others"
skills:
  - name: "Skills"
    desc: "Acrobatics: +14, Athletics: +16, Crafting: +16, Deception: +14, Intimidation: +16, Tengu Lore: +14"
abilityMods: [4, 3, 2, 1, 1, 1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__ +15, __Ref__ +16, __Will__ +11"
hp: 100
health:
  - name: ""
  - name: HP
    desc: "100"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Wakizashi|Cold Iron Wakizashi]], [[Equipment/Katana|+1 Katana]]"
abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Cold Iron Wakizashi"
    desc: "+15 (agile, cold iron, deadly d8, versatile p)\n__Damage__  1d4 + 7 slashing"

  - name: "**Melee** `pf2:1` Katana"
    desc: "+17 (deadly d8, magical, two-hand d10, versatile p)\n__Damage__  1d6 + 7 slashing 1d4 bleed"

  - name: "**Melee** `pf2:1` Beak"
    desc: "+15 (unarmed)\n__Damage__  1d6 + 7 piercing"

  - name: "Feinting Failure"
    desc: "`pf2:1`  **Frequency** once per round\n\n**Requirements** The tengu bladesmith's previous action this turn was a Strike that failed or critically failed\n* * *\n\n**Effect** The tengu bladesmith Strikes the same target, who is [[Conditions/Off-Guard|Off-Guard]] against this attack. On a hit, the bladesmith deals 1d6 additional precision damage."

  - name: "Swirling Blade"
    desc: "`pf2:1`  The tengu bladesmith Interacts to draw a weapon in the sword group, then attempts to [[Actions/disarm|disarm]] a weapon held by a foe within reach. The weapon the tengu bladesmith draws gains the disarm trait for this attempt."
 
```

```encounter-table
name: Tengu Bladesmith
creatures:
  - 1: Tengu Bladesmith
```



With the tengu diaspora spreading across much of Golarion, their knowledge and tradition of blade crafting has been passed through the generations to those who show interest and aptitude. Many tengu bladesmiths have experience as warriors; others learn their sword craft to improve their knowledge and understanding of the weapons they produce.

* * *

Originally hailing from the continent of Tian Xia, tengu have spread across the globe. Though some staunchly uphold traditions, gazing at the sky from the tallest mountaintops, other tengu remain on the ground, adapting and blending into the societies in which they settle.
