---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "long-hammer"
aliases: "Long Hammer"
source: "Pathfinder Treasure Vault"
pg: "27"
rarity: ""
trait01: "brace"
trait02: "dwarf"
trait03: "reach"
trait04: "trip"
trait05: "versatile-p"
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/long-hammer.png
level: 0
weight: 2
value: "5"
subvalue: "gp"
group: "Hammer"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "The long hammer features a pronged hammer head designed for damaging knees and ankles, counterbalanced by a stout spike and affixed to a reinforced shaft between 5 and 7 feet long."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target is knocked [[prone]] unless they succeed at a Fortitude save against your class DC."
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
dmg1: 1d8
dmg1Type: bludgeoning
dmg2:
dmg2Type:
weaponType: Melee
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
WHERE weaponbase = "Long Hammer"
SORT level ASC

```
