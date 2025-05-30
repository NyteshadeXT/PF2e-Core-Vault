---
title: "Judge"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.vfFB2za4zaQnXYIa" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/-1
  - remaster
statblock: inline
name: "Judge"
level: -1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Judge"
level: "Creature -1"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 8
perception:
  - name: "Perception"
    desc: "+8; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Deception: +8, Diplomacy: +12, Intimidation: +12, Society: +14, Legal Lore: +16"
abilityMods: [0, -1, 1, 3, 3, 2]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 13
armorclass:
  - name: AC
    desc: "13; __Fort__ +5, __Ref__ +1, __Will__ +12"
hp: 5
health:
  - name: ""
  - name: HP
    desc: "5"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Light Hammer|Gavel]], [[Equipment/Clothing (Fine)|Judge's Robes]], [[Equipment/Illustrated book|Law and Rhetoric Book]]"
  - name: "Group Impression"
    desc: "  When the judge [[Actions/Make an Impression|Make an Impression]], they can compare their Diplomacy check result to the Will DCs of up to four targets instead of one."

  - name: "[[NPC Core/Barrister/Legal Specialist|Legal Specialist]]"
    desc: "  In a legal proceeding, the judge is a 6th-level challenge."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Gavel"
    desc: "+4 ()\n__Damage__  1d4 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+4 (agile, nonlethal, unarmed)\n__Damage__  1d4 bludgeoning"

  - name: "**Ranged** `pf2:1` Gavel"
    desc: "+3 (thrown 10 ft.)\n__Damage__  1d4 bludgeoning"

  - name: "Remember, You're Under Oath"
    desc: "`pf2:2` (auditory,concentrate,emotion,fear,mental) The judge reminds a creature of the oath they swore to the court. The judge makes an Intimidation check against the target's Will DC. On a success, the target takes a –2 status penalty to Deception checks to [[Actions/Lie|Lie]] for 10 minutes (or a –4 status penalty on a critical success). Regardless of the result, the target is temporarily immune to this ability for 24 hours."
 
```

```encounter-table
name: Judge
creatures:
  - 1: Judge
```



Properly exercised, the duties of a judge include strict adherence to the law regardless of station, with minimal sentimentality. Yet for every unbiased justice, there's one who is zealously confident in their own agenda.

* * *

Larger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.
