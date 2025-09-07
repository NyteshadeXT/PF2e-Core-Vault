---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "capturing-spetum"
aliases: "Capturing Spetum"
source: "Pathfinder Player Core 2"
pg: "274"
rarity: "uncommon"
trait01: "hampering"
trait02: "hobgoblin"
trait03: "reach"
trait04: "trip"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 2
value: "9"
subvalue: "gp"
invest:
usage: "held in two hands "
license: "ORC"
group: "Polearm"
identify:
description: "Hobgoblins use these polearms both as standard issue for aggressive military units and on an individual basis for hunting fugitives."
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
range: 
ammoType:
damage:  
dmg1: 1d10
dmg1Type: piercing
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
WHERE weaponbase = "Capturing Spetum"
SORT level ASC

```
