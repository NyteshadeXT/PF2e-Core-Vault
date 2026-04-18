---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "gnome-amalgam-musket"
aliases: "Gnome Amalgam Musket"
source: "Pathfinder Guns & Gears"
pg: "159"
rarity: "uncommon"
trait01: "combination"
trait02: "concussive"
trait03: "fatal-d10"
trait04: "gnome"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 1
weight: 2
value: "10"
subvalue: "gp"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "Rumored to be the result of a gnomish dare to make a variant of a hooked hammer that's even more intricate and complex, this weapon adds a musket to the mix of an already overcomplicated device."
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
range: 50 ft
ammoType: "Firearm ammunition (10 rounds)"
damage:  
dmg1: 1d8
dmg1Type: bludgeoning 
dmg2: 1d6
dmg2Type: piercing
weaponType: "Melee/Ranged"
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
// change weaponbase to armorbase or shieldbase as needed and the update the equals as appropriate to the new typing

TABLE
  aliases AS "Aliases",
  level AS "Level",
  license AS "License"
FROM "3-Rules/Character Building/Equipment"
WHERE weaponbase = "Gnome Amalgam Musket"
SORT level ASC

```
