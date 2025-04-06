---
tags:
  - "#SessionNote"
characters:
  - "[[Allustan]]"
  - "[[Tidwoad]]"
  - "[[Balabar Smenk]]"
  - "[[Venelle]]"
  - "[[Ragnolin Dourstone]]"
aliases:
  - Introducing the Three Faces of Evil
whichparty: "[[Age of Worms Party Dashboard]]"
sessiondate: 2025-04-03
quicknote: Closing out the Whispering Cairn and starting The Three Faces of Evil.
locations:
  - "[[5-World/Settlements/Diamond Lake.md|Diamond Lake]]"
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
- Check on Crafting rules.  Update Obsidian tool if necessary.
- Check on item cost when runes are applied.  +1 weapon potency is only applying it's cost to the item not the cost of the item.  I.E. a longsword is normally 1 gp.  A +1 weapon potency rune is 35 gp.  Is the +1 Longsword 35 gp or 36 gp?
- Modify item generator to show the +1 after the Weapon Potency prefix to help with copy/paste into Google Docs.

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
The players met with Allustan.  Jayden attempted to get him to pay an exorbitant amount to provide escort in the Cairn.  Zam shows him the horns and talks briefly about their discovery.  He does not mention the worm.  They go on to do some shopping, learn some spells and transfer a rune.  I shared some rumors about "worms found in undead destroyed in the hills around Diamond Lake" as a seed for the next adventure and to prompt them about the worm in the jar.  They bring that to Allustan who then launches the Three Faces of Evil adventure by providing some basic information about what he knows.  He tells them to work with Balabar Smenk to get access to the Dourstone Mine.  Balabar attempts to con the PCs into destroying Dourstone mine.  He also shares with them that he is being strongarmed into providing goods to whomever is living in the temple hidden in the mine.  He talks about he second-in-command's head being delivered to him.  They convince Balabar to give them 50 of their 100 gp reward up front to prepare for entering the mine.

### Travel & Rest
Some minor local travel.

### Loot, Rewards & Purchases
Players made a few purchases in Diamond Lake.  Most notably the +1 Weapon Potency formula.

## Post
### New Creations
Introduced Margret. She's a human girl acting as a servant in Balabar's employ.  Wen takes a bit of a liking to her.  Gets a little extra information and gives her a gold as the PCs depart.

### Date & Time
4/4/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes
Haight has taken a particular interest in the "old gods."  Will continue to pay attention to this and see how things play out.
