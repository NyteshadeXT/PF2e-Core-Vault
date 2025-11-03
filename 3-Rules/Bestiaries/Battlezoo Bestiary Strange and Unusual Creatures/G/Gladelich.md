---
title: "Gladelich"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-su-pf2e.pf2e-battlezoo-su-actors.Actor.ectZdcz1uVthUvOH" 
tags:
  - pf2e/creature/type/evil
  - pf2e/creature/type/plant
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/13
statblock: inline
name: "Gladelich"
level: 13
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-su-pf2e/art/Portraits/gladelich.webp| ]]
source: "Battlezoo Bestiary: Strange and Unusual"
name: "Gladelich"
level: "Creature 13"
rare_03: [[Rare]]
alignment: ""
size: "Medium"
trait_01: [[evil]]
trait_02: [[plant]]
trait_03: [[undead]]
trait_04: [[unholy]]
modifier: 26
perception:
  - name: "Perception"
    desc: "+26; Darkvision"
languages: "Common, Elven, Fey, Necril; speak with animals, speak with plants"
skills:
  - name: "Skills"
    desc: "Arcana: +22, Crafting: +24, Intimidation: +23, Medicine: +24, Nature: +30, Stealth: +22, Survival: +28"
abilityMods: [2, 3, 2, 5, 7, 4]
speed: 30 feet
sourcebook: "_Battlezoo Bestiary: Strange and Unusual_"
ac: 31
armorclass:
  - name: AC
    desc: "31; __Fort__ +19, __Ref__ +22, __Will__ +28; +1 status to all saves vs. positive"
hp: 225
health:
  - name: ""
  - name: HP
    desc: "225, negative healing, rejuvenation (see Soul Grove); __Immunities__  death effects,  disease,  paralyzed,  poison,  unconscious; __Weaknesses__ fire 10; __Resistances__ cold 10, physical 10 (except bludgeoning)"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Animal Staff (Greater)|Animal Staff (Greater)]]"
  - name: "Soul Grove"
    desc: " (consecration,plant,primal) Each gladelich has a soul grove, which allows them to rejuvenate. This area, a 40-foot emanation around the spot where the gladelichdom ritual took place, is tainted with a dread filter that perpetually sheathes the grove. Light in the area becomes dim light instead. When a gladelich is destroyed, its soul immediately transfers to its soul grove via its rejuvenation. A gladelich can be permanently destroyed only if its soul grove is found and destroyed."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Frightful Presence|Frightful Presence]]"
    desc: " (aura,emotion,fear,mental) 60 feet DC 30 Will check\n\n* * *\n"

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Withering Branch"
    desc: "+25 (finesse, magical)\n__Damage__  3d8 + 7 void plus siphon-life"

  - name: "**Ranged** `pf2:1` Needle"
    desc: "+25 (plant, primal, range increment 40 feet)\n__Damage__  3d12 piercing"

  - name: "Primal Prepared Spells"
    desc: "DC 37, attack +27; __7th __  _[[Spells/Corrosive Body|Corrosive Body]]_, _[[Spells/Execute|Finger of Death]]_; __6th __  _[[Spells/Nature's Reprisal|Nature's Reprisal]]_, _[[Spells/Necrotize|Necrotize]]_, _[[Spells/Truesight|True Seeing]]_; __5th __  _[[Spells/Toxic Cloud|Cloudkill]]_, _[[Spells/Nature's Pathway|Tree Stride]]_, _[[Spells/Wall of Stone|Wall of Stone]]_; __4th __  _[[Spells/Air Walk|Air Walk]]_, _[[Spells/Unfettered Movement|Freedom of Movement]]_, _[[Spells/Petal Storm|Petal Storm]]_; __3rd __  _[[Spells/Animal Vision|Animal Vision]]_, _[[Spells/Haste|Haste]]_, _[[Spells/Slow|Slow]]_, _[[Spells/Wall of Thorns|Wall of Thorns]]_; __2nd __  _[[Spells/Dispel Magic|Dispel Magic]]_, _[[Spells/Entangling Flora|Entangle]]_, _[[Spells/Shape Wood|Shape Wood]]_, _[[Spells/One with Plants|Tree Shape]]_; __1st __  _[[Spells/Fear|Fear]]_, _[[Spells/Fleet Step|Fleet Step]]_, _[[Spells/Gust of Wind|Gust of Wind]]_, _[[Spells/Tailwind|Longstrider]]_, _[[Spells/Vanishing Tracks|Pass Without Trace]]_\n__Cantrips__  __(7th)__ _[[Spells/Detect Magic|Detect Magic]]_, _[[Spells/Puff of Poison|Puff of Poison]]_, _[[Spells/Read Aura|Read Aura]]_, _[[Spells/Tangle Vine|Tanglefoot]]_\n__Constant__  __(4th)__ _[[Spells/Speak with Plants|Speak with Plants]]_ __(2nd)__ _[[Spells/Speak with Animals|Speak with Animals]]_"

  - name: "Siphon Life"
    desc: "`pf2:r`  **Trigger** The gladelich deals damage with its withering branch Strike\n* * *\n\n**Effect** The gladelich regains Hit Points equal to half the damage dealt."

  - name: "Dread Grove"
    desc: "  Creatures entering a gladelich's soul grove other than the gladelich and its allies become [[undefined]]. If a creature in the soul grove has dealt fire damage to any plants in the past 24 hours, they become [[undefined]] instead."

  - name: "Steady Spellcasting"
    desc: "  If a reaction would disrupt the gladelich's spellcasting action, the gladelich attempts a DC 15 Flat check. On a success, the action isn't disrupted."

  - name: "Woodland Stride"
    desc: "  The gladelich ignores difficult terrain and greater difficult terrain from non- magical foliage."
 
```

```encounter-table
name: Gladelich
creatures:
  - 1: Gladelich
```



When spellcasters seek to outsmart death, there are a number of paths to follow. One vile method is lichdom, of which there are many paths since every lich ritual is unique. While many liches are metamorphosed from arcane magic, there are other secrets available only to those with a primal inclination—the gladelich.

A gladelich is a variant of the infamous lich; however, rather than a phylactery, their source of immortality is their soul grove—a collection of trees where the ritual to transform them into a gladelich was performed. Once a soul grove arises along with the gladelich, the land becomes tainted with negative energy, and new trees can't grow there via normal means. Instead, new saplings in the soul grove sprout only from the souls of mortals who die in the grove, typically after being brought there by the gladelich. Each time a gladelich rejuvenates from a temporary demise, their new body is transmuted from a tree in their soul grove.

Potential gladeliches can pursue their undeath in three main ways. The first is to petition the vitae of the land, sometimes known as nature spirits, to grant them the necessary power in a bargain; the second is to seize the power for themselves by force; and the last is to simply be chosen by the woods, placing a mantle of responsibility on the vile spellcaster. Regardless of method, once the ritual is complete, the soul grove is theirs to ward for eternity.

## Bad Dryad

The gladelich's corruption extends beyond its soul grove. Nearby dryads may resist its evil for a time but ultimately succumb. They become the gladelich's first line of defense against those searching for the soul grove. Adventurers may think they are still in safe territory, only for the seemingly pristine forest to ambush them.

## Suggested Monster Parts

**Monster Parts** 375/840/1,560 gp

**Eligible Refinements** weapons (piercing), armor (light, medium), shield, perception item, skill items (Arcana, Crafting, Intimidation, Medicine, Nature, Stealth, Survival)

**Eligible Imbued Properties** acid, air, bane, earth, energy resistant (negative), intelligence, mental, negative, poison, spells (Primal; animal vision, cloudkill, corrosive body, detect magic, dispel magic, entangle, finger of death, haste, longstrider, nature's reprisal, necrotize, puff of poison, read aura, shape wood, slow, speak with animals, speak with plants, tanglefoot, tree shape, tree stride, true seeing, wall of stone, wall of thorns), sturdy, throwing, wild
