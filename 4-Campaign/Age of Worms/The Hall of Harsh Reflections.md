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

**Dwarf Crafters:** These dwarves are carting a shipment of metal tools to [[Ardentia City]]. Each dwarf is a [[Merchant]] and carries a bag of goods. They're willing to sell their goods on the road if the buyer seems reputable, and defend themselves and their goods if attacked, but they are not soldiers and would rather be robbed than killed. 

**Gnome Traders:** The gnomes are returning from [[Ardentia City]] after bargaining for exotic goods. They're interested in buying small gems and pieces of jewelry, and have minor alchemical items (25 gp or less) for sale. Each is a [[Merchant]]. As with the dwarves, they'll fight to protect their property but run away if they think odds are they'll be killed. 

**Halfling Farmers:** These [[Farmer]] have bags of herbs and pipeweed they're bringing to market. They don't like to trade on the road and only do so if there is a halfling PC. They run away if attacked. 

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
> [!note]+ Read Aloud
> The path before you shimmers like solid light—an immense crystalline bridge stretching across the open air, its surface humming faintly beneath your steps. Below, clouds swirl in the fractured skies, and far above, airships drift lazily between the spires. As you near the city, the sheer scale of Ardentia comes into focus: towering citadels and mage-lit towers crowd the skyline, their runes glowing softly in the twilight. 
> 
> At the far end of the span, the gates of Ardentia stand tall—massive doors of silver-inlaid stone flanked by towering statues whose eyes flicker with warding light. Before them wait the [[Luminous Vanguard]]: armored sentinels clad in polished crystalline mail that shines with a faint inner glow, their tabards marked with the radiant sunburst of their order. Their discipline is palpable, every movement precise as they watch the flow of merchants, seekers, and travelers filing toward the gates.

Gaining access to [[Ardentia City]] is a lengthy endeavor that involves waiting in line for 2 hours, followed by an inspection performed by the guards at the gate. Although the city is open to all and relatively safe, the [[Luminous Vanguard]] has stringent laws against contraband (namely destructive magic, drugs, and any poisons). If disguised as commoners with a [[Skills#Deception|Deception]] check (opposed by three [[Skills#Perception|Perception]] checks by the guards) the party is let through the gate after a simple questioning of their name and business. Otherwise, read or paraphrase the following when the PCs approach the gate.

> [!note]+ Read Aloud
> One Vanguard steps forward as you near, his helm catching the light of the crystalline bridge. His voice rings clear and commanding, carrying authority without harshness. 
> 
> “Halt. You stand before Ardentia, jewel of the Highlands. State your names and your purpose within these walls.”

While the guards have nothing against the PCs, they tend to give a hard time to those outfitted better than themselves. After recording the names of all the party members, the guards ask to take a look at their possessions, citing the need to search for contraband. They look very suspiciously at all weapons and unusual gear, especially any odd talismans, jars containing green worms, or obviously magic items. After the inspection, which is conducted with a healthy dose of concerned looks and disapproving sighs, the guards inform the party that some of their gear may need to be confiscated. Although patently untrue, the guards are looking for a small bribe (5 gp or more) to ease the party's passage into the city. A successful DC 20 [[Sense Motive]] check makes this clear. Should the PCs proclaim their innocence forcefully and repeatedly, the guards let them. in without much protest. Should any of the PCs actually possess contraband (such as poison or drugs) it is confiscated and the PC is fined 20 gp per dose or banned item.

Once they're inside the Ardentia City, read or paraphrase the following to the PCs.

> [!note]+ Read Aloud
> The cobbles of Ardentia’s Merchant Quarter gleam faintly with embedded shards of crystal, worn smooth by countless footsteps and scored by the deep ruts of wagon wheels. The streets surge with life—humans, elves, dwarves, and stranger folk from across the fractured lands, their garb ranging from simple travel-stained cloaks to flowing robes alive with enchantments. The creak of laden carts mingles with the flutter of banners and the calls of merchants hawking rare wares: shimmering fabrics, alchemical brews, enchanted trinkets, and spices that perfume the air.
> 
> The aroma of fire-roasted meats, fresh-baked bread, and sizzling street fare battles with the less pleasant scents of sweat, beasts of burden, and the ever-present tang of ozone from nearby crystal lanterns. Floating familiars dart overhead, carrying messages or balancing trays of goods, while enchanted signboards flicker with runes promising bargains within.
> 
> Amid the chaos, the orderly presence of the Luminous Vanguard keeps the thoroughfares open, their polished armor gleaming as they guide the throngs with an authority that brooks no argument. Above it all, the distant spires of the Conclave glimmer like watchful eyes, a reminder that magic rules as firmly here as coin.

The following two encounters occur while the party travels between various locations on the streets of the [[Ardentia City]]. They can be used any time during the adventure, and are designed to breathe life into the urban environment and fill in the gaps during slow periods.

### Event 1: Рarade of Thieves
While making their way through Ardentia, the PCs find their progress blocked by a parade of street performers and a small menagerie making its way down the street, A large crowd has gathered on both. sides of the street, hoping to get a glimpse of exotic monsters and daring jugglers.

> [!note]+ Read Aloud
> The intersection ahead is packed with a throng of people, straining their necks and cheering as a pair of jugglers, preceded by a large metal cage, makes its way down the cross street. The parade continues to roll past, displaying the talents of numerous street performers and various caged beasts. One large and extravagant cage on a horse-drawn wagon actually consists of two cages. The inner cage is made of iron bars, with panes of glass mounted outside the bars on all four sides. Within is a three-headed monstrosity with the heads of a goat, a lion, and a brilliant blue dragon. As the parade trundles along, the beast roars over and over as its dragon head blasts the iron cage with bolts of electricity that play along the metal bars.

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

 The Merchant's Quarter is a diverse and busy neighborhood, packed with shops from dozens of nations and numerous inns that cater to merchants and travelers from far away lands. The buildings here reflect this diverse ethnicity, as few look alike and construction styles vary wildly from building to building. Structures made from stone, fancifully carved wood, and countless other more exotic materials.

Located in a part of the Merchant's Quarter known as “Midnight's Muddle,” the Crooked House has seen better days. Parts of its foundation have failed, resulting in a building out of sorts. The inn boasts few right angles, and none of the floors are level. However, the place has a charm not seen in many of the other buildings in the district. Its owner, [[Tarquin Shortstone]] XXIV, takes pride in his establishment, and despite its condition he keeps everything in working order, clean, and mostly safe.

Tarquin (NG male gnome) runs an honest business, catering to both locals and visitors alike, Many of the owners of local businesses stop by the Crooked House for a pint after closing up for the evening. Tarquin encourages this by cutting most of them a good deal and engaging them in lively conversation about business and local events. He is equally friendly to newcomers, offering up his rooms for the modest price of 6 sp per night, including a small meal in the morning.

The taproom of the Crooked House is often busy late into the night, and things can sometimes get rather lively, especially when a local bard or street performer stops by to entertain the guests. The PCs are free to take a turn on the small stage as well if they possess the skill. Tarquin does not take a cut of the earnings made by any of his performers, and instead offers them free drinks so long as their performances draw more business.

Inside the inn, the taproom is decorated with numerous trophies, primarily owlbear heads, of which Tarquin is rather fond. The tables have uneven legs so that they sit level on the slightly sloping floor. The staircase leading upstairs is a bit. treacherous, as it has shifted significantly over the years. The rooms are all of good quality, containing a straw mattress bed, wardrobe, and table with an oil lamp.

When the party arrives, Tarquin is busy serving up a meal and asks if the PCs are interested in joining. He has a number of rooms available, all singles. His double rooms and party rooms are currently rented out to a merchant caravan. that just arrived in the Free City. However, should the PCs mention that [[Eligos]]. sent them, Tarquin cuts them a deal (4 sp per night) and throws in free drinks. [[Eligos]] and Tarquin are old friends and frequently meet at a local dragonchess parlor for a friendly game.

It is about this time that [[Loris Raknian]], director of the [[Bloodstone Arena]], learns of the party's arrival in town. He contacts [[Zyrxog]] and arranges for their destruction the same day, Although events are starting to move against them, the PCs have a few days to explore [[Ardentia City]], make purchases, and relax before the action begins.

### Воdу Thíef
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

TAVERN PATRON (14) CR1 Male human commoner 2
NG Medium humanoid
Init -1; Senses Spot -1, Listen -1 Languages Common
АС 9, touch 9, flat-footed 9
hp 11 (2 HD)
Fort +1, Ref-1, Will -1
Spd 30 ft.
Melee knife +2 (1d3+1/19-20) Ranged bottle -4 (1441)
Base Atk +1; Grp +2
Abilities Str 13, Dex 9, Con 12, Int 11, Wis 8, Cha 10
Feats Skill Focus (profession), Toughness
Skills Handle Animal «5, Profession (any one) 47, Use Rope +4
Possessions two bottles, knife, 4 sp

**Tactics:** As this fight occurs in the taproom of the inn, you should determine if any of the PCs are wearing armor and what weapons they carry before the fight begins. [[Tarquin]] finds it rude to be fully armed and armored in his establishment, but lets it pass if the PCs are insistent or sweet talk him with a DC 23 [[Skills#Diplomacy|Diplomacy]] check. Unarmed PCs can fight using the same weapons as the patrons, knives (treat as daggers that deal 1d3), bottles (improvised weapons that deal 1d4) and chairs (improvised clubs). Throughout the fight, [[Elaxan]] uses Spring Attack to move up into a flanking position, take an attack, and back away before the PCs can retaliate, If dropped to below 10 hp, he attempts to flee, changing shape to that of a peasant woman the moment he is out of sight.

**Developments:** Four minutes after [[Tarquin]] is attacked, the city watch arrives on the scene and arrests the party unless they can prove their innocence (see the cast article in DUNCFON 118 for some sample city watchmen). If the PCs have killed any of the tavern patrons, they are arrested whether or not they prove that they did not hurt [[Tarquin]]. Should the PCs kill [[Elaxan]], he reverts to his true form, much to the shock of all present. This evidence alone is enough to clear the PCs of any charges by the crowd and guard. Should [[Elaxan]] be searched, he has daggers that match the one used to attack [[Tarquin]]. Without this proof, convincing the city constables requires а DC 28 [[Skills#Diplomacy|Diplomacy]] check and a rather good explanation. Elaxan's pouch contains a strangely crooked key attached to a small keychain. The key's head bears a unique design of a ship being pulled underwater by a huge octopus. This key can unlock the front door to the doppelganger's hideout, a warehouse down by the river called "Sodden Hold." A DC 20 [[Skills#Society|Society]] check allows a character to recognize the design on the key as the same as a design over several old warehouses in the [[Shattered Ward]], although most of these warehouses have been torn down and replaced with newer buildings. If none of the PCs figure this out, а DC 21 [[Gather Information]] check uncovers the same clue. In addition, the informant can tell the PCs that the octopus standard was the mark of a now-dead merchant who once owned several warehouses along the waterfront. Most of these buildings have been sold off and rebuilt, but one still stands—Sodden Hold.

If the PCs are arrested, they spend the night in jail, stripped of all their gear and spell components. In the morning, using their agents within the city watch, the doppelgangers have the PCs delivered to their hideout as noted in the sidebar "Delivered into Danger."

Assuming [[Tarquin]] survives, he is very grateful to the party if they prove their innocence. He offers them free room and board for a month as reward. If the poor innkeeper dies as a result of the attack on his life, his son takes over the business soon after. Obviously, if the party members do not prove their innocence, they are forced to leave the fine establishment.