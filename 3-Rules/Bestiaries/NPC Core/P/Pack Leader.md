---
title: "Pack Leader"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.mkyMSRTbDV4lho2o" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Pack Leader"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Pack Leader"
level: "Creature 4"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; "
languages: "Common, Wildsong"
skills:
  - name: "Skills"
    desc: "Athletics: +6, Diplomacy: +9, Nature: +12, Stealth: +9, Survival: +10"
abilityMods: [0, 3, 1, 0, 4, 3]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__ +9, __Ref__ +9, __Will__ +12"
hp: 55
health:
  - name: ""
  - name: HP
    desc: "55"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Sickle|Sickle]], [[Equipment/Sling|Sling]], [[Equipment/Leather Armor|Leather Armor]], 10x [[Equipment/Sling Bullets|Sling Bullets]]"
  - name: "Animal Empathy"
    desc: "  The pack leader can ask questions of, receive answers from, and use the Diplomacy skill with animals."

abilities_mid:
  - name: ""
  - name: "Stay Strong!"
    desc: "`pf2:r`  **Trigger** An allied animal within 30 feet attempts a saving throw\n* * *\n\n**Effect** The pack leader shouts a word of encouragement, granting the allied animal a +1 circumstance bonus to the save.\n\n[[Bestiary Effects/Effect_ Stay Strong!|Effect: Stay Strong!]]"

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Sickle"
    desc: "+9 (agile, finesse, trip)\n__Damage__  1d4 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+11 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 4 bludgeoning"

  - name: "**Ranged** `pf2:1` Sling"
    desc: "+11 (propulsive, range increment 50 feet, reload 1)\n__Damage__  1d6 + 4 bludgeoning"

  - name: "Primal Prepared Spells"
    desc: "DC 20, attack +12; __2nd __  _[[Spells/Animal Messenger|Animal Messenger]]_, _[[Spells/Enlarge|Enlarge]]_; __1st __  _[[Spells/Gentle Landing|Gentle Landing]]_, _[[Spells/Heal|Heal]]_, _[[Spells/Pet Cache|Pet Cache]]_, _[[Spells/Summon Animal|Summon Animal]]_\n__Cantrips__  __(2nd)__ _[[Spells/Gouging Claw|Gouging Claw]]_, _[[Spells/Guidance|Guidance]]_, _[[Spells/Ignition|Ignition]]_, _[[Spells/Stabilize|Stabilize]]_, _[[Spells/Tangle Vine|Tangle Vine]]_"

  - name: "Druid Order Spells"
    desc: "1 Focus Point, DC 20, attack +0; __2nd __  _[[Spells/Heal Animal|Heal Animal]]_"

  - name: "Timely Trick"
    desc: " (auditory,concentrate,mental) The pack leader commands an animal ally within 30 feet to perform a specific action; the target can spend its reaction to immediately Step, Stride, or Strike."
 
```

```encounter-table
name: Pack Leader
creatures:
  - 1: Pack Leader
```



Primal spellcasters with a particular affinity for animals often aid their community by training and healing their domesticated animals. Others focus their time on preserving endangered species and helping them propagate or adapt to a changing environment. The pack leader is most often paired with the [[Trained Bat|Trained Bat]] companion.

* * *

A primalist is a wielder of primal energies and magic, sometimes taught by forces of primal power, including powerful elementals or fey of the First World. Primalists protect the natural world, offering strong medicine to those in need while facing suspicion from those who don't understand their ways.

A great many primalists belong to druidic circles, and even those who aren't members tend to be familiar with the most prominent ones in their homeland.
