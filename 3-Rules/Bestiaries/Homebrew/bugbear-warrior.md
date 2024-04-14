---
noteType: pf2eMonster
aliases: "Bugbear Warrior"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/6
statblock: inline
name: "Bugbear Warrior"
level: 6
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Bugbear Warrior"
level: "Creature 6"
alignment: "NE"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Goblin"
modifier: 14
perception:
  - name: "Perception"
    desc: "Perception +14; __darkvision__, __imprecise scent__;"
languages: "Common, Goblin; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +13 (1d20+13); __Athletics__: +15 (1d20+15); __Intimidation__: +11 (1d20+11); __Stealth__: +13 (1d20+13); __Thievery__: +13 (1d20+13); "
abilityMods: [5, 3, 2, -1, 1, 0]

abilities_bot:
  - name: "Twin Feint"
    desc: "  The bugbear tormentor makes a dazzling series of attacks it's weapon, using the first attack to throw their foe off guard against a second attack at a different angle. They make two Strikes with their melee weapon, both against the same target. The target is automatically [[flat-footed|flat-footed]] against the second attack. Apply the bugbear tormentor's multiple attack penalty to the Strikes normally."

speed: 25 feet

ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__: +14 (1d20+14); __Ref__: +17 (1d20+17); __Will__: +11 (1d20+11);"
hp: 95
health:
  - name: HP
    desc: "95; "


attacks:
  - name: Melee
    desc: "⬻ dagger +15 ([[agile]], [[versatile S]]); __Damage__ 2d4+7 (2d4+7) piercing"
  - name: Melee
    desc: "⬻ greataxe +17 ([[sweep]]); __Damage__ 1d12+9 (1d12+9) slashing"
  - name: Ranged
    desc: "⬻ dagger +12 ([[agile]], [[thrown 10 feet]], [[versatile S]]); __Damage__ 2d4+7 (2d4+7) piercing"

sourcebook: "_Homebrew_."
```

```encounter-table
name: Bugbear Warrior
creatures:
  - 1: Bugbear Warrior
```
