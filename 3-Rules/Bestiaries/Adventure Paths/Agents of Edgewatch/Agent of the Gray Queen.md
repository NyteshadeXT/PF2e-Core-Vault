---
title: "Agent of the Gray Queen"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.8LlqjWcqiFq7YMmQ" 
tags:
  - pf2e/creature/type/daemon
  - pf2e/creature/type/evil
  - pf2e/creature/type/fiend
  - pf2e/creature/type/unholy
  - pf2e/creature/level/19
statblock: inline
name: "Agent of the Gray Queen"
level: 19
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #162: Ruins of the Radiant Siege"
name: "Agent of the Gray Queen"
level: "Creature 19"
rare_03: "Rare"
alignment: ""
size: "Large"
trait_01: "daemon"
trait_02: "evil"
trait_03: "fiend"
trait_04: "unholy"
modifier: 32
perception:
  - name: "Perception"
    desc: "+32; Darkvision, Lifesense 30 Feet, Truesight"
languages: "Common, Daemonic"
skills:
  - name: "Skills"
    desc: "Acrobatics: +33, Deception: +33, Intimidation: +38, Religion: +31, Stealth: +33, Survival: +31"
abilityMods: [5, 6, 7, 2, 4, 7]
speed: 60 feet,  fly 60 feet
sourcebook: "_Pathfinder #162: Ruins of the Radiant Siege_"
ac: 43
armorclass:
  - name: AC
    desc: "43; __Fort__ +31, __Ref__ +35, __Will__ +30; +1 status to all saves vs. magic"
hp: 290
health:
  - name: ""
  - name: HP
    desc: "290; __Immunities__  death effects,  void; __Weaknesses__ holy 20"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "Displacement"
    desc: " (divine,illusion,visual) An astradaemon bends light, appearing shifted from its true position, though still in the same space.\nCreatures targeting the astradaemon must attempt a DC 11 Flat check check, as if the astradaemon were hidden, even though it remains observed.\nEffects such as the [[Feats/Blind-Fight|Blind-Fight]] feat and halfling's [[Ancestry Features/Keen Eyes|Keen Eyes]] that apply on the flat check against hidden creatures also apply against a displaced astradaemon."

  - name: "Soul Siphon"
    desc: " (aura,divine,force) 30 feet. An astradaemon draws power from the souls of the recently slain. If a Small or larger living creature dies within its aura, the astradaemon gains 5 temporary Hit Points and a +1 status bonus to attack and damage rolls for 1 round, unless the creature was slain by an astradaemon's Devour Soul ability.\nIncorporeal undead and living spirits traveling outside the body take 1d8 force damage each round within the daemon's aura from the spiritual pressure as the astradaemon pulls in fragments of their soul.\n[[Bestiary Effects/Effect_ Soul Siphon|Effect: Soul Siphon]]"

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Jaws +36 (magical, reach 10 feet, unholy)\n__Damage__  4d8 + 9 piercing plus essence-drain,grab 1d6 spirit plus essence-drain,grab"

  - name: "Melee"
    desc: "`pf2:1` Claw +32 (agile, magical, reach 10 feet, unholy)\n__Damage__  4d6 + 9 slashing plus essence-drain 1d6 spirit plus essence-drain"

  - name: "Melee"
    desc: "`pf2:1` Tail +32 (magical, reach 15 feet, unholy)\n__Damage__  4d10 + 9 bludgeoning plus essence-drain 1d6 spirit plus essence-drain"

  - name: "Divine Innate Spells"
    desc: "DC 41, attack +33; __9th __  _[[Spells/Massacre|Massacre]]_; __8th __  _[[Spells/Pinpoint|Discern Location]]_, _[[Spells/Execute|Finger of Death]]_; __7th __  _[[Spells/Interplanar Teleport|Plane Shift (x2)]]_; __5th __  _[[Spells/Translocate|Dimension Door]]_; __4th __  _[[Spells/Translocate|Dimension Door (At Will)]]_; __1st __  _[[Spells/Detect Alignment|Detect Alignment (At Will) (Good Only)]]_\n__Constant__  __(6th)__ _[[Spells/Truesight|True Seeing]]_"

  - name: "Essence Drain"
    desc: " (divine,void) When an astradaemon hits with its claw, jaws, or tail, it drains the target's spiritual and vital essences.\nThe target takes 2d10 void damage and the astradaemon regains an equal number of Hit Points. The target must succeed at a DC 37 Fortitude check save or become [[Conditions/Doomed 1|Doomed 1]] and [[Conditions/Drained 1|Drained 1]].\nIf the target was already drained or doomed, it instead increases both conditions' value by 1, to a maximum of 4."

  - name: "Mortal Shell"
    desc: "`pf2:2` (divine) **Requirements** The astradaemon has killed a Large or smaller creature with Overtake Soul within the past 24 hours and that creature is within the daemon's reach\n**Effect** The astradaemon takes over and wears the body of their victim. This automatically creates a disguise to allow the astradaemon to Impersonate the target creature. The body has a number of Hit Points equal to 3 times the level of the creature. Any damage targeting the astradaemon damages the body first. Once the body is reduced to 0 Hit Points, it's destroyed and forces the astradaemon out, back to the daemon's normal form. If the astradaemon takes any spirit damage while wearing the body, the damage is dealt to the astradaemon directly and it must succeed at a DC 5 Flat check check or be forced out of the body. Additionally, [[Spells/Disjunction|Disjunction]] and [[Spells/Dispel Magic|Dispel Magic]] can force the astradaemon out of the body with a successful counteract check against DC 41.\nWhile wearing the disguise, the astradaemon's attacks use the reach of the body it inhabits, and its size changes to match that of the creature whose soul it consumed. Additionally, the astradaemon is [[Conditions/Clumsy 1|Clumsy 2]] and [[Conditions/Enfeebled 1|Enfeebled 4]] while wearing the disguise. (These penalties haven't been incorporated into this stat block.)"

  - name: "Overtake Soul"
    desc: "`pf2:1` (death,divine,incapacitation) **Requirements** The astradaemon hasn't used an action with the attack trait yet this turn.\n**Effect** The astradaemon draws out and consumes the soul of a living creature it has [[Conditions/Grabbed|Grabbed]]. The creature must succeed at a DC 39 Fortitude check save or instantly die. If it dies, the astradaemon gains 10 temporary Hit Points.\n[[Bestiary Effects/Effect_ Overtake Soul|Effect: Overtake Soul]]"

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  "
 
```



