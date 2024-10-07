---
tags:
  - Organization
art: zz_Attachments/Arcane Conclave Emblem.png
pronounced: Are-cane Con-clave
aliases:
  - The Conclave
organizationtype:
  - Council
hq: "[[Ardentia City]]"
location:
  - "[[Aetherial Highlands]]"
  - "[[Ardentia City]]"
head:
  - "[[Alaric Swiftwind]]"
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
> **HQ** | `INPUT[Null][suggester(optionQuery(#Location), useLinks(partial)):hq]` |
> **Operating Areas** | `INPUT[inlineListSuggester(optionQuery(#Location), useLinks(partial)):location]` |

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

 The Arcane Conclave stands as the custodian of magic within [[Ardentia City]]. Their marble-pillared halls echo with ancient incantations, and their cloaked figures move like shadows through the corridors of power. Here are the whispered truths about the Conclave: 

The Conclave's primary duty lies in safeguarding the delicate balance of magic within [[Ardentia City]]. They work to mend fractured ley lines, purify arcane fonts, and prevent magical catastrophes. Their influence extends beyond mortal concerns as they watch the stars, decipher ancient prophecies, and commune with astral beings. The Conclave shapes the magical landscape of [[Ardentia City]] by dictating permissible spells, regulating potion ingredients, and overseeing artifact creation. Mages, sorcerers, and scholars seek their counsel, and their edicts influence the very fabric of spellcasting.

In addition to these duties, the Conclave mediates magical disputes among noble houses, arcane guilds, and magical creatures. Their neutrality prevents magical wars and ensures that no single faction dominates. The Conclave's decisions balance ambition against stability, maintaining harmony in the realm. Initiates of the Conclave swear a solemn oath: "By starlight and shadow, I bind my essence. May magic flow through me, and may I guard its secrets." This oath binds them to their roles as both rulers and protectors of the realm.

Key members of the Arcane Conclave include Archmagus [[Selene Starwhisper]], the enigmatic leader whose eyes mirror the night sky. It is said she converses with constellations. Her staff, the Aetherstaff, channels cosmic energies, allowing her to walk the line between light and shadow. High Enchanter [[Thalorin Stormforge]], a Dwarven runemaster, is another prominent member. His braided beard holds ancient glyphs, and his forge, the Anvil of the Arcane, shapes destiny. Thalorin inscribes runes on artifacts, imbuing them with purpose. [[Lady Seraphina Moonshadow]], an Elven alchemist, creates potions that shimmer like moonlight. Her vials hold dreams and forgotten memories, brewing elixirs that mend broken hearts and reveal hidden truths.

Seekers in good standing with the order may gain access to several exclusive buildings. The [[Spellweaver's Sanctuary]] is a hidden tower where novice spellcasters seek guidance, learning to weave magic without unraveling reality. Here, they receive services such as spell refinement, astral projection training, and potion safety. The [[Codex Arcanum]], the Conclave's repository of knowledge, is a vast library guarded by spectral owls. Its shelves hold grimoires, scrolls, and forbidden texts. Another vital location is the [[Arcane Apothecary]], run by Master [[Alaric Swiftwind]], a centaur whose hooves leave stardust trails. Seekers can purchase enchanted salves, anti-curse elixirs, and love potions here.

Legends of the Arcane Conclave abound. One such legend speaks of the Lost Tome of Eternity, a forbidden book rumored to reveal the secret to immortality. Seekers who quest for it often vanish, their names etched in silver on the Wall of Lost Sages. Another legend tells of the Veilwalker's Gate, a portal guarded by spectral sentinels that leads to realms beyond reality. Those who step through it return changed, half mortal and half ethereal, bearing either profound secrets or madness.

Remember, dear Seeker, the Arcane Conclave weaves spells and destinies alike. Approach their ivory doors with reverence, for within lies both enlightenment and peril.

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
> FROM "Campaign"
> WHERE contains(tags, "Organization") AND econtains(organization, this.file.link)
> SORT organizationtype ASC, file.name ASC

> [!metadata|characters]- Characters
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(occupation, ", ") AS "Occupations", join(link(organization), ", ") AS "Organizations"
> FROM "Campaign"
> WHERE contains(tags, "Character") AND econtains(organization, this.file.link) AND !contains(condition, "Dead")
> SORT tags DESC, file.name ASC

> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "Campaign"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC

## Overview

> [!kirk|info] Prompt (Remove me)
> Create an encompassing overview of this organization's essence. Explore its purpose, structure, values, and significance within the world. Highlight the unique traits that define this group, delving into its history, goals, and impact on its members and the surrounding society. What distinguishes this organization, and how does it operate within the larger context of the world?

## Culture

> [!kirk|info] Prompt (Remove me)
> Detail the culture embedded within this organization. What is its mission statement or core philosophy? Explore its code of conduct, values, and ethical guidelines that guide its members. How does this organization recruit new members, and what criteria do they look for? Define the hierarchy or ranks within the group and the significance of each level. Additionally, describe any uniforms, symbols, or insignia that members might wear to signify their affiliation. How do these cultural elements shape the identity and operations of this organization?

### Example
## Acquaintances

> [!kirk|info] Prompt (Remove me)
> Map out the network of relationships this organization maintains with other groups and individuals. Who are their allies, rivals, or adversaries? Detail the nature of these connections, whether they're alliances based on shared interests, longstanding rivalries, or uneasy truces. What events or conflicts have shaped these relationships? Furthermore, explore the interactions and dealings this organization has with influential individuals or entities outside its circle. How do these connections influence the organization's operations and goals?

## Current Events

> [!kirk|info] Info (Remove me)
> Zoom into the present landscape of this organization. What is currently happening within its ranks? Detail ongoing developments, internal conflicts, or achievements. Is the organization facing challenges, undergoing reforms, or enjoying newfound success? Furthermore, what are its current objectives or endeavors? Explore the immediate goals or missions the organization is striving to accomplish. How are these current events and goals influencing the actions and dynamics within the group?

## History

> [!kirk|info] Info (Remove me)
> Trace the roots and evolution of this organization through time. Explore its founding, pivotal moments, and transformative events that shaped its trajectory. What were the circumstances that led to its creation? Detail significant milestones, challenges, or triumphs that have defined its history. How has the organization adapted to changes, crises, or conflicts over the years? Uncover the legacy and historical narrative that have molded this group into what it is today.

## Notes

