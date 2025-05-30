---
title: "Gorumite Infantry"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.prey-for-death-bestiary.Actor.VUnzeDyz7gkJbS15" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/14
  - remaster
statblock: inline
name: "Gorumite Infantry"
level: 14
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Adventure: Prey for Death"
name: "Gorumite Infantry"
level: "Creature 14"
rare_03: [[Unique]]
alignment: ""
size: "grg"
trait_01: [[human]]
trait_02: [[humanoid]]
trait_03: [[troop]]
modifier: 22
perception:
  - name: "Perception"
    desc: "+22; "
languages: "Common, Skald"
skills:
  - name: "Skills"
    desc: "Athletics: +28, Intimidation: +22, Gorum Lore: +20"
abilityMods: [8, 4, 5, 0, 4, 2]
speed: 20 feet
sourcebook: "_Pathfinder Adventure: Prey for Death_"
ac: 36
armorclass:
  - name: AC
    desc: "36; __Fort__ +27, __Ref__ +22, __Will__ +24"
hp: 255
health:
  - name: ""
  - name: HP
    desc: "255, troop defenses; __Weaknesses__ area damage 20, splash damage 15"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Form Up|Form Up]]"
    desc: "`pf2:1`  The troop chooses one of the squares it currently occupies and redistributes its squares to any configuration in which all squares are contiguous and within 15 feet of the chosen square. The troop can't share its space with other creatures."

abilities_mid:
  - name: ""
  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  **Thresholds** 170 (3 segments), 85 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Fire Crossbows!"
    desc: "`pf2:2`  The gorumite infantry draw or reload their crossbows, then launch a ranged attack in the form of a volley.\n\nThis volley is a 10-foot burst within 120 feet that deals 6d8 piercing damage (DC 31 Reflex check save). When the gorumite infantry is reduced to 8 or fewer squares, this area decreases to a 5-foot burst."

  - name: "Raise Swords!"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The Gorumite infantry engages in a frenzied attack against each enemy within 10 feet, with a DC 31 Reflex check save. The damage depends on the number of actions.\n\n`pf2:1` 1d12+4 slashing damage.\n\n`pf2:2` 2d12+10 slashing damage and 1d6 persistent bleed damage.\n\n`pf2:3` 3d12+10 slashing damage and 2d6 persistent bleed damage."

  - name: "Troop Movement"
    desc: "  Whenever the gorumite infantry Strides, they first [[Bestiary Ability Glossary/Form Up|Form Up]] as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then move up to their Speed.\n\nThis works just like a Gargantuan creature moving; for instance, if any square of the guards enters difficult terrain, the extra movement cost applies to all the guards."
 
```

```encounter-table
name: Gorumite Infantry
creatures:
  - 1: Gorumite Infantry
```


Variant city guard

Most towns and cities on Golarion have a garrison of professional guards whose duties include patrolling the streets, assisting citizenry in need, and acting as a quick military response in times of crisis. Guards usually operate in pairs or small groups, but when a serious emergency threatens, guards muster at the nearest keep, watch station, or other rallying point and then move out in search of their quarry.Alternatively, guard troops might be stationed at important locations in the city, such as the front gates, the main prison, or the entrance to the ruler's castle.

Individual guards may not be particularly well trained or experienced, but in large numbers they can defeat bandits, wild creatures that have slipped past the city gates, or the occasional drunken ogre. A group of city guards is usually accompanied and commanded by a single captain, who does most of the talking and gives individual guards their orders. The members of this city guard squadron have trained together to perform simple tactics but not advanced maneuvers.
