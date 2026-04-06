---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Giant Bombardier Beetle"
tags: 
  - pf2e/creature/type/animal
  - pf2e/creature/level/2
statblock: inline
name: "Giant Bombardier Beetle"
level: 2
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Giant Bombardier Beetle"
level: "Creature 2"
rare_02: "Common"
alignment: "N"
size: "Medium"
trait_04: "Animal"
trait_05: ""
modifier: 0
perception:
  - name: "Perception"
    desc: "Perception +6; __darkvision__;"
languages: "None;"
skills:
  - name: "Skills"
    desc: "__Athletics__: +8 (1d20+8); "
abilityMods: [2, 0, 2, "-", 0, -1]

abilities_top:
  - name: "Breath Weapon"
    desc: " ([[acid]], [[evocation]]);  ⬺ The giant bombardier beetle sprays a 10-foot cone of acidic liquid. Each creature in the area takes 2d6 acid damage (DC 16 basic Reflex save). It can't use Breath Weapon again for 1d4 rounds."
abilities_mid:
  - name: "Mindless"
    desc: "  The giant bombardier beetle is immune to [[rules/conditions.md#mental|mental]] effects."

speed: 25 feet

ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__: +7 (1d20+7); __Ref__: +6 (1d20+6); __Will__: +4 (1d20+4);"
hp: 30
health:
  - name: HP
    desc: "30; __Immunities__ mental;"

attacks:
  - name: Melee
    desc: "⬻ bite +8 ([[reach|reach 5 feet]]); __Damage__ 1d8+3 piercing"
  - name: Breath Weapon
    desc: "⬺ breath weapon ([[range increment|range 10 feet]]); __Effect__ see Breath Weapon ability"

sourcebook: "Custom."
```
