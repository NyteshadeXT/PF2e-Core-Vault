---
tags:
  - "#Party"
art: zz_Attachments/Misc/PlaceholderImage.png
---

![[PartyDashboardBackground.png|banner-fade]]

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
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
> **Aliases** | `INPUT[list:aliases]` |
>> **Journey Board** | `INPUT[Null][suggester(optionQu5-Worldpaign/Parties/Journey Boards"), useLinks(partial)):journeyboard]` | 

# <center> **`=this.file.name`** </center>
> [!metadata|characters] Characters
>> [!cards|dataview 5] **Parties**
>>```dataview
>> TABLE WITHOUT ID
>>	embed(link(art)) AS "Art",
>>     "<span style='display: block; text-align: center; margin-bottom: 5px;'>" + link(file.link, Title) + "</span>" AS Title
>> FROM "5-World"
>> WHERE econtains(whichparty, this.file.link) AND contains(tags, "Character") AND !contains(condition, "Dead")
>> SORT tags DESC, file.name ASC
>>```

> [!metadata|sessionlogs]- Session Logs `VIEW[{journeyboard}][link]`
>> [!cards|dataview 3]
>>```dataview
TABLE WITHOUT ID
>>     "<span style='display: block; border-bottom: 2px solid var(--accent); text-align: center; margin-bottom: 5px;'>" + link(file.link, Title) + "</span>" AS Title,
>>     "<span style='display: block; border-bottom: 2px solid var(--accent); text-align: center; margin-bottom: 5px;'>" + sessiondate + "</span>" AS SessionDate,
>>	quicknote AS "QuickNotes"
>> FROM "5-World"
>> WHERE econtains(whichparty, this.file.link) AND contains(tags, "SessionNote")
>> SORT date(sessiondate, "dd/MM/yyyy") DESC LIMIT 9
>>```

> [!metadata|adventure]- Adventures
>> [!cards|dataview 3]
>>```dataview
TABLE WITHOUT ID
>>     "<span style='display: block; border-bottom: 2px solid var(--accent); text-align: center; margin-bottom: 5px;'>" + link(file.link, Title) + "</span>" AS Title,
>>	quicknote AS "QuickNotes"
>> FROM "5-World"
>> WHERE econtains(whichparty, this.file.link) AND contains(tags, "Adventure") AND !contains(status, "✅") AND !contains(status, "❌")
>>SORT file.name ASC
>>```

> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "5-World"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC

## NPC Relations
> [!kirk|info] Guide (Remove me)
If you are using more than 1 party, be sure to edit the data within these tables to 'party2relation' or whichever party it is you're making.

> [!column|3 no-title]
>
>> [!metadata|family] Family
>> ```dataview
>> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
>> FROM "5-World"
>> WHERE econtains(party1relation, "Family") AND !contains(condition, "Dead")
>> SORT file.name ASC
> 
>> [!metadata|ally] Ally
>> ```dataview
>> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
>> FROM "5-World"
>> WHERE econtains(party1relation, "Ally") AND !contains(condition, "Dead")
>> SORT file.name ASC
>
>> [!metadata|friend] Friends
>> ```dataview
>> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
>> FROM "5-World"
>> WHERE econtains(party1relation, "Friend") AND !contains(condition, "Dead")
>> SORT file.name ASC
>
>> [!metadata|like] Like
>> ```dataview
>> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
>> FROM "5-World"
>> WHERE econtains(party1relation, "Like") AND !contains(condition, "Dead")
>> SORT file.name ASC
> 
>> [!metadata|dislike] Dislike
>> ```dataview
>> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
>> FROM "5-World"
>> WHERE econtains(party1relation, "Dislike") AND !contains(condition, "Dead")
>> SORT file.name ASC
> 
>> [!metadata|enemy] Enemy
>> ```dataview
>> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases
>> FROM "5-World"
>> WHERE econtains(party1relation, "Enemy") AND !contains(condition, "Dead")
>> SORT file.name ASC
> 

## Notes

