---
title: "Ocean Nomad"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.UTDcZPzjM6D26MZK" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/6
  - remaster
statblock: inline
name: "Ocean Nomad"
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Ocean Nomad"
level: "Creature 6"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 16
perception:
  - name: "Perception"
    desc: "+16; "
languages: "Common, Thalassic"
skills:
  - name: "Skills"
    desc: "Athletics: +15, Nature: +10, Survival: +13, Sailing Lore: +18"
abilityMods: [4, 4, 2, 0, 3, 0]
speed: 25 feet,  swim 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__ +14, __Ref__ +17, __Will__ +11"
hp: 100
health:
  - name: ""
  - name: HP
    desc: "100"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Trident|+1 Trident]], [[Equipment/Leather Armor|Leather Armor]], [[Equipment/Net|Net]]"
  - name: "Master Sailor"
    desc: "  Any watercraft the ocean nomad pilots gains a +10-foot circumstance bonus to its Speed and reduces the minimum distance it must move to turn by half. An ocean nomad ignores difficult terrain or uneven ground from a ship's motion."

  - name: "Practiced Swimmer"
    desc: "  When the ocean nomad rolls a success on an Athletics check to Swim, they get a critical success instead."

  - name: "Strong Lungs"
    desc: "  The ocean nomad can hold their breath for up to 10 minutes (100 rounds)."

abilities_mid:
  - name: ""
  - name: "Tidal Pressure"
    desc: "`pf2:r` (water) **Trigger** An adjacent creature attempts an Athletics check to Swim\n* * *\n\n**Effect** The ocean nomad chooses to either prop the swimmer up or yanks them down into the depths. Increase or decrease the result of the Athletics check by one step. If the ocean nomad chooses to decrease the result, the creature can attempt a DC 24 Fortitude check save to negate the effect."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Trident"
    desc: "+9 ()\n__Damage__  1d8 + 4 piercing"

  - name: "**Ranged** `pf2:1` Trident"
    desc: "+9 (thrown 20 ft.)\n__Damage__  1d8 + 4 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+16 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 10 bludgeoning"

  - name: "Stab and Twist"
    desc: "`pf2:1`  **Requirements** The ocean nomad's last action was a successful melee trident Strike\n* * *\n\n**Effect** The ocean nomad wrenches out the barbed tines of their trident, inflicting 1d6 persistent bleed to the target."
 
```

```encounter-table
name: Ocean Nomad
creatures:
  - 1: Ocean Nomad
```



Adventurers may need passage on a swift vessel, or they might face danger from raiders at sea or in coastal settlements.
