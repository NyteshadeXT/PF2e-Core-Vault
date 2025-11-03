---
title: "Drill Sergeant"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.g4SvRClK7ftg3kSD" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/8
  - remaster
statblock: inline
name: "Drill Sergeant"
level: 8
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Drill Sergeant"
level: "Creature 8"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 16
perception:
  - name: "Perception"
    desc: "+16; "
languages: ""
skills:
  - name: "Skills"
    desc: "Athletics: +18, Intimidation: +20, Warfare Lore: +18"
abilityMods: [4, 3, 2, 2, 2, 4]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 25
armorclass:
  - name: AC
    desc: "25; __Fort__ +14, __Ref__ +15, __Will__ +20"
hp: 120
health:
  - name: ""
  - name: HP
    desc: "120"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "6x [[Equipment/Javelin|Javelin]], [[Equipment/Longsword|+1 Striking Longsword]], [[Equipment/Chain Shirt|Chain Shirt]]"
abilities_mid:
  - name: ""
  - name: "Commanding Aura"
    desc: " (aura,emotion,mental,visual) 60 feet. An ally that starts its turn in the aura gains 8 temporary Hit Points. These last until the start of the creature's next turn.\n\n[[Bestiary Effects/Effect_ Commanding Aura|Effect: Commanding Aura]]"

  - name: "You Don't Have My Permission to Die!"
    desc: "`pf2:r` (auditory,emotion,fear,linguistic,mental) **Trigger** An allied creature within 30 feet would be reduced to 0 Hit Points\n* * *\n\n**Effect** With a stern rebuke, the drill sergeant berates the target for their failure. The creature avoids being knocked out and remains at 1 HP. The creature is then temporarily immune for 24 hours."

attacks:
  - name: ""

  - name: "**Ranged** `pf2:1` Javelin"
    desc: "+19 (thrown 30 ft.)\n__Damage__  1d6 + 12 piercing"

  - name: "**Melee** `pf2:1` Longsword"
    desc: "+21 (magical, versatile p)\n__Damage__  2d8 + 12 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+20 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 12 bludgeoning"

  - name: "Chastising Enforcement"
    desc: "`pf2:1` (auditory,emotion,linguistic,mental) The drill sergeant exhorts a faltering comrade with a stern word and attempts an Intimidation check check against the Will DC of one ally within 30 feet. On a success, the target's [[Conditions/Frightened|Frightened]] condition is reduced by 2 and the drill sergeant can attempt to counteract one mental effect that ally is suffering from with a +18 counteract modifier. On a critical success, the drill sergeant also reduces the frightened condition of each other ally in a 10-foot emanation around the target by 1."

  - name: "Keep Up With Me!"
    desc: "`pf2:1` (auditory,emotion,linguistic,mental) **Requirements** The drill sergeant's last action was a Strike that hit\n* * *\n\n**Effect** The drill sergeant shouts that one ally within 30 feet can't keep up with them. That ally gains a +3 status bonus to their attack roll on the next Strike they make before the start of the drill sergeant's next turn. If the ally is a troop, this bonus instead applies to the DC of their next offensive activity (such as Join the Fray for heavy cavalry).\n\n[[Bestiary Effects/Effect_ Keep Up With Me!|Effect: Keep Up With Me!]]"
 
```

```encounter-table
name: Drill Sergeant
creatures:
  - 1: Drill Sergeant
```



Maintaining discipline is of the utmost importance when conducting a military campaign. Often elevated from veteran soldiers, drill sergeants are responsible for training common troops, ensuring they can follow orders and fight well in the thick of battle. Though drill sergeants can be brash and hard-nosed, harsh discipline is often crucial to maintaining order and keeping soldiers alive.

* * *

A military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.
