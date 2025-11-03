---
title: "Jinx Eater"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.l5QgLQKKxM2pqcSl" 
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/tengu
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Jinx Eater"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Jinx Eater"
level: "Creature 4"

alignment: ""
size: "Medium"
trait_01: [[humanoid]]
trait_02: [[tengu]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; Low-Light Vision"
languages: "Common, Tengu; plus two others"
skills:
  - name: "Skills"
    desc: "Acrobatics: +13, Athletics: +9, Deception: +12, Intimidation: +12, Occultism: +10, Sailing Lore: +12"
abilityMods: [2, 4, 1, 1, 1, 2]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__ +8, __Ref__ +14, __Will__ +11"
hp: 65
health:
  - name: ""
  - name: HP
    desc: "65"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Tengu Gale Blade|Tengu Gale Blade]], [[Equipment/Leather Armor|Leather Armor]], Bottle (containing fine alcohol to throw overboard as an offering)"
abilities_mid:
  - name: ""
  - name: "Eat Fortune"
    desc: "`pf2:r` (concentrate,divine) **Frequency** once per day\n\n**Trigger** A creature within 60 feet uses a fortune or misfortune effect\n* * *\n\n**Effect** The tengu negates the attempt to manipulate fate and fortune. Eat Fortune gains the opposing trait, and the triggering effect is disrupted."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Tengu Gale Blade"
    desc: "+13 (agile, disarm, finesse)\n__Damage__  1d6 + 4 slashing"

  - name: "**Melee** `pf2:1` Beak"
    desc: "+13 (finesse, unarmed)\n__Damage__  1d6 + 4 piercing"

  - name: "Jinxed Call"
    desc: "`pf2:2` (auditory,occult) The jinx eater gives an eerie croak. Each non-tengu in a 30-foot emanation must succeed at a DC 21 Will check save or be [[Conditions/Clumsy|Clumsy 1]] for 1 round (or 1 minute on a critical failure). Regardless of the results, each creature is then temporarily immune to Jinxed Call for 1 minute."

  - name: "Sneak Attack"
    desc: "  The jinx eater deals 1d6 extra precision damage to [[Conditions/Off-Guard|Off-Guard]] creatures."
 
```

```encounter-table
name: Jinx Eater
creatures:
  - 1: Jinx Eater
```



Whether kidnapped, conscripted, or having entered voluntary service, a tengu in the role of jinx eater on a ship's crew is tasked with keeping the crew free of misfortune. Those with the necessary skill to do so often achieve a respected and privileged position on board.

* * *

Originally hailing from the continent of Tian Xia, tengu have spread across the globe. Though some staunchly uphold traditions, gazing at the sky from the tallest mountaintops, other tengu remain on the ground, adapting and blending into the societies in which they settle.
