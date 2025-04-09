---
title: Session 76 - Returning North, Again
aliases:
  - Session 76
session_num: 76
real_date: 2025-01-07
summary: fighting dwarves in [[Skaalheim]].
plot-device: The party has erroneously arrived in [[Skaalheim]] while tyring to teleport to [[Norhvík]]. They decide to stay a day and end up helping the villagers fight of a raiding group of dwarves that emerge from the ground. They then spend the day basking in the glory of beiing heros before returning to the [[Nordnes Wizard Tower]] the next day. They manage to telport correctly and gets back on a path to [[Norhvík]]. Once there, they get to catch up with the denizens on what has happened for the past year and prepare for the ritural at the spring equinnox. For the ritual, they will have to choose between resurrecting [[Arryn Atter | The Last Hunter]], and [[Naeryndam]].
fc-date:
  day: 1
  month: 3
  year: 1001
fc-category: Session
fc-calendar: Chip of the old block
fc-display-name: Session 76 - Returning North, Again
day_suffix: st
category: event
type: session
tags:
  - Session
  - Event
status: ✅
sun_position: "![[sun_1001-3-1.png]]"
monthName: Tarsakh
---

# Session 76 - Returning North, Again <span style="float:right">Status: `INPUT[inlineSelect(option(❌), option(✅)):status]`</span>

> [!note | clean no-t]
> <span style="float:left"> **←** [[Session 75 - Returning North Going South]] </span> <span style="float:right"> [[Session 77 - A Pact Upheld]] **→** </span>

> [!infobox]-
> # Sun & Weather <BR/> ![[sun_1001-3-15.png]]
> *<center>Average sun motion during Tarsakh</center>*
>
>> [!infobox]- `VIEW[mod({fc-date.day}, 30)]`<sup>st</sup> Tarsakh - Skaalheim
>>
>> | |
>> |:-:|:-:|
>> | 0-6 | 🌙<font size=2>Cloudy 3C, WC: -1C, Light breeze</font>
>> | 6-12 | 🌞<font size=2>Few clouds 2C, WC: -2C, Light breeze</font>
>> | 12-18 | 🌞<font size=2>Few clouds 4C, WC: 1C, Light breeze</font>
>> | 18-24 | 🌞<font size=2>Clear skies 6C, WC: 5C, Light air</font>
>
>> [!infobox]- `VIEW[mod({fc-date.day}+1, 30)]`<sup>nd</sup> Tarsakh - Norhvík
>>
>> | |
>> |:-:|:-:|
>> | 0-6 | 🌙<font size=2>Cloudy -10C, WC: -18C, Gentle breeze</font>
>> | 6-12 | 🌙<font size=2>Heavy clouds -11C, WC: -15C, Light air, Slight snow</font>
>> | 12-18 | 🌞<font size=2>Cloudy -10C, WC: -13C, Calm</font>
>> | 18-24 | 🌙<font size=2>Some clouds -9C, WC: -12C, Calm</font>

*The `VIEW[{fc-date.day}]`­`VIEW[{fc-date.day} == 1 ? "st" : {fc-date.day} == 21 ? "st" : {fc-date.day} == 2 ? "nd" : {fc-date.day} == 22 ? "nd" : {fc-date.day} == 3 ? "rd" : {fc-date.day} == 23 ? "rd" : "th"][math():day_suffix]` of `VIEW[{fc-date.month} == 1 ? "Alturiak" : {fc-date.month} == 2 ? "Ches" : {fc-date.month} == 3 ? "Tarsakh" :{fc-date.month} == 4 ? "Mirtul" : {fc-date.month} == 5 ? "Kythorn" : {fc-date.month} == 6 ? "Flamerule" : {fc-date.month} == 7 ? "Eleasias" : {fc-date.month} == 8 ? "Eleint" : {fc-date.month} == 9 ? "Marpenoth" : {fc-date.month} == 10 ? "Uktar" : {fc-date.month} == 11 ? "Nightal" : "Hammer"][:monthName]` `VIEW[{fc-date.year}]` in the 16th age.*

> [!column| 3 clean no-t]+
>> [!note | clean no-t]
>> ```dataview
>> TABLE without ID file.link AS "NPCs", string(age)+" "+string(gender_name)+" "+string(race.name) as "Biography", status as "OK?"
>> FROM #NPC AND "5. World Encyclopedia/NPCs"
>> WHERE econtains(file.inlinks, this.file.link) OR contains(file.frontmatter.session_appearances, this.session_num)
>> SORT length(session_appearances) DESC
>> LIMIT 10
>> ```
>
>> [!note | clean no-t]
>> ```dataview
>> TABLE without ID link(file.name, file.frontmatter.name) AS "Items", type as "Type", "🪙<font color='#D8B800'>"+string(value)+"gp</font>" as "Value"
>> FROM "5. World Encyclopedia/Campaign Items"
>> WHERE econtains(file.inlinks, this.file.link)
>> SORT file.frontmatter.value DESC
>> LIMIT 10
>> ```
>
>> [!note | clean no-t]
>> ```dataview
>> TABLE WITHOUT ID size+" of "+file.link AS "Settlements", population as "Population", status as "OK?"
>> FROM "5. World Encyclopedia/World Overview/Settlements"
>> WHERE econtains(file.inlinks, this.file.link) AND type = "Settlement"
>> SORT file.name ASC
>> LIMIT 3
>> ```
>>
>> ```dataview
>> TABLE WITHOUT ID link(file.name, "🏠"+file.name) AS "Locations", type+" in "+link(location) as Type, status as "OK?"
>> FROM "5. World Encyclopedia/World Overview" AND #Location
>> WHERE econtains(file.inlinks, this.file.link) AND type != "Settlement"  AND type != "Nation"
>> SORT file.name ASC
>> LIMIT 7
>>```

## Plot Device

`=this.plot-device` 

## Intro

Last session, we went through the month of Ches (2) as you were finishing up your business in [[Elesora]]. You got a letter from [[Calandria Gilmaris| The Queen]], who was willing to postpone your audience until the 8<sup>th</sup> of Mirtul (4). Some of you pit-fought, other's trained with swords or commissioned magical weaponry. Some of you had bad dreams, and some of you found a different path. [[The Tumblers]]

During the month, [[Clarissa Bumbleleaf|Clarissa]] approaches you and tells that she has come in contact with the Hobbit Rebellion organization here in Elesora that her cousin runs. Her cousin is not in town currently but you can see her eyes shine with renewed adventure lust that you have seen in several weeks.

Although it needs no explanation, Clarissa tells you that she struggles with the weight of your quest, that she still feel ashamed of killing all of the druids and struggles emotionally with going back north to see them in their eyes. She expresses that after everything that happened with [[Mithyra Vriss Forthoc|Mithy]], with herself dying in the first Beholder fight and then Azgragor dying in the second fight, she's in dire need for some change of pace, and that she won't be following you on the next leg of your journey. *"You were wonderful, we were wonderful. Thank you and I'm sorry."*

**[pause]**

The month then progressed, and eventually the morning of the 1<sup>st</sup> of Tarsakh (3) rolled around, and you decided that it was time to leave. In the basement of [[The White Peach]], you cleared some space, and [[Mournn Evenstar|Mournn]] drew out the sigil of the circle in the [[Nordnes Wizard Tower]]. As Mournn was finishing the final incantation, the three of you, the three remaining members of the Beehill Adventuring company, three orneic adventurers, locked eyes with each other and affirmed each others commitment to the cause. It seemed that it would be the endurance of the orcs who would see this through after all, not the wits of some elf or the curiosity of some human. And with that, you were whisked away  from the dreary winter quarters of The Grit and Elesora, and off north, to the next adventure.

## Story progression

> [!infobox | bg-orange]-
> # Setting the scene
> - [x] Who is the point of view character of this scene?                 
> - [x] What characters are present in the opening of this scene?
> - [x] Where is this scene set?
> - [x] What time of day or year, etc. is it at the beginning of this scene?
> - [x] What is the mood of this scene in the beginning?
> - [x] What from the above list has changed since last session?

### Setting the Scene

> [!infobox | bg-orange]+
> # Housekeeping
> - [x] [[Azgragor Virkan|Azgragor's]] and [[Yelungo Verdtujin|Yelungo's]] max HP is now restored to 40 above half.
> - [x] Ask the players who (which character) kept best track of the dates last time they went to Norhvík. Tell them that it took them 23 days to reach [[Norhvík]] from [[Nordnes]], and from Norhvík there's roughly another four days to [[Temple of Life|The Island]].

*A small unassuming 15ft empty hallway, with masoned walls, on which a 5 ft wide niche leads to the backside of a secret door. In the center of this hallway or T-junction, a plate of silver is embedded in the floor and slightly protruding out of it. Into it, the magical runes of a teleportation circle is drawn. The runes flares for an instant as the three of you appears on top of the plate, stepping out in the dim red-orange sourceless light that illuminates this chamber.*

> [! | clean no-t]-
> <span data-date='1001-Tarsakh-1' data-category='Other' data-name='Party arrives in Nordnes Wizard Tower from Elesora.'></span>

*After a quick deliberation on whether you should brave the winding halls of the wizard tower or not, Mournn remembers that she figured out that because you can teleport to the wizard tower, the room that you're currently in must be on the same plane and can therefore be teleported from. Azgragor hands [[The Dawnfather's Light (Campaign)|The Dawnfather's Light]] to Yelungo to take them onwards to [[Norhvík]].*

*Yelungo, you focus in [[Mårten's]] general store and café, remembering the clattered bar disk and shelves over which the craven but kind elderly half-elven [[Mårten Norhvík]] sold you a set of grenades last year, you remember the café area with its 6 round tables set with dated and fringe-worn table cloths, and the large open hearth up against the wall. And with that picture crystal clear in your mind, you cast the teleporation spell from the orb, and you feel yourself and your compatriots being compressed into a tiny spec of nothing, as you're pushed through an impossibly thin tube at lightning speeds. Even if this unfolds over a fraction of a second, there's no doubt in your mind what you experience. You can feel that you're moving closer to Norhvík in this subliminal space between the fabric of the material plane, but as you're about to approach, there's a tug in a different direction and you can feel yourself veer of course and curve just before arriving.*

> [! | clean no-t]-
> <span data-date='1001-Tarsakh-1' data-category='Other' data-name='Party arrives in Skaalheim after teleporting from Nordnes Wizard Tower'></span>

*You blink, and you find yourself standing on a rocky shoreline with your two friends. You feel like something didn't went as it should've, but at first glance you see no immediate problem. Ahead of you, a small fishing village of 30 or so houses, situated on the slopes of a mountainous region, with heavy snow resting on the on top. But two things are off. There's no snow on the ground, infact, it's essentially the same weather as when you left Elesora; close to freezing. Tuffs of  green grass and the odd tiny yellow or white flower stick up out of the ground. The second thing that's off as you glance into the open thoroughfare in the village about 500 ft away, is that you see a tall woman with black hair, white skin and black striations walking casually through the early morning streets. A goliath. You glance at your friends and you can see the worry and confusion in their eyes. What happened? Where are you? What do you do now?*

### Travelling Northward

|             |  Nordnes  | Norhvík | The Island |
| ----------- |:---------:|:-------:|:----------:|
| [[Elesora]] | TP Circle | 4511 km |  ~4550 km  |
| [[Nordnes]] |           | 441 km  |   488 km   |
| [[Norhvík]] |           |         |   56.5km   |

### Staying in Skaalheim - Dwarven raid
*See also: [[Skaalheim]]*

The Party has arrived in Skaalheim, a similar village located on the same longitude but on the southern hemisphere on the corresponding latitude. 

> [!info | ttl-c bg-c-orange]- Skaalheim
**Similarities & Differences.** In many ways the village is similar to Norhvík, but the villagers consisting of Goliaths and Humans are occasionally raided from below by Dwarves. Another difference is that it's located on the eastcoast, which would at first give the appearance that they are still in the northen hemisphere, if they make the erroneous conclusion that the sun stands in the south. However, the sun rises over the sea, indicating that they are on an eastcoast, and from the fact that there's no snow, the seasons must be flipped, meaning that they are on the southern hemisphere. 
> 
> **Languages.** The people here talk other versions of their respective languages (mainly giant and common), that the party does not understand. 
> 
> **Sunlight.** Since the party left [[Elesora]] at first light, the sun has already risen over the ocean to the northeast, but only slightly, since it's close to the equinox, the day-night is almost universal regardless of latitude.
> 
> **Distance to the North.** If the party want to try to teleport using the orb away from Skaalheim, its roughly 13 300 km to [[Norhvík]]/[[Nordnes]].

A short time after the party has settled into the the Watchstone, the War Gong starts ringing out. The men in the Watchstone rush to the armory, picking up crossbows, spears etc and runs out the front doors. When the party rushes over, they can hear the screams of villagers in the center of the village and see a smoke pillar that are rising from a larger multi-storey building. They also see some 1500 ft away up the hillside a huge millipede with dwarven made armor plates erupts out of the hillside, followed by several dwarves, some of them carrying large objects looking vaguely like anvils.

The party must choose which encounter to focus on, the villagers will focus on the other.

> [!column | clean no-t]
>> [!note | clean no-i] #### Village Center
>>> [!warning | bg-c-red] ***The Party didn't choose this path!***
>>
>> The dwarves have tunneled into the cellar of a large, multi-story building in the village center. From here, they are spilling out into the streets, creating chaos. Accompanying the dwarves is a large spider-like construct with pike-shaped legs and an unstable flamethrower attachment, which is threatening to ignite nearby homes. The construct stabs with its legs and releases gouts of flame while nimble dwarven warriors spread out to attack villagers and torch smaller structures.
>> ##### Skill Challenge
>> **Goal:** Navigate the chaotic streets to approach the dwarves while mitigating collateral damage and saving villagers.
>>> [!info]- Skill Examples (DC 15)
>>> * **Athletics**: Break through debris, push carts aside, or lift fallen beams to clear a path.
>>> * **Perception**: Spot hidden dwarves lurking in alleyways or identify the best route to flank the spider construct.
>>> * **Arcana**: Identify the unstable nature of the construct's flamethrower and avoid its blasts.
>>> * **Persuasion**: Direct panicked villagers away from the chaos.
>>> * **Medicine**: Stabilize an injured villager.
>> 
>> ###### Outcome Modifiers (Failures)
>> * **0 Failures**: The party surprises the dwarves and the spider construct. The flamethrower starts the fight partially damaged (on a critical fail roll, it explodes). No villagers are harmed.
>> * **1 Failure**: Several villagers are injured, and nearby homes are smoking but not fully ablaze. The spider construct begins combat with its flamethrower intact.
>> * **2 Failures**: Homes are actively on fire, creating small zones of fire damage in the battlefield. Some villagers have died.
>> * **3 Failures**: Fires spread wildly, creating dangerous terrain (players take `dice: 1d6` (1d6) fire damage when moving through fire zones), and more dwarves have entered the fight (add an additional warrior).
>> 
>> ###### Progression
>> * **Roll 1**: Party is met by fleeing villagers. They can hear mechanical sounds, the smashing of glass and angry shouts in dwarvish.
>> * **Roll 2**: Party sees the Spider construct and its driver crawl over over a rooftop and down the other side, using its flame weapon, disappearing out of sight. They pass by a building that seems hurriedly raided and damaged.
>> * **Roll 3**: Party comes into view of the raiders.
>> ##### Encounter
>> ```encounter
>> name: "Village Center Battle"
>> creatures:
>> - 1: Spidertron
>> - 1: Spidertron Operator
>> - 2: Dwarven Grenadier
>> - 3: Dwarven Warrior
>> ### ---
>>
>> name: On 3 fails
>> creatures:
>>  - 1: Dwarven Warrior
>> 
>> ```
>
>> [!note | clean no-i] #### Hillside
>>>[!hint | bg-c-green] ***The Party did choose this path!***
>>
>> On the steep, rocky hillside above Skaalheim, dwarves are emerging from a tunnel and setting up four Power Rammer devices—sturdy, arcanotechnical machines designed to hammer the ground and destabilize the hillside. Their goal is to trigger a rock slide that will sweep down into the village. Accompanying them is a [[Armored millipede | huge armored millipede]], its segmented body bristling with drills and hooks, ready to defend the dwarves and their machinery.
>> ##### Skill Challenge
>> **Goal:** Scale the rocky slope and stop the dwarves before the Jack-hammers cause a landslide.
>>> [!info]- Skill Examples (DC 15)
>>> - **Athletics**: Climb the icy, steep slope to reach the machines.
>>> - **Survival**: Find the safest and most efficient route through the hillside snowdrifts.
>>> - **Stealth**: Approach the dwarves without alerting the millipede.
>>> - **Arcana**: Analyze the machines to determine how to disable them.
>> ###### Outcome Modifiers (Failures)
>> - **0 Failures**: The party surprises the dwarves mid-setup. The Power Rammers are inactive.
>> - **1 Failure**: One Power Rammer is operational, adding periodic tremors (Encounter area difficult terrain below Power Rammers).
>> - **2 Failures**: Two Power Rammers are running, destabilizing the hillside (Dexterity DC15 saving throw needed at start of round, or getting proned below Power Rammers).
>> - **3 Failures**: All Power Rammers are operational, and part of [[Extreme Environments#Avalanche | the slope collapses]]. The battlefield has areas of Difficult Terrain, and villagers below take losses. The party is 100 ft away from the Power Rammers and initiative starts when the first person resurfaces.
>> ###### Progression
>> **Roll1:** Party passes a human family that has taken shelter in a small crack up against a rock outcropping near the foot of the hill. Up on the hill three dwarves are moving these large machines, easily the size of any of the dwarves, into a line, each machine separated by 30 or so ft.
>> **Roll 2:** Party is climbing over sharp and rugged rocks, getting roughly halfway up the hill. The millipede is burrowing into the ground below the machines, loosening the rock and silt. 
>> **Roll 3:** The party are closing in on the dwarves. Two other armored dwarves are patrolling the hillside. The dwarves who put the machines in place are tinkering with them to start them up.
>> ##### Encounter
>> ```encounter
>> name: Hill side Battle
>> creatures:
>> - 1: Armored Millipede
>> - 3: Dwarven Engineer
>> - 2: Dwarven Warrior
>> ```

#### Aftermath

The party  knocked the dwarves unconscious, one of the dwarven warriors was killed while unconscious by collateral damage from Azgragor's [[Javelin of Lightning (Campaign) | Javelin of Lightning]]. They were taken back into the village for questioning, where Yelungo determined that they were infact evil. Since the party felt like they didn't have the time or the resources to delve into the earth and eradicate all of the dwarves, they instead send the dwarves off with a message that the village is protected, and if they want to keep sending their people to die, they can do so.

They then helped the villagers throughout the day to to deal with the aftermath, and instructed them on how to secure the hillside to their best of their abilities. They joined the villagers for supper and was gifted fine shirt of local make. They were offered to stay for the Aurumn Equinox by [[Ragna Hildirskjold|Ragna]], but they politely declined and used [[Teleportation Circle]] on the next day (2<sup>nd</sup> of Tarsakh) to travel back to the [[Nordnes Wizard Tower | Wizard Tower of Nordnes]].

### Leaving the village
> [!infobox | bg-orange]+
> # Point of order
> - [x] Remind Jesper that each casting of [[Teleportation Circle]] consumes specific resources.
> - [x] [[The Dawnfather's Light (Campaign)|The Orb]] can only be used once on a day for teleportation and might need several days to recover charges.

*See: [[Teleportation Error]]*

The party can immediately leave any village and use [[Teleportation Circle]] to go back to Nordnes, or they can wait until the orb recharge and try to go directly to [[Norhvík]]. 

* Whenever they try to teleport directly to Norhvík (**Familiarity:** Seen Casually),  they do so with disadvantage (You roll the disadvantage) because of the leyline effects in the area.
* If the party tries to teleport to the [[Temple of Life | The Island]], they each take `dice: 3d10` (3d10) of force damage and the spell fails.

On another "Similar Area", they end up in `dice: [[Session 76 - Returning North, Again^RandomVillage]]`

### Interacting with the villages

If the party decides to try to repeat the process, they will end up in a different locale each time. Consult the table below and follow the individual settlements links to run the session if they start interacting with the town or the villagers. 

**Languages.** Every place talk a different unintelligible version of their respective languages and need spells such as [[Comprehend Languages]] or [[Tongues]] to effectively interact with the villagers. However, ==Grimsvald== is the only place where common is comprehensible, although clearly different.

| Names         | Unique feature     | Inhabitants           | Coordinates   | Distance from Norhvík | Time difference |
| ------------- | ------------------ | --------------------- | ------------- |:---------------------:|:---------------:|
| [[Norhvík]]   | Default            | Humans & Dwarves      | 60.78N, 28.8E |         0 km          |       0 h       |
| [[Skaalheim]] | Southern acid flip | Humans & Goliaths     | 60.78S, 28.8E |       13 507 km       |       0 h       |
| [[Uldvík]]    | Storm-Born Sailor  | Humans & Water Genasi | 54.6N, 35.4W  |       3 715 km        |     -4.25h      |
| [[Eynjól]]    | Endless Night      | Humans & Drow         | 52.8S, 69.8E  |       13 132 km       |     +2.75 h     |
| [[Grimsvald]] | Vulcanos           | Humans & Fire Genasi  | 58.0N, 87.0E  |       3 198 km        |     +4 h     |
| [[Eiskarn]]   | Ever-storm         | Humans & Air Genasi   | 57.6N, 82.4W  |       5 560 km        |     -7.5 h      |


#### Data

| dice: 1d4 | Villages                                   |
|:---------:| ------------------------------------------ |
|     1     | [[Uldvík]] - Village of Storm-Born Sailors |
|     2     | [[Eynjól]] - Village of Endless Night      |
|     3     | [[Grimsvald]] - Village of Red Peaks       |
|     4     | [[Eiskarn]] - Village of Ever-Storm        |
^RandomVillage

### Teleporting to the Nordnes Wizard Tower

*See: [[Nordnes Wizard Tower]]*

> [!cite | bg-c-green]+ Narration
> *You arrive in a small niche inside this 15ft hallway, standing upon a plate of silver around which is drawn a teleportation circle. The room is lit by a red-orange light from an unidentifiable source.*

>[!warning | bg-c-red] ***The Party didn't choose this path!***

The party is lucky and enters the hallway directly through the secret doors.

![[Nordnes Wizard Tower#2 - Entryway | no-t]]

> [!cite | bg-c-green]+ Exiting the Wizard Tower
> *The front doors of the Wizard tower swings open and a cold wind with whipped up snow sweeps into the hallway. A foot and a half of build up snow covers the opening as you step out into main street of the village of Nordnes. A passer-by jolts in surprise and doubles their pace, quickly disappearing out of sight as you collect yourself and pull your winter clothing closer.* **Assuming Early morning** *The sun has yet to rise around the mountains to the south east, but a pink band of light covers the horizon interspersed with faint Cirrus clouds.*
> 
> *Smoke raise from most of the tightly packed houses and buildings set on this plint in the shadow of the gargantuan rock outcropping. To your left down the street, you see the sign of the tavern [[Adamantine Fox]], and to your right, the main road continues towards the gate out of the village and further north.*

##### Weather

The beginning of Tarsakh is characterized by ☁️cloudy skies and some winds that a pushes the temperature up to roughly -10C, WC: -18C.

### Traveling to Norhvík on foot
>[!warning | bg-c-red] ***The Party didn't choose this path!***

*See: [[Navigation]]*

Last time the players travelled to [[Norhvík]], it took them 23 days to travel there from [[Nordnes]]. There's also 4 days or so travel between Norvík and [[Temple of Life|The Island]].

> [!infobox | wtiny]
> # Weather
> Most of the month is clear and calm which brings about colder weather down to around -15C, WC: -25C

* It's 📏441 km from [[Nordnes]] to [[Norhvík]] along the coast. 
* The party has ==Advantage== (+3.33...) on the roll since they have traveled it before.
* The Party has a +1 Tool bonus because they have a ==Travel Itinerary==.
* It's assumed that they travel for 11h of the day's 12 hour of sunlight (-1h for lunch).
* They also take a rest days every 7<sup>th</sup> day.
* With Mournn leading them it takes 27 days to reach Norhvík, and they would arrive a few minutes after sunset.
* If they can't make it on time, they can cut it one day shorter by each rolling an exhaustion check.

> [!cite | bg-c-green]+ Traveling to Norhvík
> *You set of even further north towards Norhvík. **[reference weather]** On your second day you pass by the tiny community of three houses on stilts known as [[Rokland]], and towards the end of your first week you reach [[Drageid]], a small village of about 50 people in houses scattered along the frozen shore. You spend a day resting here before setting out towards [[Fresvik]]. About 1.5 half week passes without much happening, except * ***[Message to Yelungo from [[Edmondo Azzarà]]]*** *, until you eventually spot the smoke from the cottages of Fresvik. This is the last settlement before the long trek towards Norhvík. Here you get yourself warm meals and warm beds from the human female [[Vicky Marlee | Vicky]] who runs [[Vicky's Hall]], and she is pleasantly and very genuinely surprised to see you again, ensuring you that your passing by will surely become the talk of the town.*
>
> *[[Azgragor's Dreams#The Storm Giant Ship| In the night, you have a familiar dream Azgragor.]]*
>
> *After taking stock of your equipment and your own fortitude, you head out. The weather is mostly calm and the skies are clear, allowing you to see for miles out across the frozen see all the way to the icefront which slowly progresses further and further away as you move further north. During the nights, an incredibly beautiful starscape covers the skies, and the Aurora Borealis dances high up above you as you travel on along the shoreline. Eventually you meet up with [[Surt Laugen]] and [[Arnbjorg Aarflot]]; two residents that you met last year as well. Just like last year, they are occupied transporting a large stockpile of goods from Fresvik towards Norvhík with the help of several sled dogs. You spend an evening in their company, but since they move a lot slower than you with their cargo, you say farewell with a half-hearted promise to meet up again later at your destination.*
>
> *About two or so weeks pass until finally, after nearly a month of travelling, you finally lay your eyes on the small fishing village of 80 or so people. You see the fishing booths right next to the shoreline, followed by a couple of longhouses that frames the broader thoroughfare, on which you can make out the building of "[[Mårten's]]", the general store and combined café. Further up the hills you spot the rounded dwarven homes built into the gently sloping hillside carved out by a glacier that has now retreated up the mountain side. Finally, you've once again arrived at Norhvík; The northernmost bastion of civilisation.*
### Travelling to Norhvík through teleporation

> [!infobox | clean]
> # Weather
> # `VIEW[mod({fc-date.day}+0, 30)+1]`<sup>nd</sup> Tarsakh - Norhvík
>
> | |
> |:-:|:-:|
> | 0-6 | 🌙<font size=2>Overcast -10C, WC: -21C, Strong Breeze, Slight snow</font>
> | 6-12 | 🌙<font size=2>Overcast -9C, WC: -19C, Fresh breeze, Light snow</font>
> | 12-18 | 🌞<font size=2>Overcast -10C, WC: -17C, Light breeze, Light snow</font>
> | 18-24 | 🌞<font size=2>Overcast -9C, WC: -12C, Calm, Light snow</font>

>[!hint | bg-c-green] ***The Party did choose this path!***

 Arriving back at the Wizard tower and with [[The Dawnfather's Light (Campaign) | the Orb]] recharged to 10 charges, Azgragor uses the orb and successfully teleports to Norhvík, arriving 1.2km WSW of the village out on the frozen sea.

### Arriving at Norhvík

> [!cite | bg-c-green]+ Narration
> *As you enter the town the door opens to Mårten's, and the senior half-even proprietor comes out on the front stairs with a broom, whistling a joyous tune. After two sturdy sweeps he turns around and gets sight of you. As you're still a bit of a distance away, he squints his eyes but then cracks a big smiles and waves to you; "Welcome back friends!"*

#### People of Norhvík

> [!column | clean no-t] 
>> [!hint | bg-c-green] ***The Party did choose this path!***
>> **Mårten** is skittish as usual but very happy to see the party returns, he re-introduces them to [[Ashera]] and [[Tanila]], who have started working in his shop, and also stays at his home. He explains that they have talked a lot and that he has come to understand that they are related many generations back. He's also curious about what happened to [[Hanef Eversharp | Hanef]], and tells the party that his mother Asfrid would very much like to know that he's alright.
>
>> [!hint | bg-c-green] ***The Party did choose this path!***
>> **Ashera & Tanila.** They are cold towards the party and a little bit surprised that they showed up, most of them alive again. They comment on Mournn's prescence: *"So this is the one that you thought could be trusted? Consider that most of you are still alive we assume you're correct."*
>
>> [! | clean no-t]
>> **Gamin.** It takes a while for him to get wind of the party's arrival, but he shows up in a hurry but does keeps his distance without making his acquaintances. When seeing Mithyra is not with the party, he leaves.
>
>> [! | clean no-t]
>> **Thorvald Eversharp**. They didn't meet last time, but he makes sure to introduce himself, naming them heroes of the village for having dealt with the Goliaths, cleared the mine and brought wealth to the city not seen in many generations of men.
>
>> [! | clean no-t]
>> **Aldis Hammer.** Having heard rumors of the party's magical capabilities, she's eager to talk to them, however she has matured a bit and with the clearing of the goliath's she's more interested in staying in the village than she was last year. She learnt some magic from Luthais, which wasn't well received by [[Sonjá Hammer | her mother]].
>
>> [! | clean no-t]
>> **Luthais.** He's on a walkabout to find himself and will meet up with the rest in before the equinox.

#### The Resurrection dilemma

Ashera has been pondering the last year about what to do with the clan after so many where slain last equinox, and she believes that they need guidance from a leader of legend, older than any of them that their former leader [[Noyale]] spoke of; [[Naeryndam]] the Wise.

The party ultimately have the upper-hand being vastly more powerful than the two lone druids, and can choose to honor the Druids request or insist on resurrecting [[Arryn Atter|The Last Hunter]] in the [[Ring of Mind Shielding (Campaign) | Ring of Mind Shielding]].

## NPC Descriptions

### Norhvík Villagers
#### Ashera
<span style="float:right">`VIEW[{Ashera#status}]`</span> ![[Ashera#^NPCoverview | clean no-t]] 
#### Mårten Norhvík
<span style="float:right">`VIEW[{Mårten Norhvík#status}]`</span> ![[Mårten Norhvík#^NPCoverview | clean no-t]] 
#### Tanila
<span style="float:right">`VIEW[{Tanila#status}]`</span> ![[Tanila#^NPCoverview | clean no-t]] 

### Skaalheim Villagers
#### Ragna Hildirskjold
<span style="float:right">`VIEW[{Ragna Hildirskjold#status}]`</span> ![[Ragna Hildirskjold#^NPCoverview | clean no-t]] 

### Naeryndam
<span style="float:right">`VIEW[{Naeryndam#status}]`</span> ![[Naeryndam#^NPCoverview | clean no-t]] 

## Background Info

### Eiskarn
<span style="float:right">`VIEW[{Eiskarn#status}]`</span> ![[Eiskarn#^SettlementOverview | clean no-t]] 
### Eynjól
<span style="float:right">`VIEW[{Eynjól#status}]`</span> ![[Eynjól#^SettlementOverview | clean no-t]] 
### Grimsvald
<span style="float:right">`VIEW[{Grimsvald#status}]`</span> ![[Grimsvald#^SettlementOverview | clean no-t]] 
### Norhvík
<span style="float:right">`VIEW[{Norhvík#status}]`</span> ![[Norhvík#^SettlementOverview | clean no-t]] 
### Nordnes
<span style="float:right">`VIEW[{Nordnes#status}]`</span> ![[Nordnes#^SettlementOverview | clean no-t]] 
### Skaalheim
<span style="float:right">`VIEW[{Skaalheim#status}]`</span> ![[Skaalheim#^SettlementOverview | clean no-t]] 
### Uldvík
<span style="float:right">`VIEW[{Uldvík#status}]`</span> ![[Uldvík#^SettlementOverview | clean no-t]]

```meta-bind-button
style: primary
label: Insert Settlement
action:
  type: replaceSelf
  replacement: "z_Templates/Templater/Session Note/Settlement_Session_templater.md"
  templater: true
```

## Loot

![[Party Loot| full no-t clean]]

---

<span style="float:left"> **←** [[Session 75 - Returning North Going South]] </span> <span style="float:right"> [[Session 77 - A Pact Upheld]] **→** </span>
