---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "combat-lure"
aliases: "Combat Lure"
source: "Pathfinder Treasure Vault"
pg: "26"
rarity: "uncommon"
trait01: "finesse"
trait02: "tethered"
trait03: "thrown-20"
trait04: "training"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/combat-lure.png
level: 0
weight: 1
value: "2"
subvalue: "gp"
invest:
usage: "held in two hands "
license: "ORC"
identify:
group: "Flail"
description: "A combat lure is a weighted leather sack at the end of a length of toughened cord and can be used both to bludgeon opponents and signal directions to a trained avian or other animal."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target is knocked [[prone]] unless they succeed at a Reflex save against your class DC."
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
dmg1: 1d6
dmg1Type: bludgeoning
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
WHERE weaponbase = "Combat Lure"
SORT level ASC

```
