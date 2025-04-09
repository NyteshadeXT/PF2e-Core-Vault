---
<%* const firstname = await tp.system.prompt("Enter Firstname"); console.log(firstname); -%><%* const lastname = await tp.system.prompt("Enter Lastname"); console.log(lastname); -%><%*
const hasTitle = !tp.file.title.startsWith("NewNPC");
let title;
if (!hasTitle) {
    title = firstname+" "+lastname;
    await tp.file.rename(firstname+" "+lastname);
} else {
    title = tp.file.title; 
}
await tp.file.move(`5. World Encyclopedia/NPCs/${title}`);
_%>
title: <% title %>
firstname: <% firstname %>
lastname: <% lastname %>
aliases:
  - <% firstname %>
session_appearances: 
  - 
race: 
  name: 
occupation: 
guildGroups: 
class: Commoner
fc-calendar: Chip of the old block
fc-category: NPC Birthday
fc-display-name: <% title %>'s Birthday
fc-date:
  day: 
  month: 
  year:
year: 
home:
location:
portrait: ""
alive: true
partyFamiliarity: {}
partyRelation: {}
currentPartyRelation: Unknown
age: 1001
gender: 1
gender_name: Male
category: person
type: NPC
tags:
  - NPC
  - Event
status: ❌
scratch_note: ""
birthday: -30
---

# <% title %> <span style="float:right">Status: `INPUT[inlineSelect(option(❌), option(✅)):status]`</span>

> [!infobox | wfit]
> # <font size=6>`VIEW[{title}]` </font>
> # Birthday
> | Day | Month | Year | 
> |:---:|:---:|:---:|
> | `INPUT[inlineSelect(option(1), option(2), option(3), option(4), option(5), option(6), option(7), option(8), option(9), option(10), option(11), option(12), option(13), option(14), option(15), option(16), option(17), option(18), option(19), option(20), option(21), option(22), option(23), option(24), option(25), option(26), option(27), option(28), option(29), option(30)):fc-date.day]` | `INPUT[inlineSelect(option(1, Alturiak),option(2, Ches), option(3, Tarsakh), option(4, Mirtul), option(5, Kythorn), option(6, Flamerule), option(7, Eleasias), option(8, Eleint), option(9, Marpenoth), option(10, Uktar), option(11, Nightal), option(12, Hammer)):fc-date.month]` | `INPUT[number(class(nb-mb-55)):year]` `VIEW[\[{year}-*\]][text(hidden):fc-date.year]` `VIEW[{World Overview#dpy}*{year}+{World Overview#dpm}*({fc-date.month}-1)+{fc-date.day}][math(hidden):birthday]`|
> # Basic Information
> ||
> |-|-|
> | Home | `INPUT[suggester(optionQuery(#Settlement OR #Area AND !"z_Templates")):home]` |
> | Location | `INPUT[suggester(optionQuery(#Location AND !"z_Templates")):location]` |
> | Occupation| `VIEW[{occupation}]` |
> | Guilds & Groups | `=replace(join(link(this.guildGroups), ","),",","<BR>")` |
> | Party Familiarity | ``$=dv.span('`' + `INPUT[inlineSelect(option(Unknown), option(Rumoured), option(Seen), option(Talked To), option(Familiar)):partyFamiliarity["` + dv.current().campaign + '"]]' + '`');`` |
> | Party Relation | ``$=dv.span('`' + `INPUT[inlineSelect(option(Neutral), option(Ally), option(Lover), option(Family), option(Friend), option(Dislike), option(Enemy)):partyRelation["` + dv.current().campaign + '"]]' + '`');``|
> # Personal Details
> ||
> |---|---|
> | Age | `VIEW[floor(({Calendar#time}-{birthday})/{World Overview#dpy})][:age]` yr|
> | Vitality | `INPUT[toggle():alive]` `VIEW[{alive} ? "Alive" : "Dead"]` |
> | Gender | `INPUT[inlineSelect(option(1, Male), option(2, Non-Binary), option(3, Female)):gender]` `VIEW[{gender} == 1 ? "Male" : {gender} == 2 ? "Non-Binary": "Female"][math(hidden):gender_name]`|

### `VIEW[{race.name}]` • `VIEW[{occupation}]` • `VIEW[{class}]`

>[!column| alt-line no-i no-t] 
>>[!info| clean] **Overview**
>>> [!caption|left]
>>> `VIEW[!\[\[{title}.png | hsmall \]\]][text(renderMarkdown):portrait]`
>>> `VIEW[\[\[{title}.png \| {age}yr {gender_name} {race.name}\]\]][text(renderMarkdown)]` 
>>
>>**<font size=4>`VIEW[\[\[{title}\]\]][text(renderMarkdown)]`</font>**  ==Contextual existence==. ==Mannerism and desires/goals==.
>> 
> 
>> [!info|clean no-icon]  **Continuation**
>>
>> ==Campaign context==.
>> 
>> <font color=darkred>**Appearance:**</font>  ==Appearance==
>>
^NPCoverview

>[!column|clean no-icon alt-line] DM Notes 
>>[!note|bg-c-green no-icon clean]+ Quests/Story Hooks 
>> <center><sup></sup></center>
>>
>> - [ ] 
>> - [ ] 
>> - [ ]  
>> - [ ]  
>
>>[!note|bg-c-purple no-icon clean] Information Held  
>> <center><font size=2>Valuable information</font></center>
>> 
>> - [ ] 
>> - [ ] 
>> - [ ]  
>> - [ ]  
>
>>[!note|bg-c-blue no-icon clean] Relationships 
>> <center><font size=2>Friends, Family, Acquaintances, Neutrals</font></center>
>>
>> - [ ] 
>> - [ ] 
>> - [ ]  
>> - [ ]  
>
>>[!info|bg-c-orange clean] Secrets 
>>
>> - [ ] 
>> - [ ] 
>> - [ ]  
>> - [ ]  
>
<center><sub><sub> Checkmark - PC Party is Knowledgeable of that Detail/Hook/Relationship </sub></sub></center>

---

> [!info | wsmall right clean no-i]- ##### DM Scratch Notes
> ```meta-bind
> INPUT[editor():scratch_note]
> ```

`VIEW[{4. Session Notes#partyAbbreviasion}][text(hidden):campaign]`
``$=dv.span('`' + `VIEW[` + dv.current().partyRelation[dv.current().campaign] + '][text(hidden):currentPartyRelation]' + '`');``