---
noteType: pf2eMonster
aliases: "Orc Shaman"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/1
statblock: inline
name: "Orc Shaman"
level: 1
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Orc Shaman"
level: "Creature 1"
alignment: "CE"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Orc"
modifier: 6
perception:
  - name: "Perception"
    desc: "Perception +6; __darkvision__;"
languages: "Orc; "
skills:
  - name: "Skills"
    desc: "__Arcana__: +7 (1d20+7); __Intimidation__: +4 (1d20+4); __Survival__: +4 (1d20+4); "
abilityMods: [-1, 2, 3, 4, 1, 0]

abilities_mid:
  - name: "Soothing Waters"
    desc: "*⬺ The Shaman sends a line of water toward a friendly accepting target within 15 feet healing the target of up to 2d8 damage. The water may then 'jump' to another friendly target up to 10 feet away from the first target healing another 2d6 damage."

abilities_top:
  - name: Items
    desc: "chain mail, club;"

speed: 25 feet

ac: 15
armorclass:
  - name: AC
    desc: "15; __Fort__: +7 (1d20+7); __Ref__: +7 (1d20+7); __Will__: +8 (1d20+8);"
hp: 19
health:
  - name: HP
    desc: "19; "


attacks:
  - name: Melee
    desc: "⬻ club +5 ([[thrown|thrown 10 feet]]); __Damage__ 1d6-1 (1d6+1) bludgeon"
  - name: Ranged
    desc: "⬻ lightning strike +5 ([[electricity]], [[range 30 feet]]); __Damage__ 1d6+4 (1d6+4) [[electricity]] "
  - name: Ranged
    desc: "⬽ vengful whirlwind ([[electricity]], [[range 60 feet]]); The Shaman summons a whirlwind suffused with lightning affecting all creates in a 10 foot burst.  Affected creatures make a DC 16 basic Fortitude save or suffer 2d6+4 (2d6+4) electricity damage, and the target falls prone.  The whilewind lasts until the end of the orc’s next turn. Any enemy that ends its turn in the zone takes must also save or suffer damage."
    
sourcebook: "Homebrew"
```

```encounter-table
name: Orc Shaman
creatures:
  - 1: Orc Shaman
```
