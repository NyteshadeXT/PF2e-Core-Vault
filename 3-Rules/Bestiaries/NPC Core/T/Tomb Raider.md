---
title: "Tomb Raider"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.Yl6pxCXAoFECt89L" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/5
  - remaster
statblock: inline
name: "Tomb Raider"
level: 5
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Tomb Raider"
level: "Creature 5"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 13
perception:
  - name: "Perception"
    desc: "+13; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +13, Athletics: +13, Deception: +7, Society: +9, Stealth: +11, Thievery: +13, Architecture Lore: +11, Engineering Lore: +11"
abilityMods: [3, 4, 1, 2, 2, 0]
speed: 25 feet,  climb 15 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__ +10, __Ref__ +15, __Will__ +11"
hp: 75
health:
  - name: ""
  - name: HP
    desc: "75"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Hand Crossbow|Hand Crossbow]], [[Equipment/Kukri|Kukri]], [[Equipment/Climbing Kit|Climbing Kit]], 20x [[Equipment/Bolts|Bolts]]"
  - name: "Hazard Spotter"
    desc: "  Even if the tomb raider isn't [[Actions/Search|Searching]], they get a check to find traps that normally require them to be Searching."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Kukri"
    desc: "+15 (agile, trip)\n__Damage__  1d6 + 9 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+15 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 9 bludgeoning"

  - name: "**Ranged** `pf2:1` Hand Crossbow"
    desc: "+15 (range increment 60 feet, reload 1)\n__Damage__  1d6 + 6 piercing"

  - name: "Trick Attack"
    desc: "`pf2:1`  The tomb raider chooses one of their weapons. The next attack with that weapon this turn deals an additional 2d6 precision damage. In addition, the tomb raider can Interact to draw or reload the weapon."
 
```

```encounter-table
name: Tomb Raider
creatures:
  - 1: Tomb Raider
```



Great treasure awaits those willing to explore the hazardous depths of ancient tombs and forgotten dungeons. Some tomb raiders seek the riches of bygone eras; others recover pieces of history thought lost to the sands of time.

* * *

Explorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.
