---
title: Haunting Echoes
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - haunt
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder Claws of the Tyrant
aliases: "Compendium.pf2e.claws-of-the-tyrant-bestiary.Actor.dRxlbmvyHJmAg7IG" 
level: 2
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Claws of the Tyrant"
name: "Haunting Echoes"
level: "Hazard 2"

trait_06: "Complex"
trait_01: [[haunt]]
modifier: 10
sourcebook: "_Pathfinder Claws of the Tyrant_"
perception:
  - name: ""
  - name: "Stealth DC 10" 
    desc: "(trained)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "The spirits of community members linger on after their tragic deaths."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 20 Diplomacy check (untrained) to [[Actions/Request|Request]] that the spirits leave or DC 18 Religion check (trained) to exorcise the spirits"
attacks:
  - name: ""

  - name: "Manifest"
    desc: "`pf2:r` (auditory, emotion, fear, mental) **Trigger** A creature the spirits knew in life enters the haunted area\n* * *\n\n**Effect** The spirits manifest with a terrible wailing. Each creature in the area must succeed at a DC 20 Will check save or be [[Conditions/Frightened|Frightened 1]] (or [[Conditions/Frightened|Frightened 2]] on a critical failure). Frightened creatures are [[Conditions/Immobilized|Immobilized]] for as long as they remain frightened. The haunt then rolls initiative."

  - name: "Routine"
    desc: "(1 action; auditory, emotion, fear, mental) The haunt attempts an Intimidation check with a +11 modifier against the Will DC of each [[Conditions/Frightened|Frightened]] creature as it bombards them with the voices of their dead loved ones.\n* * *\n\n**Critical Success** The creature takes 2d4 mental damage and its frightened condition increases by 1, to a maximum of [[Conditions/Frightened|Frightened 3]].\n\n**Success** The creature takes 1d4 mental damage.\n\n**Failure** The creature is unaffected.\n\n**Critical Failure** The creature's frightened condition is reduced by 1."
  - name: "Reset"
    desc: "The haunt falls silent for 24 hours once all frightened creatures die or reduce their frightened condition's value to 0. During this time, a creature that isn't frightened can exorcise the spirits with a DC 18 Religion check check, permanently destroying the haunt."
```

```encounter-table
name: Haunting Echoes
creatures:
  - 1: Haunting Echoes
```

