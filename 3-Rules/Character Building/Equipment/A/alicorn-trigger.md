---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: pf2e-item, h-line
name: "alicorn-trigger"
aliases: "Alicorn Trigger"
source: "Pathfinder Howl of the Wild"
pg: "104"
rarity: "rare"
trait01: "concussive"
trait02: "fatal-aim-d12"
trait03: "magical"
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 15
weight: 1
value: "6500"
subvalue: "gp"
group: "Firearm"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "This _[[Weapon Potency (+2)|+2]] [[striking-(greater)|greater striking]] [[Jezail|jezail]]_ features a preserved alicorn horn mounted underneath the barrel. Such a horn is usually willingly granted by the creature at the end of its natural lifespan, but some wicked gunsmiths acquire the horn through violence."
powerTitle: "Glimmer Beam"
actionEconomy: 2
type: "([[manipulate]])"
frequency: "once per day"
trigger:
mechanics: "The _alicorn trigger_ unleashes a beam of radiant light in a 60-foot line. Creatures in the area of effect take `dice: 6d6` 6d6 fire damage and must attempt a DC 33 Fortitude check save.<br><br>**Critical Success** The creature is unaffected.<br>**Success** The creature takes half damage and is [[Dazzled|Dazzled 1]].<br>**Failure** The creature takes full damage and is [[Blinded]] for 1 round.<br>**Critical Failure** The creature takes double damage and is [[Blinded]] for 1 minute."
powerTitle2:
actionEconomy2:
type2:
frequency2:
trigger2:
mechanics2: "**Secondary Effect** "
craft: "The initial raw materials must include a horn from an alicorn."

#========================================================#
#                   WEAPON PROPERTIES                    #
#========================================================#
range: 90 ft
ammoType: "Firearm Ammunition (10 rounds)"
reload: 1
damage: 
dmg1: 3d8
dmg1Type: Piercing
dmg2:
dmg2Type:
weaponType: "Ranged"
weaponCategory: "Martial"

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
weaponBase: "Jezail"
armorBase:

---

```meta-bind-embed
[[Item Card Template]]
```