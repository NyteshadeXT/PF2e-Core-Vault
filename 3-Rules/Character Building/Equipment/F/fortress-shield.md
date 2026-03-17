---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "fortress-shield"
aliases: "Fortress Shield"
source: "Pathfinder Treasure Vault"
pg: "20"
rarity: ""
trait01: "hefty-2"
trait02: ""
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/fortress-shield.png
level: 1
weight: 5
value: "20"
subvalue: "gp"
invest:
usage: "held in one hand"
license: "ORC"
identify:
description: "Also known as portable walls, these thick and heavy shields are slightly larger than tower shields. Like tower shields, they're typically made from wood reinforced with metal, but many are made from larger amounts of metal or even stone.  Getting the higher bonus (+4 instead of +3) for this shield requires using the [[Take Cover]] action while the shield is raised."
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
baseAC: 3
modAC:
dexCap:
strRequirement:
checkPenalty:
speedPenalty: "-10ft"
armorCategory:
resist:
immunity:
conditionImmunity:
hardness: 6
hp: 24
bt: 12

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
WHERE shieldbase = "Fortress Shield"
SORT level ASC

```
