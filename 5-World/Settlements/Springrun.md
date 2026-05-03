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
> The approach to Springrun feels unlike any other settlement in the region. Long before the village itself comes into view, the distant glow of blue-white crystal lanterns can already be seen shimmering through the trees of the Prismatic Canopy. The sound of rushing water and hammering workshops carries on the wind alongside laughter, music, and the steady hum of activity.
> 
> Springrun sprawls along both sides of a fast-moving river, connected by timber bridges reinforced with gleaming crystal braces. Much of the settlement appears newly built. Fresh timber, colorful awnings, and crystal-lit watchtowers rise amidst the vibrant foliage of the canopy. Workers move constantly through the streets carrying lumber, ore, and strange crystalline devices whose purposes are not immediately obvious. The village feels alive in a way few frontier settlements do. Hunters return from the forest with exotic game. Prospectors barter over glittering crystal fragments in crowded market stalls.
> 
> Yet beneath the optimism lies tension. Scouts returning from deeper within the forest speak in uneasy tones about strange disturbances spreading through the canopy. Trails vanish. Creatures behave unpredictably. Some travelers claim the forest itself feels different.
> 
> Still, few in Springrun speak of fear for long. To many here, the unknown is not something to hide from. It is an opportunity waiting to be claimed.

> [!metadata|map]- Map
> ```zoommap
> image: zz-Attachments/springrun-map.png
> # markers is optional; defaults to <image>.markers.json
> # markers: Assets/Map.jpg.markers.json
> 
> # Map view limits
> minZoom: 0.3
> maxZoom: 8
> 
> # Size & interactivity
> height: 1040px
> width: 75%
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
Springrun is a burgeoning frontier settlement defined by its refusal to retreat from the scars of the Sundering. Built upon the belief that a broken world is simply one waiting to be rebuilt, the village has rapidly grown into one of the most ambitious settlements bordering the Prismatic Canopy.

Unlike the rigid, defensive structure of [[Castlemere]], Springrun embraces adaptability and expansion. The settlement is physically divided by a rushing river, with major districts spread across both banks and connected by reinforced wooden bridges illuminated by softly glowing Primal Crystals. The settlement’s architecture blends practical frontier construction with experimental crystal integration. Crystal-powered lanterns line the streets, stabilized crystal pylons reinforce important structures, and workshops throughout the village continually test new applications for harvested Primal Crystals. This spirit of experimentation defines much of Springrun’s culture. At the heart of the village lies the Plaza of Resilience, a bustling public square where merchants, explorers, hunters, and prospectors gather beneath vibrant crystal lanterns. Nearby stands Pearl Hall, the settlement’s growing administrative center and symbol of Springrun’s aspirations for the future.

Economically, Springrun thrives on crystal prospecting, lumber, trade caravans, and exploration of the surrounding wilds. Adventurers and opportunists regularly arrive seeking fortune within the canopy, drawn by stories of rare crystals, exotic wildlife, and untapped ruins hidden beneath the shimmering trees.

Though still small compared to older surviving settlements, Springrun’s rapid growth and willingness to embrace the unknown have made it both admired and deeply mistrusted throughout the region.

## Current Events
Life in Springrun is currently filled with equal parts excitement and apprehension. Recent crystal discoveries within the surrounding forest have fueled a surge of trade and migration, bringing new workers, prospectors, and explorers into the settlement almost weekly. Inns remain crowded, workshops operate day and night, and local leaders openly discuss plans for further expansion into the Deep Wilds. 

At the same time, unsettling reports continue to emerge from expeditions returning from deeper within the Prismatic Canopy. Hunters describe animals behaving with unnatural aggression. Scouts report trails changing unexpectedly or leading to places that should not exist. Strange crystalline growths have begun appearing in isolated sections of the forest, unlike any previously cataloged by local prospectors. Most concerning are the rumors surrounding a newly discovered location known as the Verdant Hollow. Though details remain fragmented, multiple expeditions claim to have encountered an unnatural depression deep within the wilderness where navigation becomes unreliable and familiar landmarks seem distorted.

Unlike Castlemere, many within Springrun view these discoveries not as threats, but as opportunities. The settlement’s leadership has quietly begun sponsoring exploratory expeditions into the region, believing whatever lies within the Hollow could redefine the future of the frontier. This growing enthusiasm has only worsened tensions with Castlemere, whose leaders increasingly accuse Springrun of reckless behavior that threatens the stability of the entire region.

## History
Springrun was founded in the chaotic years following the Sundering by survivors, prospectors, and explorers who refused to remain sheltered behind the walls of older settlements. Drawn by the discovery of rich Primal Crystal deposits along the edges of the Prismatic Canopy, these early settlers established a rough riverside camp that gradually evolved into a permanent community.

Unlike many surviving settlements of the era, Springrun was not built upon the remnants of an older city. Nearly everything within the village has been constructed within the last two decades, giving the settlement an atmosphere of raw ambition and constant change. The discovery and practical use of Primal Crystals transformed Springrun from a struggling outpost into a rapidly growing frontier settlement. Local artisans and engineers learned to integrate crystal energy into lighting, heating, reinforcement, and basic infrastructure, allowing the village to thrive despite the dangers of the surrounding wilderness.

This success also shaped Springrun’s culture. Innovation, experimentation, and risk-taking became deeply valued traits among its people. While many older settlements focused on preserving what remained of the old world, Springrun embraced the idea that the future belonged to those willing to explore the unknown. 

In recent years, growing competition with Castlemere over trade routes, crystal resources, and influence throughout the region has created increasing political tension between the two settlements. Though open conflict has not yet erupted, distrust between the communities continues to grow.

## Notes
- Springrun represents optimism, ambition, and adaptability in contrast to Castlemere’s rigid structure and caution.
- The settlement’s leadership views the Verdant Hollow primarily as a potential opportunity rather than an existential threat.
- Crystal technology remains experimental and poorly understood despite its growing integration into daily life.
- Most structures in Springrun are relatively new, giving the village a more vibrant and active appearance than older surviving settlements.
- Blue-glowing Primal Crystals are woven throughout the settlement’s architecture and infrastructure.
- The local smithy, apothecary, and artisans are not yet equipped to understand or utilize Creature Cores or Dungeon-related materials at the beginning of the campaign.
- Several factions within Springrun disagree on how aggressively the settlement should pursue exploration of the Deep Wilds.
- Many citizens view Castlemere as fearful, stagnant, and overly controlling, while Castlemere sees Springrun as dangerously reckless.