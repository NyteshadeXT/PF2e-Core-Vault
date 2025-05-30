---
title: "Poacher"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.6CRUvM2p9csP735v" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/2
  - remaster
statblock: inline
name: "Poacher"
level: 2
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Poacher"
level: "Creature 2"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 9
perception:
  - name: "Perception"
    desc: "+9; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Crafting: +4, Deception: +4, Nature: +7, Stealth: +8, Survival: +7"
abilityMods: [2, 4, 1, 0, 3, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +7, __Ref__ +10, __Will__ +7"
hp: 30
health:
  - name: ""
  - name: HP
    desc: "30"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Composite Shortbow|Composite Shortbow]], [[Equipment/Light Mace|Light Mace]], [[Equipment/Padded Armor|Padded Armor]], [[Equipment/Artisan's Toolkit|Snare Toolkit (Functions as Artisan's Toolkit)]], 20x [[Equipment/Arrows|Arrows]]"
  - name: "[[Actor.4e4cdZuiaRmdbDvK.Item.c1mFMiLxJNswSZe0|Expert Subsistence]]"
    desc: "  While using Survival to [[Actions/subsist statistic=survival|subsist statistic=survival]], if the poacher rolls any result worse than a success, they get a success. On a success, they can provide subsistence living for themselves and four additional creatures, and on a critical success, they can take care of twice as many creatures as on a success."

  - name: "Snare Crafting"
    desc: "  The poacher knows how to craft the following snares:\n\n*   [[Equipment/Alarm Snare|Alarm Snare]]\n*   [[Equipment/Hampering Snare|Hampering Snare]]\n*   [[Equipment/Marking Snare|Marking Snare]]\n*   [[Equipment/Signaling Snare|Signaling Snare]]\n\nThe poacher can create up to four snares each day without paying for the materials, using 3 Interact actions to deploy a snare. The snare becomes inert after 24 hours."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Light Mace"
    desc: "+11 ()\n__Damage__  1d4 + 4 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+11 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 4 bludgeoning"

  - name: "**Ranged** `pf2:1` Composite Shortbow"
    desc: "+11 (deadly d10, propulsive, range increment 60 feet, reload 0)\n__Damage__  1d6 + 3 piercing"

  - name: "On the Hunt"
    desc: "`pf2:1` (concentrate) The poacher designates one creature they're observing or tracking as their prey. The poacher gains a +2 circumstance bonus to Perception checks to [[Actions/seek|seek]] the prey and to Survival checks to [[Actions/track|track]] the prey. The first time the poacher hits the designated prey in a round, they deal an additional 1d4 precision damage. These effects last until the poacher uses On the Hunt again."
 
```

```encounter-table
name: Poacher
creatures:
  - 1: Poacher
```



Rules against hunting may insulate the private reserves of nobles or guard the viability of animal populations in shared forests during specific seasons. Poachers violate those laws—sometimes out of greed, sometimes out of desperation, and sometimes for sport.

* * *

Explorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.
