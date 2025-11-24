---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "double-barreled-musket"
aliases: "Double-Barreled Musket"
source: "Pathfinder Guns & Gears"
pg: "152"
rarity: "uncommon"
trait01: "concussive"
trait02: "double-barrel"
trait03: "fatal-d10"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 1
weight: 1
value: "11"
subvalue: "gp"
invest:
usage: "held in two hands "
license: "ORC"
group: "Firearm"
identify:
description: "This flintlock breech-loader has two side-by-side barrels. Though less accurate than a standard musket, a double-barreled musket offers versatility in firing options. Many of Alkenstar's famous shield marshals save their earnings to buy a double-barreled musket as their first personal firearm."
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
range: 60 ft
ammoType: "Firearm Ammunition (10 rounds)"
damage:  
dmg1: 1d6
dmg1Type: piercing
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
WHERE weaponbase = "Double Barreled Musket"
SORT level ASC

```
