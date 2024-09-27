---
title: "Werewolf"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-bestiary.Actor.bLMoqt9xqTZKnjxr" 
tags:
  - pf2e/creature/type/beast
  - pf2e/creature/type/chaotic
  - pf2e/creature/type/evil
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/werecreature
  - pf2eMonster
  - pf2e/creature/level/3
statblock: inline
name: "Werewolf"
level: 3
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/pf2e-tokens-bestiaries/portraits/humanoid/werecreature/werewolf.webp| ]]
source: "Pathfinder Bestiary"
name: "Werewolf"
level: "Creature 3"

alignment: ""
size: "Medium"
trait_01: [[beast]]
trait_02: [[chaotic]]
trait_03: [[evil]]
trait_04: [[human]]
trait_05: [[humanoid]]
trait_06: [[werecreature]]
modifier: 9
perception:
  - name: "Perception"
    desc: "+9; Low-Light Vision, Scent (Imprecise) 30 Feet"
languages: "Common; wolf empathy"
skills:
  - name: "Skills"
    desc: "Acrobatics: +7, Athletics: +9, Stealth: +10"
abilityMods: [4, 2, 2, -1, 2, 1]
speed: 25 feet
sourcebook: "_Pathfinder Bestiary_"
ac: 19
armorclass:
  - name: AC
    desc: "19; __Fort__ +11, __Ref__ +9, __Will__ +7"
hp: 63
health:
  - name: ""
  - name: HP
    desc: "63; __Weaknesses__ silver 5"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Battle Axe|Battle Axe]], [[Equipment/Composite Shortbow|Composite Shortbow]], [[Equipment/Studded Leather Armor|Studded Leather Armor]], 20x [[Equipment/Arrows|Arrows]]"
  - name: "[[Creature Family Ability Glossary/(Werecreature) Animal Empathy|Wolf Empathy]]"
    desc: " (primal) A werewolf can communicate with lupines."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Attack of Opportunity|Attack of Opportunity]]"
    desc: "`pf2:r`  "

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Battle Axe +11 (sweep)\n__Damage__  1d8 + 8 slashing"

  - name: "Melee"
    desc: "`pf2:1` Claw +11 (agile)\n__Damage__  1d6 + 8 slashing"

  - name: "Melee"
    desc: "`pf2:1` Jaws +11 ()\n__Damage__  1d8 + 8 piercing plus werecreature-curse-of-the-werecreature"

  - name: "Ranged"
    desc: "`pf2:1` Composite Shortbow +9 (deadly d10, range increment 60 feet, reload 0)\n__Damage__  1d6 + 4 piercing"

  - name: "[[Creature Family Ability Glossary/(Werecreature) Change Shape|Change Shape]]"
    desc: "`pf2:1` (concentrate,polymorph,primal) *   **Human**\n    *   **Melee** fist +11/+7/+3 (agile, nonlethal), **Damage** 1d4+8 bludgeoning damage\n*   **Wolf**\n    *   **Speed** 40 feet\n    *   **Melee** jaws+11/+6/+1, **Damage** 1d8+8 piercing damage plus [[Bestiary Ability Glossary/Knockdown|Knockdown]]\n* * *\n\nThe werecreature changes into its humanoid, hybrid, or animal shape. Each shape has a specific, persistent appearance. A true werecreature's natural form is its hybrid shape.\n\nIn humanoid shape, the werecreature uses its original humanoid size, loses its jaws and claws Strikes, and gains a melee fist Strike that deals bludgeoning damage equal to the slashing damage dealt by its claw.\n\nIn animal shape, its Speed and size change to that of the animal, it gains any special Strike effects of the animal that it didn't already have (such as Grab), and it loses its weapon Strikes.\n\n* * *\n"

  - name: "[[Creature Family Ability Glossary/(Werecreature) Curse of the Werecreature|Curse of the Werewolf]]"
    desc: " (curse,primal) This curse affects only humanoids.\n\n**Saving Throw** DC 19 Fortitude check\n* * *\n\nOn each full moon, the cursed creature must succeed at another Fortitude save or turn into a werewolf until dawn.\n\nThe creature is under the GM's control and goes on a rampage for half the night before falling unconscious until dawn."

  - name: "[[Creature Family Ability Glossary/(Werecreature) Moon Frenzy|Moon Frenzy]]"
    desc: " (polymorph,primal) When a full moon appears in the night sky, the werecreature must enter hybrid form, can't Change Shape thereafter, becomes one size larger, increases its reach by 5 feet, and increases the damage of its jaws Strike by 2.\n\nWhen the moon sets or the sun rises, the werecreature returns to humanoid form and is [[Conditions/Fatigued|Fatigued]] for 2d4 hours.\n\n[[Bestiary Effects/Effect_ Moon Frenzy|Effect: Moon Frenzy]]"

  - name: "Pack Attack"
    desc: "  The werewolf's Strikes deal 1d6 extra damage to creatures within reach of at least two of the werewolf's allies."
 
```

```encounter-table
name: Werewolf
creatures:
  - 1: Werewolf
```



The curse of the werewolf-known as lycanthropy to many-instills in its carriers the hungry bloodlust and predatory instincts of the wolf. Werewolves tend to dwell on the fringes of society or in small settlements where, in their humanoid forms, they work as laborers, hunters, farmers, or trappers. At night, however, these same villagers transform into violent killers and sadistic stalkers who prey on their neighbors. Werewolves are the quintessential werecreature, and the first that comes to mind when most people speak of such beings.

Although most werewolves hide their curse by adopting solitary lifestyles, some retain the pack mentality of true wolves. A small group of such werewolves typically forms a family-like pack, with the eldest or most powerful serving as the leader; new pack mates are hand-chosen and inculcated into the family as its influence grows.

* * *

Werecreatures are humanoids doomed to transform into animals and animal-humanoid hybrids under the light of the full moon. These shapechanging creatures are the result of an ancient primal curse that they can, in turn, transmit through their own bites. Their ability to lurk unseen in the wilds as well as among people, combined with the contagiousness of their condition, makes werecreatures a perennial cause of panicked suspicion.
