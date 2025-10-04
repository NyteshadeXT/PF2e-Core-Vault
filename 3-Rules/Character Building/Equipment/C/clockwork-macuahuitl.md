---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "clockwork-macuahuitl"
aliases: "Clockwork Macuahuitl"
source: "Pathfinder Lost Omens The Grand Bazaar"
pg: "22"
rarity: "rare"
trait01: "backswing"
trait02: "forceful"
trait03: "versatile-b"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 8
weight: 1
value: "550"
subvalue: "gp"
group: "Club"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "This finely-made wooden club has a beautiful, lacquered finish that gleams in the sunlight. A heavy ring of gears lined with sharpened pieces of obsidian automatically and constantly spin around the bulk of the wooden club lengthwise. Striking a foe digs the obsidian gears into the enemy's flesh and tears it with its blades. The ever-turning gears also help to dislodge an enemy's defensive position against the weapon."
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
dmg1: 1d10
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
WHERE weaponbase = "Clockwork Macuahuitl"
SORT level ASC

```
