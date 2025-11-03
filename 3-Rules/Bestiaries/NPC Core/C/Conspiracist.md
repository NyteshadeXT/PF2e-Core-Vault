---
title: "Conspiracist"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.W3uePAytelIvWOuV" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/0
  - remaster
statblock: inline
name: "Conspiracist"
level: 0
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Conspiracist"
level: "Creature 0"

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
    desc: "Deception: +10, Occultism: -1, Performance: +10, Society: +11, Conspiracy Lore: +11"
abilityMods: [0, 2, 0, 3, 0, 4]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 14
armorclass:
  - name: AC
    desc: "14; __Fort__ +4, __Ref__ +6, __Will__ +10"
hp: 15
health:
  - name: ""
  - name: HP
    desc: "15"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Signal Whistle|Signal Whistle]], [[Equipment/Writing Set|Writing Set]]"
  - name: "Compulsive Liar"
    desc: "  The conspiracist can use Deception instead of Diplomacy to [[Actions/make-an-impression skill=deception|make-an-impression skill=deception]]{Make an Impression} or [[Actions/request skill=deception|request skill=deception]]{Request}. Any creature attempting a Perception check to [[Actions/Sense Motive|Sense Motive]] against the conspiracist gets a result one degree of success worse than they rolled."

  - name: "Social Specialist"
    desc: "  For encounters involving deception and social manipulation, the conspiracist is a 4th-level challenge."

abilities_mid:
  - name: ""
  - name: "Evoke Pity"
    desc: "`pf2:r` (auditory,concentrate,emotion,linguistic,mental) **Trigger** An enemy reduces the conspiracist to below half their maximum HP\n* * *\n\n**Effect** The conspiracist begs their assailants to \"see reason\" and let them live. The conspiracist attempts a single Performance check check against the Will DCs of all enemies in a 30-foot emanation. Any creature the attempt succeeds against takes a –2 circumstance penalty to damaging attacks without the nonlethal trait they make against the conspiracist for 10 minutes"

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Fist"
    desc: "+4 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 bludgeoning"

  - name: "Sow Doubt"
    desc: "`pf2:2` (auditory,concentrate,emotion,linguistic,mental) The conspiracist argues that their enemies have been hoodwinked into attacking them by nefarious powers. The conspiracist attempts a single Deception check check against the Will DCs of all enemies that can hear them.\n* * *\n\n**Critical Success** The enemy fully believes the conspiracist, becoming [[Conditions/Stupefied|Stupefied 2]] for 1 minute. If the creature was already stupefied 2, they become controlled by the conspiracist until the end of the encounter.\n\n**Success** The enemy has trouble disbelieving the conspiracist's logic, becoming [[Conditions/Stupefied|Stupefied 1]] for 1 minute. If they're already stupefied 1, they become stupefied 2.\n\n**Failure** The enemy is unconvinced, but a seed of doubt remains.\n\n**Critical Failure** The enemy sees through the conspiracist's act, becoming immune to Sow Doubt for 24 hours."
 
```

```encounter-table
name: Conspiracist
creatures:
  - 1: Conspiracist
```



Conspiracists misinform and falsify facts to further their own causes. Though they pose little physical threat, conspiracists can have more powerful allies, such as a deluded mob that respond to the conspiracist's signal.

* * *

Villains pursue selfish and cruel goals, trampling over anyone in their way.
