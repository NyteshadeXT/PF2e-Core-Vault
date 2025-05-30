---
title: "Reefclaw Spawn"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pfs-season-1-bestiary.Actor.0DudqNVGfXC39umi" 
tags:
  - pf2e/creature/type/aberration
  - pf2e/creature/type/amphibious
  - pf2e/creature/type/aquatic
  - pf2eMonster
  - pf2e/creature/level/0
statblock: inline
name: "Reefclaw Spawn"
level: 0
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #1-04: Bandits of Immenwood"
name: "Reefclaw Spawn"
level: "Creature 0"

alignment: ""
size: "Small"
trait_01: [[aberration]]
trait_02: [[amphibious]]
trait_03: [[aquatic]]
modifier: 8
perception:
  - name: "Perception"
    desc: "+8; Darkvision"
languages: "Common; can&#x27;t speak any language"
skills:
  - name: "Skills"
    desc: "Acrobatics: +5, Athletics: +2, Diplomacy: +4, Intimidation: +4, Nature: +5, Survival: +5"
abilityMods: [1, 4, 2, -3, 1, 1]
speed: 10 feet,  swim 30 feet
sourcebook: "_Pathfinder Society Scenario #1-04: Bandits of Immenwood_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +5, __Ref__ +7, __Will__ +2"
hp: 17
health:
  - name: ""
  - name: HP
    desc: "17"
abilities_top:
  - name: ""

  - name: "Special (Note)"
    desc: "  The reefclaws follow the call of the scale, but its siren song affects aquatic aberrations differently than normal animals. While in pursuit of the scale, the reefclaws gain the amphibious trait, gain a +5-foot item bonus to their Speed, and are [[Conditions/Sickened|Sickened 2]] (all adjustments already included in their stat block). The reefclaws cannot remove these conditions while within a half mile of the scale."

abilities_mid:
  - name: ""
  - name: "Death Frenzy"
    desc: "`pf2:r`  **Trigger** The reefclaw is reduced to 0 Hit Points.\n* * *\n\n**Effect** The reefclaw makes a claw Strike before dying."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Claw"
    desc: "+7 (finesse, unarmed)\n__Damage__  1d6 - 1 slashing plus grab,reefclaw-venom"

  - name: "Reefclaw Venom"
    desc: " (poison) **Saving Throw** DC 15 Fortitude check\n\n**Maximum Duration** 4 rounds\n\n**Stage 1** 1d6 poison damage and [[Conditions/Enfeebled|Enfeebled 1]](1 round),\n\n**Stage 2** 1d6 poison damage and [[Conditions/Enfeebled|Enfeebled 2]](1 round)."

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  **Requirements** The monster's last action was a successful Strike that lists Grab in its damage entry, or the monster has a creature [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]]\n* * *\n\n**Effect** If used after a Strike, the monster attempts to [[Actions/grapple|grapple]] the creature using the body part it attacked with. This attempt neither applies nor counts toward the creature's multiple attack penalty.\n\nThe monster can instead use Grab and choose one creature it's grabbing or restraining with an appendage that has Grab to automatically extend that condition to the end of the monster's next turn."
 
```

```encounter-table
name: Reefclaw Spawn
creatures:
  - 1: Reefclaw Spawn
```




