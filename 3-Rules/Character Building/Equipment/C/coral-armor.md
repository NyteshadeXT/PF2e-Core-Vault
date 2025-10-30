---
cssclass: pf2e-items, h-line
name: "coral-armor"
aliases: "Coral Armor"
source: "Pathfinder Treasure Vault"
pg: "10"
rarity: ""
trait01: "aquadynamic"
trait02: ""
trait03: ""
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/coral-armor.png
level: 0
group: "Skeletal"
bulk: 2
value: "5"
subvalue: "gp"
invest:
usage: "worn"
license: "ORC"
identify: ""
description: "A good option for undersea explorers and aquatic peoples alike, coral armor consists of panels of carved coral. If worn underwater, some of this coral can even be alive."
activate: ""
craft:
destruction:
powerTitle1: "Armor Specialization"
actionEconomy1:
type1:
frequency1:
requirement1:
trigger1:
activate1:
duration1:
mechanics1: "Armor made from the bone or exoskeleton of creatures as diverse as bears, insects, and coral, skeletal armor protects vital points from precision damage. You gain resistance to precision damage equal to 3 + the value of the armor's potency rune for medium armor, or 5 + the value of the armor's potency rune for heavy armor."
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
range:
ammoType:
reload:
damage:
dmg1:
dmg1Type:
dmg2:
dmg2Type:
weaponType:
weaponCategory:
baseAC: "3"
dexCap: "2"
strRequirement: "+2"
checkPenalty: "-2"
speedPenalty: "-5ft"
armorCategory: "Medium"
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
WHERE contains(weaponbase, "Coral Armor")
SORT level ASC

```


