---
tags:
  - Organization
art: zz_Attachments/Misc/PlaceholderImage.png
head:
  - "[[5-World/NPCs/Malachite]]"
pronounced: Meteor's Chosen
location:
  - "[[Ardentia City]]"
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

> [!kirk|info] Info (Remove me)
> Organization: Organizations can be anywhere from a small band of misfits to an entire Nation.

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
The Meteor's Chosen is a clandestine cult that emerged in the wake of a cataclysmic meteor impact. Their fervent devotion centers around the belief that this celestial event was no mere cosmic collision—it was a divine intervention. The Meteor's Chosen view the meteor impact as a celestial revelation—an otherworldly message etched in fire across the sky. They consider the meteor's remnants—crystals and mysterious dungeons—as sacred gifts bestowed by a higher power. The cult's ultimate goal is to ascend to a higher plane of existence. They believe that by unlocking the secrets of the crystals and conquering the dungeons, they can transcend mortal limitations. The crystals are believed to contain divine essence. The cult seeks to harness this energy for their spiritual ascent.
 
Key figures within the Meteor's Chosen are:
- High Seer [[5-World/NPCs/Malachite]]: The charismatic leader of the Meteor's Chosen. His eyes reflect the meteor's fiery glow. [[5-World/NPCs/Malachite]] interprets cosmic signs, deciphers ancient texts, and guides the faithful toward ascension.
- [[Astra the Crystal Witch]]: A mysterious figure who communicates with the crystals. Her touch reveals hidden truths.  Astra guides initiates through visions and cryptic dreams.
- [[Ezekiel Stoneheart]]: The enigmatic prophet who claims to have foretold the meteor's arrival. His prophecies drive the cult's actions. Ezekiel has glimpsed the higher plane during a near-death experience which he believes granted him prophetic powers.

Members of the Meteor's Chosen or those brave enough to align and be in good standing with them may gain access to the cults services.  Initiates undergo Crystal Attunement rituals to attune themselves to specific crystals. Each crystal grants unique insights or abilities.  Some even claim visions of celestial realms or glimpses into their future selves.  The cult organizes daring expeditions into hidden dungeons only they have access to. These subterranean labyrinths are believed to hold keys to ascension. Initiates joining these expeditions will face trials, puzzles, and magical guardians within the dungeons.

Rumors and legends about the cult continue to swirl around it. Legend speaks of a meteor-forged sword hidden deep within a dungeon. Whoever wields it is said to transcend mortality. Some withing the cult believe it's the key to unlocking the higher plane. Whispers also persist that during meteor showers, a veil between worlds thins. Initiates gather to meditate, hoping for glimpses of the divine.

The Meteor's Chosen tread a fine line between enlightenment and fanaticism. Their quest for ascension may lead to revelation—or oblivion.

Create an encompassing overview of this organization's essence. Explore its purpose, structure, values, and significance within the world. Highlight the unique traits that define this group, delving into its history, goals, and impact on its members and the surrounding society. What distinguishes this organization, and how does it operate within the larger context of the world?

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
Members of the Chosen often bear an eight-pointed star symbol.

