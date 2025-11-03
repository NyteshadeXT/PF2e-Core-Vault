---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Garras"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/2
statblock: inline
name: "Garras"
level: 2
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom Encounter"
name: "Garras"
level: "Creature 2"
alignment: "N"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Human"
trait_06: "Orc"
modifier: 6
perception:
  - name: "Perception"
    desc: "+6; darkvision 60 feet"
languages: "Common, Goblin, Orc"
skills:
  - name: "Skills"
    desc: "__Athletics__: +8 (1d20+8); __Intimidation__: +6 (1d20+6); __Religion__: +6 (1d20+6);"
abilityMods: [3, 0, 2, 1, 2, -1]

abilities_top:
  - name: "Orc Ferocity"
    desc: "`pf2:r` When Garras is reduced to 0 HP, he avoids falling unconscious and remains at 1 HP. This can be used once per day."
  - name: "Equipment"
    desc: "half-plate, steel shield, flail, dagger"

abilities_bot:
  - name: "Trip Mastery"
    desc: "When Garras makes a Trip attempt, he does not gain the attack trait, meaning it does not suffer MAP (Multiple Attack Penalty)."

spellcasting:
  - name: Divine Spontaneous Casting
    desc: "The cleric casts one of the following spells using Wisdom as their spellcasting ability (spell attack +7, spell DC 14):\n\n__Cantrips__: [[3-Rules/Character Building/Spells/Detect Magic|Detect Magic]], [[Guidance]], [[Void Warp]]\n__1st Level (2 slots)__: [[Bless]], [[Harm]], [[Runic Weapon]]"

speed: 25 feet

ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__: +8 (1d20+8); __Ref__: +4 (1d20+4); __Will__: +6 (1d20+6);"
hp: 36
health:
  - name: HP
    desc: "36"

attacks:
  - name: Melee ⬻ flail
    desc: "+10 ([[disarm]], [[sweep]], [[trip]]); __Damage__ 1d6+3 bludgeoning"
  - name: Melee ⬻ dagger
    desc: "+10 ([[agile]], [[finesse]], [[thrown 10ft]], [[versatile s]]); __Damage__ 1d4+3 piercing"
  - name: Ranged ⬻ dagger
    desc: "+10 ([[agile]], [[finesse]], [[thrown 10ft]], [[versatile s]]); __Damage__ 1d4 piercing"

sourcebook: "_Homebrew_"
````
