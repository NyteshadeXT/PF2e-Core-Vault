---
cssclasses: 
- pf2e-items 
- h-line 
- pf2e-item-base
name: mace
aliases: Mace
source: Pathfinder Player Core
pg: "277"
rarity: ""
trait01: shove
trait02: ""
trait03: ""
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/assets/imageplaceholder.png
level:
group: Club
bulk: 1
value: "1"
subvalue: gp
invest:
usage: held in one hand
license: ORC
identify: ""
description: With a stout haft and a heavy metal head, a mace is sturdy and allows its wielder to deliver powerful blows and dent armor.
activate: ""
craft:
destruction:
powerTitle1: Critical Specialization
actionEconomy1:
type1:
frequency1:
requirement1:
trigger1:
activate1:
duration1:
mechanics1: You knock the target away from you up to 10 feet (you choose the distance). This is forced movement.
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
dmg1: 1d6
dmg1Type: bludgeoning
dmg2:
dmg2Type:
weaponType: Melee
weaponCategory: Simple
baseAC:
dexCap:
strRequirement: ""
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


```base
formulas:
  itemName: link(file, aliases)

properties:
  formula.itemName:
    displayName: "Item Name"
  note.level:
    displayName: Level
  note.license:
    displayName: License

views:
  - type: table
    name: Maces
    filters:
      and:
        - file.inFolder("3-Rules/Character Building/Equipment")
        - weaponbase.contains("Mace")
    order:
      - formula.itemName
      - level
      - license
    sort:
      - property: level
        direction: ASC
    columnSize:
      formula.itemName: 300
      note.level: 109
      
```


