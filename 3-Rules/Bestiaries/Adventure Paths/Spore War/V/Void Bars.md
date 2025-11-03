---
title: Void Bars
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - magical
  - trap
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder #212: A Voice in the Blight
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.MuZrjsg6cYGxkZLl" 
level: 18
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #212: A Voice in the Blight"
name: "Void Bars"
level: "Hazard 18"

trait_06: "Complex"
trait_01: [[magical]]
trait_02: [[trap]]
modifier: 35
sourcebook: "_Pathfinder #212: A Voice in the Blight_"
ac: 42
armorclass:
  - name: AC
    desc: "42; __Fort__ +33, __Ref__ +27, "
hp: 120
health:
  - name: ""
  - name: "HP"
    desc: "120; __Hardness__ 30; __Immunities__  object immunities,  critical hits,  precision; __Weaknesses__ vitality 15"
perception:
  - name: ""
  - name: "Stealth DC 35" 
    desc: "(master) to recognize the bars aren't just a passive defense; noticing the bars themselves has a DC of 0"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "Bars made of pure Void energy block access to the far side of the cell."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 45 Thievery check (master) three times to deface the well-[[Conditions/Hidden|Hidden]] focusing runes etched along the walls, or [[Spells/Dispel Magic|Dispel Magic]] (10th rank; counteract DC 38) to counteract the void bars"
attacks:
  - name: ""

  - name: "Void Pulse"
    desc: "`pf2:r` **Trigger** A living creature comes within five feet of the void bars, or the void bars take damage (the Python does not trigger this hazard, and his presence suppresses this trigger)\n* * *\n\n**Effect** Both sets of void bars pulse with dark energy, blasting waves unlife into the area. All living creatures inside the cell or within 20 feet of the cell's entrance in the outer hall must attempt a DC 40 Fortitude check save or become [[Conditions/Drained|Drained 1]] and [[Conditions/Doomed|Doomed 1]] (or [[Conditions/Drained|Drained 2]] and [[Conditions/Doomed|Doomed 2]] on a critical failure; creatures in the outer hall gain a +2 circumstance bonus on this save). If at least one PC becomes drained by a void pulse, psychic alerts ripple through the Oubliette and the party accrues 1 Awareness Point. The void bars then roll initiative."
  - name: "Melee"
    desc: "Void Talon +35 (magical, void) "

  - name: "Routine"
    desc: "(1 action) Each set of void bars manifests a long arm made of darkness that reaches out and attempts to Strike a creature in the room, favoring targets that previously damaged the bars or attempted to disable them, but otherwise choosing a target randomly from those available. This void talon can extend to attack any creature in the room or within 20 feet of the cell door in the outer hall, but targets in the outer hall gain the benefit of cover against this attack."
  - name: "Reset"
    desc: "The trap deactivates at the end of a round in which no living creatures are in the cell, then immediately resets at the start of the next round."
```

```encounter-table
name: Void Bars
creatures:
  - 1: Void Bars
```

