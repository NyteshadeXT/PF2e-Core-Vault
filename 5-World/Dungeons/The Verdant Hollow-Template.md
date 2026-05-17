---
tags:
  - "#Location"
  - "#Dungeon"
art: zz-Attachments/verdant-hollow.png
pronounced: "VAIR-duhnt HOL-oh"
aliases:
  - The Hollow
  - The Green Maw
dungeon_rank: Lesser Dungeon
dungeon_type: Living Wilderness
status: Active
seed_status: Unclaimed
attunement: Life, Growth, Hunger
location: Deep Wilds of the Prismatic Canopy
region: Prismatic Canopy
discovered_by: Unknown
controlled_by: None
associated_factions:
  - [[Springrun Council]]
  - [[Dungeon Seekers Guild]]
  - [[Arcane Exchange Consortium]]
entry_condition: Open
danger_level: Moderate
recommended_level: 1-5
resonance_traits:
  - Growth
  - Regeneration
  - Consumption
  - Adaptation
environment_tags:
  - Jungle
  - Overgrowth
  - Wetlands
  - Bioluminescence
  - Living Terrain
instability_rating: Low
theme: Life flourishing beyond natural balance
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
>> **Dungeon Rank** | `INPUT[SettlementType][:settlementtype]` |
>> **Dungeon Type** | `INPUT[SettlementType][:settlementtype]` |
>> **Status** | `INPUT[Status][:status]` |
>> **Attunement** | `INPUT[attunement][inlineListSuggester:attunement]` |
>> **Defenses** | `INPUT[Defence][:defence]` |
>> **Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |
>> **Controlled By** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Associated Factions** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>
>> [!metadata|metadataoption]- Demographics
>> #### Demographics
>>  |
>> ---|---|
>> **Entry Condition** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):dominion]` |
>> **Danger Level** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):ruler]` |
>> **Recommended Level** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):leader]` |
>> **Resonance Traits** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Environment** | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` |
>> **Instability Rating** |  `INPUT[textArea:population]` |
>> **Theme**| `INPUT[Religion][:religion]` |

> [!infobox]
> ##  `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Dungeon Profile
>  |
> ---|---|
> **Dungeon Rank** | `VIEW[{dungeon_rank}][text]` |
> **Dungeon Type** | `VIEW[{dungeon_type}][text]` |
> **Status** | `VIEW[{status}][text]` |
> **Seed Status** | `VIEW[{seed_status}][text]` |
> **Resonance** | `VIEW[{dungeon_type}][text]` |
> **Danger Level** | `VIEW[{danger_level}][text]` |
> **Recommended Level** | `VIEW[{recommended_level}][text]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

> [!recite]- Introduction
> A script for the GM to read when the party arrive to this location for the first time.

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

## Introduction
Deep within the shifting wilds of the Prismatic Canopy lies a place where the forest no longer behaves as nature intended. Travelers speak of immense flowers opening beneath moonlight, trees that bleed emerald sap, and creatures swollen with unnatural vitality. At the center of these stories rests The Verdant Hollow, a Dungeon whose entrance appears as a massive root-choked sinkhole descending into impossible wilderness below the earth.

Unlike the cold stone ruins common to many Dungeons, the Hollow feels alive. Warm air rises constantly from within, carrying the scent of wet soil, blooming flowers, and something faintly rotten beneath it all. Adventurers are drawn there not only for treasure, but for the rare alchemical flora, mutated beasts, and essence-reactive materials that cannot be found anywhere else in the world.

## Overview
The Verdant Hollow embodies uncontrolled growth. Every surface within the Dungeon pulses with life accelerated beyond natural limits. Vines creep across stone within minutes, wounds close rapidly on native creatures, and spores drift constantly through the humid air. The Dungeon appears less like a constructed location and more like a living ecosystem attempting to consume and repurpose everything entering it.

The Hollow’s internal structure shifts subtly over time. New roots burst through walls, tunnels collapse beneath expanding growths, and entire chambers may bloom into dense jungles within days. Despite this instability, explorers have identified several recurring regions connected through winding rootways, flooded caverns, and bioluminescent groves.

The Dungeon is especially prized by alchemists, herbalists, cooks, and Chimeracrafters due to the abundance of regenerative plants, mutagenic fungi, and unusual monster organs harvested from creatures altered by the Hollow’s resonance.

## Entrance
The entrance to The Verdant Hollow lies within a heavily overgrown basin several miles from Springrun. Massive trees bend inward around the site as though pulled toward the sinkhole at its center. Thick roots coil around ancient stone arches covered in moss and glowing green runes.

Warm mist rises continuously from the opening, even during cold weather. At night, faint green light pulses from deep below, synchronized with a slow rhythmic vibration felt through the ground.

Local rumors claim the Hollow “learns” from repeated intrusions.

## Dungeon Resonance

The Verdant Hollow is governed by principles of accelerated life, adaptation, and biological dominance.

### Known Resonances
- Organic matter grows rapidly
- Native creatures recover from injuries unusually quickly
- Poison and disease effects become more potent
- Fire spreads unpredictably due to volatile spores and oils
- Corpses are consumed by fungal growth within hours
- Some creatures mutate during prolonged exposure

### Resonance Effects
The Dungeon rewards persistence and punishes stagnation. Creatures native to the Hollow often evolve defensive traits against commonly used tactics. Areas cleared by adventurers rarely remain empty for long, rapidly reclaimed by vegetation or new predators.

Healing magic appears slightly enhanced within the Hollow, though excessive magical healing occasionally causes uncontrolled tissue growth or fungal infections in careless adventurers.

Metal equipment tarnishes quickly in the humid environment, while organic materials exposed to Dungeon energies may become essence-reactive over time.

## Dungeon Ecology

Describe the living ecosystem within the Dungeon.

### Flora
Unique plants, fungi, crystals, or environmental growths.

### Fauna
Native or warped creatures commonly found within.

### Chimeric Life
Rare or unstable entities tied directly to the Dungeon’s Seed or resonance.

### Resource Extraction
Materials adventurers seek from the Dungeon:
- Monster parts
- Crystals
- Herbs
- Metals
- Essence-reactive materials
- Alchemical reagents
- Cooking ingredients
- Magical components

## Layout & Structure

Describe how the Dungeon is organized.

### Traversal Style
- Static mapped structure
- Shifting layout
- Victory Point challenge network
- Layered floors
- Dimensional pockets
- Biome transitions

### Known Regions
List major areas, wings, or biomes.

#### Example Region
- Description
- Threats
- Environmental hazards
- Valuable resources
- Unique mechanics

## Encounters & Hazards

Describe the common dangers adventurers face.

### Common Creatures
- 

### Elite Threats
- 

### Apex Entities
- 

### Environmental Hazards
- 

### Dungeon Events
Random or cyclical phenomena:
- Collapse events
- Resonance surges
- Portal storms
- Hunts
- Dungeon “awakenings”
- Regeneration cycles

## The Seed

Describe the Dungeon Seed and its known or suspected properties.

### Known Properties
- 

### Claimed Seeds
Describe what happens if the Seed is removed or controlled.

### Unclaimed Seeds
Describe how the Dungeon behaves if left intact.

## Factions & Activity

Groups interested in or operating within the Dungeon.

| Faction | Goals | Presence |
|---|---|---|
| | | |

## Current Events

Recent developments tied to the Dungeon.

Examples:
- Increased monster activity
- New entrances discovered
- Expedition disappearances
- Resonance changes
- Resource rushes
- Territorial conflicts

## Secrets (GM Only)

> [!danger]- GM Secrets

Hidden truths about the Dungeon.

Possible subjects:
- True origin
- Seed behavior
- Hidden layers
- Ancient creators
- Primordial influence
- Dungeon intelligence
- Faction conspiracies
- Catastrophic risks
- Reality instability

## Adventure Hooks

- 
- 
- 

## Notes

Additional worldbuilding notes, future ideas, mechanics, or unresolved concepts.