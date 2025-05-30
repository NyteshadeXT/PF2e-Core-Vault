---
title: "Fleshwarper"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.kbZstaIc8R4Ce9A3" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/7
  - remaster
statblock: inline
name: "Fleshwarper"
level: 7
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Fleshwarper"
level: "Creature 7"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 13
perception:
  - name: "Perception"
    desc: "+13; "
languages: "Common, Sakvroth"
skills:
  - name: "Skills"
    desc: "Crafting: +17, Medicine: +16, Occultism: +15, Stealth: +15, Aberration Lore: +15, Fleshwarping Lore: +17"
abilityMods: [3, 4, 2, 4, 2, -1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__ +15, __Ref__ +15, __Will__ +15"
hp: 110
health:
  - name: ""
  - name: HP
    desc: "110"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "5x Fleshwarping Concoction, [[Equipment/Dagger|+1 Scalpel]], [[Equipment/Healer's Toolkit|Healer's Toolkit]]"
abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Scalpel"
    desc: "+18 (agile, finesse, magical, versatile s)\n__Damage__  1d4 + 9 piercing"

  - name: "**Ranged** `pf2:1` Scalpel"
    desc: "+18 (agile, magical, thrown 10 ft., versatile s)\n__Damage__  1d4 + 9 piercing"

  - name: "**Ranged** `pf2:1` Fleshwarping Concoction"
    desc: "+18 (alchemical, poison, range increment 20 feet)\n__Damage__  4d6 poison plus flesh-mutation"

  - name: "Conduct the Experiment"
    desc: "`pf2:1`  The fleshwarper assesses vulnerabilities in a creature's anatomy. They attempt a Medicine check check against the Fortitude DC of one living creature they can see within 60 feet. On a success, the fleshwarper's melee Strikes deal an extra 2d8 precision damage against that creature for 1 minute or until the fleshwarper critically hits that creature, whichever comes first.\n\nUsing this action again designates a new target and ends the effect for any previous target. A fleshwarper can target an individual no more than once per day with this ability.\n\n[[Bestiary Effects/Effect_ Conduct the Experiment|Effect: Conduct the Experiment]]"

  - name: "Flesh Mutation"
    desc: " (alchemical,morph) A creature made of flesh that's hit by a fleshwarping concoction Strike is subject to a random fleshwarping mutation determined by rolling 1d4 and consulting the list below. The creature attempts a DC 25 Fortitude check save at the end of each of its turns, ending the mutation on a success. A creature that becomes mutated is thereafter temporarily immune to flesh mutation for 1 day.\n\n**1 Spongy Flesh** The creature has weakness 5 to physical damage.\n\n**2 Caustic Blood** The creature takes 2d4 persistent acid damage that can't be removed normally, but ends when the mutation does.\n\n**3 Sprouting Eyes** The creature is [[Conditions/Dazzled|Dazzled]], but also immune to flanking.\n\n**4 Mutated Mind** The creature is [[Conditions/Confused|Confused]]. It can still recover as noted in the condition, but if it does it remains [[Conditions/Off-Guard|Off-Guard]] until the mutation ends.\n\n[[Bestiary Effects/Effect_ Flesh Mutation|Effect: Flesh Mutation]]"

  - name: "Restore My Masterpiece"
    desc: "`pf2:1` (healing,manipulate) **Requirements** The fleshwarper is holding or wearing a healer's toolkit\n* * *\n\n**Effect** The fleshwarper stitches the wounds of an adjacent, willing aberration or creature they modified using fleshwarping. The creature regains 20 healing HP and is then temporarily immune for 1 day."
 
```

```encounter-table
name: Fleshwarper
creatures:
  - 1: Fleshwarper
```



Cruel scientists called fleshwarpers create horrors from the flesh of others. Many desire to push science forward, but others need only grotesque glee.

* * *

Villains pursue selfish and cruel goals, trampling over anyone in their way.
