---
cssclass: pf2e-items, h-line
name: "cruuk"
aliases: "cruuk"
source: "Pathfinder Player Core 2"
pg: "274"
rarity: ""
trait01: "shove"
trait02: "thrown 30 ft."
trait03: "tripkee"
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/cruuk.png
level: 0
group: "Club"
bulk: "L"
value: "4"
subvalue: "sp"
invest:
usage: "one hand"
license: "ORC"
identify: ""
description: "This specialized club is designed for throwing and useful in both combat and hunting. Tripkees use them to take down creatures that hide high in treetops."
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
mechanics1: "You knock the target away from you up to 10 feet (you choose the distance). This is forced movement."
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
range: "30 ft."
ammoType:
reload:
damage:
dmg1: 1d6
dmg1Type: Bludgeoning
dmg2:
dmg2Type:
weaponType: Melee
weaponCategory: Martial
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
WHERE contains(weaponbase, "Cruuk")
SORT level ASC

```


