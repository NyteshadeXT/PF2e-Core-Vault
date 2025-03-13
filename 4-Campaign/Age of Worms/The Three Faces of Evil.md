---
tags:
  - "#Adventure"
art: zz-Attachments/Three Faces of Evil Banner.png
quicknote: The Three Faces of Evil requires the PCs to sneak into Dourstone Mine, destroy The Ebon Triad cultists, and defeat a newly born creature knows as the Ebon Aspect.
whichparty: "[[Age of Worms Party Dashboard]]"
adventure_status: Not Started
adventure_level: 
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
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
>> **Aliases** | `INPUT[list:aliases]` |
>> **Quick Notes** |  `INPUT[textArea:quicknote]`
>> **Which Party** | `INPUT[Null][suggester(optionQuery(#Party AND !"z_Templates"), useLinks(partial)):whichparty]` |
>> **Adventure Status** | `INPUT[Status][:adventure_status]` |

> [!infobox]
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> #### Adventure Info
>  |
> ---|---|
> **Party** | `VIEW[{whichparty}][link]` |
> **Status** | `VIEW[{adventure_status}]` |
> **Adventure Level** | `VIEW[{adventure_level}]` |

# **`=this.file.name`**

> [!metadata|quests]- Quests
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, quicknote AS Notes, status AS Status
> FROM "5-World"
> WHERE econtains(tags, "Quest") AND econtains(adventure, this.file.link)
> SORT file.name ASC



## Overview
The Three Faces of Evil requires the PCs to sneak into Dourstone Mine, destroy [[The Ebon Triad]] cultists, and defeat a newly born creature knows as the Ebon Aspect.  The miners themselves, while not necessarily innocents, aren't cultists.  The PCs must sneak by them or use Diplomacy to gain access to the mines.  Once they overcome this obstacle, they must defeat each of the cults that comprise this cell of [[The Ebon Triad]]. Finally, as the last cultists fall, the Ebon aspect arises to avenge its worshiper-creators.  once the PCs defeat this abomination, they escape back to the surface, where they quickly become embroiled in their next adventure.

# Part 1: What Writhes Within
Allustan recently unearthed increasing evidence of strange undead creatures infested with tiny green worms stalking the hills south of Diamond Lake.  He is worried that these undead creatures could represent a greave threat to [[Diamond Lake]]. Thus, he asks the adventurers to pursue the few leads he has uncovered so far.

Allustan's studies show that the worms might be somehwo connected to an ancient temple hidden beneath the earth.  According to his calculations, the temple is located beneath a copper mine owned by 