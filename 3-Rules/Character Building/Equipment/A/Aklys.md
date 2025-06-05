---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "aklys"
aliases: "Aklys"
source: "Pathfinder Bestiary"
pg: "85"
rarity: "uncommon"
trait01: "tethered"
trait02: "thrown-20"
trait03: "trip"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 1
value: "5"
subvalue: "gp"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "The aklys is a throwing club with a hook on one end and a lengthy cord attached to the other. Though aklyses aren't available in most shops, one might be purchased for 5 gp from a vendor that specializes in strange weapons."
powerTitle: "Critical Specialization"
actionEconomy:
type:
frequency:
trigger:
mechanics: "You knock the target away from you up to 10 feet (you choose the distance). This is Forced Movement."
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
range: 
ammoType:
damage: 1d6 bludgeoning
dmg1:
dmg1Type:
dmg2:
dmg2Type:
weaponType:
weaponCategory:

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
WHERE weaponbase = "Aklys"
SORT level ASC

```
