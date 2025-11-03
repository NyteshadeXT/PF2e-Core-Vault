---
title: "Expedition Leader"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.Dd7E7pMKxPhrXaa8" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/9
  - remaster
statblock: inline
name: "Expedition Leader"
level: 9
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Expedition Leader"
level: "Creature 9"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 21
perception:
  - name: "Perception"
    desc: "+21; "
languages: "Common, Erutaki, Skald, Tien, Varki"
skills:
  - name: "Skills"
    desc: "Acrobatics: +20, Athletics: +20, Diplomacy: +18, Nature: +19, Survival: +18, Scouting Lore: +21"
abilityMods: [4, 2, 4, 2, 3, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__ +21, __Ref__ +18, __Will__ +15"
hp: 160
health:
  - name: ""
  - name: HP
    desc: "160"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Machete|+1 Striking Machete]], [[Equipment/Shortbow|Shortbow]], [[Equipment/Hide Armor|+1 Hide Armor]], [[Equipment/Compass|Compass]], [[Equipment/Tent (Four-Person)|Tent (Four-Person)]], [[Equipment/Lantern (Hooded)|Lantern (Hooded)]], [[Equipment/Repair Toolkit|Repair Toolkit]], [[Equipment/Spyglass|Spyglass]], [[Equipment/Sun Goggles|Sun Goggles]], [[Equipment/Survey Map|Survey Map]], 20x [[Equipment/Arrows|Arrows]]"
  - name: "Familiarity with the Land"
    desc: "  The expedition leader isn't affected by severe weather and ignores difficult terrain."

  - name: "Memories of Expeditions Past"
    desc: "  **Frequency** once per day\n\n**Trigger** The expedition leader fails a Survival check\n* * *\n\n**Effect** The expedition leader rethinks their choices based on prior experience. The degree of success increases by one step, from critical failure to failure or from failure to success."

  - name: "On Guard"
    desc: "  When the expedition leader Scouts, they grant their party a +2 circumstance bonus to their initiative rolls.\n\n[[Bestiary Effects/Effect_ On Guard|Effect: On Guard]]"

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Machete"
    desc: "+21 (deadly d8, magical, sweep)\n__Damage__  2d6 + 10 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+20 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 10 bludgeoning"

  - name: "**Ranged** `pf2:1` Shortbow"
    desc: "+19 (deadly d10, range increment 60 feet, reload 0)\n__Damage__  1d6 + 6 piercing"

  - name: "[[Actor.qjOInZJRQQJKB1f8.Item.mkv6SrL4YfsuCExL|Quick Draw]]"
    desc: "`pf2:1`  The expedition leader Interacts to take out their machete or shortbow, then Strikes with the weapon."

  - name: "Think Fast!"
    desc: "`pf2:1`  **Requirements** The expedition leader has a hand free\n* * *\n\n**Effect** The expedition leader scoops up a handful of rubble and throws it. Each creature in a 15-foot cone must succeed at a DC 27 Reflex check save or be [[Conditions/Dazzled|Dazzled]] and [[Conditions/Off-Guard|Off-Guard]] until the start of the expedition leader's next turn."
 
```

```encounter-table
name: Expedition Leader
creatures:
  - 1: Expedition Leader
```



Full-scale expeditions require a central leader. Expedition leaders tend to have level heads in dangerous situations and can make decisions quickly when time is of the essence.

* * *

Explorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.
