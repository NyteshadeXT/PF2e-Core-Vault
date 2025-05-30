---
title: "Demonbane Warrior"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.62L0yQBRKjnsDmzH" 
tags:
  - pf2e/creature/type/elf
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/5
  - remaster
statblock: inline
name: "Demonbane Warrior"
level: 5
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Demonbane Warrior"
level: "Creature 5"

alignment: ""
size: "Medium"
trait_01: [[elf]]
trait_02: [[humanoid]]
modifier: 13
perception:
  - name: "Perception"
    desc: "+13; Low-Light Vision"
languages: "Chthonian, Common, Elven"
skills:
  - name: "Skills"
    desc: "Acrobatics: +13, Religion: +11, Stealth: +10, Survival: +11, Demon Lore: +12"
abilityMods: [3, 4, 2, 1, 2, 0]
speed: 30 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__ +11, __Ref__ +13, __Will__ +11"
hp: 76
health:
  - name: ""
  - name: HP
    desc: "76"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Composite Shortbow|Composite Shortbow]], [[Equipment/Elven Branched Spear|Cold Iron Elven Branched Spear]], [[Equipment/Chain Shirt|Chain Shirt]], 20x [[Equipment/Arrows|Arrows]]"
  - name: "Sin Sense"
    desc: "  A demonbane warrior automatically learns all weaknesses of a demon they've identified by [[Actions/Recall Knowledge|Recalling Knowledge]]."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Cold Iron Elven Branched Spear"
    desc: "+15 (cold iron, deadly d8, finesse, reach)\n__Damage__  1d6 + 9 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+15 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 9 bludgeoning"

  - name: "**Ranged** `pf2:1` Composite Shortbow"
    desc: "+15 (deadly d10, propulsive, range increment 60 feet, reload 0)\n__Damage__  1d6 + 7 piercing"

  - name: "Demonbane"
    desc: "  A demonbane warrior gains a +1 circumstance bonus to damage rolls against demons. If their actions force a demon to take damage from its sin vulnerability, increase the damage from the vulnerability by 2."

  - name: "Imbue Righteousness"
    desc: "`pf2:1` (divine,holy) The warrior imbues a weapon they wield with holy energy. Until the start of their next turn, their Strikes with that weapon gain the holy trait and deal an additional 1d6 spirit damage to unholy creatures."
 
```

```encounter-table
name: Demonbane Warrior
creatures:
  - 1: Demonbane Warrior
```



Elves' long lives give them centuries to delve into studies, artistry, or exploration.
