---
title: "Orc Skullcrushers"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.C8Bo22NBYGoj9Fwd" 
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/orc
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/7
  - remaster
statblock: inline
name: "Orc Skullcrushers"
level: 7
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Orc Skullcrushers"
level: "Creature 7"

alignment: ""
size: "grg"
trait_01: [[humanoid]]
trait_02: [[orc]]
trait_03: [[troop]]
modifier: 15
perception:
  - name: "Perception"
    desc: "+15; Darkvision"
languages: "Common, Orcish"
skills:
  - name: "Skills"
    desc: "Athletics: +17, Intimidation: +15, Stealth: +16, Survival: +13"
abilityMods: [4, 3, 4, 0, 2, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 24
armorclass:
  - name: AC
    desc: "24 (4 segments); Thresholds 80 (3 segments), 40 (2 segments); __Fort__ +17, __Ref__ +16, __Will__ +13"
hp: 120
health:
  - name: ""
  - name: HP
    desc: "120; __Weaknesses__ area damage 8, splash damage 8; __Resistances__ void 8"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Troop Defenses|Troop Defenses]]"
    desc: "  **Thresholds** 80 (3 segments), 40 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

  - name: "[[Bestiary Ability Glossary/Troop Movement|Troop Movement]]"
    desc: "  Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place."

attacks:
  - name: ""

  - name: "Chant of Dominance"
    desc: "`pf2:1` (divine,holy,spirit) **Effect** Orc war drummers lead the other skullcrushers in a holy chant extolling their superiority in battle. Any creature damaged by the skullcrushers this turn also takes 1d6 persistent spirit damage."

  - name: "Crush Skulls"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round\n* * *\n\n**Effect** The skullcrushers smash their mauls and clubs against each enemy in a 5-foot emanation, with a DC 22 Reflex check save. The damage depends on the number of actions.\n\n`pf2:1` 1d12 bludgeoning damage\n\n`pf2:2` 1d12+8 bludgeoning damage\n\n`pf2:3` 2d12+8 bludgeoning damage"

  - name: "Sacred Salvo"
    desc: "`pf2:2` (divine,vitality) The skullcrushers fling a fusillade of sling bullets enchanted with life energy intended to destroy undead. This barrage is a 10-foot burst within 50 feet that deals 3d6 bludgeoning damage plus 1d6 vitality damage to undead, with a DC 22 Reflex check save. When the troop is reduced to 2 or fewer segments, this area decreases to a 5-foot burst."
 
```

```encounter-table
name: Orc Skullcrushers
creatures:
  - 1: Orc Skullcrushers
```



Orc warriors search for more effective weapons and tactics—most physical, but some magical. As they fought back against the undead on their borders, they formed bands of skullcrushers to crush hordes of skeletons.

* * *

Orcs have a strict moral code encompassing valor and accomplishment, and they cast out those unwilling to follow it. For the last few generations, orcs have been trying to erase the narratives around their culture as being solely focused on war and violence. They invite other races and adventuring parties inside their holds so they may experience the truth of who the orcs are.
