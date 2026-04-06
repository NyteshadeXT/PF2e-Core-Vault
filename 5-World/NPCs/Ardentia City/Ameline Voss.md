---
tags:
  - "#Character"
  - "#NPC"
art: zz-Attachments/sister-ameline-voss.png
occupation:
  - Apothecary
  - Devotee of Elara
condition: Healthy
pronounced: AM-eh-leen Voss
heritage: ""
ancestry: Human
gender: Female
age: Adult
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
  - Elven
ideals: Healing requires patience; every life has value; care must be given freely where possible
flaws: Overextends herself; reluctant to turn anyone away; avoids decisive confrontation
fears: Failing to save someone she could have helped; a spreading illness beyond her ability to treat
mannerisms: Speaks softly; maintains steady eye contact; gently touches a wrist or shoulder when assessing someone
religion:
  - "[[Elara]]"
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
Sister Ameline Voss is the calm and compassionate presence behind **[[Elara’s Gentle Remedies]]**, a healer whose reputation is built not on dramatic miracles, but on **steadfast care and quiet reliability**.

Unlike many practitioners in Ardentia who rely heavily on overt magic, Ameline believes that true healing is a balance of knowledge, patience, and understanding. She blends herbalism, alchemy, and spiritual practice into a method that treats both the **symptoms and the person**.

She is deeply connected to the **[[Temple of Elara]]**, though she spends most of her time in the apothecary rather than the temple halls. To many, she represents a more personal form of devotion—one expressed through action rather than ceremony.

Those who come to her often find more than treatment. They find someone who listens.

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
- Provide reliable, accessible care to the people of Ardentia
- Understand and treat the growing number of **unusual ailments tied to dungeon exposure**
- Preserve the balance between alchemical practice and compassionate healing
- Train others (quietly, and carefully) to carry on her methods

## Acquaintances
- **[[Bram Tallow]]** — Loyal assistant; handles physical tasks and supply management, allowing Ameline to focus on treatment
- Members of the **[[Temple of Elara]]** — Maintain spiritual and logistical support ties, though Ameline operates with relative independence
- Occasional interaction with **[[Seraphine Dhalis]]** — Particularly when magical afflictions intersect with arcane items
- Various regular patrons — Laborers, adventurers, and locals who trust her care

## Current Events
Ameline has begun noticing a troubling pattern among her patients—individuals returning from newly formed dungeons with **persistent, unusual conditions**. These ailments often resist standard treatments, presenting as lingering fatigue, subtle physical changes, or discomfort that does not align with known diseases.

While she continues treating each case individually, Ameline has quietly started **tracking symptoms and outcomes**, building a growing body of observations. She has not yet shared her concerns widely, but her preparations suggest she believes something larger may be developing.

At the same time, shortages of certain medicinal herbs have begun to strain her ability to maintain consistent remedies, forcing her to consider alternative sources—or outside help.

## History
Sister Ameline Voss began her service within the **Temple of Elara**, where she trained in traditional healing practices rooted in both herbal knowledge and spiritual care. Early in her service, she showed a strong aptitude not just for treatment, but for understanding the underlying causes of illness.

Recognizing the increasing demands of a growing city, she was entrusted with establishing a more accessible place of care—what would become **Elara’s Gentle Remedies**. There, she expanded her practice to include alchemical methods, carefully integrating them without losing the principles that guided her training.

As Ardentia evolved and new dangers emerged—particularly those tied to dungeon exploration—Ameline adapted her work to meet these challenges. While others sought faster or more powerful solutions, she remained focused on **consistency, safety, and long-term care**.

Today, she is regarded as one of the city’s most dependable healers—not because she promises miracles, but because she rarely fails those who come to her.

## Notes
- Tone: Gentle, composed, reassuring, quietly burdened by responsibility
- Strong use cases:
    - Healing and recovery scenes
    - Diagnosing unusual or unknown conditions
    - Moral grounding or emotional roleplay moments
- Excellent quest hooks:
    - Investigating a spreading, dungeon-linked illness
    - Gathering rare herbs or ingredients
    - Treating an NPC (or PC) with a condition that resists magic
- Plays well as:
    - A **trusted healer NPC**
    - A **source of early warning for larger threats**
    - A **moral compass within Ardentia**