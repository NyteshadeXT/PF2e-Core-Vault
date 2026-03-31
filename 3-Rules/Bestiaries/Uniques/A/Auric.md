---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Auric"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/10
statblock: inline
name: "Auric"
level: 10
---

```statblock
layout: Basic Pathfinder 2e Layout
source: "Converted from D&D 3e"
name: "Auric"
level: "Creature 10"
size: "Medium"
trait_01: "Human"
trait_02: "Humanoid"

modifier: 19
perception:
  - name: "Perception"
    desc: "+19"

languages: "Common"

skills:
  - name: "Skills"
    desc: "__Athletics__: +22; __Intimidation__: +20; __Acrobatics__: +18"

abilityMods: [5, 3, 4, 0, -1, 2]

abilities_top:
  - name: "Equipment"
    desc: "[[Weapon Potency (+1)|+1]] [[striking]] [[greatsword]], [[armor-potency-1|+1]] [[resilient]] [[breastplate]], [[floating-shield|Floating Shield]], [[crossbow]] with 20 bolts, 2 [[healing-potion-(lesser)|Healing Potion (Lesser)]], 9 gp"

abilities_mid:
  - name: "Attack of Opportunity"
    desc: "⬲  Auric makes a melee Strike against a creature that leaves a square within his reach or uses a manipulate action."

  - name: "Mobile Assault"
    desc: "Auric ignores difficult terrain when Striding and can Step 10 feet instead of 5 feet."

abilities_bot:
  - name: "Power Cleave"
    desc: "⬺  Auric makes a greatsword Strike. If it hits, he deals an additional 1d12 damage. If the target is reduced to 0 HP, Auric makes another Strike against a different creature within reach."

  - name: "Springing Strike"
    desc: "⬺  Auric Strides up to his Speed and makes a greatsword Strike at any point during the movement. This movement does not trigger reactions from the target of the Strike."

  - name: "Battle Surge"
    desc: "⬻  Auric gains 15 temporary Hit Points and a +1 status bonus to attack rolls for 1 round."

speed: 25 feet

ac: 28
armorclass:
  - name: AC
    desc: "28; __Fort__ +21, __Ref__ +18, __Will__ +16"

hp: 185
health:
  - name: HP
    desc: "185"

attacks:
  - name: "Melee Striking Greatsword"
    desc: "⬻ Greatsword +22 ([[magical]], [[versatile|versatile P]]); __Damage__ `dice: 2d12+18` slashing"

  - name: "Ranged Crossbow"
    desc: "⬻ Crossbow +20 ([[range increment 120 feet]], [[reload 1]]); __Damage__ `dice: 1d8+4` piercing"

sourcebook: "Custom conversion"
```