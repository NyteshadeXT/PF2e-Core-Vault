---
title: "Enigmatic Conspirant"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.9ZKIadbfdzrJJGOk" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Enigmatic Conspirant"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Enigmatic Conspirant"
level: "Creature 4"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; "
languages: "Aklo, Common, Elven, Sakvroth"
skills:
  - name: "Skills"
    desc: "Acrobatics: +12, Deception: +9, Intimidation: +11, Occultism: +12, Society: +12, Stealth: +10, Secret Society Lore: +14"
abilityMods: [0, 4, 0, 2, 2, 3]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__ +8, __Ref__ +12, __Will__ +12"
hp: 60
health:
  - name: ""
  - name: HP
    desc: "60; __Resistances__ mental 5"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Rapier|Rapier]], [[Equipment/Shortbow|Shortbow]], [[Equipment/Leather Armor|Leather Armor]], [[Equipment/Everlight Crystal|Everlight Crystal]], 20x [[Equipment/Arrows|Arrows]]"
abilities_mid:
  - name: ""
  - name: "Knowing Glance"
    desc: "`pf2:r` (concentrate,emotion,fear,mental,visual) **Trigger** The enigmatic conspiracist is targeted by a melee Strike or touch spell\n* * *\n\n**Effect** With an uncanny look, the enigmatic conspiracist [[Actions/demoralize|demoralize]]{Demoralizes} the creature that targeted them. Demoralize loses the auditory trait and gains the visual trait, and the conspiracist doesn't take a penalty if the creature doesn't understand their language. If the Intimidation check critically succeeds, the conspiracist disrupts the triggering action."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Rapier"
    desc: "+14 (deadly d8, disarm, finesse)\n__Damage__  1d8 + 6 piercing plus spill-secrets"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+14 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 6 bludgeoning"

  - name: "**Ranged** `pf2:1` Shortbow"
    desc: "+14 (deadly d10, range increment 60 feet, reload 0)\n__Damage__  1d6 + 6 piercing plus spill-secrets"

  - name: "Spill Secrets"
    desc: " (mental,occult) When the conspiracist critically hits with a Strike, the target must succeed at a DC 21 Will check save or the enigmatic conspiracist perceives the target's surface thoughts for 1 round, as mind reading. This grants the conspiracist a +1 circumstance bonus to AC and saving throws against any creature whose mind they're reading.\n\n[[Bestiary Effects/Effect_ Spill Secrets|Effect: Spill Secrets]]"

  - name: "Unbelievable Connection"
    desc: "`pf2:2` (auditory,concentrate,occult) The enigmatic conspiracist recites a convoluted conspiracy theory about a creature within 30 feet, then attempts an Occultism check check against the Will DC of that creature. On a success, the target is [[Conditions/Stupefied|Stupefied 1]] for 1 minute and [[Conditions/Off-Guard|Off-Guard]] against the conspiracist's attacks until no longer stupefied."
 
```

```encounter-table
name: Enigmatic Conspirant
creatures:
  - 1: Enigmatic Conspirant
```



Powerful organizations work out of public view, shaping lives while facing few consequences. Searching for these secret societies, whether to join them or destroy them, has given the enigmatic conspiracist uncanny insight.

* * *

Hidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.
