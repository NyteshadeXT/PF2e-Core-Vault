---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "chain-sword"
aliases: "Chain Sword"
source: "Pathfinder Treasure Vault"
pg: "26"
rarity: "uncommon"
trait01: "finesse"
trait02: "reach"
trait03: "sweep"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/chain-sword.png
level: 0
weight: 1
value: "6"
subvalue: "gp"
invest:
usage: "held in one hand "
license: "ORC"
group: "Sword"
identify:
description: "This weapon has a hilt like a longsword attached to several bladed segments connected by chain links. A highly technical weapon, the chain sword is valued by duelists and experienced soldiers alike in the nations of Nirmathas and Molthune."
powerTitle1: "Weapon Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target is made off-balance by your attack, becoming [[Off-Guard]] until the start of your next turn."
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
WHERE weaponbase = "Chain Sword"
SORT level ASC

```
