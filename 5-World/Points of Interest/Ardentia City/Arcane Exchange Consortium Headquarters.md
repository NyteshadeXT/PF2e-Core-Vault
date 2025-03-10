---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/Assets/PlaceholderImage.png
pronounced: Arcane Exchange Consortium Headquarters
owner:
  - "[[Elowen Stormweaver]]"
organization:
  - "[[Arcane Exchange Consortium]]"
location:
  - "[[Ardentia City]]"
  - "[[Seekers Quarter]]"
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
> As you step through the grand archway of the Arcane Exchange Consortium Headquarters, the air is thick with the scent of parchment, incense, and old magic. The vast hall beyond is a symphony of commerce and power—a bustling market where merchants haggle over arcane trinkets, robed appraisers scrutinize newly unearthed relics, and the faint hum of latent enchantments fills the space. Towering bookshelves and locked display cases line the walls, holding scrolls and artifacts that shimmer under mage-lit chandeliers.
> 
> To your right, a gilded board displays current bounties and contract offers, its shifting script detailing expeditions, relic retrievals, and lucrative deals. At the heart of the chamber, a raised dais holds an enchanted podium where an auctioneer prepares for the next sale, his voice magically amplified over the din of trade.
> 
> Beyond the market floor, elegant staircases lead to the Consortium’s upper offices—places where deals of greater consequence are struck, and where the fate of powerful discoveries is decided behind closed doors. The air crackles with arcane energy, the very walls steeped in the magic of countless transactions and treasures.
> 
> A sharp-eyed clerk in fine, enchanted robes notices your arrival and steps forward with a practiced smile, a ledger in hand.
> 
> **"Newcomers to the Consortium, I see. If you seek to trade, sell, or commission services, the Exchange is at your disposal. If you bring relics of note, our appraisers will assess their worth—for a modest fee, of course. The Auction of Wonders is scheduled for the week's end, should you wish to bid… or offer something of value. And if you seek work, the bounty board is ever in need of skilled hands."**
> 
> He raises a brow, his eyes flicking over your gear with an appraising look. **"So then… what business brings you to the Consortium today?"**

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
> WHERE econtains(location, this.file.link) AND contains(tags, "POI")
> SORT tags DESC, poitype ASC, file.name ASC

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
The Arcane Exchange Consortium Headquarters is the beating heart of magical trade in Ardentia City, a grand edifice of wealth and arcane power. Established through a strategic alliance with the Arcane Conclave, it serves as both a commercial hub and a vital link in the city-state’s growing dominance over the flow of magical goods. Adventurers emerging from the Aetherial Observatory come here first, eager to sell their hard-earned treasures, identify mysterious artifacts, and trade for rare supplies before returning to the depths.

This headquarters is more than a marketplace—it is a center of magical commerce, an auction house of wonders, and a battleground of economic influence. The Consortium's leaders broker deals with merchants, enchanters, and aristocrats, ensuring the city remains a beacon of arcane innovation. Within its halls, disputes over artifact ownership are settled, and the fate of newly discovered relics is determined.

### **Significance & Identity**

The Consortium Headquarters thrives on a constant cycle of discovery, negotiation, and power plays:

- **The Grand Exchange** – The central market where adventurers barter their latest dungeon spoils. Magical vendors, alchemists, and smiths compete to purchase rare materials, while Consortium appraisers assess the value of enchanted relics.
- **The Vault of Arcane Curiosities** – A secure repository for artifacts of great power, often the subject of high-stakes auctions, research, or political intrigue.
- **Private Dealings & Contracts** – Behind closed doors, powerful merchants and scholars broker lucrative contracts for artifact retrieval, exploration commissions, and mercenary work.
- **The Weekly Auction of Wonders** – Every seventh night, the Consortium hosts an auction where adventurers and nobles alike bid on exotic magical items recovered from the depths of the Dungeon. Some artifacts carry hidden dangers or unknown histories, making each event an unpredictable spectacle.
- **Rivalry & Influence** – Not all dealings are peaceful; factions within the Consortium vie for influence, and some artifacts spark fierce competition between buyers. Whispers of underhanded dealings, stolen relics, and clandestine transactions are ever-present.
## Keyed Locations

> [!kirk|info] Prompt (Remove me)
Create detailed descriptions for each keyed location within the Point Of Interest. Define each room or area with distinct characteristics. Include information on the size, layout, notable features, and potential points of interaction or interest within each location. Describe the ambiance, potential hazards, objects of importance, any interactive elements that might engage the players, or any loot to be found. How does each keyed location contribute to the overall exploration and gameplay experience within this Point of Interest?

### Example


## Current Events

> [!kirk|info] Prompt (Remove me)
> Capture the present pulse within this Point of Interest. What's happening right now in this dynamic location? Are there recent developments, ongoing activities, or sudden changes that have affected the atmosphere? Delve into the current events, integrating them into the fabric of this place. How might these immediate occurrences influence encounters or quests within this Point of Interest or surrounding area, adding depth and intrigue to your players' exploration?

## History

> [!kirk|info] Prompt (Remove me)
> Explore the echoes of history within this location. What significant events have shaped its narrative? Unravel the tales engrained within its grounds, uncovering not just what happened, but also the narratives woven around these events. What stories persist, and are there misconceptions veiling the true essence of these historical moments?

## Notes

