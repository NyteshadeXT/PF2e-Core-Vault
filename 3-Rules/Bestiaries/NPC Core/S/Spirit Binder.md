---
title: "Spirit Binder"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.6OtvMTyXhxUdZI44" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/11
  - remaster
statblock: inline
name: "Spirit Binder"
level: 11
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Spirit Binder"
level: "Creature 11"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 20
perception:
  - name: "Perception"
    desc: "+20; Spiritsense (Imprecise) 60 Feet"
languages: "Common, Necril, Shadowtongue"
skills:
  - name: "Skills"
    desc: "Diplomacy: +21, Intimidation: +21, Occultism: +22, Spirits Lore: +24"
abilityMods: [1, 3, 3, 5, 4, 6]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 28
armorclass:
  - name: AC
    desc: "28; __Fort__ +19, __Ref__ +19, __Will__ +24"
hp: 175
health:
  - name: ""
  - name: HP
    desc: "175; __Resistances__ spirit 10"
abilities_top:
  - name: ""

  - name: "Spiritsense"
    desc: " (detection,occult) The spirit binder can sense the spirits of creatures, including living creatures, most non-mindless undead, and haunts within the listed range. Since spiritsense detects spiritual essence, not physical bodies, it can detect spirits projected by spells (such as [[Spells/Project Image|Project Image]]) or possessing otherwise soulless objects. It can't detect soulless bodies, constructs, or objects, and like most senses, it doesn't penetrate through solid objects."

abilities_mid:
  - name: ""
  - name: "Haunting Spirits"
    desc: " (aura,occult,spirit) 30 feet. The spirits bound by a spirit binder swirl around, lashing out at their foes. An enemy that enters or starts its turn in the aura must succeed at a DC 27 Will check save or take 3d6 spirit damage and be [[Conditions/Frightened|Frightened 1]] (double damage and [[Conditions/Frightened|Frightened 2]] on a critical failure)."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Ghost Claw"
    desc: "+19 (finesse, magical, spirit, unarmed)\n__Damage__  2d10 + 6 slashing 2d6 spirit"

  - name: "**Ranged** `pf2:1` Spirit Pitch"
    desc: "+19 (magical, range increment 60 feet, spirit)\n__Damage__  2d6 spirit 3d6 spirit"

  - name: "Occult Spontaneous Spells"
    desc: "DC 31, attack +23; __7th __ (3 slots) _[[Spells/Interplanar Teleport|Interplanar Teleport (to or from the Ethereal Plane only)]]_; __6th __ (2 slots) _[[Spells/Dominate|Dominate]]_, _[[Spells/Spirit Blast|Spirit Blast]]_; __5th __ (3 slots) _[[Spells/Invoke Spirits|Invoke Spirits]]_, _[[Spells/Spiritual Guardian|Spiritual Guardian]]_, _[[Spells/Wave of Despair|Wave of Despair]]_; __4th __ (3 slots) _[[Spells/Clairvoyance|Clairvoyance]]_, _[[Spells/Fly|Fly]]_, _[[Spells/Talking Corpse|Talking Corpse]]_; __3rd __ (3 slots) _[[Spells/Clairaudience|Clairaudience]]_, _[[Spells/Ghostly Weapon|Ghostly Weapon]]_, _[[Spells/Levitate|Levitate]]_; __2nd __ (3 slots) _[[Spells/Darkness|Darkness]]_, _[[Spells/Ghostly Carrier|Ghostly Carrier]]_, _[[Spells/Peaceful Rest|Peaceful Rest]]_; __1st __ (3 slots) _[[Spells/Bane|Bane]]_, _[[Spells/Command|Command]]_, _[[Spells/Fear|Fear]]_\n__Cantrips__  __(6th)__ _[[Spells/Detect Magic|Detect Magic]]_, _[[Spells/Figment|Figment]]_, _[[Spells/Telekinetic Hand|Telekinetic Hand]]_, _[[Spells/Telekinetic Projectile|Telekinetic Projectile]]_, _[[Spells/Void Warp|Void Warp]]_"

  - name: "Spirit Scrying"
    desc: "  The spirit binder's scrying spells can target or detect spirits on other planes as though the spirits were in the Universe."

  - name: "Succumb to the Void"
    desc: "`pf2:1` (concentrate,occult,void) The spirit binder taps into the more nefarious spirits of the Void, becoming something morbid and cruel. For 1d4 rounds, their resistance, aura of spirits, Strikes, and spirit spells change their damage type from spirit damage to void damage and replace their spirit trait with the void trait."
 
```

```encounter-table
name: Spirit Binder
creatures:
  - 1: Spirit Binder
```



Ghosts and other spirits swirl around the spirit binder, creating a constant aura of flickering faces and forms.

* * *

Hidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.
