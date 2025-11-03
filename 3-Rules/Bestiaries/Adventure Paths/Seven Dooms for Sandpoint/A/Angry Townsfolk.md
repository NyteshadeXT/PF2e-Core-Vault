---
title: "Angry Townsfolk"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.seven-dooms-for-sandpoint-bestiary.Actor.zrS9TBd2Tp3YIykQ" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/lawful
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/5
statblock: inline
name: "Angry Townsfolk"
level: 5
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #200: Seven Dooms for Sandpoint"
name: "Angry Townsfolk"
level: "Creature 5"

alignment: ""
size: "grg"
trait_01: [[human]]
trait_02: [[humanoid]]
trait_03: [[lawful]]
trait_04: [[troop]]
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
sourcebook: "_Pathfinder #200: Seven Dooms for Sandpoint_"
ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__ +14, __Ref__ +9, __Will__ +11"
hp: 75
health:
  - name: ""
  - name: HP
    desc: "75, troop defenses; __Weaknesses__ area damage 10, splash damage 10"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Form Up|Form Up]]"
    desc: "`pf2:1`  The troop chooses one of the squares it currently occupies and redistributes its squares to any configuration in which all squares are contiguous and within 15 feet of the chosen square. The troop can't share its space with other creatures."

  - name: "Seek Quarry"
    desc: "  Angry townsfolk can spend 1 minute to designate a single creature for whom they have a physical description as their quarry. They gain a +2 circumstance bonus to Perception against their quarry."

abilities_mid:
  - name: ""
  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  **Thresholds** 50 (3 segments), 25 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Pitchforks and Torches"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round.\n* * *\n\n**Effect** The angry townsfolk engage in a coordinated melee attack against each enemy within 10 feet, with a DC 19 Reflex check save. The damage depends on the number of actions.\n\n`pf2:1` 1d10 piercing damage or 1d10 fire damage\n\n`pf2:2` 1d10+7 piercing damage or 1d10+7 fire damage\n\n`pf2:3` 1d10+10 piercing damage or 1d10+10 fire damage"

  - name: "Troop Movement"
    desc: "  Whenever the city guards Stride, they first [[Bestiary Ability Glossary/Form Up|Form Up]] as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then move up to their Speed.\n\nThis works just like a Gargantuan creature moving; for instance, if any square of the guards enters difficult terrain, the extra movement cost applies to all the guards."

  - name: "Urban Chasers"
    desc: "  Angry townsfolk ignore difficult terrain (but not greater difficult terrain) caused by crowds or from movement through narrow spaces such as alleyways."
 
```

```encounter-table
name: Angry Townsfolk
creatures:
  - 1: Angry Townsfolk
```


variant city guard squadron


