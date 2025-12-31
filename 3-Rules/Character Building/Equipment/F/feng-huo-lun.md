---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "feng-huo-lun"
aliases: "Feng Huo Lun"
source: "Pathfinder Treasure Vault"
pg: "27"
rarity: "uncommon"
trait01: "agile"
trait02: "disarm"
trait03: "finesse"
trait04: "monk"
trait05: "parry"
trait06: "twin"
trait07: "versatile-p"
trait08: ""
image: zz-Attachments/feng-huo-lun.png
level: 0
weight: L
value: "2"
subvalue: "gp"
invest:
group: "Knife"
usage: "held in one hand "
license: "ORC"
identify:
description: "Also known as wind and fire wheels, these large, flat steel rings feature several protruding blades typically stylized to resemble flames."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target takes `dice: 1d6` persistent bleed damage. You gain an item bonus to this bleed damage equal to the weapon's item bonus to attack rolls."
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
dmg1Type: slashing
dmg2:
dmg2Type:
weaponType: Melee
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
WHERE weaponbase = "Feng Huo Lun"
SORT level ASC

```

