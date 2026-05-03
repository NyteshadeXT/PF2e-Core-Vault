---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "hand-adze"
aliases: "Hand Adze"
source: "Pathfinder Player Core 2"
pg: "274"
rarity: ""
trait01: "agile"
trait02: "finesse"
trait03: "grippli"
trait04: "sweep"
trait05: "thrown-10"
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/hand-adze.png
level: 0
weight: L
value: "5"
subvalue: "sp"
group: "Axe"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "The adze's smaller version is useful for delicate woodworking in cramped spaces. Tripkees use hand adzes for crafting and as close quarters weapons."
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
dmg1: 1d4
dmg1Type: slashing
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
WHERE weaponbase = "Hand Adze"
SORT level ASC

```
