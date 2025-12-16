---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "dwarven-dorn-dergar"
aliases: "Dwarven Dorn-Dergar"
source: "Pathfinder Treasure Vault"
pg: "27"
rarity: "uncommon"
trait01: "dwarf"
trait02: "razing"
trait03: "reach"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/dwarven-dorn-dergar.png
level: 0
weight: 2
value: "8"
subvalue: "gp"
group: "Flail"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "A heavy, weighted cube of metal at the end of a long chain, the dorn-dergar is used by dwarven berserkers and sappers who specialize in breaking through lines of shielded opponents or disabling enemy siege weapons."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target is knocked [[prone]] unless they succeed at a Reflex save against your class DC."
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
dmg1: 1d10
dmg1Type: bludgeoning
dmg2:
dmg2Type:
weaponType: Melee
weaponCategory: Advanced

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
WHERE weaponbase = "Dwarven Dorn Dergar"
SORT level ASC

```
