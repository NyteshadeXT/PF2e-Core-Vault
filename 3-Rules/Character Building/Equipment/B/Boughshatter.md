---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: pf2e-items, h-line
name: "boughshatter"
aliases: "Boughshatter"
source: "Pathfinder #203 Shepherd of Decay"
pg: "79"
rarity: "uncommon"
trait01: "earth"
trait02: "magical"
trait03: "poison"
trait04:
trait05:
trait06:
trait07:
trait08:
image: zz-Attachments/assets/imageplaceholder.png
level: 13
group: "Club"
bulk: 1
value: "2875"
subvalue: "gp"
invest: 
usage: "held in one hand"
license: "ORC"
identify: ""
description: "The spikes of this [[Weapon Potency (+2)|+2]] [[striking-(greater)|greater striking]] [[Adamantine Chunk|standard-grade adamantine]] [[morningstar]] have a faintly green shimmer, as if resembling Ayrzul’s crystalline teeth. The weapon vibrates briefly when first drawn in or carried into a radioactive area, with the intensity of the vibration correlating to the radioactivity’s strength. While you carry _Boughshatter_, you gain a +4 status bonus to saving throws against radiation, including Ayrzul’s Blight."
activate: ""
craft: 
destruction: 

#========================================================#
#                  Ability #1 PROPERTIES                 #
#========================================================#
powerTitle1: "Splintering Strike"
actionEconomy1: 2
type1: "([[manipulate]])"
frequency1: "once per minute"
requirement1:
trigger1:
activate1: 
duration1: 
mechanics1: "Make a [[Strike]] with the morningstar that deals an extra die of weapon damage. If you make this Strike against a fungus, plant, or creature with the wood trait, the Strike ignores 10 points of the target’s resistances to bludgeoning and piercing damage, if any. By damaging such a creature, the morningstar causes the target’s flesh to explode in a shower of splinters that affect a 30-foot cone originating from the target’s space, dealing `dice: 8d6` 8d6 piercing damage to creatures in the area (DC 30 basic Reflex save). You and the target are unaffected by these splinters."

#========================================================#
#                  Ability #2 PROPERTIES                 #
#========================================================#
powerTitle2: "Abosorb Corruption"
actionEconomy2: r
type2: "([[concentrate]])"
frequency2:  "once per day"
requirement2:
trigger2: "You take poison or void damage"
activate2: 
duration2: 
mechanics2: "You channel some of the toxic energy into _Boughshatter_, granting the weapon the effects of either a [[Decaying]] weapon rune, [[Grievous]] weapon rune, or [[Wounding]] weapon rune for 1 minute. While under this effect, the morningstar glows with dim green light in a 20-foot radius."

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
dmg1: 1d6
dmg1Type: bludgeoning
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
weaponBase: "Morningstar"
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
WHERE contains(weaponbase, "Morningstar")
SORT level ASC

```


