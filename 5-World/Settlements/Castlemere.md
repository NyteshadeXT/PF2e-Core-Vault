---
tags:  
- "#Location"  
- "#Settlement"  
art: zz-Attachments/Castlemere.png  
pronounced: Castle-meer  
aliases:  
- The Last Bastion  
- The Stone Refuge  
settlementtype: Small City  
terrain:  
- Forest  
- Frontier  
- Hills  
defence: Reinforced stone walls, partially restored battlements, standing militia, elevated castle-fortress  
location:  
- "[[Prismatic Canopy]]"  
Language:  
- Common  
dominion:  
- "[[Castlemere Magistrate Council]]"  
ruler:  
- "[[High Magistrate Edric Vale]]"  
leader:  
- "[[Captain Serah Vonn]]"  
- "[[Archivist Malen Thrice-Learned]]"  
organization:  
- "[[Castlemere Watch]]"  
- "[[The Preservationists]]"  
- "[[The Rationalists]]"  
governmenttype:  
- Authoritarian Council  
population: Approximately 2,100 inhabitants  
religion:  
- Aurelius  
- Aegis  
- Elara  
- Thalor  
import:  
- Lumber  
- Foodstuffs  
- Rare Medicinal Supplies  
- Exotic Materials  
export:  
- Stonework  
- Salvaged Relics  
- Defensive Equipment  
- Masonry  
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
>> **Type** | `INPUT[SettlementType][:settlementtype]` |
>> **Terrain** | `INPUT[Terrain][inlineListSuggester:terrain]` |
>> **Defenses** | `INPUT[Defence][:defence]` |
>> **Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |
>> **Languages** | `INPUT[Language][inlineListSuggester:Language]` |
>
>> [!metadata|metadataoption]- Demographics
>> #### Demographics
>>  |
>> ---|---|
>> **Dominion** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):dominion]` |
>> **Rulers** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):ruler]` |
>> **Leaders** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):leader]` |
>> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Government Type** | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` |
>> **Population** |  `INPUT[textArea:population]` |
>> **Religions**| `INPUT[Religion][:religion]` |
>
>> [!metadata|metadataoption]- Commerce
>> #### Commerce
>>  |
>> ---|---|
>> **Imports** | `INPUT[Goods][inlineListSuggester:import]` |
>> **Exports** | `INPUT[Goods][inlineListSuggester:export]` |

> [!infobox]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Type** | `VIEW[{settlementtype}][text]` |
> **Terrain** | `VIEW[{terrain}][text]` |
> **Defenses** | `VIEW[{defence}]` |
> **Location** | `VIEW[{location}][link]` |
> ###### Demographics
>  |
> ---|---|
> **Rulers** | `VIEW[{ruler}][link]` |
> **Leaders** | `VIEW[{leader}][link]` |
> **Dominion** | `VIEW[{dominion}][link]` |
> **Government Type** | `VIEW[{governmenttype}][text]` |
> **Population** | `VIEW[{population}][text]` |
> ###### Commerce
>  |
> ---|---|
> **Imports** | `VIEW[{import}][text]` |
> **Exports** | `VIEW[{export}][text]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>
> [!recite]- Introduction
> The road to Castlemere winds through broken hills and half-reclaimed farmland before finally rising toward the city itself. Even from a distance, the scars of the Sundering are impossible to miss. Portions of the outer wall remain cracked or partially collapsed, their ancient stone patched with fresh timber scaffolds and newly laid masonry. Watchtowers stand vigilant above the repaired battlements, their signal braziers burning even during daylight hours.
> 
> Beyond the walls, workers labor endlessly beneath the shadow of the castle-fortress that overlooks the settlement from its elevated perch. Smoke rises from forges and cookfires alike, mingling with the cool mist drifting from the nearby forests. Crimson-and-gold banners snap in the wind above the gates, symbols of endurance rather than triumph.
> 
> The people of Castlemere move with quiet purpose. Guards patrol in disciplined formations. Merchants speak in hushed voices. Travelers are watched carefully, measured with wary eyes before being permitted entry through the heavily guarded gates.
> 
> To many across the frontier, Castlemere represents survival itself—a city that endured when countless others fell. To others, it feels like a place still waiting for disaster to return.

> [!metadata|map]- Map
> ```zoommap
> image: zz-Attachments/castlemere-map.png
> # markers is optional; defaults to <image>.markers.json
> # markers: Assets/Map.jpg.markers.json
> 
> # Map view limits
> minZoom: 0.3
> maxZoom: 8
> 
> # Size & interactivity
> height: 760px
> width: 80%
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
>   zoom: 0.6209
>   centerX: 0.576159
>   centerY: 0.477618
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

## Overview
Castlemere stands as one of the oldest surviving settlements bordering the [[Prismatic Canopy]], a fortified refuge built upon the remnants of a pre-Sundering stronghold. Though only two decades have passed since the world was shattered, the city has already earned a reputation for resilience, discipline, and unyielding order.

The settlement is compact but heavily fortified, its stone walls enclosing tightly packed districts layered around the elevated castle at its center. Much of the city still bears visible damage from the Sundering. Entire sections remain under reconstruction, while older ruins have been repurposed into workshops, barracks, or temporary housing for laborers and refugees.

Life within Castlemere is governed by structure and necessity. Curfews are common, supplies are carefully rationed, and the Magistrate Council maintains strict oversight over trade, travel, and public safety. Many citizens accept these restrictions willingly, believing such discipline is the reason the city survived when so many others vanished. Economically, Castlemere survives through skilled stonework, salvaged relics from the old world, and trade with nearby settlements such as [[Springrun]] and Hommlet. The nearby Prismatic Canopy provides rare lumber, medicinal plants, and valuable crystals, though expeditions into the forest remain dangerous and tightly regulated.

Despite its harsh appearance, Castlemere is not cruel by nature. Its people are survivors shaped by catastrophe, and many genuinely believe that only vigilance and order stand between civilization and annihilation.

## Current Events
In recent months, tension has risen throughout Castlemere as reports from the Deep Wilds grow increasingly troubling. Hunters and prospectors have vanished along familiar trails, while patrols returning from the edges of the Prismatic Canopy speak of strange sounds, shifting terrain, and unnatural creatures emerging deeper within the forest. Most concerning are the rumors surrounding a mysterious hollow discovered somewhere beneath the crystalline canopy. Though details remain unclear, enough reports have reached the Magistrate Council to provoke growing concern among the city’s leadership. The Council has begun quietly restricting independent expeditions into the forest while increasing military patrols along the southern roads. Officially, these actions are described as temporary precautions. Unofficially, many citizens fear the city is preparing for something far worse.

At the same time, relations with nearby Springrun have become increasingly strained. Castlemere views the smaller settlement as reckless and dangerously ambitious, particularly as Springrun openly encourages exploration and prospecting within the Deep Wilds. Accusations of stolen supplies, territorial disputes, and interference with scouting parties have only worsened tensions between the two communities.

Meanwhile, construction continues across much of the city. Crews work tirelessly to restore damaged walls, reinforce aging towers, and reclaim abandoned sections of the settlement still left in ruin since the Sundering.

## History
Before the Sundering, Castlemere existed as a modest fortress settlement guarding trade routes that once passed safely along the edges of a verdant old wood forest. Though never a major political power, its walls and strategic location made it an important defensive outpost in the region. When the Sundering shattered Aetheria, much of the surrounding countryside was destroyed. Entire villages disappeared beneath collapsing earth and uncontrolled magical storms. The forest itself changed dramatically, becoming larger, stranger, and far more dangerous than before evolving into the Prismatic Canopy.

Castlemere survived—but barely.

Large sections of the outer wall collapsed during the catastrophe, and much of the population perished in the chaos that followed. For years afterward, the city endured famine, disease, and repeated attacks from displaced creatures emerging from the transformed wilderness. In the years since, Castlemere has slowly rebuilt under the leadership of the Magistrate Council, a governing body formed during the desperate aftermath of the Sundering. Their policies emphasized discipline, resource control, and strict civic order above all else. While these measures preserved the city, they also shaped Castlemere into an increasingly rigid and isolationist society.

Now, twenty years after the world was broken, Castlemere remains one of the strongest surviving settlements in the region—but many fear its obsession with stability may one day become as dangerous as the threats beyond its walls.

## Notes
- Castlemere serves as one of the primary regional powers bordering the Prismatic Canopy.
- The city’s leadership strongly favors containment and regulation of unknown phenomena.
- Publicly, the Magistrate Council frames all restrictions as necessary for survival.
- Several internal factions exist within the Council, including hardline Preservationists and more moderate Rationalists.
- The city is still actively rebuilding, and evidence of the Sundering can be seen throughout many districts.
- Rumors persist that the Council is withholding information regarding discoveries made in the Deep Wilds.
- Castlemere’s relationship with Springrun is tense but not openly hostile—yet.
