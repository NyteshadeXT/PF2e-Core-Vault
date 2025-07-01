---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "battle-saddle"
aliases: "Battle Saddle"
source: "Pathfinder Treasure Vault"
pg: "26"
rarity: ""
trait01: "parry"
trait02: "sweep"
trait03: "vehicular"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 2
value: "6"
subvalue: "gp"
invest:
group: "Axe"
usage: "held in two hands "
license: "ORC"
identify:
description: "The battle saddle is a special saddle for a mount that has two large, winglike blades. These blades normally lie flat alongside the saddle, providing additional protection for the rider, but they can be deployed with a tug on the reins to slash at enemies adjacent to the mount. When using a battle saddle to parry, you can decide whether the circumstance bonus to AC applies to you or to your mount."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "Choose one creature adjacent to the initial target and within reach. If its AC is lower than your attack roll result for the critical hit, you deal damage to that creature equal to the result of the weapon damage die you rolled (including extra dice for its [[Striking]] rune, if any). This amount isn't doubled, and no bonuses or other additional dice apply to this damage."
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
dmg1Type: "slashing"
dmg2:
dmg2Type:
weaponType: "Melee"
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
WHERE contains(weaponbase, "Battle Saddle")
SORT level ASC

```