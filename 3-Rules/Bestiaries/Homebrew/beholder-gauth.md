---
noteType: pf2eMonster
aliases: "Beholder Gauth"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/creature/level/5
statblock: inline
name: "Beholder Gauth"
level: 5
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Beholder Gauth"
token: [[Beholder Gauth.png]]
level: "Creature 5"
alignment: "NE"
size: "Medium"
trait_03: "Aberration"
modifier: 12
perception:
  - name: "Perception"
    desc: "Perception +12; __All-around vision__, __darkvision__;"
languages: "Deep speech; "
abilityMods: [3, 4, 4, 6, 5, 6]

abilities_top:
  - name: "Perfected Flight"
    desc: "  A beholder gauth can hover in place without spending an action."
abilities_bot:
  - name: "Eye Rays"
    desc: " ([[magical]]);  Effect: The gauth uses two eye ray powers chosen from the list below. Each eye ray must target a different creature. <b>1. Fire Ray (fire):</b> ranged 60 feet; +13 vs. Reflex; 2d6+6 (2d6+6) fire damage. <b>2. Exhaustion Ray (necrotic):</b> ranged 60 feet; +11 vs. Fortitude; 1d8+4 (1d8+4) necrotic damage, and the target is [[fatigued|fatigued]]. <b>3. Sleep Ray (charm):</b> ranged 60 feet; +11 vs. Fortitude; the target is [[slowed|slowed 3]]. On a critical failure the target is knocked [[unconscious|unconscious]] instead of [[slowed|slowed]]. <b>4. Telekinesis Ray:</b> ranged 80 feet; +10 vs. Fortitude; the gauth moves the target up to 20 feet in any direction."
  - name: "Central Eye"
    desc: " ([[magical]]);  One creature within 50 feet makes a +10 vs. Will save. The target is [[stunned|stunned 3]]."

speed: fly 30 feet; 0;

ac: 19
armorclass:
  - name: AC
    desc: "19; __Fort__: +9 (1d20+9); __Ref__: +12 (1d20+12); __Will__: +15 (1d20+15);"
hp: 78
health:
  - name: HP
    desc: "78; "


attacks:
  - name: Melee
    desc: "⬻ bite +11 __Damage__ 2d4+6 (2d4+6) piercing"

sourcebook: "_4e Homebrew_."
```

```encounter-table
name: Beholder Gauth
creatures:
  - 1: Beholder Gauth
```
