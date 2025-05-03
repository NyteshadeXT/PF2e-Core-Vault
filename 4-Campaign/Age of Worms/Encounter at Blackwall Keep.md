---
tags:
  - "#Adventure"
art: zz-Attachments/PlaceholderImage.png
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
In the first two adventures of the Age of Worms Adventure Path, the PCs met and befriended a local wizard named [[5-World/NPCs/Diamond Lake/Allustan]]. Dubbed “the smartest man in Diamond Lake,” [[5-World/NPCs/Diamond Lake/Allustan]] took a keen interest in [[the Whispering Cairn]] after the PCs discovered that it was a tomb for the ancient Aetherial Wardens.  Allustan is keenly interested in exploring the cairn himself, but first, he needs to consult with an old friend in Blackwall Keep. He asks the PCs to accompany him west as an escort; the road along the Mistmarsh’s edge is unsafe, even fora powerful wizard. 

The PCs arrive at Blackwall Keep to find over two dozen lizardfolk assaulting it. The PCs must battle to rescue the survivors in the keep and repel the lizardfolk in successive attacks. Once the keep is secure, the surviving guards tell them several soldiers (including [[5-World/NPCs/Diamond Lake/Allustan|Allustan's]] friend) were carried off and need to be rescued, [[5-World/NPCs/Diamond Lake/Allustan]] urges them to free the captives, while he uses an emergency scroll of teleport to report the news to the commander of the [[Diamond Lake]] garrison and ask for reinforcements to be sent south. 

The trek to the lizardfolk lair takes more than a day, but the numerous lizardfolk leave a relatively easy trail even through the swamp. The lair is large and partly submerged, and the lizardfolk defend it vigorously. The PCs learn of a schism within the lizardfolk tribe, and of the alliance between the lizard king and the black dragon Ilthane; and by defeating the corrupt king and rescuing the tribe's eggs from a terrible fate the PCs can secure the cooperation of the Mistmarsh tribes and rescue the prisoners. 

Returning to the keep with the freed soldiers, the PGs find the survivors at the keep are terrified of a creature in the basement that has been snatching them one by one. The PCs must defeat this final enemy before its undead corruption spreads. 

## Adventure Hooks
This adventure starts with Allustan contacting the PCs. He tells them that he has completed his study of the artifacts they found in the Whispering Cairn. He believes the glyphs on the objects are an ancient dialect of Sussuran known as Auran, the language of elemental air. 

He explains that some of the tombs in the Cairn Hills are thought to contain the graves of the Wind Dukes of Aaga, great and valorous beings of flesh and air who served Law in the primordial times before history. The Wind Dukes battled an evil entity known as the Queen of Chaos, defeating her with an artifact which shattered and is now known as the Rod of Seven Parts, Even children know of this legendary battle on the Fields of Pesh, thought by some to lie in the distant north. All of these clues have Allustan greatly interested in the Whispering Cairn, and he would like the PCs to tell him its location so he may study it further.

Before he can make that visit, however, he has an appointment he must keep. Marzena, a battle mage of the Free City assigned to Blackwall Keep at the northern edge of the Mistmarsh, is an old friend of Allustan and sent him a message about reports of strange green worms in the Cairn Hills. If the PCs have told Allustan about the green worms, he points out Marzena’s message as a possible tie to that mystery. Allustan asks the PCs to escort him to Blackwall Keep, as the Mistmarsh is a dangerous place and monsters have been known to raid outlying farms. 

# PART ONE: To Blackwall Keep
This adventure assumes that the PCs begin in Diamond Lake. Give them time to tie up any loose ends from their previous adventure, identify magic items, brew potions and write scrolls, and otherwise recover from their ordeals under Dourstone Mine. If any of the Eventually, Allustan gathers the PCs for the journey east. Although he has a scroll of teleport, he prefers to keep it in reserve for emergencies and instead plans to travel on horseback to Blackwall Keep, The road to the Keep is 18 miles east through the Mistmarsh along а trail the latter parts of which are hilly. Roll for encounters once per day on the eastbound trip using the following table. Once a particular group is encountered it can't be encountered again (if that encounter is rolled a second time, no encounter occurs that day). 

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

## Blackwall Keep

As the PCs and [[Allustan]] cover the last stretch of the southbound trail, they notice an increase in the number of flies and the smell of a battle—smoke and blood. Earlier this morning a large number of lizardfolk surrounded and attacked Blackwall Keep. Both sides inflicted casualties, and by the time the PCs arrive the lizardfolk have pulled back, regrouped, and are preparing for their next sortie against the keep. 

The hilly terrain means it's possible for cautious characters to get close enough to see the keep without being spotted by its residents or attackers (the lizardfolk are focused on the keep rather than the trail). If they do, they can secure a good view of the keep and its current situation. The region surrounding the keep is presented on the poster map provided with this issue. 

The keep itself is built out of black stone and consists of a single ground floor with a tower. The entire ground floor is buried under a false hill, and all that is visible is the tower itself. The door to the keep (visible only from the south side) looks like it has been broken open and hastily repaired. On the level above the door a five-foot balcony extends outward, giving the defenders a good vantage point and making it harder for invaders to enter the tower by climbing the walls. 

Large sharpened wooden stakes jut out of the hillside, pointing away from the keep (toward any potential attackers). Any creature entering a square with one of these stakes at normal speed must succeed at a DC 10 Reflex save (DC 15 if the creature is running or charging) or take 1d6 points of piercing damage. A creature may automatically pass through the square safely if they spend 2 squares of movement to pass through and they are not running or charging. 

Next to the keep is a stockaded horse 
corral, partially embedded in the false 
hill. The doors to the stockade are open 
and a dead and partially dismembered 
horse is in the doorway (all three horses 
assigned to the keep are dead within the 
corral, killed early by the lizardfolk to 
prevent escape or messengers). 

Ifthe PCs watch, they see eight groups 
of five lizardfolk are arranged in strate- 
gic places around the keep, using bushes, 
large rocks, and dead trees as cover. Each 
has a club, large shield, and at least one 
javelin. Some of them are eating horse- 
meat, and at least one is eating a dead 
human soldier. Three dead lizardfolk are 
out in the open near the keep, attracting 
flies. A hundred yards beyond the most 
distant ground of lizardfolk is a broad 
swath of grassland, and beyond that is 
the Mistmarsh. It is impossible to reach 
the keep without passing the lizardfolk, 
and without the use of magic it seems a 
certainty that at least one of the lizard- 
folk will see anyone attempting to reach 
the keep, as there are no hiding places 
that lead all the way up to the keep. 

If the PCs charge the keep, they have 
to deal with all of the lizardfolk as a 
large group. Barring a few lucky fire- 
balls or something similar, the PCs can't 
win—twelve normal lizardfolk are EL 8, 
a tough challenge for sth-level PCs, and 
if fighting thirty such creatures could 
be measured accurately on the EL scale, 
they'd be at least an EL 11—certain death 
barring a freak combination of rolls in 
the PCs’ favor. If they want to defeat 
the lizardfolk, their best bet is to try to 
tackle them one group at a time, either 
in ambush-and-run raids or while the 


lizardfolk are attacking the keep and not 
able to reinforce each other (killing the 
leader may also break their morale and 
convince them to retreat). Alternately, 
the PCs may try to bypass the lizardfolk 
and get into the keep to help the soldiers. 
Either way, Allustan tells them they need 
to help the soldiers immediately while 
he uses his scroll of teleport to return to 
Diamond Lake and get reinforcements 
from the commander of the garrison 
there. It takes some time for Allustan to 
convince the garrison to send reinforce- 
ments, and even more time for them to 
organize and set out. They'll arrive at 
Blackwall, on foot, in 1d4+2 days. 

The PCs might argue that Allustan’s 
spells could provide a significant help 
in fighting the lizardfolk, and if they ask 
him to stay, he appears tormented. He 
clearly loathes leaving the task of defend- 
ing the keep to the PCs, but at the same 
time, common sense urges him to use 
the scroll to get help as soon as he can. 
Ifthe PCs seem especially set against his 
leaving, his torment quickly changes to 
disappointment. He points out that the 


www.G 


PCs have already faced more dangerous 
challenges than lizardfolk, and observes 
that if they don't think they can handle 
the problem themselves, perhaps they 
should consider a new line of work. In 
the end, Allustan leaves the PCs to their 
own devices at Blackwall Keep. It’s up to 
them to determine if the wizard leaves 
them as a friend or as something less. 



