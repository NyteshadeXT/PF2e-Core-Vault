---
noteType: pf2eMonster
aliases: "Dwarven Arena Berserker"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/10
statblock: inline
name: "Dwarven Arena Berserker"
level: 10
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Dwarven Arena Berserker"
level: "Creature 10"
rare_01: "rare"
size: "Medium"
trait_01: "Humanoid"
trait_02: "Dwarf"

modifier: 18
perception:
  - name: "Perception"
    desc: "Perception +18; darkvision"
languages: "Common, Dwarven"

skills:
  - name: "Skills"
    desc: "__Athletics__ +22; __Intimidation__ +19; __Survival__ +18"

abilityMods: [5, 2, 4, -1, 1, 0]

abilities_top:
  - name: "Items"
    desc: "[[Weapon Potency (+2)|+2]] [[Flaming]] [[Adamantine]] [[bastard-sword|Bastard Sword]], [[armor-potency-1|+1]] [[Chain Shirt]], [[Steel Shield]], coin pouch (21 gp)"

abilities_mid:
  - name: "Dwarven Resilience"
    desc: "Drusfan gains a +2 circumstance bonus to saves against poison and magic."

  - name: "Pair Fighting"
    desc: "If two or more dwarven arena berserkers are both adjacent to the same creature, that creature is [[off-guard]] to their melee Strikes."

abilities_bot:
  - name: "Rage"
    desc: "`pf2:1` **Frequency** 3/day. The dwarven arena berserker flies into a rage for 1 minute. He gains a +2 status bonus to melee damage rolls and temporary Hit Points equal to 10. While raging he takes a –1 penalty to AC."

  - name: "Sunder Strike"
    desc: "When the dwarven arena berserkers critically hits with his bastard sword, he may attempt to [[Disarm]] the target as a free action."

speed: 30 feet

ac: 28
armorclass:
  - name: "AC"
    desc: "28; __Fort__ +21, __Ref__ +17, __Will__ +16"

hp: 185
health:
  - name: "HP"
    desc: "185"

attacks:
  - name: "Melee Bastard Sword"
    desc: "`pf2:1` +22 [[forceful]] __Damage__ `dice: 2d8+10` slashing plus `dice: 1d6` fire"

sourcebook: "Homebrew"
```