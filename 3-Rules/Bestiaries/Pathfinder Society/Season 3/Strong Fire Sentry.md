---
title: Strong Fire Sentry
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - fire
  - magical
  - trap
  - pf2eHazard
  - complex
source: Pathfinder Society Scenario #3-06: Struck by Shadows
aliases: "Compendium.pf2e.pfs-season-3-bestiary.Actor.T8rc4C98gf87869G" 
level: 3
license: OGL
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #3-06: Struck by Shadows"
name: "Strong Fire Sentry"
level: "Hazard 3"

trait_06: "Complex"
trait_01: [[fire]]
trait_02: [[magical]]
trait_03: [[trap]]
modifier: 10
sourcebook: "_Pathfinder Society Scenario #3-06: Struck by Shadows_"
ac: 19
armorclass:
  - name: AC
    desc: "19; __Fort__ +10, __Ref__ +12, "
hp: 44
health:
  - name: ""
  - name: "HP"
    desc: "44; __Hardness__ 10; __Immunities__  object immunities,  critical hits,  precision"
perception:
  - name: ""
  - name: "Stealth DC 10" 
    desc: "(trained) or DC 18 Perception check check to notice the control panel"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "A @Template[burst|distance:5] pillar of magical fire travels along a track throughout the room. The pillar emits bright light out to 20 feet."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 23 Arcana check (trained) or DC 23 Thievery check (trained) once on the control panel deactivates the whole trap, or DC 20 Thievery check (trained) twice on the track prevents the pillar from moving. Each check requires two actions."
attacks:
  - name: ""

  - name: "Flaming Circuit"
    desc: "`pf2:r` (arcane, fire) **Trigger** Skyreach's defenses are active, and a creature who is not carrying a _[[Equipment/Wayfinder|Wayfinder]]_ enters the room.\n* * *\n\n**Effect** A pillar of magical fire surges forth. The hazard rolls initiative."

  - name: "Speed 30 feet"
    desc: "passive "

  - name: "Routine"
    desc: "(2 actions) The pillar Strides, following the track in the room. If the trap's track is broken, the pillar can still Stride, but its Speed is only 15 feet. The pillar cannot move at all if the track is destroyed. When the pillar moves, it deals 1d10+6 fire damage to any creatures whose space it moves through."
  - name: "Reset"
    desc: "The trap deactivates once it no longer detects the presence of creatures in the room."
```

```encounter-table
name: Strong Fire Sentry
creatures:
  - 1: Strong Fire Sentry
```

