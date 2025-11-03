---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Allustan"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/8
statblock: inline
name: "Allustan-Stats"
level: 5
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Allustan-Stats"
level: "Creature 8"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Human"
modifier: 16
perception:
  - name: "Perception"
    desc: "+16;"
languages: "Common, Elven, Dwarven"
skills:
  - name: "Skills"
    desc: "__Arcana__ +19; __Crafting__ +16, __Deception__ +13; __Diplomacy__ +13; __Society__ +16;"
abilityMods: [-1, 3, 1, 5, 2, 0]

abilities_top:
  - name: "Equipment"
    desc: "dagger, Wand of Dispel Magic, Wand of Force Barrrage, Bands of Force, Scroll of Teleport, 225 gp"

spellcasting:
  - name: Arcane Prepared Casting
    desc: "The wizard casts one of the following spells using Intelligence as their spellcasting ability (spell attack +18, spell DC 26):\n\n__Cantrips (8th)__: [[3-Rules/Character Building/Spells/D/Detect Magic|Detect Magic]], [[Telekinetic Hand]], [[Read Aura]], [[Shield]], [[Caustic Blast]]\n__1st Level (4 slots)__: [[Charm]], [[Force Barrage]] x2, [[Runic Weapon]]\n__2nd Level (4 slots)__: [[Resist Energy]], [[Blazing Bolt]], [[3-Rules/Character Building/Spells/S/See the Unseen|See the Unseen]], [[Web]] \n__3rd Level (4 slots)__: [[Fireball]], [[Haste]], [[Invisibility Sphere]]\n__4th Level (3 slots)__: [[Translocate]], [[Mountain Resilience]], [[3-Rules/Character Building/Spells/F/Fly|Fly]]"


speed: 25 feet

ac: 25
armorclass:
  - name: AC
    desc: "25; __Fort__: +14 (1d20+14); __Ref__: +15 (1d20+15); __Will__: +18 (1d20+18);"
hp: 105
health:
  - name: HP
    desc: "105"

attacks:
  - name: Melee ⬻ dagger
    desc: "+12 ([[agile]], [[finesse]], [[thrown-10|thrown 10ft.]]); __Damage__ 1d4-1 piercing"

sourcebook: "_Homebrew_"
````