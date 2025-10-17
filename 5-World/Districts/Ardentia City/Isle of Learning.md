---
tags:
  - "#Location"
  - "#District"
art: zz_Attachments/Isle of Learning.png
pronounced: Isle of Learning
districttype:
  - Educational
  - Residential
  - Cultural
location:
  - "[[Ardentia City]]"
  - "[[Arcane Apothecary]]"
  - "[[Codex Arcanum]]"
  - "[[Terramore Academy]]"
  - "[[Spellweaver's Sanctuary]]"
  - "[[Aetherial Cathedral]]"
aliases:
  - The Isle
organization:
  - "[[Arcane Conclave]]"
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
> **Pronounced** |  `INPUT[textArea:pronounced]`
> **Aliases** | `INPUT[list:aliases]` |
> **Type** | `INPUT[DistrictType][inlineListSuggester:districttype]` |
> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
> **Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |

> [!infobox]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Type** | `VIEW[{districttype}][text]` |
> **Location** | `VIEW[{location}][link]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

> [!recite]- Introduction
> A script for the GM to read when the party arrive to this location for the first time.

> [!metadata|map]- Map
> ```leaflet
> id: Ardentia_City
> image: [[Ardentia City Map.png]]
> lock: true
> recenter: true
> noScrollZoom: false
> ### Use this [Copy of Obsidian Leaflet Bounds Calculator - Google Sheets](https://docs.google.com/spreadsheets/d/1ogWXlChwcNa5qnl0P1M-DDDKhLatiazNU2XVCMOwzyo/edit?gid=0#gid=0) to work out your map's bounds.
> bounds: [[0, 0], [7.45, 7.45]]
> height: 1000px
> width: 88%
> lat: 5.72
> long: 2.3
> minZoom: 7
> maxZoom: 18
> defaultZoom: 8
> zoomDelta: 1
> unit: feet
> scale: 500
> darkMode: false
> ```

> [!metadata|location]- Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(organization), ", ") AS "Organization(s)"
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "POI")
> SORT tags DESC, poitype ASC, file.name ASC

> [!metadata|organizations]- Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "Organization")
> SORT tags DESC, file.name ASC

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

> [!kirk|info] Overview
> The Isle of Learning is the intellectual and magical heart of [[Ardentia City]], a city-state governed by mages. This district serves as a hub of magical education, research, and experimentation, drawing scholars, wizards, and aspiring magi from across the realm. It is a place where the brightest minds converge to learn, teach, and innovate in the magical arts.  It is characterized by a vibrant atmosphere of academic pursuit and mystical exploration, playing a critical role in Ardentia’s governance and cultural identity. The district fosters a culture of intellectual curiosity, rigorous study, and open exchange of magical knowledge. As a center of learning, it holds considerable influence over the policies and direction of the mage-ocracy, as many of the city's leaders and policymakers are also professors, researchers, or alumni of the district's institutions.
> 
> The isle features a blend of traditional arcane architecture with elements of modern design. Ethereal towers, tall and slender spires with glowing runes etched into their surfaces, often built from marble and crystal dot the landscape. Many of these towers serve as classrooms, laboratories, or faculty offices.  Several buildings, are enchanted to float a few feet off the ground and are accessed by magical lifts or spiraling staircases.  Living Quarters for faculty and students, are constructed from enchanted wood, stone and crystal, often with hidden courtyards, small gardens, or personal magical wards.
> 
> Capture the essence of this district within the larger settlement. Define its specific characteristics, purpose, and identity. Explore the district's primary function, whether it's residential, commercial, industrial, cultural, or recreational. Detail the demographics, architectural style, notable landmarks, and any unique cultural aspects that distinguish this district. How does this district contribute to the overall landscape and vitality of the settlement?

## Keyed Locations

> [!kirk|info] Locations
> **[[Terramore Academy]]:** The main institution of magical learning, consisting of a central grand hall surrounded by smaller buildings scattered around the Isle of Learning, each dedicated to different types of magic and magical endeavors. The central hall is a massive structure with a domed ceiling enchanted to display celestial events or arcane symbols.
>  
>  **[[Aetherial Cathedral]]:** A majestic structure with high, arched entrances and stained glass windows depicting scenes of magical mastery.  The building itself is built from crystal which has been made opaque. The temple serves both as a place of worship for the god of magic, [[Arcarios]] and a repository for powerful magical artifacts.
>  
>  **Airship Dock:** A small yet busy dock at the northern edge of the district, where airships ferry students, scholars, and goods. It’s an essential link between [[Ardentia City]] and other regions, emphasizing the district’s role in the exchange of magical knowledge.
>  
>  **Mystic Market:** A small but bustling market square catering to the local students and teachers where vendors sell spell components, enchanted objects, potions, and other arcane goods. It is known for its lively atmosphere and the occasional pop-up stall by visiting mages or adventurers selling rare finds.  The market is filled with kiosks and small shops.  The architecture here is colorful and lively, with magical lights and animated signs.
>  
>  **Faculty Row:** A line of stately homes many designed from opaque crystal and small estates where the headmaster, deans, and senior faculty members reside. These homes are heavily warded and often exhibit unique magical defenses or peculiarities, like gardens that bloom only at night or fountains that flow with liquid light.
>  
>  **[[Codex Arcanum]]:** [[Arcane Conclave|The Conclave]]'s repository of knowledge, is a vast library guarded by spectral owls. Its shelves hold grimoires, scrolls, and forbidden texts.
>  
>  **[[Spellweaver's Sanctuary]]**: A hidden tower where novice spellcasters seek guidance, learning to weave magic without unraveling reality. Here, they receive services such as spell refinement, astral projection training, and potion safety.
>  
>  Develop detailed descriptions for the keyed locations within the district. Define each area, within the district with distinct characteristics. Include information on the purpose, size, architectural style, notable features, and potential interaction within each area. Describe the ambiance, significance, potential activities, or any interactive elements that might engage the inhabitants or visitors. How does each keyed location contribute to the district's identity and offer potential for storytelling or exploration?

### Example


## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within this district. What's currently unfolding within its bounds? Describe ongoing developments, changes, or challenges affecting the district. Are there new projects, social shifts, economic changes, or cultural movements making waves? Furthermore, what are the immediate concerns or goals specific to this district? How are these current events shaping the daily life and future trajectory of this area within the larger settlement?

## History

> [!kirk|info] Prompt (Remove me)
> Uncover the historical narrative woven into the fabric of this district. Trace its origins, significant events, and transformations that have shaped its identity over time. What were the founding elements that led to the establishment of this district? Detail the key milestones, shifts in demographics, architectural changes, or impactful events that have influenced its development. How has the district evolved from its inception to its present-day form, and what historical legacy does it carry within the settlement?

## Notes
**Demographics:**
- **Primary Residents:** Mages, scholars, students of magic, faculty members, researchers, and arcane artisans.
- **Secondary Residents:** Traders, innkeepers, craftsmen specializing in magical goods and services, temple caretakers, and airship dock workers.
- **Visitors:** Pilgrims to the Temple of [[Arcarios]], foreign dignitaries, emissaries from other mage-ocracies or magical schools, and adventurers seeking knowledge or training.

**Cultural Aspects:**
- **Rituals and Ceremonies:** The district hosts numerous magical ceremonies, including seasonal spellcasting events, graduation rites where students demonstrate their prowess, and summoning festivals.
- **Research Collaboration:** It is common for scholars and mages to form research circles or guilds, pooling resources to delve into complex magical studies.
- **Public Lectures and Debates:** Regular public lectures and magical debates occur in open squares or within the [[Terramore Academy]], drawing crowds from all over the city.
- **Living Knowledge:** Many of the district's buildings are sentient or house libraries with books that speak, walls that record conversations, and floors that respond to emotional states.