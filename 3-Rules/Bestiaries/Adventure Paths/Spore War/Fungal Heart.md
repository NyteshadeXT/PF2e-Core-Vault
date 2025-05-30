---
title: Fungal Heart
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - environmental
  - fungus
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder #210: Whispers in the Dirt
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.rvqP3hXVVLNJ3R93" 
level: 14
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #210: Whispers in the Dirt"
name: "Fungal Heart"
level: "Hazard 14"

trait_06: "Complex"
trait_01: [[environmental]]
trait_02: [[fungus]]
modifier: 28
sourcebook: "_Pathfinder #210: Whispers in the Dirt_"
ac: 36
armorclass:
  - name: AC
    desc: "36; __Fort__ +28, __Ref__ +22, __Will__ +30"
hp: 90
health:
  - name: ""
  - name: "HP"
    desc: "90; __Hardness__ 22; __Immunities__  object immunities,  acid,  critical hits,  precision; __Weaknesses__ cold 15, cold iron 15; __Resistances__ fire 15"
perception:
  - name: ""
  - name: "Stealth DC 28" 
    desc: "(master) to detect that the fungal heart is hazardous; noticing the fungal heart has a DC of 0"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "A pulsing green cluster of fungus suspended in the middle of the spherical room by thick lengths of fibrous stalks."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 33 Nature check (master) three times to carefully prune away specific tethers that keep the fungal heart active, or DC 33 Religion check (master) three times to exorcise the demonic energies from the fungal heart."
attacks:
  - name: ""

  - name: "Treerazer Notices"
    desc: "`pf2:r` (divine, emotion, fear, mental) **Trigger** The fungal heart takes damage, or an attempt to disable it fails\n* * *\n\n**Effect** A sinister voice fills the minds of all creatures in area **D1** or **D2**, speaking in Chthonian: \"And so my whelp has failed, yet you have not found salvation—you have doomed Kyonin to fall. Will you be the first to die, or shall you linger long enough to see all you hold dear become mine?\" The PCs immediately recognize this voice as belonging to Treerazer and must attempt a DC 39 Will check save or become [[Conditions/Doomed|Doomed 1]] and [[Conditions/Frightened|Frightened 2]] (or doomed 1, [[Conditions/Frightened|Frightened 4]], and [[Conditions/Fleeing|Fleeing]] for as long as they remain frightened on a critical failure). The Fungal Heart then rolls initiative."

  - name: "Routine"
    desc: "(1 action; divine, poison) The fungal heart clenches as if beating like a real heart, then exudes a churning cloud of toxic spores that fills areas **D1** and **D2**. All creatures in these areas take 10d6 poison damage (DC 34 Fortitude check save; creatures in area **D1** gain a +4 circumstance bonus to this save due to the diffusion of the spores as they wash into the larger area)."
  - name: "Reset"
    desc: "The fungal heart deactivates and resets if 3 rounds pass during which no attempts to disable or damage it take place. On subsequent activations of \"Treerazer Notices,\" no telepathic message is sent—it's simply an overwhelming sensation of imminent doom."
```

```encounter-table
name: Fungal Heart
creatures:
  - 1: Fungal Heart
```

