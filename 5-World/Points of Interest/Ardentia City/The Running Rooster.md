---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/Assets/PlaceholderImage.png
poitype:
  - Shop [Inn]
owner:
  - "[[Brannic Tallman]]"
location:
  - "[[Seekers Quarter]]"
  - "[[Ardentia City]]"
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
> The Running Rooster stands out the moment you see it — three stories of polished stone and warm lanternlight, with a carved wooden rooster it's feet enchanted to appear to be running perched proudly above the entrance.
> 
> Inside, the atmosphere is a striking contrast to the rough-and-tumble adventurer taverns nearby. Soft carpets muffle footsteps, crystal-light chandeliers glow with steady enchantment, and the entire place smells faintly of lemon oil, fresh bread, and something bright and fruity.
> 
> A towering human man — easily **six foot seven**, wiry, well-groomed, and dressed in immaculate waistcoat and rolled sleeves — greets each guest with practiced warmth and a voice deep enough to vibrate the countertop. He moves with surprising grace for his size, navigating trays, patrons, and staff as though the inn itself leans out of his way.
> 
> The main lounge is refined but comfortable: wide hearth, cushioned chairs, tables of polished wood, and a carved mural of a rooster sprinting across rolling fields. Adventurers and merchants of means relax here — the type who appreciate a soft bed after a hard delve.  The bar specializes in upscale spirits and its signature drink:
> 
> Everything here — from the rooms to the drinks to the service — is clearly premium. And the prices reflect that. But for those willing to pay, The Running Rooster offers the quiet luxury rarely found in a district built on danger and dungeon delves.

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
The Running Rooster is the premier high-end inn of the Seekers Quarter—a haven of quiet refinement amid the chaos of adventurer life. Known for its immaculate service, luxurious rooms, and signature fruited wheat ale, the inn attracts seasoned Seekers, wealthy merchants, and visiting dignitaries who prefer comfort over the grit of typical delvers’ taverns.

Despite its upscale reputation, the Running Rooster remains deeply tied to the adventuring community. Its towering and impeccably mannered manager, **Brannic Tallman**, personally ensures every guest is seen, welcomed, and remembered. The inn serves as a reliable sanctuary where patrons can rest between delves, negotiate deals in private, or enjoy a rare moment of calm away from the constant pulse of the Aetherial Observatory’s mana flow.

Recurring gatherings—quiet morning briefings, late-night storytelling sessions, and occasional celebratory toasts after successful dungeon runs—help solidify the inn as a social anchor in the Seekers Quarter. Its comfort, privacy, and premium amenities make it a trusted retreat and a symbol of stability in a district built on danger.

## Keyed Locations
### **1. Front Lounge & Reception**
A warmly lit space with polished aetherwood counters, soft carpets, and enchanted crystal lanterns that maintain a steady, golden glow. Brannic typically stands here, greeting guests with a deep voice and practiced warmth.  

**Points of Interest:**
- Ledger enchanted with guest signatures that shimmer softly.
- Crystal bell that summons staff instantly.
- A mural of a rooster mid-stride carved in high relief across the back wall.

### **2. The Feather’s Rest Bar**
A refined bar featuring premium spirits and the inn’s signature **Running Red Wheat Ale**, served in magically chilled crystal mugs. Smooth jazz-like instrumental magic plays from minor illusions above the bar.  

**Points of Interest:**
- Display rack of imported liquors and rare vintages.
- A menu carved into animated wood that updates itself.
- Private booths with dampening wards for conversations meant to stay private.
    
**Running Red Wheat Ale**  
_A light-bodied wheat ale brewed in small enchanted batches, with a tart, sour-fruit undertone — hints of redcurrant, kissberry, and something floral you can’t quite place at first sip._ The ale is served in chilled crystal mugs that gently glow red at the base, an enchantment that keeps the drink perfectly cold no matter how long a conversation drags on.


### **3. The Upper Suites**
Luxurious, magically sound-proofed rooms favored by higher-ranking Seekers and wealthy patrons. Each suite features a plush bed, private bath, and windows enchanted to display calming natural vistas—even in the middle of a storm.  

**Points of Interest:**
- Adjustable crystal lanterns responding to mood and stress levels.
- Personal safes tied to each guest’s arcane signature.
- Feather-soft carpets enhanced with minor levitation enchantments to reduce footfall.

### **4. The Common Rooms**
More affordable (yet still impeccably clean) accommodations for adventurers on a moderate budget. Bunk-style beds and shared baths are kept spotless through a mix of staff diligence and subtle cleaning cantrips.  

**Points of Interest:**
- Secure footlockers built into the floor.
- Noticeboard for room-share postings or temporary party formations.
- Windows that dim automatically to promote rest.

### **5. The Private Negotiation Lounge**
A quiet, wood-paneled room available for rent by guild representatives, merchants, or adventuring parties needing discretion. A faint hum of privacy wards fills the space.  

**Points of Interest:**
- Aether-inscribed contract table that records agreed terms into crystal chips.
- Sound-dampening glyphs around the walls.
- A hidden call bell that summons Brannic for mediation or drinks.

### **6. The Kitchens**
Bustling but orderly, with enchanted ovens and chilled storage. The chefs take great pride in their artisanal pastries and fruit-infused dishes.  

**Points of Interest:**
- Aether-cooled pantry storing rare ingredients.
- Self-stirring cauldrons.
- Secret recipe tomes bound in spice-infused leather.

## Current Events
The Running Rooster is experiencing an unusual surge in high-profile guests—wealthy benefactors, veteran Seekers, and even a few Arcane Conclave representatives. Rumors suggest they are meeting in the Private Negotiation Lounge to discuss something related to “fluctuations” within the Aetherial Observatory. Meanwhile, Brannic has privately mentioned to trusted patrons that shipments of the specialty fruit used for the Running Red Wheat Ale have been delayed. He suspects magical interference along the trade routes from the Shimmer Vale orchards and is considering hiring discreet adventurers to investigate. Several guests have also reported hearing faint, rhythmic tapping on their windows late at night—despite the windows being magically sealed and positioned three floors above street level.

## History
Before it became the Running Rooster, the building served as a small administrative office connected to early excavation and study efforts of the Aetherial Observatory. When the initial research teams relocated into a new Conclave facility, the building remained dormant for years—sealed, forgotten, and half reclaimed by dust.

Brannic Tallman purchased the structure during the expansion of the Seekers Quarter. With the help of skilled carpenters and a few magical artisans, he transformed it into a high-end inn tailored to explorers needing respite from the chaos of dungeon life.

The name “Running Rooster” comes from a local folktale about a farmhand whose rooster once outran a runaway cart carrying volatile mana crystals. The tale—amusing, unbelievable, and loudly debated—has become synonymous with resilience and good fortune among Seekers.

Though the inn is now known for refinement and comfort, some older delvers whisper that during renovations, workers found a sealed sub-basement containing incomplete research notes and strange sketches. Brannic avoids questions about whether that basement still exists.

## Notes

