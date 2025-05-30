---
title: "Ice Zuggle"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.ChLImKXE82rV2foE" 
tags:
  - pf2e/creature/type/chaotic
  - pf2e/creature/type/cold
  - pf2e/creature/type/elemental
  - pf2e/creature/type/water
  - pf2eMonster
  - pf2e/creature/level/2
statblock: inline
name: "Ice Zuggle"
level: 2
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/zuggle.webp| ]]
source: "Battlezoo Bestiary"
name: "Ice Zuggle"
level: "Creature 2"

alignment: ""
size: "Small"
trait_01: [[chaotic]]
trait_02: [[cold]]
trait_03: [[elemental]]
trait_04: [[water]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; Low-Light Vision"
languages: ""
skills:
  - name: "Skills"
    desc: "Athletics: +5, Stealth: +9, Survival: +7"
abilityMods: [1, 3, 4, -4, 3, 0]
speed: 20 feet,  climb 20 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 17
armorclass:
  - name: AC
    desc: "17 (20 in Defensive Ball); __Fort__ +10, __Ref__ +7, __Will__ +5"
hp: 30
health:
  - name: ""
  - name: HP
    desc: "30; __Immunities__  bleed,  cold,  paralyzed,  poison,  sleep; __Weaknesses__ fire 5"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "3x Zuggle Orbs"
  - name: "Element Sense"
    desc: "  Zuggles can detect sources of elemental magic within the listed range as an imprecise sense. This includes any creatures, spells, or abilities with the elemental, air, earth, fire, or water trait."

  - name: "Zuggle Orbs"
    desc: "  Ice Zuggles have 1d6+2 Zuggle Orbs\n* * *\n\nZuggles naturally produce fist-sized globules of element-infused protein, which they store in specialized pouches that run the length of their spine near their fin. A zuggle can launch these globules at predators for self-defense, but alchemists and others prize these \"zuggle orbs\" for their unique magical properties and take care to extract them without scaring or hurting the zuggle."

abilities_mid:
  - name: ""
  - name: "Defensive Ball"
    desc: "`pf2:r` (manipulate) **Trigger** The zuggle is hit with a melee or ranged attack;\n\n**Effect** The zuggle curls into a defensive ball, granting it a +3 circumstance bonus to AC against the triggering attack. While in its defensive ball form, the zuggle's AC increases to 20, it can't perform melee Strikes, and it is [[Conditions/Immobilized|Immobilized]] until it spends an action to roll out of its ball (this action has the manipulate trait)."

  - name: "Elemental Absorption"
    desc: "`pf2:0`  Ice zuggles feed on cold energy, but too much can cause them to explode.\n\n**Trigger** The ice zuggle is hit by an effect that deals cold damage, but the damage hasn't yet been rolled;\n\n**Effect** The ice zuggle absorbs the energy, regaining Hit Points equal to the cold damage that would have been dealt. If this heals the zuggle in excess of its maximum HP, it gains the excess amount as temporary HP. If this would give the zuggle more than 15 temporary HP, it immediately explodes, dealing 4d4 cold damage in a 10-foot burst (DC 18 Reflex check save)."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Horn"
    desc: "+7 ()\n__Damage__  1d4 + 1 piercing"

  - name: "**Ranged** `pf2:1` Zuggle Orb"
    desc: "+9 (cold, primal, range increment 20 feet)\n__Damage__  1d8 + 3 cold"
 
```

```encounter-table
name: Ice Zuggle
creatures:
  - 1: Ice Zuggle
```



These unassuming critters are a common sight on the elemental planes, where they crawl about in search of sustenance. Though their cute appearance is disarming and they are typically prey to the more powerful denizens of their home planes, zuggles still pose a threat to unwary or unprepared plane hoppers.

Dozens of varieties of zuggle exist—from common rock and fire zuggles to more exotic types like sirocco, mud, and brine zuggles. Nearly all zuggles share the same basic form, which resembles a large caterpillar or wood weevil made of elemental matter. Each zuggle has a central fin along its backside that expands to detect and absorb ambient elemental auras. Other than its fin, the body of a zuggle can vary greatly depending on what type of elemental aura it has recently absorbed. A zuggle on the Plane of Water might have fins and gills, whereas a zuggle on the Plane of Earth might have a rocky carapace and claws. Elsewhere in the multiverse, zuggles can be found trying to feed off of any elemental auras that they can get. In places suffused with all kinds of elemental magic, a zuggle might have a truly bizarre anatomy and might have any number of unique abilities.

While they aren't friendly by any means, zuggles are curious in a way that is often mistaken for an endearing disposition. It is not uncommon for a zuggle to follow around a spellcaster and sup up any spilled elemental byproducts from cast spells. A starving zuggle might display erratic behavior or aggression when it finally comes upon a source of elemental power. There have even been a few instances of a starving zuggle exploding after feasting too quickly on a potent elemental source.

## Zuggle Orbs

Zuggles naturally produce fist-sized globules of element-infused protein, which they store in specialized pouches that run the length of their spine near their fin. A zuggle can launch these globules at predators for self-defense, but alchemists and others prize these "zuggle orbs" for their unique magical properties and take care to extract them without scaring or hurting the zuggle.

## Monster Part Subsystem

**Ice Zuggle Creature 2**

**Monster Parts** 5/12/22 gp

**Eligible Refinements** weapons (piercing), armor (light, medium), perception item, skill items (Athletics, Stealth, Survival)

**Eligible Imbued Properties** bane, chaotic, cold, constitution, dexterity, energy resistant (cold, positive), sensory (low-light vision), wild, wisdom
