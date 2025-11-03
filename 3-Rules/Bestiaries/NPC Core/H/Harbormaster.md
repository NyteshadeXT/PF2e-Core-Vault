---
title: "Harbormaster"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.vGcspyaP2VOwurMk" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/3
  - remaster
statblock: inline
name: "Harbormaster"
level: 3
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Harbormaster"
level: "Creature 3"

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
    desc: "Acrobatics: +9, Athletics: +9, Diplomacy: +5, Intimidation: +5, Fishing Lore: +8, Sailing Lore: +10"
abilityMods: [4, 2, 2, 2, 1, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +8, __Ref__ +10, __Will__ +8"
hp: 45
health:
  - name: ""
  - name: HP
    desc: "45"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "2x [[Equipment/Hatchet|Hatchet]], [[Equipment/Fishing Tackle|Fishing Tackle]], [[Equipment/Manacles (Average)|Manacles (Average)]], [[Equipment/Spyglass|Spyglass]], [[Equipment/Illustrated book|Ledger]]"
  - name: "Steady Balance"
    desc: "  Whenever the harbormaster rolls a success on a check to [[Actions/Balance|Balance]], they get a critical success instead. They're not [[Conditions/Off-Guard|Off-Guard]] while Balancing on narrow surfaces and uneven ground."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Hatchet"
    desc: "+12 (agile, sweep)\n__Damage__  1d6 + 7 slashing"

  - name: "**Ranged** `pf2:1` Hatchet"
    desc: "+10 (agile, sweep, thrown 10 ft.)\n__Damage__  1d6 + 7 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+12 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 7 bludgeoning"

  - name: "Experienced Hand"
    desc: "  The harbormaster has endured their share of adverse conditions at sea. Any creature that's in adverse weather or aboard a vessel on rough water is [[Conditions/Off-Guard|Off-Guard]] to the harbormaster."
 
```

```encounter-table
name: Harbormaster
creatures:
  - 1: Harbormaster
```



A port must sustain itself on different types of flows: the seaward and coastal flows, marked by the rising and falling of the tides, and the constant flow of trade. A harbormaster is expected to know the former reflexively and encourage the latter within the jurisdictional rules of law.

* * *

Larger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.
