---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "claw-blade"
aliases: "Claw Blade"
source: "Pathfinder Player Core 2"
pg: "274"
rarity: "uncommon"
trait01: "agile"
trait02: "catfolk"
trait03: "deadly-d8"
trait04: "disarm"
trait05: "finesse"
trait06: "versatile-p"
trait07: ""
trait08: ""
image: zz-Attachments/claw-blade.png
level: 0
weight: L
value: "2"
subvalue: "gp"
invest:
group: "Knife"
usage: "held in one hand "
license: "ORC"
identify:
description: "This handheld weapon's three parallel blades extend between the fingers to resemble the natural claws of the amurruns who created them, providing a way for those catfolk without suitable natural claws to share the fighting customs of their kin."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target takes `dice: 1d6` 1d6 persistent bleed damage. You gain an item bonus to this bleed damage equal to the weapon's item bonus to attack rolls."
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
damage:  
dmg1: 1d4
dmg1Type: slashing
dmg2:
dmg2Type:
weaponType: Melee
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
WHERE weaponbase = "Claw Blade"
SORT level ASC

```
