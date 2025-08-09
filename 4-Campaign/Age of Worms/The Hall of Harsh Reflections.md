---
tags:
  - "#Adventure"
art: zz-Attachments/Hall of Harsh Reflections.png
aliases:
  - Dungeon 127
quicknote: "Ardentia City: a shining gem in the crown of cultured civilization. Beneath the surface of this bustling metropolis is a rot, festering in the darkness, manipulating the lives of those unaware of its presence. Now a small adventuring band from out of town may be in over their heads. Their actions in Diamond Lake have attracted the wrath of one of the city’s hidden masters. A gang of infiltrators and an enigmatic mastermind plot their destruction, and only tracing the rot to the root can stop the onslaught."
whichparty: "[[Age of Worms Party Dashboard]]"
adventure_status: Not Started
adventure_level: 7th to 9th
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
>> **Adventure Level**|`INPUT[textArea:adventure_level]`|

> [!infobox]
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> #### Adventure Info
>  |
> ---|---|
> **Party** | `VIEW[{whichparty}][link]` |
> **Status** | `VIEW[{adventure_status}]` |
> **Adventure Level** | `VIEW[{adventure_level}]` |

# **`=this.file.name`**

## Background
Loris Raknian, retired gladiator and director of the [[Bloodstone Arena]], has his hands full organizing the upcoming Champion's Games, when fighters from around the world gather in a festival of violence and pageantry that should put all previous expositions to shame. Despite this enormous logistical challenge, he still manages to keep up with his fellow cultists in the Ebon Triad, including the secretive cell stationed below the corrupt mining village of Diamond Lake. Raknian recently learned that this cell was destroyed and its secret research stolen by a group of locals. Angry at the loss of his associates and concerned about the missing research, Raknian is worried that someone has stumbled onto the cult's hidden plans, Worse, the sinister tiefling Bozal Zahol, the cultist who converted Raknian to the Ebon Triad and who dwells in a secret temple deep below the Free City Arena, has decreed that if Raknian doesn't take care of the problem in Diamond Lake soon, things will get very uncomfortable for him.

When Raknian learned, through an ally hidden in Diamond Lake, that those responsible for the cult's destruction were on their way to the Free City, he breathed а sigh of relief. Far too busy with preparations for the upcoming Champion's Games to deal with the upstarts himself, Loris contacted Zyrxog, a mind flayer living beneath the city streets and an old associate of the arena master. Loris tasked Zyrxog with destroying the PCs and recovering any missing clues they might have concerning the cult's nefarious plot.

Zyrxog and a coterie of drow thralls came to the Free City years ago and quickly set up operations after dominating a gang of doppelgangers based in the city's waterfront. Using them as his eyes, ears, and hands on the streets above, the mind flayer has been manipulating events, replacing important officials, and gathering oddities according to his alien designs. Tasked with destroying the meddlesome party from Diamond Lake, Zyrxog quickly sets his doppelgangers into motion, tracking them down and planning their ruin.

Meanwhile, the PCs travel to the Free City seeking [[Eligos]], a learned sage and old friend of their patron [[Allustan]]. They bring with them numerous artifacts, clues to the cult's plans, and a host of questions they hope the sage can answer,

## Overview
The adventure begins as the PCs approach [[Ardentia City]], unaware of the danger that awaits them. After encounters with a corrupt gate guard, an apocalyptic street preacher, and a perilous parade, the party finally reaches the estate of [[Eligos]] the sage. The sage informs the PCs that although he can find the answers they seek, it will take time, giving the party a chance to idle away the days at a local inn, the Crooked House.

The doppelgangers attack soon after the PCs arrive, impersonating the PCs and committing a crime in their names, hoping to turn the locals against them. The party must foil this plot, and in so doing learn the location of the shapeshifters' hidden base down on the waterfront. This leads them to a confrontation with the dangerous charlatans in their demented house of mirrors. Defeating Telakin, the lord of the doppelgangers, reveals a deeper threat, a hidden master directing their actions. Before the PCs can escape the hideout, Zyrxog himself attempts to destroy them, with the aid of his drow minions.

Tracking down the mind flayer, the PCs invade his alien lair deep beneath the city streets. Here they can defeat Zyrxog, and learn about the aberration's recent dealings, including numerous transactions with Loris Raknian, master of the [[Bloodstone Arena]] and host of the forthcoming Champion's Games.

## Adventure Hooks
Having defeated the cultists in Diamond Lake and the undead lurking under nearby Blackwall Keep, the PCs are told by [[Allustan]] to seek out [[Eligos]] in the [[Ardentia City]] to learn more about these diabolical cults and their worm-ridden servants. 

## The Journey to Ardentia City
As the adventure begins, [[Allustan]] has helped the PCs compile the notes and discoveries they've made about [[the Ebon Triad]] and the spawn of Kyuss in [[Diamond Lake]] and the Mistmarsh. He gives them the address of a friend named [[Eligos]], a sage who lives in [[Ardentia City]] who can help make sense of the discoveries and find out what exactly the cult is up to. The journey from Diamond Lake to Ardentia City is about 228 miles on a trail and takes the PCs about 11 1/2 days to travel.  See [[DC Calculator]] for other methods of travel.

The journey is not without peril. The roads are not as safe as they once were, with bandits and worse prowling the night. The PCs likely pass several patrols, groups of traders or farmers, and gaggles of pilgrims on the road—you can incorporate these as you see fit, perhaps using some of the encounters listed on page 19 of DUNGEON $126 as inspiration.

There's a 10% chance of a dangerous encounter occurring—make two checks per day (one during the day and one at night). If the PCs neglect to take appro- priate precautions when they set up camp (setting guards or finding a safe place to camp with a DC 15 Survival check) the chance of a night encounter increases to 20%. Unless your players particularly enjoy these encounters, though, you should limit the number of encounters to no more than two during the journey "unless you're trying to boost the party's level up to 7th. All of these encounters have an average EL of 7.

#### Encounters on the Road
| d%     | Encounter        |
| ------ | ---------------- |
| 01-40  | Bandits          |
| 41-60  | Worgs            |
| 61-75  | Owlbears         |
| 76-90  | Displacer Beasts |
| 91-100 | Trolls           | 

Bandits: 143 human sth-level rogues are out looking to make some easy money by charging exorbitant tolls to passing travelers. Failure to pay the toll (all the money a group is carrying) invites attack. If one of the bandits is slain, the others attempt to flee. Use the stats for the thieves on page 38 for these bandits.

Worgs, Owlbears, and Displacer Beasts: These predators hunt in packs, and stalk the PCs hoping for one of them to lag so they can pounce. А PC can dis- cover them with a successful Spot or Lis- ten check. They break off the attack if half their number are slain.

Trolls: Two troll brothers named Murnk and Nathk are the only two survivors of a recent raid on a troll lair by a band of adventurers. The trolls are trying to make some money to hire an ettin or hill giant to get revenge on the three adventurers. The only way they know to make money, unfortunately, is by attacking more adventurers. Trolls aren't that smart. If one of the trolls is killed, the other begs for his life, offering the last of their money (87 silver pieces and one gold piece) as a bribe. If asked about the adventurers that ruined their lair, the trolls describe a quick female elf with a bow, a large loud man with a shiny belt, and a horrible bearded man that threw lots of fire. Astute PCs may recognize the descriptions of local adventurers Tirra, Auric, and Khellek, or they may not. The trolls don't know who they were, but they do know they were too tough for a group of five of their brothers to handle.