---
title: Blood Shadow Mirror
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - magical
  - trap
  - pf2eHazard
  - complex
source: Pathfinder Society Scenario #5-19: Demonic Afterparty
aliases: "Compendium.pf2e.pfs-season-5-bestiary.Actor.s5vDDQbslEKjRFXX" 
level: 2
license: OGL
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #5-19: Demonic Afterparty"
name: "Blood Shadow Mirror"
level: "Hazard 2"

trait_06: "Complex"
trait_01: [[magical]]
trait_02: [[trap]]
modifier: 8
sourcebook: "_Pathfinder Society Scenario #5-19: Demonic Afterparty_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +11, __Ref__ +5, "
hp: 30
health:
  - name: ""
  - name: "HP"
    desc: "30; __Hardness__ 7; __Immunities__  critical hits,  object immunities,  precision"
perception:
  - name: ""
  - name: "Stealth DC 8" 
    desc: "(trained); DC 0 to notice the mirror without noting it is a trap"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "A dark shape moves in the surface of an ornate mirror, its eyes wide as blood seeps down its tormented face."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 16 Thievery check (trained) to fully cover the mirror or [[Spells/Dispel Magic|Dispel Magic]] (2nd rank; counteract DC 18) to dispel the mirror."
attacks:
  - name: ""

  - name: "Bloody Glare"
    desc: "`pf2:r` (arcane, mental) **Trigger** A creature spills blood in the room\n* * *\n\n**Effect** A ghastly figure of blood appears in the mirror's surface, forcing all creatures who can see it to attempt a DC 18 Fortitude check save. The trap then rolls initiative.\n\n**Success** The creature is unaffected.\n\n**Failure** The creature bleeds from their nose and mouth.\n\n**Critical Failure** As failure, and the creature is [[Conditions/Drained|Drained 1]]."

  - name: "Routine"
    desc: "(2 actions; arcane, mental) The bloody figure in the mirror transforms to reflect a creature within 30 feet. The reflection bleeds profusely from the eyes, nose, and mouth, and the reflected creature must attempt a DC 18 Will check save.\n* * *\n\n**Critical Success** The creature is unaffected and temporarily immune for 1 minute.\n\n**Success** The creature bleeds from their mouth or nose.\n\n**Failure** The creature bleeds from their eyes, mouth, and nose, and takes 1d10 persistent bleed damage.\n\n**Critical Failure** As failure, and the creature is [[Conditions/Frightened|Frightened 1]]."
  - name: "Reset"
    desc: "1 minute if no fresh blood has been spilled."
```

```encounter-table
name: Blood Shadow Mirror
creatures:
  - 1: Blood Shadow Mirror
```

