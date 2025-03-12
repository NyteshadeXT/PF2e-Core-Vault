---
tags:
  - "#Character"
  - "#NPC"
art: zz-Attachments/Allustan.webp
pronounced: al-us-tan
ancestry: Human
gender: Male
age: Adult
sexuality: Straight
alignment: True Neutral
condition: Healthy
party1relation: Friend
language:
  - Elven
  - Dwarven
  - Common
location:
  - "[[Diamond Lake]]"
occupation:
  - Sage
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
> FROM "Campaign"
> WHERE econtains(holder, this.file.link) AND contains(tags, "Letter")
> SORT file.name ASC

> [!metadata|literature]- Literature
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, quicknote AS Notes
> FROM "Campaign"
> WHERE econtains(holder, this.file.link) AND contains(tags, "Literature")
> SORT file.name ASC

> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "Campaign"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC

## Overview
The "smartest man in town."  Allustan dwells within a charming red and deep blue house on one of the rare stretches of healthy grass in all of [[Diamond Lake]].  A small meditation garden abuts the face of the house, incorporating vertical stones and small pools of concentric circles.  The fresh paint and well-tended yard contrasts sharply with the rest of the seedy town, a testament to the locals' respect for (or fear of) a man whose prowess is known as far as [[Ardentia City]]. 

When the PCs first encounter Allustan, the wizard prefers to deal with them while walking around his grounds.  A large tree stump in the front yard serves well as an impromptu table where Allustan frequently deals with patrons.  After he has gotten to know the party he becomes somewhat less guarded in his approach and invites them inside to his study.  Hundreds of books stuff shelves built into each wall.  A dragonchess board sits frozen in mid-game on a mahogany table, exactly as it was when Allustan's falling out with Manzorian ended their ongoing long-distance contest.  Should a PC challenge him, Allustan presents his own set of intricately carved pieces. "Dragonchess," he explains, "is a metaphor for life and the forces that squabble for control of the world.  Before you can win, you must know that you are playing the game at all."

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

## Key Skills
Concentration +12 (+16 when casting defensively), Knowledge (arcana) +16, Knowledge (history) +13, Knowledge (local) +11, Knowledge (planes) +13, Listen +6, Spellcraft +18, Spot +6
Brew Potion, Scribe Scroll

## Goals
The old tombs in the hills fascinate Allustan, and were a primary factor in his decision to relocate to his childhood home.  He hopes to make a long-term study of the cairns and plans eventually to publish his findings in a small encyclopedia.  Any questions the PCs bring to him about the Whispering Cairn immediately pique his interest, and adventurers who bring regular news of plundered tombs and traps avoided find him more and more welcoming with each visit.

After a few days of consulting his books, Allustan immediately identifies any ancient items or glyphs from [[4-Campaign/Age of Worms/The Whispering Cairn]] as artifacts of the [[Aetherial Wardens]], a power ancient race of elemental beings who are said to have once had an empire that spanned worlds.  Eventually, these paragons of law clashed against a Primordial Lord of Chaos.  IN the great final battle on the fables fields of Aetherion, seven of the most powerful Wardens employed a weapon called the Rad of Law, that shattered even as it struck down the Lord of Chaos.  The Rod of Law became the Rod of Seven Parts, one of the most legendary artifacts in all of folklore.

With a few days of study, Allustan can identify each of the glyphs found in [[4-Campaign/Age of Worms/The Whispering Cairn]] and can explain the significance of key frescoes within the tomb.  As eh learns more of this growing mystery, Allustan becomes more and more helpful, eventually assisting the PCs at no charge simply to learn more about the cairn.  The [[Aetherial Wardens]], eh claims, were the oldest civilization to build tombs int he Cairn Hills.  All of the other cultures have simply emulated their practice.  The wealth in an unplundered Warden cairn, he says with a subtle flicker of greed in his eyes, might be beyond calculation.

## Acquaintances

> [!kirk|info] Prompt (Remove me)
Map out the intricate web of relationships surrounding this NPC. Who comprises their family, friends, and rivals? Explore the dynamics within these connections, detailing the history and events that shaped these relationships. What bonds tie them to their family or friends, and what conflicts or events have led to rivalries? Uncover the stories, shared experiences, or betrayals that have influenced the course of these relationships, shaping the NPC's interactions and choices.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present circumstances surrounding this NPC. What's happening in their life right now? Detail the ongoing events, challenges, or opportunities they're facing. Are they dealing with a personal crisis, pursuing a new goal, or involved in a conflict? Furthermore, what are they actively striving for at this moment? Explore their immediate objectives, aspirations, or plans. How are these current events and goals shaping their decisions and actions in the present narrative?

## History
Allustan grew up in [[Diamond Lake]] with his brother, [[Lanod Neff]]. The sons of the town's powerful and efficient governor-mayor, they abused their influence and shamed the mine managers with social indiscretions.  When finally they went too far, their father sent them both to [[Ardentia City]], urging Allustan to see an education and placing Lanod in a plum assignment with the city watch.  Allustan soon found himself in the prestigious [[Terramore Academy]], where his apt scholarship and bravado caught the attention of a powerful master wizard named Manzorian, a dynamic figure who traveled with some of the most renowned heroes of the day.

Manzorian offered to take on Allustan as his apprentice, assuring him a life of thrills and discovery. What Allustan got was a window into a world of manipulative chess masters willing to backstab trusted friends to honor abstract principles of balance and neutrality. Though he thrived in the company of Manzorian and his ilk, the politics proved too much to handle, and he split with the group more than a decade ago after a bitter ethical dispute. He retired to [[Diamond Lake]] only to find his inept brother in charge and facing challenges from all sides. So he remains, knowing that his presence supports a corrupt leader but unwilling to leave his family to the wolves.  The same political disinterest that got him into trouble with Manzorian keeps him from seeing the worst of his brother's offences.

## Notes
Allustan offers his library and considerable intelligence to the citizens of [[Diamond Lake]] as a sage, although few miners have reason to seek his services.  Allustan charges a standard rate of 2 gp per question. He does this more to sate his curiosity than for the money; gains from his adventuring days easily cover his modest lifestyle.