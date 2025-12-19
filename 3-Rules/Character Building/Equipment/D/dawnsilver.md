---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: pf2e-items, h-line
name: "dawnsilver"
aliases: "Dawnsilver"
source: "Pathfinder GM Core"
pg: "253"
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
level: 8+
group: "Metal"
bulk: 
value: ""
subvalue: "see table"
invest: 
usage: ""
license: ""
identify: ""
description: |
  Dawnsilver is renowned for its lightness, durability, and effectiveness against a range of creatures including devils and werecreatures. It has the same sheen as silver but a slightly lighter hue. Dawnsilver weapons and armor are treated as if they were silver for the purpose of damaging creatures with weakness to silver. A metal item made of dawnsilver is lighter than one made of iron or steel: the item's Bulk is reduced by 1 (reduced to light Bulk if its normal Bulk is 1, with no effect on an item that normally has light Bulk). The Price of an item made of this material is based on the item's normal Bulk, not its reduced Bulk for being made of dawnsilver, but reduce the Bulk before making any further Bulk adjustments for the size of the item.

  | **Dawnsilver Items** | **Hardness** | **HP** | **BT** |
  | -------------------- | ------------ | ------ | ------ |
  | **Thin Items**       |              |        |        |
  | Standard-grade       | 5            | 20     | 10     |
  | High-grade           | 8            | 32     | 16     |
  | **Items**            |              |        |        |
  | Standard-grade       | 9            | 36     | 18     |
  | High-grade           | 12           | 48     | 24     |
  | **Structure**        |              |        |        |
  | Standard-grade       | 18           | 72     | 36     |
  | High-grade           | 24           | 96     | 48     |
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
WHERE contains(craftBase, "Dawnsilver")
SORT level ASC

```


