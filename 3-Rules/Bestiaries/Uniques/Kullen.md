---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Kullen"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/3
statblock: inline
name: "Kullen"
level: 3
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom Encounter"
name: "Kullen"
level: "Creature 3"
alignment: "CN"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Half-Orc"
modifier: 0
perception:
  - name: "Perception"
    desc: "+7"
languages: "Common, Orcish"
skills:
  - name: "Skills"
    desc: "__Athletics__: +10 (1d20+10); __Intimidation__: +8 (1d20+8); __Survival__: +7 (1d20+7);"
abilityMods: [4, 2, 3, -1, 0, 0]

abilities_top:
  - name: "Rage"
    desc: "⬺ The Half-Orc Barbarian flies into a rage, gaining temporary Hit Points equal to their level (3). While raging, they deal +4 damage with melee attacks but take a –1 penalty to AC. The rage lasts for 1 minute or until they spend 1 round without attacking or taking damage."
  - name: "Ferocity"
    desc: "⬺ __Reaction__; When the Half-Orc Barbarian is reduced to 0 Hit Points, they avoid falling unconscious and remain at 1 HP. This ability triggers only once per day."

abilities_bot:
  - name: "Orcish Fury"
    desc: "⬻ Once per day, the Half-Orc Barbarian can make a melee Strike and add an extra die of weapon damage to the attack."

speed: 30 feet

ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__: +9 (1d20+9); __Ref__: +7 (1d20+7); __Will__: +6 (1d20+6);"
hp: 52
health:
  - name: HP
    desc: "52; __Special__: Gains 3 temporary HP when raging."

attacks:
  - name: Melee
    desc: "⬻ +1 greataxe +12 ([[forceful]], [[sweep]]); __Damage__ 1d12+4 (1d12+4) slashing"
  - name: Melee
    desc: "⬻ unarmed strike +9; __Damage__ 1d6+4 (1d6+4) bludgeoning"

sourcebook: "_Homebrew_"
````