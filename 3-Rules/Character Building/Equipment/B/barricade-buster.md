---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "barricade-buster"
aliases: "Barricade Buster"
source: "Pathfinder Treasure Vault"
pg: "30"
rarity: "uncommon"
trait01: "kickback"
trait02: "orc"
trait03: "razing"
trait04: "repeating"
trait05: "volley-20"
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 1
weight: 3
value: "9"
subvalue: "gp"
invest:
usage: "held in two hands "
license: "ORC"
group: "Firearm"
identify:
description: "Developed by a half-orc inventor from Alkenstar who brought the technology north to battle the Whispering Tyrant alongside the orc hordes of Belkzen, the barricade buster features eight barrels fixed around a central pivot attached to a handle and firing mechanism. A barricade buster fires spheres of metal with extreme velocity and very little accuracy."
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
range: "40 ft"
ammoType: "8-round magazine"
reload: 0
damage:  
dmg1: 1d10
dmg1Type: "bludgeoning"
dmg2:
dmg2Type:
weaponType: "Ranged"
weaponCategory: "Advanced"

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
WHERE contains(weaponbase, "Barricade Buster")
SORT level ASC

```