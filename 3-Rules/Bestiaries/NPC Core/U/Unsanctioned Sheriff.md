---
title: "Unsanctioned Sheriff"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.CCxgC3FIPsEZqZEo" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/5
  - remaster
statblock: inline
name: "Unsanctioned Sheriff"
level: 5
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Unsanctioned Sheriff"
level: "Creature 5"

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
    desc: "Athletics: +13, Deception: +11, Diplomacy: +11, Intimidation: +13, Society: +13"
abilityMods: [4, 2, 2, 0, 2, 2]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__ +11, __Ref__ +11, __Will__ +13"
hp: 75
health:
  - name: ""
  - name: HP
    desc: "75"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "2x [[Equipment/Dueling Pistol|Dueling Pistol]], [[Equipment/Sap|Sap]], [[Equipment/Scale Mail|Scale Mail]], Badge, 20x [[Equipment/Rounds (Dueling Pistol)|Rounds (Dueling Pistol)]]"
  - name: "Greased Palms"
    desc: "  Money talks, and no one knows that better than the unsanctioned sheriff. A creature that pays the sheriff at least 5 gp gains a +2 status bonus to [[Actions/Gather Information|Gather Information]] in the sheriff's settlement for the next 24 hours."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Sap"
    desc: "+15 (agile, nonlethal)\n__Damage__  1d6 + 7 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+15 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 7 bludgeoning"

  - name: "**Ranged** `pf2:1` Dueling Pistol"
    desc: "+13 (concealable, concussive, fatal d10, range increment 60 feet, reload 1)\n__Damage__  1d6 + 5 piercing"

  - name: "Lay Down the Law"
    desc: "`pf2:1` (auditory,concentrate,linguistic,mental) **Requirements** The sheriff's last action this turn was a successful Strike against a creature within 30 feet\n* * *\n\n**Effect** The sheriff yells a command at the creature they hit. The target must succeed at a DC 22 Will check save or spend the first action on its next turn doing as commanded (or all its actions on its next turn on a critical failure). The sheriff can command a creature to approach the sheriff, release what its holding, or drop [[Conditions/Prone|Prone]]. Regardless of the result of its save, the creature is temporarily immune for 10 minutes."
 
```

```encounter-table
name: Unsanctioned Sheriff
creatures:
  - 1: Unsanctioned Sheriff
```



Believing the ends justify the means, the unsanctioned sheriff is unafraid to use others for their own gain, through bribes, manipulation, or force.

* * *

These lone wolves have an aura of mystery, bravado, and swagger.
