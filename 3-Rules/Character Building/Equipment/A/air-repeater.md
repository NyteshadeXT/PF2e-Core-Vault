---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "air-repeater"
aliases: "Air Repeater"
source: "Pathfinder Guns & Gears"
pg: "152"
rarity: "uncommon"
trait01: "agile"
trait02: "repeating"
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: L
value: "4"
subvalue: "gp"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "A thin-barreled firearm that uses a container of pressurized air instead of black powder to propel small metal bullets from an attached cartridge, the air repeater has fallen out of common use in Arcadia due to its poor stopping power, though it's still used occasionally for casual hunting and sport shooting. The air repeater and its longer-ranged, two-handed variant are still valued by some for their ability to allow a shooter to fire multiple rounds without needing to stop to reload or crank to a new chamber. A typical air repeater magazine holds 6 pellets."
powerTitle:
actionEconomy:
type:
frequency:
trigger:
mechanics:
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
range: 30 ft
ammoType:
damage: 1d4 piercing
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
WHERE weaponbase = "Air Repeater"
SORT level ASC

```
