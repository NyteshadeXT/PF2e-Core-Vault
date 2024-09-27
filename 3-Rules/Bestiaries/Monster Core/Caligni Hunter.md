---
title: "Caligni Hunter"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-monster-core.Actor.AcUb8s5fiktYw8Fx" 
tags:
  - pf2e/creature/type/caligni
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Caligni Hunter"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/pf2e-tokens-bestiaries/portraits/humanoid/darklands/caligni-stalker.webp| ]]
source: "Pathfinder Monster Core"
name: "Caligni Hunter"
level: "Creature 4"

alignment: ""
size: "Medium"
trait_01: [[caligni]]
trait_02: [[humanoid]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; Greater Darkvision"
languages: "Caligni, Sakvroth"
skills:
  - name: "Skills"
    desc: "Acrobatics: +13, Athletics: +8, Stealth: +13, Survival: +12, Thievery: +11"
abilityMods: [2, 5, 2, -1, 2, 1]
speed: 25 feet
sourcebook: "_Pathfinder Monster Core_"
ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__ +10, __Ref__ +13, __Will__ +8"
hp: 60
health:
  - name: ""
  - name: HP
    desc: "60, final fate"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "2x [[Equipment/Shortsword|Shortsword]], [[Equipment/Leather Armor|Leather Armor]], 6x [[Equipment/Darkening Poison|Darkening Poison]]"
abilities_mid:
  - name: ""
  - name: "Final Fate"
    desc: " (occult,spirit) When the hunter dies, their soul leaves their body in an explosion of spiritual energy. All creatures in a @Template[burst|distance:20] take 5d6 spirit damage (DC 19 Will check save).\n\nThe hunter's possessions are left in a pile where they died."

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Shortsword +13 (agile, finesse, versatile s)\n__Damage__  1d6 + 7 piercing plus darkening-poison"

  - name: "Occult Innate Spells"
    desc: "DC 19, attack +11; __2nd __  _[[Spells/Darkness|Darkness (At Will)]]_, _[[Spells/See the Unseen|See the Unseen (At Will)]]_\n__Cantrips__  __(2nd)__ _[[Spells/Figment|Figment]]_"

  - name: "Double Slice"
    desc: "`pf2:2`  The caligni hunter makes two Strikes against the same target, one with each of their shortswords. The hunter combines the damage of any attacks that hit and applies precision damage, resistances, and weaknesses only once. Both attacks count toward the hunter's multiple attack penalty, but the penalty increases only after both attacks."

  - name: "Encircling Command"
    desc: "`pf2:1` (auditory) Each caligni skulker within 30 feet of the skulker can Step. Each creeper can benefit from Encircling Command only once per round."

  - name: "Sneak Attack"
    desc: "  The caligni hunter deals 1d6 extra precision damage to [[Conditions/Off-Guard|Off-Guard]] creatures."
 
```

```encounter-table
name: Caligni Hunter
creatures:
  - 1: Caligni Hunter
```



Although caligni hunters are often pressed into leading their skulker kin, most hunters prefer to wander the Darklands or raid the surface free from those responsibilities. Their preferred assaults are usually done by solo caligni hunters or in small groups of two or three.

* * *

Calignis lurk in subterranean cities, with each caligni growing into a specific role and form determined by supernatural influences in caligni society. Regardless of their size or role, all calignis are gaunt, with pale flesh and white eyes. Many relish the chance to creep above ground at night to steal resources, shadow their surface counterparts, or simply make mischief.
