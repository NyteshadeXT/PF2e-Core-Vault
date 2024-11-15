---
title: "Solar Crow"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.rage-of-elements-bestiary.Actor.Kv6zyQC3JCEWWwvf" 
tags:
  - pf2e/creature/type/elemental
  - pf2e/creature/type/fire
  - pf2eMonster
  - pf2e/creature/level/10
  - remaster
statblock: inline
name: "Solar Crow"
level: 10
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Rage of Elements"
name: "Solar Crow"
level: "Creature 10"

alignment: ""
size: "Large"
trait_01: [[elemental]]
trait_02: [[fire]]
modifier: 19
perception:
  - name: "Perception"
    desc: "+19; Darkvision"
languages: "Pyric"
skills:
  - name: "Skills"
    desc: "Acrobatics: +22, Athletics: +22, Deception: +21, Nature: +19, Sun Lore: +18"
abilityMods: [2, 6, 2, 0, 3, 5]
speed: 20 feet,  fly 50 feet
sourcebook: "_Pathfinder Rage of Elements_"
ac: 30
armorclass:
  - name: AC
    desc: "30; __Fort__ +18, __Ref__ +22, __Will__ +17"
hp: 170
health:
  - name: ""
  - name: HP
    desc: "170; __Immunities__  bleed,  paralyzed,  fire,  sleep,  poison"
abilities_top:
  - name: ""

  - name: "Smoke Vision"
    desc: "  Smoke doesn't impair a solar crow's vision; they ignore the [[Conditions/Concealed|Concealed]] condition from smoke."

abilities_mid:
  - name: ""
  - name: "Glinting Wing"
    desc: "`pf2:r` (light,visual) **Trigger** A creature within 120 feet attempts to target the solar crow\n* * *\n\n**Effect** The solar crow defensively repositions a wing to shine light into the attacker's eyes. The target is [[Conditions/Dazzled|Dazzled]] for the duration of the triggering effect, granting the solar crow concealment against it."

  - name: "Glow"
    desc: " (aura,fire,light) 25 feet. The solar crow casts bright light in a @Template[emanation|distance:25] (and dim light for the next 25 feet)."

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Beak +22 (finesse)\n__Damage__  2d10 + 8 piercing 2d6 fire"

  - name: "Melee"
    desc: "`pf2:1` Talon +22 (agile, finesse)\n__Damage__  2d6 fire plus grab 1d10 + 8 slashing plus grab"

  - name: "Blinding Heat"
    desc: "`pf2:2` (fire,incapacitation,light,visual) The solar crow expands its wings and unleashes blazing hot, blinding light in a @Template[emanation|distance:120]. Each creature in the area takes 9d6 fire damage with a DC 29 Reflex check save. The crow can't use Blinding Heat again for 1d4 rounds, and its glow aura is deactivated during this time.\n* * *\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature takes half damage and is [[Conditions/Dazzled|Dazzled]] for 1 round.\n\n**Failure** The creature takes full damage and is [[Conditions/Blinded|Blinded]] for 1 round.\n\n**Critical Failure** The creature takes double damage and is blinded for 1 minute."

  - name: "Burning Talons"
    desc: "  A creature [[Conditions/Grabbed|Grabbed]] by the solar crow takes 1d4 persistent fire damage. It can't recover from this damage while grabbed by the crow."

  - name: "Snatch"
    desc: "  A solar crow can Fly at half Speed while it has a creature [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]] in its talons, carrying that creature along with it."

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  "
 
```

```encounter-table
name: Solar Crow
creatures:
  - 1: Solar Crow
```



These enormous three-legged elementals resemble crows with flaming feathers, said to shine as bright as the sun. They nest in the smoldering Forest of Mulberry Coals, living in flocks of eight to a dozen, with ten being the most common.

* * *

The ifrits of the Dominion of Flame conscript even more of the plane's fire elementals in preparation for new wars in the returned planes, even mobilizing ones that rarely travel near settlements.

## Story Of Infamy

Ancient tales from dragon-ruled Tian Xia tell of a flock of solar crows who wreaked havoc upon the Plane of Wood, driving an herb that could grant immortality to extinction before coming to terrorize Tian Xia itself. All but one of the crows were then shot down by a legendary archer.
