---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "clan-pistol"
aliases: "Clan Pistol"
source: "Pathfinder Guns & Gears"
pg: "152"
rarity: "uncommon"
trait01: "concussive"
trait02: "dwarf"
trait03: "fatal-d10"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: L
value: "5"
subvalue: "gp"
invest:
usage: "held in one hand "
license: "ORC"
group: "Firearm"
identify:
description: "The tradition of dwarves displaying their clan affiliations with special clan daggers goes back millennia, but many of the dwarf clans of Dongun Hold have their own take on the tradition, with promising young gunsmiths claiming their adulthood by crafting a specialized personal firearm using the clan's unique smithing traditions. Losing or being forced to surrender their clan pistol is a terrible embarrassment for the dwarves that carry them."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [[Stunned|stunned 1]]."
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
range: 80 ft
ammoType: "Firearm Ammunition (10 rounds)"
reload: 1
damage:  
dmg1: 1d6
dmg1Type: piercing
dmg2:
dmg2Type:
weaponType: Ranged
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
WHERE weaponbase = "Clan Pistol"
SORT level ASC

```
