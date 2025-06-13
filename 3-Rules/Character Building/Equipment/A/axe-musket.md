---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "axe-musket"
aliases: "Axe Musket"
source: "Pathfinder Guns & Gears"
pg: "159"
rarity: "uncommon"
trait01: "combination"
trait02: "concussive"
trait03: "fatal-d10"
trait04: ""
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
group: "Firearm/Axe"
description: "This item, favored by firearms-using dwarves and barbarians, takes the form of a sturdy musket that combine the functionality of melee weapons and with an axe blade attached near the muzzle."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [[stunned 1]]."
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
ammoType: "Firearm Ammunition"
reload: 1
damage:  
dmg1: 1d6
dmg1Type: "piercing"
dmg2: 1d8
dmg2Type: "slashing"
weaponType: "Ranged/Melee"
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
WHERE contains(weaponbase, "Axe Musket")
SORT level ASC

```