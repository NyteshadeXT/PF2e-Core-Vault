---
title: "Mage Knight"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.0cj7cQhgNnLxbUmR" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/10
  - remaster
statblock: inline
name: "Mage Knight"
level: 10
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Mage Knight"
level: "Creature 10"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 17
perception:
  - name: "Perception"
    desc: "+17; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Arcana: +22, Athletics: +21, Warfare Lore: +20"
abilityMods: [5, 1, 2, 4, 3, 0]
speed: 20 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 29
armorclass:
  - name: AC
    desc: "29; __Fort__ +18, __Ref__ +13, __Will__ +21"
hp: 140
health:
  - name: ""
  - name: HP
    desc: "140"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Mace|+1 Striking Mace]], [[Equipment/Steel Shield|Steel Shield]], [[Equipment/Full Plate|+1 Full Plate]], [[Equipment/Spellbook (Blank)|Spellbook]]"
abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Shield Block|Shield Block]]"
    desc: "`pf2:r`  **Trigger** The monster has its shield raised and takes damage from a physical attack.\n* * *\n\n**Effect** The monster snaps its shield into place to deflect a blow. The shield prevents the monster from taking an amount of damage up to the shield's Hardness. The monster and the shield each take any remaining damage, possibly breaking or destroying the shield."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Fist"
    desc: "+21 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 11 bludgeoning"

  - name: "**Melee** `pf2:1` Mace"
    desc: "+22 (magical, shove)\n__Damage__  2d6 + 11 bludgeoning"

  - name: "Arcane Prepared Spells"
    desc: "DC 28, attack +20; __5th __  _[[Spells/Impaling Spike|Impaling Spike]]_, _[[Spells/Toxic Cloud|Toxic Cloud]]_; __4th __  _[[Spells/Fly|Fly]]_, _[[Spells/Weapon Storm|Weapon Storm]]_; __3rd __  _[[Spells/Earthbind|Earthbind]]_, _[[Spells/Fireball|Fireball]]_, _[[Spells/Vampiric Feast|Vampiric Feast]]_, _[[Spells/Wall of Thorns|Wall of Thorns]]_; __2nd __  _[[Spells/Invisibility|Invisibility]]_, _[[Spells/Mist|Mist]]_; __1st __  _[[Spells/Enfeeble|Enfeeble]]_, _[[Spells/Fleet Step|Fleet Step]]_, _[[Spells/Force Barrage|Force Barrage]]_, _[[Spells/Sure Strike|Sure Strike]]_\n__Cantrips__  __(5th)__ _[[Spells/Detect Magic|Detect Magic]]_, _[[Spells/Electric Arc|Electric Arc]]_, _[[Spells/Frostbite|Frostbite]]_, _[[Spells/Light|Light]]_, _[[Spells/Read Aura|Read Aura]]_, _[[Spells/Telekinetic Hand|Telekinetic Hand]]_, _[[Spells/Telekinetic Projectile|Telekinetic Projectile]]_"

  - name: "Wizard Focus Spells"
    desc: "2 Focus Points, DC 28, attack +20; __5th __  _[[Spells/Energy Absorption|Energy Absorption]]_, _[[Spells/Force Bolt|Force Bolt]]_"

  - name: "Bespell Strikes"
    desc: "  **Frequency** once per turn\n\n**Requirements** The mage knight's most recent action was to cast a non-cantrip spell\n* * *\n\n**Effect** The mage knight siphons spell energy into one weapon they're wielding, or into one of their unarmed attacks. Until the end of the turn, the weapon or unarmed attack deals an extra 2d6 force damage and gains the arcane trait if it didn't have it already. If the spell dealt a different type of damage, the Strike deals this type of damage instead"

  - name: "Drain Bonded Item"
    desc: "`pf2:1` (arcane) **Frequency** once per day\n\n**Requirements** The mage knight hasn't acted yet on this turn\n* * *\n\n**Effect** The mage knight expends the power stored in their bonded item (typically their shield). This gives them the ability to cast one prepared spell they prepared today and already cast, without spending a slot."
 
```

```encounter-table
name: Mage Knight
creatures:
  - 1: Mage Knight
```



Though many spellcasters prefer to defend themselves with magic, some recognize that there's no substitute for a suit of steel. Mage knights defy the stereotype that spellcasters are frail, delicate, and passive and instead choose to hold their own in close-quarter combat.

* * *

A military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.
