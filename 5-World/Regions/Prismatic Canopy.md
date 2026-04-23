---
tags:
  - "#Location"
  - "#Region"
art: zz-Attachments/region-prismatic-canopy.png
pronounced: pris-mat-ic can-o-pee
terrain:
  - Forest
  - River
  - Ruins
  - Waterfalls
  - Hills
organization:
location:
aliases:
dominion:
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
> ```

> [!metadata|location]- Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(organization), ", ") AS "Organization(s)", join(link(dominion), ", ") AS "Dominion"
> FROM "Campaign"
> WHERE econtains(location, this.file.link) AND contains(tags, "POI")
> SORT tags DESC, poitype ASC, file.name ASC
> ```

> [!metadata|organizations]- Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "Campaign"
> WHERE contains(location, this.file.link) AND contains(tags, "Organization")
> SORT organizationtype ASC, file.name ASC
> ```

> [!metadata|characters]- Characters
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(occupation, ", ") AS "Occupations", join(link(organization), ", ") AS "Organizations"
> FROM "Campaign"
> WHERE econtains(location, this.file.link) AND contains(tags, "Character") AND !contains(condition, "Dead")
> SORT tags DESC, file.name ASC
> ```

> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "Campaign"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC
> ```

## Overview 

The Prismatic Canopy is a realm of wonder and beauty, where the canopy above is adorned with crystalline leaves that shimmer and dance in the sunlight. Each leaf refracts light in a kaleidoscope of colors, painting the forest with a mesmerizing and ever-changing tapestry of hues. Sunbeams filter through the canopy, casting prismatic rays that illuminate the forest floor in a dazzling display of light and shadow.  The vibrant hues of the Prismatic Canopy have attracted a diverse array of creatures that have adapted to the unique environment. From iridescent birds with feathers that gleam like precious gemstones to insects with wings that shimmer in the sunlight, the forest is teeming with life that is as colorful as it is diverse. These creatures have evolved specialized traits and abilities to thrive amidst the crystalline leaves, forming intricate ecosystems that are as beautiful as they are complex.

The Prismatic Canopy is not only a place of natural beauty but also a treasure trove of rare and valuable crystals. Embedded within the crystalline leaves and hidden beneath the forest floor are precious gems and minerals that are coveted by seekers and collectors alike. From sparkling diamonds to shimmering sapphires, the forest holds untold riches waiting to be unearthed by those brave enough to delve into its depths.

The Prismatic Canopy is a sought-after destination for seekers and explorers seeking both natural beauty and valuable treasures. Travelers from far and wide flock to the forest in search of rare crystals and exotic creatures, drawn by the allure of its vibrant hues and shimmering light. Yet, the forest is not without its dangers, and those who venture too deep may find themselves ensnared by the enchanting beauty of the Prismatic Canopy, unable to escape its captivating embrace.  Legends speak of guardian spirits that dwell within the depths of the Prismatic Canopy, ancient beings that watch over the forest and protect its treasures from would-be plunderers. These ethereal entities are said to be as elusive as they are powerful, appearing only to those who show reverence for the natural beauty of the forest and respect for its inhabitants. Those who earn the favor of the guardian spirits may find themselves blessed with good fortune and safe passage through the enchanted realm.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Capture the pulse of the present moment by examining current events. Dive into the ongoing occurrences, societal shifts, or global happenings that are shaping the world today. Analyze the trends, controversies, or innovations unfolding in real-time. What stories are making headlines, and how might these current events influence the future trajectory of the society?

## History

> [!kirk|info] Prompt (Remove me)
> Delve into the historical legacy of the inhabitants of this region. Explore the diverse cultures, migrations, and societal developments that have shaped the people's identity and contributed to the region's tapestry. Investigate the stories of resilience, innovations, and cultural amalgamations that reflect the rich history within this region. How have the people's experiences and interactions shaped the course of this region's history?

## Notes


