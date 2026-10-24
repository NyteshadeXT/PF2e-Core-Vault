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
token: [[modules/pf2e-tokens-monster-core/assets/portraits/dragon-horned-adult.webp]]
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

  - name: "Tail Lash"
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

  - name: "Flyby Assault"
    desc: "`pf2:2`  Ilthane Flies up to her fly Speed and makes one jaws, claw, or tail [[Strike]] at any point during this movement. This movement doesn't trigger reactions from the creature she attacks."

  - name: "Toxic Acid Breath"
    desc: "`pf2:2` (acid,poison,primal) Ilthane breathes an 80-foot line of acid dealing that deals 13d6 + 2 acid damage (DC 33 Reflex check save).\n\nThey can't use Toxic Acid Breath again for 1d4 rounds."

  - name: "Trackless Journey"
    desc: "Ilthane the Black always gains the benefits of Cover Tracks in natural surroundings, even while moving at full speed."
 
```


```encounter-table
name: Ilthane the Black
creatures:
  - 1: Ilthane the Black
```
