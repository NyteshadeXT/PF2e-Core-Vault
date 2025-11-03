---
title: "Saltborn Stalkers"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.rage-of-elements-bestiary.Actor.7Y3DAOMaLzqmRqUh" 
tags:
  - pf2e/creature/type/aquatic
  - pf2e/creature/type/elemental
  - pf2e/creature/type/troop
  - pf2e/creature/type/water
  - pf2eMonster
  - pf2e/creature/level/13
  - remaster
statblock: inline
name: "Saltborn Stalkers"
level: 13
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Rage of Elements"
name: "Saltborn Stalkers"
level: "Creature 13"

alignment: ""
size: "grg"
trait_01: [[aquatic]]
trait_02: [[elemental]]
trait_03: [[troop]]
trait_04: [[water]]
modifier: 24
perception:
  - name: "Perception"
    desc: "+24; Darkvision"
languages: "Thalassic"
skills:
  - name: "Skills"
    desc: "Athletics: +27, Intimidation: +22, Nature: +22, Stealth: +26, Plane of Water Lore: +22, Warfare Lore: +22"
abilityMods: [6, 7, 5, 3, 5, 3]
speed: 10 feet,  swim 60 feet
sourcebook: "_Pathfinder Rage of Elements_"
ac: 34
armorclass:
  - name: AC
    desc: "34; __Fort__ +22, __Ref__ +26, __Will__ +20"
hp: 240
health:
  - name: ""
  - name: HP
    desc: "240, troop defenses; __Immunities__  bleed,  paralyzed,  poison,  sleep; __Weaknesses__ area damage 10, splash damage 10"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  **Thresholds** 160 (3 segments), 80 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

attacks:
  - name: ""

  - name: "Lightlure"
    desc: "`pf2:1` (concentrate,incapacitation,mental,primal,visual) **Effect** The saltborn stalkers move their luminescent lures in an entrancing light show, drawing nearby creatures into their grasp. Each creature in a 100-foot emanation must attempt a DC 33 Will check save; regardless of the result of its save, the creature is then temporarily immune to Lightlure for 24 hours.\n\n**Success** The creature is unaffected.\n\n**Failure** The creature is [[Conditions/Fascinated|Fascinated]] with the lures and must spend all its actions on its next turn to move closer to them as expediently as possible, avoiding obvious dangers along its path.\n\n**Critical Failure** As failure, but the creature is also [[Conditions/Dazzled|Dazzled]] for 1d4 rounds."

  - name: "Saline Crust"
    desc: " (aura,water) 20 feet\n* * *\n\n**Requirements** The saltborn stalkers are in a body of water\n* * *\n\n**Effect** Layers of the saltborn's salty skin flake off to foul the water around them. A creature that ends its turn in the aura takes 2d6 acid damage with a DC 30 Reflex check save; creatures with the amphibious or aquatic trait are immune."

  - name: "Salty Clutch"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The stalkers reach out to Grab their foes and drag them underwater. Each enemy in a 5-foot emanation must succeed at a DC 33 Reflex check save or be [[Conditions/Grabbed|Grabbed]] by the stalkers (or [[Conditions/Restrained|Restrained]] on a critical success). For the rest of the current turn, the saltborn stalkers can move toward water or in water without ending the grab, carrying any grabbed or restrained creatures along with them."

  - name: "Scour the Bones"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The saltborn stalkers use their teeth and claws to vivisect each enemy within 5 feet (DC 30 Reflex check save). The damage depends on the number of actions.\n\n`pf2:1` 2d10 slashing damage\n\n`pf2:2` 3d10+8 slashing damage\n\n`pf2:3` 3d10+16 slashing damage"

  - name: "Troop Movement"
    desc: "  Whenever the saltborn stalkers Stride or Swim, they first Form Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then move. This works just like a Gargantuan creature moving; for instance, if any of the stalkers' squares enter difficult terrain, the extra movement cost applies to the whole troop."
 
```

```encounter-table
name: Saltborn Stalkers
creatures:
  - 1: Saltborn Stalkers
```



The briny depths of the Boundless Sea sometimes twist large groups of merfolk into swarms with vicious rows of teeth and sharp claws known as saltborn stalkers. Saltborn stalkers hunt in groups, using their drooping, tentacle-like appendages as bioluminescent lures, posing them as wisps or bubbles of planar energy to draw unsuspecting prey into clever ambushes.

* * *

THE RITE OF SALT AND STONE

When a merfolk joins the ranks of the saltborn, they undergo a secret rite known only to other saltborn and the brine dragons of Kelizandrika. The recruits are encased in graves of salt and ice and left at the floor of the Boundless Sea to claw themselves free. Those who overcome the trial are never truly rid of the salt from their tombs, which covers the body of every saltborn stalker.
