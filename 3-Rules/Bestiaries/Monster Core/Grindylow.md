---
title: "Grindylow"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-monster-core.Actor.sC4B1pjGrKFXhjOQ" 
tags:
  - pf2e/creature/type/aberration
  - pf2e/creature/type/amphibious
  - pf2eMonster
  - pf2e/creature/level/0
  - remaster
statblock: inline
name: "Grindylow"
level: 0
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/pf2e-tokens-bestiaries/portraits/aberrant/humanoid/grindylow.webp| ]]
source: "Pathfinder Monster Core"
name: "Grindylow"
level: "Creature 0"

alignment: ""
size: "Small"
trait_01: [[aberration]]
trait_02: [[amphibious]]
modifier: 5
perception:
  - name: "Perception"
    desc: "+5; Darkvision"
languages: "Thalassic"
skills:
  - name: "Skills"
    desc: "Athletics: +5, Stealth: +7, Survival: +5"
abilityMods: [1, 3, 2, -1, 3, 0]
speed: 10 feet,  swim 25 feet
sourcebook: "_Pathfinder Monster Core_"
ac: 15
armorclass:
  - name: AC
    desc: "15; __Fort__ +6, __Ref__ +7, __Will__ +5"
hp: 14
health:
  - name: ""
  - name: HP
    desc: "14"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Spear|Spear]]"
abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike (Special)]]"
    desc: "`pf2:r`  A grindylow gains 1 extra reaction at the start of each of their turns that they can use only to make a Reactive Strike with a tentacle. They can't use more than one Reactive Strike triggered by the same action or choice.\n\n* * *\n"

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Bite +7 (finesse)\n__Damage__  1d6 + 1 piercing"

  - name: "Melee"
    desc: "`pf2:1` Tentacle +7 (agile, finesse, trip)\n__Damage__  1d4 + 1 bludgeoning plus grab"

  - name: "Melee"
    desc: "`pf2:1` Spear +5 ()\n__Damage__  1d6 + 1 piercing"

  - name: "Ranged"
    desc: "`pf2:1` Spear +7 (thrown 20 ft.)\n__Damage__  1d6 + 1 piercing"

  - name: "Clinging Suckers"
    desc: "  When a grindylow successfully Grabs a creature larger than themself, they attach to that creature. The [[Conditions/Grabbed|Grabbed]] creature is not [[Conditions/Immobilized|Immobilized]], but if it moves, the grindylow moves with it.\n\nIf the creature is Medium or smaller, it takes a –5-foot status penalty to its Speeds while the grindylow is attached. The grindylow is [[Conditions/Off-Guard|Off-Guard]] while attached to a creature."

  - name: "Jet"
    desc: "`pf2:2` (move) The grindylow moves up to 60 feet in a straight line through the water without triggering reactions."

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  "
 
```

```encounter-table
name: Grindylow
creatures:
  - 1: Grindylow
```



The top half of a grindylow vaguely resembles a goblin, but from the waist down, their bodies split into a tangle of suckered, wriggling tentacles. Grindylows mostly dwell in shallow waters, fresh and briny, including lakes, rivers, coastal regions, and coral reefs. They generally organize into groups called schools, which can range from a few individuals to a few hundred. Smaller schools are sometimes taken over by a powerful aquatic creature, though such alliances only last until the school faces a major setback, at which point the surviving grindylows scatter and form smaller schools of their own.

Grindylows aren't territorial, but they are pragmatic. While they rarely build permanent structures, they will adopt a good hunting ground for generations until driven away by predators. They often lair in mobile shelters, such as a sargasso of seaweed or hull of an abandoned ship. They are skilled scavengers and hunters who eat anything they can sink their teeth into.

Grindylows respect the power of larger sea predators but have a special hatred for squids (or anything that resembles a squid). Sailors plying grindylow-infested waters often paint the images of squids on the bottoms of their hulls in hopes of warding off potentials raids. While this can keep smaller schools at bay, it can also backfire, potentially inciting larger groups to gather for a coordinated attack; this becomes especially likely if the ship's route is predictable. Their hatred of squids does not extend to other tentacled creatures; grindylows consider octopuses to be the epitome of grace and power.
