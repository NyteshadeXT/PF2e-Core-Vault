---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "bastard-sword"
aliases: "Bastard Sword"
source: "Pathfinder Player Core"
pg: "278"
rarity: ""
trait01: "two-hand-d12"
trait02: ""
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 1
value: "4"
subvalue: "gp"
invest:
usage: "held in one hand "
group: "Sword"
license: "ORC"
identify:
description: "This broad-bladed sword, sometimes called the hand-and-a-half sword, has a longer grip so it can be held in one hand or used with two hands to provide extra slashing power."
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
dmg1: 1d8
dmg1Type: "slashing"
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
// change to weaponbase/armorbase/shieldbase/craftbase as needed and the update the equals as appropriate to the new typing

TABLE
  aliases   AS "Aliases",
  level     AS "Level",
  license   AS "License"
FROM "3-Rules/Character Building/Equipment"
WHERE contains(weaponbase, "Bastard Sword")
SORT level ASC

```