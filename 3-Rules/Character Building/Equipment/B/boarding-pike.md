---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "boarding-pike"
aliases: "Boarding Pike"
source: "Pathfinder Lost Omens Pathfinder Society Guide"
pg: "80"
rarity: "uncommon"
trait01: "reach"
trait02: "shove"
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 1
weight: 2
value: "8"
subvalue: "sp"
group: "Polearm"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "Taking the form of a longspear fitted with crossbars or hooks, a boarding pike provides its wielder a sharp implement that's as adept at shoving enemies off a ship's railings as facilitating the boarding of other vessels."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target is moved 5 feet in a direction of your choice. This is forced movement."
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
dmg1: 1d10
dmg1Type: piercing
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
// change to weaponbase/armorbase/shieldbase/craftbase as needed and the update the equals as appropriate to the new typing

TABLE
  aliases   AS "Aliases",
  level     AS "Level",
  license   AS "License"
FROM "3-Rules/Character Building/Equipment"
WHERE contains(weaponbase, "Boarding Pike")
SORT level ASC

```