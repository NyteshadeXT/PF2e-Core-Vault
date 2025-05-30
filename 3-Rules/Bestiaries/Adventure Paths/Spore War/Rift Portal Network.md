---
title: Rift Portal Network
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - magical
  - trap
  - unholy
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder #212: A Voice in the Blight
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.KeIZnj0MN5yvPCEm" 
level: 19
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #212: A Voice in the Blight"
name: "Rift Portal Network"
level: "Hazard 19"

trait_06: "Complex"
trait_01: [[magical]]
trait_02: [[trap]]
trait_03: [[unholy]]
modifier: 37
sourcebook: "_Pathfinder #212: A Voice in the Blight_"
ac: 40
armorclass:
  - name: AC
    desc: "40; __Fort__ +38, __Ref__ +29, "
hp: 130
health:
  - name: ""
  - name: "HP"
    desc: "130; __Immunities__  object immunities,  critical hits,  precision; __Weaknesses__ holy 20; __Resistances__ energy 20"
perception:
  - name: ""
  - name: "Stealth DC 37" 
    desc: "(legendary) to notice the network is hazardous; noticing the rifts and mushrooms themselves has a DC of 0"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "A six-foot-tall green mushroom with red spots on its cap is connected to seven rifts in surrounding alcoves by tendrils of vapor."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 50 Nature check once to delicately cut out or destroy the seven points on the mushroom that connect to the rifts, DC 41 Religion check seven times (once per rift) to exorcise the demonic influence, or [[Spells/Planar Seal|Planar Seal]] (10th rank, counteract DC 39) to counteract the planar link in this room"
attacks:
  - name: ""

  - name: "Demonic Attention"
    desc: "`pf2:r` **Trigger** the mushroom takes damage, any of the seven rifts are touched, or any attempt to disable the network critically fails\n* * *\n\n**Effect** The demonic energies within each of the seven rifts take note, and the cacophonous sound of howling fiends fills the room. All creatures in area **D4** must attempt a DC 41 Will check save or become [[Conditions/Frightened|Frightened 1]] ([[Conditions/Frightened|Frightened 2]] on a critical failure). The hazard then rolls initiative."
  - name: "Melee"
    desc: "Rift Beam +36 (magical) No multiple attack penalty."

  - name: "Routine"
    desc: "(7 actions) Each round, each of the seven rifts fires a beam of demonic energy into the room, targeting one creature (regardless of alliance to Tanglebriar) at random. A single creature cannot be targeted by more than one rift beam per round, so if there are fewer than seven potential targets, the rift portal network loses any remaining actions for that round."
  - name: "Reset"
    desc: "The network deactivates and resets if 1 minute passes without any creature moving in area **D4** and without any attempt to disable it."
```

```encounter-table
name: Rift Portal Network
creatures:
  - 1: Rift Portal Network
```

