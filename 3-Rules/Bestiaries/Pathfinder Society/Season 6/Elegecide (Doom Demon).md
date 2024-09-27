---
title: "Elegecide (Doom Demon)"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pfs-season-6-bestiary.Actor.d38YKJUIBaZCPUsx" 
tags:
  - pf2e/creature/type/amphibious
  - pf2e/creature/type/demon
  - pf2e/creature/type/fiend
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/-1
  - remaster
statblock: inline
name: "Elegecide (Doom Demon)"
level: -1
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #6-00: Salt of the Ocean"
name: "Elegecide (Doom Demon)"
level: "Creature -1"

alignment: ""
size: "Medium"
trait_01: [[amphibious]]
trait_02: [[demon]]
trait_03: [[fiend]]
trait_04: [[unholy]]
modifier: 8
perception:
  - name: "Perception"
    desc: "+8; "
languages: "Chthonian; telepathy 100 feet"
skills:
  - name: "Skills"
    desc: "Deception: +5, Diplomacy: +4, Intimidation: +5"
abilityMods: [2, 1, 0, -1, -1, 3]
speed: 15 feet,  swim 25 feet
sourcebook: "_Pathfinder Society Scenario #6-00: Salt of the Ocean_"
ac: 15
armorclass:
  - name: AC
    desc: "15; __Fort__ +5, __Ref__ +5, __Will__ +2"
hp: 8
health:
  - name: ""
  - name: HP
    desc: "8; __Weaknesses__ cold iron 1, holy 1"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Telepathy|Telepathy (100 feet)]]"
    desc: " (aura,magical,mental) A monster with telepathy can communicate mentally with any creatures within the listed radius, as long as they share a language. This doesn't give any special access to their thoughts, and communicates no more information than normal speech would."

  - name: "Hope Vulnerability"
    desc: "  The elegecide is fueled by the certainty of doom, which leaves it weakened by any hope. The first time each round that a creature critically fails at an attack or skill check against the elegecide, it experiences a burst of hope that leaves it [[Conditions/Stunned|Stunned 1]]."

abilities_mid:
  - name: ""
  - name: "Doom Aura"
    desc: " (aura,divine,fear) 30 feet\n\nThe elegecide constantly emits telepathic warnings about future dangers and harm. When a non-demon creature ends its turn in the aura, it must attempt a DC 16 Will check save. If it fails, it becomes [[Conditions/Frightened|Frightened 1]] ([[Conditions/Frightened|Frightened 2]] on a critical failure)."

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Tail +6 ()\n__Damage__  1d6 bludgeoning"

  - name: "Divine Innate Spells"
    desc: "DC 16, attack +8; __1st __  _[[Spells/Bane|Bane]]_, _[[Spells/Fear|Fear]]_\n__Cantrips__  __(1st)__ _[[Spells/Daze|Daze]]_, _[[Spells/Divine Lance|Divine Lance]]_, _[[Spells/Figment|Figment]]_, _[[Spells/Message|Message]]_, _[[Spells/Sigil|Sigil]]_"

  - name: "Rituals"
    desc: "_[[Spells/Demonic Pact|Demonic Pact]]_"

  - name: "Dorsal Lash"
    desc: "`pf2:2` (mental) The elegecide lashes out with its trailing dorsal fins, looping them around a target within 15 feet. It sends a burst of telepathic information about all the possible ways the target can be injured in the next minute. The target takes 1d4 mental damage and must attempt a DC 16 Reflex check save.\n* * *\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes half damage.\n\n**Failure** The target takes full damage and is [[Conditions/Grabbed|Grabbed]] by the elegecide.\n\n**Critical Failure** The target takes double damage and is [[Conditions/Restrained|Restrained]] by the elegecide."
 
```

```encounter-table
name: Elegecide (Doom Demon)
creatures:
  - 1: Elegecide (Doom Demon)
```




