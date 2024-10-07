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
  - name: "AC"
    desc: "25"
  - name: "Hardness"
    desc: "10"
  - name: "Action Type"
    desc: "`pf2:r` or `pf2:0` This is the reaction or free action the hazard uses; **Trigger** The trigger that sets off the hazard appears here; **Effect** For a simple hazard, this effect is often all the hazard does. For a complex hazard, this might also cause the hazard to roll initiative."
  - name: "Routine"
    desc: "This entry describes what a complex hazard does on each of its turns during an encounter; the number in parentheses after the word “Routine” indicates how many actions the hazard can use each turn. Simple hazards don’t have this entry."
  - name: "Action"
    desc: "Any action the hazard can use appears here. Typically, this is a melee or ranged Strike."

abilities_bot:
  - name: "Reset" 
    desc: "A creature near the upper apparatus can take a standard action to reset the trap. If the trap has attacked and been reset already, then attacks again, it must be refilled which takes 1 minute."
    
sourcebook: "_Homebrew_"
```

