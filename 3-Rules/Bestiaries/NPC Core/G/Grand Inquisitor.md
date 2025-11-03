---
title: "Grand Inquisitor"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.FHVUrSWouQtE208v" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/15
  - remaster
statblock: inline
name: "Grand Inquisitor"
level: 15
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Grand Inquisitor"
level: "Creature 15"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 28
perception:
  - name: "Perception"
    desc: "+28; "
languages: ""
skills:
  - name: "Skills"
    desc: "Athletics: +25, Deception: +27, Diplomacy: +30, Intimidation: +30, Society: +28"
abilityMods: [5, 2, 2, 3, 5, 4]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 38
armorclass:
  - name: AC
    desc: "38; __Fort__ +26, __Ref__ +20, __Will__ +28; +23 reflex vs damaging effects"
hp: 215
health:
  - name: ""
  - name: HP
    desc: "215"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Scimitar|+2 Striking Scimitar]], [[Equipment/Starknife|+2 Striking Starknife]], [[Equipment/Full Plate|+2 Resilient Full Plate]]"
abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike.\n\nIf the grand inquisitor's attack hits and this reaction was triggered by a frightened creature, the triggering action is disrupted."

  - name: "Searching Gaze"
    desc: " (aura,emotion,fear,mental,visual) 30 feet. When an opponent ends its turn in the aura, it must attempt a DC 36 Will check save or it becomes [[Conditions/Frightened|Frightened 1]] ([[Conditions/Frightened|Frightened 2]] on a critical failure), and the grand inquisitor learns its surface thoughts (and underlying motive on a critical failure)."

  - name: "Symbol of Loyalty"
    desc: " (aura,emotion,mental,visual) 60 feet. Allies in the aura who are 14th level and lower and are loyal to the grand inquisitor's cause get a +3 status bonus to Will saves."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Scimitar"
    desc: "+30 (forceful, magical, sweep)\n__Damage__  2d6 + 15 slashing"

  - name: "**Melee** `pf2:1` Starknife"
    desc: "+30 (agile, deadly d6, finesse, magical, versatile s)\n__Damage__  2d4 + 15 piercing"

  - name: "**Ranged** `pf2:1` Starknife"
    desc: "+27 (agile, deadly d6, magical, thrown 20 ft., versatile s)\n__Damage__  2d4 + 15 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+30 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 15 bludgeoning"

  - name: "Condemn"
    desc: "`pf2:1` (incapacitation,linguistic) The grand inquisitor [[Actions/Demoralize|Demoralizes]]. On a success, the target is [[Conditions/Stunned|Stunned]] with a value equal to its [[Conditions/Frightened|Frightened]] condition."

  - name: "I Am the Law!"
    desc: "`pf2:1` (auditory,linguistic) The grand inquisitor vows to bring down all the fury of a nation down upon their foes. Up to three lower-level allies within 60 feet of the grand inquisitor can use their reaction to [[Actions/Grapple|Grapple]], [[Actions/Strike|Strike]], or [[Actions/Trip|Trip]] with a +2 status bonus."

  - name: "[[Bestiary Ability Glossary/Sneak Attack|Twisting Fear]]"
    desc: "  The grand inquisitor's Strikes deal an extra 3d6 precision damage to [[Conditions/Frightened|Frightened]] creatures."
 
```

```encounter-table
name: Grand Inquisitor
creatures:
  - 1: Grand Inquisitor
```



A grand inquisitor leads powerful governmental forces. They're often champions of oppressive empires or overzealous intelligence networks.

* * *

Larger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.
