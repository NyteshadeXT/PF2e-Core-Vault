---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/Assets/PlaceholderImage.png
poitype:
  - Circus
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
> Upon entering, you encounter a small desk station manned by a grinning businesslike attendant.  The thin balding man smiles wryly at all times, a gesture accentuated by his up curled moustache.

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
Every week, hundreds of iners boil up from the depths, their pockets lined with freshly earned coin.  The Emporium exists to separate the men from the money, and at this it is paramount among Diamond Lake's diverse businesses.

## Keyed Locations

> [!kirk|info] Prompt (Remove me)
Create detailed descriptions for each keyed location within the Point Of Interest. Define each room or area with distinct characteristics. Include information on the size, layout, notable features, and potential points of interaction or interest within each location. Describe the ambiance, potential hazards, objects of importance, any interactive elements that might engage the players, or any loot to be found. How does each keyed location contribute to the overall exploration and gameplay experience within this Point of Interest?

### Example


## Current Events

> [!kirk|info] Prompt (Remove me)
> Capture the present pulse within this Point of Interest. What's happening right now in this dynamic location? Are there recent developments, ongoing activities, or sudden changes that have affected the atmosphere? Delve into the current events, integrating them into the fabric of this place. How might these immediate occurrences influence encounters or quests within this Point of Interest or surrounding area, adding depth and intrigue to your players' exploration?

## History
Ten years ago it was simply Zalamandra's, one of a dozen vice dens along the Vein.  It's ill fortunes changed the day its charismatic young madam seduced Professor Montague Marat, proprietor of a traveling sideshow and curiosity collection passing through Diamond Lake.  The two soon joined forces, and a cavalcade of freaks and eccentrics moved into the buildings lower floor.  Thus was born Zalamandra's Emporium, and Diamond Lake has never been the same.

The professor himself abandoned Diamond Lake three years ago.

## Notes
The house charges 3 cp for the first floor's central corridor, and 3 sp for access to the lushly decorated upper floor, which features a large gaming hall, an exclusive entertainment club and the infamous Veiled Corridor where any pleasure may be obtained for the right price. The private chambers of the Veiled Corridor are frequented by the community's elite, including the governor-mayor, sheriff, most of the mine managers, and several prominent merchants.  

Attractions include Shag Solomon, an aristocratic shaggy "wild man." Tom Shingle the misshapen contortionist. The combustible magician, Ariello Klint. A two-headed calf named Esmerelda, Jr. The alluring Chezabet who reads fortunes using a harrow deck

The Emporium offers several rotating games of chance, with the most popular being dragonfire (an ante-based card game), norebonne (a polyhedral dice game), and a conte4st known simply as the Rat Game, in which four rats scurry to be the first through an open-topped maze.  When the winner reaches the labyrinth's central chamber, an attendant injects it with a serum that immediately triggers a rabid frenzy.  At this time, four doors built into the sides of the maze slide open, revealing four Tiny spear wielding jermaline.  Patrons wager on all aspects of the ensuing melee.

Folk of all social classes flock to the Emporium throughout the day and night, so the place makes an excellent staging ground for a chance encounter with an important NPC.  Because Zalamandra tolerates absolutely no conflict within her walls, even sworn enemies must treat each other respectfully in the Emporium or risk, the attentions of Kurlag the establishment's imposing bouncer.