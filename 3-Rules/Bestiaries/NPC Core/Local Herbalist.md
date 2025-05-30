---
title: "Local Herbalist"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.3m8fkhbaUubLeckt" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/1
  - remaster
statblock: inline
name: "Local Herbalist"
level: 1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Local Herbalist"
level: "Creature 1"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 7
perception:
  - name: "Perception"
    desc: "+7; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Crafting: +6, Diplomacy: +4, Nature: +7, Survival: +7"
abilityMods: [3, 0, 1, 1, 4, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 13
armorclass:
  - name: AC
    desc: "13; __Fort__ +8, __Ref__ +5, __Will__ +9"
hp: 24
health:
  - name: ""
  - name: HP
    desc: "24"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Staff|Staff]], [[Equipment/Cookware|Cooking Pot]], [[Equipment/Healer's Toolkit|Medicine Bag (Functions as a Healer's Toolkit)]]"
  - name: "[[Actor.hHQNqQlKh6AEHmW9.Item.zNtJDSruQtC6hlYE|Herbalism Specialist]]"
    desc: "  For encounters involving collecting herbs or making medicine from them, the local herbalist is a 3rd-level challenge."

  - name: "Natural Medicine"
    desc: "  The herbalist can use Nature instead of Medicine to [[Actions/Treat Wounds|Treat Wounds]] or [[Actions/Administer First Aid|Administer First Aid]], and gains a +3 circumstance bonus to the check if they're in the wilderness with access to fresh herbal ingredients."

abilities_mid:
  - name: ""
  - name: "Saving Touch"
    desc: "`pf2:r`  **Frequency** once per 10 minutes\n\n**Trigger** An ally close enough for the herbalist to reach with a Stride is reduced to 0 Hit Points\n* * *\n\n**Effect** The herbalist Strides until adjacent to the ally and [[Actions/Administer First Aid|Administers First Aid]] to that ally."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Staff"
    desc: "+5 (two-hand d8)\n__Damage__  1d4 + 2 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+5 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 2 bludgeoning"

  - name: "**Ranged** `pf2:1` Fungal Spores"
    desc: "+7 (fungus, poison, range increment 10 feet)\n__Damage__  1d4 poison 1d4 poison"

  - name: "Prompt Poultice"
    desc: "`pf2:1` (manipulate) **Frequency** once per day\n* * *\n\n**Effect** The local herbalist quickly mixes together a potent healing salve with the most precious ingredients from their medicine bag. They create a temporary [[Equipment/Elixir of Life (Lesser)|lesser elixir of life]]. This elixir remains potent for 1 round before becoming sour and useless."
 
```

```encounter-table
name: Local Herbalist
creatures:
  - 1: Local Herbalist
```



Local herbalists use their understanding of the natural world to heal and restore balance. Most join a secret lodge that teaches these ancient arts.

* * *

The world is a dangerous place. Thankfully, there are those who devote their lives to easing the pain and suffering of others.
