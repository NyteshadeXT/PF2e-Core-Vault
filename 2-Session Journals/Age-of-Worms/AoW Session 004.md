---
tags:
  - "#SessionNote"
whichparty: "[[Age of Worms Party Dashboard]]"
sessiondate: 2025-02-06
quicknote: The players talk to Alustan and journey back to the Whispering Carin.
characters:
  - "[[5-World/NPCs/Diamond Lake/Allustan]]"
locations:
  - "[[5-World/Settlements/Diamond Lake.md|Diamond Lake]]"
  - "[[The Whispering Cairn|The Whispering Cairn]]"
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
Continued work on building out the adventure in Foundry.

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
The players spoke with [[5-World/NPCs/Diamond Lake/Allustan]] and discovered some of the background of the Whispering Cairn and of the [[Aetherial Wardens]].  They journeyed back to the Cairn and continued exploring.  Eventually they figured out the [[The Whispering Cairn#7. False Tomb]] location and delved deeper into the ruins.  Entering the [[The Whispering Cairn#Lair of the Architect]] they got separated and encountered the Lurking Stranglers as well as the gas trap in the first room.  In the [[The Whispering Cairn#13. Workshop]] Gornak triggers the encounter with the [[3-Rules/Bestiaries/Monster Core/Sod Hound|Sod Hound]] and we end the night there.

### Travel & Rest
No noteworthy travel or rest in this session.

### Loot, Rewards & Purchases
**Session XP:** 120

**Coin**
- gp: 20

**Permanent Items**
- [x] permanent::[[Weapon Potency (+1)|+1 Short Sword]] [ilvl::2] [gp::35]

## Post
### New Creations
No new creations to make note of.

### Date & Time
2/6/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes
Can't forget to redo [[The Whispering Cairn#12. Living Quarters]] for the players.  Missed the description and acted like an illusion was dropped when they figured out the trap.
