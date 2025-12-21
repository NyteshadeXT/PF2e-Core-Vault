---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "explosive-dogslicer"
aliases: "Explosive Dogslicer"
source: "Pathfinder Guns & Gears"
pg: "159"
rarity: "uncommon"
trait01: "backstabber"
trait02: "combination"
trait03: "goblin"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 1
weight: 2
value: "10"
subvalue: "gp"
group: "Firearm"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "An explosive dogslicer is a sneaky, explosive weapon that often brings perverse joy to the goblins who use them. At first glance, it appears to be a triple-bladed dogslicer with an oversized guard. However, the explosive dogslicer is a combination weapon. As a melee weapon it has the additional traits of Agile, Critical Fusion and Finesse.  As a ranged weapon it instead has the additinoal traits of Fatal D10 and Scatter 5ft."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [stunned|stunned 1]."
powerTitle2:
actionEconomy2:
type2:
frequency2:
trigger2:
mechanics2: "**Secondary Effect** "
craft:

#========================================================#
#                   WEAPON PROPERTIES                    #
#========================================================#
range: 20 ft
ammoType: "Firearm Ammunition (5 rounds)"
reload: 1
damage:  
dmg1: 1d6
dmg1Type: slashing
dmg2:
dmg2Type:
weaponType: "Melee/Ranged"
weaponCategory: "Advanced"

#========================================================#
#                    ARMOR PROPERTIES                    #
#========================================================#
baseAC:
modAC:
dexCap:
strRequirement:
checkPenalty:
speedPenalty:
armorCategory:
resist:
immunity:
conditionImmunity:

#========================================================#
#                 MAGIC ITEM PROPERTIES                  #
#========================================================#
weaponBase:
armorBase:

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
WHERE weaponbase = "Explosive Dogslicer"
SORT level ASC

```
