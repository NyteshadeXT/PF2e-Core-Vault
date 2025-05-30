---
title: "Harvest Regiment"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.rage-of-elements-bestiary.Actor.YKEPPmyqTvVSApo8" 
tags:
  - pf2e/creature/type/elemental
  - pf2e/creature/type/plant
  - pf2e/creature/type/troop
  - pf2e/creature/type/wood
  - pf2eMonster
  - pf2e/creature/level/8
  - remaster
statblock: inline
name: "Harvest Regiment"
level: 8
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Rage of Elements"
name: "Harvest Regiment"
level: "Creature 8"

alignment: ""
size: "grg"
trait_01: [[elemental]]
trait_02: [[plant]]
trait_03: [[troop]]
trait_04: [[wood]]
modifier: 17
perception:
  - name: "Perception"
    desc: "+17; Low-Light Vision"
languages: "Fey, Muan"
skills:
  - name: "Skills"
    desc: "Athletics: +18, Survival: +17"
abilityMods: [6, 1, 3, -1, 3, -2]
speed: 25 feet
sourcebook: "_Pathfinder Rage of Elements_"
ac: 26
armorclass:
  - name: AC
    desc: "26; __Fort__ +16, __Ref__ +14, __Will__ +16"
hp: 135
health:
  - name: ""
  - name: HP
    desc: "135, Thresholds: 90, 45; __Weaknesses__ area damage 8, fire 8, splash damage 8"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "Juice Shower"
    desc: "  When a harvest regiment is critically hit or critically fails a save against a damaging effect, sticky fruit juices splash out. This affects all creatures in a 5-foot emanation. A splashed creature takes a –10-foot status penalty to its Speeds and everything is [[Conditions/Concealed|Concealed]] to it. A creature can Interact to clear off the juice."

  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  Troops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Raise Shells"
    desc: "`pf2:1`  The troop raises fragments of their shells shaped like shields to gain a +2 circumstance bonus to AC until the start of their next turn."

  - name: "Seed Volley"
    desc: "`pf2:2`  The harvest regiment spits an orderly volley of hard seeds drawn from within their bodies. This volley is a 10-foot burst within 120 feet that deals 2d10 bludgeoning damage (DC 23 Reflex check save). When the harvest regiment is reduced to 8 or fewer squares, this area decreases to a 5-foot burst."

  - name: "Shell Smash"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round;\n* * *\n\n**Effect** The harvest regiment engages in a coordinated melee attack against each enemy in a 5-foot emanation, with a DC 23 Reflex check save. The damage depends on the number of actions.\n\n`pf2:1` 1d8+3 bludgeoning damage\n\n`pf2:2` 2d8+9 bludgeoning damage\n\n`pf2:3` 2d8+12 bludgeoning damage"

  - name: "Troop Movement"
    desc: "  Whenever the harvest regiment Strides, they first Form Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then move up to their Speed. This works just like a Gargantuan creature moving."
 
```

```encounter-table
name: Harvest Regiment
creatures:
  - 1: Harvest Regiment
```



Great fruiting trees grow in massive orderly rows in a region of the Plane of Wood called Armory Grove. Over the course of decades, a regiment tree's branches grow heavy, laden with fruits uncannily shaped like people. They're cultivated by retired warriors whose tireless work ensures that these fruits grow into a form suitable for battle. Their efforts instill tactical knowledge in these fruit warriors so they're prepared to fight as soon as they fall from the tree—which they do simultaneously, forming one battle-ready unit. Each soldier is equal in skill and similar in form, with a wooden outer shell that splits into portions as the flesh of the fruit inside ripens. A slain warrior contains seeds within its body that can slowly germinate in rich soil with enough water—or blood. Every battlefield can become a new garden.
