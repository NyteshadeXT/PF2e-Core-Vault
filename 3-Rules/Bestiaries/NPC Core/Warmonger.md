---
title: "Warmonger"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.KJ4faFTpKHVhAqFR" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/10
  - remaster
statblock: inline
name: "Warmonger"
level: 10
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Warmonger"
level: "Creature 10"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 16
perception:
  - name: "Perception"
    desc: "+16; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +24, Intimidation: +20, Stealth: +19, Survival: +14, Warfare Lore: +21"
abilityMods: [6, 4, 5, 1, 0, 0]
speed: 30 feet,  climb 10 feet,  swim 20 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 29
armorclass:
  - name: AC
    desc: "29; __Fort__ +21, __Ref__ +20, __Will__ +16"
hp: 200
health:
  - name: ""
  - name: HP
    desc: "200"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "2x [[Equipment/Battle Axe|+1 Striking Battle Axe]], [[Equipment/Composite Longbow|+1 Composite Longbow]], [[Equipment/Hide Armor|+1 Hide Armor]]"
  - name: "Warfare Lore"
    desc: "  The warmonger can always roll Warfare Lore for initiative."

abilities_mid:
  - name: ""
  - name: "Pain Training"
    desc: "  The warmonger treats the value of any [[Conditions/Drained|Drained]], [[Conditions/Dying|Dying]], [[Conditions/Enfeebled|Enfeebled]], [[Conditions/Sickened|Sickened]], and [[Conditions/Wounded|Wounded]] conditions affecting them as 1 lower. The warmonger still has the condition and must remove it normally."

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Battle Axe"
    desc: "+23 (magical, sweep)\n__Damage__  2d8 + 12 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+22 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 12 bludgeoning"

  - name: "**Ranged** `pf2:1` Composite Longbow"
    desc: "+21 (deadly d10, magical, propulsive, range increment 100 feet, reload 0, volley 30 ft.)\n__Damage__  1d8 + 9 piercing"

  - name: "Patch and Set"
    desc: "`pf2:1` (healing,manipulate) **Frequency** once per day\n\n**Requirements** The warmonger has a hand free\n* * *\n\n**Effect** The warmonger grits their teeth and ties off a wound or sets a bone or joint. They regain 20 healing Hit Points."

  - name: "Power Through"
    desc: "`pf2:2`  **Requirements** The warmonger is wielding two melee weapons and isn't [[Conditions/Fatigued|Fatigued]]\n* * *\n\n**Effect** The warmonger attempts up to three melee Strikes against different creatures. These count toward the warmonger's multiple attack penalty normally, but the penalty doesn't increase until after all the attacks. The warmonger overexerts themself with the attacks, becoming fatigued. The warmonger can attempt a DC 30 Fortitude check save to recover from this fatigued condition at the start of each of their turns."

  - name: "Sight Prey"
    desc: "`pf2:1` (concentrate) The warmonger singles out one enemy to bring down with ranged attacks until the end of the current turn. The warmonger's ranged Strikes against that creature gain a +1 circumstance bonus to the attack roll and deal an extra 3d6 precision damage. Each time the warmonger hits that creature with a ranged Strike, the creature takes a –10-foot penalty to its Speeds for 1 minute and falls 20 feet if it's flying.\n\n[[Bestiary Effects/Effect_ Sight Prey (Speed Penalty)|Effect: Sight Prey (Speed Penalty)]]"

  - name: "War Cry"
    desc: "`pf2:r` (auditory,emotion,mental) **Frequency** once per hour\n\n**Trigger** The warmonger critically hits or knocks out an enemy\n* * *\n\n**Effect** The warmonger screams a battle cry. Each ally in a 30-foot emanation that hears it deals an additional 1d6 damage with its Strikes for 1 round.\n\n[[Bestiary Effects/Effect_ War Cry|Effect: War Cry]]"
 
```

```encounter-table
name: Warmonger
creatures:
  - 1: Warmonger
```



Warmongers believe the base state of life is violence. They stay in peak physical condition with constant training and keep their supplies ready for marching to war.

* * *

Villains pursue selfish and cruel goals, trampling over anyone in their way.
