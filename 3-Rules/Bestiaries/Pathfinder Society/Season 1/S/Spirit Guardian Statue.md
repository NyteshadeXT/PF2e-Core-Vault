---
title: "Spirit Guardian Statue"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pfs-season-1-bestiary.Actor.U2igHGiYNNclSdsm" 
tags:
  - pf2e/creature/type/construct
  - pf2e/creature/type/mindless
  - pf2eMonster
  - pf2e/creature/level/3
statblock: inline
name: "Spirit Guardian Statue"
level: 3
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #1-06: Lost on the Spirit Road"
name: "Spirit Guardian Statue"
level: "Creature 3"

alignment: ""
size: "Medium"
trait_01: [[construct]]
trait_02: [[mindless]]
modifier: 9
perception:
  - name: "Perception"
    desc: "+9; Darkvision"
languages: ""
skills:
  - name: "Skills"
    desc: "Athletics: +11"
abilityMods: [4, -2, 5, -5, 0, -5]
speed: 20 feet
sourcebook: "_Pathfinder Society Scenario #1-06: Lost on the Spirit Road_"
ac: 19
armorclass:
  - name: AC
    desc: "19 (16 when broken); construct armor; __Fort__ +12, __Ref__ +5, __Will__ +5"
hp: 35
health:
  - name: ""
  - name: HP
    desc: "35; __Hardness__ 6; __Immunities__  bleed,  death effects,  disease,  doomed,  drained,  fatigued,  healing,  nonlethal attacks,  paralyzed,  poison,  sickened,  spirit,  unconscious,  vitality,  void,  mental"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "Construct Armor (Hardness 6)"
    desc: "  Like normal objects, a spirit guardian statue has Hardness. This Hardness reduces any damage it takes by an amount equal to the Hardness.\n\nOnce the statue is reduced to less than half its Hit Points, or immediately upon being damaged by a critical hit, its construct armor breaks and its Armor Class is reduced to 16."

  - name: "Follow Trespasser"
    desc: "`pf2:r` (move) **Trigger** A creature moves through the animated guardian statue's reach.\n* * *\n\n**Effect** The statue moves up to 20 feet in pursuit of the creature."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Slam"
    desc: "+11 (magical, unarmed)\n__Damage__  1d8 + 6 bludgeoning plus grab"

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  **Requirements** The monster's last action was a successful Strike that lists Grab in its damage entry, or the monster has a creature [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]]\n* * *\n\n**Effect** If used after a Strike, the monster attempts to [[Actions/grapple|grapple]] the creature using the body part it attacked with. This attempt neither applies nor counts toward the creature's multiple attack penalty.\n\nThe monster can instead use Grab and choose one creature it's grabbing or restraining with an appendage that has Grab to automatically extend that condition to the end of the monster's next turn."
 
```

```encounter-table
name: Spirit Guardian Statue
creatures:
  - 1: Spirit Guardian Statue
```




