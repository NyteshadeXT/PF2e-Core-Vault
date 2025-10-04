---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "coat-pistol"
aliases: "Coat Pistol"
source: "Pathfinder Guns & Gears"
pg: "152"
rarity: "uncommon"
trait01: "concealable"
trait02: "concussive"
trait03: "fatal-d8"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: L
value: "5"
subvalue: "gp"
invest:
group: "Firearm"
usage: "held in one hand "
license: "ORC"
identify:
description: "This small pistol is easily concealed inside a jacket or some other article of clothing. Rarely kept as a primary weapon, coat pistols are equally favored by clever assassins and traveling Alkenstar aristocrats."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [[Stunned|Stunned 1]]."
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
ammoType: "Firearm Ammunition (10 rounds)"
reload: 1
damage:  
dmg1: 1d4
dmg1Type: piercing
dmg2:
dmg2Type:
weaponType: Ranged
weaponCategory: Simple

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
WHERE weaponbase = "Coat Pistol"
SORT level ASC

```
