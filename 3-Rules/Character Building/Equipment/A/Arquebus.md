---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "arquebus"
aliases: "Arquebus"
source: "Pathfinder NPC Core"
pg: "50"
rarity: ""
trait01: "concussive"
trait02: "fatal-d12"
trait03: "kickback"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 2
value: "8"
subvalue: "gp"
invest:
usage: "held in two hands "
group: "Firearm"
license: "ORC"
identify:
description: "This is a long rifle that offers more range than the average firearm, though the long barrel and ferocious kickback make the weapon particularly unsteady unless a [[tripod]] or other stand is used to stabilize it."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [[Stunned 1]]."
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
range: 150 ft
ammoType: "firearm ammunition (10 rounds)"
reload: 1
damage: 
dmg1: 1d8
dmg1Type: "piercing"
dmg2:
dmg2Type:
weaponType: "Ranged"
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
WHERE contains(weaponbase, "Arquebus")
SORT level ASC

```

