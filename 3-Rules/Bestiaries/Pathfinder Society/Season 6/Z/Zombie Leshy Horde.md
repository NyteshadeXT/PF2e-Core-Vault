---
title: "Zombie Leshy Horde"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pfs-season-6-bestiary.Actor.MOO63ihyTdFGEmS9" 
tags:
  - pf2e/creature/type/leshy
  - pf2e/creature/type/mindless
  - pf2e/creature/type/plant
  - pf2e/creature/type/troop
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2e/creature/type/zombie
  - pf2eMonster
  - pf2e/creature/level/2
  - remaster
statblock: inline
name: "Zombie Leshy Horde"
level: 2
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #6-06: Rotten Apples"
name: "Zombie Leshy Horde"
level: "Creature 2"
rare_03: [[Uncommon]]
alignment: ""
size: "grg"
trait_01: [[leshy]]
trait_02: [[mindless]]
trait_03: [[plant]]
trait_04: [[troop]]
trait_05: [[undead]]
trait_06: [[unholy]]
trait_07: [[zombie]]
modifier: 4
perception:
  - name: "Perception"
    desc: "+4; Darkvision"
languages: ""
skills:
  - name: "Skills"
    desc: ""
abilityMods: [4, -2, 3, -5, 0, -2]
speed: 20 feet
sourcebook: "_Pathfinder Society Scenario #6-06: Rotten Apples_"
ac: 15
armorclass:
  - name: AC
    desc: "15; __Fort__ +8, __Ref__ +5, __Will__ +6"
hp: 60
health:
  - name: ""
  - name: HP
    desc: "60, troop defenses; __Immunities__  death effects,  disease,  paralyzed,  poison,  unconscious,  mental; __Weaknesses__ area damage 5, vitality 5, slashing 5, splash damage 2"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Form Up|Form Up]]"
    desc: "`pf2:1`  The troop chooses one of the squares it currently occupies and redistributes its squares to any configuration in which all squares are contiguous and within 15 feet of the chosen square. The troop can't share its space with other creatures."

  - name: "Slow"
    desc: "  A zombie leshy horde is permanently [[Conditions/Slowed|Slowed 1]] and can't use reactions"

abilities_mid:
  - name: ""
  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  **Thresholds** 40 (3 segments), 20 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Grave Tide"
    desc: "  The zombie leshy horde is less organized than most troops. It can move into other creatures' spaces, and other creatures can move into its spaces. Its spaces are difficult terrain to other creatures."

  - name: "Shambling Onslaught"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The leshy zombies lash out at any enemies in their squares or within 5 feet (DC 15 Reflex check save). The damage depends on the number of actions.\n\n`pf2:1` 1d8+4 bludgeoning damage\n\n`pf2:2` 1d8+8 bludgeoning damage"

  - name: "Troop Movement"
    desc: "  Whenever a troop Strides, it first Forms Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then moves up to its Speed. This works just like a Gargantuan creature moving; for instance, if any square of the troop enters difficult terrain, the extra movement cost applies to the whole troop."
 
```

```encounter-table
name: Zombie Leshy Horde
creatures:
  - 1: Zombie Leshy Horde
```


Variant shambler troop

This shuffling mass of decaying flesh moves with dull but singular focus.

* * *

Necromancers most often create these mindless undead as obedient, expendable servitors. Left to its own devices, a zombie seeks only to consume the living, stopping only when its rotting body can no longer hold together.
