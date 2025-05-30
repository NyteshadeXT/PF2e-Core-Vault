---
title: Void Font
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - magical
  - trap
  - unholy
  - void
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder Society Scenario #6-06: Rotten Apples
aliases: "Compendium.pf2e.pfs-season-6-bestiary.Actor.5vxVxeTTGf7Qrru1" 
level: 5
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #6-06: Rotten Apples"
name: "Void Font"
level: "Hazard 5"

trait_06: "Complex"
trait_01: [[magical]]
trait_02: [[trap]]
trait_03: [[unholy]]
trait_04: [[void]]
modifier: 13
sourcebook: "_Pathfinder Society Scenario #6-06: Rotten Apples_"
ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__ +17, __Ref__ +9, __Will__ +15"
hp: 53
health:
  - name: ""
  - name: "HP"
    desc: "53; __Hardness__ 12; __Immunities__  object immunities,  critical hits,  precision; __Weaknesses__ vitality 5"
perception:
  - name: ""
  - name: "Stealth DC 13" 
    desc: "(trained)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "The font is hidden just under the water's surface. It spews foul brown sludge into the pristine waters, leaving them reeking and polluted as they move downstream. It can be reached without swimming, but not without getting wet."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 20 Nature check (trained) to draw upon the suppressed Primal energies of this place to cleanse the font, DC 26 Religion check (expert) to suppress the void energies, DC 23 Thievery check to undo the magic sigils allowing the font to operate; two total successes are required to disable the font."
attacks:
  - name: ""

  - name: "Void Infused"
    desc: "passive The foul font can take vitality damage, even though its an object and would normally be immune"

  - name: "Spew Foulness"
    desc: "`pf2:r` (divine, unholy, void) **Trigger** One or more creatures touches the water within 10 feet of the foul font\n* * *\n\n**Effect** The font fires off a Void Geyser, causing a rain of foul water. The font then rolls for initiative."

  - name: "Void Geyser"
    desc: "action (divine, unholy, void) The font shoots its foul brown sludge into the air, and it rains down upon all creatures within 15 feet that aren't completely submerged. Each of those creatures takes 5d6 void damage (DC 22 Reflex check save). In addition, those that take damage from the font must make a DC 22 Fortitude check save.\n* * *\n\n**Critical Success** The target cannot be sickened by the font for 1 minute.\n\n**Success** The target is unaffected.\n\n**Failure** The target is [[Conditions/Sickened|Sickened 1]].\n\n**Critical Failure** The target is [[Conditions/Sickened|Sickened 2]]."

  - name: "Foul Waters"
    desc: "`pf2:0` Any creature that is submerged downstream (east) is automatically exposed to Spew Foulness at the start of its turn or when it enters those waters, except the damage is reduced with a DC 22 Fortitude check save instead of Reflex."

  - name: "Routine"
    desc: "The void font uses its actions each turn to spew a single void geyser."
  - name: "Reset"
    desc: "The void font deactivates 1 minute after all creatures leave the area but resets immediately thereafter."
```

```encounter-table
name: Void Font
creatures:
  - 1: Void Font
```

