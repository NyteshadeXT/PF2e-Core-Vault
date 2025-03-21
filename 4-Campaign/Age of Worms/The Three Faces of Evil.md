---
tags:
  - "#Adventure"
art: zz-Attachments/Three Faces of Evil Banner.png
quicknote: The Three Faces of Evil requires the PCs to sneak into Dourstone Mine, destroy The Ebon Triad cultists, and defeat a newly born creature knows as the Ebon Aspect.
whichparty:
  - "[[Age of Worms Party Dashboard]]"
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
[[Ragnolin Dourstone]]'s mining operation is poorly run. Ever the pragmatist, Ragnolin thinks it’s better to pay a few guards a good wage to keep the workers in line rather than offer fair wage to his miners. He hires anyone who's willing to at his price (2 cp per day, plus room and board). Only the desperate or those unable to find work elsewhere remain here for long. In most cases, the miners work only long enough to earn the money needed to buy passage elsewhere. Many of the miners that do stick around are crippled ex-criminals unable to find other work. In addition, a number of the miners are convicted criminals who have been sentenced to hard labor. Ragnolin earned their service with a few well-placed bribes in Diamond Lake.

This section of the adventure is relatively freeform. The PCs must come up with a reasonable plan to infiltrate the mine—there are a variety of possibilities. They could take jobs at the mine, they might sneak in, or they could bribe the miners to let them pass without incident. Note that as the mine is private property, the PCs should probably avoid simply storming it and slaughtering the guards. Survivors of such an attack run to town for help, and the PCs quickly find themselves, iп over their heads.

## The Guards
The mine's security force consists of two dozen guards (all 1st-level warriors) Half of them keep watch by day, the other half watch at night. The night watchmen are all dwarves, while the daytime guards are human.

Two squads of four guards walk the wooden stockade that marks the mining camp's perimeter. The guards make one circuit around the camp each hour. If the PCs come within sight of the stockade, there is a 25% chance that one of the two guard groups is within 100 feet of the party. Use [[Skills#Perception|Perception]] to determine if the guards detect the characters—each of the guards has а +0 bonus. Two guards keep watch from the guard tower, while the other two keep watch over the gate.

The guards are well paid, and most of them enjoy the near absolute power they exercise in the mining camp. The PCs suffer а -5 penalty on [[Skills#Diplomacy|Diplomacy]] checks to change the guards’ attitudes. For every 3 gp the characters offer as a bribe, they gain +2 bonus on their [[Skills#Diplomacy|Diplomacy]] checks against the guards Their initial attitudes are unfriendly, but they'll let anyone in if they can be made helpful.

If the guards spot intruders, they blow the alarm horns they carry and attempt to surround the PCs. While the guards like to lord over the miners, they back down from anyone who looks like a capable fighter. If attacked, the guards fight until they lose half their number. A guard who drops below half his maximum hit points runs for his life.

Four of the human guards are cultists of Hextor. These warriors flee to the mines if any trouble starts. Three of them watch the passage to the elevator, while one descends and alerts the temple below. Опе cultist walks with each patrol, while the remaining pair are split between the gate and the guard tower.

## The Miners
The miners are easy to bribe, as their poor wages and terrible working conditions make them open to anything that might damage Ragnolin. The PCs gain a +5 bonus on any [[Skills#Diplomacy|Diplomacy]] check made to sway the miners to their side, with an additional bonus equal to the sp value of any bribe offered to a miner. Their initial attitudes are indifferent, but bribery makes it fairly easy for even the most crass PC to adjust their attitude to helpful. Helpful miners might hide the PCs, distract the guards, tell them of the sealed passage that leads to the elevator, and so forth

If the PCs start a fight, the miners run for their lives. None of them are connected to the Ebon Triad. There are 40 miners in all, and they work from sunrise to sunset, sleeping in bunks within the uppermost reaches of the mine itself. 

## The Foremen
Three foremen keep watch over the miners. These are Ragnolin’s personal lieutenants, and are tough to bribe and tend to stand up against troublemakers. Their initial attitude toward the PCs is unfriendly—bribes can provide a bonus on [[Skills#Diplomacy|Diplomacy]] checks equal to +1 per 5 gp. The foremen carry alarm horns and never hesitate to use them if they spot an intruder in the camp. 

The foremen are all humans. One, a rusty-voiced thug named Gerreld, mans the office during the day. He handles all the paperwork, the payroll, and other administrative matters for the mine. A limping man named Lordren is the overall commander of the camp, while a young man with a lazy eye named Carr is his assistant. The two of them accompany the miners into the tunnels each morning

[[Ragnolin Dourstone]] usually spends a few hours each day at the mines, either going over the day's production with one of the foremen or looking around the mine to ensure there's no sign of the cultists for anyone to notice. His initial attitude is unfriendly, and no amount of bribery can sway him. If the PCs somehow manage to make him helpful, he won't volunteer any information about the Ebon Triad other than to warn the PCs to stay away from the mine.

## The Mines
Any helpful foremen, guards, or miners can tell the PCs that there's a recently installed elevator deep in the mines They've been told that this elevator leads down to a set of caverns that Ragnolin is exploring in hopes of finding a new lode or vein—none of them (save the cultist guards) suspect the truth, and all of them know that intrusion into these caves is forbidden by their employer.

Once in the mines, the characters should have little trouble making their way to the elevator. The guards have set up several obvious signs warning the miners to stay away from the shaft, and the miners know better than to risk the guards ire.

The mines are crude passages and tunnels hacked into the ground. Torches are set into the wall every 50 feet, but half of them are burnt out and useless. Ragnolin is too cheap to provide good lighting in this place. Instead, most miners must carry their own torches and lanterns (purchased with their own meager salaries)

Forty feet from the main entrance, the passage to the elevator cuts down and to the left from the main tunnel. Timbers and planks nailed to the wooden frame of the passage's entrance block access to the area beyond. A DC 18 [[Skills#Athletics|Athletics]] check or an assault (the barrier has hardness 5 and 15 hit points) smashes this barrier to pieces, while a DC 10 [[Skills#Crafting|Crafting]] check disassembles the barrier in 1d4 minutes. In the former case, the guards make DC 20 [[Skills#Perception|Perception]] checks to hear the commotion. A Craft check is too quiet for the guards to hear.

During the day, 2d4 miners are present in the tunnels near the elevator entrance when the PCs enter. They make no attempt to fetch the guards, but they keep an eye on the characters in case the PCs are looking for trouble. If the PCs try to access the elevator shaft without first making the miners’ attitudes helpful, they report the party to the guards.

## The Elevator
The tunnel to the elevator stretches to the west and has a sharp, downward slope. After 400 feet, the PCs come to a chamber in which a large, wooden platform with a 5-foot wall built around its edges. Struts rise 10 feet from each of the platform's corners, joining in an X above the platform. A thick iron chain runs through the X’s midpoint to a large, wooden spool set in the middle of the platform. The platform is 10 feet wide and 10 feet long. When the elevator is at the top of the shaft, the chain is wrapped around the spool. As the car descends, the spool spins and the chain plays out above the car.

The elevator is operated by first releasing a brake mechanism set into the wheel and slowly turning the wheel. The elevator shaft descends 200 feet to area 1 below. The elevator car itself weighs 500 pounds. Characters controlling the car must make a DC 16 [[Skills#Athletics|Athletics]] check to move the elevator. In this case, the elevator can be moved upward or downward at a rate of 5 feet per round. If the the check critically succeeds, it can be raised or lowered at the rate of 20 feet per round. Up to three people may use the elevator at once, with each additional person granting a +2 bonus to the check.

A character who tries to raise or lower the elevator when it is overloaded (more then three occupants) immediately loses control. The elevator doesn't enter free fall, since the winch itself controls its descent somewhat. Characters inside the elevator must make DC 20 [[Skills#Acrobatics|Acrobatics]] checks to avoid losing their footing. While falling, the elevator descends at a rate of 50 feet per round. When it hits bottom, аny creatures in the elevator take 5d6 falling damage. The elevator car itself suffers this damage as well—it has hardness 5 and 50 hit points.


```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: dark-cathedral
image: [[Dark Cathedral.png]]
height: 1000px
width: 70%
### This sets where the map starts by default. Set it to the middle (half) of your bounds. 
lat: 50
long: 50
### 0 is no zoom. Negative zoom steps away from the map. Positive zoom steps towards the map. 
minZoom: 0
### Max zoom is 18. 
maxZoom: 18
### Hover mouse over the Reset Zoom icon to see your current zoom level. 
defaultZoom: 17
### How far it zooms in or out with each step. Can be in decimals. 
zoomDelta: 0.5
### This is a string so can be any text. Change it to match your maps measurement scale. 
unit: feet
scale: 1
darkMode: false
```

## Encounter 1. The Dark Cathedral
**Encounter Difficulty:**   
- [ ] difficulty (xxx XP) Level xxx

Three short passages lead from this chamber, one to the north of the elevator and опе to its east and west. Each ends in marble doorway. The door to the north is marked with the symbol of a human hand grasping an eye. A pair of crimson banners flanks the door to the east, each marked with the symbol of a gauntleted fist clutching six arrows. The door to the west is free of all markings. To the south, the chamber opens into a vast domed hall. In stark contrast to the rough mine passages above, this place bears the mark of an expert artisan, The black, marble tile floor glistens iп the light of several glowing torches, while elaborate, carefully worked marble pillars and arches sweep over the chamber. Toward the back of the chamber, opposite the elevator's door, is a large pool of dark liquid. A stairway carved into the curved wall around the pool ascends to a platform thirty feet above the pool. The chambers domed ceiling arches to a height of sixty feet over the pool's surface.

The three doors in the northern reaches of this chamber provide access to three temples, each dedicated to a different aspect of the Ebon Triad.

In ages past, Vecna himself delved into the mysteries of life within this place. In those times, this chamber was a vast library and the pool served as a potent scrying device for the lich. The books once kept here are long gone and the pool's magic has degraded to a shadow of its former power, yet this room still maintains an unsettling aura of antiquity and oppressive secrecy.

The contents of the pool are dark and viscous, and exude an aura of uncomfortable cold. A splash from the waters is enough to inflict [[Drained|Drained 1]] (Fortitude DC 15 resists), and total immersion in the foul liquid automatically inflicts [[Drained|Drained 2]] and [[Enfeebled|Enfeebled 2]] and those conditions worsen by one per round (Fortitude DC 20 resists) from the supernatural cold. The liquid is opaque and dark and the deeper one goes, the thicker it gets ten feet from the surface, [[Skills#Athletics|Athletics]] checks to swim in the fluid suffer a -5 penalty. This penalty increases to -10 at depths from 10 to 20 feet, and to -20 at depths from 20 to 30 feet. Beyond a depth of 30 feet, the "fluid" of the pool becomes a solid similar to that of stone. What horrific mysteries may or may not be buried in the unknown depths below are left to you, but the creature that emerges from within in Part Five (the Ebon Aspect of the Overgod) should be an indication of what awaits exploration into such forbidden regions.

A DC 20 [[Seek]] check made in the area around the pool or on the platform above reveals blood stains, scratches from metal equipment, and scattered ashes. The denizens of the temple of Vecna to the north regularly conduct experiments оп the pool, hoping to awaken an aspect of the Overgod that they believe dwells somewhere within.

 - 2: [[BadGuy1]] W

```encounter
name: The Dark Cathedral
party: PartyName
creatures:
  - 2: My Monster          # 1 monster named My Monster will be added, with no HP, AC or modifier.
```

Creatures: Two Tiefling fighters from the temple of Hextor are on guard here. They keep watch from the pillars near the entrance to Hextor's temple to the east of the elevator. When the elevator begins its descent, they move to stand guard near it. The guards have grown complacent with the monotony of their duty here. Thus, they tend to assume that anyone coming down the elevator is on an errand for one of the temples. They wear chainmail masks and tabards marked with a holy symbol of Hextor. Their arms are covered with elaborate tattoos bearing Hextor's liturgies and images of various devils.


## Tactics
The Tieflings fight a delaying action. One engages the party in melee while the other rushes to the eastern gate to alert the cult of Hextor. Once he reaches the gate, the tiefling hammers on the door as an action. Both tieflings know the secret knock needed to enter the temple of Hextor (see area 2), but the tiefling does not use the code, Instead, he pounds on the door knowing that the skeletons within will move out to attack intruders in response to the incorrect code.

## Features of the Area


Treasure: The uppermost platform above the pool bears a small, wicker basket filled with an offering to the Overgod. It contains 100 gp in a leather pouch and а silver idol of Erythnul worth 300 gp.