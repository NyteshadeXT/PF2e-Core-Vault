---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Misc/PlaceholderImage.png
pronounced: SHAH-rah-thiss
aliases:
  - The Veiled Weaver
  - Matron of Webs
  - The Whispering Shadow
alignment: Lawful Evil
portfolio: Spiders, shadow, webs of intrigue, betrayal, ambition, secrets kept and revealed
condition: Healthy
domains: Trickery, Darkness, Ambition, Fate
favored_weapon: Hand crossbow
symbol: A spider with threads trailing into a labyrinthine web, one strand cut and dripping with blood
deitypower: Lesser God
edicts: Weave networks of influence; ensure the strong rule over the weak; conceal your true motives; cultivate ambition within your house or clan
anathema: Reveal secrets without purpose; act with open honesty when deception would serve better; forgive a betrayal without exacting retribution
divinesanctification: Can Choose Unholy
divineskill: Diplomacy
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
Sharathis’ worship is strongest among the drow, whose entire society is shaped around her matriarchal dogma. Her temples are caverns strung with webs of silk and shadow, lit only by the eerie glow of fungus or crystal. Ritual sacrifices — often of rivals or failed schemers — are hung in her webs as offerings.

Her cults are not limited to the drow: in times of political intrigue, assassins, spies, or ambitious nobles sometimes find her faith creeping back into the cracks of surface society. Such cults rarely last long, but their sudden impact is often devastating.

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

## Dogma
### Example #1

> [!kirk|info] Prompt (Remove me)
> Unravel the ambitions and objectives that drive this deity forward. Explore their overarching goals, whether it involves maintaining cosmic balance, guiding mortals, seeking enlightenment, or pursuing other divine endeavors. Describe how their goals align with their principles and domain. Do they seek to expand their influence, uphold certain values, or achieve specific milestones? How do these goals shape their interactions with mortals, other deities, and the world at large?

## Acquaintances
**Vorthron** views Sharathis as a rival usurper — some believe she stole a fragment of his cruelty to form her own dominion.  **Neralith** is said to feel her absence as a missing thread in fate, though whether Sharathis is truly a sundered fragment of her power or a separate divinity is unknown. **Zerathos** is oddly tolerant of Sharathis, seeing her webs of betrayal as a mirror of his own madness — though her schemes are far more deliberate. The rest of the pantheon either deny her existence or refuse to speak of her, as if naming her risks strengthening her return.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## History
Sharathis is a forgotten goddess, whispered to have been born during the Axis War as a shard torn from [[Neralith|Neralith’s]] tapestry of fate, corrupted by shadows and sharpened by cruelty. The other gods believed her severed thread was destroyed in the chaos — but in truth, she descended into the Netherdark, weaving her own web of power far from the eyes of heaven.

The drow claim she hid them from the worl** when their surface kin turned against them, binding their remnants in secrecy and silence. Through her, they learned to survive in exile: patient, cunning, ruthless. For centuries, her name has been erased from surface temples, but among the hidden cities below, her whispers are law.

To her faithful, Sharathis teaches that truth is a weapon best sheathed until it strikes. Betrayal is not sin but strategy. Hierarchy is sacred, with webs of power radiating outward from matriarchs chosen by her will. She does not promise her followers glory in the open, but power in the shadows — unseen until it is too late to resist.

## The Church

### Hierarchy Titles

### Day-to-Day Activities

### Important Ceremonies/Holy Days

### Priestly Vestments and Adventuring Garb

## Notes
