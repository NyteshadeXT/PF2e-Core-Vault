---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "dancers-spear"
aliases: "Dancer's Spear"
source: "Pathfinder Treasure Vault"
pg: "26"
rarity: ""
trait01: "backswing"
trait02: "finesse"
trait03: "reach"
trait04: "sweep"
trait05: "versatile-b"
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/!dancers-spear.png
level: 0
weight: 1
value: "3"
subvalue: "gp"
group: "Spear"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "Traditionally a favored weapon in Molthune for settling disputes between military leaders, the dancer's spear has seen a recent resurgence in popularity in the neighboring kingdom of Nirmathas, largely due to its effectiveness at striking down attacking skeletons and other undead from a relatively safe distance. A dancer's spear has a 7-foot-long wooden haft capped with a triangular metal blade at one end, counterbalanced on the other end with a reinforced metal sleeve that, in a pinch, can be used as an effective striking surface."
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1: "The weapon pierces the target, weakening its attacks. The target is [[Clumsy|clumsy 1]] until the start of your next turn."
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
dmg1Type: piercing
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
WHERE contains(weaponbase, "Dancer's Spear")
SORT level ASC

```

