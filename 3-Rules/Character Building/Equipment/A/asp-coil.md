---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "asp-coil"
aliases: "Asp Coil"
source: "Pathfinder Lost Omens The Grand Bazaar"
pg: "105"
rarity: "uncommon"
trait01: "reach"
trait02: "versatile-p"
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 1
value: "10"
subvalue: "gp"
group: "Sword"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "The asp coil, named both for its slithering striking style and its usage among Aspis Consortium agents, has two forms. In sword form, it resembles an elegant, oddly balanced sword. However, with a twist of the pommel, the blade splits into a series of segments connected by elaborate metal cables. Agents of the Aspis Consortium have access to this weapon."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target is made off-balance by your attack, becoming [[off-guard]] until the start of your next turn."
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
WHERE contains(weaponbase, "Asp Coil")
SORT level ASC

```
