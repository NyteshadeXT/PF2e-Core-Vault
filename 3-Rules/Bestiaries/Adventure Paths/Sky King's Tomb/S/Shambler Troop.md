---
title: "Shambler Troop"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.sky-kings-tomb-bestiary.Actor.4JWlEd08ehGAxLWs" 
tags:
  - pf2e/creature/type/evil
  - pf2e/creature/type/mindless
  - pf2e/creature/type/troop
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2e/creature/type/zombie
  - pf2eMonster
  - pf2e/creature/level/4
statblock: inline
name: "Shambler Troop"
level: 4
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #194: Cult of the Cave Worm"
name: "Shambler Troop"
level: "Creature 4"

alignment: ""
size: "grg"
trait_01: [[evil]]
trait_02: [[mindless]]
trait_03: [[troop]]
trait_04: [[undead]]
trait_05: [[unholy]]
trait_06: [[zombie]]
modifier: 7
perception:
  - name: "Perception"
    desc: "+7; Darkvision"
languages: ""
skills:
  - name: "Skills"
    desc: ""
abilityMods: [5, 0, 3, -5, 1, -2]
speed: 20 feet
sourcebook: "_Pathfinder #194: Cult of the Cave Worm_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +11, __Ref__ +8, __Will__ +9"
hp: 90
health:
  - name: ""
  - name: HP
    desc: "90, troop defenses; __Immunities__  death effects,  disease,  paralyzed,  poison,  unconscious,  mental; __Weaknesses__ area damage 5, vitality 5, slashing 5, splash damage 2"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Form Up|Form Up]]"
    desc: "`pf2:1`  The troop chooses one of the squares it currently occupies and redistributes its squares to any configuration in which all squares are contiguous and within 15 feet of the chosen square. The troop can't share its space with other creatures."

  - name: "Slow"
    desc: "  A shambler troop is permanently [[Conditions/Slowed|Slowed 1]] and can't use reactions."

abilities_mid:
  - name: ""
  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  **Thresholds** 60 (3 segments), 30 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Grave Tide"
    desc: "  The shambler troop is less organized than most troops. It can move into other creatures' spaces, and other creatures can move into its spaces. Its spaces are difficult terrain to other creatures."

  - name: "Putrid Stench"
    desc: " (aura,olfactory) 15 feet. The zombies' rotting flesh is particularly malodorous. A creature that enters the area must attempt a DC 19 Fortitude check save. On a failure, the creature is [[Conditions/Sickened|Sickened 1]], and on a critical failure, the creature also takes a –5-foot status penalty to its Speeds for 1 round. While within the aura, the creature takes a –2 circumstance penalty to saves to recover from the sickened condition. A creature that succeeds at its save is temporarily immune to all zombies' putrid stenches for 1 minute."

  - name: "Shambling Onslaught"
    desc: "`pf2:1`  `pf2:1` to `pf2:2`\n\n**Frequency** once per round\n* * *\n\n**Effect** The shamblers lash out at any enemies in their squares or within 5 feet (DC 18 Reflex check save). The damage depends on the number of actions.\n\n`pf2:1` 2d6+5 bludgeoning damage\n\n`pf2:2` 2d6+9 bludgeoning damage"

  - name: "Troop Movement"
    desc: "  Whenever a troop Strides, it first Forms Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then moves up to its Speed. This works just like a Gargantuan creature moving; for instance, if any square of the troop enters difficult terrain, the extra movement cost applies to the whole troop."
 
```

```encounter-table
name: Shambler Troop
creatures:
  - 1: Shambler Troop
```



This shuffling mass of decaying flesh moves with dull but singular focus.

* * *

Necromancers most often create these mindless undead as obedient, expendable servitors. Left to its own devices, a zombie seeks only to consume the living, stopping only when its rotting body can no longer hold together.
