---
title: "Inspector"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.lqg82WmGcps3BEcd" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/3
  - remaster
statblock: inline
name: "Inspector"
level: 3
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Inspector"
level: "Creature 3"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; "
languages: "Common; up to 3 additional languages"
skills:
  - name: "Skills"
    desc: "Athletics: +9, Diplomacy: +12, Intimidation: +13, Medicine: +8, Society: +12, Legal Lore: +13"
abilityMods: [1, 3, 0, 4, 3, 1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 19
armorclass:
  - name: AC
    desc: "19; __Fort__ +5, __Ref__ +10, __Will__ +12"
hp: 40
health:
  - name: ""
  - name: HP
    desc: "40"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Shortsword|Shortsword]], [[Equipment/Leather Armor|Leather Armor]]"
  - name: "Investigation Specialist"
    desc: "  For encounters involving investigation, the inspector is a 5th-level challenge."

  - name: "Sense Demise"
    desc: "  The inspector can [[Actions/Sense Motive|Sense Motive]] on a corpse, learning about the creature in the moments before its death."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Shortsword"
    desc: "+12 (agile, finesse, versatile s)\n__Damage__  1 piercing 1d6 + 4 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+12 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 4 bludgeoning 1 bludgeoning"

  - name: "Unavoidable Question"
    desc: "`pf2:1` (linguistic) **Frequency** once per turn\n* * *\n\n**Effect** The inspector [[Actions/demoralize|demoralize]]{Demoralizes} a creature and asks a question. On a success, the next Strike the inspector attempts against that target deals an additional 1d6 precision damage. If the target spends an action on their next turn to answer the question, either truthfully or by succeeding at a DC 25 Deception check check, they are temporarily immune to the inspector's Unavoidable Question for 1 minute."
 
```

```encounter-table
name: Inspector
creatures:
  - 1: Inspector
```



Inspectors cultivate a wide selection of skills to investigate arson, murder, and other serious crimes, usually in major urban centers. They can assist adventurers, perhaps noticing an object or creature that seems out of the ordinary without being sure why.

* * *

Larger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.
