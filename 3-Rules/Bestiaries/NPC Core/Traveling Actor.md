---
title: "Traveling Actor"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.A8jeXP2XNUSsdXhs" 
tags:
  - pf2e/creature/type/human
  - pf2eMonster
  - pf2e/creature/level/3
  - remaster
statblock: inline
name: "Traveling Actor"
level: 3
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Traveling Actor"
level: "Creature 3"

alignment: ""
size: "Medium"
trait_01: [[human]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; "
languages: ""
skills:
  - name: "Skills"
    desc: "Acrobatics: +7, Athletics: +7, Deception: +10, Performance: +10, Society: +9, Theater Lore: +9"
abilityMods: [2, 3, 0, 1, 1, 4]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +6, __Ref__ +12, __Will__ +9"
hp: 35
health:
  - name: ""
  - name: HP
    desc: "35"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Light Mace|Wooden Sword]], [[Equipment/Padded Armor|Padded Armor]]"
abilities_mid:
  - name: ""
  - name: "Dramatic Death"
    desc: "`pf2:r`  **Trigger** The traveling actor takes any damage\n* * *\n\n**Effect** The traveling actor falls [[Conditions/Prone|Prone]] and dramatically announces their death. They appear to have died. Anyone who is suspicious of this \"death\" can [[Actions/Seek|Seek]] to attempt a secret Perception check against the traveling actor's Performance DC. On a success, they see through the ruse."

  - name: "[[NPC Core/Mime/Versatile Performance|Versatile Performance]]"
    desc: "  The traveling actor can use Performance instead of Diplomacy to [[Actions/make-an-impression statistic=performance|make-an-impression statistic=performance]] and instead of Intimidation to [[Actions/demoralize statistic=performance|demoralize statistic=performance]]."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Wooden Sword"
    desc: "+12 (agile, finesse, shove)\n__Damage__  1d4 + 6 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+12 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 6 bludgeoning"

  - name: "Overacted Strike"
    desc: "`pf2:2` (emotion,fear,mental,visual) The traveling actor puts all their expertise into an attack that strikes fear in those who witness it. The traveling actor Strikes. On a success, the traveling actor chooses another creature within 30 feet who can see the attack, who becomes [[Conditions/Frightened|Frightened 1]] (or [[Conditions/Frightened|Frightened 2]] on a critical success)."
 
```

```encounter-table
name: Traveling Actor
creatures:
  - 1: Traveling Actor
```



The life of a traveling actor is, contrary to belief, not one of glamor but effort. To be on the road going from town to town wearing a thousand faces invites little reward, save the adoration of the crowd. Even so, this is where they thrive. Actors typically travel in troupes, composed not only of other actors but also of stagehands, drivers, and assorted hangers-on. All of them fall under the thumb of a singular director, acting as both parent and manager to all within the troupe.

* * *

Performances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.
