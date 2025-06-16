---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "backpack-catapult"
aliases: "Backpack Catapult"
source: "Pathfinder Guns & Gears"
pg: "62"
rarity: "uncommon"
trait01: "volley-50"
trait02: ""
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 1
weight: 3
value: "20"
subvalue: "gp"
group: "Sling"
invest:
usage: "held in one plus hands "
license: "ORC"
identify:
description: "This wooden device is worn on the back and contains a miniature catapult mounted on a retractable frame. As an [[Interact]] action, you can pull a lever to deploy or retract the catapult. As long as it remains deployed, you must hold the catapult using that hand or some of the components spill out onto the ground, just like dropping any other weapon. While deployed, the device opens and raises the catapult up over your shoulder. While retracted, the catapult and its mount slide down and are [[Concealed]] within the device. A backpack catapult fires specialized stone spheres that are loaded into the bucket while unworn and retracted, through a sliding hatch; the reloading process takes 1 minute. To prevent misfires and accidental injury, the bucket fully encloses the stone while deployed, only opening when fired. As normal, you can't wear a backpack catapult with another backpack."
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
range: "240 ft"
ammoType: "[[backpack-catapult-stone|Backpack Catapult Stone]]"
reload: "1 minute"
damage:  
dmg1: 1d12
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
WHERE contains(weaponbase, "Backpack Catapult")
SORT level ASC

```