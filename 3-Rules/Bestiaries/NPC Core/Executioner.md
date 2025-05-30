---
title: "Executioner"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.pHaQew7IEmk198Wz" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/6
  - remaster
statblock: inline
name: "Executioner"
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Executioner"
level: "Creature 6"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +15, Intimidation: +13, Medicine: +10"
abilityMods: [5, 2, 3, -1, 2, 2]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__ +15, __Ref__ +12, __Will__ +14"
hp: 105
health:
  - name: ""
  - name: HP
    desc: "105"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Greataxe|+1 Greataxe]], [[Equipment/Chain Mail|Chain Mail]], [[Equipment/Clothing (Ordinary)|Hood]]"
abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Greataxe"
    desc: "+16 (magical, sweep)\n__Damage__  1d12 + 9 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+15 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 9 bludgeoning"

  - name: "Behead"
    desc: "`pf2:3`  **Requirements** The executioner is adjacent to a dying creature or a creature specifically prepared for a killing blow\n* * *\n\n**Effect** The executioner Strikes the creature with their greataxe. On a hit, in addition to taking damage, the target must attempt a DC 23 Fortitude check save or be reduced to 0 HP and become [[Conditions/Dying|Dying 1]]. If the creature was already dying (including if it was reduced to 0 HP by the Strike's damage), the creature's dying value increases by 1, in addition to any increase from the Strike. On a critical failure, the creature dies instantly. If the executioner's Strike was a critical hit, the target uses the outcome one degree of success worse than the result of their saving throw."

  - name: "Intimidating Strike"
    desc: "`pf2:2` (emotion,fear,mental) The executioner makes a melee Strike. If it hits and deals damage, the target is [[Conditions/Frightened|Frightened 1]], or [[Conditions/Frightened|Frightened 2]] on a critical hit."

  - name: "Mark for Death"
    desc: "`pf2:1` (concentrate) The executioner marks a single creature they can see for death. The first time each round the executioner Strikes that creature, the Strike deals an extra 1d12 precision damage.\n\nThe creature remains marked for death until the executioner is knocked out, marks a different creature for death, or the encounter ends."
 
```

```encounter-table
name: Executioner
creatures:
  - 1: Executioner
```



Executioners carry out sentences from cruel tyrants and legitimate rulers alike. Most remain numb to the necessity of their duty, but some evil executioners grow to love the power of having someone else's life in their hands.

* * *

Larger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.
