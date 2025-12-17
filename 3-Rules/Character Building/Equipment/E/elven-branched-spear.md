---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "elven-branched-spear"
aliases: "Elven Branched Spear"
source: "Pathfinder Lost Omens The Grand Bazaar"
pg: "105"
rarity: "uncommon"
trait01: "deadly-d8"
trait02: "elf"
trait03: "finesse"
trait04: "reach"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 1
value: "3"
subvalue: "gp"
invest:
usage: "held in two hands "
group: "Spear"
license: "ORC"
identify:
description: "Several short branches project from this delicate spear's shaft, each angled forward and tipped with a leaflike blade."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The weapon pierces the target, weakening its attacks. The target is [[clumsy|clumsy 1]] until the start of your next turn."
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
dmg1: 1d6
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
WHERE weaponbase = "Elven Branched Spear"
SORT level ASC

```
