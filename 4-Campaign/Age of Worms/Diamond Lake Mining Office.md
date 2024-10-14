---
name: "Diamond Lake Mining Office"
adventure_status: "Not Started"
tags:
  - "#Location"
  - "#Geography"
art: zz_Attachments/Misc/PlaceholderImage.png
total_xp: 370
completed_xp: 0
---

Located on the outskirts of the [[Diamond Lake]] community, a ruined mine office and dwelling sits unoccupied, without an owner. This crumbling office is the site of the PCs’ first meeting in “[[The Whispering Cairn]]”. The previous owner of the building, the mining manager Ulgo Fant, abandoned the place more than fifty years ago when his mine ran dry. When he died over a decade ago, the property was left without an owner. Few have bothered to visit this wreck since its abandonment. Young children from the town often come up to the building on a dare and a few years back an inexperienced thief took up residence here before moving onto more lucrative trade routes.


```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: Diamond Lake Mining Office
image: [[Diamond Lake Mining Office.webp]]
height: 450px
width: 100%
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

## The Yard

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

Wooden Doors: 1½ in. thick; hardness 5; hp 15; Break DC 18. Stone Walls: 1 ft. thick; hardness 8; hp 90; Break DC 35; Climb DC 20 (15 with vines). 

## The Interior 
> [!note]+ Read Aloud
> Small mounds of debris litter the floor of the building’s interior. Loose stones, dead weeds, and grime cover virtually every surface. Paintings must have once adorned the place as indicated by the particular stain patterns marring the walls. The only light comes from thin shafts sneaking in from outside illuminating clouds of dust dancing through the stale air. 

## The Living Room (Level 1) 
- [ ] Moderate (100 XP)

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
- [ ] Moderate (90 XP)

Directly to the right of the living room space is what an office was once. The bookshelves and desk have thoroughly rotted and what few tomes and mine maps remain are ruined and illegible. Now this room serves as the quarters for the lizardfolk scout leader, Ssyath. Ssyath has been tasked by Shukak, at the suggestion of the dragon Ilthane, to spy upon the town of Diamond Lake. Shukak plans on sacking the town after the fall of the Blackwall Keep garrison.

```encounter
name: The Office
party: Age of Worms
creatures:
  - Lizardfolk Warrior
  - Weak Lizardfolk Scout
```

> [!tip]+ Treasure
> Text

## The Dining Room (Level 1)
- [ ] Moderate (80 XP)

Adjoining the living room is a sizable dining room. Any furniture that remains in the room is completely soiled and worthless. Ssyath has brought with him two monitor lizards that he uses as guards for this room. The hungry lizards attack any non-lizardfolk who enters.

```encounter
name: The Dining Room
party: Age of Worms
creatures:
  - 2: Weak Giant Monitor Lizard
```

> [!tip]+ Treasure
> Text

## The Kitchen 
The kitchen contains an actual fire pit, but the chimney is blocked and must be cleared before it can be used. A staircase chocked with debris leads downstairs to a crude cellar.

## The Pantry
The pantry, attached to the kitchen, has a number of empty and broken shelves along with two empty barrels. 

Ssyath keeps the groups food stores in this location. He keeps the pantry locked at all times, but as an extra measure to discourage his troops from sneaking rations, he keeps three medium vipers as well. The vipers will spring forth and attack when the pantry door is opened.

> [!tip]+ Treasure
> Text

## Second Story
> [!note]+ Read Aloud
> The second story of the manor is in complete ruins. Although there is no roof in its current state, the floor above prevents most of the rainwater from leaking into the first floor.

## Cellar (Level 1)
- [ ] Moderate (100 XP)

The cellar is partially collapsed, but appears to be stable at the current time. Along one wall, a crumbling wine rack still stands, although others have already plundered it, leaving a pile of empty and broken bottles at its base. Ominous squeaking sounds can be heard coming from the basement with a [[Skills#Perception|Perception]] check (DC 10). 

Numerous rats live in the cellar. Most are harmless, but a few dire rats are also present. They will attempt to swarm any characters that disturb the cellar.

```encounter
name: Cellar
party: Age of Worms
creatures:
  - 5: Giant Rat
```

> [!tip]+ Treasure
> Text
