---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/Assets/PlaceholderImage.png
pronounced: The Captain's Blade
poitype:
  - Shop [Weaponsmith]
owner:
  - "[[Tyrol Ebberly]]"
location:
  - "[[Diamond Lake]]"
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
>> **Pronounced** |  `INPUT[textArea:pronounced]`
>> **Aliases** | `INPUT[list:aliases]` |
>> **Type** | `INPUT[POIType][inlineListSuggester:poitype]` |
>> **Dominion** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):dominion]` |
>> **Owners** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):owner]` |
>> **Assistant** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):assistant]` |
>> **Organization** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |

> [!infobox]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Type** | `VIEW[{poitype}][text]` |
> **Dominion** | `VIEW[{dominion}][link]` |
> **Owners** | `VIEW[{owner}][link]` |
> **Assistant** | `VIEW[{assistant}][link]` |
> **Organization** | `VIEW[{organization}][link]` |
> **Location** | `VIEW[{location}][link]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>
> [!recite]- Introduction
> Tables line the walls within, stacked high with rope coils, lanterns, bottles, gloves, and gear.  Wagon wheels rest against barrles filled with nails or candles.  

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

> [!metadata|location]- Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(organization), ", ") AS "Organization(s)"
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "POI")
> SORT tags DESC, poitype ASC, file.name ASC

> [!metadata|characters]- Characters
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(occupation, ", ") AS "Occupations", join(link(organization), ", ") AS "Organizations"
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "Character") AND !contains(condition, "Dead")
> SORT tags DESC, file.name ASC

> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "5-World"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC

## Overview 

> [!kirk|info] Prompt (Remove me)
> Provide an overview encapsulating the essence of this place. What defines its significance? What key events or recurring activities shape its Identity? Explore the heart of this location, capturing its essence in the unfolding pages of history.

## Keyed Locations

> [!kirk|info] Prompt (Remove me)
Create detailed descriptions for each keyed location within the Point Of Interest. Define each room or area with distinct characteristics. Include information on the size, layout, notable features, and potential points of interaction or interest within each location. Describe the ambiance, potential hazards, objects of importance, any interactive elements that might engage the players, or any loot to be found. How does each keyed location contribute to the overall exploration and gameplay experience within this Point of Interest?

### Example


## Current Events

> [!kirk|info] Prompt (Remove me)
> Capture the present pulse within this Point of Interest. What's happening right now in this dynamic location? Are there recent developments, ongoing activities, or sudden changes that have affected the atmosphere? Delve into the current events, integrating them into the fabric of this place. How might these immediate occurrences influence encounters or quests within this Point of Interest or surrounding area, adding depth and intrigue to your players' exploration?

## History

> [!kirk|info] Prompt (Remove me)
> Explore the echoes of history within this location. What significant events have shaped its narrative? Unravel the tales engrained within its grounds, uncovering not just what happened, but also the narratives woven around these events. What stories persist, and are there misconceptions veiling the true essence of these historical moments?

## Notes
Ebberly has any melee weapon up to level 1 in stock, but must send away for more expensive items, a process that takes 1d3+6 days.  He specializes in melee weapons, and keeps his surprisingly wide selection displayed on the walls.  He sends anyone looking for arranged weapons to Venelle's, across town.  "Don't forget your coin purse," he sniffs indignantly.  "Your sure to need it there."