---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "aldori-dueling-sword"
aliases: "Aldori Dueling Sword"
source: "Pathfinder Lost Omens World Guide"
pg: "28"
rarity: "uncommon"
trait01: "finesse"
trait02: "versatile-p"
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 1
weight: 1
value: "2"
subvalue: "gp"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "An Aldori dueling sword is a slim, single-bladed dueling sword with a slight curve and a sharp, reinforced point."
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
damage: 1d8 slashing
dmg1:
dmg1Type:
dmg2:
dmg2Type:
weaponType:
weaponCategory:

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
WHERE weaponbase = "Aldori Dueling Sword"
SORT level ASC

```
