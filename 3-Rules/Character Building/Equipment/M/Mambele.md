---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclasses:
  - pf2e-items
  - h-line
  - pf2e-item-base
name: "mambele"
aliases: "Mambele"
source: "Pathfinder Player Core 2*"
pg: "274"
rarity: "uncommon"
trait01: "deadly d8"
trait02: "disarm"
trait03: "thrown 20"
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/assets/imageplaceholder.png
level: 
group: "Axe"
bulk: 1
value: "6"
subvalue: "sp"
invest: 
usage: "held in one hand"
license: "ORC"
identify: ""
description: "Also known as a hunga munga or danisco, this knife-axe hybrid consists of a hilt and blade that curves backward toward the wielder. The blade's curve is such that, after a mambele has struck a victim, more damage is dealt as the weapon is extracted from the victim's body."
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
range: "20 ft."
ammoType:
reload:
damage: 
dmg1: 1d6
dmg1Type: slashing 
dmg2: 
dmg2Type: 
weaponType: Melee
weaponCategory: Martial

#========================================================#
#                    ARMOR PROPERTIES                    #
#========================================================#
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



