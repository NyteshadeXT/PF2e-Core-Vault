---
obsidianUIMode: preview
noteType: pf2eMonster
tags:
  - pf2e/creature/type/beast
  - pf2e/creature/level/6
  - pf2e/chimeracrafting
statblock: inline
name: Great Wroggi
level: 6
---

```statblock
columns: 2
forcecolumns: true
layout: Pathfinder 2e Creature Layout
token: "[[great-wroggi.png|Show to Players]]"
source: Monster Hunter Conversion
name: "Great Wroggi"
level: "Creature 6"
rare_03: "uncommon"
alignment: ""
size: "[[large]]"
traits:
  - "[[chimeric]]"
  - "[[beast]]"
  - "[[magical]]"
  - "[[poison]]"
modifier: 13
perception: 
  - name: "Perception"
    desc: "+13; darkvision, scent (imprecise) 60 feet"
languages: —
skills:
  - Acrobatics: +14
  - Athletics: +16
  - Stealth: +15 (+2 in dim light or fog)
  - Survival: +12
attributes:
  - str: 5
  - dex: 4
  - con: 4
  - int: -2
  - wis: 2
  - cha: 1
speed: 40 feet
source: "_Monster Hunter Conversion_"
ac: 25
saves:
  - fort: 14
  - ref: 13
  - will: 11
  - note: +1 status to all saves vs. magic
hp: 140
immunities:
  - [[poison]]

abilities_mid:
  - name: Toxic Alpha
    desc: "Lesser wroggi and other poison-resistant swamp predators give Great Wroggi a wide berth. The area in a 10-foot emanation around the Great Wroggi is lightly obscured by a noxious haze. All creatures (except the Great Wroggi) in this area take a –1 circumstance penalty to Perception checks and Fortitude saves."

  - name: Venom Glands
    desc: "The Great Wroggi’s bite and breath attacks carry paralytic toxins. A creature that takes persistent poison damage from the Wroggi must succeed at a DC 22 Fortitude save at the end of each of its turns or become [[clumsy 1]] until the poison ends.<br><br><blockquote>__Breakable__ **AC** 22; **HP** 15; **Effect** The persistent poison damage dealt by its jaws and Poison Cloud is reduced by 2 (minimum 1). Its **Venom Glands** ability no longer applies the [[clumsy]] condition.</blockquote>"

abilities_bot:
  - name: Poison Cloud
    desc: "`pf2:1` (arcane, poison) **Frequency** 1/round **Effect** The Great Wroggi exhales a toxic cloud in a 15-foot cone. All creatures in the area must attempt a DC 23 Fortitude save.<br>- **Critical Success**: Unaffected.<br>- **Success**: Sickened 1.<br>- **Failure**: Sickened 2 and 1d6 persistent poison damage.<br>- **Critical Failure**: Unconscious for 1 round, then Sickened 2 and 1d6 persistent poison damage.<br><br><blockquote>__Breakable__ **AC** 23; **HP** 20; **Effect** Located on the head.  The Wroggi can no longer use **Poison Cloud** until the part is healed. It also becomes [[stupefied 1]] and takes a –2 penalty to spell DCs and poison-related effects.</blockquote>"

  - name: Tactical Retreat
    desc: "`pf2:0` **Trigger** A creature critically fails its save against Poison Cloud.  **Effect** The Great Wroggi Steps and becomes concealed until the end of its next turn as it vanishes into the haze."

attacks:
  - name: "___Melee___ `pf2:1` jaws"
    desc: "(magical, poison) +17 __Damage__ 2d10+5 piercing plus 1d4 persistent poison"

  - name: "___Melee___ `pf2:1` claw"
    desc: "(magical, agile) +15 __Damage__ 2d6+5 slashing"

  - name: "___Melee___ `pf2:1` tail swipe"
    desc: "(magical, reach 10 feet, trip) +14 __Damage__ 2d8+5 bludgeoning <br><br><blockquote>__Breakable__ **AC** 22; **HP** 18; **Effect** The Wroggi loses access to its **Tail Swipe** attack. It also becomes [[Off-Guard]] for 1 round after the break due to imbalance.</blockquote>"

```

```encounter-table
name: Great Wroggi
creatures:
  - 1: Great Wroggi
  - 1: Head 20, 23, 0, hidden
  - 1: Tail 18, 22, 0, hidden
  - 1: Venom Sacs 15, 22, 0, hidden

```


## Harvest Table: Great Wroggi
|Part Name|Trait Tags|Part gp Value|Use & Crafting Notes|
|---|---|---|---|
|**Wroggi Hide**|[[3-Rules/Trait Reference/P/poison]]|90 gp| [[wroggi-hide-mantle\|Wroggi Hide Mantle]] |
|**Alpha Venom Sac**|[[3-Rules/Trait Reference/P/poison]], [[volatile]], [[magical]]|125 gp|[[venomlash-talisman\|Venomlash Talisman]], [[alpha-venom-sac-catalyst\|Alpha Venom Sac Catalyst]] |
|**Fanged Maw**|[[3-Rules/Trait Reference/P/poison]], [[death]], [[piercing]], [[slashing]], [[magical]]|100 gp|[[fanged-maw-catalyst\|Fanged Maw Catalyst]], [[venomlash-blade\|Venomlash Blade]]  |
|**Hood Frill**|[[fear]], [[emotion]], [[illusion]]|80 gp| [[wroggi-frill-catalyst\|Wroggi Frill Catalyst]] |

