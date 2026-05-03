---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "hammer-gun"
aliases: "Hammer Gun"
source: "Pathfinder Guns & Gears"
pg: "159"
rarity: "uncommon"
trait01: "combination"
trait02: "concussive"
trait03: "fatal-d10"
trait04: "critical fusion"
trait05: "shove"
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 1
weight: 2
value: "13"
subvalue: "gp"
group: "Hammer/Firearm"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "This weapon, favored by dwarves and those who like smashing and shooting, takes the form of a stoutly built gun designed similarly to an arquebus with a hammer head built into the muzzle, decreasing kickback but limiting range."
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
range: 60 ft
ammoType: "Firearm Ammunition (10 rounds)"
reload: 1
damage:  
dmg1: 1d10
dmg1Type: bludgeoning
dmg2: 1d6
dmg2Type: piercing
weaponType: Melee/Ranged
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
WHERE weaponbase = "Hammer Gun"
SORT level ASC

```
