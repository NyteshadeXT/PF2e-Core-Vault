---
tags:
  - "#Character"
  - "#NPC"
art: zz-Attachments/corin-pell.png
occupation:
  - Apprentice Jeweler
  - Shop Assistant
condition: Healthy
pronounced: KOR-in Pell
heritage: ""
ancestry: Human
gender: Male
age: Young Adult
sexuality: Straight
alignment: Neutral
location:
  - "[[The Faceted Crown]]"
  - "[[Ardentia City]]"
  - "[[Merchant's Quarter]]"
organization:
  - "[[Arcane Exchange Consortium]]"
party1relation: Unmet
language:
  - Common
ideals: Mastery is earned through patience; every flaw can be understood and corrected
flaws: Overthinks decisions; hesitant to act without certainty; seeks approval
fears: Ruining a valuable piece; disappointing Maelis Vorenn
mannerisms: Double-checks work obsessively; mutters observations under his breath; avoids eye contact when uncertain
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
Corin Pell serves as the diligent and meticulous assistant to **[[Maelis Vorenn]]** at [[The Faceted Crown]]. Still early in his career, he has already earned a place within the shop through patience, precision, and an unwavering dedication to mastering his craft.

Where Maelis is composed and effortlessly confident, Corin is careful and deliberate, often second-guessing himself even when his instincts are correct. He approaches gemstone cutting and setting with intense focus, treating even minor imperfections as problems to be solved rather than flaws to be ignored.

Though not yet possessing Maelis’s reputation or authority, Corin plays a crucial role in the day-to-day operations of the shop. He handles routine work, assists with appraisals, and occasionally serves as the first point of contact for customers—particularly those not yet accustomed to the shop’s refined atmosphere.

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
- Earn Maelis Vorenn’s full trust and recognition as a master craftsman
- Refine his skills in gemstone cutting and setting to near-perfection
- Learn to identify and work with rare or unusual materials
- Overcome his hesitation and act with greater confidence in his own judgment

## Acquaintances
- **[[Maelis Vorenn]]** — Mentor and employer; a source of both inspiration and pressure
- Select contacts within the **[[Arcane Exchange Consortium]]** — Mostly indirect connections through his work at the shop
- Occasional interaction with customers, adventurers, and traders bringing in materials for appraisal

## Current Events
Corin has recently been entrusted with more responsibility within the shop, including preliminary evaluations of incoming gemstones and assisting with minor commissions. While outwardly a sign of progress, this has placed him under increasing internal pressure to perform without error.

At the same time, he has begun noticing subtle irregularities in some of the stones passing through the shop—particularly those recovered from dungeons. Though unsure of their significance, he has started keeping **private notes**, attempting to track patterns he does not yet fully understand.

## History
Corin Pell came to Ardentia seeking opportunity, drawn by the city’s growing reputation as a center of trade and arcane discovery. With a background in basic metalwork and an interest in fine craftsmanship, he eventually found his way to the Faceted Crown.

Recognizing both his potential and his discipline, Maelis took him on as an assistant. Under her guidance, Corin has steadily developed his skills, learning not only the technical aspects of the craft but also the importance of judgment, restraint, and attention to detail.

Though still early in his journey, Corin has already begun to distinguish himself—not through boldness, but through consistency and care.

## Notes
- Tone: Earnest, precise, slightly anxious but capable
- Strong use cases:
    - First point of contact in the shop
    - Assisting with appraisals or minor commissions
    - Providing insight into unusual materials (with uncertainty)
- Excellent quest hooks:
    - Corin asks the party to discreetly investigate a gemstone he finds troubling
    - A mistake (real or perceived) leads him to seek help correcting it
    - His private notes reveal a pattern others have overlooked
- Plays well as:
    - A **developing apprentice NPC**
    - A **source of early clues or suspicions**
    - A **contrast to Maelis’s confidence and authority**