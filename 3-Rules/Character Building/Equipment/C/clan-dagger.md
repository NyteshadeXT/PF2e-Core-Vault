---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "clan-dagger"
aliases: "Clan Dagger"
source: "Pathfinder Player Core"
pg: "277"
rarity: "uncommon"
trait01: "agile"
trait02: "dwarf"
trait03: "parry"
trait04: "versatile-b"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/clan-dagger.png
level: 0
weight: L
value: "2"
subvalue: "gp"
group: "Knife"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "This broad dagger is carried by dwarves as a weapon, tool, and designation of clan. Losing or having to surrender a clan dagger is considered a mark of embarrassment to most dwarves."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target takes `dice: 1d6` 1d6 persistent bleed damage. You gain an item bonus to this bleed damage equal to the weapon's item bonus to attack rolls."
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
dmg1Type: piercing
dmg2:
dmg2Type:
weaponType: Melee
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
WHERE weaponbase = "Clan Dagger"
SORT level ASC

```
