---
title: "Forager"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.JWhmMRoFHl2tmDS9" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/1
  - remaster
statblock: inline
name: "Forager"
level: 1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Forager"
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
    desc: "Medicine: +6, Nature: +10, Stealth: +3, Survival: +10, Local Lore: +5"
abilityMods: [1, 3, 1, 0, 4, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 15
armorclass:
  - name: AC
    desc: "15; __Fort__ +5, __Ref__ +8, __Will__ +8"
hp: 20
health:
  - name: ""
  - name: HP
    desc: "20"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Dagger|Dagger]], Pouches, Wicker Baskets"
  - name: "Expert Subsistence"
    desc: "  While using Survival to [[Actions/subsist statistic=survival|subsist statistic=survival]], if the forager rolls any result worse than a success, they get a success. On a success, they can provide subsistence living for themselves and four additional creatures, and on a critical success, they can take care of twice as many creatures as on a success."

  - name: "Natural Specialist"
    desc: "  For encounters involving Nature or Survival, the forager is a 3rd-level challenge."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Dagger"
    desc: "+7 (agile, finesse, versatile s)\n__Damage__  1d4 + 1 piercing"

  - name: "**Ranged** `pf2:1` Dagger"
    desc: "+7 (agile, thrown 10 ft., versatile s)\n__Damage__  1d4 + 1 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+7 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 1 bludgeoning"

  - name: "**Ranged** `pf2:1` Fruit or Vegetable"
    desc: "+7 (thrown 20 ft.)\n__Damage__  1d4 + 1 bludgeoning"

  - name: "Local Poison"
    desc: "`pf2:1` (manipulate) The forager coats their dagger in a diluted, locally sourced poison. Until the end of their turn, Strikes with their dagger deal an additional 2 persistent poison damage."
 
```

```encounter-table
name: Forager
creatures:
  - 1: Forager
```



Foragers know the areas they live and work in like no other. They can tell you exactly where to find a rare medicinal fern, when to harvest it, and how to use it; just don't expect them to be up-to-date on the latest town gossip. They spend as much time in the wilderness as they can, filling their baskets with a variety of useful plants.

* * *

Explorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.
