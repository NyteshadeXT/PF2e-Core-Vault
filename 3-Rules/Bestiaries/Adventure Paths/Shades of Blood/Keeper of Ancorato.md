---
title: "Keeper of Ancorato"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.shades-of-blood-bestiary.Actor.6wYXYSOVgLZo7Mlm" 
tags:
  - pf2e/creature/type/beast
  - pf2e/creature/type/incorporeal
  - pf2e/creature/type/spirit
  - pf2eMonster
  - pf2e/creature/level/10
  - remaster
statblock: inline
name: "Keeper of Ancorato"
level: 10
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #213: Thirst for Blood"
name: "Keeper of Ancorato"
level: "Creature 10"
rare_03: [[Unique]]
alignment: ""
size: "grg"
trait_01: [[beast]]
trait_02: [[incorporeal]]
trait_03: [[spirit]]
modifier: 18
perception:
  - name: "Perception"
    desc: "+18; Darkvision, Wavesense (Imprecise) 120 Feet"
languages: "Fey, Thalassic; Truespeech"
skills:
  - name: "Skills"
    desc: "Athletics: +23, Diplomacy: +20, Nature: +18, Survival: +16"
abilityMods: [7, 2, 5, 0, 2, 3]
speed:  fly 20 feet,  swim 40 feet
sourcebook: "_Pathfinder #213: Thirst for Blood_"
ac: 29
armorclass:
  - name: AC
    desc: "29; __Fort__ +21, __Ref__ +16, __Will__ +18"
hp: 160
health:
  - name: ""
  - name: HP
    desc: "160; __Immunities__  disease,  paralyzed,  poison,  precision; __Resistances__ all damage 10 (except force, ghost touch, vitality, or spirit; double resistance vs. non-magical)"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Constant Spells|Constant Spells]]"
    desc: "  A constant spell affects the monster without the monster needing to cast it, and its duration is unlimited. If a constant spell gets counteracted, the monster can reactivate it by spending the normal spellcasting actions the spell requires."

abilities_mid:
  - name: ""
  - name: "Keeper's Ward"
    desc: " (aura,primal) 30 feet. All allies within 30 feet of the Keeper gain a +1 status bonus to saves against magical effects. The bonus increases to +2 if the effect originated from an aquatic creature."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Tentacle"
    desc: "+21 (magical, reach 30 feet, unarmed)\n__Damage__  3d10 + 9 force plus keepers-touch"

  - name: "Primal Innate Spells"
    desc: "DC 27, attack +19; __3rd __  _[[Spells/Aqueous Orb|Aqueous Orb]]_, _[[Spells/Feet to Fins|Feet to Fins (At Will)]]_, _[[Spells/Hydraulic Push|Hydraulic Push]]_, _[[Spells/Mist|Mist]]_, _[[Spells/Water Breathing|Water Breathing (At Will)]]_\n__Constant__  __(5th)__ _[[Spells/Truespeech|Truespeech]]_"

  - name: "Bond with Mortal"
    desc: " (mental,primal) **Frequency** once per day\n* * *\n\n**Effect** The Keeper forms a bond with a mortal creature. While the bond exists, the Keeper increases their current and maximum Hit Points by 20, gains a +2 status bonus to their attack and damage rolls, and can communicate telepathically with the bonded mortal as long as the two beings are on the same plane. The Keeper can only be bonded with one mortal at a time, and they can take this action again to end the bond or to form a new bond (which also ends the old bond). The bond also ends if the Keeper or the mortal dies.\n\nThis bond strengthens the Keeper's connection to the mortal Universe. While bonded, the Keeper gains the amphibious trait, loses the incorporeal and spirit traits, loses their immunities and resistances, and changes their Strikes to deal the appropriate physical damage (typically bludgeoning) instead of force damage."

  - name: "Bonded Strike"
    desc: "`pf2:2`  **Requirements** The Keeper is currently Bonded with a Mortal\n* * *\n\n**Effect** The Keeper makes a jaws Strike. If this attack hits, the bonded mortal can spend their reaction to Strike the same target."

  - name: "Keeper's Touch"
    desc: " (primal) The Keeper's touch instills their foes with the icy chill of the ocean depths, sapping away their life. A creature hit by the Keeper's tentacle must attempt a DC 26 Fortitude check save.\n* * *\n\n**Success** The creature is unaffected.\n\n**Failure** The creature becomes [[Conditions/Drained|Drained 1]]. If the creature was already drained 1 by the Keeper's touch before attempting the save, a failed save increases the value of the drained condition by 1, to a maximum of [[Conditions/Drained|Drained 4]]. The drained creature is temporarily immune until the start of the Keeper's next turn.\n\n**Critical Failure** As failure, but the creature increases drained value by 2."
 
```

```encounter-table
name: Keeper of Ancorato
creatures:
  - 1: Keeper of Ancorato
```




