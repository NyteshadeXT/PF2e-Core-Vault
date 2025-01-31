---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/Assets/PlaceholderImage.png
pronounced: Las-are House
poitype:
  - Gaming Hall
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
Those seeking a relatively cultured nightspot often congregate at Lazare's House, a cozy gaming parlor situated on the Vein's central square.  IN contrast to the ostentatious banners and garish chipped pain on the Emporium across the street, Lazare's exudes a quiet sense of class with a stylish stone and timber construction and distinctive crooked peaked roof.  In side, Diamond Lake's elite match wits over dragonchess, a popular game n which two sides of 42 pieces contest over three 96-square boards representing the sky, the earth, and the underworld.  Pieces include the griffon, sylph, oliphant, basilisk, hero, thief and paladin.  Scholars claim that the game is a metaphor for the celestial struggles of fundamental law, chaos, good and evil.  In Diamond Lake, it's principally another justification for gambling.

A central hearth, constantly stoked to comfortable warmth by the courteous staff, serves as the hub of a roughly circular interior.  Along the ring, eight alcoves offer an excellent location for private conversations or even romantic trysts.  Each alcove is a half-moon of posh benches encircling a rectangular table bearing a special built-in dragonchess board.  Visitors are expected to bring their own pieces, but may rent a house set for 2 gp. This fee effectively keeps out the riff-raff, making Lazare's a have for visiting dignitaries and Diamond Lake's upper class.

Wagers of up to 2100 gp can be found on any given night, but most tend to be of the 5 to 10 gp variety.  Lazare frowns on side bets by non-players, but not so much as to ban the proactive.  Some of the more avid players (including all of the mine managers and Lazare himself) politely refuse to accept the challenge of anyone who lacks their own dragonchess pieces, valued at 50 gp or more.  The game attracts dilettantes and devotees, but the two groups seldom mix.

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
A game of dragonchess takes a full hour and is played conversationally.  Many casual players prefer toe discussions to the game and play accordingly.  Others dedicate considerable passion toward memorizing strategies and perfecting surprise traps and feints.  To resolve a dragonchess game, both players make an opposed [[Skills#Deception|Deception]] skill check. Characters of at least expert level in [[Skills#Diplomacy|Diplomacy]] or [[Skills#Intimidation|Intimidation]] receive a cumulative +2 bonus on this check.  Increase this bonus by +2 for every skill rank above Expert. 
 Wagers of up to 100 gp can be found on any given night, but most tend to be of the 5 to 10 gp variety.  
