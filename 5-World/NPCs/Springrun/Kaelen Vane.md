---
tags:
  - "#Character"
  - "#NPC"
art: zz-Attachments/kaelen-vane.png
pronounced: KAY-len VAIN
aliases:
  - Ember
  - The Hearth-Tender
ancestry: Human
heritage:
gender: Male
age: Mature Adult
sexuality: Straight
alignment: Neutral Good
language:
  - Common
ideals: "Community Resilience: We only survive by building together and sharing the warmth of our progress."
flaws: "Overconfident in Technology: Believes that if a crystal can power a town, it can solve any problem."
fears: "A Second Shattering: Terrified that unmanaged energy will once again break what he has worked so hard to rebuild."
mannerisms: Frequently rubs his soot-stained hands together; has a booming, rhythmic laugh that echoes in the taproom.
occupation:
  - Innkeeper
  - Former Crystal Miner
organization:
  - "[[Springrun Service Guild]]"
ownedlocation:
  - "[[The Shattered Hearth Inn]]"
location:
  - "[[The Shattered Hearth Inn]]"
condition: Healthy
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
Kaelen Vane is the heart of the Shattered Hearth Inn and a veteran of the early frontier days following the Shattering. A former miner who helped establish the first successful excavations in the **Ember Bank**, Kaelen used his "retirement shards"—valuable Primal Crystal fragments—to build a sanctuary for those pushing into the Prismatic Canopy. He is a man of earth and fire, defined by his soot-stained hands and an unshakable belief that the forces that broke the world can be harnessed to sustain it. To Kaelen, the Inn is more than a business; it is a proof of concept for Springrun’s survivalist philosophy.

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
- **Primary Ambition:** To make the Shattered Hearth the most stable and modern hub in the "New World," proving that Springrun’s adaptive nature is superior to Castlemere’s defensive fear.
- **Immediate Desire:** To resolve the mysterious "pulsing" and flickering of his Primal Crystals, which he suspects is being caused by the alien presence of the **Verdant Hollow**.
- **Mentorship:** He seeks to guide the "new blood" (the players) in the proper respect and management of high-energy resources, ensuring they don't accidentally trigger a critical mass event.

## Acquaintances
- **[[Elara Whitethistle]]:** His head server and "surrogate daughter." While he admires her curiosity, he worries her obsession with mapping the shifting paths of the Dungeon will lead her into a danger she isn't ready for.
- **[[The Springrun Council]]:** Kaelen maintains a friendly but cautious relationship with the village leadership. He supports their ambition but often acts as the "grounded" voice of experience regarding the volatility of crystals.
- **[[Shards]]:** His kitchen assistant. Kaelen views the rudimentary construct as his proudest technical achievement, though he doesn't fully understand how it operates.

## Current Events
Kaelen is currently under immense stress as the Inn reaches over-capacity following the Springrun summons. He is spending most of his time tending to the **Ever-Warm Hearth**, as the central crystal has begun to resonate at an alarming frequency since the discovery of the **Verdant Hollow**. He is actively looking for a group of explorers he can trust to investigate the "mana bleed" from the forest before his energy grid suffers a catastrophic failure.

## History
Kaelen was a young man when the asteroid struck, witnessing the splintering of Aetheria firsthand. He spent his youth as a scout and later as one of the founding miners of Springrun, where he learned the "Resilience-tier" mining techniques that allow for the harvesting of Primal Crystals. Twenty years later, he is a respected elder of the 930-person village, having transitioned from the dangerous work of the mines to the community-focused role of an innkeeper. He remains one of the few people in town who truly remembers the world before it was broken, which fuels his drive to build something better.

## Notes
- **Interaction Tip:** Kaelen will offer the party a discount or trade if they share information about any new crystal formations or "anomalies" they see in the wilds.
- **Knowledge:** He can provide the players with their first technical explanation of how **Primal Crystals** function as a renewable energy source.




