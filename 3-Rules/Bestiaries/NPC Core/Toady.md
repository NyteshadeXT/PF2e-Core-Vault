---
title: "Toady"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.BbFb0HC3vMBGP5WN" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/0
  - remaster
statblock: inline
name: "Toady"
level: 0
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Toady"
level: "Creature 0"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 3
perception:
  - name: "Perception"
    desc: "+3; "
languages: "Common; one additional language spoken by their boss"
skills:
  - name: "Skills"
    desc: "Athletics: +4, Deception: +2, Stealth: +6, Thievery: +4"
abilityMods: [2, 2, 3, -1, 1, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 14
armorclass:
  - name: AC
    desc: "14; __Fort__ +9, __Ref__ +6, __Will__ +3"
hp: 20
health:
  - name: ""
  - name: HP
    desc: "20; __Weaknesses__ mental 2"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Sap|Sap]], Supplies for the boss"
  - name: "Master Sends Their Regards"
    desc: "  A toady can deliver a message from their boss to [[Actions/Demoralize|Demoralize]] using their boss's Intimidation modifier instead of their own."

abilities_mid:
  - name: ""
  - name: "Human Shield"
    desc: "`pf2:r`  **Trigger** The toady's boss takes damage from an attack, and the toady is adjacent to them\n* * *\n\n**Effect** The toady takes the damage instead, along with any secondary effects of attack. This damage can't be reduced in any way."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Sap"
    desc: "+6 (agile, nonlethal)\n__Damage__  1d6 + 2 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+6 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 2 bludgeoning"

  - name: "Scurry"
    desc: "`pf2:1`  The toady Strides, then can [[Actions/hide|hide]]. They can attempt to Hide from creatures without cover or being [[Conditions/Concealed|Concealed]], but at a –2 circumstance penalty."

  - name: "Throw Cargo"
    desc: "`pf2:2`  A toady carries a heavy load of supplies at their boss's behest. They hurl a heavy item they're carrying, which explodes on impact to deal 1d10 bludgeoning damage to all creatures in a 5-foot burst with a DC 14 Reflex check save."
 
```

```encounter-table
name: Toady
creatures:
  - 1: Toady
```



These minions perform the thankless tasks that keep their master's vile machine running. Whether out of loyalty or fear, a toady serves their boss faithfully.

* * *

Villains pursue selfish and cruel goals, trampling over anyone in their way.
