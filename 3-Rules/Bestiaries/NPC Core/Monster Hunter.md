---
title: "Monster Hunter"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.3qDYEHtyAobpCg5r" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/6
  - remaster
statblock: inline
name: "Monster Hunter"
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Monster Hunter"
level: "Creature 6"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 13
perception:
  - name: "Perception"
    desc: "+13; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +15, Stealth: +13, Survival: +11, Monster Lore: +13"
abilityMods: [4, 3, 3, 1, 1, 1]
speed: 20 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__ +15, __Ref__ +11, __Will__ +13"
hp: 105
health:
  - name: ""
  - name: HP
    desc: "105"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Composite Longbow|Composite Longbow]], [[Equipment/Greataxe|+1 Greataxe]], [[Equipment/Hide Armor|Hide Armor]], 20x [[Equipment/Arrows|Arrows]]"
  - name: "Favored Game"
    desc: "  A monster hunter specializes in bringing down certain non-humanoid creatures. These favored game are typically animals and beasts, but an individual might hunt dragons, plants, or more specialized creatures like tigers or manticores."

abilities_mid:
  - name: ""
  - name: "[[Actions/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within your reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\nYou lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a manipulate action, you disrupt that action. This Strike doesn't count toward your multiple attack penalty, and your multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Greataxe"
    desc: "+15 (magical, sweep)\n__Damage__  1d12 + 8 slashing plus primal-fear"

  - name: "**Ranged** `pf2:1` Composite Longbow"
    desc: "+14 (deadly d10, propulsive, range increment 100 feet, reload 0, volley 30 ft.)\n__Damage__  1d8 + 6 piercing plus primal-fear"

  - name: "Hunter's Onslaught"
    desc: "`pf2:1` (concentrate,emotion,mental) **Frequency** once per hour\n\n**Requirements** The monster hunter isn't [[Conditions/Fatigued|Fatigued]]\n* * *\n\n**Effect** The monster hunter leads an attack against their monstrous foe. The monster hunter chooses an enemy they can see that qualifies as their favored game. The monster hunter becomes [[Conditions/Fascinated|Fascinated]] by that creature and gains 10 temporary Hit Points that last as long as the onslaught does. During the onslaught, the hunter gains a +8 status bonus to damage rolls against the designated enemy, and allies in a 30-foot aura around the hunter gain half that bonus. The onslaught lasts for 1 minute or until either the monster hunter or the designated creature falls [[Conditions/Unconscious|Unconscious]]."

  - name: "Primal Fear"
    desc: " (emotion,fear,mental) When the monster hunter hits a creature that qualifies as their favored game, that creature is [[Conditions/Frightened|Frightened 1]] (or [[Conditions/Frightened|Frightened 2]] on a critical hit)."

  - name: "Sudden Charge"
    desc: "`pf2:2`  The monster hunter Strides twice and makes a melee Strike."
 
```

```encounter-table
name: Monster Hunter
creatures:
  - 1: Monster Hunter
```



Bounty hunters are constantly on the move, whether within city walls or the wilderness, trailing their fugitive quarries for capture... or disposal. Often relying on stealth or deception as much as martial skill, bounty hunters employ a vast array of talents to accomplish their goals and collect the hefty payout.

* * *

Whether they're hired to wage war, protect a caravan, or infiltrate an impenetrable fortress, there's ample work for mercenaries all over Golarion.
