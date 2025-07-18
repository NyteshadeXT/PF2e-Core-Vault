---
noteType: pf2erule
creatureLevel: 6
creatureSize: 4
creatureValue: 125
itemType: 2
itemRarity: 0
craftProficiency: 1.05
craftRoll: 0.003
refineLevel: 15
ItemType: 2
refineRoll: 0.001
---

# Gathering Ingredients
>[!law | background-brown color-blue]+ ## Gathering Ingredients
>> [! recite |  right  wsmall]+ Harvest Example 
>> The party has just slain a Hydra and harvests for parts. Quynn, the party's ranger, would like to harvest the creature.  A Hydra is a level 6 Huge creature so the GM has Quynn roll 1d10 for total parts harvested, rolling total of 4. After 40 minutes Quynn receives 4 parts.  He wishes to attempt to harvest more, and makes a Survival check (DC 22). Quynn, gets a Success and after an additional 40 minutes gains 2 (1d4) more parts. If he had gotten a Critical Success he would have gained 2d4 additional parts. Since the hydra is CR 6 Quynn can record the total bounty as 15 gp worth of hydra parts.
> 
> The first step in upgrading weapons with monster parts is gathering suitable parts. After a battle, the PCs can spend 10 minutes per size category of the creature gathering the monsters’ parts beginning with small. 
>
> The types of parts that can be harvested and refined fall into four categories, **Elemental**, **Esoteric**, **Visage**, and **Aspect**. *Elemental* and *Esoteric* parts will allow a character to refine their weapons and *Visage* and *Aspect* to refine armor, and other wearable items. However, the GM has final say in how harvested parts can be used, and which categories the parts can be used towards for gaining an [[#Augmentation]]. 
> 
> If the GM determines that parts can be harvested from the slain creature, roll to see how many parts are harvested. Typically the PCs can harvest a number of parts from any given creature based on it's size.  1d4 parts from a small creature, 1d6 parts from a medium, 1d8 parts from a large, 1d10 parts from a huge and 1d12 parts from a gargantuan. The value of these parts can be determined by consulting the Parts Value by Level table below.  Additionally, a player with the [[Skills#Survival|Survival]] skill or an appropriate [[Skills#Lore|Lore]] skill (as determined by the GM) may attempt an skill check to obtain 1d4 additional parts (or 2d4 on a Critical Success).  The DC for this skill check is set by the GM but is usually the simple DC based on the level of the creature. This takes the same amount of time as the initial attempt and may be enhanced by the [[Aid]] action.
> 
> Preserving parts
> 
> While the Bulk is at the GM’s discretion, typical Bulk values are light Bulk for the parts of a Small creature, 1 Bulk for Medium, 2 Bulk for Large, 4 Bulk for Huge, and 8 Bulk for Gargantuan. As such, it is usually a good idea for PCs to use the parts quickly to upgrade their items via refining and imbuing. 
>
>>[! creature | background-black color-red]- Parts Value by Level
>>
>>![[Tables - Full Variant#Table 2C Monster Parts Gained Per Monster (Full Variant)|Parts Value by Level]]
>
>| Harvesting Calculator |
>|-------------------|---------------------------------------------------------------|
>| **Creature Level:**  | `INPUT[number:frontmatter^creatureLevel]`
>| **Creature Size**                | `INPUT[inlineSelect(option(1,Small), option(2,Medium), option(3,Large), option(4,Huge), option(5,Gargantuan)):frontmatter^creatureSize]` |
>| **Time to Harvest (minutes)**    | `VIEW[({creatureSize}==1?10:{creatureSize}==2?20:{creatureSize}==3?30:{creatureSize}==4?40:{creatureSize}==5?50:0)]` |
>| **Exact Monster Part Value (gp)** | `VIEW[({frontmatter^creatureLevel} == -1 ? 6.5 : {frontmatter^creatureLevel} == 0  ? 9   : {frontmatter^creatureLevel} == 1  ? 13  : {frontmatter^creatureLevel} == 2  ? 22  : {frontmatter^creatureLevel} == 3  ? 30  : {frontmatter^creatureLevel} == 4  ? 50  : {frontmatter^creatureLevel} == 5  ? 80  : {frontmatter^creatureLevel} == 6  ? 125 : {frontmatter^creatureLevel} == 7  ? 180 : {frontmatter^creatureLevel} == 8  ? 250 : {frontmatter^creatureLevel} == 9  ? 360 : {frontmatter^creatureLevel} == 10 ? 500 : {frontmatter^creatureLevel} == 11 ? 720 : {frontmatter^creatureLevel} == 12 ? 1030: {frontmatter^creatureLevel} == 13 ? 1560: {frontmatter^creatureLevel} == 14 ? 2300: {frontmatter^creatureLevel} == 15 ? 3400: {frontmatter^creatureLevel} == 16 ? 5150: {frontmatter^creatureLevel} == 17 ? 8000: {frontmatter^creatureLevel} == 18 ? 13000: {frontmatter^creatureLevel} == 19 ? 22500: {frontmatter^creatureLevel} == 20 ? 30000: {frontmatter^creatureLevel} == 21 ? 45000: {frontmatter^creatureLevel} == 22 ? 60000: {frontmatter^creatureLevel} == 23 ? 90000: {frontmatter^creatureLevel} == 24 ? 120000: {frontmatter^creatureLevel} == 25 ? 180000: 0)][math:frontmatter^creatureValue]` |
>| **Avg Parts Value per Creature (gp)**| `VIEW[round({frontmatter^creatureValue} / 50, 2)]` | 






# Refinement

>[!law | background-black color-blue]+ ## Refining
>> [!recite| wsmall right]+ Refinement Example
>> **PF2e** — A fighter wants to refine a greataxe using monster parts from a recently defeated a pair of Smilodon.  Since the Smilodon claw attack is a slashing attack he can use those part to craft the weapon. The fighter has 275 gp worth of Smilodon parts. They start by building the greataxe for 2 gp, leaving them with 273 gp in parts. Using 250 gp, they refine the greataxe to item level 6, passing a **Refine DC 21** which grants a +1 item bonus to attack rolls, an extra damage die, and the ability to imbue an additional property. With 24 gp worth of parts remaining, the greataxe is partially refined towards level 7, requiring 86 more gp worth of parts to reach the next level.  On the fighters character sheet he would record a **+1 Striking Greataxe (6)**
>
> To begin, the player refines an item from the collected monster parts creating a chimeracrafted mundane item as the basis for further development.  Weapons, armor, shields, perception items, skill items and staves are the six main categories of item a character is able to refine.  Simply gather parts equivalent to the item's standard creation cost (e.g., 1 sp for a spear) and [[Craft]] the desired item.  Note, that all Chimeracrafted items are considered at least [[uncommon]] for crafting purposes.
> 
> [[DC Calculator#Crafting Calculator|Crafting Calculator]]
> 
> The item may be further developed by refining it as you add more parts.  The item levels up, providing benefits like increased attack rolls, additional damage dice, and imbuing capacity as outlined by [[Tables - Refinement Benefits by Level]]. To determine the total value of parts needed to reach each level of refinement consult [[Tables - Refinement Cost by Item Level]], noting that items cannot exceed the character's current level. Refining can be done quickly during daily preparations or during downtime as desired by the player taking one hour to accomplish the task. Once a character has obtained parts they can begin the refining process. a general rule to follow would be **14**+**Item Level**. Failing to refine the item results in a cost of 25% of the value used. It is up to the GM what skill is used to refine the item. Alternatively, a character can pay 50% of the cost of the item refining material in gold to have a NPC of equivalent skill make it with no failure.
> 
> You may come across Chimeracrafted items during your adventures.  In this case, you may want to Salvage the item completely or Transfer the items refinement and imbued properties. Salvaging allows you to recover up to 50% of the parts used in a refined item. To Transfer the refinement value or the value of an imbued property from one item of the same type (a weapon, armor, shield, Perception item, or skill item) to another with a lower value, first choose what to swap, either the refinement value or the value of one of the imbued properties. In order to successfully transfer refinement value, the two items must have compatible requirements for the type of monster parts they need. For instance, you couldn’t transfer refinement from a bludgeoning weapon to a slashing weapon because they have different requirements. To perform the transfer, you’ll need to provide additional monster parts worth 10% of the difference in values between the two. This flexible system ensures that players can enhance their gear using monster parts, providing unique upgrades and customizations based on their adventures and the monsters they defeat.  
>
>>[!column | 2] Refining Calculators
>>>
>>>| Refining DC & Cost Calculator |
>>>|-------------------|---------------------------------------------------------------|
>>>| **Refinement Level:**  | `INPUT[number:frontmatter^refineLevel]`
>>>| **Item Type**                | `INPUT[inlineSelect(option(1,Weapon), option(2,Armor), option(3,Shield), option(4,Perception Item), option(5,Skill Item), option(5,Staff)):frontmatter^ItemType]` |
>>>| **Refining DC**| `VIEW[round({refineLevel} + 14 + ({refineLevel}/3))]`  |
>>>| **Refinement Cost:** | `VIEW[(({ItemType} <= 2) ? ({refineLevel} == 1  ?   20 : {refineLevel} == 2  ?   35 : {refineLevel} == 3  ?   60 : {refineLevel} == 4  ?  100 : {refineLevel} == 5  ?  160 : {refineLevel} == 6  ?  250 : {refineLevel} == 7  ?  360 : {refineLevel} == 8  ?  500 : {refineLevel} == 9  ?  700 : {refineLevel} == 10 ? 1000 : {refineLevel} == 11 ? 1400 : {refineLevel} == 12 ? 2000 : {refineLevel} == 13 ? 3000 : {refineLevel} == 14 ? 4500 : {refineLevel} == 15 ? 6500 : {refineLevel} == 16 ?10000 : {refineLevel} == 17 ?15000 : {refineLevel} == 18 ?24000 : {refineLevel} == 19 ?40000 : {refineLevel} == 20 ?70000 : 0) : ({refineLevel} == 1  ?   10 : {refineLevel} == 2  ?   20 : {refineLevel} == 3  ?   35 : {refineLevel} == 4  ?   60 : {refineLevel} == 5  ?  100 : {refineLevel} == 6  ?  160 : {refineLevel} == 7  ?  240 : {refineLevel} == 8  ?  340 : {refineLevel} == 9  ?  470 : {refineLevel} == 10 ?  670 : {refineLevel} == 11 ?  950 : {refineLevel} == 12 ? 1350 : {refineLevel} == 13 ? 2000 : {refineLevel} == 14 ? 3000 : {refineLevel} == 15 ? 4300 : {refineLevel} == 16 ? 6500 : {refineLevel} == 17 ?10000 : {refineLevel} == 18 ?16000 : {refineLevel} == 19 ?25000 : {refineLevel} == 20 ?45000 : 0))][math]` gp |
>>>| **Check Result** | `INPUT[inlineSelect(option(1, Critical Success), option(0.003, Success), option(0.002, Failure), option(0.001, Critical Failure)):refineRoll]`|
>>>| **Consequence** | `VIEW[({refineRoll} >= 1 ? "You expend half the materials and refine the item." : ({refineRoll} >= 0.003 ? "You expend the materials and refine the item." : ({refineRoll} >= 0.002 ? "You fail to refine the item. You can try again during your next daily preperation or downtime. The materials aren't expended." : ({refineRoll} <= 0.001 ? "You fail to refine the item. You can try again during your next daily preperation or downtime. You expend half the materials." : ""))))]` |
>>
>>>| Salvage Calculator |
>>>|-------------------|---------------------------------------------------------------|
>>>| **Refinement Level:**  | `INPUT[number:frontmatter^refineLevel]`
>>>| **Item Type**                | `INPUT[inlineSelect(option(1,Weapon), option(2,Armor), option(3,Shield), option(4,Perception Item), option(5,Skill Item), option(5,Staff)):frontmatter^ItemType]` |
>>>| **Refining DC**| `VIEW[round({refineLevel} + 14 + ({refineLevel}/3))]`  |
>>>| **Refinement Cost:** | `VIEW[(({ItemType} <= 2) ? ({refineLevel} == 1  ?   20 : {refineLevel} == 2  ?   35 : {refineLevel} == 3  ?   60 : {refineLevel} == 4  ?  100 : {refineLevel} == 5  ?  160 : {refineLevel} == 6  ?  250 : {refineLevel} == 7  ?  360 : {refineLevel} == 8  ?  500 : {refineLevel} == 9  ?  700 : {refineLevel} == 10 ? 1000 : {refineLevel} == 11 ? 1400 : {refineLevel} == 12 ? 2000 : {refineLevel} == 13 ? 3000 : {refineLevel} == 14 ? 4500 : {refineLevel} == 15 ? 6500 : {refineLevel} == 16 ?10000 : {refineLevel} == 17 ?15000 : {refineLevel} == 18 ?24000 : {refineLevel} == 19 ?40000 : {refineLevel} == 20 ?70000 : 0) : ({refineLevel} == 1  ?   10 : {refineLevel} == 2  ?   20 : {refineLevel} == 3  ?   35 : {refineLevel} == 4  ?   60 : {refineLevel} == 5  ?  100 : {refineLevel} == 6  ?  160 : {refineLevel} == 7  ?  240 : {refineLevel} == 8  ?  340 : {refineLevel} == 9  ?  470 : {refineLevel} == 10 ?  670 : {refineLevel} == 11 ?  950 : {refineLevel} == 12 ? 1350 : {refineLevel} == 13 ? 2000 : {refineLevel} == 14 ? 3000 : {refineLevel} == 15 ? 4300 : {refineLevel} == 16 ? 6500 : {refineLevel} == 17 ?10000 : {refineLevel} == 18 ?16000 : {refineLevel} == 19 ?25000 : {refineLevel} == 20 ?45000 : 0))][math]` gp |

# Augmentation
>[!item]+ ## Augments
>> [! note | clean no-i no-t] 
>> ### How to get an Augment
>> After an item has been refined to certain level within one of the four refinement categories, it will gain an Augment of the essence of the creatures and magic used to refine the item. Depending on your item category will depend on which Augments you gain.
>>
>> As stated before in [[#Refinement]] there are four Augmentation categories, and each have their own subcategories. The four main augments are, **Elemental**, **Esoteric**, **Visage**, and **Aspect**. With these once a certain level has been reached in Refinement, the item will become augmented and will gain a Augmentation as listed below.
>>
>> ### Choosing an Augment
>> Augments can vary depending on what the character is planning on using. For Weapons, the choice is broken down primarily by which Origin is used for Augmentation. The three Origins are, Arcane, Ravage, and Talent, and each have their own unique features.
>>
>> When a character has begun refining their item they must choose which Origin they wish to refine their weapon towards. When a refinement is destroyed or removed either by choice or by salvaging, the item loses the Augmentation it had previously gained.
>> 
>> ###  Multiple Origin Augments (Optional)
>> This is a variant rule that is up to the GM if they wish to allow. Multiple Origin Augments (**MoA**) allows for a character to augment their items with different Augments of different origins. While this can create unique combos and interesting effects this can lead to some possibly stronger characters.
>>
>>> [! recite | right wsmall] **MoA** Example
>>>  *A level 12 fighter can have a Greatsword with Arcane origin Level 2, Ravage origin level 6, and Talent Origin level 4, for a total Origin level of 12.*
>>
>> If this variant rule is used combos of all kinds can be used. A weapon can be refined to be augmented with both Fire and Ice, Sonic and Electricity, or Void and Radiant/Vitality. Even armor can benefit from this rule allowing for combination of unique magic armor.

## Augments: Pathfinder 2e
### Weapons
>[!tip |background-black]+ #### Elemental IMBUED
><font color=lightblue> Elemental • Evocation • Magical </font>
>**Type:** Weapon
>**Parts:** The monster must have a trait or an attack or spell that deals elemental damage as the following: **Acid**, **Cold**, **Fire**, **Electricity**, or **Poison**.
>**Effect:** You imbue the weapon with primeval essence of the elements.
>>[! recite | clean] *DM chooses the available spell rarity for Arcane origins*
>
>>[!column | 3] Origins
>>> [! hist]- - Arcane
>>> 
>>> | Level | Effect |
>>> | --- | --- |
>>> | 2nd | Gain an elemental appropriate cantrip, heightened to half the item's level rounded up. |
>>> | 4th | Gain an elemental appropriate spell of 1st level, usable once per day. |
>>> | 6th | Gain an elemental appropriate spell of 2nd level, usable once per day. |
>>> | 8th | Gain an elemental appropriate spell of 3rd level, usable once per day. |
>>> | 10th | Strikes deal 1 additional elemental damage. |
>>> | 12th | Gain an elemental appropriate spell of 4th level, usable once per day. |
>>> | 14th | Strikes increase to 1d4 elemental damage. |
>>> | 16th | Gain an elemental appropriate spell of 6th level, usable once per day. |
>>> | 18th | Strikes increase to 1d6 elemental damage. |
>>> | 20th | Gain an elemental appropriate spell of 9th level, usable once per day. |
>>
>>> [! encounter]- - Ravage
>>> 
>>> | Level | Effect |
>>> | --- | --- |
>>> | 4th | Strikes deal 1 additional elemental damage. |
>>> | 6th | Additional elemental damage increases to 1d4. |
>>> | 8th | Additional elemental damage increases to 1d6. On a crit, see unique crit effect in critical table. |
>>> | 12th | Elemental damage ignores resistances. |
>>> | 14th | Gain a unique feature related to the element (see Ravage feat table). |
>>> | 18th | Persistent elemental damage increases to 1d10. |
>>> | 20th | On a crit, target is drained 1 and elemental weakness half your level rounded up. |
>>
>>> [! interest]- - Talent
>>> 
>>> | Level | Effect |
>>> | --- | --- |
>>> | 4th | Strikes deal 1 persistent elemental damage. |
>>> | 6th | Strikes deal 1 additional elemental damage. |
>>> | 8th | Persistent elemental damage increases to 1d6. |
>>> | 12th | Elemental damage ignores resistances. |
>>> | 14th | Persistent elemental damage increases to 1d8. |
>>> | 16th | Unique feature related to the element (see Talent feat table). |
>>> | 18th | Persistent elemental damage increases to 1d10. |
>>> | 20th | Unique feature related to the element (see Ravage feat table). |
>
>> [!column| 2]+ Path Features
>> 
>>> [! encounter]- - Ravage Feat
>>> 
>>> | Element | Feat | Effect |
>>> | --- | --- | --- |
>>> | Acid | Corrosive Aura | When you critically hit with this weapon, you gain an aura that deals 1d6 acid damage to any creature that starts its turn within 5 feet of you. This aura lasts for 1 minute. |
>>> | Cold | Frostbite | When you critically hit with this weapon, the target must succeed at a Fortitude save or be paralyzed for 1 round. If the target fails the save by 5 or more, they are paralyzed for 2 rounds. |
>>> | Electricity | Storm's Wrath | When you critically hit with this weapon, you gain resistance to electricity damage equal to twice your level for 1 minute. Additionally, the weapon gains the **Shock** trait for the duration. |
>>> | Fire | Inferno Burst | When you critically hit with this weapon, a burst of flames erupts in a 10-foot radius around the target, dealing 2d6 fire damage to all creatures in the area. Creatures in the area must succeed at a Reflex save or catch fire, taking 1d6 persistent fire damage. |
>>> | Poison | Venomous Cloud | When you critically hit with this weapon, you release a cloud of poisonous gas in a 10-foot radius. Creatures in the area must succeed at a Fortitude save or be poisoned, taking 1d6 poison damage at the start of their turn for 1 minute. |
>>
>>> [! interest]- - Talent Feats
>>> 
>>> | Element | Feat | Effect |
>>> | --- | --- | --- |
>>> | Acid | Acidic Trail | When you move, you leave a trail of acid behind you. Any creature that moves through the trail takes 1d6 acid damage and must succeed at a Reflex save or have their speed reduced by half until the end of their next turn. |
>>> | Cold | Icy Path | When you move, you leave a trail of ice behind you. Any creature that moves through the trail must succeed at an Acrobatics check or fall prone. The ice remains for 1 minute or until it is melted by a fire effect. |
>>> | Electricity | Lightning Reflexes | When you critically hit with this weapon, you gain a +2 circumstance bonus to Reflex saves and your speed increases by 10 feet for 1 minute. |
>>> | Fire | Blazing Speed | When you critically hit with this weapon, your speed increases by 20 feet and you leave a trail of fire behind you. Any creature that starts its turn in the trail or moves through it takes 1d6 fire damage. The fire trail lasts for 1 minute. |
>>> | Poison | Toxic Strike | When you critically hit with this weapon, the target is afflicted with a powerful toxin. They must succeed at a Fortitude save or be sickened 1 and take 1d6 persistent poison damage. The sickened condition lasts until the poison is neutralized. |
>
>>[! danger | clean]+ Critical Table
>>
>>| Element | Feat | Effect |
>>| --- | --- | --- |
>>| **Acid** | Corrosive Strike | On a critical hit, the target's armor or shield takes 3d6 acid damage (before applying Hardness). If the target has no armor or shield, they take an additional 1d6 persistent acid damage. |
>>| **Cold** | Freezing Impact | On a critical hit, the target must succeed at a Fortitude save or be slowed 1 until the end of your next turn. If the target fails the save by 5 or more, they are slowed 2. |
>>| **Electricity** | Arcing Shock | On a critical hit, electricity arcs to up to two additional creatures within 10 feet of the target, dealing 1d6 electricity damage to each. These secondary targets must succeed at a Reflex save or be stunned 1. |
>>| **Fire** | Explosive Blast | On a critical hit, the target takes an additional 1d6 fire damage, and all creatures adjacent to the target take 1d6 fire damage as well. These creatures must succeed at a Reflex save or catch fire, taking 1d6 persistent fire damage. |
>>| **Poison** | Venomous Strike | On a critical hit, the target takes an additional 1d6 poison damage and must succeed at a Fortitude save or be enfeebled 1 for 1 minute. If the target fails the save by 5 or more, they are enfeebled 2. |



>[! law |background-black]+ #### Esoteric IMBUED
><font color=lightblue> Esoteric • Evocation • Magical </font>
>**Type:** Weapon
>**Parts:** The monster must have a trait or an attack or spell that deals esoteric damage as the following: **Aberrant**, **Force**, **Sonic**, **Vitality**, or **Void**.
>**Effect:** You channel the mysterious powers of esoteric forces into the weapon.
>>[! recite | clean] *DM chooses the available spell rarity for Arcane origins*
>
>>[!column | 3] Origins
>>> [! hist]- - Arcane
>>> 
>>> | Level | Effect |
>>> | --- | --- |
>>> | 2nd | Gain an esoteric appropriate cantrip, heightened to half the item's level rounded up. |
>>> | 4th | Gain an esoteric appropriate spell of 1st level, usable once per day. |
>>> | 6th | Gain an esoteric appropriate spell of 2nd level, usable once per day. |
>>> | 8th | Gain an esoteric appropriate spell of 3rd level, usable once per day. |
>>> | 10th | Strikes deal 1 additional esoteric damage. |
>>> | 12th | Gain an esoteric appropriate spell of 4th level, usable once per day. |
>>> | 14th | Strikes increase to 1d4 esoteric damage. |
>>> | 16th | Gain an esoteric appropriate spell of 6th level, usable once per day. |
>>> | 18th | Strikes increase to 1d6 esoteric damage. |
>>> | 20th | Gain an esoteric appropriate spell of 9th level, usable once per day. |
>>
>>> [! encounter]- - Ravage
>>> 
>>> | Level | Effect |
>>> | --- | --- |
>>> | 4th | Strikes deal 1 additional esoteric damage. |
>>> | 6th | Additional esoteric damage increases to 1d4. |
>>> | 8th | Additional esoteric damage increases to 1d6. On a crit, see unique crit effect in crit table. |
>>> | 12th | Esoteric damage ignores resistances. |
>>> | 14th | Gain a unique feature related to the esoteric element (see feature table). |
>>> | 18th | Persistent esoteric damage increases to 1d10. |
>>> | 20th | On a crit, target is drained 1. |
>>
>>> [! interest]- - Talent
>>> 
>>> | Level | Effect |
>>> | --- | --- |
>>> | 4th | Strikes deal 1 persistent esoteric damage. |
>>> | 6th | Strikes deal 1 additional esoteric damage. |
>>> | 8th | Persistent esoteric damage increases to 1d6.|
>>> |10th | On a crit, see unique crit effect in crit table. |
>>> | 12th | Esoteric damage ignores resistances. |
>>> | 14th | Persistent esoteric damage increases to 1d8. |
>>> | 16th | Unique feature related to the esoteric element (see feature table). |
>>> | 18th | Persistent esoteric damage increases to 1d10. |
>>> | 20th | Unique feature related to the esoteric element (see feature table). |
>
>> [!column| 2]+ Path Features
>> 
>>> [! encounter]- - Ravage Feats
>>> 
>>> | Element | Feat | Effect |
>>> | --- | --- | --- |
>>> | Aberrant | Reality Rip | When you critically hit with this weapon, you create a tear in reality. Creatures within 10 feet must succeed at a Will save or be confused for 1 round. The tear remains for 1 minute, causing any creature that ends its turn within 5 feet to take 1d6 mental damage. |
>>> | Force | Gravitic Pull | When you critically hit with this weapon, you can push or pull all creatures within 10 feet towards you. They must succeed at a Fortitude save or be effected by 10 feet and knocked prone. |
>>> | Sonic | Sonic Boom | When you critically hit with this weapon, a sonic boom emanates from the impact. All creatures within 20 feet must succeed at a Fortitude save or be stunned 1 and deafened for 1 minute. |
>>> | Vitality | Healing Surge | When you critically hit with this weapon, you and all allies within 30 feet regain Hit Points equal to 1d6 plus your level. |
>>> | Void | Entropic Decay | When you critically hit with this weapon, the target must succeed at a Fortitude save or have its physical and mental resistances reduced by 2 for 1 minute. If the target fails the save by 5 or more, the reduction is increased to 4. |
>>
>>> [! encounter]- - Talent Feats
>>> 
>>> | Element | Feat | Effect |
>>> | --- | --- | --- |
>>> | Aberrant | Twisted Movement | When you move, your path twists reality around you. Creatures within 10 feet of your path must succeed at a Will save or be disoriented, suffering a -2 penalty to attack rolls and Perception checks for 1 minute. |
>>> | Force | Kinetic Shield | When you critically hit with this weapon, you gain a kinetic shield that provides a +2 circumstance bonus to AC and Reflex saves for 1 minute. |
>>> | Sonic | Echoing Strike | When you critically hit with this weapon, the strike echoes, dealing 1d6 sonic damage to all creatures within 10 feet. These creatures must succeed at a Fortitude save or be deafened for 1 minute. |
>>> | Vitality | Vital Aura | When you critically hit with this weapon, you gain an aura that heals you and all allies within 10 feet for 1d6 Hit Points at the start of each of your turns for 1 minute. |
>>> | Void | Void Step | When you critically hit with this weapon, you can step through the void. You gain the effects of the blink spell for 1 round, allowing you to briefly become ethereal and avoid attacks. |
>
>>[!danger | clean]+ Critical Table
>>
>>| Element | Feat | Effect |
>>| --- | --- | --- |
>>| **Aberrant** | Reality Warp | On a critical hit, the target must succeed at a Will save or be confused for 1 round. If the target fails the save by 5 or more, they are also stupefied 1 for 1 minute. |
>>| **Force** | Crushing Blow | On a critical hit, the target is knocked back 10 feet and must succeed at a Fortitude save or be knocked prone. If the target collides with a solid object, they take an additional 1d6 force damage. |
>>| **Sonic** | Resonant Shockwave | On a critical hit, the target and all creatures within 10 feet must succeed at a Fortitude save or be deafened for 1 minute. If the target fails the save by 5 or more, they are also stunned 1. |
>>| **Vitality** | Vital Surge | On a critical hit, the target takes an additional 1d6 energy damage, and the attacker regains an equal amount of Hit Points. The target must succeed at a Will save or be enfeebled 1 for 1 minute. |
>>| **Void** | Entropic Strike | On a critical hit, the target must succeed at a Will save or take 1d6 persistent void damage. If the target fails the save by 5 or more, they are also frightened 2. |

### Wearable

>[! creature | background-black]- #### Visage IMBUED
><font color=lightblue> Physical • Enchantment • Magical </font>
>**Type:** Armor, Accessory, or Shield
>**Parts:** The monster must have a trait or an attack or spell that corresponds with the visage imbue category (Chaos, Mental, Scourge, Resistance, or Winged).
>**Effect:** You infuse the armor with the visage of the creature in which you have slain.
>>[! recite | clean] *DM chooses trait for Visage origin*
>
>>[!column | 3] Origins
>>> [! npc]- - Chaos
>>> 
>>> | Level | Feat| Effect |
>>> | --- |--- |--- |
>>> | 4th | Chaos Field| Once per day, create a 10-foot-radius field of chaotic energy centered on you for 1 minute. Creatures in the field (including you) must succeed at a Reflex save against your class DC or be affected by a random condition (dazzled, flat-footed, etc.) for 1 round. |
>>> | 6th | Chaotic Advantage| Once per day, gain a +2 status bonus to an attack roll, saving throw, or skill check, but you are also confused for 1 round. |
>>> | 8th | Wild Step| Once per day, as a reaction, teleport up to 30 feet to a space you can see. Roll a d20; on a result of 1-5, you arrive 10 feet away from the intended location. |
>>> | 12th | Anarchic Aura| Once per day, you can create a 20-foot-radius aura of chaos around you for 1 minute. Creatures in the aura (including you) must succeed at a Will save against your class DC or be stunned for 1 round. If they succeed, they are instead frightened 1. |
>>
>>> [! hist]- - Mental (Occult)
>>> 
>>> | Level | Feat| Effect |
>>> | --- |--- |--- |
>>> | 4th | Illusory Self| Once per day, create an illusory duplicate of yourself for 1 minute. The duplicate can be used to create flanking opportunities. |
>>> | 6th | Mind Shield| Gain a +2 status bonus to Will saves against mental effects. |
>>> | 8th | Telepathic Bond: Once per day, establish a telepathic link with one willing creature you can see for 10 minutes. |
>>> | 12th | Invisibility Cloak| Once per day, you can cast **invisibility** on yourself for 10 minutes. The effect ends if you make an attack. |
>>
>>> [! creature]- - Scourge
>>> 
>>> | Level | Feat| Effect |
>>> | --- |--- |--- |
>>> | 4th | Scourging Aura| Once per day, create a 10-foot aura that causes enemies within it to take a -1 status penalty to AC and saving throws. |
>>> | 6th | Debilitating Touch| Once per day, your unarmed strikes deal 1d6 persistent damage (choose acid, fire, cold, or electricity). |
>>> | 8th | Crippling Presence| Once per day, create a 15-foot aura that causes enemies within it to be slowed 1 for 1 minute. |
>>> | 12th | Weaken Resolve| Once per day, as a reaction, force an enemy within 30 feet to make a Will save against your class DC or be frightened 2 for 1 minute. |
>>
>>> [! hint | clean ]- - Resistance
>>> 
>>> | Level | Feat| Effect |
>>> | --- |--- |--- |
>>> | 4th | Elemental Resistance| Gain resistance 4 to one type of elemental or esoteric damage (acid, cold, electricity, or fire). Choose when you gain this ability. |
>>> | 6th | Improved Resistance| Resistance increases to 8. |
>>> | 8th | Greater Resistance| Resistance increases to 12. |
>>> | 12th | Superior Resistance| Resistance increases to 16. |
>>> | 16th | Elemental Absorption| Resistance increases to 20, and you gain immunity to critical hits from that damage type. |
>>> | 18th | Reflective Shield| When you take damage of the chosen type, you can use your reaction to reflect half the damage back to the attacker. |
>>> | 20th | Elemental Mastery| Resistance increases to 24, and once per day, you can absorb all damage from a single attack of the chosen type and heal for that amount. |
>>
>>> [! bug | clean ]- - Winged
>>> 
>>> | Level | Feat| Effect |
>>> | --- |--- |--- |
>>> | 4th | Feather Fall| You can cast **feather fall** on yourself as a reaction once per day. |
>>> | 6th | Gliding Stride| You can glide, reducing fall damage by 30 feet and move 10 feet horizontally for every 30 feet fallen. |
>>> | 8th | Winged Leap| You gain a +10-foot status bonus to your long jump and high jump distances. |
>>> | 12th | Flight| You gain a fly speed of 20 feet for 10 minutes once per day. You can sustain this flight for 1 hour at 16th level, and at 20th level, you can fly at will. |
>>> | 16th | Aerial Evasion| Gain a +2 circumstance bonus to Reflex saves while flying. |
>>> | 18th | Soaring Agility| Your fly speed increases to 30 feet, and you can hover. |
>>> | 20th | Supreme Wings| Your fly speed increases to 40 feet, and you gain the effects of **freedom of movement** while flying. |


>[! health | background-black]- #### Aspect IMBUED
><font color=lightblue> Attribute • Enchantment • Magical </font>
>**Type:** Armor, Accessory, or Shield
>**Parts:** The monster's highest attribute attack or spell shall correspond with the aspect imbue category (Charisma, Constitution, Dexterity, Intelligence, Strength, or Wisdom).
>**Effect:** You infuse the armor with the being of your fallen foe, bestowing it with extraordinary powers.
>>[! recite | clean] *DM chooses trait for Aspect origin*
>
>>[!column | 3] Origins
>>> [! friend]- - Charisma
>>> 
>>> | Level | Feat| Effect |
>>> | --- |--- |--- |
>>> | 4th | Charming Presence| Once per day, you can cast **charm** as a spell-like ability. The spell is heightened to half your level rounded up. |
>>> | 6th | Inspiring Leader| Once per day, as an action, you can give an inspiring speech to allies within 30 feet, granting them temporary Hit Points equal to your Charisma modifier plus your level. |
>>> | 8th | Commanding Voice| Once per day, you can cast **command** as a spell-like ability. The spell is heightened to half your level rounded up. |
>>> | 12th | Enthralling Aura| Once per day, you can create a 20-foot aura that causes enemies within it to make a Will save against your class DC or be fascinated for 1 minute. |
>>> | 16th | Majestic Presence| You gain the ability to cast **suggestion** once per day as a spell-like ability. The spell is heightened to half your level rounded up. |
>>
>>> [! health]- - Constitution
>>> 
>>> | Level | Feat| Effect |
>>> | --- |--- |--- |
>>> | 4th | Toughness| Once per day gain Temporary Hit Points by an amount equal to your item level. |
>>> | 6th | Second Wind| Once per day, you can use an action to regain Hit Points equal to 2d6 plus your level. |
>>> | 8th | Resilient Body| Gain resistance 2 to physical damage (bludgeoning, piercing, slashing). |
>>> | 12th | Stalwart| Gain a +1 status bonus to Fortitude saves. |
>>> | 16th | Indomitable| Once per day, when you are reduced to 0 Hit Points, you can use your reaction to drop to 1 Hit Point instead. |
>>
>>> [! danger | clean]- - Dexterity
>>> 
>>> | Level | Feat| Effect |
>>> | --- |--- |--- |
>>> | 4th | Evasion| Gain a +1 status bonus to Reflex saves. |
>>> | 6th | Quick Step| Once per day, you can use the Step action as a free action. |
>>> | 8th | Cat's Grace| Gain a +1 status bonus to Acrobatics checks and Dexterity-based attack rolls. |
>>> | 12th | Uncanny Dodge| Once per day, you can use your reaction to halve the damage from an attack that hits you. |
>>> | 16th | Lightning Reflexes| Gain a +2 circumstance bonus to Reflex saves against traps and hazards. |
>>
>>> [! hist]- - Intelligence
>>> 
>>> | Level | Feat| Effect |
>>> | --- |--- |--- |
>>> | 4th | Keen Mind| Gain a +1 status bonus to Recall Knowledge checks. |
>>> | 6th | Arcane Insight| Once per day, you can cast **detect magic** as a spell-like ability. |
>>> | 8th | Analytical Mind| Gain a +1 status bonus to checks to identify creatures, items, and hazards. |
>>> | 12th | Arcane Reservoir| Gain a pool of 3 Focus Points that can be used to cast focus spells you know. |
>>> | 16th | Master Scholar| Once per day, you can cast **true strike** as a spell-like ability. |
>>
>>> [! encounter]- - Strength
>>> 
>>> | Level | Feat| Effect |
>>> | --- |--- |--- |
>>> | 4th | Mighty Blows| Gain a +1 status bonus to damage rolls with Strength-based attacks. |
>>> | 6th | Athletic Surge| Once per day, you can gain a +10-foot status bonus to your Speed for 1 minute. |
>>> | 8th | Powerful Build| Gain a +1 status bonus to Athletics checks and Strength-based attack rolls. |
>>> | 12th | Juggernaut| Gain a +1 status bonus to Fortitude saves against physical effects. |
>>> | 16th | Unstoppable Force| Once per day, you can ignore the effects of the slowed or immobilized conditions for 1 minute. |
>>
>>> [! location]- - Wisdom
>>> 
>>> | Level | Feat| Effect |
>>> | --- |--- |--- |
>>> | 4th | Heightened Senses| Gain a +1 status bonus to Perception checks. |
>>> | 6th | Guided Strike| Once per day, you can reroll an attack roll. |
>>> | 8th | Mystic Insight| Gain a +1 status bonus to Will saves. |
>>> | 12th | Clairvoyant Vision| Once per day, you can cast **clairvoyance** as a spell-like ability. |
>>> | 16th | Divine Protection| Gain a +2 circumstance bonus to saving throws against spells and magical effects. |
