---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "fighting-stick"
aliases: "Fighting Stick"
source: "Pathfinder Lost Omens The Mwangi Expanse"
pg: "86"
rarity: "uncommon"
trait01: "backswing"
trait02: "halfling"
trait03: "nonlethal"
trait04: "shove"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 1
value: "5"
subvalue: "sp"
group: "Club"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "This hard but flexible longsword-length piece of wood looks more like a pole than a weapon, but can be deadly in the right hands. While generally not used for combat outside of Song'o culture, some halflings have become so proficient as to make it just as effective as a blade in a fight. Many halflings will even sing to maintain a certain tempo and rhythm during combat. It deals `dice: 1d6` bludgeoning damage. A fighting stick is a martial one-handed melee weapon in the club weapon group."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "You knock the target away from you up to 10 feet (you choose the distance). This is forced movement."
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
dmg1Type: bludgeoning
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
// change weaponbase to armorbase or shieldbase as needed and the update the equals as appropriate to the new typing

TABLE
  aliases AS "Aliases",
  level AS "Level",
  license AS "License"
FROM "3-Rules/Character Building/Equipment"
WHERE weaponbase = "Fighting Stick"
SORT level ASC

```
