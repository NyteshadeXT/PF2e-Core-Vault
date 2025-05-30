---
title: "Orc Spinecracker"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.triumph-of-the-tusk-bestiary.Actor.pDKT31HwKQLU6tJl" 
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/orc
  - pf2eMonster
  - pf2e/creature/level/7
  - remaster
statblock: inline
name: "Orc Spinecracker"
level: 7
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #209: Destroyer&#x27;s Doom"
name: "Orc Spinecracker"
level: "Creature 7"

alignment: ""
size: "Medium"
trait_01: [[humanoid]]
trait_02: [[orc]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; Darkvision"
languages: "Common, Orcish"
skills:
  - name: "Skills"
    desc: "Acrobatics: +14, Athletics: +20, Deception: +14, Intimidation: +14"
abilityMods: [7, 3, 4, 0, 0, 3]
speed: 25 feet
sourcebook: "_Pathfinder #209: Destroyer&#x27;s Doom_"
ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__ +15, __Ref__ +12, __Will__ +10"
hp: 130
health:
  - name: ""
  - name: HP
    desc: "130"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Shortbow|Shortbow]], [[Equipment/Spiked Gauntlet|+1 Striking Spiked Gauntlet]], [[Equipment/Hide Armor|Hide Armor]], 20x [[Equipment/Arrows|Arrows]]"
abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Ferocity|Ferocity]]"
    desc: "`pf2:r`  **Trigger** The monster is reduced to 0 HP.\n* * *\n\n**Effect** The monster avoids being knocked out and remains at 1 HP, but its [[Conditions/Wounded|Wounded]] value increases by 1. When it is Wounded 3, it can no longer use this ability"

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Spiked Gauntlet"
    desc: "+20 (agile, free-hand, magical)\n__Damage__  2d8 + 8 piercing"

  - name: "**Ranged** `pf2:1` Shortbow"
    desc: "+15 (deadly d10, range increment 60 feet, reload 0)\n__Damage__  2d6 + 6 piercing"

  - name: "Brawler Critical Specialization"
    desc: "  When the orc spinecracker gets a critical hit with a brawling weapon, the target must succeed at a DC 22 Fortitude check save or be [[Conditions/Slowed|Slowed 1]] until the end of the spinecracker's next turn."

  - name: "Combat Grab"
    desc: "`pf2:1` (press) **Requirements** The spinecracker has one hand free, and their target is within reach of that hand\n* * *\n\n**Effect** Using their prior attack to shift their opponent's guard, the spinecracker makes a melee Strike with one hand. If it hits, they grab the target using their other hand. The creature remains [[Conditions/Grabbed|Grabbed]] until the end of the spinecracker's next turn or until it Escapes, whichever comes first."

  - name: "Crushing Pin"
    desc: "`pf2:2` (attack) **Requirements** The spinecracker has a creature Grappled\n* * *\n\n**Effect** The spinecracker crushes the creature in their grip, dealing 2d6+6 bludgeoning damage and giving the target the [[Conditions/Restrained|Restrained]] condition until the end of the spinecracker's next turn."
 
```

```encounter-table
name: Orc Spinecracker
creatures:
  - 1: Orc Spinecracker
```



Orc spinecrackers are skilled in the art of hand-to-hand combat, forgoing weapons in favor of gauntlets or bare knuckles.

* * *

While some orc warriors specialize in a technique of their hold, others synthesize styles from all over into a unified yet versatile technique.

## Orc Duels

Dueling is a frequent practice among many cultures of Golarion, and orcs are no exception. The lethality of these duels varies based on the duel's impetus—a friendly bout goes to first blood or until a combatant is knocked out, while a fight in response to a vendetta or insult is more likely to the death. Unlike in many dueling traditions, spectators are encouraged to verbally aid combatants, shouting out encouragement to one's preferred fighter and invectives to their opponent.
