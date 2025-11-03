---
title: "Arrester Squadron"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.7AQj3Tbx5O2mlwgS" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/8
  - remaster
statblock: inline
name: "Arrester Squadron"
level: 8
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Arrester Squadron"
level: "Creature 8"

alignment: ""
size: "grg"
trait_01: [[human]]
trait_02: [[humanoid]]
trait_03: [[troop]]
modifier: 17
perception:
  - name: "Perception"
    desc: "+17; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +18, Intimidation: +16, Settlement Lore: +14"
abilityMods: [6, 1, 4, 0, 3, 2]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__ +18, __Ref__ +13, __Will__ +17"
hp: 135
health:
  - name: ""
  - name: HP
    desc: "135; __Weaknesses__ area damage 10, splash damage 10"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Troop Defenses|Troop Defenses]]"
    desc: "  **Thresholds** 90 (3 segments), 45 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

  - name: "[[Bestiary Ability Glossary/Troop Movement|Troop Movement]]"
    desc: "  Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place."

attacks:
  - name: ""

  - name: "Coordinated Step"
    desc: "`pf2:1`  The arrester squadron Steps twice."

  - name: "Fire Longbows!"
    desc: "`pf2:2`  The arrester squadron fire a coordinated volley with their longbows against each enemy in a 10-foot burst within 150 feet that deals 3d8 piercing damage with a DC 23 Reflex check save. When the arresters are reduced to 2 or fewer segments, this area decreases to a 5-foot burst."

  - name: "Seize Them!"
    desc: "`pf2:1` (nonlethal) `pf2:1` to `pf2:3`\n\nThe arresters attack with saps and tackle foes. Each enemy in a 5-foot emanation must attempt a DC 23 Reflex check save. The damage and additional effects depend on the number of actions. The DC to [[Actions/Escape|Escape]] any of the following conditions is 26.\n\n`pf2:1` 1d6+3 bludgeoning damage (plus [[Conditions/Grabbed|Grabbed]] for 1 round on a critical failure)\n\n`pf2:2` 3d6+6 bludgeoning damage (plus grabbed for 1 round on a failure or [[Conditions/Restrained|Restrained]] for 1 round on a critical failure)\n\n`pf2:3` 4d6+9 bludgeoning damage (plus grabbed for 1 round on a failure or restrained for 1 round on a critical failure)"

  - name: "Sweep the Area"
    desc: "`pf2:1`  The arresters [[Actions/Seek|Seek]] in a 40-foot burst or 80-foot cone and Point Out up to four targets."
 
```

```encounter-table
name: Arrester Squadron
creatures:
  - 1: Arrester Squadron
```



These guards have been extensively trained to perform complex maneuvers together. They are sent to capture accused criminals believed to be especially dangerous (whether due to their own abilities or due to their allies).

* * *

Larger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.
