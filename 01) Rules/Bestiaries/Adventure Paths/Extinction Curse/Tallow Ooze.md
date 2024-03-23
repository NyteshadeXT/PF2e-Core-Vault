---
title: "Tallow Ooze"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.extinction-curse-bestiary.Actor.BORxkpaFBSCyB1f1" 
tags:
  - pf2e/creature/type/mindless
  - pf2e/creature/type/ooze
  - pf2e/creature/level/11
statblock: inline
name: "Tallow Ooze"
level: 11
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #154: Siege of the Dinosaurs"
name: "Tallow Ooze"
level: "Creature 11"

alignment: ""
size: "Medium"
trait_01: "mindless"
trait_02: "ooze"
modifier: 14
perception:
  - name: "Perception"
    desc: "+14; Motion Sense (Precise) 60 Feet"
skills:
  - name: "Skills"
    desc: "Athletics: +23"
abilityMods: [6, -5, 5, -5, 0, -5]
speed: 20 feet,  swim 20 feet
sourcebook: "_Pathfinder #154: Siege of the Dinosaurs_"
ac: 19
armorclass:
  - name: AC
    desc: "19; __Fort__ +22, __Ref__ +10, __Will__ +13"
hp: 270
health:
  - name: ""
  - name: HP
    desc: "270; __Immunities__  acid,  critical hits,  piercing,  precision,  slashing,  unconscious,  visual,  mental; __Weaknesses__ fire 10; __Resistances__ cold 10"
abilities_top:
  - name: ""

  - name: "Motion Sense (60 feet)"
    desc: "  A tallow ooze can sense nearby motion through vibration and air movement."

abilities_mid:
  - name: ""
  - name: "Congealed"
    desc: "  Whenever the tallow ooze takes fire damage, it becomes [[Conditions/Quickened|Quickened]] for 1 round (it can only Stride or Strike with the extra action).\nWhenever the tallow ooze is dealt cold damage (even if that damage is prevented by its resistance), it becomes [[Conditions/Slowed 1|Slowed 1]] for 1 round and can't use its Engulf ability (but creatures already engulfed are still engulfed)."

  - name: "Greasy Seepage"
    desc: " (aura) 10 feet. Any creature that starts its turn in or enters a square in the area must attempt a DC 30 Acrobatics check check to Balance. A creature that takes a Step doesn't need to roll this check."

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Pseudopod +23 ()\n__Damage__  2d10 + 10 bludgeoning plus residual-grease"

  - name: "[[Bestiary Ability Glossary/Engulf|Engulf]]"
    desc: "`pf2:2`  DC 30 Reflex check, 4d10 bludgeoning, Escape DC 26, Rupture 25\n"

  - name: "Residual Grease"
    desc: "  When the tallow ooze critically succeeds at an attack against a creature or a creature escapes from being engulfed by the ooze, that creature's hands and gear become slick with grease. For 1d4 rounds, the affected creature must attempt a DC 30 Reflex check save whenever it uses any item (including weapons) that must be wielded or held. On a failure, the creature takes a -2 circumstance penalty to any attack roll or check to use the item; on a critical failure, the creature drops the item, which lands in a random adjacent square. The creature (or an adjacent ally) can use 1 Interact action to wipe off the grease from an item or from its hands."
 
```

```encounter-table
name: Tallow Ooze
creatures:
  - 1: Tallow Ooze
```


### Description
Pale yellow and smelling of meat, this unnatural, globular monster is composed entirely of rendered animal fat. A tallow ooze typically results from magical mishaps during the creation of enchanted candles or soaps, or while rendering the fat of a magical beast, though occasionally spellcasters create these beings intentionally.

A tallow ooze hunts other creatures to subsume them into its own body and absorb their fat. Since tallow is solid at room temperature, tallow oozes must metabolize their own bodies to produce enough heat to remain gelatinous. A tallow ooze that cannot replenish itself with absorbed fat will either consume itself or solidify, though a tallow ooze exposed to too much heat might melt entirely.
