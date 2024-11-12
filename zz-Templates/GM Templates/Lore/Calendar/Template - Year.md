---
tags:
  - "#Year"
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
>> **Aliases** | `INPUT[list:aliases]` |
>> **Era** | `INPUT[inlineListSuggester(optionQuery(#Era AND !"z_Templates"), useLinks(partial)):era]` |
>> **Calendar Link** |  `INPUT[textArea:calendarlink]` |

> [!infobox]
> #### Year Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}]` |
> **Era** | `VIEW[{era}][link]` |
> **Website** | `VIEW[\[Calendar Link\]({calendarlink})][text(renderMarkdown)]` |

# `=this.file.name`

> [!kirk|info] Video Tutorial (Remove me)
> <center><iframe width="560" height="315" src="https://www.youtube.com/embed/ovjRHvWb-cU?si=X-NHIhkAwLr1qyem" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>

> [!column|3 no-title]
>> [!metadata|characters] People
>> ```dataview
LIST
FROM outgoing([[]])
WHERE econtains(tags,"#Character")
SORT file.name ASC
>
>> [!metadata|location] Locations
>>  ```dataview
LIST
FROM outgoing([[]])
WHERE econtains(tags,"#Location")
SORT file.name ASC
>
>> [!metadata|misc] Misc
>>  ```dataview
LIST
FROM outgoing([[]])
WHERE !econtains(tags,"#Month") AND !econtains(tags,"#Location") AND !econtains(tags,"#Character")
SORT file.name ASC

## Overview

> [!kirk|info] Prompt (Remove me)
Provide a summary of the year, including its position within the larger era and any notable events or developments. Highlight key occurrences in politics, warfare, culture, technology, or magic that took place during this year. Mention significant figures who rose to prominence or had a major impact during this time. Consider any seasonal changes, festivals, or annual traditions that characteri5-Worldyear and how they might affect the campaign setting.

## Months

> [!kirk|info] Info (Remove me)
> You will need to manually add a new section for each month you use within your campaign. You will also need to update the Dataviews. Aurora and Novus are examples.

### [[Aurora]]

> [!metadata|event]- Recurring Events
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(startdate, ", ") AS "Start Date", eventcategory AS "Category", join(location, ", ") AS Location
> FROM "5-World"
> WHERE econtains(monthofoccurrence, link("Aurora")) AND econtains(tags, "#Event") AND !econtains(eventtype, "Significant")
> SORT startdate ASC

> [!metadata|event]- Significant Events
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(startdate, ", ") AS "Start Date", eventcategory AS "Category", join(location, ", ") AS Location
> FROM "5-World"
> WHERE econtains(yearofoccurrence, this.file.link) AND econtains(monthofoccurrence, link("Aurora")) AND econtains(tags, "#Event") AND econtains(eventtype, "Significant")
> SORT startdate ASC

#### Month Notes



### [[Novus]]

> [!metadata|event]- Recurring Events
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(startdate, ", ") AS "Start Date", eventcategory AS "Category", join(location, ", ") AS Location
> FROM "5-World"
> WHERE econtains(monthofoccurrence, link("Novus")) AND econtains(tags, "#Event") AND !econtains(eventtype, "Significant")
> SORT startdate ASC

> [!metadata|event]- Significant Events
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(startdate, ", ") AS "Start Date", eventcategory AS "Category", join(location, ", ") AS Location
> FROM "5-World"
> WHERE econtains(yearofoccurrence, this.file.link) AND econtains(monthofoccurrence, link("Novus")) AND econtains(tags, "#Event") AND econtains(eventtype, "Significant")
> SORT startdate ASC

#### Month Notes



