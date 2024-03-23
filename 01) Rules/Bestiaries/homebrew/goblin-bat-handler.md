---
noteType: pf2eMonster
aliases: "Goblin Bat Handler"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/5
statblock: inline
name: "Goblin Bat Handler"
level: 5
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Goblin Bat Handler"
level: "Creature 5"
alignment: "CE"
size: "Small"
trait_03: "Humanoid"
trait_04: "Goblin"
modifier: 12
perception:
  - name: "Perception"
    desc: "Perception +12; __darkvision__;"
languages: "Goblin; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +12 (1d20+12); __Athletics__: +12 (1d20+12); "
abilityMods: [2, 4, 3, 1, -1, 1]

abilities_top:
  - name: "Bat Sense"
    desc: " ([[magic]]);  The bat handler gains any blindsight or darkvision of any allied bat within five squares."
  - name: Items
    desc: "leather armor, flail;"
abilities_mid:
  - name: "Goblin Scuttle"
    desc: "__Trigger__  A goblin ally ends a move action adjacent to the warrior. __Effect__ The goblin warrior Steps."

speed: 25 feet

ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__: +10 (1d20+10); __Ref__: +12 (1d20+12); __Will__: +15 (1d20+15);"
hp: 72
health:
  - name: HP
    desc: "72; "


attacks:
  - name: Melee
    desc: "⬻ flail +11 ([[disarm]], [[sweep]], [[trip]]); __Damage__ 2d6+6 (2d6+6) bludgeoning"

spellcasting:
  - name: " Spells"
    desc: "DC 19; __4th__ [[darkness]];"
sourcebook: "_Homebrew_."
```

```encounter-table
name: Goblin Bat Handler
creatures:
  - 1: Goblin Bat Handler
```
