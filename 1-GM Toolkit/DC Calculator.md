---
rarity: 14
skillLevel: 15
creatureCR: 9
creatureTrait: Religion
playerLevel: 6
taskDifficulty: 0
skillDifficulty: 0
itemLevel: 2
itemValue: 35
itemType: 2
craftProficiency: 1.2
itemRarity: 0
completionDays: 0
craftRoll: 0.003
rarityModifier: 0
---


> [!warning] A few notes on the Crafting Calculator
> 1. The Complex Crafting tool does not strictly follow rules as written for the cost of Completion, simply because I couldn't find a way to capture the written table mathematically (Income Earned table). However, it gets close enough for me.
> 2. I wanted to implement an option to select Quick Setup (feat) but it was too complicated and none of my players have this feat, so I gave up. Sorry!
> 3. Calculator is not updated to the new CORE release.




| Recall Knowledge DC                                                                                 |                                                                                                                
| --------------------------------------------------------------------------------------------------- |
| **Rarity:** `INPUT[inlineSelect(option(14, Common), option(16, Uncommon), option(19, Rare)):rarity]` |                                                                                   
| **Creature CR:** `INPUT[number:creatureCR]`     |                                                     
| **Creature Trait:** `INPUT[inlineSelect(option(Occultism, Aberration), option(Nature, Animal), option(Occultism, Astral), option('Arcana, Nature', Beast), option(Religion, Celestial), option('Arcana, Crafting', Construct), option(Occultism, Ethereal), option(Nature, Fey), option(Religion, Fiend), option(Nature, Fungus), option(Society, Humanoid), option(Religion, Monitor), option(Occultism, Ooze), option(Nature, Plant), option(Occultism, Spirit), option(Religion, Undead)):creatureTrait]` |
| **Recall Knowledge DC:** `VIEW[round({creatureCR} + {rarity})]`    `VIEW[string({creatureTrait})]`                                   |

---

| Simple DC Calculator                                                                                 |                                                                                                                
| --------------------------------------------------------------------------------------------------- |
| **Player Level:** `INPUT[number:playerLevel]` |                                                                                                                  
| **Task Difficulty:** `INPUT[inlineSelect(option(-10, Incredibly easy), option(-5, Very easy), option(-2, Easy), option(0, No Adjustment), option(2, 'Hard (Uncommon)'), option(5, 'Very hard (Rare)'), option(10, 'Incredibly hard (Unique)')):taskDifficulty]` |
| **Task DC:** `VIEW[round({playerLevel} < 20 ? ({playerLevel} + 14 + ({playerLevel}/3)) : ({playerLevel}*2)) + {taskDifficulty}]`  |

---

| Skill DC Calculator                                                                                 |                                                                                                                
| --------------------------------------------------------------------------------------------------- |
| **Skill Level:** `INPUT[inlineSelect(option(10, Untrained), option(15, Trained), option(20, Expert), option(30, Master), option(40, Legendary)):skillLevel]` |                                                                                                                  
| **Skill Difficulty:** `INPUT[inlineSelect(option(-10, Incredibly easy), option(-5, Very easy), option(-2, Easy), option(0, No Adjustment), option(2, 'Hard (Uncommon)'), option(5, 'Very hard (Rare)'), option(10, 'Incredibly hard (Unique)')):skillDifficulty]` |
| **Task DC:** `VIEW[round({skillLevel} + {skillDifficulty})]`|

---
```ad-info
title: Crafting Requirements
collapse: closed
icon: hammer

1. The item level must be less than or equal to yours
2. You must meet the minimum proficiency
	- Trained: Item Level 0 - 8
	- Master: Item Level 9 - 16
	- Legendary: Item Level 17+
3. For Alchemical and Magical crafting, you must have the Alchemical Crafting or Magical Crafting feat and be at least Trained
4. You must have the appropriate tools / workshop
5. You must have a formula for the item you wish to craft. For common items, see the [[basic-crafters-book|Basic Crafter's Book]]
6. You must have materials worth 50% of the item's value

```



| Complex Crafting DC and Time Calculator                                                                                 |                                                                                                                
| -------------- |
| **Item Level:** `INPUT[number:itemLevel]` |       
| **Player Level:** `INPUT[number:playerLevel]` _**`VIEW[string({playerLevel}<{itemLevel} ? "Warning: Item level above player level" : "")]`**_|
| **Item Value (gp):** `INPUT[number:itemValue]` **`VIEW[round({itemValue}/2)]` gp** (Value in materials upfront)|
| **Item Type:** `INPUT[inlineSelect(option(0, Consumable), option(2, Permanenet)):itemType]`  **Item Rarity:** `INPUT[inlineSelect(option(0, Common), option(2, Uncommon), option(5, Rare), option(10, Unique)):itemRarity]`|
| **Crafting Proficiency:** `INPUT[inlineSelect(option(1, Trained), option(1.05, Expert), option(1.1, Master), option(1.2, Legendary), showcase):craftProficiency]` _**`VIEW[string({craftProficiency} < 1.1 & {itemLevel} >= 9 ? "Warning: Proficiency too low" : ({craftProficiency} < 1.2 & {itemLevel} >=17 ? "Warning: Proficiency too low" : ""))]`**_ |
| **Crafting Setup Time 🕒:** 1 day|
| **Crafting DC:** `VIEW[round(({itemLevel} * ({itemLevel} <= 5 ? 1.2 : {itemLevel} <= 17 ? 1.3 : {itemLevel} == 18 ? 1.35 : {itemLevel} <= 20 ? 1.3 : {itemLevel} <= 22 ? 1.35 : {itemLevel} <= 24 ? 1.4 : 1.45)) + 14 + {itemRarity}) + ({rushLevel}* -1 *5)]`                                   |
| `INPUT[inlineSelect(option(1, Critical Success), option(0.003, Success), option(0.002, Failure), option(0.001, Critical Failure)):craftRoll]`|
| `VIEW[({craftRoll} >= 1 ? "Your attempt is successful. Each additional day spent Crafting reduces the materials needed to complete the item by an amout based on your level + 1 and your proficiency rank in Crafting (automatically calculated below)" : ({craftRoll} >= 0.003 ? "Your attempt is successful. Each additional day spent Crafting reduces the materials needed to complete the item by an amount based on your level and your proficiency rank (automatically calculated below)" : ({craftRoll} >= 0.002 ? "You fail to complete the item. You can salvage the raw materials you supplied to their full value. If you want to try again you must start over" : ({craftRoll} <= 0.001 ? "You fail to complete the item. You ruin 10% of the raw materials you supplied, but you can salvage the rest. If you want to try again, you must start over." : ""))))]` `VIEW[string({craftRoll} <= 0.001 ? "Value of materials lost: " : "" )]` **`VIEW[string({craftRoll} <= 0.001 ?  ({itemValue}*0.1) : "")]`** `VIEW[string({craftRoll} <= 0.001 ? " gp" : "")]`|

|  |  |
| --- |
| **Base Material Value Required 💰:** `VIEW[round({itemValue}/2, 2)]` gp | 
| **Extra Days Spent for Completion:** `INPUT[number:completionDays]` |
| **Balance to Pay 💰:** `VIEW[round((({itemValue}/2) - (((((({playerLevel}+{craftRoll})*15) + (1+({playerLevel}+{craftRoll}))*5) + (1.77^({playerLevel}+{craftRoll})))) * {craftProficiency} * ({rushCompletion} ? 2 : 1) * ({completionDays}))/100), 2)]` gp |
| **Amount Saved:** `VIEW[round((((((({playerLevel}+{craftRoll})*15) + (1+({playerLevel}+{craftRoll}))*5) + (1.77^({playerLevel}+{craftRoll})))) * {craftProficiency} * ({completionDays}) / 100), 2)]` gp |
