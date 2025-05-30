---
title: "Time Golem"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-su-pf2e.pf2e-battlezoo-su-actors.Actor.C02Lc4U6hCgFmoPp" 
tags:
  - pf2e/creature/type/construct
  - pf2e/creature/type/golem
  - pf2e/creature/type/incorporeal
  - pf2e/creature/type/mindless
  - pf2e/creature/type/time
  - pf2eMonster
  - pf2e/creature/level/21
statblock: inline
name: "Time Golem"
level: 21
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-su-pf2e/art/Portraits/time-golem.webp| ]]
source: "Battlezoo Bestiary: Strange and Unusual"
name: "Time Golem"
level: "Creature 21"
rare_03: [[Rare]]
alignment: ""
size: "tiny"
trait_01: [[construct]]
trait_02: [[golem]]
trait_03: [[incorporeal]]
trait_04: [[mindless]]
trait_05: [[time]]
modifier: 34
perception:
  - name: "Perception"
    desc: "+34; Greater Darkvision"
languages: ""
skills:
  - name: "Skills"
    desc: "Acrobatics: +43"
abilityMods: [6, 10, 7, -5, 5, -5]
speed:  fly 120 feet
sourcebook: "_Battlezoo Bestiary: Strange and Unusual_"
ac: 49
armorclass:
  - name: AC
    desc: "49; __Fort__ +34, __Ref__ +41, __Will__ +32"
hp: 270
health:
  - name: ""
  - name: HP
    desc: "270; __Immunities__  magic,  bleed,  death effects,  disease,  doomed,  drained,  fatigued,  healing,  nonlethal attacks,  paralyzed,  poison,  sickened,  spirit,  unconscious,  vitality,  void,  mental; __Resistances__ all damage 20 (except orichalcum; double resistance vs. non-magical)"
abilities_top:
  - name: ""

  - name: "Unaffected by Gravity"
    desc: "  The time golem is not affected by gravity in the Material Plane. It does not need to Fly to hover in place, and it does not fall. This ability might be suppressed in other planes, at the GM's discretion."

abilities_mid:
  - name: ""
  - name: "[[Creature Family Ability Glossary/(Golem) Golem Antimagic|Golem Antimagic]]"
    desc: "  harmed by electricity (11d8 damage, 3d8 damage from areas or persistent damage); healed by force (area 3d8 Hit Points); slowed by _[[Spells/Freeze Time|Time Stop]]_\n* * *\n\nA golem is immune to spells and magical abilities other than its own, but each type of golem is affected by a few types of magic in special ways. These exceptions are listed in shortened form in the golem's stat block, with the full rules appearing here. If an entry lists multiple types (such as \"cold and water\"), either type of spell can affect the golem.\n\n*   **Harmed By** Any magic of this type that targets the golem causes it to take the listed amount of damage (this damage has no type) instead of the usual effect. If the golem starts its turn in an area of magic of this type or is affected by a persistent effect of the appropriate type, it takes the damage listed in the parenthetical.\n*   **Healed By** Any magic of this type that targets the golem makes the golem lose the slowed condition and gain HP equal to half the damage the spell would have dealt. If the golem starts its turn in an area of this type of magic, it gains the HP listed in the parenthetical.\n*   **Slowed By** Any magic of this type that targets the golem causes it to be [[Conditions/Slowed|Slowed 1]] for 2d6 rounds instead of the usual effect. If the golem starts its turn in an area of this type of magic, it's slowed 1 for that round.\n*   **Vulnerable To** Each golem is vulnerable to one or more specific spells, with the effects described in its stat block."

  - name: "Timelike"
    desc: " (occult) A time golem inherently defends the time stream from any nearby interference with the flow of time and hijacks temporal magic. If a creature within the golem's time vortex casts _[[Spells/Freeze Time|Time Stop]]_, the golem enters the stoppage along with the caster and can also use 6 actions in 3 sets of 2 actions each, following initiative order, and it can both affect and be affected by the triggering creature. After the flow of time is restored, the golem becomes [[undefined]], [[undefined]] and [[undefined]] for 1 round."

  - name: "Time Vortex"
    desc: " (aura,occult) 120 feet. Time warps and bends around the time golem. As long as the time vortex is active, the golem is [[undefined]]. It can only use its extra action for Fly or Strike actions. Foes who start their turn within the aura must succeed at a DC 41 Fortitude check save or be [[undefined]] ([[undefined]] on a critical failure) for 1 minute. The golem can activate or deactivate this aura using a single action with the concentrate trait."

  - name: "Vulnerable to Slow"
    desc: "  A time golem targeted by slow takes 3d6 damage per spell level, with a basic Fortitude save against the caster's spell DC. On a failure, the golem's time vortex is suppressed for 1d4 rounds."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Fourth Dimensional Face"
    desc: "+41 (reach 100 feet)\n__Damage__  4d8 + 14 force plus shorten-timeline"

  - name: "Shorten Timeline"
    desc: " (death,occult) The first time each round a creature takes damage from the time golem's fourth dimensional face Strike, the target must attempt a DC 41 Fortitude check save. If it fails, it becomes [[undefined]] ([[undefined]] on a critical failure), or increases its doomed condition by 1 if it was already doomed (or by 2 on a critical failure) to a maximum of [[undefined]]. If this would have otherwise increased the creature's doomed condition beyond doomed 3, the creature takes 10d8 additional force damage from the Strike (doubled on a critical failure)."

  - name: "Temporal Barrage"
    desc: "`pf2:2`  The time golem makes a fourth dimensional face Strike against each creature within its reach. Each Strike counts separately for the golem's multiple attack penalty, but the penalty only increases after resolving all the attacks."

  - name: "Time Prison"
    desc: "`pf2:2` (extradimensional,occult) **Requirements** The golem has no more than two creatures imprisoned in its Time Prison\n* * *\n\n**Effect** Twisting time into a liminal void, the time golem attempts to trap a creature within 60 feet inside the timeless abyss within itself. The target must attempt a DC 44 Reflex check save or be [[undefined]] and drawn into the void within the golem for 1d4 rounds. The space within the golem seems boundless to its target, regardless of the target's size. While trapped, the creature can't sense, target or be targeted by creatures outside the golem's extradimensional interior. Aside from that limitation and its stunned condition, it can otherwise act normally."
 
```

```encounter-table
name: Time Golem
creatures:
  - 1: Time Golem
```



Intricate constructs worked from the immaterial threads of time itself, time golems serve as guardians of the temples and vaults of their nameless eldritch creators. A time golem is a formable opponent who can erase opponents from existence.

## Untimely Demise

Time itself unravels with a time golem's defeat, sending ripples that manifest as future anomalies. Someone who slays a time golem may encounter a weak but still hostile version of it at an inopportune time down the road.

## Suggested Monster Parts

**Monster Parts** 10,000/24,000/45,000 gp

**Eligible Refinements** perception item, skill items (Acrobatics)

**Eligible Imbued Properties** bane, constitution, dexterity, elongating, energy resistant (positive, negative), force, mirrored, sturdy, wild, winged
