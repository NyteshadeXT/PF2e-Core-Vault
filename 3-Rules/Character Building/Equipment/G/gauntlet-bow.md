---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclasses: 
- pf2e-items 
- h-line 
- pf2e-item-base
notetype: pf2e-item
name: "gauntlet-bow"
aliases: "Gauntlet Bow"
source: "Pathfinder Treasure Vault"
pg: "31"
rarity: ""
trait01: "capacity-4"
trait02: "free-hand"
trait03: "parry"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 1
value: "9"
subvalue: "gp"
group: "Crossbow"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "The gauntlet bow is a heavy metal glove with a built-in crossbow and rotating chamber mechanism for easy reloading. A gauntlet bow can be used to make melee attacks like a standard gauntlet. You can't reload a gauntlet bow with the hand wielding it."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target takes `dice: 1d8` persistent bleed damage. You gain an item bonus to this bleed damage equal to the weapon's item bonus to attack rolls."
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
range: "60 ft"
ammoType:
damage:  
dmg1: 1d4
dmg1Type: piercing
dmg2:
dmg2Type:
weaponType: Ranged
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
WHERE weaponbase = "Gauntlet Bow"
SORT level ASC

```
