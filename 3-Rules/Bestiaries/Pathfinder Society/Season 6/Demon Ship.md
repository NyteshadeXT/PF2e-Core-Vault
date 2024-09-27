---
title: Demon Ship
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - environmental
  - magical
  - unholy
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder Society Scenario #6-00: Salt of the Ocean
aliases: "Compendium.pf2e.pfs-season-6-bestiary.Actor.tM1FEUbrFpTPfDhZ" 
level: 3
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #6-00: Salt of the Ocean"
name: "Demon Ship"
level: "Hazard 3"

trait_06: "Complex"
trait_01: [[environmental]]
trait_02: [[magical]]
trait_03: [[unholy]]
modifier: 5
sourcebook: "_Pathfinder Society Scenario #6-00: Salt of the Ocean_"
ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__ +12, __Ref__ +6, __Will__ +14"
hp: 50
health:
  - name: ""
  - name: "HP"
    desc: "50, (BT 25); __Hardness__ 5; __Immunities__  object immunities,  critical hits,  precision; __Weaknesses__ cold iron 5, holy 5"
perception:
  - name: ""
  - name: "Stealth DC 5" 
    desc: " +5"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "A demonic presence animates the ship carrying demon pirates."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 20 Religion check (trained) to ward against demonic presence, DC 20 Arcana check (trained) or DC 20 Occultism check (trained) to weaken the demonic possession, DC 20 Intimidation check (trained) to scare it away, or DC 18 Sailing Lore check (trained) to confuse it; two total successes are required to disable the hazard."
attacks:
  - name: ""
  - name: "Melee"
    desc: "Bowsprit +11 (reach 20 feet, unholy) "
  - name: "Melee"
    desc: "Chthonian Cannon +11 (range increment 30 feet, unholy) "

  - name: "No Prey, No Pay"
    desc: "`pf2:r` **Trigger** The demon ship hits another ship and Encounter A begins\n* * *\n\n**Effect** The demon ship fires grapples at the Snapdragon. Each PC must attempt a DC 20 Reflex check save or be [[Conditions/Grabbed|Grabbed]] ([[/act escape dc=20]]); on a critical failure, they're also impaled and take 1d10+6 piercing damage. The demon ship then rolls initiative."

  - name: "Sea Chantey"
    desc: "action (auditory) All fiends within 60 feet gain a +1 status bonus to attack rolls, damage rolls, and saves against fear effects; all non-fiends within 60 feet must succeed at a DC 20 Will check save or become [[Conditions/Frightened|Frightened 1]] ([[Conditions/Frightened|Frightened 2]] on a critical failure).\n* * *\n\n[[Bestiary Effects/Effect_ Sea Chantey|Effect: Sea Chantey]]"

  - name: "Demonic List"
    desc: "action **Effect** The ship tosses and turns. Each creature in the hazard's area must make a DC 20 Reflex check save. On a failure, it is knocked [[Conditions/Prone|Prone]]; on a critical failure it also takes 2d10 bludgeoning damage."

  - name: "Routine"
    desc: "`pf2:2` The demon ship uses its actions on one of the following options (GM's choice). It loses one action from its routine if a PC succeeds at an attempt to Disable it or it reaches its Broken Threshold.\n\n*   **Broadside Blast** `pf2:1` The demon ship makes a Chthonian cannon Strike.\n*   **Demonic List** `pf2:d` **Effect** The ship tosses and turns. Each creature in the hazard's area must make a DC 20 Reflex check save. On a failure, it is knocked [[Conditions/Prone|Prone]]; on a critical failure it also takes 2d10 bludgeoning damage.\n*   **Heads Will Roll** `pf2:1` It makes a bowsprit Strike.\n*   **Sea Chantey** `pf2:1` (auditory) All fiends within 60 feet gain a +1 status bonus to attack rolls, damage rolls, and saves against fear effects; all non-fiends within 60 feet must succeed at a DC 20 Will check save or become [[Conditions/Frightened|Frightened 1]] ([[Conditions/Frightened|Frightened 2]] on a critical failure).\n* * *\n\n[[Bestiary Effects/Effect_ Sea Chantey|Effect: Sea Chantey]]"

```

```encounter-table
name: Demon Ship
creatures:
  - 1: Demon Ship
```

