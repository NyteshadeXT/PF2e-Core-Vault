---
title: Spinning Juice Fountain
noteType: pf2eHazard
tags:
  - magical
  - trap
source: Pathfinder Society Scenario #3-12: Fury&#x27;s Toll
aliases: "Compendium.pf2e.pfs-season-3-bestiary.Actor.df7a1D5Zbv1yZIYl" 
level: 1
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #3-12: Fury's Toll"
name: "Spinning Juice Fountain"
level: "Hazard 1"

trait_01: "magical"
trait_02: "trap"
sourcebook: "_Pathfinder Society Scenario #3-12: Fury's Toll_"
armorclass:
  - name: AC
    desc: "16; __Fort__ +7, __Ref__ +5, __Will__ +0"
hp: 24
health:
  - name: ""
  - name: "HP"
    desc: "24; __Hardness__ 7; __Immunities__  object immunities,  precision"
perception:
  - name: ""
  - name: "Stealth DC 17" 
    desc: "(trained)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "The enchanted fountain spews large quantities of grape juice as its marble tiers spin with increasing speed, flinging juice in all directions."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 16 Athletics check to [[Actions/Grapple|Grapple]] a tier and halt its momentum, followed by DC 14 Crafting check or DC 14 Thievery check (while the tier is grabbed) to disable the pump mechanism through the gap that the previous checks left open. Grappling a tier requires 1 action. Each Crafting or Thievery check to disable a tier is a 2-action activity.\nThe fountain has three tiers, and fully disabling the fountain requires each tier to be disabled. For each disabled tier, the DC's to Grapple or disable another tier decrease by 2. If the creature critically succeeds at a check to disable a tier, it's immediately disabled, regardless of the number of checks that would otherwise be required due to Challenge Point adjustments."
attacks:
  - name: ""

  - name: "Begin to Spin"
    desc: "`pf2:r` **Trigger** Safa commands the fountain to start spinning at the beginning of **Event 1: Safa's Arrival**\n**Effect** The fountain sprays juice in all directions, making every square adjacent to it difficult terrain. The trap rolls initiative."

  - name: "Centrifugal Slam"
    desc: "`pf2:r` **Trigger** A creature attempts to [[Actions/Grapple|Grapple]] one of the fountain's tiers. Each tier of the fountain has one reaction per round\n**Effect** The heavy, spinning marble has enough sheer force to crush the hands of those trying to stop it. The triggering creature must attempt a DC 15 Fortitude check save before it rolls its check to Grapple the fountain.\n**Critical Success** The creature takes no damage and gains a +2 circumstance bonus to its next check to Grapple the fountain.\n**Success** The creature takes no damage.\n**Failure** The creature takes 1d6 + 3 bludgeoning damage and takes a -2 circumstance penalty to its next check to Grapple the fountain.\n**Critical Failure** The creature takes 2d6 + 3 bludgeoning damage and is flung 10 feet away from the fountain in a random direction, preventing its attempt to Grapple the fountain."

  - name: "Routine"
    desc: "(1 action) The fountain accelerates its spinning, spraying juice 10 feet in all directions on its first turn, 15 feet in all directions on its second turn, and 20 feet in all directions on its third turn. Every square where it sprays juice becomes difficult terrain. At the start of its fourth turn, the fountain breaks, disabling the hazard and flinging juice 25 feet in all directions."

```
