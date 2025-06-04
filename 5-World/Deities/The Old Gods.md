---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Misc/PlaceholderImage.png
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
>> **Alignment** | `INPUT[Alignment][:alignment]` |
>> **Portfolio** | `INPUT[textArea:portfolio]` |
>> **Condition** | `INPUT[Condition][:condition]` |
>
>> [!metadata|metadataoption]- Deity Info
>> #### Deity Info
>>  |
>>---|---|
>> **Domains** | `INPUT[textArea:domains]` |
>> **Favored Weapon** |  `INPUT[textArea:favored_weapon]` |
>> **Symbol** |  `INPUT[textArea:symbol]` |
>> **Power** | `INPUT[DeityPower][:deitypower]` |
>> **Edicts** | `INPUT[textArea:edicts]`
>> **Anathema**| `INPUT[textArea:anathema]`
>> **Divine Attributes** | First: `INPUT[Attributes][:divinteattribute1]` Second: `INPUT[Attributes][:divinteattribute2]` |
>> **Cleric Spells** |  `INPUT[textArea:spells]` |
>> **Divine Font** | `INPUT[Font][:divinefont]` |
>> **Divine Sanctification** | `INPUT[Sanctification][:divinesanctification]` |
>> **Divine Skill** | `INPUT[Skill][:divineskill]` |
>> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Owned Locations** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):ownedlocation]` |
>> **Current Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |
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
> **Alignment** | `VIEW[{alignment}]` |
> ###### Info
>  |
> ---|---|
> **Owned Locations** | `VIEW[{ownedlocation}][link]` |
> **Current Location** | `VIEW[{location}][link]` |
> **Condition** | `VIEW[{condition}]` |


# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

> [!metadata|organizations]- Related Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "5-World"
> WHERE econtains(worship, this.file.link) AND contains(tags, "Organization")
> SORT organizationtype ASC, file.name ASC

> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "5-World"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC

## Overview
References to the Old Gods abound since the Sundering.  This encompasses any deities which are believed to have died or fled Aetheria. It's impossible for followers to gain divine magic from these deities directly, however, if their belief in the deific cause is strong enough followers may gain spells from the power of this belief and ascribe it to the deity in question.  Alternately, some of the more unscrupulous deities may deign to grant these "followers" their powers.  Why they would do that is, of course, beyond the minds of mortals.

> [!column|2 no-title]
>
> 
>> [!metadata|portfolio] Portfolio
> `VIEW[{portfolio}][text]`
>
>> [!metadata|domains] Domains
> `VIEW[{domains}][text]`
> 
>> [!metadata|favored_weapon] Favored Weapon
> `VIEW[{favored_weapon}][text]`
>
>> [!metadata|symbol] Symbol
> `VIEW[{symbol}][text]`

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## History

> [!kirk|info] Prompt (Remove me)
> Trace the divine lineage and historical narrative associated with this deity. Explore their origins, tales of creation, or myths that establish their presence in the pantheon. Detail significant events, achievements, or conflicts that have shaped their history. How have their interactions with mortals, other deities, or cosmic forces influenced their story? Describe any transformative moments, shifts in power, or turning points in their divine existence. How does their history contribute to their significance and role within the divine hierarchy?

## The Church

### Hierarchy Titles

### Day-to-Day Activities

### Important Ceremonies/Holy Days

### Priestly Vestments and Adventuring Garb

## Notes
Old gods with current references include:
- Hextor
- Erythnul
- Vecna