---
title: "Vamollaroth"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.q4Hwhap275qpm2iq" 
tags:
  - pf2e/creature/type/amphibious
  - pf2e/creature/type/demon
  - pf2e/creature/type/fiend
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/21
  - remaster
statblock: inline
name: "Vamollaroth"
level: 21
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #212: A Voice in the Blight"
name: "Vamollaroth"
level: "Creature 21"
rare_03: [[Unique]]
alignment: ""
size: "grg"
trait_01: [[amphibious]]
trait_02: [[demon]]
trait_03: [[fiend]]
trait_04: [[unholy]]
modifier: 36
perception:
  - name: "Perception"
    desc: "+36; Darkvision"
languages: "Common, Fey, Thalassic, Chthonian; Telepathy 100 feet"
skills:
  - name: "Skills"
    desc: "Acrobatics: +19, Athletics: +39, Intimidation: +37, Nature: +21, Stealth: +35"
abilityMods: [10, 6, 7, 4, 7, 8]
speed: 25 feet,  fly 20 feet,  swim 30 feet
sourcebook: "_Pathfinder #212: A Voice in the Blight_"
ac: 45
armorclass:
  - name: AC
    desc: "45; __Fort__ +32, __Ref__ +29, __Will__ +32; +1 status to all saves vs. magic"
hp: 355
health:
  - name: ""
  - name: HP
    desc: "355, regeneration 30 (deactivated by acid, cold, or fire); __Weaknesses__ cold iron 20, holy 20"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Constant Spells|Constant Spells]]"
    desc: "  A constant spell affects the monster without the monster needing to cast it, and its duration is unlimited. If a constant spell gets counteracted, the monster can reactivate it by spending the normal spellcasting actions the spell requires."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Regeneration|Regeneration 30 (Deactivated by Acid, Cold, or Fire)]]"
    desc: "  This monster regains the listed number of Hit Points each round at the beginning of its turn. Its [[Conditions/Dying|Dying]] condition never increases beyond Dying 3 as long as its regeneration is active. However, if it takes damage of a type listed in the regeneration entry, its regeneration deactivates until the end of its next turn. Deactivate the regeneration before applying any damage of a listed type, since that damage might kill the monster by bringing it to Dying 4."

  - name: "Purity Vulnerability"
    desc: "  Vamollaroth revels in the foulness he exudes and becomes distraught when contaminations are purified. The first time in a round when a contamination is purified (such as via [[Spells/Cleanse Cuisine|Cleanse Cuisine]]) or a toxin is counteracted (such as via [[Spells/Cleanse Affliction|Cleanse Affliction]]) with 30 feet of him, Vamollaroth takes 8d6 mental damage."

  - name: "[[Bestiary Ability Glossary/Stench|Stench]]"
    desc: " (aura,olfactory) 60 feet. Vamollaroth exudes an almost physical reek. A creature entering the aura or starting its turn in the aura must succeed at a DC 41 Fortitude check save or become [[Conditions/Sickened|Sickened 2]] (plus [[Conditions/Slowed|Slowed 1]] for as long as it's sickened on a critical failure). While within the aura, affected creatures take a –2 circumstance penalty to saves against poison and to recover from the sickened condition. A creature that succeeds at its save is temporarily immune for 1 minute.\n\n[[Bestiary Effects/Effect_ Vamollaroth Stench|Effect: Vamollaroth Stench]]"

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Jaws"
    desc: "+39 (magical, reach 10 feet, unarmed, unholy)\n__Damage__  4d10 + 18 piercing plus improved-grab 2d6 poison plus improved-grab"

  - name: "**Melee** `pf2:1` Tongue"
    desc: "+39 (agile, magical, reach 30 feet, unholy)\n__Damage__  4d8 + 18 bludgeoning plus tongue-grab"

  - name: "Divine Innate Spells"
    desc: "DC 41, attack +33; __9th __  _[[Spells/Divine Wrath|Divine Wrath]]_; __8th __  _[[Spells/Moment of Renewal|Moment of Renewal]]_; __7th __  _[[Spells/Execute|Execute]]_; __5th __  _[[Spells/Translocate|Translocate]]_; __4th __  _[[Spells/Translocate|Translocate (At Will)]]_\n__Constant__  __(4th)__ _[[Spells/Unfettered Movement|Unfettered Movement]]_"

  - name: "Rituals"
    desc: "_Blight_, _Demonic Pact_"

  - name: "Song of the Swamp"
    desc: "`pf2:1` (auditory,emotion,mental,primal) **Frequency** once per 10 minutes\n* * *\n\n**Effect** The mobogo unleashes a booming croak. All boggards and mobogos within 50 feet gain a +2 status bonus to damage rolls and saves against fear for 1 round. Other creatures in the area of effect must attempt a DC 44 Will check save.\n* * *\n\n**Success** The creature is unaffected and is temporarily immune for 24 hours.\n\n**Failure** The creature is [[Conditions/Slowed|Slowed 1]] for 1d4 rounds.\n\n**Critical Failure** The creature is [[Conditions/Slowed|Slowed 2]] for 1d4 rounds.\n\n[[Bestiary Effects/Effect_ Song of the Swamp|Effect: Song of the Swamp]]"

  - name: "Spew Pollution"
    desc: "`pf2:2` (poison,primal) Vamollaroth spews a foul slurry of pollution and toxic sludge in a 60-foot cone. Creatures in the area take 20d6 poison damage and must attempt a DC 44 Reflex check save. Vamollaroth can't Spew Pollution again for 1d4 rounds.\n* * *\n\n**Critical Success** The creature takes no damage.\n\n**Success** The creature takes half damage.\n\n**Failure** The creature takes full damage and is exposed to a level 18 variant of brain worm.\n\n**Critical Failure** As failure but double damage.\n* * *\n\n**Brain Worm**\n\n**Saving Throw** DC 44 Fortitude check\n\n**Onset** 1 day\n\n**Stage 1** [[Conditions/Stupefied|Stupefied 2]] (1 day)\n\n**Stage 2** stupefied 2, and whenever you take damage, you must succeed at a Will save against the disease's DC or become [[Conditions/Confused|Confused]] for 1 round (1 day)\n\n**Stage 3** [[Conditions/Stupefied|Stupefied 3]], and whenever you take damage, you must succeed at a Will save against the disease's DC or become confused for 1 minute (1 day)\n\n**Stage 4** [[Conditions/Stupefied|Stupefied 4]] and confused, damage does not end the confused condition (1 day)\n\n**Stage 5** [[Conditions/Unconscious|Unconscious]] (1 day)\n\n**Stage 6** death"

  - name: "[[Bestiary Ability Glossary/Swallow Whole|Swallow Whole]]"
    desc: "`pf2:1` (attack) Hiuge, 4d10+9 bludgeoning, Rupture 60\n* * *\n\nThe monster attempts to swallow a creature of the listed size or smaller that it has grabbed or restrained in its jaws or mouth. If a swallowed creature is of the maximum size listed, the monster can't use Swallow Whole again. If the creature is smaller than the maximum, the monster can usually swallow more creatures; the GM determines the maximum. The monster attempts an Athletics check check opposed by the grabbed creature's Reflex DC. If it succeeds, it swallows the creature. The monster's mouth or jaws no longer grab a creature it has swallowed, so the monster is free to use them to Strike or Grab once again. The monster can't attack creatures it has swallowed.\n\nA swallowed creature is [[Conditions/Grabbed|Grabbed]], is [[Conditions/Slowed|Slowed 1]], and has to hold its breath or start suffocating. The swallowed creature takes the listed amount of damage when first swallowed and at the end of each of its turns while it's swallowed. If the victim [[Actions/Escape|Escapes]] this ability's grabbed condition, it exits through the monster's mouth. This frees any other creature grabbed in the monster's mouth or jaws. A swallowed creature can attack the monster that has swallowed it, but only with unarmed attacks or with weapons of light Bulk or less. The swallowing creature is [[Conditions/Off-Guard|Off-Guard]] against the attack. If the monster takes piercing or slashing damage equaling or exceeding the listed Rupture value from a single attack or spell, the swallowed creature cuts itself free. A creature that gets free by either Escaping or cutting itself free can immediately breathe and exits the swallowing monster's space.\n\n[[Bestiary Effects/Effect_ Engulf and Swallow Whole|Effect: Engulf and Swallow Whole]]\n\nIf the monster dies, a swallowed creature can be freed by creatures adjacent to the corpse if they spend a combined total of 3 actions cutting the monster open with a weapon or unarmed attack that deals piercing or slashing damage."

  - name: "Swamp Stride"
    desc: "  Vamollaroth ignores difficult terrain caused by swamp terrain features."

  - name: "Tongue Grab"
    desc: "  A creature hit by the mobogo's tongue becomes [[Conditions/Grabbed|Grabbed]] by the mobogo. The creature isn't [[Conditions/Immobilized|Immobilized]], but it can't move beyond the reach of the mobogo's tongue.\n\nA creature can sever the tongue with a Strike against AC 43 that deals at least 30 slashing damage. This deals no damage to the mobogo but prevents it from using its tongue Strike until it regrows its tongue, which takes 1 round.\n\nThe mobogo can move without ending the Grab as long as the creature remains within the tongue's reach."

  - name: "Tongue Reposition"
    desc: "`pf2:1`  The mobogo attempts to move a creature [[Conditions/Grabbed|Grabbed]] by its tongue. The mobogo rolls an Athletics check check against the creature's Fortitude DC.\n\nOn a success, the mobogo moves the creature into any space within the tongue's reach. If it wishes, the mobogo can transfer the grabbed creature to its jaws."

  - name: "[[Bestiary Ability Glossary/Improved Grab|Improved Grab]]"
    desc: "  **Requirements** The monster's last action was a successful Strike that lists Improved Grab in its damage entry, or the monster has a creature [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]]\n* * *\n\n**Effect** If used after a Strike, the monster attempts to [[Actions/grapple|grapple]] the creature using the body part it attacked with as a free action. This attempt neither applies nor counts toward the creature's multiple attack penalty.\n\nThe monster can instead spend an action to use Grab and choose one creature it's grabbing or restraining with an appendage that has Grab to automatically extend that condition to the end of the monster's next turn."
 
```

```encounter-table
name: Vamollaroth
creatures:
  - 1: Vamollaroth
```


Variant mobogo

Mobogos are massive, swamp-dwelling monstrosities that combine the worst aspects of giant toads and evil dragons. Lazy, cruel, and greedy, these vile creatures make their lairs in the most ancient and primordial swamps. The boggards who call such places home worship mobogos as living demigods, regularly bringing sacrifices of food and valuables lest they become the next victims of the mobogos' boundless appetites.
