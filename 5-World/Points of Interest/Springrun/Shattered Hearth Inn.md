---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/shattered-hearth-inn.png
pronounced: "Shat-erd Herth"
aliases:
  - The Hearth
  - The Crystal Rest
poitype: Inn & Tavern
dominion: "[[Springrun Council]]"
owner: "[[Kaelen Vane]]" 
assistant: 
- "[[Elara Whitethistle]]" 
- "[[Shards]]"
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
> Near the Haunted Bridge, the scent of woodsmoke and roasting meat pulls you toward a large, two-story structure that glows with a warm, steady blue light. This is the Shattered Hearth Inn. Unlike the flickering torches of the old world, the Hearth is illuminated by large, polished Primal Crystals embedded in the ceiling beams and doorframes. Despite its name, the inn feels like the most stable place in the Prismatic Canopy—a sanctuary of modern comfort in a fractured land.

> [!metadata|map]- Map
> ```zoommap
> image: zz-Attachments/shattered-hearth-inn.png
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
The Shattered Hearth Inn is the premier social and lodging hub for Springrun’s residents and the many "pioneers" answering the city's summons. It serves as a living museum of Springrun’s philosophy: that the tools which broke the world can be used to warm it. The building is famous for its "Ever-Warm Hearth," a massive central fireplace that uses a controlled Primal Crystal to provide heat without the need for constant fueling. It is the primary location for explorers to trade rumors about the "Deep Wilds" and for local miners to celebrate a successful crystal harvest.

## Keyed Locations
- **The Crystal Taproom:** The ground floor is a sprawling common room. The tables are made of thick, local hardwood, but the center of each table features an inset, low-glow Primal Crystal to provide reading light for surveyors and map-makers.
- **The Ever-Warm Hearth:** A grand fireplace made of river stone from the Ember Bank. Instead of wood, it houses a Primal Crystal that radiates a steady, comforting warmth.
- **The Surveyor’s Lofts:** The second floor contains several private rooms. These are highly sought after by the "Aetherian Prospectors" and the party, as they offer the only secure, crystal-heated lodging within leagues of the Verdant Hollow.
- **The Cellar (The Damp-Deep):** Located partially below the river line, the cellar is used for aging local spirits and storing rations. It is kept remarkably dry thanks to several moisture-absorbing inert crystals woven into the foundation.

### Notable Dishes
- **Ember-Seared Glade-Boar:** Thick steaks from the aggressive forest fauna, seared to perfection on stone slabs heated by the "Ever-Warm Hearth’s" central Primal Crystal.
- **Resilience Stew:** A hearty, slow-cooked root vegetable stew designed to symbolize the endurance of survivors; it is kept at a constant simmer using low-output crystal warmth.
- **Canopy Fruit Tart:** A pastry featuring the "new and different" flora found by scouts in the Prismatic Canopy, known for its vibrant colors and slightly buzzing aftertaste.

### Notable Beverages
- **Blue-Glow Ale:** A local favorite served in heavy glass mugs; while the ale itself is mundane, the mugs are chilled via small, heat-absorbing inert crystals kept in the cellar.
- **Shattered Spices Mead:** A high-proof mead infused with rare spices discovered in the Deep Wilds, often used by pioneers to toast to a "successful incursion".
- **Crystal-Clear Water:** Springrun’s pride, filtered through pulverized Primal Crystal beds at the river-mill to ensure it is free from the strange distortions common in the surrounding wilds.

## Current Events
The Inn is currently at maximum capacity as explorers and sellswords from across the canopy arrive to answer the Council's vague but lucrative summons. Heated arguments frequently erupt at the High-Glow Tables between local miners and the new arrivals; the locals believe the "distortions" in the forest are just unmapped crystal veins, while the newcomers suspect something far more ancient and dangerous is waking up. Kaelen has noted that the **Ever-Warm Hearth** and the taproom lanterns have begun to pulse with a low, rhythmic thrumming that doesn't match the steady frequency of the **Energy Grid Substation**, causing many to fear the forest is starting to "bleed" into the village's power source.

## History
The Shattered Hearth was one of the first permanent structures completed after the founding of Springrun. It was built by the original survivors of the Shattering who wanted to prove that civilization didn't need to be hidden behind walls to survive. The central crystal was donated by the first successful mining expedition into the Ember Bank, and it has remained lit ever since, symbolizing the town's resilience and its "harmony between magic and technology".

## Notes
- **Atmosphere:** Use descriptions of the "unnatural blue glow" to contrast with the "pre-historic green" the players will find in the Hollow.
- **Mechanic:** Because the inn uses Primal Crystals, it is a "Stable Zone." If the party brings "Dungeon-trait" items or Creature Cores into the inn, the local crystals might react visibly to the alien energy.
