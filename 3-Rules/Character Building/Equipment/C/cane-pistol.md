---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "cane-pistol"
aliases: "Cane Pistol"
source: "Pathfinder Guns & Gears"
pg: "159"
rarity: "uncommon"
trait01: "combination"
trait02: "concealable"
trait03: "concussive"
trait04: "fatal-d8"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 1
value: "8"
subvalue: "gp"
invest:
group: "Club/Firearm"
usage: "held in one hand "
license: "ORC"
identify:
description: "This fashionable cane's handle hides a dueling pistol fired through the thin, painted cap at the bottom of the cane."
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
ammoType: "Fire Ammunition (10 rounds)"
reload: 1
damage:  
dmg1: 1d4
dmg1Type: piercing
dmg2: 1d6
dmg2Type: bludgeoning
weaponType: Martial
weaponCategory: "Melee/Ranged"

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
WHERE weaponbase = "Cane Pistol"
SORT level ASC

```
