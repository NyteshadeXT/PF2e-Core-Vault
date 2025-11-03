---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "crescent-cross"
aliases: "Crescent Cross"
source: "Pathfinder Treasure Vault"
pg: "31"
rarity: ""
trait01: "capacity-3"
trait02: "combination"
trait03: "parry"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/crescent-cross.png
level: 0
weight: 1
value: "4"
subvalue: "gp"
invest:
usage: "held in one hand "
license: "ORC"
group: "Knife/Bow"
identify:
description: "A crescent cross combines a small scizore with an arm-mounted crossbow apparatus that can hold up to three bolts at a time."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "If the target of the critical hit is adjacent to a surface, it gets stuck to that surface by the missile. The target is immobilized and must spend an Interact action to attempt a DC 10 [[Skills#Athletics|Athletics]] check to pull the missile free; it can't move from its space until it succeeds. The creature doesn't become stuck if it is incorporeal, is liquid (like a water elemental or some oozes), or could otherwise escape without effort."
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
range: 30 ft
ammoType: "Bolts"
damage:  
dmg1: 1d6
dmg1Type: piercing
dmg2: 1d4
dmg2Type: slashing
weaponType: Ranged/Melee
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
WHERE weaponbase = "Crescent Cross"
SORT level ASC

```
