---
noteType: pf2eMonster
aliases: "Goblin Underboss"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/6
statblock: inline
name: "Goblin Underboss"
level: 6
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Goblin Underboss"
level: "Creature 6"
alignment: "NE"
size: "Medium"
trait_03: "Goblin"
trait_04: "Humanoid"
modifier: 13
perception:
  - name: "Perception"
    desc: "Perception +13; __darkvision__;"
languages: "Common, Goblin, Undercommon; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +12 (1d20+12); __Athletics__: +15 (1d20+15); __Intimidation__: +14 (1d20+14); __Stealth__: +12 (1d20+12); "
abilityMods: [4, 2, 3, 0, 1, 2]

abilities_top:
  - name: "Survival Instincts"
    desc: "The goblin underboss gains three bonus points to all defenses while below half health."
abilities_mid:
  - name: "Goblin Tactics"
    desc: "When an enemy misses the goblin underboss with a melee attack. The goblin underboss and up to two allies within its line of sight may move one square in any direction."
abilities_bot:
  - name: "Shortsword Critial Specialization"
    desc: "The target is made off-balance by your attack, becoming flat-footed until the start of your next turn."
  - name: "Find the Gap"
    desc: "If the target is flat-footed successful attacks do an additional 2d6 precision damage."

speed: 25 feet

ac: 25
armorclass:
  - name: AC
    desc: "25 (Survival Instincts); __Fort__: +12 (1d20+12); __Ref__: +15 (1d20+15); __Will__: +13 (1d20+13);"
hp: 90
health:
  - name: HP
    desc: "90; "


attacks:
  - name: Melee
    desc: "⬻ shortsword +17 ([[agile]], [[finesse]], [[versatile s]]); __Damage__ 1d8+10 (1d8+10) slashing"

sourcebook: "Homebrew"
```

```encounter-table
name: Goblin Underboss
creatures:
  - 1: Goblin Underboss
```
