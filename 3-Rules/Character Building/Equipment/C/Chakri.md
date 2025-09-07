---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "chakri"
aliases: "Chakri"
source: "Pathfinder Treasure Vault"
pg: "uncommon"
rarity: ""
trait01: "recovery"
trait02: "thrown"
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: L
value: "2"
subvalue: "sp"
group: "Dart"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "Similar to a [[chakram]], chakri are too light to be wielded in melee but allow the user significantly more control over their throws. A chakri is small and light enough that up to two can be worn on each wrist; a chakri worn on the wrist is reload 0 instead of reload —."
powerTitle1: "Weapon Specialization"
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
range: "40 ft"
ammoType:
damage: 
dmg1: 1d6
dmg1Type: slashing
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
WHERE weaponbase = "Chakri"
SORT level ASC

```
