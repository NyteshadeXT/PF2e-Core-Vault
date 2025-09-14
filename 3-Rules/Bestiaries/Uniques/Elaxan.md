---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Elaxan"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/shapechanger
  - pf2e/creature/level/8
statblock: inline
name: "Elaxan"
level: 8
---

```statblock
columns: 2
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Elaxan"
level: "Creature 8"
rare_01: "Uncommon"
alignment: "Neutral"
size: "Medium"
trait_01: "Humanoid"
trait_02: "Shapechanger"
trait_03: "Fighter"
trait_04: "Rogue"
modifier: 18
perception:
  - name: "Perception"
    desc: "+18; __darkvision__"
languages: "Common, Elven; communicates surface thoughts with [[detect thoughts]]"
skills:
  - name: "Skills"
    desc: "__Acrobatics__ +19, __Athletics__ +18, __Deception__ +22, __Diplomacy__ +18, __Intimidation__ +17, __Society__ +16, __Stealth__ +19, __Thievery__ +18"
abilityMods: [4, 5, 3, 2, 2, 3]

abilities_mid:
  - name: "Change Shape"
    desc: "⬻ ([[arcane]], [[concentrate]], [[polymorph]], [[transmutation]]); Elaxan takes the form of any Medium humanoid he has seen, including clothing and gear. This doesn’t change statistics. DC 29 Perception check to disbelieve."
  - name: "Sneak Attack"
    desc: "Elaxan deals 2d6 extra precision damage to [[flat-footed]] creatures."
  - name: "Trapfinding"
    desc: "Elaxan has a +2 circumstance bonus to checks to find traps and can disable traps with DCs up to 34."
  - name: "Detect Thoughts"
    desc: "⬽ ([[divination]], [[mental]], [[occult]]); DC 27 Will. Elaxan reads surface thoughts within 30 feet, gaining a +2 circumstance bonus to Deception and Diplomacy against those creatures."

abilities_bot:
  - name: "Evasion"
    desc: "On a successful Reflex save, Elaxan takes no damage instead of half."
  - name: "Attack of Opportunity"
    desc: "⬲  Elaxan can make an Attack of Opportunity with his shortsword."
  - name: "Power Attack"
    desc: "⬺  Elaxan makes a powerful swing with his shortsword. Make a Strike. This counts as two attacks when calculating his multiple attack penalty. If this Strike hits, it deals an extra die of weapon damage."
  - name: "Spring Attack"
    desc: "⬺  Elaxan Strides up to his Speed and makes one Strike at any point during the movement. This movement doesn’t trigger reactions from the target of the Strike."

speed: 30 feet

ac: 27
armorclass:
  - name: AC
    desc: "27 (studded leather); __Fort__ +17, __Ref__ +19, __Will__ +15; evasion"

hp: 135
health:
  - name: HP
    desc: "135; __Immunities__ sleep, charm"

attacks:
  - name: "Melee Short Sword +1 Striking"
    desc: "⬻ +20 ([[agile]], [[finesse]]); __Damage__ `dice: 2d6+8` 2d6+8 piercing plus `dice: 2d6` 2d6 precision vs flat-footed"
  - name: "Melee Slam"
    desc: "⬻ +18 ([[agile]], [[finesse]]); __Damage__ `dice: 2d6+6` 2d6+6 bludgeoning"
  - name: "Ranged Dagger"
    desc: "⬻ +19 (range increment 20 feet, [[thrown]]); __Damage__ `dice: 2d6+6` 2d6+6 piercing"

sourcebook: "Custom"

```