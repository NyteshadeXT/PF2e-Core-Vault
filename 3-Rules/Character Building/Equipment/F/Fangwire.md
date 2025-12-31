---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: pf2e-items, h-line
name: "fangwire"
aliases: "Fangwire"
source: "Pathfinder Player Core 2"
pg: "274"
rarity: "uncommon"
trait01: "agile"
trait02: "backstabber"
trait03: "deadly d8"
trait04: "finesse"
trait05: "grapple"
trait06: "kobold"
trait07:
trait08:
image: zz-Attachments/fangwire.png
level: 0
group: "Brawling"
bulk: "L"
value: "4"
subvalue: "gp"
invest: 
usage: "one hand"
license: "ORC"
identify: ""
description: "This kobold wire is thin and hard to see, making it perfect for an ambush. The wielder flicks one handle around a vulnerable spot so that it serves as a catch for the wire, then yanks the other handle back, pulling the wire tight and inflicting painful lacerations. The function and name come from a wire-based trap called a “slow fang.”"
activate: ""
craft: 
destruction: 

#========================================================#
#                  Ability #1 PROPERTIES                 #
#========================================================#
powerTitle1: "Critical Specialization"
actionEconomy1: 
type1: 
frequency1: 
requirement1:
trigger1:
activate1: 
duration1: 
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [[slowed|slowed 1]] until the end of your next turn."

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
dmg1: 1d4
dmg1Type: slashing
dmg2: 
dmg2Type: 
weaponType: Melee
weaponCategory: Martial

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
WHERE contains(weaponbase, "Fangwire")
SORT level ASC

```


