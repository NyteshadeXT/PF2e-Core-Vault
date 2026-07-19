---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "mace-multipistol"
aliases: "Mace Multipistol"
source: "Pathfinder Guns & Gears"
pg: "159"
rarity: "uncommon"
trait01: "capacity-3"
trait02: "combination"
trait03: "concussive"
trait04: "fatal-d8"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 1
value: "13"
subvalue: "gp"
group: "Club/Firearm"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "At first glance this weapon looks like nothing more than an iron-bound club. But the top of the weapon features a latch that opens to reveal three rotating pistol muzzles concealed in the mace's head that can be fired and rotated using triggers built into the weapon's haft."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [[Stunned|stunned 1]]."
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
ammoType:
damage:  
dmg1: 1d4
dmg1Type: piercing
dmg2: 1d6
dmg2Type: bludgeoning
weaponType: Melee/Ranged
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
WHERE weaponbase = "Mace Multipistol"
SORT level ASC

```
