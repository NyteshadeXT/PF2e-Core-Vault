---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Water Elemental"
tags: 
  - pf2e/creature/type/elemental
  - pf2e/creature/level/2
statblock: inline
name: "Water Elemental"
level: 2
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Water Elemental"
level: "Creature 2"
rare_02: "Uncommon"
alignment: "N"
size: "Medium"
trait_04: "Elemental"
trait_05: "Water"
modifier: 0
perception:
  - name: "Perception"
    desc: "Perception +6; __darkvision__, __imprecise vibration sense 30 feet__;"
languages: "Aquan;"
skills:
  - name: "Skills"
    desc: "__Athletics__: +8 (1d20+8); __Stealth__: +6 (1d20+6);"
abilityMods: [2, 1, 2, "-", 0, -1]

abilities_top:
  - name: "Water Bound"
    desc: "  A water elemental can't leave the water for more than 1 minute or it becomes [[rules/conditions.md#stunned|stunned]] until it can touch water again."
  - name: "Drench"
    desc: "  When the water elemental touches a flame or enters a square containing a flame, the flame is extinguished unless it is magical."
abilities_mid:
  - name: "Engulf"
    desc: "⬺ ([[aqua]], [[attack]], [[evocation]]); __DC 16 Reflex__; A creature adjacent to the elemental is pulled into its body and engulfed. Engulfed creatures are [[rules/conditions.md#grabbed|grabbed]], take 1d6 bludgeoning damage at the start of their turn, and must succeed at a DC 16 Athletics check to Escape."
abilities_bot: []

speed: 20 feet, swim 30 feet

ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__: +8 (1d20+8); __Ref__: +7 (1d20+7); __Will__: +4 (1d20+4);"
hp: 30
health:
  - name: HP
    desc: "30; __Immunities__ sleep; __Weaknesses__ fire 5; __Resistances__ physical 3 (except magical or piercing);"

attacks:
  - name: Melee
    desc: "⬻ slam +8 ([[reach|reach 5 feet]]); __Damage__ 1d8+3 bludgeoning plus [[rules/conditions.md#grabbed|grabbed]] (DC 16 to Escape)"
  - name: Engulf
    desc: "⬺ engulf (see ability); __Effect__ see Engulf ability."

spellcasting: []

sourcebook: "Custom."
```