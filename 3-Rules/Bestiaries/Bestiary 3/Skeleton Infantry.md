---
title: "Skeleton Infantry"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-bestiary-3.Actor.iiXjQ1SchGiotpVp" 
tags:
  - pf2e/creature/type/evil
  - pf2e/creature/type/mindless
  - pf2e/creature/type/skeleton
  - pf2e/creature/type/troop
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/11
statblock: inline
name: "Skeleton Infantry"
level: 11
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/pf2e-ap184-the-ghouls-hunger/assets/art/Skeleton Infantry.webp| ]]
source: "Pathfinder Bestiary 3"
name: "Skeleton Infantry"
level: "Creature 11"

alignment: ""
size: "grg"
trait_01: [[evil]]
trait_02: [[mindless]]
trait_03: [[skeleton]]
trait_04: [[troop]]
trait_05: [[undead]]
trait_06: [[unholy]]
modifier: 17
perception:
  - name: "Perception"
    desc: "+17; Darkvision"
languages: ""
skills:
  - name: "Skills"
    desc: "Athletics: +18"
abilityMods: [5, 3, 4, -5, 2, 0]
speed: 25 feet
sourcebook: "_Pathfinder Bestiary 3_"
ac: 31
armorclass:
  - name: AC
    desc: "31; __Fort__ +21, __Ref__ +18, __Will__ +19"
hp: 180
health:
  - name: ""
  - name: HP
    desc: "180, troop defenses; __Immunities__  mental; __Weaknesses__ area damage 15, splash damage 8; __Resistances__ cold 5, electricity 5, fire 5, piercing 10, slashing 10"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Form Up|Form Up]]"
    desc: "`pf2:1`  The troop chooses one of the squares it currently occupies and redistributes its squares to any configuration in which all squares are contiguous and within 15 feet of the chosen square. The troop can't share its space with other creatures."

abilities_mid:
  - name: ""
  - name: "Form a Phalanx"
    desc: "`pf2:1`  Many of the skeletons raise their shields to protect others. The infantry gain a +2 circumstance bonus to AC until the start of their next turn.\n\n[[Bestiary Effects/Effect_ Form a Phalanx|Effect: Form a Phalanx]]"

  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  **Threshold** 120 (3 segments), 60 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Hurl Javelins!"
    desc: "`pf2:2`  The troop's members throw a volley of javelins. Each creature in a 10-foot burst within 30 feet of the troop takes 2d6+10 piercing damage (DC 26 Reflex check save).\n\nWhen the troop is reduced to 2 or fewer segments, this area decreases to a 5-foot burst."

  - name: "Lower Spears!"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round\n* * *\n\n**Effect** The skeletons engage in a coordinated longspear attack against each enemy within 10 feet (DC 27 Reflex check save). The damage depends on the number of actions.\n\n`pf2:1` 2d8 piercing damage\n\n`pf2:2` 3d8+8 piercing damage\n\n`pf2:3` 4d8+8 piercing damage"

  - name: "Phalanx Charge"
    desc: "`pf2:2`  **Requirements** The infantry is in a phalanx\n* * *\n\n**Effect** The skeletons lower their longspears and charge. The troop Strides in a straight line until they're adjacent to an enemy then use Lower Spears!, dealing 3d8+8 piercing damage. Any creature that fails its save is also knocked [[Conditions/Prone|Prone]]."

  - name: "Troop Movement"
    desc: "  Whenever the skeleton infantry Stride, they first Form Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then move up to their Speed. This works just like a Gargantuan creature moving; for instance, if any square of the infantry enter difficult terrain, the extra movement cost applies to all the guards."
 
```

```encounter-table
name: Skeleton Infantry
creatures:
  - 1: Skeleton Infantry
```



This troop of skeletons was once a cohort of highly disciplined spear-and-shield infantry from an ancient empire.

* * *

Almost any creature that had bones in life and leaves them behind in death can become a shambling, undead skeleton-humanoids, beasts, aberrations, fey, and more.
