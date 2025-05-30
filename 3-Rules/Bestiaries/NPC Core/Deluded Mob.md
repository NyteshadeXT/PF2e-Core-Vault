---
title: "Deluded Mob"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.ct7EwIepldAqv572" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Deluded Mob"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Deluded Mob"
level: "Creature 4"

alignment: ""
size: "grg"
trait_01: [[human]]
trait_02: [[humanoid]]
trait_03: [[troop]]
modifier: 7
perception:
  - name: "Perception"
    desc: "+7; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +12, Intimidation: +9, Conspiracy Lore: +6"
abilityMods: [6, 1, 4, 0, -1, 1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 19
armorclass:
  - name: AC
    desc: "19; __Fort__ +12, __Ref__ +9, __Will__ +7"
hp: 75
health:
  - name: ""
  - name: HP
    desc: "75; __Weaknesses__ area damage 5, splash damage 5"
abilities_top:
  - name: ""

  - name: "Irrational"
    desc: "  The deluded mob is severely disconnected from reality. Diplomacy checks to [[Actions/Make an Impression|Make an Impression]] or otherwise sway their worldview automatically fail."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Troop Defenses|Troop Defenses]]"
    desc: "  **Thresholds** 50 (3 segments), 25 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

  - name: "[[Bestiary Ability Glossary/Troop Movement|Troop Movement]]"
    desc: "  Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place."

  - name: "Victim Complex"
    desc: "  As they lose members, the deluded mob takes the opposition against them as proof that they're right, bolstering their resolve. The deluded mob gains a +2 circumstance bonus to Will saves at 50 or fewer Hit Points, or a +4 circumstance bonus at 25 HP or fewer."

attacks:
  - name: ""

  - name: "Flail Desperately"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round\n* * *\n\n**Effect** The deluded mob uses their fists, wooden planks, and anything else they can pick up to attack each enemy in a 5-foot emanation with fervor, if not coordination (DC 18 Reflex check save). The damage depends on the number of actions.\n\n`pf2:1` 1d8 piercing or bludgeoning damage\n\n`pf2:2` 1d8+6 piercing or bludgeoning damage\n\n`pf2:3` 2d8+6 piercing or bludgeoning damage"

  - name: "Surrounded"
    desc: "  When they feel cornered, the mob lashes out more recklessly. While the deluded mob is flanked, Flail Desperately and Throw Detritus are DC 17 and deal an additional 2 damage per action spent on the activity."

  - name: "Throw Detritus"
    desc: "`pf2:2`  The deluded mob hurls detritus in a 10-foot burst within 30 feet that deals 2d8 bludgeoning damage with a DC 18 Reflex check save. When the mob is reduced to 2 or fewer segments, this area decreases to a 5-foot burst."
 
```

```encounter-table
name: Deluded Mob
creatures:
  - 1: Deluded Mob
```



Pulled astray by lies, bribes, and propaganda, these desperate people are convinced to fight on their behalf of utter villains. Conspiracists, propagandists, masterminds, despots, and more take advantage of these mobs.

* * *

Villains pursue selfish and cruel goals, trampling over anyone in their way.
