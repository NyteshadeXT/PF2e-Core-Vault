---
title: Valindra Morrana
firstname: Valindra
lastname: Morrana
aliases:
  - Valindra
  - Captain Valindra Morrana
  - Captain Valindra
  - Captain Morrana
session_appearances:
  - 0
  - 1
  - 2
  - 3
  - 4
  - 6
  - 7
  - 8
  - 9
  - 11
  - 23
  - 62
  - 63
race:
  name: High-elf
occupation: Guards' Captain
guildGroups: Guard Force of Beehill
class: Commoner
fc-calendar: Chip of the old block
fc-category: NPC Birthday
fc-display-name: Valindra Morrana's Birthday
fc-date:
  day: 27
  month: 5
  year: "[765-*]"
year: 765
home: "[[Beehill|Beehill]]"
location: "[[Beehill Guard Master's Office|Beehill Guard Master's Office]]"
portrait: "![[Valindra Morrana.png | hsmall]]"
alive: true
partyFamiliarity: Familiar
partyRelation: Ally
age: 235
gender: 3
gender_name: Female
category: person
type: NPC
tags:
  - NPC
  - Event
status: ✅
scratch_note: Write more detailed history about her.
birthday: 275547
---

# `=this.title` <span style="float:right">Status: `INPUT[inlineSelect(option(❌), option(✅)):status]`</span>

> [!infobox]
> # <font size=6>`VIEW[{title}]` </font>
> # Birthday
> | Day | Month | Year | 
> |:---:|:---:|:---:|
> | `INPUT[inlineSelect(option(1), option(2), option(3), option(4), option(5), option(6), option(7), option(8), option(9), option(10), option(11), option(12), option(13), option(14), option(15), option(16), option(17), option(18), option(19), option(20), option(21), option(22), option(23), option(24), option(25), option(26), option(27), option(28), option(29), option(30)):fc-date.day]` | `INPUT[inlineSelect(option(1, Alturiak),option(2, Ches), option(3, Tarsakh), option(4, Mirtul), option(5, Kythorn), option(6, Flamerule), option(7, Eleasias), option(8, Eleint), option(9, Marpenoth), option(10, Uktar), option(11, Nightal), option(12, Hammer)):fc-date.month]` | `INPUT[number(class(nb-mb-css)):year]` `VIEW[\[{year}-*\]][text(hidden):fc-date.year]` `VIEW[{World Overview#dpy}*{year}+{World Overview#dpm}*({fc-date.month}-1)+{fc-date.day}][math(hidden):birthday]`|
> # Basic Information
> ||
> | -|-|
> | Home | `INPUT[suggester(optionQuery(#Settlement)):home]` |
> | Location | `INPUT[suggester(optionQuery(#Location)):location]` |
> | Occupation| `VIEW[{occupation}]` |
> | Guilds & Groups | `=replace(join(link(this.guildGroups), ","),",","<BR>")` |
> | Party Familiarity | `INPUT[inlineSelect(option(Unknown), option(Rumoured), option(Seen), option(Talked To), option(Familiar)):partyFamiliarity]`|
> | Party Relation | `INPUT[inlineSelect(option(Neutral), option(Ally), option(Lover), option(Family), option(Friend), option(Dislike), option(Enemy)):partyRelation]`|
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
>>> `VIEW[!\[\[{title}.png | hsmall\]\]][text(renderMarkdown ):portrait]`
>>> `VIEW[\[\[{title}.png \| {age}yr {race.name} {gender_name} \]\]][text(renderMarkdown)]` 
>>
>>**<font size=4>`VIEW[\[\[{title}\]\]][text(renderMarkdown)]`</font>**  is the guards' master in [[Beehill]]. She's a very pragmatic, rules-governed woman with a strong sense of duty. However, whenever justice and pragmatism stands in the way of bureaucracy, she tends to lean towards the former. Within the purview of her responsibilities, she's also a slew politician and while she's not the *de jure* town master of Beehill, she's an important symbol and representative for the village and the people, and she makes sure to steward and empower that trust and respect.
>>
>>  <font color=darkred>**Appearance:**</font> She's a fairly tall, fair-skinned high elf with a square face and high cheek-bones. She has long blond hair with one thick braid and several smaller one. She wears a breast plate and bracers of good make, but otherwise a lot leather armor.
>> 
> 
>> [!info|clean no-icon]  **Campaign Relevance**
>>
>> Valindra was a key ally to the party during [[Arc 1#^52e154| Adventure 1]]. After common of as stand-offish with the party due to her bureaucratic demeanor, she and the party eventually formed an understanding, and they teamed up during several occasions to right wrongs in Beehill. From their activities, as was her duties, she wrote a several weekly report and sent them towards [[Candleforth]].
>> 
>> In the summer of 999, part of the party returned to Beehill and offered Valindra to join them clearning out [[The Sanctum of Elucidation | Sanctum]], which she was honored to help with. It would then go one and a half year before she met with anyone from the party again, this time [[Mournn Evenstar|Mournn]] who visited and helped deal with a kobold infestation in the old [[Beehill Landslide pit]].
>>
>> <font color=darkred>**Add to Encounter:**</font> `encounter: Valindra Morrana`
^NPCoverview

>[!column|clean no-icon alt-line] DM Notes 
>>[!note|bg-c-green no-icon clean]+ Quests/Story Hooks 
>> <center><sup></sup></center>
>>
>> - [x] She sets the party of to investigate trail after [[Jasper Gneiss|Professor Gneiss]] fails to show up to [[Beehill]] in [[Session 1 - Goblin Arrows|Session 1]].
>> - [x]  She assists the party in clearing out the [[Redbrands]]  from the [[Harding Estate]] cellar in [[Session 7 - Redbrand Ruffians|Session 7]].
>> - [x]  She joins the party clearing out [[The Sanctum of Elucidation | the sanctum]] in [[Session 23 - Downtime 2| Session 23]] and [[Session 62 - Sanctum Sequels]].
>> - [x] She gives [[Mournn Evenstar|Mourrn]] the task to deal with the kobold infest in [[Session 63b - Back to Basics|Session 63b]].
>
>>[!note|bg-c-purple no-icon clean] Information Held  
>> <center><font size=2>Valuable information</font></center>
>> 
>> - [x] She knows about the existence and location of [[The Sanctum of Elucidation]] 
>> - [x] She knows about [[Phaenia Zauvaryd|The Black Widow]].
>> - [ ]  
>> - [ ]  
>
>>[!note|bg-c-blue no-icon clean] Relationships 
>> <center><font size=2>Friends, Family, Acquaintances, Neutrals</font></center>
>>
>> - [x]  **Rival:** Coronel [[Ryann Maus]]
>> - [ ] 
>> - [ ]  
>> - [ ]  
>
>>[!info|bg-c-orange clean] Secrets 
>>
>> - [x] She wrote a report to the [[Candleforth]] authorities about the parties search for the sanctum.
>> - [ ] When she arrested the party for killing [[Tommy and Willis| Tommy/Willis]], an agent of the crown approached her and ordered her to release the party.
>> - [ ]  
>> - [ ]  
>
<center><sub><sub> Checkmark - PC Party is Knowledgeable of that Detail/Hook/Relationship </sub></sub></center>

> [!info | wsmall right clean no-i]+  ##### DM Scratch Notes
> ```meta-bind
> INPUT[editor():scratch_note]
> ```

## Featured in Campaign

When the party first arrived in [[Beehill]] they took contact with Valindra to report the kidnapping of Syndra. During [[Session 0 - The Golem Awakes|Session 0]], on the information from the party, she carried out the mass arrest against the [[Redbrands]], who later fled during [[The Golem]]-attack. She led the defense of the city against [[The Golem]].

### S03 - S04
Around noon on the 6<sup>th</sup> of Kythorn 12 heavily armored guards and two carriages with supply arrive in the village helmed by general [[Ryann Maus | Colonel Ryann Maus]]. Valindra was not impressed with the meager response but bit her lips. She soon got to learn that Colonel Maus is a pure douchebag.

When the party returned back in [[Beehill]] in [[Session 3 - Shopping & Networking|Session 3]], Valindra introduced the party as a group of contracted mercenaries on the village payroll, but due to the strained situation she hadn't been able to pay them fully. She said that they are owed 🪙<font color="#D8B800">100gp each</font>, Although Maus only paid them 🪙<font color="#D8B800">250gp</font> for *'a job half-done'*. Valindra took the party aside and asked them for details on what they had accomplished. She implored them to do something about the situation, because the sooner they could go back to normal, the sooner she could get rid of the Colonel.

She mentioned in passing that [[Dendar Family | a woodcarver family]] where kidnapped yesterday, and it seems that the [[Redbrands]] where behind it.

When the party arrived with beheaded body of [[Tommy and Willis | Tommy]] and the other dead or unconscious bodies of redbrands in the evening of the 6<sup>th</sup> of Kythorn. Valindra was put in a difficult position and had to arrest [[Mithyra Vriss Forthoc|Mithyra]] and [[Azgragor Virkan|Azgragor]]. However, in the wee hours of the morning the next day, she and [[Ryann Maus|Colonel Maus]] were approached by a spy from The Crown, who ordered to them to release the party members. So they acted on this. In the forenoon of the 7<sup>th</sup>, she got a short anonymous message from [[Clarissa Bumbleleaf|Clarissa]] informing her about the secret entrance to the [[Harding Estate]] cellar and that [[Redbrands]] had been seen there. She replied in kind that she would try to investigate, but that it would be hard to shake the glearing eyes of Maus.
