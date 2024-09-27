---
title: "Fjord Linnorm"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-bestiary-2.Actor.sY3VkazdyPiMgMj1" 
tags:
  - pf2e/creature/type/amphibious
  - pf2e/creature/type/chaotic
  - pf2e/creature/type/dragon
  - pf2e/creature/type/evil
  - pf2eMonster
  - pf2e/creature/level/16
statblock: inline
name: "Fjord Linnorm"
level: 16
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/pf2e-tokens-bestiaries/portraits/draconic/linnorms/fjord-linnorm.webp| ]]
source: "Pathfinder Bestiary 2"
name: "Fjord Linnorm"
level: "Creature 16"
rare_03: [[Uncommon]]
alignment: ""
size: "grg"
trait_01: [[amphibious]]
trait_02: [[chaotic]]
trait_03: [[dragon]]
trait_04: [[evil]]
modifier: 28
perception:
  - name: "Perception"
    desc: "+28; Darkvision, Scent (Imprecise) 60 Feet, Truesight"
languages: "Aklo, Draconic, Fey"
skills:
  - name: "Skills"
    desc: "Acrobatics: +27, Athletics: +33, Stealth: +29"
abilityMods: [9, 5, 8, -3, 6, 7]
speed: 35 feet,  fly 75 feet,  swim 50 feet
sourcebook: "_Pathfinder Bestiary 2_"
ac: 40
armorclass:
  - name: AC
    desc: "40; __Fort__ +30, __Ref__ +28, __Will__ +24; +1 status to all saves vs. magic"
hp: 315
health:
  - name: ""
  - name: HP
    desc: "315, regeneration 10 (deactivated by cold iron); __Immunities__  cold,  curse,  paralyzed,  sleep; __Weaknesses__ cold iron 15"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Attack of Opportunity|Attack of Opportunity (Tail Only)]]"
    desc: "`pf2:r`  Tail only\n\n* * *\n"

  - name: "Curse of Stolen Breath"
    desc: " (curse,primal,water) When a creature slays a fjord linnorm, it must succeed at a DC 41 Will check save or become unable to ever breathe underwater (either via a natural ability or a spell such as water breathing). In addition, the victim can hold its breath only half as long as normal, and whenever it holds its breath it becomes [[Conditions/Sickened|Sickened 2]]."

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Jaws +33 (magical, reach 20 feet)\n__Damage__  3d12 + 17 piercing plus fjord-linnorm-venom"

  - name: "Melee"
    desc: "`pf2:1` Claw +33 (agile, magical, reach 20 feet)\n__Damage__  3d10 + 17 slashing"

  - name: "Melee"
    desc: "`pf2:1` Tail +33 (agile, magical, reach 25 feet)\n__Damage__  3d6 + 15 bludgeoning plus improved-grab"

  - name: "Primal Innate Spells"
    desc: "DC 37, attack +27\n__Constant__  __(7th)__ _[[Spells/Unfettered Movement|Freedom of Movement]]_ __(6th)__ _[[Spells/Truesight|True Seeing]]_"

  - name: "Breath Weapon"
    desc: "`pf2:2` (cold,primal) The fjord linnorm expels a @Template[line|distance:120] of icy bile, dealing 17d6 cold damage to creatures within the area (DC 37 Reflex check save). Any creature that fails its save is covered by the ice, which freezes and fuses with the creature's skin, giving it a -10-foot penalty to Speed. A creature can [[Actions/Escape|Escape]] or [[Actions/Force Open|Force Open]] the ice (DC 34) to free itself; otherwise, the ice remains for 1 minute.\n\nThe fjord linnorm can't use Breath Weapon again for 1d4 rounds."

  - name: "Fjord Linnorm Venom"
    desc: " (cold,poison) **Saving Throw** DC 37 Fortitude check\n\n**Maximum Duration** 10 rounds\n\n**Stage 1** 4d6 cold damage and [[Conditions/Clumsy|Clumsy 1]] (1 round)\n\n**Stage 2** 6d6 cold damage and [[Conditions/Clumsy|Clumsy 2]] (1 round)"
 
```

```encounter-table
name: Fjord Linnorm
creatures:
  - 1: Fjord Linnorm
```



Fjord linnorms make their homes in damp caves behind ice-cold waterfalls in the river-veined coastal reaches of the north. While they may appear graceful as they swim up the fjords for which they're named, they are as vile as any other of their species and take pleasures in capsizing river boats before gobbling up their terrified crews.
