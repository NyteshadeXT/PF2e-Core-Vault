---
title: "Palace Guard"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.94fOoBeUT8PgTywH" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Palace Guard"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Palace Guard"
level: "Creature 4"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +14, Diplomacy: +8, Intimidation: +8"
abilityMods: [4, 2, 3, 0, 2, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__ +12, __Ref__ +10, __Will__ +10"
hp: 60
health:
  - name: ""
  - name: HP
    desc: "60"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Halberd|Halberd]], [[Equipment/Chain Mail|Chain Mail with Palace Insignia]], [[Equipment/Manacles (Simple)|Manacles (Simple)]]"
abilities_mid:
  - name: ""
  - name: "Guard's Parry"
    desc: "`pf2:r`  **Trigger** A creature attacks the palace guard's liege, and the liege is within the guard's melee reach\n* * *\n\n**Effect** The liege gains a +2 circumstance bonus to AC against the triggering attack, and the palace guard gains a +2 circumstance bonus to attack and damage rolls until the end of their next turn.\n* * *\n\n[[Bestiary Effects/Effect_ Guard's Parry (Guard)|Effect: Guard's Parry (Guard)]]\n\n[[Bestiary Effects/Effect_ Guard's Parry (Liege)|Effect: Guard's Parry (Liege)]]"

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Halberd"
    desc: "+14 (reach 10 feet, versatile s)\n__Damage__  1d10 + 7 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+14 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 7 bludgeoning"

  - name: "Crowd Control"
    desc: "`pf2:1`  **Requirements** The palace guard's last action was a successful halberd Strike\n* * *\n\n**Effect** The palace guard attempts to [[Actions/Reposition|Reposition]] the creature they hit using their halberd's reach. This attempt neither applies nor counts toward the guard's multiple attack penalty."
 
```

```encounter-table
name: Palace Guard
creatures:
  - 1: Palace Guard
```



Often the younger offspring of minor nobility or those from long lines of trusted staff, palace guards are in charge of defending the royal family and their inner stronghold. Their days consist of guarding doorways, escorting nobles, and keeping those in their charge as safe as possible.

* * *

The denizens of a noble court are the most powerful people in a civilization, primed with wealth, station, and authority above the common people.
