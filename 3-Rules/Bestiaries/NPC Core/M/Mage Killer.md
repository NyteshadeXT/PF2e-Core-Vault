---
title: "Mage Killer"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.P8Rd7OxbsyH9GmNM" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/8
  - remaster
statblock: inline
name: "Mage Killer"
level: 8
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Mage Killer"
level: "Creature 8"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 16
perception:
  - name: "Perception"
    desc: "+16; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +17, Arcana: +13, Athletics: +16, Stealth: +18"
abilityMods: [4, 5, 2, 1, 2, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 25
armorclass:
  - name: AC
    desc: "25; __Fort__ +16, __Ref__ +17, __Will__ +16"
hp: 145
health:
  - name: ""
  - name: HP
    desc: "145; __Resistances__ cold 10"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "4x [[Equipment/Dagger|Dagger]], [[Equipment/Rapier|+1 Striking Rapier]], [[Equipment/Studded Leather Armor|Studded Leather Armor]]"
abilities_mid:
  - name: ""
  - name: "Spell Dodge"
    desc: "`pf2:r`  **Trigger** The mage killer is targeted by a spell\n* * *\n\n**Effect** The mage killer gains a +2 circumstance bonus to AC and saving throws against the triggering spell."

  - name: "Spell Interception"
    desc: "`pf2:r`  **Trigger** A creature within 10 feet of the mage killer Casts a Spell\n* * *\n\n**Effect** The mage killer makes a melee Strike or thrown dagger Strike against the triggering creature. If it hits, the spell is disrupted."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Dagger"
    desc: "+19 (agile, finesse, versatile s)\n__Damage__  1d4 + 10 piercing plus magical-static"

  - name: "**Ranged** `pf2:1` Dagger"
    desc: "+19 (agile, finesse, thrown 10 ft., versatile s)\n__Damage__  1d4 + 10 piercing plus magical-static"

  - name: "**Melee** `pf2:1` Rapier"
    desc: "+20 (deadly d8, disarm, finesse, magical)\n__Damage__  2d6 + 10 piercing plus magical-static"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+19 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 10 bludgeoning plus magical-static"

  - name: "Magical Static"
    desc: " (arcane,mental) The mage killer's Strikes deal an additional 1d8 mental damage to a creature that has Cast (or attempted to Cast) a Spell within the last round, and on a critical hit, the creature is [[Conditions/Stupefied|Stupefied 1]] for 1 minute."

  - name: "Shift Energy Runes"
    desc: "`pf2:1` (arcane,concentrate) **Frequency** once per hour\n* * *\n\n**Effect** The mage killer alters the magical countermeasures in the runes on their armor. They change their resistance to the energy type of their choice (acid, cold, electricity, fire, force, sonic, vitality, or void)."

  - name: "Sudden Charge"
    desc: "`pf2:2`  The mage killer Strides twice. If they end their movement within melee reach of at least one enemy, they can make a melee Strike against it."
 
```

```encounter-table
name: Mage Killer
creatures:
  - 1: Mage Killer
```



Whenever high command needs an enemy spellcaster taken off the board in the midst of battle, they send in a mage killer.

* * *

Whether they're hired to wage war, protect a caravan, or infiltrate an impenetrable fortress, there's ample work for mercenaries all over Golarion.
