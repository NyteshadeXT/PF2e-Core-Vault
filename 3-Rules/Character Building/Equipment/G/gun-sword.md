---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "gun-sword"
aliases: "Gun Sword"
source: "Pathfinder Guns & Gears"
pg: "159"
rarity: "uncommon"
trait01: "combination"
trait02: "concussive"
trait03: "kickback"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 1
weight: 2
value: "13"
subvalue: "gp"
group: "Sword/Firearm"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "This weapon consists of a large sword with a powerful gun based on a harmona gun down the center. Vanguards and other characters who rely on Strength and Dexterity enjoy the power and flexibility of a gun sword."
powerTitle1:
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1:
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
range: 30 ft
reload: 1
ammoType: "Firearm Ammunition (10 rounds)"
damage:  
dmg1: 1d10 
dmg1Type: piercing
dmg2: 1d8
dmg2Type: slashing
weaponType: Melee/Ranged
weaponCategory: Marital

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
WHERE weaponbase = "Gun Sword"
SORT level ASC

```
