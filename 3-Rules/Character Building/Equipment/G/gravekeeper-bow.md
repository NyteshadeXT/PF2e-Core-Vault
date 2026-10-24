---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclasses:
  - pf2e-items
  - h-line
  - pf2e-item-base
name: "gravekeeper-bow"
aliases: "Gravekeeper Bow"
source: "Homebrew"
pg: ""
rarity: "rare"
trait01: "magical"
trait02: "divine"
trait03: "vitality"
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/gravekeeper-bow.png
level: 10
group: "Bow"
bulk: "2"
value: "1000"
subvalue: "gp"
invest: 
usage: "held in two hands"
license: "ORC"
identify: ""
description: "A *gravekeeper bow* is a [[Weapon Potency (+2)|+2]] [[Striking]] [[longbow|Longbow]] traditionally carried by guardians charged with protecting burial grounds from the restless dead. Divine power runs through its limbs and string, causing arrows loosed from it to shimmer with pale vitality. A *gravekeeper bow* can be used as a divine focus."
activate: ""
craft: 
destruction: 

#========================================================#
#                  Ability #1 PROPERTIES                 #
#========================================================#
powerTitle1: "Aura of Repellence"
actionEconomy1: "`pf2:0`"
type1: "([[aura]], [[divine]], [[vitality]])"
frequency1: "once per round"
requirement1:
trigger1: "An undead creature enters the bow's 10-foot emanation or begins its turn there."
activate1: 
duration1: 
mechanics1: "You present the *gravekeeper bow* and invoke its power. The triggering undead creature must attempt a **DC 27 Will save**.\n\n**Critical Success** The creature is unaffected and is temporarily immune to your Aura of Repellence for 1 minute.\n**Success** The creature is unaffected.\n**Failure** Until the beginning of its next turn, the creature can't voluntarily move closer to you.\n**Critical Failure** As failure, and the creature must use its first action on its next turn to move away from you by the safest available route. This action has the move trait.\n\nRegardless of the result, the creature is temporarily immune to your Aura of Repellence until the beginning of its next turn."

#========================================================#
#                  Ability #2 PROPERTIES                 #
#========================================================#
powerTitle2: "Sundering Shot"
actionEconomy2: "`pf2:r`"
type2: "([[divine]], [[vitality]])"
frequency2: "once per day"
requirement2: "You critically succeed at a Strike with the *gravekeeper bow* against an undead creature of 10th level or lower."
trigger2: 
activate2: 
duration2: 
mechanics2: "The bow floods the arrow with concentrated vitality. The target must attempt a **DC 27 Fortitude save**. This effect has the **incapacitation** trait.\n\n**Critical Success** The target is unaffected.\n**Success** The target takes `dice: 4d6` vitality damage.\n**Failure** The target takes `dice: 8d6` vitality damage. If this reduces the target to 0 Hit Points, its body is destroyed.\n**Critical Failure** The target is destroyed."

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
range: "100 ft."
ammoType: "Arrows"
reload: 0
damage: 
dmg1: "2d8"
dmg1Type: "piercing"
dmg2: 
dmg2Type: 
weaponType: "Ranged"
weaponCategory: "Martial"

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
weaponBase: "Longbow"
armorBase:
shieldBase:
craftBase: 

---

```meta-bind-embed
[[Item Card Template]]
```



