---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/Assets/PlaceholderImage.png
pronounced: va-nells
poitype:
  - Shop [Fletcher]
  - Shop [Weaponsmith]
owner:
  - "[[Venelle]]"
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
> [!kirk|info] Info (Remove me)
> Point of Interest: A location within your world, anything from a homes, shops, forts, volcanos or dungeons.

> [!recite]- Introduction
> A script for the GM to read when the party arrive to this location for the first time.

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
A redolence of fresh pine suffuses this handsome establishment, a distinctive structure that incorporates intricate carved patterns and upright logs.  The proprietor, a curious woman names [[Venelle]], makes high quality bows and arrows, and also deals in other weapons and armor imported from [[Ardentia City]] in exchange for items of her own design.  The shop is a bit chaotic, with various items piled on tables.  Armor sits loosly on too-small dummies.  [[Venelle]] carries most weapons and armor, but must send away for expensive items.

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

