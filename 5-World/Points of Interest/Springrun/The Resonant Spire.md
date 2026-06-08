---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/Assets/PlaceholderImage.png
pronounced: The Resonant Spire
aliases:
  - Resonant Spire
  - The Spire
  - Vael’s Workshop
poitype:
  - Workshop
  - Crystalwright
dominion:
  - "[[Springrun Council]]"
owner:
  - "[[Talandra Bael]]"
assistant:
  - "[[Iven Rusk]]"
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
> Long before the workshop itself comes into view, a faint humming vibrates through the damp air like the distant resonance of crystal glass touched by unseen fingers.  
>  
> The Resonant Spire rises near Springrun’s Energy Grid Substation, its narrow tower of dark timber and reinforced crystal supports leaning slightly beneath the weight of countless modifications and repairs. Copper wiring, suspended crystal rods, glass conduits, and dangling measurement charms crisscross the exterior walls in carefully organized chaos. Soft blue and amber lights pulse behind shuttered windows while thin streams of harmless static occasionally dance between exposed crystal nodes mounted near the roofline.  
>  
> The smell here is unlike the rest of Springrun. Hot metal, ozone, oil, wet stone, and faintly sweet crystal dust mingle together beneath the constant backdrop of clicking tools and the low rhythmic thrum of active resonance chambers somewhere deeper inside the structure.  
>  
> A weathered wooden sign near the entrance reads:  
>  
> **THE RESONANT SPIRE**  
>  
> *Crystal Stabilization, Conduit Repair, Resonance Diagnostics*  
>  
> Beneath it, in much smaller lettering:  
>  
> *“No unstable crystal growths beyond this point unless wrapped and declared.”*

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
The Resonant Spire serves as Springrun’s primary crystalwright workshop and one of the settlement’s most strategically important locations. Operated by [[Talandra Bael]], the workshop specializes in the maintenance, stabilization, repair, and study of Aetherium Crystal infrastructure used throughout the settlement. While Springrun lacks the advanced magical engineering capabilities of larger city-states like [[Ardentia City]], the Spire ensures the town’s growing crystal systems remain functional and, more importantly, stable.  
  
The workshop maintains portions of Springrun’s Energy Grid Substation, repairs damaged lantern crystals, reinforces conduit housings, calibrates resonance anchors, and evaluates potentially dangerous crystal formations recovered from the surrounding wilderness. Talandra’s work has become increasingly essential as Springrun expands deeper into the unstable environment surrounding the Prismatic Canopy.  
  
Unlike artificers or arcane scholars from major academies, Talandra approaches crystal technology with practical caution rather than academic ambition. She views Aetherium as powerful but fundamentally volatile, deserving careful respect rather than reckless experimentation. The workshop reflects this philosophy. Every device is labeled, every crystal logged, and every active chamber isolated behind protective barriers designed to contain resonance failures should they occur.  
  
The Spire also functions as a quiet center for information regarding strange magical disturbances in the region. Prospectors, scouts, hunters, and Seekers frequently bring unusual crystal fragments or resonance-tainted objects to Talandra for inspection. Though she rarely speaks openly about her concerns, the increasing frequency of abnormal crystal behavior has left her deeply unsettled.  
  
Despite its intimidating appearance, the Resonant Spire remains one of Springrun’s most trusted institutions. Many settlers sleep easier knowing someone is constantly monitoring the town’s growing dependence on crystal-powered infrastructure.  
  
## Current Events  
  
The Resonant Spire has been operating nearly nonstop in recent weeks following a series of unusual resonance fluctuations affecting portions of Springrun’s crystal infrastructure. Lantern systems near the outer districts occasionally flicker without warning, resonance anchors emit tones at irregular intervals, and several stabilized crystals brought back from the deeper canopy have exhibited faint internal movement despite being considered inert.  
  
Talandra Vael has become increasingly concerned that the disturbances are not random. Multiple crystal samples recovered from separate expeditions display nearly identical resonance signatures despite originating from distant portions of the forest. More troubling still, some crystals appear to react subtly to the presence of certain individuals or magical effects before returning to dormancy.  
  
Meanwhile, Iven Rusk has privately reported hearing faint whispers while cleaning one of the lower resonance chambers after midnight. Talandra publicly dismissed the claim as exhaustion and crystal exposure, but she has since restricted access to several workshop areas after dark.  
  
The workshop is also under mounting pressure from the Springrun Council to expand the settlement’s energy infrastructure as the town continues growing. Talandra strongly opposes rapid expansion without additional safeguards, warning that improperly stabilized systems could become catastrophic if overloaded. Her caution has begun creating tension between the practical needs of the settlement and fears about pushing crystal technology too quickly.  
  
## History  
  
The Resonant Spire began as a modest repair shed attached to Springrun’s original substation platform during the settlement’s earliest expansion efforts. At the time, Springrun possessed only a handful of stabilized crystals powering basic lanterns, heating stones, and defensive wards. Most maintenance work involved replacing cracked housings, cleaning conduits, and preventing uncontrolled energy buildup.  
  
Everything changed when [[Talandra Bael]] arrived several years after the settlement’s founding. Formerly associated with a small crystal engineering collective tied loosely to scholars from [[Ardentia City]], Talandra left after growing disillusioned with increasingly reckless experimentation surrounding large-scale crystal development. Seeking distance from ambitious theorists and dangerous research, she instead traveled to Springrun where practical necessity outweighed political prestige.  
  
Under Talandra’s guidance, the repair shed gradually evolved into the Resonant Spire. She introduced standardized stabilization methods, safer conduit designs, resonance dampening techniques, and rigorous inspection procedures that dramatically improved the settlement’s infrastructure reliability. While some settlers initially viewed her obsessive caution as excessive, several potentially disastrous crystal failures were quietly prevented due to her preventative measures.  
  
Over time, the Spire became one of the settlement’s most respected and quietly feared locations. Settlers understand that the workshop protects Springrun from dangers most barely comprehend. Even those who distrust crystal technology acknowledge that without Talandra’s expertise, much of Springrun’s infrastructure would likely fail—or worse.  
  
Talandra herself rarely discusses her past in detail, though rumors persist that she witnessed a catastrophic resonance collapse elsewhere before arriving in Springrun. Whether true or not, her relentless emphasis on containment and stability suggests lessons learned at significant cost.  
  
## Notes  
  
- The Resonant Spire should feel simultaneously fascinating and slightly dangerous.  
- Crystal technology in Springrun is emerging, practical, and imperfect—not industrialized or fully understood.  
- The workshop is closer to a frontier engineering laboratory than a magical item shop.  
- The constant low hum of resonance systems should define the atmosphere.  
- The location works well for:  
- identifying strange crystal phenomena  
- magical diagnostics  
- investigating resonance anomalies  
- obtaining stabilized lanterns or conduit repairs  
- introducing lore regarding Aetherium instability  
- foreshadowing larger magical threats  
- Talandra Vael should come across as highly intelligent, practical, cautious, and quietly exhausted.  
- Iven Rusk is competent but increasingly unnerved by recent events within the workshop.  
- The workshop should avoid feeling “steampunk.” Its technology is magical, unstable, and still primitive in many respects.  
- The Resonant Spire can become increasingly important as the campaign reveals more about Dungeons, crystal resonance, and dimensional instability.## Overview  
  