---
notetype: SessionNote
aliases:
  - Down the Morlock Hole
whichparty: "[[Age of Worms Party Dashboard]]"
sessiondate: 2025-04-24
quicknote: Continued investigations into the cavern's, now thought to be a morlock lair, beyond the unmarked door.
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
The group continued to work their way through the natural caverns they found beyond the unmarked door.  They have several more morlock encounters before finding Grallak Kur and ultimately defeating him.

### Travel & Rest
None

### Loot, Rewards & Purchases
**Session XP:** 480

**Coin**
- gp: 129
- sp: 700

**Permanent Items**
> - [x] [[Smuggler's Sack (Type I)]] [ilvl::4] [gp::75]
> - [x] permanent::[[Rope of Climbing (Lesser)]] [ilvl::3] [gp::45]

## Post
### New Creations
No new creations this session.  

### Date & Time
4/24/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes
Nothing