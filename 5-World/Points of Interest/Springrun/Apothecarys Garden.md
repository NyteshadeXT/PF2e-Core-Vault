---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/Assets/PlaceholderImage.png
pronounced: "A-poth-eh-kar-eez Gar-den"
aliases:
  - The Verdant Ward
  - The Alchemist's Acre
poitype: Herbalist & Apothecary Shop
dominion: "[[Springrun Council]]"
owner: "[[Valerius Thorne]]"
assistant: "[[Pip]]"
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
> Tucked away on the quieter eastern edge of Springrun, the Apothecary’s Garden is a vibrant explosion of color against the heavy greens of the forest. The air here is sharp with the scent of crushed mint and pungent medicinal resins. A low stone wall keeps the more aggressive forest vines at bay, protecting a meticulously organized collection of flora that glows with a soft, natural bioluminescence under the evening sky.

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
The Apothecary's Garden is the primary center for healing and alchemical research in Springrun. It serves the village's 930 residents by providing medicinal remedies, anti-venoms, and basic restorative tinctures essential for surviving the Prismatic Canopy. The shop utilizes a blend of traditional herbalism and **Primal Crystal** irrigation to keep delicate, pre-Shattering plants alive in the new, harsh climate. While currently stocked with standard PF2e alchemical items, the owner is a scholar of "mutated fauna," making this the future site of the **Alchemical Extraction Lab** once the players begin retrieving **Creature Cores**.

## Keyed Locations
- **The Greenhouse of Remnants:** A glass-enclosed structure maintained by a "Climate-tier" Primal Crystal. It houses rare plants that survived the Shattering but cannot withstand the ambient mana of the current Canopy.
- **The Drying Sheds:** Large wooden structures where bundles of forest herbs are hung to desiccate. The rafters are often occupied by small, harmless forest spirits or familiars attracted to the concentrated scents.
- **The Mixing Counter:** A clean, marble-topped area where the apothecary prepares tinctures and elixirs. A small, humming crystal-powered centrifuge sits in the corner, used for separating rare oils.
- **The Mutated Nursery:** A heavily reinforced outdoor plot where the apothecary studies strange, aggressive plants found by scouts. These plants often pulse with a sickly green light that contrasts with the blue glow of the village.

## Current Events
The Apothecary is currently overwhelmed by a surge in "Prismatic Fever," a minor but debilitating illness affecting newly arrived adventurers who haven't yet acclimated to the Canopy’s spores. Supplies of "Clear-Lung Tincture" are running low, and the shop is offering a bounty for fresh **Sun-Dappled Moss** found near the river-mill. Additionally, the owner has noted that the plants in the **Mutated Nursery** have begun to grow at an accelerated rate, leaning toward the direction of the (as yet undiscovered) **Verdant Hollow**.

## History
Founded by a group of refugee alchemists, the Garden was one of the first sites in Springrun to prove that the "New World" could support complex medicine. It has evolved from a simple patch of dirt into a sophisticated research station, fueled by the village's abundance of **Primal Crystals**. Over twenty years, it has become a neutral ground where even the most grizzled miners come to seek relief from the "Silent Time Bomb" of crystal radiation.

## Notes
**Lore Hook:** The apothecary is the only person in town who won't be surprised when the players describe the "Dust" dropped by creatures; they have already hypothesized that creatures in this world are becoming "condensed mana".
