---
title: Summoning Rune
noteType: pf2eHazard
tags:
  - magical
  - trap
  - remaster
source: Pathfinder GM Core
aliases: "Compendium.pf2e.hazards.Actor.nO4osrBRnpWKFCMP" 
level: 1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder GM Core"
name: "Summoning Rune"
level: "Hazard 1"

trait_01: "magical"
trait_02: "trap"
sourcebook: "_Pathfinder GM Core_"
armorclass:
  - name: AC
    desc: "10; __Fort__ +0, __Ref__ +0, __Will__ +0"
hp: 0
health:
  - name: ""
  - name: "HP"
    desc: "0; __Immunities__  object immunities"
perception:
  - name: ""
  - name: "Stealth DC 17" 
    desc: "(trained)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "A cloud of invisible magical sensors in a 10-foot radius surrounds an invisible wall or floor rune the size of the creature to be summoned."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 15 Acrobatics check to approach without triggering the trap followed by DC 17 Thievery check (trained) to erase the rune, or [[Spells/Dispel Magic|Dispel Magic]] (1st rank; counteract DC 15) to counteract the rune"
attacks:
  - name: ""

  - name: "Summon Monster"
    desc: "`pf2:r` (arcane, summon) **Trigger** A creature enters the cloud of magical sensors\n**Effect** This trap summons a specific 1st-level creature, determined when the trap is created. The creature rolls initiative and remains for 2d6 rounds, after which the spell ends and the creature disappears. The creature also disappears if someone disables the trap before the duration expires. The summoned creature can use 3 actions each round and can use reactions, unlike most summoned creatures."


  - name: "Reset"
    desc: "The trap resets each day at dawn."
```