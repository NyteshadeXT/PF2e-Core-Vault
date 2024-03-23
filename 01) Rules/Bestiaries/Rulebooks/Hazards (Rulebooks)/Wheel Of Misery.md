---
title: Wheel Of Misery
noteType: pf2eHazard
tags:
  - magical
  - mechanical
  - trap
  - remaster
source: Pathfinder GM Core
aliases: "Compendium.pf2e.hazards.Actor.H2GX04CQXLPQHT8h" 
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder GM Core"
name: "Wheel Of Misery"
level: "Hazard 6"

trait_01: "magical"
trait_02: "mechanical"
trait_03: "trap"
sourcebook: "_Pathfinder GM Core_"
armorclass:
  - name: AC
    desc: "24; __Fort__ +15, __Ref__ +13, __Will__ +0"
hp: 56
health:
  - name: ""
  - name: "HP"
    desc: "56; __Hardness__ 14; __Immunities__  object immunities,  critical hits,  precision"
perception:
  - name: ""
  - name: "Stealth DC 26" 
    desc: "(expert) to detect the magical sensor; noticing the wheel has a DC of 0"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "An ornate wheel set into a wall-divided into six segments with colored runes on each-is controlled by a magical sensor that detects any creature within 100 feet in front of it."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 26 Thievery check (expert) on the wheel to stop it from spinning, DC 22 Thievery check (master) to erase each rune, or [[Spells/Dispel Magic|Dispel Magic]] (4th rank; counteract DC 22) to counteract each rune"
attacks:
  - name: ""

  - name: "Wheel Spin"
    desc: "`pf2:r` **Trigger** A creature enters the sensor's detection area.\n**Effect** The wheel begins to spin and rolls initiative."

  - name: "Routine"
    desc: "(2 actions) On its initiative, the trap uses its first action to spin, then stops. Roll 1d6 to determine which segment is topmost when the wheel stops spinning. The wheel uses its second action to replicate the spell listed for that segment (3rd rank, DC 24, spell attack modifier +14). This spell's target is centered on or otherwise includes the nearest creature in the area. This increases the spell's range to 100 feet if necessary. Any spell cast by this trap is arcane.\n**1**[[Spells/Sleep|Sleep]]\n**2**[[Spells/Paralyze|Paralyze]]\n**3**[[Spells/Lightning Bolt|Lightning Bolt]] (100-foot line)\n**4**[[Spells/Blindness|Blindness]]\n**5**[[Spells/Caustic Blast|Caustic Blast]]\n**6**[[Spells/Enfeeble|Enfeeble]]"
  - name: "Reset"
    desc: "The trap deactivates and resets if 1 minute passes without any creature moving within range of its sensor."
```
