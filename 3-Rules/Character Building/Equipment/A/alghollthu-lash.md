---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: pf2e-item, h-line
name: "alghollthu-lash"
aliases: "Alghollthu Lash"
source: "Pathfinder Treasure Vault"
pg: "35"
rarity: "uncommon"
trait01: "disarm"
trait02: "finesse"
trait03: "magical"
trait04: "nonlethal"
trait05: "reach"
trait06: "trip"
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 7
weight: 1
value: "350"
subvalue: "gp"
group: "Flail"
invest:
usage: "held in one hand "
license: "ORC"
identify:
description: "This fleshy _[[Weapon Potency (+1)|+1]] [[Striking|striking]] [[Whip|whip]]_ is obviously crafted from the tentacle of some fearsome beast, likely an alghollthu, and constantly drips slime.  "
powerTitle: "Alghollthu Slime"
actionEconomy: 1
type: "([[command]])"
frequency: "once per day"
trigger:
mechanics: "The next creature you successfully Strike with this weapon is exposed to alghollthu slime.  **Alghollthu Slime** (curse, occult)  **Saving Throw** DC 25 Fortitude check  <br>**Stage 1** no ill effect (1 round)  <br>**Stage 2** the victim's skin softens, making the creature [[Drained|Drained 1]] (1 round)  <br>**Stage 3** the victim's skin transforms into a clear, slimy membrane, making it [[Drained|Drained 2]] until the curse ends; every hour this membrane remains dry, the creature's drained condition increases by 1 (permanent). A remove disease spell can counteract this curse, but immunity to disease offers no protection against it."
powerTitle2:
actionEconomy2:
type2:
frequency2:
trigger2:
mechanics2: "**Secondary Effect** "
craft: "The initial raw materials must include a tentacle from an alghollthu."

#========================================================#
#                   WEAPON PROPERTIES                    #
#========================================================#
range: 
ammoType:
damage: 
dmg1: 2d4
dmg1Type: Slashing
dmg2:
dmg2Type:
weaponType: "Melee"
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
weaponBase: "Whip"
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
WHERE weaponbase = "Whip"
SORT level ASC

```