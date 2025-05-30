---
title: Handheld Quaker Mk 2
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - mechanical
  - trap
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder Society Scenario #6-13: All That Glitters
aliases: "Compendium.pf2e.pfs-season-6-bestiary.Actor.PbWpPT6DJR01Hwfa" 
level: 4
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #6-13: All That Glitters"
name: "Handheld Quaker Mk 2"
level: "Hazard 4"

trait_06: "Complex"
trait_01: [[mechanical]]
trait_02: [[trap]]
modifier: 14
sourcebook: "_Pathfinder Society Scenario #6-13: All That Glitters_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +15, __Ref__ +8, "
hp: 48
health:
  - name: ""
  - name: "HP"
    desc: "48; __Hardness__ 13; __Immunities__  object immunities,  critical hits,  precision"
perception:
  - name: ""
  - name: "Stealth DC 14" 
    desc: " +14"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "This small toy-like device has a hidden mechanism meant to be activated by the user, but the centuries have eroded its magical-mechanical components to the point that they activate at the slightest touch."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 22 Thievery check (trained) to deactivate the mechanism; DC 20 Crafting check (trained) to identify and repair the problem components; two successes are required to disable the hazard"
attacks:
  - name: ""

  - name: "Quake!"
    desc: "`pf2:r` **Trigger** A creature moves into a space with the handheld quaker or interacts with it\n* * *\n\n**Effect** The handheld quaker vibrates visibly and rolls initiative."

  - name: "Shaking Earth"
    desc: "passive A creature within difficult terrain created by the quaker takes a –2 circumstance penalty to Reflex saves and actions with the Manipulate trait, including [[Actions/Disable a Device|Disable Device]]."

  - name: "Routine"
    desc: "At its initiative, to determine what the quaker does, roll 1d4 and consult the following table:\n\n1: No action\n\n2: A small quake: the terrain in a 10-foot emanation centered on the quaker shakes briefly. A creature in an affected square is knocked [[Conditions/Prone|Prone]] (DC 21 Reflex check save).\n\n3: A medium quake: the terrain within the vault shakes constantly, transforming it into difficult terrain until its next turn. A creature in an affected square is knocked prone and takes 2d8 bludgeoning damage from the fall (DC 21 Reflex check save).\n\n4: A great quake: the terrain within the vault moves in waves, transforming it into greater difficult terrain until its next turn. A creature in an affected square is violently slammed to the ground, knocked prone and taking 2d8+6 bludgeoning damage (DC 25 Reflex check save)."
  - name: "Reset"
    desc: "The trap deactivates and resets if 1 minute passes without a creature being within 5' of the handheld quaker."
```

```encounter-table
name: Handheld Quaker Mk 2
creatures:
  - 1: Handheld Quaker Mk 2
```

