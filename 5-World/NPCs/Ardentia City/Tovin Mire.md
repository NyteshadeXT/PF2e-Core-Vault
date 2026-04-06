---
tags:
  - "#Character"
  - "#NPC"
art: zz-Attachments/tovin-mire.png
occupation:
  - Appraiser 
  - Shop Assistant
condition: Healthy
pronounced: Toh-vin Meer
heritage: Half-Elf
ancestry: Human
gender: Male
age: Adult
sexuality: Straight
alignment: Neutral
location:
  - "[[Spellweave Emporium]]"
organization:
  - "[[Dungeon Seekers Guild]]"
party1relation: Unmet
language:
  - Common
  - Elven
  - Undercommon
ideals: Information is leverage; efficiency ensures survival
flaws: Pragmatic to a fault; can overlook emotional nuance
fears: Being outmaneuvered; losing control of a situation
mannerisms: Keeps detailed notes; speaks in measured tones; often steeples fingers while listening
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

Tovin Mire is the quiet engine behind the day-to-day operations of the **[[Spellweave Emporium]]**. Where Seraphine Dhalis provides vision and authority, Tovin ensures that everything actually *functions*—inventory is tracked, items are verified, and transactions are handled with precision.

He has a sharp mind for valuation and risk assessment, able to size up both an item and the person presenting it within moments. Tovin rarely raises his voice, rarely rushes, and rarely makes mistakes. Customers often underestimate him at first—until they realize he already knows exactly what they’re holding, what it’s worth, and whether it should be allowed inside the shop at all.

Though outwardly pragmatic, Tovin is not without curiosity. He is particularly interested in patterns—how certain items appear, where they originate, and what they might indicate about the changing nature of Dungeons. Unlike Lysa Embercoil’s open experimentation or Seraphine’s careful scholarship, Tovin’s approach is quieter: observe, record, and *understand through accumulation*.

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

### Maintain Operational Control
Tovin ensures the Emporium runs smoothly, safely, and profitably—balancing risk and opportunity with careful precision.

### Build a Knowledge Network
He quietly compiles data on items, clients, and dungeon activity, forming a web of information that may prove invaluable.

### Earn Independence
While loyal to Seraphine, Tovin harbors a long-term ambition to establish his own operation—one built on information rather than reputation.

## Acquaintances

- **[[Seraphine Dhalis]]** – Employer and mentor. He respects her judgment and trusts her leadership.
- **[[Arcane Exchange Consortium]]** – A source of both opportunity and scrutiny. Tovin understands their interests well.
- Frequent Adventurers – Tovin remembers repeat customers and tracks their reliability over time.

## Current Events

- Tovin has noticed irregularities in the types of items entering the Emporium—subtle, but statistically significant.
- He is quietly flagging certain clients and acquisitions for closer observation.
- He suspects that not all magical goods entering Ardentia are being properly documented—or controlled.
- 
## History

Tovin Mire grew up in the shifting margins between established settlements, where trade was inconsistent and survival depended on reading people as much as goods. Early on, he developed a talent for identifying value—both in objects and in information.

He arrived in Ardentia seeking opportunity and quickly found his way into the orbit of the **[[Arcane Exchange Consortium]]**, where his attention to detail and reliability earned him a position within the Spellweave Emporium.

Under Seraphine’s guidance, Tovin refined his skills into something sharper and more deliberate. He is no longer just a trader—he is an observer, a recorder, and perhaps, in time, something more.

## Notes

- Ideal for:
  - Handling transactions and negotiations with the party
  - Providing subtle clues or patterns the players might miss
  - Acting as a “soft gatekeeper” to higher-tier items
- Tone:
  - Calm, precise, slightly calculating
- Role in Party Interaction:
  - The one who asks the *right questions* before Seraphine makes decisions