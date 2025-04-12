---
tags:
  - "#Party"
art: zz-Attachments/PartyDashboardBackground.png
banner: "[[zz-Attachments/PartyDashboardBackground.png]]"
content-start: 476
banner-height: 450
banner-x: 49
banner-y: 32
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
>> FROM "2-Party/Age of Worms"
>> WHERE econtains(whichparty, this.file.link) AND contains(tags, "Character") AND !contains(condition, "Dead") AND contains(Status, "Active")
>> SORT tags DESC, file.name ASC
>>```

> [!metadata|sessionlogs]- Session Logs `VIEW[{journeyboard}][link]`
>> [!cards|dataview 3]
>>```dataview
TABLE WITHOUT ID
>>     "<span style='display: block; border-bottom: 2px solid var(--accent); text-align: center; margin-bottom: 5px;'>" + link(file.link, Title) + "</span>" AS Title,
>>     "<span style='display: block; border-bottom: 2px solid var(--accent); text-align: center; margin-bottom: 5px;'>" + date(sessiondate) + "</span>" AS SessionDate,
>>	quicknote AS "QuickNotes"
>> FROM "2-Session Journals"
>> WHERE econtains(whichparty, this.file.link) AND contains(tags, "SessionNote")
>> SORT date(sessiondate) DESC LIMIT 9
>>```

> [!metadata|adventure]- Adventures
>> [!cards|dataview 3]
>>```dataview
TABLE WITHOUT ID
>>     "<span style='display: block; border-bottom: 2px solid var(--accent); text-align: center; margin-bottom: 5px;'>" + link(file.link, Title) + "</span>" AS Title,
>>	quicknote AS "QuickNotes"
>> FROM "4-Campaign/Age of Worms"
>> WHERE econtains(whichparty, this.file.link) AND contains(tags, "Adventure") AND contains(adventure_status, "In Progress") AND !contains(adventure_status, "Not Started") AND !contains(adventure_status, "Complete")
>> SORT file.name ASC
>>```

## NPC Relations
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

