---
title: "Phalanx Formation"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.VpWPOE31dJc6vOsB" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/6
  - remaster
statblock: inline
name: "Phalanx Formation"
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Phalanx Formation"
level: "Creature 6"

alignment: ""
size: "grg"
trait_01: [[human]]
trait_02: [[humanoid]]
trait_03: [[troop]]
modifier: 16
perception:
  - name: "Perception"
    desc: "+16; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +17, Intimidation: +14, Warfare Lore: +11"
abilityMods: [5, 0, 2, 1, 2, 2]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__ +16, __Ref__ +12, __Will__ +14"
hp: 99
health:
  - name: ""
  - name: HP
    desc: "99; __Weaknesses__ area damage 5, splash damage 5"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Troop Defenses|Troop Defenses]]"
    desc: "  **Thresholds** 66 (3 segments), 33 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

  - name: "[[Bestiary Ability Glossary/Troop Movement|Troop Movement]]"
    desc: "  Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place."

attacks:
  - name: ""

  - name: "Hurl Javelins"
    desc: "`pf2:2`  The troop's members throw a volley of spears. Each creature in a 10-foot burst within 30 feet of the troop takes 2d6+5 piercing damage with a DC 21 Reflex check save. When the phalanx formation is reduced to 2 or fewer segments, this area decreases to a 5-foot burst."

  - name: "Shields Up!"
    desc: "`pf2:1`  The phalanx formation raises their shields to protect one another. The formation gains a +2 circumstance bonus to AC and Reflex until the start of their next turn. This bonus increases to +3 against physical ranged attacks."

  - name: "Spears Out!"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round\n* * *\n\n**Effect** The phalanx formation thrusts their longspears out in all directions, striking all unfortunate enough to be near them. Each enemy in a 10-foot emanation must attempt a DC 21 Reflex check save.\n\nThe damage depends on the number of actions.\n\n`pf2:1` 1d8+2 piercing damage\n\n`pf2:2` 2d8+5 piercing damage\n\n`pf2:3` 3d8+5 piercing damage"
 
```

```encounter-table
name: Phalanx Formation
creatures:
  - 1: Phalanx Formation
```



A proper phalanx formation requires the simultaneous use of spear and shield in order to attack enemies near and far while defending each other. Impressive amounts of teamwork are not only beneficial but essential to the survival of the troop

* * *

A military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.
