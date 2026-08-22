---
title: "Ilthane the Black"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Elite Horned Dragon (Adult)" 
tags:
  - pf2e/creature/type/amphibious
  - pf2e/creature/type/dragon
  - pf2e/creature/type/primal
  - pf2eMonster
  - pf2e/creature/level/13
  - remaster
statblock: inline
name: "Ilthane the Black"
level: 13
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/pf2e-tokens-monster-core/assets/portraits/dragon-horned-adult.webp| ]]
source: "Pathfinder Monster Core"
name: "Ilthane the Black"
level: "Creature 13"

alignment: ""
size: "huge"
trait_01: [[amphibious]]
trait_02: [[dragon]]
trait_03: [[primal]]
modifier: 22
perception:
  - name: "Perception"
    desc: "+24; Darkvision, Scent (Imprecise) 60 Feet"
languages: "Common, Draconic, Elven, Fey"
skills:
  - name: "Skills"
    desc: "Acrobatics: +21, Arcana: +24, Athletics: +26, Deception: +21, Diplomacy: +25, Intimidation: +25, Nature: +22, Occultism: +26, Society: +24, Stealth: +23, Forest Lore: +24"
abilityMods: [6, 3, 3, 4, 4, 5]
speed: 40 feet,  fly 160 feet,  swim 40 feet
sourcebook: "_Pathfinder Monster Core_"
ac: 36
armorclass:
  - name: AC
    desc: "36; __Fort__ +22, __Ref__ +24, __Will__ +25; +1 status to all saves vs. magic"
hp: 235
health:
  - name: ""
  - name: HP
    desc: "235; __Immunities__  paralyzed,  poison,  sleep"
abilities_top:
  - name: ""

abilities_mid:
  - name: "Frightful Presence"
    desc: " (aura,emotion,fear,mental) 90 feet DC 33 Will check\n\nA creature that first enters the area must attempt a Will save.\n\nRegardless of the result of the saving throw, the creature is temporarily immune to this monster's Frightful Presence for 1 minute.\n* * *\n\n**Critical Success** The creature is unaffected by the presence.\n**Success** The creature is [[Conditions/Frightened|Frightened 1]].\n**Failure** The creature is [[Conditions/Frightened|Frightened 2]].\n**Critical Failure** The creature is [[Conditions/Frightened|Frightened 4]]."

  - name: "Twisting Tail"
    desc: "`pf2:r`  **Trigger** A creature within reach of the dragon's tail uses a move action or leaves a square during a move action it's using\n\n\n**Effect** The dragon makes a tail Strike at the creature with a –2 penalty. If the Strike hits, the dragon disrupts the creature's action."

attacks:
  - name: "**Melee** `pf2:1` Jaws"
    desc: "+26 (magical, acid, reach 15 feet, unarmed)\n__Damage__  3d10 + 14 piercing 3d4 acid"

  - name: "**Melee** `pf2:1` Claw"
    desc: "+26 (agile, magical, reach 10 feet, unarmed)\n__Damage__  3d8 + 14 slashing"

  - name: "**Melee** `pf2:1` Tail"
    desc: "+24 (magical, reach 20 feet)\n__Damage__  3d8 + 12 bludgeoning"

  - name: "**Melee** `pf2:1` Horn"
    desc: "+24 (magical, reach 15 feet, unarmed)\n__Damage__  2d8 + 12 piercing"

  - name: "Primal Innate Spells"
    desc: " DC 34, attack +26; __4th __  _[[Spells/Suggestion|Suggestion]]_; __2nd __  _[[Spells/Charm|Charm (At Will)]]_, _[[Spells/Entangling Flora|Entangling Flora (x2)]]_"

  - name: "Draconic Frenzy"
    desc: "`pf2:2` The dragon makes two claw Strikes and one horn Strike in any order."

  - name: "Draconic Momentum"
    desc: "  The dragon recharges their Poison Breath whenever they score a critical hit with a Strike."

  - name: "Forest Passage"
    desc: "The horned dragon ignores any difficult terrain caused by mud, shallow water, vegetation and bogs. Even plants manipulated by magic don't impede their progress."

  - name: "Flayby Assault"
    desc: "`pf2:2`  Ilthane Flies up to her fly Speed and makes one jaws, claw, or tail [[Strike]] at any point during this movement. This movement doesn't trigger reactions from the creature she attacks."

  - name: "Toxic Acid Breath"
    desc: "`pf2:2` (acid,poison,primal) Ilthane breathes an 80-foot line of acid dealing that deals 13d6 + 2 acid damage (DC 33 Reflex check save). A creature damaged by the acid must attempt a Fortitude save (DC 33) against Ilthane's toxin.\n\nThey can't use Toxic Acid Breath again for 1d4 rounds."

  - name: "Trackless Journey"
    desc: "  The horned dragon always gains the benefits of Cover Tracks in natural surroundings, even while moving at full speed."
 
```


```encounter-table
name: Elite Horned Dragon (Adult)
creatures:
  - 1: Elite Horned Dragon (Adult)
```



The magic that flows through primal dragons can manifest more animalistic or bestial features in a given type of dragon. Notably among these are the massive paired horns of the horned dragon. While their bulky frames, natural coloration, and prominent ridged scales are all remarkable in their own way, it's the horns that are most obvious and striking at first glance. Horned dragons use their horns to impale their prey in a quick and brutal display of their might. They are generally contemplative and have a fixation on knowledge and self-discipline, traits belied by their bestial appearance. As a result, horned dragons are generally more open to speaking with outsiders.

* * *

Dragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.
