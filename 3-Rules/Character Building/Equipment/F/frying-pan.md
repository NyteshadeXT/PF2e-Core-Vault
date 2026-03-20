---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "frying-pan"
aliases: "Frying Pan"
source: "Pathfinder Treasure Vault"
pg: "27"
rarity: ""
trait01: "fatal-d8"
trait02: "halfling"
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: L
value: "1"
subvalue: "sp"
group: "Club"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "The cast-iron frying pan is an essential tool for adventuring halflings, gold panners, and remote tavern owners. Characters with the [[Halfling Weapon Familiarity]] ancestry feat are trained in the frying pan."
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
dmg1: 1d4
dmg1Type: bludgeoning
dmg2:
dmg2Type:
weaponType: Simple
weaponCategory: Club

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
WHERE weaponbase = "Frying Pan"
SORT level ASC

```
