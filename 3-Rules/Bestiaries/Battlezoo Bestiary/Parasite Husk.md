---
title: "Parasite Husk"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.iVkWI0l5cOyQWhU8" 
tags:
  - pf2e/creature/type/evil
  - pf2e/creature/type/mindless
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/3
statblock: inline
name: "Parasite Husk"
level: 3
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/parasite_husk.webp| ]]
source: "Battlezoo Bestiary"
name: "Parasite Husk"
level: "Creature 3"

alignment: ""
size: "Medium"
trait_01: [[evil]]
trait_02: [[mindless]]
trait_03: [[undead]]
trait_04: [[unholy]]
modifier: 7
perception:
  - name: "Perception"
    desc: "+7; Lifesense 30 Feet"
languages: ""
skills:
  - name: "Skills"
    desc: "Athletics: +10"
abilityMods: [3, -3, 4, -5, 0, -4]
speed: 25 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__ +13, __Ref__ +4, __Will__ +7"
hp: 75
health:
  - name: ""
  - name: HP
    desc: "75, negative healing; __Immunities__  death effects,  disease,  mental,  paralyzed,  poison,  unconscious; __Weaknesses__ vitality 5, slashing 5"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "Erupt"
    desc: "`pf2:r`  **Trigger** The husk is reduced to 0 Hit Points;\n* * *\n\n**Effect** The husk's animating worms erupt in a final frenzied attempt to claim a new host. All creatures within 5 feet take 2d10 piercing damage (DC 17 basic Reflex save). A creature that critically fails its save is exposed to parasitic infestation."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Fist"
    desc: "+12 ()\n__Damage__  1d8 + 5 bludgeoning plus grab"

  - name: "**Melee** `pf2:1` Worms"
    desc: "+10 (reach 10 feet)\n__Damage__  1d10 + 5 piercing plus parasitic-infestation"

  - name: "Parasitic Infestation"
    desc: " (disease) An infected creature cannot remove the sickened condition until it has been cured of the disease;\n\n**Saving Throw** DC 17 Fortitude;\n* * *\n\n**Stage 1** [[Conditions/Enfeebled|Enfeebled 1]] (1 day);\n\n**Stage 2** [[Conditions/Sickened|Sickened 1]] and 1d6 piercing damage (1 day);\n\n**Stage 3** [[Conditions/Sickened|Sickened 2]] and 2d6 piercing damage (1 day);\n\n**Stage 4** [[Conditions/Sickened|Sickened 3]] and 3d6 piercing damage (1 day);\n\n**Stage 5** dead, rising as a parasite husk immediately"

  - name: "Increase Infestation"
    desc: "`pf2:2`  Worms burst from the husk's skin and attempt to forcibly move to a new host;\n\n**Requirements** The husk has a creature [[Conditions/Grabbed|Grabbed]];\n\n**Effect** The husk makes two worms Strikes against the grabbed creature. The husks's multiple attack penalty increases only after both attacks are made. If both attacks hit a creature currently afflicted with the parasite husks's parasitic infestation disease, the disease automatically progresses to the next stage."

  - name: "Vermicular Surge"
    desc: "`pf2:2`  The worms inside the parasite husk tremble terribly, then lunge forward all as one, urging their husk onward, heedless of the damage done to it. The parasite husk Strides three times, ignoring difficult and greater difficult terrain. For each square of difficult or greater difficult terrain it moves through, the parasite husk takes 5 bludgeoning or 10 bludgeoning, respectively."

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  "
 
```

```encounter-table
name: Parasite Husk
creatures:
  - 1: Parasite Husk
```



The horrific rituals needed to raise a body from the dead and imbue it with the foul energy of unlife require tapping into deep stores of negative energy. Whether through carelessness, mishap, or simply the fickle hand of fate, this energy is not always directed as its summoner wishes. The parasite husk is one example of necromantic magic gone awry.

A parasite husk manifests when the ritual to create a zombie utilizes a corpse that hosted unwelcome parasitic guests. The most common example found in these bodies is the tapeworm, although other, fouler, infestations no doubt exist. Deprived of nutrients upon their host's death, these creatures slowly wither away, their tiny corpses remaining within the deceased. These small carcasses provide another possible receptacle for the unholy negative energy of the creation ritual. In the right circumstances, the negative energies can awaken these parasites, and instead of a mindless and relatively docile zombie, a significantly more dangerous creature rises from the dead. The reanimated parasites quickly move throughout the corpse and gain the ability to direct its movements, albeit in a lumbering and ungainly fashion. Any necromancer assuming their new creation will be under their control is quickly dissuaded of this notion. Indeed, many parasite husk infestations begin with the unfortunate summoner as their first victim.

At first glance, a parasite husk appears identical to a normal zombie. However, closer examination reveals a constant and disturbing motion under its skin, as the multitude of ravenous worms within slither erratically and animate the shambling body. These worms can sense living beings and are drawn to them with the more insidious desire to spread and infect new hosts. As a husk draws nearer to a living creature, more and more of its foul denizens erupt from the dying flesh and strain towards the new, more vibrant body.

## Ectoparasite Husks

The most common type of parasite husk is the worm variety, such as the one presented here. However, there also exist parasite husks consisting of undead ticks, lice, fleas, and similar burrowing pests. These "ectoparasite husks" lack the reach of a standard parasite husk but move much faster and erupt into larger clouds of pests when their husk is destroyed.

## Monster Part Subsystem

**Parasite Husk Creature 3**

**Monster Parts** 7/18/30 gp

**Eligible Refinements** weapons (bludgeoning, piercing), armor (medium), perception item, skill items (Athletics)

**Eligible Imbued Properties** constitution, energy resistant (negative), evil, negative, strength, wild
