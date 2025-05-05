---
tags:
  - "#SessionNote"
aliases:
  - The Citadel of Hextor
whichparty: "[[Age of Worms Party Dashboard]]"
sessiondate: 2025-05-01
quicknote: The players move to investigate the Citadel of Hextor within the temple.
locations:
  - "[[The Three Faces of Evil]]"
characters:
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
>> **Which Party** | `INPUT[Null][suggester(optionQuery(#Party AND !"z_Templates"), useLinks(partial)):whichparty]` |
>> **Session Date** | `INPUT[datePicker:sessiondate]`
>> **Quick Notes** |  `INPUT[textArea:quicknote]`
>
>> [!metadata|metadataoption]- Quick References
>> #### Quick References
>>  |
>> ---|---|
>> **Character** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):characters]` |
>> **Locations** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates")):locations]` |
>> **Miscellaneous** | `INPUT[inlineListSuggester(optionQuery("" AND !"z_Templates")):misc]` |

#  `=link(this.whichparty)` `=this.file.name` "`=this.aliases`"
## Prep
### To-Do
None

### Quick References
> [!column|3 no-title]
>> [!metadata|characters] People
>> `VIEW[{characters}][link]`
>
>> [!metadata|location] Locations
>> `VIEW[{locations}][link]`
>
>> [!metadata|misc] Misc
>> `VIEW[{misc}][link]`

## During
### Events
The players have exhausted their investigation of the morlock caverns.  They journey back to the center of the temple and begin searching though the citadel of hextor.  There they have an encounter with several skeletons and a group of cultists.  They attempt to take a captive but Wen is having none of that and kills him.  The evening finishes with the players handling a few tiefling guards.

### Travel & Rest
The PCs take a long rest while safely in the now cleared morlock caverns.

### Loot, Rewards & Purchases
**Session XP:** 140

**Coin**
- gp: 19
- sp: 700

**Permanent Items**
> - [x] permanent::[[Repair Toolkit (Superb)]] [ilvl::3] [gp::25]

## Post
### New Creations
No new creations this session.  

### Date & Time
5/1/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes
Nothing