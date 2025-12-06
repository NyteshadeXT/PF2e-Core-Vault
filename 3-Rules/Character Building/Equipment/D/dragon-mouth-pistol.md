---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: pf2e-items, h-line
name: "dragon-mouth-pistol"
aliases: "Dragon Mouth Pistol"
source: "Pathfinder NPC Core"
pg: "50"
rarity: "uncommon"
trait01: "concussive"
trait02: "scatter 5ft."
trait03: ""
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/dragon-mouth-pistol.png
level: 0
group: "Firearm"
bulk: 1
value: "7"
subvalue: "gp"
invest: 
usage: "one hand"
license: "ORC"
identify: ""
description: "Similar to the [[Blunderbuss]], a dragon-mouth pistol fires pellets from a flared barrel. Though less powerful than a blunderbuss, the dragonmouth pistol is appreciated for its portability and onehanded design. The name was coined because of the destructive belch of this handheld scatter weapon, but many gunsmiths craft dragon-mouth pistols with elaborate embellishments that resemble a stylized dragon's maw framing the barrel."
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
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [[Stunned|stunned 1]]."

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
range: "20ft."
ammoType: "Firearm Ammunition (10 rounds)"
reload: 1
damage: 
dmg1: 1d6
dmg1Type: Piercing 
dmg2: 
dmg2Type: 
weaponType: Ranged
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
WHERE contains(weaponbase, "Dragon Mouth Pistol")
SORT level ASC

```


