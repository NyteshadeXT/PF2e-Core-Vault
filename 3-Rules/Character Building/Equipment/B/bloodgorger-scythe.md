---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "bloodgorger-scythe"
aliases: "Bloodgorger Scythe"
source: "Pathfinder Howl of the Wild"
pg: "101"
rarity: "uncommon"
trait01: "deadly-d10"
trait02: "magical"
trait03: "trip"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 7
weight: 2
value: "340"
subvalue: "gp"
invest:
usage: "held in two hands "
license: "ORC"
identify:
group: "Polearm"
description: "This _[[Weapon Potency (+1)|+1]] [[striking]] [[scythe]]_ is made from the cruel, blackened branches of the carnivorous scythe tree, which hungrily drink up spilled blood."
powerTitle1: "Root in Blood"
actionEconomy1: 1
type1: "([[manipulate]])"
frequency1:
trigger1:
requirement1: "Your last action was a successful Strike with this weapon and your target isn't currently taking any persistent bleed damage"
mechanics1: "You break off a piece of the _bloodgorger scythe_ inside your enemy to feed on their blood and sprout into a new tree. The target takes 1 bleed damage at the end of their turn. Each failure to stop the bleeding increases this bleed damage by 1 as a small scythe tree grows from the wound, to a maximum of 3 persistent bleed damage."
powerTitle2: "Sapling Slash"
actionEconomy2: 1
type2: "([[concentrate]])"
frequency2:
trigger2:
requirement2: "A target has a piece of the _bloodgorger scythe_ broken off inside them and has failed to recover from the persistent bleed damage for 3 consecutive turns"
mechanics2: "The sprouted scythe tree grows large enough to be commanded. It makes a melee Strike against the target or a creature adjacent to the target, with a +18 to hit and dealing `dice: 1d10` 1d10 slashing damage."
craft: "The initial raw materials must include branches and roots from a scythe tree."

#========================================================#
#                   WEAPON PROPERTIES                    #
#========================================================#
range: 
ammoType:
damage:  
dmg1: 2d10
dmg1Type: slashing
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
weaponBase: "Scythe"
armorBase:

---

```meta-bind-embed
[[Item Card Template]]
```