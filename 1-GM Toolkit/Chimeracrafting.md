---
noteType: pf2erule
creatureLevel: 6
creatureSize: 1
creatureValue: 125
refineLevel: 15
itemType: 2
refineRoll: 0.001
recallRarity: 14
creatureCR: 6
creatureTrait: Arcana, Nature
toolSelector: 1
---

# Gathering Ingredients
>[!law | background-brown color-blue]+ ## Gathering Ingredients
>> [! recite |  right  wsmall]+ Harvest Example 
>> ![[monster-parts-quickstart-gather-ingredients.webp]]
>> The party has just slain a Hydra and harvests for parts. Quynn, the party's ranger, would like to harvest the creature.  A Hydra is a level 6 Huge creature so the GM has Quynn roll 1d10 for total parts harvested, rolling total of 4. After 40 minutes Quynn receives 4 parts.  He then attempts a targeted harvest check, and makes a Survival check (DC 22). Quynn, gets a Success and after an additional 10 minutes gains 1 rare part. Had he failed Quynn would have still harvested 1d4 regular monster parts. Since the hydra is CR 6 Quynn can record the total bounty as 15 gp worth of hydra parts as well as the one rare part he harvested.
> 
> The first step in upgrading weapons with monster parts is gathering suitable parts. After a battle, a player with the proper harvesting tools (either [[monster-harvesting-tools|Monster Harvesting Tools]] or [[superior-monster-harvesting-tools|Superior Monster Harvesting Tools]]) can spend 10 minutes per size category of the creature gathering the monsters’ parts beginning with small. 
>
> ### Standard Harvest
> If the GM determines that parts can be harvested from the slain creature, roll to see how many parts are harvested. Typically the PCs can harvest a number of parts from any given creature based on it's size.  1d4 parts from a small creature, 1d6 parts from a medium, 1d8 parts from a large, 1d10 parts from a huge and 1d12 parts from a gargantuan. The value of these parts can be determined by consulting the Parts Value by Level table below.  
>
> ### Targeted Harvest
> After harvesting standard parts, a PC may attempt a **Targeted Harvest check** to extract rare, specific monster components.  A player with the [[Skills#Survival|Survival]] skill or an appropriate [[Skills#Lore|Lore]] skill (as determined by the GM) may attempt a Targeted Harvest check to extract rare, specific parts like venom sacs, frills, or magical glands.  The DC for this skill check is usually equal to the Simple DC for the creature’s level (see [[DC Calculator]]), adjusted by rarity or other traits as needed. 
>
>> [!warning]
>> **Note (GM Only):** Some monster parts may be flagged with traits like [[volatile-hb|Volatile]]. These indicate that the part is dangerous or magically sensitive and may require Superior Monster Harvesting Tools to process safely.
>
> | **Targeted Harvest Results** |  |
> |--- | --- |
> | **Critical Success** | The GM randomly selects 2 rare parts from the creatures Harvest Table. |
> | **Success** |The GM randomly selects 1 rare part from the creatures Harvest Table. |
> | **Failure** | No rare parts are recovered, but you gain 1d4 additional monster parts due to incidental salvage. |
> | **Critical Failure** | The corpse is too degraded to yield more value.  No additional parts are harvested. |
> 
> The Targeted Harvest takes 10 minutes to complete and may be enhanced by the [[Aid]] action.  Once the Targeted Harvest is resolved, no further harvesting attempts can be made. The corpse is fully stripped of all usable resources.  
> 
> While the Bulk is at the GM’s discretion, typical Bulk values are light Bulk for the parts of a Small creature, 1 Bulk for Medium, 2 Bulk for Large, 4 Bulk for Huge, and 8 Bulk for Gargantuan. As such, it is usually a good idea for PCs to use the parts quickly to upgrade their items via refining and awakening. 
> 
> ### Degradation and Preservation of Monster Parts
> Monster parts—especially volatile, magical, or biologically active ones—begin to degrade shortly after harvest. Unless preserved, these materials lose their value rapidly, becoming unusable for refining, awakening, or formula discovery. This decay applies to both generic and rare parts, including cores, fangs, venom sacs, and frills. The clock starts once a creature is harvested.  Each 24-hour period reduces the value and reliability of these parts. To reflect this, monster parts track a degradation condition based on time since harvest. Preserving agents (like [[preserving-salts|Preserving Salts]] and [[organ-ward-resin|Organ Ward Resin]], spells (like [[Preserve Organic]]), or magic items (like [[cryopod-flask|Cryopod Flask]]) can delay or halt this process. Adventurers are encouraged to refine or awaken parts as quickly as possible, especially before travel or rests.
>
>> [!column | 2 no-t no-i] 
>>> ## Monster Part Degradation Table
>>> |Time Since Harvest|Condition|Value Modifier|
>>> |---|---|---|
>>> |0–24 hours|**Fresh**|100%|
>>> |1–3 days|**Aging**|75%|
>>> |4–7 days|**Spoiling**|50%|
>>> |>7 days|**Decayed**|0%|
>>
>>> ## Harvesting Calculator
>>>|  |
>>>|-------------------|---------------------------------------------------------------|
>>>| **Creature Level:**  | `INPUT[number:frontmatter^creatureLevel]`
>>>| **Creature Size**                | `INPUT[inlineSelect(option(1,Small), option(2,Medium), option(3,Large), option(4,Huge), option(5,Gargantuan)):frontmatter^creatureSize]` |
>>>| **Time to Harvest (minutes)**    | `VIEW[({creatureSize}==1?10:{creatureSize}==2?20:{creatureSize}==3?30:{creatureSize}==4?40:{creatureSize}==5?50:0)]` |
>>>| **Exact Monster Part Value (gp)** | `VIEW[({frontmatter^creatureLevel} == -1 ? 6.5 : {frontmatter^creatureLevel} == 0  ? 9   : {frontmatter^creatureLevel} == 1  ? 13  : {frontmatter^creatureLevel} == 2  ? 22  : {frontmatter^creatureLevel} == 3  ? 30  : {frontmatter^creatureLevel} == 4  ? 50  : {frontmatter^creatureLevel} == 5  ? 80  : {frontmatter^creatureLevel} == 6  ? 125 : {frontmatter^creatureLevel} == 7  ? 180 : {frontmatter^creatureLevel} == 8  ? 250 : {frontmatter^creatureLevel} == 9  ? 360 : {frontmatter^creatureLevel} == 10 ? 500 : {frontmatter^creatureLevel} == 11 ? 720 : {frontmatter^creatureLevel} == 12 ? 1030: {frontmatter^creatureLevel} == 13 ? 1560: {frontmatter^creatureLevel} == 14 ? 2300: {frontmatter^creatureLevel} == 15 ? 3400: {frontmatter^creatureLevel} == 16 ? 5150: {frontmatter^creatureLevel} == 17 ? 8000: {frontmatter^creatureLevel} == 18 ? 13000: {frontmatter^creatureLevel} == 19 ? 22500: {frontmatter^creatureLevel} == 20 ? 30000: {frontmatter^creatureLevel} == 21 ? 45000: {frontmatter^creatureLevel} == 22 ? 60000: {frontmatter^creatureLevel} == 23 ? 90000: {frontmatter^creatureLevel} == 24 ? 120000: {frontmatter^creatureLevel} == 25 ? 180000: 0)][math:frontmatter^creatureValue]` |
>>>| **Avg Parts Value per Creature (gp)**| `VIEW[round({frontmatter^creatureValue} / 50, 2)]` | 
>
> [! creature | background-black color-red]- Parts Value by Level
> [[Tables - Full Variant#Table 2C Monster Parts Gained Per Monster (Full Variant)|Parts Value by Level]]
>


# Synthesis

>[!law | background-gray no-t no-i]+ ## Refining
>> [!recite| wsmall right]+ Refinement Example
>> ![[monster-parts-quickstart-refine-item.webp]]
>> The parties fighter wants to refine a greataxe using monster parts from a recently defeated a pair of smilodon.  Since the smilodon claw attack is a slashing attack he can use those part to craft the weapon. The fighter has 275 gp worth of Smilodon parts. They start by building the greataxe for 2 gp, leaving them with 273 gp in parts. Using 250 gp, they refine the greataxe to item level 6, passing a **Refine DC 21** which grants a +1 item bonus to attack rolls, an extra damage die, and the ability to awaken an additional property. With 24 gp worth of parts remaining, the greataxe is partially refined towards level 7, requiring 86 more gp worth of parts to reach the next level.  On the fighters character sheet he would record a **+1 Striking Greataxe (6)**
>
> To begin, the player refines an item from the collected monster parts creating a chimeracrafted mundane item as the basis for further development.  Weapons, armor, shields, perception items, skill items and staves are the six main categories of item a character is able to refine.  Simply gather parts equivalent to the item's standard creation cost (e.g., 1 sp for a spear) and [[Craft]] the desired item.  Note, that all Chimeracrafted items are considered at least [[uncommon]] for crafting purposes.  Crafting the initial item can be assisted with the [[Aid]] action as per normal Pathfinder rules.
> 
> [[DC Calculator#Crafting Calculator|Crafting Calculator]]
> 
> The item may be further developed by refining it as you add more parts.  The item levels up, providing benefits like increased attack rolls, additional damage dice, and awakening capacity as outlined by [[Tables - Synthesis Benefits by Level]]. To determine the total value of parts needed to reach each level of refinement consult [[Tables - Synthesis Cost by Item Level]], noting that items cannot exceed the character's current level. Refining can be done quickly during daily preparations or during downtime as desired by the player taking one hour to accomplish the task. Once a character has obtained parts they can begin the refining process. a general rule to follow would be **14**+**Item Level**. Failing to refine the item results in a cost of 25% of the value used. It is up to the GM what skill is used to refine the item. Alternatively, a character can pay 50% of the cost of the item refining material in gold to have a NPC of equivalent skill make it with no failure.
> 
> You may come across Chimeracrafted items during your adventures.  In this case, you may want to Salvage the item completely or Transfer the items refinement and awakened properties. Salvaging allows you to recover up to 50% of the parts used in a refined item. To Transfer the refinement value or the value of an awakened property from one item of the same type (a weapon, armor, shield, Perception item, or skill item) to another with a lower value, first choose what to swap, either the refinement value or the value of one of the awakened properties. In order to successfully transfer refinement value, the two items must have compatible requirements for the type of monster parts they need. For instance, you couldn’t transfer refinement from a bludgeoning weapon to a slashing weapon because they have different requirements. To perform the transfer, you’ll need to provide additional monster parts worth 10% of the difference in values between the two. This flexible system ensures that players can enhance their gear using monster parts, providing unique upgrades and customizations based on their adventures and the monsters they defeat.  
>
>>### Refining Calculators
>>
>>> [!column | 2 no-t no-i] 
>>>>| Refining DC & Cost Calculator |
>>>>|-------------------|---------------------------------------------------------------|
>>>>| **Refinement Level:**  | `INPUT[number:frontmatter^refineLevel]`
>>>>| **Item Type**                | `INPUT[inlineSelect(option(1,Weapon), option(2,Armor), option(3,Shield), option(4,Perception Item), option(5,Skill Item), option(5,Staff)):frontmatter^itemType]` |
>>>>| **Refining DC**| `VIEW[round({refineLevel} + 14 + ({refineLevel}/3))]`  |
>>>>| **Refinement Cost:** | `VIEW[(({itemType} <= 2) ? ({refineLevel} == 1  ?   20 : {refineLevel} == 2  ?   35 : {refineLevel} == 3  ?   60 : {refineLevel} == 4  ?  100 : {refineLevel} == 5  ?  160 : {refineLevel} == 6  ?  250 : {refineLevel} == 7  ?  360 : {refineLevel} == 8  ?  500 : {refineLevel} == 9  ?  700 : {refineLevel} == 10 ? 1000 : {refineLevel} == 11 ? 1400 : {refineLevel} == 12 ? 2000 : {refineLevel} == 13 ? 3000 : {refineLevel} == 14 ? 4500 : {refineLevel} == 15 ? 6500 : {refineLevel} == 16 ?10000 : {refineLevel} == 17 ?15000 : {refineLevel} == 18 ?24000 : {refineLevel} == 19 ?40000 : {refineLevel} == 20 ?70000 : 0) : ({refineLevel} == 1  ?   10 : {refineLevel} == 2  ?   20 : {refineLevel} == 3  ?   35 : {refineLevel} == 4  ?   60 : {refineLevel} == 5  ?  100 : {refineLevel} == 6  ?  160 : {refineLevel} == 7  ?  240 : {refineLevel} == 8  ?  340 : {refineLevel} == 9  ?  470 : {refineLevel} == 10 ?  670 : {refineLevel} == 11 ?  950 : {refineLevel} == 12 ? 1350 : {refineLevel} == 13 ? 2000 : {refineLevel} == 14 ? 3000 : {refineLevel} == 15 ? 4300 : {refineLevel} == 16 ? 6500 : {refineLevel} == 17 ?10000 : {refineLevel} == 18 ?16000 : {refineLevel} == 19 ?25000 : {refineLevel} == 20 ?45000 : 0))][math]` gp |
>>>>| **Check Result** | `INPUT[inlineSelect(option(1, Critical Success), option(0.003, Success), option(0.002, Failure), option(0.001, Critical Failure)):refineRoll]`|
>>>>| **Consequence** | `VIEW[({refineRoll} >= 1 ? "You expend half the materials and refine the item." : ({refineRoll} >= 0.003 ? "You expend the materials and refine the item." : ({refineRoll} >= 0.002 ? "You fail to refine the item. You can try again during your next daily preperation or downtime. The materials aren't expended." : ({refineRoll} <= 0.001 ? "You fail to refine the item. You can try again during your next daily preperation or downtime. You expend half the materials." : ""))))]` |
>>>
>>>>| Salvage Calculator |
>>>>|-------------------|---------------------------------------------------------------|
>>>>| **Refinement Level:**  | `INPUT[number:frontmatter^refineLevel]`
>>>>| **Item Type**                | `INPUT[inlineSelect(option(1,Weapon), option(2,Armor), option(3,Shield), option(4,Perception Item), option(5,Skill Item), option(5,Staff)):frontmatter^itemType]` |
>>>>| **Refining DC**| `VIEW[round({refineLevel} + 14 + ({refineLevel}/3))]`  |
>>>>| **Refinement Cost:** | `VIEW[(({itemType} <= 2) ? ({refineLevel} == 1  ?   20 : {refineLevel} == 2  ?   35 : {refineLevel} == 3  ?   60 : {refineLevel} == 4  ?  100 : {refineLevel} == 5  ?  160 : {refineLevel} == 6  ?  250 : {refineLevel} == 7  ?  360 : {refineLevel} == 8  ?  500 : {refineLevel} == 9  ?  700 : {refineLevel} == 10 ? 1000 : {refineLevel} == 11 ? 1400 : {refineLevel} == 12 ? 2000 : {refineLevel} == 13 ? 3000 : {refineLevel} == 14 ? 4500 : {refineLevel} == 15 ? 6500 : {refineLevel} == 16 ?10000 : {refineLevel} == 17 ?15000 : {refineLevel} == 18 ?24000 : {refineLevel} == 19 ?40000 : {refineLevel} == 20 ?70000 : 0) : ({refineLevel} == 1  ?   10 : {refineLevel} == 2  ?   20 : {refineLevel} == 3  ?   35 : {refineLevel} == 4  ?   60 : {refineLevel} == 5  ?  100 : {refineLevel} == 6  ?  160 : {refineLevel} == 7  ?  240 : {refineLevel} == 8  ?  340 : {refineLevel} == 9  ?  470 : {refineLevel} == 10 ?  670 : {refineLevel} == 11 ?  950 : {refineLevel} == 12 ? 1350 : {refineLevel} == 13 ? 2000 : {refineLevel} == 14 ? 3000 : {refineLevel} == 15 ? 4300 : {refineLevel} == 16 ? 6500 : {refineLevel} == 17 ?10000 : {refineLevel} == 18 ?16000 : {refineLevel} == 19 ?25000 : {refineLevel} == 20 ?45000 : 0))][math]` gp |

# Awakening
>[!item |background-black no-t no-i]+
>> [! note | clean no-i no-t] 
>>> [! recite | right wsmall] Awakening Example
>>> ![[monster-parts-quickstart-awaken-item.webp]]
>>>  The party’s fighter just refined a level 6 greataxe out of smilodon parts. Realizing they could also awaken a property, they decided the only thing better than a smilodon tooth longsword is one that’s on fire! Fortunately, the group recently defeated a pair of magma scorpions, gaining 280 gp worth of parts. Since the magma scorpions have the fire trait (and a attack with the fire trait), the fighter awakens all the parts into their greataxe, choosing to awaken the property of fire. The fighter has three choices of path for this awakened property and chooses the path of might. Awakening 250 gp of parts increases the awakened property’s level to 6 (the current maximum, since the item level of the greataxe is 6), and lights the tyrannosaurus tooth longsword aflame, allowing it to deal 1d4 additional fire damage! The final weapon is a **+1 striking fire might (6) tyrannosaurus tooth longsword (6)!**
>> ### How to get awakeneded Properties
>> After an item has been refined to certain level, it will unlock the ability to awaken the item with special magical properties known as awakened properties.
>>
>> awakeningng an item is similar in function to refining an item; add monster parts that meet the requirements for the awakened property you want to add to the item.  Additionally, you are able to further awaken that property and when you’ve added enough monster parts, you “level up” the awakened property, potentially granting new and more powerful benefits. Just like with refining, you can’t use monster parts if they do not meet the requirements for the awakened property. 
>> 
>> For example, if you are awakening an ice elemental property onto your weapon, you can’t use parts from a monster that doesn’t have a connection to the ice element.  This is usually accomplished by either having the cold trait or having cold abilities or spells. Track the value of each awakened property separately from the monster parts you use to refine the item, and if the item is high enough level and of the right type to be awakened multiple times, track the value for each awakened property separately from each other. You can continue adding value to the awakened property as you use more parts to awaken the property, just like with refining; it’s much like gaining Experience Points to level up your items!
>> 
>> [[Tables - Awakening Cost by Item Level]] outlines the value of parts required to advance the property to the next level.
>>
>>Just like with refining, an awakened property’s level can never be higher than the item’s level or your level, whichever is lower. Unlike refining, which only has a single option depending on the type of item, you can choose from several options when you awaken an item, and some of them have multiple upgrade paths, allowing you to customize your item to match your personal playstyle.
>
> ### Awakening Calculators
>>
>>> [!column | 2 no-t no-i] 
>>>>| Awakening DC & Cost Calculator |
>>>>|-------------------|---------------------------------------------------------------|
>>>>| **Awakening Level:**  | `INPUT[number:frontmatter^awakenLevel]`
>>>>| **Item Type**                | `INPUT[inlineSelect(option(1,Weapon), option(2,Armor), option(3,Shield), option(4,Perception Item), option(5,Skill Item)):frontmatter^itemType]` |
>>>>| **Awakening DC**| `VIEW[round({awakenLevel} + 14 + ({awakenLevel}/3))]`  |
>>>>| **Awakening Cost:** | `VIEW[(({itemType} <= 2) ? ({awakenLevel} == 1  ?   20 : {awakenLevel} == 2  ?   35 : {awakenLevel} == 3  ?   60 : {awakenLevel} == 4  ?  100 : {awakenLevel} == 5  ?  160 : {awakenLevel} == 6  ?  250 : {awakenLevel} == 7  ?  360 : {awakenLevel} == 8  ?  500 : {awakenLevel} == 9  ?  700 : {awakenLevel} == 10 ? 1000 : {awakenLevel} == 11 ? 1400 : {awakenLevel} == 12 ? 2000 : {awakenLevel} == 13 ? 3000 : {awakenLevel} == 14 ? 4500 : {awakenLevel} == 15 ? 6500 : {awakenLevel} == 16 ?10000 : {awakenLevel} == 17 ?15000 : {awakenLevel} == 18 ?24000 : {awakenLevel} == 19 ?40000 : {awakenLevel} == 20 ?70000 : 0) : ({awakenLevel} == 1  ?   10 : {awakenLevel} == 2  ?   20 : {awakenLevel} == 3  ?   35 : {awakenLevel} == 4  ?   60 : {awakenLevel} == 5  ?  100 : {awakenLevel} == 6  ?  160 : {awakenLevel} == 7  ?  240 : {awakenLevel} == 8  ?  340 : {awakenLevel} == 9  ?  470 : {awakenLevel} == 10 ?  670 : {awakenLevel} == 11 ?  950 : {awakenLevel} == 12 ? 1350 : {awakenLevel} == 13 ? 2000 : {awakenLevel} == 14 ? 3000 : {awakenLevel} == 15 ? 4300 : {awakenLevel} == 16 ? 6500 : {awakenLevel} == 17 ?10000 : {awakenLevel} == 18 ?16000 : {awakenLevel} == 19 ?25000 : {awakenLevel} == 20 ?45000 : 0))][math]` gp |
>>>>| **Check Result** | `INPUT[inlineSelect(option(1, Critical Success), option(0.003, Success), option(0.002, Failure), option(0.001, Critical Failure)):awakenRoll]`|
>>>>| **Consequence** | `VIEW[({awakenRoll} >= 1 ? "You expend half the materials and awaken the item." : ({awakenRoll} >= 0.003 ? "You expend the materials and awaken the item." : ({awakenRoll} >= 0.002 ? "You fail to awaken the item. You can try again during your next daily preperation or downtime. The materials aren't expended." : ({awakenRoll} <= 0.001 ? "You fail to awaken the item. You can try again during your next daily preperation or downtime. You expend half the materials." : ""))))]` |
>>>
>>>>| Salvage Calculator |
>>>>|-------------------|---------------------------------------------------------------|
>>>>| **Awakening Level:**  | `INPUT[number:frontmatter^awakenLevel]`
>>>>| **Item Type**                | `INPUT[inlineSelect(option(1,Weapon), option(2,Armor), option(3,Shield), option(4,Perception Item), option(5,Skill Item)):frontmatter^itemType]` |
>>>>| **Awakening DC**| `VIEW[round({awakenLevel} + 14 + ({awakenLevel}/3))]`  |
>>>>| **Awakening Cost:** | `VIEW[(({itemType} <= 2) ? ({awakenLevel} == 1  ?   20 : {awakenLevel} == 2  ?   35 : {awakenLevel} == 3  ?   60 : {awakenLevel} == 4  ?  100 : {awakenLevel} == 5  ?  160 : {awakenLevel} == 6  ?  250 : {awakenLevel} == 7  ?  360 : {awakenLevel} == 8  ?  500 : {awakenLevel} == 9  ?  700 : {awakenLevel} == 10 ? 1000 : {awakenLevel} == 11 ? 1400 : {awakenLevel} == 12 ? 2000 : {awakenLevel} == 13 ? 3000 : {awakenLevel} == 14 ? 4500 : {awakenLevel} == 15 ? 6500 : {awakenLevel} == 16 ?10000 : {awakenLevel} == 17 ?15000 : {awakenLevel} == 18 ?24000 : {awakenLevel} == 19 ?40000 : {awakenLevel} == 20 ?70000 : 0) : ({awakenLevel} == 1  ?   10 : {awakenLevel} == 2  ?   20 : {awakenLevel} == 3  ?   35 : {awakenLevel} == 4  ?   60 : {awakenLevel} == 5  ?  100 : {awakenLevel} == 6  ?  160 : {awakenLevel} == 7  ?  240 : {awakenLevel} == 8  ?  340 : {awakenLevel} == 9  ?  470 : {awakenLevel} == 10 ?  670 : {awakenLevel} == 11 ?  950 : {awakenLevel} == 12 ? 1350 : {awakenLevel} == 13 ? 2000 : {awakenLevel} == 14 ? 3000 : {awakenLevel} == 15 ? 4300 : {awakenLevel} == 16 ? 6500 : {awakenLevel} == 17 ?10000 : {awakenLevel} == 18 ?16000 : {awakenLevel} == 19 ?25000 : {awakenLevel} == 20 ?45000 : 0))][math]` gp |

>[!tip |background-black]+ ## Awakened Properties
>>[!column | 3] Item Categories
>>>### Awakened Armor Properties
>>>[[Energy Resistant]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Fortification|Fortification]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Winged|Winged]]
>>
>>>### Awakened Shield Properties
>>>[[Energy Resistant]]
>>>[[Sturdy]]
>>
>>>### Awakened Skill Item Properties
>>>[[Charisma]]
>>>[[Constitution]]
>>>[[Dexterity]]
>>>[[Intelligence]]
>>>[[Spell]]
>>>[[Strength]]
>>>[[Wisdom]]

>[!tip |background-black]+ ### Awakened Properties
>>[!column | 2] Item Categories
>>>### Awakened Perception Item Properties
>>>[[Sensory]]
>>>[[Wisdom]]
>>
>>>### Awakened Weapon Properties
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Acid|Acid]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Air|Air]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Bane|Bane]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Chaotic|Chaotic]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Cold|Cold]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Darkness|Darkness]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Earth|Earth]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Electricity|Electricity]]
>>>[[Elongating]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Evil|Evil]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Fire|Fire]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Force|Force]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Good|Good]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Lawful|Lawful]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Light|Light]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Mental|Mental]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Negative|Negative]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Poison|Poison]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Positive|Positive]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Sonic|Sonic]]
>>>[[Throwing]]
>>>[[3-Rules/Battlezoo Bestiary Monster Parts/awakened Properties/Water|Water]]
>>>[[Wild]]
>>>[[Wood]]

# Formula Discovery
>[!law | background-gray no-t no-i]+ ## Discovery
>> [!recite| wsmall right]+ Discovery Example
>> The party’s alchemist, Mira, has just returned from a brutal encounter in the fungal depths of the Hollow Scar. Among the spoils: parts from a [[great-wroggi|Great Wroggi]]—notably its **venom sac**, **spiny hide**, and a **glowing gland** from beneath its throat. While the rest of the party rests, Mira unfurls her [[superior-monster-harvesting-tools|Superior Monster Harvesting Tools]] and sets up her tent for experimentation. She carefully places the harvested parts into arcane-stabilized trays and begins taking notes in her **Bestial Crafter’s Codex**, flipping past blank pages labeled "Wroggi – ???".  The Great Wroggi is a level 6 Beast, so Mira makes a Nature or Arcana check against DC 20. Her player rolls a 23—success! Mira expends 100 gp (reduced to 40% by her tools), and adds a new formula to her Codex.
>
> A character may attempt to discover a unique crafting formula tied to a specific creature by conducting magical or alchemical experimentation with its harvested parts. This process requires 8 hours of downtime and must be performed using either [[monster-harvesting-tools|Monster Harvesting Tools]] or [[superior-monster-harvesting-tools|Superior Monster Harvesting Tools]]. At the end of this period, the character attempts a skill check using Arcana, Nature, Crafting, or an appropriate Lore skill, as determined by the creature’s traits. The experiment consumes 50% of the total value of the monster parts used, or only 40% if Superior Tools are used. A character may attempt additional experiments as long as the character has enough harvested part value to continued. If the GM determines that all formulas have already been discovered, the time is still spent but no part value is consumed.
>
> ## Volatile or Unstable Components  
>Some rare parts may be marked as volatile, unstable, or magically reactive. These materials are extremely sensitive to magical feedback or improper handling. The GM may require Superior Monster Harvesting Tools to attempt discovery using such parts. Attempting to experiment with volatile materials using basic tools may result in automatic failure, wasted materials, or even dangerous backlash (such as taking damage or gaining a condition).  When a crafter critically fails an attempt to discover a formula using a volatile or unstable part, the GM may roll on the following table to determine the nature of the magical backlash.
>
>>[!column | 2 no-t]
>>> ### Discovery Results
>>> | Degree of Success | Outcome |
>>> |-------------------|---------|
>>> | **Critical Success** | Discover **2** new formulas from the creature. |
>>> | **Success**          | Discover **1** new formula. |
>>> | **Failure**          | No formula discovered; parts are consumed. |
>>> | **Critical Failure** | No formula discovered; parts are consumed, and the crafter becomes **Clumsy 1** for 1 hour due to magical backlash or cognitive fatigue. |
>>
>>>### Skill by Creature Trait
>>>| Creature Trait  | Skill Used |
>>>|------------------|------------|
>>>| [[Animal]], [[Beast]]     | Nature or Arcana |
>>>| [[Construct]]    | Arcana or Crafting |
>>>| [[Undead]], [[Shade]], [[Fiend]], [[Celestial]] | Religion |
>>>| [[Spirit]], [[Dream]], [[Time]], [[Astral]] | Occultism |
>>>| [[Plant]], [[Fungus]], [[Fey]] | Nature |
>>>| [[Aberration]], [[Ethereal]], [[Ooze]] | Occultism |
>>>| [[Humanoid]] | Society or relevant Lore |
>
>>[!column | 2 no-t]
>>>### Discovery Calculator
>>>|  |                                                                                 |                                                                                                                
>>>| ----------------------------------------------|----------------------------------------------------- |
>>>| **Creature Rarity:** | `INPUT[inlineSelect(option(14, Common), option(16, Uncommon), option(19, Rare)):recallRarity]` |                                                                                   
>>>| **Creature Level:** | `INPUT[number:creatureCR]`     |                                                     
>>>| **Creature Trait:** | `INPUT[inlineSelect(option(Occultism, Aberration), option(Nature, Animal), option(Occultism, Astral), option('Arcana, Nature', Beast), option(Religion, Celestial), option('Arcana, Crafting', Construct), option(Arcana, Dragon), option(Occultism, Dream), option('Arcana, Nature', Elemental), option(Occultism, Ethereal), option(Nature, Fey), option(Religion, Fiend), option(Nature, Fungus), option(Society, Humanoid), option(Religion, Monitor), option(Occultism, Ooze), option(Nature, Plant), option(Religion, Shade), option(Occultism, Spirit), option(Occultism, Time), option(Religion, Undead)):creatureTrait]` |
>>>| **Superior Tools** | `INPUT[inlineSelect(option(1, Yes), option(2, No)):toolSelector]` |
>>>| **Experimentation DC:** | `VIEW[round({creatureCR} + {recallRarity})]` - `VIEW[string({creatureTrait})]`  |
>>>| **Discovery Cost:** | `VIEW[(({toolSelector} == 2) ? ({creatureCR} == 1  ?    : {creatureCR} == 2  ?   35 : {creatureCR} == 3  ?   60 : {creatureCR} == 4  ?  100 : {creatureCR} == 5  ?  160 : {creatureCR} == 6  ?  250 : {creatureCR} == 7  ?  360 : {creatureCR} == 8  ?  500 : {creatureCR} == 9  ?  700 : {creatureCR} == 10 ? 1000 : {creatureCR} == 11 ? 1400 : {creatureCR} == 12 ? 2000 : {creatureCR} == 13 ? 3000 : {creatureCR} == 14 ? 4500 : {creatureCR} == 15 ? 6500 : {creatureCR} == 16 ?10000 : {creatureCR} == 17 ?15000 : {creatureCR} == 18 ?24000 : {creatureCR} == 19 ?40000 : {creatureCR} == 20 ?70000 : 0) / 2 : ({toolSelector} == 1) ? (({creatureCR} == 1  ?    : {creatureCR} == 2  ?   35 : {creatureCR} == 3  ?   60 : {creatureCR} == 4  ?  100 : {creatureCR} == 5  ?  160 : {creatureCR} == 6  ?  250 : {creatureCR} == 7  ?  360 : {creatureCR} == 8  ?  500 : {creatureCR} == 9  ?  700 : {creatureCR} == 10 ? 1000 : {creatureCR} == 11 ? 1400 : {creatureCR} == 12 ? 2000 : {creatureCR} == 13 ? 3000 : {creatureCR} == 14 ? 4500 : {creatureCR} == 15 ? 6500 : {creatureCR} == 16 ?10000 : {creatureCR} == 17 ?15000 : {creatureCR} == 18 ?24000 : {creatureCR} == 19 ?40000 : {creatureCR} == 20 ?70000 : 0) * 0.4) : 0)][math]` gp |
>>
>>>### Volatile Experimentation Backlash Table `dice: 1d6`
>>> | d6 | Backlash Effect |
>>> |----|------------------|
>>> | 1  | Crafter becomes **Clumsy 1** for 24 hours. |
>>> | 2  | Crafter is **Fatigued** until they rest for 8 hours. |
>>> | 3  | Crafter is **Stupefied 1** for 24 hours. |
>>> | 4  | Crafter cannot attempt **Formula Discovery** again for 24 hours. |
>>> | 5  | All parts used in the experiment are **destroyed**, regardless of outcome. |
>>> | 6  | Arcane backlash damages the **Bestial Crafter’s Codex**, preventing use until repaired (Crafting DC 20 to repair). |



