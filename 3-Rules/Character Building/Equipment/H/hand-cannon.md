---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "hand-cannon"
aliases: "Hand Cannon"
source: "Pathfinder Guns & Gears"
pg: "153"
rarity: "uncommon"
trait01: "modular"
trait02: ""
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/hand-cannon.png
level: 0
weight: 1
value: "3"
subvalue: "gp"
group: "Firearm"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "Popular among privateers and mercenaries in Goka, hand cannons are little more than a hardened tube with a handle and external ignition attached. A hand cannon can be used to fire almost anything that can be packed into its barrel. The wielder of a hand cannon can change the damage type granted by its modular trait as part of the same Interact action used to reload."
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
range: 30 ft
ammoType: "Firearm Ammunition (10 rounds)"
reload: 1
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
WHERE weaponbase = "Hand Cannon"
SORT level ASC

```
