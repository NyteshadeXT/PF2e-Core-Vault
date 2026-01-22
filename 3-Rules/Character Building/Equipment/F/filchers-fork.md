---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "filchers-fork"
aliases: "Filcher's Fork"
source: "Pathfinder Player Core"
pg: "278"
rarity: "uncommon"
trait01: "agile"
trait02: "backstabber"
trait03: "deadly-d6"
trait04: "finesse"
trait05: "halfling"
trait06: "thrown-20"
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: L
value: "1"
subvalue: "gp"
invest:
usage: "held in one hand "
license: "ORC"
group: "Spear"
identify:
description: "This halfling weapon looks like a long, two-pronged fork and is used as both a weapon and a cooking implement."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The weapon pierces the target, weakening its attacks. The target is [[Clumsy|clumsy 1]] until the start of your next turn."
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
range: "20 ft."
ammoType:
damage:  
dmg1: 1d4
dmg1Type: piercing
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
WHERE weaponbase = "Filchers Fork"
SORT level ASC

```
