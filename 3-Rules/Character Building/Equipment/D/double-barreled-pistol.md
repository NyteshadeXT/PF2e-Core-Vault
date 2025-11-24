---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "double-barreled-pistol"
aliases: "Double-Barreled Pistol"
source: "Pathfinder Guns & Gears"
pg: "152"
rarity: "uncommon"
trait01: "concussive"
trait02: "double-barrel"
trait03: "fatal-d8"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 1
value: "6"
subvalue: "gp"
invest:
usage: "held in one hand "
license: "ORC"
group: "Firearm"
identify:
description: "This flintlock pistol has two side-by-side barrels. Though less accurate than a standard pistol, a double-barreled pistol is a useful and versatile weapon. It's generally banned in areas where duels with pistols are relatively common, in much the same way that arriving at an aristocratic duel with a scattergun would be considered crass, at best."
powerTitle1:
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1:
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
range: 30 ft
ammoType: "Firearm Ammunition (10 rounds)"
damage:  
dmg1: 1d4
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
// change weaponbase to armorbase or shieldbase as needed and the update the equals as appropriate to the new typing

TABLE
  aliases AS "Aliases",
  level AS "Level",
  license AS "License"
FROM "3-Rules/Character Building/Equipment"
WHERE weaponbase = "Double Barreled Pistol"
SORT level ASC

```
