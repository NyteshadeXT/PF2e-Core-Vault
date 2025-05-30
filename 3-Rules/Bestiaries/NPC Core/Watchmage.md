---
title: "Watchmage"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.SK7BA4K7ALWtfNBe" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/5
  - remaster
statblock: inline
name: "Watchmage"
level: 5
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Watchmage"
level: "Creature 5"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 15
perception:
  - name: "Perception"
    desc: "+15; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Arcana: +13, Athletics: +10, Intimidation: +9, Society: +11, Legal Lore: +13"
abilityMods: [1, 4, 2, 4, 1, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__ +9, __Ref__ +12, __Will__ +14"
hp: 70
health:
  - name: ""
  - name: HP
    desc: "70"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Shortbow|Shortbow]], [[Equipment/Leather Armor|Leather Armor]], [[Equipment/Spellbook (Blank)|Spellbook]], 10x [[Equipment/Arrows|Arrows]]"
  - name: "Arcane Watch"
    desc: "  The watchmage can either [[Actions/Investigate|Investigate]] or [[Actions/Search|Search]] while using the Detect Magic exploration activity."

abilities_mid:
  - name: ""
  - name: "Counter Escape"
    desc: "`pf2:r` (arcane) **Trigger** A creature [[Actions/Cast a Spell|Casts a Spell]] with the teleportation trait or as a reaction\n* * *\n\n**Effect** The watchmage expends a spell slot of the same rank or higher as the trigger creature's spell and attempts to counteract the triggering spell (counteract modifier +11)."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Fist"
    desc: "+15 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d6 + 5 bludgeoning"

  - name: "**Ranged** `pf2:1` Shortbow"
    desc: "+15 (deadly d10, range increment 60 feet, reload 0)\n__Damage__  1d6 + 4 piercing 1d6 force"

  - name: "Arcane Prepared Spells"
    desc: "DC 20, attack +12; __3rd __  _[[Spells/Haste|Haste]]_, _[[Spells/Slow|Slow]]_; __2nd __  _[[Spells/Dispel Magic|Dispel Magic]]_, _[[Spells/See the Unseen|See the Unseen]]_; __1st __  _[[Spells/Command|Command]]_, _[[Spells/Force Barrage|Force Barrage]]_, _[[Spells/Sure Strike|Sure Strike]]_\n__Cantrips__  __(3rd)__ _[[Spells/Detect Magic|Detect Magic]]_, _[[Spells/Frostbite|Frostbite]]_, _[[Spells/Ignition|Ignition]]_, _[[Spells/Read Aura|Read Aura]]_, _[[Spells/Tangle Vine|Tangle Vine]]_"

  - name: "Eldritch Arms"
    desc: " (concentrate) In a brief ritual that takes 10 minutes, the watchmage chooses a single weapon or unarmed attack through which they can focus their magic. Strikes the watchmage makes with that weapon are magical and deal 1d6 additional force damage."

  - name: "Spellbound Strike"
    desc: "`pf2:3`  **Requirements** The watchmage is wielding the weapon chosen with Eldritch Arms\n* * *\n\n**Effect** The watchmage Casts a Spell that takes 1 or 2 actions to cast, imbuing that spell into the weapon. The watchmage Strikes with the required weapon. This counts as two attacks for the watchmage's multiple attack penalty. On a hit, the target is also affected by the spell, though the target gets any normal defenses allowed by the spell.\n\nIf the spell is targeted, it targets the creature that was hit and no one else. If the spell is an area, the target must be in the area. A burst is centered on a corner of the target's square if the target is Medium or smaller, or the corner of a square closest to the creature's center if it's Large or larger. A cone or line emits from a square of the watchmage's choice adjacent to the target."
 
```

```encounter-table
name: Watchmage
creatures:
  - 1: Watchmage
```



A watchmage uses a mix of magic and martial training to enforce the law. They magically detect invisible criminals, locate stolen property, and counter illegal spells.

* * *

Larger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.
