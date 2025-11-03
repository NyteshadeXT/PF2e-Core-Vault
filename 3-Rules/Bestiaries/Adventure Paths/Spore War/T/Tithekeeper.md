---
title: "Tithekeeper"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.zaFCdcwo2VDqqrNR" 
tags:
  - pf2e/creature/type/construct
  - pf2e/creature/type/mindless
  - pf2eMonster
  - pf2e/creature/level/10
  - remaster
statblock: inline
name: "Tithekeeper"
level: 10
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #210: Whispers in the Dirt"
name: "Tithekeeper"
level: "Creature 10"
rare_03: [[Rare]]
alignment: ""
size: "Large"
trait_01: [[construct]]
trait_02: [[mindless]]
modifier: 16
perception:
  - name: "Perception"
    desc: "+16; Darkvision"
languages: ""
skills:
  - name: "Skills"
    desc: "Athletics: +23"
abilityMods: [7, 3, 6, -5, 0, -5]
speed: 30 feet,  climb 30 feet
sourcebook: "_Pathfinder #210: Whispers in the Dirt_"
ac: 29
armorclass:
  - name: AC
    desc: "29; __Fort__ +22, __Ref__ +17, __Will__ +14"
hp: 220
health:
  - name: ""
  - name: HP
    desc: "220; __Immunities__  bleed,  death effects,  disease,  doomed,  drained,  fatigued,  healing,  nonlethal attacks,  paralyzed,  poison,  sickened,  spirit,  unconscious,  vitality,  void,  mental"
abilities_top:
  - name: ""

  - name: "Eyes Behind the Mask"
    desc: " (scrying) A creature wearing the mask and garb of a priest of Razmir that outranks the tithekeeper's mask and ribbon rank can spend an hour Interacting with the tithekeeper's mask to connect with it. The creature's mask becomes an invested item that allows them to see and hear as though peering through the tithekeeper's mask. The creature must use a 3-action activity envisioning the tithekeeper to activate the scrying effect, and the effect can be Dismissed. Multiple creatures can create connections to the tithekeeper's mask simultaneously, and a creature can have connections to multiple tithekeepers with just one mask. Each connection ends after a week but can be renewed at any time."

abilities_mid:
  - name: ""
  - name: "Accept Tithe"
    desc: "`pf2:0`  **Trigger** A creature drops or offers at least 750 gp in valuables within 15 feet of the tithekeeper\n* * *\n\n**Effect** The tithekeeper quickly uses its feet to scoop the valuables into its vault and is now indifferent toward the triggering creature unless that creature uses hostile actions against it or its allies."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Body"
    desc: "+23 ()\n__Damage__  2d12 + 13 bludgeoning"

  - name: "**Melee** `pf2:1` Foot"
    desc: "+23 (reach 15 feet, unarmed)\n__Damage__  2d8 + 13 piercing plus improved-grab"

  - name: "Capacity for Punishment"
    desc: "  The tithekeeper can have up to six creatures impaled and [[Conditions/Grabbed|Grabbed]] with its feet at once."

  - name: "Impale"
    desc: "`pf2:1`  **Requirements** The tithekeeper has [[Conditions/Grabbed|Grabbed]] a creature\n* * *\n\n**Effect** The tithekeeper stabs the target with a spike for 2d8+13 piercing damage (DC 29 Reflex check save). It no longer has to spend an action to extend the duration for the target it has grabbed. The target moves with the tithekeeper and takes 1d8 persistent bleed damage until it Escapes (DC 29)."

  - name: "Locked Vault"
    desc: "  The tithekeeper's body is a locked vault containing any tithes given to it. The vault's [[Actions/Pick a Lock|Pick Lock]] DC is 29 and [[Actions/Force Open|Force Open]] DC is 33."

  - name: "Rip Off"
    desc: "`pf2:2`  **Requirements** The tithekeeper has Impaled a creature\n* * *\n\n**Effect** The tithekeeper tears the creature loose from its spiky feet, releasing it. The creature takes 4d10 slashing damage (DC 29 Fortitude check save) and is no longer [[Conditions/Grabbed|Grabbed]]. On a failed save, the creature also takes 2d8 persistent bleed damage."

  - name: "[[Bestiary Ability Glossary/Trample|Trample]]"
    desc: "`pf2:3`  Medium or smaller, body, DC 29 Reflex check\n* * *\n\nThe monster Strides up to double its Speed and can move through the spaces of creatures of the listed size, Trampling each creature whose space it enters. The monster can attempt to Trample the same creature only once in a single use of Trample. The monster deals the damage of the listed Strike, but trampled creatures can attempt a basic Reflex save at the listed DC (no damage on a critical success, half damage on a success, double damage on a critical failure)."

  - name: "[[Bestiary Ability Glossary/Improved Grab|Improved Grab]]"
    desc: "  **Requirements** The monster's last action was a successful Strike that lists Improved Grab in its damage entry, or the monster has a creature [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]]\n* * *\n\n**Effect** If used after a Strike, the monster attempts to [[Actions/grapple|grapple]] the creature using the body part it attacked with as a free action. This attempt neither applies nor counts toward the creature's multiple attack penalty.\n\nThe monster can instead spend an action to use Grab and choose one creature it's grabbing or restraining with an appendage that has Grab to automatically extend that condition to the end of the monster's next turn."
 
```

```encounter-table
name: Tithekeeper
creatures:
  - 1: Tithekeeper
```



Razmir's most powerful priests deploy tithekeepers to ensure his followers don't develop sticky fingers. These ziggurat-like constructs have over two dozen legs and a trap-like mouth. At its top, a mask with a colored ribbon attached denotes its symbolic rank in the Church of Razmir.

## Instruments of Terror

Though the tithekeeper's primary function is to collect coins, they're capable of great violence. Priests who determine a village is too far behind on payments might have their tithekeeper skewer multiple residents and wave its victims' bodies in the air as it parades through the streets. Those who survive the ordeal are highly motivated to avoid a repeat experience.
