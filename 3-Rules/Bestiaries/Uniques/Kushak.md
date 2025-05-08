---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Kushak"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/4
statblock: inline
name: "Kushak"
level: 4
---

```statblock
layout: Pathfinder 2e Creature Layout
source: Custom
sourcebook: Conversion - D&D 3.5e

name: Kushak
level: Creature 4

size: "[[medium-b1|Medium]]"
traits:
  - "[[humanoid]]"
  - "[[lizardfolk-b1|Lizardfolk]]"

modifier: 12
senses: low-light vision
languages: draconic
skills:
  - Athletics: +12
  - Stealth: +9
  - Survival: +8
  - Perception: +8
attributes:
  - str: 4
  - dex: 2
  - con: 2
  - int: 0
  - wis: 1
  - cha: 1
speed: 25 feet, swim 25 feet

ac: 20
saves:
  - fort: +10
  - ref: +8
  - will: +6
hp: 65
resistances: 
  - cold 5

items:
  - +1 club
  - heavy steel shield
  - 5 javelins
  - belt pouch (2 cp, 4 sp, 3 gp)

attacks:
  - name: ___Melee___ ⬻ club
    desc: ([[versatile|Versatile-B]], [[Magical]])
    bonus: +13
    damage: "1d6+6 bludgeoning"
  - name: ___Melee___ ⬻ shield bash
    desc: ([[agile]])
    bonus: +10
    damage: "1d6+4 bludgeoning"
  - name: ___Ranged___ ⬻ javelin
    desc: (thrown 30 feet)
    bonus: +11
    damage: "1d6+4 piercing"

abilities_bot:
  - name: Hold Breath
    desc: >
      Kushak can hold his breath for up to 10 minutes, thanks to his lizardfolk physiology.
  - name: Shield Block ⬲
    desc: >
      **Trigger** Kushak has his shield raised and takes damage from a physical attack.
      **Effect** Kushak reduces the damage by 5 (Hardness), then applies any remaining damage to the shield and himself as normal.
  - name: Multiattack Specialist
    desc: >
      Kushak has trained to strike swiftly and accurately. When making multiple Strikes in one turn, he reduces his multiple attack penalty by 1 for all attacks (–4/–8 instead of –5/–10).

