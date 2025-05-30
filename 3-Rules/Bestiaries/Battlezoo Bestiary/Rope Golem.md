---
title: "Rope Golem"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.SWqweGmcYdWVt4MZ" 
tags:
  - pf2e/creature/type/construct
  - pf2e/creature/type/golem
  - pf2e/creature/type/mindless
  - pf2eMonster
  - pf2e/creature/level/6
statblock: inline
name: "Rope Golem"
level: 6
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/rope_golem.webp| ]]
source: "Battlezoo Bestiary"
name: "Rope Golem"
level: "Creature 6"
rare_03: [[Uncommon]]
alignment: ""
size: "Large"
trait_01: [[construct]]
trait_02: [[golem]]
trait_03: [[mindless]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; Darkvision"
languages: ""
skills:
  - name: "Skills"
    desc: "Athletics: +17"
abilityMods: [5, 4, 4, -5, 0, -5]
speed: 25 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__ +15, __Ref__ +16, __Will__ +10"
hp: 125
health:
  - name: ""
  - name: HP
    desc: "125; __Immunities__  bleed,  death effects,  disease,  doomed,  drained,  fatigued,  healing,  mental,  nonlethal attacks,  paralyzed,  poison,  sickened,  unconscious,  spirit,  vitality,  void; __Resistances__ physical 5 (except adamantine or slashing)"
abilities_top:
  - name: ""

  - name: "Impersonate Rope"
    desc: "  Over the course of a minute, a rope golem can unspool itself and collapse into an inconspicuous heap. In this guise, it has an automatic result of 22 on Deception checks and DCs to pass as a mundane pile of rope. The rope golem cannot use any of its abilities or attacks until it reconstructs itself by using a single action to Stand."

abilities_mid:
  - name: ""
  - name: "Tangle Up"
    desc: "`pf2:r`  **Trigger** An adjacent creature critically fails a melee attack roll against the rope golem;\n* * *\n\n**Effect** The triggering creature must attempt a DC 24 Reflex saving throw. On a failure, the rope golem tangles up the creature's appendage with its ropy body. The creature is [[Conditions/Grabbed|Grabbed]] and moves with the golem until it rolls a successful DC 22 check to Escape."

  - name: "Vulnerable to Grease"
    desc: "  Rope golems are affected by areas of the grease spell normally. A caster can target a rope golem with _[[Spells/Grease|Grease]]_ even though the golem is not an object. When a rope golem enters the area of a grease spell or is targeted by grease, any creatures [[Conditions/Grabbed|Grabbed]] by the golem can attempt an immediate check to Escape, and the golem cannot use its rope whip's Grab ability for the duration of the spell."

  - name: "[[Creature Family Ability Glossary/(Golem) Golem Antimagic|Golem Antimagic]]"
    desc: "  harmed by fire (4d6 damage, 2d6 damage from areas or persistent damage); healed by plant or water (area 2d6 Hit Points); slowed by acid\n* * *\n\nA golem is immune to spells and magical abilities other than its own, but each type of golem is affected by a few types of magic in special ways. These exceptions are listed in shortened form in the golem's stat block, with the full rules appearing here. If an entry lists multiple types (such as \"cold and water\"), either type of spell can affect the golem.\n\n*   **Harmed By** Any magic of this type that targets the golem causes it to take the listed amount of damage (this damage has no type) instead of the usual effect. If the golem starts its turn in an area of magic of this type or is affected by a persistent effect of the appropriate type, it takes the damage listed in the parenthetical.\n*   **Healed By** Any magic of this type that targets the golem makes the golem lose the slowed condition and gain HP equal to half the damage the spell would have dealt. If the golem starts its turn in an area of this type of magic, it gains the HP listed in the parenthetical.\n*   **Slowed By** Any magic of this type that targets the golem causes it to be [[Conditions/Slowed|Slowed 1]] for 2d6 rounds instead of the usual effect. If the golem starts its turn in an area of this type of magic, it's slowed 1 for that round.\n*   **Vulnerable To** Each golem is vulnerable to one or more specific spells, with the effects described in its stat block."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Fist"
    desc: "+17 (magical, reach 10 feet)\n__Damage__  2d8 + 8 bludgeoning"

  - name: "**Melee** `pf2:1` Rope Whip"
    desc: "+17 (magical, reach 20 feet)\n__Damage__  2d4 + 8 slashing plus grab"

  - name: "Strangle"
    desc: "`pf2:1`  **Requirements** The rope golem has a creature [[Conditions/Grabbed|Grabbed]];\n\n**Effect** The golem wraps one of its cords around the creature's throat, strangling it. A strangled creature can't speak or cast spells with a verbal component, and it must hold its breath to avoid suffocating."

  - name: "Toss Away"
    desc: "`pf2:2`  **Requirements** The rope golem has a creature [[Conditions/Grabbed|Grabbed]];\n\n**Effect** The rope golem forcefully tosses the creature up to 20 feet away in a direction of its choice. The thrown creature lands [[Conditions/Prone|Prone]] and takes 4d8 bludgeoning damage."

  - name: "[[Bestiary Ability Glossary/Constrict|Constrict]]"
    desc: "`pf2:1`  1d8 + 8 damage, DC 23 basic fortitude save\n\n* * *\n"

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  "
 
```

```encounter-table
name: Rope Golem
creatures:
  - 1: Rope Golem
```



Rope golems are made from hundreds of feet of knotted cotton, hemp, or silk rope twisted and coiled into a roughly humanoid shape. Spellcasting sailors or marina-frequenting wizards often create rope golems to guard their cargo holds, warehouses, and docks from pirates or thieves. As long as it remains still, a rope golem can easily pass for a mundane pile of ropes; the golem is typically instructed to wait in this guise until it can get the jump on intruders.

Even after it has pounced, a rope golem moves with eerie agility and deftness. It can silently strangle multiple opponents to death, one by one, before a group of raiders has discovered the monster for what it is. Rope golems instructed to take a nonlethal approach can readily bind and gag multiple opponents, restraining them until the town guard arrives on the scene.

## Variant Rope Golems

Rope golems can come in many different forms depending on their intended use and the materials used to construct them. Some might wield anchors, hooks, or fishing nets as weapons, while rope golems made from rare magical fibers can withstand brutal attacks and even fire.

## Monster Part Subsystem

**Rope Golem Creature 6**

**Monster Parts** 30/65/125 gp

**Eligible Refinements** weapons (bludgeoning, slashing), armor (light), shield, perception item, skill items (Athletics)

**Eligible Imbued Properties** bane, constitution, dexterity, energy resistant (negative, positive), sensory (darkvision), strength, sturdy, wild
