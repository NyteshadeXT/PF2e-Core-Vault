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
trait_01: [[aberration]]
trait_02: [[humanoid]]
trait_03: [[fey]]
modifier: 15
perception:
  - name: "Perception"
    desc: "+15; Darkvision; Tremorsense 30ft (imprecise)"
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +20, Diplomacy: +15, Intimidation: +19, Society: +16, Warfare Lore: +18"
abilityMods: [4, 3, 3, 0, 2, 1]
speed: 25 feet
sourcebook: "_Homebrew_"
ac: 28
armorclass:
  - name: AC
    desc: "28 (30 with shield raised) All-Around Vision; __Fort__ +17, __Ref__ +17, __Will__ +16"
hp: 100
health:
  - name: HP
    desc: "100; __Fast Healing__ 7; __Immunity__ disease, paralyzed, poison, precision, swarm mind, unconscious __Resistances__ physical 7; __Weaknesses__ area damage 7, splash damage 7, vitality 10;"
abilities_top:
  - name: "Items"
    desc: "[[Equipment/Bastard Sword|+1 Corroded Bastard Sword]], 3x [[Equipment/Spear|Spear]], [[Equipment/Steel Shield|Steel Shield]], [[Equipment/Full Plate|Full Plate (with Livery)]]"

abilities_mid:
  - name: "Knight's Courage"
    desc: "  Any time the knight gains the [[Conditions/Frightened|Frightened]] condition, they reduce its value by 1.\n* * *"

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike.\n* * *"

  - name: "[[Bestiary Ability Glossary/Shield Block|Shield Block]]"
    desc: "`pf2:r`  The worm rotted fey knight can Shield Block for an adjacent ally, preventing that ally from taking damage instead of themself.\n\n**Trigger** The monster has its shield raised and takes damage from a physical attack.\n\n**Effect** The monster snaps its shield into place to deflect a blow. The shield prevents the monster from taking an amount of damage up to the shield's Hardness. The monster and the shield each take any remaining damage, possibly breaking or destroying the shield\n* * *"

  - name: "[[Bestiary Ability Glossary/Discorporate|Discorporate]]"
    desc: "  When the worm rotted fey knight is reduced to 0 HP, it discorporates and the component worms that make up its body disperse in every direction. If even a single worm escapes, it will eventually re-form using a process that typically takes (1d10) 1d10 days. While the exact circumstances and surroundings determine how long the worm rotted fey knight's foes have to dispatch the fleeing worms before they escape, usually its foes have only a single round. Typically, this requires the application of an area effect or splash weapon within 1 round to the space where the worm that walks collapsed. After any amount of area or splash damage is dealt to that space, the character dealing the damage must attempt a DC 15 flat check. Each subsequent area or splash damage effect performed on the area reduces the DC of this flat check by 2, to a minimum of DC 5. If any of these flat checks succeed, none of the worms escape, and the worm rotted fey knight is destroyed permanently. At the GM's discretion, clever means of trapping or otherwise detaining the vermin may extend the time allowed to finish off the worm rotted fey knight."

attacks:
  - name: "**Melee** `pf2:1` Tendril"
    desc: "+31 ([reach 10 feet])\n __Damage__ (4d8+16) 4d8 + 16 persistent piercing damage"

  - name: "**Melee** `pf2:1` Bastard Sword"
    desc: "+21 (magical, two-hand d12)\n__Damage__ (1d8+15) 1d8 + 15 slashing plus 1d6 acid"

  - name: "**Melee** `pf2:1` Spear"
    desc: "+20 \n__Damage__ (1d6+12) 1d6 + 12 piercing"

  - name: "**Ranged** `pf2:1` Spear"
    desc: "+20 (thrown 20 ft.)\n__Damage__ (1d6+12) 1d6 + 12 piercing"

  - name: "Intimidating Strike"
    desc: "`pf2:2` (emotion,fear,fighter,mental) The worm rotted fey knight makes a melee Strike. If it hits and deals damage, the target is [[Conditions/Frightened|Frightened 1]], or [[Conditions/Frightened|Frightened 2]] on a critical hit."

  - name: "Rearming Advance"
    desc: "`pf2:1`  The worm rotted fey knight Strides or Steps. During this movement, they can Interact to swap from wielding their bastard sword in two hands to wielding it in one hand and wielding their shield in the other, or vice versa. This Interact action doesn't trigger reactions that can be triggered by manipulate actions."
 
  - name: "Squirming Embrace"
    desc: "`pf2:1`  The worm rotted fey knight Strides, ending its movement sharing a space with a creature, and deals (5d8+2) 5d8 + 2 piercing damage to the creature. The creature can attempt a DC 34 basic Reflex save."

  - name: "Swarm Shape"
    desc: "`pf2:1`  (concentrate) The worm rotted fey knight collapses into a shapeless swarm of worms. It drops all held, worn, and carried items. While discorporated, it can't use attack actions and can't cast spells, but it can move through areas small enough for its individual worms to fit without having to Squeeze. It can use the same action to coalesce back into its normal form."

```

```encounter-table
name: Worm Rotted Fey Knight
creatures:
  - 1: Worm Rotted Fey Knight
```



Elite fighters from the lowest ranks of nobility, knights are proud champions of their court. Unlike other nobles, knights must earn their title through loyalty and strength-of-arms rather than inheritance. Ideals such as chivalry, honor, and virtue are associated with knights but not all meet such romantic standards.

