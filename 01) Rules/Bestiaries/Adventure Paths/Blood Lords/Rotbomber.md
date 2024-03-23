---
title: "Rotbomber"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.blood-lords-bestiary.Actor.1EOyUGMELVUIxFeB" 
tags:
  - pf2e/creature/type/chaotic
  - pf2e/creature/type/evil
  - pf2e/creature/type/mindless
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2e/creature/level/12
statblock: inline
name: "Rotbomber"
level: 12
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #184: The Ghouls Hunger"
name: "Rotbomber"
level: "Creature 12"
rare_03: "Uncommon"
alignment: ""
size: "Large"
trait_01: "chaotic"
trait_02: "evil"
trait_03: "mindless"
trait_04: "undead"
trait_05: "unholy"
modifier: 25
perception:
  - name: "Perception"
    desc: "+25; Darkvision"
skills:
  - name: "Skills"
    desc: "Acrobatics: +25, Athletics: +25"
abilityMods: [5, 7, 4, -3, 4, -3]
speed: 40 feet,  climb 20 feet
sourcebook: "_Pathfinder #184: The Ghouls Hunger_"
ac: 31
armorclass:
  - name: AC
    desc: "31; __Fort__ +19, __Ref__ +25, __Will__ +19"
hp: 250
health:
  - name: ""
  - name: HP
    desc: "250, void healing; __Immunities__  death effects,  disease,  paralyzed,  poison,  unconscious,  mental; __Weaknesses__ vitality 10, slashing 10"
abilities_top:
  - name: ""

  - name: "Slow"
    desc: "  A rotbomber is permanently [[Conditions/Slowed 1|Slowed 1]] and can't use reactions."

abilities_mid:
  - name: ""
  - name: "Pressurized Pustules"
    desc: "  When a rotbomber takes acid, fire, physical or sonic damage, there is a chance a prematurely developed pustule bursts open, determined by a DC 11 Flat check. All creatures in a 10-foot emanation must succeed at DC 29 Fortitude check save or become [[Conditions/Sickened 1|Sickened 2]]. A creature that gets a critical failure becomes [[Conditions/Sickened 1|Sickened 3]]. Any creature who attempts this save becomes temporarily immune to pressurized pustules for 24 hours."

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Jaws +24 ()\n__Damage__  3d8 + 12 piercing plus necrotic-rot"

  - name: "Melee"
    desc: "`pf2:1` Fist +20 (reach 10 feet)\n__Damage__  3d6 + 10 bludgeoning"

  - name: "Ranged"
    desc: "`pf2:1` Necrotic Pustule +26 (range increment 60 feet, splash, void)\n__Damage__  3d10 + 14 bludgeoning plus necrotic-rot"

  - name: "Gaseous Smash"
    desc: "`pf2:2`  **Frequency** once per round\n**Effect** The rotbomber pulls two necrotic pustules from its body, one in each hand, and leaps into the air in an attempt to detonate them simultaneously on a hapless victim. The rotbomber Leaps up to 15 feet horizontally and 10 feet vertically to land in a square adjacent to a target creature and makes a necrotic pustule Strike against the target. If the Strike hits, it deals an additional 4d6 bludgeoning damage to the target. This counts as two attacks for the purposes of determining the rotbomber's multiple attack penalty, but the penalty does not increase until after the Gaseous Smash."

  - name: "Necrotic Rot"
    desc: " (disease,void) Necrotic rot withers and corrupts living tissue at an alarming rate. An infected creature can't heal damage it takes from necrotic rot until it has been cured of the disease.\n**Saving Throw** DC 29 Fortitude check\n**Stage 1** 2d6 void damage (1 day)\n**Stage 2** [[Conditions/Drained 1|Drained 1]]\n**Stage 3** 3d6 void damage and [[Conditions/Drained 1|Drained 2]]\n**Stage 4** dead, rising as a rotbomber immediately"

  - name: "Propulsive Pestilence"
    desc: "  The pressurized necrotic gases within the rotbomber's pustules make them explode far more dramatically than most alchemists' bombs. The rotbomber's necrotic pustules deal splash damage to every creature within 15 feet of the target."
 
```

```encounter-table
name: Rotbomber
creatures:
  - 1: Rotbomber
```


### Description
Disgusting and dangerous, rotbombers bound around on all four limbs, ripping off the pressurized and explosive necrotic pustules that grow out of their backs to lob them toward their enemies. When they explode, the pustules emit concussive blasts of force and deadly pestilence that can infect a victim. Though slow and overburdened by the intense weight of the pustules, rotbombers can move with a surprising speed when they need to hunt down their quarry.
