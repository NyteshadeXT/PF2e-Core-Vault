---
noteType: pf2eMonster
aliases: ["Bodyguard"]
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/human
  - pf2e/creature/level/8
statblock: inline
name: "Bodyguard"
level: 8
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "NPC Core"
name: "Bodyguard lvl8"
level: "Creature 8"
rare_03: ""
alignment: ""
size: "Medium"
trait_01: "[[Human]]"
trait_02: "[[Humanoid]]"
modifier: 15
perception:
  - name: "Perception"
    desc: "Perception +15;"
languages: "Common"
skills:
  - name: "Skills"
    desc: "__Athletics__: +17 (1d20+17); __Intimidation__: +14 (1d20+14); __Society__: +10 (1d20+10);"
abilityMods: [5, 2, 4, -1, 1, 0]

abilities_mid:
  - name: "Bodyguard's Reprisal"
    desc: "⬲ **Trigger** A creature attacks the subject of bodyguard's defense; **Effect** The bodyguard makes a [[Strike]] against the triggering creature."
  - name: "Bodyguard's Defense"
    desc: "⬻ The bodyguard grants an adjacent ally a +2 circumstance bonus to AC. This lasts until the start of the bodyguard's next turn or until the ally is no longer adjacent, whichever comes first."
abilities_bot:
  - name: ""
    desc: ""
  - name: ""
    desc: ""
  - name: ""
    desc: ""
  - name: ""
    desc: ""

speed: 25 feet

ac: 26
armorclass:
  - name: "AC"
    desc: "26; __Fort__ +17, __Ref__ +14, __Will__ +11"
hp: 125
health:
  - name: "HP"
    desc: "125"

attacks:
  - name: Melee
    desc: "⬻ greataxe +17 ([[sweep]]); __Damage__ 1d12+9 (1d12+9) slashing"
  - name: Melee
    desc: "⬻ fist +17 ([[agile]], [[nonlethal]], [[unarmed]]); __Damage__ 1d4+9 (1d4+9) bludgeoning"

sourcebook: "Altered from Bodyguard, _NPC Core_ pg. 82."