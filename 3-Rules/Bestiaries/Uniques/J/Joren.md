---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Joren"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/9
statblock: inline
name: "Joren"
level: 9
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew Conversion"
name: "Joren"
level: "Creature 9"
rare_01: "Unique"
size: "Medium"
trait_01: "Human"
trait_02: "Humanoid"
modifier: 19

perception:
  - name: "Perception"
    desc: "Perception +19;"

languages: "Common, Druidic, Gnoll"

skills:
  - name: "Skills"
    desc: "__Athletics__ +21; __Intimidation__ +17; __Nature__ +19; __Survival__ +20; __Medicine__ +18"

abilityMods: [4, 2, 4, 1, 4, -1]

abilities_top:
  - name: "Items"
    desc: "[[Weapon Potency (+1)|+1]] [[Spear]], [[Sling]], [[Sling Bullets]] x20, [[armor-potency-1|+1]] [[Hide Armor]], [[Wooden Shield]], [[Summon Animal|Scroll of Summon Animal]], coin pouch (18 gp)"

speed: 40 feet

ac: 27
armorclass:
  - name: "AC"
    desc: "27; __Fort__ +21, __Ref__ +17, __Will__ +19"

hp: 170
health:
  - name: "HP"
    desc: "170;"

attacks:
  - name: "Melee-Spear"
    desc: "`pf2:1` +1 Spear +22 (magical, reach); __Damage__ `dice: 2d8+10` 2d8+10 piercing"

  - name: "Ranged-Sling"
    desc: "`pf2:1` +1 Sling +19 (propulsive, range increment 50 feet); __Damage__ `dice: 2d6+6` 2d6+6 bludgeoning"

  - name: "Melee-Bite"
    desc: "`pf2:1` Bite +22 (reach 10 ft.); __Damage__ `dice: 2d10+10` 2d10+10 piercing plus grab"

  - name: "Melee-Tail"
    desc: "`pf2:1` Tail +22 (reach 10 ft.); __Damage__ `dice: 2d8+10` 2d8+10 bludgeoning"

  - name: "Melee-Scriminaduro Bite"
    desc: "`pf2:1` Bite +19; __Damage__ `dice: 2d10+6` 2d10+6 piercing"

  - name: "Melee-Scriminaduro Claw"
    desc: "`pf2:1` Claw +19; __Damage__ `dice: 2d8+6` 2d8+6 slashing"

abilities_mid:
  - name: "Uncanny Dodge"
    desc: "Joren isn’t off-guard to creatures that are hidden from him."

  - name: "Woodland Stride"
    desc: "Joren ignores difficult terrain caused by undergrowth and natural foliage."

  - name: "Companion Bond"
    desc: "Joren fights alongside his animal companion, Scriminaduro. Scriminaduro occupies Joren's space or an adjacent space and moves with Joren unless otherwise noted. Scriminaduro can't be targeted separately, but if Joren takes 30 or more damage from a single attack or effect, Scriminaduro is driven back and Joren can't use Scriminaduro's Assault or Scriminaduro Intervenes until the start of Joren's next turn."

abilities_bot:
  - name: "Rage"
    desc: "⬻  Joren flies into a rage for 1 minute. He gains +2 damage with melee Strikes and 20 temporary Hit Points. He takes a –1 penalty to AC while raging."

  - name: "Power Attack"
    desc: "⬺  Joren makes a melee Strike that deals an additional weapon damage die."

  - name: "Wild Shape — Raging Crocodile"
    desc: "⬺  **Primal, Polymorph** Joren transforms into a massive crocodile for 1 minute. While in this form he gains the following statistics:\n\nSpeed 30 ft., swim 30 ft.\nAC 29\nMelee and Tail attacks (See above)\nWhile raging in this form, Joren gains +4 damage to his Strikes."
   
  - name: "Scriminaduro's Assault"
    desc: "`pf2:2`  Joren commands Scriminaduro to attack. Scriminaduro makes either a claw Strike or bite Strike against a creature within 10 feet of Joren. If Joren is raging, the Strike deals 2 additional damage."

  - name: "Scriminaduro Intervenes"
    desc: "`pf2:r`  **Trigger** A creature within 10 feet of Joren damages him. **Effect** Scriminaduro makes a bite Strike against the triggering creature. If the Strike hits, the creature takes a -10-foot circumstance penalty to its Speeds until the end of its next turn."

  - name: "Badger Rage"
    desc: "The first time Joren becomes raging in an encounter, Scriminaduro also becomes frenzied for 1 minute. While frenzied, Scriminaduro's Strikes deal 2 additional damage."

spellcasting:
  - name: "Primal Prepared Spells (DC 27, attack +19)"
    desc: "**3rd** (2 slots) [[Heal]], [[Haste]]\n**2nd** (3 slots) [[Oaken Resilience]], [[Enlarge]], [[Resist Energy]]\n**1st** (3 slots) [[Fleet Step]], [[Produce Flame]], [[Speak with Animals]]\n**Cantrips (5th)** [[Guidance]], [[3-Rules/Character Building/Spells/L/Light|Light]]"

sourcebook: "Homebrew"
```
