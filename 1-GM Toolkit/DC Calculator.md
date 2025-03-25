---
rarity: 14
skillLevel: 15
creatureCR: 9
creatureTrait: Religion
playerLevel: 2
taskDifficulty: 2
skillDifficulty: 0
itemLevel: 8
itemValue: 25
itemType: 2
Rush: false
craftProficiency: 1
itemRarity: 0
rushLevel: 0
completionDays: 1
rushCompletion: true
craftRoll: 1
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

1. The item level must be less than yours
2. You must meet the minimum proficiency
	- Trained: Item Level 0 - 8
	- Master: Item Level 9 - 15
	- Legendary: Item Level 16+
3. For Alchemical, Magical or Snare crafting, you must have the appropriate feat
4. You must have the appropriate tools / workshop
5. You must have a formula (recipe / blueprint) for the item you wish to craft. For common items, see the [[basic-crafters-book|Basic Crafter's Book]]
6. You must have materials worth 50% of the item's value

```



| Complex Crafting DC and Time Calculator                                                                                 |                                                                                                                
| -------------- |
| **Item Level:** `INPUT[number:itemLevel]` |       
| **Player Level:** `INPUT[number:playerLevel]` _**`VIEW[string({playerLevel}<{itemLevel} ? "Warning: Item level above player level" : "")]`**_|
| **Item Value (gp):** `INPUT[number:itemValue]` **`VIEW[round({itemValue}/2)]` gp** (Value in materials upfront)|
| **Item Type:** `INPUT[inlineSelect(option(0, Consumable), option(2, Permanenet)):itemType]`  **Item Rarity:** `INPUT[inlineSelect(option(0, Common), option(2, Uncommon), option(5, Rare), option(10, Unique)):itemRarity]`|
| **Crafting Proficiency:** `INPUT[inlineSelect(option(1, Trained), option(1.05, Expert), option(1.1, Master), option(1.2, Legendary), showcase):craftProficiency]` _**`VIEW[string({craftProficiency} < 1.1 & {itemLevel} >= 9 ? "Warning: Proficiency too low" : ({craftProficiency} < 1.2 & {itemLevel} >=16 ? "Warning: Proficiency too low" : ""))]`**_ |
| **Rush Setup:** `INPUT[inlineSelect(option(0, No Rush), option(-1, 'Rush Expert (-1 Day)'), option(-2, 'Rush Master (-2 Days)'), option(-3, 'Rush Legendary (-3 Days)')):rushLevel]` |
| **Crafting Setup Time 🕒:** `VIEW[number(((4 + {itemType}) + {rushLevel}) - (({playerLevel}-{itemLevel})>= 3 ? 2 : ({playerLevel}-{itemLevel}>= 1 ? 1 : 0))>=1 ? ((4 + {itemType}) + {rushLevel}) - (({playerLevel}-{itemLevel})>= 3 ? 2 : ({playerLevel}-{itemLevel}>= 1 ? 1 : 0)) : 4)]` `VIEW[string((((4 + {itemType}) + {rushLevel}) - (({playerLevel}-{itemLevel})>= 3 ? 2 : ({playerLevel}-{itemLevel}>= 1 ? 1 : 0)))<1 ? hours : days)]`|
| **Crafting DC:** `VIEW[round(({itemLevel}*1.3) + 14 + {itemRarity}) + ({rushLevel}* -1 *5)]`                                   |
| `INPUT[inlineSelect(option(1, Critical Success), option(0.003, Success), option(0.002, Failure), option(0.001, Critical Failure)):craftRoll]`|
| `VIEW[({craftRoll} >= 1 ? "Your attempt is successful. Each additional day spent Crafting reduces the materials needed to complete the item by an amout based on your level + 1 and your proficiency rank in Crafting (automatically calculated below)" : ({craftRoll} >= 0.003 ? "Your attempt is successful. Each additional day spent Crafting reduces the materials needed to complete the item by an amount based on your level and your proficiency rank (automatically calculated below)" : ({craftRoll} >= 0.002 ? "You fail to complete the item. You can salvage the raw materials you supplied to their full value. If you want to try again you must start over" : ({craftRoll} <= 0.001 ? "You fail to complete the item. You ruin 10% of the raw materials you supplied, but you can salvage the rest. If you want to try again, you must start over." : ""))))]` `VIEW[string({craftRoll} <= 0.001 ? "Value of materials lost: " : "" )]` **`VIEW[string({craftRoll} <= 0.001 ?  ({itemValue}*0.1) : "")]`** `VIEW[string({craftRoll} <= 0.001 ? " gp" : "")]`|

|  |  |
| --- |
| **Extra Days Spent for Completion:** `INPUT[number:completionDays]` |
| **Rush Completion:** `INPUT[toggle:rushCompletion]` (≥ Expert only)|
| **Balance to Pay 💰:** `VIEW[round(({itemValue}/2) - (((((({playerLevel}+{craftRoll})*15)+(1+({playerLevel}+{craftRoll}))*5) + (1.77^({playerLevel}+{craftRoll}))))*{craftProficiency}*({rushCompletion} ? 2 : 1) * ({completionDays}))/100)]` gp |
| **Amount Saved:** `VIEW[round(((((({playerLevel}+{craftRoll})*15)+(1+({playerLevel}+{craftRoll}))*5) + (1.77^({playerLevel}+{craftRoll}))))*{craftProficiency}*({rushCompletion} ? 2 : 1) * ({completionDays}))]` cp  /  `VIEW[round((((((({playerLevel}+{craftRoll})*15)+(1+({playerLevel}+{craftRoll}))*5) + (1.77^({playerLevel}+{craftRoll}))))*{craftProficiency}*({rushCompletion} ? 2 : 1) * ({completionDays}))/10)]` sp  /  `VIEW[round((((((({playerLevel}+{craftRoll})*15)+(1+({playerLevel}+{craftRoll}))*5) + (1.77^({playerLevel}+{craftRoll}))))*{craftProficiency}*({rushCompletion} ? 2 : 1) * ({completionDays}))/100)]` gp |
| **Flat Check for Rushed Completion:** `dice: 1d20` against DC **`VIEW[number(10 + {itemLevel} - ({craftProficiency} >= 1.2 ? (8+{playerLevel}) : ({craftProficiency} >= 1.1 ? (6+{playerLevel}) : ({craftProficiency} >= 1.05 ? (4+{playerLevel}) : ({craftProficiency} >= 1 ? (2+{playerLevel}) : 0)))))]`** |


| Rushed Crafting Flat Check | Outcome |
| ---- | ----- |
| Critical Success (≥ `VIEW[number(10 + 10 + {itemLevel} - ({craftProficiency} >= 1.2 ? (8+{playerLevel}) : ({craftProficiency} >= 1.1 ? (6+{playerLevel}) : ({craftProficiency} >= 1.05 ? (4+{playerLevel}) : ({craftProficiency} >= 1 ? (2+{playerLevel}) : 0)))))]`) | Crafting successful |
| Success (≥ `VIEW[number(10 + {itemLevel} - ({craftProficiency} >= 1.2 ? (8+{playerLevel}) : ({craftProficiency} >= 1.1 ? (6+{playerLevel}) : ({craftProficiency} >= 1.05 ? (4+{playerLevel}) : ({craftProficiency} >= 1 ? (2+{playerLevel}) : 0)))))]`) | Crafting successful |
| Failure (< `VIEW[number(10 + {itemLevel} - ({craftProficiency} >= 1.2 ? (8+{playerLevel}) : ({craftProficiency} >= 1.1 ? (6+{playerLevel}) : ({craftProficiency} >= 1.05 ? (4+{playerLevel}) : ({craftProficiency} >= 1 ? (2+{playerLevel}) : 0)))))]`) | [Quirk](../3)%20Rules/gamemastery-guide/chapter-2-tools.md#Item%20Quirks) |
| Critical Failure (≤ `VIEW[number(10 - 10 + {itemLevel} - ({craftProficiency} >= 1.2 ? (8+{playerLevel}) : ({craftProficiency} >= 1.1 ? (6+{playerLevel}) : ({craftProficiency} >= 1.05 ? (4+{playerLevel}) : ({craftProficiency} >= 1 ? (2+{playerLevel}) : 0)))))]`)| Ruined or Cursed |
