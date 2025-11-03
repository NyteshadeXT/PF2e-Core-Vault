---
title: "Aurochs Herd"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.triumph-of-the-tusk-bestiary.Actor.qsPMcZFGCsb6PhhB" 
tags:
  - pf2e/creature/type/animal
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/7
  - remaster
statblock: inline
name: "Aurochs Herd"
level: 7
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #208: Hoof, Cinder, and Storm"
name: "Aurochs Herd"
level: "Creature 7"

alignment: ""
size: "grg"
trait_01: [[animal]]
trait_02: [[troop]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; Low-Light Vision, Scent (Imprecise) 60 Feet"
languages: ""
skills:
  - name: "Skills"
    desc: "Athletics: +18, Survival: +14"
abilityMods: [6, 2, 6, -5, 2, 2]
speed: 25 feet
sourcebook: "_Pathfinder #208: Hoof, Cinder, and Storm_"
ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__ +18, __Ref__ +12, __Will__ +12"
hp: 150
health:
  - name: ""
  - name: HP
    desc: "150, (16 squares); Thresholds 100 (3 segments), 50 (2 segments); __Weaknesses__ area damage 10, splash damage 5"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Form Up|Form Up]]"
    desc: "`pf2:1`  The troop chooses one of the squares it currently occupies and redistributes its squares to any configuration in which all squares are contiguous and within 15 feet of the chosen square. The troop can't share its space with other creatures."

abilities_mid:
  - name: ""
  - name: "Stampede"
    desc: "`pf2:r`  **Trigger** The aurochs herd's Hit Points drops below a threshold\n* * *\n\n**Effect** The aurochs herd uses Trample but moves in a direction directly opposite of the threat; the DC increases to DC 27 Reflex check and the bludgeoning damage increases to 4d6+6 bludgeoning ([[Conditions/Prone|Prone]] creatures take 5d6+6 bludgeoning damage instead)."

  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  Troops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Circle of Horns"
    desc: "`pf2:1`  The largest males in the herd form a ring of protection around the more vulnerable members. The herd gains a +2 circumstance bonus to AC until the start of its next turn."

  - name: "Horn"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round\n* * *\n\n**Effect** The aurochs herd makes a melee attack against each enemy in a 5-foot emanation (DC 22 Reflex check save). The damage depends on the number of actions.\n\n`pf2:1` 2d8+8 piercing damage\n\n`pf2:2` 2d8+10 piercing damage\n\n`pf2:3` 2d10+9 piercing damage"

  - name: "Puncturing Charge"
    desc: "`pf2:2`  **Requirements** The aurochs herd has formed a Circle of Horns\n* * *\n\n**Effect** The aurochs herd Strides to an enemy and makes a Horn Strike, dealing 3d8+8 piercing damage plus [[Bestiary Ability Glossary/Improved Knockdown|Improved Knockdown]]."

  - name: "[[Bestiary Ability Glossary/Trample|Trample]]"
    desc: "`pf2:3`  Huge or smaller, hoof (3d6+6 bludgeoning damage; [[Conditions/Prone|Prone]] creatures take 4d6+6 bludgeoning damage), DC 25 Reflex check save (any creature that fails its save is knocked prone).\n* * *\n\nThe monster Strides up to double its Speed and can move through the spaces of creatures of the listed size, Trampling each creature whose space it enters. The monster can attempt to Trample the same creature only once in a single use of Trample. The monster deals the damage of the listed Strike, but trampled creatures can attempt a basic Reflex save at the listed DC (no damage on a critical success, half damage on a success, double damage on a critical failure)."

  - name: "Troop Movement"
    desc: "  Whenever the aurochs herd Strides, it first Forms Up as a free action to condense into a 20-by-20-foot area (minus any missing squares,) and then moves up to its Speed. This works just like a Gargantuan creature moving; for instance, if any of the herd's squares enter difficult terrain, the extra movement cost applies to the whole troop."
 
```

```encounter-table
name: Aurochs Herd
creatures:
  - 1: Aurochs Herd
```



Massive aurochs herds roam the badlands of Belkzen, grazing upon the limited grass and plant life dispersed throughout the wasteland's valleys. Having adapted to the arid mountain terrain, aurochs herds eat a much more diverse diet of scrub and brush than their domesticated counterparts as they steadily migrate down the Flood Road. The herds show little patience for predators and demonstrate a preference for charging threats with their razor-sharp horns. Bull aurochs display natural instincts to strategically protect other, weaker members of the herd, often surprising intruders with their coordinated tactics and defensive maneuvers.

## Unlikely War Beasts

Followers of Zagresh have a history of capturing wild aurochs for use in magical experiments, taking the strongest of a herd to make the beasts even larger and more aggressive. Once the aurochs have been transformed into monstrous goliaths, their captors bard them with armored plates and magical weapons that complement their horns. In battle, these aurochs are utilized to pull siege weapons, break through enemy defenses, and trample frontline forces.
