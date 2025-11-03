---
title: "Loan Shark"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.SYrcABPch6qa61Tp" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/2
  - remaster
statblock: inline
name: "Loan Shark"
level: 2
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Loan Shark"
level: "Creature 2"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 8
perception:
  - name: "Perception"
    desc: "+8; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +9, Deception: +8, Diplomacy: +8, Intimidation: +8, Society: +15, Accounting Lore: +17"
abilityMods: [3, 0, 1, 2, 2, 4]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +7, __Ref__ +6, __Will__ +10"
hp: 25
health:
  - name: ""
  - name: HP
    desc: "25"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Staff|Dragon-Headed Cane (Functions as a Staff)]], [[Equipment/Breastplate|Breastplate]]"
  - name: "Business Savvy"
    desc: "  When making monetary deals, the loan shark gets a +8 circumstance bonus to Deception checks, Diplomacy checks, and their Perception DC."

  - name: "Loan Specialist"
    desc: "  For encounters involving monetary deals, the loan shark is a 7th-level challenge."

abilities_mid:
  - name: ""
  - name: "Never off the Hook"
    desc: " (aura,emotion,mental) 60 feet.\n\nCreatures in the aura who owe the loan shark money take a –3 circumstance penalty to their Will DC against the loan shark's attempts to [[Actions/demoralize|demoralize]] or [[Actions/coerce|coerce]] them and can't reduce their [[Conditions/Frightened|Frightened]] value below 1 while in the aura.\n\n[[Bestiary Effects/Effect_ Owe Money|Effect: Owe Money]]"

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Dragon-Headed Cane"
    desc: "+10 (two-hand d8)\n__Damage__  1d4 + 5 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+9 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 5 bludgeoning"

  - name: "Interest is Due!"
    desc: "`pf2:1` (auditory,concentrate,linguistic,mental) **Frequency** once per round\n* * *\n\n**Effect** The loan shark commands an ally within 30 feet to attack a creature who owes the loan shark money. The ally can use a reaction to Strike the debtor, dealing an additional 1d6 mental damage.\n\n[[Bestiary Effects/Effect_ Interest is Due!|Effect: Interest is Due!]]"
 
```

```encounter-table
name: Loan Shark
creatures:
  - 1: Loan Shark
```



Loan sharks lend money to those in need but charge high interest. If there's ever an issue with repayment, they'll send their gang to ensure clients pay in full.

* * *

In the underbelly of society, the lawless reign supreme.
