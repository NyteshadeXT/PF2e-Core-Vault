---
tags:
  - "#Character"
  - "#NPC"
art: zz-Attachments/Assets/PlaceholderImage.png
occupation:
  - Council Speaker
  - Settlement Overseer
condition: Healthy
pronounced: ED-rick Hollow-meer
heritage: Versatile Heritage
ancestry: Human
gender: Male
age: Mature Adult
alignment:
location:
  - "[[Springrun]]"
organization:
  - "[[Springrun Council]]"
party1relation: Neutral
languages:
  - Common
  - Dwarven
  - Elven
ideals: |-
  - A settlement survives through unity and preparation
  - Progress means little if people die achieving it
  - Knowledge should serve survival, not vanity
  - Springrun must adapt without losing itself
flaws: |-
  - Hesitates too long before making high-risk decisions
  - Carries responsibility for every loss personally
  - Can become stubborn when pressured by outsiders
  - Sometimes conceals problems to prevent panic
fears: |-
  - Springrun suffering a catastrophic crystal failure
  - The Prismatic Canopy becoming impossible to contain
  - Ambitious factions exploiting the settlement
  - Becoming remembered as the man who led Springrun into disaster
mannerisms: |-
  - Rubs his thumb against old coin edges while thinking
  - Speaks carefully and rarely wastes words
  - Maintains long periods of eye contact during negotiations
  - Frequently studies maps while listening to reports
  - Keeps detailed handwritten notes during meetings
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
>> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>
>> [!metadata|metadataoption]- Bio
>> #### Bio
>>  |
>> ---|---|
>> **Pronounced** |  `INPUT[textArea:pronounced]` |
>> **Aliases** | `INPUT[list:aliases]` |
>> **Ancestry** | `INPUT[Ancestry][suggester:ancestry]` |
>> **Heritage** | `INPUT[Heritage][suggester:heritage]` |
> **Creature Type** | `INPUT[textArea:ancestry]` |
> **Creature Sub-Type** | `INPUT[textArea:heritage]` |
>> **Gender** | `INPUT[Gender][:gender]` |
>> **Age** | `INPUT[Age][:age]` |
>> **Sexuality** | `INPUT[Sexuality][:sexuality]` |
>> **Alignment** | `INPUT[Alignment][:alignment]` |
>
>> [!metadata|metadataoption]- NPC Info
>> #### NPC Info
>>  |
>>---|---|
>> **Languages** | `INPUT[Language][inlineListSuggester:language]` |
>> **Ideals** | `INPUT[textArea:ideals]` |
>> **Flaws** | `INPUT[textArea:flaws]` |
>> **Fears** |  `INPUT[textArea:fears]` |
>> **Mannerisms** |  `INPUT[textArea:mannerisms]` |
>> **Occupations** | `INPUT[Occupation][inlineListSuggester:occupation]` |
>> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Religions** | `INPUT[inlineListSuggester(optionQuery(#Deity AND !"z_Templates"), useLinks(partial)):religion]` |
>> **Owned Locations** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):ownedlocation]` |
>> **Current Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |
>> **Condition** | `INPUT[Condition][:condition]` |
>
>> [!metadata|metadataoption]- Party Info
>> #### Party Info
>>  |
>> ---|---|
>> **Traveling With** | `INPUT[inlineListSuggester(optionQuery(#Party AND !"z_Templates"), useLinks(partial)):whichparty]` |
>> **Party 1 Relation** | `INPUT[Party1Relation][:party1relation]` |

> [!infobox]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Bio
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Ancestry** | `VIEW[{ancestry}]` |
> **Heritage** | `VIEW[{heritage}]` |
> **Gender** | `VIEW[{gender}]` |
> **Pronouns** | `VIEW[{pronouns}]` |
> **Age** | `VIEW[{age}]` |
> **Sexuality** | `VIEW[{sexuality}]` |
> **Alignment** | `VIEW[{alignment}]` |
> ###### Info
>  |
> ---|---|
> **Languages** | `VIEW[{language}][text]` |
> **Occupations** | `VIEW[{occupation}][text]` |
> **Organization** | `VIEW[{organization}][link]` |
> **Religions** | `VIEW[{religion}][link]` |
> **Owned Locations** | `VIEW[{ownedlocation}][link]` |
> **Current Location** | `VIEW[{location}][link]` |
> **Condition** | `VIEW[{condition}]` |


# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

> [!metadata|letters]- Letters
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, quicknote AS Notes
> FROM "5-World"
> WHERE econtains(holder, this.file.link) AND contains(tags, "Letter")
> SORT file.name ASC
> ```

> [!metadata|literature]- Literature
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, quicknote AS Notes
> FROM "5-World"
> WHERE econtains(holder, this.file.link) AND contains(tags, "Literature")
> SORT file.name ASC
> ```


> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "5-World"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC
> ```

## Overview
Edrik Hollowmere serves as the senior voice of the [[Springrun Council]], though he prefers to think of himself as a coordinator rather than a ruler. Thick-shouldered and weathered by decades of frontier hardship, Edrik carries himself with the steady confidence of someone who has spent most of his life building things that were never guaranteed to survive. His dark hair has faded heavily to gray, and deep lines around his eyes speak more to sleepless nights than age alone.  
  
Unlike many frontier leaders driven by ambition, ideology, or profit, Edrik’s primary concern is stability. He believes Springrun represents one of the few genuine chances to create something lasting amidst the chaos left behind by the Shattering. Every road repaired, every trade agreement secured, and every family convinced to stay matters to him personally.  
  
Edrik spends much of his time balancing competing pressures within the settlement. Prospectors want expansion. Merchants demand safer roads. Hunters insist the canopy is becoming more dangerous. Talandra Vael warns against overloading the settlement’s crystal infrastructure, while others argue Springrun cannot survive without continued growth. Edrik rarely raises his voice during disputes, but when he does, people tend to listen.  
  
Though practical and politically savvy, Edrik is not blind to the strange events unfolding around Springrun. He privately fears the settlement may be growing faster than its people truly understand the dangers surrounding them.

> [!column|2 no-title]
>
> 
>> [!metadata|ideals] Ideals
> `VIEW[{ideals}][text]`
>
>> [!metadata|flaws] Flaws
> `VIEW[{flaws}][text]`
> 
>> [!metadata|fear] Fears
> `VIEW[{fears}][text]`
>
>> [!metadata|mannerism] Mannerisms
> `VIEW[{mannerisms}][text]`

## Goals


## Acquaintances
- [[Sister Elowen Vale]] — One of the few people Edrik openly trusts for emotional counsel  
- [[Talandra Vael]] — Respects her expertise but worries her caution may hinder necessary growth  
- [[Maren Thistleford]] — Values her practical instincts and honest assessments of frontier dangers  
- [[Brother Garrik Thorn]] — Relies heavily on Garrik’s judgment regarding security threats  
- [[Selka Mirefen]] — Finds her useful but dangerously reckless

## Current Events
Edrik is currently under increasing pressure from multiple sides within Springrun. Trade caravans and prospectors push for expansion deeper into the surrounding wilderness, while recent disappearances and strange resonance disturbances have made portions of the council increasingly cautious.  
  
Privately, Edrik has begun compiling reports regarding unusual events throughout the settlement: malfunctioning crystal systems, erratic wildlife behavior, shifting trails within the canopy, and growing tensions among settlers unnerved by recent rumors. He suspects these incidents are connected but lacks sufficient proof to act openly without risking panic.  
  
He has also quietly authorized additional patrols near Springrun’s outer roads after receiving reports that some abandoned campsites appear occupied despite showing no signs of ordinary habitation.  
  
## History
Edrik Hollowmere was among the earlier wave of settlers who arrived near the region that would eventually become Springrun. Originally a caravan coordinator and supply organizer operating between frontier settlements, he earned a reputation for keeping people alive in dangerous territory through careful planning and disciplined logistics rather than heroics.

When Springrun was still little more than a riverside encampment struggling to survive repeated storms, supply shortages, and attacks from displaced creatures, Edrik became one of the figures responsible for organizing labor, securing trade agreements, and preventing the settlement from fracturing into competing factions.

Over time, his reliability and calm leadership made him a natural choice for the developing council structure. While several early leaders sought wealth through crystal prospecting or influence through rapid expansion, Edrik consistently focused on sustainability and infrastructure. Much of modern Springrun’s stability can be traced back to systems he helped establish during its earliest years.

Though respected by most residents, Edrik remains deeply aware that Springrun still exists on fragile ground. The settlement’s growth has brought prosperity, but also attention—from ambitious merchants, dangerous expeditions, and forces within the Prismatic Canopy that may not remain dormant forever.

## Notes

- Edrik should feel like a grounded frontier leader rather than a noble politician.
- He genuinely cares about Springrun’s survival.
- He is cautious about rapid expansion but understands the settlement cannot remain stagnant.
- Edrik works well as:
  - a quest giver
  - political mediator
  - source of regional information
  - stabilizing authority figure
  - moral contrast to more reckless factions
- He should gradually become more concerned as supernatural events escalate around Springrun.