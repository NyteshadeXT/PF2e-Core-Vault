---
title: "Heavy Cavalry"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.Iax22298eQbIhIQK" 
tags:
  - pf2e/creature/type/animal
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/7
  - remaster
statblock: inline
name: "Heavy Cavalry"
level: 7
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Heavy Cavalry"
level: "Creature 7"

alignment: ""
size: "grg"
trait_01: [[animal]]
trait_02: [[human]]
trait_03: [[humanoid]]
trait_04: [[troop]]
modifier: 14
perception:
  - name: "Perception"
    desc: "+14; "
languages: ""
skills:
  - name: "Skills"
    desc: "Acrobatics: +13, Athletics: +17, Intimidation: +15, Nature: +12, Warfare Lore: +15"
abilityMods: [7, 2, 4, 0, 1, 2]
speed: 40 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 25
armorclass:
  - name: AC
    desc: "25; __Fort__ +17, __Ref__ +13, __Will__ +14"
hp: 105
health:
  - name: ""
  - name: HP
    desc: "105; __Weaknesses__ area damage 8, splash damage 8"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "Mounted Troop"
    desc: "  Effects that target only animals or only humanoids might not work on the cavalry brigade, subject to the GM's discretion."

  - name: "[[Bestiary Ability Glossary/Troop Defenses|Troop Defenses]]"
    desc: "  **Thresholds** 70 (3 segments), 35 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

  - name: "[[Bestiary Ability Glossary/Troop Movement|Troop Movement]]"
    desc: "  Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place."

attacks:
  - name: ""

  - name: "Join the Fray"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round\n* * *\n\n**Effect** The heavy cavalry swing flails at each enemy in a 5-foot emanation, with a DC 22 Reflex check save. The damage depends on the number of actions.\n\n`pf2:1` 1d6+3 bludgeoning damage\n\n`pf2:2` 2d6+7 bludgeoning damage\n\n`pf2:3` 3d6+10 bludgeoning damage"

  - name: "Thunder of Hooves"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The heavy cavalry Strides. At the end of their movement, the cavalry can either attempt an Athletics check to [[Actions/Trip|Trip]] each adjacent enemy or an Intimidation check to [[Actions/Demoralize|Demoralize]] each enemy within 30 feet. Roll only once and compare the result to each enemy's Reflex DC (for Trip) or Will DC (for Demoralize)."

  - name: "[[Bestiary Ability Glossary/Trample|Trample]]"
    desc: "`pf2:3`  Medium or smaller, 2d8+7 bludgeoning, DC 22 Reflex check; creatures that fail the save are also knocked [[Conditions/Prone|Prone]]\n* * *\n\nThe monster Strides up to double its Speed and can move through the spaces of creatures of the listed size, Trampling each creature whose space it enters. The monster can attempt to Trample the same creature only once in a single use of Trample. The monster deals the damage of the listed Strike, but trampled creatures can attempt a basic Reflex save at the listed DC (no damage on a critical success, half damage on a success, double damage on a critical failure)."
 
```

```encounter-table
name: Heavy Cavalry
creatures:
  - 1: Heavy Cavalry
```



A charging band of knights, mounted upon heavy warhorses and clad in steel plate, is a sight to be feared on the battlefield. The weight of their armor, however, makes them ill-suited to extended overland maneuvers. Squads of squires are needed to tend to horses, repair armor, and otherwise support the heavy cavalry group between battles. Despite these limitations, their ability to crash through enemy lines makes them an invaluable tool for professional armies.

* * *

A military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.
