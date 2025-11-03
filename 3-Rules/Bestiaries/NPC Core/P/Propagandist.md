---
title: "Propagandist"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.uCZmZ9wCwvLA57cp" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/3
  - remaster
statblock: inline
name: "Propagandist"
level: 3
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Propagandist"
level: "Creature 3"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Diplomacy: +11, Performance: +10, Society: +10, Legal Lore: +8"
abilityMods: [0, 2, 1, 1, 3, 4]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__ +6, __Ref__ +9, __Will__ +12"
hp: 40
health:
  - name: ""
  - name: HP
    desc: "40"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "3x [[Equipment/Dagger|Dagger]], [[Equipment/Shortsword|Shortsword]], [[Equipment/Musical Instrument (Handheld)|Lute]], [[Equipment/Writing Set|Writing Set]]"
  - name: "Nuanced Spin"
    desc: "  The propagandist phrases everything loosely and vaguely enough that, though it's always misleading, none of it is false. The propagandist can use Diplomacy instead of Deception to [[Actions/Create a Diversion|Create a Diversion]] or [[Actions/feint statistic=diplomacy|feint statistic=diplomacy]], and instead of Intimidation to [[Actions/coerce statistic=diplomacy|coerce statistic=diplomacy]]. A creature attempting to [[Actions/Sense Motive|Sense Motive]] against the propagandist gets a result one degree of success worse than they rolled."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Dagger"
    desc: "+9 (agile, finesse, versatile s)\n__Damage__  1d4 + 4 piercing"

  - name: "**Ranged** `pf2:1` Dagger"
    desc: "+9 (agile, thrown 10 ft., versatile s)\n__Damage__  1d4 + 4 piercing"

  - name: "**Melee** `pf2:1` Shortsword"
    desc: "+9 (agile, finesse, versatile s)\n__Damage__  1d6 + 4 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+9 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 4 bludgeoning"

  - name: "Occult Spontaneous Spells"
    desc: "DC 21, attack +13; __2nd __ (2 slots) _[[Spells/Blistering Invective|Blistering Invective]]_, _[[Spells/Paranoia|Paranoia]]_; __1st __ (3 slots) _[[Spells/Concordant Choir|Concordant Choir]]_, _[[Spells/Fear|Fear]]_, _[[Spells/Sanctuary|Sanctuary]]_\n__Cantrips__  __(2nd)__ _[[Spells/Bullhorn|Bullhorn]]_, _[[Spells/Detect Magic|Detect Magic]]_, _[[Spells/Haunting Hymn|Haunting Hymn]]_, _[[Spells/Message|Message]]_, _[[Spells/Summon Instrument|Summon Instrument]]_"

  - name: "Bard Composition Spells"
    desc: "2 Focus Points, DC 21, attack +13; __2nd __  _[[Spells/Hymn of Healing|Hymn of Healing]]_, _[[Spells/Lingering Composition|Lingering Composition]]_\n__Cantrips__  __(2nd)__ _[[Spells/Courageous Anthem|Courageous Anthem]]_, _[[Spells/Rallying Anthem|Rallying Anthem]]_"

  - name: "No Hard Feelings"
    desc: "`pf2:2` (auditory,concentrate,emotion,linguistic,mental) The propagandist offers amnesty and other benefits to all who choose to join them. All enemies who can hear the propagandist must attempt a DC 19 Will check save. If any of the propagandist's allies is currently benefiting from one of the propagandist's bard composition spells, any enemy who is aware of that takes a –2 circumstance penalty to the save.\n* * *\n\n**Critical Success** The creature sees through the propagandist's pitch and is temporarily immune for 24 hours.\n\n**Success** The creature is unaffected.\n\n**Failure** The creature's conviction stumbles. Until the end of its next turn, the creature must succeed at a DC 5 Flat check to target the propagandist with a hostile action.\n\n**Critical Failure** The creature finds the propagandist's offer too good to pass up, switching sides in the combat and instantly gaining any benefits the propagandist is currently granting their allies. At the end of each of its turns, the creature can attempt another DC 19 Will check save to snap out of it and rejoin their allies."
 
```

```encounter-table
name: Propagandist
creatures:
  - 1: Propagandist
```



The misleadings, half-facts, and effortless spin propagandists cast over events create proof of whatever their bosses need them to prove.

* * *

Villains pursue selfish and cruel goals, trampling over anyone in their way.
