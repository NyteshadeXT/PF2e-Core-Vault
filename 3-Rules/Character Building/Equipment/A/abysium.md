---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: pf2e-items, h-line
name: "abysium-chunk"
aliases: "Abysium Chunk"
source: "Pathfinder Lost Omens Grand Bazaar"
pg: "96"
rarity: "rare"
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
license: "OGL"
identify: ""
description: |
  A blue-green metal with an eerie green luminescence, abysium radiates power that's inimical to life. Careless exposure to the material can lead to long-term damage to the immune system; as such, mining abysium is hazardous, as large quantities of the metal in an area cause all nearby creatures to become sick. A creature carrying an abysium object is [[Sickened|sickened 1]] for a standard-grade object of light Bulk, [[Sickened|sickened 2]] for a standard-grade object of 1 Bulk or more or a high-grade object of light Bulk, or [[Sickened|sickened 3]] for a high-grade object of 1 Bulk or more. This and all other sickening effects of abysium are [[poison]] effects. Crafters can use 1 abysium chunk to create up to 6 doses of poisonous [[abysium powder]]. Unscrupulous smiths have harnessed abysium's toxic properties to create noxious weapons and deadly substances. All objects crafted from abysium shed dim light in a 10-foot radius.
  
| Abysium Items  | Hardness | HP  | BT  |
| -------------- | -------- | --- | --- |
| Thin Items     |          |     |     |
| Standard-grade | 6        | 24  | 12  |
| High-grade     | 10       | 40  | 20  |
| Items          |          |     |     |
| Standard-grade | 10       | 40  | 20  |
| High-grade     | 13       | 52  | 26  |
| Structures     |          |     |     |
| Standard-grade | 20       | 80  | 40  |
| High-grade     | 26       | 104 | 52  |

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
WHERE contains(craftBase, "Abysium")
SORT level ASC

```


