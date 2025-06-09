---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "animate-dreamer"
aliases: "Animate Dreamer"
source: "Pathfinder Guns & Gears"
pg: "161"
rarity: "rare"
trait01: "concussive"
trait02: "dwarf"
trait03: "intelligent"
trait04: "kickback"
trait05: "occult"
trait06: "scatter-10"
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 15
group: "Firearm"
weight: 2
value: "0"
subvalue: "gp"
invest:
usage: "held in two hands "
license: "ORC"
identify:
description: "The gunsmith that created this marvelous _[[Weapon Potency (+2)|+2]] [[striking-(greater)|greater striking]] [[Spell Storing|spell-storing]] [[dwarven-scattergun|dwarven scattergun]]_ poured so much love and care into its creation that the weapon gained a spark of sentience. However, at first it was completely incapable of expressing itself. This led a seething frustration to grow within the weapon, as it yearned desperately to respond to the same love and affection that created it. Through decades of effort, it gained the ability to communicate emphatically, then telepathically. Now, the weapon is capable of exerting its influence over other inanimate objects. Despite the weapon's progress, years of feeling helpless have given the _animate dreamer_ a singular goal: to obtain and occupy a body of its own.  An _animate dreamer_ is cunning, intelligent, and patient. It urges you to create a body for it and is willing to go to any lengths to see its goals come to fruition, including coercion, deception, and violence. An _animate dreamer_ desires a permanent body but isn't picky about the body's form or the methods it has to use in order to gain it. Therefore, an _animate dreamer_ is just as happy in a living body stolen from an innocent as it would be in an artificially constructed body, or even an undead corpse. If you refuse to work towards creating or obtaining a body for the _animate dreamer_, it will likely use its possession ability to try and take control of you and use your body to find a permanent replacement for itself."
powerTitle1: "Unleash Spell"
actionEconomy1: 2
type1: "([[manipulate]])"
frequency1:
trigger1:
requirement1: "The _animate dreamer_ has a stored spell. It can see a creature it hit and damaged within the last minute, and that creature's within 120 feet of animate dreamer  "
mechanics1: "The _animate dreamer_ casts its stored spell at a target that meets the requirements. This empties the spell from the weapon and allows a spell to be cast into it again. The _animate dreamer_ has a spell attack roll of +25 and a spell DC of 33 with the stored spell."
powerTitle2: "Animate Object"
actionEconomy2: 3
type2: "([[manipulate]])"
frequency2:
trigger2:
mechanics2: "The _animate dreamer_ focuses on a single unattended inanimate object in an area it can see and exerts its will over the object, temporarily levitating it around. The _animate dreamer_ casts [[Telekinetic Hand]] as a 5th-rank occult spell."
powerTitle3: "Possessive"
actionEconomy3: 3
type3: "([[manipulate]])"
frequency3: "once per day"
trigger3:
mechanics3: "The _animate dreamer_ attempts to achieve its goal of occupying a body of its own and casts [[3-Rules/Character Building/Spells/P/Possession|Possession]] as a 7th-rank spell with a spell DC of 33. The weapon still functions as a +2 greater striking spell-storing dwarven scattergun while this effect is active but loses all other special abilities until the spell expires and the _animate dreamer_'s intellect returns to it."
craft:

#========================================================#
#                   WEAPON PROPERTIES                    #
#========================================================#
range: 50 ft
ammoType: "firearm ammunition (5 rounds)"
reload: 1
damage: 
dmg1: "3d8"
dmg1Type: "piercing"
dmg2:
dmg2Type:
weaponType: "Ranged"
weaponCategory: "Advanced"

#========================================================#
#                    ARMOR PROPERTIES                    #
#========================================================#
baseAC:
modAC:
dexCap:
strRequirement:
checkPenalty:
speedPenalty:
armorCategory:
resist:
immunity:
conditionImmunity: 

#========================================================#
#              INTELLIGENT ITEM PROPERTIES               #
#========================================================#
perception: "+26; precise vision 60 feet, imprecise hearing 30 feet"
communication: "telepathy (Common, and six other common languages)"
skill1: "Arcana +30"
skill2: "Deception +27"
skill3: "Diplomacy +27"
skill4: "Occultism +30"
int: "+6"
wis: "+4"
cha: "+4"
will: "+26"

#========================================================#
#                 MAGIC ITEM PROPERTIES                  #
#========================================================#
weaponBase: "Dwarven Scattergun"
armorBase:

---

```meta-bind-embed
[[Item Card Template]]
```