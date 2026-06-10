---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: pf2e-items, h-line
name: "duskwood"
aliases: "Duskwood"
source: "Pathfinder GM Core"
pg: "254"
rarity: "uncommon"
trait01: "precious"
trait02: ""
trait03: ""
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/assets/imageplaceholder.png
level: 0
group: 
bulk: ""
value: ""
subvalue: ""
invest: 
usage: ""
license: "ORC"
identify: ""
description: |
  Duskwood is a very lightweight wood found primarily in old-growth forests in south-central Avistan; it is dark as ebony but has a slight purple tint. A duskwood item's Bulk is reduced by 1 (or to light Bulk if its normal Bulk is 1, with no effect on an item that normally has light Bulk). The Price of an item made of duskwood is based on the item's normal Bulk, not its reduced Bulk for being made of duskwood, but reduce the Bulk before making any further Bulk adjustments for the size of the item.

  | **Duskwood Items** | **Hardness** | **HP** | **BT** |
  | -------------------- | ------------ | ------ | ------ |
  | **Thin Items**       |              |        |        |
  | Standard-grade       | 5            | 20     | 10     |
  | High-grade           | 8            | 32     | 16     |
  | **Items**            |              |        |        |
  | Standard-grade       | 7            | 28     | 14     |
  | High-grade           | 10           | 40     | 20     |
  | **Structure**        |              |        |        |
  | Standard-grade       | 14           | 56     | 28     |
  | High-grade           | 20           | 80     | 40     |
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
WHERE contains(craftBase, "Duskwood")
SORT level ASC

```


