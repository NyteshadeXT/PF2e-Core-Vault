---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "gnome-hooked-hammer"
aliases: "Gnome Hooked Hammer"
source: "Pathfinder Player Core"
pg: "278"
rarity: "uncommon"
trait01: "gnome"
trait02: "trip"
trait03: "two-hand-d10"
trait04: "versatile-p"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/gnome-hooked-hammer.png
level: 0
weight: 1
value: "2"
subvalue: "gp"
group: "Hammer"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "This gnome tool and weapon features a hammer at one end and a curved pick on the other. It's such a strange and awkward weapon that others think the gnomes are slightly erratic for using it."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target is knocked [[prone]] unless they succeed at a Fortitude save against your class DC."
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
dmg1: 1d6
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
// change weaponbase to armorbase or shieldbase as needed and the update the equals as appropriate to the new typing

TABLE
  aliases AS "Aliases",
  level AS "Level",
  license AS "License"
FROM "3-Rules/Character Building/Equipment"
WHERE weaponbase = "Gnome Hooked Hammer"
SORT level ASC

```

