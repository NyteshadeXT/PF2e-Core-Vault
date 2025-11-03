---
title: Hardened Entry
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - mechanical
  - trap
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder Claws of the Tyrant
aliases: "Compendium.pf2e.claws-of-the-tyrant-bestiary.Actor.e2xLxGriCpIUzLPc" 
level: 18
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Claws of the Tyrant"
name: "Hardened Entry"
level: "Hazard 18"

trait_06: "Complex"
trait_01: [[mechanical]]
trait_02: [[trap]]
modifier: 35
sourcebook: "_Pathfinder Claws of the Tyrant_"
ac: 42
armorclass:
  - name: AC
    desc: "42; __Fort__ +33, __Ref__ +27, "
hp: 110
health:
  - name: ""
  - name: "HP"
    desc: "110, BT 55; __Hardness__ 29; __Immunities__  object immunities,  critical hits,  precision"
perception:
  - name: ""
  - name: "Stealth DC 35" 
    desc: "(master)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "A portcullis drops from the ceiling, landing with a heavy thunk. Seconds later, a cloud of acid rises from a metal grate in the floor."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 45 Athletics check to prevent the portcullis from dropping, DC 48 Crafting check (master) to create a compound to neutralize the cloud of acid, or DC 35 Thievery check (expert) to jam the pressure plate"
attacks:
  - name: ""

  - name: "Falling Portcullis"
    desc: "`pf2:r` **Trigger** A creature Strides beneath the portcullis while it is raised\n* * *\n\n**Effect** The portcullis slams down, driving its sharpened ends through a grate in the floor. Creatures directly beneath the portcullis take 3d12+20 piercing damage (DC 40 Reflex check save). The portcullis is made of adamantine and has Hardness 31 and 120 HP (BT 60). The trap then rolls initiative."

  - name: "Routine"
    desc: "(1 action) A cloud of acidic vapor rises from the grate beneath the portcullis in a 5-foot emanation. Any creature that enters the area or starts its turn inside the cloud takes 3d12+20 acid damage (DC 40 Fortitude check save). A creature that critically fails the save also takes 1d12 persistent acid damage. Each time the hazard uses this routine beyond the first, increase the radius of the emanation by 5 feet."
  - name: "Reset"
    desc: "Once triggered, the trap must be manually reset by raising the portcullis. Once all the vials are smashed, the trap can't use its routine again until the vials are replaced."
```

```encounter-table
name: Hardened Entry
creatures:
  - 1: Hardened Entry
```

