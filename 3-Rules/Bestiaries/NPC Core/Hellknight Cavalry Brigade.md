---
title: "Hellknight Cavalry Brigade"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.02AGznZTv5jjcnOg" 
tags:
  - pf2e/creature/type/animal
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/8
  - remaster
statblock: inline
name: "Hellknight Cavalry Brigade"
level: 8
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Hellknight Cavalry Brigade"
level: "Creature 8"

alignment: ""
size: "grg"
trait_01: [[animal]]
trait_02: [[human]]
trait_03: [[humanoid]]
trait_04: [[troop]]
modifier: 16
perception:
  - name: "Perception"
    desc: "+16; "
languages: "Common, Diabolic"
skills:
  - name: "Skills"
    desc: "Acrobatics: +13, Athletics: +18, Intimidation: +17, Religion: +12, Society: +12, Hell Lore: +12"
abilityMods: [7, 1, 4, 2, 2, 3]
speed: 40 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__ +18, __Ref__ +13, __Will__ +16"
hp: 135
health:
  - name: ""
  - name: HP
    desc: "135, troop defenses; __Weaknesses__ area damage 8, splash damage 8; __Resistances__ mental 5, slashing 5"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "[[Actor.uChxbgsxG6aubLFs.Item.zv2XXCRsUyyFRVAQ|Mounted Troop]]"
    desc: "  Effects that target only animals or only humanoids might not work on the cavalry brigade, subject to the GM's discretion."

  - name: "[[Bestiary Ability Glossary/Troop Defenses|Troop Defenses]]"
    desc: "  **Thresholds** 90 (3 segments), 45 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

  - name: "[[Bestiary Ability Glossary/Troop Movement|Troop Movement]]"
    desc: "  Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place."

attacks:
  - name: ""

  - name: "Arrow Volley"
    desc: "`pf2:2`  The Hellknights draw or reload their longbows, then launch a ranged attack in the form of a volley. This volley is a 10-foot burst within 100 feet that deals 3d8 piercing damage (DC 23 Reflex check save). When the troop is reduced to 2 or fewer segments, this area decreases to a 5-foot burst."

  - name: "Lance Charge"
    desc: "`pf2:3`  The brigade Strides twice with a +10-foot circumstance bonus to its Speed. If it moves at least 10 feet, the brigade deals 3d8+14 piercing damage with a DC 26 Reflex check save to each enemy in a 10-foot emanation at the end of its movement."

  - name: "Swing from the Saddle"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round\n* * *\n\n**Effect** The brigade engages in a coordinated lance attack against each enemy in a 10-foot emanation with a DC 23 Reflex check save. The damage depends on the number of actions.\n\n`pf2:1` 1d6+3 piercing damage\n\n`pf2:2` 2d6+10 piercing damage\n\n`pf2:3` 3d6+14 piercing damage"

  - name: "Trailblazing Stride"
    desc: "  While moving on land, the Hellknight cavalry brigade ignores difficult terrain."
 
```

```encounter-table
name: Hellknight Cavalry Brigade
creatures:
  - 1: Hellknight Cavalry Brigade
```



A Hellknight cavalry brigade consists of several Hellknights and a single field-maralictor, all wearing the distinctive armor of their order and wielding lances. The maralictor speaks for the brigade, questioning travelers the brigade encounters and barking orders. A Hellknight brigade is typically based at a keep or other fortification controlling an area measured by a day's ride in every direction—about 25 miles. Farther-ranging missions are possible but require substantial logistical support.

* * *

A military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.
