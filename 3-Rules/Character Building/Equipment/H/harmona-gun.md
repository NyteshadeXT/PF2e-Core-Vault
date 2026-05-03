---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "harmona-gun"
aliases: "Harmona Gun"
source: "Pathfinder Guns & Gears"
pg: "153"
rarity: "uncommon"
trait01: "kickback"
trait02: ""
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 2
value: "8"
subvalue: "gp"
group: "Firearm"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "A favored weapon of monster hunters in Arcadia, the harmona gun is a large-bore long gun that fires a heavy, slow-moving round. The gun got its name due to the eerie similarity between the buzzing sound its oversized projectiles make flying through the air and the flight of a fey bird called a harmona."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [[Stunned|stunned 1]]."
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
range: 150 ft
ammoType: "Firearm Ammunition (5 rounds)"
reload: 1
damage:  
dmg1: 1d10
dmg1Type: bludgeoning
dmg2:
dmg2Type:
weaponType: Ranged
weaponCategory: Martial

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
WHERE weaponbase = "Harmona Gun"
SORT level ASC

```
