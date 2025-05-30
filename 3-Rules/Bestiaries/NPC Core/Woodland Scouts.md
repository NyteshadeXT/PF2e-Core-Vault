---
title: "Woodland Scouts"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.IYEVUYP6fXJCleTQ" 
tags:
  - pf2e/creature/type/elf
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/8
  - remaster
statblock: inline
name: "Woodland Scouts"
level: 8
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Woodland Scouts"
level: "Creature 8"

alignment: ""
size: "grg"
trait_01: [[elf]]
trait_02: [[humanoid]]
trait_03: [[troop]]
modifier: 18
perception:
  - name: "Perception"
    desc: "+18; Low-Light Vision"
languages: "Common, Elven, Fey"
skills:
  - name: "Skills"
    desc: "Acrobatics: +16, Athletics: +15, Medicine: +14, Nature: +16, Stealth: +18, Survival: +16, Forest Lore: +17"
abilityMods: [3, 4, 0, 1, 4, 2]
speed: 30 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__ +12, __Ref__ +18, __Will__ +16"
hp: 120
health:
  - name: ""
  - name: HP
    desc: "120, (4 segments); Thresholds 80 (3 segments), 40 (2 segments); __Weaknesses__ area damage 8, splash damage 8"
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

  - name: "Among the Trees"
    desc: "`pf2:1`  **Requirements** Every square the woodland scouts occupy is in forest terrain\n* * *\n\n**Effect** The woodland scouts disperse among the trees. They [[Actions/Take Cover|Take Cover]] and then use that cover to [[Actions/hide|hide]], attempting a Stealth check."

  - name: "Forest Passage"
    desc: "  Woodland scouts ignore any difficult terrain caused by plants and fungi, such as bushes, vines, and undergrowth."

  - name: "Longbow Barrage"
    desc: "`pf2:2`  The scouts draw or reload their longbows, then send forth a flurry of arrows. This barrage is a 10-foot burst within 100 feet that deals 3d8 piercing damage with a DC 24 Reflex check save. If the scouts are [[Conditions/Hidden|Hidden]] or undetected, this deals an additional 2d6 precision damage. When the troop is reduced to 2 or fewer segments, this area decreases to a 5-foot burst."

  - name: "Stealthy Formation"
    desc: "  If the scouts become [[Conditions/Hidden|Hidden]] or [[Conditions/Undetected|Undetected]], they remain so until they take a hostile action."

  - name: "Thicket of Blades"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round\n* * *\n\n**Effect** The scouts engage in a coordinated melee attack against each enemy in a 5-foot emanation, with a DC 24 Reflex check save. The damage depends on the number of actions.\n\n`pf2:1` 1d8+3 slashing damage\n\n`pf2:2` 2d8+6 slashing damage\n\n`pf2:3` 3d8+9 slashing damage"
 
```

```encounter-table
name: Woodland Scouts
creatures:
  - 1: Woodland Scouts
```



Elves of the forest or jungle take advantage of the terrain, operating in units that seemingly appear from the trees themselves.

* * *

Elves' long lives give them centuries to delve into studies, artistry, or exploration.
