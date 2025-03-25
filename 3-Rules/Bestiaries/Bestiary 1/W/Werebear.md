---
title: "Werebear"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-bestiary.Actor.5U13zQ77DIcqpH9U" 
tags:
  - pf2e/creature/type/beast
  - pf2e/creature/type/good
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/lawful
  - pf2e/creature/type/werecreature
  - pf2eMonster
  - pf2e/creature/level/4
statblock: inline
name: "Werebear"
level: 4
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/pf2e-tokens-bestiaries/portraits/humanoid/werecreature/werebear.webp| ]]
source: "Pathfinder Bestiary"
name: "Werebear"
level: "Creature 4"
rare_03: [[Uncommon]]
alignment: ""
size: "Large"
trait_01: [[beast]]
trait_02: [[good]]
trait_03: [[human]]
trait_04: [[humanoid]]
trait_05: [[lawful]]
trait_06: [[werecreature]]
modifier: 11
perception:
  - name: "Perception"
    desc: "+11; Low-Light Vision, Scent (Imprecise) 30 Feet"
languages: "Common; bear empathy"
skills:
  - name: "Skills"
    desc: "Athletics: +12, Medicine: +9, Nature: +11, Stealth: +11, Survival: +11"
abilityMods: [5, 2, 4, 1, 3, -1]
speed: 25 feet
sourcebook: "_Pathfinder Bestiary_"
ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__ +12, __Ref__ +10, __Will__ +10"
hp: 75
health:
  - name: ""
  - name: HP
    desc: "75; __Weaknesses__ silver 5"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Greataxe|Greataxe]], 8x [[Equipment/Hatchet|Hatchet]], [[Equipment/Chain Shirt|Chain Shirt]]"
  - name: "[[Creature Family Ability Glossary/(Werecreature) Animal Empathy|Bear Empathy]]"
    desc: " (primal) A werebear can communicate with ursines."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Claw +13 (agile, reach 10 feet)\n__Damage__  1d10 + 7 slashing plus grab"

  - name: "Melee"
    desc: "`pf2:1` Greataxe +13 (reach 10 feet, sweep)\n__Damage__  1d12 + 7 slashing"

  - name: "Melee"
    desc: "`pf2:1` Hatchet +13 (agile, sweep)\n__Damage__  1d6 + 7 slashing"

  - name: "Melee"
    desc: "`pf2:1` Jaws +13 (reach 10 feet)\n__Damage__  1d12 + 7 piercing plus werecreature-curse-of-the-werecreature"

  - name: "Ranged"
    desc: "`pf2:1` Hatchet +10 (agile, sweep, thrown 10 ft.)\n__Damage__  1d6 + 7 slashing"

  - name: "[[Creature Family Ability Glossary/(Werecreature) Change Shape|Change Shape]]"
    desc: "`pf2:1` (concentrate,polymorph,primal) *   **Human**\n    *   **Melee** fist +13/+9/+5 (agile, nonlethal), **Damage** 1d4+7 bludgeoning damage\n*   **Grizzly Bear**\n    *   **Speed** 35 feet\n* * *\n\nThe werecreature changes into its humanoid, hybrid, or animal shape. Each shape has a specific, persistent appearance. A true werecreature's natural form is its hybrid shape.\n\nIn humanoid shape, the werecreature uses its original humanoid size, loses its jaws and claws Strikes, and gains a melee fist Strike that deals bludgeoning damage equal to the slashing damage dealt by its claw.\n\nIn animal shape, its Speed and size change to that of the animal, it gains any special Strike effects of the animal that it didn't already have (such as Grab), and it loses its weapon Strikes.\n\n* * *\n"

  - name: "[[Creature Family Ability Glossary/(Werecreature) Curse of the Werecreature|Curse of the Werebear]]"
    desc: " (curse,primal) This curse affects only humanoids.\n\n**Saving Throw** DC 22 Fortitude check\n* * *\n\nOn each full moon, the cursed creature must succeed at another Fortitude save or turn into a werebear until dawn.\n\nThe creature is under the GM's control and goes on a rampage for half the night before falling unconscious until dawn."

  - name: "Hunt Prey"
    desc: "`pf2:1` (concentrate) **Requirements** The werebear can see or hear the target or is Tracking it in exploration mode.\n* * *\n\n**Effect** The werebear gains a +2 circumstance bonus to Perception checks when it [[Actions/Seek|Seeks]] its prey and a +2 circumstance bonus to Survival checks when it [[Actions/Track|Tracks]] its prey. The werebear also ignores the penalty for making ranged attacks within its second range increment against the prey it's hunting. The werebear can designate only one creature as its hunted prey at a time. If it uses Hunt Prey against a different creature, the prior creature loses the designation and the new prey gains the designation. In any case, this designation lasts until the werebear's next daily preparation."

  - name: "Mauler"
    desc: "  The werebear gains a +2 circumstance bonus to damage rolls against creatures it has [[Conditions/Grabbed|Grabbed]]."

  - name: "[[Creature Family Ability Glossary/(Werecreature) Moon Frenzy|Moon Frenzy]]"
    desc: " (polymorph,primal) When a full moon appears in the night sky, the werecreature must enter hybrid form, can't Change Shape thereafter, becomes one size larger, increases its reach by 5 feet, and increases the damage of its jaws Strike by 2.\n\nWhen the moon sets or the sun rises, the werecreature returns to humanoid form and is [[Conditions/Fatigued|Fatigued]] for 2d4 hours.\n\n[[Bestiary Effects/Effect_ Moon Frenzy|Effect: Moon Frenzy]]"

  - name: "Precision Edge"
    desc: "  The werebear deals 1d8 additional precision damage on its first successful Strike against its hunted target on each of its turns."

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  "
 
```

```encounter-table
name: Werebear
creatures:
  - 1: Werebear
```



Unlike many other types of werecreature, a werebear does not become malevolent during its involuntary transformations, but is instead filled with righteous conviction. This indignation can still manifest in violent ways, though, as a transformed werebear becomes temporarily blind to its alliances and has little control over its bestial temper. As a result, werebears are loners, rarely even living together as families longer than necessary. Werebears know that as long as they live solitary lives, they can serve as protectors and guardians in wilderness regions without the overwhelming fear that, when the moon is full and the curse takes hold, they will rage against an innocent bystander or loved one. As long as there is nothing around to threaten it or the natural area it protects (typically a forest), a werebear in its animal form is generally content to forage and sleep away the night.

* * *

Werecreatures are humanoids doomed to transform into animals and animal-humanoid hybrids under the light of the full moon. These shapechanging creatures are the result of an ancient primal curse that they can, in turn, transmit through their own bites. Their ability to lurk unseen in the wilds as well as among people, combined with the contagiousness of their condition, makes werecreatures a perennial cause of panicked suspicion.
