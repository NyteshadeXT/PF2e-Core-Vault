---
title: "Drover"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.aq5spzk2UZrI0ZwK" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/0
  - remaster
statblock: inline
name: "Drover"
level: 0
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Drover"
level: "Creature 0"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 5
perception:
  - name: "Perception"
    desc: "+5; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +7, Nature: +5, Survival: +5, Livestock Lore: +6"
abilityMods: [3, 2, 2, 0, 1, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 15
armorclass:
  - name: AC
    desc: "15; __Fort__ +6, __Ref__ +6, __Will__ +5"
hp: 18
health:
  - name: ""
  - name: HP
    desc: "18"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Sling|Sling]], [[Equipment/Whip|Whip]], [[Equipment/Leather Armor|Overalls]], [[Equipment/Lawbringer's Lasso|Lasso]], [[Equipment/Signal Whistle|Signal Whistle]], 20x [[Equipment/Sling Bullets|Sling Bullets]]"
  - name: "Whistling"
    desc: "  Drovers can whistle instead of speaking when communicating simple messages (such as \"go left,\" \"split the herd,\" and \"danger ahead\") to other drovers or when using the Command an Animal action on their herding dogs."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Whip"
    desc: "+7 (disarm, nonlethal, reach, trip)\n__Damage__  1d4 + 3 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+7 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 3 bludgeoning"

  - name: "**Ranged** `pf2:1` Sling"
    desc: "+7 (propulsive, range increment 50 feet, reload 1)\n__Damage__  1d6 + 1 piercing"

  - name: "Hogtie"
    desc: "`pf2:2`  **Requirements** A creature is grappled or [[Conditions/Restrained|Restrained]] by the drover's lasso\n* * *\n\n**Effect** The drover can pull the grappled creature up to 20 feet. Then, if the creature is within reach, the drover hogties it, attempting to [[Actions/Grapple|Grapple]] it again. On a success, the creature is restrained with the lasso, and the drover doesn't need to maintain the grapple. The hogtie lasts until the creature Escapes or the lasso is Forced Open. The drover can Interact to free a hogtied creature within reach."

  - name: "Lasso"
    desc: "`pf2:2`  The drover uses their lasso to [[Actions/Grapple|Grapple]] a Large or smaller creature up to 20 feet away. They can continue to Grapple to keep their hold on the target so long as the target remains within 20 feet and they continue to hold the end of the lasso. In addition to the [[Conditions/Grabbed|Grabbed]] creature being able to [[Actions/Escape|Escape]], a successful DC 16 Athletics check check to [[Actions/Force Open|Force Open]] can remove the lasso entirely."
 
```

```encounter-table
name: Drover
creatures:
  - 1: Drover
```



Drovers specialize in moving herds of livestock over large distances.

* * *

Society is built upon the backs of laborers.
