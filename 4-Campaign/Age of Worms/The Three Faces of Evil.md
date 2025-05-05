---
tags:
  - "#Adventure"
art: zz-Attachments/Three Faces of Evil Banner.png
quicknote: The Three Faces of Evil requires the PCs to sneak into Dourstone Mine, destroy The Ebon Triad cultists, and defeat a newly born creature knows as the Ebon Aspect.
whichparty:
  - "[[Age of Worms Party Dashboard]]"
adventure_status: In Progress
adventure_level: 2
total_xp: 2500
completed_xp: 1330
awarded_pp: 0
awarded_gp: 240
awarded_sp: 721
awarded_cp: 0
awarded_permanent_items:
  - name: Magic Wand (Harm)
    ilvl: 0
    gp: 0
  - name: Low-Grade Cold Iron Longsword
    ilvl: 2
    gp: 44
awarded_consumable_items:
  - name: Healing Potion (Minor)
    ilvl: 1
    gp: 4
  - name: Healing Potion (Minor)
    ilvl: 1
    gp: 4
  - name: Potency Crystal
    ilvl: 1
    gp: 4
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

## Overview
The Three Faces of Evil requires the PCs to sneak into Dourstone Mine, destroy [[The Ebon Triad]] cultists, and defeat a newly born creature knows as the Ebon Aspect.  The miners themselves, while not necessarily innocents, aren't cultists.  The PCs must sneak by them or use Diplomacy to gain access to the mines.  Once they overcome this obstacle, they must defeat each of the cults that comprise this cell of [[The Ebon Triad]]. Finally, as the last cultists fall, the Ebon aspect arises to avenge its worshiper-creators.  once the PCs defeat this abomination, they escape back to the surface, where they quickly become embroiled in their next adventure.

# Part 1: What Writhes Within
Allustan recently unearthed increasing evidence of strange undead creatures infested with tiny green worms stalking the hills south of Diamond Lake.  He is worried that these undead creatures could represent a greave threat to [[Diamond Lake]]. Thus, he asks the adventurers to pursue the few leads he has uncovered so far.

Allustan's studies show that the worms might be somehow connected to an ancient temple hidden beneath the earth.  According to his calculations, the temple is located beneath a copper mine owned by [[Ragnolin Dourstone]]. Ragnolin is known as a surly, paranoid and greedy mine manager and [[5-World/NPCs/Diamond Lake/Allustan]] fears that he may be connected to the temple if it is currently occupied.

[[5-World/NPCs/Diamond Lake/Allustan]] suggests that the merchant [[Balabar Smenk]] could provide a useful gateway to Ragnolin's mine.  Balabar and Ragnolin have a well know rivalry.  Neither is trustworthy, but their animosity might be enough to make Balabar open to an offer of alliance with the party.  The recover of Smenk's letter to Filge from the observatory in [[The Whispering Cairn|The Whispering Cairn]] suggests that Smenk knows more about the situation in the Dourstone Mine then he should.

By the time the PCs have finished exploring [[The Whispering Cairn|The Whispering Cairn]], Smenk already hates them and wants to see them destroyed or run out of town.  Better yet, he comes upon the idea of sending them agains the cultists below the Dourstone Mine, hoping to take care of two problems at once.

If the PCs don't set up a meeting with Smenk within a week of their encounter with Filge, the mine manager takes it upon himself to invite them to meet with him, ordering a subordinate to sneak into the PCs headquarters with a note setting up a rendezvous at Smenk's home in [[Diamond Lake]]. If the situation warrants it, perhaps Smenk kidnaps a PCs familiar just to show them that they're dealing with a professional criminal.

In either case, [[5-World/NPCs/Diamond Lake/Allustan]] belives that the temple is occupied and he worries that it's inhabitants are behind the strange undead in the southern hills.  He knows little of [[The Ebon Triad]], but he has managed to uncover the location of an elevator within the mines.  He tells the PCs that the elevator is the most convenient way into the temple.

## Talking to Smenk
Unknown to [[5-World/NPCs/Diamond Lake/Allustan]], Smenk is secretly in league with the Ebon Triad.  While the Faceless One managed to subvert [[Ragnolin Dourstone]] with bribes and promises of power, he sees Balabar as another useful tool, particularly if Ragnolin turns against the Triad.  Balabar wants [[The Ebon Triad]] destroyed.  The PCs, if they are in his debt, could prove the perfect weapon to distract the Triad or defeat the cultists while he makes an escape.

To encourage the PCs to assist him, Smenk claims that he is terrified of the cultists, and that he was pressured into helping them.  He tells the PCs about his right-hand man, and plays up a sense of betrayal, as if his brand of villainy is somehow more respectable than that of [[The Ebon Triad]].

If the PCs uncover evidence of Balabar's involvement in the cult, they may choose to go after him.  He is a mid-level rogue who is constantly surrounded by a ring of guards and sycophants.  Smenk is more than capable of defending himself against the PCs. If he is defeated, he begs, pleads, whines and acts the part of the pitiful, miserable wretch.  His swagger and arrogance quickly give way to pathetic pleas for mercy.  If the PCs hand him over to the authorities along with evidence of his connection to the cult, Balabar is sentenced to several years of hard labor.

In short, the PCs have the chance to put Balabar in his place.

## Infiltrating the Mine
[[Ragnolin Dourstone]]'s mining operation is poorly run. Ever the pragmatist, Ragnolin thinks it’s better to pay a few guards a good wage to keep the workers in line rather than offer fair wage to his miners. He hires anyone who's willing to at his price (2 cp per day, plus room and board). Only the desperate or those unable to find work elsewhere remain here for long. In most cases, the miners work only long enough to earn the money needed to buy passage elsewhere. Many of the miners that do stick around are crippled ex-criminals unable to find other work. In addition, a number of the miners are convicted criminals who have been sentenced to hard labor. Ragnolin earned their service with a few well-placed bribes in Diamond Lake.

This section of the adventure is relatively freeform.  The PCs must come up with a reasonable plan to infiltrate the mine there are a variety of possibilities.   They could take jobs at the mine, they might sneak in or they could bribe the miners to let them pass without incident.

Note that as the mine is private property, the PCs should probably avoid simply storming it and slaughtering the guards. Survivors of such an attack run to town for help, and the PCs quickly find themselves, iп over their heads.

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
- [x] Moderate (80 XP) Level 3

> [!note]+ Read Aloud
> As the elevator grinds to a halt, you find yourself in a strange room. Three short passages lead away from the chamber—one to the north, another to the east, and the third to the west. Each passage ends in a marble doorway. The door to the north bears an eerie symbol—a human hand clutching an eye. Crimson banners frame the eastern doorway, each emblazoned with the image of a gauntleted fist gripping six arrows. The western door, in stark contrast, is plain and unmarked.
> 
> South of the elevator, the room opens into a breathtaking domed hall. The expert artistry of this place stands in stark contrast to the crude mining tunnels above. Black marble tiles stretch across the floor, gleaming under the light of glowing torches. Elaborate marble pillars and sweeping arches frame the chamber, showcasing the work of an artisan's hand. At the far end of the room, opposite the elevator’s exit, lies a large pool of dark liquid—its surface unmoving and foreboding. A carved stairway winds around the pool, rising gracefully to a platform thirty feet above. From there, the domed ceiling arches high above, reaching an impressive sixty feet over the pool’s surface, as if holding the secrets of the chamber within its embrace.

The three doors in the northern reaches of this chamber provide access to three temples, each dedicated to a different aspect of the Ebon Triad. In ages past, Vecna himself delved into the mysteries of life within this place. In those times, this chamber was a vast library and the pool served as a potent scrying device for the lich. The books once kept here are long gone and the pool's magic has degraded to a shadow of its former power, yet this room still maintains an unsettling aura of antiquity and oppressive secrecy.

 - 2: [[tiefling-guard|Tiefling Guard]] G

```encounter
name: The Dark Cathedral
party: PartyName
creatures:
  - 2: [[Tiefling Guard]]
```

Two Tiefling fighters from the temple of Hextor are on guard here. They keep watch from the pillars near the entrance to Hextor's temple to the east of the elevator. When the elevator begins its descent, they move to stand guard near it. The guards have grown complacent with the monotony of their duty here. Thus, they tend to assume that anyone coming down the elevator is on an errand for one of the temples. They wear chainmail masks and tabards marked with a holy symbol of Hextor. Their arms are covered with elaborate tattoos bearing Hextor's liturgies and images of various devils.

## Tactics
The Tieflings fight a delaying action. One engages the party in melee while the other rushes to the eastern gate to alert the cult of Hextor. Once he reaches the gate, the tiefling hammers on the door as an action. Both tieflings know the secret knock needed to enter the temple of Hextor (see area 2), but the tiefling does not use the code, Instead, he pounds on the door knowing that the skeletons within will move out to attack intruders in response to the incorrect code.

## Features of the Area
**The Pool:** The contents of the pool are dark and viscous, and exude an aura of uncomfortable cold. A splash from the waters is enough to inflict [[Drained|Drained 1]] (Fortitude DC 15 resists), and total immersion in the foul liquid automatically inflicts [[Drained|Drained 2]] and [[Enfeebled|Enfeebled 2]] and those conditions worsen by one per round (Fortitude DC 20 resists) from the supernatural cold. The liquid is opaque and dark and the deeper one goes, the thicker it gets ten feet from the surface, [[Skills#Athletics|Athletics]] checks to swim in the fluid suffer a -5 penalty. This penalty increases to -10 at depths from 10 to 20 feet, and to -20 at depths from 20 to 30 feet. Beyond a depth of 30 feet, the "fluid" of the pool becomes a solid similar to that of stone. What horrific mysteries may or may not be buried in the unknown depths below are left to you, but the creature that emerges from within in Part Five (the Ebon Aspect of the Overgod) should be an indication of what awaits exploration into such forbidden regions.

A DC 20 [[Seek]] check made in the area around the pool or on the platform above reveals blood stains, scratches from metal equipment, and scattered ashes. The denizens of the temple of Vecna to the north regularly conduct experiments оп the pool, hoping to awaken an aspect of the Overgod that they believe dwells somewhere within.

> [!tip]+ Treasure
> The uppermost platform above the pool bears a small, wicker basket filled with an offering to the Overgod. It contains 4 gp in a leather pouch and а silver idol of Erythnul worth 10 gp.  Additionally, the guards each have one [[Healing Potion (Minor)]].  One of the guards is carrying 7 gp and a [[Potency Crystal]] while the other has a skeleton key which opens all of the locks in areas 2 though 11.
> 
> - [x] gp::7
> - [x] gp::14
> - [x] consumable::[[Healing Potion (Minor)|Healing Potion (Minor)]] [ilvl::1] [gp::4]
> - [x] consumable::[[Healing Potion (Minor)|Healing Potion (Minor)]] [ilvl::1] [gp::4]
> - [x] consumable::[[Potency Crystal|Potency Crystal]] [ilvl::1] [gp::4]

# Part 2: Citadel of Hextor

```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: Citadel of Hextor
image: [[Citadel-of-Hextor.png]]
height: 800px
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

The citadel of Hextor serves as the primary military arm for this branch of the Ebon Triad. As befits a lawful evil cult, the clerics and their warriors present а highly organized defense against the PCs. In addition to the encounter key provided below, the section “Temple Organization" provides an overview of the Hextorites' plans in the event of an attack. They practice their basic tactics at least once per week, making them well- drilled, highly organized opponents.

## Temple Features
The doors within the temple of Hextor are of strong wood. Unless otherwise noted, the chambers are dark. The humans in the temple tend to keep light sources nearby, usually everburning torches. The tieflings and undead rely on their darkvision.

As befits a lawful organization, the passages here are free of debris, trash, and graffiti. The temple is run like a military camp. The camp followers from area 3 gather up any refuse and transport it outside by night.

Before running encounters here, be sure to study the “Temple Organization” section in addition to the encounter kеу. Once the PCs enter the citadel, the clerics and their followers react to the intrusion with an intelligent, carefully orchestrated plan. If the PCs are rash or foolish, they might be overwhelmed and defeated in short order.

**Temple Doors:** 2 ín. thick; Hardness 5: hp 20; Break DC 23; Open Lock DC 22.

## Encounter 2: Chamber of the Guardians
**Encounter Difficulty:**   
- [x] Trivial (60 XP) Level 3

> [!note]+ Read Aloud
> A dozen suits of armor, ranging from battered. leathers to rusted plate, line this chambers walls. The bleached white bones of human, dwarf, and orc skeletons contrast with the dark, bloodstained armor. The suits are carefully arranged, as if the dead were preparing. to march for war, Each has a mace hooked to its belt, while bells of varying shapes and sizes hang from the armor on long, leather strips.

Before proceeding with this encounter, remember that the state of this chamber depends on whether the characters know the knock code. See the Tactics section below to determine what happens depending upon what knock the PCs use.

At the start of the encounter, place the following foes on the map: 
 - 8: [[3-Rules/Bestiaries/Monster Core/Skeleton Guard|Skeleton Guard]] S

```encounter
name: Chamber of the Guardians
party: PartyName
creatures:
  - 8: [[Skeleton Guard]]
```

The Hextorites keep animated skeletons in 4 of the 12 suits of armor.  The skeletons attack anyone who enters without the proper knock. Even if the party uses the correct knock, the skeletons’ bells ring as two of them move to open the gate.

## Tactics
The skeletons will attack until defeated.

> [!aside|right]
> **Temple Organization**
> 
> The temple of Hextor responds to intruders using a simple plan that focuses on driving opponents into the main temple, locking them in there, and attacking them from the balcony. The encounter areas above give some notes about the temple's plans, while this section provides an overview of how the Hextorites manage their defenses.
> 
> When the characters enter the temple, the skeletons in areaa most likely alert the denizens of areas 3 and 4. Even if the party sends a scout ahead, there are enough skeletons there to notice any heavily armored PCs.
> 
> The guards in area 3 attempt to retreat down the hall to area 4, where they can unleash Beast. The warriors in area а fight a delaying action to buy time for the rest of the complex. Once Beast engages the PCs, the rabble flees to area 7 to make their stand.
> 
> Meanwhile, the guards from area 3 link up with the guards in area 5. Two of them barricade and guard the door that connects the coridor that runs from area 5 to the one leading to area 10. One waits to the south to report on any successful attempts to breach the doors, while any other surviving guards join the clerics in areas 7 and 9.
> 
> The clerics from areas 7 and 9 lead the zombies from area 8 to the upper balcony of area 11, along with any surviving guards aside from those assigned to guard the door. There, they wait for the PCs to enter the chamber. If the PCs enter room 11, the high priest Theldrick seals the door shut behind him using the room's controls. With the PCs trapped, the clerics rain spells upon them while the guards use their bows. The zombies attack anyone who attempts to climb to the upper balcony.
> 
> Consult the description of room 11 for a full breakdown of the Hextortes tactics and plans for that chamber.
> 
> Keep in mind that just as the PCs’ plans can fall apart, so too con the cultists’ plans. If the PCs quickly slay Beast, they can probably rush forward to battle the guards before they can seal off the doors. The clerics prefer to let their minions wear down any opposition, while the guards, undead, rabble, and the dire boar Beast all fight to the death. If the PCs never enter area 11 the clerics try to make their stand at area 8.

## Encounter 3: Chamber of the Faithful
**Encounter Difficulty:**   
- [x] Trivial (20 XP) Level 3

> [!note]+ Read Aloud
> Blankets cover the floor of this chamber, surrounding a wooden crate atop which stands a small, crude statue of a six armed humanoid figure. A few battered weapons, spears, clubs, and fails lean against the far wall. Stone pegs carved into the wall light this area with flickering, bright flames.

At the start of the encounter, place the following foes on the map: 
 - 2: [[Cultist]] W

```encounter
name: Chamber of the Faithful
party: PartyName
creatures:
  - 2: [[Cultist]]
```

This chamber serves as quarters for a large group of fanatical Hextorites who hope to join the cult. These petitioners run errands for the Hextorites, make trips into town for special supplies and provide manual labor. Their faith has been tested, and they have yet to be found wanting. If the characters have been active in the Diamond Lake region for a week or more, they may recognize а few of the cultists as locals from town. The PCs may have seen them while buying supplies or in the taproom of the Feral Dog. 

## Tactics
The cultists are fanatical in their dedication to Theldrick, the high priest of this place. They fight to the death and are suspicious of all newcomers. They are under orders to bring the fight to the main temple (area 11). If they fail in that mission, they throw themselves at the party to buy time for the rest of the temple's defenders. 

## Features of the Area
**Lighting:** Two stone spikes carved from the wall and imbued with continual flames illuminate this area.

> [!tip]+ Treasure
> A successful DC 15 [[Search]] check of the wooden crate in the center of the room reveals a small trove hidden beneath a loose flagstone. The treasure. consists of a golden holy symbol of Hextor worth 5 gp and the broken blade of a silver, ceremonial dagger worth 2 gp.
> 
> - [x] gp::7

## Encounter 4: The Guard Chamber
**Encounter Difficulty:**   
- [x] Low (60 XP) Level 3

> [!note]+ Read Aloud
> This chamber holds two beds against the east wall, a long, wooden table along the south wall, two stools, and a weapons rack along the west wall. A suit of leather armor lies on the table with a variety of tools spread out around it.

This chamber serves as barracks for а pair of tiefling guards charged with watching the door. The guards rely on the cultists in area 3 to alert them to any trouble. They tend to take their time їп responding to anything short of the sound of battle.

At the start of the encounter, place the following foes on the map: 
 - 2: [[tiefling-guard|Tiefling Guard]] G

```encounter
name: EncounterName
party: PartyName
creatures:
  - 2: [[Tiefling Guard]]
```

The two tieflings stationed here wear chainmail masks to conceal their faces. Both have elaborate tattoos of hellish fiends, symbols of Hextor, and prayers to Hextor written in Infernal along their bare arms.

## Tactics
The tieflings have learned to fight as a pair. While one readies his axe, the other casts darkness on a coin or small stone and throws it into the midst of the enemy. The two then take advantage of Blindfighting to harass their foes If pressed, the second tiefling uses his darkness spell to cover their retreat to area 6, If cornered or cut off they fight to the death.

> [!tip]+ Treasure
> The leather armor is a mundane suit that one of the tieflings is in the process of repairing, while the tools around it comprise a complete [[Repair Toolkit (Superb)]]. A DC 15 [[Search]] of one bed reveals а small, velvet bag containing 7 gp and a golden necklace worth 5 gp.
> 
> - [x] gp::12
> - [x] permanent::[[Repair Toolkit (Superb)]] [ilvl::3] [gp::25]

## Encounter 5: Chamber of the Beast
**Encounter Difficulty:**   
- [ ] Low (40 XP) Level 3

Use the following description as the characters approach the door to this chamber.
> [!note]+ Read Aloud
> A thick chain is wrapped around the handles of these double doors. A crude padlock holds the chain in place, keeping the door locked from this side. The faint, musky smell of a large creature kept in a small area fills the hallway.

The lock can be picked with a DC 19 [[Skills#Thievery|Thievery]] check. Once the PCs enter this chamber, read or paraphrase the following.
> [!note]+ Read Aloud
> A single stone spike flickering with magical flame lights this area. Filthy hay, mixed with a generous amount of animal dung, covers the floor of his crude, cave-like chamber.

At the start of the encounter, place the following foes on the map: 
 - 1: [[dire-boar|Dire Boar]] B

```encounter
name: Chamber of the Beast
party: PartyName
creatures:
  - 1: [[Dire Boar]]
```

This chamber serves as the home for the cult's mascot, a vicious dire boar named Beast that was raised and tended by Theldrick. The creature attacks anyone it doesn't recognize on sight. Scars cover its hide, while its tusks have been capped with iron. These modifications make the boar more intimidating in appearance but do little to alter its actual statistics.

## Tactics
Unless the characters are quiet ог clever, there is little chance that they face the dire boar here. If a cultist or the guard from areas 2 or 3 retreats past area 4, he uses a full-round action to undo the chains, open the door, and unleash Beast. The boar rampages through the area, bearing down on the characters with a berserker’s ferocity. It fights to the death. Luckily it lacks the intelligence for tactics more complicated than a headlong charge. The cultists use Beast to buy time to prepare their defenses.

## Encounter 6: Inner Guard Chamber
**Encounter Difficulty:**   
- [ ] Severe (120 XP) Level 3

> [!note]+ Read Aloud
> A tapestry depicting a six-armed, fiendish beast carrying a bewildering variety dominates the north wall.

This chamber serves as a guardroom for the inner temple of Hextor and the priests quarters.

At the start of the encounter, place the following foes on the map: 
 - 3: [[tiefling-guard|Tiefling Guard]] W

```encounter
name: Inner Guard Chamber
party: PartyName
creatures:
  - 3: [[Tiefling Guard]]
```

Three tiefling guards watch this area. Their tattoos depict holy symbols of Hextor, various devils, and scenes from Hextor's unholy texts.

## Tactics
The three guards attempt to prevent the characters from progressing any further into the temple. One uses darkness to disorient intruders, a second wades into melee, while the third runs to warn the high priest in area 10.

Chances are slim that the PCs fight the guards here. If word reaches them of intruders, they rush to the door just south of area 6 and bar it shut. Two of them wait at the door to repel intruders, while the third stands just outside this chamber, near the stairway to area 11. IF the PCs attempt to batter down the door, the two guards fight them off while the third warns Theldrick.

If the PCs are trapped in area 11, the two guards move to guard the door leading out of the shrine while the third joins Theldrick in the upper gallery.

> [!tip]+ Treasure
> Each of the tieflings carry 11 sp.  Additionally, one tiefling carries a plain, silver ring inlaid with several small emeralds worth 10 gp total.
> 
> - [ ] gp::10
> - [ ] sp::33

## Encounter 7: Barracks
> [!note]+ Read Aloud
> Two sets of bunk beds are set along the far wall of this chamber, with a thick, bearskin rug between them. Three wooden stools are arranged on the rug, while a weapon rack sports several javelins, a bow, several quivers filled with arrows and a sword.

This chamber serves as a barracks for the guards in area 5 and for the tiefling оп watch in the main temple.

> [!tip]+ Treasure
> The rack holds 6 javelins, а longsword, a composite longbow and four quivers of 20 arrows each

## Encounter 8: Priest's Chambers
**Encounter Difficulty:**   
- [ ] Low (60 XP) Level 3

> [!note]+ Read Aloud
> Light from a pair of torches casts strange shadows across the blood-red walls of this chamber. Two wooden chairs are set opposite each other around a round table. Upon the table rests a thick, leather-bound book, a rusty dagger, a quill, inkpot, and several sheets of parchment. A wooden screen blocks off half the room near a large bed covered in blankets and furs.

This chamber is the residence of two priests of Hextor,a married couple named Garras and Kendra. The two serve Theldrick only grudgingly, and together they plot to seize control of this temple.

At the start of the encounter, place the following foes on the map: 
 - 1: [[Kenora|Kenora]] W
 - 1: [[Garras|Garras]] H

```encounter
name: Priests Chamber
party: PartyName
creatures:
  - 1: [[Kenora]]
  - 1: [[Garras]]
```

Garras is a hulking brute whose large gut and bulging muscles strain against his half-plate straps and buckles, He is shaved bald and has a holy symbol of Hextor branded onto his face. Kendra is a slender, pale woman with long, dark hair pulled back in a tail. She wears a pair of steel earrings shaped into a holy symbol of Hextor. Her face is covered with several scars that mar her otherwise appealing features.

## Tactics
The two clerics fight as an effective pair. Garras occupies the party, using his flail to trip his opponents. If possible, he drinks his potions in the following order: blur, bulls strength, shield of faith, and barkskin, He casts bless before battle if he has sufficient warning.

Kendra first calls for the undead in area 9. She directs the zombies to fight along Garras, then casts bane, then doom оп a fighter-type, then cause fear on the same warrior she used doom against. She knows that paladins are immune to fear, and thus never uses cause fear against anyone wearing holy symbol of a good deity. If the party has arcane or divine support, she uses her scroll of sound burst and her scroll of silence, usually casting the latter spell on a small rock and throwing it into her enemies’ midst.

> [!tip]+ Treasure
> In addition to his combat gear Garras has several potions including [[Healing Potion (Lesser)]], [[Eagle Eye Elixir (Lesser)]], [[Bravo's Brew (Lesser)]], and [[Silvertongue Mutagen (Lesser)]].  He's also carrying 2 gp.  In addition to her combat gear Kendra has a [[Magic Wand (1st-Rank Spell)|Magic Wand (Heal)]], [[Scroll of 1st-rank Spell|Scroll of Silence]], 5 gp and the key to the chest in area 8.
> 
> Kendra and Garras keep their valuables in a small, wooden treasure chest beneath their bed. The chest is locked ([[Skills#Thievery|Thievery]] DC 20) and Kendra carries the key. Within the chest is 20 gp and a jeweled bracer worth 40 gp.
> 
> - [ ] gp::7
> - [ ] gp::60
> - [ ] permanent::[[Magic Wand (1st-Rank Spell)|Magic Wand (Heal)]] [ilvl::3] [gp::60]
> - [ ] consumable::[[Healing Potion (Lesser)]] [ilvl::3] [gp::12]
> - [ ] consumable::[[Eagle Eye Elixir (Lesser)]] [ilvl::1] [gp::4]
> - [ ] consumable::[[Bravo's Brew (Lesser)]] [ilvl::2] [gp::7]
> - [ ] consumable::[[Silvertongue Mutagen (Lesser)]] [ilvl::1] [gp::4]
> - [ ] consumable::[[Scroll of 1st-rank Spell|Scroll of Silence]] [ilvl::1] [gp::4]

## Encounter 9: Chapel of Hextor
**Encounter Difficulty:**   
- [ ] Low (120 XP) Level 3

> [!note]+ Read Aloud
> A pair of torches mounted on long, iron poles shed flickering light across this chamber. A small stone altar stands between the two torches. A red tapestry emblazoned with the symbol of a gauntlet grasping six arrows hangs from the wall behind the altar. Four statues of men clad in chainmail and leather masks, each carrying a greatsword, stand along the wall, two on each side of the altar.

This chamber serves as the personal chapel for the three priests of Hextor active in this temple, Kendra, Garras, and high priest Theldrick.

The altar provides a permanent desecrate effect. Undead within 20 feet of it gain a +2 profane bonus on attacks, damage, and saves, while clerics suffer a -6 profane penalty on turning checks.

The two torches are everburning torches. The chapel's ceremonial objects are hidden in a secret compartment in the wall behind the tapestry; this secret panel can be found with a DC 20 [[Search]] check. Characters who open this hidden compartment trigger a trap. The hollow is one cubic foot and is almost completely filled by a locked metal box ([[Skills#Thievery|Thievery]] DC 20). The box contains some Treasure (see below).

> [!danger]+ Trap
> Anyone who opens it secret panel without first speaking the words "Hextor guide me" in common or infernal triggers it's effect.
> 
> [[electric-latch-rune|Electric Latch Rune]]
- [ ] Low (8 XP) Level 3

At the start of the encounter, place the following foes on the map: 
 - 2: [[3-Rules/Bestiaries/Monster Core/Zombie Brute|Zombie Brute]] Z

```encounter
name: Chapel of Hextor
party: PartyName
creatures:
  - 2: [[Zombie Brute, Zombie Troglodyte]]
```

A pair of troglodyte zombies dwell in this chamber. They attack anyone who lacks a symbol of Hextor, and obey the verbal orders of any of the three clerics.

> [!tip]+ Treasure
> The box contains a golden chalice worth 10 gp, two silver holy symbols of Hextor worth 2 gp each, a [[Wondrous Figurine (Onyx Dog)]] and a silvered dagger with a jeweled hilt worth 8 gp.
> 
> - [ ] gp::22
> - [ ] permanent::[[Wondrous Figurine (Onyx Dog)]] [ilvl::2] [gp::34]

## Encounter 10: Theldrick's Chamber
**Encounter Difficulty:**   
- [ ] Severe (80 XP) Level 3

The door to this room is locked ([[Skills#Thievery|Thievery]] DC 20). Theldrick, detailed below but likely encountered elsewhere, holds the key.

> [!note]+ Read Aloud
> This cramped spartan chamber is obviously someone's living quarters.  A small bed is set in the corner to the left.  Next to the bed is a short table holding a leather-bound book, an inkpot, a stone key and several scrolls.  A small chair with velvet cushions sits before the table. On the wall to the right stands a weapons rack that holds a mace, two flails, and a crossbow.  A wooden chest rests below the rack.

> [!caption|left wm-med] Floats to the left
> ![[Theldrick.png]]
> [[Theldrick]]

Theldrick keeps this chamber as his quarters.  He attends to his personal business here, but otherwise spends most of his time in the main temple at area 11. 

Theldrick is the high priest of the temple and commander of the Ebon Triad's military forces in the Dark Cathedral. He is a canny tactician and an eager fighter. One of his eyes is missing, and his face bears scars and burns from a battle against a young red dragon. He wears one of the dragon's talons as a necklace. His black armor has а crude holy symbol of Hextor scribed on its chest plate in dried blood.

## Tactics
If the PCs catch Theldrick in his room, he tries to surrender to buy time, He accuses the PCs of needlessly butchering his followers, and points out that their invasion of his domain is obviously illegal. In many ways, he is right. Afterall, the temple of Hextor has not yet broken any laws. Theldrick has taken care to avoid arousing any suspicion, and he has managed to keep the other two arms of the Ebon Triad in line. Lawful characters cannot simply murder him without just cause. In the meantime, his followers prepare a counterattack. If the situation is dire, they flee to the temple of Erythnul for help. Regardless of the situation, Theldrick never leaves the cathedral without a fight. He uses his spells to escape, or orders his followers to attack the PCs in the main cathedral area outside the elevator.

## Features of the Area
**Weapons Rack and Chest:** The weapons on the rack have no special abilities or qualities, while the chest normally holds Theldrick’s armor. If he is currently wearing this armor, the chest is empty.
**Table:** The table holds the true items of interest here. The scrolls appear blank, but anyone who views them using detect magic sees a weak aura of magic. Read magic reveals writing in a strange script. A DC 40 [[Decipher Writing|Decipher Writing (Religion)]] check allows the PCs to crack the code. Otherwise, they must recover the codebook from the temple of Vecna (see area 27) in order to read the scrolls. When the PCs have cracked the code, give them [[Three Faces of Evil-Handout 1.png|Handout #1]]. The book is Theldrick’s record of the Ebon Tríad's progress in the mines, Reading it over takes one hour. Read ог give the players a copy of [[Three Faces of Evil-Handout 2.png|Handout #2]] when they've read it. The book is written in Common. The stone key opens the door that leads to the caves of Erythmul It is marked with that god's holy symbol.

> [!tip]+ Treasure
> The weapons rack holds a mace, a pair of flails and a crossbow. Theldrick keeps his personal treasure and trophies in a locked ([[Skills#Thievery|Thievery]] DC 22) chest beneath. his bed. The chest contains 70 sp in a leather bag and a fist-sized gold bust of a dwarf wearing a gem-studded crown worth 100 gp.  In addition to his combat gear, Theldrick is carrying a holy symbol of Hextor worth 5 gp, keys to area 10 and the chests in areas 9 and 10, [[Scroll of 2nd-rank Spell|Scroll of Dispel Magic]] and a [[Potion of Fire Retaliation (Lesser)]]
> 
> - [ ] gp::100
> - [ ] gp::5
> - [ ] sp::7004
> - [ ] consumable::[[Scroll of 2nd-rank Spell|Scroll of Dispel Magic]] [ilvl::3] [gp::12]
> - [ ] consumable::[[Potion of Fire Retaliation (Lesser)]] [ilvl::3] [gp::12]

## Encounter 11: Battle Temple of Hextor
**Encounter Difficulty:**   
- [ ] varies (varies XP) Level 3

> [!note]+ Read Aloud
> This long, wide chamber is surrounded on three sides by a balcony perched twenty feet above the floor. Six torches equally spaced along the walls provide light. The side opposite the large, bronze doors features a sizable viewing box with a sloped floor and several ostentatious wooden chairs positioned to allow easy view of the chamber below. A huge statue of a six-armed humanoid clutching а bewildering array of weapons stands in the midst of the chamber. A fist-sized red gem set in the statue's forehead glitters in the flickering light. A thick layer of sand covers the floor to a depth of a few inches. The walls are smooth, polished rock, while а crimson banner with the symbol of a black, gauntleted hand clutching six barbed arrows is set above the double doors leading into the bottom level of this chamber.

This is a battle temple dedicated to Hextor. Here, the faithful and heretics alike fight to the death for glory, honor, and the blessings of the Scourge of Battle. The clerics watch the battle from their sitting box while the other denizens of this place commonly
gather along the balconies to take in the spectacle.

> [!warning]
> This area combines combatants from previous locations if the PCs have not been quiet or quick.  It is likely to be an overwhelming encounter.  If the PCs are defeated they will awaken in area 5 if they have defeated Beast or in area 3.  They will have all of their armor and gear removed and stored in area 6.

## Tactics
The clerics of Hextor attempt to trap intruders in this chamber and defeat them from the safety of the balconies, The rabble from area 2 rallies here in an effort to draw the PCs into the chamber. The high priest Theldrick uses the temple's throne to close the door behind the PCs and lock it. He then begins casting his spells. Once he is out of offensive spells, he uses whatever magic he has left to enhance his defenses and abilities. He then relies on his crossbow ог, if the situation is well in hand, descends to the arena floor to melee the PCs.

The temple guards, if any are in this area, use their bows against the party. The clerics from area 7 use the tactics outlined in that encounter area to harass the party.

## Features of the Area
**Arena Walls:** The walls along the arena floor are kept smoothed and polished, though a few cracks and pockmarks make climbing difficult but possible (DC 22 [[Skills#Athletics|Athletics]] check).
**Statue:** The statue in the center of the arena is nearly 20 feet tall. Unfortunately for the Hextorites, but luckily for the PCs, it is badly mounted on its pedestal. A single, strong push (DC 20 [[Skills#Athletics|Athletics]] check) sends it crashing down to the north. It slams into the balcony, creating а 10-foot-wide ramp to the upper level. The statue is difficult ground if anyone uses it as a ramp after it falls.
**Arena Chairs:** While most of the chairs in the viewing box are mundane, one is magical in nature. A large, wooden throne branded with the symbol of Hextor has three gems embedded in its armrests. One opens or closes the doors to the arena floor, the second one locks the doors, and the third unlocks the doors.

> [!tip]+ Treasure
> The blood-red ruby set оп the statue's forehead is worth 35 gp.
> 
> - [ ] gp::35

# Part 3: The Caves of Erythnul
Unlike the other wings of the Black Cathedral, the caves of Erythnul are little more than natural fissures within the rock. The morlocks who dwell here arrived several months ago at the behest of their leader Grallak Kur, a cleric who led his followers on an unholy pilgrimage through the Underdark. Dreams and visions sent by one of Erythnul’s minions guided Grallak's steps until he arrived here. While the other factions distrust the morlocks, they provide a convenient buffer between the forces of Hextor and Vecna.

The area behind the western door in area 1 opens into a natural cavern that winds down a flight of stairs to area 12.

## Cave Features
The morlocks lack both the time and the inclination to sculpt their environment. They dwell within the caves here, a series of winding passages punctuated by a large, U-shaped cavern. Travel through this area is difficult, as the party must contend with rough ground and sheer slopes. The morlocks, accustomed to difficult travel through perilous terrain, navigate the caves with ease. The PCs are likely not as well adapted to the environment.

The caves are lightless, and the walls are rough and cracked, making them relatively easy (DC 10 Climb check) to scale. Unless otherwise noted, the cave floors are difficult terrain. They are pitted with shallow holes, rocks, and other debris that make travel difficult.

There are no doors, mundane or otherwise, in this area of the dungeon. The morlocks lack the sophistication needed to construct them.

## Morlock Tactics
The caves are utterly dark. The morlocks and their allies have no need for light. They take aim at any torches or lanterns the PCs carry, as they know of the chaos and fear that the dark strikes into surface dwellers. The article "Who's Afraid of the Dark?" from Dracon issue #322 also provides advice and ideas for running encounters in the dark.

The morlocks attack any lanterns or torches the characters carry. The typical torch or sunrod has hardness 5 and 2 hit points. Lanterns have hardness 10 and 5 hit points. If the morlocks destroy a light source, it immediately goes out.

The morlocks can also make ranged attacks to destroy a light source. See the rules for attacking carried ог worn objects on Players Handbook page 165. Remember that objects only take half damage from ranged weapons.

If the morlocks manage to extinguish the party's light sources, they use ranged attacks to harass them from a distance. The morlocks do their best to keep the PCs confused and engage in melee only if forced into it.

Unlike the Hextorites, the morlocks are poorly organized. They tend to rush into battle with little planning, allowing the PCs to defeat them piecemeal. While they lack tactical and strategic cunning, they ae still tough fighters who give and expect no quarter.

```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: Caves of Erythnul
image: [[image-2.png]]
height: 1000px
width: 80%
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

# Encounter 12: Stone Forest
**Encounter Difficulty:**   
- [x] Severe (120 XP) Level 3

> [!note]+ Read Aloud
> A forest of stalactites and stalagmites fills this cavern. The rocky formations make it difficult to see far ahead, as they choke most of this natural cave. The steady, rhythmic splash of water dripping into a puddle echoes through the chamber. The ground here is rough and uneven.

The morlock use this chamber as a guardroom. A few of their warriors keep watch here, using the stalactites to conceal themselves against intruders. Envoys from the temple of Hextor announce their presence at this room's entrance and never proceed any further without permission. Thus, the morlocks move to attack anyone. who enters or attempts to sneak into this place.

At the start of the encounter, place the following foes on the map: 
 - 3: [[Morlock]] W

```encounter
name: Stone Forest
party: PartyName
creatures:
  - 3: [[Morlock]]
```

Three morlocks keep watch here. They wear loincloths and fight with crude, stone clubs. Each has several small, sharp stones stitched into his flesh in the pattern of a five-pointed star. The pattern is the size of a human palm and is a crude representation of Erythnul's holy symbol favored by primitive tribes. A DC 25 [[Skills#Religion|Religion]] check reveals this information.

## Tactics
The morlocks attempt to hide behind the stalactites and stalagmites, granting them a +2 bonus on all [[Hide]] checks. Assume that they take 10 on their [[hide]] checks, for a total [[Skills#Perception|Perception]] DC of 19. One morlock stands near the chambers exit And only attacks characters who approach him. If his two allies fall, he runs to area 13 to the south to warn his brethren.

## Features of the Area
**Stalagmites:** The stalactites and stalagmites provide cover. Squares with stalagmites are difficult to move through, requiring 4 squares worth of movement to enter.

# Encounter 13: The Ledge
**Encounter Difficulty:**   
- [x] Moderate (100 XP) Level 3

> [!note]+ Read Aloud
> The corridor turns to reveal another room choked with rocky formations. Stalagmites and stalactites block the line of sight ahead. Like the last chamber, this place has а rocky, uneven floor of natural stone. It slopes downward, and here and there rivulets of water flow southward.

This place provides an entrance to the great, U-shaped cavern that the morlocks inhabit. This cave is at the top of the U's left, upper edge. More information on this great cavern, and the dangers involved in navigating its sheer walls, is given in areas 14 through 17.

The morlock kennel master, along with his two krenshar pets, stands guard here. The krenshars are kept in the area ‘marked with a K on the map. The kennel master lurks at the edge of the chamber marked with a G.

The edge of this chamber is a cliff that drops 45 feet down. Iron spikes have been driven into the cliff face, making the [[climb]] DC 14 to safely descend it.

At the eastern end of this chamber is a small campsite for the morlocks who man the caves on this side of the horseshoe cavern, Ashes from a small fire along with several crude sleeping mats can be found here, marked with an А on the Caves of Erythnul map.

At the start of the encounter, place the following foes on the map: 
 - 1: [[Morlock]] W
 - 2: [[krenshar|Krenshar]] H

```encounter
name: The Ledge
party: PartyName
creatures:
  - 1: [[Morlock]]
  - 2: [[Krenshar]]
```

The kennel master and his two krenshars fight to the death to protect this place. The krenshars cannot climb the slopes, and were transported here only after the morlocks put together a crude litter to lift them. Thus, they have no place to run.

The gray-furred krenshars are underdark offshoots of their species. The Kennel master wears a cloak fashioned from the fur of an gray-furred, subterranean dire ape, He wears a wolf skull mask painted red to resemble his pets horrific visage.

## Tactics
The kennel master attempts to hide at his location ([[Spot]] DC 19) As the PCs enter the room, he moves to block the exit and calls out to his krenshars to attack. The krenshars use their scare ability to drive the PCs down the cliff to area 14 via the iron spikes pounded into the wall While the morlocks normally attack the PCs' light sources, here they leave them intact so that intruders affected by the krenshars can spot and use the spikes. The morlocks want to drive their enemies deeper into their lair so that the archers in area 14 can pick them off as they climb,

> [!tip]+ Treasure
> If the PCs make а DC 15 [[Search]] of the area they find a rough campsite where the morlock has stashed four agates worth 2 gp each and a large ruby worth 20 gр.
> 
> - [x] gp::28

## 14-17: The Horseshoe Cavern
The following encounter areas require a thorough familiarity with the rules for the Climb skill and falling. The PCs must navigate a cavern shaped like a 2 horseshoe, first climbing down the cliff in area 14 while morlock archers pelt them with arrows, then across the cavern floor (area 16) while risking an attack from the chokers in that area, and then back up a cliff face to area 17. The PCs might also take the short cut through area 15, but they must then face the morlock barbarian who guards that passage. However, that might be preferable to battling her while trying to climb to area 17 from the cavern floor.

The morlocks use the terrain to their advantage. They remain out of melee range, preferring to use their ranged weapons to whittle down the party's strength. If possible, they retreat to lure the PCs into a false sense of security before quietly moving forward to attack as they climb one the area's cliff faces.

# Encounter 14: Descent into the Dark
**Encounter Difficulty:**   
- [x] Moderate (80 XP) Level 3

> [!note]+ Read Aloud
> A great pit drops into darkness. Crude, iron spikes have been driven into the cliff face, offering you a convenient path downward. The shaft's roof is fifteen feet above the cliffs edge. Jagged stalactites hang from the ceiling.

Note that the description above assumes that the party lacks darkvision or a light source that can illuminate the stone shelf below them. If the PCs can see the shaft’s bottom (is 45 feet below) they can see that the spikes form handholds all the way to the bottom. The shafts floor is covered with loose debris, a few shattered stalactites, and a number of stalagmites.

At the start of the encounter, place the following foes on the map: 
 - 2: [[Morlock Archer]] W

```encounter
name: Descent into the Dark
party: PartyName
creatures:
  - 2: [[Morlock Archer]]
```

Two morlock fighters armed with bows hide amidst the rocks and debris of the shelf below and across from area 13. Even if the РС's light source reaches them, the archers use their natural coloration and the broken stones and other debris to hide. If they take 10 оп their [[hide]] checks, the [[Skills#Perception|Perception]] DC to notice them is 20.

The morlock's ledge is accessible by а series of spikes driven into the wall ([[Climb]] DC 14) leading from the tunnel at area 15 to their perch. The shelf they stand upon runs the entire length of the асе opposite area three at the height shown on the map.

If the morlocks wish to travel to area 13, they throw a rope up to the kennel master, who then anchors it while they tie it down to the ledge. 

## Tactics
These two archers wait until по more than one or two PCs remain at area 13 before opening fire. They prefer to fire at PCs forced to clamber down the wall via the spikes, When a character starts to climb, one morlock throws а [[Glue Bomb (Lesser)]] at each climber while the other fires arrows. Remember to keep track of the archers’ feats, particularly Point Blank Shot, and the range of their Blindsight ability (go feet)

The archers continue to harass the party until the characters make it to the base of the shaft. While firing, they yell out in Undercommon to alert the guards nearby. The archers prefer to remain in their perch to catch the PCs by surprise if they attempt to retreat. As ranged specialists, they prefer to avoid melee at almost any cost.

## Features of the Area

> [!tip]+ Treasure
> The morlocks in addition to their gear have 21 sp between the two of them.  One of them has a set of fine ivory dice with small gems set in their faces to mark the numerical on each side.  As a set the dice are worth 30 gp.
> 
> - [x] gp::30
> - [x] sp::21

![[Morlock Tunnel.png]]

# Encounter 15: The Tunnel
**Encounter Difficulty:**   
- [x] low (60 XP) Level 3

> [!note]+ Read Aloud
> This cave is little more than a wide crack the rocks Five feet wide and perhaps six feet tall, it provides a jagged, twisty passage.

Use the Horseshoe Caverns diagram if the characters attempt to pass through this tunnel. The morlocks use it to avoid their ex-allies in area 16.

Fighting in the tunnel’s enclosed space is difficult with larger weapons. Creatures larger than Medium must squeeze through parts the passage. Any Medium creature fighting with a one-handed or larger weapon suffers a -4 penalty оп attacks for squeezing. Agile weapons function without penalty.

The far end of the passage ends in a small, stone ledge with a crude rope bridge providing access to another narrow, rocky outcropping and a steeply sloped tunnel heading up and to the south.

At the start of the encounter, place the following foes on the map: 
 - 1: [[Morlock Barbarian]]

```encounter
name: The Tunnel
party: PartyName
creatures:
  - 1: [[Morlock Barbarian]]
```

A single morlock, a feral, wild creature, lurks within the passage. Normally, this brute waits near the tunnel’s southern edge, but if she hears the sounds of battle from area 14 she moves into the passage to intercept any intruders. This morlock wears battered leather armor and wields two dull, rusty knives. Her hair is long, knotted, and grimy with dirt, mud, and dust, She has a haggard appearance, with a gaunt, ropey physique.

## Tactics
The morlock lurks in the passage waiting for approaching PCs if she hears the sounds of battle from area 14. Otherwise, she keeps watch at the base of the rope bridge to area 17. If she spots PCs below her in area 16, she waits until they battle the chokers. If they defeat them, she leaps down upon them, taking `dice: 2d6` 2d6 falling damage. In her lust for battle, she pays little mind to such incidental injuries.

> [!tip]+ Treasure
> In addition to her equipment, the barbarian has several trophies from a drow priestess that she slew. In a bloodstained burlap sack are 3 gp, the preserved head of a female dark elf, and a [[Magic Wand (1st-Rank Spell)|Magic Wand (Harm)]].
> 
> - [x] gp::3
> - [x] permanent::[[Magic Wand (1st-Rank Spell)|Magic Wand (Harm)]] [ilvl::000] [gp::000]

# Encounter 16: Choker Tunnels
**Encounter Difficulty:**   
- [x] low (60 XP) Level 3

> [!note]+ Read Aloud
> The cavern's floor is choked with loose rubble, fallen stalactites, and other debris. Here and there, stalagmites poke up through the loose rocks. Ahead, a ten-foot-wide passage opens in the far wall.

The passage is 10 feet wide and nearly 8 feet tall. If the characters enter the area beyond, read or paraphrase the following.

> [!note]+ Read Aloud
> The passageway emerges at the base of another shaft A large pile of rocks and stony debris is piled in the corner ahead, while above, a crude rope bridge links a stone shelf almost directly overhead to a second shelf set thirty feet up on the opposite wall.

At the start of the encounter, place the following foes on the map: 
 - 2: [[Choker]] 

```encounter
name: Choker Tunnels
party: PartyName
creatures:
  - 2: [[Choker]]
```

A pair of chokers hides in this area. The morlocks drove them from their original lair to this pit. Thus far, they have managed to survive on rats and other vermin, but eventually starvation will do them in. They hide in the debris pile and lash out at any character that draws close. Their hunger drives them to attack, even if they are outnumbered.

## Tactics
The two chokers fight to the death. They attempt to hide at the top of the pile, next to the shafts wall, and watch the PCs’ movements. If a character draws within reach, they attack. Otherwise, they wait until the PCs attempt to climb the wall. At that point, they attack.

## Features of the Area
**Debris Pile** In their religious fervor to reach this place, the morlocks were forced to tunnel through several feet of rock. When they reached this shaft, they pushed the accumulated debris down it. The debris pile is both difficult ground and a steep slope. Thus, it costs 4 squares of movement to enter each square it covers.

> [!tip]+ Treasure
> The chokers hide the remains of their past victims within the debris pile, Here, а DC 15 Search check uncovers the gnawed bones of two morlocks along with a broken morningstar, а leather necklace set with four rubies worth 10 gp, and a Low-Grade Cold Iron Longsword.
> 
> - [x] gp::10
> - [x] permanent::[[Cold Iron Chunk|Low-Grade Cold Iron Longsword]] [ilvl::2] [gp::44]

# Encounter 17: The Bridge
**Encounter Difficulty:**   
- [x] moderate (90 XP) Level 4

> [!note]+ Read Aloud
> The rope bridge sways slightly, stirred by the almost imperceptible movement of air in this cavern. It consists of three lengths of rope arranged in a V-shape. The lower point of the V serves as a foothold, while the upper arms allow one to hold steady as they cross.

At the start of the encounter, place the following foes on the map: 
 - 3: [[Morlock]]

```encounter
name: The Bridge
party: PartyName
creatures:
  - 3: [[Morlock]]
```

The three morlocks on guard duty here wait a few feet up the passage on the far side of the shaft. They are unnerved by the feral morlock at area 15 and prefer to remain out of sight. If they hear anyone crossing the bridge, they move out to defend the ledge.

## Tactics
The morlocks have a small stack of crude javelins.  They throw their javelins at anyone on the bridge. If two morlocks fall, the third one attempts to flee and warn its allies in area 18,

The morlocks would rather not damage the bridge, as it took many hours of intensive labor to build it. However, they may attempt to disturb it to send the PCs tumbling to the cavern floor. As a full-round action, two morlocks adjacent to the bridge can grab and shake it. Any PCs on the bridge must make DC 18 Reflex save to avoid being shaken off the bridge,

## Features of the Area
**The Bridge** While the rope bridge appears fragile, the morlocks took care to ensure that it is sturdy enough to hold them. Crossing the bridge is a slow, deliberate process at best. The bridge sways precipitously, while the rope has an unnerving tendency to creak and shudder as it bears weight.  Characters can move across the bridge at one quarter their normal speed without making a [[Skills#Acrobatics|Acrobatics]] check. A PC who wants to move at half speed must make a DC 16 [[Skills#Acrobatics|Acrobatics]] check. Moving at full speed requires a DC 20 [[Skills#Acrobatics|Acrobatics]] check. Increase these checks by +3 if the PCs only use one band to steady themselves, or by +6 if they use no hands.  Оп а failed [[Skills#Acrobatics|Acrobatics]] check, a PC makes по progress. On a Critical Failure, the character falls from the bridge and suffers the appropriate falling damage. If the chokers іп area 16 are still active, they move to attack.

```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: morlock-cavern
image: [[morlock cavern.png]]
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


# Encounter 18: Cliff Chamber
**Encounter Difficulty:**   
- [x] severe (120 XP) Level 4

> [!note]+ Read Aloud
> The roof of this large cavern glistens twenty feet above and is traced with faint veins of iron ore. The quarters here are tight and cramped. Barely ten feet to the east, the cavern floor rises up into a nearly vertical slope.

This rough, uneven chamber consists of a series of sharp slopes leading upward. Each contour line on the map represents about a ten-foot rise. The characters can climb these slopes with a DC 15 [[Climb]] check.

At the start of the encounter, place the following foes on the map: 
 - 2: [[Morlock Barbarian]] W

```encounter
name: EncounterName
party: PartyName
creatures:
  - 2: [[Morlock Barbarian]]
```

Two morlocks stand guard here just outside room 19. Unless alerted, they pay little attention to their duties. They wrestle, sharpen their weapons, and talk loudly granting them a -5 penalty on. all [[Skills#Perception|Perception]] checks.

## Tactics
The morlocks shout for help once they spot intruders. The monsters in areas 19 and 20 arrive in 1d6 rounds. Roll separately for each area.

# Encounter 19: Common Chamber
**Encounter Difficulty:**   
- [x] extreme (180 XP) Level 4

> [!note]+ Read Aloud
> The scent of rotting meat and offal fills the air here. Moldering furs, crude bedrolls and other signs of 2 campsite cover the floor of this large, natural cave. Spears and crude axes are piled near the entrance to the left, along with a disorganized stack of shields.

The morlocks use this place as а general barracks. Normally, six of them rest here in between their guard duties in the outer areas of the cave. These morlocks, like the guards in area 18, do not expect trouble. They suffer a -3 penalty on [[Skills#Perception|Perception]] checks as they argue, eat, or sleep.

At the start of the encounter, place the following foes on the map: 
 - 6: [[Morlock]] W

```encounter
name: Common Chamber
party: PartyName
creatures:
  - 6: [[Morlock]]
```

The six morlocks do not carry their weapons. They must stop to pick them up on their way out of this room. If the PCs enter this room without alerting the guards, the morlocks are unarmed.

## Tactics
The morlocks fight to the death. They are fanatics to Enthnul's cause and are ready to die to protect their leader. They consider him a revered prophet.

> [!tip]+ Treasure
> The morlock warriors keep their personal treasure here, hidden in a variety of small nooks and hollows. There are four treasure caches in the room. Each requires a DC 20 [[Search]] check to uncover. The first cache contains a jade figurine of Erythnul worth 10 gp, the second holds 50 sp in coins, the third has three garnets worth 3 gp each, and the fourth contains a silver necklace set with three gems worth 5 gp.
> 
> - [x] gp::24
> - [x] sp::50

# Encounter 20: Chieftain's Lodge
**Encounter Difficulty:**   
- [x] severe (120 XP) Level 4

> [!note]+ Read Aloud
> This chamber presents a macabre sight. А bewildering variety of humanoid and monstrous skulls are mounted on the walls just outside this chamber with crude, iron spikes. The chamber beyond is a small, cramped space that smells strongly of damp earth. A great pile of furs and blankets lies in the center of the room.

If the PCs manage to slip past the guards in area 18, the chieftain is here feasting on а fistful of hallucinogenic mushrooms. He sits atop his pile of bedding, jabbering and howling in morlock.

At the start of the encounter, place the following foes on the map: 
 - 1: [[Morlock Chieftain]] 

```encounter
name: Chieftain's Lodge
party: PartyName
creatures:
  - 1: [[Morlock Chieftain]]
```

The morlock chieftain is а fearsome warrior, though his mind is almost utterly sundered. In his fanatical drive to achieve religious enlightenment, he has taken to ingesting massive amounts of psychotropic fungi. He believes that the PCs are heralds of Erythnul sent to test him. As he attacks, he screams taunts at them in Common and bids them to carry his regards to Erythnul.

The chieflainis body is covered with ritual scars and tattoos. They form a pattern of a holy symbol of Erythnul on his chest. His head is shaved bare, while his ears are studded with crude bone piercings.

## Tactics
The chieftain is a simple, brutal warrior and a bully at heart. He seeks out the weakest-looking character and charges him in melee, ignoring other targets and even taking attacks of opportunity to pursue his chosen victim.

> [!tip]+ Treasure
> The chieftain keeps his treasure mingled amidst his bedding. His personal cache consists of 4 rubies worth 15 gp each, 150 sp in coins kept within leather pouch, a jeweled statuette of an elven warrior worth 25 gp, and a [[Smuggler's Sack (Type I)]].
> 
> - [x] gp::85
> - [x] sp::150
> - [x] permanent::[[Smuggler's Sack (Type I)]] [ilvl::4] [gp::75]

# Encounter 21: Temple to Erythnul
**Encounter Difficulty:**   
- [x] extreme (180 XP) Level 4

> [!note]+ Read Aloud
> This long passage through the rocks winds down and down, deeper into the ground. It curves ahead like a spiral. The air grows musty and sickening with the scent of rotting flesh. Eventually, the passage opens into a wide cavern, where it ends at the top of a short cliff that stands ten feet above the cave floor below. From ahead, the dim glow of a lantern or small fire casts a dull, red glow.

![[Grallak Kur.png|right hmed]]

This place is the domain of Grallak Kur, the prophet of Erythnul who led the morlocks on their unholy pilgrimage to this place. Grallak spends his time here deep in meditation, communing with Erythnul to learn that dreaded god's wishes. Already, Grallak’s divine insights have greatly helped the temple of Vecna in its quest to raise the Ebon Aspect from the pool in area 1.

In order to ensure his tribe's dedication to the Ebon Triad, Grallak Kur collapsed the passage that once led out of this cavern deeper into the Underdark, blocking any chance of escape.

At the start of the encounter, place the following foes on the map: 
 - 4: [[Morlock]]
 - 1: [[Morlock Zealot]] H

```encounter
name: Temple to Erythnul
party: PartyName
creatures:
  - 4: [Morlock]
  - 1: [[Morlock Zealot, Grallak Kur]]
```

Grallak perches atop a small stone ledge 10 feet above a smoldering fire. He tosses strange powders and mushrooms onto the fire. As he inhales the burning fumes, Erythnul’s visions come to him. His three servants, a trio of morlock warriors, watch over him and tend to the fire. One keeps watch on the entrance to the temple. The morlocks are under strict orders to never disturb Grallak. Thus, the guards assume that intruders are at hand if anyone approaches.

Grallak keeps a knotted rope anchored to his ledge. If he must climb down, he uses an action to drop the rope to the floor, then clambers down.

Grallak has sewn preserved eyes of a beholder into his empty eyesockets, giving him the strange, wide-eyed look of a madman. His hair is cut short and dyed red, while a holy symbol of Erythnul is branded into his chest. His teeth are filed into fang-like points.

His three guardians are the most fanatical worshipers of Erythnul among the morlocks. They wear bronze masks that resemble holy symbols of Erythnul, while their flesh is studded in dozens of places with small, sharp bone piercings.

## Tactics
The morlock guards attempt to hold off the characters. They adopt a position to attack the PCs while the characters must climb down the sharp slope to the cavern floor. Grallak Kur uses his magic to harass the PCs. He starts with entropic shield to protect against ranged attacks, then uses spiritual weapon and hold person on the party, targeting the former against a lightly armored spellcaster and the later against any tough-looking warriors. He then follows that with a mix of cause fear and sound burst. If he must venture into melee, he prefers to use divine favor and invisibility to boost himself as he moves to attack.

> [!tip]+ Treasure
> Grallak Kur keeps his treasure hidden behind a large rock wedged into a corner of the room. Uncovering it requires a DC 20 [[Search]] check. His cache consists of 500 sp in coins, a pearl necklace worth 20 gp, and a [[Rope of Climbing (Lesser)]].
> 
> In addition, Grallak carries two scrolls that summarize his latest visions. They are written in Common, as they are meant for the Faceless One, but the rambling, disjointed style is difficult to comprehend. A DC 18 [[Decipher Writing|Decipher Writing (Society)]]] check uncovers their basic intents. The letters state that a great power stirs, and that а swarm of worms is at hand. It speaks of a power growing in the pool of the Dark Cathedral, a power that will serve the Ebon Triad as a champion, but that a still greater force drives the power of evil forward. One passage in particular stands out: “At last the will of the Ebon Triad be done. With the return, of great Kyuss, the Age of Worms is finally upon us!"
> 
> - [x] gp::20
> - [x] sp::500
> - [x] permanent::[[Rope of Climbing (Lesser)]] [ilvl::3] [gp::45]

# Part 4: The Labyrinth of Vecna
The Faceless One and his followers knew that they had uncovered one of Vecna's great secrets when they discovered this strange labyrinth directly north of the Overgod's bubbling pool. Powerful magic flows through this place, and the Faceless One suspects that at one time in the distant past Vecna himself dwelled within these halls.

The labyrinth of Vecna is a twisting series of passages honeycombed with secret doors. These portals open easily for Vecna's worshipers, but heretics are unlikely to find them without an extensive search. With luck and diligence, the PCs can find the secret doors that lead to the labyrinth’s inner sanctum.

## Labyrinth Features
The passages here are smooth, expertly crafted stone hallways and chambers. The doors are made of stone and are set on perfectly aligned hinges that allow them to open noiselessly.

The doors have hardness 8, 30 hit points, and a break DC of 30. The secret doors found throughout this area have the same stats. A worshiper
of Vecna can find them automatically—the magic of this place makes the door obvious to the faithful. They hear lingering whispers in a strange, primordial tongue that pulls their attention to the hidden doors. More impressively, а worshiper of Vecna can cause these doors to open and close by merely willing it to be so. A Vecna cultist may open or close one door in this manner per round as а free action. Nonbelivers must make a DC 25 [[Search]] check to find the doors, and must take move actions to open them.

## Inner Sanctum Features
Areas 23 through 27 of this portion of the dungeon comprise the inner sanctum of Vecna. These chambers are wellbuilt, with smooth, polished floors and expertly crafted features. The doors and secret doors are as described above. In addition, these rooms are lit by continual flame spells cast upon the walls at 20-foot intervals.

```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: update-me
image: [[Labyrinth of Vecna.png]]
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
defaultZoom: 16
### How far it zooms in or out with each step. Can be in decimals. 
zoomDelta: 0.5
### This is a string so can be any text. Change it to match your maps measurement scale. 
unit: feet
scale: 1
darkMode: false
```


# Encounter 22: The Labyrinth
> [!note]+ Read Aloud
> А smooth, gray, stone corridor stretches about thirty feet ahead before it comes to an intersection. The stonework here is smooth and expertly crafted.

This portion of the Dark Cathedral requires a bit of explanation. It consists of a maze inhabited by a small band of tengu rogues. These cultists defend the inner sanctum to the death. When they notice that heretics have entered their domain, they use the secret doors honeycombed through this area to surround and attack intruders from all sides.

The “Labyrinth Features” section above details the secret doors and mundane doors found in this area.

The three chambers marked Group 1, Group 2, and Group 3 are campsites for groups of tengu. Each of these rooms has bed rolls, crates of food, barrels of water and other supplies. The labyrinth's dire weasel guardians start in the area marked W.

Four groups of monsters inhabit the labyrinth, three small bands of tengu and a pair of dire weasels trained to patrol the maze, Each group is treated as a separate encounter.

**Group 1:** These six tengu rogues are charged with watching over the entrance to the labyrinth. They use а small peep hole in the secret раsage east of their campsite to watch the entrance.

**Encounter Difficulty:**   
- [ ] Severe (120 XP) Level 4

At the start of the encounter, place the following foes on the map: 
 - 6: [[3-Rules/Bestiaries/Monster Core/Tengu Sneak|Tengu Sneak]] W

```encounter
name: Labyrinth Group 1
party: Age of Worms
creatures:
  - 6: [[Tengu Sneak]]
```

**Group 2:** A second group of six tengu rogues serves as backup to group 1. They move out to stalk the maze if they receive word of trouble from their brethren.

**Encounter Difficulty:**   
- [ ] Severe (120 XP) Level 4

At the start of the encounter, place the following foes on the map: 
 - 6: [[3-Rules/Bestiaries/Monster Core/Tengu Sneak|Tengu Sneak]] W

```encounter
name: Labyrinth Group 2
party: Age of Worms
creatures:
  - 6: [[Tengu Sneak]]
```

**Group 3:** This band of tengu includes the tengu leader, his sorcerer lieutenant, and 2 rogues. If the tengu leader hears word from groups 1 or 2, he moves his followers to the secret doors just south of the inner sanctum to ambush anyone who comes too close to the secret chambers.

**Encounter Difficulty:**   
- [ ] Severe (110 XP) Level 4

At the start of the encounter, place the following foes on the map: 
 - 2: [[3-Rules/Bestiaries/Monster Core/Tengu Sneak|Tengu Sneak]] W
 - 1: [[Tengu Windcaller]]
 - 1: [[Tengu Blade Sovereign]]

```encounter
name: Labyrinth Group 3
party: Age of Worms
creatures:
  - 2: [[Tengu Sneak]]
  - 1: [[Tengu Windcaller]]
  - 1: [[Tengu Blade Sovereign]]
```

**Labyrinth Denizens:** Two crafty wargs patrol the passages. If they catch the scent of any non-tengu, they sound a horrific howl before charging into battle. Make [[Skills#Perception|Perception]] checks for any tengu in the area. They move to ambush the attackers if they hear the attack.

**Encounter Difficulty:**   
- [ ] Trivial (40 XP) Level 4

At the start of the encounter, place the following foes on the map: 
 - 2: [[3-Rules/Bestiaries/Monster Core/Warg|Warg]] W
 
 ```encounter
name: Labyrinth Denizens
party: Age of Worms
creatures:
  - 2: [[Warg]]
```

## Tactics
The tengu rely on stealth to overcome their foes. They use [[Skills#Stealth|Stealth]] to stalk the labyrinth, and move toward any light sources they spot. A group typically moves in trios, with two tengus hiding while the third uses his mimicry ability to lure the PCs ahead or drive them into an ambush.

The tengu duplicate the PCs' voices, or create the sounds of a humanoid in distress to draw the PCs into an attack. They can mimic the warg howl, and they have also heard enough of the Beast (the Hextorites’ dire boar) to mimic it. In general, assume that the tengu can mimic any creature of CR 4 or lower. The tengu never use light unless the party travels in darkness. In that case, they light torches and throw them away from their position to give themselves sufficient light to fight by without revealing themselves,

Since the tengu rely on stealth and careful teamwork, they do not simply mob the party. Instead, each group in tum attempts to defeat the PCs, The corridors in the labyrinth are too narrow for more than a few tengu to effectively work together.

> [!tip]+ Treasure
> The three groups each keep their treasure in the rooms they use as quarters.
> 
> **Group 1** has a total of 16 gp in coins scatted about their bedrolls and camping gear.
> **Group 2** has another 10 gp in coins, along with a small lockbox ([[Skills#Thievery|Thievery]] DC 20) that holds two small diamonds worth 5 gp each. 
> **Group 3** has another 15 gp and a [[Reinforcing Rune (Minor)]] on a runestone kept hidden within a hollow in the floor of their chamber ([[Skills#Perception|Perception]] DC 20).
> 
> - [ ] gp::51
> - [ ] permanent::[[Reinforcing Rune (Minor)]] [ilvl::4] [gp::75]

# Encounter 23: Outer Sanctum
![[Outer Sanctum.png|Left|600]]
> [!note]+ Read Aloud
> This ten-foot-wide, L-shaped passage is broken up by a series of slender, marble columns that run down its center. Strange patterns of wispy green veins writhe and undulate within the stone. The floor here consists of square, bone-white tiles that measure about a foot across. The walls are made of a dull gray marble covered with strange, circular bulges in an irregular pattern.

This is the outer sanctum of the temple of Vecna, This place was created thousands of years ago, when Vecna was still a living mortal being. When he made his relatively recent transformation to divinity, many sites where he spent time in his mortal life (including this one) surged with divine energy. Once, Vecna used this place to conduct unholy experiments. Now, his followers seek to recreate his works.

## Features of the Area
> [!danger]+ Trap
> **The Columns** The pattern of green energy within the columns is a physical manifestation of the arcane and divine powers that surge through this place. Anyone who closely inspects a column must make a DC 16 Will save or slip into a catatonic state. Anyone affected by the columns hears strange, whispering voices in his mind that seem to hint of great power and sinister mysteries. The victim is rendered helpless for 2d4 minutes. At the end of this time, he awakes from his strange state and suffers 3d4 damage as the vision wreak havoc on his mind.
- [ ] low (8 XP) Level 4

> [!danger]+ Trap
> **The Walls** The strange bulges on the walls conceal human eyes embedded into the stone. If anyone other than a Vecna worshiper casts a divine or arcane spell of any level within the outer sanctum, the bulges open to reveal human eyes that dart back and forth, alerting all of Vecna's cultists in this temple of the intrusion. In 1d4 rounds, the guardians from area 26 and 27 arrive to confront the PCs. In 2d10 rounds, any surviving tengu from the labyrinth (area 22) enter this area to repel the intruders.
- [ ] low (8 XP) Level 4

## Tactics
The tactics entries in areas 22, 26, and 27 cover the particulars of the monsters that might come here to attack the PCs. In general, Vecna's cultists fight to protect the wizards of this place, leaving them free to rain spells upon the enemy.

# Encounter 24: Storage Chamber
> [!note]+ Read Aloud
> Boxes and crates fill this room, leaving only a narrow alley to cross. Kegs of water, boxes of rations, and other mundane gear are arranged in nest, orderly piles.

This place serves as a central storage point for the Vecna cult. Both the tengu in area 22 and the denizens of the inner sanctum draw from it. Creatures of less than Small size can move along the pathway through the boxes and crates without penalty. Small and Medium creatures must squeeze, while larger creatures cannot fit into the room.

А successful DC 20 Search check uncovers any zero level item the players might want. There are no weapons or armor stored here, and no more than five of any given piece of equipment aside from food and water.

Even more interesting, such a Search check reveals telltale evidence that link these goods to Balabar Smenk. The crates and boxes are branded with his trading company's sign, a rampant rooster perched upon a large gold coin.

# Encounter 25: Acolyte's Chamber
**Encounter Difficulty:**   
> [!note]+ Read Aloud
> This room is cramped with two sets of bunk beds, a small writing table, and several stools. A single torch casts light across the room from a sconce between the beds.

The acolytes of Vecna bunk here. Normally, two of them remain in the inner sanctum while the other pair assists the Faceless One with his work within the laboratory (area 27) The acolytes have no treasure aside from the arcane items they carry

# Encounter 26: The Inner Sanctum
**Encounter Difficulty:**   
- [ ] Moderate (100 XP) Level 4

![[Inner Sanctum.png|right|500]]

> [!note]+ Read Aloud
> An acrid, almost metallic stink fills the air of this chamber. The walls here consist of a strange, green rock with purple veins that writhe and dance within it. Six black pillars form two rows along the length of this chamber, They have a tar-like appearance, and what looks like human hands push at their surfaces from within, as if a crowd of humanoid creatures was trapped within each one. А plain, basalt altar rests at one end of the chamber.

This unholy place was one of Vecna's lairs in his mortal days. Now, it is a chapel to his blasphemous faith. The unholy energy of this place grants undead resistance 4 from all Holy attacks. This bonus stacks with any resistance the undead might already possess.

At the start of the encounter, place the following foes on the map: 
 - 2: [[Corrupted Priest]] W
 - 1: [[3-Rules/Bestiaries/Monster Core/Ghost Commoner|Ghost Commoner]] H

```encounter
name: The Inner Sanctum
party: PartyName
creatures:
  - 2: [[Corrupted Priest]]
  - 1: [[Ghost Commoner]]
```

Two acolytes of Vecna and an allip occupy the Inner Sanctum. The allip is a spectral figure clad in wizard's robes. The robe's hood completely conceals the figures face, leaving it a black void. The two acolytes are humans wearing ragged, purple robes. 

## Tactics
The acolytes fight to the death to protect the Inner Sanctum, though if possible one runs to area 27 to warn the Faceless One of the intrusion.

The ghost moves to attack the PCs, driven by an intense hatred of all non-believers. If reduced to half or fewer hit points, it darts for cover in the walls to stalk the PCs, Once they engage in combat again, such as against the returning acolytes or the Faceless One, it emerges to do battle once more.

## Features of the Area
> [!danger]+ Trap
> **The Pillars** The pillars hold within them the trapped souls of those sacrificed within this temple. If the PCs have the opportunity to inspect them, the pillars consist of a thick, gummy, tar-like substance, and the hands that strain to escape from them are all left hands. Anyone who enters a square occupied by a pillar comes under attack from the desperate spirits trapped within. The pillar attacks with a +6 bonus. Оп a successful attack, the target cannot leave the square until he beats the pillars +1 grapple check. A pillar can only grasp one creature at a time.
- [ ] low (8 XP) Level 4

> [!danger]+ Trap
> **The Walls** The energy that dances along the walls casts a strange, eldritch light across this chamber. Any non-worshiper of Vecna who stares at it for more than a round must make a DC 15 Will save 3d4 damage as his mind is overwhelmed with strange, fragmented shards of cosmic secrets beyond mortal comprehension.
- [ ] low (8 XP) Level 4

> [!tip]+ Treasure
> In addition to their gear the cultists have 48 gold split between them.  The also each carry an [[Oak Potion]] and a [[Ghost Oil]].  Set upon the altar are a variety of offerings to Vecna. They include two golden goblets worth 5 gp each and a bronze sacrificial dagger set with blood red rubies worth 25 sp.
> 
> - [ ] gp::82
> - [ ] sp::25
> - [ ] consumable::[[Oak Potion|Oak Potion]] [ilvl::4] [gp::15]
> - [ ] consumable::[[Oak Potion|Oak Potion]] [ilvl::4] [gp::15]
> - [ ] consumable::[[Ghost Oil|Ghost Oil]] [ilvl::4] [gp::15]
> - [ ] consumable::[[Ghost Oil|Ghost Oil]] [ilvl::4] [gp::15]

# Encounter 27: Laboratory of the Faceless One
**Encounter Difficulty:**   
- [ ] Severe (140 XP) Level 4

![[The Faceless One.png|right|500]]

> [!note]+ Read Aloud
> Two long, wooden tables dominate this chamber. They run along the length of the room, pushed up against opposite walls, and are covered with a variety of beakers, alchemical tools, and other devices. A few glass containers bubble with materials of a variety of colors, from a boiling green sludge to a fizzing, effervescent blue liquid. Several bookshelves filled with tomes occupy one section of the wall. Beside the shelves stands an intact human skeleton. A few glistening organs, a heart, а set of lungs, and a liver writhe and pulse within the skeleton's rib cage. In the middle of the chamber stands a large, black iron cauldron. A thick layer of wax seals it shut.

This is the work chamber of the Faceless One, the leader of the Vecna cult within this dungeon. Beakers burble with strange liquids as the wizards of this portion of the dungeon plot to awaken the aspect of the Overgod from its slumber.

At the start of the encounter, place the following foes on the map: 
 - 2: [[Corrupted Priest]] W
 - 1: [[The Faceless One]] H

```encounter
name: EncounterName
party: PartyName
creatures:
  - 2: [[Corrupted Priest]]
  - 1: [[The Faceless One]]
```

The Faceless One wears green robes and a leather mask set with iron studs. Only his coal-black eyes are visible beneath it. His hands are covered with mystical tattoos. If the mask is removed, his face is а blank, featureless slate save for a small, sharp nose and а toothless mouth. He speaks with a lisp, and his frame is gaunt, almost fragile looking. His skin is as white as an albino's. 

His two acolytes wear tattered purple robes and prominent holy symbols of Vecna.

## Features of the Area
**The Skeleton** The skeleton is a byproduct of а recent experiment in reanimation using alchemical processes. 

**Shelves** The books are the Faceless One's spellbooks, along with the grimoires of the acolytes of Vecna who study beneath him. 

**The Cauldron** The cauldron contains the rest of the unfortunate skeleton’s organs. Breaking the seal releases an awful stench, Anyone in the room must make a DC 15 Fortitude save or become [[Sickened| Sickened 3]]. The cauldron contains а mixture of chemicals and human organs. 

> [!tip]+ Treasure
> The beakers, tubes, and other glassware are a complete [[3-Rules/Character Building/Equipment/A/Alchemist's Lab (Expanded)]]. The liquids within them. include two vials of [[3-Rules/Character Building/Equipment/A/Acid Flask (Moderate)]], three vials of [[3-Rules/Character Building/Equipment/A/Alchemist's Fire (Moderate)]], and a wide variety of other chemicals. 
> 
> Scattered about the Faceless One's laboratory, amidst his tools and equipment, are 11 gp and 11 sp in coins, six garnets worth 3 gp each, а [[Cloak of Repute]], and a [[Sturdy Shield (Minor)]].
> 
> In addition to the monetary rewards found here, the PCs unearth the code needed to read the scroll found in area 10. This information is summarized in [[Three Faces of Evil-Handout 1.png|Handout #1]].
> 
> - [ ] gp::29
> - [ ] sp::11
> - [ ] permanent::[[3-Rules/Character Building/Equipment/A/Alchemist's Lab (Expanded)|Alchemist's Lab (Expanded)]] [ilvl::3] [gp::55]
> - [ ] permanent::[[Cloak of Repute|Cloak of Repute]] [ilvl::4] [gp::90]
> - [ ] permanent::[[Sturdy Shield (Minor)|Sturdy Shield (Minor)]] [ilvl::4] [gp::100]
> - [ ] consumable::[[3-Rules/Character Building/Equipment/A/Acid Flask (Moderate)|Acid Flask (Moderate)]] [ilvl::3] [gp::10]
> - [ ] consumable::[[3-Rules/Character Building/Equipment/A/Acid Flask (Moderate)|Acid Flask (Moderate)]] [ilvl::3] [gp::10]
> - [ ] consumable::[[3-Rules/Character Building/Equipment/A/Alchemist's Fire (Moderate)|Alchemist's Fire (Moderate)]] [ilvl::3] [gp::10]
> - [ ] consumable::[[3-Rules/Character Building/Equipment/A/Alchemist's Fire (Moderate)|Alchemist's Fire (Moderate)]] [ilvl::3] [gp::10]
> - [ ] consumable::[[3-Rules/Character Building/Equipment/A/Alchemist's Fire (Moderate)|Alchemist's Fire (Moderate)]] [ilvl::3] [gp::10]

# Part 5: The God in the Pool
**Encounter Difficulty:**   
- [ ] Moderate (80 XP) Level 5

![[Three Faces of Evil Banner.png|right|500]]

At the start of the encounter, place the following foes on the map: 
 - 1: [[Ebon Aspect]] W

```encounter
name: The God in the Pool
party: PartyName
creatures:
  - 1: [[Ebon Aspect]]         # 1 monster named My Monster will be added, with no HP, AC or modifier.
```

А hellish entity slumbers within the pool's depths, slowly gathering the energies it needs to awaken. Unfortunately for the characters, their intrusion into this place arouses its wrath. If the PCs defeat all three cults, the Ebon Aspect rises to avenge its worshipers. As soon as the last of the three high priests (Theldrick in area 10, Grallak Kur in area 21, and The Faceless One in area 27) is slain or driven off, the aspect materailizes fully and clambers up from the pool in area 1. Luckily for the PGs, the Ebon Aspect of the Over- god is in a weak state as it has not yet summoned all its power,

If the PCs don't kill the three high priests, and instead capture them, the Ebon Aspect's manifestation is delayed fora short time. Only 1d4 hours after the PCs take their prisoners from this area, the Ebon Aspect manifests in the flesh. This action immediately slays any surviving high priests as it draws on their souls for its birth.

The Ebon Aspect takes ten minutes to gather its strength once it emerges, during which time it smashes the elevator car to splinters if its reachable. Once these ten minutes pass, the horrific fiend grows more mobile. It can sense the PCs to a range of one mile, as if with a constant locate creature effect, and it immediately seeks the PCs out, intending to slay them to the last.

If the PCs escape without killing the Ebon Aspect, the fiend slowly makes its way up into the mines above, killing anyone and everyone it encounters and eventually finding its way to Diamond Lake. If the PCs don't stop it, the Ebon Aspect causes terrible damage and kills dozens before Allustan and several of the clerics and fighters from the Garrison can kill the menace.

# Concluding the Adventure
Once the PCs escape from the Dark Cathedral, they must cope with the repercussions of their actions. The presence of the Ebon Triad in the mines could touch off some important developments in Diamond Lake. The cult obviously had the blessing of Ragnolin (the elevator didn't build itself), and the evidence gathered within the dungeon points to Balabar Smenk's involvement. If the PCs present their evidence to the governor-mayor, both merchants face criminal prosecution. If either escapes, they may track down the PCs to serve their revenge ata later date. Both Ragnolin and Balabar face a long, hard fall from wealth and prosperity to near destitution if they must flee Diamond Lake.

Of course, both mine managers have plenty of friends in town. A few bribes, а couple of carefully handled meetings, and a host of old favors called in might gain both Ragnolin and Balabar their freedom. In this case, the PCs face not only an angry nemesis, but foes who still have the connections and wealth needed to make the party's life miserable.

All the excitement should be just the thing to convince the PCs they need to take a break from Diamond Lake.  The chance arrives in the "Ecnounter at Blackwall Keep."
