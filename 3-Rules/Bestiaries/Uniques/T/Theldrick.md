---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Theldrick"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/5
statblock: inline
name: "Theldrick"
level: 5
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Theldrick"
level: "Creature 5"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Human"
modifier: 10
perception:
  - name: "Perception"
    desc: "+10;"
languages: "Common, Infernal"
skills:
  - name: "Skills"
    desc: "__Athletics__: +10 (1d20+10); __Diplomacy__: +10 (1d20+10); __Intimidation__: +9 (1d20+9); __Medicine__: +8 (1d20+8); __Religion__: +12 (1d20+12);"
abilityMods: [3, 1, 3, 1, 3, 2]

abilities_top:
  - name: "Equipment"
    desc: "full plate, steel shield, +1 flail, crossbow, 10 bolts, dagger"

abilities_bot:
  - name: "Divine Font (Harm)"
    desc: "Theldrick can cast [[Harm]] (3/day) using his own spell slots"

spellcasting:
  - name: Divine Spontaneous Casting
    desc: "The cleric casts one of the following spells using Wisdom as their spellcasting ability (spell attack +10, spell DC 20):\n\n__Cantrips (3 slots)__: [[Divine Lance]], [[3-Rules/Character Building/Spells/Light|Light]], [[Guidance]], [[Vitality Lash]]\n__1st Level (3 slots)__: [[3-Rules/Character Building/Spells/Bane|Bane]], [[Bless]], [[Echoing Weapon]]\n__2nd Level (3 slots)__: [[Blazing Armory]], [[Boneshaker]], [[Dancing Shield]]\n__3rd Level (2 slots)__: [[Rouse Skeletons]], [[Vampiric Feast]]"


speed: 25 feet

ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__: +11 (1d20+11); __Ref__: +6 (1d20+6); __Will__: +10 (1d20+10);"
hp: 70
health:
  - name: HP
    desc: "70"

attacks:
  - name: Melee
    desc: "⬻ flail +11 ([[disarm]], [[sweep]], [[trip]]); __Damage__ 1d6+4 bludgeoning"
  - name: Ranged
    desc: "⬻ crossbow +9 ([[reload 1]]); __Damage__ 1d8 piercing"

sourcebook: "_Homebrew_"
````
