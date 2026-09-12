---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclasses:
  - pf2e-items
  - h-line
  - pf2e-item-base
name: "levithans-prism"
aliases: "Levithan's Prism"
source: "Homebrew"
pg: ""
rarity: "rare"
trait01: "magical"
trait02: "darkness"
trait03: ""
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/levithans-prism.png
level: 8
group: 
bulk: "L"
value: "450"
subvalue: "gp"
invest: 
usage: "held in one hand"
license: ""
identify: ""
description: "This many-faceted prism is cut into a sharp, unsettling geometry said to resemble an ancient goddess of pain. Contradictory energies churn within its translucent depths, at once celestial and demonic. When awakened, the prism drinks in surrounding light as spectral hooks and chains writhe through the resulting darkness."
activate: ""
craft: 
destruction: 

#========================================================#
#                  Ability #1 PROPERTIES                 #
#========================================================#
powerTitle1: "Grasping Claws"
actionEconomy1:  "`pf2:2`"
type1: "([[interact]])"
frequency1: "once per day"
requirement1:
trigger1:
activate1: 
duration1: "1 minute"
mechanics1: "You raise the prism and release the conflicting energies imprisoned within it, creating magical darkness in a 20-foot emanation centered on you. The emanation moves with you and lasts for 1 minute. You can Dismiss the effect. The darkness suppresses non-magical light within the area. A magical light effect can attempt to counteract the prism's darkness using a counteract rank of 4 and a counteract DC of 24. You can see normally through darkness created by the prism.\n\nAt the end of its turn, each creature other than you within the prism's darkness must attempt a DC 24 Reflex save as spectral hooks lash outward from unseen points within the darkness.\n\n**Critical Success** The creature avoids the hooks.\n**Success** The creature takes half damage.\n**Failure** The creature takes `dice: 3d6` piercing damage and gains one spectral hook.\n**Critical Failure** The creature takes `dice: 6d6` piercing damage and gains two spectral hooks.\n\nA creature can have no more than 3 spectral hooks attached to it. A creature with one or more spectral hooks treats every square within the prism's darkness as difficult terrain. A creature with 3 spectral hooks is also [[Immobilized]].\n\nIf a creature with spectral hooks leaves the prism's darkness while one or more hooks remain attached to it, all remaining hooks violently tear free. The creature takes `dice: 1d6` piercing damage per hook, and all its spectral hooks are then removed. All remaining spectral hooks disappear harmlessly when the prism's activation ends."

#========================================================#
#                  Ability #2 PROPERTIES                 #
#========================================================#
powerTitle2: "Tear Free"
actionEconomy2: "`pf2:1`"
type2: "([[manipulate]])"
frequency2: 
requirement2:
trigger2: 
activate2: 
duration2: 
mechanics2: "A creature can attempt to tear free one spectral hook attached to itself or an adjacent creature by attempting a DC 24 [[Skills#Athletics|Athletics]] check.\n\n**Critical Success** Remove two hooks.\n**Success** Remove one hook.\n**Critical Failure** The struggling creature takes `dice: 1d6` piercing damage.\n\nA creature can also [[Escape]] from the hooks using [[Skills#Athletics|Athletics]] or [[Skills#Acrobatics|Acrobatics]] against DC 24. A successful Escape removes one hook, or two hooks on a critical success."

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