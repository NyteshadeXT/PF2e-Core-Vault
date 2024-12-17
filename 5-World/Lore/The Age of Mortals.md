---
tags:
  - "#Era"
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
>> **Aliases** | `INPUT[list:aliases]` |
>> **Calendar Link** |  `INPUT[textArea:calendarlink]` |

> [!infobox]
> #### Era Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}]` |
> **Website** | `VIEW[\[Calendar Link\]({calendarlink})][text(renderMarkdown)]` |

# `=this.file.name`

> [!column|3 no-title]
>> [!metadata|characters] People
>> ```dataview
LIST
FROM outgoing([[]])
WHERE econtains(tags,"#Character")
SORT file.name ASC
>
>> [!metadata|location] Locations
>>  ```dataview
LIST
FROM outgoing([[]])
WHERE econtains(tags,"#Location")
SORT file.name ASC
>
>> [!metadata|misc] Misc
>>  ```dataview
LIST
FROM outgoing([[]])
WHERE !econtains(tags,"#Year") AND !econtains(tags,"#Location") AND !econtains(tags,"#Character")
SORT file.name ASC

## Overview
In the wake of the War of Supremacy, the world of Aetheria was a land ripe for the rise of new life and civilizations. Mortals began to explore and settle the lands, guided by the subtle influences of the gods and occasionally encountering the remnants of primordial power. The early civilizations were simple, often built around sources of natural power or ancient ruins left by the gods and dragons.

One of the first great human kingdoms, Elysor, was founded in the fertile plains near what was then known as the River Elaria. Blessed by the goddess of harvest, Demetia, Elysor became known for its abundant crops and vibrant culture. Its people were the first to develop written language and recorded history, spreading knowledge across Aetheria.

Deep in the enchanted forests, the elves of Sylvanor established a realm in harmony with nature. They were led by archdruids who claimed to have communed with the gods and received their blessings. Sylvanor became a center for magic and learning, where scholars and mages from across Aetheria would gather.

In the mountainous regions, the dwarves of Karak-Zhul carved out vast underground cities, mining the rich veins of precious metals and gems. Known for their craftsmanship and engineering prowess, the dwarves created wonders of stone and metal, including intricate weapons and fortified cities.

As these early civilizations grew, so did their ambitions. The discovery of ancient relics and powerful artifacts from the time of the Primordials, gods, and dragons fueled expansion and conflict.

The rise of powerful mages and the discovery of ancient magical tomes led to the Arcane Wars. Rival kingdoms and city-states vied for control over sources of magical power. This period was marked by devastating battles and the creation of forbidden spells that could alter the fabric of reality itself.

Some mortal rulers, driven by greed and the promise of power, sought out the hidden sanctuaries of the ancient dragons. These Dragon Hunts were perilous and often led to the ruin of those who embarked on them. However, a few successful hunts brought back immense treasures and knowledge, advancing the civilizations that dared to face the dragons.

The presence of mortals disturbed the slumber of the Primordials. Occasionally, these ancient beings would awaken, causing natural disasters and chaos. Heroes and champions arose to confront these threats, often at great personal cost. These events were rare but served as a stark reminder of the raw power that still lingered in Aetheria.

Despite the conflicts, this era also saw unprecedented growth and prosperity for many civilizations.

To prevent further destructive wars, the most powerful kingdoms formed the Council of Elarion, named after the ancient river. This council aimed to mediate disputes, promote trade, and encourage the sharing of knowledge. It was a beacon of hope and cooperation in a world still scarred by past conflicts.




## Years

> [!metadata|year]- Years
> ```dataview
> TABLE without id file.link AS "Year", join(aliases, ", ") AS Aliases
> FROM "5-World"
> WHERE econtains(era, this.file.link) AND econtains(tags, "#Year")
> SORT file.name ASC

## Notes