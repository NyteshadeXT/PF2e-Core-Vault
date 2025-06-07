---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "adze"
aliases: "Adze"
source: "Pathfinder Player Core 2"
pg: "274"
rarity: ""
trait01: "forceful"
trait02: "tripkee"
trait03: "sweep"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/adze.png
level: 0
group: "Axe"
weight: 2
value: "1"
subvalue: "gp"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "A common cutting tool, an adze resembles an axe—but the cutting edge is horizontal, rather than vertical. The adze's shape makes it popular among woodworkers, and tripkee builders often use them to construct their treetop homes. The tool also serves as an effective weapon, due in part to the immense strength required to swing it."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "Choose one creature adjacent to the initial target and within reach. If its AC is lower than your attack roll result for the critical hit, you deal damage to that creature equal to the result of the weapon damage die you rolled (including extra dice for its striking rune, if any). This amount isn't doubled, and no bonuses or other additional dice apply to this damage."
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
damage: "1d10 slashing"
dmg1:
dmg1Type:
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
// change weaponbase to armorbase or shieldbase as needed and the update the equals as appropriate to the new typing

TABLE
  aliases AS "Aliases",
  level AS "Level",
  license AS "License"
FROM "3-Rules/Character Building/Equipment"
WHERE weaponbase = "Adze"
SORT level ASC

```
