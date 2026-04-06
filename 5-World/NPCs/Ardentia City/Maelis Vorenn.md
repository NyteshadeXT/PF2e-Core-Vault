---
tags:
  - "#Character"
  - "#NPC"
art: zz-Attachments/maelis-vorenn.png
occupation:
  - Master Jeweler
  - Gem Appraiser
condition: Healthy
pronounced: MAY-liss Voh-renn
heritage: ""
ancestry: Human
gender: Female
age: Adult
sexuality: Straight
alignment: Neutral
location:
  - "[[The Faceted Crown]]"
  - "[[Ardentia City]]"
  - "[[Seekers Quarter]]"
organization:
  - "[[Arcane Exchange Consortium]]"
party1relation: Unmet
language:
  - Common
  - Elven
ideals: Precision above all; true value lies in meaning, not appearance
flaws: Perfectionist; slow to trust; dismissive of the careless or impulsive
fears: Mishandling a truly dangerous artifact; her work being used for harm
mannerisms: Speaks calmly and deliberately; examines objects while listening; pauses before responding
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
Maelis Vorenn is the refined and discerning proprietor of **[[The Faceted Crown]]**, widely regarded as one of Ardentia’s most skilled jewelers and appraisers. She has built her reputation not on extravagance, but on **precision, discretion, and an unerring eye for value**—both material and personal.

Clients come to her not merely for adornment, but for certainty. Whether evaluating a gemstone recovered from a dungeon, restoring a family heirloom, or crafting a piece meant to mark a life-defining moment, Maelis approaches every task with deliberate care and exacting standards.

She is closely tied to the **[[Arcane Exchange Consortium]]**, often serving as a trusted expert when rare or unusual materials enter the city. While she does not advertise this openly, those who operate within Ardentia’s inner circles understand that her judgment carries weight far beyond her shop.

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
- Preserve the **reputation and integrity** of [[The Faceted Crown]] as Ardentia’s most trusted jeweler
- Identify and safely work with **unusual gemstones**, particularly those influenced by dungeon energies
- Ensure that powerful or unstable materials are **placed in responsible hands—or not sold at all**
- Build lasting relationships with clients whose intentions align with her standards of craftsmanship and purpose

## Acquaintances
- **[[Corin Pell]]** — Trusted assistant; capable, attentive, and increasingly relied upon for delicate work and client interactions
- **[[Seraphine Dhalis]]** — Professional peer within the [[Arcane Exchange Consortium]]; their relationship is built on mutual respect and shared standards of quality and discretion
- **[[Tovin Mire]]** — Occasionally consults on unusual materials, particularly those with unclear or unstable properties
- Select members of the **[[Arcane Exchange Consortium]]** — Maintains quiet but influential connections, particularly in matters involving appraisal and high-value trade

## Current Events
A recent influx of gemstones recovered from newly manifested dungeons has drawn Maelis’s attention. Several of these stones exhibit **subtle irregularities**—unusual refractions, faint resonance in the presence of magic, or internal structures that defy conventional cutting techniques.

While she continues to accept commissions, Maelis has begun quietly **refusing certain materials**, citing “structural concerns” without elaboration. Behind closed doors, she is cataloging these anomalies and attempting to determine whether they represent a new class of gemstone—or something far less stable.

At the same time, a number of high-profile clients have approached her for **symbolic commissions tied to emerging power structures** within Ardentia, placing her in the delicate position of navigating both artistry and politics.

## History
Maelis Vorenn established herself in Ardentia during its early rise as a center of trade and arcane discovery. Trained in traditional gemstone cutting and refinement, she distinguished herself not through flamboyance, but through **consistency, restraint, and precision**.

In the city’s formative years, when rare materials began arriving from dangerous and poorly understood sources, Maelis adapted her craft. She developed methods for evaluating and working with unfamiliar stones, earning a reputation as someone who could **identify true value—and recognize hidden risks**.

Over time, the Faceted Crown became synonymous with trust. Nobles, merchants, and Consortium agents alike came to rely on her judgment, particularly when dealing with objects of uncertain origin. While others pursued innovation or spectacle, Maelis built her standing on reliability and careful discernment.

Today, she is regarded not only as a master jeweler, but as one of Ardentia’s most dependable authorities on rare gemstones and refined materials.

## Notes
- Tone: Calm, refined, quietly authoritative
- Strong use cases:
    - High-end commissions
    - Gemstone appraisal and identification
    - Social intrigue involving wealth, status, or inheritance
- Excellent quest hooks:
    - Verifying or stabilizing unusual dungeon-recovered crystals
    - Investigating a gemstone that behaves unpredictably
    - Discreetly vetting a powerful or suspicious client
- Plays well as:
    - A **trusted expert**
    - A **gatekeeper to rare materials**
    - A **subtle influencer in Ardentia’s upper circles**