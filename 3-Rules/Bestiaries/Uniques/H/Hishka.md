---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Hishka"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/lizardfolk
  - pf2e/creature/level/7
statblock: inline
name: "Hishka"
level: 7
---

```statblock
layout: Basic Pathfinder 2e Layout
source: Custom
name: Hishka
level: "Creature 7"

size: Medium
trait_01: humanoid
trait_02: lizardfolk
token: [[hishka.png]]
modifier: 11
perception:
  - name: "Perception"
    desc: "+14"
languages: "Common, Draconic, Druidic, Sylvan"
skills:
  - name: "Skills"
    desc: "Nature +17, Survival +15, Medicine +15, Diplomacy +14, Athletics +13, Acrobatics +10"
abilityMods: [3, -1, 4, 2, 4, 1]
speed: 25 feet, swim 25 feet
ac: 24
armorclass:
  - name: AC
    desc: "24; Fort +16, Ref +11, Will +16"
hp: 105
health:
  - name: HP
    desc: "105; Resistance fire 5"

abilities_top:
  - name: "Items"
    desc: "[[Druid's Vestments]], [[Wand of Fly (Rank 4)]], [[Wand of Charm (Rank 2)]], 2 [[Healing Potion (Moderate)]], 2 [[Antidote (Greater)]], coin pouch (30 gp)  Note: The healing potions were gifts from Ilthane and аге contaminated with slow worms, although Hishka doesn't know it. "

abilities_mid:
  - name: "Wild Shape `pf2:2`"
    desc: "**Frequency** 2/day  **Effect** Hishka casts [[Animal Form|Animal Form (Rank 4)]] or [[Insect Form|Insect Form (Rank 4)]]. While in Wild Shape, she gains physical attacks appropriate to her form and enhanced movement."

  - name: "Trackless Step"
    desc: "Hishka leaves no trail in natural terrain and can't be tracked."

  - name: "Woodland Stride"
    desc: "Hishka can move through undergrowth and natural difficult terrain at normal speed."

  - name: "Wild Empathy"
    desc: "Hishka can [[Make an Impression]] on animals using her Nature modifier instead of Diplomacy."

  - name: "Hold Breath"
    desc: "Hishka can hold her breath for 10 minutes."

spellcasting:
  - name: Primal Prepared Spells
    dc: 25
    attack: +17
    desc: "**Cantrips (7th):** [[Light]], [[Stabilize]], [[Detect Poison]], [[Mending]], [[3-Rules/Character Building/Spells/D/Detect Magic|Detect Magic]]<br>**1st (4 slots):** [[Heal]], [[Charm|Charm (Animal Only)]]<br>**2nd (3 slots):** [[Ash Cloud]], [[Restoration]], [[Heat Metal]]<br>**3rd (3 slots):** [[Heal|Heal (Rank 3)]], [[Wall of Thorns]], [[Water Breathing]]  **4th (2 slots):** [[3-Rules/Character Building/Spells/F/Fly|Fly]], [[Animal Form]]"

attacks:
  - name: "**Melee** `pf2:1` Claw"
    desc: "+15 (agile, finesse, [[Magical]]) __Damage__ `dice: 1d6+6` 1d6+6 slashing"

  - name: "**Melee** `pf2:1` Bite"
    desc: "+13 (finesse, [[Magical]]) __Damage__ `dice: 1d6+4` 1d6+4 piercing"

```
