---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "composite-longbow"
aliases: "Composite Longbow"
source: "Pathfinder Player Core"
pg: "280"
rarity: ""
trait01: "deadly-d10"
trait02: "propulsive"
trait03: "volley-30"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/composite-longbow.png
level: 1
weight: 2
value: "20"
subvalue: "gp"
invest:
usage: "held in one plus hands "
license: "ORC"
identify:
group: "Bow"
description: "This projectile weapon is made from horn, wood, and sinew laminated together to increase the power of its pull and the force of its projectile. Like all longbows, its great size also increases the bow's range and power. You must use two hands to fire it, and it cannot be used while mounted. Any time an ability is specifically restricted to a longbow, such as Erastil's favored weapon, it also applies to composite longbows unless otherwise stated."
powerTitle1: "Critial Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "If the target of the critical hit is adjacent to a surface, it gets stuck to that surface by the missile. The target is [[immobilized]] and must spend an Interact action to attempt a DC 10 [[Skills#Athletics|Athletics]] check to pull the missile free; it can't move from its space until it succeeds. The creature doesn't become stuck if it is incorporeal, is liquid (like a water elemental or some oozes), or could otherwise escape without effort."
powerTitle2:
actionEconomy2:
type2:
frequency2:
trigger2:
mechanics2: "**Secondary Effect** "
craft:

#========================================================#
#                   WEAPON PROPERTIES                    #
#========================================================#
range: 100 ft
ammoType: "Arrows"
damage:  
dmg1: 1d8
dmg1Type: piercing
dmg2:
dmg2Type:
weaponType: Ranged
weaponCategory: Martial

#========================================================#
#                    ARMOR PROPERTIES                    #
#========================================================#
baseAC:
modAC:
dexCap:
strRequirement:
checkPenalty:
speedPenalty:
armorCategory:
resist:
immunity:
conditionImmunity:

#========================================================#
#                 MAGIC ITEM PROPERTIES                  #
#========================================================#
weaponBase:
armorBase:

---

```meta-bind-embed
[[Item Card Template]]
```

```dataview
// change weaponbase to armorbase or shieldbase as needed and the update the equals as appropriate to the new typing

TABLE
  aliases AS "Aliases",
  level AS "Level",
  license AS "License"
FROM "3-Rules/Character Building/Equipment"
WHERE weaponbase = "Composite Longbow"
SORT level ASC

```
