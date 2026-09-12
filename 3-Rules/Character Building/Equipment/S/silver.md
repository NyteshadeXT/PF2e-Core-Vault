---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclasses: 
- pf2e-items 
- h-line 
- pf2e-item-base
name: "silver"
aliases: "Silver"
source: "Pathfinder GM Core"
pg: "254"
rarity: ""
trait01: "precious"
trait02: ""
trait03: ""
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/assets/imageplaceholder.png
level: "2+"
group: 
bulk: 
value: ""
subvalue: ""
invest: 
usage: ""
license: ""
identify: ""
description: |
  Silver weapons are a bane to creatures ranging from devils to werewolves. Silver items are less durable than steel items, and low-grade silver items are usually merely silver-plated.

  | **Silver Items** | **Hardness** | **HP** | **BT** |
  | ---------------- | ------------ | ------ | ------ |
  | **Thin Items**   |              |        |        |
  | Low-grade        | 3            | 12     | 6      |
  | Standard-grade   | 5            | 20     | 10     |
  | High-grade       | 8            | 32     | 16     |
  | **Items**        |              |        |        |
  | Low-grade        | 5            | 20     | 10     |
  | Standard-grade   | 7            | 28     | 14     |
  | High-grade       | 10           | 40     | 20     |
  | **Structure**    |              |        |        |
  | Low-grade        | 10           | 40     | 20     |
  | Standard-grade   | 14           | 56     | 28     |
  | High-grade       | 20           | 80     | 40     |
activate: ""
craft: 
destruction: 

#========================================================#
#                  Ability #1 PROPERTIES                 #
#========================================================#
powerTitle1: ""
actionEconomy1: 
type1: 
frequency1: 
requirement1:
trigger1:
activate1: 
duration1: 
mechanics1: ""

#========================================================#
#                  Ability #2 PROPERTIES                 #
#========================================================#
powerTitle2: ""
actionEconomy2: 
type2: 
frequency2: 
requirement2:
trigger2: 
activate2: 
duration2: 
mechanics2: "**Secondary Effect** "

#========================================================#
#                  Ability #3 PROPERTIES                 #
#========================================================#
powerTitle3: ""
actionEconomy3: 
type3: 
frequency3: 
requirement3:
trigger3: 
activate3: 
duration3: 
mechanics3: "**Secondary Effect** "

#========================================================#
#                  Ability #4 PROPERTIES                 #
#========================================================#
powerTitle4: ""
actionEconomy4: 
type4: 
frequency4: 
requirement4:
trigger4: 
activate4: 
duration4: 
mechanics4: "**Secondary Effect** "

#========================================================#
#                   WEAPON PROPERTIES                    #
#========================================================#
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

#========================================================#
#                    ARMOR PROPERTIES                    #
#========================================================#
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

#========================================================#
#              INTELLIGENT ITEM PROPERTIES               #
#========================================================#
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

#========================================================#
#                   DATAVIEW PROPERTIES                  #
#========================================================#
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
