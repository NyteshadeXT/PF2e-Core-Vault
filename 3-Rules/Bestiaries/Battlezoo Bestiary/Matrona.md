---
title: "Matrona"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.wzly2aM8jNCApDC6" 
tags:
  - pf2e/creature/type/construct
  - pf2e/creature/type/evil
  - pf2e/creature/type/fey
  - pf2e/creature/type/lawful
  - pf2eMonster
  - pf2e/creature/level/15
statblock: inline
name: "Matrona"
level: 15
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/matrona.webp| ]]
source: "Battlezoo Bestiary"
name: "Matrona"
level: "Creature 15"

alignment: ""
size: "grg"
trait_01: [[construct]]
trait_02: [[evil]]
trait_03: [[fey]]
trait_04: [[lawful]]
modifier: 23
perception:
  - name: "Perception"
    desc: "+23; Darkvision"
languages: "Common, Fey; telepathy 100 feet"
skills:
  - name: "Skills"
    desc: "Athletics: +32, Deception: +31, Intimidation: +29, Nature: +27, Engineering Lore: +27"
abilityMods: [9, 5, 8, 4, 6, 8]
speed: 30 feet,  fly 30 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 37
armorclass:
  - name: AC
    desc: "37; __Fort__ +30, __Ref__ +25, __Will__ +26; +1 status to saves vs. enchantment"
hp: 320
health:
  - name: ""
  - name: HP
    desc: "320; __Immunities__  bleed,  disease,  doomed,  drained,  fatigued,  healing,  nonlethal attacks,  paralyzed,  poison,  sickened,  unconscious,  death effects,  spirit,  vitality,  void; __Weaknesses__ cold iron 15; __Resistances__ physical 15 (except bludgeoning)"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "Detach Soul"
    desc: "`pf2:r` (primal) **Trigger** The matrona takes 10 or more damage from a single attack or effect;\n* * *\n\n**Effect** When a matrona's mother suit is damaged, the creatures whose souls compose these outer layers break free and, in a rage, attack the matrona's enemies.\n\nThe matrona casts a 1st-level _[[Spells/Summon Fey|Summon Fey]]_ spell. For every additional 10 damage the matrona took from the triggering attack or effect, the summon fey spell is heightened by 1 spell level, up to 7th level. For example, if the matrona took 30 damage, then it can cast summon fey heightened to 3rd level with this reaction; if the matrona took 54 damage, then it could cast summon fey heightened to 5th level.\n\nEach summoned fey lasts for 1 minute or until it is banished. The matrona doesn't need to sustain this effect, but each summoned fey still has only two actions. If using Detach Soul would cause the matrona to have more than three summoned fey simultaneously, the oldest summoned fey is instantly banished, so that the total number of summoned fey remains three."

  - name: "Mother Suit"
    desc: "  A matrona wears a massive suit made of stone, iron, and the souls of trapped fey creatures. As its mother suit is damaged, the matrona becomes smaller and more agile.\n\nWhen it is reduced to 200 Hit Points, the matrona becomes Huge. When reduced to 100 Hit Points, it becomes Large. For each size category reduced, the reach of the matrona's fist Strike reduces by 5 feet and the matrona's Speeds increase by 10 feet.\n\n[[Effects/Effect_ Mother Suit (Huge)|Effect: Mother Suit (Huge)]]\n\n[[Effects/Effect_ Mother Suit (Large)|Effect: Mother Suit (Large)]]"

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Fist +28 (magical, reach 15 feet)\n__Damage__  3d12 + 17 bludgeoning"

  - name: "Ranged"
    desc: "`pf2:1` Soul Beam +24 (force, magical, range increment 120 feet)\n__Damage__  3d6 + 14 force"

  - name: "Primal Innate Spells"
    desc: "DC 33, attack +25; __6th __  _[[Spells/Dominate|Dominate]]_; __5th __  _[[Spells/Command|Command]]_; __4th __  _[[Spells/Charm|Charm]]_, _[[Spells/Honeyed Words|Glibness]]_, _[[Spells/Suggestion|Suggestion]]_"
 
```

```encounter-table
name: Matrona
creatures:
  - 1: Matrona
```



Matronas are small pixie-like fey creatures with squat bodies and twirled ears. One could be forgiven, though, for mistaking matronas for the magical constructs that they typically inhabit: hulking goliaths of iron and stone who can deliver a devastating punch and summon powerful fey to serve them.

Matronas are envious of humans, large animals, and other creatures larger than themselves (which happens to be most of them). To compensate for their diminutive figures, matronas craft artificial bodies around themselves. Initially not much larger than the matrona itself, this "mother suit" provides a modicum of protection and stature. However, the suit is bolstered as the matrona within deceives and cons other fey creatures into building layer after layer on top of the original suit. Once a creature finishes the construction of a layer, the matrona binds the creature into the new layer using a complex ritual. In this way, a matrona is literally encapsulated by the combined efforts of countless indentured spirits.

## Layer After Layer

A matrona's mother suit is made of interlocking layers that, when destroyed, release the spirits of the fey creatures trapped within. Disoriented and violent from years of imprisonment, these fey lash out at anything in their way. Once the fight is over, or they are destroyed, the distraught spirit is finally free to return to the fey realm.

## Monster Part Subsystem

**Matrona Creature 15**

**Monster Parts** 810/1,850/3,400 gp

**Eligible Refinements** weapons (bludgeoning), armor (heavy), shield, perception item, skill items (Athletics, Deception, Intimidation, Lore \[Engineering\], Nature)

**Eligible Imbued Properties** bane, charisma, constitution, energy resistant (positive), evil, force, lawful, mental, sensory (darkvision), spells (Primal: charm, command, dominate, glibness, suggestion, summon fey), strength, sturdy, wild, winged
