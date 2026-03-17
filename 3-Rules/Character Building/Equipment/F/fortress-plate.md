---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "fortress-plate"
aliases: "Fortress Plate"
source: "Pathfinder Treasure Vault"
pg: "10"
rarity: ""
trait01: "bulwark"
trait02: "entrench-ranged"
trait03: "ponderous"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 2
weight: 5
value: "32"
subvalue: "gp"
group: "Plate"
invest:
usage: "wornarmor"
license: "ORC"
identify:
description: "Dwarves of Dongun Hold developed fortress plate, which is still popular in Alkenstar and Dongun Hold. A trained wearer can adjust the articulated armor's overlapping layers of plates and panels to provide protection from missiles."
powerTitle1:
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1:
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
dmg1:
dmg1Type:
dmg2:
dmg2Type:
weaponType:
weaponCategory:

#========================================================#
#                    ARMOR PROPERTIES                    #
#========================================================#
baseAC: 6
modAC:
dexCap: 0
strRequirement: "+4"
checkPenalty: "-3"
speedPenalty: "-10ft"
armorCategory: Heavy
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
WHERE armorBase = "Fortress Plate"
SORT level ASC

```
