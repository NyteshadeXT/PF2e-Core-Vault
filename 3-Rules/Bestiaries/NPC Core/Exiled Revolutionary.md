---
title: "Exiled Revolutionary"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.oTKuWWYyWyfy599O" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/10
  - remaster
statblock: inline
name: "Exiled Revolutionary"
level: 10
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Exiled Revolutionary"
level: "Creature 10"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 17
perception:
  - name: "Perception"
    desc: "+17; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +18, Athletics: +15, Deception: +19, Diplomacy: +19, Intimidation: +17, Society: +20, Stealth: +20, Thievery: +18, Lore (home region or settlement): +22"
abilityMods: [4, 5, 0, 3, 2, 4]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 28
armorclass:
  - name: AC
    desc: "28; __Fort__ +17, __Ref__ +20, __Will__ +17"
hp: 140
health:
  - name: ""
  - name: HP
    desc: "140"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Composite Longbow|+1 Composite Longbow]], [[Equipment/Longsword|+1 Striking Longsword]], [[Equipment/Thieves' Toolkit|Thieves' Toolkit]], 20x [[Equipment/Arrows|Arrows]], 2x [[Equipment/Wyvern Poison|Wyvern Poison]], [[Equipment/Engraved copper ring|Signet Ring]]"
  - name: "Former Courtier"
    desc: "  An exiled revolutionary remembers well their former realm. In their home realm, be it a manor, castle, or capital city, the exiled revolutionary gains a +4 circumstance bonus to Perception checks and Will saves, and to Deception, Diplomacy, Intimidation, and Stealth checks, and is a 12th-level challenge in the arena of noble politics."

abilities_mid:
  - name: ""
  - name: "Follow Me"
    desc: " (aura,visual) 20 feet. This aura is active only while in the exiled revolutionary's home realm, as they share knowledge to avoid guard patrols and get past checkpoints. Any ally in the aura gets a +2 circumstance bonus to Deception and Stealth checks."

  - name: "It's... You!"
    desc: " (emotion,mental) When the exiled revolutionary sees or hears someone who was part of their downfall in person, they break cover and attack their betrayer immediately, even if their actions would doom them and their allies. The revolutionary must succeed at a DC 35 Will check save or be [[Conditions/Fascinated|Fascinated]] by their betrayer and unable to cease targeting them exclusively until the betrayer is defeated.\n\nAn ally can convince the revolutionary to forgo their vengeance with a [[Actions/request dc=30|request dc=30]]{DC 30 Diplomacy} check to make a Request. This lasts for 1 minute, but talking the revolutionary down after that time requires more thorough engagement."

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Longsword"
    desc: "+21 (magical, versatile p)\n__Damage__  2d8 + 10 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+20 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 10 bludgeoning"

  - name: "**Ranged** `pf2:1` Composite Longbow"
    desc: "+21 (deadly d10, magical, propulsive, range increment 100 feet, reload 0, volley 30 ft.)\n__Damage__  1d8 + 8 piercing"

  - name: "Darting Feint"
    desc: "`pf2:2`  The exiled revolutionary deals an additional 2d6 precision damage to [[Conditions/Off-Guard|Off-Guard]] creatures."
 
```

```encounter-table
name: Exiled Revolutionary
creatures:
  - 1: Exiled Revolutionary
```



Forces hire an exiled revolutionary because they were once part of the enemy. A lost scion, noble who spoke against tyranny, or wrongly persecuted politician possesses an intimate knowledge of their foe's tactics, logistics, and territory.

* * *

Whether they're hired to wage war, protect a caravan, or infiltrate an impenetrable fortress, there's ample work for mercenaries all over Golarion.
