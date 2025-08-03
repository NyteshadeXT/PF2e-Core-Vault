---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "bo-staff"
aliases: "Bo Staff"
source: "Pathfinder Player Core"
pg: "278"
rarity: ""
trait01: "monk"
trait02: "parry"
trait03: "reach"
trait04: "trip"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 2
value: "2"
subvalue: "sp"
group: "Club"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "This strong but slender staff is tapered at the ends and well balanced. It's designed to be an offensive and defensive weapon."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "You knock the target away from you up to 10 feet (you choose the distance). This is forced movement."
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
// change to weaponbase/armorbase/shieldbase/craftbase as needed and the update the equals as appropriate to the new typing

TABLE
  aliases   AS "Aliases",
  level     AS "Level",
  license   AS "License"
FROM "3-Rules/Character Building/Equipment"
WHERE contains(weaponbase, "Bo Staff")
SORT level ASC

```