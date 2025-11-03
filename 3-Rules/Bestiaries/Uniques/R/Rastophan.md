---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Rastophan"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/2
statblock: inline
name: "Rastophan"
level: 2
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom Encounter"
name: "Rastophan"
level: "Creature 2"
alignment: "NG"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Human"
modifier: 0
perception:
  - name: "Perception"
    desc: "+7; __Survival__ +9 for tracking"
languages: "Common, one additional"
skills:
  - name: "Skills"
    desc: "__Athletics__: +6 (1d20+6); __Nature__: +7 (1d20+7); __Stealth__: +6 (1d20+6); __Survival__: +9 (1d20+9);"
abilityMods: [3, 2, 2, 1, 0, -1]

abilities_top:
  - name: "Hunter's Edge (Precision)"
    desc: "The ranger designates a foe as their prey (see Hunt Prey). The first time the ranger hits their prey in a round, the attack deals an extra 1d8 precision damage."
  - name: "Hunt Prey"
    desc: "⬺ The ranger designates a single creature as their prey. They gain a +2 circumstance bonus to Perception checks to seek the prey and Survival checks to track it. Additionally, they ignore the penalty for making multiple attacks against the prey with the [[hunter's edge]] ability active."
  - name: "Shield Block"
    desc: "⬺ __Reaction__; The ranger raises their shield to block damage from a physical attack. The damage the shield blocks is reduced by 5 (hardness). The shield takes the remainder of the damage as usual."

abilities_bot:
  - name: "Skirmisher's Tactics"
    desc: "⬺ After striking a foe, the ranger can Step as a free action."

speed: 30 feet

ac: 18
armorclass:
  - name: AC
    desc: "18 (with raised shield); __Fort__: +7 (1d20+7); __Ref__: +6 (1d20+6); __Will__: +5 (1d20+5);"
hp: 40
health:
  - name: HP
    desc: "40; __Special__: Gains shield block defense."

attacks:
  - name: Melee
    desc: "⬻ longsword +9 ([[versatile P]]); __Damage__ 1d8+3 slashing +1d8 precision (if target is their prey)"
  - name: Shield Bash
    desc: "⬻ shield +7; __Damage__ 1d6+3 bludgeoning"

sourcebook: "_Homebrew_"
````