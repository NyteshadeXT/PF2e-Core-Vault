---
title: "Avalanche Legion"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.rage-of-elements-bestiary.Actor.PameP0qGSvNrhGeH" 
tags:
  - pf2e/creature/type/earth
  - pf2e/creature/type/elemental
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/11
  - remaster
statblock: inline
name: "Avalanche Legion"
level: 11
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Rage of Elements"
name: "Avalanche Legion"
level: "Creature 11"

alignment: ""
size: "grg"
trait_01: [[earth]]
trait_02: [[elemental]]
trait_03: [[troop]]
modifier: 21
perception:
  - name: "Perception"
    desc: "+21; Darkvision, Tremorsense (Imprecise) 60 Feet"
languages: "Petran"
skills:
  - name: "Skills"
    desc: "Athletics: +23"
abilityMods: [5, 0, 4, -2, 1, 0]
speed: 30 feet,  burrow 25 feet
sourcebook: "_Pathfinder Rage of Elements_"
ac: 31
armorclass:
  - name: AC
    desc: "31; __Fort__ +24, __Ref__ +20, __Will__ +21"
hp: 240
health:
  - name: ""
  - name: HP
    desc: "240, 16 squares Thresholds 160 (3 segments), 80 (2 segments); __Immunities__  bleed,  paralyzed,  poison,  sleep; __Weaknesses__ area damage 10, splash damage 10"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Tremorsense|Tremorsense (Imprecise) 60 feet]]"
    desc: "  Tremorsense allows a monster to feel the vibrations through a solid surface caused by movement. It is an imprecise sense with a limited range (listed in the ability). Tremorsense functions only if the monster is on the same surface as the subject, and only if the subject is moving along (or burrowing through) the surface."

  - name: "Earthbound"
    desc: "  When not touching solid ground, the avalanche legion is [[Conditions/Slowed|Slowed 1]]."

abilities_mid:
  - name: ""
  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  Troops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Earth Glide"
    desc: "  The avalanche legion can Burrow through any earthen matter, including rock. When it does so, the legion moves at its full burrow Speed, leaving no tunnels or signs of its passing."

  - name: "Pummeling Boulders"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The avalanche legion unleashes an onslaught of blows against each enemy in a 5-foot emanation (DC 28 Reflex check save). The damage depends on the number of actions.\n\n`pf2:1` 2d8 bludgeoning damage\n\n`pf2:2` 3d8+8 bludgeoning damage\n\n`pf2:3` 4d8+11 bludgeoning damage"

  - name: "Spinning Stones"
    desc: "`pf2:2`  The avalanche legion spins in place, kicking up a barrage of stones. Each creature in a 10-foot burst within 30 feet of the troop takes 1d12+8 bludgeoning damage (DC 28 Reflex check save). When the troop is reduced to 2 or fewer segments, this area decreases to a 5-foot burst."

  - name: "Trample into the Earth"
    desc: "`pf2:3`  The avalanche legion speeds forward, running over creatures with their stone bodies and knocking them down. As [[Bestiary Ability Glossary/Trample|Trample]]; Gargantuan or smaller, 2d8 bludgeoning damage, DC 28 Reflex check. A creature that critically fails its save is knocked [[Conditions/Prone|Prone]]."

  - name: "Troop Movement"
    desc: "  Whenever the avalanche legion Strides or Burrows, it first Forms Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then moves up to its respective Speed. This works just like a Gargantuan creature moving; for instance, if any square of the legion enters difficult terrain, the extra movement cost applies to all the elementals."
 
```

```encounter-table
name: Avalanche Legion
creatures:
  - 1: Avalanche Legion
```



Elementals of the Plane of Earth can be fiercely territorial. Some more solitary elementals protect their lairs on their own, but occasionally others band together to defend larger regions that serve as shared turf. Notable among these alliances are avalanche legions, who patrol the perimeter of these shared territories, driving off intruders who dare to trespass upon their home ground.

## Familial Instincts

Although elementals don't reproduce like typical creatures, living landslides sometimes develop bonds with smaller or weaker earth elementals, such as earth wisps, living boulders, and sod hounds. When several of these smaller elementals are gathered in one place, living landslides who cared for the creatures often continue to watch over their wards. Avalanche legions sometimes form from these gatherings, as multiple living landslides join forces to protect the smaller elementals.
