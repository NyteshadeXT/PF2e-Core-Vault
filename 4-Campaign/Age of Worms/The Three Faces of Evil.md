---
tags:
  - "#Adventure"
art: zz-Attachments/Three Faces of Evil Banner.png
quicknote: The Three Faces of Evil requires the PCs to sneak into Dourstone Mine, destroy The Ebon Triad cultists, and defeat a newly born creature knows as the Ebon Aspect.
whichparty: "[[Age of Worms Party Dashboard]]"
adventure_status: Not Started
adventure_level: 
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Art
>> #### Art
>>  |
>> ---|---|
>> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
>> **Aliases** | `INPUT[list:aliases]` |
>> **Quick Notes** |  `INPUT[textArea:quicknote]`
>> **Which Party** | `INPUT[Null][suggester(optionQuery(#Party AND !"z_Templates"), useLinks(partial)):whichparty]` |
>> **Adventure Status** | `INPUT[Status][:adventure_status]` |

> [!infobox]
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> #### Adventure Info
>  |
> ---|---|
> **Party** | `VIEW[{whichparty}][link]` |
> **Status** | `VIEW[{adventure_status}]` |
> **Adventure Level** | `VIEW[{adventure_level}]` |

# **`=this.file.name`**

> [!metadata|quests]- Quests
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, quicknote AS Notes, status AS Status
> FROM "5-World"
> WHERE econtains(tags, "Quest") AND econtains(adventure, this.file.link)
> SORT file.name ASC



## Overview
The Three Faces of Evil requires the PCs to sneak into Dourstone Mine, destroy [[The Ebon Triad]] cultists, and defeat a newly born creature knows as the Ebon Aspect.  The miners themselves, while not necessarily innocents, aren't cultists.  The PCs must sneak by them or use Diplomacy to gain access to the mines.  Once they overcome this obstacle, they must defeat each of the cults that comprise this cell of [[The Ebon Triad]]. Finally, as the last cultists fall, the Ebon aspect arises to avenge its worshiper-creators.  once the PCs defeat this abomination, they escape back to the surface, where they quickly become embroiled in their next adventure.

# Part 1: What Writhes Within
Allustan recently unearthed increasing evidence of strange undead creatures infested with tiny green worms stalking the hills south of Diamond Lake.  He is worried that these undead creatures could represent a greave threat to [[Diamond Lake]]. Thus, he asks the adventurers to pursue the few leads he has uncovered so far.

Allustan's studies show that the worms might be somehow connected to an ancient temple hidden beneath the earth.  According to his calculations, the temple is located beneath a copper mine owned by [[Ragnolin Dourstone]]. Ragnolin is known as a surly, paranoid and greedy mine manager and [[Allustan]] fears that he may be connected to the temple if it is currently occupied.

[[Allustan]] suggests that the merchant [[Balabar Smenk]] could provide a useful gateway to Ragnolin's mine.  Balabar and Ragnolin have a well know rivalry.  Neither is trustworthy, but their animosity might be enough to make Balabar open to an offer of alliance with the party.  The recover of Smenk's letter to Filge from the observatory in [[4-Campaign/Age of Worms/The Whispering Cairn|The Whispering Cairn]] suggests that Smenk knows more about the situation in the Dourstone Mine then he should.

By the time the PCs have finished exploring [[4-Campaign/Age of Worms/The Whispering Cairn|The Whispering Cairn]], Smenk already hates them and wants to see them destroyed or run out of town.  Better yet, he comes upon the idea of sending them agains the cultists below the Dourstone Mine, hoping to take care of two problems at once.

If the PCs don't set up a meeting with Smenk within a week of their encounter with Filge, the mine manager takes it upon himself to invite them to meet with him, ordering a subordinate to sneak into the PCs headquarters with a note setting up a rendezvous at Smenk's home in [[Diamond Lake]]. If the situation warrants it, perhaps Smenk kidnaps a PCs familiar just to show them that they're dealing with a professional criminal.

In either case, [[Allustan]] belives that the temple is occupied and he worries that it's inhabitants are behind the strange undead in the southern hills.  He knows little of [[The Ebon Triad]], but he has managed to uncover the location of an elevator within the mines.  He tells the PCs that the elevator is the most convenient way into the temple.

## Talking to Smenk
Unknown to [[Allustan]], Smenk is secretly in league with the Ebon Triad.  While the Faceless One managed to subvert [[Ragnolin Dourstone]] with bribes and promises of power, he sees Balabar as another useful tool, particularly if Ragnolin turns against the Triad.  Balabar wants [[The Ebon Triad]] destroyed.  The PCs, if they are in his debt, could prove the perfect weapon to distract the Triad or defeat the cultists while he makes an escape.

To encourage the PCs to assist him, Smenk claims that he is terrified of the cultists, and that he was pressured into helping them.  He tells the PCs about his right-hand man, and plays up a sense of betrayal, as if his brand of villainy is somehow more respectable than that of [[The Ebon Triad]].

If the PCs uncover evidence of Balabar's involvement in the cult, they may choose to go after him.  He is a mid-level rogue who is constantly surrounded by a ring of guards and sycophants.  Smenk is more than capable of defending himself against the PCs. If he is defeated, he begs, pleads, whines and acts the part of the pitiful, miserable wretch.  His swagger and arrogance quickly give way to pathetic pleas for mercy.  If the PCs hand him over to the authorities along with evidence of his connection to the cult, Balabar is sentenced to several years of hard labor.

In short, the PCs have the chance to put Balabar in his place.

## Infiltrating the Mine
