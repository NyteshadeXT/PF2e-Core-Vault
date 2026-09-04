---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclasses:
  - pf2e-items
  - h-line
  - pf2e-item-base
notetype: pf2e-item
name: "mantis-shell"
aliases: "Mantis Shell"
source: "Pathfinder Treasure Vault"
pg: "11"
rarity: "Uncommon"
trait01: "adjusted"
trait02: ""
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 1
weight: 1
value: "10"
subvalue: "gp"
group: "Skeletal"
invest:
usage: "wornarmor"
license: "ORC"
identify:
description: "Construction of mantis shell armor originates with the Red Mantis assassins. Authentic mantis shell can be found in some dark markets, but wearing such armor can attract deadly attention from the armor's originators. Mantis shell comes with the weapon harness adjustment, though these special vambraces are meant to hold sawtooth sabers, and attaching anything else is an insult to the Red Mantis. A character who is a member of the Red Mantis assassins has access to this uncommon armor."
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
dexCap: 3
strRequirement: "+1"
checkPenalty: "-1"
speedPenalty:
armorCategory: "Light"
resist:
immunity:
conditionImmunity:

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
