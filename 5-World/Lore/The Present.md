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
The decade following The Shattering was a period of intense struggle and adaptation. The survivors faced numerous challenges as they tried to rebuild and understand the new world around them. Efforts to rebuild began almost immediately. Kingdoms and empires that survived the initial devastation worked to restore order, rebuild infrastructure, and provide for their people. This era saw the rise of new leaders and heroes who emerged to guide their people through the chaos.

Adventurers, scholars, and mages set out to explore the newly transformed lands. They mapped out the new geography, identified zones of wild magic, and sought out remnants of lost civilizations. This period of exploration was crucial for understanding the new Aetheria. The Shattering had a profound impact on religious and spiritual beliefs. Many saw it as a divine judgment or a cosmic reset. Temples and churches became centers of refuge and guidance, and new religious movements emerged, seeking to explain and find meaning in the cataclysm.

Major organizations were formed to adapt to the new reality of Aetheria. Two of the most significant are [[Arcane Exchange Consortium]] and the [[Dungeon Seekers Guild]]. [[Arcane Exchange Consortium]] is a sprawling global network that thrives on the symbiosis between seekers, magical artisans, and curious townsfolk.

The [[Dungeon Seekers Guild]] stands as a beacon for those who crave adventure, seek forgotten knowledge, and thrive in the heart of danger. Their banners flutter across continents, and their name echoes through taverns and royal courts alike. The guild's primary purpose is to explore dungeons in any of their various forms—subterranean labyrinths, cursed crypts, and forgotten temples. They seek to uncover relics, unravel magical mysteries, and reclaim Creature Cores from defeated foes and Dungeon Cores when necessary. The [[Dungeon Seekers Guild]] has an excellent relationship with [[Arcane Exchange Consortium]], ensuring a steady flow of Creature Cores and magical artifacts while benefiting from access to cutting-edge magical equipment and resources.

A decade after The Shattering, Aetheria remains a land of profound contrasts. It is a world where the echoes of ancient powers mingle with the scars of recent cataclysm, creating an environment rich in danger and opportunity. New heroes rise to face the challenges of this era, driven by the hope of rebuilding a better world from the ruins of the old. The balance of power is tenuous, with the remnants of the Lords of Chaos still lurking in the shadows, the gods watching from beyond the Veil, and the dragons guarding their ancient hoards. The Primordials, unchecked by the divine barrier, continue to pose a slumbering threat. Aetheria stands on the brink of a new age, its future shaped by the resilience and determination of its people as they navigate the perils and possibilities of their transformed world.

## Years

> [!metadata|year]- Years
> ```dataview
> TABLE without id file.link AS "Year", join(aliases, ", ") AS Aliases
> FROM "5-World"
> WHERE econtains(era, this.file.link) AND econtains(tags, "#Year")
> SORT file.name ASC

## Notes
