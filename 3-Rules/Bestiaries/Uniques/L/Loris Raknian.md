---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Loris Raknian"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/human
  - pf2e/creature/level/14
statblock: inline
name: "Loris Raknian"
level: 14
---
Loris Raknian often wanders the Bloodstone Arena grounds during daylight hours, supervising the work or rebuking some hapless laborer. The director of the arena always appears fully armed and accompanied by a group of his bodyguards. 

Loris Raknian is a tall, heavily muscled man in his early 50s. Famous for his great strength, Raknian remains an exceptionally hardy man today. He has short grizzled hair, a strong jaw, and small gray eyes.

```statblock
layout: Basic Pathfinder 2e Layout
source: Custom
name: "Loris Raknian"
level: "Creature 14"
token: Loris Raknian.png
size: "Medium"
trait_01: "humanoid"
trait_02: "human"
modifier: 26
perception:
  - name: "Perception"
    desc: "+26;"
languages: "Common"
skills:
  - name: "Skills"
    desc: "__Athletics__ +29; __Intimidation__ +27; __Society__ +22; __Warfare Lore__ +24"
abilityMods: [6, 2, 4, 1, 0, 4]
speed: 25 feet
ac: 33
armorclass:
  - name: AC
    desc: "33; Fort +26, Ref +22, Will +21"
hp: 250
health:
  - name: HP
    desc: "250;"

abilities_top:
  - name: "Items"
    desc: "[[Weapon Potency (+2)|+2]] [[Striking]] [[bastard-sword|Bastard Sword]] , [[warleaders-bulwark|Warleader's Bulwark]], 2 [[healing-potion-(greater)|Healing Potion (Greater)]], [[Dagger]] x2 coin pouch (27 gp)"

abilities_mid:
  - name: "Arena Commander"
    desc: "Allies within 30 feet gain a +1 status bonus to attack rolls while they can see Loris."
  - name: "Intimidating Presence"
    desc: "Creatures that begin their turn within 20 feet must succeed at a DC 33 Will save or become [[frightened|frightened 1]]. A creature that succeeds is immune for 24 hours."

abilities_bot:  
  - name: "Cleave"
    desc: "`pf2:2` Loris makes a bastard sword Strike. If it hits and deals damage, he makes a second Strike against a different adjacent creature at the same attack bonus. This second Strike does not increase his multiple attack penalty."
  - name: "Driving Assult"
    desc: "`pf2:2` Loris Strides and makes a bastard sword Strike. On a hit, he can attempt to [[3-Rules/Trait Reference/S/shove|Shove]] the target as a free action without increasing his multiple attack penalty."
  - name: "Powerful Strike"
    desc: "`pf2:2` Loris makes a bastard sword Strike that deals two additional weapon damage dice."
  - name: "Relentless"
    desc: "When reduced to 0 HP, Loris remains at 1 HP instead and gains 20 temporary HP. This ability triggers once per day."

attacks:
  - name: "Melee-Bastard Sword"
    desc: "`pf2:1` +2 Striking Bastard Sword +29 (two-hand 1d12); __Damage__ `dice: 2d12+12` 2d12+12 slashing"

  - name: "Melee-Dagger"
    desc: "`pf2:1` Dagger +26 (agile, finesse, versatile S, thrown 10 ft.); __Damage__ `dice: 2d4+10` 2d4+10 piercing"

```

