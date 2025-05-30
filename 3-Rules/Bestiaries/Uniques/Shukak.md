---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Shukak"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/lizardfolk
  - pf2e/creature/level/8
statblock: inline
name: "Shukak"
level: 8
---

```statblock
layout: Basic Pathfinder 2e Layout
source: Custom
name: Shukak
level: "Creature 8"
token: [[Shukak.png]]

size: Medium
trait_01: humanoid
trait_02: lizardfolk

modifier: 12
perception:
  - name: "Perception"
    desc: "+16"
languages: "Common, Draconic"
skills:
  - name: "Skills"
    desc: "Athletics +19, Intimidation +15, Acrobatics +13, Survival +14, Sense Motive +14"
abilityMods: [4, 3, 4, 0, 1, 1]
speed: 30 feet, swim 25 feet
ac: 27
armorclass:
  - name: AC
    desc: "27; [[Fort]] +18, [[Ref]] +16, [[Will]] +14"
hp: 145
health:
  - name: "HP"
    desc: "145; [[Resistance]] acid 15"

abilities_top:
  - name: "Items"
    desc: "+1 [[Returning]] Trident, [[bands-of-force|Bands of Force]], [[Healing Potion (Moderate)]], coin pouch (45 gp)"

abilities_mid:
  - name: "Attack of Opportunity `pf2:r`"
    desc: "Shukak can make an attack of opportunity when a creature within his reach uses a [[Manipulate]], [[Move]], or [[Ranged]] action, or leaves a square during a move action it is using."

  - name: "Brutal Precision"
    desc: "Shukak's [[Trident]] is deadly in his hands. On a critical hit, he increases its deadly die to [[Deadly d10]], and its critical specialization effect knocks the creature back 5 feet."

  - name: "Hold Breath"
    desc: "Shukak can hold his breath for up to 10 minutes."

attacks:
  - name: "**Melee** `pf2:1` Returning Trident"
    desc: "+19 (deadly d8, thrown 20 ft., [[Magical]], [[deadly|deadly d10]]), __Damage__ `dice: 1d8+9` 1d8+9 piercing; On critical `dice: 2d8+9 + 1d10` 1d8+9 + 1d10 and push 5 feet"

  - name: "**Melee** `pf2:1` Claw"
    desc: "+17 (agile, finesse, [[Magical]]),  __Damage__ 1d6+6 slashing"

  - name: "**Melee** `pf2:1` Bite"
    desc: "+17 ([[Magical]]),  __Damage__ 1d4+6 piercing"

  - name: "**Ranged** `pf2:1` Returning Trident"
    desc: "+17 (thrown 20 ft., [[Magical]], [[deadly|deadly d10]]),  __Damage__ `dice: 1d8+9` 1d8+9 piercing; On critical `dice: 2d8+9 + 1d10` 1d8+9 + 1d10 and push 5 feet"
