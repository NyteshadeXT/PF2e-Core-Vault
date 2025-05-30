---
title: Soul Pod
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - haunt
  - fungus
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder #211: The Secret of Deathstalk Tower
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.fOSglTDVvg1YBCtz" 
level: 15
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #211: The Secret of Deathstalk Tower"
name: "Soul Pod"
level: "Hazard 15"

trait_06: "Complex"
trait_01: [[haunt]]
trait_02: [[fungus]]
modifier: 30
sourcebook: "_Pathfinder #211: The Secret of Deathstalk Tower_"
ac: 37
armorclass:
  - name: AC
    desc: "37; __Fort__ +29, __Ref__ +23, __Will__ +29"
hp: 96
health:
  - name: ""
  - name: "HP"
    desc: "96; __Hardness__ 24; __Immunities__  object immunities,  acid,  critical hits,  precision; __Weaknesses__ cold iron 15, holy 15"
perception:
  - name: ""
  - name: "Stealth DC 30" 
    desc: "(master)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "An oblong, puffball-like fungus shaped ominously like a bulging coffin in which Aravashnial's distorted face can be seen silently screaming."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 40 Religion check three times to exorcise Aravashnial's soul from a pod, or DC 43 Nature check twice to pull the well-hidden filaments that connect the spore pod to the rest of the spires"
attacks:
  - name: ""

  - name: "Soulrending Shriek"
    desc: "`pf2:r` (divine, emotion, mental) **Trigger** A round begins after all demons in the spires have been slain\n* * *\n\n**Effect** Aravashnial's distorted face unleashes an overwhelming shriek of agony that threatens to completely warp the thoughts of all intruders. All creatures within 20 feet of a soul pod must succeed at a DC 36 Will check save or become [[Conditions/Confused|Confused]] for 1 round (1 minute on a critical failure). A confused creature can attempt a new save at the end of each of their turns to end the confusion early. The soul pods then roll initiative."

  - name: "Routine"
    desc: "(2 actions) The soul pod releases a soulrending shriek on its first action, then on its second action exhales a blast of spore-laden wind in a 40-foot cone. Creatures in this area must attempt a DC 36 Fortitude check save. This blast has the air and poison traits.\n* * *\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature takes 4d6 poison damage.\n\n**Failure** The creature takes 8d6 poison damage and is knocked [[Conditions/Prone|Prone]] by the wind.\n\n**Critical Failure** The creature takes 16d6 poison damage, is knocked prone, and is blown 10 feet backward directly away from the soul pod, possibly being blown off the edge of a platform or stairwell."
  - name: "Reset"
    desc: "A soul pod deactivates once no PCs are in the spires, then resets automatically."
```

```encounter-table
name: Soul Pod
creatures:
  - 1: Soul Pod
```

