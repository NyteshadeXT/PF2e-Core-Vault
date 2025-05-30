---
title: "Dwarf General"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.T5WxYghxUxqHgyl4" 
tags:
  - pf2e/creature/type/dwarf
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/8
  - remaster
statblock: inline
name: "Dwarf General"
level: 8
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Dwarf General"
level: "Creature 8"

alignment: ""
size: "Medium"
trait_01: [[dwarf]]
trait_02: [[humanoid]]
modifier: 16
perception:
  - name: "Perception"
    desc: "+16; Darkvision"
languages: "Common, Dwarven"
skills:
  - name: "Skills"
    desc: "Athletics: +19, Diplomacy: +12, Intimidation: +14, Medicine: +15, Society: +13, Survival: +15, Warfare Lore: +15"
abilityMods: [5, 0, 4, 2, 2, 1]
speed: 20 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 26
armorclass:
  - name: AC
    desc: "26; __Fort__ +18, __Ref__ +14, __Will__ +16"
hp: 150
health:
  - name: ""
  - name: HP
    desc: "150"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Arbalest|Arbalest]], [[Equipment/Clan Dagger|Clan Dagger]], [[Equipment/Warhammer|+1 Striking Warhammer]], [[Equipment/Steel Shield|Steel Shield]], [[Equipment/Full Plate|Full Plate]], 10x [[Equipment/Bolts|Bolts]]"
  - name: "Opening Orders"
    desc: " (auditory,linguistic) **Trigger** The dwarf general rolls initiative and can see at least one enemy\n* * *\n\n**Effect** The general unleashes a command to ready for combat. Each ally within 120 feet that can hear the general can either Raise a Shield or Step as a free action when it rolls initiative."

abilities_mid:
  - name: ""
  - name: "Dwarven Doughtiness"
    desc: "  Dwarves are often calm and collected in the face of imminent danger. At the end of the general's turn, reduce its [[Conditions/Frightened|Frightened]] condition by 2 instead of 1."

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  The dwarf general gains an additional reaction at the beginning of each of their turns that they can use only for a Reactive Strike.\n\n**Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

  - name: "[[Bestiary Ability Glossary/Shield Block|Shield Block]]"
    desc: "`pf2:r`  **Trigger** The monster has its shield raised and takes damage from a physical attack.\n* * *\n\n**Effect** The monster snaps its shield into place to deflect a blow. The shield prevents the monster from taking an amount of damage up to the shield's Hardness. The monster and the shield each take any remaining damage, possibly breaking or destroying the shield."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Clan Dagger"
    desc: "+19 (agile, parry, versatile b)\n__Damage__  1d4 + 11 piercing"

  - name: "**Melee** `pf2:1` Warhammer"
    desc: "+20 (magical, shove)\n__Damage__  2d8 + 11 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+19 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 11 bludgeoning"

  - name: "**Ranged** `pf2:1` Arbalest"
    desc: "+15 (backstabber, range increment 110 feet, reload 1)\n__Damage__  1d10 + 6 piercing"

  - name: "Advancing Orders"
    desc: "`pf2:1` (auditory,linguistic) The dwarf general issues a command to push forward on the battlefield. Each ally who hears and understands this command becomes [[Conditions/Quickened|Quickened]] until the end of its next turn but can use the extra action only to Step or Stride."

  - name: "Hammer Critical Specialization"
    desc: "  When the general critically hits with a hammer, the target of the critical hit is knocked [[Conditions/Prone|Prone]] unless it succeeds at a DC 26 Fortitude check save."

  - name: "Sudden Charge"
    desc: "`pf2:2`  **Frequency** once per round\n* * *\n\n**Effect** The dwarf general Strides twice. If they end their movement within melee reach of at least one enemy, they can make a melee Strike against that enemy."
 
```

```encounter-table
name: Dwarf General
creatures:
  - 1: Dwarf General
```



Dwarven generals embody pride in knowledge and tactical acumen, using their understanding of warfare and battlefield strategy to coordinate their subordinates into optimal locations. They also remain ready to enter combat at a moment's notice and bring a fight to an enemy themselves.

* * *

From the dwarven perspective, most things in life are best done correctly, and that means taking one's time. Dwarves are a focused and intentional people, taking years or even decades to ply their trades, doing their best to make every detail perfect. The patience and dedication required for such tasks pays off, and many dwarves become experts in their respective field, trade, or area of focus. Many dwarves uphold traditions, and since dwarven origins trace back to underground life, many still hone skills focused on life underground.
