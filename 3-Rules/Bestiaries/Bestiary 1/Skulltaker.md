---
title: "Skulltaker"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-bestiary.Actor.myEeYWWAgnkLwtIb" 
tags:
  - pf2e/creature/type/evil
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/18
statblock: inline
name: "Skulltaker"
level: 18
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/pf2e-tokens-bestiaries/portraits/undead/skulltaker.webp| ]]
source: "Pathfinder Bestiary"
name: "Skulltaker"
level: "Creature 18"
rare_03: [[Uncommon]]
alignment: ""
size: "huge"
trait_01: [[evil]]
trait_02: [[undead]]
trait_03: [[unholy]]
modifier: 33
perception:
  - name: "Perception"
    desc: "+33; Darkvision"
languages: "Necril; skeletal lore languages"
skills:
  - name: "Skills"
    desc: "Acrobatics: +34, Intimidation: +35, Religion: +30, Stealth: +32, Skeletal Lore: +30"
abilityMods: [8, 6, 6, 2, 8, 7]
speed: 30 feet,  fly 60 feet
sourcebook: "_Pathfinder Bestiary_"
ac: 42
armorclass:
  - name: AC
    desc: "42; __Fort__ +31, __Ref__ +33, __Will__ +35; +1 status to all saves vs. vitality"
hp: 300
health:
  - name: ""
  - name: HP
    desc: "300; __Immunities__  cold,  death effects,  disease,  paralyzed,  poison,  unconscious; __Resistances__ piercing 15, slashing 15"
abilities_top:
  - name: ""

  - name: "Skeletal Lore"
    desc: " (divine) A skulltaker taps into the memories of the creatures whose bones make up its body. This gives it the Skeletal Lore skill, which it can use to Recall Knowledge of any kind. In addition, it can speak and understand all the languages known by the creatures whose bones make up its body (typically including Common and the regional language of the skulltakerʼs home region). The skulltaker can use Skeletal Lore as the primary skill check for the [[Spells/Collective Memories|Collective Memories]] ritual, and it can cast _legend lore_ without secondary casters."

abilities_mid:
  - name: ""
  - name: "Shard Storm"
    desc: " (air,aura,divine) 10 feet. A cloud of bone shards surrounds the skulltaker. When a creature moves into the emanation or begins its turn there, shard storm attempts to counteract any [[Spells/Death Ward|Death Ward]] effect on the creature (+30 counteract modifier) and then deals 4d6 slashing damage and 4d6 void damage to the creature, with a DC 40 Reflex check save."

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Jaws +35 (deadly 2d12, magical, reach 10 feet)\n__Damage__  3d10 + 14 piercing plus energy-drain 3d6 void plus energy-drain"

  - name: "Melee"
    desc: "`pf2:1` Claw +35 (agile, deadly 2d12, magical, reach 15 feet)\n__Damage__  3d6 + 14 slashing plus energy-drain 3d6 void plus energy-drain"

  - name: "Ranged"
    desc: "`pf2:1` Bone Javelin +33 (magical, thrown 100 ft.)\n__Damage__  3d8 + 6 piercing 3d6 void"

  - name: "Divine Innate Spells"
    desc: "DC 40, attack +32; __8th __  _[[Spells/Execute|Finger of Death (x2)]]_, _[[Spells/Desiccate|Horrid Wilting (x2)]]_, _[[Spells/Punishing Winds|Punishing Winds (x2)]]_; __6th __  _[[Spells/Truesight|True Seeing]]_"

  - name: "Rituals"
    desc: "_[[Spells/Collective Memories|Legend Lore]]_"

  - name: "Bonetaker"
    desc: " (divine) Whenever a creature dies within 60 feet of a skulltaker, the skulltaker draws a portion of the creature's bones into its shard storm. The creature must succeed at a DC 40 Will check save or rise as a [[Bestiary 1/Skeletal Champion|Skeletal Champion]] in 1d4 rounds. These skeletal champions are controlled by the skulltaker."

  - name: "Energy Drain"
    desc: " (divine) When a skulltaker hits with a melee Strike, the target must succeed at a DC 40 Fortitude check save or become [[Conditions/Drained|Drained 2]] and [[Conditions/Doomed|Doomed 1]]."

  - name: "Splintered Ground"
    desc: "`pf2:1`  The skulltaker causes splintered bones to erupt from all solid surfaces in a @Template[emanation|distance:100], except for surfaces of worked stone. A creature moving through the bones takes 10 piercing damage and 10 void damage for every 5 feet of movement. The first time each round a creature takes piercing damage from these splintered bones, it must succeed at a DC 40 Reflex check save or take a -10-foot circumstance penalty to all Speeds for 10 minutes, or a -15-foot circumstance penalty for 24 hours on a critical failure. The bones remain in place until the skulltaker uses this action again or the bones are manually removed, which takes 10 minutes for each 5-foot square.\n\n[[Bestiary Effects/Effect_ Splintered Ground|Effect: Splintered Ground]]\n\n[[Bestiary Effects/Effect_ Splintered Ground (Critical Failure)|Effect: Splintered Ground (Critical Failure)]]"
 
```

```encounter-table
name: Skulltaker
creatures:
  - 1: Skulltaker
```



Swirling down from misty peaks and through howling mountain passes like an evil wind, the vortex of bones known as a skulltaker is a terrible manifestation of the delirium and agony experienced by doomed climbers and lost trailblazers just before they met their end. In some places, a skulltaker is also known as a saxra.
