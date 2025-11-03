---
title: "Eyesore"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.95uhUP96ETGkl1Cc" 
tags:
  - pf2e/creature/type/mindless
  - pf2e/creature/type/ooze
  - pf2eMonster
  - pf2e/creature/level/3
statblock: inline
name: "Eyesore"
level: 3
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/eyesore.webp| ]]
source: "Battlezoo Bestiary"
name: "Eyesore"
level: "Creature 3"

alignment: ""
size: "Medium"
trait_01: [[mindless]]
trait_02: [[ooze]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; "
languages: ""
skills:
  - name: "Skills"
    desc: "Thievery: +10"
abilityMods: [4, -5, 5, -5, 1, -5]
speed: 15 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 11
armorclass:
  - name: AC
    desc: "11; __Fort__ +14, __Ref__ +2, __Will__ +4; -1 status to all saves vs. blindness"
hp: 80
health:
  - name: ""
  - name: HP
    desc: "80; __Immunities__  acid,  critical hits,  mental,  precision,  unconscious; __Weaknesses__ piercing 5"
abilities_top:
  - name: ""

  - name: "Stolen Vision"
    desc: "  An eyesore that has stolen at least one eye has vision. Additional eyes grant it additional vision types; with at least 4 eyes it has [[Bestiary Ability Glossary/Low-Light Vision|Low-Light Vision]], with at least 6 eyes it has [[Familiar Abilities/Darkvision|Darkvision]], and with 8 or more eyes it has [[Bestiary Ability Glossary/All-Around Vision|All-Around Vision]].\n\nA typical eyesore has 6 eyes."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Ranged** `pf2:1` Acid Spray"
    desc: "+10 (acid, range increment 30 feet)\n__Damage__  1d8 + 7 acid"

  - name: "Enucleate"
    desc: "`pf2:3` (arcane,concentrate,incapacitation,visual) Against a helpless, [[Conditions/Unconscious|Unconscious]], or asleep creature, an eyesore will sometimes instinctively attempt to use their Steal Eye ability to painlessly extract the creature's eyes without disturbing or waking the subject.\n\nThe eyesore attempts a Thievery check opposed by the target's Perception DC. On a success, the eyesore steals a single eye, as per Steal Eye. If the eyesore fails its Thievery check, the target becomes aware of the attempt, waking up if possible."

  - name: "Steal Eye"
    desc: "`pf2:2` (arcane,concentrate,visual) All non-digested eyes within the eyesore lock gazes with a target it can see within 30 feet. That creature must attempt a DC 18 Fortitude save. If it fails and has not been [[Conditions/Dazzled|Dazzled]] by this ability, it loses an eye and becomes permanently dazzled. If the creature critically fails the save, was already dazzled by this ability, or otherwise only has one eye, a critically failed save causes the creature to lose their remaining eye and be permanently [[Conditions/Blinded|Blinded]].\n\nStolen eyes immediately appear within the eyesore, under its control and potentially improving its vision. Stolen eyes can be retrieved from the fresh corpse of an eyesore within 1 hour of the eyesore's death.\n\nA creature can place a reclaimed eye back into an empty eye socket with a successful DC 20 Medicine check, which restores the creature's vision after 1 minute and removes the dazzled and blinded conditions (a critical failure results in destroying the eye). Implanting a foreign eye into a socket other than its original requires a successful DC 24 Medicine check instead. Eyes must be fresh and damp from the fluid of the eyesore for this process to succeed. After 1 hour, the eyes in a dead eyesore are too decomposed to be of any use."
 
```

```encounter-table
name: Eyesore
creatures:
  - 1: Eyesore
```



Sometimes referred to as "basilisk's bane," the eyesore is a musty green-blue lump of semi-translucent goo in which dozens of disembodied eyeballs float in various stages of digestion. Unlike most oozes, eyesores possesses a sense of vision, albeit one gained from a particularly macabre source: the stolen eyes of their victims.

An eyesore ranges from 80 to 120 pounds and typically contains four to eight eyeballs. Any creature with vision that looks upon the multitudinous eyes trapped within an eyesore risks having their own eyes magically removed and added to the eyesore's collection, blinding the poor subject and furthering the growth of the eyesore. Eyesores propagate themselves by splitting into two identical clones when they have consumed a sufficient number of eyes to do so (usually 12).

The exact origin of eyesores is lost to time. Legends say the first eyesore was created from the liquefied body of a jealous nymph's paramour, but some stories credit kobolds with creating eyesores to protect against roaming basilisks, cockatrices, and medusas.

## Unappetizing Creatures

Eyesores regard eyeless creatures or creatures that lack vision as uninteresting and unworthy of their attention. Young eyesores can even be fooled by mundane trickery such as a cloth blindfold. However, potential prey that displays even the merest hint of an ocular orb can stir an eyesore into a ravenous frenzy.

## Monster Part Subsystem

**Eyesore Creature 3**

**Monster Parts** 7/18/30 gp

**Eligible Refinements** perception item, skill items (Thievery)

**Eligible Imbued Properties** acid, bane, constitution, energy resistant (acid, positive), fortification, sensory (variable: low-light vision, darkvision), strength, wild
