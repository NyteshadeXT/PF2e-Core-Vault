---
title: "Divine Oozeshard"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pfs-season-6-bestiary.Actor.D7W52RHoK6Fv7KWY" 
tags:
  - pf2e/creature/type/mythic
  - pf2e/creature/type/ooze
  - pf2eMonster
  - pf2e/creature/level/10
  - remaster
statblock: inline
name: "Divine Oozeshard"
level: 10
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #6-07: A God Falls Where Magic Fails"
name: "Divine Oozeshard"
level: "Creature 10"

alignment: ""
size: "huge"
trait_01: [[mythic]]
trait_02: [[ooze]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; Motion Sense (Imprecise) 60 Feet"
languages: ""
skills:
  - name: "Skills"
    desc: "Athletics: +23"
abilityMods: [8, -5, 7, -2, 0, -5]
speed: 30 feet,  climb 20 feet
sourcebook: "_Pathfinder Society Scenario #6-07: A God Falls Where Magic Fails_"
ac: 18
armorclass:
  - name: AC
    desc: "18 (26 while in armored apotheosis form); __Fort__ +22, __Ref__ +9, __Will__ +18"
hp: 220
health:
  - name: ""
  - name: HP
    desc: "220; __Immunities__  acid,  unconscious,  critical hits,  electricity,  bludgeoning,  precision"
abilities_top:
  - name: ""

  - name: "Armored Apotheosis"
    desc: "  When it is first encountered, the divine oozeshard is in a lumpy, vaguely spherical ooze form. When it takes damage from any weapon attack, it suddenly reshapes, taking a form almost identical to the dead deity Gorum. The ooze hardens into armored plates (increasing its AC by +8) and its pseudopod transforms into a massive, acid-dripping greatsword. While in this form, it loses its pseudopod attack and its immunity to bludgeoning and precision damage. It cannot use its constrict or engulf abilities, and any creature currently engulfed by it is spat out into an adjacent random square, taking 1d8 acid damage and 1d8 slashing damage. It gains the Reactive Strike reaction. If it is critically hit by a Strike or critically fails a save against an effect that deals Hit Point damage to it, the divine oozeshard reverts back into its ooze form."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike (Armored Apotheosis Only)]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Constrict|Constrict (Ooze Form Only)]]"
    desc: "`pf2:1`  1d8+10 bludgeoning + 1d12 acid, DC 29 Fortitude check\n* * *\n\nThe monster deals the listed amount of damage to any number of creatures [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]] by it. Each of those creatures can attempt a basic Fortitude save with the listed DC."

  - name: "[[Bestiary Ability Glossary/Engulf|Engulf (Ooze Form Only)]]"
    desc: "`pf2:2`  DC 25 Reflex check, 3d8 acid damage, Escape DC 25, Rupture 22\n* * *\n\nThe monster Strides up to double its Speed and can move through the spaces of any creatures in its path. Any creature of the monster's size or smaller whose space the monster moves through can attempt a Reflex save with the listed DC to avoid being engulfed. A creature unable to act automatically critically fails this save. If a creature succeeds at its save, it can choose to be either pushed aside (out of the monster's path) or pushed in front of the monster to the end of the monster's movement. The monster can attempt to Engulf the same creature only once in a single use of Engulf. The monster can contain as many creatures as can fit in its space.\n\nA creature that fails its save is pulled into the monster's body. It is [[Conditions/Grabbed|Grabbed]], is [[Conditions/Slowed|Slowed 1]], and has to hold its breath or start suffocating. The creature takes the listed amount of damage when first engulfed and at the end of each of its turns while it's engulfed. An engulfed creature can get free by [[Actions/Escape|Escaping]] against the listed escape DC. An engulfed creature can attack the monster engulfing it, but only with unarmed attacks or with weapons of light Bulk or less. The engulfing creature is [[Conditions/Off-Guard|Off-Guard]] against the attack. If the monster takes piercing or slashing damage equaling or exceeding the listed Rupture value from a single attack or spell, the engulfed creature cuts itself free.\n\n[[Bestiary Effects/Effect_ Engulf and Swallow Whole|Effect: Engulf and Swallow Whole]]\n\nA creature that gets free by either method can immediately breathe and exits the swallowing monster's space.\n\nIf the monster dies, all creatures it has engulfed are automatically released as the monster's form loses cohesion."

  - name: "Gorumite Echoes"
    desc: "  While in its armored apotheosis form, the divine oozeshard deals an additional 1d8 bleed damage and makes the target [[Conditions/Off-Guard|Off-Guard]] for 1 round whenever it critically hits with its greatsword."

  - name: "Spawn Oozeshardling Node"
    desc: "  Whenever the divine oozeshard takes 55 or more damage from a single attack, it spawns a sparking oozeshardling node in an adjacent square. The sparking oozeshardling node's electric pulse reaction immediately activates and then the sparking oozeshardling node enters initiative at the bottom of the current initiative count."

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  **Requirements** The monster's last action was a successful Strike that lists Grab in its damage entry, or the monster has a creature [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]]\n* * *\n\n**Effect** If used after a Strike, the monster attempts to [[Actions/grapple|grapple]] the creature using the body part it attacked with. This attempt neither applies nor counts toward the creature's multiple attack penalty.\n\nThe monster can instead use Grab and choose one creature it's grabbing or restraining with an appendage that has Grab to automatically extend that condition to the end of the monster's next turn."
 
```

```encounter-table
name: Divine Oozeshard
creatures:
  - 1: Divine Oozeshard
```




