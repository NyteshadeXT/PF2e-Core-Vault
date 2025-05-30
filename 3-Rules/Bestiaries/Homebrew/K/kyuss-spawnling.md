---
title: "Kyuss Spawnling"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Kyuss Spawnling"
tags:
  - pf2e/creature/type/undead
  - pf2e/creature/type/aquatic
  - pf2eMonster
  - pf2e/creature/level/1
statblock: inline
name: "Kyuss Spawnling"
level: 1
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Conversion"
token: "![[Kyuss Spawnling.png]]"
name: "Kyuss Spawnling"
level: "Creature 1"
rare_03: Uncommon
alignment: ""
size: "tiny"
trait_01: undead
trait_02: aquatic
trait_03: mindless
modifier: 5
perception:
  - name: "Perception"
    desc: "+4; darkvision, scent (imprecise) 30 feet"
languages: "—"
skills:
  - name: "Skills"
    desc: "Athletics +6, Stealth +8, Swim +8"
abilityMods: [-3, 4, 0, -4, 1, 2]
speed: swim 40 feet
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +4, __Ref__ +6, __Will__ +4"
hp: 9
health:
  - name: HP
    desc: "9; fast healing 3; __Weaknesses__ area healing 5, [[Cleanse Affliction]] (instantly destroyed)"

abilities_top:
  - name: ""

abilities_mid:
  - name: "Kyuss Spawnling Venom"
    desc: "`pf2:1` (__poison__, __injury__) DC 10 Fortitude save __Stage 1 (1 round)__: [[Drained 1]], [[Sickened 1]]  __Stage 2 (1 round)__: [[Drained 2]], [[Sickened 2]]  __Stage 3__: Unconscious for 1 minute if reduced to 0 HP from Drained"

  - name: "Create Spawn"
    desc: "`pf2:2` **Requirements**: A fresh humanoid corpse is adjacent. **Effect**: The Kyuss spawnling infests the body with worms. After 1d6+4 rounds, the corpse rises as a [[Spawn of Kyuss]] (uncontrolled, GM discretion)."

  - name: "Vulnerability to [[Cleanse Affliction]]"
    desc: "If the Kyuss spawnling is affected by [[Cleanse Affliction]] or similar effects, it is instantly destroyed, even though it's undead."

attacks:
  - name: "Melee"
    desc: "`pf2:1` Bite +6 (agile, finesse, magical) __Damage__ 1d3–3 piercing plus Kyuss Spawnling Venom"

sourcebook: "_Dungeon Magazine Issue 126, pg. 38_"

```
