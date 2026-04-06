---
tags:
  - "#Location"
  - "#POI"
  - Armory
  - Smithy
  - Magical
art: zz-Attachments/ironbound-reliquary.png
pronounced: Iron-bound Rel-ih-kwair-ee
owner:
  - "[[Dorrik Vance]]"
assistant:
  - "[[Lysa Embercoil]]"
organization:
  - "[[Arcane Exchange Consortium]]"
location:
  - "[[Ardentia City]]"
  - "[[Seekers Quarter]]"
aliases:
  - The Reliquary, Ironbound
poitype:
  - Shop [Armorer]
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

# **Ironbound Reliquary** <span style="font-size: medium">"Iron-bound Rel-ih-kwair-ee"</span>

> [!recite]- Introduction
> The air grows warmer as you approach, tinged with the scent of heated metal and ozone. Before you stands a structure of dark iron and crystal latticework, its facade etched with glowing runes that pulse like a steady heartbeat. Within, the rhythmic clang of hammer on steel echoes like a ritual. Weapons and armor line the walls—not merely forged, but *bound*, each piece humming faintly with arcane resonance.  
>  
> A broad-shouldered figure glances up from the forge, sparks dancing across his apron. “If you’ve come seeking protection,” he rumbles, “you’d best be ready to pay in more than coin.”


> [!metadata|map]- Map
> ```leaflet
> id: TBD
> image: [[PlaceholderImage.png]]
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
> defaultZoom: 1
> zoomDelta: 0.5
> unit: miles
> scale: 1
> darkMode: false
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

The **Ironbound Reliquary** is one of the most respected armories in Ardentia, specializing in the fusion of traditional smithing with dungeon-infused arcane binding. Unlike common forges, the Reliquary does not merely craft equipment—it *enshrines* it.

Each piece created here is treated as a vessel, often incorporating materials recovered from dungeons: monster cores, Aetherium fragments, or resonance-touched metals. The result is armor that adapts, weapons that hum with latent power, and relics that seem almost alive.

Closely tied to the **Arcane Exchange Consortium**, the Reliquary serves as a primary outfitter for Dungeon Seekers and elite agents operating within the Aetherial Observatory. It is both a workshop and a proving ground—many items are tested, tuned, and sometimes rejected based on their ability to withstand dungeon resonance.

## Keyed Locations

### 1. The Outer Showroom
A vaulted chamber of polished stone and suspended crystal fixtures. Armor stands display completed works, each labeled with faintly glowing sigils indicating material origin and enchantment type.

- **Notable Features:**  
  - Illusory overlays demonstrate armor effects when touched  
  - A faint hum permeates the room from stabilized enchantments  
- **Interaction:**  
  - Customers can “attune briefly” to sample an item’s resonance (non-mechanical flavor or minor temporary effect)

### 2. The Binding Forge
The heart of the Reliquary. A massive forge surrounded by etched containment circles and suspended arcane conduits.

- **Notable Features:**  
  - Aetherium-infused flame burns white-blue  
  - Runes along the floor shift depending on the item being worked  
- **Hazards:**  
  - Unstable bindings may discharge energy (GM can use as environmental effect if needed)  
- **Purpose:**  
  - Where enchantments are fused directly into physical materials  

### 3. The Reliquary Vault
A secured chamber housing rare and experimental items. Entry is restricted.

- **Notable Features:**  
  - Locked behind a multi-layer arcane seal  
  - Contains dungeon-derived prototypes and failed constructs  
- **Potential Hooks:**  
  - A weapon within is “calling” to a player  
  - A stored item is beginning to destabilize  

### 4. The Consultation Alcove
A quieter space lined with schematics, monster parts, and resonance charts.

- **Function:**  
  - Custom commissions  
  - Analysis of dungeon materials brought by adventurers  
- **Interaction:**  
  - Players can bring monster parts for crafting hooks (ties directly into your Chimeracrafting system)

## Current Events

- A recent shipment of materials from the **Aetherial Observatory** has produced *volatile results*. Several items have exhibited unpredictable resonance spikes.
- The Reliquary is quietly seeking skilled adventurers to retrieve a stabilizing component rumored to exist in a newly formed dungeon pocket.
- Rumors persist that one of the vault’s items is not an object—but a *contained entity* bound within armor.

## History

The Ironbound Reliquary was founded shortly after the Shattering, when early attempts to replicate dungeon-forged materials failed catastrophically. Its founder, Dorrik Vance, was among the first to realize that such materials could not simply be shaped—they had to be *bound* through ritualized forging techniques.

Over time, the Reliquary became a cornerstone of Ardentia’s rise, supplying early explorers with the tools needed to survive the first dungeons. Its methods remain closely guarded, blending practical smithing traditions with emerging arcane theory.

Some claim the Reliquary’s earliest works still exist—lost within the deepest dungeon layers, continuing to evolve long after their creation.

## Notes

- Strong tie-in location for:
  - Dungeon loot conversion
  - Custom item crafting
  - Resonance-based narrative hooks
- Excellent quest hub for:
  - Material retrieval
  - Item stabilization
  - Experimental gear testing