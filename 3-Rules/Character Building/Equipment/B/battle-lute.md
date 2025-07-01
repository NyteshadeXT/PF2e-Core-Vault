---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "battle-lute"
aliases: "Battle Lute"
source: "Pathfinder #164: Hands of the Devil"
pg: "73"
rarity: "uncommon"
trait01: "shove"
trait02: "two-hand-d8"
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 1
value: "15"
subvalue: "gp"
group: "Club"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "This reinforced lute is suitable both for use as a handheld musical instrument and for bashing heads should a crowd turn sour. Its strings are finely braided wires that run along its sturdy metal neck."
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
dmg1: 1d4
dmg1Type: "bludgeoning"
dmg2:
dmg2Type:
weaponType: "Melee"
weaponCategory: "Simple"

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
WHERE contains(weaponbase, "Battle Lute")
SORT level ASC

```