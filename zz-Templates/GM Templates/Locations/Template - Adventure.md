---
tags:
  - "#Adventure"
art: zz-Attachments/PlaceholderImage.png
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
>> **Adventure Level**|`INPUT[textArea:adventure_level]`|

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
> [!kirk|info] Prompt (Remove me)
> Provide an overarching overview of this adventure. What is the central theme or conflict driving the narrative? Outline the potential quests or objectives that the players may embark on. Consider the variety of challenges, encounters, or tasks they might face. Additionally, describe how the adventure begins. What inciting incident or call to action propels the players into the unfolding storyline? Use this section to set the stage, introduce key elements, and establish the initial motivations that will guide the players throughout the adventure.

## Adventure Hooks
> [!kirk|info] Prompt (Remove me)
> Adventure hooks are the catalysts that pull players into a story, giving them a reason to embark on their journey. They set the stage for excitement, mystery, and danger, enticing characters to step beyond the mundane and into the unknown. A hook can be as simple as a cryptic letter arriving in the dead of night, a town elder pleading for help, or an ancient prophecy foretelling doom unless heroes intervene. Whether subtle or dramatic, adventure hooks serve a vital role in player engagement—sparking curiosity, driving motivation, and creating urgency. The best hooks make players feel personally involved, pushing them to ask, "What happens next?" and propelling them deeper into the unfolding tale. 

## [[Template - Quest]]
### Aftermath
> [!kirk|info] Prompt (Remove me)
Reflect on the aftermath of the quest through the perspectives of NPCs and the impact it has had on those involved and the surrounding areas. Describe how the events of the quest have influenced the lives, emotions, or circumstances of the NPCs connected to the journey. How has the resolution or outcome affected their daily lives, relationships, or beliefs? Furthermore, explore the repercussions on the surrounding areas—has it brought change, stability, or chaos? What lasting effects or changes can be observed in the environment or among the people post-quest?

### Events Between Next Quests
> [!kirk|info] Prompt (Remove me)
Detail the events and developments that unfold between the previous quest and the upcoming one. Describe how the resolution of the previous quest has influenced the environment, characters, or circumstances. Have there been any lingering consequences, new opportunities, or challenges emerging from the aftermath of the previous quest? Furthermore, set the stage for the next quest—what seeds are being sown, what rumors are spreading, or what new developments are arising that may lead the characters into their next journey?

## [[Template - Quest]]
### Aftermath


### Events between Next Quest


## Notes