---
tags:
  - "#Location"
  - "#Region"
art: zz_Attachments/Aetherial Highlands.png
pronounced: a-thee-re-al high-lands
terrain:
  - Floating Island
  - Forest
  - River
organization:
  - "[[Meteor's Chosen]]"
  - "[[Dungeon Seekers Guild]]"
  - "[[Arcane Exchange Consortium]]"
  - "[[Arcane Conclave]]"
location:
  - "[[Ardentia City]]"
---


> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Art
>> #### Art
>>  |
>> ---|---|
> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[textArea:pronounced]`
> **Aliases** | `INPUT[list:aliases]` |
> **Terrain** | `INPUT[Terrain][inlineListSuggester:terrain]` |
> **Dominion** | `INPUT[inlineListSuggester(optionQuery(#Character OR #Organization AND !"z_Templates"), useLinks(partial)):dominion]` |
> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
> **Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |

> [!infobox]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Terrain** | `VIEW[{terrain}][text]` |
> **Dominion** | `VIEW[{dominion}][link]` |
> **Location** | `VIEW[{location}][link]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

> [!metadata|map]- Map
> ```leaflet
> id: TBD
> image: [[PlaceholderImage.png]]
> lock: true
> recenter: true
> noScrollZoom: false
> ### Use this [LINK](https://docs.google.com/spreadsheets/d/1jKQxktYSUFcCJhEkAAPr1wMVBTqUdpEfA5XveUXI17I/edit?usp=sharing) to work out your map's bounds.
> ### bounds: [[0,0], [0, 0]] (Remove the ### and these parentheses with the content within from this line to enable the bounds)
> height: 600px
> width: 640px
> lat: 0
> long: 0
> minZoom: 1
> maxZoom: 6.5
> defaultZoom: 1
> zoomDelta: 0.5
> unit: miles
> scale: 1
> darkMode: false
> ```

> [!metadata|settlements]- Settlements
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, settlementtype AS Type, defence AS Defences, join(link(dominion), ", ") AS "Dominion"
> FROM "Campaign"
> WHERE econtains(location, this.file.link) AND contains(tags, "Settlement")
> SORT nation ASC, file.name ASC

> [!metadata|location]- Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(organization), ", ") AS "Organization(s)", join(link(dominion), ", ") AS "Dominion"
> FROM "Campaign"
> WHERE econtains(location, this.file.link) AND contains(tags, "POI")
> SORT tags DESC, poitype ASC, file.name ASC

> [!metadata|organizations]- Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "Campaign"
> WHERE contains(location, this.file.link) AND contains(tags, "Organization")
> SORT organizationtype ASC, file.name ASC

> [!metadata|characters]- Characters
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(occupation, ", ") AS "Occupations", join(link(organization), ", ") AS "Organizations"
> FROM "Campaign"
> WHERE econtains(location, this.file.link) AND contains(tags, "Character") AND !contains(condition, "Dead")
> SORT tags DESC, file.name ASC

> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "Campaign"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC

## Overview 

> [!Overview|info]
> Elevated plateaus where the air is infused with magical energies create breathtaking displays of shimmering lights. The Aetherial Highlands are home to flying creatures drawn to the magical currents in the atmosphere. The skies above teem with a diverse array of flying creatures, ranging from elegant winged beasts to ethereal beings that seem to defy gravity itself. These creatures have adapted to the magical currents that permeate the atmosphere, utilizing them for flight and navigation. Seekers may encounter majestic sky whales drifting lazily through the air, elusive cloud dragons soaring among the clouds, or flocks of luminescent birds painting the sky with their vibrant plumage.
> 
> Within the Aetherial Highlands are floating islands suspended by powerful currents of magic. These islands serve as habitats for both flora and fauna unique to this region. Each island possesses its own unique ecosystems, resources, and inhabitants. The Crystalline Archways serve as the lifelines linking these islands, facilitating trade, communication, and exploration between fractured regions. Travelers and traders rely on these bridges to traverse the fractured landscape, fostering connections between disparate communities.
> 
> The Luminous Vanguard, the shining beacon of [[Ardentia City]] maintain small outposts at all the Crystalline Archways, ensuring the safety and sanctity of these vital bridges. The presence of the Vanguard wards off intruders and protects the delicate balance of the fractured world. The Crystalline Archways stand as a symbol of resilience and unity amidst the fractured world of Aetheria. Despite the chaos and upheaval wrought by the meteor's impact, these bridges serve as testaments to the indomitable spirit of the inhabitants of the Aetherial Highlands, who have come together to bridge the gaps between fractured regions and forge connections that transcend the boundaries of geography and time.
> 
> The Aetherial Highlands are adorned with a dazzling array of magical flora, their vibrant colors and otherworldly blooms captivating all who behold them. Some plants possess magical properties, their petals shimmering with arcane energy or emitting fragrances that induce euphoric sensations. Herbalists and alchemists prize these rare specimens for their medicinal and alchemical properties, using them to concoct potions, elixirs, and remedies of unparalleled potency. Navigating these floating islands presents a challenge to seekers, requiring them to master the art of aerial traversal and uncover hidden pathways and chambers hidden amidst the clouds.
> 
> Create an overview that encapsulates the spirit and character of this region. Explore its cultural diversity, geographical landmarks, societal values, and any defining aspects that contribute to its identity. What makes this region unique and distinct from others? Paint a vivid picture that captures the essence and allure of this land.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Capture the pulse of the present moment by examining current events. Dive into the ongoing occurrences, societal shifts, or global happenings that are shaping the world today. Analyze the trends, controversies, or innovations unfolding in real-time. What stories are making headlines, and how might these current events influence the future trajectory of the society?

## History

> [!kirk|info] Prompt (Remove me)
> Delve into the historical legacy of the inhabitants of this region. Explore the diverse cultures, migrations, and societal developments that have shaped the people's identity and contributed to the region's tapestry. Investigate the stories of resilience, innovations, and cultural amalgamations that reflect the rich history within this region. How have the people's experiences and interactions shaped the course of this region's history?

## Notes







![[Aetherial Highlands.png]]

