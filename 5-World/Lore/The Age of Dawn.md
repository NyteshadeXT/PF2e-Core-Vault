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
In the beginning, the world of Aetheria was a raw and untamed expanse of elemental chaos. From this primordial soup arose the Primordials, colossal beings of pure elemental power. They embodied the primal forces of nature: fire, water, earth, air, and ether. Their presence sculpted the world, creating mountains, oceans, forests, and skies, but also leaving it volatile and dangerous.

For eons, the Primordials ruled Aetheria, their titanic forms shifting landscapes and causing natural disasters as they pleased. Their dominion was absolute, and no other creatures dared challenge their might. Yet, within the chaotic energy of the world, seeds of order began to take root, giving rise to the fledgling gods.

From the remnants of creation's chaos, the gods emerged. They were born from the dreams and desires of the world's nascent sentient beings. The gods, though not as physically powerful as the Primordials, wielded a different kind of power: the ability to shape reality through will and thought. They represented abstract concepts such as life, death, knowledge, and war.

While the gods were finding their footing, another powerful race stirred: the ancient dragons. Born from the world's elemental forces but shaped by time and intelligence, these dragons were mighty and wise. They sought to carve out their own dominion, separate from both Primordials and gods.

### The War of Supremacy

The tension between the Primordials, gods, and dragons eventually erupted into a colossal conflict known as the War of Supremacy. Each faction fought to assert their dominance over Aetheria.  The Primordials sought to return the world to its primal, unstructured state. The Gods aimed to create a harmonious realm where they could nurture their followers and establish order. The Dragons desired to reign supreme as the ultimate beings of power and wisdom.

The war raged for millennia, reshaping the world repeatedly. Entire continents rose and fell, and the skies were set ablaze with dragon fire and divine lightning. Realizing that continued conflict would lead to mutual destruction, the factions forged an uneasy truce. The Primordials retreated to the most remote and untouched corners of Aetheria, where their influence remains strong. The gods established celestial realms, overseeing the world from afar and guiding their mortal followers. The dragons, now few but immensely powerful, chose to withdraw to hidden sanctuaries, guarding ancient knowledge and treasures.



## Years

> [!metadata|year]- Years
> ```dataview
> TABLE without id file.link AS "Year", join(aliases, ", ") AS Aliases
> FROM "5-World"
> WHERE econtains(era, this.file.link) AND econtains(tags, "#Year")
> SORT file.name ASC

## Notes