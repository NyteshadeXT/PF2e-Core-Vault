---
title: "Dwarf Battalion"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.xnHaTClGCleGFoLP" 
tags:
  - pf2e/creature/type/dwarf
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/6
  - remaster
statblock: inline
name: "Dwarf Battalion"
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Dwarf Battalion"
level: "Creature 6"

alignment: ""
size: "grg"
trait_01: [[dwarf]]
trait_02: [[humanoid]]
trait_03: [[troop]]
modifier: 13
perception:
  - name: "Perception"
    desc: "+13; Darkvision"
languages: "Common, Dwarven"
skills:
  - name: "Skills"
    desc: "Athletics: +15, Survival: +13, Warfare Lore: +11"
abilityMods: [5, 1, 4, 0, 3, -1]
speed: 20 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__ +16, __Ref__ +11, __Will__ +13"
hp: 105
health:
  - name: ""
  - name: HP
    desc: "105, (4 segments); Thresholds 70 (3 segments), 35 (2 segments); __Weaknesses__ area damage 5, splash damage 5"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "Dwarven Doughtiness"
    desc: "  Dwarves are often calm and collected in the face of imminent danger. At the end of the battalion's turn, reduce its [[Conditions/Frightened|Frightened]] condition by 2 instead of 1."

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

  - name: "[[Bestiary Ability Glossary/Shield Block|Shield Block]]"
    desc: "`pf2:r`  **Trigger** The monster has its shield raised and takes damage from a physical attack.\n* * *\n\n**Effect** The monster snaps its shield into place to deflect a blow. The shield prevents the monster from taking an amount of damage up to the shield's Hardness. The monster and the shield each take any remaining damage, possibly breaking or destroying the shield."

  - name: "[[Bestiary Ability Glossary/Troop Defenses|Troop Defenses]]"
    desc: "  **Thresholds** 70 (3 segments), 35 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

  - name: "[[Bestiary Ability Glossary/Troop Movement|Troop Movement]]"
    desc: "  Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place."

attacks:
  - name: ""

  - name: "Bombing Barrage"
    desc: "`pf2:2`  he dwarf battalion draws alchemical bombs, then hurls them at distant foes. This volley is a 10-foot burst within 60 feet that deals 3d6 damage with a DC 21 Reflex check save. The damage is either acid, fire, or electricity damage, depending on which type of bombs the battalion used. When the dwarf battalion is reduced to 2 or fewer segments, this area decreases to a 5-foot burst."

  - name: "Coordinated Pummel"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round\n* * *\n\n**Effect** The dwarf battalion unleashes a storm of warhammer blows against each enemy in a 5-foot emanation (DC 21 Reflex check save). The damage depends on the number of actions.\n\n`pf2:1` 1d8 bludgeoning damage\n\n`pf2:2` 2d8+5 bludgeoning damage\n\n`pf2:3` 3d8+5 bludgeoning damage"

  - name: "Dwarven War Song"
    desc: "`pf2:1` (auditory,concentrate,emotion,fear,mental) The battalion joins together to sing a traditional song of battle. Each enemy in a 30-foot emanation must succeed at a DC 23 Will check save or be [[Conditions/Frightened|Frightened 1]] (or [[Conditions/Frightened|Frightened 2]] on a critical failure). Each enemy is then temporarily immune for 10 minutes."

  - name: "[[Actor.CRzcbg2j7gDr8nUA.Item.z17MMNf9Z1J6nJKp|Shields Up!]]"
    desc: "`pf2:r`  The battalion raises their steel shields. It gains a +2 circumstance bonus to AC and Reflex saves until the start of its next turn."
 
```

```encounter-table
name: Dwarf Battalion
creatures:
  - 1: Dwarf Battalion
```



Dwarven soldiers make formidable units, capable of holding their own against most enemies. In combat, a dwarf battalion is a well-oiled machine, unleashing coordinated attacks against foes.

* * *

From the dwarven perspective, most things in life are best done correctly, and that means taking one's time. Dwarves are a focused and intentional people, taking years or even decades to ply their trades, doing their best to make every detail perfect. The patience and dedication required for such tasks pays off, and many dwarves become experts in their respective field, trade, or area of focus. Many dwarves uphold traditions, and since dwarven origins trace back to underground life, many still hone skills focused on life underground.
