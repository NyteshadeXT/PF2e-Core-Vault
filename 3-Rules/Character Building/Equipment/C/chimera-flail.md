---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "chimera-flail"
aliases: "Chimera Flail"
source: "Pathfinder Howl of the Wild"
pg: "102"
rarity: "uncommon"
trait01: "disarm"
trait02: "magical"
trait03: "sweep"
trait04: "trip"
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 9
weight: 2
value: "700"
subvalue: "gp"
group: "Flail"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "The three spiked heads of this _[[Weapon Potency (+1)|+1]] [[striking]] [[war flail]]_ are fashioned to resemble the heads of a chimera. Preserved fragments of bone from the creature are fused with the metal of each head, replacing the typical weight at the end of the chain. Each head has been shrunk and preserved for use. You can have only one head slotted at a time and can use only the ability of the currently slotted head, while the other two hang off the pommel. Switching between heads requires an [[Interact]] action.<br><br>**Dragon:** This head does piercing damage instead of the normal bludgeoning damage, plus 1 damage type based on the magical tradition of the chimera's dragon head. (**Arcane** force; **Divine** spirit; **Occult** mental; **Primal** acid, cold, electricity, fire, sonic, or poison, chosen at item creation).<br><br>**Lion** This head does piercing damage instead of the normal bludgeoning damage, plus 1 additional precision damage if the target is [[Off-Guard]].<br><br>**Goat** If your last action was to [[Stride]] at least half your [[Speed]], this does an additional `dice: 1d4` 1d4 force damage."
powerTitle1: "Dragon: Bursting Breath"
actionEconomy1: 
type1: "([[concentration]])"
frequency1: "once per 10 minutes"
requirement1: "your last action was a successful [[Strike]]"
trigger1:
mechanics1: "You tap into the residual energy of the dragon head and release it as a small breath explosion. This does 2d6 untyped damage of the dragon's additional damage type in a 10-foot burst centered around one corner of the space the target occupies. After using this, the dragon head attachment loses its additional damage type. You can spend 10 minutes to rest and recharge the head."
powerTitle2: "Lion: Pouncing Whirl"
actionEconomy2: 2
type2: "([[concentrate]])"
frequency2: "once per 10 minutes"
requirement2: "you have not made an attack this turn"
trigger2:
mechanics2: "You tap into the predator speed of a lion. You [[Stride]] up to half your Speed and make a [[Strike]] against a target. If that creature is within reach of an ally, regardless if they would normally provide flanking or not, that creature is considered [[off-guard]] to your Strike. Your additional precision damage against an [[off-guard]] creature increases to `dice: 1d4` 1d4. After using this, the lion head loses its additional precision damage. You can spend 10 minutes to rest and recharge the head."
powerTitle3: "Goat: Charging Horns"
actionEconomy3: 3
type3: "([[concentrate]])"
frequency3: "once per 10 minutes"
trigger3:
mechanics3: "You swing the hammer around with the full force of a charging ram. Make a [[Strike]] against up to three enemies within your reach. The first two [[Strike|Strikes]] are at your current attack bonus, and the third is with the normal attack penalty. On a successful hit, the target takes an additional `dice: 1d6` 1d6 force damage and is pushed back 5 feet, or 10 feet on a critical hit. After using this, the goat head loses its additional force damage. You can spend 10 minutes to rest and recharge the head.  "
craft: "The initial raw materials must include all three heads from a chimera."

#========================================================#
#                   WEAPON PROPERTIES                    #
#========================================================#
range: 
ammoType:
damage:  
dmg1: 2d10
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
weaponBase: "War Flail"
armorBase:

---

```meta-bind-embed
[[Item Card Template]]
```
