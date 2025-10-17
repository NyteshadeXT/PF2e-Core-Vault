---
tags:
  - "#Location"
  - "#District"
art: zz_Attachments/Misc/PlaceholderImage.png
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
> **Type** | `INPUT[DistrictType][inlineListSuggester:districttype]` |
> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
> **Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |

> [!infobox]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Type** | `VIEW[{districttype}][text]` |
> **Location** | `VIEW[{location}][link]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

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

> [!metadata|organizations]- Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "Organization")
> SORT tags DESC, file.name ASC

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
> The **Shattered Ward** is a small, ruined section of [[Ardentia City]] that has been walled off from the rest of [[Haven]]. This area suffered the most damage during the meteor strike and has never been fully restored. Darkened, crumbling buildings, broken streets, and residual pockets of unstable arcane energy make it a dangerous place. Rumors abound of strange magical phenomena, haunting whispers, and mysterious figures lurking in the shadows.
> 
> Above the Shattered Ward floats **The Gilded Cage**, the city's prison—a small, rocky island kept suspended in the air by massive chains. It is said that the most dangerous criminals and political dissidents are kept here, watched over by arcane sentinels and powerful wards.
> 
> Capture the essence of this district within the larger settlement. Define its specific characteristics, purpose, and identity. Explore the district's primary function, whether it's residential, commercial, industrial, cultural, or recreational. Detail the demographics, architectural style, notable landmarks, and any unique cultural aspects that distinguish this district. How does this district contribute to the overall landscape and vitality of the settlement?

## Keyed Locations

> [!kirk|info] Prompt (Remove me)
Develop detailed descriptions for the keyed locations within the district. Define each area, within the district with distinct characteristics. Include information on the purpose, size, architectural style, notable features, and potential interaction within each area. Describe the ambiance, significance, potential activities, or any interactive elements that might engage the inhabitants or visitors. How does each keyed location contribute to the district's identity and offer potential for storytelling or exploration?

### Example


## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within this district. What's currently unfolding within its bounds? Describe ongoing developments, changes, or challenges affecting the district. Are there new projects, social shifts, economic changes, or cultural movements making waves? Furthermore, what are the immediate concerns or goals specific to this district? How are these current events shaping the daily life and future trajectory of this area within the larger settlement?

## History

> [!kirk|info] Prompt (Remove me)
> Uncover the historical narrative woven into the fabric of this district. Trace its origins, significant events, and transformations that have shaped its identity over time. What were the founding elements that led to the establishment of this district? Detail the key milestones, shifts in demographics, architectural changes, or impactful events that have influenced its development. How has the district evolved from its inception to its present-day form, and what historical legacy does it carry within the settlement?

## Notes
