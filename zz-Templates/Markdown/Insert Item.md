---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: pf2e-item, h-line
name: ""
aliases:
source: ""
pg: ""
rarity: ""
trait01: ""
trait02: ""
trait03:
trait04:
image: zz-Attachments/assets/imageplaceholder.png
level: 
group: 
weight: 
value: ""
subvalue: ""
invest:
usage: ""
license: ""
identify: ""
description: ""

#========================================================#
#                  Ability #1 PROPERTIES                 #
#========================================================#
powerTitle: "Effect"
actionEconomy: 
type: 
frequency: 
requirement:
trigger:
mechanics: ""

#========================================================#
#                  Ability #2 PROPERTIES                 #
#========================================================#
powerTitle2: ""
actionEconomy2: 
type2: 
frequency2: 
requirement2:
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
shieldBase:

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
WHERE weaponbase = "Bo Staff"
SORT level ASC

```
