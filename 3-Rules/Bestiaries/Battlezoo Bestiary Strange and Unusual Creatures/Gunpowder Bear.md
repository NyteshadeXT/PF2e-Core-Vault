---
title: "Gunpowder Bear"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-su-pf2e.pf2e-battlezoo-su-actors.Actor.a4VZeVv8nYmtkNcV" 
tags:
  - pf2e/creature/type/chaotic
  - pf2e/creature/type/construct
  - pf2e/creature/type/evil
  - pf2e/creature/type/gremlin
  - pf2eMonster
  - pf2e/creature/level/1
statblock: inline
name: "Gunpowder Bear"
level: 1
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-su-pf2e/art/Portraits/gunpowder-bear.webp| ]]
source: "Battlezoo Bestiary: Strange and Unusual"
name: "Gunpowder Bear"
level: "Creature 1"
rare_03: [[Uncommon]]
alignment: ""
size: "tiny"
trait_01: [[chaotic]]
trait_02: [[construct]]
trait_03: [[evil]]
trait_04: [[gremlin]]
modifier: 4
perception:
  - name: "Perception"
    desc: "+4; Darkvision"
languages: "Sakvroth"
skills:
  - name: "Skills"
    desc: "Crafting: +7, Deception: +3, Stealth: +7, Thievery: +7"
abilityMods: [1, 4, 1, 3, 1, 0]
speed: 20 feet
sourcebook: "_Battlezoo Bestiary: Strange and Unusual_"
ac: 15
armorclass:
  - name: AC
    desc: "15; __Fort__ +7, __Ref__ +10, __Will__ +5"
hp: 30
health:
  - name: ""
  - name: HP
    desc: "30; __Immunities__  bleed,  death effects,  disease,  doomed,  drained,  fatigued,  healing,  nonlethal attacks,  paralyzed,  poison,  sickened,  spirit,  unconscious,  vitality,  void; __Weaknesses__ fire 5"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "3x [[Equipment/Matchstick|Tindertwig]]"
  - name: "Euphoria"
    desc: "  If a gunpowder bear is within 30 feet of a flammable object with the potential to explode, it must attempt a DC 20 Will check save. On a failure, it becomes infatuated with detonating the object and is [[undefined]]; on a critical failure, the gunpowder bear must spend each of its turns to Stride towards the object until it can use Pull The Cord to detonate the object. On a successful Will save, the gunpowder bear is temporarily immune to euphoria for 10 minutes. If exploding the object would result in injury to at least two other non-gremlin creatures, the DC of the Will save increases to DC 25 Will check and the gunpowder bear loses its temporary immunity."

abilities_mid:
  - name: ""
  - name: "Exploding Fluff"
    desc: " (fire) When a gunpowder bear is reduced to 0 Hit Points by taking fire damage, it automatically explodes as if it had used Pull The Cord."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Jaws"
    desc: "+9 (finesse, reach 0 feet)\n__Damage__  1d8 + 1 piercing plus latch"

  - name: "**Melee** `pf2:1` Claw"
    desc: "+9 (agile, finesse, reach 0 feet)\n__Damage__  1d6 + 1 slashing"

  - name: "Latch"
    desc: "`pf2:1`  **Requirements** The gunpowder bear's last action was to hit a target larger than itself with its jaws\n* * *\n\n**Effect** The gunpowder bear's teeth latch onto the creature it bit. This is similar to [[Bestiary Ability Glossary/Grab|Grabbing]] the creature, but the gunpowder bear moves with that creature rather than holding it in place. The gunpowder bear is [[undefined]] while latched onto a creature. A creature a gunpowder bear has latched to takes a –1 circumstance penalty on their save against its Pull The Cord."

  - name: "Pull The Cord"
    desc: "`pf2:1` (fire,manipulate) The gunpowder bear pulls the cord attached to its back and immediately explodes. Creatures and objects in a 5-foot burst around the creature take 2d6 fire damage (DC 17 Reflex check). Objects that are flammable automatically take damage as if they had failed the save and might explode (GM's discretion). The gunpowder bear is immediately destroyed upon using this action and is reduced to a fine powder."
 
```

```encounter-table
name: Gunpowder Bear
creatures:
  - 1: Gunpowder Bear
```



Gunpowder bears are tiny construct creatures that were given life by vexgit gremlins. They resemble cuddly toy bears with a knapsack and a string coming out of their back. Despite this benign appearance, gunpowder bears are vicious creatures with razor-sharp teeth that they will gladly sink into any creature that dares pick them up. Gunpowder bears are known for their driving need to seek and detonate objects with the potential to explode, in which case they make use of the small bag of tindertwigs they carry to help them set any necessary fires.

Gunpowder bears are known to manipulate those unaware of their malign nature by luring them closer to objects they plan to detonate. In a fit of euphoria, an enraptured gunpowder bear pulls the string on its back, causing the creature to self-destruct in a fiery explosion. Since the invention of the first gunpowder bears, their vexgit creators have found the creatures difficult to control, which has resulted in countless accidents and unintended consequences. Even so, they still prove useful when deployed in enemy territory.

## Flare Bears

Detonations don't always go according to plan. If someone removes a gunpowder bear's trigger mechanism or its cord doesn't work for any reason, the bear attempts to self-immolate instead. It may turn a tindertwig on itself or throw itself on a nearby flame source. If a group of bears are present, they may even attempt to help each other, resulting in the endearing but terrifying sight of an unlit bear running into the arms of a flaming one. These attempts burn unevenly, resulting in the bears blasting off in random directions before finally exploding.

## Suggested Monster Parts

**Monster Parts** 3.5/7/13 gp

**Eligible Refinements** weapons (piercing, slashing), armor (light), perception item, skill items (Crafting, Deception, Stealth, Thievery)

**Eligible Imbued Properties** bane, chaotic, dexterity, energy resistant (negative, positive), evil, fire, intelligence, wild
