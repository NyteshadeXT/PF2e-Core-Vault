---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "boreal-staff-greater"
aliases: "Boreal Staff (Greater)"
source: "Pathfinder Treasure Vault"
pg: "131"
rarity: ""
trait01: "magical"
trait02: "monk"
trait03: "staff"
trait04: "two-hand-d8"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/boreal-staff.png
level: 12
weight: 1
value: "2750"
subvalue: "gp"
invest:
group: "Club"
usage: "held in one hand "
license: "ORC"
identify:
description: "A _boreal staff_ is chiseled from a cylinder of ice to form a spiky, jagged icicle, its surface gleaming with the colors of the northern lights. It gives the air around you a distinct chill. When used as a weapon, a _greater boreal staff_ is a _[[Weapon Potency (+2)|+2]] [[striking]] [[frost]] [[staff]]._"
powerTitle1: "Cold Strike"
actionEconomy1: 1
type1: "([[command]])"
frequency1: "once per 10 minutes"
trigger1:
mechanics1: "Attempt a Strike using the staff. That [[Strike]] deals `dice: 2d4` 2d4 cold additional damage."
powerTitle2: "Spells"
actionEconomy2:
type2:
frequency2:
activate2: "Cast a Spell"
trigger2:
mechanics2: "You expend a number of charges from the staff to cast a spell from its list.<br><br>**Cantrip** [[Ray of Frost]]<br>**1st** [[Chilling Spray]], [[Snowball]]<br>**2nd** [[Chilling Spray]], [[Snowball]]<br>**3rd** [[Chilling Spray]], [[Elemental Absorption]] (water only)<br>**4th** [[Chilling Spray]], [[Ice Storm]]<br>**5th** [[Cone of Cold]], [[Mantle of the Frozen Heart]]"
craft: "Supply one casting of all listed levels of all listed spells."

#========================================================#
#                   WEAPON PROPERTIES                    #
#========================================================#
range: 
ammoType:
damage:  
dmg1: 2d4
dmg1Type: bludgeoning
dmg2:
dmg2Type:
weaponType: Melee
weaponCategory: Simple

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
weaponBase: "Staff"
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
WHERE weaponbase = "Staff"
SORT level ASC

```
