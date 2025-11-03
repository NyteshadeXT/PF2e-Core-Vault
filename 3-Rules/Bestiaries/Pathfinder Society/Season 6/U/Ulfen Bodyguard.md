---
title: "Ulfen Bodyguard"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pfs-season-6-bestiary.Actor.iwC7PSPnHIIwbgmI" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/-1
  - remaster
statblock: inline
name: "Ulfen Bodyguard"
level: -1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #6-08: Upon Wheels and Rime"
name: "Ulfen Bodyguard"
level: "Creature -1"
rare_03: [[Uncommon]]
alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 8
perception:
  - name: "Perception"
    desc: "+8; "
languages: "Common, Skald"
skills:
  - name: "Skills"
    desc: "Athletics: +5, Intimidation: +4"
abilityMods: [3, 1, 3, -1, 1, 0]
speed: 25 feet
sourcebook: "_Pathfinder Society Scenario #6-08: Upon Wheels and Rime_"
ac: 15
armorclass:
  - name: AC
    desc: "15; __Fort__ +8, __Ref__ +5, __Will__ +2"
hp: 9
health:
  - name: ""
  - name: HP
    desc: "9"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Battle Axe|Battle Axe]], [[Equipment/Shortbow|Shortbow]], [[Equipment/Studded Leather Armor|Studded Leather Armor]], 20x [[Equipment/Arrows|Arrows]]"
abilities_mid:
  - name: ""
  - name: "Face Me!"
    desc: "`pf2:r`  **Trigger** A creature within 30 feet deals damage to Matriarch Szvetneera\n* * *\n\n**Effect** The Ulfen bodyguard lets out a threating bellow at whoever injured their ward. They then attempt a check to [[Actions/Demoralize|Demoralize]] against the triggering creature, gaining a +2 circumstance bonus to the check."

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Battle Axe"
    desc: "+8 (sweep)\n__Damage__  1d8 + 3 slashing"

  - name: "**Ranged** `pf2:1` Shortbow"
    desc: "+6 (deadly d10, range increment 60 feet, reload 0)\n__Damage__  1d6 piercing"

  - name: "Back Away!"
    desc: "`pf2:2`  The Ulfen bodyguard attacks the target, pushing them back and away from their charge. The bodyguard makes a Strike against the creature, then attempts to [[Actions/Shove|Shove]] their target. Depending on the outcome of their Strike, there may be additional effects.\n* * *\n\n**Critical Success** The Ulfen bodyguard gains a +2 circumstance bonus to their attempt to Shove.\n\n**Success** The Ulfen bodyguard gains a +1 circumstance bonus to their attempt to Shove.\n\n**Failure** There is no effect.\n\n**Critical Failure** The Ulfen bodyguard is [[Conditions/Off-Guard|Off-Guard]] until the start of their next turn."
 
```

```encounter-table
name: Ulfen Bodyguard
creatures:
  - 1: Ulfen Bodyguard
```




