---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "bec-de-corbin"
aliases: "Bec de Corbin"
source: "Pathfinder Treasure Vault"
pg: "26"
rarity: ""
trait01: "razing"
trait02: "reach"
trait03: "shove"
trait04: "versatile-b"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/bec-de-corbin.png
level: 0
weight: 2
value: "4"
subvalue: "gp"
invest:
usage: "held in two hands "
license: "ORC"
group: "Polearm"
identify:
description: "A bec de corbin is a spiked polearm that uses a hammer head to help balance the spike. The hammer portion can be used as a secondary striking surface, while the spike or fluke is specially designed to punch through armor and shields."
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
dmg1Type: "piercing"
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
WHERE contains(weaponbase, "Bec de Corbin")
SORT level ASC

```
