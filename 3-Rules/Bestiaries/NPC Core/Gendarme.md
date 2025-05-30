---
title: "Gendarme"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.bzRxQ0Z317yeCUE5" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/8
  - remaster
statblock: inline
name: "Gendarme"
level: 8
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Gendarme"
level: "Creature 8"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 19
perception:
  - name: "Perception"
    desc: "+19; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +18, Intimidation: +16, Legal Lore: +14"
abilityMods: [4, 1, 4, 0, 3, 2]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 26
armorclass:
  - name: AC
    desc: "26; __Fort__ +19, __Ref__ +14, __Will__ +17; nerves of steel"
hp: 120
health:
  - name: ""
  - name: HP
    desc: "120"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Composite Longbow|+1 Composite Longbow]], [[Equipment/Flail|+1 Striking Flail]], [[Equipment/Gauntlet|+1 Gauntlet]], [[Equipment/Half Plate|Half Plate]], 20x [[Equipment/Arrows|Arrows]]"
abilities_mid:
  - name: ""
  - name: "Nerves of Steel"
    desc: "  When the gendarme succeeds against a fear effect, they get a critical success instead."

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  The gendarme can Disarm instead of Striking.\n\n**Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Flail"
    desc: "+19 (disarm, magical, sweep, trip)\n__Damage__  2d6 + 10 bludgeoning plus improved-knockdown"

  - name: "**Melee** `pf2:1` Gauntlet"
    desc: "+19 (agile, free-hand, magical)\n__Damage__  1d4 + 10 bludgeoning plus improved-grab"

  - name: "**Ranged** `pf2:1` Composite Longbow"
    desc: "+16 (deadly d10, magical, propulsive, range increment 100 feet, reload 0, volley 30 ft.)\n__Damage__  1d8 + 8 piercing"

  - name: "Shoot Down"
    desc: "`pf2:2`  The gendarme carefully makes a ranged Strike. If the Strike deals damage, the target must succeed at a DC 26 Reflex check saving throw or fall [[Conditions/Prone|Prone]]."

  - name: "Stop in the Name of the Law!"
    desc: "`pf2:2` (incapacitation,linguistic) The gendarme Strides twice and then [[Actions/demoralize|demoralize]]{Demoralizes}. On a success, the target is [[Conditions/Slowed|Slowed]] with a value equal to its [[Conditions/Frightened|Frightened]] value until it is no longer frightened."
 
```

```encounter-table
name: Gendarme
creatures:
  - 1: Gendarme
```



Powerful governments retain gendarmes to guard important magistrates, enforce laws protecting national security, reinstate order amid unrest, and capture unusually dangerous criminals. They're also sent to deal with important cases in rural areas without substantial guards of their own.

* * *

Larger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.
