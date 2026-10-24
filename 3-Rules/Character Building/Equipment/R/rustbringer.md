---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclasses:
  - pf2e-items
  - h-line
  - pf2e-item-base
name: "rustbringer"
aliases: "Rustbringer"
source: "Pathfinder Rage of Elements"
pg: "147"
rarity: ""
trait01: "magical"
trait02: "metal"
trait03: ""
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/assets/imageplaceholder.png
level: 10
group: 
bulk: "Flail"
value: "900"
subvalue: "gp"
invest: 
usage: "held in one hand"
license: "ORC"
identify: ""
description: "The handle, chain, and spiked ball of this [[Weapon Potency (+1)|+1]] [[Striking]] [[Corrosive]] [[flail|Flail]] are all made of iron so rusted that the weapon appears nonfunctional at first glance. On Strikes against a creature that's primarily made of metal, it gains the deadly d10 trait."
activate: ""
craft: 
destruction: 

#========================================================#
#                  Ability #1 PROPERTIES                 #
#========================================================#
powerTitle1: "Rusting Disarm"
actionEconomy1: "`pf2:r`"
type1: 
frequency1: 
requirement1:
trigger1: "You critically succeed at a [[Disarm]] attempt with the flail against a metal weapon."
activate1: 
duration1: 
mechanics1: "Flakes of acid-laden rust are deposited on the disarmed weapon. The weapon takes `dice: 2d6` damage, ignoring the weapon's Hardness."

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
dmg1: 2d6
dmg1Type: bludgeoning 
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
weaponBase: "Flail"
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



