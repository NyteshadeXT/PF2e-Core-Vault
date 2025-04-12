---
tags:
  - Organization
art: zz_Attachments/Misc/PlaceholderImage.png
organizationtype:
  - Cult
location:
  - "[[Diamond Lake]]"
worship:
  - "[[The Old Gods]]"
pronounced: Eb-on Tri-ad
aliases:
  - The Triad
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
> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[textArea:pronounced]`
> **Aliases** | `INPUT[list:aliases]` |
> **Type** | `INPUT[OrganizationType][inlineListSuggester:organizationtype]` |
> **Hierarchy** | `INPUT[Null][suggester(optionQuery("Campaign/Organizations/Hierarchies"), useLinks(partial)):hierarchy]` | 
> **Head** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):head]` |
> **Steward** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):steward]` |
> **Parent Organization** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
> **Worship** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):worship]` |
> **HQ** | `INPUT[Null][suggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):hq]` |
> **Operating Areas** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |

> [!infobox]+
> # `=this.file.name`
> ###### `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Info
> | |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Type** | `VIEW[{organizationtype}][text]` |
> **Hierarchy** | `VIEW[{hierarchy}][link]` |
> **Head** | `VIEW[{head}][link]` |
> **Steward** | `VIEW[{steward}][link]` |
> **Parent Organization** | `VIEW[{organization}][link]` |
> **Worship** | `VIEW[{worship}][link]` |
> **HQ** | `VIEW[{hq}][link]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

> [!metadata|geography]- Geography
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(terrain, ", ") AS Terrain, join(link(dominion), ", ") AS "Dominion"
> FROM "Campaign"
> WHERE contains(tags, "Geography") AND econtains(organization, this.file.link)
> SORT dominion ASC, file.name ASC

> [!metadata|county]- County
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(terrain, ", ") AS Terrain, join(link(dominion), ", ") AS "Dominion"
> FROM "Campaign"
> WHERE contains(tags, "County") AND econtains(organization, this.file.link)
> SORT dominion ASC, file.name ASC

> [!metadata|settlements]- Settlements
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, settlementtype AS Type, defence AS Defences, join(link(dominion), ", ") AS "Dominion"
> FROM "Campaign"
> WHERE contains(tags, "Settlement") AND econtains(organization, this.file.link)
> SORT dominion ASC, file.name ASC

> [!metadata|district]- Districts
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(districttype, ", ") AS Type
> FROM "Campaign"
> WHERE contains(tags, "District") AND econtains(organization, this.file.link)
> SORT districttype ASC, file.name ASC

> [!metadata|location]- Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(organization), ", ") AS "Organization(s)"
> FROM "Campaign"
> WHERE contains(tags, "POI") AND econtains(organization, this.file.link)
> SORT poitype ASC, file.name ASC

> [!metadata|organizations]- Child Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "5-World"
> WHERE contains(tags, "Organization") AND econtains(organization, this.file.link)
> SORT organizationtype ASC, file.name ASC

> [!metadata|characters]- Characters
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(occupation, ", ") AS "Occupations", join(link(organization), ", ") AS "Organizations"
> FROM "5-World"
> WHERE contains(tags, "Character") AND econtains(organization, this.file.link) AND !contains(condition, "Dead")
> SORT tags DESC, file.name ASC

> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "5-World"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC

## Overview

From the fanatical peripheries of three vile churches comes a blasphemous doctrine known as the Way of the Ebon Triad, an anonymously penned collection of essays and scrolls soaked in phantasmagoric allegory and apocalyptic ecstasy.  The Way outlines in vague terms a series of rituals and portentous events that culminate in the spiritual and physical adhesion of [[The Old Gods]] Hextor, Erythnul and Vecna into a single supremely powerful overgod.  Outlaws even within their own blasphemous religions, adherents to the Way of the Ebon Triad travel the world in search of fellow wanderers, often banding together to influence important events and edge the world closer to catastrophe.

## Culture

> [!kirk|info] Prompt (Remove me)
> Detail the culture embedded within this organization. What is its mission statement or core philosophy? Explore its code of conduct, values, and ethical guidelines that guide its members. How does this organization recruit new members, and what criteria do they look for? Define the hierarchy or ranks within the group and the significance of each level. Additionally, describe any uniforms, symbols, or insignia that members might wear to signify their affiliation. How do these cultural elements shape the identity and operations of this organization?

### Example
## Acquaintances

> [!kirk|info] Prompt (Remove me)
> Map out the network of relationships this organization maintains with other groups and individuals. Who are their allies, rivals, or adversaries? Detail the nature of these connections, whether they're alliances based on shared interests, longstanding rivalries, or uneasy truces. What events or conflicts have shaped these relationships? Furthermore, explore the interactions and dealings this organization has with influential individuals or entities outside its circle. How do these connections influence the organization's operations and goals?

## Current Events
The Ebon Triad is actively working to bring about the Age of Worms and the adhesion of Hextor, Erythnul and Vecna into a supreme powerful overgod.

## History
Agents of the Ebon Triad conspired, last year, with another dangerous cult to trigger a volcanic eruption that nearly consumed the city of Cauldron.  For the Ebon Triad, this event was merely one of a handful of prophesized events presaging the advent of the Age of Worms, an era of darkness and writhing death that would provided the required backdrop for the ascension of their tripartite god.

## Notes
[[The Whispering Cairn]] note: What the Ebon Triad cultists below [[Diamond Lake]] and throughout the world do not understand is that the entire religious movement is a fraud launched at the direction of Kyuss, an ancient being who has plotted to bring about the Age of Worms for millennia.

Use the following chart to adjudicate the results of any [[Skills#Religion|Religion]] checks made to learn more about the Ebon Triad.

| Religion DC | Information Known                                                                                                                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15          | The Ebon Triad is an evil cult dedicated to merging the gods [[Kataklysmos]], [[Vorthron]] and [[Zerathos]] into a mighty overgod.                                                                                                                                                                                        |
| 20          | Adherents to the doctrine of the Ebon Triad clutch close their secrets even from worshipers of the three deities, who consider them heretics.  In fact, word of the heresy has not spread far from these three churches, who keep accounts of Ebon Triad activities brutally suppressed lest the cult gain more converts. |
| 25          | Despite the internecine struggle between the Ebon Triad and the orthodox churches clerics in thrall to the cult continue to receive spells from their godly patrons.  This fact especially galls the church of [[Vorthron]], whose rigid faith cannot square the contradiction.                                           |
| 30          | The idea that a human cult could bind gods as powerful as these is extremely doubtful, even preposterous.                                                                                                                                                                                                                |
| 35          | The Ebon Triad hopes to bring about the Age of Worms as a precursor to the creation of its terrible god, and has its hands in apocalyptic conspiracies across the land.  Perhaps the gods support these rebel clerics because they too wish to see the world cast into darkness?                                                                                                                                                                                                                                                                                                                          |
