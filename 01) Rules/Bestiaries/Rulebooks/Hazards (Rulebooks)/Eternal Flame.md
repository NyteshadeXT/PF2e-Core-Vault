---
title: Eternal Flame
noteType: pf2eHazard
tags:
  - haunt
  - remaster
source: Pathfinder GM Core
aliases: "Compendium.pf2e.hazards.Actor.O0qA1ElCOgYGEBtL" 
level: 7
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder GM Core"
name: "Eternal Flame"
level: "Hazard 7"

trait_01: "haunt"
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
  - name: "Stealth DC 28" 
    desc: "(expert)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "A raging spectral inferno arises out of thin air, strengthening all undead creatures within its area. This haunt most often arises from the charred remains of a group of three people who burned to death, whether in a terrible accident or a deliberate execution, and their unavenged souls burn with rage."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 27 Diplomacy check (expert) to temporarily calm the rage of one of the three spirits, or DC 30 Religion check (trained) to exorcise one of the spirits; three total successes are required to disable the haunt"
attacks:
  - name: ""

  - name: "Searing Agony"
    desc: "`pf2:r` (mental) **Trigger** A living creature approaches within 10 feet of the remains of a victim of the original fire\n**Effect** Memories of the pain suffered by the fire's past victims assault the triggering creature's mind. The creature must attempt a DC 25 Will check save, and the haunt then rolls initiative.\n**Critical Success** The creature is unaffected.\n**Success** The creature is [[Conditions/Sickened 1|Sickened 1]].\n**Failure** The creature is [[Conditions/Sickened 1|Sickened 2]].\n**Critical Failure** The creature is [[Conditions/Sickened 1|Sickened 3]], and it is offguard for as long as it remains within the haunt's area and for 3 rounds thereafter"

  - name: "Routine"
    desc: "(1 action) Phantom flames rage across the haunted area, dealing 4d6 fire damage to each living creature within the area (DC 23 Will check save). Undead creatures in the area are infused with flames for the following round. They gain the fire trait and immunity to fire, and all their attacks deal an additional 1d6 fire damage. Objects in the area are unaffected."
  - name: "Reset"
    desc: "The flames cease 1 minute after all living creatures leave the area, but after 1 hour, the anger and pain simmer up and the haunt is ready to trigger again."
```
