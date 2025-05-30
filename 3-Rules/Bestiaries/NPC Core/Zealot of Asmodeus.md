---
title: "Zealot of Asmodeus"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.0iyGP5rLXE6NxdRr" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Zealot of Asmodeus"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Zealot of Asmodeus"
level: "Creature 4"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
trait_03: [[unholy]]
modifier: 9
perception:
  - name: "Perception"
    desc: "+9; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +9, Deception: +10, Intimidation: +10, Religion: +12, Society: +7"
abilityMods: [4, 1, 1, 0, 3, 2]
speed: 20 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 22
armorclass:
  - name: AC
    desc: "22 (24 with shield raised); __Fort__ +9, __Ref__ +7, __Will__ +11"
hp: 60
health:
  - name: ""
  - name: HP
    desc: "60"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Composite Shortbow|Composite Shortbow]], [[Equipment/Mace|Mace]], [[Equipment/Steel Shield|Steel Shield]], [[Equipment/Half Plate|Half Plate]], 20x [[Equipment/Arrows|Arrows]]"
abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Shield Block|Shield Block]]"
    desc: "`pf2:r`  **Trigger** The monster has its shield raised and takes damage from a physical attack.\n* * *\n\n**Effect** The monster snaps its shield into place to deflect a blow. The shield prevents the monster from taking an amount of damage up to the shield's Hardness. The monster and the shield each take any remaining damage, possibly breaking or destroying the shield."

  - name: "Swear Vengeance"
    desc: "`pf2:r`  **Trigger** A creature the zealot can see damages a follower of [[Deities/Asmodeus|Asmodeus]] other than the zealot\n* * *\n\n**Effect** The zealot is affected by a [[Spells/Sure Strike|Sure Strike]] spell. If the zealot makes an attack roll against anyone other than the triggering creature, the _sure strike_ ends with no effect."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Mace"
    desc: "+12 (shove)\n__Damage__  1d6 + 4 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+12 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 4 bludgeoning"

  - name: "**Ranged** `pf2:1` Composite Shortbow"
    desc: "+9 (deadly d10, propulsive, range increment 60 feet, reload 0)\n__Damage__  1d6 + 2 piercing"

  - name: "Divine Prepared Spells"
    desc: "DC 19, attack +11; __2nd __  _[[Spells/Cleanse Affliction|Cleanse Affliction]]_, _[[Spells/See the Unseen|See the Unseen]]_, _[[Spells/Share Life|Share Life]]_; __1st __  _[[Spells/Command|Command]]_, _[[Spells/Harm|Harm]]_, _[[Spells/Runic Weapon|Runic Weapon]]_, _[[Spells/Spirit Link|Spirit Link]]_\n__Cantrips__  __(2nd)__ _[[Spells/Detect Magic|Detect Magic]]_, _[[Spells/Divine Lance|Divine Lance]]_, _[[Spells/Forbidding Ward|Forbidding Ward]]_, _[[Spells/Read Aura|Read Aura]]_, _[[Spells/Sigil|Sigil]]_"

  - name: "Channel Smite"
    desc: "`pf2:2` (divine) **Cost** the zealot expends a [[Spells/Harm|Harm]] spell\n* * *\n\n**Effect** The zealot makes a melee Strike. If it hits, they damage the target with a 1-action _harm_ spell. The target automatically gets a failure (or a critical failure if the Strike was a critical hit). The spell doesn't have the manipulate trait when cast this way."

  - name: "Deadly Simplicity"
    desc: "  The zealot deals 1d8 damage with their mace instead of 1d6."
 
```

```encounter-table
name: Zealot of Asmodeus
creatures:
  - 1: Zealot of Asmodeus
```



Zealots ferret out plots against their religion and seek justice for their church's followers. This zealot serves Asmodeus, but others might serve Abadar, Calistria, Iomedae, Norgorber, Pharasma, Sarenrae, or Zon-Kuthon. They often ride a [[Monster Core/War Horse|War Horse]] wearing light barding. To depict a zealot's mount, add this horse to the encounter as an additional monster with its own actions, adjusting the encounter's XP budget accordingly.

* * *

Religions inspire devout individuals to uphold their tenets.
