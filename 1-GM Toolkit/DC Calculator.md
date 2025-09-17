---
skillLevel: 10
creatureCR: 1
creatureTrait: Occultism
playerLevel: 7
taskDifficulty: 0
skillDifficulty: 0
itemLevel: 0
itemValue: 0.1
itemType: 0
craftProficiency: 1
itemRarity: 0
completionDays: 0
craftRoll: 0.003
recallRarity: 16
magicRarity: 0
spellRarity: 0
spellRank: 10
identifyRoll: 0.003
---


>[!column | 3] Skills Calculators
>>| Recall Knowledge DC                                                                                 |                                                                                                                
>>| --------------------------------------------------------------------------------------------------- |
>>| **Rarity:** `INPUT[inlineSelect(option(14, Common), option(16, Uncommon), option(19, Rare)):recallRarity]` |                                                                                   
>>| **Creature Level:** `INPUT[number:creatureCR]`     |                                                     
>>| **Creature Trait:** `INPUT[inlineSelect(option(Occultism, Aberration), option(Nature, Animal), option(Occultism, Astral), option('Arcana, Nature', Beast), option(Religion, Celestial), option('Arcana, Crafting', Construct), option(Arcana, Dragon), option(Occultism, Dream), option('Arcana, Nature', Elemental), option(Occultism, Ethereal), option(Nature, Fey), option(Religion, Fiend), option(Nature, Fungus), option(Society, Humanoid), option(Religion, Monitor), option(Occultism, Ooze), option(Nature, Plant), option(Religion, Shade), option(Occultism, Spirit), option(Occultism, Time), option(Religion, Undead)):creatureTrait]` |
>>| **Recall Knowledge DC:**  `VIEW[round({creatureCR} + {recallRarity})]` - `VIEW[string({creatureTrait})]`                                   |
>
>>| Identify Magic (Item, Place, Effect) & Alchemy  DC                                                                                 |                                                                                                                
>>| --------------------------------------------------------------------------------------------------- |
>>| **Rarity:** `INPUT[inlineSelect(option(0, Common), option(2, Uncommon), option(5, Rare), option(10, Unique)):magicRarity]` |                                                                                   
>>| **Item Level:** `INPUT[number:itemLevel]`     |                                                     
>>| **Identify Item DC:** `VIEW[round({itemLevel} < 20 ? ({itemLevel} + 14 + ({itemLevel}/3)) : ({itemLevel}*2)) + {magicRarity}]`  |
>>| **Check Result:** `INPUT[inlineSelect(option(1, Critical Success), option(0.003, Success), option(0.002, Failure), option(0.001, Critical Failure)):identifyRoll]`|
>>| `VIEW[({identifyRoll} >= 1 ? "You learn all the attributes of the item, including it's name (for an effect), what it does, any means of activating it (for an item or location) and whether it is cursed" : ({identifyRoll} >= 0.003 ? "For an item or location, you get a sense of what it does and learn any means of activating it.  For an ongoing effect (such as a spell with a duration), you learn the effect's name and what it does.  You can't try again in hopes of getting a critical success." : ({identifyRoll} >= 0.002 ? "You fail to identify the magic and can't try again for 1 day." : ({identifyRoll} <= 0.001 ? "You misidentify the magic as something else of the GM's choice." : ""))))]` |
>
>>| Learn a Spell DC                                                                                 |                                                                                                                
>>| --------------------------------------------------------------------------------------------------- |
>>| **Rarity:** `INPUT[inlineSelect(option(0, Common), option(2, Uncommon), option(5, Rare), option(10, Unique)):spellRarity]` |                                                                                   
>>| **Spell Rank:** `INPUT[number:spellRank]`     |                                                     
>>| **Learn a Spell DC:** `VIEW[round(({spellRank} <= 3 ? ({spellRank} * 2.5 + 12.5): {spellRank} <= 6 ? ({spellRank} * 2.5 + 13): {spellRank} <= 8 ? ({spellRank} * 3   + 10): ({spellRank} * 5   -  9)) + {spellRarity})]` |                       |
>>| **Cost to Learn:** `VIEW[round({spellRank} <= 3 ? (3 * {spellRank} * {spellRank} - 5 * {spellRank} + 4): {spellRank} <= 6 ? (18 * {spellRank} * {spellRank} - 128 * {spellRank} + 260): {spellRank} <= 8 ? (350 * {spellRank} - 2150): (5500 * {spellRank} - 48000))]` |
>>| **Check Result:** `INPUT[inlineSelect(option(1, Critical Success), option(0.003, Success), option(0.002, Failure), option(0.001, Critical Failure)):learnRoll]`|
>>| `VIEW[({learnRoll} >= 1 ? "You expend half the materials and learn the spell." : ({learnRoll} >= 0.003 ? "You expend the materials and learn the spell." : ({learnRoll} >= 0.002 ? "You fail to learn the spell but can try again after you gain a level.  The materials aren't expended." : ({learnRoll} <= 0.001 ? "As failure, except you expend half the materials." : ""))))]` |

---

>[!column | 2] DC Calculators
>>| DC by Level Calculator                                                                                 |                                                                                                                
>>| --------------------------------------------------------------------------------------------------- |
>>| **Player Level:** `INPUT[number:playerLevel]` |                                                                                                                  
>>| **Task Difficulty:** `INPUT[inlineSelect(option(-10, Incredibly easy), option(-5, Very easy), option(-2, Easy), option(0, No Adjustment), option(2, 'Hard (Uncommon)'), option(5, 'Very hard (Rare)'), option(10, 'Incredibly hard (Unique)')):taskDifficulty]` |
>>| **Task DC:** `VIEW[round({playerLevel} < 20 ? ({playerLevel} + 14 + ({playerLevel}/3)) : ({playerLevel}*2)) + {taskDifficulty}]`  |
>
>>| Skill DC Calculator                                                                                 |                                                                                                                
>>| --------------------------------------------------------------------------------------------------- |
>>| **Skill Level:** `INPUT[inlineSelect(option(10, Untrained), option(15, Trained), option(20, Expert), option(30, Master), option(40, Legendary)):skillLevel]` |                                                                                                                  
>>| **Skill Difficulty:** `INPUT[inlineSelect(option(-10, Incredibly easy), option(-5, Very easy), option(-2, Easy), option(0, No Adjustment), option(2, 'Hard (Uncommon)'), option(5, 'Very hard (Rare)'), option(10, 'Incredibly hard (Unique)')):skillDifficulty]` |
>>| **Task DC:** `VIEW[round({skillLevel} + {skillDifficulty})]`|

---

```ad-info
title: Crafting Notes & Requirements
collapse: closed
icon: hammer

1. The item level must be less than yours
2. You must meet the minimum proficiency
	- Trained: Item Level 0 - 8
	- Master: Item Level 9 - 15
	- Legendary: Item Level 16+
3. For Alchemical and Magical crafting, you must have the appropriate feat
4. You must have any appropriate tools and/or workshop

```

# Crafting Calculator
| Crafting DC and Time Calculator                                                                                 |                                                                                                                
| -------------- |
| **Player Level:** `INPUT[number:playerLevel]` _**`VIEW[string({playerLevel}<{itemLevel} ? "Warning: Item level above player level" : "")]`**_|
| **Item Level:** `INPUT[number:itemLevel]` |       
| **Item Value (gp):** `INPUT[number:itemValue]` **`VIEW[{itemValue}/2]` gp** (Value in materials upfront)|
| **Item Rarity:** `INPUT[inlineSelect(option(0, Common), option(2, Uncommon), option(5, Rare), option(10, Unique)):itemRarity]` |                                                      
| **Crafter Has Formula:** `INPUT[inlineSelect(option(0, Yes), option(1, No)):itemType]`  |
| **Crafting Proficiency:** `INPUT[inlineSelect(option(1, Trained), option(1.05, Expert), option(1.1, Master), option(1.2, Legendary), showcase):craftProficiency]` _**`VIEW[string({craftProficiency} < 1.1 & {itemLevel} >= 9 ? "Warning: Proficiency too low" : ({craftProficiency} < 1.2 & {itemLevel} >=16 ? "Warning: Proficiency too low" : ""))]`**_ |
| **Crafting Setup Time 🕒:** `VIEW[number((1 + {itemType}) days)]`|
| **Crafting DC:** `VIEW[round({itemLevel} < 20 ? ({itemLevel} + 14 + ({itemLevel}/3)) : ({itemLevel}*2)) + {itemRarity}]` |
| `INPUT[inlineSelect(option(1, Critical Success), option(0.003, Success), option(0.002, Failure), option(0.001, Critical Failure)):craftRoll]`  `VIEW[({craftRoll} >= 1 ? "Your attempt is successful. Each additional day spent Crafting reduces the materials needed to complete the item by an amout based on your level + 1 and your proficiency rank in Crafting (automatically calculated below)" : ({craftRoll} >= 0.003 ? "Your attempt is successful. Each additional day spent Crafting reduces the materials needed to complete the item by an amount based on your level and your proficiency rank (automatically calculated below)" : ({craftRoll} >= 0.002 ? "You fail to complete the item. You can salvage the raw materials you supplied to their full value. If you want to try again you must start over" : ({craftRoll} <= 0.001 ? "You fail to complete the item. You ruin 10% of the raw materials you supplied, but you can salvage the rest. If you want to try again, you must start over." : ""))))]` `VIEW[string({craftRoll} <= 0.001 ? "Value of materials lost: " : "" )]` **`VIEW[string({craftRoll} <= 0.001 ?  ({itemValue}*0.1) : "")]`** `VIEW[string({craftRoll} <= 0.001 ? " gp" : "")]`|

|  |  |
| --- |
| **Extra Days Spent for Completion:** `INPUT[number:completionDays]` |
| **Balance to Pay 💰:**  `VIEW[{craftRoll} == 1 ? {itemValue}/2 - ({craftProficiency} == 1 ? ({playerLevel}+1 == 0  ?  0.05 : {playerLevel}+1 == 1  ?  0.2 : {playerLevel}+1 == 2  ?  0.3 : {playerLevel}+1 == 3  ?  0.5 : {playerLevel}+1 == 4  ?  0.7 : {playerLevel}+1 == 5  ?  0.9 : {playerLevel}+1 == 6  ?  1.5 : {playerLevel}+1 == 7  ?  2 : {playerLevel}+1 == 8  ?  2.5 : {playerLevel}+1 == 9  ?  3 : {playerLevel}+1 == 10 ?  4 : {playerLevel}+1 == 11 ?  5 : {playerLevel}+1 == 12 ?  6 : {playerLevel}+1 == 13 ?  7 : {playerLevel}+1 == 14 ?  8 : {playerLevel}+1 == 15 ? 10 : {playerLevel}+1 == 16 ? 13 : {playerLevel}+1 == 17 ? 15 : {playerLevel}+1 == 18 ? 20 : {playerLevel}+1 == 19 ? 30 : {playerLevel}+1 == 20 ? 40 : 0) : {craftProficiency} == 1.05 ? ({playerLevel}+1 == 0  ?  0.05 : {playerLevel}+1 == 1  ?  0.2 : {playerLevel}+1 == 2  ?  0.3 : {playerLevel}+1 == 3  ?  0.5 : {playerLevel}+1 == 4  ?  0.8 : {playerLevel}+1 == 5  ?  1 : {playerLevel}+1 == 6  ?  2 : {playerLevel}+1 == 7  ?  2.5 : {playerLevel}+1 == 8  ?  3 : {playerLevel}+1 == 9  ?  4 : {playerLevel}+1 == 10 ?  5 : {playerLevel}+1 == 11 ?  6 : {playerLevel}+1 == 12 ?  8 : {playerLevel}+1 == 13 ? 10 : {playerLevel}+1 == 14 ? 15 : {playerLevel}+1 == 15 ? 20 : {playerLevel}+1 == 16 ? 25 : {playerLevel}+1 == 17 ? 30 : {playerLevel}+1 == 18 ? 45 : {playerLevel}+1 == 19 ? 60 : {playerLevel}+1 == 20 ? 75 : 0) : {craftProficiency} == 1.1 ? ({playerLevel}+1 == 0  ?  0.05 : {playerLevel}+1 == 1  ?  0.2 : {playerLevel}+1 == 2  ?  0.3 : {playerLevel}+1 == 3  ?  0.5 : {playerLevel}+1 == 4  ?  0.8 : {playerLevel}+1 == 5  ?  1 : {playerLevel}+1 == 6  ?  2 : {playerLevel}+1 == 7  ?  2.5 : {playerLevel}+1 == 8  ?  3 : {playerLevel}+1 == 9  ?  4 : {playerLevel}+1 == 10 ?  6 : {playerLevel}+1 == 11 ?  8 : {playerLevel}+1 == 12 ? 10 : {playerLevel}+1 == 13 ? 15 : {playerLevel}+1 == 14 ? 20 : {playerLevel}+1 == 15 ? 28 : {playerLevel}+1 == 16 ? 36 : {playerLevel}+1 == 17 ? 45 : {playerLevel}+1 == 18 ? 70 : {playerLevel}+1 == 19 ? 100 : {playerLevel}+1 == 20 ? 150 : 0) : {craftProficiency} == 1.2 ? ({playerLevel}+1 == 0  ?  0.05 : {playerLevel}+1 == 1  ?  0.2 : {playerLevel}+1 == 2  ?  0.3 : {playerLevel}+1 == 3  ?  0.5 : {playerLevel}+1 == 4  ?  0.8 : {playerLevel}+1 == 5  ?  1 : {playerLevel}+1 == 6  ?  2 : {playerLevel}+1 == 7  ?  2.5 : {playerLevel}+1 == 8  ?  3 : {playerLevel}+1 == 9  ?  4 : {playerLevel}+1 == 10 ?  6 : {playerLevel}+1 == 11 ?  8 : {playerLevel}+1 == 12 ? 10 : {playerLevel}+1 == 13 ? 15 : {playerLevel}+1 == 14 ? 20 : {playerLevel}+1 == 15 ? 28 : {playerLevel}+1 == 16 ? 40 : {playerLevel}+1 == 17 ? 55 : {playerLevel}+1 == 18 ? 90 : {playerLevel}+1 == 19 ? 130 : {playerLevel}+1 == 20 ? 200 : 0) : 0) * {completionDays} : {craftRoll} == 0.003 ? {itemValue}/2 - ({craftProficiency} == 1 ? ({playerLevel} == 0  ?  0.05 : {playerLevel} == 1  ?  0.2 : {playerLevel} == 2  ?  0.3 : {playerLevel} == 3  ?  0.5 : {playerLevel} == 4  ?  0.7 : {playerLevel} == 5  ?  0.9 : {playerLevel} == 6  ?  1.5 : {playerLevel} == 7  ?  2 : {playerLevel} == 8  ?  2.5 : {playerLevel} == 9  ?  3 : {playerLevel} == 10 ?  4 : {playerLevel} == 11 ?  5 : {playerLevel} == 12 ?  6 : {playerLevel} == 13 ?  7 : {playerLevel} == 14 ?  8 : {playerLevel} == 15 ? 10 : {playerLevel} == 16 ? 13 : {playerLevel} == 17 ? 15 : {playerLevel} == 18 ? 20 : {playerLevel} == 19 ? 30 : {playerLevel} == 20 ? 40 : 0) : {craftProficiency} == 1.05 ? ({playerLevel} == 0  ?  0.05 : {playerLevel} == 1  ?  0.2 : {playerLevel} == 2  ?  0.3 : {playerLevel} == 3  ?  0.5 : {playerLevel} == 4  ?  0.8 : {playerLevel} == 5  ?  1 : {playerLevel} == 6  ?  2 : {playerLevel} == 7  ?  2.5 : {playerLevel} == 8  ?  3 : {playerLevel} == 9  ?  4 : {playerLevel} == 10 ?  5 : {playerLevel} == 11 ?  6 : {playerLevel} == 12 ?  8 : {playerLevel} == 13 ? 10 : {playerLevel} == 14 ? 15 : {playerLevel} == 15 ? 20 : {playerLevel} == 16 ? 25 : {playerLevel} == 17 ? 30 : {playerLevel} == 18 ? 45 : {playerLevel} == 19 ? 60 : {playerLevel} == 20 ? 75 : 0) : {craftProficiency} == 1.1 ? ({playerLevel} == 0  ?  0.05 : {playerLevel} == 1  ?  0.2 : {playerLevel} == 2  ?  0.3 : {playerLevel} == 3  ?  0.5 : {playerLevel} == 4  ?  0.8 : {playerLevel} == 5  ?  1 : {playerLevel} == 6  ?  2 : {playerLevel} == 7  ?  2.5 : {playerLevel} == 8  ?  3 : {playerLevel} == 9  ?  4 : {playerLevel} == 10 ?  6 : {playerLevel} == 11 ?  8 : {playerLevel} == 12 ? 10 : {playerLevel} == 13 ? 15 : {playerLevel} == 14 ? 20 : {playerLevel} == 15 ? 28 : {playerLevel} == 16 ? 36 : {playerLevel} == 17 ? 45 : {playerLevel} == 18 ? 70 : {playerLevel} == 19 ? 100 : {playerLevel} == 20 ? 150 : 0) : {craftProficiency} == 1.2 ? ({playerLevel} == 0  ?  0.05 : {playerLevel} == 1  ?  0.2 : {playerLevel} == 2  ?  0.3 : {playerLevel} == 3  ?  0.5 : {playerLevel} == 4  ?  0.8 : {playerLevel} == 5  ?  1 : {playerLevel} == 6  ?  2 : {playerLevel} == 7  ?  2.5  : {playerLevel} == 8  ?  3 : {playerLevel} == 9  ?  4 : {playerLevel} == 10 ?  6 : {playerLevel} == 11 ?  8 : {playerLevel} == 12 ? 10 : {playerLevel} == 13 ? 15 : {playerLevel} == 14 ? 20 : {playerLevel} == 15 ? 28 : {playerLevel} == 16 ? 40 : {playerLevel} == 17 ? 55 : {playerLevel} == 18 ? 90 : {playerLevel} == 19 ? 130 : {playerLevel} == 20 ? 200: 0) : 0) * {completionDays} : {itemValue}/2][math]`   gp|