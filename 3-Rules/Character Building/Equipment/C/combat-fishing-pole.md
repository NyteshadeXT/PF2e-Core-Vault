---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "combat-fishing-pole"
aliases: "Combat Fishing Pole"
source: "Pathfinder War of Immortals"
pg: "147"
rarity: "uncommon"
trait01: "tethered"
trait02: "thrown-20"
trait03: "versatile-p"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: L
value: "4"
subvalue: "sp"
invest:
usage: "held in two hands "
group: "Flail"
license: "ORC"
identify:
description: "The combat fishing pole is a sturdy and flexible pole that can be used as a weapon in melee. When a lure is attached to a combat fishing pole, it can be used to make thrown weapon attacks with a range increment of 20 feet, though the lure must then be reeled back in with an Interact action before the weapon can be used at range again (see the tethered trait). The ranged trip, tethered, thrown, and versatile P traits of the combat fishing pole only apply to thrown attacks made with a lure; throwing the pole itself leaves you with no practical way to retrieve it other than moving to its location and picking it up. A combat fishing pole can be used alongside fishing tackle to fish, and it adds its item bonus from weapon potency runes (if any) as an item bonus on checks to fish when used in this manner."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target is knocked [[prone]] unless they succeed at a Reflex save against your class DC."
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
ammoType: "Fishing Lure"
damage:  
dmg1: 1d8
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
WHERE weaponbase = "Combat Fishing Pole"
SORT level ASC

```
