---
title: "Leshy Husk"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.jVgXZmgwcBAlroba" 
tags:
  - pf2e/creature/type/chaotic
  - pf2e/creature/type/evil
  - pf2e/creature/type/leshy
  - pf2e/creature/type/plant
  - pf2eMonster
  - pf2e/creature/level/0
statblock: inline
name: "Leshy Husk"
level: 0
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/leshy_husk.webp| ]]
source: "Battlezoo Bestiary"
name: "Leshy Husk"
level: "Creature 0"

alignment: ""
size: "Small"
trait_01: [[chaotic]]
trait_02: [[evil]]
trait_03: [[leshy]]
trait_04: [[plant]]
modifier: 3
perception:
  - name: "Perception"
    desc: "+3; Darkvision"
languages: "Common, Wildsong, Fey; speak with plants (trees only)"
skills:
  - name: "Skills"
    desc: "Acrobatics: +4, Nature: +5, Stealth: +6"
abilityMods: [1, 2, 2, -2, 1, 0]
speed: 25 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__ +6, __Ref__ +6, __Will__ +3"
hp: 22
health:
  - name: ""
  - name: HP
    desc: "22; __Immunities__  emotion; __Weaknesses__ fire 3"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "Necrotic Burst"
    desc: "  When a leshy husk is destroyed, a burst of negative energy explodes from its body, dealing 1d4 void damage to all creatures in a 30-foot emanation (DC 15 basic Fortitude save). This area is filled with corrupted tree saplings, becoming difficult terrain. The corrupted saplings might out-compete local plant life temporarily, but they inevitably rot after a week."

  - name: "[[Bestiary Ability Glossary/Frightful Presence|Frightful Presence]]"
    desc: " (aura,emotion,fear,mental) [[Bestiary Ability Glossary/Aura|Aura]] 30 feet, DC 12 Will"

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Blighted Branch +5 (reach 10 feet)\n__Damage__  1d8 + 1 piercing"

  - name: "Ranged"
    desc: "`pf2:1` Blighted Seedpod +6 (range increment 30 feet)\n__Damage__  1d4 bludgeoning plus draining-impact"

  - name: "Innate Primal Spells"
    desc: "DC 12, attack +4; __4th __  _[[Spells/Speak with Plants|Speak with Plants (Constant; Trees Only)]]_"

  - name: "Draining Impact"
    desc: " (primal) When the leshy husk hits an enemy with its blighted seedpod, the creature must make a DC 16 Fortitude save.\n* * *\n\n**Critical Success** The creature is unaffected and becomes immune to the leshy's draining impact for 1 hour.\n\n**Success** The creature is unaffected.\n\n**Failure** The creature takes 1d4 void damage. The leshy husk recovers Hit Points equal to the negative damage dealt.\n\n**Critical Failure** As failure, but the creature is also [[Conditions/Drained|Drained 1]]."

  - name: "[[Bestiary Ability Glossary/Change Shape|Change Shape]]"
    desc: "`pf2:1` (concentrate,polymorph,primal) The leshy husk turns into a Small dead tree or tree detritus (such as a fallen log). This ability otherwise uses the effects of _[[Spells/One with Plants|Tree Shape]]_.\n\n* * *\n"
 
```

```encounter-table
name: Leshy Husk
creatures:
  - 1: Leshy Husk
```



Diminutive leshies are often the prized friends of druids, rangers, and other nature lovers. Not so with leshy husks, whose corruption has left them devoid of whatever charm and grace they may have once possessed. Their drooping branches, gray foliage, and cracked bark skin make leshy husks stand out noticeably from their unwarped kin. Nevertheless, leshy husks excel at ambush tactics, and they ably sneak through the blighted swamps, slashed-and-burned forests, and salted plains in which they typically dwell.

As with all husks, leshy husks vary widely in their abilities depending on which type of leshy they sprouted from. The leshy husk presented here was once a tree leshy.

## Leshy Husk Minions

Stronger husks, including dryad and arboreal husks, sometimes take along leshy husks as minions and servants. Most such "husk masters" are smarter or more ambitious than typical husks of their kind, and their goals often include domination of the local area or the ruination of a nearby settlement.

## Husk

Plant creatures share a special bond with the natural world that few other beings can completely understand or appreciate. When the bond to its realm is broken or severed, a sentient plant creature's rage can transform it into a terrible shadow of its former self. Benign and even friendly plants like leshies, arboreals, and dryads all run the risk of this horrible metamorphosis, though their own agony often pales in comparison to the horrors which they inflict on their victims. Lonely, angry, and twisted, plant husks sow their monstrous madness in the fertile corpses of wanderers who dare travel through the husk's blighted swath of wilderness. Though in their eyes any living creature is worthy of obliteration, husks reserve their most horrendous punishments for any litterer, land settler, or lumberjack who ever dared to desecrate, dominate, or denude the forest.

## Monster Part Subsystem

**Leshy Husk Creature 0**

**Monster Parts** 2.25/5/9 gp

**Eligible Refinements** weapons (bludgeoning, piercing), armor (light), perception item, skill items (Acrobatics, Nature, Stealth)

**Eligible Imbued Properties** bane, chaotic, constitution, dexterity, energy resistant (positive), evil, mental, negative, sensory (darkvision), spells (Primal: speak with plants), strength, wild, wisdom
