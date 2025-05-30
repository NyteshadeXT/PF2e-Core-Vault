---
title: "Juggler"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.zeu7M3M3wYt9O3M5" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/2
  - remaster
statblock: inline
name: "Juggler"
level: 2
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Juggler"
level: "Creature 2"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 9
perception:
  - name: "Perception"
    desc: "+9; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +8, Athletics: +8, Performance: +11, Circus Lore: +8"
abilityMods: [2, 3, 1, 0, 1, 3]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__ +6, __Ref__ +11, __Will__ +7"
hp: 30
health:
  - name: ""
  - name: HP
    desc: "30"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "3x [[Equipment/Light Hammer|Juggling Club]], 10x [[Equipment/Dart|Dart]], 3x [[Equipment/Torch|Torch]]"
  - name: "Juggling Specialist"
    desc: "  For encounters involving juggling and other circus acts, the juggler is a 5th-level challenge."

abilities_mid:
  - name: ""
  - name: "Return Throw"
    desc: "`pf2:r`  **Trigger** A physical ranged attack with a throwing weapon critically fails to hit the juggler\n* * *\n\n**Effect** The juggler snatches the weapon from the air and immediately makes a ranged Strike against the attacker using that weapon."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Juggling Club"
    desc: "+9 (agile)\n__Damage__  1d6 + 4 bludgeoning"

  - name: "**Ranged** `pf2:1` Juggling Club"
    desc: "+10 (agile, thrown 20 ft.)\n__Damage__  1d6 + 4 bludgeoning"

  - name: "**Ranged** `pf2:1` Dart"
    desc: "+10 (agile, thrown 20 ft.)\n__Damage__  1d4 + 4 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+10 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 4 bludgeoning"

  - name: "**Ranged** `pf2:1` Torch"
    desc: "+10 (thrown 10 ft.)\n__Damage__  1d4 + 4 bludgeoning 1 fire"

  - name: "Juggle"
    desc: "`pf2:1` (concentrate,manipulate) The juggler begins juggling up to three items of light or negligible Bulk. They can choose items in their hands or Interact to draw items on their person or pick up unattended items in reach. While juggling, they can Interact to add up to two items to their juggle, though they must drop an item for each one they add. The juggler is wielding all items they juggle, but the only actions they can take that require their hands are Return Throw, Juggling Bounce, Strike using a juggled weapon, Interact to add items to their juggle, or Dismiss to stop juggling.\n\nWhen the juggler Dismisses Juggle, they can choose to continue to wield, drop, or stow each juggled item, though they can't wield more items than they have hands. If at any point the juggler isn't wielding any items or becomes [[Conditions/Restrained|Restrained]] or [[Conditions/Unconscious|Unconscious]], the juggle ends and the juggler drops all the items."

  - name: "Juggling Bounce"
    desc: "`pf2:1`  The juggler Strikes with a thrown weapon they're juggling. If the Strike hits, the weapon bounces to a different creature in the weapon's first range increment. The juggler repeats the Strike, which uses the same multiple attack penalty and doesn't increase their multiple attack penalty."
 
```

```encounter-table
name: Juggler
creatures:
  - 1: Juggler
```



Jugglers are physical performers who master the art of manipulating props. Usually, this involves throwing multiple objects up in a flowing pattern, but some use ricocheting items, spinning items, or other objects to keep them aloft.

* * *

Performances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.
