---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Korush"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/9
statblock: inline
name: "Korush"
level: 9
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew Conversion"
name: "Korush"
level: "Creature 9"
rare_01: "Unique"
size: "Medium"
trait_01: "Ifrit"
trait_02: "Humanoid"
trait_03: "Human"
modifier: 21

perception:
  - name: "Perception"
    desc: "Perception +21; __darkvision__"

languages: "Auran, Celestial, Common; __telepathy__ 100 feet"

skills:
  - name: "Skills"
    desc: "__Acrobatics__ +22; __Athletics__ +19; __Crafting__ +18 (bowmaking, weaponsmithing); __Diplomacy__ +17; __Stealth__ +20; __Deception__ +17; __Society__ +18"

abilityMods: [4, 6, 3, 4, 1, 1]

abilities_top:
  - name: "Items"
    desc: "[[Weapon Potency (+2)|+2]] [[Scimitar]], [[Composite Longbow]], [[Arrows]] x12, [[armor-potency-1|+1]] [[Mithral Chain Shirt]], [[armbands-of-athleticism|Armbands of Athleticism]], coin pouch (24 gp)"

speed: 30 feet, fly 20 feet

ac: 28
armorclass:
  - name: "AC"
    desc: "28; __Fort__ +19, __Ref__ +22, __Will__ +17"

hp: 150
health:
  - name: "HP"
    desc: "150; __Resistances__ fire 10"

attacks:
  - name: "Melee-Scimitar"
    desc: "`pf2:1` +2 Scimitar +21 (forceful, sweep, magical); __Damage__ `dice: 2d6+10` 2d6+10 slashing"

  - name: "Ranged-Composite Longbow"
    desc: "`pf2:1` Composite Longbow +20 (range increment 100 feet, deadly d10); __Damage__ `dice: 2d8+6` 2d8+6 piercing"

abilities_mid:
  - name: "Graceful Dodge"
    desc: "Korush gains a +1 circumstance bonus to AC against reactions triggered by his movement."

  - name: "Elemental Endurance"
    desc: "Korush is resistant to harsh environmental conditions and extreme heat."

abilities_bot:
  - name: "Insightful Strike"
    desc: "Korush adds his Intelligence modifier to the damage of melee Strikes made with agile or finesse weapons."

  - name: "Change Size"
    desc: "⬺ **Arcane, Polymorph** (twice per day) Korush magically changes size, becoming Small or Large for 1 minute. His reach and damage adjust appropriately."

spellcasting:
  - name: "Innate Arcane Spells (DC 26, attack +18)"
    desc: "**3/day** [[3-Rules/Character Building/Equipment/I/Invisibility|Invisibility]] (self only), [[Speak with Animals]]s\n**1/day** [[Create Food]], [[Ethereal Jaunt]]"

sourcebook: "Homebrew"
```