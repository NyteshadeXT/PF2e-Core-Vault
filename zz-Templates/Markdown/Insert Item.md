---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: pf2e-items, h-line
name: ""
aliases:
source: ""
pg: ""
rarity: ""
trait01: ""
trait02: ""
trait03:
trait04:
trait05:
trait06:
trait07:
trait08:
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
craft: 
destruction: 

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

#========================================================#
#                  Ability #3 PROPERTIES                 #
#========================================================#
powerTitle3: ""
actionEconomy3: 
type3: 
frequency3: 
requirement3:
trigger3: 
mechanics3: "**Secondary Effect** "

#========================================================#
#                  Ability #4 PROPERTIES                 #
#========================================================#
powerTitle4: ""
actionEconomy4: 
type4: 
frequency4: 
requirement4:
trigger4: 
mechanics4: "**Secondary Effect** "

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
dexCap: 
strRequirement: 
checkPenalty: 
speedPenalty: 
armorCategory: 
resist: 
immunity: 
conditionImmunity: 

#========================================================#
#              INTELLIGENT ITEM PROPERTIES               #
#========================================================#
perception:
communication:
skill1:
skill2:
skill3:
int:
wis:
cha:
will:

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
