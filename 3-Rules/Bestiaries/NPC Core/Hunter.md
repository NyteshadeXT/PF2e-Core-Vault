---
title: "Hunter"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.XqIKuHK4R6yFOKbs" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/7
  - remaster
statblock: inline
name: "Hunter"
level: 7
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Hunter"
level: "Creature 7"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 17
perception:
  - name: "Perception"
    desc: "+17; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Medicine: +15, Nature: +17, Stealth: +17, Survival: +17, Forest Lore: +13"
abilityMods: [4, 4, 2, 1, 4, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 25
armorclass:
  - name: AC
    desc: "25; __Fort__ +12, __Ref__ +17, __Will__ +15"
hp: 115
health:
  - name: ""
  - name: HP
    desc: "115"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Composite Longbow|+1 Composite Longbow]], [[Equipment/Dagger|Dagger]], [[Equipment/Shortsword|Shortsword]], [[Equipment/Leather Armor|Leather Armor]], 60x [[Equipment/Arrows|Arrows]]"
  - name: "[[Actor.4e4cdZuiaRmdbDvK.Item.c1mFMiLxJNswSZe0|Expert Subsistence]]"
    desc: "  While using Survival to [[Actions/subsist statistic=survival|subsist statistic=survival]], if the hunter rolls any result worse than a success, they get a success. On a success, they can provide subsistence living for themselves and 16 additional creatures, and on a critical success, they can take care of twice as many creatures as on a success."

  - name: "Forest Walker"
    desc: "  The hunter ignores the effects of difficult terrain in a forest environment."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Shortsword"
    desc: "+17 (agile, finesse, versatile s)\n__Damage__  1d6 + 10 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+17 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 10 bludgeoning"

  - name: "**Melee** `pf2:1` Dagger"
    desc: "+17 (agile, finesse, versatile s)\n__Damage__  1d4 + 10 piercing"

  - name: "**Ranged** `pf2:1` Composite Longbow"
    desc: "+18 (deadly d10, magical, propulsive, range increment 100 feet, reload 0, volley 30 ft.)\n__Damage__  1d8 + 8 piercing"

  - name: "[[Actor.RsIMCwlVdlu4Bd5M.Item.rTeH6wIQdfQpy5CH|On the Hunt]]"
    desc: "`pf2:1` (concentrate) The hunter designates one creature they're observing or tracking as their prey.\n\nThe hunter gains a +2 circumstance bonus to Perception checks to [[Actions/seek|seek]] the prey and to Survival checks to [[Actions/track|track]] the prey.\n\nThe first time the hunter hits the designated prey in a round, they deal an additional 1d4 precision damage. These effects last until the poacher uses On the Hunt again."
 
```

```encounter-table
name: Hunter
creatures:
  - 1: Hunter
```



As is reflected in the many depictions of the elk-headed Erastil, god of the hunt, the hunter is very much a creature of the forest, known by the forest and familiar with every aspect of it. After all, the final determination of who is the hunter and who is prey often depends on who can make an ally of the terrain.

* * *

Explorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.
