---
title: "Sinmold"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.YsgZ2gFGBLVnmdCc" 
tags:
  - pf2e/creature/type/fiend
  - pf2e/creature/type/fungus
  - pf2e/creature/type/ooze
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/12
  - remaster
statblock: inline
name: "Sinmold"
level: 12
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #210: Whispers in the Dirt"
name: "Sinmold"
level: "Creature 12"
rare_03: [[Rare]]
alignment: ""
size: "Large"
trait_01: [[fiend]]
trait_02: [[fungus]]
trait_03: [[ooze]]
trait_04: [[unholy]]
modifier: 22
perception:
  - name: "Perception"
    desc: "+22; Darkvision, Lifesense (Imprecise) 60 Feet"
languages: "Chthonian, Draconic, Empyrean; Telepathy 100 feet"
skills:
  - name: "Skills"
    desc: "Athletics: +24, Religion: +22, Stealth: +13"
abilityMods: [6, -5, 7, 0, 4, 2]
speed: 30 feet,  climb 30 feet,  swim 30 feet
sourcebook: "_Pathfinder #210: Whispers in the Dirt_"
ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__ +25, __Ref__ +11, __Will__ +22"
hp: 300
health:
  - name: ""
  - name: HP
    desc: "300; __Immunities__  acid,  bleed,  critical hits,  disease,  precision; __Weaknesses__ cold iron 10, holy 10"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "Desperation Vulnerability"
    desc: "  Sinmolds are aware that they're in a vulnerable state as formless \"newborn fiends\" and are desperate to become stronger before they become prey to more powerful demons. Whenever the sinmold is in a combat encounter and ends its turn without dealing damage to another creature, the sinmold takes 3d6 mental damage and becomes [[Conditions/Frightened|Frightened 1]]."

  - name: "Digestion"
    desc: " (healing) The first time in a round when the sinmold damages a creature with Engulf, the sinmold immediately restores Hit Points equal to the damage dealt, gaining Hit Points in excess of its maximum as temporary Hit Points that last for 1 hour. As long as the sinmold possesses these temporary Hit Points, its surface hardens, and its AC increases to 30."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Pseudopod"
    desc: "+24 (magical, unarmed, unholy)\n__Damage__  3d6 + 12 bludgeoning 2d6 acid"

  - name: "**Melee** `pf2:1` Tendril"
    desc: "+24 (agile, magical, reach 10 feet, unholy)\n__Damage__  3d8 + 12 slashing plus sinmold-infestation"

  - name: "[[Bestiary Ability Glossary/Engulf|Engulf]]"
    desc: "`pf2:2`  DC 32 Reflex check, 3d10 acid damage plus digestion, Escape DC 32, Rupture 18\n* * *\n\nThe monster Strides up to double its Speed and can move through the spaces of any creatures in its path. Any creature of the monster's size or smaller whose space the monster moves through can attempt a Reflex save with the listed DC to avoid being engulfed. A creature unable to act automatically critically fails this save. If a creature succeeds at its save, it can choose to be either pushed aside (out of the monster's path) or pushed in front of the monster to the end of the monster's movement. The monster can attempt to Engulf the same creature only once in a single use of Engulf. The monster can contain as many creatures as can fit in its space.\n\nA creature that fails its save is pulled into the monster's body. It is [[Conditions/Grabbed|Grabbed]], is [[Conditions/Slowed|Slowed 1]], and has to hold its breath or start suffocating. The creature takes the listed amount of damage when first engulfed and at the end of each of its turns while it's engulfed. An engulfed creature can get free by [[Actions/Escape|Escaping]] against the listed escape DC. An engulfed creature can attack the monster engulfing it, but only with unarmed attacks or with weapons of light Bulk or less. The engulfing creature is [[Conditions/Off-Guard|Off-Guard]] against the attack. If the monster takes piercing or slashing damage equaling or exceeding the listed Rupture value from a single attack or spell, the engulfed creature cuts itself free.\n\n[[Bestiary Effects/Effect_ Engulf and Swallow Whole|Effect: Engulf and Swallow Whole]]\n\nA creature that gets free by either method can immediately breathe and exits the swallowing monster's space.\n\nIf the monster dies, all creatures it has engulfed are automatically released as the monster's form loses cohesion."

  - name: "Sinmold Infestation"
    desc: " (poison) **Saving Throw** DC 32 Fortitude check\n\n**Maximum Duration** 6 rounds\n\n**Stage 1** 2d8 poison damage (1 round)\n\n**Stage 2** 3d8 poison damage and can hear the thoughts of root rotters within 30 feet as an imprecise sense (1 round)\n\n**Stage 3** as stage 2, but 4d8 poison damage and [[Conditions/Doomed|Doomed 1]] (1 round)\n\n**Stage 4** as stage 3, and arise as a root rotter upon death (1 round)"

  - name: "Spore Purge"
    desc: "`pf2:1` (poison) **Requirements** The sinmold has temporary Hit Points from digestion\n* * *\n\n**Effect** The sinmold loses all temporary Hit Points and releases any creatures it currently has engulfed, pushing them into the nearest unoccupied spaces. It releases a cloud of spores from its body, dealing 5d8 poison damage (DC 29 Fortitude check save) in a 20-foot emanation. Any creature that fails this save also must attempt a save against sinmold infestation."
 
```

```encounter-table
name: Sinmold
creatures:
  - 1: Sinmold
```




