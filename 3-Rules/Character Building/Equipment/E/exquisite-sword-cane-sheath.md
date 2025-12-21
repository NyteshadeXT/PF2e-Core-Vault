---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "exquisite-sword-cane-sheath"
aliases: "Exquisite Sword Cane Sheath"
source: "Pathfinder #157: Devil at the Dreaming Palace"
pg: "80"
rarity: ""
trait01: "agile"
trait02: "finesse"
trait03: "parry"
trait04: "twin"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: L
value: "0"
subvalue: "gp"
group: "Club"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "An exquisite sword cane is a sword sheathed inside a hollow cane, which itself can be used as a clubbing weapon with or without the sword sheathed inside."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "You knock the target away from you up to 10 feet (you choose the distance). This is [[forced movement]]."
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
dmg1: 1d4
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
WHERE weaponbase = "Exquisite Sword Can Sheath"
SORT level ASC

```
