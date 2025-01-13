---
tags:
  - "#Character"
  - "#NPC"
art: zz_Attachments/Misc/PlaceholderImage.png
pronounced: Khel-lek
ancestry: Human
gender: Male
age: Adult
sexuality: Straight
alignment: Neutral Evil
language:
  - Common
organization:
  - "[[Dungeon Seekers Guild]]"
occupation:
  - Mage
location:
  - "[[Lazare's House]]"
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

> [!metadata|literature]- Literature
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, quicknote AS Notes
> FROM "5-World"
> WHERE econtains(holder, this.file.link) AND contains(tags, "Literature")
> SORT file.name ASC

> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "5-World"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC

## Overview
THis is the spot for an overview.

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
### Example #1

> [!kirk|info] Prompt (Remove me)
> Unravel the aspirations that drive this NPC forward. What are their primary goals, desires, or ambitions? Explore the motivations behind their actions, whether it's seeking power, redemption, love, revenge, or a sense of belonging. Delve into the depth of their aspirations, considering how these goals shape their decisions and interactions within the world. What drives this NPC and what steps might they take to achieve their life's purpose?

## Acquaintances

> [!kirk|info] Prompt (Remove me)
Map out the intricate web of relationships surrounding this NPC. Who comprises their family, friends, and rivals? Explore the dynamics within these connections, detailing the history and events that shaped these relationships. What bonds tie them to their family or friends, and what conflicts or events have led to rivalries? Uncover the stories, shared experiences, or betrayals that have influenced the course of these relationships, shaping the NPC's interactions and choices.

## Current Events
Leader of the trio of [[Dungeon Seekers Guild]] adventurers currently exploring the empty Stirgenest Cairn outside Diamond Lake. Khellek makes a point to challenge any seemingly worth opponent, using the dragonchess as a pretense to pump natives for information on nearby tombs.

## History

> [!kirk|info] Prompt (Remove me)
> Trace the life story of this NPC, unraveling their past and the events that shaped them. Explore their origins, upbringing, and significant moments that molded their character. What pivotal events, traumas, or triumphs have marked their journey? Delve into the milestones, turning points, and impactful experiences that have shaped who they are today. How have these experiences influenced their beliefs, skills, and motivations?

## Notes
Khellek wears a simple silver ring on the third finger of his right hand.  The face of this ring bears an eight-ponted star symbol and is identical to the ring found on the finger of the ghoulish Ulvant in area 21 of [[The Whispering Cairn]]. Both Ulavant and Khellek belong to the [[Meteor's Chosen]] and if Khellek sees a PC with the ring he assumes that PC is also a member.  At the sight of the ring, Khellek arches his eyebrows respectfully and says "Revelation comes also in darkness."  When the PC does not respond with the appropriate "Thus darkness is also light," Khellek grows suspicious and changes the subject, convinced that the PCs have stolen the ring from another of the Chosen.  He begins pestering them about how they came across the trinket.  IF told about the Whispering Cairn, Khellek gathers his companions Auric and Tirra and sets out to plunder its riches for himself.




