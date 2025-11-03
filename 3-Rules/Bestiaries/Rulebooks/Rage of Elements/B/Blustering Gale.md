---
title: "Blustering Gale"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.rage-of-elements-bestiary.Actor.6VCNPJ3xPw4Js52V" 
tags:
  - pf2e/creature/type/air
  - pf2e/creature/type/elemental
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/11
  - remaster
statblock: inline
name: "Blustering Gale"
level: 11
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Rage of Elements"
name: "Blustering Gale"
level: "Creature 11"

alignment: ""
size: "grg"
trait_01: [[air]]
trait_02: [[elemental]]
trait_03: [[troop]]
modifier: 20
perception:
  - name: "Perception"
    desc: "+20; Darkvision"
languages: "Sussuran"
skills:
  - name: "Skills"
    desc: "Acrobatics: +20, Athletics: +22, Intimidation: +22, Stealth: +18"
abilityMods: [7, 5, 3, 0, 1, 5]
speed: 25 feet,  fly 60 feet
sourcebook: "_Pathfinder Rage of Elements_"
ac: 30
armorclass:
  - name: AC
    desc: "30; __Fort__ +22, __Ref__ +24, __Will__ +18"
hp: 150
health:
  - name: ""
  - name: HP
    desc: "150, (16 squares); Thresholds 100 (3 segments), 50 (2 segments); __Immunities__  bleed,  paralyzed,  poison,  sleep; __Weaknesses__ area damage 10, splash damage 10"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "Bullying Bluster"
    desc: " (auditory,aura,emotion,linguistic,mental) 30 feet. The blustering gale constantly unleashes a tirade of insults and aggressive taunts. Each enemy who enters or starts their turn in the aura must succeed at a DC 30 Will check save or become [[Conditions/Stupefied|Stupefied 1]] for as long as they remain within the aura ([[Conditions/Stupefied|Stupefied 2]] on a critical failure). The troop's members are collectively able to mimic a few curse words or insults in every language, allowing their Bullying Bluster to affect any creature who understands a language. A creature who succeeds at its save is temporarily immune for 1 hour. The blustering gale can activate or deactivate the aura with a free action, which has the concentrate trait."

  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  Troops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Pummeling Winds"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The blustering gale bashes, batters, and pummels each adjacent enemy (DC 27 Reflex check save). The damage depends on the number of actions.\n\n`pf2:1` 1d8+2 bludgeoning damage\n\n`pf2:2` 2d8+12 bludgeoning damage\n\n`pf2:3` 3d8+15 bludgeoning damage"

  - name: "Troop Movement"
    desc: "  Whenever a troop Flies or Strides, it first Forms Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then moves up to its Speed. This works just like a Gargantuan creature moving; for instance, if any square of the troop enters difficult terrain, the extra movement cost applies to the whole troop."

  - name: "Windstorm"
    desc: "`pf2:2` (air) The blustering gale exhales as a unit, creating a powerful windstorm. This windstorm is a 10-foot burst within 100 feet that deals 3d8+10 bludgeoning damage (DC 30 Reflex check save). Creatures that fail their saving throw are pushed 10 feet in any direction (plus knocked [[Conditions/Prone|Prone]] on a critical failure). When the troop is reduced to 2 or fewer segments, this area decreases to a 5-foot burst and the distance pushed decreases to 5 feet."
 
```

```encounter-table
name: Blustering Gale
creatures:
  - 1: Blustering Gale
```



Blustering gales are among the least of air elementals: spirits of the small breezes who sometimes arise in the wake of mightier creatures, like the downdraft of a swallow's wing or the sharp expulsion of a vigorous cough. Unwilling or unable to act effectively alone, they form into "gales," collections of weak elementals that use their combined power to hurl insults and pummel those who defy them in a misguided attempt to rise above their humble origins.

Together, they force other creatures to do their bidding, then move on when they grow bored. While most gales claim their abandoned minions were useless, in truth, blustering gales lack the commanding presence and confidence to retain vassals for long.

## Lackeys

Blustering gales sometimes serve as heralds or enforcers for other creatures (including cloud dragons, jaathooms, and other powerful air elementals), bullying and intimidating others at the behest of a more influential overlord. While blustering gales often feel secure and confident in these roles, they rankle at subservience, and rarely feel content with such an arrangement for long.
