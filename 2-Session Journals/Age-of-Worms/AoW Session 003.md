---
tags:
  - "#SessionNote"
sessiondate: 2025-01-24
locations:
  - "[[The Whispering Cairn|The Whispering Cairn]]"
  - "[[5-World/Settlements/Diamond Lake.md|Diamond Lake]]"
aliases:
  - Getting Started
whichparty: "[[Age of Worms Party Dashboard]]"
quicknote: The players continue on their adventure by investigating the Whispering Cairn and making a quick pitstop in Diamond Lake to resupply and, hopefully, get information.
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

Figure out how to apply poison status.

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

The players continued investigating [[The Whispering Cairn]]. They spent a lot of time figuring out the puzzles and traps in the False Sarcophagus room.  Creating a collapse in the elevator for the Orange lantern area triggered an attack by silverfish which got a little hairy but they were able to handle. Gornak also discovered the Hall of the Face and the corresponding trap.  He did catch on to the colors it seemed.  Feeling somewhat stymied and a bit beat up they decided to retire to the Mining Office to rest.  The night finished in [[Diamond Lake]].  A shopping trip to Tidwoads allowed them to meet the cantankerous namesake.  Haight and [[Tidwoad]] didn't get off on the right foot, but they do end up selling some extra gear as well as buying a four [[Healing Potion (Minor)]]. They also went to [[The General Store]] and [[The Captain's Blade]].  At The Captain's Blade they met the propriator [[Tyrol Ebberly]] and have a very amenable conversation selling some weapons to him.  We closed with the players wanting to go visit [[5-World/NPCs/Diamond Lake/Allustan]] hoping to get more information about The Whispering Cairn.

### Travel & Rest

Traveled from The Whispering Cairn to the Mining Office to rest.  Then moved on to Diamond Lake where the night ended.

### Loot, Rewards & Purchases

The players have discovered so far:

#### The Whispering Cairn
No loot was discovered while adventuring.  

#### Diamond Lake
At Tidwoad's the players did purchase some potions.

**Consumable Items**
- [x] consumable::[[Healing Potion (Minor)]] [ilvl::1] [gp::4]

## Post
### New Creations
Need to complete write ups for Tidwoads and Tidwoad himself.  Note that I changed Tidwoads to an adventuring shop rather then a jeweler.  Also need to create entries for The General Store, The Captain's Blade and Tyrol Ebberly.  Need to update Allustan in preparation for the conversation with the players remembering Zam (Aaron) and Allustan have some kind of relationship.

Things to look at in the Item Database.
- Teaspoons and Tablespoons seem to be loaded generically.  Check to include specific versions.  Noticed there were spellbooks of negative level.  That needs to be fixed.  Doublecheck that formulas at dropping appropriately.  Just general review of shop output for other discrepancies.  Consider ways to capture shops to recall settings for a later time.

### Date & Time

1/24/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes

Used shopping for the first time and that seemed to work well for everyone.