---
title: "Lantern Husk"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Homebrew" 
tags:
  - pf2e/creature/type/aberration
  - pf2e/creature/type/air
  - pf2eMonster
  - pf2e/creature/level/6
  - remaster
statblock: inline
name: "Lantern Husk"
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: lantern-husk.png
source: "Homebrew"
name: "Lantern Husk"
level: "Creature 6"

alignment: ""
size: "Small"
trait_01: [[aberration]]
trait_02: [[fey]]
modifier: 16
perception:
  - name: "Perception"
    desc: "+16; Darkvision"
languages: "Aklo, Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +18, Deception: +12, Intimidation: +12, Stealth: +16"
abilityMods: [-5, 6, 0, 2, 4, 2]
speed:  fly 50 feet
sourcebook: "_Homebrew_"
ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__ +10, __Ref__ +16, __Will__ +14"
hp: 50
health:
  - name: HP
    desc: "50; __Resistances__  See Wormlight Resistance"
abilities_top:
  - name: ""

abilities_mid:
  - name: "Wormlight Aura"
    desc: " (aura,light) 15 feet.\n\nEnemies entering or starting their turn in the Lantern Husk's aura take (1d4) 1d4 acid damage."

  - name: "Wormlight Resistance"
    desc: " The Lantern Husk resists most direct magical effects, as the writhing Kyuss corruption deflects foreign magic. It gains resistance 10 to all damage from magical effects, except those that deal vitality, fire, or acid damage."

attacks:
  - name: "**Ranged** `pf2:1` Shock"
    desc: "+17 (electricity, magical, range 30ft)\n__Damage__  (2d8 + 4) 2d8 + 4 electricity and (1d6) 1d6 acid"

  - name: "Feed on Fear"
    desc: "`pf2:1` (concentrate) **Frequency** once per round **Requirements** An enemy within 15 feet is under a fear effect or dying **Effect** The Lantern Husk feeds on the creature's terror. It regains (2d4) 2d4 Hit Points."
 
```

```encounter-table
name: Lantern Husk
creatures:
  - 1: Lantern Husk
```

Corrupted jack-o-lanterns from the Hallows Eve realm.