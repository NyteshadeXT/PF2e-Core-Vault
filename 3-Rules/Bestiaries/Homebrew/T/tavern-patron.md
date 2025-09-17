---
noteType: pf2eMonster
aliases: "Tavern Patron"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/plant
  - pf2e/creature/level/human
statblock: inline
name: "Tavern Patron"
level: 2
---


```statblock
columns: 2
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Tavern Patron"
level: "Creature 2"
alignment: "NG"
size: "Medium"
trait_01: "Humanoid"
trait_02: "Human"
modifier: 6
perception:
  - name: "Perception"
    desc: "+6"
languages: "Common"
skills:
  - name: "Skills"
    desc: "__Athletics__ +7, __Deception__ +5, __Intimidation__ +5, __Society__ +4, __Stealth__ +4, __Crafting__ (any one trade) +6"
abilityMods: [2, 0, 1, 0, -1, 0]

abilities_mid:
  - name: "Barroom Brawler"
    desc: "When the patron uses an improvised weapon (mugs, chairs, bottles), it counts as a simple club for damage (GM chooses bludgeoning or slashing) and gains the [[nonlethal]] trait."
  - name: "Strength in Numbers"
    desc: "The patron’s Strikes gain a +1 status bonus to attack rolls against a creature that’s adjacent to at least one of the patron’s allies."
abilities_bot:
  - name: "Two-Fisted Swing"
    desc: "⬺  The patron makes a melee Strike. If it hits, add `dice: 1d6` 1d6 bludgeoning damage. If two or more of the patron’s allies are adjacent to the target, the target must succeed at a DC 18 Fortitude save or be [[sickened|sickened 1]] (from a gut-punch or nasty body blow)."
  - name: "Duck Behind a Table"
    desc: "⬲  **Trigger** The patron is targeted by a ranged Strike. **Effect** The patron gains a +2 circumstance bonus to AC against the triggering Strike (toppling a chair or turning a table sideways)."

speed: 25 feet

ac: 18
armorclass:
  - name: "AC"
    desc: "18; __Fort__ +8, __Ref__ +6, __Will__ +5"

hp: 32
health:
  - name: "HP"
    desc: "32"

attacks:
  - name: "Melee • Club or Chair"
    desc: "⬻ +10; __Damage__ `dice: 1d6+2` 1d6+2 bludgeoning ([[nonlethal]]; counts as improvised unless otherwise noted)"
  - name: "Melee • Knife"
    desc: "⬻ +10 ([[agile]], [[finesse]]); __Damage__ `dice: 1d4+2` 1d4+2 piercing"
  - name: "Ranged • Bottle"
    desc: "⬻ +8 (range increment 20 feet); __Damage__ `dice: 1d6+1` 1d6+1 bludgeoning ([[nonlethal]]). On a critical hit, shattered glass leaves the target [[clumsy|clumsy 1]] until the end of its next turn."

sourcebook: "Custom"

```