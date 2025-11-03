---
title: Grove of Despair
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - haunt
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder Claws of the Tyrant
aliases: "Compendium.pf2e.claws-of-the-tyrant-bestiary.Actor.KghpiMuMKd0zfGZq" 
level: 3
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Claws of the Tyrant"
name: "Grove of Despair"
level: "Hazard 3"

trait_06: "Complex"
trait_01: [[haunt]]
modifier: 12
sourcebook: "_Pathfinder Claws of the Tyrant_"
perception:
  - name: ""
  - name: "Stealth DC 12" 
    desc: "(trained)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "An eerie fog fills a lonely stretch of forest."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 22 Diplomacy check (untrained) to [[Actions/Request|Request]] that the spirits leave or DC 20 Religion check (trained) to exorcise the spirits. All creatures and objects within the fog are [[Conditions/Concealed|Concealed]], and all creatures and objects outside the fog are concealed to creatures within it."
attacks:
  - name: ""

  - name: "Despairing Whispers"
    desc: "`pf2:r` (auditory, emotion, fear, mental) **Trigger** A living creature enters the haunted area\n* * *\n\n**Effect** The spirits manifest, whispering in the minds of creatures in the fog. Each creature in the area must succeed at a DC 22 Will check save or be [[Conditions/Frightened|Frightened 1]] ([[Conditions/Frightened|Frightened 2]] on a critical failure). Frightened creatures are [[Conditions/Immobilized|Immobilized]] for as long as they remain frightened. The haunt then rolls initiative."

  - name: "Routine"
    desc: "(1 action; auditory, emotion, fear, mental) The haunt attempts an Intimidation check with a +12 modifier against the Will DC of each [[Conditions/Frightened|Frightened]] creature as it fills their minds with haunting whispers.\n* * *\n\n**Critical Success** The creature takes 4d6 mental damage and its frightened condition increases by 1, to a maximum of [[Conditions/Frightened|Frightened 3]].\n\n**Success** The creature takes 2d6 mental damage.\n\n**Failure** The creature is unaffected.\n\n**Critical Failure** The creature's frightened condition is reduced by 1."
  - name: "Reset"
    desc: "The haunt falls silent for 24 hours once all frightened creatures die or reduce their frightened condition's value to 0. During this time, a creature that isn't frightened can exorcise the spirits with a DC 20 Religion check check, permanently destroying the haunt."
```

```encounter-table
name: Grove of Despair
creatures:
  - 1: Grove of Despair
```

