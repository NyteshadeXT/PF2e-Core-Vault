---
title: "Worm Rotted Fey Knight"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Worm Rotted Fey Knight" 
tags:
  - pf2e/creature/type/swarm
  - pf2e/creature/type/abberation
  - pf2eMonster
  - pf2e/creature/level/9
  - remaster
statblock: inline
name: "Worm Rotted Fey Knight"
level: 9
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Worm Rotted Fey Knight"
level: "Creature 9"
token: worm-rotted-knight.png
alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 13
perception:
  - name: "Perception"
    desc: "+13; Darkvision; Tremorsense 30ft (imprecise)"
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +18, Diplomacy: +13, Intimidation: +17, Society: +14, Warfare Lore: +16"
abilityMods: [4, 3, 3, 0, 2, 1]
speed: 25 feet
sourcebook: "_Homebrew_"
ac: 25
armorclass:
  - name: AC
    desc: "26 (28 with shield raised) All-Around Vision; __Fort__ +15, __Ref__ +15, __Will__ +14"
hp: 80
health:
  - name: HP
    desc: "80; __Fast Healing__ 7; __Immunity__ disease, paralyzed, poison, precision, swarm mind, unconscious __Resistances__ physical 7; __Weaknesses__ area damage 7, splash damage 7;"
abilities_top:
  - name: "Items"
    desc: "[[Equipment/Bastard Sword|+1 Bastard Sword]], 3x [[Equipment/Spear|Spear]], [[Equipment/Steel Shield|Steel Shield]], [[Equipment/Full Plate|Full Plate (with Livery)]]"

abilities_mid:
  - name: "Knight's Courage"
    desc: "  Any time the knight gains the [[Conditions/Frightened|Frightened]] condition, they reduce its value by 1."

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

  - name: "[[Bestiary Ability Glossary/Shield Block|Shield Block]]"
    desc: "`pf2:r`  The knight can Shield Block for an adjacent ally, preventing that ally from taking damage instead of themself.\n* * *\n\n**Trigger** The monster has its shield raised and takes damage from a physical attack.\n* * *\n\n**Effect** The monster snaps its shield into place to deflect a blow. The shield prevents the monster from taking an amount of damage up to the shield's Hardness. The monster and the shield each take any remaining damage, possibly breaking or destroying the shield."

  - name: "Discorporate"
    desc: "  When the worm that walks is reduced to 0 HP, it discorporates and the component worms that make up its body disperse in every direction. If even a single worm escapes, the worm that walks will eventually re-form using a process that typically takes 1d10 days.While the exact circumstances and surroundings determine how long the worm that walks's foes have to dispatch the fleeing worms before they escape, usually its foes have only a single round. Typically, this requires the application of an area effect or splash weapon within 1 round to the space where the worm that walks collapsed. After any amount of area or splash damage is dealt to that space, the character dealing the damage must attempt a DC 15 flat check. Each subsequent area or splash damage effect performed on the area reduces the DC of this flat check by 2, to a minimum of DC 5. If any of these flat checks succeed, none of the worms escape, and the worm that walks is destroyed permanently. At the GM's discretion, clever means of trapping or otherwise detaining the vermin may extend the time allowed to finish off the worm that walks."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Bastard Sword"
    desc: "+19 (magical, two-hand d12)\n__Damage__  1d8 + 10 slashing"

  - name: "**Melee** `pf2:1` Spear"
    desc: "+18 ()\n__Damage__  1d6 + 10 piercing"

  - name: "**Ranged** `pf2:1` Spear"
    desc: "+18 (thrown 20 ft.)\n__Damage__  1d6 + 10 piercing"

  - name: "**Melee** `pf2:1` Gauntlet"
    desc: "+18 (agile, free-hand)\n__Damage__  1d4 + 10 bludgeoning"

  - name: "Intimidating Strike"
    desc: "`pf2:2` (emotion,fear,fighter,mental) The knight makes a melee Strike. If it hits and deals damage, the target is [[Conditions/Frightened|Frightened 1]], or [[Conditions/Frightened|Frightened 2]] on a critical hit."

  - name: "Rearming Advance"
    desc: "`pf2:1`  The knight Strides or Steps. During this movement, they can Interact to swap from wielding their bastard sword in two hands to wielding it in one hand and wielding their shield in the other, or vice versa. This Interact action doesn't trigger reactions that can be triggered by manipulate actions."

  - name: "Warding Shift"
    desc: "`pf2:1`  **Requirements** The knight is adjacent to a willing ally\n* * *\n\n**Effect** The knight moves an adjacent willing ally 5 feet in any direction and can Step into the space the ally vacated."
 
```

```encounter-table
name: Worm Rotted Fey Knight
creatures:
  - 1: Worm Rotted Fey Knight
```



Elite fighters from the lowest ranks of nobility, knights are proud champions of their court. Unlike other nobles, knights must earn their title through loyalty and strength-of-arms rather than inheritance. Ideals such as chivalry, honor, and virtue are associated with knights but not all meet such romantic standards.

* * *

The denizens of a noble court are the most powerful people in a civilization, primed with wealth, station, and authority above the common people.
