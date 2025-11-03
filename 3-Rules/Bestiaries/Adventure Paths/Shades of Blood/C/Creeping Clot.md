---
title: "Creeping Clot"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.shades-of-blood-bestiary.Actor.UuXREGQxhDv8KQFq" 
tags:
  - pf2e/creature/type/amphibious
  - pf2e/creature/type/mindless
  - pf2e/creature/type/ooze
  - pf2eMonster
  - pf2e/creature/level/5
  - remaster
statblock: inline
name: "Creeping Clot"
level: 5
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #214: The Broken Palace"
name: "Creeping Clot"
level: "Creature 5"
rare_03: [[Uncommon]]
alignment: ""
size: "Medium"
trait_01: [[amphibious]]
trait_02: [[mindless]]
trait_03: [[ooze]]
modifier: 7
perception:
  - name: "Perception"
    desc: "+7; "
languages: ""
skills:
  - name: "Skills"
    desc: "Athletics: +13"
abilityMods: [6, -5, 5, -5, 0, -5]
speed: 20 feet,  climb 15 feet,  swim 30 feet
sourcebook: "_Pathfinder #214: The Broken Palace_"
ac: 12
armorclass:
  - name: AC
    desc: "12; __Fort__ +15, __Ref__ +4, __Will__ +7"
hp: 150
health:
  - name: ""
  - name: HP
    desc: "150; __Immunities__  acid,  bleed,  bludgeoning,  critical hits,  mental,  precision,  unconscious,  visual"
abilities_top:
  - name: ""

  - name: "Amphibious Motion Sense"
    desc: "  A creeping clot can feel nearby motion through vibrations in air and water."

abilities_mid:
  - name: ""
  - name: "Clot Armor"
    desc: " (primal) **Requirements** The creeping clot is not immersed in liquid\n* * *\n\n**Effect** The creeping clot remains motionless for 1 minute, causing its outer mass to form a thick shell of clotted plasm. Its Armor Class increases to 22 and it becomes [[Conditions/Slowed|Slowed 1]]. Though the creeping clot remains immune to the additional damage from a critical hit, its clot armor is destroyed automatically upon taking a critical hit, taking 50 damage from a single Strike, or as soon as it is immersed in liquid."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Pseudopod"
    desc: "+15 (unarmed)\n__Damage__  2d8 + 7 bludgeoning plus grab"

  - name: "**Melee** `pf2:1` Tendril"
    desc: "+15 (reach 10 feet, unarmed)\n__Damage__  2d8 + 2 piercing plus jelly-blood"

  - name: "Jelly Blood"
    desc: " (disease) **Saving Throw** DC 22 Fortitude check\n\n**Stage 1** target gains resistance 5 to bleed damage (1 hour)\n\n**Stage 2** as stage 1 plus [[Conditions/Slowed|Slowed 1]] (1 day)\n\n**Stage 3** as stage 2 plus [[Conditions/Drained|Drained 1]] (1 day)\n\n**Stage 4** as stage 2 plus [[Conditions/Drained|Drained 2]] (1 day)\n\n**Stage 5** as stage 2 plus [[Conditions/Unconscious|Unconscious]] (1 hour)\n\n**Stage 6** dead"

  - name: "Tendril Feeding"
    desc: "`pf2:1`  **Requirements** The creeping clot has a creature [[Conditions/Grabbed|Grabbed]]\n* * *\n\n**Effect** The creeping clot burrows tendrils into the grabbed creature. The creature takes 2d8+2 piercing damage (DC 22 Fortitude check save) and is exposed to jelly blood."

  - name: "Tendril Storm"
    desc: "`pf2:3`  **Requirements** The creeping clot doesn't have clot armor\n* * *\n\n**Effect** The creeping clot extends dozens of whipping, slashing tendrils, attacking all creatures in reach. The clot makes a tendril Strike against each enemy within its tendril reach. Each attack counts toward the clot's multiple attack penalty, but the multiple attack penalty doesn't increase until after all the attacks."

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  **Requirements** The monster's last action was a successful Strike that lists Grab in its damage entry, or the monster has a creature [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]]\n* * *\n\n**Effect** If used after a Strike, the monster attempts to [[Actions/grapple|grapple]] the creature using the body part it attacked with. This attempt neither applies nor counts toward the creature's multiple attack penalty.\n\nThe monster can instead use Grab and choose one creature it's grabbing or restraining with an appendage that has Grab to automatically extend that condition to the end of the monster's next turn."
 
```

```encounter-table
name: Creeping Clot
creatures:
  - 1: Creeping Clot
```



The unsettling creeping clot appears like a disgusting mound of half- coagulated blood that seeps a constant red effluvium, which in turn is slurped up by the clot's slithering feelers before the stain can spread more than a few inches from its central mass. When it senses danger, a creeping clot can form a protective shell of hardened ooze that makes it look like an enormous scab.

It's a common misconception that a creeping clot feeds on blood. In fact, this crusty ooze absorbs minerals from flesh and blood alike by burrowing its tendrils into a creature, a process that creates painful—and sometimes fatal—blood clotting within the victim's body.

## Farming Clots

A creeping clot's toxin can be harvested as a useful (if risky) medicinal. A successful DC 22 Medicine check or DC 22 Survival check check and 10 minutes of work on a creeping clot that's been dead for no more than 1 hour produces 1 dose of creeping clot serum (2 doses on a critical success). A critical failure exposes the harvesting creature to the clot's jelly blood. A dose of creeping slot serum spoils after 24 hours. If a dose of creeping clot serum is used while [[Actions/Administer First Aid|Administering First Aid]] to stop bleeding, the Medicine check gains a +3 item bonus, but on a critical failure, the victim is exposed to jelly blood.
