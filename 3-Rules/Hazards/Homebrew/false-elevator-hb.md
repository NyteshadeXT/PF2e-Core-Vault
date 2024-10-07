---
obsidianUIMode: preview
cssclass: pf2e,pf2e-hazard
tags:
- compendium/src/pf2e/hb
- trait/mechanical
- trait/trap
aliases: ["False Elevator"]
---

```statblock
name: "Gout of Flame "
level: "Hazard -1"

trait_01: [[mechanical]]
trait_02: [[trap]]
layout: Basic Pathfinder 2e Layout
columns: 1
columnWidth: x

abilities_top:
  - name: "Complexity"
    desc: "Simple"
  - name: "Stealth"
    desc: "DC 18 trained"
  - name: "Description"
    desc: "After the someone stands within the elevator the doors close and the contraption crushes everything contained within."
    
abilities_mid:
  - name: "Disable"
    desc: "[[Skills#Thievery|Thievery]] DC 18 (trained) to jam the door open."
  - name: "Action Type"
    desc: "`pf2:r` **Trigger** Someone enters the elevator; **Effect** The trap deals `dice: 2d6` 2d6 bludgeoning damage to any creature trapped within. Due to the confined space there is no saving throw to avoid."

sourcebook: "_Homebrew_"
```
