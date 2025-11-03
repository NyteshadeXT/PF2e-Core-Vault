---
title: Mud Pot
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - environmental
  - poison
  - pf2eHazard
  - complex
source: Pathfinder Society Scenario #3-10: Delve the Pallid Depths
aliases: "Compendium.pf2e.pfs-season-3-bestiary.Actor.538nxlPKC93GXzZh" 
level: 1
license: OGL
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #3-10: Delve the Pallid Depths"
name: "Mud Pot"
level: "Hazard 1"

trait_06: "Complex"
trait_01: [[environmental]]
trait_02: [[poison]]
modifier: 8
sourcebook: "_Pathfinder Society Scenario #3-10: Delve the Pallid Depths_"
perception:
  - name: ""
  - name: "Stealth DC 8" 
    desc: "(trained)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "Solid ground gives way to a lake of bubbling mud that burns anyone who enters and routinely belches out sulfur."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 17 Survival check (trained) to find and remove the stones blocking the flow of water to the mud pot. The water decreases the viscosity of the mud, allowing steam and sulfur to escape gradually, rather than in violent bursts, so creatures can pass through unharmed. The hazard requires two successful checks to disable. Attempting the check takes two actions."
attacks:
  - name: ""

  - name: "Belch"
    desc: "`pf2:r` **Trigger** A creature other than a sulfuric slime comes within 10 feet of the mud pot\n* * *\n\n**Effect** The hazard rolls initiative as a gaseous cloud explodes out of the mud. The triggering creature takes 1d6+3 acid damage DC 17 Reflex check"

  - name: "Sulfur Poisoning"
    desc: "passive (poison) **Saving Throw** DC 16 Fortitude check\n\n**Maximum Duration** 4 rounds\n\n**Stage 1** 1d4 poison damage\n\n**Stage 2** 1d6 poison damage and [[Conditions/Sickened|Sickened 1]] (1 round)\n\n**Stage 3** 2d6 poison damage and [[Conditions/Sickened|Sickened2]] (1 round)"

  - name: "Routine"
    desc: "(1 action) On its initiative, the mud pot belches a cloud of sickening sulfur into the small cavern. Creatures other than sulfuric slimes within 10 feet must succeed at a DC 16 Fortitude check save or be exposed to sulfur poisoning."

```

```encounter-table
name: Mud Pot
creatures:
  - 1: Mud Pot
```

