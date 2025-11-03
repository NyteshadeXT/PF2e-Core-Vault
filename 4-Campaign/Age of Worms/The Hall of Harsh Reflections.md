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

When Raknian learned, through an ally hidden in Diamond Lake, that those responsible for the cult's destruction were on their way to Ardentia City, he breathed а sigh of relief. Far too busy with preparations for the upcoming Champion's Games to deal with the upstarts himself, Loris contacted Zyrxog, a mind flayer living beneath the city streets and an old associate of the arena master. Loris tasked Zyrxog with destroying the PCs and recovering any missing clues they might have concerning the cult's nefarious plot.

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

The journey is not without peril. The roads are not as safe as they once were, with bandits and worse prowling the night. The PCs likely pass several patrols, groups of traders or farmers, and gaggles of pilgrims on the road. There's a 10% chance of a dangerous encounter occurring—make two checks per day (one during the day and one at night). If the PCs neglect to take appropriate precautions when they set up camp (setting guards or finding a safe place to camp with a DC 23 [[Skills#Survival|Survival]] check) the chance of a night encounter increases to 20%.

#### Encounters on the Road
| **`dice: D100`** | **Encounter**                  |
| ---------------- | ------------------------------ |
| 1-35             | No Encounter                   |
| 36-45            | `dice: 2d6` Religious Pilgrims |
| 46-55            | `dice: 2d4` Gnome Traders      |
| 56-65            | `dice: 2d6` Halfling Farmers   |
| 66-75            | `dice: 2d6` Dwarf Crafters     |
| 76-85            | `encounter: 2: Legbreaker`     |
| 86-90            | `encounter: 4: Orc Rampager`   |
| 91-95            | `encounter: 2: Tendriculos`    |
| 96-100           | `encounter: 2: Karkadann`      | 

**Dwarf Crafters:** These dwarves are carting a shipment of metal tools to [[Ardentia City]]. Each dwarf is a [[3-Rules/Bestiaries/NPC Core/M/Merchant]] and carries a bag of goods. They're willing to sell their goods on the road if the buyer seems reputable, and defend themselves and their goods if attacked, but they are not soldiers and would rather be robbed than killed. 

**Gnome Traders:** The gnomes are returning from [[Ardentia City]] after bargaining for exotic goods. They're interested in buying small gems and pieces of jewelry, and have minor alchemical items (25 gp or less) for sale. Each is a [[3-Rules/Bestiaries/NPC Core/M/Merchant]]. As with the dwarves, they'll fight to protect their property but run away if they think odds are they'll be killed. 

**Halfling Farmers:** These [[3-Rules/Bestiaries/NPC Core/F/Farmer]] have bags of herbs and pipeweed they're bringing to market. They don't like to trade on the road and only do so if there is a halfling PC. They run away if attacked. 

**Religious Pilgrims:** These devout worshipers of Aegis are on their way to Diamond Lake for a religious holiday. Each is a the equivalant of a [[Pilgrim]] except for the leader, who is a [[Acolyte of Pharasma|Acolyte of Aegis]]. The pilgrims subscribe to the militant doctrine of Diamond Lake's church of Aegis, and see any interaction with strangers as a chance to gain new converts. 

**Legbreakers:** These ruffians are [[Legbreaker]] humans or half-orcs and are trying to collect “toll money” from people on the road. They can be cowed by a show of force or intimidation, and flee combat if their opponents appear to have any skill. 
- [ ] low (60 XP) Level 6

**Orcs Rampagers:** These savage raiders only attack at night, preferably when most or all of their opponents are sleeping. They are cautious and usually do not attack well-armed or well-guarded targets unless they look wealthy. 
- [ ] low (60 XP) Level 4

**Tendriculos:** These creatures lurk on the side of the road appearing as little more than a mound of tangled vines. It strikes with terrifying speed, attempting to swallow prey whole before they can react. Though mindless, it’s drawn to movement and sound, often lurking near well-traveled paths or grazing herds. Survivors speak of sudden silence followed by thrashing greenery—and then nothing at all. 
- [ ] moderate (80 XP) Level 7

**Karkadann:** These solitary, territorial beasts roam the open plains, drawn to the scent of blood and the sound of battle. They charge without warning, targeting the largest or loudest creature in sight. Though not inherently malicious, they are easily provoked and will defend their range with devastating force. Travelers who hear distant thunder on a clear day often know too late that a Karkadann is near.
- [ ] moderate (80 XP) Level 7

## Part 1: Welcome to Ardentia City
![[Entrance to Ardentia.png]]

> [!note]+ Read Aloud
> The path before you shimmers like solid light—an immense crystalline bridge stretching across the open air, its surface humming faintly beneath your steps. Far below, the fractured clouds churn in restless layers of violet and gold, while far above, sleek airships glide lazily between spires that pierce the sky. Ahead, the city rises in a dazzling cascade of towers and mage-lit citadels, their runes glowing softly in the twilight like constellations inverted upon the earth.
> 
> At the far end of the bridge stand the gates of Ardentia: massive doors of silver-veined stone flanked by colossal statues whose eyes flicker with warding light. Before them waits the Luminous Vanguard—sentinels in crystalline mail, their polished armor alive with inner light. Their tabards bear the radiant sunburst of their order, and though their discipline is absolute, their stares seem sharper than the steel they carry.

The line to enter Ardentia stretches ahead—merchants with laden carts, scholars herding floating stacks of books, seekers hauling cracked relic cases. Every so often a sharp word or flare of magic draws attention, and the Vanguard reacts instantly, dragging offenders aside for questioning. While waiting, the party notices unease ripple through the crowd: a pair of identical merchants screaming accusations of imposture before both are shackled and led away, or a weeping child insisting her father’s voice _sounds wrong_. The guards pay no mind to explanations; order is all that matters.

> [!note]+ Read Aloud
> As you reach the gate, a Vanguard officer steps forward. His helm catches the glow of the crystalline bridge, and his voice is clear and commanding:
> 
> “Halt. You stand before Ardentia, jewel of the Highlands. State your names, your charter if you have one, and the purpose of your visit. Be warned—this city tolerates no deceit.”

The officer carefully records their names, purpose, and affiliation, then gestures for an inspection of possessions. This is not a casual search: the Vanguard check for contraband such as poisons, illicit alchemy, or unstable crystals, but they are also highly suspicious of unusual relics—especially the worm in the jar, strange diadems, or any item radiating disruptive magic. Divination wards shimmer faintly as they work, though they do not always return clear results; the officers frown and record notes, muttering about “false echoes.”

If the PCs lack an Adventuring Charter, the guards advise that they will need one soon—without it, they cannot legally sell or transport magical relics within the city. This foreshadows dealings with the Arcane Exchange Consortium.

Though the Vanguard project impartiality, their intensity borders on paranoia. A DC 20 [[Sense Motive]] reveals that their questioning is harsher than usual. A recent spate of “impostors” has left them shaken, and even the disciplined Vanguard cannot fully conceal it.
Once they're inside the Ardentia City, read or paraphrase the following to the PCs.

> [!note]+ Read Aloud
> After the long inspection, the gates part with a low hum, and the streets of Ardentia stretch out before you. The cobbles gleam faintly with embedded crystal shards, worn smooth by centuries of traffic. The air is alive with sound: the creak of wagons heavy with enchanted goods, the cries of hawkers selling everything from bottled lightning to skyfruit, the distant thunder of spellfire echoing from practice yards.
> 
> Floating familiars dart overhead, carrying parcels and scrolls, while enchanted signboards shimmer with runes promising wonders within. Spices and incense perfume the air, but the tang of ozone from everburning crystal lanterns undercuts the warmth.
> 
> The streets pulse with life—humans, elves, dwarves, and stranger folk alike—but beneath the bustle runs a current of unease. A merchant suddenly hushes mid-sale, as if realizing he no longer remembers what he was saying. Two guards exchange sharp words about who gave the day’s orders. And above it all, the spires of the Conclave gleam like watchful eyes, silent and unwavering.

The following two encounters occur while the party travels between various locations on the streets of the [[Ardentia City]]. They can be used any time during the adventure, and are designed to breathe life into the urban environment and fill in the gaps during slow periods.

### Event 1: Parade of Thieves
While making their way through Ardentia, the PCs find their progress blocked by a parade of street performers and a small menagerie making its way down the street, A large crowd has gathered on both. sides of the street, hoping to get a glimpse of exotic monsters and daring jugglers.

> [!note]+ Read Aloud
> The intersection ahead is packed with a throng of people, straining their necks and cheering as a pair of jugglers, preceded by a large metal cage, makes its way down the cross street. The parade continues to roll past, displaying the talents of numerous street performers and various caged beasts. One large and extravagant cage on a horse-drawn wagon actually consists of two cages. The inner cage is made of iron bars, with panes of glass mounted outside the bars on all four sides. Within is a three-headed monstrosity with the heads of a goat, a lion, and a brilliant blue dragon. As the parade trundles along, the beast roars over and over as its dragon head blasts the iron cage with bolts of electricity that play along the metal bars.

![[parade-of-thieves.png|left wtall]]

The parade, an annual event in celebration of the coming Champion's Games, makes its way through the streets of the Ardentia City to the entertainment of all. Unfortunately, the garish event also attracts a number of thieves, who use the distracting event as cover for their larcenous ways. Any character that mingles іп the crowd to get a better look is a likely target for the pair of rogues in the crowd.

As an added danger, the beast in the cage, a chimera, has ambitions beyond those of a sideshow attraction. The parade organizers did an excellent job ensuring that the chimera's breath weapon wouldn't hurt anyone on the street, and while the lightning isn't doing much damage to the glass panes, it has been slowly weakening the iron bars of the inner cage.

Just moments after the rogues have had a chance to ply their trade, the chimera's cage breaks, loosing the beast as the crowd flees in panic (along with the rogues, if they have not been spotted).

```encounter
name: Parade of Thieves
party: Age of Worms
creatures:
  - 2: [[Burglar]]
  - 1: [[Chimera]]
```

#### Tactics
The chimera (blue dragon head) is furious and bent upon gaining a bit of revenge upon the folk that taunted it. Once free of its cage, it moves to attack the nearest target, most likely one of the fleeing townsfolk or performers. A small child left behind makes an easy target should the party back away from the dangerous beast. Тһе chimera's wings have been clipped. As а result, it can fly but must land by the end of its movement.

Once the chimera is free, Argen and Sald (the burglars) try to flee the scene quickly unless one has been discovered in his thievery. Should this happen, the rogues support each other as much as possible, flanking any target that presents itself. If successful in their Thievery checks, the rogues make off with whatever the PCs happen to carry in their belt pouches or a small item from their packs. This should amount to nothing more than a few coins, a potion, or a sheathed dagger or wand.

#### Developments
Should the PCs kill the chimera, the performers are clearly saddened, but they understand the necessary use of force. If the chimera is instead merely knocked unconscious, the performers are very grateful and reward the PCs with two [[potion-of-resistance-(lesser)|Potions of Resistance (Lesser Electricity)]].

If either Argen or Sald are killed, the PCs must explain themselves to the local watch captain, who does not look lightly on such harsh retribution. He warns the party that vigilantism will not be tolerated, and that further acts could land them in the stocks (or worse).

### Event 2: Street Prophet 
Most major communities have their fair share of prognosticators, some crazed and raving about the future, others quiet and lurking, waiting for the signs they know are coming, Ardentia City is no exception. While some are clearly mad, occasionally one lone voice is a prophet, knowing more than any man should.

> [!note]+ Read Aloud
> Up ahead, standing atop a covered rain barrel, ә man screams at a public that seems keen to ignore his ravings. Dressed only in a ratty robe and waving a long, charred staff, the balding human man seems to be shouting himself horse, yet the crowd still passes him by without paying much attention at all.

Тһе party can easily avoid or ignore the crazed man. If they happen to ask one of the common folk about him, they learn that he is here every day, shouting about this and that. Last week he shouted about "the dragons of the rift and the sins they proclaim" or some such nonsense. No one's really sure of his name, and most call him the Rain Barrel Man as a result. If the PCs bother to listen to his rant, read them following.

> [!note]+ Read Aloud
> "Listen to me, you children of Ardentia City, and hear the doom that builds before your blind eyes. You in your house of gold and you in your hovel of mud and even you in your mail of metal, none of you are safe from the doom, from the Age of Worms. Oh yes, it is coming. Have you not heard the dead dragons roar? Have you not smelled the rot festering under your very nose? Have you not dreamt of the worm that walks, bringing decay to all he touches? Fools, you are all fools! Your doom is upon you! The end is in sight and none of you shall be spared. Decay is the future and the future is here!”

The Rain Barrel Man does not allow interruptions to his rant until the end and begins anew after a few moments. Should the PCs ask questions about his rant, he only stares at them, with no answers forthcoming. He refers to himself as "the prophet of the golden eye" and refuses to share any of his secrets. He is more than willing to repeat his rant, but seems to һауе no further information about his tale (and in fact, does not seem to know anything about it when not telling it in its entirety).

## Part 2: Eligos and the Crooked House
[[Eligos]] lives in one of the more affluent parts of [[Ardentia City]], known as [[Haven]]. Although the guards at the gates to this district look at the PCs with suspicion, they do not bar their entry. When the PCs arrive at the address [[Allustan]] provided, read them the following.

> [!note]+ Read Aloud
> A white stone wall surrounds а manicured yard of trimmed hedges and exotic fauna. A cobbled path, flanked by a pair of pools and rearing dragon statues, leads to a white marble manor house with gilded double doors and flickering golden lanterns.

As the party approaches the front door to the opulent manor, it opens as if they are expected. Pollard (male elf), [[Eligos|Eligos's]] aged elven manservant, asks the PCs their business at the estate and invites them inside to wait for the sage (assuming they mind their manners).

Once inside the manor, the party is escorted through the grand foyer, dominated by a marble staircase lined with suits of ancient armor, and topped by an ancient battle banner used as a curtain. Off to one side, a short hallway leads to a parlor, where the PCs are asked to wait by the austere manservant, After serving the party a fine wine (or water) along with fresh fruit, Pollard leaves the party to await the sage. The parlor is lined with packed bookcases, framed by various oil paintings оf faraway places and fantastic locales (such as a great road of bones, а bustling city set inside а dormant volcano, and an abstract painting of a vast featureless ashen plain). Аll of the furniture is gilt with fine gold tracery and padded with plush red velvet cushions. The floor is polished wood, but covered by a well-worn carpet depicting some forgotten battle. After a few minutes of waiting, [[Eligos]] joins the party in the parlor.

> [!note]+ Read Aloud
> А middle-aged man wearing an open red robe with a silver breastplate underneath enters the room, His eyes are sharp wells of deep gray accented by specks of red. His hair, red like the setting sun, shows the first signs of receding, "My manservant, Pollard, tells me that you wish to speak to me," he says in a calm, even voice, "My name is Eligos. How can I be of assistance?"

[[Eligos]] (LN male human) is a patient, levelheaded man, respected throughout [[Ardentia City]] for his obscure knowledge and skill in the arcane. Like [[Allustan]], [[Eligos]] was once apprenticed to the powerful archmage [[Manzorian]]. Unlike [[Allustan]], [[Eligos]] still serves the archmage as one of Manzorian's chief agents in [[Ardentia City]].

After allowing the party to introduce themselves, [[Eligos]] plainly asks what their business is with him. Although patient, his time is valuable and he does not suffer fools. He listens to the PCs' request calmly, without asking questions unless they mention [[Allustan]]. At that point he raises and eyebrow and says, “Hmm, I never thought I would hear from him again. But nonetheless, please continue." If asked about the sage of [[Diamond Lake]], [[Eligos]] flatly states that they were both beholden to the same master for a time. He speaks no more of the matter, but does warm up to the party after their relationship with [[Allustan]] is established.

[[Eligos]] is intrigued by their queries, especially those concerning the jar containing the green worm, Zosiel's silver diadem, the two demon horns, the talisman of the sphere from the Whispering Cairn, and any tales of the Age of Worms or the nefarious cults in nearby Diamond Lake. After hearing their request for answers, the sage thinks on it a bit with two fingers raised to his lips and then speaks.

> [!note]+ Read Aloud
> "Although not my area of expertise, I do know a bit of what you speak and am greatly disturbed. I will look into this matter, but it will take some time. There are many books to consult, and most are kept in the Great Library. I should be able to gather the information you seek within the week, While you wait, might I recommend that you stay at the Crooked House in the Foreign Quarter? It is an excellent inn and the keeper and I are old friends—mention my name and he's sure to give you a discount on rooms. I shall contact you there when I have found the knowledge you seek. Until then, I suggest you enjoy the comforts Ardentia has to offer.”

[[Eligos]] asks for no payment in these dealings so long as the party mentions [[Allustan]]. Otherwise, he merely asks for future considerations should the need arise. He does not know what this entails, but he assures them it will be nothing dangerous, To complete the research, Eligos needs to keep any objects the party desires investigated.

You should use [[Eligos]] to answer any number of questions the PCs might have. In addition to answering direct questions, he can also fill in plot points the party might have missed, discovering "additional" information they might find useful. At the very least, you can use him to point the PCs to any other locations in [[Ardentia City]] you may wish to have them visit.

Be wary not to reveal too much. Information from [[The Whispering Cairn]], [[The Three Faces of Evil]] and [[Encounter at Blackwall Keep]] should be generally available if the PCs could have learned it themselves through their exploits. Hidden background information may be revealed later and should be kept secret until that time. In the end, it's up to you to decide what [[Eligos]] discovers, but it should serve to drive the plot forward, fill in some of the gaps, and raise further questions.

Their business completed, [[Eligos]] summons Pollard to escort the party out, promising to contact them once his research is complete.

### The Crooked House
> [!note]+ Read Aloud
> One of the larger buildings in the neighborhood, the Crooked House, is just that a bit off tilt. Its walls are all at odd angles while none of its windows and doors are quite square. Despite this, the building looks to be in good repair, freshly painted and clean.

 The [[Merchant's Quarter]] is a diverse and busy neighborhood, packed with shops from dozens of nations and numerous inns that cater to merchants and travelers from far away lands. The buildings here reflect this diverse ethnicity, as few look alike and construction styles vary wildly from building to building. Structures made from stone, fancifully carved wood, and countless other more exotic materials.

Located in a part of the [[Merchant's Quarter]] known as “Midnight's Muddle,” the Crooked House has seen better days. Parts of its foundation have failed, resulting in a building out of sorts. The inn boasts few right angles, and none of the floors are level. However, the place has a charm not seen in many of the other buildings in the district. Its owner, [[Tarquin Shortstone]] XXIV, takes pride in his establishment, and despite its condition he keeps everything in working order, clean, and mostly safe.

Tarquin (NG male gnome) runs an honest business, catering to both locals and visitors alike, Many of the owners of local businesses stop by the Crooked House for a pint after closing up for the evening. Tarquin encourages this by cutting most of them a good deal and engaging them in lively conversation about business and local events. He is equally friendly to newcomers, offering up his rooms for the modest price of 6 sp per night, including a small meal in the morning.

The taproom of the Crooked House is often busy late into the night, and things can sometimes get rather lively, especially when a local bard or street performer stops by to entertain the guests. The PCs are free to take a turn on the small stage as well if they possess the skill. Tarquin does not take a cut of the earnings made by any of his performers, and instead offers them free drinks so long as their performances draw more business.

Inside the inn, the taproom is decorated with numerous trophies, primarily owlbear heads, of which Tarquin is rather fond. The tables have uneven legs so that they sit level on the slightly sloping floor. The staircase leading upstairs is a bit. treacherous, as it has shifted significantly over the years. The rooms are all of good quality, containing a straw mattress bed, wardrobe, and table with an oil lamp.

When the party arrives, Tarquin is busy serving up a meal and asks if the PCs are interested in joining. He has a number of rooms available, all singles. His double rooms and party rooms are currently rented out to a merchant caravan. that just arrived in the Free City. However, should the PCs mention that [[Eligos]]. sent them, Tarquin cuts them a deal (4 sp per night) and throws in free drinks. [[Eligos]] and Tarquin are old friends and frequently meet at a local dragonchess parlor for a friendly game.

It is about this time that [[5-World/NPCs/Ardentia City/Loris Raknian]], director of the [[Bloodstone Arena]], learns of the party's arrival in town. He contacts [[Zyrxog]] and arranges for their destruction the same day, Although events are starting to move against them, the PCs have a few days to explore [[Ardentia City]], make purchases, and relax before the action begins.

### Body Thief
While the PCs take time off, [[Tarquin]] encourages them to have a good time while staying at the Crooked House. The doppelganger agents who work for [[Zyrxog]] have already begun to observe the PCs, however, learning their habits and abilities while in the guise of common folk. One of them, a rogue named [[Ixiaxian]], has been charged with infiltrating the party. The switch occurs at some point after the PCs speak to [[Eligos]] but before event 3 begins. [[Ixiaxian]] remains hidden in the party until the real PC is rescued later in the adventure (see area D15).

Before going ahead with this nefarious plot, you should carefully gauge your group. Pulling off this deception requires you to enter а conspiracy with one player against the rest of the group, a practice that is generally not recommended. If you feel that this would offend your group, feel free to omit this plot entirely.

Alternately, there are numerous points during the adventure in which one PC can be separated from the rest of the group. A PC may be arrested at some point and taken to jail apart from the rest of the group (possibly as the result of event 3) A PC could be jumped by [[Ixiaxian]] while he scouts ahead of the rest of the group while they explore the upper level of Sodden Hold. If you can engineer Ixiaxian's attack to coincide with a point at which a PC voluntarily leaves the rest of the group (such as if a PC decides to go off on his own to try to contact the Thieves' Guild, visit his temple, go shopping, or anything else that may lure PCs apart), so much the better. Take that PC into another room and run the encounter with [[Ixiaxian]]. If the PC defeats the doppelganger, you can either try again with an identical doppelganger and а different PC later, or you can congratulate that PC on his luck and skill and continue with the adventure as written, replacing the encounter in area D15 with aranea.

Once a PC has been replaced with a doppelganger, allow that PC to continue to play the doppelganger as if it were his own character. The doppelganger certainly takes the time to equip itself with the PC's gear, and in its attempt to remain іп "character" would certainly make the same decisions the PC would make as regards purchasing new equipment, using one-shot or charged items, and the like. You can even go as far as to let the PC continue using his own character's stats rather than handing him Ixiaxian's stats.

Since [[Ixiaxian]] is a rogue, and since the real PC is going to probably spend several days imprisoned, he is careful to select a PC that not only closely matches his capabilities and skills, but one that won't be able to escape being manacled and imprisoned. [[Ixiaxian]] avoids selecting characters who can make a DC 28 [[Escape]] check. He also avoids taking characters that can use magic or special abilities to escape via changing shape, characters with Conceal Spell, characters that can wild shape, characters that can cast dimension door, and so on.

Finally, you should be prepared for what could happen if the other PCs discover the deception early. Even though in combats against other doppelgangers, Ixiaxian's kin try to avoid hurting him, there's always the chance that Ixiaxian could get killed elsewhere. Once a doppelganger is slain, its body reverts to its true from, revealing the deception for what it is. The good news for the duplicated PC at this point is that his character didn't really die. The bad news, of course, is that the duplicated PC is still imprisoned until rescued. In this event, you should engineer events so that the imprisoned PC is rescued sooner rather than later. Perhaps the imprisoned PC can be recovered from the cells in area D6. The imprisoned PC might even escape and make his own way back to the party.

### Event 3: Betrayal at the Bar
![[crooked-house-tavern.png|left]]
Three nights after the PCs arrive at Ardentia City, Zyrxog's minions make their move to eliminate the PCs. After impersonating one of the PCs and committing a terrible attack, a doppelganger named [[Elaxan]] tries to turn the tavern patrons against the PCs in a massive brawl.

Waiting until at least one of the PCs has gone to bed, [[Elaxan]] goes upstairs in the guise of a simple merchant. Once out of sight of the patrons in the common room, [[Elaxan]] assumes the identity of one of the party members that has gone to bed. He comes back downstairs, walks up to [[Tarquin]] and stabs him with a dagger. He then tries to run back upstairs before anyone can respond. Once out of sight, [[Elaxan]] promptly reassumes the merchant guise and comes back downstairs to incite the crowd against the PCs.

[[Tarquin]] survives the attack but falls unconscious behind the bar (at -2 hit points and bleeding) with the dagger still in his chest. The crowd of assembled patrons quickly begins shouting at the PCs as [[Elaxan]] attempts to use his [[Skills#Diplomacy|Diplomacy]] skill to turn them against the PCs. If none of the PCs counter this with [[Skills#Diplomacy|Diplomacy]] of their own, this is a simple DC 21 check. Should the PCs resist, it becomes an opposed role. The crowd's initial attitude toward the PCs is unfriendly. Either side winning the check by 5 or more сап sway their attitude one step in either direction. Since these checks take 1 minute, sleeping PCs have plenty of time to join the commotion caused downstairs,.

```encounter
name: Betrayal at the Bar
party: Age of Worms
creatures:
  - 1: Elaxan
  - 14: Tavern Patron
```

**Tactics:** As this fight occurs in the taproom of the inn, you should determine if any of the PCs are wearing armor and what weapons they carry before the fight begins. [[Tarquin]] finds it rude to be fully armed and armored in his establishment, but lets it pass if the PCs are insistent or sweet talk him with a DC 23 [[Skills#Diplomacy|Diplomacy]] check. Unarmed PCs can fight using the same weapons as the patrons, knives (treat as daggers that deal 1d3), bottles (improvised weapons that deal 1d4) and chairs (improvised clubs). Throughout the fight, [[Elaxan]] uses Spring Attack to move up into a flanking position, take an attack, and back away before the PCs can retaliate, If dropped to below 10 hp, he attempts to flee, changing shape to that of a peasant woman the moment he is out of sight.

**Developments:** Four minutes after [[Tarquin]] is attacked, the city watch arrives on the scene and arrests the party unless they can prove their innocence (see the cast article in DUNCFON 118 for some sample city watchmen). If the PCs have killed any of the tavern patrons, they are arrested whether or not they prove that they did not hurt [[Tarquin]]. Should the PCs kill [[Elaxan]], he reverts to his true form, much to the shock of all present. This evidence alone is enough to clear the PCs of any charges by the crowd and guard. Should [[Elaxan]] be searched, he has daggers that match the one used to attack [[Tarquin]]. Without this proof, convincing the city constables requires а DC 28 [[Skills#Diplomacy|Diplomacy]] check and a rather good explanation. Elaxan's pouch contains a strangely crooked key attached to a small keychain. The key's head bears a unique design of a ship being pulled underwater by a huge octopus. This key can unlock the front door to the doppelganger's hideout, a warehouse down by the river called "Sodden Hold." A DC 20 [[Skills#Society|Society]] check allows a character to recognize the design on the key as the same as a design over several old warehouses in the [[Shattered Ward]], although most of these warehouses have been torn down and replaced with newer buildings. If none of the PCs figure this out, а DC 21 [[Gather Information]] check uncovers the same clue. In addition, the informant can tell the PCs that the octopus standard was the mark of a now-dead merchant who once owned several warehouses along the waterfront. Most of these buildings have been sold off and rebuilt, but one still stands—Sodden Hold.

If the PCs are arrested, they spend the night in jail, stripped of all their gear and spell components. In the morning, using their agents within the city watch, the doppelgangers have the PCs delivered to their hideout as noted in the sidebar "Delivered into Danger."

Assuming [[Tarquin]] survives, he is very grateful to the party if they prove their innocence. He offers them free room and board for a month as reward. If the poor innkeeper dies as a result of the attack on his life, his son takes over the business soon after. Obviously, if the party members do not prove their innocence, they are forced to leave the fine establishment.

> [!tip]+ Treasure
> Elaxan gear consists of [[armor-potency-1|+1]] [[Studded Leather Armor]], a [[Weapon Potency (+1)|+1]] [[striking]] [[shortsword]] and currency in the amount of 30 gp.
> 
> - [ ] gp::30
> - [ ] permanent::[[Weapon Potency (+1)|+1]] [ilvl::2] [gp::35]
> - [ ] permanent::[[armor-potency-1|+1]] [ilvl::5] [gp::160]
> - [ ] permanent::[[striking|striking]] [ilvl::4] [gp::65]

## Part 3: Sodden Hold
![[sodden-hold-map.png]]
Down on the banks of the Selintan River, outside the city walls, a large district has been built to service the docks and waterways around [[Ardentia City]]. In among the warehouses, taverns, and shops catering to mariners is a relatively unremarkable warehouse marked "Sodden Hold" in faded green paint. This stone warehouse has a moss-covered roof and is home to à band of doppelgangers, led by Telakin and controlled by a secretive mind flayer named Zyrxog.

This group of doppelgangers has spent years infiltrating the government of [[Ardentia City]], from minor nobles to town guards, and it is from this warehouse and the warrens below it that they plan their insidious schemes. Tasked by their hidden master to destroy the PCs and claim their gear, the band of doppelgangers has set events into motion to draw the PCs to their hideout.

### Warehouse Level
Unless otherwise stated, each chamber of the Sodden Hold warehouse is lit with everburning torches suspended from the ceiling 3o feet above. Both the interior and exterior walls are superior masonry walls, while the doors are made of strong wood.

#### D1. Sodden Hold
> [!note]+ Read Aloud
> Lurking at the water's edge like a rotten log washed ashore, the warehouse marked “Sodden Hold” is built mostly of stone with a wood shingle roof thick with long, ropey moss. The entire building has a green hue, owing to the large patches of moss and mold that grow on its walls.

A tall set of iron double doors marks the only entrance to the warehouse, as it has no windows. The doors are locked with a good-quality lock, requiring a DC 25 [[Skills#Thievery|Theivery]] check to open. Flaxan's key also opens this door. A DC 23 [[Skills#Survival|Survival]] check reveals that these doors have been used frequently despite the warehouse's abandoned appearance.

#### D2. Storage Hall
> [!note]+ Read Aloud
> The doors open into a large space dominated by dozens of crates and barrels of various sizes. Lit by a number of faintly flickering torches above, a thick layer of dust covers much of the cargo stored here.

This room is used by the doppelgangers to keep up appearances should any local officials stop by for an inspection. Most of the crates and barrels are filled with cheap goods such as rough cloth, spoiled ale, and chainmail links. There are numerous ways out of this chamber, including two doors on the south wall (both locked), a trapped false door on the north wall, and two doors up at the level of the catwalk that runs along the east side of the room (one of which is hidden).

The catwalk on the east side of the room is 15 feet above the floor. The door on the south side of the catwalk leads to area D4 and is not locked. The door on the north side of the catwalk is hidden, requiring a DC 23 [[Skills#Perception|Perception]] check to locate. А DC 20 [[Skills#Survival|Survival]] check by a PC identifies the location of the door by the boot prints leading to it, but does not reveal how to open it. This hidden door leads to area D5 and it is not locked.

Creatures: Three of the crates and barrels in this chamber are not what they appear to be. The doppelgangers keep a trio of mimics in this chamber to ward off any intruders that might break in. A [[Skills#Perception|Perception]] check opposed by the mimics’ [[Skills#Deception|Deception]] checks notices them hidden among the other crates before they attack. One of the barrels in this chamber contains a sour alcohol strong enough to dissolve the mimics’ adhesive.

```encounter
name: D2 Storage Hall
party: Age of Worms
creatures:
  - 3: Elite Mimic
```

> [!danger]+ Trap
> The false door leading out of this chamber is trapped. The door is not locked, but attempting to open the door sets off the trap, opening a wide pit in front of the door.
> 
> [[hidden-pit-upgrade-hb|Hidden Pit (Upgraded)]]

#### D3. Abandoned Office 
The door leading into this chamber is locked, requiring a DC 23 Open Lock check to pass.

> [!note]+ Read Aloud
> This dark chamber is absolutely packed with boxes and bookcases overflowing with ledgers and papers in no apparent order.

> [!tip]+ Treasure
> These papers detail a business that once ran in this building over 10 years ago. Going through all of the papers crammed into this room takes 10 minutes per [[Skills#Perception|Perception]] check. A successful DC 25 check uncovers a ring of sustenance accidentally discarded by the doppelgangers when they moved all of the refuse to this chamber.
> 
> - [ ] permanent::[[ring-of-sustenance|Ring of Sustenance]] [ilvl::7] [gp::325]

#### D4. Rickety Ladder 
The door leading into this chamber from the ground floor is locked, requiring a DC 23 [[Skills#Thievery|Thievery]] check to open. The door above on the catwalk is unlocked. This small chamber contains a decrepit ladder leading up to a platform level with the catwalk in area D2. This chamber is littered with loose stones and dust.

Attempting to climb the ladder causes it to collapse, bringing down a portion of the catwalk above as well. This deals `dice: 2d6` 2d6 points of damage from falling debris to all those adjacent to the ladder. A DC 21 Reflex save halves the damage.

#### D5. Storage Cell
The secret door from the catwalk leads to the top of a staircase that descends into an oblong chamber with only one exit. Along the north wall, a number of unlocked chests contain the belongings of the prisoners (Ilya and Gattel) in the cells of area D6. 

> [!tip]+ Treasure
> One chest contains Ilya's [[belt-of-good-health|Belt of Good Health]], signet rings, and embroidered sky blue cloak (worth 200 gp). Another has Gattel's [[spacious-pouch-(type-i)|Spacious Pouch (Type I)]] containing 43 gp. The other chests here contain the PC's gear if they are captured and put in one of the holding cells (as noted in the sidebar "Delivered into Danger").
> 
> - [ ] gp::43
> - [ ] permanent::[[belt-of-good-health|Belt of Good Health]] [ilvl::4] [gp::85]
> - [ ] permanent::[[spacious-pouch-(type-i)|Spacious Pouch (Type I)]] [ilvl::4] [gp::75]

#### D6. Cells
> [!aside|right]
> **Delivered into Danger**
> If the party is arrested for the attack on [[Tarquin Shortstone]]( or any other crime) they soon find themselves delivered to the dopplegangers late at night.  A small squad of guards puts them into a wagon cell pulled by a pair of horses and drives them down to Sodden Hold where they are transferred to the cells at area D6.  The PCs are split up into two groups, half in cell B and the other half in cell D.
> 
> Every night, a pair of doppelgangers (see area D6 for stats) comes to the prison to drag one of the captured characters into the haul and beat him into unconsciousness using nonlethal damage.  Once unconscious, the PC is taken below and a mind clone is made. This proceeds until all of the PCs are cloned, at which time are taken one at a time from their cells and killed.
> 
> Escaping from the cells is not easy, but it's far from impossible. The cells contain plenty of sticks and straws that could be used to pick the locks (at -2 penalty on the roll).  The party could attack the guards when they come to take one  of the characters below.  One of the previous occupants of cell B partially tunneled through the exterior wall of his cell, hidden behind the straw mattress. However, there is по tool to continue the work in the cell. Gattel has a bent spoon that would work, but convincing him to give it up requires а DC 21 [[Skills#Diplomacy|Diplomacy]] or [[Skills#Intimidation|Intimidate]] check. Once acquired, tunneling though the outside wall requires another 16 hours of work.
> 
> The guards in cell E do not leave their cell unless the party manages to free themselves from their cells, at which point they attack.
> 
> If the entire party is captured in this way, the gang goes to the inn and collects any gear they left behind (in their guise), which is added to any gear that was confiscated when the PCs were arrested. All of this gear is stored in the unlocked chests in area D5.

> [!note]+ Read Aloud
> This tall chamber contains five cells, each with a wall of iron bars facing the corridor that runs between them. A number of the cells are occupied, one with a young elven woman, one with a pair of young men, and another with what appears to be a dead man.

These cells are used by the doppelgangers to keep prisoners they plan to impersonate, but do not yet wish to eliminate. Each cell consists of three reinforced masonry walls and one wall made of iron bars (treat as an iron portcullis) There is a simple straw mat, ceramic water bowl, and waste bucket in each cell. The entire room is lit by a pair of everburning torches suspended from the ceiling of the hallway. Each of the cells is locked with an average quality lock, requiring a DC 23 [[Skills#Thievery|Thievery]] check to open.

**Cell A:** This cell contains a young elven woman, Ilya Starmane (LG female elf aristocrat 4), who was abducted by the doppelgangers nearly a month ago (not that her family knows this). She is cold and untrusting of anyone that comes to speak with her, as the doppelgangers have been toying with her the whole time, delighting in her anguish. Her family is one of the lesser noble families in [[Ardentia City]], one of the key trading partners between the city and the nearby [[Mistwood Enclave]]. She has seen hundreds of different individuals come through this area in the past month, rarely the same person twice.

**Cell B:** This cell is empty.

**Cell C:** Although the resident of this cell appears to be dead, he is barely alive (stable at -7 health). The man, Gattel Watam (CN male human expert 5), was once a local tax collector before being captured by the doppelgangers 2 years ago. Аs one of the first subjects of the mind clone (see area D17), Gattel's mind has shattered, and if he's revived this becomes readily apparent. Gattel goes through periods of intense weeping, childish laughter, and haughty talk as if he were a highborn noble. He is only occasionally lucid enough to identify himself, an act usually followed by an attempt to end his life. The doppelgangers keep him alive because the mind clone procedure on him failed and they need to continue to impersonate him to collect funds.

**Cell D:** Aside from some blood-soaked straw, this cell is empty.

**Cell Е:** This cell contains two ordinary human men, both a bit soiled and tired looking. If spoken to, they claim to be Martal and Regim, members of the town guard captured a week ago. They speak in vague terms of the horrible things that happen here, including probing into their minds, severing and then reattaching limbs, and worse.

In reality, Martal and Regim are the doppelganger guards of this small prison. The door to their cell has a hidden latch allowing them to open it from the inside. Underneath their straw mattress they һаvе stored а few pieces of gear. The duo begs to be released, but attacks the party once the door is opened. An opposed [[Sense Motive]] check versus the doppelgangers' [[Skills#Deception|Deception]] checks avoids being surprised on the first round of combat.

```encounter
name: D6 Cells
party: Age of Worms
creatures:
  - 1: Doppleganger Fighter, Martal
  - 1: Doppleganger Fighter, Regim
```

> [!tip]+ Treasure
> The dopplegangers each carry a +1 Striking longsword, a steel shield and studded leather armor.  They also have 11 gp between the two of them.
> 
> - [ ] gp::11
> - [ ] permanent::[[Weapon Potency (+1)|+1 Striking Longsword]] [ilvl::4] [gp::65]
> - [ ] permanent::[[Weapon Potency (+1)|+1 Striking Longsword]] [ilvl::4] [gp::65]

**Developments:** Once freed, Ilya and Gattel seek to leave this place as soon as possible. Ilya gifts her [[belt-of-good-health|Belt of Good Health]] to the party as reward for saving her, while Gattel does not claim any of his gear, not recognizing any of it.

#### D7. Collapsed Chamber
![[collapsed-chamber.png|right]]
> [!note]+ Read Aloud
> Much of the floor of this ruined chamber has given way, revealing a large stagnant pool of water below. Rusted spears and broken swords break the surface of this pool throughout the room, A framework of soggy timbers that might have once supported the floor still stands, stretching out across the void.

Navigating this chamber is quite dangerous. Moving at half speed across the wooden planks requires a DC 23 [[Skills#Acrobatics|Acrobatics]] skill check, as they are a bit slippery from mildew. Critically failing this check results in a fall down into the water below. The shaded planks all lead to a piling that is not structurally sound. If a Medium or larger character steps onto one of these planks, the piling collapses, dropping anyone on a shaded plank down into the water below. The doppelgangers have placed dozens of weapons in the water below, making it very dangerous to traverse or fall into (as noted under Tactics).

The far wall of this chamber used to contain doors for accepting river cargo, but these have been boarded over. The only exit out of this chamber is a door out of sight when the PCs first enter. This door is locked, requiring a DC 25 [[Skills#Thievery|Thievery]] check to open.

```encounter
name: D7 Ccollapsed Chamber
party: Age of Worms
creatures:
  - 2: Phade
```

This room is home to a pair of invisible stalkers. Allied with the doppelgangers, they allow anyone who says the word "deception" to pass without incident. Those not speaking the password before crossing out onto the planks are subject to attack.

**Tactics:** The invisible stalkers use the element of surprise to attack the PCs once they have begun to cross the planks. Any character that attempts to fly or bypass the planks becomes an immediate target for these silent killers. Those standing on a plank are considered [[Off-Guard]] unless they are an Expert in [[Skills#Athletics|Athletics]], and must make a DC 23 [[Skills#Athletics|Athletics]] check to avoid falling if struck. The stalkers know this and try to knock as many PCs as possible into the dangerous waters below.

Those falling into the water are subject to 1d4 attacks from the weapons (+18 melee dealing `dice: 1d6+4` 1d6+4 points of damage each). The water below is very calm.  No swim check is required but movement provokes more 1d2 more attacks from the weapons placed in the water per 10 feet traversed. It's а DC 21 [[Climb]] check to clamber up a piling back to the floor above,

> [!tip]+ Treasure
> The doppelgangers often toss the bodies of those they have slain into this fetid pool, along with any gear they find to be of little value. A DC 21 [[Skills#Perception|Perception]] check notices these corpses underneath the water, between the spears. A DC 25 [[Skills#Perception|Perception]] check reveals a golden glint among the bodies. This is a golden wand of spiritual weapon (26 charges) accidentally discarded by the gang in their haste and not yet recovered.
> 
> - [ ] permanent::[[Spiritual Armament|Wand of Spiritual Armament (Rank 2)]] [ilvl::5] [gp::160]

#### D8. Water-filled Pit
> [!note]+ Read Aloud
> This large chamber is empty aside from a hole in the floor.  A perfectly square opening with a shaft leading down. The shaft is full of water after about thirty-five feet and a wooden barrel bobs on the surface. A crude rope ladder descends to the surface of the water.

The doppelgangers use this room to gain access to their underground warrens. Traditionally, the members of the gang sit in the barrel, floating in the water as the level slowly drains down 40 feet to the floor below, just outside area D9. When they wish to go up, they simply reverse the process, sitting in the barrel as the water level is slowly raised. This process takes a full minute.

Unfortunately, for the party, the water is currently raised and the mechanism to raise and lower the water is in another room. Characters wearing metal armor can simply jump in and sink to the bottom of the shaft in 2 rounds. Others must actively swim to the bottom. As the water is calm, swimming down requires a DC 21 [[Swim]] check to move at half speed. At the bottom of the shaft, a 20-foot-long passageway leads west to area D9, which is also flooded. There is no light down this shaft.

The other hole in the floor of this chamber leads to a stagnant pool of water trapped underneath this section of the building.

### Warren Level
This deep underground sanctuary is where the gang of doppelgangers hatch their nefarious plots and rest from their trials. Unless otherwise noted, a pale blue everburning torch mounted on the wall lights each chamber. The walls of this level are hewn stone and all of the doors are iron.

These rooms are meticulously well kept. None of the dust and dirt of the warehouse above is present here. The walls in most of the chambers are carved with an intricate flowing scrollwork that never seems to repeat itself.

#### D9. Water Control Chamber
When the party first enters this chamber from area D8, they emerge 40 feet beneath the surface of the water. A 10-foot wide pillar of stone in the center of the room rises up to a point 10 feet above the top of the water. A short metal ladder reaches ftom the top of the pillar to the surface of the water.

On top of the pillar is a large metal lever. Tripping the lever opens wide drains on the floor, and both the water level and pillar sink at an equal rate (about 4 feet per round). After one minute, the pillar is only 16 feet tall and the room (including area D8) is devoid of water. Tripping the lever again reverses this process, raising the pillar and flooding the room.

A stone platform, 50 feet above the floor of the room (at the same level as the pillar when fully raised) leads to a locked door. Opening this door requires a DC 25 [[Skills#Thievery|Thievery]] check.

```encounter
name: D9 Water Control Chamber
party: Age of Worms
creatures:
  - 1: Giant Octopus
```

А giant octopus lives in this chamber. [[Zyrxog]] gave the creature to the doppelgangers as a gift when he had finished his experiments upon it. When the water is drained, it escapes the room through one of the drains at the bottom, only to return when the water level rises. If severely wounded, the octopus flees in a cloud of ink to the nearest drain.

**Developments:** A secret door is hidden in one wall of this room. It can only be found with a DC 28 [[Skills#Perception|Perception]] check, although it is open later, as noted under area 19. This passageway leads to the [[Ardentia City]] sewers and Zyrxog's lair.

#### D10. Hallway
> [!note]+ Read Aloud
> Iron double doors cap this long hallway at both ends. The far wall has four doors spaced evenly along its length, with only a lone door on the other side.

All four doors on the southern wall are locked, requiring a DC 23 [[Skills#Thievery|Thievery]] check to open. This hallway is generally devoid of activity unless the party makes a great deal of noise, which summons the doppelgangers in area D11 to investigate.

> [!danger]+ Trap
> The east end of this hallway is actually a dead end, with a trap door covering the floor in a 10-foot by 10-foot area in front of the door. Those walking into the area risk falling into the pit below, which is deeper than it appears. An illusory wall (Spell DC 25) is placed 30 feet below the trap door, creating a false floor. The actual floor is 60 feet beneath the floor of the hallway in the area of a magical silence. To those outside the pit, the character falls through the floor and upon triggering the trap door again and investigating inside the pit there is no sign of the missing PC. The walls of the pit are extremely smooth and greased, making it impossible to climb.
> 
> [[devious-spiked-pit-hb|Devious Spiked Pit]]

#### D11. Sleeping Quarters

торе packed with different styles of cloth- ing All of the outfits in the Players Hand- book can be found in one of the rooms.

```encounter
name: D11 Sleeping Quarters
party: Age of Worms
creatures:
  - 2: Doppleganger Fighter
```

Two doppelgangers are in each of these rooms at any given time, home from covert operations around the [[Ardentia City]]. If not asleep, they are busy practicing one guise or another, trying on various outfits and altering their form.

**Tactics:** If a general alarm is raised, the doppelgangers in these rooms (six doppelgangers in all) quickly mobilize to attack any intruders they see in area 10 who move toward either area D13 оr D14. They attack in their natural forms, but if combat goes poorly the survivors try to escape into area D16 to regroup.

> [!tip]+ Treasure
> Various bits of jewelry (brooches, amulets, and rings) are scattered throughout the wardrobes of these rooms with a total value of 50 gp in all. Each room also contains a single noble's outfit and a single royal outfit, in addition to numerous other outfits totaling 25 gp in all.
> 
> - [ ] gp::75

#### D12. Lavatory
This simple bathroom is used by the gang and holds nothing of value.

#### D13. Planning Room
> [!note]+ Read Aloud
> Two tables, each surrounded by plain wooden chairs, sit in the middle of this chamber. Unorganized heaps of maps, notes, and books cover each table. A large map of [[Ardentia City]] hangs on the opposite wall.

Telakin and his band of doppelgangers use this room to chart their progress and plan their next moves as they slowly infiltrate the government and aristocracy of [[Ardentia City]]. Although the documents specifically avoid mentioning the actual names of any individuals replaced, they do detail numerous noble families and government institutions that have been corrupted by their influence. This includes merchant councils, the leatherworker's union, the carpenter's guild, the stonemasons, the courts, the militia, and the directing oligarchy.

Discovering the extent of this corruption takes 2 hours of rifling through the maps and papers and a successful DC 25 [[Skills#Society|Society]] check.

The southeast corner of this room contains a well-concealed door behind a short bookcase. Finding the door requires a DC 25 [[Skills#Perception|Perception]] check. The doppelgangers had this door and the door in the maze installed as a hidden escape route.

> [!tip]+ Treasure
> If the PCs hand over the maps and papers detailing the doppelganger corruption to the authorities, they can expect not only the welcome thanks of many important individuals in [[Ardentia City]], but a reward of 100 gp.
> 
> - [ ] gp::100

#### D14. False Bedroom
This bedroom looks just like all the others (area D11), but without any of the jewelry. Unlike the other rooms, the east wall of this chamber is an illusory wall (spell DC 25) hiding а small chamber beyond. The small hidden chamber is dark save for a simple iron door that lets in a pale blue radiance from the room beyond. The door is not locked.

> [!warning]
> Award the players 8th level at this time.

#### D15. Hall of Deception
> [!note]+ Read Aloud
> The walls of this tall octagonal chamber are mirrored with a dark black glass reflecting ghostly blue flames from a trio of torches suspended above. In the center of the room is each one of you, manacled and tied to a chair, struggling to escape.

As noted earlier, one of the characters has been replaced by a doppelganger. That character is actually tied to one of these chairs. The others here are actually doppelgangers, assuming the guise of the rest of the PCs (one for each). The figures are dressed in tattered clothes, and each is gagged with a dirty rag. The real PC tied up here does not know that any of the others are doppelgangers, and has little memory of anything other than having been locked in this room for days. Once every several hours, a doppelganger comes into the room to give the victims food and water and to remove buckets of waste, but otherwise the captive PC has no real concept of how long he or she's been kept here.

The southern secret door requires a DC 25 [[Skills#Perception|Perception]] check to locate. If the lights in the chamber are extinguished, a thin pale light can be seen coming from the passageway beyond, requiring only a DC 15 [[Skills#Perception|Perception]] check to locate the secret door.

```encounter
name: D15 Hall of Deception
party: Age of Worms
creatures:
  - 4: Doppleganger Fighter
```

The doppelgangers here are not securely bound; their manacles are rigged so that a DC 15 [[Skills#Athletics|Athletics]] check allows them to wriggle free. The real character is securely bound with high quality manacles, requiring a DC 28 [[Skills#Athletics|Athletics]] check to slip the bonds or break free.

**Tactics** Once the PCs enter, the doppelgangers attempt to escape their bonds one at a time (as should the real character), moving to embrace the characters as their saviors and crying out that their corresponding character in the party is false. This continues until all the doppelgangers are free and arguing with the group over who is real and who is an impostor. Once they are within melee range, they attack those that they copy, hoping to surprise the characters. This undoubtedly requires a number of [[Skills#Deception|Deception]], [[Sense Motive]], and [[Skills#Perception|Perception]] checks to resolve. Obviously, the doppelgangers all move to attack the PCs if they are attacked or if the deception is foiled.

This is also the point when the doppelganger hiding within the group reveals his betrayal, attacking the most vulnerable or wounded PC using all of the powers at his disposal. Once the deception is revealed and [[Ixiaxian]] attacks the other PCs, the PC who was playing the doppelganger immediately resumes play as their actual PC, who is manacled and tied to the chair.

> [!warning]
> This is an high end severe level encounter for four 8th level players if all four doppelgangers attack at one time.  Monitor the situation so it doesn't get out of hand.

> [!tip]+ Treasure
> In addition to all of the duplicated PC's gear, Ixiaxian carries a sapphire worth 200 gp.
> 
> - [ ] gp::200

#### 16. Mirror Maze
> [!note]+ Read Aloud
> Beyond the door is a dizzying array of light and reflections. Polished metal mirrors stretch from floor to ceiling, forming a maze of endless corridors and reflected images.

Although there are many routes through this maze, pressure plates throughout raise additional mirrored walls that can separate and bewilder the party. Both of the squares on either side of the dashed lines on the map contain pressure plates. Only when both of these plates have been triggered does the wall between them raise into place with blinding speed. Those adjacent to a raising wall can attempt to dive to the other side with a DC 23 Reflex save. Walls can be lowered by triggering a hidden switch built into the floor (DC 28 [[Skills#Perception|Perception]] check to locate) or with a successful DC 25 [[Skills#Thievery|Thievery]] check.

This insidious maze is home to Telakin's personal guards. Three doppelganger guards lurk here, tasked with preventing anyone from penetrating the maze. They patrol the maze looking for intruders until the party enters the maze, at which time two of them use their potions of invisibility to sneak up to the party and attack. The other goes to warn Telakin (area D17) before joining the others in assaulting the party.

```encounter
name: D16 Mirror Maze
party: Age of Worms
creatures:
  - 3: Doppelganger Fighter
```

[[doppelganger-fighter|Doppelganger Fighter]]

**Tactics** The guards sneak around the maze, waiting for the right moment to strike, usually when walls separate the group. Once their invisibility ends, they use their ability to change shape, taking on the appearance of party members to close in and sow confusion. Тһе doppelgangers know the locations of all the sliding walls and use them to withdraw from combat or further separate the group. The DM should have the PCs make [[Skills#Perception|Perception]] checks to see through approaching doppelganger disguises even if it's actually fellow party members approaching.

#### D17. Telakin's Hall (EL 10)
> [!note]+ Read Aloud
> The door opens on a large chamber with a vaulted ceiling high above. Along one wall, a macabre assembly of vats and tubes connects to a table with numerous straps and a strange silver helmet. On the far side of the room, a raised dais supports a throne.

The device to the west is used by the doppelgangers to extract memories and knowledge from victims they've captured. They then encode this information into gemstones called mind clones (each of which must be worth a minimum of 200 gp). A creature can then access these memories using detect thoughts or telepathy as if he were contacting the actual person they were duplicated from. The procedure requires the victim to be strapped to the table for 10 minutes, during which time he may make a DC 23 Will save to resist the process. Failure doesn't harm the victim in any way, but does result in a mind clone that others can then use to interrogate. A recorded mind still gets a saving throw to resist detect thoughts and similar attacks.

The fantastic cost of producing a mind clone (or purchasing one, for that matter) ensures that Telakin never has enough on hand to do what he really wants, and this leaves the doppelganger in a perpetual bad mood.

As the PCs arrive, the doppelganger leader Telakin is ready for them. He's assumed the form of [[Allustan]], the sage of Diamond Lake. When the PCs enter this chamber, he rises from his throne and addresses them. "So kind of you to join me. It is time for me to show you the truth of things. Come and learn what lies beyond!" Telakin's chamber is also protected by several traps.

Telakin is the thrall of Zyrxog, а powerful mind flayer. He wears the illithid's symbol on his brow in most of his assumed forms, save for when he wishes to blend into a crowd. The master tasked Telakin with destroying the party using every means at his disposal. Since the party has made it this far, the task now rests with the greater doppelganger.

![[Telakin.png|right]]

```encounter
name: D17 Telakins Hall
party: Age of Worms
creatures:
  - 3: Greater Doppelganger, Telakin
```

**Tactics** If warned of the party’s approach, Telakin assumes his wizard form and immediately casts a number of protective spells, including _false life_ and _resist energy_ (choosing an energy type frequently used by the party, assuming the doppelganger has advanced information on them). He keeps _mage armor (heightened 2nd)_ active at all times, casting it every morning after preparing his spells. Once protected, Telakin uses _clairvoyance_ to watch the party’s approach and gauge their abilities.  Telakin prefers to remain on or near his throne, hoping to draw intruders into traps while devastating them with his magic. In this form, he relies on _fireball_ and _wall of fire_ to punish clustered enemies, while _slow_ and _confusion_ disrupt coordinated tactics. Against magically prepared foes, he employs _dispel magic_ to remove protections. If forced into prolonged melee while still in wizard form, he falls back on _scorching ray_ and _ray of enfeeblement_ to soften his attackers before considering transformation. 

Once engaged in close combat, Telakin assumes his orc barbarian form. He enters Rage immediately, gaining bonus damage and temporary resilience, and charges with his frost-imbued greataxe. In this guise, he uses brute strength to batter down opponents, relying on his increased speed and sheer ferocity to overwhelm frontliners. While raging, he shrugs off weaker blows thanks to his resistances, but he suffers slightly reduced defenses. He will only abandon this form if grievously wounded, at which point he may revert to wizard form to attempt escape through control spells or to regroup behind allies.

**Wizard Form:** Once a member of Telakin’s gang, Valdagan attempted to betray the doppelganger to the town watch. Telakin consumed Valdagan's mind and often assumes the old hawkish wizard's form when angered. In addition to the [[Reach Spell]] and [[Counterspell (Prepared)]], Telakin has the following spells when in Valdagan's form (Spell DC 27, +17 spell attack). **4th-rank (2 slots):** [[Confusion]], [[Wall of Fire]], [[Clairvoyance]]; **3rd-rank (3 slots):** [[Dispel Magic]], [[Fireball]], [[Slow]]; **2nd-rank (4 slots):** [[False Vitality]], [[Resist Energy]], [[Scorching Blast]]; **1st-rank (4 slots):** [[Charm]], [[Grease]], [[Force Barrage]], [[Mystic Armor]], [[Enfeeble]]; **Cantrips:** [[Daze]], [[3-Rules/Character Building/Spells/D/Detect Magic|Detect Magic]], [[Telekinetic Hand]], [[Read Aura]].

**Barbarian Form:** Bragat, a brutal mercenary, was sought out by Telakin solely for the purpose of consuming his identity. When in Bragat's form, Telakin gains the Fast Movement (+10 ft), [[Uncanny Dodge]] , trap sense +3, and Resistance 3 to physical damage while raging. He also gains the ability to rage 3 times per day, gaining +6 temporary HP each round, +3 damage per weapon die, AC –1 penalty. This rage lasts 7 rounds or until Telakin changes form. He uses а +1 frost greataxe іп this form.

> [!danger]+ Trap
> This chamber contains а total of four traps, two identical pit traps and two pressure plates that set off a poisoned spear trap. The pit traps occupy 10-foot by 10-foot squares on both sides of the room in front of the stairs leading up to the throne. The pressure plates take up the 5-foot by 5-foot area at the top of the stairs near the throne, triggering a poison spear from the ceiling above.
> 
> [[wide-spiked-pit|Wide Spiked Pit]]
> [[poisoned-ceiling-spear|Poisoned Ceiling Spear]]

**Development** Once Telakin is defeated, the PCs are free to look about the chamber. Telakin has little on his person aside from his magic items and a key ring with keys to every room in Sodden Hold. A DC 23 [[skills#Perception|Perception]] check of the stone throne reveals a hidden button that opens the door to Telakin's private sanctum behind the throne.

> [!tip]+ Treasure
> Telakin has a number of magic items on his person including a key ring with keys to every room in Sodden Hold, a +1 frost greataxe, scroll of fireball and a wand of heal.  Two sapphires each worth 200 gp sit in locked (DC 25 [[skills#Thievery|Thievery]]) containers near the device to the west.
> 
> - [ ] gp::400
> - [ ] permanent::[[Frost|+1 Frost Greataxe]] [ilvl::8] [gp::535]
> - [ ] permanent::[[Heal|Wand of Heal]] [ilvl::3] [gp::60]
> - [ ] consumable::[[Fireball|Scroll of Fireball]] [ilvl::5] [gp::30]

#### D18. Telakín's Sanctum
> [!note]+ Read Aloud
> Behind the throne is a small chamber filled with ostentatious accoutrements. There is а bed, wardrobe, desk, and а small table in this room. The walls are covered in rich red velvet curtains and a strange rug of shifting, writhing geometric patterns on the floor. A large, full-body mirror stands in one corner of the room.

> [!tip]+ Treasure
> The rug is a minor magic item that is worth 50 gp but does nothing more than change patterns.
> 
> The chest is locked, requiring a DC 23 [[Skills#Thievery|Thievery]] check to open (although Telakin's key ring has the key). Inside the chest is а host of forged and original documents detailing Ardentia City treaties, merchant dealings, and religious papers. Although not pertinent to the party, they clearly illustrate the level of infiltration the gang possessed. In addition to these there is à sack containing 150 gp, a scroll of dominate person, and a missive written with a strange alien hand. The message reads: "I have a task for you, thrall. Meet me at the sewer junction beneath the cold forge and I will give you the details. There are some troublesome small minds that must be removed." The document is signed with some sort of symbol made to look like a spiraling tentacle (identical to that on Telakin's forehead).
> 
> Aside from the contents of the chest, the wardrobe contains every outfit in Player Core as well as 50 gp in jewelry.
> 
> - [ ] gp::250
> - [ ] consumable::[[Dominate|Scroll of Dominate]] [ilvl::11] [gp::300]

#### D19. Zyrxog's Entrance
Zyrxog, Telakin's mind flayer master has been watching events unfold through the use of his scrying pool. When he sees Telakin defeated, the mind flayer comes to investigate with a few of his drow thralls. When the PCs return to area D9, the secret door is open and Zyrxog and his minions are here waiting for the party to return.

```encounter
name: D19 Zyrxogs Enterance
party: Age of Worms
creatures:
  - 2: Drow Blademaster, Elf Thrall
```

**Tactics** Although Zyrxog is present here, he does not wish to personally combat the party at this time aside from launching a mind blast to open up combat (unless the drow are in the way). He hopes that his drow minions are sufficient to deal with the PCs and flees at the first sign of danger to himself, using _plane shift_ to go ethereal and return to his sanctuary.

After Zyrxog uses his mind blast, the drow move in to attack, cloaking the area in darkness and relying on Blind-Fight to offset the concealment penalties. Although they are thralls of Zyrxog and fight to the death, they do not carelessly throw their lives away. They use their powers and their alchemical items to best effect. Тһе drow wear boots caked with yellow phosphorescent fungus.

Zyrxog remains in the darkness throughout the fight, but anyone with darkvision can make out the mind flayer and can see that he wears the same symbol found on the papers in Telakin's room and on Telakin's forehead.

**Development** Once combat is over, the party is free to explore the tunnel leading out of this area. After only 50 feet it joins the [[Ardentia City]] sewer system, and tracking the group becomes difficult. Тһе only clue the PCs have to the mind flayer's location is the note from Telakin's room and the residue on the drow's boots. This fungus can be identified with a DC 21 [[Skills#Nature|Nathre]] check as a relatively rare harmless fungus called Beggar's Gold that grows in underground urban environments. It is not present in any of the nearby tunnels or sewers.

### Part 4: Zyrxog's Domain
Although the party has defeated Telakin and his doppelganger clan, they have only just begun to discover the conspiracy arrayed against them. Tracking down the mind flayer requires investigation below the streets of [[Ardentia City]] in the sewers beneath a business called Cold Forge, an armor and weapon smith located in the Seekers Quarter.

Sewer access can be gained via any one of a number of local grates. As most of these are in the middle of city streets, this is difficult to do during the day without being accosted by the city watch, who are suspicious of anyone venturing into the depths and seek to prevent such exploration whenever possible.

Once in the sewers, finding the entrance. to Zyrxog's domain is no easy task. The primary sewer tunnels are 10 feet wide and are half full of brackish water, up to 3 feet deep in some places. The tunnels are a maze of small chambers, large cisterns, and small pipes with no currently accurate maps.  Finding the entrance to Zyrxog's domain requires 1d6+3 DC 23 [[Skills#Survival|Survival]] checks.  A DC 21 [[Skills#Nature|Nature]] check is enough to reveal that Beggar's Gold often grows in sewers where runoff from smithies or forges can be found. With this information, the Survival check to Track them drops to DC 18.

A DC 23 [[Gather Information]] or [[Skills#Society|Society]] check is enough to locate the smithy called Cold Forge. The owner of this smithy, a foul-mouthed man named Crusty Patten, is unaware of the danger that lurks under his establishment.

If the party is searching for phosphorescent mold, finding Zyrxog's domain only requires a DC 18 [[Skills#Survival|Survival]] check.

Every hour spent searching comes with ап 8% chance of an encounter. If a battle breaks out, feel free to use a portion of the Map of Mystery on the last page of this issue to run the combat. Roll on the following table to determine what is encountered.

`dice: [[The Hall of Harsh Reflections#^SewerRandom]]`

| d%     | Encounter                                                                              |
| ------ | -------------------------------------------------------------------------------------- |
| 01-30  | Male human body rotting in the water with a large hole in its skull                    |
| 31-40  | Zyrxog's symbol on the sewer wall (+2 on the next [[Skills#Survival\|Survival]] check) |
| 31-55  | `dice: 1d4` Living Tar                                                                 |
| 56-70  | `dice: 1d4` Fuming Sludge                                                              | 
| 71-75  | Caustic Wraith                                                                         |
| 76-80  | Charnel Creation                                                                       |
| 91-95  | (2) Animate Dream                                                                      |
| 96-100 | (2) Prowler Wight                                                                      |
^SewerRandom

![[Drow Caves.png]]
### Drow Caves
A large patch of Beggar's Gold marks the entrance to Zyrxog's domain, just off an ancient and particularly deep (60 feet underground) sewer tunnel. The path to the mind flayer's personal domain crosses through an area of natural caves occupied by his drow thralls, who are generally not allowed in the main complex. The ceiling of these chambers and connecting corridors is 20 feet high unless noted otherwise. None of these caves are lit unless noted. The walls are unworked stone and the floors are uneven in most places, making the ground difficult terrain.

#### M1. Fungus Cavern (EL б)
> [!note]+ Read Aloud
> Patches of phosphorescent fungus light this large underground chamber, which Is littered with huge swaths of bright yellow fungus and toadstools of various sizes, some gigantic.

The center of this room is covered in [[yellow-mold|Yellow Mold]] cultivated by Zyrxog to keep the drow from leaving their caves and prevent intruders from wandering in. The yellow mold is very similar in texture to Beggar's Gold, and it takes a DC 28 [[Skills#Nature|Nature]] check to identify it properly as a result. Zyrxog uses levitate to move over the mold by clambering along the wall near the ceiling 20 feet above.

In addition to the yellow mold, this room is also home to a number of [[Shrieker]] that warn the drow of anyone approaching the area. The shriekers emit а piercing wail if any light or creature comes to within 10 feet. This shrieking persists for `dice: 1d4` 1d4 rounds and is audible throughout the cavern complex.

#### M2. Drow Sentries
This section of cavern corridor is relatively unremarkable. It slopes down toward area M3, where running water can be heard and reflected light glimmers in the distance.

Hiding above the passageway is a trio of drow thralls tasked with guarding the corridor. A ledge 10 feet above the passageway leads to a small alcove where the drow wait in absolute silence. If warned by the shriekers, these three set up an ambush, coating the floor below in flammable oil and preparing to throw alchemist's fire down at the party to ignite it. Once ignited, the oil burns for 2 rounds, dealing 1d4 points of fire damage to anyone in the affected area. Spotting the oil before walking into the trap requires a DC 21 [[Skills#Perception|Perception]] check. The cave wall leading up to them is relatively smooth, requiring a DC 20 [[Climb]] check. If not warned of the party's presence, the drow are reclining out of sight, relying upon their keen ears to hear intruders approach.

```encounter
name: M2 Sentries
party: Age of Worms
creatures:
  - 3: Drow Blademaster, Elf Thrall
```


#### M3. Spirit Pool
> [!note]+ Read Aloud
> The gently sloping passageway ends in a large chamber dominated on the far side by a pool of water formed by a leaking cistern above before flowing out of the room in a thin stream. Something in the pool glows pale green, bathing the room in shifting curtains of light.

The drow avoid lingering іп this chamber, fearful of the creature that lurks near the pool. When traveling through this room, they stay along the west wall, gathering what water they need from the stream before it disappears through a crack in the wall. 

This chamber is home to Fassash, a spirit naga with little respect for the drow that live nearby. Fassash is on friendly terms with Zyrxog, but not under the mind flayer's control. When the party enters this chamber, the spirit naga is relaxing, coiled around one of the stalagmites near the pool.

```encounter
name: M3 Spirit Pool
party: Age of Worms
creatures:
  - 1: Spirit Naga
```

**Tactics:** Fassash is not spoiling for a fight unless the party takes hostile actions. When the party approaches, the naga uncoils to look at them. The naga then demands an apology from the party for disturbing its slumber. Arrogant and cruel, the spirit naga assumes that he is greater than any humanoid and demands deference. Should the party show the proper respect to the mighty serpent and offer it at least 100 gp worth of treasure, Fassash lets the PCs by without incident. If sufficiently pampered with a DC 28 [[Skills#Diplomacy|Diplomacy]] check, he might even reveal a few cryptic clues about what lies beyond.

If combat does break out, Fassash uses _invisibility_ to flee the area and prepare himself with [[3-Rules/Character Building/Spells/F/Fly|Fly]], [[Mirror Image]] and [[Blur]] before returning to deal with the party, tracking them down if necessary. He prefers to use [[Black Tentacles]] followed by [[Confusion]] before engaging in melee.

> [!tip]+ Treasure
> The naga's pool glows due to a phosphorescent fungus that grows at its bottom, but this is also where his treasure is kept. Scattered around the bottom of the pool are 8 pp, an emerald worth 20 gp, and an ordinary corked glass bottle that. is actually [[bottled-air|Bottled Air]].
> 
> - [ ] gp::28
> - [ ] permanent::[[bottled-air|Bottled Air]] [ilvl::7] [gp::320]

#### M4. Drow Enclave
> [!note]+ Read Aloud
> The cavern opens up to a vast chamber, over forty feet in height with a shelf twenty feet above the floor off to one side. A short cage containing pent-up livestock has been constructed on the opposite side of the cave. А parred off passageway is set into the south wall. Faint patches of glowing moss light this chamber.

This chamber is used by the drow as a residence and training ground. The chambers up above are used for sleeping, while the majority of the guards spend their time on the floor below, training, relaxing, or preparing food.

The pen off to the side contains a half-starved cow and a number of pigs, brought down here to feed the drow. They gather the rest of their sustenance from the various types of fungus and moss that grow throughout the caves. The gated corridor to the south leads to the chattel pen, used to keep Zyrxog's food and a few undead minions.

```encounter
name: M4 The Enclave
party: Age of Worms
creatures:
  - 1: Myrianaas
    2: Drow Blademaster, Elf Thrall
```

А total of six drow rest in this room at any given time: two up in the sleeping area and four on the floor. Myrianaas, cleric of [[Sharathis]], leads this group.  All are completely loyal to their mind flayer overlord and fight to the death to prevent intruders from gaining access to his sanctum.

**Tactics:** If warned of the party's approach, the drow are all awake and ready for a fight. Myrianaas prepares by casting [[Bless]] and arranging her forces, She places one of the drow on the floor between her and the entrance, while the other one is up near the sleeping area prepared to fire its crossbow and join the combat from the flank when the time is right. Myrianaas only casts her short-duration spells when the PCs draw close (possibly while they deal with the spirit naga). She saves divine power until the PCs approach her in melee combat. Myrianaas flees to area M7 if sorely pressed, making her last stand there while assuring that Zyrxog is warned of the party's approach.

> [!tip]+ Treasure
> Aside from their gear, the drow have little else of value. Myrianaas maintains a small shrine to Sharathis up in the sleeping caves, which includes a small jade statue of the goddess worth 30 gp.
> 
> - [ ] gp::30

#### M5. Chattel Pen
A wall of iron bars running from floor to ceiling blocks the entrance to this chamber. An iron door is set into this wall of bars, but it is locked and only Myrianaas has the key. A DC 25 Open Lock check opens the door if the key is missing.

> [!note]+ Read Aloud
> Just inside the iron door stand four rotting corpses with large gaping holes in their heads. Beyond them is a chamber full of debris, scraps of cloth, mounds of straw, and pools of filth. Dark corridors stretch out from one side of the chamber.

Zyrxog uses this chamber to store those destined to become his next meals. The dark corridors lead to a small area where a few prisoners currently await their fate. The current crop includes a pair of merchants captured on their way into Ardentia City, an elven craftsman, and two young women caught heading home after a long day's work at a nearby tavern. These five do not dare attempt an escape, in part because of the zombies guarding the door and because of the deadly drow that lie beyond.

If freed of their bondage, these five are immensely grateful and quickly flee the area, assuming the party helps them get by the yellow mold. This group can describe the mind flayer that comes to collect them every few days. Aside from that, they know very little about this complex. Those that go deeper in do not come back out.

The four rotting corpses standing just inside the door are husk zombies. They have been ordered to prevent anyone from escaping, but have no orders about anyone entering the chamber. If the party attempts to leave this room or attacks the zombies, they attack, fighting until slain.

```encounter
name: M5 Chattel Pen
party: Age of Worms
creatures:
  - 4: Husk Zombie
```

#### Мб. Warding Glyph
> [!note]+ Read Aloud
> The cavern corridor widens into a small chamber before continuing onward. The floor has been smoothed here, and in the center is a large faintly glowing purple symbol.

The symbol on the floor is a permanent illusion, placed here to mark the boundary of Zyrxog's domain.

> [!danger]+ Trap
> The real danger in this chamber is a powerful glyph of warding scribed on the room's ceiling set to go off when апу non-attuned creature passes under it. A detect magic spots this hidden glyph, as does a DC 28 [[Skills#Perception|Perception]] check.
> 
> [[glyph-of-warding-blast-hb|Glyph of Warding (Blast)]]

#### M7. Tentacle Guardians
> [!note]+ Read Aloud
> Set into the cavern wall of this foreboding chamber are a pair of tall white marble double doors, streaked with veins of a faintly glowing purple crystal. Flanking the doors are a pair of tall ivory columns, each bearing a tentacular symbol burned into their surface.

The symbol on the columns is Zyrxog's personal seal, seen on Telakin's forehead and on the floor of the previous chamber.

The doors are not locked, but they are barred from the inside and must be battered open. The doors have hardness 8 and 120 hp, but they can be burst open with a DC 25 [[Skills#Athletics|Athletics]] check.

Zyrxog stations a group of creatures he's created here—terrestrial mollusks called [[octopin|Octopins]]. The octopins stay out of sight, hidden behind columns, stalagmites, and stalactites up near the ceiling. They use their penetrating gaze to keep an eye on the doors without revealing their presence. When the party approaches the door, they move out of hiding, hoping to surprise the PCs from every direction.

```encounter
name: M7 Tentacle Guardians
party: Age of Worms
creatures:
  - 3: Octopin
```

### Zyrzog's Sanctum
These last chambers make up the mind flayer's private hold, visited only by his most trusted allies. All of the walls are carefully carved marble with a repeating tentacle pattern. Unless otherwise noted, each of these chambers has a 40-foot-high ceiling, while the corridor ceilings are only 20 feet high. The doors are stone and, aside from the entry doors, unlocked.

#### М8. Stone Brain
> [!note]+ Read Aloud
> In the center of this tall domed chamber is a large brain, carved from a single block of purple-veined white marble. Its veins seem to pulsate with every breath you take, as if aware of your presence. Four stone benches are arrayed around the room, each with a pair of iron manacles bolted to the top.

Zyrxog created this chamber to break the will of particularly stubborn thralls who required too much of his attention to properly “convert” to his way of thinking. The brain in the center of the room is a sentient magic item, whose personality is a clone of Zyrxog's. Able to communicate telepathically with anyone in the room (and Zyrxog, if he is within a 1-mile radius), the brain's primary function is to break the minds of those chained to the benches. It can perform the same onslaught on anyone within 15 feet. None of the manacles are currently occupied, but some show signs of recent use.

> [!danger]+ Trap
> Once per round, the stone brain performs a mental assault against one target in the chamber. It moves from target to target, attempting to force compliance. Characters must make a DC 21 Will save.  On failure, the target is affected by a [[Dominate]] spell, becoming loyal to Zyrxog and hostile to the rest of the party. If the target makes its save, it instead becomes [[Enfeebled 1]].
> 
> The brain has hardness 5 and ceases functioning after taking 50 points of damage. If destroyed in this way, all creatures under its influence are freed (although the [[Enfeebled]] condition remains).

#### M9. Laboratory
> [!note]+ Read Aloud
> At the end of a long staircase, ап odd chamber reveals itself. A number of tall bookcases, a desk, and a large tank full of green liquid takes up half the room. A stone door stands closed on the opposite wall.

This chamber is Zyrxog's laboratory, where he created the octopins and perfected a number of his other insidious experiments. The bookshelves are full of books on anatomy and arcane fusion techniques. The desk contains numerous logs pertaining to the creation of the octopins, along with notes on a new experiment that has yet to begin. In this new experiment, Zyrxog hopes to create a parasite that hides inside its host and makes it very susceptible to suggestion, something he tentatively calls a "mind worm." The door in this chamber leads to Zyrxog's scrying pool and is not locked.

Creature: The tank in this chamber contains a large and rather nasty octo- pin that Zyrxog has been specially growing, Although not quite mature, it is still mobile and comes crawling out of the open-top tank when disturbed. When the party enters the room, it is hiding out of sight in the murk.

```encounter
name: M9 Laboratory
party: Age of Worms
creatures:
  - 1: Octopin Stalker
```

> [!tip]+ Treasure
> Although most of the equipment is too bulky to move and of little value in its current state, the library is worth 100 gp if sold to a collector with dubious purposes (or 50 gp if sold to a respectable dealer).  If the books are all moved to a personal library the provide a +2 circumstance bonus to both [[Skills#Arcana|Arcana]] and [[Skills#Occultism|Occultism]] when performing [[Research]].
> 
> - [ ] gp::100

#### M10. Viewing Pool
> [!note]+ Read Aloud
> In the center of a small round chamber is a perfectly calm pool of water, glowing with a faint blue light. A reflective green light flows out of a hallway, opposite the entry.

This small chamber contains Zyrxog's viewing pool. Anyone sitting on one of the benches and looking into the pool can view any location within 5 miles, as though using the spell clairvoyance. The location viewed must be well known to the viewer. Specifying an area never seen before results in the pool going dark. When the PCs enter, the pool is viewing Telakin's throne room as it currently appears.

The hallway beyond leads to a small balcony overlooking the cathedral of the mind (area M13). This balcony is 45 feet above the floor of that chamber, with no apparent way down.

#### M11. Museum
![[museum.png|right]]

> [!note]+ Read Aloud
> In the center of this large chamber is a grotesque ebony statue of a vulture-headed humanoid with large feathery wings and razor sharp talons at the end of avian digits. The rest of the room is taken up by large glass cases, each full of dark twisted artifacts, from a shrunken head to a tome chained shut and a number of jars containing the severed parts of numerous creatures.

This chamber is full of dangerous relics and things best left undiscovered. Zyrxog has spent most of his time in [[Ardentia City]] collecting and selling such oddities, having them imported or stolen when the owner proved difficult.

A permanent alarm spell wards this room, alerting Zyrxog of intruders with a silent mental alarm.

**Case #1** Sitting on the top shelf of this case is the preserved head of a juvenile black dragon whose eyes glow a faint green. This case also contains an odd black metal cage, covered in thorns, with nothing inside. Resting on a large velvet pillow is a cursed +1 unholy dagger that brings horrible misfortune to any that wield it. On the bottom are a kyton's chains that twitch and wiggle of their own volition.

**Case #2** The top shelf of this case contains four blank books labeled "unspeakable tome." A fifth book hides behind them, a vacuous grimoire. Beneath these is a weathered and tarnished bronze griffon figurine of wondrous power, Unfortunately, when used, the griffon is fiendish, and attacks the wielder until slain at which time it returns to its statue form. This case also contains four jars, each containing the preserved eyestalk of a beholder. There are six other empty jars behind these.

**Case #3** A petrified pseudodragon sits on top of this glass case, If returned to flesh, it could be convinced to serve as a familiar. The top shelf of this case contains a stuffed doll that bears an uncanny (but coincidental) similarity to one of the PCs—the doll is pierced with 20 spikes from a spiked devil. The doll radiates strong void energy, but has no apparent effect, A 4-inch-thick tome wrapped in chains sits next to the doll. The book is a tiny animated object and flies around the room, attacking everyone until slain, The book lists the names of 100 demons, including their home and details of their conquests. On the bottom shelf is a battered longsword sword cursed to cause the wielder to fly into a rage and attack anyone around them.

In the center of the room is a vrock statue, Although bound in this form, the magic holding the fiend in place is set to release if the statue or any of the cases іs disturbed. The effect can be disarmed like a trap if discovered (DC 25 [[Skills#Perception|Perception]] check) and disabled (DC 28 [[Skills#Thievery|Thievery]] check).

```encounter
name: M11 Museum
party: Age of Worms
creatures:
  - 1: Vrock
```

**Tactics:** If animated, the vrock quickly uses its mirror image ability while releas- ing its spores. It follows this up with a stunning screech before engaging in melee. It does not use its summon tanar ri ability during combat, preferring instead to rely upon its melee abilities.

> [!tip]+ Treasure
> See above for cursed [[Weapon Potency (+1)|+1]] [[unholy]] [[dagger]] in case 1.  Cursed [[Wondrous Figurine (Bismuth Leopards)]] can be found in case 2.
> 
> - [ ] permanent::[[Wondrous Figurine (Bismuth Leopards)|Bismuth Leopard Wondous Figurine]] [ilvl::8] [gp::495]
> - [ ] permanent::[[unholy|+1 unholy dagger]] [ilvl::11] [gp::1435]

#### M12. Hallway
This long hallway slopes down 30 feet before it reaches the floor of the cathedral of the mind (area M13). The walls of this hall are painted with a long frieze, depicting mind flayers marching across the surface of the world, with no sun overhead and all the races of the surface bowing before the tentacled horrors.

#### M13. Cathedral of the Mind 
> [!note]+ Read Aloud
> At the end of the long ramping hall, a grand chamber opens to a height of eighty feet. Opposite the entry is а tall octagonal column of jet-black stone, glowing with green symbols running up one of its faces. A deep pool of placid green liquid stands before the column, bathing the entire chamber in an otherworldly light.

If warned of their approach, Zyrzog is present in this chamber, waiting for them to enter. Continue with the following.

> [!note]+ Read Aloud
> Floating above the pool is a humanoid form with strange rubbery purple flesh, dressed in black robes, wielding a staff of red hot metal. Its head is hairless and bulbous, with four long tentacles where its mouth should be. Inside your head you hear an alien voice. "You dare enter my sanctum! Fools. I shall finish what Telakin could not. Your weak minds will be a sumptuous feast, your terror a pleasing garnish!"

Zyrxog created this chamber as a place that he one day hopes will play host to a small community of his ilk. The pool swims with the mind flayer tadpoles, still years from maturation and not yet ready for ceremorphosis (the process by which a mind flayer tadpole gestates in a host and becomes a full-grown mind flayer). Although disgusting, they are harmless at this stage in their lives.

Тһе column at the back of the pool is enchanted with powerful magic, creating an unhallow effect throughout the room. This gives Zyrxog and his minions а +2 bonus on saves and to AC against the attacks of holy creatures. It also prevents any nonevil outsiders from being summoned into the room. Finally, it protects all unholy creatures in the room with resist energy, granting them fire resistance 10.

If warned, Zyrxog and two octopins wait for the PCs in this room. Zyrxog floats 40 feet above the end of the pool under the effects of levitate. The octopins cling the wall above the entrance to the room, 30-feet above the floor. If the party avoids warning the mind flayer, he is in his chamber (area M14), studying his notes.

```encounter
name: M13 Cathedral of the Mond
party: Age of Worms
creatures:
  - 2: Octopin
  - 1: Zyrxog
```

**Tactics** If warned of the party's approach, Zyrxog prepares himself by casting false life and resist energy (of a type the mind flayer saw the PCs use in their fight against Telakin). If given the time, the mastermind also casts shield and displacement. When combat begins, Zyrxog uses mind blast against the party before his octopins charge down the wall to engage them. After this, he uses mind blast when possible and his metamagic rod to empower his lightning bolts when that is not an option. He uses suggestion to urge targets to throw all of their weapons to the bottom of the spawning pool or to take off heavy armor. Even if pressed, Zyrxog does not plane shift away in а vain hope of defeating the party to prevent them from raiding his private chambers and destroy- ing the tadpoles, ruining his plans and years of work.

The octopins charge down the wall seeking to expose the party to their gaze, while tearing into the weaker members in the rear.

> [!tip]+ Treasure
> Aside from Zyrxog's gear, the tadpoles in the pool are worth 1,000 gp if sold to the right shady dealer. However, if all the tadpoles are destroyed, the party should be awarded a hero point starting the next session.
> 
> - [ ] gp::1000

> [!warning]
> **Advance players to level 9 following this encounter.**

#### M14. Zyrxog's Private Chamber
Behind the black column, Zyrxog maintains his private quarters, where he rests and contemplates his plans. The room contains a desk, two bookshelves full of books pertaining to [[Ardentia City]] and the areas beneath it, and a locked chest (Zyrxog carries the key). Lying open on the desk is a ledger, written in Undercommon. It details the mind flayers recent business transactions in rare and dangerous items with patrons throughout the city. The most recent lists a payment for the sale of an ancient relic listed as the Apostolic Scrolls. This transaction is between the mind flayer and [[3-Rules/Bestiaries/Uniques/L/Loris Raknian]], director of the [[Bloodstone Arena]]. Of more import to the PCs is a note that Raknian also paid Zyrxog to assassinate the PCs. Discovering Raknian's motivations and the truth behind the Apostolic Scrolls is covered in “The Champion's Belt," the next installment of the Age of Worms Adventure Path. 

> [!tip]+ Treasure
> Opening the chest requires a DC 25 [[Skills#Thievery|Thievery]] check. The chest contains large bags full of coins. The bags contain 950 cp, 220 sp, 100 gp, and 5 pp. А fifth bag contains loose gemstones totaling 150 gp in value.
> 
> - [ ] pp::5
> - [ ] gp::250
> - [ ] sp::220
> - [ ] cp::950

### Concluding the Adventure
Should the PCs fail in their mission, they are more than likely dead. Should they survive, they have undoubtedly learned that they have a powerful new enemy— [[3-Rules/Bestiaries/Uniques/L/Loris Raknian]]. As long as the PCs remain in [[Ardentia City]], they are in danger.

A few days after the PCs defeat Zyrxog and have had a chance to rest and recuperate, but before they have a proper chance to act on the information they've learned about Raknian and his mysterious interest in their livelihood, [[Eligos]] sends them a note inviting them to his estate for dinner. The next adventure іп the Age оf Worms Adventure Path, that adventure begins with this meeting.