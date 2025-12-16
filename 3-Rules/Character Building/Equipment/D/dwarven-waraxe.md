---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "dwarven-waraxe"
aliases: "Dwarven Waraxe"
source: "Pathfinder Player Core"
pg: "279"
rarity: ""
trait01: "dwarf"
trait02: "sweep"
trait03: "two-hand-d12"
trait04: "uncommon"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 2
value: "3"
subvalue: "gp"
group: "Axe"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "This favored weapon of the dwarves has a large, ornate head mounted on a thick handle. This powerful axe can be wielded with one hand or two."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "Choose one creature adjacent to the initial target and within reach. If its AC is lower than your attack roll result for the critical hit, you deal damage to that creature equal to the result of the weapon damage die you rolled (including extra dice for its _[[striking]]_ rune, if any). This amount isn't doubled, and no bonuses or other additional dice apply to this damage."
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
WHERE weaponbase = "Dwarven Waraxe"
SORT level ASC

```
