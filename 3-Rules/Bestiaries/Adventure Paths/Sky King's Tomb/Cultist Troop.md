---
title: "Cultist Troop"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.sky-kings-tomb-bestiary.Actor.Ss0SKInl10zbVV1Q" 
tags:
  - pf2e/creature/type/evil
  - pf2e/creature/type/fey
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/5
statblock: inline
name: "Cultist Troop"
level: 5
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #194: Cult of the Cave Worm"
name: "Cultist Troop"
level: "Creature 5"

alignment: ""
size: "grg"
trait_01: [[evil]]
trait_02: [[fey]]
trait_03: [[troop]]
modifier: 15
perception:
  - name: "Perception"
    desc: "+15; Low-Light Vision"
languages: ""
skills:
  - name: "Skills"
    desc: "Athletics: +14"
abilityMods: [5, 1, 4, 1, 0, 3]
speed: 25 feet
sourcebook: "_Pathfinder #194: Cult of the Cave Worm_"
ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__ +15, __Ref__ +12, __Will__ +11"
hp: 90
health:
  - name: ""
  - name: HP
    desc: "90, (16 squares); Thresholds 60 (3 segments), 30 (2 segments);; __Weaknesses__ area damage 5, cold iron 5, splash damage 2"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Form Up|Form Up]]"
    desc: "`pf2:1`  The troop chooses one of the squares it currently occupies and redistributes its squares to any configuration in which all squares are contiguous and within 15 feet of the chosen square. The troop can't share its space with other creatures."

abilities_mid:
  - name: ""
  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  Troops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Troop Movement"
    desc: "  Whenever a troop Strides, it first Forms Up as a free action to condense into a 20-foot-by–20-foot area (minus any missing squares), then moves up to its Speed. See _Bestiary 3_ for further details."

  - name: "Wild Swing"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The cultists chaotically swing their weapons—from pixies' tiny rapiers to redcaps' scythes—at each enemy adjacent to the troop (DC 22 Reflex check save), dealing a small amount of damage to the troop at the same time. The damage depends on the number of actions.\n\n`pf2:1` 1d12+1 slashing damage to enemies and 1d4 slashing damage to the troop\n\n`pf2:2` 2d12+1 slashing damage and 1d4+2 slashing damage to the troop\n\n`pf2:3` 2d12+5 slashing damage and 2d4 slashing damage to the troop"
 
```

```encounter-table
name: Cultist Troop
creatures:
  - 1: Cultist Troop
```




