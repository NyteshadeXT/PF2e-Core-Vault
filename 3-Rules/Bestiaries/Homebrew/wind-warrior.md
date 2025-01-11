---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Wind Warrior"
tags: 
  - pf2e/creature/type/elemental
  - pf2e/creature/level/4
statblock: inline
name: "Wind Warrior"
level: 4
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom Conversion"
name: "Wind Warrior"
token: "[[Wind-Warrior.webp]]"
level: "Creature 4"
rare_02: "Uncommon"
alignment: "N"
size: "Medium"
trait_04: "Air"
trait_05: "Elemental"
modifier: 0
perception:
  - name: "Perception"
    desc: "+9; __darkvision__"
languages: "Auran"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +12 (1d20+12); __Athletics__: +10 (1d20+10); __Stealth__: +11 (1d20+11);"
abilityMods: [4, 5, 3, 0, 1, 0]

abilities_top:
  - name: "Body Suffusion"
    desc: "A Wind Warrior’s spirit keeps its weapons intact. If disarmed, its weapon crumbles to dust. As a single action, the Wind Warrior can reform its longsword or any other disarmed weapon."
  - name: "Superior Two-Weapon Fighting"
    desc: "When the Wind Warrior makes multiple Strikes in the same turn, it reduces its multi-attack penalty by 2 for these attacks (The second attack is reduced from –5 to –3 while the third attack is reduced from –10 to –8.)."

abilities_bot:
  - name: "Sonic Blast"
    desc: "⬺ ([[sonic]]); __DC 18 Reflex__; The Wind Warrior clangs its weapons together, creating a 20-foot line of sonic energy. Creatures in the line take 3d6 sonic damage (DC 18 Reflex for half damage)."

speed: 30 feet, fly 90 feet (good)

ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__: +9 (1d20+9); __Ref__: +11 (1d20+11); __Will__: +8 (1d20+8);"
hp: 60
health:
  - name: HP
    desc: "60; __Immunities__ sleep, poison; __Resistances__ physical 5 (except magical or piercing); __Weaknesses__ slowed 1 by cold damage."

attacks:
  - name: Melee
    desc: "⬻ longsword +13 ([[versatile P]]); __Damage__ 1d8+6 (1d8+6) slashing"

sourcebook: "_Homebrew_"
