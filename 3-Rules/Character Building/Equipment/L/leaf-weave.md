---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: pf2e-items, h-line
name: "leaf-weave"
aliases: "Leaf Weave"
source: "Pathfinder Treasure Vault"
pg: "293"
rarity: ""
trait01: "laminar"
trait02: ""
trait03: ""
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/assets/imageplaceholder.png
level: 
group: "Wood"
bulk: 1
value: "4"
subvalue: "gp"
invest: 
usage: "worn armor"
license: "ORC"
identify: ""
description: "Specialized crafters, often elves, create leaf weave out of sturdy leaves from ancient or magically enriched trees. Such leaves, when treated properly, have the strength of leather, and other tough plant materials hold the leaves together to form the armor. Such suits are popular among those who wish to avoid materials taken from slain beasts. As a material, leaf weave has the same statistics as thin wood."
activate: ""
craft: 
destruction: 

#========================================================#
#                  Ability #1 PROPERTIES                 #
#========================================================#
powerTitle1: "Armor Specialization"
actionEconomy1: 
type1: 
frequency1: 
requirement1:
trigger1:
activate1: 
duration1: 
mechanics1: "Wood armor is generally flexible and light, but it can splinter as it breaks, throwing off shards and fragments that damage foes who deal you critical blows. If a foe critically hits you with a melee unarmed attack or critically hits you with any melee attack while adjacent to you, it takes piercing damage equal to 3 + the armor's potency rune value for medium armor, or 5 + the armor's potency rune value for heavy armor."

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
baseAC: 1
dexCap: 4
strRequirement: "+0"
checkPenalty: "-1"
speedPenalty: 
armorCategory: "Light" 
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
WHERE contains(armorbase, "Leaf Weave")
SORT level ASC

```


