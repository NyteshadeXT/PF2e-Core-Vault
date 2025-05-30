---
title: "Imvath"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.uND9uwnPoBVOU7jd" 
tags:
  - pf2e/creature/type/demon
  - pf2e/creature/type/fiend
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/19
  - remaster
statblock: inline
name: "Imvath"
level: 19
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #212: A Voice in the Blight"
name: "Imvath"
level: "Creature 19"
rare_03: [[Rare]]
alignment: ""
size: "Large"
trait_01: [[demon]]
trait_02: [[fiend]]
trait_03: [[unholy]]
modifier: 33
perception:
  - name: "Perception"
    desc: "+33; Darkvision, Truesight"
languages: "Chthonian, Common, Empyrean; Telepathy 100 feet, Truespeech"
skills:
  - name: "Skills"
    desc: "Acrobatics: +31, Arcana: +33, Athletics: +37, Deception: +35, Diplomacy: +33, Intimidation: +35, Religion: +35, Society: +32, Stealth: +33"
abilityMods: [10, 6, 6, 5, 8, 6]
speed: 30 feet,  fly 30 feet
sourcebook: "_Pathfinder #212: A Voice in the Blight_"
ac: 43
armorclass:
  - name: AC
    desc: "43; __Fort__ +33, __Ref__ +31, __Will__ +35; +1 to all saves vs. magic"
hp: 400
health:
  - name: ""
  - name: HP
    desc: "400; __Weaknesses__ cold iron 15, holy 15"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Constant Spells|Constant Spells]]"
    desc: "  A constant spell affects the monster without the monster needing to cast it, and its duration is unlimited. If a constant spell gets counteracted, the monster can reactivate it by spending the normal spellcasting actions the spell requires."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Frightful Presence|Frightful Presence]]"
    desc: " (aura,emotion,fear,mental) 30 feet DC 38 Will check\n* * *\n\nA creature that first enters the area must attempt a Will save.\n\nRegardless of the result of the saving throw, the creature is temporarily immune to this monster's Frightful Presence for 1 minute.\n* * *\n\n**Critical Success** The creature is unaffected by the presence.\n\n**Success** The creature is [[Conditions/Frightened|Frightened 1]].\n\n**Failure** The creature is [[Conditions/Frightened|Frightened 2]].\n\n**Critical Failure** The creature is [[Conditions/Frightened|Frightened 4]]."

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike (Fist or Claw Only)]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

  - name: "Restoration Vulnerability"
    desc: "  The first time each round that a creature avoids death via an effect like breath of life or spends all their Hero Points to avoid death (but not if a dead creature is restored to life), or the first time each round a broken object is repaired to full Hit Points (such as via a mending or remake spell) within 120 feet of the imvath, the demon takes 6d6 mental damage."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Jaws"
    desc: "+37 (magical, unarmed, unholy)\n__Damage__  4d8 + 18 bludgeoning plus doom-soul 2d6 spirit plus doom-soul"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+37 (magical, reach 10 feet, unarmed, unholy)\n__Damage__  4d10 + 18 bludgeoning plus improved-knockdown"

  - name: "**Melee** `pf2:1` Claw"
    desc: "+37 (agile, magical, reach 10 feet, unarmed, unholy)\n__Damage__  4d4 + 18 slashing 2d6 bleed"

  - name: "Divine Innate Spells"
    desc: "DC 41, attack +33; __10th __  _[[Spells/Cataclysm|Cataclysm]]_; __9th __  _[[Spells/Nightmare|Nightmare (At Will)]]_, _[[Spells/Phantasmagoria|Phantasmagoria]]_, _[[Spells/Phantasmal Calamity|Phantasmal Calamity (x3)]]_; __8th __  _[[Spells/Charm|Charm]]_, _[[Spells/Divine Decree|Divine Decree]]_, _[[Spells/Suggestion|Suggestion]]_; __5th __  _[[Spells/Humanoid Form|Humanoid Form]]_, _[[Spells/Translocate|Translocate]]_; __4th __  _[[Spells/Translocate|Translocate (At Will)]]_\n__Cantrips__  __(10th)__ _[[Spells/Divine Lance|Divine Lance]]_\n__Constant__  __(9th)__ _[[Spells/Truesight|Truesight]]_, _[[Spells/Truespeech|Truespeech]]_"

  - name: "Rituals"
    desc: "_Control Weather_, _Demonic Pact_, _Geas_"

  - name: "Doom Soul"
    desc: " (divine) An imvath's fangs rip and tear souls as easily as they do flesh and bone. The first time in a round that a creature takes any spirit damage from an imvath's bite, it must succeed at a DC 41 Will check save or its doomed condition value increases by 1."

  - name: "Lasting Form"
    desc: "  When an imvath casts humanoid form, the spell's duration lasts until their next daily preparations."

  - name: "[[Bestiary Ability Glossary/Improved Knockdown|Improved Knockdown]]"
    desc: "  **Requirements** The monster's last action was a successful Strike that lists Improved Knockdown in its damage entry\n* * *\n\n**Effect** The monster attempts to [[Actions/trip|trip]] the creature as a free action. This attempt neither applies nor counts toward the monster's multiple attack penalty."
 
```

```encounter-table
name: Imvath
creatures:
  - 1: Imvath
```



Some demons embody subtle methods in their pursuit of tempting mortals to fall into sin so that their souls will be damned to the Outer Rifts. Others embrace brutality and devastation and seek instead to ruin mortal lives and accomplishments. The imvath is both, for their whispers encourage mortals to seek not only their own destruction, but also the destruction of their worlds, so the imvath can enjoy the spectacle of extinction. Thankfully rare, imvaths arise from the souls of mortals whose acts came close to, or actually ended, worlds.

An imvath appears as an androgynous, towering, pale humanoid with four red eyes, an oversized mouth filled with fangs, and dozens of blood-red spurs. One arm is muscular, while the other is gaunt. Its legs end in burning hooves, while a lion's tail and bat wings complete its frame.

## Imvath Goals

Whether as generals among demonic armies or as assassins and saboteurs of nations, imvaths know that a world's destruction requires time and dedication. When not actively enjoying planetary devastation, they lend their talents at ruination to those whose work can set a world on just such a path to doom.
