---
title: "Sporescout"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.iTT2eNlWdFIBeJr4" 
tags:
  - pf2e/creature/type/fungus
  - pf2e/creature/type/leshy
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/14
  - remaster
statblock: inline
name: "Sporescout"
level: 14
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #211: The Secret of Deathstalk Tower"
name: "Sporescout"
level: "Creature 14"
rare_03: [[Rare]]
alignment: ""
size: "Small"
trait_01: [[fungus]]
trait_02: [[leshy]]
trait_03: [[unholy]]
modifier: 24
perception:
  - name: "Perception"
    desc: "+24; Darkvision"
languages: "Aklo, Chthonian, Common, Elven, Fey"
skills:
  - name: "Skills"
    desc: "Acrobatics: +28, Deception: +26, Intimidation: +26, Nature: +24, Religion: +24, Stealth: +28, Survival: +24, Thievery: +26"
abilityMods: [1, 5, 3, 1, 4, 4]
speed: 25 feet
sourcebook: "_Pathfinder #211: The Secret of Deathstalk Tower_"
ac: 36
armorclass:
  - name: AC
    desc: "36; __Fort__ +23, __Ref__ +28, __Will__ +24"
hp: 275
health:
  - name: ""
  - name: HP
    desc: "275; __Immunities__  disease; __Weaknesses__ holy 15; __Resistances__ poison 15"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Sickle|+2 Greater Striking Corrosive Sickle]], [[Equipment/Composite Shortbow|+2 Striking Composite Shortbow]], [[Equipment/Religious Symbol (Wooden)|Religious Symbol of Treerazer]], 20x [[Equipment/Arrows|Arrows]]"
abilities_mid:
  - name: ""
  - name: "Fungal Whisperer"
    desc: "  A creature suffering from a fungal affliction takes a –2 status penalty on all saving throws against mental effects created by a sporescout and can always understand any language the sporescout speaks to them."

  - name: "Infectious Devotion"
    desc: " (aura,divine,mental) 20 feet. When a creature ends its turn in the aura, it must attempt a DC 31 Will check save (a plant or fungus takes a –2 circumstance penalty to this save). If the creature fails, it becomes [[Conditions/Stupefied|Stupefied 1]] for 1 minute ([[Conditions/Stupefied|Stupefied 2]] on a critical failure) as the fungus leshy's spores take root on the flesh and send unwelcome and distracting thoughts of devotion to Treerazer into the victim's mind."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Sickle"
    desc: "+28 (agile, finesse, magical, trip)\n__Damage__  1d6 acid 3d4 + 12 slashing"

  - name: "**Ranged** `pf2:1` Composite Shortbow"
    desc: "+28 (deadly d10, magical, propulsive, range increment 60 feet, reload 0)\n__Damage__  2d6 + 6 piercing"

  - name: "Divine Innate Spells"
    desc: "DC 31, attack +23; __7th __  _[[Spells/Crisis of Faith|Crisis of Faith]]_; __6th __  _[[Spells/Divine Wrath|Divine Wrath]]_"

  - name: "Cloak of Subversion"
    desc: "`pf2:2` (divine,mental) **Frequency** once per day\n* * *\n\n**Effect** The sporescout exudes a sticky layer of subversive spores onto their body. For 1 minute, any creature that touches the sporescout or damages them with an unarmed attack or melee weapon without the reach trait takes 3d6 mental damage as the spores infuse their thoughts with painful and subversive desires to offer servitude to Treerazer."

  - name: "Focus Spores"
    desc: "`pf2:1` (divine,incapacitation,mental) **Frequency** once per round\n* * *\n\n**Effect** The sporescout expels its infectious spores at a creature they can see within 20 feet. The target must immediately attempt a DC 31 Will check save against the sporescout's infectious devotion. If the creature was already stupefied by infectious devotion, they instead become [[Conditions/Controlled|Controlled]] by the sporescout until the start of the sporescout's next turn."

  - name: "[[Bestiary Ability Glossary/Sneak Attack|Grisly Attack]]"
    desc: "  A sporescout deals 1d6 extra precision damage and 1d6 persistent bleed damage to creatures who are [[Conditions/Off-Guard|Off-Guard]]."
 
```

```encounter-table
name: Sporescout
creatures:
  - 1: Sporescout
```


Fungus leshy rogue


