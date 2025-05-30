---
title: "Sootsoldiers"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.rage-of-elements-bestiary.Actor.uEabVqGzN4TprwHw" 
tags:
  - pf2e/creature/type/elemental
  - pf2e/creature/type/fire
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/10
  - remaster
statblock: inline
name: "Sootsoldiers"
level: 10
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Rage of Elements"
name: "Sootsoldiers"
level: "Creature 10"

alignment: ""
size: "Medium"
trait_01: [[elemental]]
trait_02: [[fire]]
trait_03: [[troop]]
modifier: 20
perception:
  - name: "Perception"
    desc: "+20; Darkvision"
languages: "Pyric"
skills:
  - name: "Skills"
    desc: "Acrobatics: +21, Athletics: +21, Nature: +18, Plane of Fire Lore: +18, Warfare Lore: +18"
abilityMods: [7, 5, 6, 2, 4, 0]
speed: 40 feet
sourcebook: "_Pathfinder Rage of Elements_"
ac: 30
armorclass:
  - name: AC
    desc: "30; __Fort__ +20, __Ref__ +21, __Will__ +18"
hp: 165
health:
  - name: ""
  - name: HP
    desc: "165, (16 squares); Thresholds 110 (3 segments), 55 (2 segments);; __Immunities__  bleed,  paralyzed,  fire,  sleep,  poison; __Weaknesses__ area damage 10, cold 10, splash damage 10"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "Ashen Smoke"
    desc: "  When the sootsoldiers are reduced by an HP Threshold or are reduced to 0 HP, the destroyed soldiers crumble to a cloud of ash-laden smoke in 20-foot burst centered on the sootsoldiers. All creatures within the cloud are [[Conditions/Concealed|Concealed]], and all creatures outside it are concealed to those inside. The smoke lasts for 1 minute or until dispersed by a strong wind."

  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  Troops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Incinerating Grasp"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The sootsoldiers reach to constrain each enemy within 5 feet in their fiery clutches (DC 26 Reflex check save). The damage and additional effects depend on the number of actions.\n\n`pf2:1` 2d8 fire damage\n\n`pf2:2` 3d8+7 fire damage plus [[Conditions/Grabbed|Grabbed]]\n\n`pf2:3` 4d8+7 fire damage plus grabbed"

  - name: "Seething Flash"
    desc: "`pf2:1` (fire,primal) The sootsoldiers reignite and rush across the battlefield, Forming Up and Striding twice. At the end of this movement, a wave of flame and heat pours off the sootsoldiers, dealing 4d8 fire damage to other creatures in a 10-foot emanation, with a DC 29 Reflex check save. A creature that critically fails its save is also knocked [[Conditions/Prone|Prone]]."

  - name: "Smoke Vision"
    desc: "  Sootsoldiers ignore the [[Conditions/Concealed|Concealed]] condition from smoke."

  - name: "Troop Movement"
    desc: "  Whenever the sootsoldiers Stride, they first Form Up as a free action to condense into a 20-foot-by-20- foot area (minus any missing squares), then move up to their Speed. This works just like a Gargantuan creature moving; for instance, if any of the sootsoldiers' squares enters difficult terrain, the extra movement cost applies to the whole troop."
 
```

```encounter-table
name: Sootsoldiers
creatures:
  - 1: Sootsoldiers
```



Powerful deities and warlords strive for dominance over the Plane of Fire and the rest of the Inner Sphere in order to prove fire's supremacy. Armies of flaming soldiers go to war against each other on battlefields of smoke and smoldering char, all unable to bring their full power to bear. Ymeri, the vicious and victorious Queen of the Inferno, commands legions of sootsoldiers: elementals capable of battling the armies of her foes and, even when destroyed, rising from the ashes of the Eternal Furnace, scorched and triumphant.
