---
notetype: SessionNote
aliases:
  - A Watery Grave
whichparty: "[[Age of Worms Party Dashboard]]"
sessiondate: 2025-02-27
quicknote: |-
  Ghouls prove to be a very difficult encounter.
  We lose Elijah but gain Bob.
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
The PCs continue their investigation of The Whispering Cairn.  After ending their rest from the last session, they move into the flooded shower area.  There they encounter and defeat two of the three mephits inhabiting the area.  They also spot the ghouls in the room to the left.  Deciding to avoid that encounter for the time being they check out the locker room to the right.  There they discover the missing red lantern.  While heading out the ghouls, who noticed the changes in the water, move out of their room and partially ambush the group.  A very dangerous encounter occurs and Zamosshe goes down.  Fortunately, the players manage to defeat the ghouls and heal Zamosshe.  They had back to the sarcophagus room and hang the red lantern.  After messing around a bit they choose to try the face trap one more time.  With all the lanterns now in place the trap is no longer active and they are able to pass into the room beyond the face trap.

### Travel & Rest
No notable travel or rest this session.

### Loot, Rewards & Purchases
**Session XP:** 

**Coin**
- gp: 3
- sp: 5

**Consumable Items**
- [x] consumable::[[Detect Metal|Spell Scroll (1st level) Detect Metal]] [ilvl::1] [gp::4]

**Permanent Items**
- [ ] permanent::[[Rhythm Bone|Rhythm Bone]] [ilvl::1] [gp::8]
- [x] permanent::[[Leather Lamellar|Leather Lamellar]] [ilvl::1] [gp::3]

## Post
### New Creations

> [!kirk|info] Prompt (Remove me)
Use this section to consolidate and expand upon any spontaneous creations made during the session. After reviewing your During Session notes, use this area to flesh out and detail any new elements, characters, locations, or concepts that emerged. Provide additional information, backgrounds, and intricacies to bring these creations to life. This section serves as a post-session development space, ensuring that any improvisations made during the session can be refined and integrated seamlessly into your campaign world.

### Date & Time
2/27/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes
Elijah (Gornak) decided to call it quits tonight.  Fortunately Bob was joining the party so I hot swapped one for the other. Could account for the difficulty here as the party mix had changed.  Something to keep an eye on going forward.
