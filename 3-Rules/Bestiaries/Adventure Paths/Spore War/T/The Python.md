---
title: "The Python"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.ebdfXxEWYOCjgbb0" 
tags:
  - pf2e/creature/type/devil
  - pf2e/creature/type/fiend
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/23
  - remaster
statblock: inline
name: "The Python"
level: 23
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #212: A Voice in the Blight"
name: "The Python"
level: "Creature 23"
rare_03: [[Unique]]
alignment: ""
size: "huge"
trait_01: [[devil]]
trait_02: [[fiend]]
trait_03: [[unholy]]
modifier: 40
perception:
  - name: "Perception"
    desc: "+40; Greater Darkvision, Truesight"
languages: "Diabolic, Draconic, Empyrean, Necril; Telepathy 100 feet, Truespeech"
skills:
  - name: "Skills"
    desc: "Acrobatics: +37, Athletics: +44, Deception: +42, Diplomacy: +38, Intimidation: +40, Religion: +38, Society: +38"
abilityMods: [11, 6, 9, 7, 7, 10]
speed: 30 feet,  fly 30 feet
sourcebook: "_Pathfinder #212: A Voice in the Blight_"
ac: 47
armorclass:
  - name: AC
    desc: "47; __Fort__ +40, __Ref__ +35, __Will__ +38"
hp: 460
health:
  - name: ""
  - name: HP
    desc: "460, regeneration 40 (deactivated by holy), consuming resurrection; __Immunities__  death effects,  fire,  void; __Weaknesses__ holy 20; __Resistances__ poison 20, physical 20 (except magical silver)"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Constant Spells|Constant Spells]]"
    desc: "  A constant spell affects the monster without the monster needing to cast it, and its duration is unlimited. If a constant spell gets counteracted, the monster can reactivate it by spending the normal spellcasting actions the spell requires."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Regeneration|Regeneration 40 (Deactivated by Holy)]]"
    desc: "  This monster regains the listed number of Hit Points each round at the beginning of its turn. Its [[Conditions/Dying|Dying]] condition never increases beyond Dying 3 as long as its regeneration is active. However, if it takes damage of a type listed in the regeneration entry, its regeneration deactivates until the end of its next turn. Deactivate the regeneration before applying any damage of a listed type, since that damage might kill the monster by bringing it to Dying 4."

  - name: "Consuming Resurrection"
    desc: " (divine,healing,unholy) If the Python dies, he consumes souls stored within his scales and returns to life as if subject to a successful [[Spells/Resurrect|Resurrect]] ritual in area **C5** of the Amaranthine Oubliette 1d10 days later. The Python can't use Consuming Resurrection again for 9 years."

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Jaws"
    desc: "+42 (magical, reach 15 feet, unarmed, unholy)\n__Damage__  4d12 + 19 piercing plus improved-grab,soul-venom 2d6 void plus improved-grab,soul-venom"

  - name: "**Melee** `pf2:1` Tail"
    desc: "+42 (magical, reach 20 feet, unholy)\n__Damage__  4d10 + 19 bludgeoning plus improved-grab"

  - name: "Occult Innate Spells"
    desc: "DC 43, attack +35; __10th __  _[[Spells/Indestructibility|Indestructibility]]_; __9th __  _[[Spells/Phantasmagoria|Phantasmagoria]]_, _[[Spells/Seize Soul|Seize Soul (At Will)]]_; __8th __  _[[Spells/Quandary|Quandary (x3)]]_, _[[Spells/Spirit Blast|Spirit Blast]]_; __7th __  _[[Spells/Interplanar Teleport|Interplanar Teleport]]_, _[[Spells/Planar Palace|Planar Palace]]_; __5th __  _[[Spells/Mind Probe|Mind Probe (At Will)]]_, _[[Spells/Translocate|Translocate]]_; __4th __  _[[Spells/Translocate|Translocate]]_\n__Cantrips__  __(10th)__ _[[Spells/Divine Lance|Divine Lance]]_, _[[Spells/Telekinetic Hand|Telekinetic Hand]]_, _[[Spells/Void Warp|Void Warp]]_\n__Constant__  __(10th)__ _[[Spells/Fly|Fly]]_, _[[Spells/Truesight|Truesight]]_, _[[Spells/Truespeech|Truespeech]]_"

  - name: "Consume Soul"
    desc: "`pf2:3` (death,divine) **Frequency** once per hour\n* * *\n\n**Effect** The Python consumes a soul that is trapped in one of his scales or is adjacent to, then gains 150 temporary Hit Points for 1 hour. A soul consumed in this way can only be restored to life by a rank 10 spell, an artifact, or divine intervention."

  - name: "Fast Swallow"
    desc: "`pf2:r`  **Trigger** The Python Grabs a creature\n* * *\n\n**Effect** The Python uses Swallow Whole."

  - name: "Snatch Soul"
    desc: "`pf2:r` (divine,void) **Trigger** An adjacent or swallowed creature dies\n* * *\n\n**Effect** The Python casts [[Spells/Seize Soul|Seize Soul]] on the creature."

  - name: "Soul Scales"
    desc: "  The Python can use one of his scales to house a soul he captures with seize soul if that soul is from a creature that is level 22 or lower. When he casts seize soul to transfer such a soul to another vessel or to release it, the scale isn't destroyed. While a scale contains a soul, a screaming face can be seen within it."

  - name: "Soul Venom"
    desc: " (divine,poison) **Saving Throw** DC 47 Fortitude check\n\n**Maximum Duration** 6 rounds\n\n**Stage 1** 10d6 spirit damage and [[Conditions/Stupefied|Stupefied 1]] (1 round)\n\n**Stage 2** 12d6 spirit damage and [[Conditions/Stupefied|Stupefied 2]] (1 round)\n\n**Stage 3** 14d6 spirit damage and [[Conditions/Stupefied|Stupefied 3]]"

  - name: "[[Bestiary Ability Glossary/Swallow Whole|Swallow Whole]]"
    desc: "`pf2:1` (attack) Large, 4d10 bludgeoning + 4d8 spirit, Rupture 45\n* * *\n\nThe monster attempts to swallow a creature of the listed size or smaller that it has grabbed or restrained in its jaws or mouth. If a swallowed creature is of the maximum size listed, the monster can't use Swallow Whole again. If the creature is smaller than the maximum, the monster can usually swallow more creatures; the GM determines the maximum. The monster attempts an Athletics check check opposed by the grabbed creature's Reflex DC. If it succeeds, it swallows the creature. The monster's mouth or jaws no longer grab a creature it has swallowed, so the monster is free to use them to Strike or Grab once again. The monster can't attack creatures it has swallowed.\n\nA swallowed creature is [[Conditions/Grabbed|Grabbed]], is [[Conditions/Slowed|Slowed 1]], and has to hold its breath or start suffocating. The swallowed creature takes the listed amount of damage when first swallowed and at the end of each of its turns while it's swallowed. If the victim [[Actions/Escape|Escapes]] this ability's grabbed condition, it exits through the monster's mouth. This frees any other creature grabbed in the monster's mouth or jaws. A swallowed creature can attack the monster that has swallowed it, but only with unarmed attacks or with weapons of light Bulk or less. The swallowing creature is [[Conditions/Off-Guard|Off-Guard]] against the attack. If the monster takes piercing or slashing damage equaling or exceeding the listed Rupture value from a single attack or spell, the swallowed creature cuts itself free. A creature that gets free by either Escaping or cutting itself free can immediately breathe and exits the swallowing monster's space.\n\n[[Bestiary Effects/Effect_ Engulf and Swallow Whole|Effect: Engulf and Swallow Whole]]\n\nIf the monster dies, a swallowed creature can be freed by creatures adjacent to the corpse if they spend a combined total of 3 actions cutting the monster open with a weapon or unarmed attack that deals piercing or slashing damage."

  - name: "[[Bestiary Ability Glossary/Improved Grab|Improved Grab]]"
    desc: "  **Requirements** The monster's last action was a successful Strike that lists Improved Grab in its damage entry, or the monster has a creature [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]]\n* * *\n\n**Effect** If used after a Strike, the monster attempts to [[Actions/grapple|grapple]] the creature using the body part it attacked with as a free action. This attempt neither applies nor counts toward the creature's multiple attack penalty.\n\nThe monster can instead spend an action to use Grab and choose one creature it's grabbing or restraining with an appendage that has Grab to automatically extend that condition to the end of the monster's next turn."
 
```

```encounter-table
name: The Python
creatures:
  - 1: The Python
```




