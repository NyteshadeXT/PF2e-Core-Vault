---
title: Azlanti Elemental Nexus
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - magical
  - mechanical
  - trap
  - pf2eHazard
  - complex
source: Pathfinder Society Scenario #5-02: The Blackwood Lost
aliases: "Compendium.pf2e.pfs-season-5-bestiary.Actor.X5NAhZIYG5XudA3m" 
level: 2
license: OGL
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #5-02: The Blackwood Lost"
name: "Azlanti Elemental Nexus"
level: "Hazard 2"

trait_06: "Complex"
trait_01: [[magical]]
trait_02: [[mechanical]]
trait_03: [[trap]]
modifier: 4
sourcebook: "_Pathfinder Society Scenario #5-02: The Blackwood Lost_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +11, __Ref__ +5, __Will__ +11"
hp: 34
health:
  - name: ""
  - name: "HP"
    desc: "34, Spike Hardness 7, Spike HP 10 (BT 5); __Hardness__ 7; __Immunities__  object immunities,  critical hits,  precision"
perception:
  - name: ""
  - name: "Stealth DC 4" 
    desc: "(trained)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "A large cylindrical metallic structure surrounded by dense cables and pipes, anointed with mystical runes which glow and hum vibrantly. Elemental energy arcs off three spikes that may have once been connected to some of the cables."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 18 Nature check (trained) to restart the machine's connection to an elemental plane, or DC 21 Thievery check (trained) to find and deactivate the whichever rune is currently active; three total successes are required to disable the nexus. A spike can be disabled with a DC 21 Athletics check (trained) check to rip it from the structure or a DC 18 Crafting check (trained) check to reconnect some of the cables. If all 6 elemental energies are returned to the nexus, it is disabled."
attacks:
  - name: ""

  - name: "Proximity Wave"
    desc: "`pf2:r` (primal) **Trigger** A creature without the elemental trait approaches within 15 feet of the nexus or attacks an elemental within 15 feet of the nexus\n* * *\n\n**Effect** Unstable elemental energies surrounding the machine discharge abruptly from one of the spikes, sending waves of wind, gusts of metallic shards, jets of fire and other elemental bursts across the room in various directions. The hazard makes an elemental wave Strike against the triggering creature. The hazard then rolls initiative."

  - name: "Unstable Detonation"
    desc: "`pf2:r` **Trigger** The nexus is broken or destroyed\n* * *\n\n**Effect** A ferocious gush of elemental energies bursts from the broken machine, dealing 3d6 bludgeoning damage to each creature within 15 feet (basic DC 18 Reflex check save). The trap is then disabled."
  - name: "Melee"
    desc: "Elemental Wave (Cold) +11 (range 30 feet) "

  - name: "Elemental Wave"
    desc: "action The damage of this strike varies; No multiple attack penalty. Roll 1d6 for damage type.\n\n1 cold (air)\n\n2 bludgeoning (earth)\n\n3 fire\n\n4 electric (metal)\n\n5 piercing (water)\n\n6 slashing (wood)"
  - name: "Melee"
    desc: "Elemental Wave (Bludgeoning) +11 (range 30 feet) "
  - name: "Melee"
    desc: "Elemental Wave (Fire) +11 (range 30 feet) "
  - name: "Melee"
    desc: "Elemental Wave (Electricity) +11 (range 30 feet) "
  - name: "Melee"
    desc: "Elemental Wave (Piercing) +11 (range 30 feet) "
  - name: "Melee"
    desc: "Elemental Wave (Slashing) +11 (range 30 feet) "

  - name: "Routine"
    desc: "(3 actions) The nexus spends each of its actions making an elemental wave Strike; each of these must be against a different creature who does not have the elemental trait. For each spike destroyed or disabled, the trap loses 1 action."

```

```encounter-table
name: Azlanti Elemental Nexus
creatures:
  - 1: Azlanti Elemental Nexus
```

