---
tags:
  - "#Adventure"
art: zz-Attachments/blackwall keep.png
whichparty:
  - "[[Age of Worms Party Dashboard]]"
adventure_status: Not Started
adventure_level: 5th to 7th
aliases:
  - Dungeon 126
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

## Overview
In the first two adventures of the Age of Worms Adventure Path, the PCs met and befriended a local wizard named [[5-World/NPCs/Diamond Lake/Allustan|Allustan]]. Dubbed “the smartest man in Diamond Lake,” [[5-World/NPCs/Diamond Lake/Allustan|Allustan]] took a keen interest in [[the Whispering Cairn]] after the PCs discovered that it was a tomb for the ancient Aetherial Wardens.  Allustan is keenly interested in exploring the cairn himself, but first, he needs to consult with an old friend in Blackwall Keep. He asks the PCs to accompany him west as an escort; the road along the Mistmarsh’s edge is unsafe, even fora powerful wizard. 

The PCs arrive at Blackwall Keep to find over two dozen lizardfolk assaulting it. The PCs must battle to rescue the survivors in the keep and repel the lizardfolk in successive attacks. Once the keep is secure, the surviving guards tell them several soldiers (including [[5-World/NPCs/Diamond Lake/Allustan|Allustan's]] friend) were carried off and need to be rescued, [[5-World/NPCs/Diamond Lake/Allustan|Allustan]] urges them to free the captives, while he uses an emergency scroll of teleport to report the news to the commander of the [[Diamond Lake]] garrison and ask for reinforcements to be sent south. 

The trek to the lizardfolk lair takes more than a day, but the numerous lizardfolk leave a relatively easy trail even through the swamp. The lair is large and partly submerged, and the lizardfolk defend it vigorously. The PCs learn of a schism within the lizardfolk tribe, and of the alliance between the lizard king and the black dragon Ilthane; and by defeating the corrupt king and rescuing the tribe's eggs from a terrible fate the PCs can secure the cooperation of the Mistmarsh tribes and rescue the prisoners. 

Returning to the keep with the freed soldiers, the PGs find the survivors at the keep are terrified of a creature in the basement that has been snatching them one by one. The PCs must defeat this final enemy before its undead corruption spreads. 

## Adventure Hooks
This adventure starts with Allustan contacting the PCs. He tells them that he has completed his study of the artifacts they found in the Whispering Cairn. He believes the glyphs on the objects are an ancient dialect of Sussuran known as Auran, the language of elemental air. 

He explains that some of the tombs in the Cairn Hills are thought to contain the graves of the Wind Dukes of Aaga, great and valorous beings of flesh and air who served Law in the primordial times before history. The Wind Dukes battled an evil entity known as the Queen of Chaos, defeating her with an artifact which shattered and is now known as the Rod of Seven Parts, Even children know of this legendary battle on the Fields of Pesh, thought by some to lie in the distant north. All of these clues have Allustan greatly interested in the Whispering Cairn, and he would like the PCs to tell him its location so he may study it further.

Before he can make that visit, however, he has an appointment he must keep. Marzena, a battle mage of the Free City assigned to Blackwall Keep at the northern edge of the Mistmarsh, is an old friend of Allustan and sent him a message about reports of strange green worms in the Cairn Hills. If the PCs have told Allustan about the green worms, he points out Marzena’s message as a possible tie to that mystery. Allustan asks the PCs to escort him to Blackwall Keep, as the Mistmarsh is a dangerous place and monsters have been known to raid outlying farms. 

Read the following when the PCs next speak with Allustan.
> [!note]+ Read Aloud
> I’ve been reviewing the glyphs from the Whispering Cairn—what you found there is nothing short of astonishing. I’m convinced they’re written in an ancient dialect of Sussuran. Not just any Sussuran—the Wind Dukes’ ceremonial tongue: Auran.
> 
> These tombs may belong to warriors who stood against the primordial forces of chaos—beings of law and air who helped defeat the primordial chaos lord, in the days before history. If that’s true, then the Cairn isn’t just an archaeological curiosity. It’s a scar left by the gods of order... and a warning.  And that brings us to the worms.
> 
> You remember the undead I told you about—the ones infested with those vile green parasites. I had dismissed them as something unrelated… until now. Their presence in the hills, their persistence—they feel like echoes of the same war. Where once the Wind Dukes battled the Queen of Chaos, perhaps now, something else is clawing back through the cracks. These worms might be the first signs.
> 
> Marzena, an old friend of mine stationed at Blackwall Keep, recently sent me word. She’s seen the worms too—alive, squirming, infecting creatures near the Mistmarsh. If she’s right, then whatever is happening below Diamond Lake is spreading. I need to speak with her… but I won’t risk traveling alone. The marsh is dangerous, and what’s out there may be worse. I want you with me. This may be the beginning of something much bigger.”

# Part One: To Blackwall Keep
This adventure assumes that the PCs begin in Diamond Lake. Give them time to tie up any loose ends from their previous adventure, identify magic items, brew potions and write scrolls, and otherwise recover from their ordeals under Dourstone Mine. If any of the Eventually, Allustan gathers the PCs for the journey east. Although he has a scroll of teleport, he prefers to keep it in reserve for emergencies and instead plans to travel on horseback to Blackwall Keep. The road to the Keep is 38 miles east through the Mistmarsh along а trail the latter parts of which are hilly. Roll for encounters once per day on the eastbound trip using the following table. Once a particular group is encountered it can't be encountered again (if that encounter is rolled a second time, no encounter occurs that day). 

#### Encounters on the Road
| **`dice: D100`** | **Encounter**                                           |
| ---------------- | ------------------------------------------------------- |
| 1-35             | No Encounter                                            |
| 36-45            | `dice: 2d6` Religious Pilgrims                          |
| 46-55            | `dice: 2d4` Gnome Traders                               |
| 56-65            | `dice: 2d6` Halfling Farmers                            |
| 66-75            | `dice: 2d6` Dwarf Crafters                              |
| 76-85            | `encounter: 4: Bandit`                                  |
| 86-90            | `encounter: 1: Orc Commander, 6: Orc Veteran`           |
| 91-95            | `encounter: 6: Goblin Commando`                         |
| 96-100           | `encounter: 3: Lizardfolk Scout, 4: Lizardfolk Warrior` | 

**Dwarf Crafters:** These dwarves are carting a shipment of metal tools to [[Ardentia City]]. Each dwarf is a [[Merchant]] and carries a bag of goods. They're willing to sell their goods on the road if the buyer seems reputable, and defend themselves and their goods if attacked, but they are not soldiers and would rather be robbed than killed. 

**Gnome Traders:** The gnomes are returning from [[Ardentia City]] after bargaining for exotic goods. They're interested in buying small gems and pieces of jewelry, and have minor alchemical items (25 gp or less) for sale. Each is a [[Merchant]]. As with the dwarves, they'll fight to protect their property but run away if they think odds are they'll be killed. 

**Halfling Farmers:** These [[Farmer]] have bags of herbs and pipeweed they're bringing to market. They don't like to trade on the road and only do so if there is a halfling PC. They run away if attacked. 

**Religious Pilgrims:** These devout worshipers of Aegis are on their way to Diamond Lake for a religious holiday. Each is a the equivalant of a [[Pilgrim]] except for the leader, who is a [[Acolyte of Pharasma|Acolyte of Aegis]]. The pilgrims subscribe to the militant doctrine of Diamond Lake's church of Aegis, and see any interaction with strangers as a chance to gain new converts. 

**Bandits:** These ruffians are [[3-Rules/Bestiaries/Rulebooks/NPC Gallery/Bandit|Bandit]] humans or half-orcs and are trying to collect “toll money” from people on the road. They can be cowed by a show of force or intimidation, and flee combat if their opponents appear to have any skill. 
- [ ] low (60 XP) Level 5

**Orcs:** These savage raiders only attack at night, preferably when most or all of their opponents are sleeping. They are cautious and usually do not attack well-armed or well-guarded targets unless they look wealthy. 
- [ ] low (75 XP) Level 5

**Goblins:** These savage raiders only attack at night, preferably when most or all of their opponents are sleeping. They are cautious and usually do not attack well-armed or well-guarded targets unless they look wealthy. 
- [ ] low (60 XP) Level 5

**Lizardfolk:** These reptiles are not associated with the tribe attacking Blackwall Keep. They are scouting for unusual (ie. non-swamp) game to bring to their king as a gift, are only encountered around dusk and dawn, and only fight if attacked. If hailed in Draconic (the only language they understand) and bribed with food they are willing to tell the PCs recent news from the Mistmarsh; the only thing of interest to the PCs is that one of the larger lizardfolk tribes (the Twisted Branch) near the center of the Mistmarsh is preparing for war. 

These encounters shouldn't particularly challenge the PCs, especially since they have [[Allustan]] along. He intends to stay the night in an old, abandoned farmhouse along the side of the road known locally as “Shank's Rest.” Shank gave up farming many years ago when he inherited a large amount of money, and moved to [[Ardentia City]] to live up his twilight years. He never bothered selling his old farm, and now, travelers often use the farmhouse as a waypoint on their travels along the road. 

During this night, you should feel free to roleplay any conversations the PCs may have with Allustan. Try to develop him into a likable supporting character—a friend. He may challenge a PC to a contest of riddles, or he might simply tell them stories of his younger days spent as an adventurer. He won't elaborate on his mysterious patron, saying only that their parting was less than friendly. 

```statblock
monster: "Allustan-Stats"
```

Read as the players approach Blackwall Keep,
> [!note]+ Read Aloud
> The keep rises like a black fang from the earth, its squat tower the only visible structure. The ground floor is cleverly hidden beneath a false hill, its seams only noticeable from the southern approach, where a broken and hastily repaired door hints at earlier violence.

## Blackwall Keep
As the PCs and [[Allustan]] cover the last stretch of the southbound trail, they notice an increase in the number of flies and the smell of a battle—smoke and blood. Earlier this morning a large number of lizardfolk surrounded and attacked Blackwall Keep. Both sides inflicted casualties, and by the time the PCs arrive the lizardfolk have pulled back, regrouped, and are preparing for their next sortie against the keep. 

The hilly terrain means it's possible for cautious characters to get close enough to see the keep without being spotted by its residents or attackers (the lizardfolk are focused on the keep rather than the trail). If they do, they can secure a good view of the keep and its current situation. The region surrounding the keep is presented on the poster map provided with this issue. 

The keep itself is built out of black stone and consists of a single ground floor with a tower. The entire ground floor is buried under a false hill, and all that is visible is the tower itself. The door to the keep (visible only from the south side) looks like it has been broken open and hastily repaired. On the level above the door a five-foot balcony extends outward, giving the defenders a good vantage point and making it harder for invaders to enter the tower by climbing the walls. 

Large sharpened wooden stakes jut out of the hillside, pointing away from the keep (toward any potential attackers). Any creature entering a square with one of these stakes at normal speed must succeed at a DC 10 Reflex save (DC 15 if the creature is running or charging) or take 1d6 points of piercing damage. A creature may automatically pass through the square safely if they spend 2 squares of movement to pass through and they are not running or charging. 

Next to the keep is a stockaded horse corral, partially embedded in the false hill. The doors to the stockade are open and a dead and partially dismembered horse is in the doorway (all three horses assigned to the keep are dead within the corral, killed early by the lizardfolk to prevent escape or messengers). 

If the PCs watch, they see eight groups of five lizardfolk are arranged in strategic places around the keep, using bushes, large rocks, and dead trees as cover. Each has a club, large shield, and at least one javelin. Some of them are eating horsemeat, and at least one is eating a dead human soldier. Three dead lizardfolk are out in the open near the keep, attracting flies. A hundred yards beyond the most distant ground of lizardfolk is a broad swath of grassland, and beyond that is the Mistmarsh. It is impossible to reach the keep without passing the lizardfolk, and without the use of magic it seems a certainty that at least one of the lizardfolk will see anyone attempting to reach the keep, as there are no hiding places that lead all the way up to the keep. 

If the PCs charge the keep, they have to deal with all of the lizardfolk as a large group. Barring a few lucky fireballs or something similar, the PCs likely can't win—twelve [[Lizardfolk Warrior|Lizardfolk Warriors]] are an extreme difficulty encounter, a tough challenge for 5th-level PCs, fighting thirty such creatures would be certain death barring a freak combination of rolls in the PCs’ favor. If they want to defeat the lizardfolk, their best bet is to try to tackle them one group at a time, either in ambush-and-run raids or while the lizardfolk are attacking the keep and not able to reinforce each other (killing the leader may also break their morale and convince them to retreat). Alternately, the PCs may try to bypass the lizardfolk and get into the keep to help the soldiers. Either way, [[Allustan]] tells them they need to help the soldiers immediately while he uses his scroll of teleport to return to [[Diamond Lake]] and get reinforcements from the commander of the garrison there. It takes some time for [[Allustan]] to convince the garrison to send reinforcements, and even more time for them to organize and set out. They'll arrive at Blackwall, on foot, in `dice: 1d4+2` 1d4+2 days. 

Read to the players,
> [!note]+ Read Aloud
> Allustan frowns as he surveys the battlefield from your hillside vantage. The smoke rising from the tower, the broken and crudely repaired door, the bodies left to rot—it all tells a grim story.
> 
> “I’d stay if I thought we could hold this line alone,” he says, voice low. “But this is no mere raid. The lizardfolk are dug in, coordinated... patient. If they strike again before reinforcements arrive, the keep may fall.” He glances at you, eyes sharp. “You can help them now. I can bring help in days. We each play the part we’re best suited to.”

The PCs might argue that [[Allustan|Allustan's]] spells could provide a significant help in fighting the lizardfolk, and if they ask him to stay, he appears tormented. He clearly loathes leaving the task of defending the keep to the PCs, but at the same time, common sense urges him to use the scroll to get help as soon as he can. If the PCs seem especially set against his leaving, his torment quickly changes to disappointment. He points out that the PCs have already faced more dangerous challenges than lizardfolk, and observes that if they don't think they can handle the problem themselves, perhaps they should consider a new line of work. In the end, [[Allustan]] leaves the PCs to their own devices at Blackwall Keep. It’s up to them to determine if the wizard leaves them as a friend or as something less.  If the PCs protest, Allustan’s expression tightens—torn between reason and regret.

Read aloud to the players, 
> [!note]+ Read Aloud
> “I didn’t ask you to chase the Triad. You did. And you prevailed. This... this is just another battle. If you’re not ready to fight it—” he sighs. “Then maybe I was wrong about you after all.” With that, he turns, producing the scroll from his robes. A soft wind kicks up around him as the magic flares. “If I’m right about the worms, this won’t be the last time we face something like this. Be ready.” Then, with a shimmer of air and arcane light, he vanishes.

## The Lizardfolk
There are thirty lizardfolk besieging Blackwall Keep, split into six groups. Four of these groups consist of five [[Lizardfolk Warrior|Lizardfolk Warrior's]]. The fifth and sixth groups each consist of four common lizardfolk and a special character (EL 6 for each of these last two groups). One of these special characters is a 4th-level warrior named Kushak, and the other is a 3rd-level druid named Shesht. Kushak is the leader of this attack, reporting directly to the aggressive and vengeful king of the tribe who is under the claw of Ilthane the black dragon. Kushak looks the same as the other lizardfolk present except he carries a metal shield rather than one made of wood or shell. The shaman, Shesht, is somewhat lazy and believes following the lizard king is the easiest way to power and comfort in the tribe. 

```encounter
name: Lizardfolk Basic Groups (4 total)
party: Age of Worms
creatures:
  - 5: [[Lizardfolk Warrior]]
```
- [ ] Low (75 XP) Level 5
- [ ] Low (75 XP) Level 5
- [ ] Low (75 XP) Level 5
- [ ] Low (75 XP) Level 5

```encounter
name: Kushak's Lizardfolk Group
party: Age of Worms
creatures:
  - 4: [[Lizardfolk Warrior]]
  - 1: [[Kushak]]
```
- [ ] Moderate (90 XP) Level 5

```encounter
name: Shesht's Lizardfolk Group
party: Age of Worms
creatures:
  - 4: [[Lizardfolk Warrior]]
  - 1: [[Shesht]]
```
- [ ] Moderate (80 XP) Level 5

Kushak knows if he succeeds in this raid he'll win the favor of the king, so he is determined to wipe out the soldiers and take their weapons back to arm his tribe. His warriors managed to capture four soldiers on their last sortie (including Marzena, the keep's battle mage) and have already sent them back to the Twisted Branch lair with one of his teams as a gift to his king; the captured humans are either to be kept as slaves or (more likely) eaten as food in the next few days. 

Kushak plans to wait until just after sundown and attack while there is still light enough for his warriors to see but not so much that the human defenders have an easy time spotting their advance. He knows if his people can again break down the keep door and hold that position, the humans will be trapped inside and easy pickings. If the evening attack fails, he directs his people to creep back into the marsh to retrieve simple barricades of wood and wet swamp grass which they'll use the next day as full cover while they approach the keep for a morning attack (the nightime absence of the lizardfolk is a good opportunity for the PCs to enter the keep). 

If severely wounded, an individual lizardfolk retreats to a safe distance but returns to fight again after regrouping, Normally they'd consider fleeing if the overall battle went against them, but Kushak is a hero to his people and he can convince them to fight even against poor odds (see The Battle, below, for more information on Kushak’s options if the fight goes against the lizardfolk). 

## The Soldiers 
The soldiers are worried. Of the normal garrison of 30 soldiers and officers, only 14 soldiers remain in able condition—three soldiers and the garrison mage have been captured, twenty-two soldiers are dead (including the garrison commander), and four are unconscious from their wounds. 

The surprise attack from the lizardfolk has taken its toll and now the soldiers are outnumbered; they fear they cannot hold out more than another day against their attackers before they're overrun (though they have enough supplies to last about a week), 

If they spot the PCs (even during battle) they shout for help, both for themselves and their kidnapped comrades, indicating the lizardfolk dragged the captured ones south into the marsh. Normally well-equipped, the soldiers happen to be short on arrows tight now and don't want to waste them on long-range shots, Message spells, flying familiars, and notes tied to arrows can help facilitate secret communication between the PCs and the trapped soldiers.

The soldiers normally wear leather armor but don chainmail when expecting battle; the lizardfolk raid initially caught them in their leathers but they've since had time to put on their chainmail. 

If the PCs attack the lizardfolk, some of the soldiers on the balcony fire arrows at the reptiles if they have clear shots but overall try not to draw javelin fire from the lizardfolk. 

[[Guard|Blackwall Keep Soldier]] (14) 
```encounter
name: Blackwall Keep Soldiers
party: Age of Worms
creatures:
  - 1: [[Guard|Blackwall Keep Soldier, Ally]]
```

## The Battle 
When the lizardfolk attack the keep, they try to remain close to the others in their five-person group, using their barricades to block arrow fire and perhaps launching a volley of javelins once they're close enough. Two groups try to break down the door, two more try to boost allies onto the tower balcony, with two (including Kushak’s and Shesht’s groups) remaining in reserve, Kushak doesn’t want to sacrifice all of his warriors for this task, and if ten are slain he orders them all to retreat to the Mistmarsh to consider whether or not to attack again later. He is content to wear down the soldiers over a series of shorter forays; depending on how many lizardfolk survive each wave he may manage three or more attacks, The lizardfolk are very courageous as long as Kushak is alive; they won't break morale while he survives unless they're reduced to ten or fewer warriors, They run to the marsh if he is slain and they have twenty or fewer warriors. Shesht uses his spells to aid and support his kin rather than directly attacking the soldiers, 

To make it easier to run the fight, treat each half of the keep as a separate battle, focusing on the side the PCs can interact with and assuming the other side is іп a stalemate (otherwise there are too many combatants to deal with and the battle slows to a crawl). 

If the PCs attack, one group from each task (door and balсопу) breaks off to deal with the new enemies; this keeps the encounter manageable for the DM and not too overwhelming for the PCs. Their primary goal is the keep and if the PCs don't appear to be a significant threat the overall force will continue to batter the keep door and plan to use the keep as shelter while retaliating against the PCs; in the face of a swift, strong attack they may maneuver to put one of the corral walls behind them or retreat into the Mistmarsh to make night raids on the PCs. 

If the lizardfolk get the door open, the ones at the door move in to fight the soldiers inside while Kushak and the other reinforcements move up the hill to take their position outside the door. This means there's a short interval where the outside of the door is unguarded and the PCs can move in before the reinforcements arrive—an opportunity for the PCs to get inside and help the soldiers. 

If the PCs are considering waiting out the siege, remind them of the kidnapped prisoners being dragged through the Mistmarsh; those unfortunate four can't afford to wait very long. 

If the PCs get inside the keep and can help defend it, the lizardfolk continue to make their intermittent attacks until either their numbers drop below the threshold of courage (20, or 10 if Kushak is present), they succeed in taking over the keep, or reinforcements arrive from Diamond Lake; normally this means about five attacks at most while the PCs are present (consisting of 5-7 encounters for the PCs with perhaps some extra difficulty at times because of two groups fighting the PCs at once). If the lizardfolk flee or retreat, they enter the Mistmarsh at the closest point and march back to their lair (later encounters at the lair include any surviving lizardfolk from the keep attack). 

Once PCs enter the keep and things settle down the defenders explain about the kidnapped soldiers if they haven't had a chance to do so already, When the reptiles broke open the door in the first attack, they knocked out and dragged away three soldiers and their battle mage, [[5-World/NPCs/Marzena]] (the PCs should recognize this name, as [[Allustan]] told them his friend’s name when he asked them to escort him here). The soldiers сап" leave the keep to go find them, even after the siege is over, so they ask the PCs to bring back their friends before they become lizard food. The soldiers don't have any information about where they might be, as there are several lizardfolk tribes and they can't tell them apart, but when last spotted the kidnappers were headed due south into the grassy area surrounding the Mistmarsh, so that's a start at least. 

If the PCs enter the basement they may discover areas A and B and the spawn of Kyuss waiting there (the major encounter in Part Three: Terror Below). If the PCs encounter the creature before they enter the Mistmarsh, it may escape or overpower them and attack the other soldiers; the combination of foes from within and without convince them to flee their posts and scatter into the hills, hoping that the lizardfolk won't catch all of them (and death at their hands is certainly better than being turned into an undead thing by the spawn). То keep this from happening (and to preserve Part Three of this adventure), subtly discourage the PCs from entering the basement; launch another lizardfolk attack when they try to explore, have the soldiers press them to rescue their kidnapped comrades as soon as possible for fear of being sacrificed, and so on.

The exterior of the keep and the first floor (accessed by the main door) is shown on the poster map included with this issue. The poster map uses miniatures scale (1 inch =5 feet) so you can use the poster as a map of the siege. 


```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: update-me
image: [[Blackwall Keep Map.png]]
height: 1400px
width: 50%
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

### Area 1: Main Hall 
> [!note]+ Read Aloud
> This entry area takes up most of the interior of the tower, giving the defenders plenty of room to maneuver should they need to repel invaders. Four doors and a flight of stairs lead out of this room. A small fireplace is in the southwest corner. 

During the siege, the soldiers try to keep at least three of their number here to hold the entry. 

A sturdy wooden door formerly protected the keep, but a couple of lucky hits by the lizardfolk broke it open. While the soldiers eventually managed to repel the lizardfolk that got inside and repaired the door by nailing a few planks to it, it's in much worse shape (treat as hardness 5, 30 hp, break 20 due to the previous damage to the door). The door is too large to repair with mending. 

### Area 2: Storage 
> [!note]+ Read Aloud
> This storage closet contains odds and ends like a broom, mallet, shovels, cooking pots, a bag of nails, and other miscellaneous gear needed for maintaining a small keep. 

There is nothing remarkable about these supplies. 

### Area 3: Cloak Closet 
> [!note]+ Read Aloud
> This small closet holds a dozen heavy cloaks suitable for hard rain or even snow. A few rolled blankets are on the floor. 

There is nothing unusual about this clothing. 

### Area 4: Dry Goods Storage 
> [!note]+ Read Aloud
> This small room contains shelves of jerked meat, three casks of water, and several barrels of grains and beans. A few small bottles of cheap wine are locked behind a simple cabinet with a lattice front. 

These supplies, if carefully rationed, can last the soldiers about a week. They normally refill their water casks with rainwater from rain barrels on the roof and supplement their food by hunting and trapping small game. The keys to the wine cabinet were on the garrison commander's belt, and before the PCs arrived a few of the more maudlin soldiers were considering drinking all the wine as they expected to die anyway. 

### Area 5: Corral 
> [!note]+ Read Aloud
> This small horse corral is enclosed by a wall made of wooden stakes, A reeking light riding horse lies dead in the open gateway, two others are dead inside. A water trough, food trough, and container of mash line the eastern wall, and a tarp covers three sets of tack, harness, and saddles. 

The lizardfolk killed the horses during the initial attack. The one in the doorway has been torn apart and partially eaten. 

### Area 6: Kitchen 
> [!note]+ Read Aloud
> This kitchen area has a cooking fireplace in the southwest corner, a long table stacked with clay dishes on the north wall, а washbasin on the east wall, and a water barrel in the northeast corner. Cooking pots hang on the walls and the center of the room has a short, broad barrel with handles, probably for scraps and garbage. 

This is a simple kitchen. The soldiers rotate cooking duties (though some of them are certainly better than others) 
and washing duties. 

### Area 7: Pantry 
> [!note]+ Read Aloud
> This cramped room has shelves with perishable goods, mainly fruit, some cheeses, and small jars of herbs. 

As the basement level is cooler than the entry floor, perishable foods last longer here than they would upstairs. Dry goods from area 4 are brought down as necessary for meals. 

### Area 8: Commander's Quarters 
> [!note]+ Read Aloud
> This room has a bed, storage chest, table, and chair. The table has a sheaf of papers, an inkwell and quills, and а small lamp. The place is kept very neat. A suit of chainmail hangs on one wall. 

This was the quarters of commander Garm, killed early in the raid. Like the other soldiers, Garm was wearing his leather armor when the lizardfolk attacked, which is why his chain armor hangs here. 

### Area 9: Mage’s Quarters 
> [!note]+ Read Aloud
> This room has a bed, storage chest, table, and chair. The table has a sheaf of papers, an inkwell and quills, and a small lamp. A tapestry showing a landscape with Ardentia City in the background hangs on one wall. The room is a little messy; the bed is unmade, clothes are spilling out of the storage chest, and many of the visible papers contain simple drawings, some of them risqué. 

This is Marzena’s room. She normally travels light except for spare clothes—all of her magic items are with her. As she’s a sorcerer she has no need for a spellbook—the notes on the table are just drawings, jokes she’s heard from the soldiers, and drafts of letters to friends and research contacts in nearby cities. Marzena is a laughing battle-hardened older woman with an open face, enjoying a relatively simple post in near-retirement. 

### Area 10. Soldier's Quarters 
> [!note]+ Read Aloud
> This cramped room has bunk beds, with flat storage chests underneath. Several hooks аге in the wall—the kind used to hang weapons and armor, 

The smaller rooms have two sets of bunk beds, the larger ones four. Some have suits of chain mail hanging on the wall, others have leather armor thrown haphazardly on the floor or bed (surviving soldiers changed into better armor as time permitted), 

### Area 11: Tower Second Floor 
> [!note]+ Read Aloud
> This octagonal room has three sets of bunk beds arranged near the center, leaving а five-foot-square gap to allow access to a small ladder leading to an open trap door in the ceiling, There are arrow slits in each wall. A door near the stairs leads to a narrow balcony with a crenellated wall. 

The bunk beds provide sleeping areas for six more soldiers. Because of their undesirable location near a high-traffic area, these beds normally go to the newest soldiers assigned to the keep. The balcony wall is a low obstacle, giving cover to anyone on the balcony but allowing those on the balcony to ignore cover effects against attacks outside the keep. 

### Area 12: Tower Third Floor 
> [!note]+ Read Aloud
> Like the previous floor, this room has three sets of bunk beds and a ladder in the middle of the room. Below the ladder is a trap door in the floor, above it is one in the ceiling. All eight walls have arrow slits. 

The ladder is positioned between the trap doors in such a way that if both are opened a person can easily climb from area 11 all the way up the roof (area 13), The trap door in the ceiling has a bar to secure the keep against invaders from the roof. 

### Area 13: Tower Roof 
> [!note]+ Read Aloud
> This octagonal roof has a parapet wall and a trap door in the floor. 

There is normally one soldier on duty \here keeping a lookout. If no soldier is present, the guards bar the trap door from area 12. 

### Location A: Secured Door 
Use the following description if the PCs haven't traveled to the lizardfolk lair in the Mistmarsh, and thus the spawn of Kyuss in area B hasn't realized its prison door is no longer a barrier. 

> [!note]+ Read Aloud
> This wooden door bears a simple large padlock securing it, though the lock is smashed and broken as if by some kind of club. It appears the door is also nailed shut to its frame. 

If the PCs haven't gone to the Twisted Branch lair, the spawn of Kyuss is still trapped in area B (or at least contained behind a door). If they open the door (which requires breaking it open or pulling all the nails, either of which alerts the spawn to their presence) the spawn is ready for them and attacks the first creature it sees. If it defeats the PCs or they retreat, it pursues them elsewhere into the keep until it finds easier targets (such as the common soldiers). 

If the PCs come to this area after dealing with the Twisted Branch lair, the spawn has figured out it can escape from its prison and has begun raiding the other levels of the keep for victims. Use the following description for this area under these circumstances. 

> [!note]+ Read Aloud
> This wooden door is ajar, its simple large padlock smashed and broken as if by some kind of club. Ragged marks around the edges of the door and a few bent and broken nails in the frame suggest it was once nailed shut, but whatever was behind it has broken out. 

![[image-3.png|right]]

### Location B: Spawn Room
If the PCs haven't traveled to the lair in the Mistmarsh, use the following description for this area, otherwise use the description given in Part Three of this adventure. 

> [!note]+ Read Aloud
> A flight of stairs leads down to a hallway carved out of packed earth and braced with planks, 

Two years ago the soldiers were working on an escape tunnel here. When their resident wizard turned into a spawn of Kyuss, they managed to trap him in the incomplete tunnel, shut the door, and lock it inside. After a few hard tries on the door it gave up trying to escape and settled itself in for a long wait. When one of the lizardfolk that got all the way into the keep broke the lock on the door, the spawn sensed something was different about its situation, but it hasn't yet tried to break open the door.

**Encounter Difficulty:**   
- [ ] Low (60 XP) Level 6

```encounter
name: Spawn Room
party: Age of Worms
creatures:
  - 1: [[Spawn of Kyuss]]
```

# Part 2: Into the Mistmarsh
The Mistmarsh is an area of wet ground, grassland, shallow streams, and strange hazards that rests in a bowl-shaped depression west of the Cairn Hills and [[Diamond Lake]]. The marsh is over sixty miles across at its narrowest point. It has no clear border, as it is surrounded by a fringe area of drier grassland. It is named for the harmless mist that lingers from two hours before sunrise to until midmorning, and again for several hours after sunset; the mist limits visibility and also seems to muffle sound. The waterways are either too shallow for boats or too infested with crocodiles. Small ponds are common but never very deep. The drier parts are muddy (often calf-deep on a human) аn occasional "islands" of mangaroo trees are really just great tangles of roots and branches that require climbing rather than walking. These factors make travel slow in the Mistmarsh, limiting exploration to its fringes except for dedicated adventurers or those with magical means of bypassing its obstacles. 

The most significant threats in the marsh are the warring tribes of lizardfolk, a pack of ghouls, crocodiles (including giant crocodiles), giant vermin, and cockatrices (rarely seen, but the many statues in the marsh attest to their presence). Blink dogs live in the swamp but avoid humanoid creatures. Clouds of insects are a constant irritation, and in the summer mosquitoes grow so thick as to discourage all but the hardiest traveler. The abundant hiding places for smaller creatures make the Mistmarsh a haven for small game, mainly birds, small reptiles, and wary mammals like boars and deer. 

The Mistmarsh is a daunting place, with many great dangers and enough natural hazards to slow most exploration to a crawl. The lizardfolk lair is 23 miles into the swamp. Fortunately it’s almost due south of the keep and the PCs are trailing a group of lizardfolk with prisoners, so even a party without a tracker can find it under these circumstances, though it takes longer. 

Most places in the Mistmarsh count as Difficult Terrain, though some places are deeper and count as Greater Difficult Terrain, In areas of shallow bog  movement is halved, and the DCs of abilities with the [[Move]] trait have their checks in the area increase by +2.  A character leading the PCs can make one DC 22 [[Skills#Survival|Survival]] check every four hours of travel to find the best path through the Mistmarsh and avoid serious obstacles; each successful check adds two miles to the normal distance traveled in that four-hour period. 

The lizardfolk do not follow an actual trail, though they do stick to the drier areas because they are carrying prisoners. Tracking the lizardfolk requires a DC 19 Survival check each mile traveled; tracking them forces the PCs to move at half speed or take a -4 penalty on their Survival checks. The morning and evening mists of the Mistmarsh add +2 to the DC. 

The lizardfolk stop to rest at night but have at least half a day's head start (6 miles plus the time PCs spend at the keep, if any), so unless the PCs push on through the night they won't be able to catch their prey before the lair. If the PCs do push on at night, roll for an additional night-time encounter (see below) and note that the Survival DC increases to 26 at night. 

Roll for encounters once per day and once at night using the following table. 
#### Mistmarsh Encounters
| **`dice: D100`** | **Encounter**                           |
| ---------------- | --------------------------------------- |
| 1-5              | `encounter: 5: Ghoul Soldier`           |
| 6-10             | `encounter: 1: Ghast, 4: Ghoul Soldier` |
| 11-25            | `encounter: 5: Lizardfolk Warrior`      |
| 26-45            | `encounter: 3: Crocodile`               |
| 46-55            | `encounter: 1: Ghoul Crocodile`         |
| 56-75            | `encounter: 6: Hunting Spider`          |
| 76-85            | `encounter: 1: Ogre Spider`             |
| 86-95            | `encounter: 4: Wroggi`           |
| 96-100           | `encounter: 1: Great Wroggi, 3: Wroggi`              | 

**Ghoul Soldiers:** This pack of ghouls is one of several haunting the Mistmarsh. The cunning creatures use tactics against their opponents, including ambushes (in particular they like to lay prone in pools of murky water, rising when enemies are in reach), 
- [ ] low (75 XP) Level 5

**Ghast and Ghouls:** As above, except the ghouls follow an even more cunning ghast. 
- [ ] low (75 XP) Level 5

**Lizardfolk:** These lizardfolk are not of the same tribe as those attacking the keep, and are investigating the intrusion of other lizardfolk through their territory. They'll aggressively attack any group they feel they can kill. 
- [ ] low (75 XP) Level 5

**Crocodiles and Spiders:** These creatures use normal tactics for their kind, waiting in the water to snatch and drown an opponent. 
- [ ] trivial (45 XP) Level 5 (Crocodile)
- [ ] low (60 XP) Level 5 (Ghoul Crocodile)
- [ ] trivial (50 XP) Level 5 (Hunting Spider)
- [ ] trivial (40 XP) Level 5 (Ogre Spider)

**Wroggi:** These creatures use pack tactics in an effort to take down the players. When only one creature is left it will attempt to flee.  If it is able to successfully escape, it will join (injured if necessary) the Great Wroggi encounter and the first time will be the actual Great Wroggi and not the non-combat encounter.
- [ ] low (60 XP) Level 5 (Wroggi)

**Great Wroggi:** The first time this encounter appears, the PCs find the acidified remains of some other dangerous swamp creature (any other creature on the table except the undead), evidence of Great Wroggi activity and something the players have never seen or heard of before. The PCs don't encounter the Great Wroggi until the second time the encounter is rolled. Optionally, the PCs always encounter the Great Wroggi on the return trip from the lair if they discovered the statues on the way in. 
- [ ] severe (105 XP) Level 5 (Great Wroggi)

> [!warning]
> **Players should be Level 6 at this point in the adventure!**

# The Twisted Branch Lair 
```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: twisted-branch-lair
image: [[Twisted Branch Lair.png]]
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

The tribe's lair is in а slightly elevated part of the swamp, built within and under an incredibly old grove of mangaroo trees. The entrance is a hard-to-find gap in the mangaroo root structure, with tunnels weaving through the roots and into the earth, even to the point of delving below the water level in the deepest parts. The trees are so green and saturated with water that they won't burn except with extreme effort; even a fireball only causes surface damage and some smoldering. Any largescale attack causes all able lizardfolk in the lair to spill out as a horde and swarm over the enemy forces responsible. 

Mangaroo roots and branches support the ceiling and walls of the lair, making it telatively easy to climb anywhere in the lair ([[Climb]] DC 20). However, most of the ceilings in the lair are no more than 7 feet high. Roots occasionally stretch over the floors, but the inhabitants try to cut them away to prevent tripping hazards (areas with many roots on the floor note this in the area description). Areas marked as stairs on the map are actually sloping hallways rather than true stairs. 

Water (whether from rain or condensation from the daily mists) trickles on the mangaroos and drains through the earthen walls, floor, and ceiling in the lair. It drips almost constantly inside and creates tiny puddles everywhere; the place is humid and mosquitoes buzz in most rooms (the scaly skin of the lizardfolk makes them immune to the bites). Some of the exterior walls of the rooms aren't earth but several feet of intertwining trunks and branches; this means that air circulates through the lair and you can’t suffocate its inhabitants just by plugging the obvious entrances. The noise of the dripping water, whistling air, the creaking of the mangaroos, and the acoustics of the irregular shapes make it difficult to hear or pinpoint sounds within the lair (add +4 to all [[Skills#Perception|Perception]] DCs within the lair), 

Some of these rooms—particularly along the southeastern end of the lair—are close enough to each other that despite the penalties on [[Skills#Perception|Perception]] checks, a loud or extended fight is almost certain to attract attention from neighboring rooms. This means that unless the PCs are careful they're likely to end up fighting a dozen or more creatures at once and may be overwhelmed. Stealth, ambushes, and silence spells can help keep the encounters manageable. 

Some of the rooms are close enough to the outer edge of the lair to let a little daylight filter in (this is noted in the room description), During the day these rooms are treated as if they had shadowy illumination. It's possible to cut through these narrower sections of tangled mangaroo; each is 5 to 10 feet thick rather than the 20 or more feet in other areas (hardness 5, hit points 5 per inch of thickness). All other rooms are dark at all times. The lizardfolk keep fires burning in some rooms and carry torches made of bundles of dried reeds when they need light.  The omnipresence of plant matter in the lair gives druids and rangers plenty of opportunity to use spells that rely on plants.

The lizardfolk patrol near their lair in pairs for 12-hour shifts, two pairs on patrol at any time, ranging out to about a hundred feet from the edge of the mangaroo grove. At night one of the harpies from area 4 watches over the outside from a perch in the mangaroo trees, using darkvision to see what the lizardfolk cannot. Careful PCs can eliminate these sentries quietly while they're away from the lair, reducing the number of lizardfolk within the lair (sentries come from any of the rooms marked 6). If one sentry patrol disappears, when the missing guards are noticed the leaders double the number of sentries on duty; if two patrols disappear the remaining lizardfolk hole up in their lair for a few days to consult omens and to see if anyone tries to invade (this of course is bad news for the human prisoners, who are soon eaten to preserve the tribe's food stores). 

Normally the lizardfolk would have 5-регѕоп hunting parties in addition to their patrols, but they have stocked up on food in anticipation of the raid of the keep, so they don’t need to hunt for at least four days. All of the lair’s rooms inhabited by lizardfolk have some amount of meat set aside for this time, usually deer or snakes but in some cases a small crocodile or an unlucky member from another lizardfolk tribe. 

Most of the lizardfolk in the lair are typical members of their kind. Exceptions are the lieutenant (area 7), shaman (area 8), and lizard king (area 9). All of the lizardfolk in the lair are adults (lizardfolk mature quickly, and the last two years the tribe's hatchlings haven't survived to adulthood), 

Unless the PCs caught up to the lizardfolk leaving the keep, the human prisoners are within the lair and are due to be sacrificed two per day starting the day after the PCs arrive. The sacrifice is a ritual performed (reluctantly) by the shaman in front of the tribe and culminates with the king eating part of the victim and sharing the meat with the rest of the tribe. The parts left over are fed to the tribe's pet otyugh. 

The early areas in this part of the adventure may seem like a simple and straight-forward lair raid on an aggressive tribe of monsters, but a few strange elements (the slight changes in the appearance of the lieutenant and lizard king, the worm-infected creature in area 6D, and the shaman's reluctant behavior) provide clues that something strange is going on, culminating in the presence of draconic kobolds and the black dragon egg in the hatching chamber. 

The lair is a dynamic place; the inhabitants don't simply wait in their rooms for the PCs to arrive. One or two creatures wander from one sleeping room to another about every 30 to 6o minutes, making it more likely the PCs (or the aftermaths of their battles) are discovered. 

```encounter
name: EncounterName
party: Age of Worms
creatures:
  - 5: [[Lizardfolk Warrior]]
```
- [ ] Low (50 XP) Level 6

## Area 1: Concealed Entrance 
> [!note]+ Read Aloud
> A thick bundle of mangaroo branches and roots almost completely covers this narrow entrance. The level hallway beyond is made of earth and roots. 

Finding this entrance requires a DC 20 [[Search]] check. Lizardfolk use this entrance at least once an hour to hunt tiny creatures in the vicinity of the lair, patrol, and so on, so PCs have the opportunity to discover the general area of the entrance without searching the entire exterior, The hourly hunting forays are for mice, large insects, tiny snakes, and other such creatures easily found within a hundred feet of the lair; larger hunting parties leave every few days for larger game, but with the arrival of the human prisoners they can put off such a hunt for a while. 

The roots and branches concealing this entrance are flexible, easily pushed aside to allow access to the tunnel. They drop back in place one a creature passes, so unless the PCs cut through them on the way in or out there is no way for the lizardfolk to know that anything is amiss. 

The first 20 feet of the hall receive filtered sunlight if it is light outside, enough to see perfectly well once the eyes adjust to the dimmer light (treat that part of hall as having a light source that illuminates 10 feet). Beyond this area it is dark and PCs must rely оп darkvision or their own lights. 

## Area 2: Alcove 
> [!note]+ Read Aloud
> A small alcove fills the southern end of a tunnel intersection. A few javelins and several wooden clubs decorated with shells are propped against the far wall of the alcove and a large clay pot holds what appears to be water. Mosquitoes buzz noisily. 

This alcove holds a few extra weapons for lizardfolk going on guard patrol or hunting. The water pot is partly to refresh anyone coming in or out but has a minor ceremonial purpose for some rituals (it is decorated with simple shapes—mainly eggs—representing important concepts in the lizardfolk religion). 

If the lizardfolk are on alert for attacks, one or two guards are posted outside this alcove, but the area is usually empty.

## Area 3: Compost Pile
> [!note]+ Read Aloud
> The stink of waste and decay fills this hall, and the air is thick with flies. A semisolid conical pile of rotting food and animal bones covers the entire floor in a small area. Mushrooms and moss grows in scattered patches on its outer surface. 

This is used as a small compost pile by the lizardfolk, and any character with [[Skills#Nature|Nature]], [[Skills#Lore|Lore: Farmer]], or [[Skills#Survival|Survival]] recognizes it as such—the рile's configuration is too regular to just be a garbage area, and shows signs of being raked. Though most of their garbage goes to the otyugh in area 5, the lizardfolk keep this area because it's more convenient to those living in the southeastern part of the lair, and because it provides a home for a pair of assassin vines kept as a guardian creatures by the tribe's shaman. 

**Encounter Difficulty:**   
- [ ] trivial (30 XP) Level 6

```encounter
name: Compost Pile
party: Age of Worms
creatures:
  - 2: [[Assassin Vine]]
```

The assassin vines aren't mobile (the druid trims their mobility vines оп a regular basis) and only have a reach of 10 ft. (the druid cuts longer vines), so they are forced to live on whatever the lizardfolk bring them. Though not intelligent, the druid has conditioned them with plant-affecting spells to not attack any lizardfolk who come near. They are still likely to attack any lizardfolk that actually touch them, so those leaving garbage for the compost pile do so in pairs and throw what they carry from a safe distance. The plants have no conditioning preventing them from attacking other creatures and welcome the opportunity to vent their rage (such as it is) on “safe” creatures.

### Tactics
The vines cling to the western wall above the compost pile. Because they are surrounded by mangaroo growth, they blends in well with their camouflage ability, and that same growth gives them plenty of useful material for their entangle ability. Because they cannot flee, the plants fights to the death. 

## Area 4: Harpy Nest
> [!note]+ Read Aloud
> This place stinks of bird droppings and the floor is covered with layers of white and gray avian waste. Several thick branches or roots grow horizontally here, and the scratches on them make it evident something large has used them for perches.

This room is close enough to the outer edge of the mangaroos that shadowy light filters in during the daytime. Unlike the other rooms in the lair, this room has a high ceiling (15 ft.) and a concealed exit near the ceiling leading outside, which the harpies use to get in and out of the lair. At night the harpies take turns hunting in the swamp and watching over the lair from several perches on its outer surface, so if the PCs come to this room at night both harpies are usually gone. 

**Encounter Difficulty:**   
- [ ] moderate (90 XP) Level 6

```encounter
name: Harpy Nest
party: Age of Worms
creatures:
  - 3: [[Harpy]]
```

The three harpies that live here are guardian pets of the lizardfolk. The reptiles give the harpies a safe place to sleep, tasty carrion to and occasional humanoid sacrifices to “play” with, and in return the harpies watch over the lair at night. Because the harpies have darkvision, they're much better night guards than the lizardfolk, and they are adapted to a nighttime schedule, waking around sundown and going to sleep a few hours after dawn. 

### Tactics
The unusual acoustics and other distracting noises of the lair mean that the if the harpies use their captivating song ability inside, it only reaches about 20 ft. beyond their room; creatures outside of this area have normal chances to hear the song but are not affected by its magic. The harpies speak Common and Draconic. 

> [!tip]+ Treasure
> Treasure: The harpies keep a small cache of treasure hidden here at the location labeled С on the map. This treasure can be discovered with a DC 20 Search check, and consists of 14 cp, 27 SP, 16 gp, three pieces of quartz worth 2 gp each, a dirt-encrusted [[3-Rules/Character Building/Equipment/A/Aeon Stone (Sprouting)|Aeon Stone (Sprouting)]], and a [[3-Rules/Character Building/Equipment/A/Arboreal Boots|Arboreal Boots]] made out of exotic red scaly leather. 
> 
> - [ ] gp::16
> - [ ] sp::27
> - [ ] cp::14
> - [ ] permanent::[[3-Rules/Character Building/Equipment/A/Aeon Stone (Sprouting)|Aeon Stone (Sprouting)]] [ilvl::6] [gp::220]
> - [ ] permanent::[[3-Rules/Character Building/Equipment/A/Arboreal Boots|Arboreal Boots]] [ilvl::5] [gp::160]

## Area 5: Garbage Room
> [!note]+ Read Aloud
> Surrounded by roots and earth, this room smells like а garbage pit built on a cesspool.  Puddles of fouled water are everywhere among the filth, and animal and vegetable matter is heaped about in low piles, some of it covered with bright spotted mushrooms, others being rolled into spheres by hand-sized beetles.

**Encounter Difficulty:**   
- [ ] trivial (30 XP) Level 6

```encounter
name: Garbage Room
party: Age of Worms
creatures:
  - 1: [[Otyugh]]
```

This is the tribe's garbage pit and also the home of their pet otyugh. The creature was captured when very young and raised by the tribe; now it's grown almost too big to get out of the lair. The otyugh rests under a heap of trash near the entrance to the room, leaving only its eyestalk exposed. It’s an eager creature and likes to immediately pick through whatever the lizardfolk bring it. It rears up and attacks any non-lizardfolk that come into the room or within reach. Unlike most of its kind, the otyugh speaks Draconic rather than Common. 

## Area 6A—6E: Lizard Lairs 
> [!note]+ Read Aloud
> This room has more than ten sleeping pallets of swamp grass and mud. Mangaroo roots twine all over the walls but the floors are otherwise clear. 

**Encounter Difficulty:**   
- [ ] low (60 XP) Level 6

```encounter
name: Lizard Lairs
party: Age of Worms
creatures:
  - 6: [[Lizardfolk Warrior]]
```

The configuration and inhabitants of these five rooms is essentially the same, home to several lizardfolk who attack апу “soft-skin” who dares to enter their lair. Each room is normally the sleeping area of ten to twelve lizardfolk, but many of the tribe were at Blackwall Keep so there are currently 6 lizardfolk staying in each of these rooms, The 4 patrolling lizardfolk are drawn from those staying in these rooms, so there are normally 24 lizardfolk spread among these five rooms at any particular time (4 rooms of 6 lizardfolk, 1 room is empty of lizardfolk). 

One of the lizardfolk in 6C is an unsuspecting host of an undead parasite. This creature swallowed a slow Kyuss worm (see sidebar) in a potion provided by the tribe's shaman (originating from IIthane) and is now hosting a growing colony of worms within his flesh. In a few days he'll succumb to the parasites and turn into a spawn of Kyuss, but if killed by the PCs he falls dead and one round later the desperate worms crawl out of his flesh and die on the floor. Any other lizardfolk that see the worms are horrified, remembering the loss of their eggs two years ago, and flee to tell the shaman and king what happened (to the point of ignoring the PCs). Depending on the circumstances of the infected reptile’s death (for example, if killed by a spell rather than a weapon), the other lizardfolk may blame the PCs for the worms, destroying any chance for a peace between the tribe and the PCs. 

A DC 22 [[Skills#Medicine|Medicine]] check reveals the infestation for what it is. [[Cleanse Affliction]] or a similar effect can save the lizardfolk, If the PCs cure him, any lizardfolk in the area are impressed enough with their actions to encourage the PCs to seek out the shaman Hishka to report their findings. 

> [!tip]+ Treasure
> Between all the lizardfolk there is 40 cp, 26 sp. Half of them carry an egg carved out of exotic hardwood, a religious fertility symbol worth 8 sp. 
> 
> - [ ] sp::122
> - [ ] cp::40

## Area 7: Lieutenant and Prisoners
> [!note]+ Read Aloud
> Four thick bundles of roots divide this room into two smaller areas. One large sleeping pallet covers much of the floor in the northern part and a half-eaten carcass of a man-sized snake lies in the southern part. 

**Encounter Difficulty:**   
- [ ] low (75 XP) Level 6

```encounter
name: Lieutenant and Prisoners
party: Age of Worms
creatures:
  - 1: [[Lizardfolk Warrior]]
  - 1: [[Kotabas]]
```

A large lizardfolk wearing armor made of spider-carapace and a normal-sized lizardfolk dwell here. The bigger one has a black tinge to the scales around his mouth. The larger armored lizardfolk is Kotabas, the lieutenant of the lizard king (area 9) and is utterly loyal to him. ike the king, he drank the alchemical dragon elixir provided by Шћапе and has unusual abilities because of it. The normal lizardfolk is the lieutenant’s mate and is loyal to him (while he lives, she will not leave his side); she uses flanking and the aid another action to augment him in combat. The lieutenant is a brute and enjoys bullying other creatures; if there are any Small PCs he preferentially attacks them, though he doesn't ignore larger threats just to pursue his cruelty. 

Two human soldiers captured from the keep are here, bound and unconscious. If the battle goes poorly for the lieutenant and his mate, they may threaten to harm the captives to convince the PCs to back off or offer the captive to the PCs in exchange for allowing the lizardfolk to retreat. The lieutenant is cruel enough that he may attack a captive just to taunt the PCs into action. 

## Area 8: Shaman and Prisoners
> [!note]+ Read Aloud
> This room is different from the others in the lair. Decorations made of wood and clay beads hang from the walls, with egg symbols the most common element. A small pit of stone and clay holds the remnants of a fire, and several open pots of herbs stand near the fire pit. A роо! of water surrounds a cluster of tree trunks in the center of the room. 

**Encounter Difficulty:**   
- [ ] low (75 XP) Level 6

```encounter
name: Shaman and Prisoners
party: Age of Worms
creatures:
  - 1: [[Giant Viper]]
  - 1: [[Hishka]]
```

> [!aside|no-icon]
> #### Slow Worms
> While the spawn of Kyuss carry green worms that rapidly convert other creatures into spawn, the obvious zombie-like nature of the spawn makes it hard for them to reach large population areas because they're easily spotted. Additionally, these worms cannot penetrate the hides of creatures with high natural armor. However, there is a different kind of worm—the “slow worm'"—that works more slowly and subtly, taking days or even weeks to convert its host and revealing its presence only at the last minute.  <br><br>Infection happens when a host creature swallows a slow worm. The worm begins to multiply within the host's body, slowly taking over healthy flesh. An Infected host must succeed аt а DC 15 Fortitude saving throw every day or lose 1d4 points of Constitution. When the creature’s Constitution reaches о, it dies and rises as a spawn of Kyuss 1d6+4 rounds later. Until the host becomes a spawn, its worms Cannot survive exposure to air; if the host dies from some other cause before the worms kill it, the worms crawl out of the dead host one round later and expire. <br><br>Slow worms can enter ап indefinite hibernation state if kept in liquid, awakening when they enter warm flesh, Worshipers of Kyuss are known to hide the worms in potions, wine bottles, and beer barrels, hoping to infect large numbers of victims with the worms and causing a horrible outbreak of spawn when the hosts succumb to the infection. If the worm is in a dark or opaque liquid or container, a creature drinking it must succeed at a DС 20 [[Skills#Perception|Perception]] check to realize they've swallowed something solid (the check is DC 10 if the worm is visible within the container), otherwise they are unaware of the infection. <br><br>Anything that kills or delays a normal spawn worm has the same effect on a slow worm. Other variants of Kyuss worms exist as well, including some capable of creating more powerful Spawn that retain their abilities from life in undeath, and others capable of creating the horrific creatures known as the worms that walk. 

A stooped lizardfolk wearing necklaces and bracelets of animal's teeth stands at the ready, a snake coiled nearby. In one corner of the room are two human prisoners—a male soldier and a female mage—unconscious and bound. The shaman, Hishka, is wary but not immediately hostile (unless the worm-infected lizardfolk in 6C is dead and witnesses told the shaman that the PCs are responsible for the worms), Hishka is one of the chosen few of Semuanya, a sterile hermaphrodite gifted with an unusually keen mind. The shaman is unhappy with the aggressive stance of the new king, believing that open hostilities against the much larger population of [[Ardentia City]] will only spur the humans to greater excesses of aggression against the lizardfolk tribes, but is at a loss as to how to remove the king from his position of power. 

Hishka believes that survival of their tribe (and the lizardfolk race) is crucial; despite any bloodshed the PCs have caused in the lair, the shaman wants to negotiate a peace, preferably one involving the PCs killing or chasing off the current king and his lieutenant. If the PCs agree to get rid of these aggressive leaders, Hishka hopes to convince the rest of the tribe to cease its raids for at least a month or two, hopefully long enough for the PCs to arrange a treaty with [[Ardentia City]]. Hishka doesn't know much of the ways of civilized folk, but believes that if the PCs can get them to agree in writing to leave their tribe alone, they'll honor it, Hishka speaks Draconic and a little bit of Common, and offers the soldier prisoner in exchange for an agreement to get rid of the current leaders, and the mage when the PCs have taken care of the problem. Hishka also accepts offers to have someone trustworthy guard their eggs, and can even be bribed if there's enough money involved (at least 200 gp worth, enough to relocate the tribe, make gifts to new allies, and so on). 

When the lizard king recognized that Marzena was a spellcaster, he broke her jaw and many bones in her hands to prevent her from using spells to escape; the shaman has tended her as best it could given the circumstances (she’s unconscious and due to be sacrificed in a few days anyway) but only time or healing magic can mend her bones. The shaman could cure her broken bones, but isn't brave enough to go against the king quite yet. 

If the PCs choose to attack, Hishka fights back sadly. A survivalist at heart, Hishka is willing to abandon its animal companion if such a sacrifice can guarantee escape (preferably toward area 10 and eventually to the egg chamber at area 12). A wise creature and a skilled priest, Hishka knows its value to the lizardfolk race is more important than dying at the hands of “soft-skins.” Even if everyone in this tribe dies, the shaman is sure it can find can find a place in another tribe. 

**Ad-Hoc Experience Award:** If the PCs negotiate a truce with Hishka, they gain experience as if they had defeated the shaman in combat. 

## Area 9: Lair of the Lizard King
> [!note]+ Read Aloud
> This large room has a raised throne-like area at the north end built out of wood and large animal bones; the ground in front of the throne is stained with old blood. A small pool of water to the west of the throne splashes with small fish. 

**Encounter Difficulty:**   
- [ ] difficulty (xxx XP) Level xxx

```encounter
name: Lair of the Lizard King
party: Age of Worms
creatures:
  - 1: [[Shukak]]
```

Reclining on the throne is a strong-looking lizardfolk with a mottled pattern of black scales and forward-sweeping horns. Quick as a flash of lightning, he leaps forward with claws extended and a snarl on his scaly lips when the PCs intrude in his throne room. 

This is Shukak, the “king” of the tribe. Captured young when his original tribe was slaughtered, he was raised as a slave in the [[Ardentia City]] Arena. He eventually escaped back to his native swamp, where Ilthaпе found him and whispered words of vengeance in his ear. The dragon steered Shukak to the Twisted Branch tribe, where he challenged and killed its leader. Coupled with the tribe's loss of its hatchlings two years ago, the Twisted Branch lizardfolk were easy to goad into an alliance with the dragon and the attack on the keep. Confronted by the PCs in his own lair, the “king” knows he must defeat them to maintain his status and the tribe's morale. Ilthane gave him а special elixir made of alchemically-treated dragon's blood and he has some atypical abilities because of it. 

Shukak knows that spellcasters are his most dangerous opponents and often the easiest to drop, so while his experience and pride urges him to deal with fighters, he goes after spellcasters first, then sneaky-looking rogue types, then all others. He makes as much noise as possible in order to draw assistance, taunt his foes (in Draconic and halting Common), and gain an audience for his prowess. He knows that without this tribe he loses the dragon's support, so he fights to the death. 

> [!tip]+ Treasure
> Shukak has stacked Marzena's gear in a small pile behind his throne, but has not yet had a chance to sort through it all to see what he likes. Her gear consists of a wand of [[fire ray]] (Rank 1), a +1 dagger, and a [[cloak-of-elvenkind|Cloak of Elvenkind]].  Note that Marzena will not be willing to part with her gear.
> 
> - [ ] permanent::[[Fire Ray|Wand of Fire Ray (rank 1)]] [ilvl::3] [gp::60]
> - [ ] permanent::[[Weapon Potency (+1)|+1 Dagger]] [ilvl::2] [gp::35]
> - [ ] permanent::[[cloak-of-elvenkind|Cloak of Elvenkind]]  [ilvl::7] [gp::360]

## Area 10: Submerged Tunnel 
> [!note]+ Read Aloud
> This tunnel slopes downward into an area of shallow water extending westward. The ceiling declines as well, and it’s possible the entire hall goes underwater farther ahead. 

The tunnel becomes completely submerged 40 feet beyond the start of the water and winds generally westward for 100 feet before fully emerging again shortly before area 11 on the Egg Chamber map. PCs must hold their breath and make DC 22 [[Swim]] checks to cross this area. 

> [!danger]+ Trap
> This section of tunnel is protected by several [[binding-snare|Binding Snares]]. The walls along the first 10 feet of the pool bear knotted leather cords tied to the roots marking the general area of the traps (DC 22 [[Skills#Perception|Perception]] check to notice the cords), though as the cords define a 10-foot stretch of water and the snares only fill half of that it's not a guarantee that strangers will recognize the actual dangerous areas. Because the snare is underwater, the [[Search]] DC to find it is 25 instead of the normal DC 22. The snare isn't configured to cause damage, just to slow it down long enough for the tribe to catch uр to it. 

```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: update-me
image: [[Egg Chamber.png]]
height: 900px
width: 50%
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


## Area 11: Kobold Guardians 
> [!note]+ Read Aloud
> A wall of stacked rocks makes up the southwest part of this room, and beyond the northwest end is another room with water on the floor. Six black-scaled kobolds mill about in this area appearing to be standing guard. 


![[Ilthane's Kobolds.png#cap#wmed#left\|Ilthane's Kobolds]]

**Encounter Difficulty:**   
- [ ] severe (120 XP) Level 6

```encounter
name: Kobold Guardians
party: Age of Worms
creatures:
  - 6: [[Kobold Egg Guardian]]
```

Six black-scaled kobolds stand guard in this area. The kobolds are “gifts” from Ilthane, stationed here to guard the lizardfolk eggs (ostensibly to protect them from intruders, but actually to keep the lizardfolk from interfering with Ilthane’s plans for the eggs). While not half-dragons, they are the result of several generations of tribe-slavery, selective breeding, and elixir use by Ilthane, and are superior to normal kobolds.

The draconic kobolds attack any non-lizardfolk who enter the area, as well as any lizardfolk who seem hostile or intent on moving the eggs. 

> [!tip]+ Treasure
> Іп а north corner of the room is a small, unlocked chest that contains four dark glass vials—[[healing-potion-(moderate)|Healing Potion (Moderate)]], each contaminated with a slow worm. The kobolds are under orders from Ilthane to not open the chest or use what's inside; it's intended as a trap for any creature that slays them. 
> 
> - [ ] consumable::[[healing-potion-(moderate)|Healing Potion (Moderate)]] [ilvl::6] [gp::50]
> - [ ] consumable::[[healing-potion-(moderate)|Healing Potion (Moderate)]] [ilvl::6] [gp::50]
> - [ ] consumable::[[healing-potion-(moderate)|Healing Potion (Moderate)]] [ilvl::6] [gp::50]
> - [ ] consumable::[[healing-potion-(moderate)|Healing Potion (Moderate)]] [ilvl::6] [gp::50]

![[Findings in the Egg Chamber.png|right]]

## Area 12: Egg Chamber

> [!note]+ Read Aloud
> This large chamber has a roof of intertwined mangaroo roots and trunks. Shallow water no more than a few inches deep covers the floor of the chamber, lapping at the bottom of hundreds of tiny pale leathery eggs. On the northегп end of the pool, looming over the other eggs like a malignant gargoyle, is a halfling-sized black egg. A wide hallway leads west over a low dirt embankment with three wooden chests on it and beyond to another watery area. 

This chamber holds all of the tribe's eggs, an unusually large number for a tribe this size. The black dragon IIthane offered to guard the eggs as a favor to the tribe, placed one of her own eggs here as a token of trust with the tribe, and dug the western tunnel to give herself easier access. 

If any lizardfolk come to this area while the PCs are here, they are extremely cautious about their eggs, going out of their way to not provoke the invaders to harm the eggs, but retaliating brutally if any damage occurs (+2 morale bonus on attack rolls and weapon damage), 

The eggs extend above the waterline and are easily spotted but are so numerous that any creature moving through the area must make a DC 18 [[Skills#Acrobatics|Acrobatics]] check each round they travel more than half speed; failure means they break `dice: 1d2` 1d2 eggs. Area attacks that deal 1 or more hit points of damage automatically kill all eggs in the affected area. 

**Encounter Difficulty:**   
- [ ] difficulty (xxx XP) Level xxx

```encounter
name: EncounterName
party: PartyName
creatures:
  - [[Kyuss Spawnling]]
```


Unbeknownst to anyone but the dragon, the black egg doesn't contain a growing dragon, but a large number of Kyuss worms provided by Dragotha. Iithane’s intent is that when the eggs hatch, the worms will bore through the black egg’s shell, swim through the water, and infect all of the hatchlings, giving Ilthane (and Dragotha) a small army of new Spawn of Kyuss to overwhelm the adults of the tribe and any other creatures that oppose them. 

The dragon egg has hardness 5 and 5 hit points. If broken open with weapons or weaponlike spells, the worms inside spill out and begin boring into the lizardfolk eggs, advancing at a rate of 5 ft. per round through the watery area (their progress is obvious, as they stir up the water when they move), Once a worm invades a small egg, the hatchling inside breaks free `dice: 1d4` 1d4 rounds later as a Kyuss spawnling, an undead swimming thing intent on killing all living creatures it discovers. The worms may slither up a character's legs, but since they aren't quite mature yet, they cannot transform larger humanoids into spawn of Kyuss and are ultimately harmless.

> [!aside|no-icon left]
> #### New Items
> - [[kyuss-worm-paste|Kyuss Worm Paste]]
> - [[kyussbane-oil|Kyussbane Oil]]

Other methods of attacking the dragon egg produce different effects. 
+ If the egg takes 10 or more points of cold damage, the worms inside it are [[Stunned]] for 1 round. Any cold damage applied to an area of water stuns the worms in that area for 1 round (delaying their movement) but also kills any lizardfolk eggs in that area. 
+ [[Cleanse Affliction]] kills all the worms in the egg but doesn't otherwise affect its shell. The caster can also direct the spell at the water, affecting a number of 5-foot squares equal to the caster level and killing all swimming worms within that area, though if used in this manner it doesn't affect worms that have already infected a hatchling (that requires a targeted use of the spell). 
+ If it takes 20 ог more points of fire damage, the egg and worms are destroyed, resulting in a wet green-brown paste which a character with the [[Alchemical Crafting]] feat can use to make 4 doses of Kyuss worm paste or Kyussbane oil (see sidebar) by spending one day per dose crafting the item. No gp expenditure is necessary to make either of these items as long as the character has the feat and the raw paste. A DC 20 Knowledge ([[Skills#Crafting|Crafting]], [[Skills#Arcana|Arcana]] or [[Skills#religion|Religion]]) check is enough for a character to recognize this quality of the burnt worms. 

> [!tip]+ Treasure
> Underwater near the dragon egg is a waterproof chest of oiled wood that is Ilthane's final contingency against the destruction of her horde of spawnlings. The box contains a fair amount of treasure intended to lull the PCs into a false sense of security about their victory. The chest contains 1300 cp, 240 sp, 53 gp, 2 pp, 6 rare antique silver trade bars wirth 25 gp each and six dark glass vials— 2 × [[juggernaut-mutagen-(moderate)|Juggernaut Mutagen (Moderate)]],  2 × [[healing-potion-(moderate)|Healing Potion (Moderate]], [[potion-of-quickness|Potion of Quickness]], [[invisibility-potion|Invisibility Potion]], each contaminated with a single slow Kyuss worm. The chest also contains a [[sturdy-shield-(lesser)|Sturdy Shield (Lesser)]], its surface etched with swirling wave patterns and rimmed in green-stained bronze.
> - [ ] pp::2
> - [ ] gp::203
> - [ ] sp::240
> - [ ] cp::1300
> - [ ] permanent::[[sturdy-shield-(lesser)|Sturdy Shield (Lesser)]] [ilvl::7] [gp::360]
> - [ ] consumable::[[juggernaut-mutagen-(moderate)|Juggernaut Mutagen (Moderate)]] [ilvl::3] [gp::12]
> - [ ] consumable::[[juggernaut-mutagen-(moderate)|Juggernaut Mutagen (Moderate)]] [ilvl::3] [gp::12]
> - [ ] consumable::[[healing-potion-(moderate)|Healing Potion (Moderate)]] [ilvl::6] [gp::50]
> - [ ] consumable::[[healing-potion-(moderate)|Healing Potion (Moderate)]] [ilvl::6] [gp::50]
> - [ ] consumable::[[potion-of-quickness|Potion of Quickness]] [ilvl::8] [gp::90]
> - [ ] consumable::[[invisibility-potion|Invisibility Potion]] [ilvl::4] [gp::20]

> [!warning]
> If the lizardfolk see the worms, their reaction depends on earlier events. If the infected warrior in area 6C is still alive, the lizardfolk realize that something is very wrong and the dragon is probably responsible. They try to keep the worms from getting to their eggs, charging into the egg chamber and carrying eggs to safety. If the PCs help in this endeavor, the lizardfolk gratefully accept their assistance and this act helps smooth relations in the aftermath of the worm battle. As the Kyuss spawnlings are unable to leave the water at this time, removing the eggs from the water makes them safe. 
> 
> If the lizardfolk believe the PCs are responsible for the worms in the body of the infected individual in 6C, the presence of the worms in the egg chamber is “proof” of the PCs’ guilt and they attack in a rage (+2 morale bonus on attacks and weapon damage). 
> 
> Given the number of lizardfolk eggs (more than 200), it’s very easy for this situation to grow beyond what the PCs can control. Moving eggs out of the water, establishing a solid barrier that the worms can't cross, or draining the water are the best options once the worms are unleashed, though using an area attack to damage all infested areas also works but kills all eggs in that area. If the spawnlings aren't destroyed, in about a week they transform into a walking form that can survive out of the water and become a dangerous menace in the swamp and eventually other nearby terrain under the direction of Ilthane. 

## Area 13: Large Submerged Tunnel 
> [!note]+ Read Aloud
> This wide tunnel quickly slopes downward and plunges underwater. The water is stagnant and covered with a layer of scum and tiny floating plants.

Ilthane uses this tunnel to access the egg chamber, though she hasn't been here in over a month. The tunnel runs northwest for about 200 feet and finally emerges at the bottom of a deep pool of water in the Mistmarsh. 

> [!warning]
> Advance the players to level 7.

# Part Three: Terror Below
> [!note]+ Read Aloud — Return to Blackwall Keep  
> As you approach the battered stronghold, it’s clear the battle is over—but the tension hasn't left. The smell of blood and smoke still clings to the air, and soldiers hurry from post to post with drawn weapons and anxious glances toward the tower. Something is wrong.
> 
> A nervous corporal meets you at the gate, face pale and voice shaking. “You’d better come inside,” he says. “It’s… it’s not over.” Inside the keep, the soldiers speak in hushed tones of something worse than lizardfolk. A door in the lower level—long sealed—was broken open during the initial assault. The pale young corporal, shifts nervously and gripping his weapon too tightly. “You should know... we’ve got a problem,” he says. “Something got loose down there.”
> 
> He explains: during the initial raid, one of the lizardfolk broke through a reinforced door on the ground floor—a door the soldiers had sealed long ago, not to protect treasure, but to keep something in. They thought it would die. They thought maybe they'd find a cure. “It used to be our friend,” the corporal says, voice cracking. “He changed. Turned into... something else. We didn’t have the heart to kill him. We just locked him away.” Now it’s loose. And it’s not alone. Two soldiers are missing—dragged into the basement. The others have heard sounds ever since: heavy footsteps, low moans, the scratching of bone on stone… and voices. The captives are still alive. For now. 
> 
> The soldiers have barricaded the basement door with spare wood and broken doors, but just looking at it you know it won’t hold forever. They say they’ve caught glimpses of the things through gaps—gaunt figures, flesh crawling with green worms, moving with chilling purpose. “They’re not mindless,” a sergeant mutters. “They wait. Plan. Take us one at a time.”  
> 
> Just then, a soft thump echoes from below. The barricade shudders slightly. The spawn are waiting.

When the PCs return to Blackwall Keep, they find the soldiers in a panic. It seems that one of the lizardfolk wo entered the keep on the initial raid reached the basement level and smashed the lock on a certain door in ground floor, thinking the extra security meant treasure was inside. The monster once locked behind the door is now free to roam the keep and has snatched two soldiers, dragging them into the basement. The soldiers have used spare wood and doors to barricade the entrance to the basement, but the creatures (they now so hear more than one creature moving around so they know the monster hasn't eaten the two captives) are strong enough that it’s only a temporary solution. They apologize to the PCs for not telling them about the threat earlier, but they still felt reluctant to kill the creature that was once their friend, and thought that by locking it away it would die or they would find a way to save him. As an example of the strength of their secrecy, even Marzena didn't know about the captive spawn, as she was told the last mage went mad and wandered into the swamp one night. The soldiers can describe what their friend looked like when he changed (a zombie-like creature with green worms crawling in his flesh) and the glimpses they've had since then confirm this appearance.

Three spawn now wander the basement level of the keep, forcing the soldiers to share space in the upper levels. The undead trio batter at the soldiers’ barricade every day, and when they break through they grab any soldier within reach, two or more of them grappling their captive, hauling him back to the basement to let the worms do their work (and giving the soldiers time to rebuild the barricade). This shows the monsters aren't mindless zombies and use tactics. Like all spawn created recently in the service of Ithane and Dragotha, their objective is to multiply rather than kill, so they snatch opponents one at a time rather than trying an open battle where potential prey may be killed. 

**Encounter Difficulty:**   
- [ ] severe (120 XP) Level 7

```encounter
name: Returning to the Spawn Room
party: Age of Worms
creatures:
  - 3: [[Spawn of Kyuss]]
```
[[spawn-of-kyuss|Spawn of Kyuss]]
Reinforcements from Diamond Lake arrive two days later. Soldiers march under a weathered banner, and with them comes a sealed letter bearing Allustan’s personal sigil.

Read Allustan's letter to the players, 
> [!note]+ Read Aloud
> **To my trusted allies—**
> 
> I regret I could not return in person. Events in Diamond Lake have demanded my attention. I fear we are on the edge of something vast and terrible. Please escort Marzena to Diamond Lake at once. Her knowledge of the worms may be critical. With her insights—and your reports—I hope to uncover a path forward. I have begun corresponding with a colleague in Ardentia City, a sage named Eligos. If anyone can divine the true nature of what we’re facing, it’s him. Once we’ve spoken with Marzena, I’ll arrange for you to meet him. Until then—stay alert. This is no longer about cults or tombs. It is about what comes next.
> 
> —Allustan

# Concluding the Adventure
When the PCs bring [[Marzena]] to [[Allustan]], he is grateful for their help and eager to hear the news of their most recent adventures. [[Marzena]] tells [[Allustan]] what's she's heard about green worms in the Cairn Hills, but unfortunately her news offers little new information apart from confirmation that spawn of Kyuss are increasing in number throughout the Cairn Hills. This information and the PCs’ report convinces [[Allustan]] that there is something larger going on, and he tells the PCs about an “old friend” in [[Ardentia City]], a sage named [[Eligos]] who knows a great deal about strange monsters. Their next step is to visit [[Eligos]] in [[Ardentia City]] and share Allustan's compiled notes and their own experiences. Armed with this information, the sage ought to be able to determine what sort of threat the green worms represent to the region and how it can be countered. Note that if the PCs agreed to talk to [[Ardentia City]] officials on behalf of [[Hishka]], the need to meet [[Eligos]] gives them a convenient excuse to travel there and arrange for a treaty between [[Ardentia City]] and the lizardfolk of the Mistmarsh. 

[!note]+ Read Aloud — The Sage's Warning  
> Allustan listens with growing unease as Marzena recounts her findings—villagers whispering of the dead that won’t stay dead, livestock bloating with green worms, and pale figures watching from the swamp’s edge with glassy, unblinking eyes.  He exhales slowly, setting his teacup aside, and leans forward, voice low.
> 
> “This… this is worse than I feared. The spawn are multiplying, yes—but the pattern’s wrong. This isn’t just chaos spreading—it’s deliberate. Directed.”
> 
> Rising from his chair, Allustan opens a drawer and retrieves a leather scroll case, worn smooth with age. “You must travel to the Ardentia City. Seek out a sage named Eligos. An eccentric man, but brilliant—and discreet. He moves in circles where even I dare not tread. He’ll know what to look for… and who might be pulling strings behind this.”
> 
> He hands you the scroll case. “Tell him everything—the Cairn, the cult, the worms, the Ebon Aspect. Especially the worms.” 
> 
> He glances toward the window, then lowers his voice further. “And be careful in the Ardentia City. Not all dangers wear claws and rotting flesh.”

# Epilogue: Back Through the Mistmarsh
The Mistmarsh is an area of wet ground, grassland, shallow streams, and strange hazards that rests in a bowl-shaped depression west of the Cairn Hills and [[Diamond Lake]]. The marsh is over sixty miles across at its narrowest point. It has no clear border, as it is surrounded by a fringe area of drier grassland. It is named for the harmless mist that lingers from two hours before sunrise to until midmorning, and again for several hours after sunset; the mist limits visibility and also seems to muffle sound. The waterways are either too shallow for boats or too infested with crocodiles. Small ponds are common but never very deep. The drier parts are muddy (often calf-deep on a human) аn occasional "islands" of mangaroo trees are really just great tangles of roots and branches that require climbing rather than walking. These factors make travel slow in the Mistmarsh, limiting exploration to its fringes except for dedicated adventurers or those with magical means of bypassing its obstacles. 

The most significant threats in the marsh are the warring tribes of lizardfolk, a pack of ghouls, crocodiles (including giant crocodiles), giant vermin, cockatrices (rarely seen, but the many statues in the marsh attest to their presence) and now the spawn of kyuss. Blink dogs live in the swamp but avoid humanoid creatures. Clouds of insects are a constant irritation, and in the summer mosquitoes grow so thick as to discourage all but the hardiest traveler. The abundant hiding places for smaller creatures make the Mistmarsh a haven for small game, mainly birds, small reptiles, and wary mammals like boars and deer. 

Most places in the Mistmarsh count as Difficult Terrain, though some places are deeper and count as Greater Difficult Terrain, In areas of shallow bog  movement is halved, and the DCs of abilities with the [[Move]] trait have their checks in the area increase by +2.  A character leading the PCs can make one DC 22 [[Skills#Survival|Survival]] check every four hours of travel to find the best path through the Mistmarsh and avoid serious obstacles; each successful check adds two miles to the normal distance traveled in that four-hour period. 

Roll for encounters once per day and once at night using the following table. 
#### Mistmarsh Encounters
| **`dice: D100`** | **Encounter**                           |
| ---------------- | --------------------------------------- |
| 1-5              | `encounter: 1: Spawn of Kyuss`           |
| 6-10             | `encounter: 2: Spawn of Kyuss` |
| 11-25            | `encounter: 3: Spawn of Kyuss`      |
| 26-55            | `encounter: 4: Ghoul Crocodile`         |
| 56-75            | `encounter: 2: Giant Tarantula`          |
| 76-85            | `encounter: 2: Ogre Spider`             |
| 86-95            | `encounter: 4: Wroggi`           |
| 96-100           | `encounter: 3: Great Wroggi`              | 

**Spawn of Kyuss:** Since first traveling to Blackwall Keep, the spawn of kyuss have continued to spread throughout the marsh. They'll aggressively attack any group they feel they can kill. 
- [ ] trivial (40 XP) Level 7 (Single)
- [ ] moderate (80 XP) Level 7 (Double)
- [ ] severe (120 XP) Level 7 (Triple)

**Crocodiles and Spiders:** These creatures use normal tactics for their kind, waiting in the water to snatch and drown an opponent. 
- [ ] low (60 XP) Level 7 (Ghoul Crocodile)
- [ ] low (60 XP) Level 7 (Giant Trantula)
- [ ] trivial (40 XP) Level 7 (Ogre Spider)

**Wroggi:** These creatures use pack tactics in an effort to take down the players. When only one creature is left it will attempt to flee.  If it is able to successfully escape, it will join (injured if necessary) the Great Wroggi encounter and the first time will be the actual Great Wroggi and not the non-combat encounter.
- [ ] low (45 XP) Level 7 (Wroggi Elite)

**Great Wroggi:** The first time this encounter appears, the PCs find the acidified remains of some other dangerous swamp creature (any other creature on the table except the undead), evidence of Great Wroggi activity. The PCs don't encounter the Great Wroggi until the second time the encounter is rolled. Optionally, the PCs always encounter the Great Wroggi on the return trip from the lair if they discovered the statues on the way in. 
- [ ] low (50 XP) Level 7 (Great Wroggi)

On the second day of their journey back to Diamond Lake read the following to the players,
> [!note]+ Cutscene — The Eye That Watches
> Far from Diamond Lake, deep within the sprawl of an unknown city, a figure walks alone beneath the glow of burning lanterns. The night air hums with magic and menace. In a quiet alley behind a shuttered apothecary, a door opens—not with a creak, but a whisper—and a robed figure slips inside. They pass through silence and shadow until they enter a chamber lined with stone mirrors. As the figure removes their cloak, their features melt away, revealing not a face… but a blank slate of glistening skin.
> 
> The mirrors shimmer. One by one, other reflections begin to shift—their watchers stepping forward from hidden nooks. They speak without sound. Then, all freeze as a single presence enters the room. You do not see it—you feel it. A weight. A hunger. Something ancient and wrong. A voice slides into their minds, oily and precise.  “They are coming. The ones who silenced the Triad. Watch them. Learn them. Become them.”
> 
> The strange faceless creatures bow their heads. One glances into a mirror—now reflecting a perfect likeness of one of the PCs. The voice returns. “Make ready the hall. Let them see only what I wish them to see.”






























