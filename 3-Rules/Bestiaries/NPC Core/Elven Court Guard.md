---
title: "Elven Court Guard"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.1K6Zl3EGIRZvC3TO" 
tags:
  - pf2e/creature/type/elf
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/13
  - remaster
statblock: inline
name: "Elven Court Guard"
level: 13
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Elven Court Guard"
level: "Creature 13"

alignment: ""
size: "Medium"
trait_01: [[elf]]
trait_02: [[humanoid]]
modifier: 24
perception:
  - name: "Perception"
    desc: "+24; Low-Light Vision"
languages: "Common, Elven, Fey; plus one regional language"
skills:
  - name: "Skills"
    desc: "Acrobatics: +26, Athletics: +23, Intimidation: +24, Society: +19, Heraldry Lore: +21"
abilityMods: [4, 5, 2, 2, 3, 1]
speed: 30 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 35
armorclass:
  - name: AC
    desc: "35; __Fort__ +20, __Ref__ +27, __Will__ +23; 1 status vs. mental effects"
hp: 225
health:
  - name: ""
  - name: HP
    desc: "225"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Elven Curve Blade|+1 Striking Cold Iron Elven Curve Blade]], [[Equipment/Composite Longbow|+1 Striking Composite Longbow]], [[Equipment/Chain Shirt|+1 Resilient Chain Shirt]]"
  - name: "Vigilance"
    desc: "  A court guard gains a +1 circumstance bonus on Perception checks to [[Actions/sense-motive|sense-motive]] and [[Actions/seek|seek]] creatures, and if they succeed, they get a critical success instead."

abilities_mid:
  - name: ""
  - name: "Interposition"
    desc: "`pf2:r`  **Trigger** An ally within 15 feet of the guard would take damage\n* * *\n\n**Effect** The guard Strides. This movement does not trigger reactions, and the guard must end the Stride in a space adjacent to the ally. The guard then switches places with the ally, taking all damage and associated effects instead of the ally."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Elven Curve Blade"
    desc: "+27 (finesse, forceful, magical)\n__Damage__  2d8 + 12 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+26 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 12 bludgeoning"

  - name: "**Ranged** `pf2:1` Composite Longbow"
    desc: "+27 (deadly d10, magical, propulsive, range increment 100 feet, reload 0, volley 30 ft.)\n__Damage__  2d8 + 10 piercing"

  - name: "Avenge the Fallen"
    desc: "`pf2:1` (fortune) **Frequency** once per round\n\n**Requirements** The guard is within 30 feet of the creature they were guarding, and that creature is either [[Conditions/Dying|Dying]] or died since the guard's last turn\n* * *\n\n**Effect** The guard Strikes the creature that damaged their ally. They roll the attack roll twice and use the higher result."

  - name: "Dancing Blade"
    desc: "`pf2:2`  The guard makes a Strike against a creature, then Strides. This Stride doesn't trigger reactions. If the guard ends this Stride in a different space adjacent to the same creature, they make another Strike against it. If both Strikes succeed, the creature is [[Conditions/Off-Guard|Off-Guard]] until the start of the guard's next turn. Each attack counts toward the guard's multiple attack penalty, but the penalty doesn't increase until they've made both attacks."
 
```

```encounter-table
name: Elven Court Guard
creatures:
  - 1: Elven Court Guard
```



In the tangled web of lineages, rivalries, and shifting alliances that is an elven noble court, aristocratic families employ bodyguards loyal to them alone.

* * *

Elves' long lives give them centuries to delve into studies, artistry, or exploration.
