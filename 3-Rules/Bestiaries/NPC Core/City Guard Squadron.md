---
title: "City Guard Squadron"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.jAdRgBHut1h1et10" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/5
  - remaster
statblock: inline
name: "City Guard Squadron"
level: 5
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "City Guard Squadron"
level: "Creature 5"

alignment: ""
size: "grg"
trait_01: [[human]]
trait_02: [[humanoid]]
trait_03: [[troop]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +14, Intimidation: +11, Settlement Lore: +9"
abilityMods: [5, 0, 3, 0, 2, 2]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__ +14, __Ref__ +9, __Will__ +11"
hp: 75
health:
  - name: ""
  - name: HP
    desc: "75, troop defenses; __Weaknesses__ area damage 5, splash damage 5"
abilities_top:
  - name: ""

  - name: "[[Actor.K7Jw4Ycg7I0nToz6.Item.4vjdVbvQ2cPvkxA1|Seek Quarry]]"
    desc: "  City guards can spend 1 minute to designate a single creature for whom they have a physical description as their quarry. They gain a +2 circumstance bonus to Perception checks against their quarry."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Troop Defenses|Troop Defenses]]"
    desc: "  **Thresholds** 50 (3 segments), 25 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

  - name: "[[Bestiary Ability Glossary/Troop Movement|Troop Movement]]"
    desc: "  Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place."

attacks:
  - name: ""

  - name: "[[Actor.K7Jw4Ycg7I0nToz6.Item.IwHXGWYNDTd1AETH|City Passage]]"
    desc: "  City guards ignore difficult terrain caused by crowds or from movement through narrow spaces such as alleyways."

  - name: "Lower Halberds!"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round.\n* * *\n\n**Effect** The city guards engage in a coordinated melee attack against each enemy within 10 feet, with a DC 19 Reflex check save. The damage depends on the number of actions.\n\n`pf2:1` 1d10 piercing damage or 1d10 slashing damage\n\n`pf2:2` 1d10+7 piercing damage or 1d10+7 slashing damage\n\n`pf2:3` 1d10+10 piercing damage or 1d10+10 slashing damage"

  - name: "Shoot Crossbows!"
    desc: "`pf2:2`  The city guards draw or reload their crossbows, then launch a ranged attack in the form of a volley. This volley is a 10-foot burst within 120 feet that deals 2d8 piercing damage with a DC 19 Reflex check save. When the city guards are reduced to 2 or fewer segments, this area decreases to a 5-foot burst."
 
```

```encounter-table
name: City Guard Squadron
creatures:
  - 1: City Guard Squadron
```



Garrisons of professional guards are given the duties of patrolling the streets, assisting citizenry, and acting as a quick military response in times of crisis.

* * *

Larger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.
