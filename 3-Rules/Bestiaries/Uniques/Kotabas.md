---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Kotabas"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/lizardfolk
  - pf2e/creature/level/7
statblock: inline
name: "Kotabas"
level: 7
---

```statblock
layout: Basic Pathfinder 2e Layout
source: Custom
name: "Kotabas"
level: "Creature 7"
size: "Medium"
trait_01: "humanoid"
trait_02: "lizardfolk"
modifier: 11
perception:
  - name: "Perception"
    desc: "+14; [[Sense Motive]]"
languages: "Draconic"
skills:
  - name: "Skills"
    desc: "Acrobatics +12, Athletics +18, Intimidation +15, Survival +11"
abilityMods: [5, 2, 4, -2, 1, 1]
speed: 35 feet, swim 25 feet
ac: 25
armorclass:
  - name: AC
    desc: "25 (24 while raging); Fort +17, Ref +14, Will +12"
hp: 135
health:
  - name: HP
    desc: "135; Resistance acid 5"

abilities_top:
  - name: "Items"
    desc: "[[+1 resilient hide armor]], 5 [[Javelin]]s, 2 [[Healing Potion (Moderate)]], coin pouch (27 gp)"

abilities_mid:
  - name: "Rage `pf2:2`"
    desc: "**Frequency** 2/day **Effect** Kotabas enters a primal rage for 1 minute. While raging:\n- Gains 14 Temporary Hit Points\n- AC –1 (AC 24 while raging)\n- Claw and Bite damage increases As outlined below\n- Athletics becomes +20\n- Can’t use actions with the [[Concentrate]] trait"
  - name: "Brutal Claws"
    desc: "Kotabas’s claws are [[Magical]] and have the [[Deadly d10]] trait. On a critical hit, he deals an additional 1d10 slashing damage."
  - name: "Uncanny Reflexes"
    desc: "Kotabas gains a +2 circumstance bonus to [[Perception]] and [[Reflex]] saves against traps."
  - name: "Hold Breath"
    desc: "Kotabas can hold his breath for up to 10 minutes."

attacks:
  - name: "Melee `pf2:1` Claw"
    desc: "+18 ([[agile]], [[finesse]], [[magical]], [[versatile|Versatile-S]], [[deadly|Deadly d10]]) __Damage__ `dice: 1d6+9` 1d6+9 slashing (`dice: 1d8+9` 1d8+9 while raging) deadly `dice: 1d10` 1d10"

  - name: "Melee `pf2:1` Bite"
    desc: "+16 (magical) __Damage__ `dice: 1d4+7` 1d4+7 piercing (`dice: 1d6+7` 1d6+7 while raging)"

  - name: "Ranged `pf2:1` Javelin"
    desc: "+16 (thrown 30 ft., [[Magical]]) __Damage__ `dice: 1d6+7` 1d6+7 piercing"
```

