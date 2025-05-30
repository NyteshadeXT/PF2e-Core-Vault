---
title: "Musketeer"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.tGndoQjOV5Mj5Foh" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/3
  - remaster
statblock: inline
name: "Musketeer"
level: 3
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Musketeer"
level: "Creature 3"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; "
languages: ""
skills:
  - name: "Skills"
    desc: "Acrobatics: +11, Athletics: +8, Deception: +8, Intimidation: +10, Stealth: +11, Thievery: +9"
abilityMods: [1, 4, 1, 0, 1, 3]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__ +8, __Ref__ +11, __Will__ +6"
hp: 40
health:
  - name: ""
  - name: HP
    desc: "40"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Flintlock Musket|Flintlock Musket]], [[Equipment/Rapier|Rapier]], [[Equipment/Leather Armor|Leather Armor]], 20x [[Equipment/Rounds (Flintlock Musket)|Rounds (Flintlock Musket)]]"
abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Rapier"
    desc: "+11 (deadly d8, disarm, finesse)\n__Damage__  1d6 + 5 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+11 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 5 bludgeoning"

  - name: "**Ranged** `pf2:1` Flintlock Musket"
    desc: "+11 (concussive, fatal d10, range increment 70 feet, reload 1)\n__Damage__  1d6 + 5 piercing"

  - name: "Musketeer's Advance"
    desc: "`pf2:2`  **Requirements** The musketeer is wielding a flintlock musket\n* * *\n\n**Effect** The musketeer makes a flintlock musket Strike. If the Strike hits, the target is [[Conditions/Off-Guard|Off-Guard]] to melee attacks by the musketeer until the end of the musketeer's next turn. Regardless of whether the Strike hit, the musketeer then Interacts to swap their flintlock musket for their rapier and Strides toward the creature they attacked."

  - name: "One for All"
    desc: "`pf2:1`  **Requirements** The musketeer is wielding a single one-handed weapon in one hand and has their other hand free\n* * *\n\n**Effect** The musketeer grants a +1 circumstance bonus to AC to themself until the start of their next turn. Allies also gain this bonus while adjacent to the musketeer. If a creature would benefit from more than one creature's One for All ability, the bonus is +2 instead of +1."

  - name: "[[Bestiary Ability Glossary/Sneak Attack|Sneak Attack]]"
    desc: "  The musketeer deals an extra 1d6 precision damage to [[Conditions/Off-Guard|Off-Guard]] creatures."
 
```

```encounter-table
name: Musketeer
creatures:
  - 1: Musketeer
```



Flashy and confident, the musketeer isn't above using dirty tricks to gain the upper hand in a fight. Despite their bravado, musketeers are fiercely loyal to their allies.

* * *

These lone wolves have an aura of mystery, bravado, and swagger.
