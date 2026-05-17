---
tags:  
- "#Location"  
- "#POI"  
art: zz-Attachments/Assets/PlaceholderImage.png  
pronounced: Lanternrest Shrine Plaza  
aliases:  
- The Lantern Plaza  
- Lanternrest  
- The Four Shrines  
poitype:  
- Shrine  
- Plaza  
dominion:  
- "[[Springrun Council]]"  
owner:  
- "[[Sister Elowen Vale]]"  
assistant:  
- "[[Brother Garrik Thorn]]"  
location:  
- "[[Springrun]]"  
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
> The sounds of Springrun seem quieter here.  
>  
> Lanternrest Shrine Plaza occupies a broad stone courtyard nestled between several of the settlement’s oldest buildings, its open design allowing rain, drifting leaves, and filtered canopy light to move freely through the space. Rather than a single temple, the plaza contains a circle of modest shrines surrounding a central flame basin filled with softly glowing crystal fragments. Incense smoke curls lazily into the damp air while prayer ribbons flutter gently from wooden posts and hanging branches overhead.  
>  
> Four shrines stand prominently around the plaza. One is built of polished river stone wrapped in living vines and dedicated to Sylvan. Another bears travel-worn carvings, hanging charms, and weathered boots left in offering to Liriel. A third shrine, dedicated to Aegis, resembles a fortified alcove lined with warding symbols and old shields marked by years of repair. The last shrine is fashioned from carefully set crystal and brass latticework honoring Arcarios, its surfaces humming faintly with restrained magical energy.  
>  
> Settlers, hunters, travelers, and Seekers move quietly through the plaza. Some stop to pray. Others leave offerings before departing into the wilderness. A few simply linger near the warmth of the central flame basin, as though reassured by the presence of something enduring amidst the dangers surrounding Springrun.

> [!metadata|map]- Map
> ```zoommap
> image: zz-Attachments/Assets/MapPlaceholder.png
> # markers is optional; defaults to <image>.markers.json
> # markers: Assets/Map.jpg.markers.json
> 
> # Map view limits
> minZoom: 0.3
> maxZoom: 8
> 
> # Size & interactivity
> height: 760px
> width: 30%
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

> [!kirk|info] Prompt (Remove me)
> Provide an overview encapsulating the essence of this place. What defines its significance? What key events or recurring activities shape its Identity? Explore the heart of this location, capturing its essence in the unfolding pages of history.

## Keyed Locations
Lanternrest Shrine Plaza serves as the spiritual heart of Springrun, though it lacks the grandeur or hierarchy found in larger settlements. Built during the town’s earliest years, the plaza was designed as a shared place of refuge and devotion for a community too small and too desperate to support competing temples. Rather than elevating a single faith above the others, the settlers established a communal sacred space dedicated to the gods most closely tied to survival on the frontier.  
  
The plaza contains four permanent shrines dedicated to [[Sylvan]], [[Liriel]], [[Aegis]], and [[Arcarios]]. Together, they reflect the values that define Springrun itself: resilience, exploration, vigilance, and adaptation. Travelers departing into the Prismatic Canopy often visit multiple shrines before setting out, seeking luck, protection, favorable weather, or magical stability depending on the nature of their journey.  
  
Unlike formal temples in larger cities, Lanternrest is deeply practical. Priests here spend as much time tending wounds, reinforcing warding stones, blessing expeditions, counseling frightened settlers, and organizing relief efforts as they do conducting ceremonies. Faith in Springrun is not distant or ceremonial; it is woven directly into daily survival.  
  
The plaza’s central flame basin, known locally as the Vigil Flame, burns continuously using carefully stabilized crystal embers maintained by attendants of Arcarios. The flame serves both symbolic and practical purposes, offering warmth during storms, light during nighttime gatherings, and reassurance that Springrun still stands against the darkness of the surrounding wilds.  
  
Though the plaza remains peaceful most days, its atmosphere shifts noticeably whenever expeditions fail to return. During such times, prayer ribbons multiply rapidly across the plaza, and the Vigil Flame is fed with additional crystal dust until it burns bright enough to be seen from the outer roads.  
  
## Current Events
Lanternrest has seen a sharp increase in visitors over the past several weeks as rumors spread regarding strange disturbances deeper within the Prismatic Canopy. More travelers than usual are seeking blessings before expeditions, while anxious settlers gather nightly around the Vigil Flame exchanging stories of vanished hunters, unnatural lights beneath the trees, and increasingly erratic wildlife.  
  
The attendants of [[Aegis]] have quietly reinforced several warding stones positioned near the entrances to Springrun after multiple reports of unsettling dreams and animals refusing to approach certain trails after sunset. While the priests publicly dismiss talk of curses or corruption, the frequency of these precautions has not gone unnoticed.  
  
Meanwhile, Sister Elowen Vale has grown concerned about subtle fluctuations within the Vigil Flame itself. The crystal embers occasionally pulse with unusual colors during periods of heavy rain or after certain prospecting teams return from the deeper forest. Priests of [[Arcarios]] believe the disturbances may be tied to unstable magical resonance somewhere beyond the settlement, though no one yet understands the true cause.  
  
The shrine dedicated to [[Liriel]] has also become increasingly cluttered with offerings left by desperate families seeking the safe return of loved ones. Boots, compass charms, weather tokens, scraps of maps, and hand-written prayers now crowd the shrine’s alcoves to such a degree that attendants have begun carefully storing older offerings in nearby cabinets.  
  
## History
Lanternrest Shrine Plaza predates most of modern Springrun. In the settlement’s earliest days, before proper roads or permanent defenses had been established, survivors and laborers gathered around a simple communal firepit near the riverbank to pray for safety during violent storms and dangerous expeditions into the surrounding wilderness.  
  
As the settlement slowly stabilized, the original firepit was expanded into a formal plaza jointly maintained by several small faith groups unwilling to divide the fragile community along religious lines. Rather than competing for influence, the priests agreed to create a shared sanctuary reflecting the realities of frontier life. Each shrine was built by volunteers from the settlement using locally sourced materials and symbolic designs tied to the respective faiths.  
  
The shrine to [[Sylvan]] was the first completed structure, erected after a season of severe flooding nearly destroyed the early settlement. The shrine of [[Aegis]] followed soon after when Springrun survived a series of attacks by displaced creatures emerging from the canopy. The shrines of [[Liriel]] and [[Arcarios]] were added later as exploration, trade, and crystal infrastructure became increasingly central to Springrun’s identity.  
  
The Vigil Flame itself has become one of Springrun’s enduring symbols. During the settlement’s harshest winter, when supply lines collapsed and much of the town feared abandonment, the flame reportedly burned uninterrupted for nearly twenty days despite relentless storms and dwindling fuel. Since then, locals have regarded its continued presence as proof that Springrun will endure no matter how dangerous the frontier becomes.  
  
## Notes  
  
- Lanternrest should feel calm, communal, and deeply tied to Springrun’s identity as a frontier settlement.  
- The plaza is intentionally humble compared to temples in larger cities.  
- The Vigil Flame acts as both symbolic beacon and subtle magical stabilizer.  
- The shrines should show constant signs of use: ribbons, candles, muddy footprints, offerings, repaired carvings, and weather wear.  
- The location is ideal for:  
- receiving blessings before expeditions  
- gathering rumors  
- memorial services  
- community meetings during crises  
- interactions with traveling priests or scholars  
- Sister Elowen Vale should be compassionate but increasingly worried about the magical disturbances surrounding Springrun.  
- Brother Garrik Thorn oversees many of the plaza’s physical wards and defenses and is suspicious of unexplained magical phenomena.  
- Lanternrest can serve as a recurring emotional anchor for the campaign as dangers within the Prismatic Canopy escalate.