---
title: "Corn Leshy Throng"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.1GaKFngjw3Fp93CV" 
tags:
  - pf2e/creature/type/leshy
  - pf2e/creature/type/plant
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Corn Leshy Throng"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Corn Leshy Throng"
level: "Creature 4"

alignment: ""
size: "grg"
trait_01: [[leshy]]
trait_02: [[plant]]
trait_03: [[troop]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; Low-Light Vision"
languages: "Common, Fey; speak with plants (corn only)"
skills:
  - name: "Skills"
    desc: "Acrobatics: +11, Athletics: +10, Nature: +12"
abilityMods: [2, 3, 2, 0, 2, 2]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__ +8, __Ref__ +13, __Will__ +10"
hp: 54
health:
  - name: ""
  - name: HP
    desc: "54, (4 segments); Thresholds 36 (3 segments), 18 (2 segments); __Weaknesses__ area damage 5, splash damage 5"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "Encircling Maze"
    desc: "  A corn leshy throng is arranged in rows of stalks to envelop foes, stretching upward to block their vision. It can move into other creatures' spaces, and other creatures can move into its squares.\n\nWhen a Medium or smaller creature attempts to enter any of the corn leshy throng's spaces, it must attempt a DC 20 Survival check check. If the creature fails, it gets turned around—all the throng's squares are greater difficult terrain for it until the end of this turn. A creature needs to attempt this check only the first time in a round it attempts to enter one of the throng's squares."

  - name: "[[Bestiary Ability Glossary/Troop Defenses|Troop Defenses]]"
    desc: "  **Thresholds** 36 (3 segments), 18 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

  - name: "[[Bestiary Ability Glossary/Troop Movement|Troop Movement]]"
    desc: "  Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place."

  - name: "Verdant Burst"
    desc: "  When the corn leshy throng dies, a burst of primal energy explodes from their body, restoring 3d8 healing vitality Hit Points to each plant creature in a 30-foot emanation. This area immediately fills with stalks of corn, becoming difficult terrain. If the terrain is not a viable environment for these plants, they wither after 24 hours."

attacks:
  - name: ""

  - name: "Boxing Ears"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round\n* * *\n\n**Effect** The corn leshy throng lashes out with hardened ears of corn to attack each enemy in its space and in a 5-foot emanation, with a DC 18 Reflex check save. The damage depends on the number of actions.\n\n`pf2:1` 1d6 bludgeoning damage\n\n`pf2:2` 2d6+4 bludgeoning damage\n\n`pf2:3` 2d6+8 bludgeoning damage"

  - name: "Kernel Barrage"
    desc: "`pf2:2`  The throng's members fling a bombardment of corn kernels. Each creature in a 30-foot cone takes 2d6 bludgeoning damage with a DC 18 Reflex check save. When the throng is reduced to 2 or fewer segments, this area decreases to a 15-foot cone."
 
```

```encounter-table
name: Corn Leshy Throng
creatures:
  - 1: Corn Leshy Throng
```



A thick forest or flourishing farm sometimes sees an explosion of primal magic leading to the creation of a multitude of leshies. When still young, these spirits might band together with their crop-mates for protection or to achieve a mutual goal. Used to growing in rows, many corn leshies can form a sizable legion.

* * *

Nature spirits inhabit bodies made of plants or fungi, blooming from primal magic to become the small people called leshies. They come in a truly immense number of diverse shapes and sizes, more so than most peoples of Golarion. This variety of forms means a leshy could have a place in nearly any type of setting for any type of story.
