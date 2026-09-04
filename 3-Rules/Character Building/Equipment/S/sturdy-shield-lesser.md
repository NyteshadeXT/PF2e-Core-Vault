---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclasses:
  - pf2e-items
  - h-line
  - pf2e-item-base
notetype: pf2e-item
name: "sturdy-shield-lesser"
aliases: "Sturdy Shield (Lesser)"
source: "Pathfinder GM Core"
pg: "234"
rarity: ""
trait01: "magical"
trait02: ""
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 7
weight: 1
value: "360"
subvalue: "gp"
invest:
usage: "held in one hand"
license: "ORC"
identify:
description: "With a superior design and excellent craftsmanship, this [[Steel Shield]] has higher Hardness than its non-magical counterparts, making it harder to break and destroy."
powerTitle1:
actionEconomy1:
type1:
frequency1:
trigger1:
mechanics1:
powerTitle2:
actionEconomy2:
type2:
frequency2:
trigger2:
mechanics2: "**Secondary Effect** "
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
baseAC: 2
modAC:
dexCap:
strRequirement:
checkPenalty:
speedPenalty:
armorCategory:
resist:
immunity:
conditionImmunity:
hardness: 10
hp: 80
bt: 40

#========================================================#
#                 MAGIC ITEM PROPERTIES                  #
#========================================================#
weaponBase:
armorBase:
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
    name: Related Items
    filters:
      and:
        - file.inFolder("3-Rules/Character Building/Equipment")
        - or:
            - weaponbase == this.aliases
            - armorbase == this.aliases
            - shieldbase == this.aliases
            - craftbase == this.aliases
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
