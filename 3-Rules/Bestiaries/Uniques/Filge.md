---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Filge, Deranged Necromancer"
tags: 
  - pf2e/creature/type/human
  - pf2e/creature/level/3
statblock: inline
name: "Filge, Deranged Necromancer"
level: 3
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Filge, Deranged Necromancer"
level: "Creature 3"
rare_02: "Uncommon"
alignment: "NE"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Human"
modifier: 0
perception:
  - name: "Perception"
    desc: "Perception +7; __darkvision__ (familiar ability)"
languages: "Common, Elven, Infernal"
skills:
  - name: "Skills"
    desc: "__Arcana__: +9; __Religion__: +9; __Crafting__: +7; __Society__: +7; __Stealth__: +6"
abilityMods: [0, 2, 1, 3, 1, 0]

abilities_top:
  - name: "Familiar (Merrowahn)"
    desc: "Filge has an owl familiar. It grants him darkvision and a +2 bonus on Arcana checks to recall knowledge about necromantic spells."
abilities_mid:
  - name: "Arcane Bond"
    desc: "Filge's arcane bond allows him to cast one additional spell he has prepared once per day."
  - name: "Syringe Injector"
    desc: "⬲ (manipulate); Filge can inject a potion into himself or another willing creature as a single action, consuming the potion in the process. The syringes can also be used to deliver poisons or potions to unwilling creatures with a melee attack (resolve as a melee spell attack with a +8 attack modifier)."
abilities_bot:
  - name: "Potions in Syringes"
    desc: "Filge carries syringes containing: [[Cheetah's Elixir (Lesser)]], [[Healing Potion (Lesser)]], and [[Healing Potion (Minor)]]."

speed: 25 feet

ac: 15
armorclass:
  - name: AC
    desc: "15; __Fort__: +7; __Ref__: +6; __Will__: +9"
hp: 28
health:
  - name: HP
    desc: "28;"

attacks:
  - name: Melee
    desc: "⬻ dagger +6 ([[agile]], [[finesse]], [[versatile S]]); __Damage__ 1d4 (1d4) piercing"
  - name: Melee
    desc: "⬻ syringe +8 ([[agile]]); __Damage__ 1d4 (1d4) piercing plus effects of an injected potion or poison"

spellcasting:
  - name: "Arcane Prepared Spells"
    desc: "DC 17, attack +9; __2nd__  _[[Ghoul Touch]]_, _[[Scare]]_, _[[Spectral Hand]]_; __1st__  _[[Chill Touch]]_, _[[Mage Armor]]_, _[[Ray of Enfeeblement]]_; __Cantrips (3rd)__  _[[Disrupt Undead]]_, _[[Touch of Fatigue]]_, _[[Ray of Frost]]_;"

sourcebook: "Custom"
```