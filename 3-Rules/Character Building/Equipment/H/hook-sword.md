---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "hook-sword"
aliases: "Hook Sword"
source: "Pathfinder #166: Despair on Danger Island"
pg: "76"
rarity: "uncommon"
trait01: "disarm"
trait02: "monk"
trait03: "parry"
trait04: "trip"
trait05: "twin"
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/hook-sword.png
level: 0
weight: 1
value: "3"
subvalue: "gp"
group: "Sword"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "This long sword has a hook near the tip which makes it easy to snag an opponent or their weapons."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target is made off-balance by your attack, becoming [[off-guard]] until the start of your next turn."
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
dmg1: 1d6
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
WHERE weaponbase = "Hook Sword"
SORT level ASC

```
