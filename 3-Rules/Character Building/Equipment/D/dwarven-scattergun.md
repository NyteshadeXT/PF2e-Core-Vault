---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "dwarven-scattergun"
aliases: "Dwarven Scattergun"
source: "Pathfinder Guns & Gears"
pg: "153"
rarity: "uncommon"
trait01: "concussive"
trait02: "dwarf"
trait03: "kickback"
trait04: "scatter-10"
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
group: "Firearm"
usage: "held in two hands "
license: "ORC"
identify:
description: "A favored weapon of dwarf scouts from Dongun Hold, the dwarven scattergun is a powerful weapon designed to take advantage of a dwarf's sturdy frame. A dwarven scattergun fires a large paper cartridge stuffed with black powder and knuckle-sized lumps of metal, creating a devastating burst so destructive that a foolish dwarf might find themself catching painful ricochets when firing at a too-close target. Some scatterguns are crafted with a clockwork firing tray that can quickly sort and load black powder and shot without needing a prepackaged cartridge, though this is largely an aesthetic feature with no real mechanical benefit."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [[Stunned|stunned 1]]."
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
ammoType: "Firearm Ammunition (5 rounds)"
reload: 1
damage:  
dmg1: 1d8
dmg1Type: piercing
dmg2:
dmg2Type:
weaponType: Ranged
weaponCategory: Advanced

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
WHERE weaponbase = "Dwarven Scattergun"
SORT level ASC

```
