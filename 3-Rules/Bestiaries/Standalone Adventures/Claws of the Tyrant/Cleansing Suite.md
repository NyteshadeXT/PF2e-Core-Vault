---
title: Cleansing Suite
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - divine
  - holy
  - magical
  - trap
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder Claws of the Tyrant
aliases: "Compendium.pf2e.claws-of-the-tyrant-bestiary.Actor.HWkNWxoEkPlcr7WU" 
level: 19
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Claws of the Tyrant"
name: "Cleansing Suite"
level: "Hazard 19"

trait_06: "Complex"
trait_01: [[divine]]
trait_02: [[holy]]
trait_03: [[magical]]
trait_04: [[trap]]
modifier: 27
sourcebook: "_Pathfinder Claws of the Tyrant_"
ac: 40
armorclass:
  - name: AC
    desc: "40; "
hp: 130
health:
  - name: ""
  - name: "HP"
    desc: "130, (runes) BT 65; __Hardness__ 31; __Immunities__  object immunities"
perception:
  - name: ""
  - name: "Stealth DC 27" 
    desc: "(master)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "Deadbolts inside the doors clunk as three glowing runes appear on the ceiling."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 42 Arcana check, DC 42 Nature check, DC 42 Occultism check, or DC 42 Religion check to erase the runes, or DC 46 Crafting check or DC 46 Thievery check to destroy the runes, or [[Spells/Dispel Magic|Dispel Magic]] (9th rank, counteract DC 41); each rune requires a success to remove (three runes total)"
attacks:
  - name: ""

  - name: "Deadbolts"
    desc: "`pf2:r` **Trigger** A creature approaches within 10 feet of the cleansing suite's eastern doors\n* * *\n\n**Effect** The doors to the chamber slam shut and seal with deadbolts. The hazard rolls initiative."

  - name: "Rune Against Evil"
    desc: "action (divine, holy) The hazard fills the chamber with holy energy that deals 6d6+20 spirit damage (DC 41 Fortitude check save) to creatures with the unholy trait."

  - name: "Rune Against Magic"
    desc: "action (divine) The hazard casts [[Spells/Dispel Magic|Dispel Magic]] (9th rank, counteract +31) that targets a spell or effect on each creature in the chamber."

  - name: "Rune Against Scrying"
    desc: "action (detection, divine) The hazard casts [[Spells/Detect Scrying|Detect Scrying]]. If it detects a scrying effect in the chamber, it casts [[Spells/Hidden Mind|Hidden Mind]] on each affected creature and [[Spells/Dispel Magic|Dispel Magic]] on the effect (9th rank, counteract +31)."

  - name: "Routine"
    desc: "(3 actions) The cleansing suite activates one of its runes. The hazard can't activate the same rune more than once per turn. Disabling a rune removes one of the hazard's actions and prevents the hazard from activating that rune."
  - name: "Reset"
    desc: "1 minute after the hazard activates, the deadbolts unlock and the hazard resets."
```

```encounter-table
name: Cleansing Suite
creatures:
  - 1: Cleansing Suite
```

