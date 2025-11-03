---
title: Camazotz's Swarm
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - environmental
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder #213: Thirst for Blood
aliases: "Compendium.pf2e.shades-of-blood-bestiary.Actor.qZsz7vc0KLi2U23P" 
level: 1
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #213: Thirst for Blood"
name: "Camazotz's Swarm"
level: "Hazard 1"

trait_06: "Complex"
trait_01: [[environmental]]
modifier: 7
sourcebook: "_Pathfinder #213: Thirst for Blood_"
ac: 19
armorclass:
  - name: AC
    desc: "19; __Fort__ +10, __Ref__ +11, "
hp: 26
health:
  - name: ""
  - name: "HP"
    desc: "26; __Immunities__  critical hits,  precision"
perception:
  - name: ""
  - name: "Stealth DC 7" 
    desc: "(trained)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "A massive swarm of bats flies throughout the room, hampering vision, attacking foes, and magically restoring Camazotz's followers."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 17 Nature check (trained) to disperse the swarm or DC 15 Religion check (trained) to disrupt Camazotz's connection, which disperses the swarm"
attacks:
  - name: ""

  - name: "Swarming Descent"
    desc: "`pf2:r` (divine, emotion, fear, mental) **Trigger** A creature that's not a worshipper of Camazotz enters the room\n* * *\n\n**Effect** The hundreds of bats descend down into the room in a terrifying, shrieking mass. The swarm occupies a 30-foot burst on the floor of the room. All enemies within this area must attempt a DC 17 Will check save. On a failure, a creature becomes [[Conditions/Frightened|Frightened 1]] ([[Conditions/Frightened|Frightened 2]] on a critical failure). The swarm then rolls initiative."

  - name: "Restore Follower"
    desc: "`pf2:r` (divine) **Requirements** An ally is in the swarm's space\n\n**Trigger** The swarm dealt damage to an enemy\n* * *\n\n**Effect** The swarm takes some of the blood it drank from an enemy and feeds it to an ally in its space. The ally restores Hit Points equal to the highest damage the swarm dealt to an enemy this turn."

  - name: "Routine"
    desc: "(2 actions) The swarm uses its first action to move up to 30 feet to envelop as many enemies as possible within its 30-foot burst space. All enemies in the swarm's space become [[Conditions/Dazzled|Dazzled]] while within the swarm. It then uses its second action to bite all enemies, dealing 1d6+3 piercing damage (DC 17 Reflex check save) to all enemies in the space."
  - name: "Reset"
    desc: "The swarm disperses and returns to roost throughout the room 1 minute after all enemies leave the room. The swarm recovers 5 Hit Points per day thanks the power of Camazotz."
```

```encounter-table
name: Camazotz's Swarm
creatures:
  - 1: Camazotz's Swarm
```

