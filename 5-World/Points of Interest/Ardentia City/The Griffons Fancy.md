---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/griffons-fancy.png
pronounced: Fan-c Griff-on
organization:
  - "[[Dungeon Seekers Guild]]"
poitype:
  - Shop [Tavern]
location:
  - "[[Ardentia City]]"
  - "[[Seekers Quarter]]"
owner:
  - "[[Brannik Underbough]]"
aliases:
  - The Griffon
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
> The scent of roasted meat, spiced ale, and pipe smoke fills the air as you step into the Gilded Gryphon. Warm golden light glows from enchanted chandeliers crafted from gryphon feathers and crystal talons. A halfling stands atop the bar—mug in one hand, lute in the other—leading a chorus of adventurers in raucous song. Behind him, a tattered, rune-etched map nailed to the wall mutters irritably about “proper cartographic accuracy.”

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
The Gilded Gryphon Tavern is the heart of the Seekers Quarter—a raucous, welcoming stronghold for adventurers returning from the Aetherial Observatory or preparing for another delve. It’s part guild hall, part inn, part rumor mill. The owner, Brannik Underbough, is a retired dungeon cartographer turned brewer and bard. He runs the place with cheer, stubborn pride, and a bit of enchantment.

Brannik’s tavern is more than a place to drink; it’s a living archive of adventuring stories. The enchanted map behind the bar—known as *The Mouth of Maps*—records snippets of dungeon routes, coordinates, and muttered secrets overheard in the common room. On occasion, it blurts out a forgotten passage or half-mad warning mid-song.

- **Atmosphere:** Loud, warm, alive with song and magic.  
- **Services:** Ale and meals, rumor exchange, contract posting, and nightly bardic contests.  
- **Specialties:** *Gryphon’s Bite* (spicy spirit that glows faintly blue), *Cartographer’s Courage* (strong stout brewed with minor fortitude enchantment).

## Keyed Locations
- **Main Hall:** Long oak tables carved with adventurer initials and expedition notes; a stage enchanted to amplify instruments.  
- **The Bar & Map Wall:** The *Mouth of Maps* hangs here—an ancient talking dungeon chart with a caustic sense of humor.  
- **The Loft Rooms:** Inexpensive lodging for Seekers; rooms inscribed with minor warding runes for safety.  
- **The Cellar of Stories:** A hidden basement archive containing the journals of fallen adventurers, maintained by Brannik himself.

## Current Events
Brannik recently swears *The Mouth of Maps* shouted out a new route into the Aetherial Observatory—coordinates no known cartographer recognizes. The Dungeon Seekers Guild has begun quietly verifying whether it’s real or a prank. Meanwhile, tavern regulars claim the map has started whispering *names* in the night.

## History
Brannik Underbough was once a celebrated Dungeon Seeker and master cartographer whose maps helped open the first lower wings of the Aetherial Observatory. After his partner vanished during a delve, Brannik retired, opening the Griffon as both a tavern and a tribute to those who never returned. His motto hangs over the hearth:  
> *“For every path we lose, we find a song worth singing.”*

## Notes



