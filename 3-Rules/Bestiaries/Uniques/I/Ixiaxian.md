---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Ixiaxian"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/shapechanger
  - pf2e/creature/level/7
statblock: inline
name: "Ixiaxian"
level: 7
---

```statblock
columns: 2
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Ixiaxian"
level: "Creature 7"
rare_01: "Uncommon"
alignment: "Neutral"
size: "Medium"
trait_01: "Humanoid"
trait_02: "Shapechanger"
trait_03: "Rogue"
modifier: 17
perception:
  - name: "Perception"
    desc: "+17; __darkvision__"
languages: "Common, Elven; communicates surface thoughts with [[detect thoughts]]"
skills:
  - name: "Skills"
    desc: "__Acrobatics__ +17, __Athletics__ +15, __Deception__ +21, __Diplomacy__ +16, __Intimidation__ +14, __Society__ +15, __Stealth__ +17, __Thievery__ +16"
abilityMods: [4, 5, 2, 2, 3, 4]

abilities_mid:
  - name: "Change Shape"
    desc: "⬻ ([[arcane]], [[concentrate]], [[polymorph]], [[transmutation]]); The Ixiaxian takes the form of any Medium humanoid it has seen, including clothing and gear. This doesn’t change statistics. DC 28 Perception check to disbelieve."
  - name: "Sneak Attack"
    desc: "Deals 2d6 extra precision damage to [[flat-footed]] creatures."
  - name: "Trapfinding"
    desc: "The Ixiaxian has a +2 circumstance bonus to checks to find traps and can disable traps with DCs up to 30."
  - name: "Detect Thoughts"
    desc: "⬽ ([[divination]], [[mental]], [[occult]]); DC 26 Will. The Ixiaxian reads surface thoughts within 30 feet, gaining a +2 circumstance bonus to Deception and Diplomacy against those creatures."

abilities_bot:
  - name: "Evasion"
    desc: "On a successful Reflex save, the Ixiaxian takes no damage instead of half."
  - name: "Mind-Reading Feint"
    desc: "When Feinting against a creature it is currently detecting thoughts from, the Ixiaxian gains a +2 circumstance bonus and doesn’t become [[flat-footed]] on a failure."
  - name: "Rogue’s Dodge"
    desc: "⬲  Trigger: The Ixiaxian is hit by an attack. Effect: Gains a +2 circumstance bonus to AC against the triggering attack."

speed: 30 feet

ac: 26
armorclass:
  - name: AC
    desc: "26; __Fort__ +15, __Ref__ +18, __Will__ +14; evasion"

hp: 120
health:
  - name: HP
    desc: "120; __Immunities__ sleep, charm"

attacks:
  - name: "Melee Dagger"
    desc: "⬻ +19 ([[agile]], [[finesse]], [[versatile|versatile-S]]); __Damage__ `dice: 2d6+7` 2d6+7 piercing plus `dice: 2d6` 2d6 precision vs flat-footed"
  - name: "Melee Slam"
    desc: "⬻ +18 ([[agile]], [[finesse]]); __Damage__ `dice: 2d6+7` 2d6+7 bludgeoning"
  - name: "Ranged Dagger"
    desc: "⬻ +17 (range increment 20 feet, [[thrown]]); __Damage__ `dice: 2d6+7` 2d6+7 piercing"

sourcebook: "Custom"

```