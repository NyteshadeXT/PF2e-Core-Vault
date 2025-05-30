---
title: "Chelaxian Fighter"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pfs-season-6-bestiary.Actor.l2hVUFGqqmGPzPIy" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/6
  - remaster
statblock: inline
name: "Chelaxian Fighter"
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #6-07: A God Falls Where Magic Fails"
name: "Chelaxian Fighter"
level: "Creature 6"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 14
perception:
  - name: "Perception"
    desc: "+14; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +16, Intimidation: +15, Warfare Lore: +14"
abilityMods: [4, 3, 2, 2, 2, 3]
speed: 25 feet
sourcebook: "_Pathfinder Society Scenario #6-07: A God Falls Where Magic Fails_"
ac: 23
armorclass:
  - name: AC
    desc: "23 (25 with shield raised); __Fort__ +14, __Ref__ +13, __Will__ +12"
hp: 98
health:
  - name: ""
  - name: HP
    desc: "98"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "6x [[Equipment/Javelin|Javelin]], [[Equipment/Longsword|+1 Striking Longsword]], [[Equipment/Steel Shield|Steel Shield]], [[Equipment/Chain Shirt|Chain Shirt]]"
abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

  - name: "[[Bestiary Ability Glossary/Shield Block|Shield Block]]"
    desc: "`pf2:r`  **Trigger** The monster has its shield raised and takes damage from a physical attack.\n* * *\n\n**Effect** The monster snaps its shield into place to deflect a blow. The shield prevents the monster from taking an amount of damage up to the shield's Hardness. The monster and the shield each take any remaining damage, possibly breaking or destroying the shield."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Longsword"
    desc: "+17 (magical, versatile p)\n__Damage__  2d8 + 8 slashing"

  - name: "**Ranged** `pf2:1` Javelin"
    desc: "+15 (thrown 30 ft.)\n__Damage__  1d6 + 8 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+16 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 8 bludgeoning"

  - name: "Chastising Enforcement"
    desc: "`pf2:1` (auditory,emotion,linguistic,mental,nonlethal) The Chelaxian fighter exhorts a faltering comrade with a stern word. The Chelaxian fighter attempts an Intimidation check check against the Will DC of one ally within 30 feet. On a success, the target's [[Conditions/Frightened|Frightened]] condition is reduced by 2, and the Chelaxian fighter can attempt to counteract one mental effect that ally is suffering from with a +15 counteract modifier. On a critical success, the Chelaxian fighter also reduces the frightened condition of each other ally in a 10-foot emanation around the target by 1."

  - name: "Create Opening"
    desc: "`pf2:1`  **Requirements** The Chelaxian fighter's last action was a Strike that hit an opponent\n* * *\n\n**Effect** The Chelaxian fighter twists their blade and pushes with their shield to create an opening in the required opponent's defenses. That opponent takes a –2 status penalty to their AC against the next Strike made against them before the start of the Chelaxian fighter's next turn. While this penalty lasts, the Chelaxian fighter gains an additional reaction they can only use to make a Reactive Strike against the penalized opponent.\n\n[[Bestiary Effects/Effect_ Create Opening|Effect: Create Opening]]"
 
```

```encounter-table
name: Chelaxian Fighter
creatures:
  - 1: Chelaxian Fighter
```




