---
tags:
  - "#Location"
  - "#POI"
art: zz-Attachments/Assets/PlaceholderImage.png
poitype:
  - Shop [Tavern]
owner:
  - "[[Tarquin Shortstone]]"
location:
  - "[[Merchant's Quarter]]"
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
> [!recite]- Read Aloud  
> One of the larger buildings in the neighborhood, the Crooked House is exactly as its name suggests—a bit off tilt. Its walls lean, its windows slant, and none of its doorframes seem square, yet the place has a sturdy, lived-in charm. The exterior is freshly painted in warm autumn hues, its lanterns glowing invitingly beneath a hanging sign that wobbles slightly in the wind. Laughter and music drift from the open door, mingled with the smell of roasted nuts, fresh bread, and strong ale. Inside, the uneven floors creak pleasantly beneath your boots, and every table seems to have a different height or wobble—yet somehow, it all feels right. Behind the bar, a cheerful gnome with an unruly shock of copper hair waves a hand in greeting. “Welcome to the Crooked House! Mind your step and your drink both. The floor’s got character—and so do I!”

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
The Crooked House Tavern stands at the edge of Midnight’s Muddle, a tangle of winding streets and overlapping roofs in the [[Merchant's Quarter]] of Ardentia City. The district bustles with life day and night, home to spice vendors, alchemists, mercantile brokers, and skyship crews fresh off trade routes. Among the chaos, the Crooked House offers a rare sense of familiarity and humor—a haven for travelers, adventurers, and locals alike.

Despite its slanting structure, the inn is remarkably clean and well-kept. The walls are painted in earthy reds and soft golds, and the mismatched furniture has been lovingly repaired so many times that no two tables are the same. The building’s crookedness is not an illusion—its foundation sank unevenly decades ago—but Tarquin insists that “a proper inn needs a bit of personality.”

The tavern is a known meeting place for merchants, adventurers, and scholars, as well as a few minor agents of the [[Arcane Exchange Consortium]]. Tarquin’s reputation for fairness and his genuine friendliness make him beloved throughout the district.

Unbeknownst to him, the Crooked House’s easy charm and the constant flow of strangers also make it the perfect place for spies and shapeshifters to blend in.

## Keyed Locations
### **1. Taproom – “The Tilted Hall”**
The Crooked House’s heart and soul. The floor slopes five degrees toward the western wall, which Tarquin swears improves the acoustics.  The walls are lined with trophies of Tarquin’s “adventuring youth”—mostly owlbear heads of various sizes, one of which has a tankard wedged in its beak. A small stage occupies the far corner, often hosting bards, illusionists, or acrobatic performers. The crowd is a lively mix of merchants, mercenaries, and locals relaxing after a long day.

_Atmosphere:_ Bright lanternlight, warm laughter, and the scent of spice and hops.  

### **2. Bar and Hearth**
A sprawling oak counter warped slightly in the middle, behind which Tarquin stands on a small enchanted stool that moves to keep him level.  The hearth beside him burns with greenish flame—an illusion enchantment designed to keep smoke from staining the ceiling.

_Menu Highlights:_
- **Shortstone Stout:** Tarquin’s personal brew, strong enough to clean wounds in a pinch.
- **Fireplume Soup:** Spicy tomato stew served with black bread.
- **Skywhale Ale:** A sweet brew favored by airship crews.

Tarquin’s humor and hospitality make him the tavern’s best feature; his laughter fills the room, and his sharp wit can cut tension faster than any blade.

### **3. Guest Rooms**
A narrow, tilting staircase leads to the second floor where seven rooms line a slanted hallway. Each room is unique: one circular, another with a ceiling so low tall folk must duck.  Despite the oddities, all are clean and well-maintained, each with a feather-stuffed mattress, an oil lamp, and a view of the bustling street below.

_Rates:_
- 6 sp per night (4 sp if sent by [[Eligos]]) includes breakfast and a small beer in the evening
- All rooms single occupancy; doubles currently rented by caravan traders

_Hazards:_ The banister creaks ominously (Acrobatics DC 15 to avoid slipping). A misplaced step might reveal the faint hum of illusion magic below—the remains of a failed “self-leveling” enchantment from Tarquin’s father.

### **4. Tarquin’s Office**
Behind the bar lies Tarquin’s cluttered office. Maps of trade routes, a rack of ledgers, and dozens of half-finished letters cover the desk. He’s currently petitioning the [[Arcane Exchange Consortium]] for a contract to supply ales to the [[Bloodstone Arena]]—though he insists it’s “all for the publicity.” 

A small dragonchess board sits on a shelf, set midgame with silver and crimson pieces. Visitors who mention [[Eligos]] will notice Tarquin smile fondly and offer them a free drink before returning to his ledger work.

_Secret:_ The floorboards conceal a **Hidden Vault (Thievery DC 25)** where Tarquin keeps sentimental trinkets, family records, and a ring of minor magical protection gifted by Eligos years ago.

### **5. The Cellar**
Cool and slightly damp, the cellar holds ale barrels, wine casks, and preserved food. A single glowing stone provides dim light.

Recently, Tarquin has complained of rats gnawing at the walls—though in truth, the noises come from a smuggling tunnel once used by a defunct thieves’ guild decades prior. Someone—possibly one of Raknian’s agents—has rediscovered the passage and uses it to move unseen through Midnight’s Muddle.

_Hazard:_ Secret tunnel entrance hidden behind a crate stack (Perception DC 23). The tunnel leads toward an abandoned wine cellar three blocks away—ideal for a clandestine meeting or ambush later in the adventure.

## Current Events
**Merchant Gossip:** Rumors swirl that the **Bloodstone Arena’s** upcoming season will feature “summoned combatants” instead of gladiators—a detail that will soon tie into Raknian’s schemes.
**Strange Patron:** A quiet, pale-skinned half-elf has been drinking alone each night, always leaving before dawn. (Secretly a disguised doppelganger watching for Eligos’ messengers.)
**Unsettling Incident:** A local performer swears their reflection winked at them in the tavern’s mirror the night before. Tarquin blames the ale, but paranoia is beginning to spread.

## History
The Crooked House has been in Tarquin’s family for over four generations—each heir humorously titled Shortstone, whether by blood or adoption. The original foundation cracked when an unstable magic was tapped during construction. Rather than rebuild, Tarquin’s ancestor simply shrugged and said, “Tilted, but not toppled—just like us.”

Since then, the tavern’s odd architecture has become its identity. Even the Conclave’s mages failed to correct its tilt; the enchantments refused to “find true level,” as though the building had developed a will of its own.

## Notes
**Illusions & Wards:** The entire building faintly resonates with [[Illusion]] magic; diviners detect an aura of “self-preservation,” as if the Crooked House itself resists collapse.
**Ambiance:** Laughter, flickering light, and uneven angles create a sense of whimsical safety—until the story darkens.
**Tarquin’s Motto:** “If it’s not crooked, it’s not home.”