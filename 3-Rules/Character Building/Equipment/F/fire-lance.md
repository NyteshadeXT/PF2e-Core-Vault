---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "fire-lance"
aliases: "Fire Lance"
source: "Pathfinder Guns & Gears"
pg: "153"
rarity: "uncommon"
trait01: "fatal-d10"
trait02: ""
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 2
value: "3"
subvalue: "gp"
group: "Firearm"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "This amazingly simple projectile weapon is nothing more than a metal tube packed with black powder and a stopper, attached to the sharpened head of a javelin. A loaded fire lance can be wielded as a normal spear, though it requires an Interact action to regrip the weapon and hold it properly when switching from one use to another. Fire lances are most commonly found in Tian Xia, though occasionally one makes its way all the way to Avistan, typically in the hands of a Tien mercenary or caravan guard."
powerTitle1: "Critial Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [[Stunned|stunned 1]]"
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
range: 10 ft
ammoType: "Firearm Ammunition (10 rounds)"
reload: 2
damage:  
dmg1: 1d6
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
WHERE weaponbase = "Fire Lance"
SORT level ASC

```
