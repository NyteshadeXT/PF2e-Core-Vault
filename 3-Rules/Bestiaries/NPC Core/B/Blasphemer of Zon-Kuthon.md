---
title: "Blasphemer of Zon-Kuthon"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.nh5QBC79HYRCSmLV" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/2
  - remaster
statblock: inline
name: "Blasphemer of Zon-Kuthon"
level: 2
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Blasphemer of Zon-Kuthon"
level: "Creature 2"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 8
perception:
  - name: "Perception"
    desc: "+8; "
languages: "Common, Shadowtongue"
skills:
  - name: "Skills"
    desc: "Deception: +9, Intimidation: +7, Performance: +7, Religion: +6, Society: +7"
abilityMods: [3, 1, 0, 1, 2, 3]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__ +6, __Ref__ +7, __Will__ +10"
hp: 35
health:
  - name: ""
  - name: HP
    desc: "35"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Hand Crossbow|Hand Crossbow]], [[Equipment/Spiked Chain|Spiked Chain]], [[Equipment/Religious Symbol (Silver)|Religious Symbol of Zon-Kuthon]], 10x [[Equipment/Bolts|Bolts]]"
  - name: "Twisted Faith"
    desc: "  When attempting a Religion skill check, the blasphemer can roll Deception check instead, so long as they have an intelligent creature around as a witness. If the creature is a follower of the blasphemer's faith, the blasphemer receives a +2 circumstance bonus to the check."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Spiked Chain"
    desc: "+9 (disarm, trip)\n__Damage__  1d8 + 5 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+9 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 6 bludgeoning"

  - name: "**Ranged** `pf2:1` Hand Crossbow"
    desc: "+7 (range increment 60 feet, reload 1)\n__Damage__  1d6 + 2 piercing"

  - name: "False Blessing"
    desc: "`pf2:1` (manipulate) The blasphemer attempts a DC 15 Religion check check to attempt to cast the 1st-rank spell their deity grants to clerics ([[Spells/Phantom Pain|Phantom Pain]] for Zon-Kuthon). The spell must take 1, 2, or 3 actions to Cast. The blasphemer can use twisted faith to roll DC 15 Deception check instead if they have a witness, as normal.\n* * *\n\n**Critical Success** The blasphemer successfully Casts the Spell, then is [[Conditions/Stunned|Stunned]] with a value equal to the number of actions the spell takes – 1.\n\n**Success** As critical success, plus the blasphemer takes 1d6 mental damage.\n\n**Failure** The blasphemer fails to Cast the Spell and takes 1d6 mental damage.\n\n**Critical Failure** The blasphemer fails to Cast the Spell, takes 2d6 mental damage, and is [[Conditions/Stunned|Stunned 1]]."
 
```

```encounter-table
name: Blasphemer of Zon-Kuthon
creatures:
  - 1: Blasphemer of Zon-Kuthon
```



Blasphemers spread messages contrary to the tenets of their faith, often out of the belief that the gods are specifically targeting them to spread this message. In some cultures, such as Nidal, this is a heretical crime and can send a blasphemer on the run from the law.

* * *

Religions inspire devout individuals to uphold their tenets.
