---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Krenshar"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/creature/level/2
statblock: inline
name: "Krenshar"
level: 1
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Krenshar"
level: "Creature 1"
rare_02: "Common"
size: "Medium"
trait_03: "Animal"
modifier: 5
perception:
  - name: "Perception"
    desc: "Perception +5; __darkvision__, __low-light vision__, __scent (imprecise 30ft)__;"
languages: "Understands some commands (cannot speak);"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +5 (1d20+5); __Athletics__: +4 (1d20+4); __Stealth__: +5 (1d20+5); __Survival__: +4 (1d20+4); "
abilityMods: [0, 2, 0, -2, 1, 1]

abilities_bot:
  - name: "Scare"
    desc: "`pf2:1` ([[fear]], [[mental]], [[visual]]) __Frequency__ Once per round; The krenshar pulls back the skin on its face, revealing a terrifying skull-like visage. All creatures within 30 feet that can see the krenshar must attempt a Will save against DC 15 or become [[frightened|Frightened 1]] ([[frightened|Frightened 2]] on a critical failure). Creatures that critically succeed are immune to the krenshar’s Scare ability for 24 hours."
  - name: "Pack Hunter"
    desc: "When a krenshar makes a Strike against a frightened creature, it deals an additional `dice: 1d4` 1d4 precision damage."

speed: 40 feet;

ac: 15
armorclass:
  - name: AC
    desc: "15; __Fort__: +5 (1d20+5); __Ref__: +7 (1d20+7); __Will__: +3 (1d20+3);"
hp: 30
health:
  - name: HP
    desc: "20;"

attacks:
  - name: Melee
    desc: "⬻ bite +6 ([[agile]]); __Damage__ `dice: 1d6` 1d6 piercing"
  - name: Melee.
    desc: "⬻ claw +4 ([[agile]]); __Damage__ `dice: 1d4` 1d4 slashing"

sourcebook: "Homebrew"


```
