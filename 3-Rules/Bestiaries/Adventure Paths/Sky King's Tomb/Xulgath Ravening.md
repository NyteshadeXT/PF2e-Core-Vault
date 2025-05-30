---
title: "Xulgath Ravening"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.sky-kings-tomb-bestiary.Actor.G7RxS2VvwZDZs0fa" 
tags:
  - pf2e/creature/type/chaotic
  - pf2e/creature/type/evil
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/troop
  - pf2e/creature/type/xulgath
  - pf2eMonster
  - pf2e/creature/level/4
statblock: inline
name: "Xulgath Ravening"
level: 4
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #193: Mantle of Gold"
name: "Xulgath Ravening"
level: "Creature 4"
rare_03: [[Rare]]
alignment: ""
size: "grg"
trait_01: [[chaotic]]
trait_02: [[evil]]
trait_03: [[humanoid]]
trait_04: [[troop]]
trait_05: [[xulgath]]
modifier: 11
perception:
  - name: "Perception"
    desc: "+11; Darkvision"
languages: "Draconic, Sakvroth"
skills:
  - name: "Skills"
    desc: "Athletics: +11, Intimidation: +10, Stealth: +7"
abilityMods: [5, 1, 3, -1, 1, 2]
speed: 25 feet
sourcebook: "_Pathfinder #193: Mantle of Gold_"
ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__ +14, __Ref__ +12, __Will__ +8"
hp: 72
health:
  - name: ""
  - name: HP
    desc: "72, Thresholds 48 (3 segments), 24 (2 segments); __Weaknesses__ area damage 5, splash damage 2"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Form Up|Form Up]]"
    desc: "`pf2:1`  The troop chooses one of the squares it currently occupies and redistributes its squares to any configuration in which all squares are contiguous and within 15 feet of the chosen square. The troop can't share its space with other creatures."

  - name: "Stench"
    desc: " (aura,olfactory) 30 feet. A creature that enters the area must attempt a DC 21 Fortitude check save. On a failure, the creature is [[Conditions/Sickened|Sickened 1]], and on a critical failure, the creature also takes a –5 status penalty to its Speeds for 1 round. While within the aura, the creature takes a –2 circumstance penalty to saves to recover from the sickened condition. A creature that succeeds at its save is temporarily immune to all xulgaths stenches for 1 minute.\n\n[[Bestiary Effects/Effect_ Xulgath Stench|Effect: Xulgath Stench]]"

abilities_mid:
  - name: ""
  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  **Thresholds** 48 (3 segments), 24 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Fang and Claw"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The xulgath ravening lashes out at enemies within 5 feet (DC 21 Reflex check save). The damage depends on the number of actions.\n\n`pf2:1` 1d6 slashing damage\n\n`pf2:2` 1d6+5 slashing damage\n\n`pf2:3` 2d6+5 slashing damage"

  - name: "Infected Wounds"
    desc: " (poison) The xulgaths' Fang and Claw deals an additional 1d6 poison damage to any creature sickened by a xulgath's stench."

  - name: "Sharpened Advance"
    desc: "`pf2:2`  The troop fires a ranged attack in the form of a 5-foot burst within 50 feet that deals 3d6 piercing damage (DC 18 Reflex check save), then the troop either Steps or Strides up to 15 feet toward the area they attacked."

  - name: "Troop Movement"
    desc: "  Whenever a troop Strides, it first Forms Up as a free action to condense into a 20-foot-by–20- foot area (minus any missing squares), then moves up to its Speed. This works just like a Gargantuan creature moving; for instance, if any square of the troop enters difficult terrain, the extra movement cost applies to the whole troop."
 
```

```encounter-table
name: Xulgath Ravening
creatures:
  - 1: Xulgath Ravening
```



Strength and hunger drive most xulgath societies, reinforced by the tenets of their abyssal patron Zevgavizeb. A powerful leader can seize control of a xulgath community and direct their followers to fight as a unit, but formation fighting isn't something most xulgaths practice. This mob mentality often results in overzealous warriors tripping over or even biting each other. Suitably, these mobs have earned the name "ravenings," a term also used when describing Zevgavizeb's carnivorous rampages and referring to the millennia of xulgath infighting and social decline.

## The Power of Suggestion

Xulgath ravening are most common in clutches controlled by spiritual leaders using some combination of cult behavior, group ritual, and even a little enchantment magic. By convincing participants that they're possessed by Zevgavizeb or a similar force, the leader then identifies a target and hopes for the best. Instilling secular doubt or incapacitating the leader can shatter a ravening's focus, causing its members to scatter or even turn on their leader.
