---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/eligos-house.png
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
> A white stone wall surrounds a manicured yard of sculpted hedges and exotic plants. A cobbled path, flanked by tranquil pools and statues of rearing dragons, leads to a white marble manor whose gilded double doors gleam in the golden light of mage-lanterns.

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
Eligos’ manor lies within [[Haven]], the affluent district of Ardentia City reserved for scholars, politicians, wealthy merchants, and the magically elite. The manor itself is both home and private research sanctum—a repository of rare tomes and artifacts gathered over decades of service to Archmage [[Manzorian]].

Externally refined and tranquil, the house is a fortress of secrets. Within, Eligos pursues research into planar alignments, historical catastrophes, and the patterns of cosmic cycles. Though not an active member of the [[Arcane Conclave]], his influence reaches deep into its ranks; many believe him to be the Archmage’s unseen observer within the city.

## Current Events
**Eligos’ Research:** He is tracing prophetic patterns across the Fractured Ages, using tomes borrowed from the Great Library and forbidden archives. His notes suggest increasing worm-activity in remote ley clusters tied to Far Realm echoes beneath the Aetherial Highlands.
**Suspicious Surveillance:** Unknown to him, one of the Conclave’s agents (or doppelgangers, per _Hall of Harsh Reflections_) has replaced a courier who delivers research materials to his home. This infiltrator may strike later.
**Echoes of Allustan:** Eligos recently received a coded letter from Allustan about the PCs’ exploits—but the letter included faint residue of necrotic corruption, indicating it may have been intercepted or altered.

## History
Eligos’ manor predates the Shattering by several decades, once belonging to a noble family who specialized in planar studies. Eligos purchased and restored it, layering wards and conduits that channel ambient Aetherium energy through the building to stabilize his research instruments.

He was once a field operative for Manzorian, but the trauma of planar collapse during a previous expedition (possibly the destruction of an early Dungeon Seed) led him to retire to Ardentia. His mentorship of Allustan was both genuine and strategic—ensuring Manzorian’s influence extended into the Aetherial Highlands.

## Notes
The manor is warded by layered Abjuration and Divination fields; trespassers trigger echoing illusions of past battles rather than alarms. The “dragon statues” are part of the Serpentine Seal—a defensive enchantment originally designed by Manzorian to mask scrying. 