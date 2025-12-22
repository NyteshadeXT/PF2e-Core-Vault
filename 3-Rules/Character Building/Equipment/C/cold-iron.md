---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: pf2e-items, h-line
name: "cold-iron"
aliases: "Cold Iron"
source: "Pathfinder GM Core"
pg: "253"
rarity: ""
trait01: "precious"
trait02: ""
trait03: ""
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/assets/imageplaceholder.png
level: 2
group: 
bulk: 
value: ""
subvalue: ""
invest: 
usage: ""
license: "ORC"
identify: ""
description: |
  Weapons made from cold iron are deadly to demons and fey alike. Cold iron looks like normal iron but is mined from particularly pure sources and shaped with little or no heat. This process is extremely difficult, especially for high-grade cold iron items.
  
  | **Cold Iron Items** | **Hardness** | **HP** | **BT** |
  | ------------------- | ------------ | ------ | ------ |
  | **Thin Items**      |              |        |        |
  | Low-grade           | 5            | 20     | 10     |
  | Standard-grade      | 7            | 28     | 14     |
  | High-grade          | 10           | 40     | 20     |
  | **Items**           |              |        |        |
  | Low-grade           | 9            | 36     | 18     |
  | Standard-grade      | 11           | 44     | 22     |
  | High-grade          | 14           | 56     | 28     |
  | **Structure**       |              |        |        |
  | Low-grade           | 18           | 72     | 36     |
  | Standard-grade      | 22           | 88     | 44     |
  | High-grade          | 28           | 112    | 56     |

activate: ""
craft: 
destruction: 

#========================================================#
#                  Ability #1 PROPERTIES                 #
#========================================================#
powerTitle1: ""
actionEconomy1: 
type1: 
frequency1: 
requirement1:
trigger1:
activate1: 
duration1: 
mechanics1: ""

#========================================================#
#                  Ability #2 PROPERTIES                 #
#========================================================#
powerTitle2: ""
actionEconomy2: 
type2: 
frequency2: 
requirement2:
trigger2: 
activate2: 
duration2: 
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
activate3: 
duration3: 
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
activate4: 
duration4: 
mechanics4: "**Secondary Effect** "

#========================================================#
#                   WEAPON PROPERTIES                    #
#========================================================#
range:
ammoType:
reload:
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
hardness: 
hp: 
bt: 

#========================================================#
#              INTELLIGENT ITEM PROPERTIES               #
#========================================================#
perception:
communication:
skill1:
skill2:
skill3:
skill4:
skill5: 
int:
wis:
cha:
will:

#========================================================#
#                   DATAVIEW PROPERTIES                  #
#========================================================#
weaponBase:
armorBase:
shieldBase:
craftBase:

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
WHERE contains(craftBase, "Cold Iron")
SORT level ASC

```


