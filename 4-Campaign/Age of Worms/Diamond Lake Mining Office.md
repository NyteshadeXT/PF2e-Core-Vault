---
name: Diamond Lake Mining Office
adventure_status: Started
tags:
  - "#Adventure"
art: zz-Attachments/Assets/PlaceholderImage.png
adventure_level: 1
total_xp: 380
completed_xp: 380
awarded_pp: 0
awarded_gp: 0
awarded_sp: 9
awarded_cp: 7
awarded_permanent_items: []
awarded_consumable_items:
  - name: Spell Scroll - 1st Level (Join Pasts)
    ilvl: 1
    gp: 6
whichparty: "[[Age of Worms Party Dashboard]]"
quicknote: Players were directed here by Allustan as a potential home base for their adventures in the Whispering Cairn.
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

# **`=this.file.name`**

> [!metadata|quests]- Quests
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, quicknote AS Notes, status AS Status
> FROM "5-World"
> WHERE econtains(tags, "Quest") AND econtains(adventure, this.file.link)
> SORT file.name ASC


Located on the outskirts of the [[Diamond Lake]] community, a ruined mine office and dwelling sits unoccupied, without an owner. This crumbling office is the site of the PCs’ first meeting in “[[The Whispering Cairn]]”. The previous owner of the building, the mining manager Ulgo Fant, abandoned the place more than fifty years ago when his mine ran dry. When he died over a decade ago, the property was left without an owner. Few have bothered to visit this wreck since its abandonment. Young children from the town often come up to the building on a dare and a few years back an inexperienced thief took up residence here before moving onto more lucrative trade routes.


```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: Diamond Lake Mining Office
image: [[Diamond Lake Mining Office.webp]]
height: 650px
width: 50%
### This sets where the map starts by default. Set it to the middle (half) of your bounds. 
lat: 50
long: 50
### 0 is no zoom. Negative zoom steps away from the map. Positive zoom steps towards the map. 
minZoom: 0
### Max zoom is 18. 
maxZoom: 18
### Hover mouse over the Reset Zoom icon to see your current zoom level. 
defaultZoom: 16.5
### How far it zooms in or out with each step. Can be in decimals. 
zoomDelta: 0.5
### This is a string so can be any text. Change it to match your maps measurement scale. 
unit: feet
scale: 1
darkMode: false
```

## The Yard
- [x] Low (60 XP)

> [!note]+ Read Aloud
> A modest dwelling squats upon the crown of a small hill. Although the rough stone walls of the first floor look mostly intact, the second floor has completely collapsed. A half height wall rings the house, but it too is in a state of severe disrepair. Rubble and dense weeds choke the yard. 

The entire yard is considered difficult terrain except for the small path leading up to the building. Behind the building, a stone well rises up out of the weeds. Although the bucket is gone, the water is clean, if a bit brackish. In the back, the remains of a wooden outhouse lie in an unrecognizable heap.

```encounter
name: Mining Offce Yard
party: Age of Worms
creatures:
  - 3: Bloodseeker
```

## The Building 
> [!note]+ Read Aloud
> Made of smooth stone blocks, this building stands in shambles. Thick vines creep up the side and most of the windows are broken. The front door hangs open, barely on its hinges, under a sagging and partially collapsed porch. Part of the front porch has collapsed but it still allows entry to the building. 

The two exterior doors are damaged but are still sound and easily repaired with an hour’s worth of work and a successful DC 15 [[Skills#Crafting|Crafting]] skill check. The locks on the doors are rusted beyond repair and must be replaced. The walls and doors have the following statistics.

**Wooden Doors:** 1½ in. thick; hardness 5; hp 15; Break DC 18. 
**Stone Walls:** 1 ft. thick; hardness 8; hp 90; Break DC 35; Climb DC 20 (15 with vines). 

## The Interior 
> [!note]+ Read Aloud
> Small mounds of debris litter the floor of the building’s interior. Loose stones, dead weeds, and grime cover virtually every surface. Paintings must have once adorned the place as indicated by the particular stain patterns marring the walls. The only light comes from thin shafts sneaking in from outside illuminating clouds of dust dancing through the stale air. 

## The Living Room (Level 1) 
- [x] Low (60 XP)

The first floor of the manor consists of five chambers. The largest of these is the living room, part of which has completely collapsed. A staircase in the living room is chocked with debris and leads to the remains of the second floor. 

Four of Ssyath’s lizardfolk troops claim this room as their quarters. Three will fight anyone who enters the manor while the fourth will run to the office to alert Ssyath.

```encounter
name: The Living Room
party: Age of Worms
creatures:
  - Lizardfolk Defender
  - 1: Weak Lizardfolk Scout
```

## The Office (Level 1)
- [x] Moderate (80 XP)

Directly to the right of the living room space is what an office was once. The bookshelves and desk have thoroughly rotted and what few tomes and mine maps remain are ruined and illegible. Now this room serves as the quarters for the lizardfolk scout leader, Ssyath. Ssyath has been tasked by Shukak, at the suggestion of the dragon Ilthane, to spy upon the town of Diamond Lake. Shukak plans on sacking the town after the fall of the Blackwall Keep garrison.

```encounter
name: The Office
party: Age of Worms
creatures:
  - Lizardfolk Warrior
  - Weak Lizardfolk Scout
```

> [!tip]+ Treasure
> Carefully hidden in the desk is a small pouch of coins and a scroll in a watertight case (DC 20 search). The first is an occult scroll containing join pasts.
> 
> - [x] sp::9
> - [x] cp::7
> - [x] consumable::[[Join Pasts|Spell Scroll - 1st Level (Join Pasts)]] [ilvl::1] [gp::6]

## The Dining Room (Level 1)
- [x] Moderate (80 XP)

Adjoining the living room is a sizable dining room. Any furniture that remains in the room is completely soiled and worthless. Ssyath has brought with him two monitor lizards that he uses as guards for this room. The hungry lizards attack any non-lizardfolk who enters.

```encounter
name: The Dining Room
party: Age of Worms
creatures:
  - 2: Weak Giant Monitor Lizard
```

> [!tip]+ Treasure
> Ssyath uses the monitor lizards to guard the treasure he has acquired during his campaign. Underneath the debris in this room he has hidden a locked chest (DC 15) containing 3 gp, 5 sp and 6cp. Also underneath the debris is a signet ring from a former guard captain of the Diamond Lake garrison, a dart, a merciful balm, some journeybread and a spell scroll containing the spell instant pottery that Ssyath took from a garrison member he ambushed and killed. If the ring is returned to the Diamond Lake garrison, the characters will be rewarded with 5gp each for their service.
> 
> - [x] gp::3
> - [x] sp::5
> - [x] cp::6
> - [x] consumable::[[Merciful Balm]] [ilvl::1] [gp::3]
> - [ ] consumable::[[Journeybread]] [ilvl::1] [gp::3]
> - [x] consumable::[[Instant Pottery|Spell Scroll - 1st Level (Instant Pottery)]] [ilvl::1] [gp::12]

## The Kitchen 
The kitchen contains an actual fire pit, but the chimney is blocked and must be cleared before it can be used. A staircase chocked with debris leads downstairs to a crude cellar.

> [!tip]+ Treasure
> Hidden in a shelf covered by a cloth but under some rubble are 16 days worth of trail rations, and four waterskins. Also cleverly hidden among some refuse on the floor is a potion of emergency escape.
> 
> - [x] consumable::[[Potion of Emergency Escape]] [ilvl::1] [gp::3]

## The Pantry
The pantry, attached to the kitchen, has a number of empty and broken shelves along with two empty barrels. 

Ssyath keeps the groups food stores in this location. He keeps the pantry locked at all times, but as an extra measure to discourage his troops from sneaking rations, he keeps three medium vipers as well. The vipers will spring forth and attack when the pantry door is opened.

## Second Story
> [!note]+ Read Aloud
> The second story of the manor is in complete ruins. Although there is no roof in its current state, the floor above prevents most of the rainwater from leaking into the first floor.

## Cellar (Level 1)
- [x] Moderate (100 XP)

The cellar is partially collapsed, but appears to be stable at the current time. Along one wall, a crumbling wine rack still stands, although others have already plundered it, leaving a pile of empty and broken bottles at its base. Ominous squeaking sounds can be heard coming from the basement with a [[Skills#Perception|Perception]] check (DC 10). 

Numerous rats live in the cellar. Most are harmless, but a few dire rats are also present. They will attempt to swarm any characters that disturb the cellar.

```encounter
name: Cellar
party: Age of Worms
creatures:
  - 5: Giant Rat
```

> [!tip]+ Treasure
> Hidden away among the refuse are some old mining items that the characters may find useful in the future, including a climber’s kit, a lantern (hooded), 3 flasks of oil, 6 torches and 50 feet of rope. Also included are a breathing mask, two miner’s helmets and miner’s outfits, a pick and a rockhammer (see Wormfood Dragon 334). A careful search also turns up a small wooden chest containing 14 gp, 3 sp, a temple sword, a goggles, some bloodeye coffee and a scroll of breathe fire.
> 
> - [x] gp::14
> - [x] sp::3
> - [x] permanent::[[Stalk Goggles]] [ilvl::1] [gp::20]
> - [x] consumable::[[Bloodeye Coffee]] [ilvl::0] [sp::5]
> - [x] consumable::[[Breathe Fire|Spell Scroll - 1st Level (Breathe Fire)]] [ilvl::1] [gp::12]

> [!infobox]+
> # Can't Someone Else Do It?
To avoid spending valuable adventuring time on construction, the players might want to hire others to clean up and repair the building.  Below is each individual task, the cost to hire an expert to do it and the amount of work an expert can do in one day.  Where the skill checks are needed the exert is assumed to have a +8 bonus on the check.
> ###### Stats
> Task |  Expert | Cost per Day | Amount per Day |
> ---|---|---|---|
> Cleaning the yard | Laborer | 1cp | 8 hours per day |
> Rebuilding the outhouse | Carpenter | 3cp | 18cp per day |
> Clear the debris | Laborer | 1cp | 8 hours per day |
> Fixing the first floor | Stone carver | 3cp | 27 cp per day |
> Fixing the second floor | Stone carver | 3cp | 27 cp per day |
> Cleaning the interior | Laborer | 1cp | 8 hours per day |
> Renovating the first floor | Limner | 6cp | 8 hours per day |
> Renovating the second floor | Carpenter | 3cp | 27 cp per day |

## Repairing the Mining Office
Clearing the debris from around the building and the second floor requires a total of 40 hours of work.  Most of this debris is still suitable for repairing the building and offsets much of the cost.  Repairing the outer structure of the building requires a DC 15 [[Skills#Crafting|Crafting]] check until the value of the completed structure reaches 20gp.  This repairs all the walls on the first floor, including the porch.  The second floor requires much more work and is completed when the value of the structure reaches 50gp.  This construction requires only 1gp of raw material for every 10gp of construction completed if the present materials are used (as opposed to half the cost).

The interior can be cleared of debris within 20 hours of work. The first floor can then be renovated with an additional 40 hours of work and 5gp on supplies.  Renovating the interior of the second floor requires a successful DC 15 [[Skills#Crafting|Crafting]] check until the value of the construction reaches 20gp.  Since the damage here is so extreme, the PCs must pay half the construction value for raw materials.

The windows cannot be repaired and must be either boarded over or replaced.  Replacing a window costs 2sp and 1 hour of work for each window.

Stocking the manor with the appropriate furniture and necessary supplies requires 20gp. This cost includes beds, chairs, rugs, table sand kitchen supplies. This make the place basically functional and comfortable enough for complete bed rest.  Increasing the expenditure to 100gp along with repairing the exterior of the building as noted earlier, gives the owners a +2 circumstance bonus on [[Skills#Diplomacy|Diplomacy]] and [[Skills#Intimidation|Intimidation]] checks made inside against those impressed by wealth (typically the poor and merchant class).