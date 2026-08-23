---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclasses: 
- pf2e-items 
- h-line 
- pf2e-item-base
name: "fiendbreaker"
aliases: "Fiendbreaker"
source: " Pathfinder #211: The Secret of Deathstalk Tower"
pg: "81"
rarity: "unique"
trait01: "divine"
trait02: "staff"
trait03: ""
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/assets/imageplaceholder.png
level: 15
group: "Club"
bulk: 1
value: "6500"
subvalue: "gp"
invest: 
usage: "held in one hand"
license: "ORC"
identify: ""
description: "After she led her people through the Darklands to the far side of the world, the elven oracle Jininsiel established the nation of Jinin in the heart of the continent of Tian Xia. As she sought to forge alliances with other lands surrounding her own, Jininsiel crafted potent magic items as gifts. For the people of Tianjing, she created this staff, which served the people of that nation well for many years. They returned it to Jinin as a token of condolence when that nation’s leader passed into the Great Beyond. Many centuries later, when the people of Jinin learned that their kin had returned to Kyonin from Castrovel only to face fiendish threats in their homeland, a group of priests from Jinin traveled across the world to help. They brought with them _Fiendbreaker_ and chose to leave it in Kyonin to help protect them in the future from demonic foes.\n\n_Fiendbreaker_ functions as a _[[Weapon Potency (+2)|+2]] [[striking-(greater)|greater striking]] [[holy]] [[cold-iron-weapon-standard-grade|standard-grade cold iron]] [[staff]]_. While wielding the staff, you gain a +2 circumstance bonus to checks made to [[Recall Knowledge]] about fiends."
activate: ""
craft: 
destruction: 

#========================================================#
#                  Ability #1 PROPERTIES                 #
#========================================================#
powerTitle1: "Cast a Spell"
actionEconomy1: 
type1: 
frequency1: 
requirement1:
trigger1:
activate1: 
duration1: 
mechanics1: "You expend a number of charges from the staff to cast a spell from its list.\n\n**Cantrip** [[Divine Lance]]\n**1st** [[Sanctuary]]\n**2nd** [[3-Rules/Character Building/Spells/S/See the Unseen|See the Unseen]]\n**3rd** [[Anointed Ground]], [[3-Rules/Character Building/Spells/H/Holy Light|Holy Light]]\n**4th** [[Clear Mind]], [[Planar Tether]]\n**5th** [[Banishment]], [[Divine Wrath]]\n**6th** [[3-Rules/Character Building/Spells/H/Holy Light|Holy Light]], [[Spirit Blast]]"

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
dmg1: 3d4
dmg1Type: Bludgeoning 
dmg2: 
dmg2Type: 
weaponType: Melee
weaponCategory: Simple

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
weaponBase: "Staff"
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
WHERE contains(weaponbase, "Bo Staff")
SORT level ASC

```
