---
title: Wraithwell
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - haunt
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder #209: Destroyer&#x27;s Doom
aliases: "Compendium.pf2e.triumph-of-the-tusk-bestiary.Actor.uJcZXlxeogJryyDR" 
level: 12
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #209: Destroyer's Doom"
name: "Wraithwell"
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
    desc: "An orb of undeath draws creatures closer to a cursed existence."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 27 Religion check to negate the forces of undeath (master), DC 30 Occultism check (expert) to channel vital energy, DC 35 Thievery check (master) to extricate the orb from the altar"
attacks:
  - name: ""

  - name: "Unholy Repair"
    desc: "passive The locus is sustained by the power of Tar-Baphon. The orb regains 10 Hit Points at the beginning of every round and is repaired by void damage."

  - name: "Wraith Storm"
    desc: "`pf2:r` **Trigger** A creature touches the orb or attempts to disable the haunt\n* * *\n\n**Effect** A cyclone of wraiths spirals from the orb, grasping at all living creatures in the area. Targeted creatures must succeed at a DC 32 Will check save or be [[Conditions/Doomed|Doomed 1]] ([[Conditions/Doomed|Doomed 2]] on a critical failure)."

  - name: "Undeath Manifest"
    desc: "passive A creature who dies in the presence of the orb immediately becomes undead. Casting [[Spells/Bind Undead|Bind Undead]] or [[Spells/Peaceful Rest|Peaceful Rest]] in the presence of the orb automatically destroys the locus; other spells or abilities that combat undead might also do so, at GM discretion."

  - name: "Routine"
    desc: "(1 action; void) The wraiths attack all living creatures in the area, dealing 3d10+14 void damage (DC 32 Fortitude check save). Creatures who fail their saves are [[Conditions/Drained|Drained 1]] ([[Conditions/Drained|Drained 2]] on a critical failure) or increase their drained value by 1 (2 on a critical failure), up to a maximum of [[Conditions/Drained|Drained 4]]."
  - name: "Reset"
    desc: "The haunt deactivates 1 minute after all living creatures leave the area. After 1 hour, the haunt reactivates."
```

```encounter-table
name: Wraithwell
creatures:
  - 1: Wraithwell
```

