---
title: Scroll Shock Trap
noteType: pf2eHazard
tags:
  - mechanical
  - trap
source: Pathfinder Adventure: The Slithering
aliases: "Compendium.pf2e.the-slithering-bestiary.Actor.ILF7Azqi2TM6ktl9" 
level: 9
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Adventure: The Slithering"
name: "Scroll Shock Trap"
level: "Hazard 9"

trait_01: "mechanical"
trait_02: "trap"
sourcebook: "_Pathfinder Adventure: The Slithering_"
armorclass:
  - name: AC
    desc: "28; __Fort__ +21, __Ref__ +15, __Will__ +0"
hp: 64
health:
  - name: ""
  - name: "HP"
    desc: "64, See Symbol and Panel Stats; __Hardness__ 16; __Immunities__  object immunities,  critical hits,  precision; __Resistances__ electricity 15"
perception:
  - name: ""
  - name: "Stealth DC 27" 
    desc: "(expert) or DC 29 Perception check (expert) to spot the control panel"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "Five scroll symbols shoot electricity bolts around the room."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 25 Thievery check (expert) or [[Spells/Dispel Magic|Dispel Magic]] (3rd level; counteract DC 24)\nDC 29 Thievery check (master) to disable the entire trap from the hidden control panel beneath the central slab."
attacks:
  - name: ""

  - name: "Symbol Stats (Each)"
    desc: "passive **Hardness** 16\n**HP** 64 (BT 32)\n**Resistances** Electricity 15\n**Immunities** Critical Hits, Object Immunities, Precision Damage"

  - name: "Control Panel Stats"
    desc: "passive **Hardness** 18\n**HP** 72 (BT 36)\n**Resistances** Electricity 15\n**Immunities** Critical Hits, Object Immunities, Precision Damage"

  - name: "Reactive Charge"
    desc: "`pf2:r` (arcane) **Trigger** A creature without an Aspis Consortium badge approaches within 5 feet of a slab\n**Effect** Both double doors leading out of the room shut and lock. While the trap is active, the doors must be battered open (Hardness 18; Panel HP 72 \[BT 36\]; DC 29 Athletics check to [[Actions/Force Open|Force Open]]). The closest symbol to the triggering creature shoots an electricity bolt attack at it. The trap then rolls initiative."

  - name: "No Multiple Attack Penalty"
    desc: "passive "
  - name: "Melee"
    desc: "Electrical Bolt +21 (range 40 feet) "

  - name: "Routine"
    desc: "(5 actions) Each disabled symbol reduces the trap's number of actions by 1.\nFor each of its actions, a different symbol shoots an electricity bolt at a random creature in the room. The trap doesn't take multiple attack penalties."
  - name: "Reset"
    desc: "The trap deactivates 1 round after it has no target creatures and resets after 1 minute."
```
