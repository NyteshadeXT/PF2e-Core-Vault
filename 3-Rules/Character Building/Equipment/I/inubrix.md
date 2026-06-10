---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: pf2e-items, h-line
name: "inubrix"
aliases: "Inubrix"
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
  This pale, malleable metal's unusual molecular structure allows it to partially pass through iron and steel without touching them. While this property is useful for making weapons that bypass metal armor, inubrix is barely sturdier than lead. Even in an alloyed state, this skymetal is so fragile that it's difficult to use in crafting reliable shields and less than ideal for crafting armor.

  | **Adamantine Items** | **Hardness** | **HP** | **BT** |
  | -------------------- | ------------ | ------ | ------ |
  | **Thin Items**       |              |        |        |
  | Standard-grade       | 4            | 16     | 8      |
  | High-grade           | 7            | 28     | 14     |
  | **Items**            |              |        |        |
  | Standard-grade       | 8            | 32     | 19     |
  | High-grade           | 11           | 44     | 22     |
  | **Structure**        |              |        |        |
  | Standard-grade       | 17           | 68     | 34     |
  | High-grade           | 23           | 92     | 46     | 
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
WHERE contains(craftBase, "Inubrix")
SORT level ASC

```


