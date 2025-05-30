---
title: "Zombie Charger"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pfs-season-1-bestiary.Actor.BY9A7Isy3YWqUyyg" 
tags:
  - pf2e/creature/type/evil
  - pf2e/creature/type/mindless
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2e/creature/type/zombie
  - pf2eMonster
  - pf2e/creature/level/-1
statblock: inline
name: "Zombie Charger"
level: -1
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #1-18: Lodge of the Living God"
name: "Zombie Charger"
level: "Creature -1"

alignment: ""
size: "Medium"
trait_01: [[evil]]
trait_02: [[mindless]]
trait_03: [[undead]]
trait_04: [[unholy]]
trait_05: [[zombie]]
modifier: 0
perception:
  - name: "Perception"
    desc: "+0; Darkvision"
languages: ""
skills:
  - name: "Skills"
    desc: "Athletics: +5"
abilityMods: [3, -2, 2, -5, 0, -2]
speed: 30 feet
sourcebook: "_Pathfinder Society Scenario #1-18: Lodge of the Living God_"
ac: 12
armorclass:
  - name: AC
    desc: "12; __Fort__ +6, __Ref__ +0, __Will__ +2"
hp: 16
health:
  - name: ""
  - name: HP
    desc: "16, void healing; __Immunities__  death effects,  disease,  paralyzed,  poison,  unconscious,  mental; __Weaknesses__ vitality 5, slashing 5"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "[[Creature Family Ability Glossary/(Zombie) Rotting Aura|Rotting Aura]]"
    desc: " (aura,disease) 10 feet. The zombie emits an aura of rot and disease that causes wounds to fester and turn sour.\n\nAny living creature that starts its turn within 10 feet of the zombie and is not at full Hit Points takes 1d6 untyped damage as its wounds fester."

  - name: "[[Bestiary Ability Glossary/Void Healing|Void Healing]]"
    desc: "  A creature with void healing draws health from void energy rather than vitality energy. It is damaged by vitality damage and is not healed by vitality healing effects. It does not take void damage, and it is healed by void effects that heal undead."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Fist"
    desc: "+7 (unarmed)\n__Damage__  1d6 + 3 bludgeoning plus grab"

  - name: "**Melee** `pf2:1` Jaws"
    desc: "+7 (unarmed)\n__Damage__  1d8 + 3 piercing"

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  **Requirements** The monster's last action was a successful Strike that lists Grab in its damage entry, or the monster has a creature [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]]\n* * *\n\n**Effect** If used after a Strike, the monster attempts to [[Actions/grapple|grapple]] the creature using the body part it attacked with. This attempt neither applies nor counts toward the creature's multiple attack penalty.\n\nThe monster can instead use Grab and choose one creature it's grabbing or restraining with an appendage that has Grab to automatically extend that condition to the end of the monster's next turn."
 
```

```encounter-table
name: Zombie Charger
creatures:
  - 1: Zombie Charger
```




