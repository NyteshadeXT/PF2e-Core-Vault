---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/Assets/PlaceholderImage.png
pronounced: Trail-rest Supply and Stable
aliases:
  - Trailrest
  - The Trailrest Yard
poitype:
  - Shop [General Store]
  - Stable
dominion:
  - "[[Springrun Council]]"
owner:
  - "[[Maren Thistleford]]"
assistant:
  - "[[Berric Mossheel]]"
location:
  - "[[Springrun]]"
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
> The smell of hay, oiled leather, river mud, and smoked provisions greets you before the building itself comes fully into view. Trailrest Supply and Stable sprawls along the edge of one of Springrun’s busier roads, where wagon ruts, boot prints, and animal tracks churn the packed earth into a permanent map of comings and goings.
>
> The front of the business is a broad, timber-built trading post with open shutters, hanging bundles of rope, stacked crates, and barrels of trail goods arranged beneath a patched canvas awning. Beyond it, a fenced yard holds pack animals, riding beasts, wagons, and a few canopy-bred mounts restless from the sounds of the nearby forest. Stablehands move constantly between stalls and storage sheds, checking harnesses, brushing mud from hooves, and loading supplies for the next expedition.
>
> A painted sign above the main door shows a boot, a saddle, and a bundle of rope beneath the words **Trailrest Supply and Stable**. Beneath that, in smaller lettering, someone has added: **“If you forgot it, we probably warned you.”**

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

Trailrest Supply and Stable is one of Springrun’s most practical and frequently visited businesses, serving settlers, scouts, hunters, prospectors, caravan drivers, and adventurers preparing to enter the Prismatic Canopy. Part general store, part outfitter, and part stable yard, it exists because nearly everyone in Springrun eventually needs rope, feed, tools, travel rations, rain covers, spare harnesses, or an animal sturdy enough to survive the forest roads.

The business is owned by [[Maren Thistleford]], a sharp-eyed merchant with little patience for romantic notions of exploration. Maren believes most deaths in the wilderness come not from monsters, but from poor planning, bad boots, wet bowstrings, cheap rope, and travelers who think luck is a substitute for preparation. Her assistant, [[Berric Mossheel]], oversees the stable yard and has a gift for calming frightened animals after they have scented something strange from the deeper canopy.

Trailrest carries few luxury goods and almost no true magic items. Its value lies in reliability. Shelves are packed with mundane but essential supplies: lantern oil, chalk, pitons, tarps, twine, fishhooks, trail spikes, sealed ration tins, waterskins, sacks, blankets, candles, cook kits, sacks of feed, spare wheels, and weatherproof map cases. Its stable yard rents stalls, sells tack and harnesses, boards pack animals, and arranges mounts or wagons for expeditions traveling along Springrun’s roads or into safer portions of the surrounding wilds.

While Trailrest does not pretend to be an adventurers’ guild, it has become an informal gathering place for those heading into the canopy. More than one expedition has begun with a hurried argument over supply lists beneath its awning.

## Keyed Locations

### Front Trading Floor

The front room is crowded, practical, and constantly in motion. Shelves sag beneath coils of rope, folded canvas, sacks of dried food, sealed jars, repair kits, and bundled torches. A large counter near the back holds account ledgers, small tools, and a battered brass bell Maren rings whenever someone tries to leave without paying.

Several goods are arranged in open bins by function rather than quality. “Dry,” “Sharp,” “Tie,” “Burn,” “Patch,” and “Don’t Forget” are all written on wooden placards in Maren’s blunt handwriting. The “Don’t Forget” bin usually contains chalk, spare flint, needle and thread, twine, oilcloth, and small waxed pouches.

### Expedition Wall

One wall of the shop is given over to commonly requested expedition bundles. These are not official kits so much as Maren’s personal answer to repeated customer incompetence.

Typical bundles include a Rainbound Kit for wet canopy travel, a Prospector’s Bundle for crystal survey teams, a Hunter’s Snare Pack, and a basic Seeker’s Satchel for travelers who clearly intend to go somewhere dangerous with too few supplies.

Small tags note which supplies are commonly lost, broken, or underestimated in the Prismatic Canopy.

### Covered Loading Awning

A wide canvas awning stretches from the side of the trading post toward the road. Wagons are loaded here, crates are inspected, and arguments over supply orders are common. During heavy rain, the awning becomes crowded with travelers, stablehands, and animals unwilling to move.

The awning also functions as a public notice point. Travelers sometimes leave warnings here about flooded trails, aggressive beasts, missing scouts, or strange lights seen beneath the canopy.

### Stable Yard

The stable yard is fenced with rough timber and divided into stalls, hitching posts, and open paddocks. The yard mostly houses horses, mules, ponies, and hardy pack animals suited to frontier roads. A few animals show signs of adaptation to the region, such as broad hooves for soft ground, unusually calm temperaments around glowing flora, or thick coats resistant to constant damp.

Berric Mossheel runs the yard with quiet authority. He can usually tell whether an animal has merely been frightened or has encountered something truly unnatural. Animals returning from the deeper canopy are watched carefully before being cleared for further use.

### Tack and Repair Shed

This shed smells of leather, oil, damp wood, and old straw. Saddles, bridles, harnesses, saddlebags, wagon fittings, spare straps, and patched rain covers hang from pegs along the walls. The shed handles basic repairs, though more complicated work is sent to Springrun’s leatherworker or blacksmith.

A workbench near the rear is scarred by years of knife cuts and awl marks. Berric keeps a private tally scratched beneath the table of how many expeditions returned missing animals, wagons, or riders.

### Feed Barn

The feed barn stores hay, oats, dried fodder, salt licks, and preserved feed suited for longer journeys. The barn is watched carefully due to constant damp and the threat of spoilage. Maren refuses to sell bad feed, but she charges accordingly for anything that has been properly dried and stored.

Small charms and bundles of bitter herbs hang near the doors, meant to discourage vermin and insects from nesting inside. Whether they truly work is a matter of debate.

### Rear Wagon Lot

Behind the stable yard is a muddy lot containing handcarts, small wagons, repairable wheels, spare axles, and a few larger caravan wagons waiting for maintenance. Settlers often rent carts from Trailrest when moving goods between the river docks, Pearl Hall, and outer work sites.

The rear lot is also where Maren stores damaged equipment brought back from failed expeditions. Some pieces are stripped for parts. Others are kept as quiet warnings.

### Notable Dishes

Trailrest is not a tavern, but Maren keeps a small pot of practical fare available for regular customers and stablehands.

- Thick oat-and-root porridge with smoked herbs
- Hard trail biscuits served with berry preserves
- Salted mushroom stew during long rains
- Dried fruit and nut cakes wrapped for travel

### Notable Beverages

- Bitter canopy tea brewed to fight damp chill
- Weak small beer kept for wagon crews
- Hot cider with pinebark spice
- Springrun river water boiled with mint and sealed in clay jugs for travel

## Current Events

Trailrest is busier than usual due to the recent increase in expeditions pushing deeper into the Prismatic Canopy. Maren has begun limiting bulk purchases of rope, oilcloth, and preserved rations after several groups bought recklessly and failed to return. She insists this is simple inventory management, though regular customers suspect she is worried about how many underprepared explorers are being drawn toward the deeper forest.

Berric has also noticed that animals returning from certain trails have become increasingly skittish. Several refuse to cross particular bridges or react violently to the scent of damp crystal growths brought back by prospectors. He has quietly begun marking such animals with colored cord until he can determine whether they are merely frightened or affected by something stranger.

Rumors around the loading awning increasingly mention the Verdant Hollow. Maren does not trade in wild stories, but she has started asking customers exactly where they are headed before selling them expedition bundles.

## History

Trailrest began as a simple supply shed beside a muddy hitching post during Springrun’s earliest years. Prospectors and settlers needed a place to store feed, repair straps, and purchase basic tools before heading into the surrounding wilderness. Over time, as Springrun grew from a rough riverside camp into a permanent settlement, the shed expanded into a trading post, then into a full stable yard.

Maren Thistleford took ownership after the original proprietor died during a supply run that should have been routine. The story left a permanent mark on how she runs the business. Trailrest does not encourage heroics, exaggerate safety, or sell cheap gear as though it were reliable. Maren would rather lose a sale than watch a fool walk into the canopy with rotten rope.

As Springrun’s ambitions expanded, Trailrest became one of the settlement’s quiet necessities. It lacks the prestige of Pearl Hall, the intrigue of crystal prospecting, or the warmth of the local tavern, but nearly every expedition touches its doors sooner or later. In a settlement built on risk, Trailrest survives by reminding people that courage is easier to admire when properly supplied.

## Notes

- Trailrest should feel practical, grounded, and heavily used.
- It is a good location for rumors about trails, missing expeditions, strange animal behavior, and supply shortages.
- Maren Thistleford is blunt, competent, and skeptical of reckless adventurers.
- Berric Mossheel is better with animals than people and may notice signs of supernatural influence before others do.
- The shop should carry mundane adventuring gear, travel supplies, pack equipment, feed, basic tools, and stable services.
- Trailrest should not sell advanced crystal technology or significant magic items.
- The business can serve as a natural starting point for expeditions into the Prismatic Canopy.