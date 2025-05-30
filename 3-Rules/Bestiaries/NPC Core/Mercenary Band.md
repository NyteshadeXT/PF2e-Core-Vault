---
title: "Mercenary Band"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.nN1fOQT8FDgbmQdx" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/9
  - remaster
statblock: inline
name: "Mercenary Band"
level: 9
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Mercenary Band"
level: "Creature 9"

alignment: ""
size: "grg"
trait_01: [[human]]
trait_02: [[humanoid]]
trait_03: [[troop]]
modifier: 17
perception:
  - name: "Perception"
    desc: "+17; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +19, Intimidation: +18, Society: +14, Survival: +15, Thievery: +19, Military Lore: +14"
abilityMods: [4, 2, 3, -1, 2, 1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 26
armorclass:
  - name: AC
    desc: "26; __Fort__ +18, __Ref__ +17, __Will__ +15"
hp: 180
health:
  - name: ""
  - name: HP
    desc: "180; __Weaknesses__ area damage 10, splash damage 10"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Troop Defenses|Troop Defenses]]"
    desc: "  **Thresholds** 120 (3 segments), 60 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

  - name: "[[Bestiary Ability Glossary/Troop Movement|Troop Movement]]"
    desc: "  Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place."

attacks:
  - name: ""

  - name: "Let 'em Have It!"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n* * *\n\n**Frequency** once per round\n* * *\n\n**Effect** The mercenary band engages in a coordinated attack with its wide array of melee weapons against each enemy in a 5-foot emanation with a DC 25 Reflex check save. The damage depends on the number of actions.\n\n`pf2:1` 1d8+2 bludgeoning, piercing, or slashing\n\n`pf2:2` 3d8+4 bludgeoning, piercing, or slashing\n\n`pf2:3` 4d8+6 bludgeoning, piercing, or slashing"

  - name: "Ready... Fire!"
    desc: "`pf2:2`  The mercenary band draws or reloads their bows, crossbows, and slings, then launches a ranged attack in the form of a volley. This volley is a 10-foot burst within 120 feet that deals 2d8+4 piercing or bludgeoning damage with a DC 25 Reflex check save. When the mercenary band is reduced to 2 or fewer segments, this area decreases to a 5-foot burst."

  - name: "Spoils of War"
    desc: "`pf2:1`  **Requirements** The band's last action was Let 'em Have It and at least one creature failed its save\n* * *\n\n**Effect** The mercenary band attempts to [[Actions/Steal|Steal]] one object from each enemy that failed its save, even if the enemy is in combat or on guard."
 
```

```encounter-table
name: Mercenary Band
creatures:
  - 1: Mercenary Band
```



Some bands of experienced soldiers have storied reputations, their rolls filled with legendary warriors. Others are whispered of for their cruel deeds and opportunistic betrayals.

* * *

Whether they're hired to wage war, protect a caravan, or infiltrate an impenetrable fortress, there's ample work for mercenaries all over Golarion.
