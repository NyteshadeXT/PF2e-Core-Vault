---
title: "Innkeeper"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.BYpxg06tP5hI6CzQ" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/1
  - remaster
statblock: inline
name: "Innkeeper"
level: 1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Innkeeper"
level: "Creature 1"

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
    desc: "Deception: +6, Diplomacy: +6, Society: +7, Accounting Lore: +5, Alcohol Lore: +7, Cooking Lore: +5"
abilityMods: [2, 0, 0, 2, 2, 3]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 14
armorclass:
  - name: AC
    desc: "14; __Fort__ +7, __Ref__ +3, __Will__ +9"
hp: 20
health:
  - name: ""
  - name: HP
    desc: "20"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Staff|Broom]], [[Equipment/Leather Armor|Innkeeper's Apron]], [[Equipment/Basic Crafter's Book|Ledger]], [[Equipment/Mug|Pewter Mug]]"
  - name: "Font of Gossip"
    desc: "  The innkeeper's business gives them insight into the neighborhood's happenings. A person can [[Actions/Gather Information|Gather Information]] from an innkeeper in 30 minutes rather than canvassing an entire neighborhood. Each person can learn gossip from an innkeeper only once per day, and only if the innkeeper is friendly or helpful to that individual. Whatever information the innkeeper knows about a given topic doesn't change if someone else asks the innkeeper about that topic, unless the innkeeper has since learned more."

  - name: "Innkeeper's Advice"
    desc: "`pf2:3` (auditory,fortune,linguistic,mental) **Frequency** once per day\n* * *\n\n**Effect** The innkeeper gives some pertinent advice to a single creature other than themself. For 24 hours, when that creature fails a skill check or saving throw, they can recall this advice and reroll the check, using the second result instead. Once that creature uses this ability, its effect ends. A creature that receives the Innkeeper's Advice is temporarily immune to the ability for 1 month."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Broom"
    desc: "+7 (two-hand d8)\n__Damage__  1d4 + 2 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+7 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 2 bludgeoning"

  - name: "**Ranged** `pf2:1` Pewter Mug"
    desc: "+5 (thrown 10 ft.)\n__Damage__  1d4 + 2 bludgeoning"

  - name: "Home Base Brawler"
    desc: "  The innkeeper knows how to settle fights that break out. When the innkeeper is fighting in their establishment, their Strikes gain a +1 circumstance bonus to the attack roll, deal an additional 1d4 untyped damage, and gain the nonlethal trait if they don't already have it. The innkeeper can choose not to gain this benefit."
 
```

```encounter-table
name: Innkeeper
creatures:
  - 1: Innkeeper
```



The sight of an inn is a welcome one to any weary traveler. Innkeepers can often be found cleaning the common room, overseeing the evening meal, or settling in new lodgers. Innkeepers keep an eye on their neighbors' doings and are often excellent sources of information.

* * *

Society is built upon the backs of laborers.
