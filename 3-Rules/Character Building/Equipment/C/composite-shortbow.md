---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "composite-shortbow"
aliases: "Composite Shortbow"
source: "Pathfinder Player Core"
pg: "280"
rarity: ""
trait01: "deadly-d10"
trait02: "propulsive"
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 1
weight: 1
value: "14"
subvalue: "gp"
invest:
usage: "held in one plus hands "
license: "ORC"
group: "Bow"
identify:
description: "This shortbow is made from horn, wood, and sinew laminated together to increase the power of its pull and the force of its projectile. Its compact size and power make it a favorite of mounted archers. Any time an ability is specifically restricted to a shortbow, it also applies to composite shortbows unless otherwise stated."
powerTitle1:
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
range: 60 ft
ammoType: "Arrows"
damage:  
dmg1: 1d6
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
WHERE weaponbase = "Composite Shortbow"
SORT level ASC

```
