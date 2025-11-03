---
title: "Garrholdion"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.claws-of-the-tyrant-bestiary.Actor.mGTK0uSZiQY0vsCf" 
tags:
  - pf2e/creature/type/construct
  - pf2e/creature/type/incorporeal
  - pf2e/creature/type/mindless
  - pf2eMonster
  - pf2e/creature/level/20
  - remaster
statblock: inline
name: "Garrholdion"
level: 20
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Claws of the Tyrant"
name: "Garrholdion"
level: "Creature 20"
rare_03: [[Rare]]
alignment: ""
size: "huge"
trait_01: [[construct]]
trait_02: [[incorporeal]]
trait_03: [[mindless]]
modifier: 33
perception:
  - name: "Perception"
    desc: "+33; Darkvision, Truesight"
languages: ""
skills:
  - name: "Skills"
    desc: "Acrobatics: +36, Athletics: +38, Faction Lore: +41"
abilityMods: [10, 6, 7, -5, 5, -2]
speed: 25 feet,  fly 25 feet
sourcebook: "_Pathfinder Claws of the Tyrant_"
ac: 46
armorclass:
  - name: AC
    desc: "46 48 with shield raised; __Fort__ +36, __Ref__ +27, __Will__ +30"
hp: 350
health:
  - name: ""
  - name: HP
    desc: "350; __Immunities__  precision,  bleed,  death effects,  disease,  doomed,  drained,  fatigued,  healing,  nonlethal attacks,  paralyzed,  poison,  sickened,  unconscious,  vitality,  void,  mental; __Resistances__ physical 15 (except force, ghost touch, or spirit; double resistance vs. non-magical)"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Longsword|+3 Major Striking Longsword]], [[Equipment/Steel Shield|Supreme Reinforcing Steel Shield]]"
  - name: "Faction-Bound"
    desc: "  A garrholdion is bound to a faction at its creation. It can't harm a known member of its faction, a symbol of its faction, or relics associated with its faction. It gains a +4 circumstance bonus to Perception checks to verify the identity of such creatures and objects. A garrholdion is also bound to a location associated with its faction, such as a fortress, an academy, or a secret hideout. It can't move more than 120 feet from its designated location. Finally, a garrholdion bears an obvious mark of its faction somewhere on its body. This mark can't be hidden."

abilities_mid:
  - name: ""
  - name: "Quick Shield Block"
    desc: "  The garrholdion gains an additional reaction each round that can be used only for Shield Block."

  - name: "[[Actions/Raise a Shield|Raise a Shield]]"
    desc: "`pf2:1`  **Requirements** You are wielding a shield.\n* * *\n\nYou position your shield to protect yourself. When you have Raised a Shield, you gain its listed circumstance bonus to AC. Your shield remains raised until the start of your next turn."

  - name: "Reactive Defense"
    desc: "`pf2:r`  **Trigger** A creature within reach attacks the garrholdion's ally\n* * *\n\n**Effect** The garrholdion positions its shield in front of the attack, granting its ally a +2 circumstance bonus to AC against the triggering attack. It then makes a melee Strike against the triggering creature."

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

  - name: "[[Bestiary Ability Glossary/Shield Block|Shield Block]]"
    desc: "`pf2:r`  **Trigger** The monster has its shield raised and takes damage from a physical attack.\n* * *\n\n**Effect** The monster snaps its shield into place to deflect a blow. The shield prevents the monster from taking an amount of damage up to the shield's Hardness. The monster and the shield each take any remaining damage, possibly breaking or destroying the shield."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Longsword"
    desc: "+38 (magical, versatile p)\n__Damage__  4d8 + 18 slashing"

  - name: "**Ranged** `pf2:1` Belief Ray"
    desc: "+34 (magical, range 60 feet, spirit)\n__Damage__  8d6 spirit plus seed-of-doubt"

  - name: "Occult Innate Spells"
    desc: "DC 39, attack +0\n__Constant__  __(10th)__ _[[Spells/Truesight|Truesight]]_"

  - name: "Rituals"
    desc: "_Consecrate_"

  - name: "Belief Fortification"
    desc: " (aura,emotion,occult) 30 feet. Members of the garrholdion's faction gain a +1 status bonus to saving throws against emotion effects while within the aura.\n\n[[Bestiary Effects/Effect_ Belief Fortification (Mark)|Effect: Belief Fortification (Mark)]]"

  - name: "Seed of Doubt"
    desc: " (mental,occult) A creature hit by the garrholdion's belief ray Strike doubts their actions, forcing them to hesitate. The target must succeed at a DC 39 Will check save or be [[Conditions/Stunned|Stunned 1]] (or [[Conditions/Stunned|Stunned 3]] on a critical failure). On a critical success, the target becomes temporarily immune to seed of doubt for 24 hours."
 
```

```encounter-table
name: Garrholdion
creatures:
  - 1: Garrholdion
```



Belief is a powerful force. When strong-willed individuals gather beneath a common banner, their unified conviction can take on a life of its own. The result is a garrholdion, a spirit construct that defends the meeting place of the faction that created it.

A garrholdion usually appears as a shimmering, idealized version of a typical faction member, though it might instead shift its appearance among that of specific individuals, never settling on just one. Whatever form it takes, a garrholdion is always marked by its faction's symbol. A Firebrands garrholdion, for example, bears that faction's crossed swords symbol, while a Pathfinder Society garrholdion is marked with the Glyph of the Open Road.
