---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "flying-talon"
aliases: "Flying Talon"
source: "Pathfinder Player Core 2"
pg: "274"
rarity: "uncommon"
trait01: "agile"
trait02: "finesse"
trait03: "kobold"
trait04: "tethered"
trait05: "thrown-10"
trait06: "trip"
trait07: ""
trait08: ""
image: zz-Attachments/flying-talon.png
level: 1
weight: 1
value: "6"
subvalue: "gp"
group: "Flail"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "This weapon consists of a three-pronged barbed hook attached to a length of chain. It can be used in melee to stab foes or hurled at a range. Some kobolds are particularly fond of using flying talons, especially as a sort of badge of office above those who serve them."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target is knocked [[Prone]] unless they succeed at a Reflex save against your class DC."
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
range: 
ammoType:
damage:  
dmg1: 1d4
dmg1Type: piercing
dmg2:
dmg2Type:
weaponType: Melee
weaponCategory: Advanced

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
WHERE weaponbase = "Flying Talon"
SORT level ASC

```
