---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/prism-and-parchment.png
pronounced: Priz-um and Par-chment
poitype:
  - Shop [Scribe]
location:
  - "[[Ardentia City]]"
  - "[[Seekers Quarter]]"
organization:
  - "[[Arcane Conclave]]"
owner:
  - "[[Jorvan Kale]]"
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
> The scent of parchment and ink mingles with the faint hum of wards as you step into The Prism & Parchment. Shelves of scrolls line the walls in precise dwarven order, while quills hover in the air, writing and rewriting text faster than any hand could manage. Behind the counter stands a stout dwarf with spectacles and a smile tinged with ink stains—Professor Jorvan Kale, at your service.

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
> WHERE econtains(location, this.file.link) AND contains(tags, "District")
> SORT tags DESC, poitype ASC, file.name ASC
> ```

> [!metadata|characters]- Characters
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(occupation, ", ") AS "Occupations", join(link(organization), ", ") AS "Organizations"
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "Character") AND !contains(condition, "Dead")
> SORT tags DESC, file.name ASC
> ```

> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "5-World"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC
> ```

## Overview 
The Prism & Parchment serves as both scroll emporium and arcane research hall for adventurers seeking reliable magic in the field. Professor Jorvan Kale, a retired adventurer turned Terramore Academy lecturer, designed the shop to function as a “portable library for Seekers.”  

Each scroll is stored within a crystalline tube that projects faint light corresponding to its spell rank. Aetherial wards hum faintly, preventing misfires or theft. Seekers often come here to commission new spells, research dungeon runes, or purchase emergency scrolls before expeditions into the Aetherial Observatory.

- **Atmosphere:** Quietly industrious; the scratch of quills and hum of runes never cease.  
- **Services:** Scroll transcription, rune analysis, magical translation, and scribing contracts for the Dungeon Seekers Guild.  
- **Unique Feature:** Animated quills copy spells in multiple languages simultaneously, allowing rapid translation for mixed-heritage adventuring parties.

## Keyed Locations
- **Front Counter:** Jorvan personally oversees transactions, his illusions mirroring his movements to multitask across the room.  
- **Scriptorium Floor:** A circular chamber filled with desks, each attended by scribing constructs and glowing ink vats.  
- **Rune Vault:** A magically sealed annex holding pre-Fracture runes—entries restricted to Conclave scholars only.  
- **Private Reading Orbs:** Floating study bubbles surrounded by spectral light, allowing private concentration.

## Current Events
Kale recently uncovered a set of runes resonating with the Aetherial Observatory’s fluctuations—he suspects they predate the Fracture itself. The Arcane Conclave has quietly instructed him to keep his findings under wraps, but rumors are spreading among Seekers that one of these runes may reactivate dormant Dungeon Seeds.

## History
Jorvan Kale founded The Prism & Parchment after a near-fatal expedition into the Shattered Archives below Ardentia. Realizing that poor preparation kills more adventurers than monsters, he vowed to make knowledge as accessible as steel. The shop’s motto—*“A blade cuts once; a spell cuts forever.”*—is carved above the entrance in glowing dwarven script.

## Notes
