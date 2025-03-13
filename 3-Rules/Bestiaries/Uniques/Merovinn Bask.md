---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Human Wizard"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/2
statblock: inline
name: "Human Wizard"
level: 3
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom Encounter"
name: "Human Wizard"
level: "Creature 2"
alignment: "N"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Human"
modifier: 0
perception:
  - name: "Perception"
    desc: "+5"
languages: "Common, Draconic, Elven"
skills:
  - name: "Skills"
    desc: "__Arcana__: +9 (1d20+9); __Deception__: +6 (1d20+6); __Occultism__: +8 (1d20+8); __Stealth__: +4 (1d20+4);"
abilityMods: [-1, 2, 1, 4, 2, 0]

abilities_top:
  - name: "Quickened Shield"
    desc: "`pf2:r` The wizard raises a magical shield as a reaction, gaining +1 AC until the start of their next turn or until the shield is destroyed."
  - name: "Arcane Bond"
    desc: "Once per day, the wizard can use their bonded item to cast a spell they have already cast without expending a spell slot."

spellcasting:
  - name: Arcane Casting
    desc: "The wizard casts one of the following spells using Intelligence as their spellcasting ability (spell attack +8, spell DC 18):\n\n__Cantrips__: [[Ray of Frost]] (1d4+4 cold), [[Electric Arc]] (1d4+4 electricity), [[Shield]]\n__1st Level (2 slots)__: [[Force Barrage]] (1d4 force damage per missile, up to 3 missiles), [[Scorching Burst]] (5-ft burst within 60 feet, 2d6 fire damage)\n__2nd Level (1 slot)__: [[Mirror Image]]"

speed: 25 feet

ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__: +4 (1d20+4); __Ref__: +6 (1d20+6); __Will__: +8 (1d20+8);"
hp: 30
health:
  - name: HP
    desc: "30"

attacks:
  - name: Melee
    desc: "⬻ staff +5 ([[versatile B]]); __Damage__ 1d6-1 bludgeoning"

sourcebook: "_Homebrew_"
````
