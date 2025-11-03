---
title: "Prismatic Ooze"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.BD30zCyPGoAtL4m6" 
tags:
  - pf2e/creature/type/mindless
  - pf2e/creature/type/ooze
  - pf2eMonster
  - pf2e/creature/level/17
statblock: inline
name: "Prismatic Ooze"
level: 17
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/prismatic_ooze.webp| ]]
source: "Battlezoo Bestiary"
name: "Prismatic Ooze"
level: "Creature 17"
rare_03: [[Rare]]
alignment: ""
size: "Large"
trait_01: [[mindless]]
trait_02: [[ooze]]
modifier: 23
perception:
  - name: "Perception"
    desc: "+23; "
languages: ""
skills:
  - name: "Skills"
    desc: "Athletics: +34"
abilityMods: [9, -4, 8, -5, 0, -5]
speed: 20 feet,  fly 20 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 28
armorclass:
  - name: AC
    desc: "28; __Fort__ +31, __Ref__ +19, __Will__ +23"
hp: 450
health:
  - name: ""
  - name: HP
    desc: "450; __Immunities__  acid,  auditory,  cold,  critical hits,  electricity,  fire,  force,  mental,  void,  petrified,  poison,  vitality,  precision,  sonic,  unconscious,  visual"
abilities_top:
  - name: ""

  - name: "Resistance to Ranged"
    desc: "  The Prismatic Ooze has Resistance to ranged weapon ammunition 15, and thrown weapons 15"

  - name: "Magic Sense 120 feet"
    desc: " (arcane) A prismatic ooze can sense the presence of magic."

abilities_mid:
  - name: ""
  - name: "Prismatic Vulnerability"
    desc: "  A prismatic ooze is vulnerable to certain spells, which correspond to certain colors. When the prismatic ooze is targeted by one of the spells listed below, the caster can make a counteract check (9th level, DC 33). If successful, the spell counteracts the corresponding color of the prismatic ooze. Counteracting a color removes the ooze's immunities and resistances that correspond to that color and disables that color of the ooze's Prismatic Touch. A prismatic ooze's colors, the spell that can counteract each color, and the resistances and immunities disabled when the color is counteracted are:\n\n**Red** _[[Spells/Cone of Cold|Cone of Cold]]_ (fire immunity and ranged weapon ammunition resistance)\n\n**Orange** _[[Spells/Gust of Wind|Gust of Wind]]_ (thrown weapons resistance)\n\n**Yellow** _[[Spells/Disintegrate|Disintegrate]]_ (acid, cold, electricity, force, negative, positive, and sonic immunities)\n\n**Green** _[[Spells/Magic Passage|Passwall]]_ (poison immunity)\n\n**Blue** _[[Spells/Force Barrage|Magic Missile]]_ (auditory and petrification immunities)\n\n**Indigo** _[[Spells/Holy Light|Searing Light]]_ (divination immunity)\n\n**Violet** _[[Spells/Dispel Magic|Dispel Magic]]_ (none)."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Pseudopod"
    desc: "+34 (reach 25 feet)\n__Damage__  3d10 + 19 bludgeoning plus improved-grab,prismatic-touch"

  - name: "Prismatic Touch"
    desc: " (arcane) A creature hit by the prismatic ooze's pseudopod or [[Conditions/Grabbed|Grabbed]] by the prismatic ooze at the start of the ooze's turn experiences an additional effect depending on which color the ooze is at that moment. The creature is then immune to Prismatic Touch until the start of the ooze's next turn.\n\nRoll 1d8 to determine which color affects the target. If the color has been counteracted (see Prismatic Vulnerability), then Prismatic Touch has no effect. Each effect is DC 38.\n\n*   **1. Red**: 3d6 fire damage (DC 38 basic Reflex save)\n*   **2. Orange**: 3d8 acid damage (DC 38 basic Reflex save)\n*   **3. Yellow**: 4d6 electricity damage (DC 38 basic Reflex save)\n*   **4. Green**: 2d6 poison damage plus [[Conditions/Enfeebled|Enfeebled 1]] for 1 minute (DC 38 basic Fortitude save; no enfeebled on a success)\n*   **5. Blue**: [[Spells/Petrify|Flesh to Stone]] DC 38 Will\n*   **6. Indigo**: _[[Spells/Warp Mind|Warp Mind]]_ DC 38 Will\n*   **7. Violet**: The target is [[Conditions/Slowed|Slowed 1]] for 1 minute. A successful DC 38 Will save negates; on a critically failed save, the target is sent to another plane, with the effect of _[[Spells/Interplanar Teleport|Plane Shift]]_.\n*   **8. Potent Strike:** The target is affected by two colors-roll twice, rerolling duplicates or results of 8."

  - name: "Consume Magic"
    desc: "`pf2:1`  **Requirements** A creature [[Conditions/Grabbed|Grabbed]] by the prismatic ooze is affected by an ongoing spell;\n\n**Effect** The prismatic ooze attempts to counteract (counteract modifier +27 and counteract level 8) the highest-level spell affecting the grabbed creature. If successful, the spell is counteracted and the prismatic ooze regains 30 Hit Points."

  - name: "Dazzling Burst"
    desc: "`pf2:1` (visual) **Frequency** once per minute;\n* * *\n\n**Effect** Each creature in a 30-foot burst must attempt a DC 37 Fortitude save. A creature is [[Conditions/Dazzled|Dazzled]] for 1 round on a success, [[Conditions/Blinded|Blinded]] for 1 round on a failure, and blinded for 1 minute on a critical failure."

  - name: "[[Bestiary Ability Glossary/Improved Grab|Improved Grab]]"
    desc: "  The monster can use [[Bestiary Ability Glossary/Grab|Grab]] as a free action triggered by a hit with its initial attack. A monster with Improved Grab still needs to spend an action to extend the duration for creatures it already has [[Conditions/Grabbed|Grabbed]]."

  - name: "[[Bestiary Ability Glossary/Engulf|Engulf]]"
    desc: "`pf2:2`  DC 38 reflex save, 3d10 bludgeoning damage plus Prismatic Touch, Escape DC 38, Rupture 30\n\nThe monster Strides up to double its Speed and can move through the spaces of any creatures in its path. Any creature of the monster's size or smaller whose space the monster moves through can attempt a Reflex save with the listed DC to avoid being engulfed. A creature unable to act automatically critically fails this save. If a creature succeeds at its save, it can choose to be either pushed aside (out of the monster's path) or pushed in front of the monster to the end of the monster's movement. The monster can attempt to Engulf the same creature only once in a single use of Engulf. The monster can contain as many creatures as can fit in its space.\n\nA creature that fails its save is pulled into the monster's body. It is [[Conditions/Grabbed|Grabbed]], is [[Conditions/Slowed|Slowed 1]], and has to hold its breath or start suffocating. The creature takes the listed amount of damage when first engulfed and at the end of each of its turns while it's engulfed. An engulfed creature can get free by [[Actions/Escape|Escaping]] against the listed escape DC. An engulfed creature can attack the monster engulfing it, but only with unarmed attacks or with weapons of light Bulk or less. The engulfing creature is [[Conditions/Off-Guard|Off-Guard]] against the attack. If the monster takes piercing or slashing damage equaling or exceeding the listed Rupture value from a single attack or spell, the engulfed creature cuts itself free. A creature that gets free by either method can immediately breathe and exits the swallowing monster's space.\n\nIf the monster dies, all creatures it has engulfed are automatically released as the monster's form loses cohesion."
 
```

```encounter-table
name: Prismatic Ooze
creatures:
  - 1: Prismatic Ooze
```



When powerful mages experiment with magic, strange and terrible creations are the inevitable result. The prismatic ooze is one potential consequence of such eldritch tinkering. Shimmering with vibrant iridescent colors, a prismatic ooze dazzles its victims before subjecting them to a myriad of harmful magical effects.

## Primal Prismatic Oozes

In rare cases, a prismatic ooze can spontaneously appear in areas of strong primal magic. Some fey realm explorers have given accounts of spotting island-sized prismatic oozes soaring high in the sky above, though, thankfully, no such behemoths have yet made it to the Material Plane.

## Monster Part Subsystem

**Prismatic Ooze Creature 17**

**Monster Parts** 1,875/4,300/8,000 gp

**Eligible Refinements** weapons (bludgeoning), perception item, skill items (Athletics)

**Eligible Imbued Properties** acid, bane, constitution, electricity, energy resistant (acid, cold, electricity, fire, force, negative, positive, sonic), fire, fortification, mental, poison, strength, wild, winged
