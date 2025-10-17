---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/arcane-exchange-headquarters.png
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
> **"Newcomers to the Consortium, I see. If you seek to trade, sell, or commission services, the Exchange is at your disposal. If you bring relics of note, our appraisers will assess their worth—for a modest fee, of course. The Auction of Wonders is scheduled for the week's end, should you wish to bid… or offer something of value. And if you seek work, the bounty boards are ever in need of skilled hands."**
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
The Arcane Exchange Consortium Headquarters is the beating heart of magical trade in Ardentia City, a grand edifice of wealth and arcane power. Established through a strategic alliance with the Arcane Conclave, it serves as both a commercial hub and a vital link in the city-state’s growing dominance over the flow of magical goods. Seekers emerging from the Aetherial Observatory come here first, eager to sell their hard-earned treasures, identify mysterious artifacts, and trade for rare supplies before returning to the depths.  

This headquarters is more than a marketplace—it is a center of magical commerce, an auction house of wonders, and a battleground of economic influence. Adventures, even those not affiliated with the Seekers, come from far and wide to buy, sell and trade their spoils. The Consortium's leaders broker deals with merchants, enchanters, and aristocrats, ensuring the city remains a beacon of arcane innovation. Within its halls, disputes over artifact ownership are settled, and the fate of newly discovered relics is determined.

 In addition to serving as a magical marketplace, the headquarters also marks the entry to the [[Aetherial Observatory]], Ardentia local Dungeon.  Seekers will find a small guild branch both guarding the Dungeon from threats both internal and external as well as providing minor services to members looking to enter or returning from an expedition.

The Consortium Headquarters thrives on a constant cycle of discovery, negotiation, and power plays.  Not all dealings are peaceful; factions within the Consortium vie for influence, and some artifacts spark fierce competition between buyers. Whispers of underhanded dealings, stolen relics, and clandestine transactions are ever-present.

## Keyed Locations
### **1. The Grand Exchange**
The vast central hall of the headquarters, the Grand Exchange is a cathedral of commerce where shimmering runes dance across polished crystal floors. The chamber is circular—nearly 200 feet across—with tiered balconies overlooking the bustling trading floor below. Thousands of floating motes of light drift through the air, illuminating the wares of enchanters, alchemists, and merchants hawking their magical goods. A massive arcane chandelier hovers overhead, held aloft by levitation runes and humming faintly with stored energy from Aetherium Crystals. Magical sigils embedded in the marble floor automatically translate speech, allowing buyers and sellers from across Aetheria to communicate seamlessly.

**Points of Interaction:**
	_Appraisers’ Row_ — A line of robed experts offer item identification for a fee. Characters may receive insight into newly found relics or discover hidden curses.
	_The Bounty Board_ — An enchanted panel displays contracts for dungeon delves, rare creature hunts, or magical resource recovery. It constantly updates with glowing runes.
	_The Auction Dais_ — Every seventh night, this area transforms into a grand auction where relics of immense power are sold under [[Elowen Stormweaver]]’s supervision. Bidders use silent gestures to channel their bids through spell-linked wands.
	_Hazard:_ Magical residue occasionally reacts violently with nearby items. Once every few days, a random aura discharge might result in a brief wild magic surge.

The Exchange never truly closes; trade pulses through its halls at all hours, making it the heartbeat of Ardentia’s magical economy.

### **2. The Vault of Arcane Curiosities**
Accessible only via a heavily warded elevator guarded by armored constructs, this secure repository descends deep beneath the headquarters. The Vault houses relics too dangerous or valuable for the open market—artifacts from dungeons, ancient tomes of forbidden magic, and fragments of lost civilizations.

The chamber is an architectural marvel: crystal walls that shift hue with the stored energy, containment fields inscribed with shifting runes, and guardian sigils that shimmer faintly in the air.

- **Security Measures:**
_Glyph Locks:_ Require both arcane and biometric keys (fingerprint and mana signature).
_Guardian Golems:_ Enchanted constructs patrol silently, responding to unauthorized magic.
_Soul Wards:_ Prevent teleportation and possession-based intrusion.

Rumor claims one sealed chamber—marked with an ever-spinning obsidian ring—contains a corrupted Dungeon Seed that still pulses faintly with life. Elowen Stormweaver herself is said to commune with it in secret, studying its nature to prevent future calamities.

### **3. The Observatory Annex (Seeker Branch)**
Built adjacent to the [[Aetherial Observatory]] entrance, this annex functions as both a guild outpost and checkpoint for adventurers. The interior combines military efficiency with arcane precision—rows of armor stands, rune-etched tables for cataloging loot, and teleportation circles for emergency evacuation.

- **Services Offered:**
_Registration Office:_ Seekers log their expeditions and register found items.
_Recovery Wing:_ Healers tend to wounded delvers; potions from [[Lady Isolde Moonshadow]] are stocked here.
_Expedition Board:_ Joint missions between the [[Dungeon Seekers Guild]] and the Consortium are posted daily.

_Guard Captain [[Riven Stormblade]]_ and his Seeker Wardens maintain order here, ensuring trade laws and expedition rights are honored. The air hums with mana from the Dungeon’s threshold—its unstable influence felt even through the reinforced walls.

### **4. The Chamber of Accord**
This upper-level sanctum serves as the meeting hall for the Consortium’s high council. Twelve chairs circle a levitating crystal map representing the known lands of Aetheria, its geography constantly shifting to reflect magical disturbances and trade routes. Each chair bears the sigil of a different branch leader. When deliberations begin, privacy wards silence all external sound, and even the chandeliers dim. It’s here that Archmagus [[Elowen Stormweaver]] oversees the delicate balance between profit, politics, and preservation.

This chamber doubles as a diplomatic court where artifact ownership disputes are settled. It’s said that lies spoken within cause one’s reflection in the crystal table to briefly dissolve.

## Current Events
**The Silent Auction of the Century:** Rumors spread that the next **Auction of Wonders** will feature an artifact recovered from a forgotten Dungeon—a shard said to hum in harmony with the Veil itself. Scholars whisper it may be linked to a pre-Shattering god-machine.
**Political Strain:** Relations between the [[Arcane Exchange Consortium]] and the [[Arcane Conclave]] grow uneasy. Some Conclave members accuse the Consortium of hoarding relics for profit rather than research.
**Theft in the Vault:** A recent breach left one containment chamber empty. Elowen has silenced discussion, but whispers suggest the stolen item was a fragment of a sentient Dungeon Seed—its resonance could attract extraplanar entities.
**Shadow Auctions:** Black market traders, possibly agents of the [[Ebon Triad]] or the [[Meteor’s Chosen]], have begun appearing near the Exchange, seeking “off-ledger” sales.

## History
The Arcane Exchange Consortium began as a small trade guild in the aftermath of the Shattering, founded by mages seeking stability amid chaos. Its headquarters in Ardentia was constructed around the same time as the [[Aetherial Observatory]]’s stabilization—serving as both a market and a research bastion.

When [[Elowen Stormweaver]] ascended to leadership, she restructured the Consortium into a global powerhouse. Her innovations, including Adventuring Charters, transformed dungeon delving into a regulated industry. The Headquarters became a symbol of the new era: where commerce met discovery, and ambition met accountability.

Centuries later, its reputation endures as a crossroads of fate. Every relic, contract, and whispered deal made within these walls contributes to Aetheria’s delicate balance between progress and peril.

## Notes
- The building is partially powered by a massive Aetherium Crystal beneath the structure, channeling energy through the central spire.
    
- Every visitor passes through **The Mirror of Entry**, a portal that records their magical aura for security.
    
- A secret lower chamber known as _The Null Vault_ is rumored to hold items forbidden by the gods themselves, sealed behind layers of divine silence.
