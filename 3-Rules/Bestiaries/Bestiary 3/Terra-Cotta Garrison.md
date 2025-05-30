---
title: "Terra-Cotta Garrison"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-bestiary-3.Actor.QLxcPfaHfc1vmF1Y" 
tags:
  - pf2e/creature/type/construct
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/13
statblock: inline
name: "Terra-Cotta Garrison"
level: 13
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/pf2e-tokens-bestiaries/portraits/troop/terra-cotta-garrison.webp| ]]
source: "Pathfinder Bestiary 3"
name: "Terra-Cotta Garrison"
level: "Creature 13"

alignment: ""
size: "grg"
trait_01: [[construct]]
trait_02: [[troop]]
modifier: 22
perception:
  - name: "Perception"
    desc: "+22; "
languages: "Common; (can&#x27;t speak any language)"
skills:
  - name: "Skills"
    desc: "Athletics: +26, Intimidation: +23"
abilityMods: [7, 2, 6, 2, 3, 4]
speed: 25 feet
sourcebook: "_Pathfinder Bestiary 3_"
ac: 27
armorclass:
  - name: AC
    desc: "27 (29 with shields raised); __Fort__ +25, __Ref__ +19, __Will__ +20"
hp: 240
health:
  - name: ""
  - name: HP
    desc: "240, troop defenses; __Immunities__  bleed,  death effects,  disease,  doomed,  drained,  fatigued,  healing,  nonlethal attacks,  paralyzed,  poison,  sickened,  spirit,  unconscious,  vitality,  void; __Weaknesses__ area damage 15, bludgeoning 10, splash damage 8"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Steel Shield|Steel Shield]]"
  - name: "[[Bestiary Ability Glossary/Form Up|Form Up]]"
    desc: "`pf2:1`  The troop chooses one of the squares it currently occupies and redistributes its squares to any configuration in which all squares are contiguous and within 15 feet of the chosen square. The troop can't share its space with other creatures."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Attack of Opportunity|Attack of Opportunity]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

  - name: "[[Bestiary Ability Glossary/Shield Block|Shield Block]]"
    desc: "`pf2:r`  **Trigger** The monster has its shield raised and takes damage from a physical attack.\n* * *\n\n**Effect** The monster snaps its shield into place to deflect a blow. The shield prevents the monster from taking an amount of damage up to the shield's Hardness. The monster and the shield each take any remaining damage, possibly breaking or destroying the shield."

  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  **Thresholds** 160 (3 segments), 80 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Aim as One"
    desc: "`pf2:2`  The troop launches a ranged attack in the form of a 10-foot burst within 100 feet that deals 3d8+11 piercing damage (DC 25 Reflex check save). When the garrison is reduced to 8 or fewer squares, this area decreases to a 5-foot burst."

  - name: "Raise Shields"
    desc: "`pf2:1`  The troop raises steel shields, with the effects of [[Actions/Raise a Shield|Raise a Shield]]."

  - name: "Strike as One"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round\n* * *\n\n**Effect** The garrison makes a melee attack against each enemy in a 5-foot emanation (DC 30 Reflex check save). The damage depends on the number of actions.\n\n`pf2:1` 2d8 slashing damage.\n\n`pf2:2` 3d8+10 slashing damage.\n\n`pf2:3` 4d8+13 slashing damage."

  - name: "Troop Movement"
    desc: "  Whenever a troop Strides, it first Forms Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then moves up to its Speed. This works just like a Gargantuan creature moving; for instance, if any square enters difficult terrain, the extra movement cost applies to the whole troop."
 
```

```encounter-table
name: Terra-Cotta Garrison
creatures:
  - 1: Terra-Cotta Garrison
```



These constructed warriors can work together as a trained group to repel intruders.

* * *

Terra-cotta warriors guard the tombs of ancient rulers, where they stand vigil, animating only when intruders break in to pilfer riches or defile the tomb itself. Each warrior is meticulously crafted from clay and given unique features.
