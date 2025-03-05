---
tags:
  - "#SessionNote"
sessiondate: 2025-01-16
characters:
  - "[[Akiowen]]"
  - "[[Gornak]]"
  - "[[Haight Enashberry]]"
  - "[[Zamosshe]]"
locations:
  - "[[Diamond Lake Mining Office|Diamond Lake Mining Office]]"
  - "[[4-Campaign/Age of Worms/The Whispering Cairn.md|The Whispering Cairn]]"
aliases:
  - Getting Started
whichparty: "[[Age of Worms Party Dashboard]]"
quicknote: The players continue on their adventure by clearing the Diamond Lake Mining Office as their potential homebase and "taking a peek" at what the Whispering Cairn has to offer.
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

The players finished clearing out the [[Diamond Lake Mining Office]] of creatures.  Discussed going to Diamond Lake for labor to help clean and repair the building.  They then decided to move on to [[4-Campaign/Age of Worms/The Whispering Cairn]].  Spent some time studying the broken portal near the entrance as well as the rotted out bed roll.  Akiowen was particularly suspicious of pretty much everything in the cairn.  After easily defeating the wolves they got a little bit hung up at the Gallery of Seven Lanterns.  After several attempts to determine what this was or if it was something they should be interacting with, Haight decided to move on to the "room with the green glow."  I introduced the room and ended the night there.

### Travel & Rest

None in this session

### Loot, Rewards & Purchases

The players have discovered so far:

#### The Mining Office
**Coin**
- gp: 17
- sp: 8
- cp: 6

**Consumable Items**
- [x] consumable::[[Breathe Fire|Spell Scroll - 1st Level (Breathe Fire)]] [ilvl::1] [gp::12]
- [x] consumable::[[Bloodeye Coffee]] [ilvl::0] [sp::5]
- [x] consumable::[[Merciful Balm]] [ilvl::1] [gp::3]
- [x] consumable::[[Journeybread]] [ilvl::1] [gp::3]
- [x] consumable::[[Instant Pottery|Spell Scroll - 1st Level (Instant Pottery)]] [ilvl::1] [gp::12]
- [x] consumable::[[Potion of Emergency Escape]] [ilvl::1] [gp::3]

**Permanent Items**
- [x] permanent::[[Stalk Goggles]] [ilvl::1] [gp::20]

#### The Whispering Cairn
**Miscellaneous Loot**
The bag contains an elaborate lantern of indigo metal inset with indigo glass panes. The lantern is worth 12 gp. A
An intricately carved armband of unmistakable elven craftsmanship, bearing a repeating leaf motif. The armband is worth 20 gp to a non-elf, and 25 gp to an elf NPC.

## Post
### New Creations
Need to create the rockhammer (see Wormfood Dragon 334).

### Date & Time

1/16/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes

Nothing additional.
