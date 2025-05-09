---
tags:
  - "#SessionNote"
aliases:
  - Between a Rock and a Hard Place
whichparty: "[[Age of Worms Party Dashboard]]"
sessiondate: 2025-04-17
quicknote: Continued investigations into the cavern's beyond the unmarked door.
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
- Need to investigate the (concentrate) trait found on some spells.  What does that do?  Does it even matter?  **Concentrate only comes into play when something specifically says it interacts with the Concentrate trait.  For example, Barbarian Rage states, "You can't use actions with the concentrate trait unless they also have the rage trait."**
- Still need to work on the Circlet of Insight that Zamoshee has to see if I can get the +1 perception to automatically work in Foundry. **Foundry does NOT accommodate the functions of this item the way it's designed.**

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
The group continued to work their way through the natural caverns they found beyond the unmarked door.  Encounters with a pair of chokers and some more morlocks ended in the enemies defeat, but the party resources severely depleted.  As a result they chose to take a bit of a chance and rest within a U bend tunnel they found.  

### Travel & Rest
Players took a full rest in the U bend of the caverns.

### Loot, Rewards & Purchases
**Session XP:** 210

**Coin**
- gp: 43
- sp: 21

**Permanent Items**
> - [x] permanent::[[Magic Wand (1st-Rank Spell)|Magic Wand (Harm)]] [ilvl::000] [gp::000]
> - [x] permanent::[[Cold Iron Chunk|Low-Grade Cold Iron Longsword]] [ilvl::2] [gp::44]

## Post
### New Creations
No new creations this session.  

### Date & Time
4/17/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes
Adding the 5th party member back into the mix really helped to balance everything back out so no concerns with difficulty at this point.  