---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "backpack-ballista"
aliases: "Backpack Ballista"
source: "Pathfinder Guns & Gears"
pg: "62"
rarity: "uncommon"
trait01: ""
trait02: ""
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 1
weight: 2
value: "18"
subvalue: "gp"
group: "Crossbow"
invest:
usage: "held in one plus hands "
license: "ORC"
identify:
description: "This complex wooden device, worn on the back, contains a miniature ballista on a retractable arm. As an [[Interact]] action, you can pull a lever to deploy or retract the ballista. As long as it remains deployed, you must hold the ballista using that hand or some of the components spill out onto the ground, just like dropping any other weapon. While deployed, the device opens and raises the ballista up over your shoulder. While retracted, the ballista and its mount slide down and are concealed within the device. Although a backpack ballista packs a punch, the device is a challenge to operate. Reloading it takes 1 minute and can't be done while worn. As normal, you can't wear a backpack ballista with another backpack."
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
range: "180 ft"
ammoType: "[[backpack-ballista-bolt|Backpack Ballista Bolt]]"
damage:  
reload: "1 minute"
dmg1: 1d12
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
WHERE contains(weaponbase, "Backpack Ballista")
SORT level ASC

```