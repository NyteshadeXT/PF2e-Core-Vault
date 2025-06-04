---
notetype: SessionNote
aliases:
  - The Unmarked Door
whichparty: "[[Age of Worms Party Dashboard]]"
sessiondate: 2025-04-10
quicknote: Sneaking into the mine and checking out the unmarked door first.
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

> [!kirk|info] Prompt (Remove me)
Create a To-Do section to list and organize the tasks you need to complete for this session. Outline the key preparations, notes, or materials you need to have ready. This may include crafting specific encounters, detailing NPC interactions, preparing maps, or any other essential elements for a smooth and engaging session. Use this section as a checklist to ensure you're well-prepared and organized for the upcoming gaming session.

### Quick References

> [!kirk|info] Info (Remove me)
This is a list of links to various notes within your Vault. Use this to give yourself quick ways to find any relevant information you need on hand for your session.

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
The players sneak into the mine and the temple in the supply cache meant for the temple.  The elevator is overloaded by their weight and crashes to the bottom alerting the guards.  There's a brief battled where the PCs prevail.  After a very brief exploration of the space the PCs let their curiosity about the unmarked door get the better of them and choose to enter the caves beyond the door first.  Several encounters with morlocks later they find themselves at the bottom of the cavern getting low on resources and heath with a choker attempting to sneak up on them.

### Travel & Rest
Very short travel to Dourstone mine.

### Loot, Rewards & Purchases
**Session XP:** 380

**Coin**
- gp: 49

**Permanent Items**
> - [x] consumable::[[Healing Potion (Minor)|Healing Potion (Minor)]] [ilvl::1] [gp::4]
> - [x] consumable::[[Healing Potion (Minor)|Healing Potion (Minor)]] [ilvl::1] [gp::4]
> - [x] consumable::[[Potency Crystal|Potency Crystal]] [ilvl::1] [gp::4]

## Post
### New Creations
No new creations this session.  Need to work on the Circlet of Insight that Zamoshee has to see if I can get the +1 perception to automatically work in Foundry.

### Date & Time
4/10/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes
The PCs are a in a bit over their heads right now.  They have been warned.  We were also down one player as Derek misunderstood if we were playing or not and wasn't able to attend.  Keep an eye on the situation.
