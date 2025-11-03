---
title: "Gunsmith"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.GuYToKMrt5mxxZW6" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/1
  - remaster
statblock: inline
name: "Gunsmith"
level: 1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Gunsmith"
level: "Creature 1"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 6
perception:
  - name: "Perception"
    desc: "+6; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +4, Crafting: +13, Society: +5, Firearm Lore: +13"
abilityMods: [1, 3, 0, 2, 3, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__ +5, __Ref__ +8, __Will__ +6"
hp: 16
health:
  - name: ""
  - name: HP
    desc: "16"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "2x [[Equipment/Dueling Pistol|Dueling Pistol]], [[Equipment/Artisan's Toolkit|Artisan's Toolkit (Gunsmithing)]], 20x [[Equipment/Rounds (Dueling Pistol)|Rounds (Dueling Pistol)]]"
  - name: "Firearm Specialist"
    desc: "  For encounters involving the crafting or maintenance of firearms, the gunsmith is a 6th-level challenge."

  - name: "Misfires"
    desc: "  Firearms that are improperly maintained or subjected to unusual strain can misfire. If a creature attempts to fire a firearm that was fired the previous day or earlier and hasn't been cleaned since, it rolls a DC 5 Flat check before making its attack roll. If it fails this misfire check, the weapon misfires and jams. The attack is an automatic critical failure, and a creature must use an Interact action to clear the jam before the weapon can be reloaded and fired again. Once a creature has spent at least an hour cleaning a weapon, no one needs to roll for a misfire for that weapon until the next day unless an effect says otherwise."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Fist"
    desc: "+8 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 1 bludgeoning"

  - name: "**Ranged** `pf2:1` Dueling Pistol"
    desc: "+8 (concealable, concussive, fatal d10, range increment 60 feet, reload 1)\n__Damage__  1d6 + 2 piercing"

  - name: "Crafty Reload"
    desc: "  The gunsmith can Interact to reload a firearm without a free hand if they have a firearm in each hand. In addition, each time the gunsmith reloads a firearm, they can attempt a Crafting check check against the hard DC for the firearm's level (DC 17 Crafting check for a dueling pistol). On a success, they gain a +1 circumstance bonus on the next attack roll they make with that firearm before the start of their next turn."

  - name: "Firearm Sabotage"
    desc: "`pf2:1` (manipulate) **Requirements** The gunsmith is wielding or holding a one-handed firearm and has a free hand\n* * *\n\n**Effect** The gunsmith deftly makes a minor modification to a firearm that can be detected with a Perception check check opposed by the gunsmith's Crafting DC. If the sabotage is not reversed with a successful Crafting check against the gunsmith's Crafting DC, the firearm automatically misfires the next time it is used (the flat check is an automatic failure; see the Misfires sidebar)."
 
```

```encounter-table
name: Gunsmith
creatures:
  - 1: Gunsmith
```



Even though every gunslinger learns the basics of maintaining and repairing firearms as a part of their training, few would question the expertise of a master gunsmith regarding the weapons by which they live and die. Although professional gunsmiths are rarely found outside of settlements where firearms are common, such as Alkenstar or Dongun Hold, true masters of this specialized craft tend to quickly build reputations for themselves that extend well beyond the borders of whatever region they call home.

* * *

Although relatively uncommon across much of Golarion, the frequently eccentric but undeniably brilliant minds who create elaborate devices of clockwork, gunpowder, and steam often loom much larger in the public eye than their numbers would suggest.
