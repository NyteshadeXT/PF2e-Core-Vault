---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "big-boom-gun"
aliases: "Big Boom Gun"
source: "Pathfinder Guns & Gears"
pg: "157"
rarity: "uncommon"
trait01: "cobbled"
trait02: "fatal-d12"
trait03: "goblin"
trait04: "modular"
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
usage: "held in one hand "
group: "Firearm"
license: "ORC"
identify:
description: "Developed by a goblin weaponsmith who missed the 'hand' part of 'hand cannon', this comically oversized gun has a heavily reinforced barrel and is loaded with a worrisome quantity of gunpowder. This hand cannon is a martial weapon instead of a simple weapon. It has the [[fatal d12]] trait and a range increment of 20 feet. It also has the following modified critical failure condition.<br><br>**Critical Failure** The attack misses, the weapon misfires, and you take 1d12 fire damage as it explodes in your face."
powerTitle1:
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1:
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
range: 20 ft
ammoType: "Firearm Ammunition (10 Rounds)"
reload: 1
damage:  
dmg1: 1d6
dmg1Type: "piercing"
dmg2:
dmg2Type:
weaponType: "Ranged"
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
// change to weaponbase/armorbase/shieldbase/craftbase as needed and the update the equals as appropriate to the new typing

TABLE
  aliases   AS "Aliases",
  level     AS "Level",
  license   AS "License"
FROM "3-Rules/Character Building/Equipment"
WHERE contains(weaponbase, "Big Boom Gun")
SORT level ASC

```

