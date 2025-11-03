---
title: "Skeleton Soldier"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pfs-season-1-bestiary.Actor.N6zflwcAIP2wewRI" 
tags:
  - pf2e/creature/type/evil
  - pf2e/creature/type/mindless
  - pf2e/creature/type/skeleton
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/-1
statblock: inline
name: "Skeleton Soldier"
level: -1
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #1-18: Lodge of the Living God"
name: "Skeleton Soldier"
level: "Creature -1"

alignment: ""
size: "Medium"
trait_01: [[evil]]
trait_02: [[mindless]]
trait_03: [[skeleton]]
trait_04: [[undead]]
trait_05: [[unholy]]
modifier: 2
perception:
  - name: "Perception"
    desc: "+2; Darkvision"
languages: ""
skills:
  - name: "Skills"
    desc: "Acrobatics: +6, Athletics: +3"
abilityMods: [2, 4, 0, -5, 0, 0]
speed: 25 feet
sourcebook: "_Pathfinder Society Scenario #1-18: Lodge of the Living God_"
ac: 1
armorclass:
  - name: AC
    desc: "1; __Fort__ +2, __Ref__ +8, __Will__ +2"
hp: 4
health:
  - name: ""
  - name: HP
    desc: "4, void healing; __Immunities__  death effects,  disease,  paralyzed,  poison,  unconscious,  mental; __Resistances__ cold 5, electricity 5, fire 5, piercing 5, slashing 5"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Scimitar|Scimitar]], [[Equipment/Shortbow|Shortbow]], 20x [[Equipment/Arrows|Arrows]]"
abilities_mid:
  - name: ""
  - name: "[[Creature Family Ability Glossary/(Skeleton) Explosive Death|Explosive Death]]"
    desc: "  When the skeleton is destroyed, its bones shatter and explode as the necromantic energy holding it together is released.\n\nAdjacent creatures take 1d6 slashing damage DC 10 Reflex check save."

  - name: "[[Bestiary Ability Glossary/Void Healing|Void Healing]]"
    desc: "  A creature with void healing draws health from void energy rather than vitality energy. It is damaged by vitality damage and is not healed by vitality healing effects. It does not take void damage, and it is healed by void effects that heal undead."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Scimitar"
    desc: "+6 (forceful, sweep)\n__Damage__  1d6 + 2 slashing"

  - name: "**Melee** `pf2:1` Claw"
    desc: "+6 (agile, finesse, unarmed)\n__Damage__  1d4 + 2 slashing"

  - name: "**Ranged** `pf2:1` Shortbow"
    desc: "+6 (deadly d10, range increment 60 feet, reload 0)\n__Damage__  1d6 piercing"
 
```

```encounter-table
name: Skeleton Soldier
creatures:
  - 1: Skeleton Soldier
```




