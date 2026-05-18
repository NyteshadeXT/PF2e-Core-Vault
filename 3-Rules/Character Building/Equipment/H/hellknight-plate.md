---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "hellknight-plate"
aliases: "Hellknight Plate"
source: "Pathfinder Lost Omens Character Guide"
pg: "80"
rarity: "uncommon"
trait01: "bulwark"
trait02: ""
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 2
weight: 4
value: "35"
subvalue: "gp"
group: "Plate"
invest:
usage: "wornarmor"
license: "ORC"
identify:
description: "Few armors in the Inner Sea region are as memorable as the iconic Hellknight plate. While each order has its own flourishes, Hellknight plate is instantly recognizable to any who know of the Hellknights. Hellknights go to extreme measures to punish non-Hellknights who get their hands on Hellknight plate, and the reward is not usually worth the risk, since for non-Hellknights, the armor is functionally similar to [[full-plate|Full Plate]]."
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
dmg1:
dmg1Type:
dmg2:
dmg2Type:
weaponType:
weaponCategory:

#========================================================#
#                    ARMOR PROPERTIES                    #
#========================================================#
baseAC: 6
modAC:
dexCap: 0
strRequirement: "+4"
checkPenalty: "-3"
speedPenalty: "-10 ft."
armorCategory: "Heavy"
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
WHERE weaponbase = "Hellknight Plate"
SORT level ASC

```
