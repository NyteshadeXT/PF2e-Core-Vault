---
title: "Knight"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.fSwCwS75z9FeUazU" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/7
  - remaster
statblock: inline
name: "Knight"
level: 7
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Knight"
level: "Creature 7"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 13
perception:
  - name: "Perception"
    desc: "+13; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +17, Diplomacy: +12, Intimidation: +16, Society: +13, Warfare Lore: +15"
abilityMods: [4, 3, 3, 0, 2, 1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 25
armorclass:
  - name: AC
    desc: "25 (27 with shield raised); __Fort__ +14, __Ref__ +14, __Will__ +13"
hp: 110
health:
  - name: ""
  - name: HP
    desc: "110"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Bastard Sword|+1 Bastard Sword]], 3x [[Equipment/Spear|Spear]], [[Equipment/Steel Shield|Steel Shield]], [[Equipment/Full Plate|Full Plate (with Livery)]]"
abilities_mid:
  - name: ""
  - name: "Knight's Courage"
    desc: "  Any time the knight gains the [[Conditions/Frightened|Frightened]] condition, they reduce its value by 1."

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

  - name: "[[Bestiary Ability Glossary/Shield Block|Shield Block]]"
    desc: "`pf2:r`  The knight can Shield Block for an adjacent ally, preventing that ally from taking damage instead of themself.\n* * *\n\n**Trigger** The monster has its shield raised and takes damage from a physical attack.\n* * *\n\n**Effect** The monster snaps its shield into place to deflect a blow. The shield prevents the monster from taking an amount of damage up to the shield's Hardness. The monster and the shield each take any remaining damage, possibly breaking or destroying the shield."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Bastard Sword"
    desc: "+18 (magical, two-hand d12)\n__Damage__  1d8 + 10 slashing"

  - name: "**Melee** `pf2:1` Spear"
    desc: "+17 ()\n__Damage__  1d6 + 10 piercing"

  - name: "**Ranged** `pf2:1` Spear"
    desc: "+17 (thrown 20 ft.)\n__Damage__  1d6 + 10 piercing"

  - name: "**Melee** `pf2:1` Gauntlet"
    desc: "+17 (agile, free-hand)\n__Damage__  1d4 + 10 bludgeoning"

  - name: "Intimidating Strike"
    desc: "`pf2:2` (emotion,fear,fighter,mental) The knight makes a melee Strike. If it hits and deals damage, the target is [[Conditions/Frightened|Frightened 1]], or [[Conditions/Frightened|Frightened 2]] on a critical hit."

  - name: "Rearming Advance"
    desc: "`pf2:1`  The knight Strides or Steps. During this movement, they can Interact to swap from wielding their bastard sword in two hands to wielding it in one hand and wielding their shield in the other, or vice versa. This Interact action doesn't trigger reactions that can be triggered by manipulate actions."

  - name: "Warding Shift"
    desc: "`pf2:1`  **Requirements** The knight is adjacent to a willing ally\n* * *\n\n**Effect** The knight moves an adjacent willing ally 5 feet in any direction and can Step into the space the ally vacated."
 
```

```encounter-table
name: Knight
creatures:
  - 1: Knight
```



Elite fighters from the lowest ranks of nobility, knights are proud champions of their court. Unlike other nobles, knights must earn their title through loyalty and strength-of-arms rather than inheritance. Ideals such as chivalry, honor, and virtue are associated with knights but not all meet such romantic standards.

* * *

The denizens of a noble court are the most powerful people in a civilization, primed with wealth, station, and authority above the common people.
