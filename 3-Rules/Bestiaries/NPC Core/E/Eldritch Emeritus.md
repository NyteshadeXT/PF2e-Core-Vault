---
title: "Eldritch Emeritus"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.SlabO2qbzHYS3kA6" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/17
  - remaster
statblock: inline
name: "Eldritch Emeritus"
level: 17
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Eldritch Emeritus"
level: "Creature 17"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 32
perception:
  - name: "Perception"
    desc: "+32; "
languages: "Common, Draconic; up to 6 additional languages"
skills:
  - name: "Skills"
    desc: "Arcana: +36, Intimidation: +30, Nature: +33, Occultism: +33, Religion: +33, Academia Lore: +30"
abilityMods: [4, 4, 4, 8, 1, -1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 39
armorclass:
  - name: AC
    desc: "39; __Fort__ +27, __Ref__ +27, __Will__ +32"
hp: 290
health:
  - name: ""
  - name: HP
    desc: "290; __Resistances__ acid 10, cold 10, electricity 10, fire 10, force 10, sonic 10, vitality 10, void 10"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Staff of Fire (Major)|+2 Greater Striking Staff of Fire (Major)]], [[Equipment/Accolade Robe|Somewhat Disheveled Accolade Robe]], [[Equipment/Spellbook (Blank)|Spellbook]]"
  - name: "[[Bestiary Ability Glossary/Constant Spells|Constant Spells]]"
    desc: "  A constant spell affects the monster without the monster needing to cast it, and its duration is unlimited. If a constant spell gets counteracted, the monster can reactivate it by spending the normal spellcasting actions the spell requires."

abilities_mid:
  - name: ""
  - name: "Counterspell"
    desc: "`pf2:r`  **Trigger** A creature casts a spell the eldritch emeritus has prepared.\n* * *\n\n**Effect** The emeritus expends a prepared spell to counter the triggering creature's casting of that same spell. The emeritus loses their spell slot as if they had cast the triggering spell. The emeritus then attempts to counteract the triggering spell."

  - name: "Third Contingent Sequencer"
    desc: "`pf2:r`  **Frequency** once per day\n\n**Trigger** A creature attacks or uses a spell or ability that would affect the eldritch emeritus\n* * *\n\n**Effect** A masterpiece of complex spellwork instantly takes shape, casting [[Spells/Fire Shield|Fire Shield]], [[Spells/Mislead|Mislead]], and [[Spells/Mountain Resilience|Mountain Resilience]] on the eldritch emeritus, each as an 8th-rank arcane spell."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Fist"
    desc: "+30 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 14 bludgeoning"

  - name: "**Melee** `pf2:1` Arcane Beam"
    desc: "+31 (arcane, fire, magical)\n__Damage__  6d6 + 10 fire"

  - name: "**Melee** `pf2:1` Staff"
    desc: "+31 (magical, two-hand d8)\n__Damage__  3d4 + 14 bludgeoning"

  - name: "Arcane Prepared Spells"
    desc: "DC 38, attack +30; __9th __  _[[Spells/Detonate Magic|Detonate Magic]]_, _[[Spells/Falling Stars|Falling Stars]]_; __8th __  _[[Spells/Earthquake|Earthquake]]_, _[[Spells/Quandary|Quandary]]_; __7th __  _[[Spells/Project Image|Project Image]]_; __6th __  _[[Spells/Chain Lightning|Chain Lightning]]_, _[[Spells/Disintegrate|Disintegrate]]_, _[[Spells/Teleport|Teleport]]_, _[[Spells/Wall of Force|Wall of Force]]_; __5th __  _[[Spells/Banishment|Banishment]]_, _[[Spells/Howling Blizzard|Howling Blizzard]]_, _[[Spells/Slither|Slither]]_; __4th __  _[[Spells/Creation|Creation]]_, _[[Spells/Fly|Fly]]_; __3rd __  _[[Spells/Earthbind|Earthbind]]_, _[[Spells/Haste|Haste]]_, _[[Spells/Locate|Locate]]_; __2nd __  _[[Spells/Dispel Magic|Dispel Magic]]_, _[[Spells/Gecko Grip|Gecko Grip]]_, _[[Spells/Translate|Translate]]_, _[[Spells/Water Walk|Water Walk]]_; __1st __  _[[Spells/Fleet Step|Fleet Step]]_, _[[Spells/Sure Strike|Sure Strike]]_\n__Cantrips__  __(9th)__ _[[Spells/Detect Magic|Detect Magic]]_, _[[Spells/Light|Light]]_, _[[Spells/Prestidigitation|Prestidigitation]]_, _[[Spells/Sigil|Sigil]]_, _[[Spells/Telekinetic Hand|Telekinetic Hand]]_\n__Constant__  __(7th)__ _[[Spells/Energy Aegis|Energy Aegis]]_"

  - name: "Didactic Arcanism"
    desc: "`pf2:1` (arcane,magical) `pf2:1` to `pf2:3`\n\n**Requirements** The eldritch emeritus has seen a creature Cast a Spell of 7th rank or lower during the previous round, that spell takes between one and three actions to cast, and that spell is on the arcane spell list\n* * *\n\n**Effect** The eldritch emeritus mastered that spell 30 years ago, and is happy to show how a real master does it. The emeritus Casts the same Spell but heightened to 8th rank. Didactic Arcanism uses the same number of actions as the original spell took to cast."

  - name: "Steady Spellcasting"
    desc: "  If a reaction would disrupt the eldritch emeritus's spellcasting action, the eldritch emeritus attempts a DC 15 Flat check. On a success, the action isn't disrupted"
 
```

```encounter-table
name: Eldritch Emeritus
creatures:
  - 1: Eldritch Emeritus
```



To outsiders, the eldritch emeritus looks something like a joke—a befuddled old scholar, their mind so stuffed with obscure theorems and abstract metaphysics that concerns about mere daily reality fade away. Those who know them, however, know that the eldritch emeritus wrote more treatises of spells than most wizards have had hot dinners, and if sufficiently annoyed, is entirely capable of providing a brief, thorough, and fatal demonstration.

* * *

True power comes from knowledge—the power to shape the growth of kingdoms by mere whispers, stay three steps ahead of adversaries, or even know which flora is best for creating untraceable poisons.
