---
tags:
  - "#Location"
  - "#Settlement"
art: zz-Attachments/springrun.png
language: Common
pronounced: "Spring-run"
aliases:
  - The New Light
  - The Hope of the Canopy
settlementtype: Frontier Village
terrain: Temperate Rainforest / Prismatic Canopy
defence: Crystal-Infused Watchtowers, Scouting Parties
location: "[[Prismatic Canopy]]"
dominion: "[[Springrun Council]]"
ruler: "[[TBD Council Head]]"
leader: "[[TBD Lead Surveyor]]"
organization:
  - "[[Springrun Council]]"
  - "[[Aetherian Prospectors]]"
governmenttype: Ambitious Technocracy / Council
population: "930"
religion: "[[Aetherian Resilience / Nature Worship]]"
import:
  - "[[Raw Ores]]"
  - "[[Textiles]]"
  - "[[Experienced Labor]]"
export:
  - "[[Primal Crystals]]"
  - "[[Rare Flora]]"
  - "[[Survey Data]]"
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
>> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
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
>> **Type** | `INPUT[SettlementType][:settlementtype]` |
>> **Terrain** | `INPUT[Terrain][inlineListSuggester:terrain]` |
>> **Defenses** | `INPUT[Defence][:defence]` |
>> **Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |
>> **Languages** | `INPUT[Language][inlineListSuggester:Language]` |
>
>> [!metadata|metadataoption]- Demographics
>> #### Demographics
>>  |
>> ---|---|
>> **Dominion** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):dominion]` |
>> **Rulers** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):ruler]` |
>> **Leaders** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):leader]` |
>> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Government Type** | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` |
>> **Population** |  `INPUT[textArea:population]` |
>> **Religions**| `INPUT[Religion][:religion]` |
>
>> [!metadata|metadataoption]- Commerce
>> #### Commerce
>>  |
>> ---|---|
>> **Imports** | `INPUT[Goods][inlineListSuggester:import]` |
>> **Exports** | `INPUT[Goods][inlineListSuggester:export]` |

> [!infobox]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Type** | `VIEW[{settlementtype}][text]` |
> **Terrain** | `VIEW[{terrain}][text]` |
> **Defenses** | `VIEW[{defence}]` |
> **Location** | `VIEW[{location}][link]` |
> ###### Demographics
>  |
> ---|---|
> **Rulers** | `VIEW[{ruler}][link]` |
> **Leaders** | `VIEW[{leader}][link]` |
> **Dominion** | `VIEW[{dominion}][link]` |
> **Government Type** | `VIEW[{governmenttype}][text]` |
> **Population** | `VIEW[{population}][text]` |
> ###### Commerce
>  |
> ---|---|
> **Imports** | `VIEW[{import}][text]` |
> **Exports** | `VIEW[{export}][text]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>
> [!recite]- Introduction
> Springrun greets you not with walls, but with the rushing sound of the river and the hum of crystal lanterns. To the west, the sturdiness of Pearl Hall speaks to an ambition that refuses to hide. To the east, the Haunted Bridge leads toward a cluster of homes and the open space of The Green. It is a village built on the edge of the world, illuminated by a light that feels both revolutionary and fragile.

> [!metadata|map]- Map
> ```zoommap
> image: zz-Attachments/springrun.png
> # markers is optional; defaults to <image>.markers.json
> # markers: Assets/Map.jpg.markers.json
> 
> # Map view limits
> minZoom: 0.3
> maxZoom: 8
> 
> # Size & interactivity
> height: 1040px
> width: 55%
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
>   zoom: 0.2
>   centerX: 0.486849
>   centerY: 0.510427
> ```

> [!metadata|district]- Districts
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(districttype, ", ") AS Type
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "District")
> SORT districttype ASC, file.name ASC
> ```

> [!metadata|location]- Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(location), ", ") AS "Location", join(link(organization), ", ") AS "Organization(s)"
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "POI")
> SORT tags DESC, poitype ASC, file.name ASC
> ```

> [!metadata|organizations]- Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "Organization")
> SORT tags DESC, file.name ASC
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
Springrun is a burgeoning frontier settlement defined by its refusal to hide from the scars of the Shattering. Built upon the ambitious philosophy that a broken world is simply one waiting to be rebuilt, the village serves as a beacon of progress within the dense, shifting foliage of the Prismatic Canopy. Unlike the rigid, defensive structure of its rival, Castlemere, Springrun is open and adaptive.

The settlement is physically split by a rushing river, centered around a growing **Energy Grid Substation** on the **Ember Bank** and the vibrant **Plaza of Resilience** within **The Green**. The architecture is a blend of pragmatic frontier woodcraft and advanced crystal integration, with **Primal Crystals** woven into the watchtowers and major buildings—like the imposing **Pearl Hall**—to provide light, heat, and structural stability. It is a town of risks and rewards, fueled by the harvesting of crystals and an insatiable curiosity about the unknown depths of the forest.

## Current Events
Life in Springrun is currently charged with a mixture of excitement and growing unease. The village has recently issued a summons for skilled adventurers to assist in exploring the nearby wilds, leading to the arrival of the party. While the **Primal Crystal** mining operations are booming, rumors have begun to circulate regarding strange "distortions" in the natural world near a site now known as the **Verdant Hollow**. These distortions include creatures behaving with unprecedented aggression and flora that does not match pre-Shattering records. Internally, the young leadership faces minor strife as various factions debate whether to double down on crystal technology or pivot toward investigating the strange new "Dungeon" phenomenon.

## History
Founded roughly 20 years after the Shattering, Springrun began as a small camp of survivors who chose to push outward rather than remain behind the walls of older remnants. Its founding was driven by the discovery of rich **Primal Crystal** veins in the area, which allowed the settlers to create sustainable energy solutions like lighting and heating in a hostile environment. Over the last two decades, it has grown into a significant village of 930 residents, symbolizing the "harmony between magic and technology" that defines the new era of Aetheria. Its history is short but marked by a bold spirit of innovation, having successfully integrated crystals into its cultural fabric through rituals, art, and the construction of the **Shattered Hearth Inn**.

## Notes
- **The "Level 0" State:** At the start of the campaign, the local smithy and apothecary are not yet equipped to handle **Creature Cores** or **Dungeon Traits**.
- **Visual Cues:** Emphasize the steady, blue glow of the **Primal Crystals** in the watchtowers and streetlights to contrast with the chaotic, shifting energies the players will soon find in the Hollow.
- **The Summons:** The players are here because Springrun’s leadership is overconfident and believes the Dungeon is simply the "next great resource" to be harnessed.