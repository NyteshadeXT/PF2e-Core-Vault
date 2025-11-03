---
title: "Reckless Scientist"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.zqesJ7AlPM39Qqcw" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/6
  - remaster
statblock: inline
name: "Reckless Scientist"
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Reckless Scientist"
level: "Creature 6"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +12, Crafting: +16, Deception: +9, Medicine: +10, Stealth: +14, Engineering Lore: +14, Underworld Lore: +14"
abilityMods: [1, 4, 4, 4, 2, -1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__ +16, __Ref__ +14, __Will__ +10; +1 status to all saves vs. poison"
hp: 95
health:
  - name: ""
  - name: HP
    desc: "95; __Resistances__ poison 5"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Sickle|+1 Sickle]], [[Equipment/Leather Armor|Work Coat]], [[Equipment/Alchemist's Toolkit|Alchemist's Toolkit]], 3x [[Equipment/Elixir of Life (Lesser)|Elixir of Life (Lesser)]]"
  - name: "Unstable Collection"
    desc: "  A reckless scientist carries a collection of poorly stowed alchemical items: 3 elixirs of life and 6 alchemical grenades. The scientist replenishes these items each day using scavenged materials. The alchemical grenades deal either acid, cold, or fire damage plus 2 persistent damage and 2 splash damage of the same type (typically the collection contains two of each grenade)."

abilities_mid:
  - name: ""
  - name: "Unstable Explosion"
    desc: "  When an attacker scores a critical hit against the reckless scientist, one of the scientist's alchemical items bursts. The GM determines the item randomly. If it was a bomb, the alchemist takes damage from the bomb, and any creature adjacent to the alchemist takes the splash damage. Any other item is wasted."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Sickle"
    desc: "+17 (agile, finesse, magical, trip)\n__Damage__  1d4 + 7 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+16 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 7 bludgeoning"

  - name: "**Ranged** `pf2:1` Alchemical Grenade"
    desc: "+16 (range increment 20 feet, splash)\n__Damage__  2 untyped 2 untyped 2d6 untyped"

  - name: "Quick Grenadier"
    desc: "`pf2:1`  The reckless scientist Interacts to draw an alchemical grenade with an Interact action and throws it as a ranged Strike."

  - name: "Reckless Alchemy"
    desc: "`pf2:2` (concentrate,manipulate) The reckless scientist attempts to combine two alchemical grenades or two elixirs of life into one item. They can Interact to draw the items if necessary. They attempt a DC 22 Crafting check check, destroying both component items to create one new item.\n* * *\n\n**Success** The new item has the full effect of both component items, and the reckless scientist can Activate it. If they don't Activate it before the end of their turn, the item explodes (as critical failure).\n\n**Failure** The new item is inert.\n\n**Critical Failure** The unstable item explodes, dealing 3d6 piercing damage to the reckless scientist."
 
```

```encounter-table
name: Reckless Scientist
creatures:
  - 1: Reckless Scientist
```



It's the reckless scientist's job to break the rules of reality, no matter the cost.

* * *

Villains pursue selfish and cruel goals, trampling over anyone in their way.
