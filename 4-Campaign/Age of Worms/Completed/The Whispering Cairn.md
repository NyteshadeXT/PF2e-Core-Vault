---
tags:
  - "#Adventure"
  - "#Location"
  - "#Geography"
art: zz-Attachments/Whispering Cairn Banner.png
adventure_level: 1
adventure_status: Complete
total_xp: 1539
completed_xp: 1479
whichparty: "[[Age of Worms Party Dashboard]]"
awarded_pp: 0
awarded_gp: 160
awarded_sp: 47
awarded_cp: 9
awarded_permanent_items:
  - name: +1 Shortsword
    ilvl: 2
    gp: 35
  - name: Leather Lamellar
    ilvl: 1
    gp: 18
  - name: Wayfinder
    ilvl: 2
    gp: 28
  - name: Rhythm Bone
    ilvl: 1
    gp: 8
  - name: +1 Long Sword
    ilvl: 2
    gp: 35
  - name: Half Plate
    ilvl: 1
    gp: 18
  - name: Silver Diadem of Insight
    ilvl: 3
    gp: 60
awarded_consumable_items:
  - name: Healing Potion (Minor) x4
    ilvl: 1
    gp: 4
  - name: Spell Scroll (1st level) Detect Metal
    ilvl: 1
    gp: 4
  - name: Potion of Emergency Excape
    ilvl: 1
    gp: 3
  - name: Surging Serum (Minor)
    ilvl: 2
    gp: 5
  - name: Cat's Eye Elixir
    ilvl: 2
    gp: 7
  - name: Scroll of Summon Undead
    ilvl: 1
    gp: 4
aliases:
  - Dungeon 124
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
The bulk of the adventure involved the exploration of the Whispering Cairn, a sizable dungeon complex loaded with ancient traps and a collection of interesting (and territorial) inhabitants.  Deep within the complex, the PCs come across the ghost of Alastor Land, the runaway child who fell victim to one of the cairn's traps 30 years ago.  The undead horror blocks the PCs' progress, promising to Abandon the cairn if the characters return his bones to the small family cemetery on the farmstead just outside town.

This farmstead is now an overgrown ruin inhabited by a nasty owlbear.  The party's plans to return Alastor's bones are upset when they discover that the o0ther greaves in the family plot have been emptied.  To appease the ghost, the party must track down Alastor's relatives, no used as guardian skeletons by an unusual necromancer who has recently arrived in tow.  Correspondence discovered at the necromancer's home reveals that the villains are preparing for a coming event known as the Age of Worms.  The latter also refers to a secret cult hidden in a nearby mine, and implicates one of [[Diamond Lake|Diamond Lake's]] mine mangers in cult-related activity.

The PCs return to the Whispering Cairn, where the explore the ruins beyond the blocked door to discover an unplundered tomb protected by hostile creatures of elemental air.  At last, the PC's reach the tomb of the Aetherial Warden Zosiel and discover a treasure that may prove decisive in thwarting the advent of the Age of Worms. 

# Prelude

```leaflet
id: Whispering Cairn
image: [[Whispering Cairn.webp]]
height: 1000px
width: 40%
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

# Part 1: A Face in Darkness
![[The Whispering Cairn-Entrance.webp]]

The yawning entrance to the Whispering Cairn lies about 10 minutes east of the abandoned mine office, a wide monolith-lined portal partially obscured by underbrush and boulders. Assuming the PCs have a general idea of where to look, discovering the entrance requires a DC 10 [[Perception]] check. Unless the PCs spend 10 minutes working to clear the brush and assorted debris from around the entarnce, treat the squares leading form the hillside to [[The Whispering Cairn#1. Cowards Rest|area 1]] as difficult terrain.

Unless otherwise noted, interior passages are 20 feet wide and 20 fee tall, with ceilings of smooth stone.

## 1. Cowards Rest
> [!note]+ Read Aloud
> Natural light dimly illuminates a long hallway extending north into darkness.  A faint breeze brings with it sibilant whispers that sound almost like sighing breath.  It must be a trick of the wind, bu tthe effect is almost lifelike.
> 
> The walls bear horizontal bands of deceptively simple geometric patterns at waist level.  In places the bands reveal startling detail, but in others the walls look as though they have been hacked apart with weapons or eroded by the rigors of time.  Flakes of ancient paint, brilliant purple and dull mustard hue, still cling to the walls in places, hinting at what must once have been a riot of color, A thin coat of dust coats the floor.
> 
> Just inside the darkened tomb, the hallway branches into shallow alcoves to the east and west.  Here the walls bear the most significant damage.  Dozens of clumsy etchings mar the beautiful ancient masonry like graffiti on a city wall.  A clump of soiled cloth about the size of a halfling rests in the rounded terminus of the western alcove.
> 
> Outside, the wind picks up, and a chorus of almost human sounds rises from the darkened hall.

In ancient days, the alcoves held great incense braziers mounted upon marble columns.  Looters plundered these priceless artifacts centuries ago, leaving only four small anchoring holes along the periphery of a circular depression an inch deep and 2 feet wide.

A fine layer of dust coats the halls first 60 feet.  A character trained in [[Skills#Survival|Survival]] can make a DC 14 [[Skills#survival|Survival]] check to notice that several wolves have crossed the dusty hallway numerous time in the recent past.

The western alcove contains a moldy old bedroll used by a local teenager daring to spend an evening in the cairn.  Any PC native to [[Diamond Lake]] under the age of 20 can make a DC 15 [[Skills#Society|Society]] check to remember childhood stories about a teenage girl who went missing 6 years ago.  Add a +1 bonus to the check for every year that the character is younger then 20.

The bedroll has hardened and become brittle with age, and cracks if examined too roughly.  It contains nothing of value.  A DC 15 [[Seek]] action turns up whittling shavings around the bedroll.

A DC 10 [[seek]] action by any character examining the patterned bands upon the walls reveals thin hollow tubes hidden within the pattern work.  The strange whispers filling the hall seem to emit from these holes.  The tubes extend to the surface of the mound above the cairn, where hundreds of tiny holes catch the wind and project it into the tomb.  The outdoor holes are well hidden (and many of them have been covered over and filled with debris), requiring a DC 20 [[seek]] action to discover them.

The patterned bands bisect the walls all the way to [[The Whispering Cairn#4. Hall of Honor (Moderate)|area 4]], where more intricate frescoes replace them.

Every three rounds, allow the PCs a DC 10 [[Seek]] check to notice a faint flickering green light coming from the north.  This DC decreases by 5 halfway down the passage, and the light becomes obvious by the time the PCs reach [[The Whispering Cairn#4. Hall of Honor (Moderate)|area 4]].  The light comes from a guttering everburning torch in [[The Whispering Cairn#7. False Tomb|area 7]].

![[Broken Portal.webp]]
[[Broken Portal.webp|Show to Players]]

> [!infobox|ws-med]+
> # Campaign Seed: Aetherial Warden Glyphs
> As they explore the Whispering Cairn, the PCs encounter glyphs inscribed thousands of years ago by the Aetherial Wardens.  These are the personal symbols of the general Icosiol, the hero Zosiel and the architect Nadroc.  While the legend of the Rod of Seven Parts is common currency among bards and dreamers, few specific details regarding Aetherial Warden culture, history and writing remain.  Their personal glyphs are thought to be the original written form of Auran, before the language of elemental air came to be represented by Draconic letterforms thousands of years ago.
> 
> [[Translate]] and [[Decipher Writing]] reveal that the symbols are personal seals, and produce the name associated with each glyph (but not the significance of that name). Use the following chart to adjudicate any [[Bardic Lore]], [[Skills#Society|Society]] or [[Skills#ARCANA|Arcana]] checks regarding these glphys.
> 
> DC |  Information Known |
> ---|---|
> 10 | The glyphs don't seem to be formed from a common alphabet, although they are reminiscent of arcane symbols representing elemental air. |
> 15 | The glyphs represent names, with each referring to a single individual.  The glyph on the arcane apparatus at [[The Whispering Cairn#2. Transport Alcove|area 2]] probably represents the seal of the most important or highest-ranking of the three found in the Whispering Cairn.  The glyph on the sarcophagi is the lowest-ranking of the three. |
> 20 | The letterforms look similar to an ancient glyph-language called Vaati, which some unorthodox scholars consider the original written form of Auran. |
> 25 | Vaati is an Auran word meaning "Warden," and refers to the legendary Aetherial Wardens who forged the Rod of Seven Parts.  A book called the *Chronicle of Chan*, falsely attributed to a Warden, records a full roster of the Aetherial Wardens present a the Battle of Aetherion and a general record of what took place there. (Allustan can requisition the book from Ardentia City's Great Library in a week's time.) |

## 2. Transport Alcove 
> [!note]+ Read Aloud
> The western hall extends perhaps forty feet, ending at a small marble platform raised about six inches off the floor.  A strange, shattered arcane apparatus rests upon this platform, its curved ovular frame giving the appearance of a noble's dressing mirror.  Only a third of this frame remains.  An unusual arcane glyph about the size of a man's head has been delicately carved into the baseplate of the support platform.

A DC 5 [[seek]] action turns up a few shards of an unidentifiable shiny black substance that feels like stone.  It is slightly cold to the touch.  Anyone inspecting the frame can make a DC 15 [[seek]] action to discover numerous runes and glyphs carved into a slot on the inside of the frame, where the "mirror's" glass would have been held.  These can be identified as arcane symbols signifying transportation with a successful DC 10 [[Skills#arcana|Arcana]] check.

In ancient days, a grand ring of portals connected several Aetherial Warden burial cairns, but now only two such portals still function, the one in [[The Whispering Cairn#3. Collapsed Passage|area 3]] and it's partner in the undisturbed cairn of Icosiol, the slain Warden whose grand tomb served as the main stop along the circle of black glass gates.  The base of the apparatus bears Icosiol's personal sigil, which has been all but forgotten by history.  See the Glyphs of the Aetherial Wardens sidebar for more information on how the PCs can learn more about the strange symbol.

> [!tip]+ Treasure
> The shards of glass might fetch as much as 5 gp from the right buyer.  In [[Diamond Lake]], that means the gnome jeweler [[Tidwoad]] or the magician [[5-World/NPCs/Diamond Lake/Allustan]].
> 
> - [<] gp::5

### Development
If the PCs make too much noise in this area, they may be detected by the wolves in [[The Whispering Cairn#4. Hall of Honor (Moderate)|area 4]].  Each of the three wolves has a -2 modifier on it's [[Skills#Perception|Perception]] check due to distance.  The DC for this check varies depending upon the PCs volume, ranging from 0 to 10.

Every three rounds, allow the PCs a [[Skills#Perception|Perception]] check (DC 10) to notice a faint flickering green light coming from the north ([[The Whispering Cairn#7. False Tomb|area 7G]]). 

## 3. Collapsed Passage 
> [!note]+ Read Aloud
> Fifteen feet down the east passage, a huge pile of collapsed rubble blocks the alcove form top to bottom.  It looks like it would take weeks to tunnel through the densely packed debris.

There's a functioning portal beyond this collapsed passage, but there is no way for the PCs to reach it now.  This portal comes into play in a Future Age of Worms adventure.

### Development 
If the PCs make too much noise in this area, there is a chance the wolves in [[The Whispering Cairn#4. Hall of Honor (Moderate)|area 4]] hear them.  Each of the three wolves has a -2 modifier on it's [[Skills#Perception|Perception]] check due to distance.  The DC for this check varies depending upon the PCs' volume, ranging from 0 to 10.

Every three rounds, allow the PCs a DC 10 [[Skills#Perception|Perception]] check to notice a faint flickering green light coming form the north ([[The Whispering Cairn#7. False Tomb|area 7G]]).

## 4. Hall of Honor (Level 1)
> [!note]+ Read Aloud
> The central hallway opens into a large chamber with wings leading to the east and west.  Across the chamber to the north yawns a twenty-foot-wide open arch draped from top to bottom in translucent cobwebs.  An eerie green light flickers from beyond the webs, casting strange shadows about this room.  The place smells of animal spoor and wet fur.
> 
> To the west, three short stairs lead to a wide marble dais, but the far end of the wing is obscured by darkness.
> 
> Huge slabs of cracked masonry and irregular piles of scattered debris choke the eastern wing, giving the appearance of complete collapse.
> 
> The sibilant, almost human whispers present in the passage become a chorus in this massive chamber, ,eerily echoing off the walls.

Anyone able to speak Auran gets the distinct impression that the whispers in this chamber are more than just a trick of wind and pipes. Occasionally, such folk can make out what must be words in the language of elemental air - words like "hopeless, sacrilege, enemies," and so on.  The words come form specially prepared air tubes leading to the surface, and are little more than a subtle way to discourage tomb robbery in a language few modern tomb robbers are likely to understand.

Thick cobwebs completely cover the arch leading to [[The Whispering Cairn#7. False Tomb|area 7]], blocking any view of that chamber beyond a flickering green light that seems to be a good distance to the north.  Characters standing within 5 feet of the cobwebs can see through the mess enough to notice that a short flight of stairs descends from the arch, but more detail than that is impossible to make out.  Dozens of tiny spiders dwell within these webs, but they are completely harmless.  Slashing through the webs is a full-round action.  A character can barrel his way through the mess but in doing so be becomes completely covered by spider webs to the point at which he can no longer see.  Clearing webs from the eyes of such a character requires a [[manipulate|manipulate]] action.

Even a casual inspection ([[Skills#Perception|Perception]] DC 8) reveals that the east wing is not as collapsed as it first appears.  A 10-foot-wide opening in the middle of the debris leads to the wolves den, [[The Whispering Cairn#5. Wolf Den|area 5]].

**Encounter Difficulty:**   
- [<] Moderate (80 XP) Level 1

At the start of the encounter, place the following foes on the map: 
 - 2: [[Wolf, Weak]] W
 - 1: [[3-Rules/Bestiaries/Bestiary 1/W/Wolf]] H

```encounter
name: Whispering Cairn - Hall of Honor
party: Age of Worms
creatures:
  - 2: Weak Wolf
  - Wolf
```

### Tactics
The wolves prefer to gang up on the nearest opponent taking advantage of their pack attack ability and using knockdown to put an enemy on the ground as soon as possible.  They then savage the prone opponent until it stops moving, at which point they move on the the next target.  If presented with multiple targets, they tend to choose the smallest or weakest-looking foe.

## 5. Wolf Den
The wolves dwell in the nearly blocked-off terminus of the east wing.  Medium or larger characters must get down on their hands and knees to negotiate the rubble passage. 

![[Lantern.webp|left]]
[[Lantern.webp|Show to Players]]

> [!note]+ Read Aloud
> The far side is rank with the smell of wild animals. Irregular piles of rubble litter the den, as do hundreds of bones and bone fragments from the creatures' past meals.  Most off these belong to animals, but a few are unmistakably human.

> [!tip]+ Treasure
> A DC 10 [[seek]] action in the northern half of the den turns up an old leather backpack half-buried under a pile of humanoid bones.  The bag contains an elaborate lantern of indigo metal inset with indigo glass panes.  The lantern is worth 12 gp.  A DC 15 [[seek]]j on the opposite side of the room turns up an intricately carved armband of unmistakable elven craftsmanship, bearing a repeating leaf motif.  The armband is worth 20 gp to a non-elf, and 25 gp to an elf NPC (such as the [[Diamond Lake]] mine manager [[Ellival Moonmeadow]] or one of his servitors).
> 
> A DC 20 [[seek]] action of the rubble mostly blocking off the passage turns up what appears to be a marble index finger cracked off a statue.  The finger exactly matches the right hand of the bas-relief sarcophagus lid figure in [[The Whispering Cairn#7. False Tomb|area 7]].
> 
> - [<] gp::20


## 6. Gallery of Seven Lanterns
> [!note]+ Read Aloud
> A wide dais spanning the back half of the western wing calls attention to a faded fresco upon the south, west and north walls. From a vantagepoint t the center of the dais, the wall painting makes it look like you stand within a massive room with seven short hallways radiating outward from a central point.  A chain dangles from the ceiling at the end of each hallway, and each chain bears a gleaming colored lantern.  Clockwise, the colors are red, orange, yellow, green blue, indigo and violet.

Through a bit faded the fresco is in remarkably good shape given its advanced age. Canny players will notice that the seven colored lanterns correspond to the seven colors of the rainbow, and that they are all lit.  This is a clue regarding how to bypass the face door in area 8.

## 7. False Tomb
> [!note]+ Read Aloud
> A wide stairway descends into an immense domed chamber. Seven short tunnels branch from the room in all directions, extending some thirty feet before ending in rounded walls. At the terminus of each passage, a thick chain dangles from an unseen high ceiling. Five of the chains bear colorful lanterns, but two hold nothing at all.  Opposite the entry stairs, a bright green lantern containing what looks like a torch casts a weird, murky light about the room.  Countless chips of glass and shiny metal inset into the chamber's doomed ceiling reflect this light, giving the impression of starlight and falling snow.  The dome starts about ten feet off the ground and reaches an apex about thirty feet over the center of the room.
> 
> Below the dome's peak, a long dais holds what appears to be a marble sarcophagus. A milky white bas-relief figure, perhaps of a human, rests passively upon the sarcophagus lid.  Unlike the rest of the tomb, this room is completely silent.

The sarcophagus in the center of the chamber might suggest that this is the final chamber in Zosiel's burial cairn.  It is in fact  a false tomb meant to discourage grave robbers, and contains a number of opportunities for such interlopers to meet an untimely end.  Arcane elevators hidden in the ends of the two branch passages lead to the quarters of the architect Nadroc and his team of servitors, who dwelled below for months while completing Zosiel's tomb. 

### The Sarcophagus 
> [!caption|right wsmall] Floats to the right
> ![[Sarcophagus.png]]
> [[Sarcophagus.png|Show to Players]]

At the center of the chamber is a raised platform, upon which sits a sealed sarcophagus.  The lid bears a white stone relief of a tall figure cloaked in a simple garment of allowing cloth.  It's difficult to say why, exactly, but the outfit conjures thoughts of ancient times.  The figure at first looks human, but a cursory examination reveals that it is about 7 feet tall, is completely hairless and is of indeterminate sex. It's arms and hands rest at its side.  The left hand curls upon itself in a fist, but the right is placed palm up, with the thumb turned in and all but the index finger held parallel to the arm.  The index finger, originally curled under the thumb (see illustration), was broken off by tomb raiders centuries ago and now rests amid the rubble in [[The Whispering Cairn#5. Wolf Den| area 5]]. The extended fingers represent a clue to the location of the true tomb.

The finger wears a scarab-like amulet around it's neck, inscribed with the personal symbol of Zosiel.  Like Icosiol's personal glyph in [[The Whispering Cairn#2. Transport Alcove|area 2]], this symbol has been all but forgotten in the modern age.  A DC 20 [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check reveals only that is is a personal glyph of some powerful elemental entity.  See the Glyphs of the Aetherial Wardens sidebar for more information on how the PCs can learn more about the strange symbol.

The sarcophagus rests upon a small raised platform carved in the shape of a stylistic arrow, wit the tip aligned with the head of the relief figure upon the lid and a short "shaft" extending from the foot of the sarcophagus. A DC 15 [[Skills#Athletics|Athletics]] check is sufficient to shift the sarcophagus platform one "click" clockwise, until it comes to rest pointed at the next short tunnel extending from the central chamber. See the tunnel descriptions below for details on what happens when the arrow points at each tunnel.  The sarcophagus platform cannot be moved counter-clockwise.  When the PCs arrive, the arrow's tip points to the orange lantern ([[The Whispering Cairn#7. False Tomb|area 7O]]).  The sarcophagus bears a fiery arcane trap set to trigger when the lid is lifted off the stone coffin, and is completely empty.

> [!danger]+ Sarcophagus Trap
> [[gout-of-flame-hb|Gout of Flame]]
- [<] Trap (4 XP)

### The Tunnels 
The ceiling of these tunnels is 10 feet off the ground, but the alcove ceilings at the ends of he tunnels extend 40 feet, just within the shadowy radiance of a torch.  Unusually colored lanterns hang from long chains attached to the alcove ceilings dangling about 5 feet from the floor.  The indigo and red lanterns are missing.  Each lantern is worth about 12 gp.

The lanterns are an elaborate key mechanism.  When torches have been placed inside all of the lanterns, the mouth of the howling face bas-relief in area 8 opens, revealing passage to Zosiel's true tomb.  When all seven lanterns have been lit, the glass and metal chips imbedded in the dome ceiling cast eerie reflections about the room, making it difficult to concentrate within the chamber.  All attack rolls made by anyone within the room when all lanterns have been lit suffer a -2 penalty due to the distracting effect.

As noted above, two lanterns are nowhere to be seen.  The indigo lantern rests in a backpack in [[The Whispering Cairn#5. Wolf Den]], while the red lantern is submerged in area 20 of the laborers' quarters.

A DC 10 [[Seek]] check at the end of each tunnel is sufficient to turn up a 5-foot-diameter circle carved into the floor, directly below the hanging lantern (or where a hanging lantern would be in the case of the red and indigo tunnels).  The circles form the tops of arcane elevators in the case of the yellow, green, and indigo tunnels and are merely decorative in the case of all other tunnels.

**Red:** The lantern that once hung from the chain at the end of this tunnel is nowhere to be seen.  In fact it was taken by a member of Ulavant's Seeker investigation 60 years ago and still rests with the thief's corpse in area 20.

**Orange:** An orange lantern hangs at the end of this passage.  The arrow platform at the center of the room points to this tunnel when the PCs arrive.

**Yellow:** A yellow lantern hangs from the chain at the end of this tunnel.  When the arrow platform at the center of the chamber points at this tunnel read the following to the players:
> [!note]+ Read Aloud
> A great rumbling from below the chamber can be heard as the circular stone at the end of the tunnel rises eight feet into the air, pushed by by a 5-foot-diameter metal cylinder that seems to arise from the ground itself.  Seconds after it comes to a rest, tow thin doors slide into the sides of the cylinder, revealing a small empty chamber.

The cylinder is an arcane elevator that leads to the personal quarters of Nadroc, the Aetherial Warden architect who constructed Zosiel's tomb.  The cylinder fits only one Medium creature at a time (two Small creatures, four Tiny creatures, and so on).  A Large creature can cram itself into the cylinder, but can take only single actions while stuffed within the cramped space.

When a PC enters the cylinder, read:
> [!note]+ Read Aloud
> The doors immediately slam closed, and the entire contraptions lowers itself into the floor.  The stone "cap" locks into place once it goes flush with the floor, but the rest of the apparatus continues downward, finally coming to rest.  The doors slide open quietly when the elevator comes to a stop.  

After traveling down for about a round the apparatus arrives in area 9.  One round after the passenger exits the cylinder, the doors close and the contraption rises on a column of air to return to [[The Whispering Cairn#7. False Tomb]].  If the arrow platform above is moved to point to another tunnel while the cylinder is at rest in area 9, the elevator remains at the bottom of the shaft until the arrow once more points at the yellow tunnel.  A button inset into the wall near the bottom of the shaft calls the elevator down at any time.

**Green:** Several years ago, an explorer placed an everburning torch in the green lantern that hangs at the end of this tunnel, and it has remained here ever since.  Like the yellow passage, this tunnel boasts an arcane elevator that descends to another sub-dungeon, in this case the lair of the eight Aetherial Warden laborers who helped Nadroc build Zosiel's tomb.  Unlike the previous elevator, however, this one is jammed and is not likely to survive much experimentation.

When the arrow platform points at this tunnel,read:
> [!note]+ Read Aloud
> A cacophonous creaking of stone against stone emerges from the ground below the green lantern.  Anyone standing within the tunnel feels the ground rumble slightly, as if something is about to give way.

The elevator can handle only three more rounds of this stress.  On the third round of rumbling, the stone circle and the elevator apparatus beneath it completely give way, clattering to the ground of areas 15 60 feet below.  The collapse occurs on the third round in which the arrow points at the tunnel.  The three rounds need not be consecutive.  Characters standing on this area when it collapses can make a DC 12 Reflex save to scramble onto solid ground 

One round after the elevator falls, the PCs may make a [[Skills#Perception|Perception]] check to hear the skittering of thousands of insects making their way up the shaft toward them.  The DC for this check is 5 for PCs in the green lantern tunnel and 10 for PCs in the main chamber of area 7.

Two rounds later, a living geyser of silverfish bursts from the shaft.  They make for the nearest PC, eagerly attempting to devour the character and move on to the next. Along with the [[Silverfish Swarm|swarms of silverfish]] emerges a [[Giant Silverfish]].  The silverfish swarms naturally seem to avoid the [[Giant Silverfish]].

The 60-foot shaft leading to area 15 is pitted and scarred, which makes climbing down relatively easy (DC 10 [[Skills#Acrobatics|Acrobatics]] check).

**Encounter Difficulty:**   
- [<] Moderate (70 XP) Level 1

At the start of the encounter, place the following foes on the map: 
 - 1: [[Giant Silverfish]] W
 - 2: [[Silverfish Swarm]] H

```encounter
name: The Whispering Cairn - Insects in the False Tomb
party: Age of Worms
creatures:
  - 1: Giant Silverfish
  - 2: Silverfish Swarm
```

**Blue:** The ceiling over the blue lantern is 50 feet high, unlike the other lantern shafts, which top out at 40 feet.  Anyone standing at the bottom of the shaft can make a DC 15 [[seek]] action to notice that the shaft ceiling is not visible in the radius of normal torchlight, unlike the ceilings of the other lantern alcoves.

A the top of the shaft, another passage leads to the northeast (area 8). To reach this passage, the PCs must devise a way to climb 40 feet.  The easiest way up is to climb the thick chain (DC15 [[Skills#Athletics|Athletics]] Check).

A skeleton lies in a heap on the floor here.  A DC 15 [[Skills#Medicine|Medicine]] check reveals several crushed bones, as if the unlucky fellow died from a great fall.

**Indigo:** The chain at the end of this passage ends in a simple hook, as the indigo lantern was stolen years ago and eventually ended up in a backpack in [[The Whispering Cairn#5. Wolf Den]].  If the arrow platform points at this tunnel, a metal arcane elevator identical in appearance to the described in the yellow passage above rises from the floor under the dangling chain.  Characters inspecting the apparatus notice numerous crushed bones and moldy clothes upon the floor of the cylinder, an obvious clue that all is not as it should be with this arcane elevator.  Two rounds after a character stands within the cylinder the doors close and the contraption utterly crushes everything within it, sinking back into the ground until the arrow structure once more points at the indigo corridor.

> [!danger]+ Trap
> [[false-elevator-hb|False Elevator]]
- [<] Trap (4 XP)

> [!tip]+ Treasure
> A careful [[Seek]] action through the crushed bones and moldy clothes DC 10 turns up a pouch containing 10 gp, 4 sp and a small ruby worth 12 gp.
> 
> - [<] gp::22
> - [<] sp::4

**Violet:** A violet lantern hangs at the end of this passage.

### Ghosts in the Machine
Once each week, the minor wind spirits inhabiting the Whispering Cairn follow Nadroc's ancient instructions to reset certain elements of the tomb's design.  At this time, the sarcophagus in area 7 rotates counter-clockwise to once again point at the orange passage.  The elevators in areas 7Y and 7I rice and open, testing their lifting mechanism and the doors in a routine that lasts a full minute.  The elevator in area 7G heaves and shudders at this time, but does not rise.  The stress is enough to collapse the elevator, as outlined above.  Theoretically, if the party has not yet explored the Lair of the Laborers before the passage of three weeks, this collapse might open a new part of the dungeon for the PCs.

The spirits also reset the [[gout-of-flame-hb|Gout of Flame]] trap on the sarcophagus.  Once every year an powerful ancient sorcery replaces any of the colored lanterns that have been taken from the cairn, creating exact duplicates that hang from the correct chains.  Unfortunately, the poorly worded original incantation ensures replacements only for lanterns that have been taken from the cairn, meaning those lanterns that were taken from area 7 but that remain elsewhere in the cairn are not replaced.

If the party is completely flummoxed by this room, a fortuitously timed "refresh" of area 7 offers a blunt way to get the action moving again.

## 8. Passage of the Face
> [!caption|right ws-med] Floats to the right
> ![[Passage of the Face.webp]]
> [[Passage of the Face.webp|Show to Players]]

> [!note]+ Read Aloud
> A thin passage extends into shadows to the northeast.  Perhaps seventy feet away, the passage ends in what looks like an enormous stone human face, its mouth open in an angry scream.

The physiology of the face is identical to that of the near-human sexless figure depicted in bas-relif upon the sarcophagus in the room below.  The screaming visage dominates the entire 20 foot by 20 foot wall at the end of the corridor.  Anyone walking down the hall may take a DC 15 [[seek]] action.  If successful, read:

> [!note]+ Read Aloud
> You notice several long scratch marks in the floor, as if something had been dragged toward the lip leading 40 feet down to [[The Whispering Cairn#7. False Tomb]].  

These marks were left by victims blown away by the blasting winds of the trap, leftovers of futile attempts to slow their trajectory by jamming a dagger into the floor.

## Notes

> [!danger]+ Trap
> A pressure plate 60 feet down the passage triggers if more than 60 lbs. are placed upon it.  When this happens, the face animates, and a terrible wind erupts from its wailing mouth.  At the same time, the face's eyes spin with hypnotic illusory patterns in all of the colors of the rainbow that correspond with unlit lanterns in the chamber below.  Anyone within the face's gaze must make a DC 13 Will save or become paralyzed, frozen in place and unable to move.  Each round on its turn, the subject can attempt another saving throw to snap out of it.
> 
> The terrible wind is another major concern of anyone unlucky enough to be in the passage when the trap is sprung.  On the first round, the mouth blasts a strong wind, with the intensity ratcheting up one category every round, going from strong to severe to windstorm to hurricane.  Each round, creatures within the wind must make a scaling Fortitude save starting at DC 18 or be subject to the winds effects.  Small characters are potentially blown away as early as round 2, whereas Medium creatures face that risk on round 3.
> 
> Blown away characters are knocked prone and tumble `dice: 1d4*10`  1d4x10 fee, taking `dice: 1d4` 1d4 points of nonlethal damage per 10 feet.  Flying characters are blown back `dice: 2d6*10` 2d6x10 feet and take `dice: 2d6` 2d6 points of nonlethal damage due to battering and buffeting.  Non-flying characters pushed over the edge of the shaft plummet to the floor below suffering `dice: 4d6` 4d6 points of damage upon impact.  Such characters may attempt to snatch the indigo lantern's chain with a successful DC 10 [[Skills#Acrobatics]] check or a DC 15 Reflex save, with success preventing the fall and the damage.
> 
> The wind continues at hurricane force for 10 minutes before it stops and the trap resets itself.  The only way through the face is to ignite torches in [[The Whispering Cairn#7. False Tomb]].  Once a torch has been lit, that color fails to appear in the face's hypnotic eyes.  When all torches have been lit, the trap is effectively disarmed.  The stone comprising the mouth's interior vanishes, allowing passage to the chamber beyond.
- [<] Trap (40 XP)

# Lair of the Architect
It took the Aetherial Warden architect Nadroc nearly a year of solid work to design and construct the Whispering Cairn.  During this period he dwelt within his work in progress, in a special series of chambers called the Lair of the Architect.  Due to the complexity of the elevator mechanism, this part of the cairn is not quite as looted as areas 1 - 7, and contains a number of treasures from Nadroc's time.  Ceilings in the Lair of the Architect reach a uniform height of 20 feet. Walls are made of solid stone.

```leaflet
id: Lair of the Architect
image: [[Lair of the Architect Map.webp]]
height: 700px
width: 40%
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

## 9. Architect's Foyer
> [!note]+ Read Aloud
> The walls here are covered in bas-relief images similar to the slender figure upon the sarcophagus lid in the chamber above.  Nearly a dozen androgynous, hairless humanoids stand in poses of deference, almost as if they are paying homage to the viewer.  Many extend their hands in adoration, their faces awash in adulation.  Several of the statues lack hands, arms, heads, or anything else easily hacked off by long absent tomb robbers.
> 
> About fifteen feet to the south, a dark passage extends from an elaborately carved arch.  Only a little of this hallway is visible, however, as a large stone block obscures most of the passage.

The stone block is roughly 10 feet wide by 2 feet deep by 8 feet tall, and nearly seals off the passage to the south.  A large niche about the same size as the block opens in the ceiling 10 feet above.  A fine layer of dust covers everything in the room.  A character crawling upon the top of the block gains a decent view of the darkened hallway beyond, and is able to make out a handful of alcoves marking the walls of the tunnel at regular intervals.  Squeezing between the tip of the arch and the top of the stone slab requires a DC 25 [[skill#acrobatics|Acrobatics]] check.

A button inset into the wall near the elevator shaft serves as a call button for the elevator.  Pressing it recalls the elevator to this area.

> [!danger]+ Trap
> The stone slab is far too heavy to lift, but up to four characters working together can topple it to the north with a successful DC 25 [[Skills#Athletics|Athletics]] check.  The slab rests upon a pressure plate set to trigger when the weight of the slab is removed.
> 
> A noxious green gas fills the room from valves hidden within the mouths of the adoring bas-reliefs lining the room's walls.
> 
> [[trap]]
- [<] Trap (8 XP)

## 10. Passage of Honor
> [!note]+ Read Aloud
> Curious carvings that seem to represent a stirring tempest cover the walls of this ten-foot-wide passage. At ten-foot intervals, small alcoves flank the passage, and each alcove contains an androgynous humanoid figure with cupped hands.  The figures stand roughly seven feet tall.  A faint wind seems to play within the passage, but it's difficult to tell where it's coming from.

Each statue bears the likeness of one of Nadroc's noble Aetherial Warden patrons.  Their cupped hands once cradled miniature statuettes of magnificent vaati buildings constructed by the architect in their names.  The figurines rested upon a soft current of air immediately above the statues' cupped hands.  These currents still exist, and will hold any Tiny or smaller object aloft indefinitely.  They are the source of the strange breeze in the hallway.  The statuettes now rest in the pouch of an ancient tomb robber who lies dead in area 11.

**Encounter Difficulty:**   
- [<] Severe (120 XP) Level 1

At the start of the encounter, place the following foes on the map: 
 - 2: [[lurking-Strangler|Lurking Strangler]] W

```encounter
name: The Whispering Cairn - Passage of Honor
party:  Age of Worms
creatures:
  - 2: [Lurking Strangler]
```

A pair of gruesome aberrations known as a lurking strangler stalk within the shadows of one of the display alcoves. The stranglers entered the Whispering Cairn a week ago at the behest of their master, a wizard called the Faceless One who infiltrated Diamond Lake about a month ago.  This enigmatic figure ordered the creatures to explore the ancient tombs around the town, and it soon thereafter become trapped in the Architect's Lair after riding the elevator there during a routine test.

The lurking strangler is a 3-foot-long strand of striated muscle connected to two floating eyeblls. It stretches and twists as it floats through the air.

### Tactics
The lurking stranglers attempt to hide in the darkness until they can attack a character with a surprise sleep eye ray.

## 11. Gallery
> [!note]+ Read Aloud
> A dull gray stone pillar reaches from floor to ceiling in this large chamber.  Halls extend to the east and west.

The west wall of this room's gray central pillar holds a deep recession that ends at what looks like a fountain basin about 4 feet off the ground. This is the nutrient still, a magical apparatus capable of churning forth a nutritive orange sludge that looks a bit like vomit and tastes a bit like gravy.  One serving is sufficient to sustain a character for a full day.  Fifteen servings can be harvested from the basin when it is full (as it is now). Servings are replaced at a rate of one per day.

The area around the nutrient still is infested with [[brown-mold-gmg|Brown Mold]]. The extent of the mold infestation is displayed on the map.

The central pillar's east face bears a similar niche that extends from floor to ceiling.  IN ancient times, Nadroc hung his architect's tools on pegs in this alcove.  An unfortunate tomb robber later attempted to steal these tools, bringing a massive stone column down on his head.  A DC 15 [[seek]] check along the short wall north of the column reveals a hidden catch.  Triggering the catch hoists the column back into the ceiling, revealing a crushed human skeleton holding a shiny silver shortsword.  Most of Nadroc's tools were destroyed when the stone column fell, but one remains unharmed on its peg where the architect left it thousands of years ago.  Once the column has returned to the ceiling the trap is forever useless, as the trigger was destroyed when the column fell.

A dry fountain along the south face of the central pillar features a low basin and a snall spigot about 8 feet high, looking something like a shower.  The enslaved water elemental that once powered this apparatus died centuries ago.

> [!tip]+ Treasure
> The corpse in the tool closet holds a [[Weapon Potency (+1)|+1 Shortsword]], but almost all of his other possessions were crushed along with his bones.  In a leather sack so old that it crumbles to the touch can be found the remains of three broken statuettes of Nadroc's previous commissions (looted from [[#10. Passage of Honor]]) and three that remain in excellent condition - a grand palace, a slim spire with eight connected smaller towers of different heights, and what looks like a grand stadium.  Each intact statuette is worth 20 gp.  
> 
> - [<] gp::20
> - [<] permanent::[[Weapon Potency (+1)|+1 Shortsword]] [ilvl::2] [gp::35]

## 12. Living Quarters
> [!note]+ Read Aloud
> This wide chamber must once have been the living quarters of an important figure.  A large stone slab that suggests the shape of a bed rests against the east wall, under a huge bas-relief of a robust, long-nosed bald humanoid figure with outstretched hands.  The figure wears a lovingly sculpted wind-tossed robe that gives him the appearance of a triumphant god.  A glyph that looks like a stylized arrow marks an amulet worn around the figure's neck.  Wardrobes and dressers seemingly carved form the stone walls look to have been ransacked a long time ago.

This room was emptied of valuable centuries ago.  A thin bed of whirling air rests atop the stone slab against the east wall.  The wind is strong enough to suspend a medium character above the stone comfortably, making it an excellent bed. Anyone sharing a space with the bed must make a DC 18 Will save to avoid becoming [[Fatigued]]. This effect ends when the PC is no longer in the bed's space.  The glyph on the amulet is Nadroc's personal symbol, and is reproduced as the compass rose of the map of this dungeon level.

## 13. Workshop
> [!note]+ Read Aloud
> The ceiling of this large chamber glows with what looks like natural sunlight, illuminating a series of worktables, vises, spinning wheels, and blocks of unfinished marble that identify the room as a sculptor's workshop.  A huge unfinished statue of an imposing bare-chested warrior wielding a staff-like rod in its left hand dominates the north wall.  This hairless figure looks similar to the bas-relief on the sarcophagus upstairs, but is clearly meant to be a different person.  A short red metal pedestal against the south wall displays what appears to be a jet-black stone egg the size of a small boulder.  A gold glyph-an equilateral triangle with short hash marks though each leg-marks the face of the egg.

The statue is meant to represent the great Aetherial Warden who used the *Rod of Law* to defeat the Primordial Lord of Chaos.  The "rod" in the statue's hand is a petrified wood staff that Nadroc planned to replace later with a more ornate decoration.  Anyone examining the staff notices that six grooves have been cut along its shaft, suggesting seven segments.

The workshop has been completely looted, and all that remains are bits of furniture and parts of more elaborate sculpting tools.  The daylight coming from the ceiling is a permanent magical effect.

A successful DC 15 [[Skills#arcana|Arcana]] check identifies the gold symbol upon the ebon egg as the personal device of Ogremoch, a legendary elemental prince of evil.  A DC 20 result notes that Ogremoch and a legion of lesser earth elementals were said to have served on the side of the Primordial Lord of Chaos at the great final battle at Aetherion that ended a primordial war between Law and Chaos.

The egg is the dormant form of a hibernating small earth elemental who served at Ogremoch's side at the battle of Aetherion and who was later captured by the victorious Wardens and forced into a life of magical servitude.  The elemental, an evil lout called Artophanx, is forever bound to this chamber, compelled by ancient incantations to assist the Warden Nadroc, who constantly grilled him about the properties of indigenous rock or the likely efficacy of this or that masonic flourish.  The Lair of the Architect has been empty for thousands of years, so Artophanx went into hibernation centuries ago, and snaps out of his torpor only if touched. IF this happens, the elemental immediately takes on an anthropomorphic form and barks a challenge in Terran, the grating gravelly language of elemental earth.  IF the PCs do not respond, Artophanx attacks.

Artophanx wants more then anything else to escape, and might be fooled into cooperating with the party if successfully bluffed by a Terran-speaking character.  If convinced that the PCs might be able to help him escape the room (something actually well beyond their power) he can relate some useful facts about the Whispering Cairn's construction, including the fact that it was built by a Warden named Nadroc to honor a warrior named Zosiel who died no the fields of Aetherion and the fact that Zosiel's true tomb lies beyond the face in [[#8. Passage of the Face]].

**Encounter Difficulty:**   
- [<] Moderate (80 XP) Level 1

At the start of the encounter, place the following foes on the map: 
 - 1: [[3-Rules/Bestiaries/Monster Core/S/Sod Hound|Sod Hound]] W

```encounter
name: The Whispering Cairn - Workshop
party: Age of Worms
creatures:
  - 1: [Sod Hound]
```

> [!tip]+ Treasure
> The red metal pedestal is of a material totally unknown elsewhere on this world, and is worth 50 gp.  It weighs 200 lbs.  The wooden pole held by the statue doubles as a staff.
> 
> - [ ] gp::50

## 14. Toilet
This austere toilet has not been used in centuries.

# Lair of the Laborers
Nadroc's creation of the Whispering Cairn required the assistance of eight skilled Warden laborers who dwelt in this sub-level.  They were several layer below Nadroc socially so the stonework and amenities of this level are markedly inferior to similar accoutrements in the Lair of the architect.  The ceilings on this level uniformly reach a height of 20 feet. Walls are worked stone.


```leaflet
id: Lair of the Laborers
image: [[Lair of the Laborers Map.webp]]
height: 700px
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

## 15. Laborer's Foyer
> [!note]+ Read Aloud
> Dozens of bas-relief figures similar to the one on the sarcophagus lid in the room above stare disapprovingly from the walls here.  Many sport crossed arms and stern expressions.  A few of the statues' heads are missing, and some have huge chucks torn out of them.  Others have a weird melted appearance, as if they'd been sprayed by something terrible.  A large glyph that looks like a stylized arrow points down a short corridor to the north that leads to a four-way intersection.

The damage to this room comes form the acid beetles in habiting [[#16. Food Room/The Hive]]. The alcove in the south wall conforms to the shaft leading to [[#7. False Tomb]] above.  The shaft starts 20 feet above the floor of this area and is pitted with acid-burned handholds ([[Skills#CLIMB `PF2 1`|Climb]] DC 12). The glyph-Nadroc's personal sign-is identical to the one found on the amulet in [[#12. Living Quarters]].

## 16. Food Room/The Hive

> [!note]+ Read Aloud
> The north and south walls of this large chamber taper in somewhat, and in the nook of the far eastern wall rests a wide stone basin backed by a five-foot-tall shelf.  A hardened orange paste spills out over the two-foot basin lip and covers much of the shelf.  Thousands of tiny beetles with bright blue carapaces skitter and tunnel through the chalky substance.  A keening insect chorus fills the room.  A huge organic mass completely fills the room's southwest corner.  Judging by the beetles spilling form within, it appears to be an enormous nest.

In ancient times, Nadroc's laborers sustained themselves on the nutritious substance generated by this fountain.  The orange substance is still edible, but those who eat it must make a DC 14 Fortitude save to resist becoming sickened for 1 hour due to the ubiquitous beetle waste.

The nest in the southwest corner has the consistency of papier-mâché, and can be cut through easily.  If burned, it produces an acrid black smoke that grants [[3-Rules/Effects/Conditions/Concealed|Concealment]] to every creature in the room for 6 rounds or until the smoke is blown away.

**Encounter Difficulty:**   
- [<] Moderate (100 XP) Level 1

At the start of the encounter, place the following foes on the map: 
 - 1: [[Giant Bombardier Beetle]] W
 - 1: [[Amoeba Swarm|Acid Beetle Swarm]] H

```encounter
name: The Whispering Cairn - Food Room
party: Age of Worms
creatures:
  - 1: [[Giant Bombardier Beetle]]
  - 1: [[Amoeba Swarm, Acid Beetle Swarm]]
```

This room serves as the central breeding ground of a colony of aggressive beetles who feed upon the edible orange sludge that fills the  basin.  

### Tactics
When the PCs enter the room, the vermin skittering about the sludge coalesces into the form of an acid beetle swarm, and a medium giant bombardier beetle, the cow of the colony, moves to attack, opening with a deadly spray of acid.  The insects fight to the death.

> [!tip]+ Treasure
> A DC 10 [[Seek]] check reveals the presence of three oblong lumps completely covered with orange sludge in the room's southeast corner.  These are the skeletonized remains of three long-dead human figures in soiled red leather armor. An eight-pointed star symbol markes the left breast of each moldy suit of armor, a symbol that marks the dead as followers of [[Kataklysmos]], which met a grim end in the Lair of the Laborers some 60 years ago.  One of the dead guards has three [[Healing Potion (Minor)]] and another wears some half-plate armor.
> 
> A DC 15 [[Seek]] check in the ruined remains fo the nest turns up a mummified human hand still holding a [[3-Rules/Character Building/Equipment/W/Wayfinder|Wayfinder]]
> 
> - [<] permanent::[[Leather Lamellar|Leather Lamellar]] [ilvl::1] [gp::18]
> - [<] permanent::[[3-Rules/Character Building/Equipment/W/Wayfinder|Wayfinder]] [ilvl::2] [gp::28]
> - [<] consumable::[[Healing Potion (Minor)|Healing Potion (Minor)]] [ilvl::1] [gp::4]
> - [<] consumable::[[Healing Potion (Minor)|Healing Potion (Minor)]] [ilvl::1] [gp::4]
> - [<] consumable::[[Healing Potion (Minor)|Healing Potion (Minor)]] [ilvl::1] [gp::4]

## 17. Sleeping Quarters
> [!note]+ Read Aloud
> Eight man-sized stone slabs, about four feet off the ground, are arranged in two rows in this large room.  A long-dead corpse, possibly a human, lays sprawled out upon one of these slaps, his read leather armor the only hint of color in the otherwise drab room.  The north and south walls taper in somewhat, and the short west wall abuts a small stone stage.  The red clay statue of a powerfully built warrior wielding a cylinder-headed greatclub stands tall upon the stage, its eyes surveying the room.

Each round characters within this room must make a DC 15 Will save to resist becoming [[Fatigued]].  The fatigue ends when the PC leaves the room.  The stone slabs once served as beds for Nadroc's Warden laborers.  The skull of the human male corpse on the southwest slab has been utterly crushed by the stone greatclub of the statue upon the western stage, a marble representation of the Guardian of the Veil, a mythical Warden figure who stands sentry between the lands of sleep and wakefulness.  The statue itself is not attached to the floor, and may be tipped over with a DC 20 [[Skills#Athletics|Athletics]] check.  It weighs 800 lbs.

**Encounter Difficulty:**   
- [<] Moderate (120 XP) Level 1

At the start of the encounter, place the following foes on the map: 
 - 2: [[Giant Bombardier Beetle]] W
 
```encounter
name: The Whispering Cairn - Sleeping Quarters
party: Age of Worms
creatures:
  - 2: [[Giant Bombardier Beetle]]
```

When the PCs first arrive, a pair of giant bombardier beetle stags stumble about between the sleeping slabs.  

### Tactics
The fatigued beetles do not respond to the sounds of conflict in area [[#16. Food Room/The Hive]], preferring instead to enjoy a rare moment of rest. They attack any non-beetle creature they sees, leading off with a spray of acid.

## Features of the Area
**Stone Slabs:** If any non-Warden falls asleep on one of the stone slabs, the terracotta statue on the stage in the western alcove animates and attempts to smash the sleeper with its club (treat as a slam attack, as the club is merely part of the statue).

**The Guardian of the Veil:** The guardian has 31 hit points and a hardness of 2. Its slam attack is +7 `dice: 1d20 +7` and does `dice: 1d8` 1d8 damage on a successful hit.
- [<] Low (10 XP) Level 1

> [!tip]+ Treasure
> The corpse on the southwest slab wears a suit of [[Leather Lamellar]] emblazoned wit the eight-pointed symbol of [[Kataklysmos]] and has a pouch containing 7 gp.
> 
> - [<] gp::7

## 18. Tool Alcoves
Numerous pegs extending form the walls of these alcoves once held the excavation gear of the Warden laborers, but anything of worth was looted long ago.

## 19. Submerged Showers
IN ancient days, the laborers cleaned themselves and disposed of their waste in the lower level of their lair.  An enslaved water elemental commanded an elaborate set of showers and saw to the sanitary needs of the workers.  Centuries of isolation have driven this creature insane, and now the lower chambers and completely submerged in water.  Numerous drains near the shower pillars are wholly clogged with debris deposited by the elemental, leaving no way for the PCs to drain the area. The PCs first encounter the water about halfway down the stairs leading to this area.

All of the submerged rooms are completely dark.  PCs without darkvision must rely on some artificial means of light, such as the light spell or the everburning torch from [[#7. False Tomb]].

The four pillars and central structure of this room are composed of tan stone and contain non-functional shower spigots about 8 feet off the ground.

**Encounter Difficulty:**   
- [<] Moderate (60 XP) Level 2

At the start of the encounter, place the following foes on the map: 
 - 2: [[Water Mephit]] W

```encounter
name: The Whispering Cairn - Submerged Showers
party: Age of Worms
creatures:
  - 2: [[Water Mephit]]
```

The insane water mephits still dwell here, spending much of its their spinning in a tight vortex in area 20.

### Tactics
It notices the PCs the second one of them touches the water, and swiftly moves to intercept them.  The elemental will try to attack any torch bearing character first. It has darkvision to 60 feet and would prefer to fight without a light.  IT waits until the torchbearer is in the middle of the area before attempting to quench the torch.

## 20. Locker Room with Benches
> [!note]+ Read Aloud
> This small room contains for long benches and several niches along the walls.

> [!tip]+ Treasure
> A dead human body here bears the red lantern from [[#7. False Tomb]].  It wears red leather armor with the eight-pointed star of [[Kataklysmos]] over the left breast and a [[Rhythm Bone]] and a spell scroll of [[Detect Metal]].  The corpse's bones are very badly gnawed, and it's armor has been torn apart and ruined as if by sharp claws.  A DC 10 [[Skills#Medicine|Medicine]] check reveals that the bones have been cracked open as if something was trying to get a the marrow within.  The body has ben dead for 50 years or more.
> 
> - [<] permanent::[[Rhythm Bone|Rhythm Bone]] [ilvl::1] [gp::8]
> - [<] consumable::[[Detect Metal|Spell Scroll (1st level) Detect Metal]] [ilvl::1] [gp::4]

## 21. Other Locker Room with Benches
> [!note]+ Read Aloud
> This small room contains four long benches and several niches along the walls.

**Encounter Difficulty:**   
- [<] Moderate (100 XP) Level 2

At the start of the encounter, place the following foes on the map: 
 - 2: [[Ghoul Stalker]] W
 - 1: [[Ghoul Soldier]] H

```encounter
name: The Whispering Cairn - Other Locker Room
party: Age of Worms
creatures:
  - 2: [[Ghoul Stalker]]
  - 1: [[Ghoul Soldier, Ulavant]]
```

This chamber is home to the scholar Ulavant, who became a ghoul after his death at the hands of the water elemental prevented him from accomplishing his goal of cataloguing the Whispering Cairn's secrets for [[Kataklysmos]]. Ulavant wears a gold ring with the eight-pointed star insignia on the third finger of his left hand.

### Tactics
Ulavant attempts to paralyze his enemies, starting with what he assumes to be bards, wizards an sorcerers.  Though his mind is not utterly consumed with the need to consume, Ulavant maintains some measure of his brilliance.  He also retains a good measure of his original depravity.  Should he paralyze all of his victims, he moves the frozen bodies so that they can look into each others eyes before gorging on one of the victims, starting with the throat.  This theatrical flourish might just give one of the paralyzed PCs the chance he needs to shake free from the paralysis.

> [!tip]+ Treasure
> A pile of tattered clothes stuffed into one of the lockers hides a pouch containing 3 gp and 5 sp.  Ulavant's ring is worth 20 gp to the right buyer.  It instantly identifies the wearer as a member of [[Kataklysmos]] faithful, which may have implications with Khellek, the wizard in the trio of rival adventurers.
> 
> - [<] gp::23
> - [<] sp::5

## 22. Toilet
This submerged toilet has not been used in centuries.

# Part 2: The True Tomb

```leaflet
id: The True Tomb
image: [[The True Tomb Map.webp]]
height: 700px
width: 75%
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

Areas 23-25 represent Zosiel's true tomb.  Very few explorers have penetrated as far as area 23 in the last several thousand years, and no living interloper has managed to negotiate the metal door at the end of that passage to gain the fabulous Chamber of Sighs. When the tomb was constructed, the door was meant to be opened only by the elemental thralls in area 24 at the behest of a Warden who spoke the correct long-forgotten phrase into the door.  An elemental would then press a catch on the wall opposite area 23, and the metal door would slide open gingerly.  Now, the only way through is to make a deal with the ghost of Alastor Land, a runaway who died exploring the Whispering Cairn nearly 30 years ago and who haunts the place still.

## 23. Alastor's Haunt
> [!note]+ Read Aloud
> Through the gaping mouth at the end of the hallway is a long, dark room with no floor. A three-foot-wide beam of petrified wood spans the cham, leading straight ahead into darkness. Amount ten feet below the beam, countless iron spheres the size of large oranges form an irregular floor, but it's impossible to tell if they represent a wholly solid surface. The northwest and southeast walls are covered in a honeycomb of geometric patterns. The featureless stone ceiling extends about twenty feet from the beam.

This room represents Nadroc's last attempt to dispense with unwanted tomb robbers, so the beam and walls combine to make a devious trap.  Note the side view of this room provided in the map of the True Tomb.

> [!danger]+ Trap
> [[hail-of-iron-spheres-hb|Hail of Iron Spheres]]
- [<] Moderate (8 XP) Level 2

**Encounter Difficulty:**   
- [<] Trivial (60 XP) Level 2

At the start of the encounter, place the following foes on the map: 
 - 1: [[3-Rules/Bestiaries/Adventure Paths/Agents of Edgewatch/G/Grick|Grick]] W

```encounter
name: Alastor's Haunt
party: Age of Worms
creatures:
  - 1: [[Grick]]
```

A curious grick lives in the iron spheres at the bottom of this room, having tunneled here through some subterranean fissure opened during an ancient earthquake.  Each round, PCs standing upon the spheres may make a DC 15 [[Skills#Perception|Perception]] check to hear the grick moving under the iron spheres. If it hears the PCs, it rushes up to attack from surprise.

The grick is farm from the most potent potential enemy in this room, however, for the place is also the lair of Alastor Land, a young teen runaway who managed to slip through all of the Whispering Cairn's defenses 30 years ago only to die here. Now he lingers on as a ghost, cursed to forever remain in this chamber, wracked with guilt for having abandoned his mother and siblings.  As the PCs explore the room, Alastor observes from the Ethereal Plane. His childish giggles follow every PC mistake, while cries of "wow!" or "I thought you were dead that time!" seem to come from the walls as the PCs fight the grick.  Once they have defeated the aberration, Alastor decides that they are his best chance to escape the chamber and finally rest with his family.

> [!caption|right ws-med] Floats to the right
> ![[Alastor Land.webp]]
> [[Alastor Land.webp|Show to Players]]

Immediately after the fight ends, Alastor manifests, appearing as a translucent 13-year-old farm boy with a broken neck, long black fingernails, and a demoniac glare in his eyes.  He attempts to shield most of the PCs from his horrific appearance, but the youth has a flair for the dramatic and wants to make a powerful first impression, so he wants at least one of them to see him in his true from.  Thereafter, he attempts to move onto the same square as a PC and take over that character with his malevolence special attack. ONce he has controlled a PC (or if he cannot manage to do so), he speaks directly to the PCs.

> [!note]+ Read Aloud
> I have been here countless decades, punished for abandoning my family in a time of need.  Over these years, I have seen explorers like you come and go. The trap in the walls kills most of them, but others have left in humiliation, unable to pass through the far metal door. I am unable to leave the way you came because of my curse, but I am able to push through the far wall. Beyond is a glorious chamber of strange carvings and a pillar of air.  And there's a catch on the other side of the door that opens it without a problem.  I'll trigger it for you if you take my bones from here and bury them with my family on a farmstead just beyond Diamond Lake.  Do this for me, and I will be free.  I assure you there is no other way through that door.

Alastor left home 30 years ago. It's been at least a decade since the last adventurers came to this chamber.  They fell victim to the iron sphere trap, and their corpses are buried beneath the upper layer of iron balls forming the room's floor.  He an direct the PC's to his own skeleton, which lies about three feet below the surface just below the metal door.

**Encounter Difficulty:**   
- [ ] Low (60 XP) Level 2

Should the PCs attack Alastor, place him on the map: 
 - : [[3-Rules/Bestiaries/Monster Core/G/Ghost Commoner|Ghost Commoner]] W

```encounter
name: Alastor Land
party: Age of Worms
creatures:
  - 1: [[Ghost Commoner]]
```

If the PCs insist on fighting Alastor, he attempts to kill one of them to prove that he is a worthy opponent, thereafter pleading with them to take his bones back to his family plot.  His directions suggest a farmstead 10 minutes east of Diamond Lake. 

When Alastor Land's bones have been interred next to those of his family, the ghost immediately knows he is free from his curse and begins to fade from reality.  Before he does so, however, he passes through the northeast wall into area 24 and triggers the catch there.  The metal door slides open.

When the PCs return Alastor Land's bones to his family plot at the Land farmstead, award them experience as if they had defeated him in combat.

> [!tip]+ Treasure
> The following goods may be harvested from decomposed bodies buried within the iron spheres.
> 
> - [<] gp::4
> - [<] sp::7
> - [<] permanent::[[Weapon Potency (+1)|+1 Long Sword]] [ilvl::2] [gp::35]
> - [<] permanent::[[Half Plate|Half Plate]] [ilvl::1] [gp::18]

## 24. The Chamber of Sighs
> [!note]+ Read Aloud
> This cavernous chamber consists of a large stone walkway around a deep chasm that leads into darkness.  Four platforms lead from the walkway to a central ring, but two of these platforms are broken.  Bright light reminiscent of a summer's day filters down from the ceiling about forty feet above.  Four wide galleries extend from the outer walkway, their far walls covered with enormous bas-relief vistas.  A sighing wind emits from a huge pillar of rushing air at the center of the chamber.  The column extends from the floor to the ceiling, cutting through the room's central ring.

The central pit is 60 feet deep, ending in a featureless basin.  Each perimeter gallery bas-relief portrays a scene from the life of the Warden Zosiel.  The sculpting on the walls appears very crude from a distance.  Figures are blurred and distorted, and it's impossible to tell what the images are meant to represent.  When a character approaches within 10 feet of one of the bas-reliefs, however, valves breathe forth a smoky sheet of steam that covers the entire wall.  As the steam eddies and plays about the rough carvings, distance impressionistic images become apparent on the walls.  The images shift and move, making them come alive with action.

As soon as a PC reaches the walkway or central ring, two tall humanoid figures arise from within the column of air and step out onto the central ring.  Both of these creatures-wind warriors-who served in the armies at the Battle of Aetherion and who honor Zosiel still wield twin swords and wear ancient ceremonial armor festooned with red pennons that twist and bob as if always blown by a fierce wind.  The silent warriors attack intruders, knowing that they are the tomb's last defense.

**Encounter Difficulty:**   
- [<] Moderate (120 XP) Level 3

At the start of the encounter, place the following foes on the map: 
 - 2: [[wind-warrior|Wind Warrior]] W

```encounter
name: Chamber of Sighs
party: Age of Worms
creatures:
  - 2: [[Wind Warrior]]
```

**24a**
> [!note]+ Read Aloud
> This image depicts a peaceful scene featuring several wardens relaxing in an idyllic country scene.  Dozens of perfect circles fill the sky above the frolicking figures.  As the steam runs over the image, dark, twisted shapes emerge from the sculpture's edges.  The shapes coalesce to form monstrous creatures that look like a cross between a spider and a wolf.  As the creatures approach the Wardens the circles in the sky begin to burst one by one.

This even represents the world prior to the war against the primal lord of chaos.  The circles in the sky represent cities protected by the [[The Aetherial Wardens|Wardens]].  Their destruction symbolizes the magnitude of the chaotic threat.

**24b**
> [!note]+ Read Aloud
> This image depicts a towering Warden figure wearing the glyph of Icosiol standing over a legion of lesser Aetherial Warden warriors.  The central warrior bears the glyph of Zosiel, but each figure bears a glyph of a distinct Warden warrior named in the *Chronicle of Chan* (see Campaign Seed: Aetherial Warden Glyphs above). As the steam plays about the image, the warriors raise longswords in salute to Icosiol.

**24c**
> [!note]+ Read Aloud
> A group of seven proud noble Wardens present a staff-like rod to a council of superior Wardens in this gallery image.  As the steam fills the bas-relief's contours the central figure raises the staff above his head, where it splits into several irregular parts.

Each of the seven Wardens presenters bears a carven glyph that identifies him as a member of the "Wandering Wardens" who abandoned the war against Chaos to discover the secrets of the Rad of Law.  The *Chronicle of Chan* identifies these beings as Amophar, Darbos, Emoniel, Icosiol, Penader, Qadeej and Uriel.

**24d**
> [!note]+ Read Aloud
> The bas-relief in this gallery depicts the final battle between Law and Chaos.  As the steam moves about the image, the Wandering Warden Qadeej impales the Primordial Chaos Lord.  As the Chaos Lord, Rod and Qadeej vanish into a planar rift, Icosiol is struck by a beam from the Chaos Lords eyes and slumps dead to the ground.

**24e**
The pillar of air here stretches from floor to ceiling.  Any character who steps into the wind is propelled safely to area 25. Doing so means getting past the rooms power defenders, however.

## 25. The True Tomb
> [!note]+ Read Aloud
> A whooshing pillar of air dominates the northeast half of this rectangular room.  Opposite the pillar up a set of three short stairs rests a white marble sarcophagus identical to the one in the room with the colored lanterns far below, complete with a sculpted humanoid figure carved into the lid. A beautifully carved bas-relief on the same wall near the sarcophagus depicts the same figure as a bald, androgynous warrior wearing a simple ancient garment and wielding a mighty longsword.  To the warrior's left stands a cloaked demoniac figure with two long curved horns tipped in darkest red.  The horned figure holds a device composed of a handle and small loop, seemingly using it to control a globe of absolute blackness about two feet in diameter.  This globe touches the bald warrior, who raises his arms in surprise.  The warrior is depicted as if fading from sight.  A slim diadem upon his brow bears an elaborate ovular glyph identical to one carved upon an amulet worn by the figure on the sarcophagus lid.

This area is the true tomb of Zosiel, a minor Warden warrior killed at the Battle of Aetherion.  A DC 15 [[Skills#Arcana|Arcana]] check made by anyone studying the fresco identifies the black globe as a [[Sphere of Annihilation]] controlled by the [[Talisman of the Sphere]] wielded by the horned figure.  Many legends suggest that the deadly spheres were created during the great war between Law and Chaos.  now they are the stuff of legends.  The image is an accurate representation of Zosiel's death, just moments before the Wardens employed the Rod of Law to defeat the Primordial Chaos Lord.

The sarcophagus is completely sealed, exhibiting not even a seam under the lid. It is impossible to damage physically.  For all appearances, it is a solid block of marble.  When someone steps upon the top stair of the southwester dais, read the following:

> [!note]+ Read Aloud
> The bas-relief sculpture animates and the warrior looks directly into the eyes of the character.  "Speak my name," it says to the character in his native language.  Thereafter, the image fades back into the wall and the chamber grows still.

If the addressed character utters the word "Zosiel," bright blue light sines around the sarcophagus lid.  It fades a few seconds later, revealing a seam between the lid and the rest of the sarcophagus.  Lifting the lid revels the treasure within.

> [!tip]+ Treasure
> Within the sarcophagus are all the remains of Zosiel: a slight silver diadem known as a [[Silver Diadem of Insight]]. The sarcophagus also includes two long slightly curved black horns with red tips (worth 3 gp each) and a pewter box inscribed with alien, writhing letterforms.  A DC 15 [[Skills#Occultism|Occultism]] check identifies the glyphs as those typically used by Chaos.  Melted metal keeps the box sealed, but a decent application of force is sufficient to snap off the lid. Inside is a long handle attached to an adamantine loop.  This inactive minor artifact radiates strong transmutation magic, but is currently dormant and does nothing.  It can be fully activated as a [[Talisman of the Sphere]] inn "A Gathering of Winds," the sixth installment of the Age of Worms.  [[5-World/NPCs/Diamond Lake/Allustan]] can identify the time by name at a glance, noting that the [[Sphere of Annihilation]] were holes in the continuity of the multiverse, and that anything they touched was utterly destroyed.  After the Battle of Aetherion legend holds that the Wardens scattered them to the corners of the universe.  Far more numerous are the talismans that were said to grant their owners some measure of control over the spheres.  [[5-World/NPCs/Diamond Lake/Allustan]] urges the PCs to keep the valuable minor artifact.  "one must always be prepared," he says with a wink and a smile.
> 
> - [<] gp::6
> - [<] permanent::[[Silver Diadem of Insight|Silver Diadem of Insight]] [ilvl::3] [gp::60]

# Part 3. Tomb Stories
In this brief interlude, the PCs take Alastor Land's bones from [[The Whispering Cairn#23. Alastor's Haunt]] of the Whispering Cairn to his family's private graveyard, on a farmstead about 10 minutes east of [[Diamond Lake]]. Before young Alastor's ghost allows the PCs to proceed through the Whispering Cairn he wants them to bury his remains with those of his family, so that his curse can be lifted and he can move on to the afterworld.

This seemingly easy mission takes a challenging turn when the PCs visit the family graveyard and discover that the bodies of Alastor's father, mother, brother, and sister have been moved recently and take off to places unknown.  Investigating of the Land farm house leads to an exciting battle with a wounded owlbear and turns up clues implicating a gang of toughs in service to the mine manager [[Balabar Smenk]], leading directly to Part Four: The Gang.

## The Land Family Graveyard
> [!note]+ Read Aloud
> A copse of immense deklo trees shades a small, quiet clearing just where Alastor said it would be, about 10 minutes east of Diamond Lake. Crumbling walls and a seemingly abandoned farmhouse stand vigil atop a small bluff overlooking the clearing, the sad ruins of what must once have been Alastor's home.  Five grave markers stand in the clearing, each with a different name: Anders, Bemissa, Coldaran, Gertia and Alastor.  Open pits yawn from before all five headstones.  Piles of fresh dirt and a pair of abandoned shovels suggest that the excavation took place recently, certainly within the week.

Alastor's father Anders died a year before the boy ran away from home.  His mother, Bemissa,, his older brother Coldaran and his younger sister Gertia all succumbed to the Red Death plague that swept through the region 19 years ago.  A DC 13 [[Skills#Medicine|Medicine]] or [[Skills#Society|Society]] check identifies the four-petaled flower motif on their graves as a symbol commonly associated with victims of that wretched disease.

A DC 13 [[Skills#Survival|Survival]] check made near the graves reveals the tracks of a wheelbarrow leading toward Diamond Lake as well as the tracks of five booted Medium humans who walked all around the graves and eventually dug them up.  Shortly after they looted the graves, the men who left these tracks walked off to explore the farmstead. Four of them seem to have come back very quickly, leaving for the road immediately thereafter.

All of the graves have been emptied (except Alastor's, which was empty in the first place); their contents have been delivered to a necromancer named Filge who recently moved into an old observatory in Diamond Lake. Until these bones are returned to the graves, Alastor cannot escape from his curse.  Connecting the empty graves to Filge takes mor evidence than is available here.  For that, the PCs need to explore the Land farmhouse on the bluff overlooking the graveyard.

## The Land Farmstead
![[Land Farmstead.webp]]

> [!note]+ Read Aloud
> The dilapidated Land farmstead consists of a crumbled wall and a sagging, unsafe house with broken windows and a sagging roof.  Thick, sludgy puddles of dried blood and unidentifiable fleshy chucks litter the wooden floor immediately inside the front door.

**Encounter Difficulty:**   
- [<] Low (80 XP) Level 2

At the start of the encounter, place the following foes on the map: 
 - 2: [[Owlbear]] 

```encounter
name: Land Farmstead
party: Age of Worms
creatures:
  - 1: [[Owlbear]]
```

Between the wall and the stairs leading to the collapsed second floor lurks an enraged female owlbear, still wounded from the battle with [[Balabar Smenk|Balanar Smenk's]] agents that left her mate and three of her cubs dead.  A single baby owlbear survived, and the mother protects it with her life.

> [!tip]+ Treasure
> A baby owlbear, still less than a year old, lurks in a corner of the north wall.  It bonds to any character that touches it, thereafter following that character obediently.  A DC 13 [[Skills#nature|Nature]] check reveals that baby owlbears can fetch as much as 150 gp from collectors who train them to become effective guardian beasts.  Although its large eyes and soft pelt make it an endearing pet or mascot, the creature is at heart a feral monster and isn't above attempting to bite off fingers or gnaw into a companion's leg. Owlbears are impossible to domesticate, so PCs hoping to keep this creature will soon find it far mor trouble than it's worth.
> 
> - [ ] gp::150

A DC 13 [[Seek]] check of the Land farmhouse turns up a complete human arm with a unique tattoo identical to the on the face of the half-orc [[5-World/NPCs/Diamond Lake/Kullen|Kullen]].  A DC 13 [[Skills#Society|Society]] check identifies the symbol as that of Garavin Vesst, a greedy mine manager who branded his employees with it as a badge of status.  Vesst was bankrupted by [[Balabar Smenk]] years ago and died early last year.  The branded workers were little more than slaves to Garavin Vesst and view their current service to Smenk as a privilege.  A DC 15 [[Gather Information]] check suggests that the gang commonly frequents the [[The Feral Dog]], a despicable tavern in the most dangerous part of Diamond Lake.  The arm formerly belonged to a rogue named Skutch.  The rest of him is in the wounded owlbear's stomach.

# Part 4: The Feral Dog
![[The Feral Dog.webp]]

> [!caption|right ws-med] Floats to the right
> **The Feral Dog Map Key**
> 1. Taproom
> 2. Staff quarters
> 3. Staff quarters
> 4. Staff quarters
> 5. Staff quarters
> 6. Kitchen
> 7. Spirits storage
> 8. Stairs
> 9. Storage
> 10. Private meeting room
> 11. Office
> 12. Premium dogfight seeting
> 13. Office of the kennel keeper
> 14. Ready room
> 15. Kennel
> 16. Raw meat storage
> 17. Private meeting room
> 18. Vaults and planning office

Once they discover the tattooed arm at the Land farmstead, the PCs are on the trail of [[Balabar Smenk]]'s gang of reprobates.  About a week ago, the five-man gang helped one of Smenk's associates from [[Ardentia City]], a debased necromancer named Filge, move into an old observatory on the bluff overlooking [[Diamond Lake]].  Balabar gave the gang strict instructions to help Filge acquire whatever he needed to feel at home at the observatory, but the wizard's first request set the criminals on edge and infuriated their leader, and albino half-orc barbarian named [[5-World/NPCs/Diamond Lake/Kullen|Kullen]].  Filge needed one thing more than any other-skeletons to serve as guardians and assistants.

Knowing that the Diamond Lake Boneyard was under the protection of cultists sworn to [[Neralith]], [[5-World/NPCs/Diamond Lake/Kullen|Kullen]] grudgingly led his followers on a tour of abandoned farmsteads on the outskirts of town, hoping to find a few private graves that the gang could dig up without attracting undue attention.  All five of the criminals resented the work, considering grave robbing beneath them.

Things grew considerable worse when, after digging up all five Land graves (and finding Alastor's empty of remains) two nights ago, an inquisitive rogue named Skutch convinced the rest of the gang to explore the Land farmhouse.

Inside, the found a pair of mated owlbears.  Four of the criminals-[[5-World/NPCs/Diamond Lake/Kullen|Kullen]], Rastophan, Todrick and Merovinn Bask-managed to escape with their lives.  All the remins of poor Skutch is his severed, tattooed arm.

All four of the remaining, cultists bear a tattoo identical to the one depicted on [[5-World/NPCs/Diamond Lake/Kullen|Kullen]]'s forehead.  Only Kullen's is on his forehead.  Other tattoos mark hands, shoulders and other areas generally covered by clothing and armor.

[[5-World/NPCs/Diamond Lake/Kullen|Kullen]]'s gang arrives at the [[The Feral Dog]] around 8:00 pm and leaves in a drunken stupor about three hours past Midnight (treat grunk characters as [[Clumsy]] for the purposes of this encounter).

The PCs might discover the location of the Land remains a number of different ways.  The criminals have a starting attitude of [[Unfriendly]]
 toward the PCs and certainly don't shy away from conflict if attacked. 

**Bribery:** All of the criminals were wounded badly in the fight against the owlbear and all of them deeply resent having been sent on the mission in the first place.  They strongly dislike Filge, who treated them like servants and they're starting to suspect (correctly) that [[Balabar Smenk]] might not have their best interests in mind.  IF even one of the criminal's attitudes can be changed to friendly ([[Make an Impression]]), the gang accepts a bribe of not less then 10 gp to reveal that they delivered the bones to a "crazy old goat named Filge" who's living in the old observatory.  They do not reveal Smenk's involvement and warn the PCs against digging too deep.  "Just get your bones and get out of there," they helpfully suggest.  If a gang member can be approached individually, his attitude need only be changed to indifferent to pave the way for a bribe.  In this case, the criminal keeps the full bribe for himself.

**Flattery:** If all of the criminals' attitudes can be changed to friendly by a PC using [[Skills#Diplomacy|Diplomacy]] to reinforce their belief that they have been used by uncaring employers, [[5-World/NPCs/Diamond Lake/Kullen|Kullen]] himself tells the PCs about the grave robbery and the delivery of the bones to the necromancer Filge. "Do me a personal favor," he says with a broken smile.  "Bring me back that thin bastard's eyes." If the PCs fail to follow-through on this request, [[5-World/NPCs/Diamond Lake/Kullen|Kullen]] eventually becomes hostile toward them, perhaps turning into a long-term enemy int he campaign who advances in level as the PCs do.

**Fight:** Of course, the PCs could just attack the gang and attempt to get the information from them by force.

**Encounter Difficulty:**   
- [<] Extreme (200 XP) Level 2

At the start of the encounter, place the following foes on the map: 
 - 1: [[3-Rules/Bestiaries/Uniques/K/Kullen|Kullen]]
 - 1: [[Rastophan]]
 - 1: [[Todrik]]
 - 1: [[Merovinn Bask]]

```encounter
name: The Feral Dog
party: Age of Worms
creatures:
  - 1: [[Kullen]]
  - 1: [[Rastophan]]
  - 1: [[Todrik]]
  - 1: [[Merovinn Bask]]
```

This fight should prove to be very challenging unless the PCs manage to battle on their own terms, setting up an ambush or isolating members of the gang from each other and taking them out one at a time.

**Kullen** This towering albino half-orc commands the respect of everyone at the [[The Feral Dog]], where his rages are legendary. He is still upset about the disaster at the Land farmstead, and is eager for an unfair fight to work off some pent-up aggression.

**Rastophan** A wiry goon from the south.  Rastophan's long, clumpy black hair hangs down over his large eyes, giving him a sullen look.  He rarely speaks and gets most of his guidance from [[5-World/NPCs/Diamond Lake/Kullen|Kullen]].

**Todrick** This corrupt fighter was born into servitude to Garavin Vesst, and views [[Balabar Smenk]] as his savior from a life in the mines.  He has short brown hair cut into a flat-top.  An angry red scar marks the left side of his sneering face from the forehead to the tip of the chin.

**Merovinn Bask** This bald, ill-tempered wizard simply can't believe that his depts forced him into servitude in the first place, and views each day as an absolute disgrace.  Bask is by far the rudest of [[5-World/NPCs/Diamond Lake/Kullen|Kullen]]'s men.  The only friend he ever had was the unfortunate Skutch.

> [!tip]+ Treasure
> Kullen is carrying a +1 Weapon Potency Greataxe, [[Healing Potion (Minor)]], [[Bestial Mutagen (Lesser)]] and 3 gp.  Rastophan is carrying [[Splint Mail]] [[Darkvision Elixir (Lesser)]] and 4 gp. Todrik is carrying a [[Glaive]], [[Splint Mail]], [[Healing Potion (Minor)]]x2 and 2 gp. Merovinn Bask is carrying [[Dizzying Colors|Scroll of Dizzying Colors]] and his spellbook (Cantrip: [[Ray of Frost]], [[Electric Arc]], [[Shield]],[[3-Rules/Character Building/Spells/D/Detect Magic|Detect Magic]] 1st: [[Force Barrage]], [[Scorching Blast]], [[Gust of Wind]] 2nd: [[Mirror Image]] )
> 
> - [<] gp::9
> - [ ] permanent::[[Weapon Potency (+1)|+1 Greataxe]] [ilvl::2] [gp::35]
> - [ ] permanent::[[Splint Mail|Splint Mail]] [ilvl::1] [gp::13]
> - [ ] consumable::[[Healing Potion (Minor)|Healing Potion (Minor)]] [ilvl::1] [gp::4]
> - [ ] consumable::[[Healing Potion (Minor)|Healing Potion (Minor)]] [ilvl::1] [gp::4]
> - [ ] consumable::[[Healing Potion (Minor)|Healing Potion (Minor)]] [ilvl::1] [gp::4]
> - [ ] consumable::[[Bestial Mutagen (Lesser)|Beastial Mutagen (Lesser)]] [ilvl::1] [gp::4]
> - [ ] consumable::[[Darkvision Elixir (Lesser)|Darkvision Elixir (Lesser)]] [ilvl::2] [gp::6]
> - [ ] consumable::[[Dizzying Colors|Scroll of Dizzying Colors]] [ilvl::1] [gp::4]

If the PCs don't manage to cajole or bribe the location of the Land remains out of Balabar Smenk's henchman, you can still move the action along by staging follow-up encounters with Kullen and his brutes. They don't appreciate the questions the PCs have been asking around town, and decide to rough them up.  Give the PCs a good chance to win one of these battles, which will place them in the position of getting whatever information they want form the defeated albino half-orc and his gang of reprobates.

> [!warning]
> If the PCs manage to learn of Filge from Kullen or his henchmen without resorting to combat, award them XP as if they had defeated the group.

# Part 5. The Old Observatory
About a century ago, Diamond Lake's crumbling observatory hosted a scientific cult devoted to studying the heavens and celestial bodies.  The sect died out decades ago, and the place has since been inhabited by a series of questionable tenants who never seem to last very long.  The latest is Filge, a deranged necromancer from [[Ardentia City]] summoned to Diamond Lake by his old associate [[Balabar Smenk]], a local paragon of corruption. Two weeks ago, Filge received a package from Smenk filled with a thousand pieces of gold and hints of "unkillable" undead in the hills around Diamond Lake.

When at last Filge arrived, Smenk laid out a series of confusing events that hinted at a bizarre conspiracy hatched in secret chambers below Diamond Lake. ONe of Smenk's rival mine managers, a taciturn business minded dwarf named Ragnolin Dourstone, came to Smenk with a covert offer of alliance.  Dourstone explained that one of his crews had discovered an unusual chamber below his copper mine and that a cadre of students and mystics had set up shop there at his invitation. Dourstone asked Smenk to run secret food shipments to this subterranean force, keeping the whole affair from the attention of Diamond Lake's militia garrison or the office of Governor-Mayor [[Lanod Neff]]. In exchange, the dwarf offered Smenk a fair contract and three beautiful obsidian rings, said to have bene unearthed within this secret chamber-the so-called "Black Cathedral." Smenk agreed, but only if Dourstone would consent to let him visit the cathedral himself.

What Smenk saw there terrified him, an emotion he'd thought purged since he strangled his first city watchman.  An oppressive aura of despair surged from a large pool of black slim in the Cathedral's central chamber.  Three circles of robed figures ringed the pool, their faces touching the cold mosaic floor. Through robes and hoods Smenk spied inhuman appendages-twitching tails and hints of oily black feathers.  Their chants echoed off basalt walls like a chorus of croaking frogs and screaming children.

Worst of all, Ragnolin Dourstone acted as if nothing was amiss, politely leading Smenk on a tour through a bizarre labyrinth while outlining what sort of provisions he required and when he would expect Smenk's agents to make delivery so as to arouse the least suspicion, "All must be prepared," Dourstone said without a hint of emotion, "For the Age of Worms is upon us."

Smenk had never heard of the Age of Worms, but knew a clue when he saw one. While touring what appeared to be an arcanist's laboratory, Smenk noticed a jar containing a segmented green worm suspended in nutritive fluid.  He gingerly absorbed the jar into a magical storage space and continued following his rival, taking in his surroundings and planning a hasty escape should things grow any stranger.

In a chamber beyond the labyrinth Smenk met the master of the Black Cathedral, a masked wizard called the Faceless ONe.  Unintimidated by Smenk's political clout, the lisping, crooked man dictated new terms of the provisioning arrangement. "Now that you see what we are capable of," he wheezed, "you understand why secrecy must be maintained.  Secrecy allows us to continue or studies and liturgies in the name of the Ebon Triad.  Without secrecy, we are lost.  We will kill to preserve it."

Smenk understood the subtext, and agreed to the provisioning deal without mentioning that the arrangement would drive him into penury.  He escaped the mine with his live but had shackled himself to a disastrous agreement with a dangerous inhuman cult.  Armed with his bottled worm and tails of undead in the hills, he sent for Filge and put up his old friend in Diamond Lake's moribund observatory.

Once the PCs reach the old observatory, read the following:
> [!note]+ Read Aloud
> Five minutes north of Diamond Lake, on a bluff overlooking an abandoned mine, a crumbling old observatory casts its gaze to the heavens.  A wide slit bisects its doomed tower, where surely a great telescope once peered into eternity.  Now the place bears a dark character, like a sagging tenement broken under the weight of decades of inhabitants.  A slim stairway cut into the steep hillside leads to the structure's only door, on the side of the tower's attacked one-story outbuilding.  Flickering light filters though the observatory's only windows, along the tower's second and third floor.

```leaflet
id: Old Observatory
image: [[Old Observatory.webp]]
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

## 1. Landing 
> [!note]+ Read Aloud
> The stairway rises to a wide landing and two huge wooden doors.  Shot though with dark blue mold, the doors form an enormous round moon carved wit a lunatic's jabbering face.  

The massive moon-face doors are held shut with a simple lock (DC 20 [[Skills#Thievery|Thievery]]).  If this check fails by 5 or more, the skeletons in area 2 hear the commotion and prepare for the PCs. 

## 2. Watchers in the Dark
> [!note]+ Read Aloud
> Furniture fragments, smashed planks, broken glass and other detritus cram this large antechamber.  At the west end of the room, several upended tables form a crude barricade.  Closed doors mark the north and west walls.

**Encounter Difficulty:**   
- [<] Trivial (60 XP) Level 2

At the start of the encounter, place the following foes on the map: 
 - 3: [[Skeleton Warrior]] 

```encounter
name: Watchers in the Dark
party: Age of Worms
creatures:
  - 3: [[Skeleton Warrior]]
```

Three of Alastor Land's relatives now animated skeletons in thrall to the odious necromancer Filge, guard this chamber and the observatory's only exit.  The skeletons hide behind a wooden table barricade in the last rank of squares along the western wall.  Each wields a crossbow armed with a greasy, poison-tipped bolt and kneels beside an identical loaded crossbow and a scimitar.  If the PCs make a lot of noise getting though the front door, the skeletons gain surprise acting first in the round the moment the door is opened.  They use this round to fire their in-hand crossbows at any visible PC.  The upturned tables grant the skeletons [[Cover|Cover]].  Due to the junk littering the floor, all of the squares int he room are considered difficult terrain.

The skeletons are two adults and a young adult-Alastor's father Anders, his mother Bemissa, and his brother Coldaran.  Bemissa and Coldaran's skeletons show slight deformities that a DC 15 [[Skills#medicine|Medicine]] check identifies as signs of the Red Death, a plague that swept through Diamond Lake 19 years ago (matching the date on their gravestones).

## 3. Abandoned Office
Pushing open the warped wooden door to this chamber requires a DC 13 [[Skills#Athletics|Athletics]] check.

> [!note]+ Read Aloud
> This room appears to have once been an office, but it does not look like it has been used in years.

## 4. Cenobitic Chambers
> [!note]+ Read Aloud
> This simple chamber hosts a plain bed, a small open footlocker and a unremarkable wooden dresser.

These tiny rooms once housed the monks who lived in the observatory.  Each is slightly different from the next, as if the interiors have been customized by a successions of tenants.  They have not been used for more then a decade.

> [!tip]+ Treasure
> A DC 20 [[Seek]] check in the easternmost room reveals a clevverly hidden puch dangling behind a dresser drawer.
> 
> - [<] gp::1
> - [<] sp::18
> - [<] cp::9

## 5. Feasting Hall
> [!note]+ Read Aloud
> The revolting stench of rotting flesh roils from the open door. IN the room beyond, ten chairs surround an oblong dining table situated parallel to the door. Along the north wall, a wide staircase lads to an upper floor.  A wooden door below the stairs presumably leads to a slim chamber. Two doors line the south wall.  A sagging antique wooden shelf dominates the west wall, looking like it might collapse at any moment.
> 
> Three tall candles on the dining table illuminate a sight of terror. With the exception of the place at the western end, each of the chairs surrounding the table holds an awkwardly seated humanoid figure. The seven bodies are in various stages of decomposition. Some sit with splendid posture, paused as if midway though a sumptuous feast. Others slump treacherously close to the floor.
> 
> Heaping plates of apparently fresh food sit before each of the diners, but the empty place setting fieatures a clean plate and set of utensils. Several bottles of red wine rest upon the table, and each of the corpses sits before a half-finished glass. A fly passes nearby, its there-not-there buzz breaking the eerie silence.

Characters who make a successful DC 12 [[seek]] check notice slight movements in some of the corpses at the table, suggesting they may be animated.  All seven of the guests are zombies, but the creatures make no attempt to waylay the party.  In fact, they do not interact wit the PCs in any way unless a PC sits in the empty chair at the head of the table.  When this happens, all of the zombies spring to life and begin acting out a formal dinner party.  The undead diners lack the precision necessary to slice their food, and merely go through the motions of eating.  The whole thing has the atmosphere of a grotesque pantomime.

Seconds after the feast begins, a zombie turns to look directly at the seated PC and comments: "Once again, milord has provided a delicious meal," it says in an accent tinged with airs of nobility.  "It is an honor to dine in your august presence."

Thereafter, other diners chime in with sycophantic comments of their own.  "The Arcane Conclave was wrong to turn you out," a male elf corpse remarks. "You ought to show them like you showed me." The tattered remains of what must once have been a young woman speak up next.  "I shouldn't have ever doubted you, Filge," it says earnestly. "I always loved you when we were together. Now I will love you forever." Conversation continues along these lines until the seated PC stands up, at which point the production comes to a close and the zombies "reset" to their beginning positions.  Each time a character sits at the head of the table, the script begins again.

> [!warning]
> Since these zombies do not fight back, award no experience points for their defeat

## 6. Kitchen
The kitchen contains an enormous wheel of cheese, a moldy loaf of bread, and several strips of string cured meat-salted swine hearts.  

## 7. Pantry
A small closet off the kitchen's west wall holds a handful of spices and dry food favored by Filge.  His diet portrays a lack of depth or creativity and most of the shelves are empty.

## 8. Storage Closet
This simple storage closet holds for extra chairs and eight copper candle stands worth 2 sp each.

## 9. Bedchamber
> [!note]+ Read Aloud
> The stairs lead to a massive bedchamber that fills an entire floor of the observatory tower. Light filtering in from the tall windows ringing the chamber catches motes of dust in the calm air. A fine bed with plump red linen sheets squats upon a dais along the southeast cradle of the tower's arc.  A nightstand next to the bed holds a wax-choked candlestick and a black book bound with brown and red leather.
> 
> At the midpoint of the eastern wall a strange form stands rigid atop a short wooden stool, as tall as a halfling and clothed in a fine black suit and top hat.  Clean cloth bandages wrap every inch of the sentry's skin. A pair of ash-tinted spectacles rests upon a long skinny nose. The diminutive dandy holds a silver platter as if presenting a meal, and upon the tray rests the freshly preserved severed head of a middle-aged human woman. A gold piece sits upon her outstretched, purple tongue.
> 
> A messy desk rests against the opposite wall, piled hit with loose papers. An apparatus holding four long tubes filled with color liquid peeks out from the clutter.  Doors on the north and west walls appear to lead to small closets.
> 
> Wide stairs lead above and below. A massive white stone statue of a thin human man with outstretched angelic wings and a beatific look upon his idealized face looms large in the northwest arc of the tower wall.  The angel holds a sword in one hand and cradles a harp with the other.  The presentation conjures thoughts of mausoleum peaks or the graves of important men. Tall letters etched upon the statue's base spell out a single word: "Filge." 

The ceiling in this chamber is 15 feet high rather than the standard 10 feet common in the rest of the observatory.

On the rare occasions when he is not experimenting in his upstairs laboratory, Filge can be found brooding here upon some half-finished project or laboring over notes and calculations at his desk. He tends to work upstairs until about midnight, at which point he winds down with another two hours of reading and meditation here in his bedroom.

The roof of the observatory's attached outbuilding provides walk-up access to the windows looking in on this room.  Medium and smaller characters can slide through the windows with ease.  Larger characters or creatures wearing bulky armor must take a full minute to squeeze through.  Note that it's possible to catch Filge sleeping.  In these cases, the wizard's owl familiar keeps watch from a perch on the candlestick on the nightstand next to the bed. The bird makes a [[Seek]] check at +14 and screeches wildly if it sees an intruder.  Filge keeps his syringes on the nightstand while sleeping so he's never far from a weapon.

The halfling "statue" is really a mummified goblin dressed in a fine suit and hat that doubles as a noble's outfit for small characters.  The corpse is long dead, but has been chemically preserved to prevent decomposition.  This process also preserves the female human head on the silver platter.  Touching the head in any way triggers a magic mouth that screams "INTRUDER! INTRUDER! INTRUDER!" This instantly alerts Filge to the presence of interlopers in his bedchamber.

The angelic figure is an idealized representation of Filge himself.

> [!tip]+ Treasure
> Filge's spellbook rests upon the nightstand next to the bed.  It contains the following spells: [[3-Rules/Character Building/Spells/D/Detect Magic|Detect Magic]], [[Ray of Frost]], [[Illusory Disguise]], [[Vitality Lash]], [[Touch of the Void]], [[Void Warp]], [[Mystic Armor]], [[Enfeeble]], [[Embed Message]], [[Ghostly Carrier]] and [[Stupefy]].
> 
> The silver tray held by the mummified sentry is worth 2 gp. The A large run of golden brown fur is worth 8 gp, but must be carried carefully to ensure that its coat does not become soiled.  A DC 15 [[Skills#Occultism|Occultism]] check identifies the pelt as that of an adult lammasu.
> 
> Most of the papers on Filge's desk concern surgical procedures meant to enhance the potency of undead, while others contain only the meandering scribbles of a mind descending into madness.  Buried in with the junk is a [[Summon Undead|Scroll of Summon Undead]] and a beaker holder containing four 6-inch-long tubes filled with different-colored liquids  Two of the six slots are empty. The glass tubes are sealed at the top with a rubber sheath, and look like they are meant to be slotted into some other device.  Each contains a soupy liquid substance consisting of reanimated cells.  Filge has been experimenting with injecting these liquids into himself. They are effectively a [[Potion of Emergency Escape]], [[Healing Potion (Minor)]], [[Surging Serum (Minor)]], and [[cats-eye-elixir]]. Every so often, something within the beakers seems to move slightly, but it might just be a trick of the eye. A handwritten label on the bearker holder says "Necroturgeons."
> 
> Also on the deck is the original summons [[Balabar Smenk]] sent Filge to encourage him to come to Diamond Lake (See handout).
> 
> - [ ] gp::10
> - [<] consumable::[[Potion of Emergency Escape|Potion of Emergency Excape]] [ilvl::1] [gp::3]
> - [<] consumable::[[Healing Potion (Minor)|Healing Potion (Minor)]] [ilvl::1] [gp::4]
> - [<] consumable::[[Surging Serum (Minor)|Surging Serum (Minor)]] [ilvl::2] [gp::5]
> - [<] consumable::[[cats-eye-elixir|Cat's Eye Elixir]] [ilvl::2] [gp::7]
> - [<] consumable::[[Summon Undead|Scroll of Summon Undead]] [ilvl::1] [gp::4]

## 10. Closet
These closets contain Filge's wardrobe, which consists of six sets of nearly identical sleeveless long coats worn over a shirt and breeches.

> [!tip]+ Treasure
> If the PC's take several minutes to completely ransack the closets the rummage 13 sp worth of coins from various pockets and pouches.
> 
> - [<] sp::13

## 11. Operating Theater
**Encounter Difficulty:**   
- [<] Severe (155 XP) Level 2

> [!note]+ Read Aloud
> A single chamber dominates the observatory's entire upper floor.  Light filters through the wide slit in the roof, bathing the center of the room in illumination. Four large mirrors set along the outside wall reflect bright beams into the direct center of the room, a recessed operating theater accessible via two short sets of stairs.  The beams specifically target a blue-skinned humanoid figure splayed out upon an operating table, its chest completely opened and pinned back against the table with long metal needles.  Two long shelves cluttered with piles of papers, rotting organs, and instruments comprise the east and west extent of the operating theater, and are only a few inches lower tan the chamber's outer floor.
> 
> Four metal-and-glass tanks, each easily large enough to hold a human, flank the short stairs leading to the operating theater.  Each tank is full of yellow liquid streaked with rust.  Indistinct, vaguely human silhouettes bob silently in the soupy fluid.

The gigantic telescope that gave the observatory it's purpose was looted form the structure decades ago, leaving only a 5-ft recessed floor at the center of the chamber where the great device once rested.  Filge has repurposed this area as his operating heater, packing it with the tools of his macabre trade as well as some of his favorite success stories.  The corpse currently laid out on the operating table is an experiment that Filge hops one day soon to animate as a powerful zombie.  Right now it's just a dead human whose skin has been dyed blue with an artificial additive of Filge's own design.

At the start of the encounter, place the following foes on the map: 
 - 1: [[Filge|Filge]] F
 - 1: [[Skeleton Warrior]] W
 - 1: [[Void Zombie]] V
 - 3: [[3-Rules/Bestiaries/Monster Core/Z/Zombie Shambler|Zombie Shambler]]

```encounter
name: Operating Theater
party: Age of Worms
creatures:
  - 1: Filge
  - 1: Skeleton Warrior
  - 1: Void Zombie
  - 3: Zombie Shambler
```

Assuming the PCs employ stealth, they may access this room without FIlge's knowledge, catching him unawares as he conducts magical-medical experiments on the corpse upon his operating table.  As he stiches and saws, the sallow skinned necromancer sings a dreadful melody in the hoarse, hacking voice of an addict.  He moves to attack at the first sight of intruders, pulling up short only if confronted by a truly impressive display (such as the head of Kullen or all of the zombies from [[The Whispering Cairn#5. Feasting Hall]] in thrall to a PC).  Even then, FIlge negotiates only if a PC makes a successful [[Skills#Intimidation|Intimidation]] check.

A 5-foot-tall human skeleton follows FIlge everywhere he goes, acting as a mobile bookstand and dogsbody.  This is poor Gertia Land, youngest of Alastor Land's siblings.  A DC 15 [[Skills#Medicine|Medicine]] check identifies subtle deformities to her skull that are the hallmarks of the Red Death plague that swept [[Diamond Lake]] 19 years ago.  The skeleton wears a rusty old scimitar in a belt scabbard and will use it at Filge's command.

The four tanks surrounding the recessed floor contain FIlge's proudest accomplishments, hulking undead monstrosities created with scrolls and preserved for later use in a soupy yellow liquid streaked with ribbons of rust.  Three of the tanks contain zombies, while the southeast tank contains a brutish bald zombie.  At Filge's command, these creatures burst forth from their tanks, wielding pipes wrenched from their glass and metal prisons as greatclubs.

## Tactics
*Round 1:* Filge gestures to the zombies in the fluid tanks surrounding his laboratory. "Arise, my beautiful monstrosities!" he calls out. As he does this, he move to gain cover from the most tactically advantageous tank.  Gertia Land's skeleton positions itself between PCs and the necromancer, scimitar drawn.  She never moves more then 15 feet from the necromancer.

*Round 2:* Filge casts [[Mystic Armor]] on himself, raising his AC.  If he had any reason to suspect foul play prior to the arrival of the PCs, he has already cast this spell.  He instead injects himself with [[False Vitality|Vial of False Vitality]]  gaining 10 temporary hit points.

The four zombies crash out of their tanks and move to form a wall between the PCs and Filge.  If possible, they attack.  The skeleton attacks if possible or stands its ground and readies an attack against the next available foe.

*Following Rounds:* The undead continue to engage in melee with the PCs.  Filge casts spells as appropriate though the encounter reserving enfeeble for any melee-oriented PC who seems to be doing well against the monstrosities.

Filge surrenders only when all of his undead creations have been destroyed or turned against him.  He remains a pragmatist even in defeat; when he knows there is no way out, he blithely offers to "sell out Smenk completely" in exchange for his freedom.  He lets the PCs keep whatever they want, so long as they let him go.  If his attitude can be adjusted to friendly or better, he tells the PCs everything he knows about [[Balabar Smenk]]'s operation in Diamond Lake, the Dourstone Mine and the Ebon Triad.  See Development below for more information.

> [!tip]+ Treasure
> Filge's fine silver operating instruments are worth 50 gp as a set.  A 2 gp emerald is lodged in the throat of the corpse on the operating table.  On one of the shelves flanking the operating table rests a glass tube about a foot long and half as wide.  A slim green worm bobs in the murky chemical solution within the jar.  A DC 15 [[Skills#Religion|Religion]] check identifies the segmented worm as a part of an undead creature called a spawn of Kyuss.  The sample is worth 10 gp to a sage or taxidermist.  Flashing it around in [[Diamond Lake]] is a good way to attract the attention of [[The Ebon Triad]].
> 
> The most important treasure in the room may be the bones of Gertia Land, which the PCs must return to the grave of the Land farmstead to appease the ghost of Alastor Land in [[#23. Alastor's Haunt]].
> 
> - [<] gp::52

## Development
Presuming the PCs defeat Filge without killing him, they can learn a lot from the humiliated wizard.  He doesn't volunteer information, but once cowed he responds thoroughly to direct questions, hoping that his honesty encourages the PCs to spare his miserable life.  

*Why are you here?* "Me mate Balabar called me up from Ardentia City for a bit of study about some weirdness in town. He got himself brough down to a hidden part of the Dourstone Mines a month ago, to set up some provisioning deal with the dwarf what runs the place.  But the mine was crawling with awful beasts in hooded robes.  He said their wild cries made his stomach heave.  The cultists-the called themselves the Ebon Triad-said something about the Age of Worms, about strange undead in the southern hills and the swamp. Smenk knew he had to prepare a defense, so he called in his undead expert.  Me."

*Why did you steal the Land skeletons?* "The who?  I needed helpers, so I got Smenk's white half-orc to fetch the raw materials.  I have no idea where he got them.  Are you telling me you came here because of the skeletons?!?!  Curse the pink-eyed fiend!"

*The Age of Worms* "The Age of Worms is a Waiting Age, an era of catastrophe that lurks in the shadows of every tomorrow.  Scholars obsessed with apocalyptic visions claim that its advent signals an interminable period of suffering in which the cosmic scales shift disastrously toward evil and light fades from the land."

*Balabar Smenk* "He and I were mates 20 years ago in Ardentia City.  I laugh not to think of how far he's come in so little time.  how respectful people around here are toward him.  Ha!  If they only knew!"

*The Dourstone Mines* "I think it's along the road east of here, but this hell-hole is your town, not mine.  You tell me where it is.  If you're going, best be careful.  Smenk said the place scarred him, which I wouldn't have thought possible before I heard him say it myself."

*The Ebon Triad* "Smenk says the cult follows some of the old gods.  Hextor, Erythnul and Vecna I think. If true, the place must be crawling with delicious secrets.  I'd love to accompany you if you intend to go."

*The Green Worm* "Balabar nicked that jar from a laboratory in the Dourstone Mine. It's very rare.  Dead now, of course, but once it hand hundreds of worms like it must have wriggled within the abscesses and orifices of a powerful undead creature called a spawn of Kyuss.  These are probably the 'unkillable' zombies the cultists mentioned to Smenk.  If true, it could be a real problem. Those worms can get inside you and turn you undead in about a day."

*Kyuss* "No one knows much.  He appeared more than a thousand years ago in the Rift Canyon.  I'm not even sure if that exists following the Sundering.  In a short time, he created dozens of new undead breeds and amassed a legion of creatures bound to his will.  They san an undead dragon stood at his side as the general of this force.  Now, only the green worms remain of his legacy.  Well, that and his title: Harbinger of the Age of Worms."
