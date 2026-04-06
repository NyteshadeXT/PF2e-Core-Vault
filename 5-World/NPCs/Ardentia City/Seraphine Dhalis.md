---
tags:
  - "#Character"
  - "#NPC"
art: zz-Attachments/seraphine-dhalis.png
occupation:
  - Merchant
condition: Healthy
pronounced: Ser-ah-feen Dah-liss
aliases: The Emporium Mistress, The Quiet Archivist
heritage: Elf
ancestry: Seer
gender: Female
age: Adult
sexuality: Straight
alignment: True Neutral
ownedlocation:
  - "[[Spellweave Emporium]]"
location:
  - "[[Spellweave Emporium]]"
organization:
  - "[[Dungeon Seekers Guild]]"
party1relation: Unmet
language:
  - Common
  - Elven
  - Draconic
ideals: Magic must be understood before it is trusted; knowledge is a responsibility
flaws: Overly cautious; slow to act without sufficient information
fears: Unchecked magical instability; the spread of dangerous artifacts
mannerisms: Speaks softly but precisely; pauses before answering; maintains steady eye contact
religion:
  - "[[Thalor]]"
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

Seraphine Dhalis is a figure of quiet authority within Ardentia—measured, observant, and rarely caught unprepared. As the proprietor of the **[[Spellweave Emporium]]**, she has built a reputation not through spectacle, but through **consistency, discretion, and trust**.

Where others chase magical breakthroughs, Seraphine focuses on **understanding and stewardship**. She believes that magic—especially that touched by the influence of Dungeons—must be carefully studied, documented, and controlled before it is allowed to circulate. This philosophy has made her one of the most respected curators of arcane goods in the city.

Seraphine is not easily impressed, but she pays close attention to those who survive the dangers of the world beyond Ardentia. Adventurers who demonstrate caution, intelligence, and restraint may find in her a valuable ally—one willing to share knowledge or access to resources that others would keep hidden.

---

> [!column|2 no-title]
>
>> [!metadata|ideals] Ideals
> Magic must be understood before it is trusted; knowledge is a responsibility
>
>> [!metadata|flaws] Flaws
> Overly cautious; slow to act without sufficient information
> 
>> [!metadata|fear] Fears
> Unchecked magical instability; proliferation of dangerous artifacts
>
>> [!metadata|mannerism] Mannerisms
> Speaks softly; deliberate pauses; unwavering eye contact

---

## Goals

### Maintain Arcane Stability
Seraphine seeks to ensure that dangerous or poorly understood magic does not spread unchecked through Ardentia.

### Expand the Emporium’s Reach
She aims to solidify the Spellweave Emporium as the most trusted source of magical goods and knowledge in the region.

### Document the Unknown
Seraphine is quietly compiling detailed records of dungeon-influenced items, building a private archive that may one day rival entire academies.

---

## Acquaintances

- **[[Tovin Mire]]** – Her assistant; capable, though occasionally too eager to move quickly.
- **[[Arcane Exchange Consortium]]** – A mutually beneficial relationship; Seraphine values their reach but maintains independence in her decisions.
- **[[Dorrik Vance]]** – A professional peer. She respects his discipline, though their philosophies differ in application.

---

## Current Events

- Seraphine has recently acquired several unusual items from newly formed Dungeons that resist standard identification techniques.
- She is seeking reliable adventurers to retrieve specific items for study—those less likely to misuse what they find.
- There are quiet concerns that some items entering Ardentia’s markets are bypassing proper vetting procedures.

---

## History

Seraphine Dhalis came to Ardentia in the years following the Shattering, drawn by the sudden influx of magical artifacts and the urgent need for those who could make sense of them. Trained in both arcane theory and historical scholarship, she quickly distinguished herself as someone capable of identifying not just what an item *did*, but what it *was*.

Recognizing the dangers posed by poorly understood magic, Seraphine established the Spellweave Emporium as a place where such items could be responsibly handled, cataloged, and distributed. Her methods emphasized caution and precision, earning her the trust of both independent adventurers and the growing **[[Arcane Exchange Consortium]]**.

Over time, her work helped shape early standards for magical trade within Ardentia. While others pursued innovation or power, Seraphine built her legacy on something far less visible—but far more enduring: **trust**.

---

## Notes

- Ideal for:
  - Quest-giver focused on investigation and retrieval
  - Source of reliable magical information
  - Gatekeeper to rare but *safe* magical items
- Tone:
  - Calm, controlled, quietly intense
- Contrast:
  - Less experimental than [[Lysa Embercoil]]
  - More measured than [[Dorrik Vance]]