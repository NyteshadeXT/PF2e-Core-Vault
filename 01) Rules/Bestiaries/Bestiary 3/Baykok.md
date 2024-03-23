---
title: "Baykok"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-bestiary-3.Actor.an7tww93Y4pQ8HP6" 
tags:
  - pf2e/creature/type/chaotic
  - pf2e/creature/type/evil
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2e/creature/level/9
statblock: inline
name: "Baykok"
level: 9
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Bestiary 3"
name: "Baykok"
level: "Creature 9"

alignment: ""
size: "Medium"
trait_01: "chaotic"
trait_02: "evil"
trait_03: "undead"
trait_04: "unholy"
modifier: 19
perception:
  - name: "Perception"
    desc: "+19; Darkvision"
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +17, Athletics: +19, Stealth: +17"
abilityMods: [6, 4, 5, 0, 4, 1]
speed: 30 feet,  fly 40 feet
sourcebook: "_Pathfinder Bestiary 3_"
ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__ +20, __Ref__ +19, __Will__ +15"
hp: 200
health:
  - name: ""
  - name: HP
    desc: "200, void healing; __Immunities__  death effects,  disease,  paralyzed,  poison,  unconscious; __Weaknesses__ air 10, bludgeoning 10, earth 10"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Greatclub|+1 Striking Greatclub]], [[Equipment/Longbow|+1 Longbow]]"
abilities_mid:
  - name: ""
  - name: "Banished from the Ground"
    desc: "  A baykok can't willingly touch earth or rock surfaces. If forced into contact with such a surface, it becomes [[Conditions/Enfeebled 1|Enfeebled 2]] for as long as it remains incontact."

  - name: "[[Bestiary Ability Glossary/Frightful Presence|Frightful Presence]]"
    desc: " (aura,emotion,fear,mental) 120 feet. DC 25 Will check\n"

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Greatclub +21 (backswing, magical, shove)\n__Damage__  2d10 + 9 bludgeoning"

  - name: "Ranged"
    desc: "`pf2:1` Longbow +21 (deadly d10, magical, range increment 100 feet, volley 30 ft.)\n__Damage__  1d8 + 6 piercing plus arrow-of-despair 1d8 mental plus arrow-of-despair"

  - name: "Arrow of Despair"
    desc: " (emotion,fear,incapacitation,mental,occult) A baykok creates an invisible arrow of bone as it draws its bow. A [[Conditions/Frightened 1|Frightened]] creature hit by the arrow is stricken with loneliness and despair and must attempt a DC 26 Will check save; if the Strike was a critical hit, the target uses the outcome one degree of success worse than the result of its save.\n**Critical Success** The creature is unaffected.\n**Success** The creature is [[Conditions/Slowed 1|Slowed 1]] for 1 round.\n**Failure** The creature's frightened value increases by 1 (to a maximum of 4), and it is slowed 1 until its frightened condition ends.\n**Critical Failure** As failure, but the creature is [[Conditions/Paralyzed|Paralyzed]] until its frightened condition ends. At the start of each of its turns, it can end the paralyzed condition early with a successful DC 26 Will check save."

  - name: "Devour Life"
    desc: "`pf2:1` (curse,occult) **Requirements** The baykok is adjacent to a [[Conditions/Paralyzed|Paralyzed]], [[Conditions/Restrained|Restrained]], or [[Conditions/Unconscious|Unconscious]] living humanoid.\n**Effect** The baykok touches the target and devours part of its life force. The target must succeed at a DC 26 Fortitude check save or be afflicted with the baykok's wasting curse. If the target fails and wasn't already affected by the wasting curse, the baykok gains 20 temporary Hit Points that last for 1 hour."

  - name: "Wasting Curse"
    desc: " (curse,occult) The baykok steals life from its victim and leaves listless dread in its place.\nIf a target fails its save against Devour Life, it becomes [[Conditions/Drained 1|Drained 1]].\nEach time the target gets a full night's rest, it must succeed at a DC 26 Fortitude check save or its drained value increases rather than decreasing. The curse ends if the creature recovers from the drained condition, but if the creature would reach drained 5 from this effect, it dies."
 
```

```encounter-table
name: Baykok
creatures:
  - 1: Baykok
```


### Description
A baykok is the restless remnant of a warrior or hunter, cast out for evil acts and cursed to forever soar through the sky far from its home, unable to ever set foot on the ground again. The creature's despairing, lonely cries at night are audible for miles across the wilderness it haunts. Jealous rage drives it to hunt isolated humanoids, especially warriors and hunters who remind it of the life it once had and squandered. A baykok's invisible arrows carry its soul-freezing loneliness, and its envious touch can steal a helpless victim's vitality.
