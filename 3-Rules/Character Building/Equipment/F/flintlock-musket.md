---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "flintlock-musket"
aliases: "Flintlock Musket"
source: "Pathfinder Guns & Gears"
pg: "153"
rarity: "uncommon"
trait01: "concussive"
trait02: "fatal-d10"
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/flintlock-musket.png
level: 0
weight: 1
value: "5"
subvalue: "gp"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "The most commonly available of firearms in Alkenstar, the flintlock musket includes an external firing mechanism and an efficient and relatively compact frame. Though lacking the range and firing power of the arquebus preferred by Alkenstar and Dongun Hold's military members, the flintlock musket is popular among civilians for its ease of use."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [[Conditions/Stunned 1|stunned 1]]."
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
range: 70 ft
ammoType:
damage: 1d6 piercing
dmg1:
dmg1Type:
dmg2:
dmg2Type:
weaponType:
weaponCategory:

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
WHERE weaponbase = "Flintlock Rifle"
SORT level ASC

```
