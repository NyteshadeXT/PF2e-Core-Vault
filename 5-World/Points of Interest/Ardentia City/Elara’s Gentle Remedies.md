---
tags:  
- "#Location"  
- "#POI"  
art: zz-Attachments/elaras-gentle-remedies.png  
pronounced: Eh-LAR-ahs Gen-tul Rem-eh-deez  
owner:  
- "[[Sister Ameline Voss]]"  
assistant:  
- "[[Bram Tallow]]"  
organization:  
- "[[Temple of Elara]]"  
location:  
- "[[Ardentia City]]"  
- "[[Seekers Quarter]]"  
aliases:  
- The Gentle Remedies  
- Elara’s Grace  
poitype:  
- Shop [Apothecary]  
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
> A soft, herbal fragrance greets you before you even reach the doorway—lavender, mint, and something faintly sweet beneath it. The building itself is modest, its pale stone walls framed by climbing ivy and small, carefully tended window boxes filled with flowering plants.
> 
> Inside, the space is warm and inviting. Shelves of neatly labeled jars line the walls, filled with dried herbs, tinctures, and powders of every shade. Glass vials catch the light, and a low simmering kettle releases a gentle, soothing steam.
> 
> The sounds here are quiet—soft footsteps, the clink of glass, the rustle of parchment. Behind a wooden counter, a calm voice offers a welcoming tone.
> 
> “Rest comes first. Remedies follow. Tell me what troubles you.”

## Overview

> [!metadata|map]- Map
> ```leaflet
> id: crooked-house-tavern
> image: [[crooked-house-tavern.png]]
> lock: true
> recenter: true
> noScrollZoom: false
> ### Use this [LINK](https://docs.google.com/spreadsheets/d/1jKQxktYSUFcCJhEkAAPr1wMVBTqUdpEfA5XveUXI17I/edit?usp=sharing) to work out your map's bounds.
> ### bounds: [[0,0], [0, 0]] (Remove the ### and these parentheses with the content within from this line to enable the bounds)
> height: 600px
> width: 640px
> lat: 0
> long: 0
> minZoom: 1
> maxZoom: 6.5
> defaultZoom: 4.5
> zoomDelta: 0.5
> unit: miles
> scale: 1
> darkMode: false
> ```

> [!metadata|location]- Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(organization), ", ") AS "Organization(s)"
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "POI")
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
**Elara’s Gentle Remedies** is one of Ardentia’s most trusted apothecaries, known for its careful preparations, restorative treatments, and a philosophy centered on healing rather than haste. While many establishments focus on potent concoctions or battlefield-ready elixirs, this shop emphasizes **stability, recovery, and long-term well-being**.

The remedies found here range from simple herbal infusions and poultices to refined alchemical preparations capable of treating more serious ailments. The shop is especially valued by adventurers returning from the Dungeons, offering treatments for exhaustion, lingering afflictions, and conditions not always addressed by magic alone.

Closely tied to the **[[Temple of Elara]]**, the apothecary blends practical knowledge with spiritual care. While not overtly religious, its practices reflect a belief that healing is both a physical and personal process—one that requires patience, understanding, and trust.

For many in Ardentia, this is not merely a place to purchase remedies, but a place to recover.

## Keyed Locations
### 1. The Front Apothecary
A welcoming space filled with neatly arranged jars, labeled remedies, and small bundles of herbs hanging from ceiling beams.

- **Notable Features:**
    - Clearly labeled tinctures, powders, and salves
    - Small display of common remedies available for purchase
    - A faint, ever-present herbal aroma

### 2. Preparation Station
A well-organized workspace where remedies are crafted, measured, and refined with careful precision.

- **Notable Features:**
    - Mortars, pestles, distillation coils, and glass apparatus
    - Quiet bubbling mixtures and drying racks
    - Detailed recipe journals and ingredient logs

### 3. Resting Alcove
A small, partitioned space where patrons can sit, recover, or receive immediate treatment.

- **Notable Features:**
    - Simple cots and soft linens
    - Warm blankets and calming herbal infusions
    - A peaceful, dimly lit atmosphere

### 4. Herbal Garden (Rear Courtyard)
A carefully maintained garden used to grow many of the shop’s core ingredients.

- **Notable Features:**
    - Rows of medicinal herbs, roots, and flowering plants
    - Small irrigation channels and labeled plots
    - Occasional rare plants grown under careful supervision

## Current Events
A growing number of customers have begun arriving with **unusual symptoms**—fatigue that resists magical healing, strange discolorations, and lingering discomfort after exposure to newly formed dungeons. While most cases are mild, the pattern has not gone unnoticed.

Sister Ameline has begun quietly tracking these cases, comparing symptoms and remedies to identify any common source. Though she has not raised alarm publicly, she has started preparing **specialized treatments** in anticipation of a broader issue.

At the same time, supply of certain key herbs has become inconsistent, forcing the shop to seek new sources—or rely on adventurers willing to retrieve them.

## History
Elara’s Gentle Remedies was founded as a small extension of the **Temple of Elara**, intended to provide practical care to those who could not rely solely on divine magic. In its earliest days, it served the sick, the poor, and laborers injured in the city’s rapid expansion.

As Ardentia grew—and as adventurers began returning from dangerous expeditions—the need for more specialized care became clear. The shop expanded its practices, incorporating alchemical techniques alongside traditional herbal remedies, while maintaining its core philosophy of **measured, reliable healing**.

Over time, it became a respected institution within the city—not for dramatic cures, but for consistency and trust. Those who visit once often return, not just for remedies, but for reassurance that their condition will be understood and treated with care.

## Notes
- Tone: Calm, restorative, grounded, compassionate
- Strong use cases:
    - Healing and recovery between adventures
    - Treating unusual conditions or lingering afflictions
    - Gathering alchemical supplies or herbal components
- Excellent quest hooks:
    - Sourcing rare or missing medicinal herbs
    - Investigating a new illness tied to dungeon exposure
    - Delivering treatment to an afflicted individual unable to travel
- Plays well as:
    - A **safe haven location**
    - A **medical authority**
    - A **subtle plot entry point for larger threats**