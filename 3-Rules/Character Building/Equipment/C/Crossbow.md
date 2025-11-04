---
cssclass: pf2e-items, h-line
name: "crossbow"
aliases: "Crossbow"
source: "Pathfinder Player Core"
pg: "280"
rarity: ""
trait01: ""
trait02: ""
trait03: ""
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/assets/imageplaceholder.png
level: 0
group: "Crossbow"
bulk: 1
value: "3"
subvalue: "gp"
invest:
usage: "two hands"
license: "ORC"
identify: ""
description: "This ranged weapon has a bow-like assembly mounted on a handled frame called a tiller. The tiller has a mechanism to lock the bowstring in place, attached to a trigger mechanism that releases the tension and launches a bolt."
activate: ""
craft:
destruction:
powerTitle1: "Critical Specialization"
actionEconomy1:
type1:
frequency1:
requirement1:
trigger1:
activate1:
duration1:
mechanics1: "The target takes 1d8 persistent bleed damage. You gain an item bonus to this bleed damage equal to the weapon's item bonus to attack rolls.+"
powerTitle2: ""
actionEconomy2:
type2:
frequency2:
requirement2:
trigger2:
activate2:
duration2:
mechanics2: "**Secondary Effect** "
powerTitle3: ""
actionEconomy3:
type3:
frequency3:
requirement3:
trigger3:
activate3:
duration3:
mechanics3: "**Secondary Effect** "
powerTitle4: ""
actionEconomy4:
type4:
frequency4:
requirement4:
trigger4:
activate4:
duration4:
mechanics4: "**Secondary Effect** "
range: "120 ft."
ammoType: "Bolt"
reload: 1
damage: 
dmg1: 1d8
dmg1Type: Piercing
dmg2:
dmg2Type:
weaponType: Ranged
weaponCategory: Simple
baseAC:
dexCap:
strRequirement:
checkPenalty:
speedPenalty:
armorCategory:
resist:
immunity:
conditionImmunity:
hardness:
hp:
bt:
perception:
communication:
skill1:
skill2:
skill3:
skill4:
skill5:
int:
wis:
cha:
will:
weaponBase:
armorBase:
shieldBase:
craftBase:
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
WHERE contains(weaponbase, "Crossbow")
SORT level ASC

```


