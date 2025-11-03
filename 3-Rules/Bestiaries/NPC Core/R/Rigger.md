---
title: "Rigger"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.hBSGQAonirqUAHCP" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/1
  - remaster
statblock: inline
name: "Rigger"
level: 1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Rigger"
level: "Creature 1"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +6, Athletics: +7, Sailing Lore: +6"
abilityMods: [3, 4, 1, 0, 1, 0]
speed: 30 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 15
armorclass:
  - name: AC
    desc: "15; __Fort__ +7, __Ref__ +10, __Will__ +5"
hp: 20
health:
  - name: ""
  - name: HP
    desc: "20"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Dagger|Dagger]], [[Equipment/Rope|Rope]]"
abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Dagger"
    desc: "+9 (agile, finesse, versatile s)\n__Damage__  1d4 + 3 piercing"

  - name: "**Ranged** `pf2:1` Dagger"
    desc: "+9 (agile, thrown 10 ft., versatile s)\n__Damage__  1d4 + 3 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+9 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 3 bludgeoning"

  - name: "Death from Above"
    desc: "  The rigger deals an additional 1d4 precision damage to any creature at a lower elevation than themself."

  - name: "Practiced Climber"
    desc: "  The rigger requires only one hand free to Climb and is not [[Conditions/Off-Guard|Off-Guard]] when Climbing."

  - name: "Rope Tension Spring"
    desc: "`pf2:2` (manipulate,move) **Requirements** The rigger is adjacent to a vertical rope on board a ship and is wielding a dagger\n* * *\n\n**Effect** The rigger loops the rope around one arm and severs the rope with their dagger. Counterweight and tension pull the rigger 20 feet straight up."
 
```

```encounter-table
name: Rigger
creatures:
  - 1: Rigger
```



Adventurers may need passage on a swift vessel, or they might face danger from raiders at sea or in coastal settlements.
