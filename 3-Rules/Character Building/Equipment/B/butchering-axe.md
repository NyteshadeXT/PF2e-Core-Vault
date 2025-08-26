---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "butchering-axe"
aliases: "Butchering Axe"
source: "Pathfinder Lost Omens The Grand Bazaar"
pg: "105"
rarity: "uncommon"
trait01: "orc"
trait02: "shove"
trait03: "sweep"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 0
weight: 2
value: "8"
subvalue: "gp"
invest:
group: Axe
usage: "held in two hands "
license: "ORC"
identify:
description: "Invented by Belkzen's zealous Steel-Eaters, the butchering axe has an oversized head and a long, thick haft counterbalanced with steel or stone. The weapon's sweeping strokes inflict immense damage, particularly against groups of foes, and can push dangerous opponents away to a safe distance. All of these qualities are particularly useful against the lumbering zombie hordes of the Whispering Tyrant. Correspondingly, butchering axes are often wielded by orc and half-orc Crimson Reclaimers of Lastwall."
powerTitle1: "Critical Specialization - Axe"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "Choose one creature adjacent to the initial target and within reach. If its AC is lower than your attack roll result for the critical hit, you deal damage to that creature equal to the result of the weapon damage die you rolled (including extra dice for its [[striking]] rune, if any). This amount isn't doubled, and no bonuses or other additional dice apply to this damage."
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
dmg1: 1d12
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
WHERE weaponbase = "Butchering Axe"
SORT level ASC

```
