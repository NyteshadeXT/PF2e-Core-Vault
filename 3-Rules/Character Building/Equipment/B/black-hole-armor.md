---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "black-hole-armor"
aliases: "Black Hole Armor"
source: "Pathfinder Treasure Vault"
pg: "14"
rarity: ""
trait01: "bulwark"
trait02: "entrench-ranged"
trait03: "invested"
trait04: "magical"
trait05: "ponderous"
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/black-hole-armor.png
level: 16
weight: 5
value: "8500"
subvalue: "gp"
invest:
usage: "wornarmor"
group: "Plate"
license: "ORC"
identify:
description: "The joints of this black _[[armor-potency-2|+2]] [[resilient-(greater)|Resilient (Greater)]] [[3-Rules/Character Building/Equipment/F/Fortification|fortification]] [[fortress-plate|fortress plate]]_ look like swirling vortices of silver. Non-magical ammunition and thrown weapons aimed at you are destroyed after they hit you and deal damage or miss you. You also have resistance 10 to physical damage from ranged attacks.  When an enemy's ranged attack misses you or hits you and deals no damage, the armor absorbs the projectile. When it has absorbed six projectiles, the armor glows at the joints."
powerTitle1: "Intercept"
actionEconomy1: r
type1: "([[Interact]])"
frequency1: "once per minute"
trigger1: "A ranged weapon Strike targets a creature within 20 feet of you and the attacker hasn't yet rolled its attack."
mechanics1: "The triggering Strike targets you instead of its intended target."
powerTitle2: "Effect"
actionEconomy2: 1
type2: "([[Interact]])"
frequency2:
trigger2:
requirement2: "The _black hole armor_ has absorbed six or more projectiles."
mechanics2: "All the projectiles absorbed by the armor appear out of thin air, as though transported there, falling in a 10-foot burst within 120 feet of you. Each creature in the burst takes `dice: 10d8` 10d8 piercing with a DC 35 Reflex check save. The absorbed projectiles are all expended, and the armor's joints stop glowing."
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
baseAC: 6
modAC:
dexCap: 0
strRequirement: "+4"
checkPenalty: "-3"
speedPenalty: "-10 ft."
armorCategory: "Heavy"
resist:
immunity:
conditionImmunity:

#========================================================#
#                 MAGIC ITEM PROPERTIES                  #
#========================================================#
weaponBase:
armorBase: "Fortress Plate"

---


```meta-bind-embed
[[Item Card Template]]
```