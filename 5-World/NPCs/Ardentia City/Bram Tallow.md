---
tags:
  - "#Character"
  - "#NPC"
art: zz-Attachments/bram-tallow.png
occupation:
  - Apothecary Assistant
  - Herbal Gatherer
condition: Healthy
pronounced: Bram Tal-oh
heritage: ""
ancestry: Human
gender: Male
age: Middle-aged
sexuality: Straight
alignment: Neutral Good
location:
  - "[[Elara’s Gentle Remedies]]"
  - "[[Ardentia City]]"
  - "[[Merchant's Quarter]]"
organization:
  - "[[Temple of Elara]]"
party1relation: Unmet
language:
  - Common
ideals: Hard work solves most problems; people deserve care whether they can pay or not
flaws: Stubborn; slow to accept new ideas; distrustful of overly complex solutions
fears: Being unable to protect those under his care; failing when strength is needed most
mannerisms: Keeps hands busy at all times; speaks plainly; nods instead of agreeing verbally
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
Bram Tallow is the steady, dependable presence behind **[[Elara’s Gentle Remedies]]**, handling the physical demands of the shop with quiet competence. Where Sister Ameline offers calm insight and gentle care, Bram provides **practical support, structure, and unwavering reliability**.

He manages supplies, prepares ingredients, maintains the herbal garden, and ensures the shop continues to function smoothly even during its busiest days. Though not formally trained as a healer in the same way as Ameline, Bram possesses a strong working knowledge of herbs and remedies, earned through experience rather than study.

To many regulars, Bram is the first face they see—a grounded, reassuring presence who speaks plainly and wastes no time getting to the heart of a problem.

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
- Keep Elara’s Gentle Remedies running smoothly and well-stocked
- Protect Sister Ameline and those under her care
- Maintain a steady supply of reliable, high-quality herbal ingredients
- Ensure that anyone who comes seeking help is not turned away unnecessarily

## Acquaintances
- **[[Sister Ameline Voss]]** — Employer and trusted partner; he respects her deeply and supports her without question
- Local herbal suppliers and gatherers — Maintains practical working relationships to secure needed ingredients
- Regular patrons of the apothecary — Often interacts with them directly, especially during intake or preparation

## Current Events
With supply lines becoming less reliable, Bram has taken on more frequent trips beyond the city to gather herbs personally. These journeys have grown increasingly difficult, as some plants appear altered or less abundant than before.

He has also begun noticing subtle changes in certain ingredients—differences in scent, color, or effect—that he cannot fully explain. While he does not voice these concerns openly, he has become more cautious in what he accepts and uses.

At the same time, the rising number of patients has pushed him to his limits, balancing physical exhaustion with his determination to keep the apothecary functioning.

## History
Bram Tallow did not begin his life in Ardentia as a healer. His early years were spent in labor—working fields, hauling goods, and taking on whatever work was available. Over time, he developed a familiarity with plants and natural remedies, learning what could be used to treat minor injuries and illnesses.

He came to Ardentia seeking steadier work and eventually found his way to the Temple of Elara. There, his reliability and work ethic brought him to Sister Ameline’s attention. When she established Elara’s Gentle Remedies, Bram was among the first she trusted to help her run it.

Since then, he has become an essential part of the shop—not through formal training, but through consistency, effort, and an unwavering sense of responsibility.

Today, she is regarded as one of the city’s most dependable healers—not because she promises miracles, but because she rarely fails those who come to her.

## Notes
- Tone: Grounded, practical, quietly protective
- Strong use cases:
    - Shop logistics and supply-related interactions
    - Straightforward advice or grounded perspective
    - Physical presence in tense or uncertain situations
- Excellent quest hooks:
    - Escorting Bram on a dangerous herb-gathering trip
    - Investigating changes in natural plant growth
    - Securing a disrupted supply chain
- Plays well as:
    - A **reliable support NPC**
    - A **protector figure within the shop**
    - A **bridge between everyday life and emerging threats**