---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "corset-knife"
aliases: "Corset Knife"
source: "Pathfinder Treasure Vault"
pg: "26"
rarity: ""
trait01: "agile"
trait02: "concealable"
trait03: "finesse"
trait04: "thrown-10"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/corset-knife.png
level: 0
group: "Knife"
weight: L
value: "3"
subvalue: "sp"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "A favored self-defense weapon among bar and tavern workers, the corset knife has a weighted hilt and a cylindrical, needlelike blade designed to be easily hidden in clothing, but quickly retrieved in a pinch."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target takes `dice: 1d6` 1d6 persistent bleed damage. You gain an item bonus to this bleed damage equal to the weapon's item bonus to attack rolls."
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
range: "10 ft."
ammoType:
damage:  
dmg1: 1d4
dmg1Type: piercing
dmg2:
dmg2Type:
weaponType: Simple
weaponCategory: Melee

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
WHERE weaponbase = "Corset Knife"
SORT level ASC

```
