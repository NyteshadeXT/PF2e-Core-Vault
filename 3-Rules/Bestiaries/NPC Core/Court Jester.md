---
title: "Court Jester"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.xvZvI0oFFOTaBO6L" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/10
  - remaster
statblock: inline
name: "Court Jester"
level: 10
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Court Jester"
level: "Creature 10"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 21
perception:
  - name: "Perception"
    desc: "+21; "
languages: ""
skills:
  - name: "Skills"
    desc: "Acrobatics: +22, Deception: +19, Diplomacy: +19, Performance: +22, Society: +19, Stealth: +19"
abilityMods: [2, 4, 1, 2, 1, 5]
speed: 30 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 29
armorclass:
  - name: AC
    desc: "29; __Fort__ +16, __Ref__ +19, __Will__ +22"
hp: 170
health:
  - name: ""
  - name: HP
    desc: "170; __Resistances__ poison 10"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "3x [[Equipment/Dagger|+1 Striking Dagger]], [[Equipment/Disguise Kit (Replacement Cosmetics)|Face Paints]]"
abilities_mid:
  - name: ""
  - name: "Pointed Joke"
    desc: "  The court jester can use Performance instead of Intimidation to [[Actions/demoralize statistic=performance|demoralize statistic=performance]]."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Dagger"
    desc: "+22 (agile, finesse, magical, versatile s)\n__Damage__  2d4 + 8 piercing 4d4 poison"

  - name: "**Ranged** `pf2:1` Dagger"
    desc: "+22 (agile, magical, thrown 10 ft., versatile s)\n__Damage__  4d4 poison 2d4 + 8 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+21 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 8 bludgeoning"

  - name: "No Peeking!"
    desc: "`pf2:1`  The jester blows chalk or face powder in an adjacent enemy's face. The target must make a DC 29 Fortitude check saving throw.\n* * *\n\n**Critical Success** The target is unaffected.\n\n**Success** The target is [[Conditions/Dazzled|Dazzled]] for 1 round.\n\n**Failure** target is dazzled and [[Conditions/Off-Guard|Off-Guard]] for 1 round.\n\n**Critical Failure** The target is [[Conditions/Blinded|Blinded]] for 1 round."

  - name: "Poisoned Blade"
    desc: "  The jester coats their dagger in poison. These daggers inflict an additional 4d4 persistent poison damage. The poison expires 1 hour after leaving the jester's possession."
 
```

```encounter-table
name: Court Jester
creatures:
  - 1: Court Jester
```



Though court jesters are often put-upon as the targets of easy mockery and idle amusements, do not mistake their self-deprecation for weakness. Beneath, the jester hides malice, a sharp tongue, and even sharper knives. They can often be found entertaining the nobles of court or preparing their next japes. During the indiscreet hours of the night, they may be found in the company of servants and spymasters.

* * *

Performances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.
