---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "bow-of-sun-slaying"
aliases: "Bow of Sun Slaying"
source: "Pathfinder Lost Omens Tian Xia Character Guide"
pg: "131"
rarity: "unique"
trait01: "artifact"
trait02: "cold"
trait03: "deadly-d10"
trait04: "divine"
trait05: "propulsive"
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/bow-of-sun-slaying.png
level: 20
weight: 1
value: "0"
subvalue: "gp"
invest:
group: "Bow"
usage: "held in one plus hands "
license: "ORC"
identify:
description: "The _Bow of Sun Slaying_ is a _[[Weapon Potency (+3)|+3]] [[striking-(major)|major striking]] [[frost-(greater)|greater frost]] [[composite-shortbow|composite shortbow]]_ constructed out of wood, horn, and sinew. It bears carvings of a long-forgotten demigod who legends say possessed the ability to destroy the sun with a single arrow."
powerTitle1: "Darkness for My Foes"
actionEconomy1: 1
type1: "([[concentrate]])"
frequency1: "once per day"
trigger1:
requirement1: "Your last action was a successful Strike against your foe with this weapon"
mechanics1: "You whisper, 'Darkness for my foes,' and the target of your last attack takes `dice: 10d6` 10d6 cold + `dice: 10d6` 10d6 spirit damage (DC 45 Will check save)."
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
ammoType: Arrows
damage:  
dmg1:
dmg1Type: 4d6
dmg2: piercing
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
weaponBase: "Composite Shortbow"
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
WHERE weaponbase = "Composite Shortbow"
SORT level ASC

```

