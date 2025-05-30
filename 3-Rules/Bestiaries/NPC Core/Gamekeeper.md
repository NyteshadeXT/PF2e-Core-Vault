---
title: "Gamekeeper"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.RQTIsAmhiMkfcgsb" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/6
  - remaster
statblock: inline
name: "Gamekeeper"
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Gamekeeper"
level: "Creature 6"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 14
perception:
  - name: "Perception"
    desc: "+14; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +13, Diplomacy: +11, Intimidation: +13, Nature: +15, Survival: +15, Hunting Lore: +11"
abilityMods: [3, 4, 2, 0, 2, 1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__ +17, __Ref__ +13, __Will__ +12"
hp: 95
health:
  - name: ""
  - name: HP
    desc: "95"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Arbalest|+1 Arbalest]], [[Equipment/Club|Club]], [[Actor.nQjuWXirAncu9ttG.Item.ff1pJ6NkMua12EnA|Animal Treats]], 40x [[Equipment/Bolts|Bolts]]"
  - name: "Keeper's Revenge"
    desc: " (curse,primal) When the gamekeeper dies, all creatures in a 60-foot emanation that have damaged the gamekeeper in the last minute must succeed a DC 24 Will check saving throw or be cursed. All animals the cursed creature encounters have an initial attitude toward them that is one step worse. This curse can be removed only by an effect that specifically targets curses."

  - name: "Move It!"
    desc: "  The gamekeeper can [[Actions/Hustle|Hustle]] for 30 minutes longer and is not affected by difficult terrain while in their territory."

abilities_mid:
  - name: ""
  - name: "Sic 'Em!"
    desc: "`pf2:r` (auditory,emotion,mental) **Trigger** An animal within 60 feet of the gamekeeper is killed\n* * *\n\n**Effect** The gamekeeper stokes the ire of the wild. Until the end of the gamekeeper's next turn, they and all animals in a 60-foot emanation gain a +1 status bonus to attack rolls and a +2 status bonus to damage rolls.\n\n[[Bestiary Effects/Effect_ Sic 'Em!|Effect: Sic 'Em!]]"

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Fist"
    desc: "+15 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 9 bludgeoning"

  - name: "**Melee** `pf2:1` Club"
    desc: "+15 ()\n__Damage__  1d6 + 9 bludgeoning"

  - name: "**Ranged** `pf2:1` Arbalest"
    desc: "+17 (backstabber, magical, range increment 110 feet, reload 1)\n__Damage__  1d10 + 6 piercing"

  - name: "Leader of the Pack"
    desc: "  The gamekeeper depends on a small pack of dogs or other pack animals suitable for the environment to patrol their area. Creatures that are adjacent to a hostile animal are considered [[Conditions/Off-Guard|Off-Guard]] to the gamekeeper."
 
```

```encounter-table
name: Gamekeeper
creatures:
  - 1: Gamekeeper
```



Gamekeepers know every beast that walks, slithers, flies, or swims in their territory and where to find them; try to keep up with the pack if you think you can. The land has chosen these people as guardians, giving them mysterious powers while in their territory. They are prepared to keep balance.

* * *

Explorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.
