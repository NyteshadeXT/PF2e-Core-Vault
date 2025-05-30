---
title: "Tracker"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.CFBDZzfWCANLJcpF" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/3
  - remaster
statblock: inline
name: "Tracker"
level: 3
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Tracker"
level: "Creature 3"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Nature: +11, Stealth: +9, Survival: +13, Forest Lore: +5"
abilityMods: [2, 4, 2, 0, 4, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 19
armorclass:
  - name: AC
    desc: "19; __Fort__ +7, __Ref__ +11, __Will__ +9"
hp: 40
health:
  - name: ""
  - name: HP
    desc: "40"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Composite Longbow|Composite Longbow]], [[Equipment/Dagger|Dagger]], [[Equipment/Leather Armor|Leather Armor]], 60x [[Equipment/Arrows|Arrows]]"
  - name: "[[Actor.4e4cdZuiaRmdbDvK.Item.c1mFMiLxJNswSZe0|Expert Subsistence]]"
    desc: "  While using Survival to [[Actions/subsist statistic=survival|subsist statistic=survival]], if the tracker rolls any result worse than a success, they get a success. On a success, they can provide subsistence living for themselves and 8 additional creatures, and on a critical success, they can take care of twice as many creatures as on a success."

  - name: "Master Tracker"
    desc: "  The tracker can [[Actions/Track|Track]] while moving at full speed."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Dagger"
    desc: "+11 (agile, finesse, versatile s)\n__Damage__  1d4 + 6 piercing"

  - name: "**Ranged** `pf2:1` Dagger"
    desc: "+11 (agile, thrown 10 ft., versatile s)\n__Damage__  1d4 + 6 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+11 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 6 bludgeoning"

  - name: "**Ranged** `pf2:1` Composite Longbow"
    desc: "+11 (deadly d10, propulsive, range increment 100 feet, reload 0, volley 30 ft.)\n__Damage__  1d8 + 5 piercing"

  - name: "[[Actor.RsIMCwlVdlu4Bd5M.Item.rTeH6wIQdfQpy5CH|On the Hunt]]"
    desc: "`pf2:1` (concentrate) The tracker designates one creature they're observing or tracking as their prey.\n\nThe tracker gains a +2 circumstance bonus to Perception checks to [[Actions/seek|seek]] the prey and to Survival checks to [[Actions/track|track]] the prey.\n\nThe first time the tracker hits the designated prey in a round, they deal an additional 1d4 precision damage. These effects last until the poacher uses On the Hunt again."
 
```

```encounter-table
name: Tracker
creatures:
  - 1: Tracker
```



An untrained eye might spot a sign or two of a wild creature's passing, but only a skilled tracker can identify several such signs and discern their relationship to each other, connecting one to the next until they form a trail of prints, scat, fur, feathers, and blood that leads to the quarry's lair.

* * *

Explorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.
