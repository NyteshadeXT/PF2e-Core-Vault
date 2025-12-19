---
#========================================================#
#                     CORE PROPERTIES                    #
#========================================================#
cssclass: h-line
notetype: pf2e-item
name: "essence-forge-lesser"
aliases: "Essence Forge (Lesser)"
source: "Pathfinder #214: The Broken Palace"
pg: "79"
rarity: "rare"
trait01: "magical"
trait02: ""
trait03: ""
trait04: ""
trait05: ""
trait06: ""
trait07: ""
trait08: ""
image: zz-Attachments/assets/imageplaceholder.png
level: 6
weight: 20
value: "250"
subvalue: "gp"
invest:
usage: "other"
license: "ORC"
identify:
description: "An essence forge consists of a large stone workbench with a receptacle for fuel built into the left side. Sparkling crystals are embedded across the forge's structure, with additional flourishes made from a different material, as appropriate to the type of forge.\n\nLife forges are adorned with fossilized bones and petrified wood. They're used to craft items associated with the divine and primal magic traditions. One must attempt a [[Skills#Nature|Nature]] or [[Skills#Religion|Religion]] check to prime a life forge.\n\nMatter forges are decorated with strips of precious metal. They can be used to craft items associated with the arcane and primal magic traditions. One must attempt an [[Skills#Arcana|Arcana]] or [[Skills#Nature|Nature]] check to prime a matter forge.\n\nMind forges are accentuated with glittering gemstones. They can be used to craft items associated with the arcane and occult magic traditions. One must attempt an [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check to prime a mind forge.\n\nSpirit forges are emblazoned with strange runes and obscure symbols enhanced by different pigments. They can be used to craft items associated with the divine and occult magic traditions. One must attempt an [[Skills#Occultism|Occultism]] or [[Skills#Religion|Religion]] check to prime a spirit forge.\n\n<h2>Essence Forge Crafting</h2>When you finish crafting with an essence forge, consult the following to determine how successful you were.\n\n**0 or fewer Forge Points:** The essence was tainted or your concentration was lacking. An illusory object manifests, but it's a non-magical, worthless level 0 replica of the item you intended to craft.\n**1–3 Forge Points:** The item you craft is functional but temporary. It falls apart after it's activated or after 24 hours, whichever comes first.\n**4–5 Forge Points:** You successfully craft the item.\n**6 or more Forge Points:** You successfully craft the item, and it works better than expected. Choose one of the following enhancements to add to the item:\n*   If the item has an activation that has a frequency of once per day, that activation can be made an additional time each day. \n*   If the item has an activation that has a save DC or Strike modifier, that DC or Strike gains a +1 bonus. \n*   If the item is an invested item, it grants a +1 item bonus to initiative checks as long as you have it invested. \n*   The item is well crafted and can be sold for 60%"
powerTitle1: "Prime the Forge - 1 minute"
actionEconomy1: 
type1: "([[concentrate]], [[manipulate]])"
frequency1:
trigger1:
requierment: "The essence forge doesn't currently contain any stored essence"
mechanics1: "You prepare the essence forge for use by placing raw materials in its receptacle then spend an hour concentrating on the forge, using your own magical potential to consume the materials. The combined gp value of the raw materials sets the maximum price of the item you can craft with the essence forge. An essence forge's receptacle can hold no more than 3 Bulk of raw materials, so coins, gemstones, or small valuable objects or items make for the best sources of fuel. Attempt an DC 20 [[Skills#Arcana|Arcana]] check, DC 20 [[Skills#Nature|Nature]] check, DC 20 [[Skills#Occultism|Occultism]] check, or DC 20 [[Skills#Religion|Religion]] check check as appropriate for the tradition of essence forge you're using to focus your magical potential on the receptacle.\n\n**Critical Success** The raw materials are consumed, and the essence forge stores essence equal to the value of the raw materials. Additional essence overflows back into you, granting a +1 item bonus to the skill you used to Prime the Forge for the next 24 hours.\n**Success** The raw materials are consumed, and the essence forge stores essence equal to the value of the raw materials.\n**Failure** The raw materials are consumed, but the burn is inefficient, and the essence forge stores essence equal to half the value of the raw materials.\n**Critical Failure** The raw materials are consumed and lost, but no essence is stored in the forge; the raw materials are wasted."
powerTitle2: "Craft an Item - 2 hours"
actionEconomy2:
type2: "([[concentrate]], [[manipulate]])"
frequency2:
trigger2:
requirement2: "The essence forge has been primed with raw materials equaling or exceeding the value of the item you intend to craft, and you are not [[Fatigued]]"
mechanics2: "You place your hands atop the forge's workspace and focus your concentration on the essence contained within the forge. Choose an item whose formula you have and whose level is equal to or less than the essence forge's level, or choose an essence charm. The essence forge begins to construct that item as you concentrate, causing an increasingly realistic illusion of the item to come into focus atop the forge's workspace. Attempt a [[Skills#Crafting|Crafting]] check with a DC determined by the forge's type (lesser, moderate, or greater); this check earns Forge Points (using the Victory Point system). You can sustain this activation for up to 8 hours; each time you sustain the activation, attempt another [[Skills#Crafting|Crafting]] check to earn Forge Points. When you choose to end the activation, you become [[fatigued]], and any remaining essence stored in the forge dissipates with no further effect. Consult the Essence Forge Crafting section to determine if you were successful in crafting the item you chose."
powerTitle3: "Absorb Essence"
actionEconomy3: 1
type3: "([[concentrate]], [[healing]], [[manipulate]])"
frequency3:
trigger3:
requirement3: "The essence forge contains essence"
mechanics3: "You absorb the essence in the forge, emptying it and allowing it to be primed. If the essence value in the forge is equal to or greater than 50 go, the forge heals you for `dice: 3d8+10` healing HP. Otherwise the absorbed essence has no effect."
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
#                 MAGIC ITEM PROPERTIES                  #
#========================================================#
weaponBase:
armorBase:

---

```meta-bind-embed
[[Item Card Template]]
```
