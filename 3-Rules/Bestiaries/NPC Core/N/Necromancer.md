---
title: "Necromancer"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.BcSzGmSxCn0uWkxU" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/5
  - remaster
statblock: inline
name: "Necromancer"
level: 5
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Necromancer"
level: "Creature 5"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; "
languages: "Common, Necril"
skills:
  - name: "Skills"
    desc: "Arcana: +11, Intimidation: +8, Occultism: +13"
abilityMods: [2, 3, 2, 4, 2, -1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__ +11, __Ref__ +12, __Will__ +11"
hp: 65
health:
  - name: ""
  - name: HP
    desc: "65"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Light Mace|Light Mace]], [[Equipment/Explorer's Clothing|Hooded Robe]]"
  - name: "Stench of Decay"
    desc: " (aura,occult,olfactory) The necromancer emits a scent of putrid rot in a 5-foot emanation. A living creature that enters or begins its turn in the aura is [[Conditions/Sickened|Sickened 1]]."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Light Mace"
    desc: "+14 (agile, finesse, shove)\n__Damage__  1d4 + 8 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+14 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 8 bludgeoning"

  - name: "Occult Innate Spells"
    desc: "DC 23, attack +15\n__Cantrips__  __(3rd)__ _[[Spells/Void Warp|Void Warp]]_"

  - name: "Undead, Arise!"
    desc: "`pf2:2` (concentrate,manipulate,occult) The necromancer summons two Medium undead entities in different empty squares up to 30 feet away. These undead entities can take the form of zombies, skeletons, or ghosts, chosen by the necromancer. The entities block movement as though they were creatures and can be attacked. Each entity has 1 Hit Point and the same AC and saves as the necromancer. They can't take actions of their own and deteriorate if the necromancer is reduced to 0 Hit Points. The necromancer can have up to four undead entities at any given time. If they call another, the oldest undead entity deteriorates."

  - name: "Undead, Attack!"
    desc: "`pf2:2` (concentrate,occult) **Requirements** The necromancer has at least one undead entity active\n* * *\n\n**Effect** The necromancer commands all their undead entities to attack. Each entity can Stride up to 20 feet into an empty square and make a Strike. The Strike has a +15 attack modifier and deals 2d12 bludgeoning damage (or spirit damage if the entity is a spirit). The Strike has the magical trait, and no multiple attack penalty applies to it."

  - name: "Wave of Death"
    desc: "`pf2:2` (concentrate,manipulate,occult,void) **Requirements** The necromancer isn't drained and has at least one undead entity active\n* * *\n\n**Effect** The necromancer overloads their undead entities with void energy, causing all of them to explode. Each entity is destroyed, dealing 4d12 void damage to each creature in a 10-foot emanation with a DC 23 Fortitude check save. A creature in more than one explosion is damaged only once. The necromancer becomes [[Conditions/Drained|Drained 1]]."
 
```

```encounter-table
name: Necromancer
creatures:
  - 1: Necromancer
```



Defiling the natural order and spitting in the face of convention, the necromancer remains dutifully committed to understanding what forces await beyond the mortal boundaries of life and death.

* * *

Hidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.
