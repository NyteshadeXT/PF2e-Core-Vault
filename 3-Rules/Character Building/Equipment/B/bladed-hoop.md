---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "bladed-hoop"
aliases: "Bladed Hoop"
source: "Pathfinder #151: The Show Must Go On"
pg: "77"
rarity: "uncommon"
trait01: "finesse"
trait02: "sweep"
trait03: "two-hand-d8"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 1
value: "25"
group: "Knife"
subvalue: "sp"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "This circular hoop has blades along its outer edge. You can wield it in two hands (using the two-hand damage) or by spinning it around an arm. While you spin the hoop, it gains the free-hand trait. Setting the hoop spinning takes 1 [[Interact]] action. In addition to the normal restrictions of the free-hand trait, extended use of the arm for locomotion (such as to [[Climb]]) interferes with the hoop's spinning and forces you to Release the hoop. You can't spin a hoop underwater. Keeping the hoop spinning requires a free action each round, which has the concentrate and manipulate traits. You can keep a hoop spinning as an exploration activity, but doing so for more than 10 minutes makes you fatigued, similarly to [[Hustle]]."
powerTitle1: "Critical Specialization"
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
// change to weaponbase/armorbase/shieldbase/craftbase as needed and the update the equals as appropriate to the new typing

TABLE
  aliases   AS "Aliases",
  level     AS "Level",
  license   AS "License"
FROM "3-Rules/Character Building/Equipment"
WHERE contains(weaponbase, "Bladed Hoop")
SORT level ASC

```