---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/Assets/MapPlaceholder.png
pronounced: "Can-oh-pee Out-fit-er"
aliases:
  - The Weaver's Reach
  - The Waterproofers
poitype: Leatherworker & Weaver Shop
dominion: "[[Springrun Council]]"
owner: "[[Bram Ironwood]]" 
assistant: "[[Mira Thorne]]"
organization: "[[Springrun Service Guild]]"
location: "[[Springrun]]"
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
> Located near the southern entrance of Springrun, the Canopy Outfitter is a long, low building identifiable by the rows of treated leather hides and heavy canvas rolls drying under its eaves. The air here is thick with the scent of pine resin and tanned animal skins. Unlike the blue glow of the village’s center, this shop feels grounded in the necessity of the frontier—providing the barrier between a traveler and the unforgiving elements of the Canopy.

> [!metadata|map]- Map
> ```zoommap
> image: zz-Attachments/Assets/PlaceholderImage.png
> # markers is optional; defaults to <image>.markers.json
> # markers: Assets/Map.jpg.markers.json
> 
> # Map view limits
> minZoom: 0.3
> maxZoom: 8
> 
> # Size & interactivity
> height: 660px
> width: 80%
> resizable: true
> resizeHandle: native     # left | right | both | native
> render: canvas           # or: dom
> 
> # Responsive display (fit into width, no wheel/pinch/dblclick pan/zoom)
> responsive: false        # true → always fit; disables pan/zoom gestures
> 
> # Storage (optional)
> # storage: note          # default is json; use "note" to store markers inline
> # id: map-1              # optional stable id for inline storage (per code block)
> 
> # Alignment / wrapping (optional)
> align: left             # left | center | right
> wrap: true               # wrap text; useful with left/right alignment
> view:
>   zoom: 0.7513
>   centerX: 0.486849
>   centerY: 0.510427
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
The Canopy Outfitter is a vital utility shop for Springrun’s residents and the influx of adventurers answering the village’s summons. It specializes in the production of high-durability survival gear, including reinforced leather armor, weather-resistant tents, and specialized climbing ropes. Because Springrun is built in a temperate rainforest, the Outfitter’s most prized service is "Resin-Coating"—a technique using local forest extracts to make fabric and leather completely waterproof. While the shop currently deals in standard "Level 0" gear, it serves as the logical place for players to bring exotic hides or fibers found within the **Verdant Hollow** for specialized crafting.

## Keyed Locations
- **The Tanning Yard:** An outdoor area at the rear of the shop where hides from aggressive forest fauna are processed. The skins here are noticeably thicker and tougher than those from pre-Shattering creatures.
- **The Loom Room:** A cramped interior space where weavers produce heavy-duty canvas and sturdy hempen ropes. The looms are often modified with simple **Primal Crystal** weights to keep tension steady during the humid rainy season.
- **The Resin Vat:** A large, bubbling cauldron near the front counter. It contains a proprietary blend of tree saps used for waterproofing gear—a necessity for anyone planning to stay in the Prismatic Canopy for more than a day.
- **The Survival Rack:** A display of "pioneer kits" containing bedrolls, mess kits, and waterproof pouches. These items are mundane and do not possess the "Dungeon Trait," meaning they offer no special protection against the Hollow’s reality distortions.

## Current Events
The shop is currently struggling to keep up with the demand for "expedition-grade" gear as dozens of newly arrived "Dungeon-seekers" prepare for incursions into the forest. The owner has recently posted a notice for "exotic materials," offering a steep discount to any party that can bring back hides from the mutated creatures reportedly appearing near the **Verdant Hollow**. Additionally, there are rumors that the shop's supply of waterproofing resin is running low due to the increasing hostility of the local flora where the sap is harvested.

## History
The Outfitter was established shortly after the village was founded, born out of the immediate need for protection against the Canopy’s unpredictable weather. It began as a small tent and expanded as Springrun grew into a technological hub fueled by **Primal Crystals**. Over the years, the shop has become a repository for frontier knowledge, as the leatherworkers often hear the first-hand accounts of scouts returning from the "Deep Wilds" with damaged gear and harrowing stories.

## Notes
- **Mechanical Hook:** While the shop sells standard armor, remember that non-dungeon AC bonuses are halved (rounded down to zero) inside the Hollow.
- **Future Upgrade:** This is the ideal location for players to eventually craft specialized "Dungeon-trait" clothing or light armor if they provide the necessary essences or hides.
