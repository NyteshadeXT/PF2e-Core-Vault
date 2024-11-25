---
tags:
  - "#Location"
  - "#Settlement"
art: zz-Attachments/Diamond Lake Banner.webp
pronounced: Diamond-Lake
location:
  - "[[Aetherial Highlands]]"
settlementtype: Small Town
population: human 96%, halfling 2%, gnome 1%, other races 1%
defence: Weak
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
>> **Defences** | `INPUT[Defence][:defence]`
>> **Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |
>
>> [!metadata|metadataoption]- Demographics
>> #### Demographics
>>  |
>> ---|---|
>> **Dominion** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):dominion]` |
>> **Rulers** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):ruler]` |
>> **Leaders** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):leader]` |
> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Government Type** | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` |
>> **Population** |  `INPUT[textArea:population]`
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
> **Defences** | `VIEW[{defence}]` |
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
> Introduction to read to the players the first time they visit.

> [!metadata|map]- Map
> ```leaflet
> id: TBD
> image: [[Diamond Lake.webp]]
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

> [!metadata|district]- Districts
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(districttype, ", ") AS Type
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "District")
> SORT districttype ASC, file.name ASC

> [!metadata|location]- Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(location), ", ") AS "Location", join(link(organization), ", ") AS "Organization(s)"
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "POI")
> SORT tags DESC, poitype ASC, file.name ASC

> [!metadata|organizations]- Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "Organization")
> SORT tags DESC, file.name ASC

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

> [!kirk|info] Prompt (Remove me)
> Diamond Lake nestles in the rocky crags of the Cairn Hills, three days east of Ardentia City, the seat of the local barony. Iron and silver from Diamond Lake's mines fuel the barony’s markets and support its soldiers and nobles with the raw materials necessary for weapons and finery. This trade draws hundreds of skilled and unskilled laborers into the Diamond Lake - a collection point for all manner of misfits and outcasts, all hoping to strike it rich. But the town breaks many more souls than it rewards, as it has an appetite for swallowing up the indigent and displaced to the profit to the few ruthless beneficiaries. In the hills surrounding the town, hundreds of laborers spend weeks at a time underground, breathing recycled air pumped in via systems worth ten times their combined annual salary. The miners are the chattel of Diamond Lake, its seething, tainted blood.
> 
> In ages past, Diamond Lake boasted an export more valuable than metal in the form of treasure liberated from the numerous tombs and burial cairns crowding the hills around the town. These remnants of a half - dozen long - dead cultures commanded scandalous priced from the Ardentia City elite, whose insatiable covetousness triggered a boom in the local economy. Those days are long gone, though. The last cairn in the region coughed up its treasures decades ago, and few locals pay much mind to stories of yet - undiscovered tombs and unplundered burial cairns. These days, only a handful of treasure seekers visit the town, and few return to the Ardentia City with anything more valuable than a wall rubbing or an ancient tool fragment.
> 
> Despite its squalor, Diamond Lake is crucial to the Ardentia Cities economy. Ardentia City takes a keen interest in local affairs, noting the rise and fall of managers who run Diamond Lake's mines. However, two months ago the power balance in Diamond Lake was upturned when the town’s former Governor-Mayor fell ill and died suddenly. The power vacuum that followed threw the town and its production into downward spiral as prominent mine managers schemed for power. The Blackwood family move quickly to install Diamond Lake's new Regent, and currently battle to exert their authority with the underhanded mine managers entrenched in the town.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present pulse of life within this settlement. What current events are shaping the daily life of its inhabitants? Explore the recent developments, ongoing activities, or societal changes that are influencing the atmosphere here. Dive into the immediate concerns, celebrations, or challenges faced by the residents. How are these current events impacting the dynamics and future trajectory of this settlement?

## History

> [!kirk|info] Prompt (Remove me)
> Uncover the layers of history woven into the fabric of this settlement. Trace its origins, pivotal events, and the evolution of its community. Explore the tales of its founding, the struggles and triumphs that shaped its growth, and the key historical figures that left their mark. What historical milestones have defined this settlement, and how have they influenced its present-day character?

## Notes

