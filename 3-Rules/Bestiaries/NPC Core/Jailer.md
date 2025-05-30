---
title: "Jailer"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.4okKASZDvBWTSu1U" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/3
  - remaster
statblock: inline
name: "Jailer"
level: 3
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Jailer"
level: "Creature 3"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 9
perception:
  - name: "Perception"
    desc: "+9; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +11, Diplomacy: +5, Intimidation: +7"
abilityMods: [4, 3, 1, 0, 2, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +8, __Ref__ +10, __Will__ +7"
hp: 45
health:
  - name: ""
  - name: HP
    desc: "45"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Club|Club]], [[Equipment/Crossbow|Crossbow]], [[Equipment/Studded Leather Armor|Studded Leather Armor]], Keyring, [[Equipment/Manacles (Simple)|Manacles (Simple)]], [[Equipment/Signal Whistle|Signal Whistle]], 20x [[Equipment/Bolts|Bolts]]"
abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Club"
    desc: "+11 ()\n__Damage__  1d6 + 8 bludgeoning"

  - name: "**Ranged** `pf2:1` Club"
    desc: "+10 (thrown 10 ft.)\n__Damage__  1d6 + 8 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+11 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 8 bludgeoning"

  - name: "**Ranged** `pf2:1` Crossbow"
    desc: "+10 (range increment 120 feet, reload 1)\n__Damage__  1d8 + 4 piercing"

  - name: "Efficient Capture"
    desc: "`pf2:3` (attack,manipulate) **Requirements** The jailer has manacles in hand and is adjacent to a creature\n* * *\n\n**Effect** The jailer attempts to bind the creature's wrists or ankles with the manacles. If the jailer succeeds at an attack roll with a +9 modifier against the target's AC, they apply the manacles."

  - name: "Intimidating Strike"
    desc: "`pf2:2` (emotion,fear,mental) The jailer makes a melee Strike. If it hits and deals damage, the target is [[Conditions/Frightened|Frightened 1]], or [[Conditions/Frightened|Frightened 2]] on a critical hit."

  - name: "Subdue Prisoners"
    desc: "  The jailer doesn't take the normal penalty for making a nonlethal attack when attacking with their club."
 
```

```encounter-table
name: Jailer
creatures:
  - 1: Jailer
```



A jailer's primary responsibility is to keep prisoners from escaping. Jailers must often use force, or the threat of force, to keep their charges in line, as even the most carefully crafted cells, manacles, or chains can fail with time and persistence when the prisoners have the will to attempt an escape.

* * *

Larger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.
