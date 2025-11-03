---
title: "Molog"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.triumph-of-the-tusk-bestiary.Actor.7UR30qeUnnBwY9XE" 
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/orc
  - pf2eMonster
  - pf2e/creature/level/11
  - remaster
statblock: inline
name: "Molog"
level: 11
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #209: Destroyer&#x27;s Doom"
name: "Molog"
level: "Creature 11"
rare_03: [[Unique]]
alignment: ""
size: "Medium"
trait_01: [[humanoid]]
trait_02: [[orc]]
modifier: 18
perception:
  - name: "Perception"
    desc: "+18; Darkvision"
languages: "Common, Draconic, Orcish"
skills:
  - name: "Skills"
    desc: "Acrobatics: +20, Athletics: +26, Intimidation: +20, Nature: +17"
abilityMods: [8, 4, 5, 0, 1, 3]
speed: 25 feet
sourcebook: "_Pathfinder #209: Destroyer&#x27;s Doom_"
ac: 32
armorclass:
  - name: AC
    desc: "32; __Fort__ +21, __Ref__ +19, __Will__ +16"
hp: 225
health:
  - name: ""
  - name: HP
    desc: "225"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Glaive|+1 Striking Glaive]], [[Equipment/Composite Shortbow|+1 Composite Shortbow]], [[Equipment/Half Plate|+1 Half Plate]], [[Equipment/Standard of the Primeval Howl|Standard of the Primeval Howl]]"
abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Ferocity|Ferocity]]"
    desc: "`pf2:r`  **Trigger** The monster is reduced to 0 HP.\n* * *\n\n**Effect** The monster avoids being knocked out and remains at 1 HP, but its [[Conditions/Wounded|Wounded]] value increases by 1. When it is Wounded 3, it can no longer use this ability"

  - name: "Frightful Standard"
    desc: " (aura,emotion,fear,mental) 30 feet, DC 27 Will check.\n\nAs long as Molog remains mounted and his standard is intact, he has frightful presence against enemies within the aura.\n* * *\n\nA creature that first enters the area must attempt a Will save.\n\nRegardless of the result of the saving throw, the creature is temporarily immune to this monster's Frightful Presence for 1 minute.\n* * *\n\n**Critical Success** The creature is unaffected by the presence.\n\n**Success** The creature is [[Conditions/Frightened|Frightened 1]].\n\n**Failure** The creature is [[Conditions/Frightened|Frightened 2]].\n\n**Critical Failure** The creature is [[Conditions/Frightened|Frightened 4]]."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Glaive"
    desc: "+28 (deadly d8, forceful, magical, reach 10 feet)\n__Damage__  2d12 + 11 slashing"

  - name: "**Ranged** `pf2:1` Composite Shortbow"
    desc: "+22 (deadly d10, magical, propulsive, range increment 60 feet, reload 0)\n__Damage__  4d6 + 5 piercing"

  - name: "Battle Cry"
    desc: "  **Trigger** Molog rolls initiative\n* * *\n\n**Effect** Molog attempts to [[Actions/demoralize|demoralize]] an observed foe."

  - name: "Trampling Charge"
    desc: "`pf2:3` (flourish) Molog urges Bloodwing forward, trampling enemies in their path. He commands her to Stride or Fly up to her Speed, moving through the spaces of any foes in his path up to Large size. Bloodwing deals damage equal to her claw melee Strike to each creature whose space they move through, subject to a DC 31 Reflex check save. On a critical failure, the creature also becomes [[Conditions/Off-Guard|Off-Guard]] until the end of Molog's next turn. He can damage a given creature only once during this movement."

  - name: "Weapon Adept"
    desc: "`pf2:1`  Moloch can Swap between his glaive and composite shortbow, then Strike with the weapon he switched to."

  - name: "[[Actor.K4RHacsVSD3J8i2f.Item.tDR4IjM9uRaPIdd3|Wyvern's Swoop]]"
    desc: "`pf2:2` (flourish) **Requirements** Molog is mounting his wyvern\n* * *\n\n**Effect** Molog Commands his mount to Stride twice. At any point during this movement, he can Strike one enemy within reach or within the first range increment of his ranged weapon, with a +1 circumstance bonus to his attack roll. If he began this movement at a higher point than his target, he deals an additional die of damage with this Strike."
 
```

```encounter-table
name: Molog
creatures:
  - 1: Molog
```




