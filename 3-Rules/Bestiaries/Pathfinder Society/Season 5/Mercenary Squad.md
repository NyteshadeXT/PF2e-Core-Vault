---
title: "Mercenary Squad"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pfs-season-5-bestiary.Actor.l4fXYWBhDNM5FAyT" 
tags:
  - pf2e/creature/type/chaotic
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/2
statblock: inline
name: "Mercenary Squad"
level: 2
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Quest #17: Escorting a Mirage"
name: "Mercenary Squad"
level: "Creature 2"
rare_03: [[Uncommon]]
alignment: ""
size: "grg"
trait_01: [[chaotic]]
trait_02: [[human]]
trait_03: [[humanoid]]
trait_04: [[troop]]
modifier: 11
perception:
  - name: "Perception"
    desc: "+11; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +8, Arcana: +8, Intimidation: +7"
abilityMods: [3, 2, 3, 0, -3, 3]
speed: 25 feet
sourcebook: "_Pathfinder Society Quest #17: Escorting a Mirage_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +10, __Ref__ +7, __Will__ +5"
hp: 30
health:
  - name: ""
  - name: HP
    desc: "30, Thresholds 20 (3 segments), 10 (2 segments); __Weaknesses__ area damage 5, splash damage 2"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Form Up|Form Up]]"
    desc: "`pf2:1`  The troop chooses one of the squares it currently occupies and redistributes its squares to any configuration in which all squares are contiguous and within 15 feet of the chosen square. The troop can't share its space with other creatures."

abilities_mid:
  - name: ""
  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  Troops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Fire Crossbows!"
    desc: "`pf2:2`  The mercenary squad members draw or reload their crossbows, then launch a ranged attack in the form of a volley. This volley is a 10-foot burst within 80 feet that deals 2d6 piercing damage (DC 15 Reflex check save). When the mercenary squad is reduced to 8 or fewer squares, this area decreases to a 5-foot burst."

  - name: "Get 'em!"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round\n* * *\n\n**Effect** The mercenary squad engages in a coordinated melee attack against each adjacent enemy, with a DC 15 Reflex check save. The damage depends on the number of actions.\n\n`pf2:1` 1d6+2 bludgeoning damage\n\n`pf2:2` 1d6+5 bludgeoning damage\n\n`pf2:3` 1d6+8 bludgeoning damage"

  - name: "Troop Movement"
    desc: "  Whenever the city guards Stride, they first Form Up as a free action to condense into a 20-foot-by-20- foot area (minus any missing squares), then move up to their Speed. This works just like a Gargantuan creature moving; for instance, if any square of the guards enters difficult terrain, the extra movement cost applies to all the guards.\n\nThe mercenary squad ignores difficult terrain (but not greater difficult terrain) caused by crowds or from movement through narrow spaces such as alleyways."
 
```

```encounter-table
name: Mercenary Squad
creatures:
  - 1: Mercenary Squad
```




