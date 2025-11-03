---
title: "Pelegox Cube"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.rage-of-elements-bestiary.Actor.E3n4MNWQNPR2o3bG" 
tags:
  - pf2e/creature/type/elemental
  - pf2e/creature/type/metal
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/11
  - remaster
statblock: inline
name: "Pelegox Cube"
level: 11
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Rage of Elements"
name: "Pelegox Cube"
level: "Creature 11"

alignment: ""
size: "grg"
trait_01: [[elemental]]
trait_02: [[metal]]
trait_03: [[troop]]
modifier: 22
perception:
  - name: "Perception"
    desc: "+22; "
languages: "Talican; telepathy 30 feet"
skills:
  - name: "Skills"
    desc: "Acrobatics: +22, Athletics: +21, Crafting: +20, Diplomacy: +21"
abilityMods: [4, 7, 6, 5, 3, 4]
speed:  fly 25 feet
sourcebook: "_Pathfinder Rage of Elements_"
ac: 31
armorclass:
  - name: AC
    desc: "31; __Fort__ +21, __Ref__ +24, __Will__ +18"
hp: 210
health:
  - name: ""
  - name: HP
    desc: "210, 140 (3 segments), 70 (2 segments); __Weaknesses__ area damage 10, splash damage 10; __Resistances__ electricity 10"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Telepathy|Telepathy 30 feet]]"
    desc: " (aura,magical,mental) A monster with telepathy can communicate mentally with any creatures within the listed radius, as long as they share a language. This doesn't give any special access to their thoughts, and communicates no more information than normal speech would."

  - name: "Metalsense"
    desc: "  A pelegox cube can sense metal creatures and objects as an imprecise sense."

abilities_mid:
  - name: ""
  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  Troops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Entrancing Shapes"
    desc: "`pf2:2` (mental,occult,visual) The pelegox cube rapidly shifts, creating a display of seemingly impossible geometric patterns. Creatures in a 60-foot cone take 9d6 mental damage (DC 29 Will check save). A creature that fails is also [[Conditions/Fascinated|Fascinated]] with the pelegox cube and [[Conditions/Stupefied|Stupefied 1]] for 1 minute."

  - name: "Scrambled Strike"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The pelegox cube rearranges to create jutting spikes, attacking each enemy within 10 feet (DC 27 Reflex check save). The damage depends on the number of actions.\n\n`pf2:1` 2d6 piercing damage\n\n`pf2:2` 3d6+10 piercing damage\n\n`pf2:3` 5d6+10 piercing damage"

  - name: "Shard Volley"
    desc: "`pf2:2`  The pelegox cube magnetizes fragments of metal at range. This is a 10-foot burst within 30 feet that deals 2d6+10 piercing damage (DC 27 Reflex check save). When the troop is reduced to 2 or fewer segments, this area decreases to a 5-foot burst."

  - name: "Troop Movement"
    desc: "  Whenever the troop Flies, it first Forms Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then moves up to its Speed. This works just like a Gargantuan creature moving; for instance, if any square of the troop enters difficult terrain, the extra movement cost applies to the entire troop."
 
```

```encounter-table
name: Pelegox Cube
creatures:
  - 1: Pelegox Cube
```



Pelegoxes are beings of condensed magnetic energy that fashion bodies for themselves using their surroundings. Though a pelegox's true form is a spherical core, it pulls metal fragments of various shapes and sizes to form a polyhedral shell. Though pelegoxes might develop preferences for a particular form when at rest, they continue to look for new configurations to call their own, happiest when they can experiment with endless possibilities, even if it means dismantling other metallic entities.

These piecemeal creatures move by a combination of magnetic levitation and propulsion, and when that doesn't work, by continuously piercing the ground and shifting their weight forward, looking almost like moving caltrops. Over time, the magnetic signature of a pelegox becomes visible, etched into its body in patterns of concentric lines. These unique designs make it possible to distinguish between individual pelegoxes even when their surface has eroded.

Pelegoxes are quick to form relationships with others of their kind. They delight in combining their individual bodies into ever larger, more elaborate structures and patterns. As such, it is rare to find a pelegox on their own—they prefer to travel in a clustered form.
