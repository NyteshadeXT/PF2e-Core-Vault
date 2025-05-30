---
title: "Swarm Assassin"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.6DUwR7e4pgbsykQO" 
tags:
  - pf2e/creature/type/evil
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/lawful
  - pf2e/creature/type/shadow
  - pf2e/creature/type/swarm
  - pf2eMonster
  - pf2e/creature/level/3
statblock: inline
name: "Swarm Assassin"
level: 3
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/swarm_assassin.webp| ]]
source: "Battlezoo Bestiary"
name: "Swarm Assassin"
level: "Creature 3"

alignment: ""
size: "Medium"
trait_01: [[evil]]
trait_02: [[humanoid]]
trait_03: [[lawful]]
trait_04: [[shadow]]
trait_05: [[swarm]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; Greater Darkvision"
languages: "Shadowtongue"
skills:
  - name: "Skills"
    desc: "Acrobatics: +11, Athletics: +8, Stealth: +11"
abilityMods: [1, 4, 2, -1, 3, -4]
speed: 25 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__ +9, __Ref__ +11, __Will__ +8"
hp: 50
health:
  - name: ""
  - name: HP
    desc: "50; __Immunities__  grabbed,  precision,  prone,  restrained,  swarm mind; __Weaknesses__ area damage 5, splash damage 5; __Resistances__ bludgeoning 3, piercing 5, slashing 5"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Shortsword|Shortsword]], [[Equipment/Clothing (Ordinary)|Assassin's Clothes]]"
abilities_mid:
  - name: ""
  - name: "Reactive Sting"
    desc: "`pf2:r`  **Trigger** An adjacent creature hits the swarm assassin with a Strike;\n* * *\n\n**Effect** A swarm erupts from the impacted part of the swarm assassin and leaps out at the attacker. The triggering creature must succeed at a DC 17 Reflex save or be afflicted with shadow locust poison."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Shortsword"
    desc: "+10 (agile, finesse, versatile s)\n__Damage__  1d6 + 5 piercing"

  - name: "Discorporate"
    desc: "`pf2:3` (move) The swarm assassin dissolves its humanoid shape, becoming a shapeless swarm of locusts. Its equipment falls to the ground in its current space. In its discorporated form, the swarm assassin can squeeze through any space as wide as a locust. Its statistics change to those of a [[undefined]], but it retains its Intelligence and inflicts shadow locust poison instead of centipede swarm venom.\n\nIt cannot use any of its other abilities until it reincorporates itself by spending an action (this action has the move trait)."

  - name: "Poison Weapon"
    desc: "`pf2:1` (manipulate) The swarm assassin secretes its shadow locust poison onto its weapon."

  - name: "Shadow Locust Poison"
    desc: " (poison) **Saving Throw** DC 17 Fortitude;\n* * *\n\n**Maximum Duration** 6 rounds;\n\n**Stage 1** 1d6 poison damage (1 round);\n\n**Stage 2** 1d6 poison damage and [[Conditions/Drained|Drained 1]] (1 round);\n\n**Stage 3** 1d6 poison damage, drained 1, and [[Conditions/Blinded|Blinded]] (1 round)"
 
```

```encounter-table
name: Swarm Assassin
creatures:
  - 1: Swarm Assassin
```



Created by means of a powerful shadowy summoning ritual, a swarm assassin arrives on the Material Plane replete with an ominous black shortsword and billowing dark robes that obscure its features. Anyone unfortunate enough to catch a glimpse of the visage beneath the robes sees a swarming mass of insects where flesh should be. These insects are poisonous black locusts native to the Shadow Plane, bound together in humanoid shape with powerful unholy magic.

Once summoned, a swarm assassin awaits orders from its summoner and carries out its duties to the best of its ability. Swarm assassins remain on the Material Plane until their orders are completed or for one moon cycle, whichever comes first. Once back on the Shadow Plane, a swarm assassin discorporates into a humming mass of bugs that skitter to the plane's dark corners.

Evil wizards occasionally summon swarm assassins to serve as their bodyguards, but more often, vile clerics summon these fiendish servants to deal with heretics or enemies of their order. Swarm assassins excel at tracking down their targets and typically do so under cover of night. They avoid civilized areas, though their basic level of intellect allows them to interact with unsuspecting individuals when necessary. Roadside innkeepers whisper of the disturbing hum that emanates from such occasional cloaked guests, who pay for information and rumors with the distinct dragon-stamped coinage of the Shadow Plane.

A swarm assassin typically attacks its targets when they are alone or far from the nearest settlement. It launches its assault from dark corners or bushes, weakening foes with poison before slipping back into the shadows, spreading out as a bug swarm, then reincorporating at a different spot on the battlefield and attacking once more.

## Spectral Enemies

Attacks made against swarm assassins seem to pass through the creature ineffectively, leading many panicked adventurers to believe they are fighting a ghost or specter. Swarm assassins are all too happy to perpetuate such myths in order to mask their true nature and vulnerabilities.

## Monster Part Subsystem

**Swarm Assassin Creature 3**

**Monster Parts** 7/18/30 gp

**Eligible Refinements** armor (light), perception item, skill items (Acrobatics, Athletics, Stealth)

**Eligible Imbued Properties** dexterity, energy resistant (positive), evil, fortification, lawful, poison, sensory (greater darkvision), wild, wisdom
