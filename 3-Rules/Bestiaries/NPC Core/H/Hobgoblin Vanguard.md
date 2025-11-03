---
title: "Hobgoblin Vanguard"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.PoH1pKba7YEqgWVn" 
tags:
  - pf2e/creature/type/hobgoblin
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/8
  - remaster
statblock: inline
name: "Hobgoblin Vanguard"
level: 8
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Hobgoblin Vanguard"
level: "Creature 8"

alignment: ""
size: "Medium"
trait_01: [[hobgoblin]]
trait_02: [[humanoid]]
modifier: 16
perception:
  - name: "Perception"
    desc: "+16; Darkvision"
languages: "Common, Goblin"
skills:
  - name: "Skills"
    desc: "Athletics: +18, Crafting: +17, Intimidation: +16, Survival: +16"
abilityMods: [5, 2, 3, 2, 1, 1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__ +19, __Ref__ +13, __Will__ +16"
hp: 150
health:
  - name: ""
  - name: HP
    desc: "150"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Maul|+1 Striking Maul]], 4x [[Equipment/Acid Flask (Moderate)|Acid Flask (Moderate)]], [[Equipment/Full Plate|Full Plate]], [[Equipment/Alchemist's Toolkit|Alchemist's Toolkit]]"
abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Maul"
    desc: "+19 (magical, shove)\n__Damage__  2d12 + 8 bludgeoning plus knockdown"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+19 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 8 bludgeoning"

  - name: "**Ranged** `pf2:1` Alchemical Grenade"
    desc: "+16 (range increment 20 feet, splash)\n__Damage__  2 acid 2d8 acid 2 acid"

  - name: "Shock and Awe"
    desc: "`pf2:r` (emotion,mental,visual) **Trigger** The hobgoblin vanguard critically hits a creature with an alchemical grenade Strike\n* * *\n\n**Effect** The hobgoblin vanguard attempts to [[Actions/demoralize|demoralize]] the creature with a mere look. If the target creature was reduced to 0 Hit Points by the triggering Strike, the hobgoblin vanguard can instead attempt to Demoralize all opponents within 30 feet, rolling once and comparing the result to each target's Will DC."
 
```

```encounter-table
name: Hobgoblin Vanguard
creatures:
  - 1: Hobgoblin Vanguard
```



Though there are times for precision and discipline, every hobgoblin general also understands the value of demoralizing the enemy with a show of overwhelming force. No military unit is better suited to this purpose than the vanguard, a heavily armed and armored elite unit that inspires their fellow soldiers to action while breaking the enemy's lines and morale with terrifying explosive weapons.

* * *

Hobgoblins are respected across Golarion for their unmatched expertise in the art of war. The recent foundation of the hobgoblin nation of Oprak and its unprecedented acts of diplomacy, including non-aggression pacts with the neighboring nations of Nidal and Nirmathas, has given some hope that a lasting peace might finally be established; however, there remains no shortage of unaffiliated hobgoblin raiders and pillagers.
