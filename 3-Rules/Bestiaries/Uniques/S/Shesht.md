---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Shesht"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/3
statblock: inline
name: "Shesht"
level: 3
---

```statblock
layout: Pathfinder 2e Creature Layout
source: Custom
sourcebook: Conversion - D&D 3.5e

name: Shesht
level: Creature 3

size: "[[medium-b1|Medium]]"
traits:
  - [[Humanoid]]
  - [[lizardfolk-b1|Lizardfolk]]

modifier: 9
senses: low-light vision
languages: draconic, druidic
skills:
  - Nature: +9
  - Survival: +8
  - Medicine: +8
  - Acrobatics: +6
  - Perception: +8
attributes:
  - str: 1
  - dex: 1
  - con: 2
  - int: -1
  - wis: 2
  - cha: 0
speed: 25 feet, swim 25 feet

ac: 18
saves:
  - fort: +8
  - ref: +7
  - will: +8
hp: 42

items:
  - +1 Striking Club
  - Wooden Shield
  - 2 [[Healing Potion (Lesser)]] 
  - [[Oak Potion]]
  - Wand of [[Heal]] (Rank 1)
  - coin pouch (3 cp, 2 sp, 3 gp)

attacks:
  - name: ___Melee___ ⬻ club
    desc: ([[Magical]], [[versatile|Versatile-B]])
    bonus: +9
    damage: "1d6+1 bludgeoning"

spellcasting:
  - name: Primal Prepared Spells
    dc: 17
    attack: +9
    desc: >
      **Cantrips (3rd):** [[Light]], [[Stabilize]] (converted from cure minor wounds)  
      **1st (2 slots):** [[Jump]], [[Heal]]  
      **2nd (1 slot):** [[Water Breathing]]

abilities_bot:
  - name: Hold Breath
    desc: >
      Shesht can hold her breath for up to 10 minutes.
  - name: Trackless Step
    desc: >
      Shesht leaves no trail in natural surroundings and can't be tracked in such environments unless she wishes to be.
  - name: Woodland Stride
    desc: >
      Shesht can move through undergrowth and natural difficult terrain at normal speed.
  - name: Wild Empathy
    desc: >
      Shesht can [[Make an Impression]] on animals and make very simple requests of them using Nature instead of Diplomacy.

