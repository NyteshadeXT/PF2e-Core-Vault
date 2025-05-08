---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Spawn of Kyuss"
tags: 
  - pf2e/creature/type/undead
  - pf2e/creature/level/7
statblock: inline
name: "Spawn of Kyuss"
level: 7
---

```statblock
layout: Basic Pathfinder 2e Layout
source: Custom
sourcebook: Conversion - D&D 3.5e

name: Spawn of Kyuss
level: Creature 7
token: [[spawn-of-kyuss.png]]

size: "Medium"
trait_01: [[Undead]]
trait_02: [[Mindless]]
trait_03: [[Evil]]

modifier: 12
senses: [[Darkvision]] 60 feet
languages: Common (understands, but cannot speak)
skills:
  - Athletics: +16
  - Stealth: +10
  - Perception: +12
attributes:
  - str: 5
  - dex: -1
  - con: —
  - int: -2
  - wis: 0
  - cha: 3
speed: 30 feet

ac: 23
saves:
  - fort: +13
  - ref: +9
  - will: +11

hp: 110
health:
  - name: HP
    desc: "110, fast healing 8; __immunities__ [[death|Death Effects]], [[Disease]], [[Paralyzed]], [[Poison]], [[Sleep]] __weaknesses__ Curative Transformation: [[Cleanse Affliction]] transforms the spawn into a mindless [[3-Rules/Bestiaries/Monster Core/Zombie Brute|Zombie Brute]]"

attacks:
  - name: ___Melee___ ⬻ slam
    desc: "([[Magical]]) +17; `dice: 2d6+9` 2d6+9 bludgeoning plus Kyuss' Gift"

  - name: ___Ranged___ ⬻ worm toss
    desc: "([[Agile]], [[range-increment|Range Increment 10ft]]) +10; Worm attaches on hit (see Create Spawn)"

abilities_mid:
  - name: Fear Aura
    desc: >
      ([[Aura]], [[Emotion]], [[Fear]], [[Mental]]) 60 feet, DC 24 Will save.  
      A creature that fails becomes [[Frightened]] 3 and [[Fleeing]] for 1 round. On success the creature becomes [[Frightened]] 1. Regardless of success or failure, it is immune to this aura for 24 hours after exposure to it.

abilities_bot:
  - name: Create Spawn ⬻
    desc: >
      When the spawn hits with a slam or worm toss, a worm burrows into the target.  
      The worm deals `dice: 1d4` 1d4 persistent mental damage each round as it seeks the brain.
      While infected you are [[Off-Guard]] and [[Clumsy 1]].  
      After `dice: 1d4+1` 1d4+1 rounds, the creature must succeed at a DC 24 Fortitude save or become [[Confused]] for 1 minute.  
      A second failure while confused results in instant death, and the creature rises as a new Spawn of Kyuss in `dice: 1d4` 1d4 rounds unless the body is destroyed.  
      **Countermeasures:** A successful DC 20 [[Skills#Medicine|Medicine]] check can extract the worm. [[Cleanse Affliction]] destroys all worms in the host.  
      **Worm Defense:** A creature that hits the spawn with unarmed or natural attacks is exposed to 1d4 worms as above.

  - name: Worm Explosion
    desc: >
      **Trigger**: The spawn is reduced to 0 HP 
      **Effect**: `dice: 1d4+1` 1d4+1 Kyuss worms erupt in a 10-foot burst. Each adjacent creature must succeed at a DC 22 Reflex save or have a worm latch on. Creatures with natural armor +3 or less are automatically affected.

  - name: Kyuss’ Gift
    desc: >
      ([[Disease]], [[Divine]])  
      **Saving Throw** DC 23 Fortitude; **Onset** 1 day; **Stage 1** carrier with no symptoms (1 day),  
      **Stage 2** 2d6 necrotic damage and the target becomes [[Drained 2]] and [[Confused]] for 1 day,  
      **Stage 3** 3d6 necrotic damage. The target is [[Drained 3]] and [[Confused]] until cured or dies.  
      **Special:** Healing magic only restores half HP while afflicted. [[Cleanse Affliction]] cures the condition fully.

