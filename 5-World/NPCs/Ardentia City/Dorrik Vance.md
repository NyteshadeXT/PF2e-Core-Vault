---
tags:
  - "#Character"
  - "#NPC"
art: zz-Attachments/dorrik-vance.png
occupation:
  - Blacksmith
  - Armorer
condition: Healthy
pronounced: Dor-rik Vance
aliases: The Reliquary Smith, Binder of Steel
heritage:
ancestry: Human
gender: Male
age: Adult
sexuality: Straight
alignment: True Neutral
location:
  - "[[Ironbound Reliquary]]"
organization:
  - "[[Dungeon Seekers Guild]]"
party1relation: Unmet
language:
  - Common
  - Dwarven
ideals: Craft above all; power must be controlled, not unleashed
flaws: Distrustful of untested magic; stubborn and slow to change
fears: Losing control of a bound creation; repeating past failures
mannerisms: Speaks bluntly; often taps metal surfaces while thinking; studies people like materials to be evaluated
religion:
  - "[[Arcarios]]"
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

Dorrik Vance is a man shaped as much by failure as by mastery. Broad-shouldered, scarred, and perpetually dusted in ash and iron filings, he carries the presence of someone who has stood too close to power—and survived by learning its limits.

As the founder and master smith of the **[[Ironbound Reliquary]]**, Dorrik pioneered the practice of *binding* arcane energy into physical form rather than merely enchanting it. To him, magic is not a tool—it is a volatile force that must be contained, structured, and respected like molten steel.

He has little patience for reckless adventurers or untrained mages, yet he shows a grudging respect for those who survive the Dungeons. Dorrik sees potential in people the same way he sees it in raw ore—something to be refined through pressure, heat, and discipline.

He is known across Ardentia as one of the few craftsmen capable of safely working with dungeon-derived materials, making him invaluable to the **[[Arcane Exchange Consortium]]** and those who delve into the unknown.

---

> [!column|2 no-title]
>
>> [!metadata|ideals] Ideals
> Craft above all; power must be controlled, not unleashed
>
>> [!metadata|flaws] Flaws
> Distrustful of untested magic; stubborn and slow to change
> 
>> [!metadata|fear] Fears
> Losing control of a bound creation; repeating past failures
>
>> [!metadata|mannerism] Mannerisms
> Speaks bluntly; taps metal surfaces while thinking; evaluates people like materials

## Goals

### Master the Art of Binding
Dorrik seeks to perfect the process of binding dungeon energy into stable forms, pushing the limits of what crafted items can become without succumbing to instability.

### Prevent Catastrophe
He is quietly driven by a past failure—an early experiment that nearly destroyed his forge and killed several apprentices. He refuses to allow such an event to happen again.

### Establish the Reliquary’s Legacy
Dorrik wants the Ironbound Reliquary to become the definitive authority on dungeon-forged equipment in Ardentia and beyond.

## Acquaintances

- **[[Lysa Embercoil]]** – His assistant and one of the few people he trusts. She brings a more experimental mindset that both frustrates and challenges him.
- **[[Arcane Exchange Consortium]]** – A necessary partnership. Dorrik respects their resources but distrusts their ambition.
- Various Dungeon Seekers – Regular clients; he respects survivors, not braggarts.

## Current Events

- Dorrik is struggling with a recent batch of unstable materials recovered from the **[[Aetherial Observatory]]**, which refuse to bind properly.
- He is seeking capable adventurers to retrieve a specific stabilizing component rumored to exist within a newly formed dungeon.
- A sealed item within his vault has begun to resonate—something he has not told anyone yet.

## History

Dorrik Vance arrived in Ardentia shortly after the Shattering, drawn by rumors of materials unlike anything seen before. His early work was marked by trial and error, culminating in a catastrophic failure when an improperly bound item detonated within his forge.

The incident nearly ended his career—and his life—but instead forged his philosophy: magic must not be layered onto items, it must be *contained within them*.

Over decades, he refined his techniques, eventually founding the Ironbound Reliquary. His methods are now considered foundational to Ardentia’s rise as a center of magical craftsmanship.

Few know the full truth of his early failure, and fewer still understand just how close Dorrik came to abandoning the craft entirely.

## Notes

- Excellent quest giver for:
  - Dungeon material retrieval
  - Item crafting and upgrades
  - Investigating unstable magical artifacts
- Can serve as:
  - Gruff mentor figure
  - Gatekeeper to high-tier equipment
  - Source of lore about dungeon materials and failures