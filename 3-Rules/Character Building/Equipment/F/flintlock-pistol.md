---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "flintlock-pistol"
aliases: "Flintlock Pistol"
source: "Pathfinder Guns & Gears"
pg: "153"
rarity: "uncommon"
trait01: "concussive"
trait02: "fatal-d8"
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/flintlock-pistol.png
level: 0
weight: 1
value: "4"
subvalue: "gp"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "Though less accurate and powerful than a flintlock musket, the flintlock pistol is a preferred weapon of privateers thanks to its more compact size and affordability. Pirate captains often wear a brace of such pistols in a bandolier so they can draw and fire without stopping to reload."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [[Conditions/Stunned 1|stunned 1]]."
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
range: 40 ft
ammoType:
damage: 1d4 piercing
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
WHERE weaponbase = "Flintlock Pistol"
SORT level ASC

```
