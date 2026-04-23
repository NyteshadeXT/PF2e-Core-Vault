---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/Assets/PlaceholderImage.png
pronounced: "Py-oh-neerz Forj"
aliases:
  - The Ember Anvil
  - The Crystal Smithy
poitype: Blacksmith & Toolshop
dominion: "[[Springrun Council]]"
owner: "[[Jorund Stonefist]]"
assistant: "[[Kiri]]"
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
> Nestled on the western bank along Pearl Hall, the Pioneer's Forge is a symphony of ringing steel and the low, melodic hum of industrial power. The heat here is intense, radiating from a massive furnace that glows with a brilliant, pressurized blue light rather than the orange of coal. This is the forge that built Springrun, turning raw ores and Primal Crystals into the tools and watchtowers that keep the Canopy at bay.

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
The Pioneer's Forge is the industrial heart of Springrun, responsible for the village’s rapid expansion and its specialized defenses. The smithy utilizes **Primal Crystal Induction**, a process where crystals are used to superheat metals far more efficiently than traditional fuel. Currently, the forge focuses on producing "Level 0" gear: sturdy farming implements, scouting blades, and the structural plating for the **Crystal-Infused Watchtowers**. While the smiths are masters of traditional metalwork, they currently lack the knowledge to "coat" gear in creature-core powders, meaning any weapon bought here initially will suffer damage reduction against the Hollow's denizens.

## Keyed Locations
- **The Induction Furnace:** The centerpiece of the shop. A massive stone kiln powered by a Primal Crystal that allows for near-instantaneous heating of steel.
- **The Surveyor's Anvil:** A specialized workstation where scouts bring their broken gear. It is equipped with fine tools for repairing the delicate crystal-integrated equipment used by the Aetherian Prospectors.
- **The Cooling Bins:** Large troughs of river water diverted from the Ember Bank, used for quenching blades. The steam from these bins often fills the street, giving the area a misty, industrial atmosphere.
- **The Prototype Rack:** A collection of experimental tools, including crystal-weighted axes designed to bite deeper into the iron-hard trees of the Prismatic Canopy.

## Current Events
The forge is under heavy contract from the Council to reinforce the village's southern perimeter. However, the head smith has noted that recent shipments of raw iron from the north have arrived "brittle," a phenomenon some attribute to the same distortions affecting the forest. There is a growing backlog of repairs as the newly arrived adventurers bring in gear damaged by "unusual wear and tear" from their first tentative steps into the Deep Wilds.

## History
Built alongside Pearl Hall, the Forge was the first building in Springrun to successfully integrate a high-output Primal Crystal into a manufacturing process. Its founding proved that the village could be self-sufficient and even technologically superior to older settlements. For many years, it has been the primary exporter of refined tools to other pioneer camps, cementing Springrun's reputation as a "New Light" in Aetheria.

## Notes
- **Mechanical Hook:** Players can purchase standard equipment here, but the smith will warn them that their blades "feel light" against the new creatures in the forest.
- **Progression:** This location will eventually evolve into the **Alchemical Extraction Lab** or the center for **Core-Coating** once the players bring back the first Creature Cores.