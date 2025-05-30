---
title: "Halfling Yarnspinner"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.9EzCOBw3rMsyfr5Q" 
tags:
  - pf2e/creature/type/halfling
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/7
  - remaster
statblock: inline
name: "Halfling Yarnspinner"
level: 7
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Halfling Yarnspinner"
level: "Creature 7"

alignment: ""
size: "Small"
trait_01: [[halfling]]
trait_02: [[humanoid]]
modifier: 14
perception:
  - name: "Perception"
    desc: "+14; "
languages: "Common, Halfling"
skills:
  - name: "Skills"
    desc: "Arcana: +16, Deception: +16, Diplomacy: +16, Intimidation: +14, Occultism: +17, Performance: +19, Religion: +15, Society: +15, History Lore: +19"
abilityMods: [-1, 4, 0, 4, 3, 5]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__ +11, __Ref__ +15, __Will__ +18"
hp: 110
health:
  - name: ""
  - name: HP
    desc: "110"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Halfling Sling Staff|+1 Halfling Sling Staff]], [[Equipment/Shortsword|+1 Shortsword]], [[Equipment/Chain Shirt|Chain Shirt]], [[Equipment/Formula Book (Blank)|Book of Fables]], 20x [[Equipment/Sling Bullets|Sling Bullets]]"
  - name: "Keen Eyes"
    desc: "  The halfling gains a +2 circumstance bonus when using the [[Actions/Seek|Seek]] action to find [[Conditions/Hidden|Hidden]] or [[Conditions/Undetected|Undetected]] creatures within 30 feet of them. Whenever the halfling targets a creature that is [[Conditions/Concealed|Concealed]] or hidden from them, reduce the DC of the flat check to DC 3 Flat check for a concealed target or DC 9 Flat check for a hidden one."

  - name: "Tale Specialist"
    desc: "  For encounters involving storytelling, local history, or lore, the yarnspinner is a 10th-level challenge."

abilities_mid:
  - name: ""
  - name: "Guidance Through Tales"
    desc: "`pf2:r` (auditory,concentrate,linguistic,mental) **Trigger** An ally the yarnspinner can see fails a skill check\n* * *\n\n**Effect** The yarnspinner offers a brief reminder about a legendary hero, granting their ally a +2 circumstance bonus to the triggering skill check, potentially turning the failure into a success."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Shortsword"
    desc: "+16 (agile, finesse, magical, versatile s)\n__Damage__  1d6 + 3 piercing plus resonant-weapons"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+15 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 3 bludgeoning"

  - name: "**Ranged** `pf2:1` Halfling Sling Staff"
    desc: "+16 (magical, propulsive, range increment 30 feet, reload 1)\n__Damage__  1d10 + 3 bludgeoning plus resonant-weapons"

  - name: "Occult Spontaneous Spells"
    desc: "DC 26, attack +18; __4th __ (3 slots) _[[Spells/Confusion|Confusion]]_, _[[Spells/Honeyed Words|Honeyed Words]]_, _[[Spells/Translocate|Translocate]]_; __3rd __ (4 slots) _[[Spells/Haste|Haste]]_, _[[Spells/Heroism|Heroism]]_, _[[Spells/Ring of Truth|Ring of Truth]]_, _[[Spells/Soothe|Soothe]]_; __2nd __ (4 slots) _[[Spells/Invisibility|Invisibility]]_, _[[Spells/Laughing Fit|Laughing Fit]]_, _[[Spells/Revealing Light|Revealing Light]]_, _[[Spells/Soothe|Soothe]]_; __1st __ (4 slots) _[[Spells/Illusory Disguise|Illusory Disguise]]_, _[[Spells/Illusory Object|Illusory Object]]_, _[[Spells/Mindlink|Mindlink]]_, _[[Spells/Ventriloquism|Ventriloquism]]_\n__Cantrips__  __(4th)__ _[[Spells/Daze|Daze]]_, _[[Spells/Detect Magic|Detect Magic]]_, _[[Spells/Figment|Figment]]_, _[[Spells/Light|Light]]_, _[[Spells/Read Aura|Read Aura]]_"

  - name: "Mesmerizing Tale"
    desc: "`pf2:2` (auditory,aura,incapacitation,linguistic,mental,occult) The yarnspinner weaves a long-winded but captivating narrative that enchants those nearby. Any creature that's in a 20-foot emanation or starts its turn in the aura must attempt a DC 24 Will check save. The Mesmerizing Tale lasts until the end of the yarnspinner's next turn, but can be Sustained. The first time the yarnspinner Sustains the aura on subsequent rounds, the aura expands by 10 feet, to a maximum of 60 feet.\n* * *\n\n**Critical Success** The creature is unaffected, and is temporarily immune for 24 hours.\n\n**Success** The creature is unaffected.\n\n**Failure** The creature becomes [[Conditions/Fascinated|Fascinated]] with the yarnspinner until the start of its next turn, and must spend all its actions to move closer to the yarnspinner and listen to the tale."

  - name: "Resonant Weapons"
    desc: " (occult,sonic) If the yarnspinner's Mesmerizing Tale aura is active or they have cast a spell within the last round, their Strikes with magic weapons deal an additional 2d10 sonic damage."
 
```

```encounter-table
name: Halfling Yarnspinner
creatures:
  - 1: Halfling Yarnspinner
```



Yarnspinners weave captivating tales that entertain, educate, and preserve the rich heritage of the halfling people across generations.

* * *

Halflings thrive on simple pleasures—having a pint at the pub or warming their feet by the hearth.
