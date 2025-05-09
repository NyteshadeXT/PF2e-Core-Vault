---
tags:
  - "#SessionNote"
aliases:
  - The True Tomb
whichparty: "[[Age of Worms Party Dashboard]]"
sessiondate: 2025-03-13
quicknote: Bury the Land family and exploration of the the REAL tomb in the Whispering Cairn.
locations:
  - "[[The Whispering Cairn|The Whispering Cairn]]"
  - "[[5-World/Settlements/Diamond Lake.md|Diamond Lake]]"
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
The party travels to the old observatory on the outskirts of Diamond Lake.  There they encounter several undead and fight their way to the top of the tower where the ultimately encounter Filge and his minions.  After battling and killing Filge the players discover the last of the bones needed to set Alastire to rest as well as some connections between Filge and Balabar Smenk (which they promptly forget about).  It's back to the land farmstead to bury the Lands and the off to the Whispering Cairn and the mysterious door.  The arrive to find the door open for them and venture in to the rest of the tomb.   They learn more about the mysterious Wardens and the battle between Law and Choas.  Navigating a challenging encounter with wind elementals they ascend to the resting place of the Warden Warrior Zosiel. After puzzling out how to access the sarcophagus the make several major discoveries.  Notably, the Silver Diadem of Insight and an inoperable Talisman of the Sphere.  We closed the adventure in Diamond Lake where the players would like to speak with Allustan.

### Travel & Rest
Some minor local travel.

### Loot, Rewards & Purchases
**Session XP:** 

**Coin**
- gp: 55
- sp: 31
- cp: 9

**Permanent Items**
> - [x] permanent::[[Silver Diadem of Insight|Silver Diadem of Insight]] [ilvl::3] [gp::60]
> - [x] consumable::[[Potion of Emergency Escape|Potion of Emergency Excape]] [ilvl::1] [gp::3]
> - [x] consumable::[[Healing Potion (Minor)|Healing Potion (Minor)]] [ilvl::1] [gp::4]
> - [x] consumable::[[Surging Serum (Minor)|Surging Serum (Minor)]] [ilvl::2] [gp::5]
> - [x] consumable::[[Cat's Eye Elixir|Cat's Eye Elixir]] [ilvl::2] [gp::7]
> - [x] consumable::[[Summon Undead|Scroll of Summon Undead]] [ilvl::1] [gp::4]
> Filge's spellbook: [[3-Rules/Character Building/Spells/D/Detect Magic|Detect Magic]], [[Ray of Frost]], [[Illusory Disguise]], [[Vitality Lash]], [[Touch of the Void]], [[Void Warp]], [[Mystic Armor]], [[Enfeeble]], [[Embed Message]], [[Ghostly Carrier]] and [[Stupefy]].

## Post
### New Creations

> [!kirk|info] Prompt (Remove me)
Use this section to consolidate and expand upon any spontaneous creations made during the session. After reviewing your During Session notes, use this area to flesh out and detail any new elements, characters, locations, or concepts that emerged. Provide additional information, backgrounds, and intricacies to bring these creations to life. This section serves as a post-session development space, ensuring that any improvisations made during the session can be refined and integrated seamlessly into your campaign world.

### Date & Time
3/13/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes
Derek officially joined the group this session.  He's playing a a very stereotypical rogue.  Need to pay attention to that character.
