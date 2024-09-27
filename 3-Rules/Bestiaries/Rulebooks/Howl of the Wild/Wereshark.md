---
title: "Wereshark"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.howl-of-the-wild-bestiary.Actor.IaTdqm2wFMKkogEC" 
tags:
  - pf2e/creature/type/beast
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/werecreature
  - pf2e/creature/type/amphibious
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Wereshark"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Howl of the Wild"
name: "Wereshark"
level: "Creature 4"

alignment: ""
size: "Large"
trait_01: [[beast]]
trait_02: [[human]]
trait_03: [[humanoid]]
trait_04: [[werecreature]]
trait_05: [[amphibious]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; Scent (Imprecise) 100 Feet"
languages: "Common; shark empathy"
skills:
  - name: "Skills"
    desc: "Athletics: +12, Stealth: +9, Survival: +8"
abilityMods: [4, 3, 4, -1, 2, -1]
speed: 25 feet,  swim 25 feet
sourcebook: "_Pathfinder Howl of the Wild_"
ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__ +12, __Ref__ +11, __Will__ +8"
hp: 75
health:
  - name: ""
  - name: HP
    desc: "75; __Weaknesses__ silver 5"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Trident|Trident]], [[Equipment/Studded Leather Armor|Studded Leather Armor]]"
  - name: "Blood Scent"
    desc: "  The wereshark can smell blood in the water from up to 1 mile away."

  - name: "Shark Empathy"
    desc: " (primal) A wereshark can communicate with sharks."

abilities_mid:
  - name: ""
  - name: "[[Actions/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within your reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\nYou lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a manipulate action, you disrupt that action. This Strike doesn't count toward your multiple attack penalty, and your multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Trident +14 ()\n__Damage__  1d8 + 7 piercing plus fish-fork"

  - name: "Melee"
    desc: "`pf2:1` Jaws +14 ()\n__Damage__  1d12 + 7 piercing plus werecreature-curse-of-the-werecreature"

  - name: "Ranged"
    desc: "`pf2:1` Trident +13 (thrown 20 ft.)\n__Damage__  1d8 + 7 piercing"

  - name: "[[Bestiary Ability Glossary/Change Shape|Change Shape]]"
    desc: "`pf2:1` (concentrate,polymorph,primal) Medium human with fist +14 for 1d4+7 bludgeoning,\n\nor Large shark with jaws +14 for 1d12+7 piercing, no land Speed, and swim Speed 40 feet.\n\nThe wereshark doesn't have the amphibious trait in human or shark form and has the aquatic trait in shark form.\n\n* * *\n"

  - name: "[[Creature Family Ability Glossary/(Werecreature) Curse of the Werecreature|Curse of the Wereshark]]"
    desc: " (curse,primal) This curse affects only humanoids.\n* * *\n\n**Saving Throw** DC 18 Fortitude check\n\nOn each full moon, the cursed creature must succeed at another Fortitude save or turn into the same kind of werecreature until dawn.\n\nThe creature is under the GM's control and goes on a rampage for half the night before falling unconscious until dawn."

  - name: "Fish Fork"
    desc: "`pf2:1`  **Requirements** The wereshark critically hit with a trident Strike on their most recent action this turn\n* * *\n\n**Effect** The wereshark digs their trident deep within their target, skewering it before taking a massive bite. The target of the Strike becomes [[Conditions/Grabbed|Grabbed]] ([[Actions/Escape|Escape]] DC 18) and takes 1d4 bleed damage, and the wereshark attempts a jaws Strike against it. The wereshark can't use their trident while they have a creature grabbed with it, but they can pull the trident free with a single action that has the manipulate trait."

  - name: "[[Creature Family Ability Glossary/(Werecreature) Moon Frenzy|Moon Frenzy]]"
    desc: " (polymorph,primal) When a full moon appears in the night sky, the werecreature must enter hybrid form, can't Change Shape thereafter, becomes one size larger, increases its reach by 5 feet, and increases the damage of its jaws by 2.\n\nWhen the moon sets or the sun rises, the werecreature returns to humanoid form and is [[Conditions/Fatigued|Fatigued]] for 2d4 hours.\n\n[[Bestiary Effects/Effect_ Moon Frenzy|Effect: Moon Frenzy]]"
 
```

```encounter-table
name: Wereshark
creatures:
  - 1: Wereshark
```




