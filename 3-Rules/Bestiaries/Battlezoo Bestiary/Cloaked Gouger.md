---
title: "Cloaked Gouger"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.z1SK3TfiDWk1Mmf9" 
tags:
  - pf2e/creature/type/evil
  - pf2e/creature/type/fey
  - pf2eMonster
  - pf2e/creature/level/6
statblock: inline
name: "Cloaked Gouger"
level: 6
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/cloaked_gouger.webp| ]]
source: "Battlezoo Bestiary"
name: "Cloaked Gouger"
level: "Creature 6"

alignment: ""
size: "Medium"
trait_01: [[evil]]
trait_02: [[fey]]
modifier: 16
perception:
  - name: "Perception"
    desc: "+16; Darkvision, Lifesense (Imprecise) 60 Feet"
languages: "Common, Fey"
skills:
  - name: "Skills"
    desc: "Acrobatics: +15, Athletics: +15, Intimidation: +13, Medicine: +14, Occultism: +14, Stealth: +13"
abilityMods: [5, 3, 4, 4, 2, 3]
speed: 25 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 23
armorclass:
  - name: AC
    desc: "23 all-around vision; __Fort__ +16, __Ref__ +15, __Will__ +12; -2 status vs. gaze attacks"
hp: 95
health:
  - name: ""
  - name: HP
    desc: "95; __Weaknesses__ cold iron 5"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Dagger|+1 Dagger]], Gouger Cloak"
abilities_mid:
  - name: ""
  - name: "Dazzling Aura"
    desc: " (aura,occult,visual) [[Bestiary Ability Glossary/Aura|Aura]] 30 feet.\n\nA creature that starts its turn in the area must attempt a DC 22 Fortitude save. On a failure, the creature is [[Conditions/Dazzled|Dazzled]] for 1d4 rounds by the entrancing, unblinking eyes on the gouger's cloak.\n\nRegardless of the result of this save, the creature is immune to this cloaked gouger's dazzling aura for 24 hours."

  - name: "Unblinking"
    desc: "  A cloaked gouger takes a -2 status penalty to saving throws against gaze attacks.\n\nIt can never use the [[Actions/Avert Gaze|Avert Gaze]] action."

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Claw +17 ()\n__Damage__  2d4 + 7 slashing plus gouger-toxin"

  - name: "Melee"
    desc: "`pf2:1` Dagger +15 (agile, finesse, versatile s)\n__Damage__  1d6 + 7 piercing"

  - name: "Melee"
    desc: "`pf2:1` Cloak +15 (nonlethal, reach 10 feet)\n__Damage__  2d6 + 7 bludgeoning plus grab"

  - name: "Cloak's Gaze"
    desc: "`pf2:1` (concentrate,occult,visual) The eyes stitched to the gouger's cloak fix their gaze on a creature within 30 feet. That creature must attempt a DC 24 Fortitude saving throw. On a failed save, the creature becomes [[Conditions/Dazzled|Dazzled]] for 1 minute; if the creature was already dazzled, it is [[Conditions/Blinded|Blinded]] for 1 minute instead.\n\nA creature [[Conditions/Grabbed|Grabbed]] by the gouger's cloak takes a -2 circumstance penalty to the save."

  - name: "Gouge Eyes"
    desc: "`pf2:3`  **Requirements** The target is [[Conditions/Unconscious|Unconscious]], [[Conditions/Immobilized|Immobilized]], or [[Conditions/Paralyzed|Paralyzed]] and the cloaked gouger is wielding a dagger;\n\n**Effect** The cloaked gouger cuts out the target's eyes. The target must attempt a DC 24 Fortitude save. On a failure, it is permanently [[Conditions/Blinded|Blinded]]."

  - name: "Gouger Toxin"
    desc: " (injury,poison) **Saving Throw** DC 20 Fortitude;\n\n**Maximum Duration** 6 rounds;\n\n**Stage 1** 1d6 poison damage (1 round);\n\n**Stage 2** 1d6 poison damage and [[Conditions/Stunned|Stunned 1]] (1 round);\n\n**Stage 3** 1d6 poison damage and [[Conditions/Paralyzed|Paralyzed]] (1 round)"
 
```

```encounter-table
name: Cloaked Gouger
creatures:
  - 1: Cloaked Gouger
```



Cloaked gougers are shadowy fey hunters who hunt down creatures and steal their precious eyes to add to their collection. A gouger wears its collection of stolen trophies on its person in the form of a macabre cloak made from its victims' flattened and stitched eyeballs. Since cloaked gougers have no eyes themselves-that part of their face is only featureless flesh-they rely on their cloaks to navigate the world and perform their foul deeds.

Cloaked gougers travel far and wide looking for creatures with extraordinary eyes. Monsters with supernatural gazes, people who have seen incredible things, or beings with particularly beautiful eyes should fear the attention of a cloaked gouger. Once a gouger selects a target, it sets up an ambush and surprises its prey, paralyzing it with toxins so it can remove its prize. Gougers use alchemical elixirs to preserve the eyeballs of their victims and enhance the most desirable features of their organs. Though they rarely do so, cloaked gougers can reattach creatures' eyes as easily as they can remove them.

Though undeniably wicked, gougers are said to be reasonable creatures, and on occasion, they can be convinced to heal their own victims or the victim of another gouger, but the price is always steep, and it is never guaranteed that a victim's new eyes will be the same as the ones that were stolen.

## Gouger Cloak

A gouger cloak makes an impressive prize for any adventurer, but it is simply a spectacular cloak as its innate magic dies with the gouger. However, skilled crafters of magic items can tap into the cloak's inherent magic and turn a gouger cloak into the much-prized _[[Equipment/Cloak of Eyes|Cloak of Eyes]]_.

## Prized Eyes

Despite their vulnerability to gaze attacks, gougers prize the eyes of creatures such as basilisks above all others. A gouger that can claim such trophies earns incredible respect from other gougers. Even more valuable are the eyes of the medusa, a creature both feared and respected by cloaked gougers. Adventurers who can attain such eyes gain a powerful edge in bargaining with gougers.

## Monster Part Subsystem

**Cloaked Gouger Creature 6**

**Monster Parts** 30/65/125 gp

**Eligible Refinements** weapons (slashing), armor (light), perception item, skill items (Acrobatics, Athletics, Intimidation, Medicine, Occultism, Stealth)

**Eligible Imbued Properties** bane, constitution, energy resistant (positive), evil, intelligence, poison, strength, wild
