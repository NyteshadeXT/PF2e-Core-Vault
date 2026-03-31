---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Khellek"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/10
statblock: inline
name: "Khellek"
level: 10
---

```statblock
layout: Basic Pathfinder 2e Layout
source: "Converted from D&D 3e"
name: "Khellek"
level: "Creature 10"
size: "Medium"
trait_01: "Human"
trait_02: "Humanoid"

modifier: 20
perception:
  - name: "Perception"
    desc: "+20"

languages: "Common, Draconic, Elven"

skills:
  - name: "Skills"
    desc: "__Arcana__: +23; __Occultism__: +19; __Deception__: +18; __Society__: +19; __Crafting__: +18"

abilityMods: [ -1, 4, 1, 5, 0, 2 ]

abilities_top:
  - name: "Equipment"
    desc: "[[dagger]], [[Dispel Magic|Wand of Dispel Magic]], [[Revealing Light|Wand of Revealing Light]], [[Mystic Armor|Wand of Mystic Armor]], [[Scorching Blast|Wand of Scorching Blast]], [[Dispel Magic|Scroll of Dispel Magic]], [[Shatter|Scroll of Shatter]], 2 [[healing-potion-(moderate)|Healing Potion (Moderate)]], silver ring (20 gp), diamond dust (50 gp), 23 gp"

  - name: "Familiar (Zulamakian)"
    desc: "Khellek has a rat familiar that grants him enhanced awareness. While within 10 feet, he gains a +1 circumstance bonus to Perception checks."

abilities_mid:
  - name: "Counterspell"
    desc: "⬲  Khellek attempts to counter a spell he can see being cast."

  - name: "Arcane Defense"
    desc: "Khellek gains a +1 circumstance bonus to AC against spells."

abilities_bot:
  - name: "Quickened Shield"
    desc: "`pf2:0`  Khellek casts [[Shield]] as a free action once per round."

speed: 25 feet

ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__ +18, __Ref__ +21, __Will__ +22"

hp: 140
health:
  - name: HP
    desc: "140"

attacks:
  - name: "Melee Dagger"
    desc: "⬻ Dagger +18 ([[agile]], [[finesse]]); __Damage__ `dice: 1d4+2` piercing"

spellcasting:
  - name: "Arcane Prepared Spells"
    desc: "DC 29, attack +21\n\n__5th__ (3 slots) [[Synaptic Pulse]], [[Wall of Stone]], [[Cone of Cold]]\n__4th__ (4 slots) [[Mountain Resilience]], [[Confusion]], [[Translocate]]\n__3rd__ (4 slots) [[Paralyze]], [[Haste]], [[Fireball]], [[3-Rules/Character Building/Spells/F/Fear|Fear]]\n__2nd__ (4 slots) [[Mirror Image]], [[Invisibility]], [[Dispel Magic]], [[3-Rules/Character Building/Spells/S/See the Unseen|See the Unseen]]\n__1st__ (4 slots) [[Charm]], [[Grease]], [[Force Barrage]], [[Enfeeble]]\n__Cantrips__ (at will) [[3-Rules/Character Building/Spells/D/Detect Magic|Detect Magic]], [[Shield]], [[Ray of Frost]], [[Daze]], [[Telekinetic Hand]]"

sourcebook: "Custom conversion"
```
