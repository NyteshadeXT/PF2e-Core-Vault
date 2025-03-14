---
title: "Sard"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-bestiary-2.Actor.eD1kydftMIp4CL2K" 
tags:
  - pf2e/creature/type/chaotic
  - pf2e/creature/type/electricity
  - pf2e/creature/type/evil
  - pf2e/creature/type/plant
  - pf2e/creature/type/tane
  - pf2eMonster
  - pf2e/creature/level/19
statblock: inline
name: "Sard"
level: 19
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/pf2e-tokens-bestiaries/portraits/plant/sard.webp| ]]
source: "Pathfinder Bestiary 2"
name: "Sard"
level: "Creature 19"
rare_03: [[Rare]]
alignment: ""
size: "grg"
trait_01: [[chaotic]]
trait_02: [[electricity]]
trait_03: [[evil]]
trait_04: [[plant]]
trait_05: [[tane]]
modifier: 35
perception:
  - name: "Perception"
    desc: "+35; Low-Light Vision, Tremorsense (Imprecise) 120 Feet"
languages: "Aklo, Arboreal, Common, Fey"
skills:
  - name: "Skills"
    desc: "Acrobatics: +33, Athletics: +37, Nature: +31"
abilityMods: [10, 6, 6, 2, 6, 6]
speed: 40 feet,  climb 25 feet
sourcebook: "_Pathfinder Bestiary 2_"
ac: 43
armorclass:
  - name: AC
    desc: "43; __Fort__ +35, __Ref__ +31, __Will__ +33; +1 status to all saves vs. magic"
hp: 400
health:
  - name: ""
  - name: HP
    desc: "400; __Immunities__  electricity; __Weaknesses__ cold iron 15; __Resistances__ fire 15, physical 15 (except slashing)"
abilities_top:
  - name: ""

  - name: "Planar Acclimation"
    desc: "  The sard treats the plane it is located on as its home plane."

abilities_mid:
  - name: ""
  - name: "Splintering Death"
    desc: " (electricity,primal) When the sard dies, its body explodes in a @Template[emanation|distance:30]. All creatures in the area take 10d6 electricity damage and 10d6 piercing damage (DC 43 Reflex check save). Any creature that takes piercing damage is also exposed to sard venom."

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Trunk +37 (fatal d12, reach 20 feet)\n__Damage__  4d6 + 18 bludgeoning 3d6 electricity"

  - name: "Melee"
    desc: "`pf2:1` Branch +37 (agile, reach 20 feet)\n__Damage__  4d8 + 18 piercing plus sard-venom"

  - name: "Melee"
    desc: "`pf2:1` Root +37 (reach 10 feet)\n__Damage__  4d6 + 18 bludgeoning 1d6 electricity"

  - name: "Ranged"
    desc: "`pf2:1` Thorn +35 (deadly d10, primal, propulsive, range increment 180 feet)\n__Damage__  4d4 + 16 piercing plus sard-venom"

  - name: "Primal Innate Spells"
    desc: "DC 41, attack +31; __9th __  _[[Spells/Storm of Vengeance|Storm of Vengeance]]_; __8th __  _[[Spells/Punishing Winds|Punishing Winds]]_, _[[Spells/Nature's Pathway|Tree Stride]]_; __7th __  _[[Spells/Chain Lightning|Chain Lightning (x3)]]_"

  - name: "Rituals"
    desc: "_[[Spells/Control Weather|Control Weather (Doesn't require secondary casters)]]_"

  - name: "Lightning-Struck Curse"
    desc: "`pf2:r` (curse,primal) **Trigger** The sard is about to damage a creature that has electricity resistance\n* * *\n\n**Effect** An instant before the target takes the electricity damage from the triggering event, the sard's electrical sparks glow red. The target must succeed at a DC 41 Will check save or lose any electricity resistance it has until this curse is lifted."

  - name: "Sard Venom"
    desc: " (poison,primal,virulent) **Saving Throw** DC 41 Fortitude check\n\n**Maximum Duration** 10 rounds\n\n**Stage 1** 2d6 electricity damage, 2d6 poison damage, and [[Conditions/Clumsy|Clumsy 2]] (1 round)\n\n**Stage 2** 3d6 electricity damage, 3d6 poison damage, [[Conditions/Clumsy|Clumsy 2]], and [[Conditions/Slowed|Slowed 1]] (1 round)\n\n**Stage 3** 4d6 electricity damage, 4d6 poison damage, [[Conditions/Clumsy|Clumsy 2]], and [[Conditions/Slowed|Slowed 2]] (1 round)"

  - name: "Thorn Volley"
    desc: "`pf2:2`  The sard makes up to four thorn Strikes, each against a different target. The sard's multiple attack penalty doesn't increase until after all the attacks have been made."

  - name: "[[Bestiary Ability Glossary/Trample|Trample]]"
    desc: "`pf2:3`  Huge or smaller, root, DC 39 Reflex check\n\n* * *\n"
 
```

```encounter-table
name: Sard
creatures:
  - 1: Sard
```



An immense, gnarled, tree awoken with raw, primal power by one of the fey Eldest of the First World, this monster-one of the legendary Tane-skitters on huge, spidery roots and thrashes its branches as fiery lightning courses within its blackened bark, a living manifestation of the violent clash between ancient forest and stormy sky.
