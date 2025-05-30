---
title: "Valkyrie Tempest"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.prey-for-death-bestiary.Actor.l85t2fmSY9WF5lby" 
tags:
  - pf2e/creature/type/aesir
  - pf2e/creature/type/monitor
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/17
  - remaster
statblock: inline
name: "Valkyrie Tempest"
level: 17
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Adventure: Prey for Death"
name: "Valkyrie Tempest"
level: "Creature 17"
rare_03: [[Rare]]
alignment: ""
size: "grg"
trait_01: [[aesir]]
trait_02: [[monitor]]
trait_03: [[troop]]
modifier: 28
perception:
  - name: "Perception"
    desc: "+28; Darkvision"
languages: "Common, Jotun; Ravenspeaker, Truespeech"
skills:
  - name: "Skills"
    desc: "Acrobatics: +29, Athletics: +30, Diplomacy: +29, Intimidation: +29, Religion: +28"
abilityMods: [9, 6, 6, 4, 5, 6]
speed: 25 feet,  fly 60 feet
sourcebook: "_Pathfinder Adventure: Prey for Death_"
ac: 37
armorclass:
  - name: AC
    desc: "37; __Fort__ +24, __Ref__ +20, __Will__ +23"
hp: 312
health:
  - name: ""
  - name: HP
    desc: "312, Thresholds 208 (3 segments), 104 (2 segments);; __Weaknesses__ area damage 19, splash damage 10; __Resistances__ electricity 15"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Form Up|Form Up]]"
    desc: "`pf2:1`  The troop chooses one of the squares it currently occupies and redistributes its squares to any configuration in which all squares are contiguous and within 15 feet of the chosen square. The troop can't share its space with other creatures."

  - name: "[[Bestiary Ability Glossary/Constant Spells|Constant Spells]]"
    desc: "  A constant spell affects the monster without the monster needing to cast it, and its duration is unlimited. If a constant spell gets counteracted, the monster can reactivate it by spending the normal spellcasting actions the spell requires."

abilities_mid:
  - name: ""
  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  **Thresholds** 208 (3 segments), 104 (2 segments)\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Divine Innate Spells"
    desc: "DC 35, attack +27; __7th __  _[[Spells/Interplanar Teleport|Interplanar Teleport (Troop and Mounts Only)]]_; __6th __  _[[Spells/Blessed Boundary|Blessed Boundary]]_, _[[Spells/Divine Wrath|Divine Wrath]]_, _[[Spells/Weapon Storm|Weapon Storm]]_\n__Constant__  __(5th)__ _[[Spells/Truespeech|Truespeech]]_"

  - name: "Bolster the Wounded"
    desc: "`pf2:r` (divine,healing) **Trigger** The tempest ends its turn and is not at maximum HP\n* * *\n\n**Effect** The tempest restores 5d10 healing HP. This healing can't increase a tempest's Hit Points beyond the maximum of its current Hit Point threshold."

  - name: "Rain of Spears"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The tempest attacks with their electrified spears, targeting all adjacent enemies (DC 38 Reflex check save). The damage depends on the number of actions.\n\n`pf2:1` 1d6+10 piercing damage plus 1d12 electricity\n\n`pf2:2` 2d6+10 piercing damage plus 2d12 electricity\n\n`pf2:3` 3d6+10 piercing damage plus 3d12 electricity"

  - name: "Tempest of Battle"
    desc: "`pf2:2` (divine,electricity) **Frequency** once per day\n* * *\n\n**Effect** The tempest calls down a massive lightning storm in a 60-foot emanation. Spears of lightning rain down upon enemies in the area, dealing 10d12 electricity damage (DC 38 Reflex check save)."

  - name: "Troop Movement"
    desc: "  Whenever the troop Strides or Flies, they first Form Up as a free action into a 20-foot-by-20-foot area (minus any missing squares), then move up to their Speed. This works just like a Gargantuan creature moving; for instance, if any square of the troop enters difficult terrain, the extra movement cost applies to the whole troop."

  - name: "Troop Spellcasting"
    desc: "  When the tempest Casts a Spell, its members combine their efforts into casting a more powerful version of the spell. When Casting a Spell that has an area of a burst, cone, or line and doesn't have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line."
 
```

```encounter-table
name: Valkyrie Tempest
creatures:
  - 1: Valkyrie Tempest
```




