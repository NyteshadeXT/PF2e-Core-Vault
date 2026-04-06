---
noteType: pf2eMonster
aliases: ["Ghast"]
tags:
  - pf2e/creature/type/undead
  - pf2e/creature/type/ghoul
  - pf2e/creature/level/5
statblock: inline
name: "Ghast"
level: 5
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Bestiary"
name: "Ghast lvl5"
level: "Creature 5"
rare_03: ""
alignment: ""
size: "Medium"
trait_01: "Undead"
trait_02: "Ghoul"
modifier: 13
perception:
  - name: "Perception"
    desc: "Perception +13; __darkvision__"
languages: "Common"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +12 (1d20+12); __Athletics__: +13 (1d20+13); __Stealth__: +12 (1d20+12)"
abilityMods: [4, 3, 3, -1, 2, 2]

abilities_mid:
  - name: "Stench"
    desc: "([[aura]], [[olfactory]]); 10 feet. A creature entering the aura must succeed at a DC 21 Fortitude save or become [[sickened|sickened 1]] (plus [[slowed|slowed 1]] for 1 round on a critical failure). While within the aura, affected creatures take a –2 circumstance penalty to saves to recover from being sickened."
  - name: "Paralysis"
    desc: "([[incapacitation]], [[necromancy]]); A living creature hit by the ghast’s jaws must succeed at a DC 21 Fortitude save or be [[paralyzed]] for 1 round (1 minute on a critical failure). The creature is then temporarily immune for 1 minute."
abilities_bot:
  - name: "Consume Flesh"
    desc: "⬻ The ghast gnaws on a corpse, regaining 3d6 (3d6) Hit Points. If the corpse is fresh (killed within the last hour), the ghast regains 6d6 (6d6) Hit Points instead."
  - name: ""
    desc: ""
  - name: ""
    desc: ""
  - name: ""
    desc: ""

speed: 30 feet

ac: 22
armorclass:
  - name: "AC"
    desc: "22; __Fort__ +14, __Ref__ +12, __Will__ +11"
hp: 95
health:
  - name: "HP"
    desc: "95; __Immunities__ [[death effects]], [[disease]], [[paralyzed]], [[poison]], [[sleep]]"

attacks:
  - name: Melee
    desc: "⬻ jaws +15 ([[finesse]]); __Damage__ 2d8+6 (2d8+6) piercing plus paralysis"
  - name: Melee
    desc: "⬻ claw +15 ([[agile]], [[finesse]]); __Damage__ 2d6+6 (2d6+6) slashing"
  - name: ""
    desc: ""
  - name: ""
    desc: ""

sourcebook: "Altered from Ghast, _Bestiary_."