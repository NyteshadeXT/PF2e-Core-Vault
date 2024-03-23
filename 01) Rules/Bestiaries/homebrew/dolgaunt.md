---
noteType: pf2eMonster
aliases: "Dolgaunt"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/aberration
  - pf2e/creature/level/4
statblock: inline
name: "Dolgaunt"
level: 4
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Dolgaunt"
level: "Creature 4"
token: [[Dolgaunt.webp]]
alignment: "LE"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Aberration"
modifier: 6
perception:
  - name: "Perception"
    desc: "Perception +6, blindsight (precise);"
languages: "Goblin, Undercommon; "
skills:
  - name: "Skills"
    desc: "Acrobatics: +5 (1d20+5); __Stealth__: +5 (1d20+5); "
abilityMods: [3, 3, 2, 0, 3, 0]

abilities_bot:
  - name: "Clutch of Death"
    desc: "A dolgaunt can grab with up to two tentacles at a time. While grabbing an enemy, it can act normally, but it can’t use that tentacle for another attack. Enemies can attack the tentacle. An attack that hits the tentacle doesn’t harm the dolgaunt, but it causes the tentacle to release the grab. The tentacle’s defenses are the same as those of the dolgaunt."
  - name: "Vitality Leach"
    desc: "([[negative]]) A target that begins its turn grabbed by the dolgaunt takes 1d6 (1d6) negative damage, and the dolgaunt gains this damage as temporary hit points."
    
speed: 25 feet

ac: 19
armorclass:
  - name: AC
    desc: "19; __Fort__: +9 (1d20+9); __Ref__: +10 (1d20+10); __Will__: +9 (1d20+9);"
hp: 20
health:
  - name: HP
    desc: "20; "


attacks:
  - name: Melee
    desc: "⬻ fist +6; __Damage__ 1d6+2 (1d6+2) bludgeoning"
  - name: Melee
    desc: "⬻ tentacle +6 ([[reach|reach 10 feet]]); __Damage__ 1d4+2 (1d4+2) bludgeoning and the target is [[grab|grabbed]]. The dolgaunt can't grab more then two creatures at one time."

sourcebook: "Homebrew"
```

```encounter-table
name: Dolgaunt
creatures:
  - 1: Dolgaunt
```
