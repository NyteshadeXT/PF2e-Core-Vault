---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Todrik"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/2
statblock: inline
name: "Todrik"
level: 2
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom Encounter"
name: "Todrik"
level: "Creature 2"
alignment: "LN"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Human"
modifier: 0
perception:
  - name: "Perception"
    desc: "+6"
languages: "Common, one additional"
skills:
  - name: "Skills"
    desc: "__Athletics__: +7 (1d20+7); __Intimidation__: +5 (1d20+5); __Survival__: +4 (1d20+4);"
abilityMods: [4, 2, 3, 0, 1, -1]

abilities_top:
  - name: "Attack of Opportunity"
    desc: "`Pf2:r` The fighter can make a melee Strike against a creature that uses a move action or manipulates an item while within their reach."
  - name: "Polearm Momentum"
    desc: "When the fighter uses a polearm to make a successful Strike against a target within reach, the target is pushed 5 feet away (DC 17 Reflex negates)."

abilities_bot:
  - name: "Brace for Impact"
    desc: "⬺ The fighter sets their polearm against a charge. Until the start of their next turn, if a creature moves into their reach, the fighter can make a melee Strike against them as a reaction."

speed: 25 feet

ac: 19
armorclass:
  - name: AC
    desc: "19; __Fort__: +7 (1d20+7); __Ref__: +5 (1d20+5); __Will__: +4 (1d20+4);"
hp: 40
health:
  - name: HP
    desc: "40"

attacks:
  - name: Melee
    desc: "⬻ glaive +9 ([[reach]], [[trip]]); __Damage__ 1d10+4 slashing"
  - name: Melee (Secondary)
    desc: "⬻ polearm haft strike +7; __Damage__ 1d6+4 bludgeoning"

sourcebook: "_Homebrew_"
````