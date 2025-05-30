---
title: Locus of Destruction
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - haunt
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder #209: Destroyer&#x27;s Doom
aliases: "Compendium.pf2e.triumph-of-the-tusk-bestiary.Actor.vREAP0AmJnONXzKo" 
level: 12
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #209: Destroyer's Doom"
name: "Locus of Destruction"
level: "Hazard 12"

trait_06: "Complex"
trait_01: [[haunt]]
modifier: 27
sourcebook: "_Pathfinder #209: Destroyer's Doom_"
ac: 30
armorclass:
  - name: AC
    desc: "30; __Fort__ +25, __Ref__ +19, "
hp: 82
health:
  - name: ""
  - name: "HP"
    desc: "82; __Hardness__ 20; __Immunities__  object immunities,  critical hits,  precision"
perception:
  - name: ""
  - name: "Stealth DC 27" 
    desc: "(expert)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "A magical orb drives intruders to commit acts of mindless destruction."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 27 Crafting check (master) to reconfigure the locus, DC 30 Occultism check or DC 30 Religion check (expert) to counteract the locus's energies, DC 35 Thievery check (master) to extricate the orb from the altar"
attacks:
  - name: ""

  - name: "Destruction's Fury"
    desc: "`pf2:r` (emotion, mental) **Trigger** A creature touches the orb or attempts to disable the haunt\n* * *\n\n**Effect** A destructive fury fills the minds of all living creatures in the area, who must succeed at a DC 32 Will check save or be [[Conditions/Stupefied|Stupefied 1]] ([[Conditions/Stupefied|Stupefied 2]] on a critical failure) for 1 minute. The haunt then rolls initiative."

  - name: "Destruction Manifest"
    desc: "passive Casting [[Spells/Creation|Creation]] or a creation domain spell ([[Spells/Creative Splash|Creative Splash]] or [[Spells/Artistic Flourish|Artistic Flourish]]) in the orb's presence automatically destroys the locus; other spells or abilities that create things might also do so at GM discretion."

  - name: "Unholy Repair"
    desc: "passive The locus is sustained by the power of Tar-Baphon. The orb regains 10 Hit Points at the beginning of every round and is repaired by void damage."
  - name: "Melee"
    desc: "Destructive Lash +26 () no multiple attack penalty"

  - name: "Destructive Backlash"
    desc: "`pf2:0` (void) **Trigger** The orb is damaged by an attack\n* * *\n\n**Effect** The locus makes a destructive lash Strike against the triggering creature."

  - name: "Routine"
    desc: "(1 action; mental) The destructive impulses grow stronger. Affected creatures must attempt a DC 32 Will check save; creatures who fail or critically fail can't attempt to disable the haunt that turn.\n* * *\n\n**Critical Success** The creature is unaffected and temporarily immune for 1 minute.\n\n**Success** The creature is unaffected this round.\n\n**Failure** The creature becomes [[Conditions/Confused|Confused]] for 1 round, targeting both creatures and objects.\n\n**Critical Failure** As failure but the confusion lasts for 1 minute."
  - name: "Reset"
    desc: "The haunt deactivates 1 minute after all living creatures leave the area. After 1 hour, the haunt reactivates."
```

```encounter-table
name: Locus of Destruction
creatures:
  - 1: Locus of Destruction
```

