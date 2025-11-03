---
title: "Besieged Logging Crew"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.wardens-of-wildwood-bestiary.Actor.pO47dwHY2ulSpg7F" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Besieged Logging Crew"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #201: Pactbreaker"
name: "Besieged Logging Crew"
level: "Creature 4"

alignment: ""
size: "grg"
trait_01: [[human]]
trait_02: [[humanoid]]
trait_03: [[troop]]
modifier: 7
perception:
  - name: "Perception"
    desc: "+7; "
languages: "Common, Fey"
skills:
  - name: "Skills"
    desc: "Acrobatics: +9, Athletics: +12, Nature: +8, Survival: +10, Lumber Lore: +10"
abilityMods: [3, 2, 2, 1, 2, 1]
speed: 25 feet
sourcebook: "_Pathfinder #201: Pactbreaker_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +12, __Ref__ +9, __Will__ +10"
hp: 60
health:
  - name: ""
  - name: HP
    desc: "60, Thresholds 40 (3 segments), 20 (2 segments);; __Weaknesses__ area damage 10, splash damage 5"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Form Up|Form Up]]"
    desc: "`pf2:1`  The troop chooses one of the squares it currently occupies and redistributes its squares to any configuration in which all squares are contiguous and within 15 feet of the chosen square. The troop can't share its space with other creatures."

abilities_mid:
  - name: ""
  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  **Thresholds** 40 (3 segments), 20 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Hurl Axes"
    desc: "`pf2:2`  The loggers draw their hatchets, then launch a ranged attack in the form of a volley. This volley is a 10-foot burst within 120 feet that deals 3d6 slashing damage (DC 18 Reflex check save). When the crew is reduced to 8 or fewer squares, this area decreases to a 5-foot burst."

  - name: "Tandem Chop"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The loggers engage in a coordinated axe attack against each enemy within 10 feet, with a DC 19 Reflex check save. The damage depends on the number of actions expended.\n\n`pf2:1` 1d10 slashing damage\n\n`pf2:2` 3d6+7 slashing damage\n\n`pf2:3` 3d6+10 slashing damage"

  - name: "Troop Movement"
    desc: "  Whenever the loggers Stride, they first Form Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then move up to their Speed. This works just like a Gargantuan creature moving; for instance, if any square of the logging crew enters difficult terrain, the extra movement cost applies to all the loggers."
 
```

```encounter-table
name: Besieged Logging Crew
creatures:
  - 1: Besieged Logging Crew
```




