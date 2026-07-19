---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "heavy-barding-large"
aliases: "Heavy Barding (Large)"
source: "Pathfinder Player Core"
pg: "295"
rarity: ""
trait01: "barding"
trait02: "companion"
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 3
weight: 8
value: "50"
subvalue: "gp"
invest:
usage: "wornarmor"
license: "ORC"
identify:
description: "You can purchase special armor for animals, called barding. All animals have a trained proficiency rank in light barding, and combat-trained animals are trained in heavy barding. Barding uses the same rules as armor except for the following. The Price and Bulk of barding depend on the animal’s size. Unlike for a suit of armor, barding’s Strength entry is listed as a modifier, not a score. Barding can’t be etched with magic runes, though special magical barding might be available."
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
range: 
ammoType:
damage: 
dmg1:
dmg1Type:
dmg2:
dmg2Type:
weaponType:
weaponCategory:

#========================================================#
#                    ARMOR PROPERTIES                    #
#========================================================#
baseAC: 3
modAC:
dexCap: 3
strRequirement: "+3"
checkPenalty: "-3"
speedPenalty: "-10 ft."
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
WHERE armorbase = "Heavy Barding (Large)"
SORT level ASC

```
