---
tags:
  - "#SessionNote"
sessiondate: 2025-01-09
characters:
  - "[[Akiowen]]"
  - "[[Gornak]]"
  - "[[Haight Enashberry]]"
  - "[[Zamosshe]]"
locations:
  - "[[4-Campaign/Age of Worms/Diamond Lake Mining Office.md|Diamond Lake Mining Office]]"
aliases:
  - Getting Started
whichparty: "[[Age of Worms Party Dashboard]]"
quicknote: The players start off on their adventure by clearing the Diamond Lake Mining Office as their potential homebase.
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

The players began clearing out the [[Diamond Lake Mining Office]].  The outside and first floor have been cleared of monsters.

### Travel & Rest

None in this session

### Loot, Rewards & Purchases

The players have discovered so far:

**Coin**
- sp: 9
- cp: 7

**Consumable Items**
  - spell Scroll - 1st Level ([[Join Pasts]])

## Post
### New Creations

**Important Note** Zamosshe knows [[Allustan]].  Likely a apprentice relationship but could be something more.  Watch to see if Aaron tries to build on this.

### Date & Time

1/9/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes

This was a good intro to combat for the players and a nice start to the campaign overall.  Need to work with Akiowen on getting comfortable with Foundry but the rest of the group seemed to quickly adjust to using it.
