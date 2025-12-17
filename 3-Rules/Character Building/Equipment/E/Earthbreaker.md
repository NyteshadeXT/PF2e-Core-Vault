---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: pf2e-items, h-line
name: "earthbreaker"
aliases: "Earthbreaker"
source: "Pathfinder Treasure Vault"
pg: "27"
rarity: ""
trait01: "razing"
trait02: "shove"
trait03: "two-hand d10"
trait04: "versatile p"
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/earthbreaker.png
level: 0
group: "Hammer"
bulk: 2
value: "4"
subvalue: "gp"
invest: 
usage: "one hand"
license: "ORC"
identify: ""
description: "This massive hammer's metal head is shaped or molded with heavy metal wedges along its primary striking surface, enabling it to tear through shields and armor with ease."
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
mechanics1: "The target is knocked [[prone]] unless they succeed at a Fortitude save against your class DC."

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
dmg1: 1d6
dmg1Type: Bludgeoning
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
WHERE contains(weaponbase, "Earthbreaker")
SORT level ASC

```

