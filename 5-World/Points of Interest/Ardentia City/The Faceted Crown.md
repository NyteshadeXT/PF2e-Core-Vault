---
tags:  
- "#Location"  
- "#POI"  
art: zz-Attachments/faceted-crown.png  
pronounced: The Fa-cet-ed Crown  
owner:  
- "[[Maelis Vorenn]]"  
assistant:  
- "[[Corin Pell]]"  
organization:  
- "[[Arcane Exchange Consortium]]"  
location:  
- "[[Ardentia City]]"  
- "[[Merchant's Quarter]]"  
aliases:  
- The Crown  
poitype:  
- Shop [Jeweler]  
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
> Warm light spills across polished glass and cut crystal as you approach the shopfront. The building is elegant without ostentation, its dark stone facade framed by brass filigree and tall, narrow windows that scatter light into shards of color across the street. Inside, gemstones glitter from velvet-lined displays, silver chains hang like threads of moonlight, and delicate crowns, rings, and brooches gleam with meticulous care.
> 
> The air carries the faint scent of lamp oil, lavender, and worked metal. Somewhere deeper within, the gentle tap of fine tools against stone sounds with measured precision.
> 
> A calm voice rises from behind a glass-topped counter. “Welcome to the Faceted Crown. Whether you seek beauty, remembrance, or a stone with a story, you are welcome here.”

## Overview

> [!metadata|map]- Map
> ```leaflet
> id: crooked-house-tavern
> image: [[crooked-house-tavern.png]]
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
> defaultZoom: 4.5
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
The **Faceted Crown** is one of Ardentia’s finest jewelers, known for exceptional craftsmanship, rare gemstones, and a reputation for discretion among nobles, merchants, arcanists, and successful adventurers. Its works range from elegant personal adornments to ceremonial regalia, signet jewelry, gemstone settings, and custom commissions intended to mark oaths, victories, inheritances, and moments of lasting significance.

Though renowned for beauty, the shop is valued just as highly for its expertise. The Faceted Crown regularly appraises unusual stones, refines raw crystals, restores heirloom pieces, and sets gems intended for arcane use. In a city shaped by magic and dungeon discovery, this has made the shop an important point of contact for those who recover strange materials and wish to turn them into something lasting, wearable, and meaningful.

The shop maintains steady ties to the **[[Arcane Exchange Consortium]]**, which often relies on its expertise when delicate or valuable objects require refinement, authentication, or discreet sale. To some, the Faceted Crown is simply the premier jeweler in Ardentia. To others, it is where memory, wealth, and magic are given permanent form.

## Keyed Locations
### 1. The Showroom
A refined main chamber of polished wood, brass latticework, and softly glowing lanterns. Glass cases display rings, necklaces, brooches, circlets, and gemstone sets arranged with careful precision.

- **Notable Features:**
    - Velvet-lined display cases sorted by stone, metal, and style
    - Mirrored surfaces that catch and multiply the light of lanterns and gemstones
    - A central locked display reserved for the rarest or most prestigious pieces

### 2. The Cutting Bench
A private workshop where gemstones are cut, polished, inspected, and set into finished pieces. Fine tools line the walls, and trays of partially finished stones rest beneath carefully hooded lamps.

- **Notable Features:**
    - Cutting wheels, magnifying lenses, and setting tools of exceptional quality
    - Tiny silver trays catching gem dust and slivers of polished crystal
    - Detailed notes tracking flaw lines, inclusions, and magical irregularities

### 3. The Vault of Settings
A secured chamber containing rare gemstones, completed commissions awaiting collection, and select items of significant value or delicate provenance.

- **Notable Features:**
    - Reinforced lockboxes and hidden compartments
    - Subtle protective wards worked into the walls and shelving
    - Detailed ledgers documenting ownership, history, and appraised worth

### 4. The Consultation Parlor
A quiet, elegant room set aside for private discussions with wealthy patrons, delicate negotiations, or the examination of unusual stones and commissioned works.

- **Notable Features:**
    - Comfortable seating, shaded lanterns, and a polished inspection table
    - Sample settings, sketches, and gemstone references kept in orderly portfolios
    - A discreet atmosphere ideal for confidential dealings or sensitive appraisals

## Current Events
A recent influx of unusual crystals recovered from newly formed dungeons has drawn fresh attention to the Faceted Crown. Some of these stones possess strange inner refractions, shifting color under moonlight or faintly resonating in the presence of magic. While not openly advertised, the shop has begun quietly evaluating which of these materials can be safely worked and which are better left untouched.

At the same time, several high-profile clients have approached the Faceted Crown seeking commissioned pieces tied to political alliances, inheritance disputes, and new ventures in Ardentia’s growing trade circles. This has made the shop a place where beauty and commerce meet, but also one where secrets are often exchanged as readily as coin.

## History
The Faceted Crown was established during Ardentia’s early years, when the city’s rising prominence brought with it a growing demand for luxury goods, formal regalia, and trustworthy appraisal of rare stones and decorative treasures. From its beginning, the shop distinguished itself through restraint and precision rather than excess, building its name on quality work, careful judgment, and the ability to recognize worth where others saw only glitter.

As trade expanded and strange materials began entering the city from dangerous places, the Faceted Crown adapted. Its craftsmen learned to handle gemstones with unusual qualities, from luminous crystals to stones altered by magical proximity, and became respected not only as jewelers but as experts in the refinement and valuation of rare materials.

Over time, the shop became one of the most trusted names in Ardentia for fine jewelry, gemstone appraisal, and commissioned ceremonial works. Its reputation rests on more than beauty alone; in a city where wealth and magic are increasingly intertwined, the Faceted Crown endures because it understands both.

## Notes
- Strong location for:
    - Appraisals
    - Custom jewelry commissions
    - Refined gemstone purchases
    - Social and political intrigue involving luxury goods
- Good quest hooks:
    - Recovering a stolen heirloom
    - Identifying a mysterious gemstone
    - Commissioning a ceremonial or arcane setting for a rare stone
- Tone:
    - Refined, discreet, elegant, and quietly influential
