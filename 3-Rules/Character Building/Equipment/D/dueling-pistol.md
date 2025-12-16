---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "dueling-pistol"
aliases: "Dueling Pistol"
source: "Pathfinder NPC Core"
pg: "50"
rarity: "uncommon"
trait01: "concealable"
trait02: "concussive"
trait03: "fatal-d10"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/dueling-pistol.png
level: 1
weight: L
value: "12"
subvalue: "gp"
invest:
usage: "held in one hand "
license: "ORC"
group: "Firearms"
identify:
description: "Made for settling disputes when diplomacy fails, dueling pistols are finely crafted and made to fit easily into a holster or pocket. Noble and wealthy merchants in both Alkenstar and Dongun Hold often own matching pairs of dueling pistols in case they're called upon to address a challenge-though this practice has become increasingly rare in the modern age."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [[Stunned|stunned 1]]."
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
range: 60 ft
ammoType: "Firearm Ammunition (10 rounds)"
reload: 1
damage:  
dmg1: 1d6
dmg1Type: piercing
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
// change to weaponbase/armorbase/shieldbase/craftbase as needed and the update the equals as appropriate to the new typing

TABLE
  aliases   AS "Aliases",
  level     AS "Level",
  license   AS "License"
FROM "3-Rules/Character Building/Equipment"
WHERE contains(weaponbase, "Dueling Pistol")
SORT level ASC

```


