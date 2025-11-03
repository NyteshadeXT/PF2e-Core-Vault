---
title: "Grandmaster"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.iOAX2QVvgaBdGc0B" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/17
  - remaster
statblock: inline
name: "Grandmaster"
level: 17
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Grandmaster"
level: "Creature 17"
rare_03: [[Uncommon]]
alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 35
perception:
  - name: "Perception"
    desc: "+35; Lifesense (Imprecise) 60 Feet"
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +33, Athletics: +33, Diplomacy: +25, Intimidation: +25, Medicine: +25, Stealth: +25, Martial Arts Lore: +30"
abilityMods: [6, 4, 3, 1, 5, 1]
speed: 50 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 40
armorclass:
  - name: AC
    desc: "40; __Fort__ +28, __Ref__ +32, __Will__ +27"
hp: 310
health:
  - name: ""
  - name: HP
    desc: "310"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Shuriken|+2 Greater Striking Returning Shuriken]], [[Equipment/Handwraps of Mighty Blows|Handwraps of Mighty Blows]], [[Equipment/Temple Sword|+2 Greater Striking Temple Sword]], [[Equipment/Bands of Force|Bands of Force]]"
abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Temple Sword"
    desc: "+33 (magical, trip)\n__Damage__  3d8 + 14 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+33 (agile, magical, nonlethal, unarmed)\n__Damage__  3d6 + 14 bludgeoning"

  - name: "**Ranged** `pf2:1` Shuriken"
    desc: "+33 (magical, reload 0, thrown 20 ft.)\n__Damage__  3d4 + 14 piercing"

  - name: "Occult Focus Spells"
    desc: "3 Focus Points, DC 38, attack +34; __9th __  _[[Spells/Harmonize Self|Harmonize Self]]_, _[[Spells/Qi Blast|Qi Blast]]_, _[[Spells/Touch of Death|Touch of Death]]_, _[[Spells/Wind Jump|Wind Jump]]_"

  - name: "[[Actor.zRUKUK93YxtbadPT.Item.PjqwihmMf7cPnPtH|Flurry of Blows]]"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The grandmaster makes two fist Strikes. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses.\n\nThe grandmaster can substitute any number of the attacks with temple sword Strikes or attempts to [[Actions/Grapple|Grapple]], [[Actions/Reposition|Reposition]], [[Actions/Shove|Shove]], or [[Actions/Trip|Trip]]."

  - name: "Forbidden Palm"
    desc: "`pf2:3`  **Requirements** The grandmaster has at least 1 Focus Point\n* * *\n\n**Effect** The grandmaster casts [[Spells/Touch of Death|Touch of Death]] (spending 1 Focus Point as normal). Any time the target attempts a Fortitude save against this _touch of death_, the grandmaster takes 40 damage and is permanently [[Conditions/Enfeebled|Enfeebled 1]]. If the target gets a critical success, it's [[Conditions/Stunned|Stunned 1]]; if it gets a success or failure the stunned condition it gains is increased by 1, and any damage it takes is increased by 40."

  - name: "One-Millimeter Punch"
    desc: "`pf2:2`  `pf2:2` or `pf2:3`\n\nThe grandmaster makes a single, carefully controlled unarmed Strike that deals 2 additional dice of damage, or 4 additional dice if the grandmaster spent 3 actions. If this damages the target, the grandmaster can choose to make the target attempt a DC 38 Fortitude check save.\n* * *\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is pushed back 5 feet.\n\n**Failure** The target is pushed back 10 feet.\n\n**Critical Failure** The target is pushed back 10 feet for each action the grandmaster spent on One-Millimeter Punch."

  - name: "[[Actor.zRUKUK93YxtbadPT.Item.nrV7U6vtd1tSnRpu|Powerful Fists]]"
    desc: "  The grandmaster's fist Strikes don't take penalties when making lethal attacks, and fist Strikes are treated as adamantine, cold iron and silver."
 
```

```encounter-table
name: Grandmaster
creatures:
  - 1: Grandmaster
```



Martial artists strive to master the art of hand-to-hand fighting.
