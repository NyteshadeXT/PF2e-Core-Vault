---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "long-air-repeater"
aliases: "Long Air Repeater"
source: "Pathfinder Guns & Gears"
pg: "153"
rarity: "uncommon"
trait01: "kickback"
trait02: "repeating"
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 1
value: "6"
subvalue: "gp"
group: "Firearm"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "Like the one-handed air repeater, this thin-barreled firearm uses a container of pressurized air instead of black powder to propel small metal pellets from an attached cartridge. The long air repeater has better range and ammo capacity than the one-handed variant, though it still lacks significant stopping power. A typical long air repeater magazine holds 8 pellets."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [[stunned|stunned 1]]."
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
range: 60 ft
ammoType: "Firearm Ammunition (10 rounds)"
reload: 0
damage:  
dmg1: 1d4
dmg1Type: piercing
dmg2:
dmg2Type:
weaponType: Ranged
weaponCategory: Simple

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
WHERE weaponbase = "Long Air Rifle"
SORT level ASC

```
