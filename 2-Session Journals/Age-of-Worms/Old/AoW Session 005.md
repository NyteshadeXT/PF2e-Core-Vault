---
notetype: SessionNote
whichparty: "[[Age of Worms Party Dashboard]]"
sessiondate: 2025-02-13
quicknote: The players head back into the Whispering Cairn.
locations:
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
Following the defeat of the sod hound the player had back to area 12 for some additional investigation. Eventually they feel like this area has been completely explored and they move on.  In the Lair of the Laborers they encounter and defeat both the hive and the giant bombardier beetles it the opposite room.  At this point they had suffered quite a bit of damage and were low on resources so they retreat to the entrance and rest ending the night.

### Travel & Rest
PCs rest for eight hours as we finish the session.  No encounters to interrupt this process.

### Loot, Rewards & Purchases
**Session XP:** 220

**Coin**
- gp: 7

**Consumable Items**
- [x] consumable::[Healing Potion (Minor)](app://obsidian.md/Healing%20Potion%20\(Minor\)) ilvl1 gp4
- [x] consumable::[Healing Potion (Minor)](app://obsidian.md/Healing%20Potion%20\(Minor\)) ilvl1 gp4
- [x] consumable::[Healing Potion (Minor)](app://obsidian.md/Healing%20Potion%20\(Minor\)) ilvl1 gp4

**Permanent Items**
- [x] permanent::[Leather Lamellar](app://obsidian.md/Leather%20Lamellar) ilvl1 gp18
- [x] permanent::[Leather Lamellar](app://obsidian.md/Leather%20Lamellar) ilvl1 gp18
- [x] permanent::[Wayfinder](app://obsidian.md/3-Rules/Character%20Building/Equipment/Wayfinder) ilvl2 gp28

## Post
### New Creations

> [!kirk|info] Prompt (Remove me)
Use this section to consolidate and expand upon any spontaneous creations made during the session. After reviewing your During Session notes, use this area to flesh out and detail any new elements, characters, locations, or concepts that emerged. Provide additional information, backgrounds, and intricacies to bring these creations to life. This section serves as a post-session development space, ensuring that any improvisations made during the session can be refined and integrated seamlessly into your campaign world.

### Date & Time
2/13/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes
The night went about as expected.  No major issues or items to address.
