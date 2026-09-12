---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclasses: 
- pf2e-items 
- h-line 
- pf2e-item-base
name: "warpglass"
aliases: "Warpglass"
source: "Pathfinder #162: Ruins of the Radiant Siege"
pg: "74"
rarity: "rare"
trait01: "precious"
trait02: ""
trait03: ""
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/assets/imageplaceholder.png
level: 17
group: 
bulk: 
value: ""
subvalue: ""
invest: 
usage: ""
license: "OGL"
identify: ""
description: |
  This bizarre substance is fashioned from the raw, chaotic quintessence of the Maelstrom. It can be fashioned into weapons and items, but is too unstable to make into useful armor or shields. Raw warpglass is an opalescent glassy material with surprising strength. When worked, it changes its appearance—though not its properties—to appear as random striations of other metals and types of stone.

  | **Warpglass Items** | **Hardness** | **HP** | **BT** |
  | ------------------- | ------------ | ------ | ------ |
  | **Thin Items**      |              |        |        |
  | High-grade          | 8            | 32     | 16     |
  | **Items**           |              |        |        |
  | High-grade          | 12           | 48     | 24     |
  | **Structure**       |              |        |        |
  | High-grade          | 24           | 96     | 48     | 
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
