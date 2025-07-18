---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "bladed-gauntlet"
aliases: "Bladed Gauntlet"
source: "Pathfinder Lost Omens Knights of Lastwall"
pg: "87"
rarity: "uncommon"
trait01: "agile"
trait02: "finesse"
trait03: "free-hand"
trait04: "modular"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: L
value: "5"
subvalue: "gp"
group: "Brawling"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "A dagger attached to a retractable mechanism is integrated in this gauntlet's dorsum, so a combatant can quickly arm themself with a blade to exploit the weak points in an enemy's armor. Switching configurations on the gauntlet reveals or retracts the contained dagger as appropriate. The dagger isn't removable, and thus can't be wielded or etched with runes separately from the gauntlet."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target must succeed at a Fortitude save against your class DC or be [[Slowed|slowed 1]] until the end of your next turn."
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
// change to weaponbase/armorbase/shieldbase/craftbase as needed and the update the equals as appropriate to the new typing

TABLE
  aliases   AS "Aliases",
  level     AS "Level",
  license   AS "License"
FROM "3-Rules/Character Building/Equipment"
WHERE contains(weaponbase, "Bladed Gauntlet")
SORT level ASC

```
