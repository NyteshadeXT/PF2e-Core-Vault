---
title: "Blood Mouse"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.NrvmeSREmeO3n1Dk" 
tags:
  - pf2e/creature/type/animal
  - pf2eMonster
  - pf2e/creature/level/1
statblock: inline
name: "Blood Mouse"
level: 1
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/blood_mouse.webp| ]]
source: "Battlezoo Bestiary"
name: "Blood Mouse"
level: "Creature 1"

alignment: ""
size: "tiny"
trait_01: [[animal]]
modifier: 8
perception:
  - name: "Perception"
    desc: "+8; Darkvision"
languages: ""
skills:
  - name: "Skills"
    desc: "Acrobatics: +6, Stealth: +8, Survival: +3"
abilityMods: [-2, 3, 1, -4, 0, 2]
speed: 30 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__ +3, __Ref__ +6, __Will__ +3"
hp: 16
health:
  - name: ""
  - name: HP
    desc: "16"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "Soothing Aroma"
    desc: " (aura,olfactory) [[Bestiary Ability Glossary/Aura|Aura]] 10 feet\n\nThe blood mouse is surrounded by an aromatic cloud that emanates from a gland in its tail. The pleasant aroma smells different to each creature, and it fascinates prey and predators alike. A creature that begins its turn in the aura must make a DC 15 Will save.\n* * *\n\n**Success** The creature is unaffected.\n\n**Failure** The creature is [[Conditions/Fascinated|Fascinated]] by the blood mouse until the beginning of its next turn. During this time, the creature cannot Stride and cannot attack the blood mouse.\n\n**Critical Failure** As failure, but the condition doesn't end automatically. The creature can attempt a new save at the end of each of its turns. On a success, the fascinated condition ends."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Proboscis"
    desc: "+4 (finesse)\n__Damage__  1d4 + 2 piercing plus attach"

  - name: "Leaping Strike"
    desc: "`pf2:2`  The blood mouse uses its strong hind legs to propel itself at its prey and attack. The blood mouse makes a proboscis Strike against a creature up to 10 feet away. On a hit, the Strike deals 2d4+4 piercing damage and the blood mouse attaches to the creature."

  - name: "Attach"
    desc: "  When a blood mouse hits a target larger than itself, its proboscis attaches it to that creature. This is similar to Grabbing the creature, but the blood mouse moves with that creature rather than holding it in place. The blood mouse is [[Conditions/Off-Guard|Off-Guard]] while attached.\n\nIf the blood mouse is killed or pushed away while attached to a creature it has drained blood from, that creature takes 1d4 bleed damage. Escaping the attach or removing the blood mouse in other ways doesn't cause bleed damage."

  - name: "Blood Drain"
    desc: "`pf2:1`  **Requirements** The blood mouse is attached to a creature.\n\n**Effect** The blood mouse uses its proboscis to drain blood from the creature it's attached to. This deals 1d4 piercing damage, and the blood mouse gains temporary Hit Points equal to the damage dealt.\n\nA creature that has its blood drained by a blood mouse is [[Conditions/Drained|Drained 1]] until it recieves healing (of any kind or amount)."
 
```

```encounter-table
name: Blood Mouse
creatures:
  - 1: Blood Mouse
```



This nuisance animal is usually found in tightly packed urban areas, though larger specimens have been spotted in wild plains and forests. So named for their predilection for drinking blood through their snout-like proboscises, blood mice also sport strong back legs made for jumping and a long tail with a ball of fur on the end. Tiny glands in the fur ball emit pheromones that the blood mouse can use to dull prey's defenses or distract predators. Either way, the blood mouse's only true means of self-defense is its needle-like proboscis, which it uses to fight with as well as feed.

A single blood mouse is hardly a threat to most larger animals, but it is not uncommon to encounter blood mice in packs of three to five. While not typically aggressive, blood mice defend their dens and offspring ferociously. A short gestation period and high metabolism means that unprotected feeding grounds might become overrun with blood mice in a matter of days. Solitary blood mice usually do not attack larger creatures, preferring smaller prizes such as bugs, small birds, or voles.

## Prestigious Pet

In certain high society circles, people have tried to domesticate blood mice to serve as pets. To avoid having their blood sucked, some keepers remove their blood mouse's proboscis, in which case the rodent must be hand-fed.

## Monster Part Subsystem

**Blood Mouse Creature 1**

**Monster Parts** 3.5/7/13 gp

**Eligible Refinements** weapons (piercing), armor (light), perception item, skill items (Acrobatics, Stealth, Survival)

**Eligible Imbued Properties** bane, charisma, dexterity, energy resistant (positive), sensory (darkvision), wild
