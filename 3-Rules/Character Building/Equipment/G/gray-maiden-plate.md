---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "gray-maiden-plate"
aliases: "Gray Maiden Plate"
source: "Pathfinder Adventure: Shadows at Sundown"
pg: "53"
rarity: ""
trait01: "bulwark"
trait02: ""
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 2
weight: 3
value: "35"
subvalue: "gp"
group: "Plate"
invest:
usage: "wornarmor"
license: "ORC"
identify:
description: "These suits of faceless full plate were first designed and distributed under Queen Ileosa's rule, but today, each new suit of this infamous style of plate armor is made by a Gray Maiden herself or a new member's sponsor."
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
dexCap: "+0"
strRequirement: "+3"
checkPenalty: "-3"
speedPenalty: "-10ft."
armorCategory: "Heavy"
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
WHERE weaponbase = "Gray Maiden Plate"
SORT level ASC

```
