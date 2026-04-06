---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/spellweave-emporium.png
pronounced: Spell-weave Em-por-ee-um
owner:
  - "[[Seraphine Dhalis]]"
assistant:
  - "[[Tovin Mire]]"
organization:
  - "[[Arcane Exchange Consortium]]"
location:
  - "[[Ardentia City]]"
  - "[[Seekers Quarter]]"
aliases:
  - The Weave
poitype:
  - Shop [Magic]
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
> The moment you cross the threshold, the world seems to soften—sound dampens, light refracts, and the air shimmers faintly like heat over stone. Threads of glowing energy drift lazily through the space, weaving themselves between shelves of scrolls, crystals, and delicate instruments.  
>  
> Robes hang suspended in midair, their fabric shifting with colors that don’t quite exist. A voice, calm and measured, echoes from somewhere deeper within:  
>  
> “Careful where you step… not all threads are meant to be touched.”

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

The **Spellweave Emporium** is one of the most well-known arcane shops in Ardentia, offering a wide array of magical goods, services, and expertise to both seasoned adventurers and aspiring practitioners. Within its walls, one can find everything from scrolls and wands to enchanted equipment, spell components, and curious arcane devices sourced from across the city—and beyond.

Unlike more specialized establishments, the Emporium prides itself on versatility. Its inventory reflects the ever-changing nature of Ardentia itself, drawing from traditional magical practices, emerging theories, and materials recovered from the growing number of Dungeons. As a result, no two visits to the shop are ever quite the same.

The Emporium maintains close ties to the **[[Arcane Exchange Consortium]]**, often serving as a reliable point of distribution for newly cataloged magical items and recovered artifacts. It is a place where knowledge and commerce intersect—where a simple purchase may lead to a deeper understanding of the arcane, or the beginning of a much larger journey.

For many in Ardentia, the Spellweave Emporium is more than a shop—it is a trusted gateway into the wider world of magic, offering both the tools and guidance needed to navigate its complexities.

## Keyed Locations

### 1. The Arcane Showroom
The main chamber of the Emporium, filled with floating displays of magical items.

- **Notable Features:**  
  - Rotating displays move slowly through the air, showing off their wears  
  - Some displays are showing demonstrations of the items enchantment
- **Interaction:**  
  - Touching a display may briefly trigger a harmless sensory illusion (or something more unpredictable at GM discretion)

### 2. Arcane Workshop
The Workshop is where items are actively constructed or modified.

- **Notable Features:**  
  - Arcane tools supporting the creation of arcane items
  - Half-finished spell matrices visible as glowing geometric constructs  
- **Purpose:**  
  - Custom item creation and modification  
- **Hooks:**  
  - Players can commission unique items or item enhancements  

### 3. The Veiled Archive
A restricted section containing volatile or experimental magic items.

- **Notable Features:**  
  - Shelves of sealed scrolls wrapped in binding sigils  
  - Whispering echoes of incomplete incantations  
  - Magically sealed cases glowing with warding spells
- **Hazards:**  
  - Mispronounced or disturbed spells may partially manifest  
- **Access:**  
  - Requires permission—or clever infiltration  

### 4. The Resonance Chamber
A circular room used to test magic item interactions with dungeon energy.

- **Notable Features:**  
  - A suspended Aetherium core at the center  
  - Walls etched with shifting runic diagrams  
- **Purpose:**  
  - Studying how magic behaves under dungeon influence  
- **Tie-In:**  
  - Direct link to your dungeon resonance / Chimeracrafting systems  

## Current Events

- The Emporium is **handling unusual magical items** coming from new dungeons
- A containment failure affecting a small section of the shop caused a temporary “unraveling” of magic—effects are still lingering.
- The owners are quietly seeking adventurers to retrieve a rare “anchor device” believed to stabilize volatile magic items.

## History

The Spellweave Emporium was established in the early years following the Shattering, during a time when Ardentia was still finding its footing as a center of arcane study and trade. In those uncertain days, magical goods were inconsistent, poorly understood, and often dangerous—especially those recovered from the first emerging Dungeons.

Its founder, **[[Seraphine Dhalis]]**, recognized a growing need not for radical experimentation, but for **reliability**. Drawing on her background as both a practiced arcanist and a meticulous scholar, she set out to create a place where magic could be **trusted, cataloged, and responsibly distributed**.

What began as a modest storefront quickly grew in prominence as adventurers, scholars, and Consortium agents alike came to rely on the Emporium’s carefully vetted inventory. Seraphine developed rigorous standards for identifying, stabilizing, and documenting magical items—particularly those influenced by dungeon energies—helping to establish early practices that are still used across Ardentia today.

As the **[[Arcane Exchange Consortium]]** expanded its influence, the Spellweave Emporium became one of its most dependable commercial partners, serving as both a distribution point and an informal center of knowledge exchange. While other establishments pursued bold or risky innovations, the Emporium earned its reputation through consistency, discretion, and an unwavering commitment to quality.

Today, it stands as one of Ardentia’s most trusted arcane institutions—not because it seeks to redefine magic, but because it ensures that those who wield it can do so with confidence.

## Notes

- Strong thematic tie to:
  - Spell customization
  - Dungeon resonance mechanics
  - Experimental magic systems
- Excellent for:
  - Custom scrolls, wands, and spell variants
  - Magical anomalies and quest hooks
- Tone:
  - Slightly surreal, controlled chaos
  - Magic feels alive, not static