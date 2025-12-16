---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "dueling-spear"
aliases: "Dueling Spear"
source: "Pathfinder Lost Omens The Grand Bazaar"
pg: "105"
rarity: "uncommon"
trait01: "disarm"
trait02: "finesse"
trait03: "versatile-s"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 2
value: "2"
subvalue: "gp"
invest:
group: "Spear"
usage: "held in two hands "
license: "ORC"
identify:
description: "This spear has a spade-like blade at one end and a forked blade at the other, making it resemble a large arrow. It's well balanced for spinning and twisting maneuvers. The spade-like end can be used for slashing and stabbing, while the forked end is effective at wrenching a weapon from an enemy's grasp."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The weapon pierces the target, weakening its attacks. The target is [[clumsy|clumsy 1]] until the start of your next turn."
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
ammoType:
damage:  
dmg1: 1d8
dmg1Type: piercing
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
WHERE weaponbase = "Dueling Spear"
SORT level ASC

```
