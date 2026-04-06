---
tags:
  - "#Character"
  - "#NPC"
art: zz-Attachments/lysa-embercoil.png
occupation:
  - Artificer
  - Researcher
condition: Healthy
pronounced: Lie-sah Em-ber-coil
aliases: The Ember Savant, Coilwright
heritage:
ancestry: Human
gender: Female
age: Adult
sexuality: Bisexual
alignment: True Neutral
location:
  - "[[Ironbound Reliquary]]"
organization:
  - "[[Dungeon Seekers Guild]]"
party1relation: Unmet
language:
  - Common
  - Jotun
  - Draconic
ideals: Discovery through risk; resonance is meant to evolve, not be contained
flaws: Overly curious; prone to pushing boundaries too far
fears: Becoming irrelevant; being forced to abandon her research
mannerisms: Talks quickly when excited; gestures with glowing tools; loses track of time entirely while working
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

Where Dorrik Vance tempers power, **Lysa Embercoil** seeks to *understand* it—and perhaps even let it breathe.

Younger, sharp-eyed, and perpetually surrounded by half-finished constructs and glowing instruments, Lysa represents the next evolution of Ardentia’s magical craftsmanship. She does not see dungeon energy as something to be restrained, but as something alive—something that can grow, adapt, and transform alongside its wielder.

As Dorrik’s assistant at the **[[Ironbound Reliquary]]**, she walks a careful line between respect and rebellion. She has learned his methods, mastered them even—but she constantly tests their limits, often to his frustration.

Adventurers tend to find Lysa far more approachable than Dorrik. She is eager to examine their findings, fascinated by their stories, and always searching for new materials to experiment with. However, those who spend enough time around her begin to notice a pattern: her work sometimes behaves in ways even she cannot fully explain.

> [!column|2 no-title]
>
>> [!metadata|ideals] Ideals
> Discovery through risk; resonance is meant to evolve, not be contained
>
>> [!metadata|flaws] Flaws
> Overly curious; pushes boundaries too far
> 
>> [!metadata|fear] Fears
> Becoming irrelevant; losing the chance to redefine magical crafting
>
>> [!metadata|mannerism] Mannerisms
> Speaks rapidly when excited; gestures with tools; forgets time while working

## Goals

### Redefine Arcane Crafting
Lysa wants to move beyond Dorrik’s binding techniques and develop methods that allow items to *evolve* alongside their wielders—aligning strongly with your Chimeracrafting themes.

### Unlock Resonance Theory
She is actively studying how dungeon energy reacts to emotion, intent, and prolonged exposure, believing it may be semi-sentient.

### Prove Herself
While she respects Dorrik, she is determined to step out of his shadow and establish her own legacy within Ardentia.

## Acquaintances

- **[[Dorrik Vance]]** – Mentor, rival, and surrogate father figure. Their philosophical differences create constant tension.
- **[[Arcane Exchange Consortium]]** – Provides her access to rare materials, though they monitor her work closely.
- Adventurers & Dungeon Seekers – She actively seeks them out for samples, stories, and testing opportunities.

## Current Events

- Lysa is secretly experimenting with *adaptive resonance items*—gear that changes properties over time.
- She suspects that certain dungeon materials are not inert, but *responsive*, possibly even aware.
- One of her experimental items has begun reacting to her presence specifically—something she hasn’t yet shared with Dorrik.

## History

Lysa Embercoil arrived in Ardentia as a promising but unproven talent, quickly distinguishing herself through her intuitive understanding of magical interactions. Unlike many who approached magic academically, Lysa learned through experimentation—often reckless, but undeniably effective.

Dorrik took her in reluctantly after witnessing her stabilize a failed binding attempt that should have resulted in catastrophe. Since then, she has served as both his greatest success and his greatest concern.

Her work has already begun to challenge long-held assumptions about how magic and materials interact. Some believe she represents the future of Ardentia’s craft. Others worry she may be repeating the same dangerous path Dorrik once walked.

## Notes

- Strong hook into:
  - **Chimeracrafting (Synthesis/Awakening evolution mechanics)**
  - Adaptive or scaling magic items
- Roleplay Notes:
  - Fast-talking, excited, slightly chaotic energy
  - Contrasts Dorrik’s grounded, controlled demeanor
- Potential Plot Hooks:
  - Experimental item bonds with a PC
  - Lysa’s research attracts unwanted attention (Consortium, rival factions, or something from the Dungeons)