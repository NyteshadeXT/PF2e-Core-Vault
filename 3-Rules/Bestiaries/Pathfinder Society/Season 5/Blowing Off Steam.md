---
title: Blowing Off Steam
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - mechanical
  - trap
  - pf2eHazard
  - complex
source: Pathfinder Society Scenario #5-20: The Rakshasa&#x27;s Court
aliases: "Compendium.pf2e.pfs-season-5-bestiary.Actor.HwedYc7ovLW11wdu" 
level: 8
license: OGL
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #5-20: The Rakshasa's Court"
name: "Blowing Off Steam"
level: "Hazard 8"

trait_06: "Complex"
trait_01: [[mechanical]]
trait_02: [[trap]]
modifier: 18
sourcebook: "_Pathfinder Society Scenario #5-20: The Rakshasa's Court_"
ac: 25
armorclass:
  - name: AC
    desc: "25; __Fort__ +17, __Ref__ +15, "
hp: 64
health:
  - name: ""
  - name: "HP"
    desc: "64; __Hardness__ 16; __Immunities__  object immunities"
perception:
  - name: ""
  - name: "Stealth DC 18" 
    desc: "(trained); DC 28 Perception check (expert) to find the precise location of the steam vents"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "Hidden vents emit scalding hot steam made from a particularly acrid solution, irritating the eyes and throat of anyone who inhales it."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 29 Thievery check (trained) to block a vent, or DC 27 Crafting check (trained) to disable the heating element within the vent that turns the liquid into steam"
attacks:
  - name: ""

  - name: "Venting Steam"
    desc: "`pf2:r` **Trigger** A creature enters the area of the trap\n* * *\n\n**Effect** All four vents rapidly heat and let out steam for 5 seconds, filling room with a painfully acrid smell. Each creature in the room must attempt a DC 26 Fortitude check save, and the trap then rolls initiative.\n* * *\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature is [[Conditions/Sickened|Sickened 1]].\n\n**Failure** The creature is [[Conditions/Sickened|Sickened 2]] and [[Conditions/Blinded|Blinded]].\n\n**Critical Failure** The creature is [[Conditions/Sickened|Sickened 3]], and, struck by a coughing fit, falls [[Conditions/Prone|Prone]]."

  - name: "Routine"
    desc: "(4 actions) Each of the four steam vents uses a single action each to emit superheated steam, which spreads for 60 feet along the wall from its location and extends out from the wall by 30 feet, dealing 2d10+11 untyped damage to each creature in their range (DC 26 Fortitude check save). For each disabled vent, the trap loses 1 action each turn."
  - name: "Reset"
    desc: "The steam vents cease to operate 1 minute after all creatures have left the area and go into a maintenance cycle for 1 hour. After this time, they can be triggered again."
```

```encounter-table
name: Blowing Off Steam
creatures:
  - 1: Blowing Off Steam
```

