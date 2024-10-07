---
obsidianUIMode: preview
cssclass: pf2e,pf2e-hazard
tags:
- compendium/src/pf2e/hb
- trait/environmental
- trait/fire
- trait/mechanical
- trait/trap 
aliases: ["Boiling Oil Chute"]
---
```statblock
name: "Boiling Oil"
level: "Hazard 4"

trait_01: [[environmental]]
trait_02: [[fire]]
trait_03: [[mechanical]]
trait_04: [[trap]]
layout: Basic Pathfinder 2e Layout
columns: 1
columnWidth: x

abilities_top:
  - name: "Stealth"
    desc: "DC 22 trained"
  - name: "Description"
    desc: "When triggered boiling oil is released from the chute above scalding anyone caught in the area."
    
abilities_mid:
  - name: "Disable"
    desc: "DC 25 [[Skills#Thievery|Thievery]] to jam the pressure plates which trigger the chute"
  - name: "Scald"
    desc: "`pf2:r` **Trigger**: A creature steps on the pressure plate space. **Effect** The boiling oil is dropped, dealing `dice: 4d8+10` fire damage to all creatures and objects in area (DC 21 basic Reflex save)."

abilities_bot:
  - name: "Reset" 
    desc: "A creature near the upper apparatus can take a standard action to reset the trap. If the trap has attacked and been reset already, then attacks again, it must be refilled which takes 1 minute."
    
sourcebook: "_Homebrew_"
```


