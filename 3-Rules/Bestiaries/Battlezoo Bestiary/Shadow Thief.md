---
title: "Shadow Thief"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.MyuNngK1n5aqNUSh" 
tags:
  - pf2e/creature/type/aberration
  - pf2eMonster
  - pf2e/creature/level/2
statblock: inline
name: "Shadow Thief"
level: 2
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/shadow_thief.webp| ]]
source: "Battlezoo Bestiary"
name: "Shadow Thief"
level: "Creature 2"
rare_03: [[Uncommon]]
alignment: ""
size: "Small"
trait_01: [[aberration]]
modifier: 7
perception:
  - name: "Perception"
    desc: "+7; Darkvision"
languages: "Aklo, Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +8, Deception: +9, Society: +9, Stealth: +10, Thievery: +8"
abilityMods: [1, 4, 1, 3, 1, 3]
speed: 25 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__ +5, __Ref__ +12, __Will__ +7"
hp: 30
health:
  - name: ""
  - name: HP
    desc: "30"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "Coalesce Memories"
    desc: "`pf2:r` (occult) **Requirements** The shadow thief is merged with a creature;\n\n**Trigger** The creature attempts to Recall Knowledge;\n* * *\n\n**Effect** The shadow thief attempts to retain its hold on the creature's wandering mind. The creature compares its Recall Knowledge check result to the shadow thief's Will DC (17 for most shadow thieves).\n* * *\n\nCritical Success The shadow thief's Penumbral Theft ability ends.\n\n**Failure** The creature is [[Conditions/Stupefied|Stupefied 1]] for 1 round.\n\n**Critical Failure** As failure, and the creature is also [[Conditions/Stunned|Stunned 1]]."

  - name: "Darkness Dissolution"
    desc: "`pf2:r` (occult) **Frequency** once per week;\n\n**Trigger** The shadow thief is reduced to 0 Hit Points;\n* * *\n\n**Effect** The shadow thief remains at 1 HP and instantly teleports to an area of darkness within 1,000 feet. If there is no area of darkness within 1,000 feet, the shadow thief is destroyed."

  - name: "Swap Shadows"
    desc: "`pf2:r` (occult) **Requirements** The shadow thief is merged with a Tiny or smaller creature;\n\n**Trigger** The merged creature moves within 5 feet of a larger creature;\n* * *\n\n**Effect** The shadow thief uses Penumbral Theft on the larger creature. The larger creature's initial saving throw against this ability is treated as one degree of success worse."

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Claw +10 (agile, finesse)\n__Damage__  1d6 + 3 slashing 1d4 cold"

  - name: "Penumbral Theft"
    desc: "`pf2:2` (occult,shadow) The shadow thief absorbs the shadow of a creature within reach and takes its place. The shadow thief's body merges with that of the target, who must attempt a DC 19 Will save. While merged, the target's shadow moves erratically, inflicting a -1 circumstance penalty to Make an Impression, Hide, or Sneak. The shadow thief cannot act while merged, except to Swap Shadows or Coalesce Memories or to end the merge by spending two actions, which have the concentrate trait. An affected creature can be identified by their shadow's oddities with a successful DC 21 Occultism or DC 21 Perception check.\n\n[[Effects/Effect_ Penumbral Theft|Effect: Penumbral Theft]]\n* * *\n\n**Critical Success** The merge is unsuccessful.\n\n**Success** The shadow thief merges with the creature for 24 hours.\n\n**Failure** The shadow thief merges with the creature indefinitely."
 
```

```encounter-table
name: Shadow Thief
creatures:
  - 1: Shadow Thief
```



One of the many creations of the unfathomable denizens of the distant cosmos, shadow thieves are small creatures with strangely angular bodies that lie underneath a veil of shadow. Despite the aura of dusk that perpetually surrounds them, shadow thieves are corporeal and remain as such even when they merge with a mortal creature to steal the mortal's shadow.

Shadow thieves were initially created to gather information for their alien masters. By assuming the form of different mortal creatures' shadows, a shadow thief could infiltrate society via progressively more important figures. At least, this was their creators' intention. However, as the first shadow thieves traveled through the vastness of space, they lost their connection to their elder creators—but not their interest in the societies of mortals. Now they wander the planet with their own mysterious designs in mind.

## Willing Hosts

The experience of having one's shadow stolen by a shadow thief is not pleasant—but stories exist of mortals who form friendships with shadow thieves, willingly allowing the monsters to accompany them on their journeys. For unwilling hosts, the easiest way to rid oneself of a shadow thief is to offer the being a tantalizing morsel of knowledge.

## Monster Part Subsystem

**Shadow Thief Creature 2**

**Monster Parts** 5/12/22 gp

**Eligible Refinements** weapons (slashing), armor (heavy), perception item, skill items (Acrobatics, Deception, Society, Stealth, Thievery)

**Eligible Imbued Properties** bane, charisma, cold, dexterity, energy resistant (positive), intelligence, sensory (darkvision), wild
