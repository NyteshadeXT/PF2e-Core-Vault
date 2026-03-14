---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "fire-poi"
aliases: "Fire Poi"
source: "Pathfinder #151: The Show Must Go On"
pg: "77"
rarity: "uncommon"
trait01: "agile"
trait02: "backswing"
trait03: "finesse"
trait04: "twin"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: L
value: "5"
subvalue: "gp"
group: "Flail"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "These special poi are made from a rare, light metal or from fire-retardant fibers and can be ignited before being wielded. Igniting a pair of fire poi is an Interact action and requires 1 pint of [[Oil (1 pint)|Oil]] for every 10 minutes the poi remain ignited.  While lit, fire poi cast dim light in a 10-foot radius; in combat, they deal `dice: 1d4` 1d4 bludgeoning plus `dice: 1d4` 1d4 fire damage. On a critical hit with a lit fire poi, the target takes 1 persistent fire damage. The fire can be extinguished using the Interact action.  When unlit, the poi deal only the listed bludgeoning damage. Regardless of whether it is lit, the poi's 1d4 bludgeoning damage is the weapon damage dice, so _striking_ runes and other effects don't affect the fire damage."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The target is knocked [[Prone]] unless they succeed at a Reflex save against your class DC."
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
ammoType: "[[Oil (1 pint)]]"
damage:  
dmg1: 1d4
dmg1Type: bludgeoning
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
WHERE weaponbase = "Fire Poi"
SORT level ASC

```
