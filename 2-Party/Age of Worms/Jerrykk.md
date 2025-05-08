---
noteType: Player
tags:
  - "#Character"
  - "#Player"
art: zz-Attachments/Jerrykk.png
Status: Active
Player: Bob
pronounced: jair-rick
Class: Witch
level: 4
Ancestry: Goblin
gender: Male
age: Teen
Heritage: Nephilim
location:
  - "[[Diamond Lake]]"
whichparty:
  - "[[Age of Worms Party Dashboard]]"
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
>>---|---|
>> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>
>> [!metadata|metadataoption]- Bio
>> #### Bio
>>  |
>>---|---|
>> **Status**  | `INPUT[Status][:Status]` |
>> **Played By** |  `INPUT[textArea:Player]`
>> **Character Sheet** |  `INPUT[textArea:charactersheet]`
>> **Pronounced** |  `INPUT[textArea:pronounced]`
>> **Aliases** | `INPUT[list:aliases]` |
>> **Class** | `INPUT[Class][suggester:Class]` |
>> **Level** | `INPUT[number:level]` |
>> **Ancestry** | `INPUT[Ancestry][suggester:Ancestry]` |
>> **Heritage** | `INPUT[Heritage][suggester:Heritage]` |
>> **Gender** | `INPUT[Gender][:gender]` |
>> **Age** | `INPUT[Age][:age]` |
>
>> [!metadata|metadataoption]- Info
>> #### Player Info
>>  |
>>---|---|
>> **Occupations** | `INPUT[Occupation][inlineListSuggester:occupation]` |
>> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Religions** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):religion]` |
>> **Owned Locations** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):ownedlocation]` |
>> **Current Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |
>> **Which Party** | `INPUT[inlineListSuggester(optionQuery(#Party AND !"z_Templates"), useLinks(partial)):whichparty]` |
>> **Condition** | `INPUT[Condition][:condition]` |

> [!infobox]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Played By: `VIEW[{playedby}][text]`
> ###### Bio
>  |
> ---|---|
> **Class** | `VIEW[{Class}]` |
> **Level** | `VIEW[{level}]` |
> **Aliases** | `VIEW[{aliases}][text]` |
> **Ancestry** | `VIEW[{Ancestry}]` |
> **Heritage** | `VIEW[{Heritage}]` |
> **Gender** | `VIEW[{gender}]` |
> **Age** | `VIEW[{age}]` |
> ###### Info
>  |
> ---|---|
> **Occupations** | `VIEW[{occupation}][text]` |
> **Organization** | `VIEW[{organization}][link]` |
> **Religions** | `VIEW[{religion}][link]` |
> **Owned Locations** | `VIEW[{ownedlocation}][link]` |
> **Current Location** | `VIEW[{location}][link]` |
> **Condition** | `VIEW[{condition}]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

> [!metadata|charactersheet]- Character Sheet
> ```custom-frames
frame: Demiplane
style: height: 700px;
>```

> [!metadata|servicerequests]- Service Requests
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, quicknote AS Notes
> FROM "Campaign"
> WHERE econtains(customer, this.file.link) AND contains(tags, "Service") AND !contains(status, "✅") AND !contains(status, "❌")
> SORT file.name ASC

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

## Ideals
### Loves


### Hates


## Goals
### Short-term


### Long-term


## History
### Birth Location


### Childhood


### Journey
His father Jorrkk was a scout for his clan, always delving into strange places. He met Jerrik's mother in a strange dungeon that seemed to be swept away after a season, in the Spring and Summer, he visited often, but never could remember quite clearly what took place there. It was gone by the first leaves of fall, but on his last trip out, he was surprised to be carrying a baby goblin out. When asked, he insisted the baby was his, but he wasn't at all clear how. Growing up, Jerrikk always loved the night sky more than anything, and asked far too many questions about the stars and planets and all the strange phenomena he saw, which made him unliked by many. One Elder was able to tolerate him, someone who turned out to share the same interests, and taught him all he knew. This Elder took him on as apprentice and aid in her twilight years. Flikka, she was called, and a very old goblin she was. Recently, after a bought of sickness, she passed, but on that very night two very strange things happened to occur. A terrible storm, and a strange raccoon appeared from the flames of Flikka's hearth, and spoke but once only in goblin voice to Jerrikk, "I am a part of yourself. Your mother by choice is now gone, but your mother in truth is calling for you. There are important things you must aid in the doing." As the strange racoon cuddled closely to him, Jerrikk's Halo manifested. Jerrikk had realized the only name he could give this special raccoon was his own, but he wishes not to talk about it to others, so makes it a joke of it normally.

### Worship


## Notes
Jerrikk suspects his birth mother and patron might be the same being.