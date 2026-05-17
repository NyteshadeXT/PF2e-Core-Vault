---
tags:
  - "#Location"
  - "#Dungeon"
art: zz-Attachments/Assets/ImagePlaceHolder.png
pronounced: 
aliases: []
dungeon_rank: 
dungeon_type: 
seed_status: 
attunements:
  primary:
  secondary: []
location: 
region: 
discovered_by: 
controlled_by: 
associated_factions: []
entry_condition: 
danger_level: 
recommended_level: 
environment_tags: []
theme: 
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

A brief player-facing overview of the Dungeon, its reputation, visible entrance, and why adventurers seek it out.

## Overview

A broader explanation of the Dungeon’s known structure, behavior, themes, and role within the world. Include known lore, major environmental characteristics, and the overall “experience” of traversing the Dungeon.

## Entrance

Describe the Dungeon’s entrance and surrounding area.

Consider:
- Architecture
- Environmental anomalies
- Runes or warnings
- Local rumors
- Entry requirements
- Visible instability
- Nearby camps, settlements, or factions

## Dungeon Resonance

Describe the metaphysical “rules” or themes shaping the Dungeon.

### Known Resonances
- Example: Fire spells become unstable
- Example: Fear effects intensify
- Example: Spatial distortion
- Example: Monsters regenerate rapidly
- Example: Time behaves inconsistently

### Resonance Effects
Describe how the Dungeon influences:
- Creatures
- Powers
- Resources
- Equipment
- Magic
- The environment itself

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

# Reading the Archway - `=this.file.name`

Description of the archway and the immediate surrounding area.

## Victory Point Challenge