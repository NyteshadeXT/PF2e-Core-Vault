---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "breaching-pike"
aliases: "Breaching Pike"
source: "Pathfinder Player Core 2"
pg: "274"
rarity: "uncommon"
trait01: "hobgoblin"
trait02: "razing"
trait03: "reach"
trait04: ""
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
usage: "held in one hand "
license: "ORC"
identify:
group: "Spear"
description: "Forged with a heavy metal wedge effective at damaging enemy shields, breaching pikes are often used by hobgoblin infantry alongside a tower shield."
powerTitle1: "Critical Specialization (Spear)"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The weapon pierces the target, weakening its attacks. The target is [[clumsy|clumsy 1]] until the start of your next turn."
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
weaponType: "Melee"
weaponCategory: "Martial"

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
WHERE weaponbase = "Breaching Pike"
SORT level ASC

```
