---
title: "Unraveler"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.1ZdgJWCnraWoNewl" 
tags:
  - pf2e/creature/type/astral
  - pf2e/creature/type/chaotic
  - pf2eMonster
  - pf2e/creature/level/7
statblock: inline
name: "Unraveler"
level: 7
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/unraveler.webp| ]]
source: "Battlezoo Bestiary"
name: "Unraveler"
level: "Creature 7"
rare_03: [[Uncommon]]
alignment: ""
size: "Medium"
trait_01: [[astral]]
trait_02: [[chaotic]]
modifier: 18
perception:
  - name: "Perception"
    desc: "+18; Darkvision"
languages: "Aklo; telepathy 60 feet"
skills:
  - name: "Skills"
    desc: "Acrobatics: +19, Arcana: +16, Nature: +16, Occultism: +16, Entropy Lore: +16"
abilityMods: [5, 6, 4, 5, 3, 2]
speed: 25 feet,  fly 40 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 25
armorclass:
  - name: AC
    desc: "25; __Fort__ +14, __Ref__ +20, __Will__ +15; +1 status to all saves vs. transmutation"
hp: 90
health:
  - name: ""
  - name: HP
    desc: "90; __Immunities__  sleep; __Resistances__ physical 5"
abilities_top:
  - name: ""

  - name: "Starskin"
    desc: " (light,occult) An unraveler constantly sheds dim light in a 40-foot radius, shining like starlight."

  - name: "Voidflight"
    desc: " (concentrate,move) **Requirements** The unraveler is on the Astral Plane, Limbo, or in vacuum (such as outer space);\n\n**Effect** The unraveler travels long distances at an unimaginable speed. While using Voidflight, an unraveler can reach nearby worlds in 2d12 hours, nearby solar systems in 2d4 days, or other regions of space in 2d6 weeks. On the Astral Plane or Limbo, an unraveler can reach any location with which it is familiar in just 1d10 hours."

abilities_mid:
  - name: ""
  - name: "Entropic Reprisal"
    desc: "`pf2:r`  **Trigger** The unraveler is damaged by a melee weapon;\n* * *\n\n**Effect** The wielder of the triggering weapon must attempt a DC 22 Reflex saving throw. On a failure, the triggering weapon is affected by Unravel."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Unraveling Lash"
    desc: "+17 (finesse)\n__Damage__  1d6 + 8 bludgeoning plus unravel 1d6 spirit plus unravel"

  - name: "**Ranged** `pf2:1` Entropic Ray"
    desc: "+17 (magical, range increment 100 feet)\n__Damage__  2d8 + 8 spirit"

  - name: "Occult Innate Spells"
    desc: "DC 24, attack +16; __7th __ (1 slots) _[[Spells/Interplanar Teleport|Plane Shift (Astral Plane, Material Plane, and Limbo only)]]_; __4th __ (3 slots) _[[Spells/Mending|Mending]]_, _[[Spells/Mending|Mending]]_, _[[Spells/Mending|Mending]]_\n__Cantrips__  __(4th)__ _[[Compendium.pf2e.spells-srd.Item.kl2q6JvBZwed4B6v|Dancing Lights]]_, _[[Spells/Detect Magic|Detect Magic]]_, _[[Spells/Know the Way|Know Direction]]_, _[[Spells/Telekinetic Hand|Mage Hand]]_"

  - name: "Unravel"
    desc: " (magical,occult) Creatures or objects hit by an unraveler's Entropic Reprisal or unraveling lash Strike begin to physically fall apart at the seams like frayed rope. A creature or object affected by unravel takes 2d8 persistent slashing damage.\n\nAs long as a creature is taking this persistent damage (\"unraveling\"), it is [[Conditions/Sickened|Sickened 1]]. A creature wielding an unraveling weapon takes a -1 penalty to attack rolls, and a creature wearing unraveling armor reduces the armor's item bonus to AC by 1 (to a minimum of +0). An unraveling object makes a flat check each round, just like a creature, to stop the persistent damage.\n\nAn unraveler can cast _[[Spells/Mending|Mending]]_ on any unraveling object or creature to immediately end the persistent damage.\n* * *\n\n[[Effects/Effect_ Unravel (Weapon)|Effect: Unravel (Weapon)]]\n\n[[Effects/Effect_ Unravel (Armor)|Effect: Unravel (Armor)]]"

  - name: "Focus Entropy"
    desc: "`pf2:2` (concentrate,occult) The unraveler funnels the forces of entropy toward a single point in space. The unraveler targets an adjacent creature or object currently affected by unravel. The target's persistent slashing damage is doubled for 1 round."
 
```

```encounter-table
name: Unraveler
creatures:
  - 1: Unraveler
```



With their small gray bodies, striped conical heads, tattooed flesh, and constantly wriggling head-tentacles, unravelers make their utterly alien nature known at first glance. These strange beings are messengers and scholars of entropy, an interest that typically makes them unexpected guests at best or destructive invaders at worst.

Unsurprisingly for a being of pure chaos, it can be difficult to predict an unraveler's actions and motives. At times, an unraveler might visit only to sate its curiosity via harmless observation or inquiry; other times, it might be delivering a message for powerful beings across planes or great distances; still other times, it might go about unraveling everything in its path for reasons other beings simply cannot fathom.

## Unraveled Art

Some unravelers use their powers to create great works of abstract art, partially unraveling objects and materials into beautiful arrangements. Such unravelers substitute Crafting for the Nature or Occultism skill and can cast a 4th-level [[Spells/Slow|Slow]] spell three times per day.

## Monster Part Subsystem

**Unraveler Creature 7**

**Monster Parts** 45/100/180 gp

**Eligible Refinements** weapons (bludgeoning, slashing), armor (light, medium), shield, perception item, skill items (Acrobatics, Arcana, Lore \[Entropy\], Nature, Occultism)

**Eligible Imbued Properties** bane, chaotic, dexterity, energy resistant (positive), intelligence, mental, sensory (darkvision), spells (Occult: dancing lights, detect magic, know direction, mage hand, mending, plane shift), strength, sturdy, wild, winged
