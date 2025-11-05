---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "dagger-pistol"
aliases: "Dagger Pistol"
source: "Pathfinder Guns & Gears"
pg: "159"
rarity: "uncommon"
trait01: "combination"
trait02: "concussive"
trait03: "fatal-d8"
trait04: "agile"
trait05: "critical fusion"
trait06: "finesse"
trait07: "thrown 10ft."
trait08: "versatile s"
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: L
value: "8"
subvalue: "gp"
invest:
group: "Firearm/Knife"
usage: "held in one hand "
license: "ORC"
identify:
description: "This weapon, favored by rangers and other wilderness wanderers, takes the form of a stoutly built pistol with a dagger blade attached beneath the barrel and extending out past the muzzle."
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
range: 30 ft
ammoType: "Firearm Ammunition (10 rounds)"
damage:  
dmg1: 1d4
dmg1Type: piercing
dmg2: 1d4
dmg2Type: piercing
weaponType: Ranged/Melee
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
WHERE weaponbase = "Dagger Pistol"
SORT level ASC

```
