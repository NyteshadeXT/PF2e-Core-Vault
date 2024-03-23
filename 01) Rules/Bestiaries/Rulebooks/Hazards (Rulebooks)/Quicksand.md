---
title: Quicksand
noteType: pf2eHazard
tags:
  - environmental
  - remaster
source: Pathfinder GM Core
aliases: "Compendium.pf2e.hazards.Actor.C6nFe8SCWJ8FmLOT" 
level: 3
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder GM Core"
name: "Quicksand"
level: "Hazard 3"

trait_01: "environmental"
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
  - name: "Stealth DC 22" 
    desc: "(trained) (or -10 and no minimum proficiency if the surface is disturbed)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "A 15-foot-wide patch of water and sand attempts to submerge creatures that step onto it."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 18 Survival check (trained) to disturb the surface"
attacks:
  - name: ""

  - name: "Submerge"
    desc: "`pf2:0` **Trigger** A Huge or smaller creature walks onto the quicksand\n**Effect** The triggering creature sinks into the quicksand up to its waist. The quicksand rolls initiative if it hasn't already."

  - name: "Routine"
    desc: "(1 action) On its initiative, the quicksand pulls down each creature within it. A creature that was submerged up to its waist becomes submerged up to its neck, and a creature that was submerged up to its neck is pulled under and has to hold its breath to avoid suffocation. A creature in the quicksand can attempt a DC 20 Athletics check check to Swim to either raise itself by one step if it's submerged to its neck or worse, or to move 5 feet if it's submerged only up to its waist. On a critical failure, the creature is pulled down one step. A creature that Swims out of the quicksand escapes the hazard and is [[Conditions/Prone|Prone]] in a space adjacent to the quicksand patch. Other creatures can Aid the creature, typically by using a rope or similar aid, or attempt to pull the creature out with their own DC 20 Athletics check check, with the same results as if the creature attempted the check."
  - name: "Reset"
    desc: "The hazard still submerges anyone who walks in, but the surface doesn't become hidden again until it settles over the course of 24 hours."
```
