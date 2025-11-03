---
title: "Mastermind"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.fBd8Cfe7fRtF8HoJ" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Mastermind"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Mastermind"
level: "Creature 4"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; "
languages: "Common; two additional languages"
skills:
  - name: "Skills"
    desc: "Arcana: +13, Deception: +15, Diplomacy: +15, Intimidation: +15, Occultism: +15, Performance: +17, Religion: +11, Society: +17, Stealth: +11, Thievery: +9, Underworld Lore: +17"
abilityMods: [0, 3, 0, 4, 2, 4]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__ +6, __Ref__ +11, __Will__ +16"
hp: 55
health:
  - name: ""
  - name: HP
    desc: "55"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Hand Crossbow|Hand Crossbow]], [[Equipment/Shortsword|Shortsword]], [[Equipment/Chain Shirt|Chain Shirt]], [[Equipment/Disguise Kit|Disguise Kit]], 10x [[Equipment/Bolts|Bolts]]"
  - name: "Manipulation Specialist"
    desc: "  When competing in a social or intellectual arena, the mastermind is a 7th-level challenge."

  - name: "Versatile Performance"
    desc: "  The mastermind can use Performance instead of Diplomacy to [[Actions/make-an-impression skill=performance|make-an-impression skill=performance]]{Make an Impression} and instead of Deception to [[Actions/impersonate skill=performance|impersonate skill=performance]]{Impersonate}."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Shortsword"
    desc: "+13 (agile, finesse, versatile s)\n__Damage__  1d6 + 6 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+13 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 6 bludgeoning"

  - name: "**Ranged** `pf2:1` Hand Crossbow"
    desc: "+13 (range increment 60 feet, reload 1)\n__Damage__  1d6 + 3 piercing"

  - name: "Occult Spontaneous Spells"
    desc: "DC 22, attack +14; __2nd __ (3 slots) _[[Spells/Blur|Blur]]_, _[[Spells/Charm|Charm]]_, _[[Spells/Invisibility|Invisibility]]_, _[[Spells/Paranoia|Paranoia]]_; __1st __ (3 slots) _[[Spells/Charm|Charm]]_, _[[Spells/Illusory Disguise|Illusory Disguise]]_, _[[Spells/Illusory Object|Illusory Object]]_\n__Cantrips__  __(2nd)__ _[[Spells/Daze|Daze]]_, _[[Spells/Detect Magic|Detect Magic]]_, _[[Spells/Message|Message]]_, _[[Spells/Prestidigitation|Prestidigitation]]_, _[[Spells/Sigil|Sigil]]_"

  - name: "Bard Composition Spells"
    desc: "1 Focus Point, DC 22, attack +14\n__Cantrips__  __(2nd)__ _[[Spells/Courageous Anthem|Courageous Anthem]]_, _[[Spells/Uplifting Overture|Uplifting Overture]]_"

  - name: "Scoundrel's Feint"
    desc: "`pf2:1`  When the mastermind successfully Feints, the target is [[Conditions/Off-Guard|Off-Guard]] against the mastermind's melee attacks until the end of the mastermind's next turn. On a critical success, the target is off-guard against all melee attacks for that time, not just the mastermind's."

  - name: "[[Bestiary Ability Glossary/Sneak Attack|Sneak Attack]]"
    desc: "  The creature's Strikes deal an additional 1d6 precision damage to [[Conditions/Off-Guard|Off-Guard]] creatures."
 
```

```encounter-table
name: Mastermind
creatures:
  - 1: Mastermind
```



Masterminds weave long-ranged plots to see their nefarious goals come to fruition, deftly manipulating those around them, turning enemies into friends and then pitting them against one another.

* * *

Villains pursue selfish and cruel goals, trampling over anyone in their way.
