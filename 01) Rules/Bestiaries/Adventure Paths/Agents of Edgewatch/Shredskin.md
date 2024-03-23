---
title: "Shredskin"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.eQc0ADMuHl1JzL8z" 
tags:
  - pf2e/creature/type/evil
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2e/creature/level/2
statblock: inline
name: "Shredskin"
level: 2
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #157: Devil at the Dreaming Palace"
name: "Shredskin"
level: "Creature 2"

alignment: ""
size: "tiny"
trait_01: "evil"
trait_02: "undead"
trait_03: "unholy"
modifier: 11
perception:
  - name: "Perception"
    desc: "+11; Darkvision"
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +10, Athletics: +8, Deception: +8, Stealth: +8"
abilityMods: [2, 4, 0, -1, 0, 2]
speed:  fly 30 feet
sourcebook: "_Pathfinder #157: Devil at the Dreaming Palace_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +6, __Ref__ +10, __Will__ +8"
hp: 30
health:
  - name: ""
  - name: HP
    desc: "30; __Immunities__  critical hits (except slashing),  death effects,  disease,  mental,  paralyzed,  poison,  precision,  unconscious"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Claws +10 (agile)\n__Damage__  1d6 + 4 slashing plus grab"

  - name: "Melee"
    desc: "`pf2:1` Jaws +11 ()\n__Damage__  1d8 + 4 piercing"

  - name: "Compression"
    desc: "  When a shredskin successfully [[Actions/Squeeze|Squeezes]], it moves through the tight space at full speed. Narrow confines are not difficult terrain for a shredskin."

  - name: "[[Bestiary Ability Glossary/Constrict|Constrict]]"
    desc: "`pf2:1`  1d4 + 4 bludgeoning damage, DC 16 Fortitude check\n"

  - name: "Control Body"
    desc: "`pf2:1`  **Requirements** The shredskin is adjacent to a Medium or Small humanoid-shaped corpse\n**Effect** The shredskin wraps itself around the corpse and takes control of the host body. While controlling a host, the shredskin uses the host's Speed but its own attacks, and it loses its Grab and Enshroud abilities.\nAttacks that target the shredskin while it controls a body deal half of the damage to the shredskin and half of the damage to the host body. Attacks that target an area deal damage to both the shredskin and host body normally.\nThe shredskin can release the host body as a free action at the start of its turn. If the host is destroyed, the shredskin automatically releases the body and is [[Conditions/Off-Guard|Off-Guard]] for 1 round. A Medium corpse typically has 15 hit points, while a Small corpse typically has 10 Hit Points.\nCreatures can notice that a corpse is controlled by a shredskin by succeeding a Perception check against the shredskin's Deception DC."

  - name: "Enshroud"
    desc: "`pf2:1`  **Requirements** The shredskin is grabbing a creature\n**Effect** The shredskin attempts to pin the creature and wrap itself around the creature like a shirt. The shredskin rolls an Athletics check check against the creature's Fortitude DC.\nOn a success, the creature becomes [[Conditions/Restrained|Restrained]] and the shredskin can take control of the creature as if using Control Body.\nAt the start of its turn, the shredskin can automatically Constrict the enshrouded creature as a free action.\nAn enshrouded creature can attempt a DC 16 [[Actions/Escape|Escape]] check to break free (DC 18 if the shredskin critically succeeded its Athletics check to Enshroud)."

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  "
 
```

```encounter-table
name: Shredskin
creatures:
  - 1: Shredskin
```



