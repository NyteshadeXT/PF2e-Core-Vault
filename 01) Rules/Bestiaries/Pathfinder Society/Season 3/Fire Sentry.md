---
title: Fire Sentry
noteType: pf2eHazard
tags:
  - fire
  - magical
  - trap
source: Pathfinder Society Scenario #3-06: Struck by Shadows
aliases: "Compendium.pf2e.pfs-season-3-bestiary.Actor.cm09iVg6JGpCu3Rh" 
level: 1
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #3-06: Struck by Shadows"
name: "Fire Sentry"
level: "Hazard 1"

trait_01: "fire"
trait_02: "magical"
trait_03: "trap"
sourcebook: "_Pathfinder Society Scenario #3-06: Struck by Shadows_"
armorclass:
  - name: AC
    desc: "16; __Fort__ +8, __Ref__ +10, __Will__ +0"
hp: 24
health:
  - name: ""
  - name: "HP"
    desc: "24; __Hardness__ 5; __Immunities__  object immunities,  critical hits,  precision"
perception:
  - name: ""
  - name: "Stealth DC 17" 
    desc: "(trained) or DC 15 Perception check check to notice the control panel"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "A 5-foot burst pillar of magical fire travels along a track throughout the room. The pillar emits bright light out to 20 feet."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 20 Arcana check (trained) or DC 20 Thievery check (trained) once on the control panel deactivates the whole trap, or DC 17 Thievery check (trained) twice on the track prevents the pillar from moving. Each check requires two actions."
attacks:
  - name: ""

  - name: "Flaming Circuit"
    desc: "`pf2:r` (arcane, fire) **Trigger** Skyreach's defenses are active, and a creature who is not carrying a _[[Equipment/Wayfinder|Wayfinder]]_ enters the room.\n**Effect** A pillar of magical fire surges forth. The hazard rolls initiative."

  - name: "Speed 20 feet"
    desc: "passive "

  - name: "Routine"
    desc: "(2 actions) The pillar Strides, following the track in the room. If the trap's track is broken, the pillar can still Stride, but its Speed is only 10 feet. The pillar cannot move at all if the track is destroyed. When the pillar moves, it deals 1d6 + 3 fire damage to any creatures whose space it moves through."
  - name: "Reset"
    desc: "The trap deactivates once it no longer detects the presence of creatures in the room."
```
