---
tags:
  - "#Adventure"
art: zz-Attachments/deep-wilds-dungeon.png
quicknote: ""
whichparty: "[[The Shattering Dashboard]]"
adventure_status: Started
adventure_level: 5th to 7th
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

> [!metadata|quests]- Quests
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, quicknote AS Notes, status AS Status
> FROM "5-World"
> WHERE econtains(tags, "Quest") AND econtains(adventure, this.file.link)
> SORT file.name ASC
> ```

# Act 1 - The Hollow Beneath the Canopy

The frontier settlements of **Springrun** and **Castlemere** have each begun noticing unsettling changes within the **Prismatic Canopy**. Wildlife behaves unpredictably, crystal formations spread into once-familiar trails, experienced Seekers disappear without explanation, and strange phenomena are becoming increasingly common in the forest's deepest reaches.

Unable to determine the cause, both settlements seek capable adventurers willing to venture into the increasingly dangerous wilderness and uncover the source of these disturbances.

As the party explores the Prismatic Canopy, they encounter ancient landmarks, living mysteries, and signs that the Deep Wilds are changing in ways no scholar can fully explain. Along the way, they investigate abandoned expeditions, aid those lost within the forest, survive dangerous creatures altered by the growing resonance, and discover wonders that challenge their understanding of the natural world.

Their investigation ultimately leads them into the **Deep Wilds**, where the disturbances grow stronger and the forest itself seems to obey unfamiliar rules. There, hidden within the oldest reaches of the canopy, they uncover something no ordinary ruin or forgotten temple could prepare them for.

An immense stone archway stands alone in a silent clearing, untouched by time and unlike any structure they have encountered before.

Its runes can be read.

Its doors can be opened.

And beyond them lies not another room...

...but an entirely different world.

By the end of the act, the party has not merely discovered the source of the Deep Wilds' mysteries—they have become the first generation of **Seekers**, crossing the threshold into a living Dungeon whose true nature will redefine everything they thought they knew about magic, exploration, and the history of Aetheria.

## Chapter 1 — Rumors from the Deep Wilds
The adventure begins in the early afternoon as the player characters arrive in the frontier settlement of [[Springrun]], answering a formal request for capable adventurers issued by the [[Springrun Council]]. The road into the settlement winds through dense stands of luminous canopy trees and low crystal formations jutting from the earth like veins of frozen lightning. Though small, Springrun hums with restless energy. Workers haul crystals between structures. Scouts move along elevated walkways. Watchtowers fitted with prismatic lanterns overlook the tree line. The village is alive—but tense.

Travelers who inquire about food or lodging are directed toward the [[Shattered Hearth Inn]], a warm but crowded inn built from salvaged timber and reinforced with crystal-lined supports. Conversation inside remains subdued. Locals speak in hushed tones about missing caravans, strange sounds in the forest, and hunters who failed to return.

If the players ask about the Council, they are directed toward Pearl Hall, the settlement’s administrative center, and to [[Edrik Hollowmere]], the acting head councilman responsible for coordinating the village’s response to the growing crisis.

### The Council Meeting
Pearl Hall stands near the center of Springrun upon the Ember Bank, overlooking both the river and the growing Energy Grid Substation that powers much of the settlement. Unlike the rough timber structures elsewhere in town, Pearl Hall reflects Springrun’s ambitions. Polished crystal conduits line the walls, carrying pale blue light through etched channels beneath translucent stone panels. The building feels less like a frontier hall and more like the first draft of a future city.

The players are escorted into a long chamber where several council members sit around a broad table covered in maps, trade ledgers, and scattered reports. The atmosphere is not one of panic, but of mounting strain. These are people accustomed to hardship and unpredictability. Springrun exists because its people are willing to adapt to danger. Yet even they seem unsettled.

[[Edrik Hollowmere]] rises to greet the party personally. Though composed, exhaustion shows in the lines around his eyes.

> [!note]+ Read Aloud
> “Springrun survives because we accept that the world changes around us. The Canopy shifts. Crystal blooms appear where they shouldn’t. Creatures migrate. Storms rewrite the land. We’ve learned to live with uncertainty.”
> 
> He pauses, glancing toward the scattered reports across the table.
> 
> “But this… this is different.”

The council explains the situation in detail over the course of the meeting.

For several weeks:
- trade caravans traveling through the outer forest routes have vanished;
- hunters and trappers familiar with the region have failed to return;
- wildlife throughout the Deep Wilds of the Prismatic Canopy has become unusually territorial and aggressive;
- creatures that normally compete for territory appear to be acting in strangely coordinated ways;

Most troubling of all, one badly wounded survivor stumbled back into Springrun several days ago after being missing for nearly a week. Feverish and half-delirious, he repeatedly spoke of “a doorway in the hills.”

He died before he could properly explain what he had seen.

The council has debated numerous explanations:
- a large-scale monster migration;
- crystal corruption spreading through the ecosystem;
- lingering Shattering phenomena awakening beneath the forest;
- or perhaps hostile activity from smugglers, raiders, or another hidden faction operating within the Canopy.

No theory fully explains the reports.

What worries the council most is not simply the danger itself, but the consequences if the situation continues unchecked. Trade through Springrun has already begun slowing. Merchants speak openly of rerouting caravans away from the settlement. Worse still, if news reaches Castlemere before Springrun understands what is happening, the neighboring settlement may attempt to intervene directly under the justification of “restoring order.” Several councilors make it clear they fear Castlemere’s involvement almost as much as whatever lurks in the Deep Wilds.

Edrik ultimately makes the council’s request plain.

> [!note]+ Read Aloud
> “We need answers before fear spreads faster than truth.”
> 
> “Find out what’s happening in the Canopy. Discover what’s causing these changes. If there’s a threat, determine whether it can be contained.”
> 
> “And if there truly is some kind of doorway hidden beneath those hills…”
> 
> His expression hardens slightly. “We need to know what lies beyond it.”

The council is prepared to offer meaningful support despite Springrun’s limited resources. The settlement cannot afford to field a large expeditionary force of its own, nor can it risk losing additional scouts to the Deep Wilds. Instead, they place their hopes in capable outsiders willing to investigate what their own people increasingly fear to approach.

Edrik Hollowmere explains that while Springrun cannot promise the wealth of a major city-state, the council understands the value of competent adventurers and intends to compensate the party fairly for tangible results.

The council’s support includes the following:
- basic provisions sufficient for several days of wilderness travel, including [[Rations|preserved rations]] , [[Waterskin|waterskins]], [[lantern-hooded|hooded lanterns]] fitted with low-grade crystal batteries, [[rope]] and [[climbing-kit|climbing kits]];
- copies of the settlement’s current exploration maps showing known trails, abandoned hunter camps, caravan routes, river crossings, and regions considered increasingly dangerous or unstable;
- a writ granting temporary authority to act in the interests of Springrun beyond the settlement walls, allowing the party to question scouts, organize local guides, requisition minor aid, and speak with the council’s endorsement when dealing with traders or nearby camps.

The council also establishes a standing bounty structure intended to encourage continued exploration and reporting rather than a single expedition.

Rewards are offered for:
- recovering missing hunters, merchants, or scouts, whether alive or dead;
- identifying new hazards, territorial creature migrations, or unstable crystal zones;
- retrieving unusual materials, artifacts, or samples tied to the disturbances;
- and, most importantly, discovering the true source of the escalating incidents.

The council makes it clear that information itself has value. Reliable reports, maps, sketches, recovered journals, or even firsthand observations may earn compensation if they help Springrun understand what is happening beneath the Canopy.

### Establishing Themselves in Springrun
Following the meeting, the players are free to spend as much or as little time in Springrun as they wish before venturing into the Prismatic Canopy.

This period allows the party to:
- gather rumors;
- purchase supplies;
- meet local NPCs;
- establish relationships with the settlement;
- investigate missing persons;
- hear conflicting opinions regarding Castlemere;
- or prepare for extended wilderness exploration.

Though life in Springrun continues, tension hangs over the settlement. Scouts return less frequently. Merchant wagons depart with armed escorts. Watchfires burn longer at night. Eventually, however, all signs point toward the Deep Wilds.

#### Springrun Rumors
`dice: [[ACT I - FIRST CONTACT#^SpringRunRumors]]`

| Rumor                                                                                                                                    | Truth                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| “The wildlife’s changed. Wolves and razorbacks aren’t fighting each other anymore. People swear they’ve seen them hunting side by side.” | **True**                                                                                |
| “There’s something in the forest making noises at night. Like stone grinding against stone.”                                             | **True**                                                                                |
| “One of the caravans came back empty. No bodies. No blood. Just abandoned wagons.”                                                       | **True**                                                                                |
| “The Deep Wilds are growing. Trails don’t stay where they’re supposed to anymore.”                                                       | **Partially True** — shifting terrain and unstable resonance make navigation unreliable |
| “A hunter swore he found a doorway carved into a hill. Said the air inside smelled wrong.”                                               | **True**                                                                                |
| “The Council already knows what’s happening and is hiding it to avoid panic.”                                                            | **False**                                                                               |
| “Castlemere sent spies into the forest weeks ago.”                                                                                       | **Partially True** — Castlemere scouts have begun quietly investigating                 |
| “The creatures out there are being controlled by someone.”                                                                               | **Partially True** — behavior is influenced by the Verdant Hollow’s resonance           |
| “The forest glows at night deeper in the Canopy now.”                                                                                    | **True**                                                                                |
| “People who spend too long near the Deep Wilds come back… different.”                                                                    | **False**                                                                               |
| “The missing caravans were taken by bandits.”                                                                                            | **False**                                                                               |
| “There’s an old Shattering bunker beneath the hills full of relic weapons.”                                                              | **False**                                                                               |
| “A prospector found gold-veined crystals deeper in the forest before disappearing.”                                                      | **False**                                                                               |
| “Something in the woods mimics voices.”                                                                                                  | **True**                                                                                |
| “A giant beast is driving everything else out of its territory.”                                                                         | **False**                                                                               |
| “The Council’s about to ask Castlemere for military aid.”                                                                                | **False** — several councilors oppose this strongly                                     |
| “Some of the hunters who vanished have been seen wandering at night near the tree line.”                                                 | **False**                                                                               |
| “A few people think the forest itself is alive.”                                                                                         | **Partially True** — resonance effects create this impression                           |
| “There are entire caves beneath the Canopy no one has mapped.”                                                                           | **True**                                                                                |
| “A preacher from Castlemere says the disturbances are punishment for crystal harvesting.”                                                | **Partially True** — such sermons are spreading                                         |
| “The doorway in the hills only appears at night.”                                                                                        | **False**                                                                               |
| “The air near the Deep Wilds tastes metallic now.”                                                                                       | **True**                                                                                |
| “The Council’s hiring adventurers because every local guide they sent failed to return.”                                                 | **Partially True** — several scouts are missing, though not all                         |
| “There’s a second settlement somewhere deep in the forest.”                                                                              | **False**                                                                               |
| “The creatures aren’t attacking settlements directly yet. It’s almost like they’re defending something.”                                 | **True**                                                                                |
| “The old survivor who mentioned the doorway clawed at his own eyes before he died.”                                                      | **False**                                                                               |
| “A scholar from Ardentia would pay a fortune for samples from the Deep Wilds.”                                                           | **Probably True**                                                                       |
| “There are crystals in the Deep Wilds that pulse like a heartbeat.”                                                                      | **True**                                                                                |
| “Whatever’s happening started after the meteor showers earlier this year.”                                                               | **False**                                                                               |
| “The Verdant Hollow was once a druidic shrine swallowed by the earth.”                                                                   | **False**                                                                               |
| “The deeper you go into the Canopy, the less wildlife you hear.”                                                                         | **True**                                                                                |
^SpringRunRumors

## Chapter 2 — The Prismatic Canopy
This should occupy the largest portion of Act 1.

The Deep Wilds should feel:
- ancient
- beautiful
- unstable
- partially transformed by lingering magical pressure

## Hexploration Goals
The PCs:
- map routes
- investigate disturbances
- locate missing people
- recover clues
- establish safe paths
- identify sources of corruption

This is where your dynamic exploration systems can shine.

# What They Discover
The Canopy itself is changing. Not corrupted in an evil sense necessarily — _reshaped_.

Examples:
- animals displaying tactical intelligence
- territorial boundaries forming unnaturally
- crystal growths pulsing in rhythmic patterns
- flora reacting to nearby magic
- weather distortions localized to specific hexes
- gravity anomalies
- ruins appearing where maps show none

The players should gradually realize this is not random magical fallout. Something is exerting influence outward.

Most of the travel through the Prismatic Canopy and the Deep Wilds takes place in exploration mode—see pages 479–480 of the Pathfinder Core Rulebook for more  information. Each hex on the map is 5 miles across, but the dense forest is difficult terrain, halving the characters’ travel speed.

If the party does nothing but travel, or use exploration activities that place no limit on their travel Speed, they can move through 4 hexes in a day, but they will not come across any encounters in the hexes they pass through unless the encounter specifically indicates in its description that it cannot be missed.

If the party chooses to utilize an exploration tactic that limits their Speed (like Avoid Notice, Defend, or Investigate), they can move through 2 hex in a day. As long as at least one PC uses Investigate, Scout, or Search, the party automatically discovers a specific encounter in the hex.

As the PCs explore, you might choose to include random encounters with forest denizens. Random encounters are an excellent way to liven
up dull stretches of play, give the PCs a chance to earn a bit more XP, or simply keep the players on their toes, but be careful not to overdo them, as too many wandering monsters can slow progression through the adventure to a frustrating crawl. You can use the encounters presented on the following pages as inspiration for random ones, or simply have the PCs stumble across a predator of your choice.

This region is far from safe, but the most subtle danger to the PCs comes in the form of the jungle’s insects, heat, and near-constant rain; use the Camping in the Mwangi Jungle downtime activity (on page 71) each time the PCs must camp in the jungle. At your option, if the PCs camp in a hex that contains a set encounter they haven’t yet cleared or defeated, the creatures in that encounter might come to investigate the camp at some point during the night.

> [!warning]
> # Camping in the Prismatic Canopy
> The Prismatic Canopy is beautiful, but it is never truly safe. Predators move with unsettling coordination and the forest itself seems to shift after nightfall. Establishing a secure camp requires care, experience, and a little luck. When the party attempts to camp in the wilderness of the Prismatic Canopy, one PC must attempt a secret [[Skills#Survival|Survival]] check to determine the quality of the campsite and how well the group weathers the dangers of the Deep Wilds.
> 
> ## Establish Camp 
> **(Exploration, Secret)**
> Setting up camp in the Prismatic Canopy takes approximately 1 hour and requires one PC to attempt a secret DC 20 [[Skills#Survival|Survival]] check. The following circumstances may grant a +2 circumstance bonus to the check:
> - Careful selection of elevated or defensible terrain
> - Use of treated canvas, alchemical insect repellents, or proper field gear
> - Concealing fires and limiting visible light
> - Magical assistance appropriate to wilderness survival
> - Assistance from guides familiar with the region
> 
> These bonuses are not cumulative.  As the PCs travel deeper into the Prismatic Canopy, the DC to Establish Camp may increase,  particularly near crystal growth fields, Dungeon influence, monster territories or unstable magic regions. Some regions may impose unique consequences on a failure or critical failure tied to the local attunement of the area.
> 
> Powerful magic capable of creating secure extradimensional shelters or fortified camps automatically results in a Critical Success, at the GM’s discretion. This activity assumes the PCs rest for 8 hours.
> 
> **Critical Success** The campsite is exceptionally secure and well-prepared. The PCs rest comfortably and can make their daily preparations without issue. The camp remains concealed or protected throughout the night, preventing random encounters or unwanted attention. 
> **Success** The campsite is functional and reasonably secure. The PCs rest successfully and can make their daily preparations normally. Random encounters may still occur during the night if circumstances warrant, though the camp suffers no additional complications.
> **Failure** The camp provides only limited protection from the dangers of the Canopy. Condensation gathers on gear, insects swarm sleeping rolls, and strange whispers or distant crystalline humming disrupt sleep. The PCs still gain the benefits of rest and can make daily preparations normally, but each PC must attempt a Fortitude save against **[[canopy-exposure-hb|Canopy Exposure]]**.
> **Critical Failure** The campsite is disastrously exposed. The party chooses a poor location, fails to notice environmental hazards, or inadvertently attracts attention from the forest itself. Crystalline resonance, predators, insects, shifting roots, or unstable terrain make proper rest impossible. The PCs gain no benefits from resting and become [[Fatigued]]. In addition, each PC must attempt a Fortitude save against **[[prismatic-contamination-hb|Prismatic Contamination]]**. At the GM’s discretion, a Critical Failure may also automatically trigger a nighttime encounter or dangerous environmental complication.

#### Prismatic Canopy Random Encounters
`dice: 1d100`
`dice: [[ACT I - FIRST CONTACT#^PrismaticRandom]]`

| Count | Encounter                                                                                                       |
| ----- | --------------------------------------------------------------------------------------------------------------- |
| 1     | [[#Prismatic Canopy Random Encounter Crystalback Razorboars\|Crystalback Razorboars (Moderate)]]                |
| 2     | [[#Prismatic Canopy Random Encounter Prismwing Stalkers\|Prismwing Stalkers (Low)]]                             |
| 3     | [[#Prismatic Canopy Random Encounter Ankhrav Foragers\|Ankhrav Foragers (Low)]]                                 |
| 4     | [[#Prismatic Canopy Random Encounter Razervine Tanglers\|Razervine Tanglers (Low)]]                             |
| 5     | [[#Prismatic Canopy Random Encounter Crystal-Touched Hydra\|Crystal-Touched Hydra (Low)]]                       |
| 6     | [[#Prismatic Canopy Random Encounter Hollow Stalker\|Hollow Stalker (Moderate]]                                 |
| 7     | [[#Prismatic Canopy Random Encounter Shimmer Fog\|Shimmer Fog (Low)]]                                           |
| 8     | [[#Prismatic Canopy Random Encounter Glass Rain\|Glass Rain (Low)]]                                             |
| 9     | [[#Prismatic Canopy Random Encounter Crystal Bloom\|Crystal Bloom (Low)]]                                       |
| 10    | [[#Prismatic Canopy Random Encounter Resonant Thunder\|Resonant Thunder (Low)]]                                 |
| 11    | [[#Prismatic Canopy Random Encounter Prismatic Windstorm\|Prismatic Windstorm (Low)]]                           |
| 12    | [[#Prismatic Canopy Random Encounter Abandoned Campsite\|Abandoned Campsite (Low)]]                             |
| 13    | [[#Prismatic Canopy Random Encounter Crystal Cache\|Crystal Cache (Low)]]                                       |
| 14    | [[#Prismatic Canopy Random Encounter Old Caravan Tracks\|Old Caravan Tracks (Low)]]                             |
| 15    | [[#Prismatic Canopy Random Encounter Monster Corpse\|Monster Corpse]]                                           |
| 16    | [[#Prismatic Canopy Random Encounter Castlemere Patrol\|Castlemere Patrol (Low)]] (Canopy Only)                 |
| 17    | [[#Prismatic Canopy Random Encounter Springrun Surveyors\|Springrun Surveyors (Low)]] (Canopy Only)             |
| 18    | [[#Prismatic Canopy Random Encounter Echo Flowers Repeat Conversation\|Echo Flowers Repeat Conversation (Low)]] |
| 19    | [[#Prismatic Canopy Random Encounter Resonance Wolves\|Resonance Wolves (Moderate)]]                            |
| 20    | [[#Prismatic Canopy Random Encounter Prism Widow Nest\|Prism Widow Nest (Moderate)]]                            |
| 21    | [[#Prismatic Canopy Random Encounter Resonant Burrower\|Resonant Burrower (Severe)]]                            |
| 22    | [[#Prismatic Canopy Random Encounter Gravity Scar\|Gravity Scar (Low)]]                                         |
| 23    | [[#Prismatic Canopy Random Encounter Missing Expedition\|Missing Expedition (Low)]]                             |
| 24    | [[#Prismatic Canopy Random Encounter Seeker Gone Obsessive\|Seeker Gone Obsessive (Low)]]                       |
| 25    | [[#Prismatic Canopy Random Encounter Crystalhide Ankylosaurus\|Crystalhide Ankylosaurus (Severe)]]              | 
| 26    | [[#Prismatic Canopy Random Encounter Hollow Grove Treants\|Hollow Grove Treants (Severe)]]                      |
| 27    | [[#Prismatic Canopy Random Encounter Seeker Gone Obsessive\|Seeker Gone Obsessive (Low)]]                       |
^PrismaticRandom
 
#### Prismatic Canopy Story Encounters

| Count | Encounter                                                                  |
| ----- | -------------------------------------------------------------------------- |
| 1     | [[#Prismatic Canopy Set Encounter The Crystal Giant\|The Crystal Giant]]   |
| 2     | [[#Prismatic Canopy Set Encounter The Hollow Market\|The Hollow Market]]   |
| 3     | [[#Deep Wilds Set Encounter The Heartroot\|The Heartroot]]                 |
| 4     | [[#Deep Wilds Set Encounter The Crystal Graveyard\|The Crystal Graveyard]] | 

### Prismatic Canopy Random Encounter: Crystalback Razorboars
- [ ] Moderate (80 XP) Level 5

> [!note]+ Read Aloud
> The forest opens into a broad clearing carved with deep trenches and shattered crystal deposits. Jagged prismatic growths jut from the earth like broken glass, their surfaces reflecting fractured light across the underbrush. The air smells of damp earth and something musky. A sudden scraping echo cuts through the quiet.
> 
> Then another.
> 
> Heavy shapes shift behind the crystal formations ahead. Massive boars emerge from the foliage, their thick hides studded with luminous crystal ridges that pulse faintly beneath the canopy light. Their tusks carve furrows into the ground as they paw at the earth and release deep, rattling snorts. One lowers its head and charges instantly.

**Description** The party enters a region of the Prismatic Canopy where thick crystal growths protrude from the earth in jagged ridges. Many of the nearby trees bear scars from repeated impacts, while shallow furrows gouge through the underbrush where something heavy has repeatedly charged through the area.

Small shards of fractured crystal litter the ground and glimmer in shifting rainbow light beneath the canopy.

The creatures use the statistics of [[Daeodon]] with the following narrative changes:
- Their hides are covered in jagged crystalline ridges.
- Their charges scatter razor-sharp crystal fragments.
- Their eyes glow faintly with refracted light.
- Their vocalizations produce an unsettling metallic resonance.

At the start of the encounter, place the following foes on the map: 
 - 2: [[3-Rules/Bestiaries/Monster Core/D/Daeodon|Daeodon]]

```encounter
name: Random One - Crystalback Razorboars
party:  The Shattering
creatures:
  - 2: [[Daeodoon, Crystalback Razorboar]]
```

> [!warning]
> Whenever a Crystalback Razorboar critically hits with a tusk Strike, nearby creatures within 5 feet must succeed at a DC 20 Reflex save or become [[dazzled]] until the start of their next turn from exploding crystal fragments.

#### Tactics
The Crystalback Razorboars are highly territorial and aggressive.  They remain hidden among crystal outcroppings until creatures move deeper into the clearing. 

During the first round they attempt to charge the nearest target or the creature furthest from the rest of the party. The boars aggressively reposition to maintain momentum and avoid becoming surrounded. They instinctively attempt to knock prey into crystal fields or isolate injured creatures.

If one Razorboar is reduced below half HP, the other becomes even more aggressive, prioritizing the creature that dealt the most recent damage.

The Razorboars do not fight tactically in an intelligent sense, but their territorial aggression and familiarity with the terrain make them extremely dangerous in confined spaces.

The boars attempt to separate weaker-looking targets from the rest of the party. Emphasize momentum, noise, and shattered crystal during the fight. The terrain should feel dangerous and chaotic rather than cleanly open.

#### Features of the Area
**Crystal Fields** Jagged crystal clusters create difficult terrain. A creature that critically fails an [[Skills#Acrobatics|Acrobatics]] check to Tumble Through or move quickly through the area takes `dice: 1d6` slashing damage from razor-sharp crystal edges.
**Broken Trenches** The ground is scarred with charge furrows. These shallow trenches provide lesser cover to prone creatures.
**Refracted Light** Sunlight filtering through the crystal formations creates shifting patterns of light. Creatures more than 30 feet away gain a +1 circumstance bonus to [[Skills#Stealth|Stealth]] checks while adjacent to crystal formations. 

> [!tip]+ Treasure
> No individual loot is found but if the Crystalback Razorboars are harvested check the table below.
> 
> - [[B.#3-Rules/Bestiaries/Monster Core/D/Daeodon Daeodon|Daeodon Harvest]]

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Prismwing Stalkers
- [ ] Low (60 XP) Level 5

> [!note]+ Read Aloud
> The deeper you move into the forest, the stranger the light becomes. Sunlight fractures through crystal-veined leaves overhead, scattering across the underbrush in shifting ribbons of color. Shadows bend unnaturally between the trees, making the forest seem constantly in motion. Something darts across your vision. Then another shape. Low clicking calls echo somewhere above.
> 
> A moment later, sleek reptilian creatures emerge from the foliage with terrifying speed. Their bodies are lean and feathered, but translucent crystal growths fan outward from their necks, backs, and tails like jagged plumage. Light ripples across their hides, breaking up their outlines whenever they move. One circles wide through the brush. Another leaps from a fallen trunk. The pack attacks together.

**Description** The party enters a dense section of the Prismatic Canopy where enormous crystal-veined trees rise high overhead, their branches woven tightly together. Refracted light spills through the canopy in shifting patterns, creating false movement and fractured shadows across the forest floor. The undergrowth here is strangely quiet.

Occasional flashes of color ripple between the trees—gone almost as soon as they appear. Claw marks score the trunks nearby, and partially consumed carcasses hang tangled in the roots and lower branches.

The creatures use the statistics of [[3-Rules/Bestiaries/Monster Core/D/Deinonychus|Deinonychus]] with the following narrative changes:
- Their feathers are replaced with reflective crystalline frills and translucent scales.
- Their movements distort light around them.
- Their claws leave faint glowing scratches on stone and bark.
- Their vocalizations sound like clicking crystal chimes.

At the start of the encounter, place the following foes on the map: 
- 4: [[3-Rules/Bestiaries/Monster Core/D/Deinonychus|Deinonychus]]

```encounter
name: Random One - Prismwing Stalkers
party:  The Shattering
creatures:
  - 4: [[Deinonychus, Prismwing Stalker]]
```

> [!warning]
> Whenever a Prismwing Stalker successfully uses [[Sneak]] or gains [[Off-Guard]] against a creature, the target must succeed at a DC 19 [[Skills#Perception|Perception]] check or become [[dazzled]] until the start of its next turn due to refracted flashes of light.

#### Tactics
Prismwing Stalkers are ambush predators. They avoid direct frontal assaults whenever possible relying on mobility, flanking, and confusion rather than brute force. The stalkers retreat into dense foliage whenever possible before striking again.

Two stalkers attempt to circle behind the party while the others pressure isolated targets. They use mobility aggressively, darting through terrain and retreating into concealment after attacking. The pack instinctively focuses on separated creatures, visibly wounded prey, or spellcasters lingering away from the group.

If reduced below half their numbers, the remaining stalkers begin withdrawing deeper into the canopy while attempting to lure the party into dangerous terrain or toward additional predators.

The stalkers are intelligent hunters but not suicidally aggressive.

#### Features of the Area
**Refracted Underbrush** Dense foliage and shifting light create visual confusion. Creatures more than 20 feet away gain a +1 circumstance bonus to [[Skills#Stealth|Stealth]] checks.
**Fallen Crystal Logs** Several fallen trees coated in crystal growths crisscross the battlefield. These provide standard cover and can be climbed with a DC 15 [[Skills#Athletics|Athletics]] check.
**Hanging Root Curtains** Thick roots and hanging vines create narrow sightlines. Moving through these spaces costs extra movement and may provide concealment at the GM’s discretion.

> [!tip]+ Treasure
> No individual loot is found but if the Crystalback Razorboars are harvested check the table below.
> 
> - [[D.#3-Rules/Bestiaries/Monster Core/D/Deinonychus Deinonychus/|Deinonychus Harvest]]

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Ankhrav Foragers
- [ ] Low (60 XP) Level 5

> [!note]+ Read Aloud
> The forest floor ahead sags unevenly beneath tangled roots and fractured earth. Long trenches carve through the undergrowth as though something massive tunneled just beneath the surface. Several trees lean at dangerous angles where the ground has partially collapsed beneath them. The sharp scent of acid hangs heavily in the air. Half-buried crates and shattered wagon boards protrude from the mud nearby, their surfaces partially dissolved into bubbling ruin.
> 
> Then the earth shifts. A violent tremor ripples beneath your feet.
> 
> The ground erupts in a spray of dirt as enormous insectoid creatures burst upward from below. Their chitin glistens with streaks of pale crystalline growth while serrated mandibles drip smoking acid onto the roots beneath them. One emits a shrill clicking screech. The others surge forward immediately.

**Description** The party discovers a section of collapsed forest where the ground has partially caved inward beneath massive root systems. Jagged furrows cut through the earth, while patches of dissolved vegetation and partially melted stone suggest the presence of highly corrosive creatures nearby. Pale crystal growths protrude from exposed tunnel walls beneath the roots, pulsing faintly with reflected light. The area smells sharply acidic. Broken crates, shattered tools, and scraps of torn canvas suggest that a caravan or expedition attempted to pass through recently.

The creatures use the normal statistics of Ankhrav with the following narrative changes:
- Pale crystal growths spread across portions of their chitin.
- Acidic saliva leaves glowing residue on nearby surfaces.
- Their tunneling creates faint harmonic vibrations beneath the ground.
- Their clicking communication sounds unnervingly coordinated.

At the start of the encounter, place the following foes on the map: 
- 2: [[3-Rules/Bestiaries/Monster Core/A/Ankhrav|Ankhrav]]
- 1: [[Ankhrav, Elite|Elite Ankhrav]]

```encounter
name: Random One - Ankhrav Foragers
party:  The Shattering
creatures:
  - 2: [[Ankhrav]]
  - 1: [[Ankhrav, Elite]]
```

> [!warning]
> Whenever an Ankhrav uses its burrow Speed, creatures adjacent to the space it emerges from must succeed at a DC 20 Reflex save or take `dice: 1d4` slashing damage from exploding crystal debris.

#### Tactics
The Ankhravs are actively expanding their feeding tunnels and begin hidden beneath the ground whenever possible. They attempt to isolate creatures near unstable terrain before emerging to attack. The elite Ankhrav prioritizes the largest or most heavily armored target while the others pressure vulnerable backline creatures.

The Ankhravs aggressively reposition using their burrow Speed, often retreating underground briefly before attacking from unexpected angles. The creatures should emerge violently from below whenever possible.

If reduced below one-third HP, an Ankhrav attempts to retreat into the tunnel network unless cornered.

The creatures fight instinctively but display increasingly coordinated behavior compared to normal Ankhravs.

#### Features of the Area
**Unstable Ground** Several areas have been weakened by tunneling. A creature that Strides more than half its Speed through unstable terrain must succeed at a DC 18 Reflex save or fall [[prone]] as the ground partially collapses beneath them.
**Exposed Burrows** Open tunnel entrances descend beneath the roots. Medium or smaller creatures can enter these tunnels, though visibility is poor and movement is restricted.
**Acid-Scarred Terrain** Pools of weak acid and dissolved vegetation create hazardous patches. A creature entering or beginning its turn in one of these spaces takes `dice: 1d4` acid damage.
**Crystal Veins** Pale crystal growths line portions of the battlefield. These emit dim light and produce faint humming vibrations when struck.

> [!tip]+ Treasure
> No individual loot is found but if the Ankhrav Foragers are harvested check the table below.
> 
> - [[A.#3-Rules/Bestiaries/Monster Core/A/Ankhrav Ankhrav|Ankhrav Harvest]]

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Razervine Tanglers
- [ ] Low (60 XP) Level 5

Before the encounter begins, allow the party opportunities to recognize danger. Possible clues include:
- DC 18 [[Skills#Survival|Survival]]: Identifies the unusual concentration of animal remains.
- DC 20 [[Skills#Nature|Nature]]: Recognizes predatory plant behavior.
- DC 21 [[Skills#Perception|Perception]]: Notices vines subtly repositioning themselves.

Success may allow the party to avoid surprise or begin combat with advantageous positioning.
> [!note]+ Read Aloud
> The forest grows noticeably quieter as you move forward. The undergrowth thickens into a dense tangle of creeping vines and flowering growths that blanket the ground beneath the trees. Crystal-lined thorns glimmer throughout the vegetation, casting fragments of colored light across the forest floor. A partially decomposed deer hangs suspended between two roots nearby.
> 
> Several yards farther away, something metallic catches the light—a rusted sword protruding from a mound of tangled vines. The air smells strangely sweet. As you step deeper into the clearing, the vines begin to move. Slowly at first. Then all at once.
> 
> Dozens of thorn-covered tendrils lash outward from the undergrowth, accompanied by the cracking sound of crystal thorns scraping against one another.

**Description** The party enters a section of the Prismatic Canopy where sunlight barely reaches the forest floor. Thick mats of vines carpet the ground, climbing trees and draping from branches in tangled curtains. Jagged crystal growths protrude from many of the vines, forming translucent thorns that catch and scatter light in shifting colors. Several animal carcasses lie partially hidden among the vegetation, wrapped tightly in fibrous tendrils. At first glance, the area appears peaceful.

It is anything but.

The creatures use the statistics of Assassin Vine with the following narrative changes:
- Crystal growths replace many of the plant's natural thorns.
- Their tendrils emit faint prismatic reflections when moving.
- The creatures produce a subtle humming resonance when agitated.
- Captured prey often become partially encased in crystal-coated vines.

At the start of the encounter, place the following foes on the map: 
- 3: [[Assassin Vine]]

```encounter
name: Random One - Razervine Tanglers
party:  The Shattering
creatures:
  - 3: [[Assassin Vine, Razervine Tangler]]
```

> [!warning]
> Whenever a Razorvine Tangler successfully Grabs a creature, crystal thorns scrape against armor and skin. The grabbed creature takes `dice: 1d4` persistent slashing damage until the Grab ends.

#### Tactics
Razorvine Tanglers are patient ambush predators. They remain motionless until prey enters their territory.

Whenever possible, the plants target different creatures during the opening round to divide the party's attention. Once a creature is Grabbed, the Tanglers focus on maintaining control, dragging prey into thorn clusters, and forcing allies to expose themselves while attempting rescues. The creatures use reach and constrict to isolate prey.

The plants ignore heavily armored targets if easier prey is available.

Unless burned, chopped apart, or forced from their territory, the Tanglers fight to the death.

#### Features of the Area
**Razorvine Growth** Large portions of the battlefield are covered in dense thorny vegetation. These areas are difficult terrain. A creature that critically fails an [[Skills#Acrobatics|Acrobatics]] check while moving through the area takes `dice: 1d6` slashing damage.
**Crystal Thorn Clusters** Jagged crystal growths protrude from the ground throughout the clearing. A creature forcibly moved into one of these spaces takes `dice: 1d4` piercing damage. The Razorvine Tanglers frequently attempt to drag prey into these hazards.
**Cocooned Remains** Seven partially consumed carcasses are wrapped within vine masses. Searching one requires an Interact action and may reveal treasure, clues, or previous victims.

> [!tip]+ Treasure
> If the Assassin Vine are harvested check the table below. Searching the cocooned remains reveals 4 gp, 10 sp and a [[healing-potion-lesser|Healing Potion (Lesser)]]
>
> - [[A.#Assassin Vine|Assassin Vine Harvest]]
> - [ ] gp::4
> - [ ] sp::10
> - [ ] consumable::[[healing-potion-lesser|Healing Potion (Lesser)]] [ilvl::3] [gp::12]

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Crystal-Touched Hydra
- [ ] Low (60 XP) Level 5

> [!note]+ Read Aloud
> The forest gradually gives way to a shallow marsh. Pools of dark water collect between tangled roots and crystal-covered stone outcroppings. Strange reflections dance beneath the surface, breaking apart into fractured rainbows whenever the water moves. Several skeletons lie half-buried in the mud nearby. 
> 
> A deer. Something larger. Perhaps even a horse. The water ahead ripples. Then ripples again.
> 
> Slowly, enormous shapes begin to rise from beneath the surface. First one neck. Then another. Then another.
> 
> Towering serpentine heads emerge from the marsh, each covered in jagged crystalline growths that catch the sunlight and scatter it across the clearing. The creature's many eyes focus upon you simultaneously. Then the monster lunges.

**Description** The party discovers a flooded basin deep within the Prismatic Canopy. Crystal formations rise from the dark water like jagged teeth, while enormous trees lean over the marsh from every direction. Strange ripples move across the surface despite the absence of wind. The area is eerily quiet. Numerous animal skeletons lie partially submerged around the shoreline. Some appear crushed while others bear unmistakable bite marks from multiple sets of jaws. Large crystal fragments embedded in the mud pulse faintly with reflected light.

The creature uses the statistics of a Hydra with the following narrative changes:
- Crystal growths cover portions of its scales and necks.
- Blood spilled from its wounds crystallizes rapidly upon contact with the ground.
- Its roar produces a strange harmonic resonance through nearby crystal formations.
- Newly regenerated heads emerge covered in translucent crystal plates.

At the start of the encounter, place the following foes on the map: 
- 1: [[Hydra]]

```encounter
name: Random One - CrystalTouched Hydra
party:  The Shattering
creatures:
  - 1: [[Hydra, Crystal-Touched Hydra]]
```

> [!warning]
> Whenever the hydra regrows a head, nearby crystal formations emit a sharp resonant pulse. All creatures within 20 feet of the hydra must succeed at a DC 21 Fortitude save or become [[dazzled]] until the end of their next turn.

#### Tactics
The Crystal-Touched Hydra begins partially submerged whenever possible. It focuses on controlling space and preventing creatures from escaping the marsh. The hydra uses its multiple heads aggressively against clustered targets and attempts to keep opponents within reach.

The creature prefers:
- isolated prey,
- creatures trapped in difficult terrain,
- and targets already injured.

The hydra has little fear of most creatures and fights until slain or until it suffers catastrophic injuries. 

If reduced below one-third HP, the creature becomes increasingly aggressive rather than retreating. If the party retreats, the hydra generally does not pursue far beyond its hunting grounds.

#### Features of the Area
**Crystal Marsh** Much of the battlefield is shallow water. Squares containing water are difficult terrain. Creatures that critically fail an [[Skills#Athletics|Athletics]] or [[Skills#Acrobatics|Acrobatics]] check while moving through the marsh fall [[prone]].
**Crystal Spires** Jagged crystal formations protrude throughout the marsh. A creature pushed or knocked into a crystal spire takes `dice: 1d6` piercing damage. The spires provide standard cover.
**Unstable Shoreline** Certain sections of shoreline are soft and unstable. A creature ending its turn in these spaces must succeed at a DC 18 Reflex save or become [[off-guard]] until the start of its next turn.

> [!tip]+ Treasure
> If the Hydra is harvested check the table below. 
>
> - [[H.#3-Rules/Bestiaries/Monster Core/H/Hydra Hydra|Hydra Harvest]]

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Hollow Stalker
- [ ] Moderate (80 XP) Level 5

> [!note]+ Read Aloud
> The forest grows quiet. Not merely calm. Silent. The constant sounds of insects, birds, and distant wildlife simply cease. Even your own footsteps seem muted beneath the canopy. 
> 
> Ahead, a patch of sunlight spills across the trail. Something moves through it. A shape. Large and four-legged. It's gone before you can focus on it.

The Hollow Stalker actively stalks potential prey before attacking. Possible clues include:

|Skill|DC|Information|
|---|---|---|
|Perception|21|Briefly catches movement that shouldn't be possible.|
|Survival|20|Identifies signs of a large predator shadowing the party.|
|Nature|22|Determines the predator is hunting rather than defending territory.|
|Occultism|21|Recognizes localized spatial instability.|
|Arcana|21|Detects magical distortion surrounding the area.|

Success may prevent the party from being surprised.

> [!note]+ Read Aloud
> Several moments later you notice claw marks carved into a nearby tree. Then another tree. Then another. A strange realization creeps over you. The marks weren't there before. 
> 
> Or perhaps they were.
> 
> A low growl echoes from somewhere among the trees. It comes from everywhere at once. Then a pair of pale eyes opens in the darkness between two trunks. The eyes blink. The creature is suddenly standing much closer than it should be.

**Description** The party enters a section of the Deep Wilds where the forest seems unnaturally sparse. The undergrowth is thin, sounds are muffled, and even the ever-present hum of the Prismatic Canopy has faded into an unsettling silence.

Tree trunks bear long claw marks that appear and disappear depending on the angle from which they are viewed. Small animals are nowhere to be found. The air feels wrong. Several trails converge through this area, yet none show signs of recent passage.

The creature uses the statistics of a Phase Tiger with the following narrative changes:
- Portions of its body appear translucent or incomplete.
- Crystal growths protrude from beneath its skin like exposed bones.
- Light bends unnaturally around its form.
- Its footsteps produce no sound.
- Its eyes glow with pale prismatic light.

At the start of the encounter, place the following foes on the map: 
- 1: [[Phase Tiger]]

```encounter
name: Random One - Hollow Stalker
party:  The Shattering
creatures:
  - 1: [[Phase Tiger]]
```

> [!warning]
> Whenever the Hollow Stalker uses a teleportation or phasing ability, creatures within 10 feet must succeed at a DC 21 Will save or become [[off-guard]] against the Hollow Stalker's next Strike before the end of its next turn. This represents momentary spatial disorientation.

#### Tactics
The Hollow Stalker is patient. It spends several rounds observing prey before committing to an attack. The creature prioritizes isolated targets, spellcasters, creatures scouting ahead, and wounded prey.

During combat it constantly repositions using its phasing abilities, attacking from unexpected angles before disappearing again. The Hollow Stalker avoids prolonged melee whenever possible. It prefers to Ambush, Strike, Reposition and Repeat.

If reduced below one-third HP, it attempts to withdraw deeper into the Deep Wilds unless cornered. Unlike most predators, it values survival over territory.

#### Features of the Area
**Silent Forest** Sound behaves strangely here. Attempts to [[Seek]] using hearing take a –2 circumstance penalty.
**Flickering Shadows** Strange distortions affect visibility. The first time a creature attempts to [[Seek]] the Hollow Stalker each round, that creature must succeed at a DC 5 flat check or the action is wasted.
**Crystal Veins** Large crystal formations emerge from the roots of nearby trees. These provide standard cover. When struck by forceful impacts, they emit sharp harmonic tones audible throughout the area.

> [!tip]+ Treasure
> If the Phase Tiger is harvested check the table below. A DC 16 [[Skills#Perception|Perception]] check reveals the remains of previous victims.  Amongst their belongings are 2 pp, 1 gp and a [[numbing-tonic-(lesser)|Numbing Tonic (Lesser)]].
>
> - [[P.#Phase Tiger|Phase Tiger Harvest]]
> - [ ] pp::2
> - [ ] gp::1
> - [ ] consumable::[[numbing-tonic-(lesser)|Numbing Tonic (Lesser)]] [ilvl::5] [gp::30]

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Shimmer Fog
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> A faint haze drifts between the trees ahead. At first it appears to be nothing more than morning mist. Then the colors become apparent.
> 
> Subtle hues of violet, blue, green, and gold swirl through the fog like liquid light. Crystal growths scattered throughout the forest catch the strange mist and scatter it into countless shifting reflections. The forest beyond becomes difficult to focus on. A tree trunk appears farther away than it should be. A shadow moves through the fog. When you look again, it is gone.
> 
> The deeper you travel, the more the world seems to bend around you.

**Description** The party enters a low-lying section of the Prismatic Canopy where dense fog drifts between the trees. Unlike ordinary mist, this fog shimmers with faint prismatic colors that constantly shift and refract through the air. 

The fog seems thicker in some places than others, pooling around crystal outcroppings and collecting beneath the roots of ancient trees. Shapes appear to move within it. Most are merely illusions, but not all of them.

This encounter should create uncertainty and tension. Emphasize limited visibility and distorted perception. The party should feel disoriented without immediately understanding why. This is an excellent opportunity to foreshadow future Deep Wilds phenomena.  Allow the environment itself to become the challenge. The fog is not malicious, merely strange.

> [!note]+ Call Out
> ### Exploration Challenge
> 
> While traveling through the Shimmer Fog, one character may attempt a DC 20 [[Skills#Survival|Survival]] check every hour to maintain the group's bearings.
> **Critical Success** The party navigates efficiently. Travel proceeds normally and the group discovers a useful landmark, trail marker, or point of interest.
> **Success** The party remains on course. Travel proceeds normally.
> **Failure** The party loses time navigating the distorted terrain. Add 1 hour to the group's travel time.
> **Critical Failure** The party becomes disoriented. Roll on the Prismatic Canopy Random Encounter Table or move the party into an adjacent hex of the GM's choosing.

#### Features of the Area
**Shimmer Fog** The area is filled with refractive mist. Visibility is reduced to 30 feet. Creatures and objects beyond 30 feet are concealed. Creatures and objects beyond 60 feet are hidden.
**Distorted Perspective** The fog bends light in unpredictable ways. The first time each round a creature attempts a ranged Strike against a target more than 20 feet away, that creature must succeed at a DC 5 flat check or the attack targets an adjacent square of the attacker's choice instead. Area effects are unaffected.
**Echoing Shapes** The fog creates false images and movement. Whenever a creature critically fails a [[Skills#Perception|Perception]] check within the area, it briefly mistakes an illusion for reality. Describe movement between trees, distant voices, approaching creatures or other harmless phenomena.
**Resonant Crystals** Crystal formations throughout the area hum softly. A successful DC 20 [[Skills#Arcana|Arcana]], [[Skills#Nature|Nature]], or [[Skills#Occultism|Occultism]] check reveals the fog is reacting to ambient magical energies within the forest. On a Critical Success, The character identifies a stable route through the fog, granting the party a +2 circumstance bonus to subsequent navigation checks made within the encounter area.

#### Discovery Opportunities
Characters investigating the area may learn the following:

|Skill|DC|Information|
|---|---|---|
|Nature|18|The fog gathers around crystal-rich regions.|
|Arcana|20|Magical resonance is altering the behavior of ordinary moisture.|
|Occultism|20|The phenomenon resembles weak reality distortions.|
|Survival|20|The fog drifts according to patterns rather than wind.|
|Perception|22|Some apparent movements are not caused by creatures.|

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Glass Rain
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> The wind dies without warning. The forest grows unnaturally still as shifting colors spread through the clouds above. For several moments nothing happens. Then something strikes a nearby leaf. A soft chime rings through the forest. Another follows. Then dozens. Then hundreds.
> 
> Tiny crystalline fragments begin drifting from the sky like glittering snow. Sunlight catches each fragment, filling the air with countless dancing rainbows. The sound is strangely beautiful. Thousands of delicate crystal chimes echo throughout the forest.
> 
> As the storm intensifies, however, larger shards begin falling among the smaller fragments, striking branches, armor, and stone with increasing force. The beauty quickly gives way to danger.

**Description** As the party travels through the Prismatic Canopy, dark clouds begin gathering overhead. At first they appear to be an ordinary storm front, but the clouds shimmer with strange iridescent colors that ripple through them like light passing through crystal.

The air grows unnaturally still. Moments later, the storm arrives. Instead of water, countless tiny crystal fragments begin falling from the sky. Most are no larger than grains of sand, but some approach the size of gemstones. 

The phenomenon is beautiful. It is also dangerous.

This encounter should inspire wonder before concern. The Glass Rain is a natural consequence of the Shattering and the crystal-rich environment. The event should reinforce that the Prismatic Canopy operates under different natural laws. 

> [!note]+ Call Out
> ### Exploration Challenge
> 
> The party may attempt to locate shelter. Possible shelter includes large root systems, crystal overhangs, abandoned campsites, natural caves or dense canopy clusters. One character may attempt a DC 20 [[Skills#Survival|Survival]] check.
> **Critical Success** The party discovers excellent shelter. No saves against Crystal Shower are required while sheltered. 
> **Success** The party finds adequate shelter protecting them from the worst of the storm. The time between saves increases to 30 minutes while sheltered.
> **Failure** The party finds only limited cover. The encounter proceeds normally.
> **Critical Failure** The chosen shelter proves unstable. The party must immediately attempt another Reflex save against Crystal Shower.

#### Features of the Area
**Crystal Shower** The Glass Rain lasts for approximately 1 hour. During this time, all exposed creatures are subjected to falling crystal fragments. Every 10 minutes spent exposed to the storm, creatures must attempt a DC 20 Reflex save. On a **Critical Success** the creature avoids the largest falling shards and suffers no ill effects.  A **Success** means the creature suffers minor impacts which cause discomfort but no meaningful harm. **Failure** results in the creature takes `dice: 1d4` slashing damage from falling crystal fragments. On a **Critical Failure** the creature takes `dice: 1d8` slashing damage and gains a –1 circumstance penalty to [[Skills#Perception|Perception]] checks until the end of the encounter as tiny crystal fragments interfere with vision.
**Reduced Visibility** The dense crystal precipitation reduces visibility. Creatures and objects beyond 60 feet are concealed. Creatures and objects beyond 120 feet are hidden.
**Slippery Crystal Accumulation** As the storm progresses, crystal fragments accumulate on surfaces. Creatures moving more than half their Speed across exposed stone, roots, or crystal formations must succeed at a DC 18 [[Skills#Acrobatics|Acrobatics]] check or fall [[prone]].

#### Discovery Opportunities
Characters investigating the phenomenon may learn:

|Skill|DC|Information|
|---|---|---|
|Nature|20|The storm is not entirely natural.|
|Arcana|20|Ambient magical energies are condensing into crystalline matter.|
|Occultism|20|Similar phenomena have been reported near regions damaged by the Shattering.|

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter:  Crystal Bloom
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> At first, the clearing before you appears familiar. Then you notice the flowers. Hundreds of them. Perhaps thousands. The forest floor ahead is covered in blossoms of every imaginable color, each flower threaded with delicate crystal structures that shimmer in the filtered sunlight. Crystal vines climb nearby trees. Fresh roots push through the explosively uprooted soil. Tiny crystal buds emerge from bark and stone alike.
> 
> The air hums softly. A faint vibration resonates through the clearing as sunlight dances across the countless crystal surfaces. Everything here appears impossibly vibrant. And impossibly new.

**Description** The party discovers a section of the Prismatic Canopy that appears to have undergone dramatic change within a matter of hours. Crystal growths have erupted throughout the area, transforming ordinary vegetation into glittering sculptures of translucent stone. 

Flowers bloom where none existed before. Roots have burst through the soil. Entire sections of the forest appear newly grown. The phenomenon is beautiful, but deeply unnatural.

This encounter should evoke wonder and curiosity rather than immediate danger. The Crystal Bloom represents the ongoing transformation of the Canopy following the Shattering. Players should feel as though they have stumbled upon something rare. Emphasize rapid growth, impossible colors, and the feeling that the forest is alive.

> [!note]+ Call Out
> ### Exploration Challenge
> 
> Characters may spend time studying the phenomenon. One character may attempt one of a [[Skills#Nature|Nature]], [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check at DC 20. 
> **Critical Success** The character learns that Crystal Blooms represent concentrated growth events caused by lingering magical energies interacting with local ecosystems. The party gains `dice: 2d4` [[prismatic-crystal-shard|Prismatic Crystal Shard]] and one additional discovery from the Treasure section. The character also learns that the Crystal Bloom appears to radiate outward from a central point. At the center lies a partially buried crystal formation bearing faint geometric markings. These markings resemble neither natural growth nor known script.
> **Success** The character identifies the area as a recent Crystal Bloom site and discovers useful harvestable materials. The party gains `dice: 1d4` [[prismatic-crystal-shard|Prismatic Crystal Shard]].
> **Failure** The character gains little useful information.
> **Critical Failure** The character misidentifies harmless growths as valuable specimens. No useful materials are recovered.

#### Features of the Area
**Accelerated Growth** The area has experienced a recent Crystal Bloom. Plants throughout the encounter zone display signs of explosive growth. A successful DC 20 [[Skills#Nature|Nature]] check reveals many of the plants are only a few days—or perhaps even hours—old.
**Resonant Pollination** The clearing is saturated with magical pollen. Creatures spending more than 10 minutes within the area must attempt a DC 20 Fortitude save. **Critical Success** The creature is invigorated. Gain a +1 circumstance bonus to the next [[Skills#Nature|Nature]] check made within the next 24 hours. **Success** No effect. **Failure** The creature becomes [[sickened|Sickened 1]]. **Critical Failure** The creature becomes [[sickened|Sickened 1]] and [[off-guard|Off-Guard]] for 1 hour due to mild hallucinations and sensory distortion.
**Distorted Time Sense** The humming resonance subtly affects perception. A creature that fails a [[Skills#Perception|Perception]] check within the clearing briefly loses track of time, believing several minutes have passed when only seconds have elapsed. This has no mechanical effect but contributes to the encounter's atmosphere.

#### Discovery Opportunities
Characters investigating the clearing may learn:

|Skill|DC|Information|
|---|---|---|
|Nature|18|The plants have grown at an impossible rate.|
|Arcana|20|Magical energy remains concentrated throughout the area.|
|Occultism|20|Similar growth phenomena have become more common since the Shattering.|
|Survival|18|Wildlife has recently fed heavily within the clearing.|

> [!tip]+ Treasure
> The crystal bloom has an abundance of natural resources available.  Characters harvesting the area may recover `dice: 1d4` of the following:
>
> - [ ] consumable::[[creep-vine|Creep Vine]] [ilvl::0] [gp::0.5] 
> - [ ] consumable::[[prismatic-crystal-shard\|Prismatic Crystal Shard]] [ilvl::1] [gp::0.5] 
> - [ ] consumable::[[vine-arrow|Vine Arrow]] [ilvl::3] [gp::10] 
> - [ ] consumable::[[seed-pod-of-rooted-wisdom|Seed Pod of Rooted Wisdom]] [ilvl::2] [gp::7] 

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter:  Resonant Thunder
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> The first rumble is easy to mistake for distant thunder. A low sound rolls through the forest, barely noticeable beneath the whisper of wind through the canopy. Then it happens again. This time the ground trembles beneath your feet. Nearby crystal formations begin to hum softly. The sound grows. 
> 
> Not louder. Deeper. A powerful pulse travels through the earth, vibrating through roots, stone, and crystal alike. The surrounding formations erupt into shimmering tones as though an invisible hand has struck thousands of crystal chimes simultaneously. 
> 
> The forest falls suddenly silent. Even the birds have stopped singing. 
> 
> Several moments later another pulse rolls through the earth.

**Description** The party enters a region of the Prismatic Canopy where crystal growths have become unusually dense. Great veins of translucent crystal emerge from the roots of ancient trees, while smaller formations protrude from the forest floor in every direction.

Then the thunder begins. Not from above. From below. Deep, resonant pulses travel through the earth like the heartbeat of something impossibly large buried beneath the forest. Each pulse is followed by a low harmonic rumble that vibrates through crystal formations for miles.

This encounter should be unsettling rather than immediately dangerous. The players should feel as though they are witnessing a phenomenon they do not yet understand. The source of the thunder is not revealed. Emphasize vibrations, resonance, and anticipation. The phenomenon should feel as if it is alive.

#### Resonance Pulse
Every 10 minutes spent within the affected area, a resonance pulse passes through the region. Creatures must attempt a DC 20 Fortitude save.
**Critical Success** The creature steadies itself and briefly perceives the direction from which the pulse originated. Gain a +1 circumstance bonus to the next [[Skills#Nature|Nature]], [[Skills#Survival|Survival]], [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check made during this encounter.
**Success** The creature is unaffected.
**Failure**  The vibration disrupts the creature's concentration. The creature takes a -1 circumstance penalty to its next [[Skills#Nature|Nature]], [[Skills#Survival|Survival]], [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check made during this encounter.
**Critical Failure** The creature is overwhelmed by the pulse. The creature takes a -2 circumstance penalty to its next [[Skills#Nature|Nature]], [[Skills#Survival|Survival]], [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check made during this encounter and experiences a brief sensory distortion. The GM may provide a fleeting vision, sound, or sensation associated with the Deep Wilds.

> [!note]+ Call Out
> ### Exploration Challenge
> 
> The party may attempt to locate the direction from which the pulses originate. One character may attempt one of a [[Skills#Nature|Nature]], [[Skills#Survival|Survival]], [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check at DC 20. 
> **Critical Success** The character accurately identifies the approximate direction of the source. The party gains a +2 circumstance bonus to future navigation checks made toward the Deep Wilds. The player also notices that the pulses occur at nearly regular intervals. Not perfectly. But close enough to resemble a heartbeat. The implication should be left entirely to the players.
> **Success** The character determines a general direction.
> **Failure** The vibrations echo unpredictably through the crystal formations. No useful information is gained.
> **Critical Failure** The character incorrectly identifies the source. The GM may provide misleading information.

#### Features of the Area
**Vibrating Crystals** Crystal formations throughout the area resonate with each pulse. A successful DC 20 [[Skills#Nature|Nature]], [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check reveals that the crystals are reacting to a source of energy originating somewhere deeper in the forest.
**Animal Distress** Wildlife reacts strongly to the phenomenon. Creatures using [[Skills#Survival|Survival]] to [[Track]] gain a +2 circumstance bonus to identify recent animal movement. Most tracks lead away from the source of the pulses.

#### Discovery Opportunities
Characters investigating the area may learn:

|Skill|DC|Information|
|---|---|---|
|Nature|18|Wildlife has been avoiding the region.|
|Survival|20|Many animal trails lead away from a common point.|
|Arcana|20|The pulses contain magical resonance.|
|Occultism|20|The phenomenon resembles neither natural weather nor ordinary magic.|
|Crafting|20|The crystals are carrying and amplifying the vibrations.|

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter:  Prismatic Windstorm
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> A sudden gust rustles the canopy overhead. Then another.
> 
> Leaves begin to shimmer as sunlight catches countless suspended particles drifting through the air. The wind intensifies rapidly. Crystal growths throughout the forest begin to hum in response. A low whistle becomes a howl. Then a scream.
> 
> Brilliant ribbons of color surge between the trees as clouds of crystal dust are swept into the air. Branches bend violently overhead while thousands of tiny crystal fragments dance through the storm like glittering shards of glass. The forest erupts into motion. The storm has arrived.

**Description** The Prismatic Canopy is known for sudden weather shifts, but few are as feared by seasoned explorers as a Prismatic Windstorm. These violent storms form when powerful winds sweep through regions dense with crystal growth, scattering crystal dust, fragments, and magical resonance through the air. Unlike ordinary storms, Prismatic Windstorms produce curtains of shimmering color that dance through the forest. Trees groan under the force of the winds while crystal formations sing, howl, and occasionally shatter under the strain. For a brief period, the entire forest becomes a kaleidoscope of motion, color, and danger.

This encounter should feel dramatic and dangerous. Emphasize movement, noise, and limited visibility. Players should feel exposed to the raw power of the region. The storm is dangerous, but survival depends more on preparation than combat prowess.

> [!note]+ Call Out
> ### Exploration Challenge
> 
> The party may attempt to locate shelter before the storm reaches its peak. One character may attempt a DC 20 [[Skills#Nature|Nature]] or [[Skills#Survival|Survival]] skill check.   
> **Critical Success** The party finds excellent shelter. The group ignores Flying Debris for the remainder of the encounter and discovers useful resources after the storm.
> **Success** The party finds adequate shelter protecting them from the worst of the storm. Reduce Flying Debris damage by half.
> **Failure** The party finds poor shelter. The encounter proceeds normally.
> **Critical Failure** The chosen shelter partially collapses. Immediately resolve a Flying Debris save against all creatures and continue the encounter as normal.

#### Features of the Area
**Violent Winds** Strong winds buffet creatures throughout the encounter. Creatures attempting ranged weapon attacks beyond their first range increment take a –2 circumstance penalty to the attack roll. Tiny unattended objects are blown away.
**Crystal Dust Clouds** Visibility is severely reduced. Creatures and objects beyond 30 feet are concealed. Creatures and objects beyond 60 feet are hidden.
**Flying Debris** Every 10 minutes spent exposed to the storm, creatures must attempt a DC 20 Reflex save.  Those who fail suffer `dice: 3d4` slashing damage from crystal fragments and debris. On a Critical Failure take 3d8 slashing damage and become [[dazzled]] for 1 minute.
**Singing Crystals** The storm causes crystal formations to resonate. A creature spending at least 10 minutes studying the sounds may attempt a DC 20 [[Skills#Nature|Nature]], [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check. **Critical Success** The character identifies harmonic patterns hidden within the storm. Gain a +2 circumstance bonus to the next check made within the Prismatic Canopy or Deep Wilds. **Success** The character recognizes that the resonance follows identifiable patterns. **Failure** The sounds appear random. **Critical Failure** The character becomes distracted by the overwhelming noise and takes a –1 circumstance penalty to Reflex saves for 10 minutes.

#### Discovery Opportunities
Characters investigating the clearing may learn:

|Skill|DC|Information|
|---|---|---|
|Nature|18|These storms are relatively common in crystal-rich regions.|
|Survival|20|The storm follows predictable weather patterns.|
|Arcana|20|Crystal dust is carrying trace magical energy.|
|Occultism|20|Similar storms occur more frequently near areas of magical instability.|

> [!tip]+ Treasure
> After the storm passes, characters may spend 10 minutes searching the area. A character may attempt a DC 20 [[Skills#Survival|Survival]],  [[Skills#Nature|Nature]],  or [[Skills#Crafting|Crafting]],  check. On **Critical Success** the characters recover `dice: 2d4` [[prismatic-crystal-shard|Prismatic Crystal Shards]] + 1 for every character participating in the search.  A **Success** results in the discovery of `dice: 1d4` shards.
>
> - [ ] consumable::[[prismatic-crystal-shard\|Prismatic Crystal Shard]] [ilvl::1] [gp::0.5] 

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Abandoned Campsite
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> The scent of old smoke drifts through the trees. A few moments later, the forest opens into a small clearing. Someone camped here recently. A fire pit sits near the center of the site, its ashes cold but largely undisturbed. Several bedrolls remain scattered around the clearing alongside overturned packs and abandoned supplies. A cooking pot still hangs above the extinguished fire. One tent has collapsed. Another appears to have been cut open from the inside. 
> 
> The camp is silent.  No voices, no movement and no bodies. Only the uncomfortable feeling that whoever stayed here left far more quickly than they intended.

**Description** The party discovers the remains of a recently abandoned campsite hidden beneath the canopy. At first glance, it appears that a small expedition or merchant caravan stopped here for the night. The camp shows signs of haste, confusion, and growing fear rather than violence. Bedrolls remain. Supplies were left behind. A fire pit contains partially burned wood. Most unsettling of all, there are no bodies.

This encounter should create mystery and tension. Players should initially suspect an attack. The evidence should gradually suggest something stranger occurred. The camp serves as a breadcrumb leading deeper into the Canopy and eventually toward the Deep Wilds. Reward careful investigation but avoid immediately revealing the truth.

> [!note]+ Call Out
> ### Investigation Challenge
> 
> Each character may attempt one of the following skill checks at DC 20: [[Skills#Perception|Perception]], [[Skills#Survival|Survival]], [[Skills#Medicine|Medicine]], [[Skills#Arcana|Arcana]], [[Skills#Occultism|Occultism]] or [[Skills#Society|Society]]. Record the number of successes with a critical success counting as two successes.
> 
> **1 Success** The camp was abandoned within the last few days.
> **3 Successes** The occupants left voluntarily rather than being attacked.
> **5 Successes** The final journal entries suggest the group became increasingly paranoid and obsessed with locating the source of the sounds.
> **7 Successes** The expedition likely traveled toward the Deep Wilds rather than away from it.

#### Features of the Area
**Signs of Panic** The camp was abandoned suddenly. A successful DC 18 [[Skills#Perception|Perception]] check reveals equipment left behind, partially packed supplies, unfinished meals, and signs of multiple people moving rapidly through the campsite. Despite appearances, no evidence of combat is present. No blood, drag marks, or any signs of predation. Whatever happened here was not a conventional attack.
**Disturbed Perimeter** The edge of the campsite contains numerous broken branches and damaged undergrowth. A successful DC 20 [[Skills#Survival|Survival]] check allows a character to follow the expedition's trail. **Critical Success** The party learns exactly how many people departed and how recently. **Success** The party identifies the direction they traveled. **Failure** The trail is difficult to follow. **Critical Failure** The party follows an incorrect trail.
**Journal Fragments** Several pages of a damaged journal remain. A successful DC 20 [[Skills#Society|Society]] check can piece together portions of the text. Possible excerpts include: 
- "...hearing the humming again..."
- "...coming from beneath the roots..."
- "...Mira says the crystals are growing overnight..."
- "...something moved between the trees but left no tracks..."
- "...we should leave tomorrow..."

> [!tip]+ Treasure
> The camp contains abandoned equipment. Characters who spend at least 10 minutes searching recover:
>
> - [ ] gp::5
> - [ ] consumable::[[Rations|Rations]] [ilvl::0] [gp::0.5] 
> - [ ] permanent::[[Bedroll|Bedroll]] [ilvl::0] [gp::0.02] 
> - [ ] consumable::[[prismatic-crystal-shard\|Prismatic Crystal Shard]] [ilvl::1] [gp::0.5]
> - [ ] consumable::[[prismatic-crystal-shard\|Prismatic Crystal Shard]] [ilvl::1] [gp::0.5]
> - [ ] consumable::[[prismatic-crystal-shard\|Prismatic Crystal Shard]] [ilvl::1] [gp::0.5]
> - [ ] consumable::[[prismatic-crystal-shard\|Prismatic Crystal Shard]] [ilvl::1] [gp::0.5]
> - [ ] consumable::[[healing-potion-lesser|Healing Potion (Lesser)]] [ilvl::3] [gp::12]

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter:  Crystal Cache
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> A flash of color catches your eye through the trees. As you push through the undergrowth, the forest suddenly opens into a small hollow. Crystal formations emerge from the earth in every direction. Some stand only inches high, while others rise taller than a person. Sunlight fractures through hundreds of translucent surfaces, filling the clearing with shifting rainbows and dancing reflections. Energy pulses faintly barely contained by the crystal formations.
> 
> The air hums softly. Tiny crystal shards crunch beneath your boots. For a moment, the clearing resembles a treasure vault sculpted by nature itself.

**Description** The party discovers a naturally occurring deposit of Prismatic Crystals hidden within the forest. Crystal growths protrude from the earth, roots, and nearby stone formations, transforming the area into a glittering maze of color and reflected light. Unlike the crystal formations commonly found throughout the Canopy, these deposits are unusually dense and exceptionally pure. Such finds are one of the primary reasons settlers, prospectors, and adventurers risk entering the Prismatic Canopy.

> [!note]+ Call Out
> ### Exploration Challenge
> 
> The party may attempt to locate shelter before the storm reaches its peak. One character may attempt a DC 20 [[Skills#Nature|Nature]] or [[Skills#Survival|Survival]] skill check.   
> **Critical Success** The party finds excellent shelter. The group ignores Flying Debris for the remainder of the encounter and discovers useful resources after the storm.
> **Success** The party finds adequate shelter protecting them from the worst of the storm. Reduce Flying Debris damage by half.
> **Failure** The party finds poor shelter. The encounter proceeds normally.
> **Critical Failure** The chosen shelter partially collapses. Immediately resolve a Flying Debris save against all creatures and continue the encounter as normal.

#### Features of the Area
**Crystal-Rich Deposit** The area contains an unusually dense concentration of Prismatic Crystals. A successful DC 20 [[Skills#Nature|Nature]] or [[Skills#Crafting|Crafting]] check identifies the cache as particularly valuable.
**Razor-Sharp Growths** Many crystal formations possess dangerously sharp edges. A creature moving through the cache must succeed at a DC 18 [[Skills#Acrobatics|Acrobatics]] check. A failure results in the creature suffering 1d6 slashing damage and [[Persistent Damage|Persistent Damage - Bleeding]]. `dice: 1d6`  This damage can not be healed through normal means and requires magical healing.
**Resonant Veins** The crystals emit faint harmonic vibrations. A successful DC 20 [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check reveals that the deposit is naturally occurring and large amounts of magical energy remain trapped within the crystal lattice.

#### Discovery Opportunities
Characters investigating the area may learn:

|Skill|DC|Information|
|---|---|---|
|Nature|18|The deposit formed naturally after the Shattering.|
|Crafting|20|The crystals are suitable for use in various crafting projects.|
|Occultism|20|The harmonic vibrations resemble other crystal phenomena found throughout the region.|
|Survival|18|Animals frequently visit the area but rarely linger.|

> [!tip]+ Treasure
> A character who critically succeeds at a DC 20 [[Skills#Arcana|Arcana]],  [[Skills#Nature|Nature]],  or [[Skills#Crafting|Crafting]],  check can recover `dice: 1d4` [[Prismatic Crystal Shards]] from a hidden seam.
>
> - [ ] consumable::[[prismatic-crystal-shard\|Prismatic Crystal Shard]] [ilvl::1] [gp::0.5] 

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter:  Old Caravan Tracks
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> A faint rut catches your eye along the forest floor. Then another. The marks become clearer as you follow them.
> 
> Wagon wheels, pack animals and boot prints. A caravan passed through here.
> 
> At first the trail appears ordinary, but the farther you follow it, the more unusual details begin to emerge. Broken branches line the route. Several trees bear fresh axe marks. The tracks occasionally drift off the established trail before abruptly correcting course. Whoever traveled this path appears to have become increasingly nervous as the journey progressed.

**Description** The party discovers evidence of a caravan that passed through the region several weeks ago. What initially appears to be an ordinary trail soon reveals signs that something unusual happened during the journey. Unlike the abandoned campsite, the mystery here lies not in what was left behind, but in what changed as the caravan continued deeper into the forest. The tracks tell a story. Whether the party can piece it together is another matter.

A character who critically succeeds at a DC 18 [[Skills#Survival|Survival]] or [[Skills#Perception|Perception]] check discovers a discarded journal page. The partially ruined page contains a few sentence fragments. 
> "The humming returned last night."
> "Several guards refuse to continue."
> "Something keeps moving between the trees."

#### Features of the Area
**Disturbed Route** The caravan repeatedly altered its course. A successful DC 20 [[Skills#Survival|Survival]] check reveals that the travelers frequently stopped, altered their route and doubled back several times like they were searching for something or attempting to avoid something.
**Unusual Damage** Several wagons appear to have been abandoned or repaired along the route. A successful DC 20 [[Skills#Crafting|Crafting]] check reveals damage inconsistent with bandits, no evidence of siege weapons and no signs of monster attacks. Instead, the damage appears to have resulted from panic, accidents, and hurried travel.

> [!tip]+ Treasure
> A character who succeeds at a DC 20 [[Skills#Perception|Perception]] check discovers a damaged crate containing 3 [[prismatic-crystal-shard|Prismatic Crystal Shards]].
>
> - [ ] consumable::[[prismatic-crystal-shard\|Prismatic Crystal Shard]] [ilvl::1] [gp::0.5] 
> - [ ] consumable::[[prismatic-crystal-shard\|Prismatic Crystal Shard]] [ilvl::1] [gp::0.5] 
> - [ ] consumable::[[prismatic-crystal-shard\|Prismatic Crystal Shard]] [ilvl::1] [gp::0.5] 

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter:  Monster Corpse
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> The smell reaches you first. Rot and blood. 
> 
> A short distance off the trail, the undergrowth has been flattened across a broad section of forest. Several trees bear deep gouges in their bark. Broken branches litter the ground. At the center of the destruction lies the corpse of a massive owlbear. The creature's body is twisted unnaturally. Its feathers are stained dark with blood. One enormous claw remains buried in the trunk of a nearby tree.
> 
> Something killed it. And judging by the state of the battlefield, it did not come easily.

**Description** The party discovers the remains of a powerful predator deep within the Prismatic Canopy. Something killed it. Whatever did so appears to have done it recently. The surrounding forest bears signs of a violent struggle, yet many details refuse to make sense.

This encounter is about tension, not combat. The corpse should establish that dangerous things live here. The evidence should imply another dangerous creature without immediately identifying it. Players should leave wondering what killed the Owlbear.

> [!note]+ Call Out
> ### Exploration Challenge
> 
> The party may attempt to locate shelter before the storm reaches its peak. One character may attempt a DC 20 [[Skills#Nature|Nature]] or [[Skills#Survival|Survival]] skill check.   
> **Critical Success** The party finds excellent shelter. The group ignores Flying Debris for the remainder of the encounter and discovers useful resources after the storm.
> **Success** The party finds adequate shelter protecting them from the worst of the storm. Reduce Flying Debris damage by half.
> **Failure** The party finds poor shelter. The encounter proceeds normally.
> **Critical Failure** The chosen shelter partially collapses. Immediately resolve a Flying Debris save against all creatures and continue the encounter as normal.

#### Features of the Area
**Signs of Violence** The area shows evidence of a prolonged struggle. A successful DC 20 [[Skills#Survival|Survival]] check reveals that there were multiple combatants, repeated movement across the battlefield, and signs that the fight continued for several minutes. However the player is unable to make out who or what survived the encounter.
**Unusual Wounds** The corpse bears injuries inconsistent with most predators. A successful DC 20 [[Skills#Medicine|Medicine]] check reveals wounds from multiple angles, attacks delivered in rapid succession and no evidence of scavenging. This creature was hunted rather than fed upon.

> [!tip]+ Treasure
> If the players attempt to harvest the owlbear corpse the will find that they can only recover half of the normal results for claws and hide.  The rest of the corpse is too far gone or fouled to be of much use.
>
> - [[O.#Owlbear|Owlbear Harvest]]

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter:  Resonant Thunder
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> The first rumble is easy to mistake for distant thunder. A low sound rolls through the forest, barely noticeable beneath the whisper of wind through the canopy. Then it happens again. This time the ground trembles beneath your feet. Nearby crystal formations begin to hum softly. The sound grows. 
> 
> Not louder. Deeper. A powerful pulse travels through the earth, vibrating through roots, stone, and crystal alike. The surrounding formations erupt into shimmering tones as though an invisible hand has struck thousands of crystal chimes simultaneously. 
> 
> The forest falls suddenly silent. Even the birds have stopped singing. 
> 
> Several moments later another pulse rolls through the earth.

**Description** The party enters a region of the Prismatic Canopy where crystal growths have become unusually dense. Great veins of translucent crystal emerge from the roots of ancient trees, while smaller formations protrude from the forest floor in every direction.

Then the thunder begins. Not from above. From below. Deep, resonant pulses travel through the earth like the heartbeat of something impossibly large buried beneath the forest. Each pulse is followed by a low harmonic rumble that vibrates through crystal formations for miles.

This encounter should be unsettling rather than immediately dangerous. The players should feel as though they are witnessing a phenomenon they do not yet understand. The source of the thunder is not revealed. Emphasize vibrations, resonance, and anticipation. The phenomenon should feel as if it is alive.

#### Resonance Pulse
Every 10 minutes spent within the affected area, a resonance pulse passes through the region. Creatures must attempt a DC 20 Fortitude save.
**Critical Success** The creature steadies itself and briefly perceives the direction from which the pulse originated. Gain a +1 circumstance bonus to the next [[Skills#Nature|Nature]], [[Skills#Survival|Survival]], [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check made during this encounter.
**Success** The creature is unaffected.
**Failure**  The vibration disrupts the creature's concentration. The creature takes a -1 circumstance penalty to its next [[Skills#Nature|Nature]], [[Skills#Survival|Survival]], [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check made during this encounter.
**Critical Failure** The creature is overwhelmed by the pulse. The creature takes a -2 circumstance penalty to its next [[Skills#Nature|Nature]], [[Skills#Survival|Survival]], [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check made during this encounter and experiences a brief sensory distortion. The GM may provide a fleeting vision, sound, or sensation associated with the Deep Wilds.

> [!note]+ Call Out
> ### Exploration Challenge
> 
> The party may attempt to locate the direction from which the pulses originate. One character may attempt one of a [[Skills#Nature|Nature]], [[Skills#Survival|Survival]], [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check at DC 20. 
> **Critical Success** The character accurately identifies the approximate direction of the source. The party gains a +2 circumstance bonus to future navigation checks made toward the Deep Wilds. The player also notices that the pulses occur at nearly regular intervals. Not perfectly. But close enough to resemble a heartbeat. The implication should be left entirely to the players.
> **Success** The character determines a general direction.
> **Failure** The vibrations echo unpredictably through the crystal formations. No useful information is gained.
> **Critical Failure** The character incorrectly identifies the source. The GM may provide misleading information.

#### Features of the Area
**Vibrating Crystals** Crystal formations throughout the area resonate with each pulse. A successful DC 20 [[Skills#Nature|Nature]], [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check reveals that the crystals are reacting to a source of energy originating somewhere deeper in the forest.
**Animal Distress** Wildlife reacts strongly to the phenomenon. Creatures using [[Skills#Survival|Survival]] to [[Track]] gain a +2 circumstance bonus to identify recent animal movement. Most tracks lead away from the source of the pulses.

#### Discovery Opportunities
Characters investigating the area may learn:

|Skill|DC|Information|
|---|---|---|
|Nature|18|Wildlife has been avoiding the region.|
|Survival|20|Many animal trails lead away from a common point.|
|Arcana|20|The pulses contain magical resonance.|
|Occultism|20|The phenomenon resembles neither natural weather nor ordinary magic.|
|Crafting|20|The crystals are carrying and amplifying the vibrations.|

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter:  Castlemere Patrol
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> The faint sound of marching carries through the trees. Moments later, movement appears ahead on the trail. 
> 
> A line of armored figures emerges from the forest with practiced discipline. Red-and-gold cloaks hang over polished armor marked with the crest of Castlemere. Each carries a weapon within easy reach, while their eyes constantly scan the surrounding wilderness. The lead soldier raises a hand.
> 
> The patrol immediately halts. For several moments neither side speaks. Then the sergeant steps forward.
> 
> "Travelers." His gaze moves from one member of the party to the next. "State your business in the Canopy."

**Description** The party encounters a patrol from Castlemere consisting of 1 Patrol Sergeant, 4–6 Castlemere Rangers or Guards and 1 Pack Mule carrying supplies and reports.  They are conducting routine operations along the outer reaches of the Prismatic Canopy. Their orders are to monitor regional threats, map dangerous areas, and investigate reports of unusual activity. The soldiers are disciplined, professional, and wary. Unlike the people of Springrun, they view the wilderness as a threat to be contained rather than an opportunity to be explored. The patrol is not looking for a fight and has no intention of attacking unless severely provoked.

The patrol begins as **Indifferent**. The attitude may shift based upon whether the party identifies themselves honestly, their relationship with Springrun, their behavior and their apparent competence.

The citizens of Castlemere respect assisting local settlements, fighting dangerous creatures, respecting Castlemere authority and sharing useful information.  Should the PCs do any of these it improves the patrol's overall attitude toward them.  Conversely, open hostility toward Castlemere, suspicious behavior, concealing information or openly mocking Castlemere policies will cause the attitude of the patrol to worsen.
 
The patrol's worldview differs significantly from that of Springrun. The soldiers generally believe the wilderness is dangerous. That crystal growth should be monitored carefully and settlements should remain behind strong defenses. Exploration is necessary but should be tightly controlled.

If the players reveal they are working with or from Spring run, the patrol becomes visibly cautious.

Read or paraphrase:
> [!note]+ Read Aloud
> "Springrun." The sergeant exhales through his nose.
> 
> "Figures." Several members of the patrol exchange glances.
> 
> "You people spend too much time treating this forest like it wants to be your friend."

If asked, the patrol sergeant may share that Castlemere patrols have increased recently. A DC 20 [[Skills#Perception|Perception]] check reveals that the soldiers are exhausted but determined and it's obvious the patrol has been operating in the field for days. Several of them show signs of recent combat.

#### Features of the Area
**Frontier Reports** The patrol possesses information gathered during recent expeditions. Characters who earn the patrol's trust may gain access to valuable rumors. Provide `dice: 1d3` rumors from [[#Springrun Rumors|Springrun Rumors Table]].

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter:  Springrun Surveyors
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> Voices drift through the trees ahead. Not military commands. Just simple conversation and laughter.
> 
> A short distance later, the source becomes clear. Several individuals kneel beside a cluster of crystal formations while another sketches notes onto a weathered map spread across a fallen log. Wooden stakes marked with brightly painted symbols protrude from the ground nearby. One of the figures notices your approach.
> 
> Her face immediately brightens. "Travelers!"
> 
> The surveyor waves enthusiastically. "Perfect timing. You wouldn't happen to have seen any crystal blooms, collapsed tunnels, or unusual wildlife today, would you?" 
> 
> Another surveyor sighs. "Maybe ask their names first."

**Description** The party encounters a survey team from Springrun consisting of a Senior Surveyor, 2–4 Junior Surveyors, a Crystalwright Apprentice and a Pack Animal carrying equipment and samples. They are conducting one of the settlement's ongoing mapping and resource-expansion efforts. Unlike the cautious military patrols of Castlemere, these explorers are actively searching for opportunities within the Canopy. They are mapping trails, cataloging crystal deposits, marking potential settlement sites, and documenting unusual phenomena. Most importantly, they are genuinely excited about their work.

The surveyors are curious, optimistic, and somewhat overconfident representing Springrun's frontier spirit. While friendly, the surveyors may underestimate the dangers of the region. They should feel like people trying to build a future rather than merely survive. The surveyors are civilians rather than soldiers, though most carry basic weapons suitable for wilderness travel.

The surveyors begin as **Friendly**. Unlike the Castlemere Patrol, they generally assume strangers are potential allies rather than potential threats. Their attitude may improve further if the party shares information, assists with surveying work, helps investigate a discovery or represents Springrun. The surveyors are actively expanding Springrun's maps. Characters may contribute observations or discoveries, however, the surveyor's have not been any deeper into the Canopy and have no map information of value to the PCs.

The surveyors may ask for assistance. 
- **Analyze Crystal Growth** The players assist with crystal measurements. Roll [[Skills#Crafting|Crafting]] or [[Skills#Arcana|Arcana]] DC 20.  
- **Identify Wildlife Sign** Investigate tracks or signs. Roll [[Skills#Nature|Nature]] or [[Skills#Survival|Survival]] DC 20.  

If the players succeed the surveyors are grateful. The party gains a favorable reputation among Springrun's explorers. On a critical success the the surveyors offer the players two [[drake-hide|Sections of Drake Hide]] they stripped from a dead Flame Drake they discovered a few days ago.  The surveyors also know `dice: 1d3` rumors from [[#Springrun Rumors|Springrun Rumors Table]] which they can share with the PCs.

The surveyors may also share that Springrun has dramatically increased exploration efforts recently. A DC 20 [[Skills#Perception|Perception]] check reveals that several surveyors appear exhausted despite their enthusiasm. Their maps and notes contain detailed wildlife migration data. The Crystalwright is studying unusual crystal growth rates and notes that several crystal samples show recent changes.  As if they are starting to stabilize. A character who critically succeeds at an [[Skills#Arcana|Arcana]] or [[Skills#Nature|Nature]] checknotices something unusual within the notes. The Crystalwright's research notes indicate that crystal growth rates increase significantly nearer to the Deep Wilds. The pattern appears directional rather than random. The surveyors have not yet realized the significance of this finding.

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter:  Echo Flowers Repeat Conversation
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> A sweet fragrance drifts through the air. Ahead, the forest opens into a small clearing covered in thousands of delicate flowers. Their petals shimmer with subtle rainbow hues while tiny crystal filaments stretch between neighboring blooms. The flowers sway gently despite the absence of wind. As you step closer, several blossoms slowly turn toward you. For a moment, nothing happens. Then a nearby flower speaks.
> 
> In a perfect imitation of a voice you recognize. "...for a moment, nothing happens."
> 
> Several more flowers immediately repeat the phrase. "...nothing happens."
> 
> "...nothing happens."
> 
> "...nothing happens."
> 
> The clearing falls silent once more. Waiting. Listening.

**Description**The party discovers a clearing filled with unusual flowering plants unlike anything found elsewhere in the region. Delicate crystalline petals bloom atop long silver-green stems, while faint motes of light drift lazily between the flowers. The clearing appears peaceful. Then the flowers begin speaking. Not in their own voices. In yours.

Whenever the players spend time listening, roll or choose:
> "Mark this trail before sunset."
> "The crystal deposit is larger than expected."
> "Did you hear that humming again?"
> "Something moved behind the trees."
> "We should head back to Springrun."
> Laughter followed by several seconds of silence.
> "The tracks stop here."
> "That's impossible."
> "The doorway is real."
> "Don't let it hear you."

These fragments provide clues related to the Deep Wilds.

This encounter should be mysterious, amusing, and slightly creepy. The flowers are not hostile. 

> [!note]+ Call Out
> ### Exploration Challenge
> 
> The party may attempt to locate shelter before the storm reaches its peak. One character may attempt a DC 20 [[Skills#Nature|Nature]] or [[Skills#Survival|Survival]] skill check.   
> **Critical Success** The party finds excellent shelter. The group ignores Flying Debris for the remainder of the encounter and discovers useful resources after the storm.
> **Success** The party finds adequate shelter protecting them from the worst of the storm. Reduce Flying Debris damage by half.
> **Failure** The party finds poor shelter. The encounter proceeds normally.
> **Critical Failure** The chosen shelter partially collapses. Immediately resolve a Flying Debris save against all creatures and continue the encounter as normal.

#### Features of the Area
**Mimicked Speech** The flowers record and repeat sounds they hear. When a creature speaks within the clearing, the flowers may repeat individual words, complete sentences, fragments of previous conversations, sounds made by animals, laughter, or environmental noises. The repetition may occur immediately or several minutes later.
**Resonant Network** A successful DC 20 [[Skills#Arcana|Arcana]],  [[Skills#Nature|Nature]],  or [[Skills#Occultism|Occultism]] check reveals the flowers appear linked through a low-level magical resonance network. Sounds recorded by one flower may eventually be repeated by another elsewhere in the clearing.
**Imperfect Memory** The flowers do not understand language. They simply store and replay sounds. This often results in bizarre combinations. Examples include: 
> "Watch out!"
> "Two silver for the apples."
> "Something's following us."
> "Nice weather."
> "Something's following us."

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Resonance Wolves
- [ ] Moderate (80 XP) Level 5

> [!note]+ Read Aloud
> The forest grows still. No birds or insects. No distant animal calls. Only a faint humming carried through the trees.
> 
> At first it seems to come from the crystal formations surrounding you. Then you realize the sound is moving. The humming rises and falls in strange harmonics. One tone becomes two. Then three. Something shifts between the trees. 
> 
> A pale shape. Then another. Large lupine forms emerge from the undergrowth. Their fur is threaded with translucent crystal growths that pulse faintly beneath the canopy light. Jagged crystalline ridges protrude from their shoulders and spines. Neither growls or bares its teeth. Instead, the humming intensifies. The forest itself seems to answer.

**Description** The party enters a section of the Deep Wilds where the forest has become unnaturally quiet. Crystal growths protrude from roots and tree trunks, creating natural resonators that hum softly whenever the wind shifts. The silence feels deliberate and predatory. The wolves that hunt here do not howl, they sing.

These should feel like apex pack hunters adapted to the Deep Wilds. Emphasize coordination and intelligence. The wolves communicate through harmonic vibrations rather than vocalizations. The players should feel hunted before combat begins.

The creatures use the statistics of a Winter Wolf with the following narrative changes frost becomes resonant crystal energy. Breath attacks manifest as waves of crystal dust and harmonic force. Their fur contains embedded crystal formations and their eyes glow with shifting prismatic colors. Communication occurs through vibrations and resonant tones.

At the start of the encounter, place the following foes on the map: 
 - 2: [[Witchwarg]]

```encounter
name: Random One - Resonance Wolves
party:  The Shattering
creatures:
  - 2: [[Witchwarg, Resonance Wolf]]
```

#### Tactics
The Resonance Wolves hunt intelligently. They prefer isolated prey, wounded targets and creatures separated from the group. They attempt to use terrain and concealment before engaging.

During combat one wolf pressures the front line while the the other circles toward vulnerable targets. They use Resonance Breath to force movement and disrupt formations. Unlike ordinary wolves, they show remarkable patience. 

If combat turns against them, they retreat and attempt to stalk the party for another opportunity.

#### Features of the Area
**Resonant Crystal Groves** Numerous crystal formations amplify sound. A creature that critically fails a [[Skills#Stealth|Stealth]] check within the area causes nearby crystals to emit audible tones, revealing its location.
**Crystal Thickets** Dense crystal growth creates difficult terrain. A creature forced into a crystal thicket takes `dice: 2d4` piercing damage.
**Echoing Forest** Sounds carry unpredictably. The first [[Seek]] action attempted each round suffers a -1 circumstance penalty as echoes distort perception. Creatures using sound as a sense while in this area are [[Blinded]].

> [!tip]+ Treasure
> No individual loot is found but if the Resonance Wolves are harvested check the table below.
> 
> - [[W.#Witchwarg|Witchwarg Harvest]]

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Prism Widow Nest
- [ ] Moderate (90 XP) Level 5

> [!note]+ Read Aloud
> The forest changes abruptly. Trees stand farther apart here, connected by countless strands of shimmering webbing. Sunlight fractures through crystal growths woven into the silk, casting rainbows across the clearing. The webs seem almost artistic.
> 
> Delicate and intentional. A faint clicking sound echoes somewhere overhead. Then you notice the shapes suspended within the webbing.
> 
> A deer. Several wolves. Something wearing armor. Dozens of crystal-coated cocoons hang silently between the trees. 
> 
> The web nearest you trembles. Something is moving.

**Description** The party discovers a section of the Deep Wilds where crystal growths have overtaken an ancient grove. Massive strands of silvery webbing stretch between crystal-covered trees, forming intricate geometric patterns that shimmer with reflected light. At first glance, the area resembles a beautiful crystal garden. A closer look reveals dozens of cocooned remains suspended among the webs. Some are animals. Some are not.

This encounter should feel creepy and claustrophobic. The spiders should remain hidden for as long as possible. Emphasize the unsettling beauty of the webs. Players should gradually realize they have entered a hunting ground.

The creatures use the statistics of a Giant Tarantula and Hunting Spiders with the following narrative changes. 
- Crystal formations protrude from their legs and abdomens.
- Their eyes reflect prismatic colors.
- Their silk contains crystalline fibers.
- Their venom appears as shimmering liquid crystal.

A character who critically succeeds on a DC 20 [[Skills#Nature|Nature]], [[Skills#Arcana|Arcana]], or [[Skills#Perception|Perception]] check notices something unusual. The spiders have arranged portions of their nest around crystal growths.  Within the nest they are denser than those found elsewhere in the region.

At the start of the encounter, place the following foes on the map: 
 - 1: [[3-Rules/Bestiaries/Monster Core/G/Giant Tarantula|Giant Tarantula]]
 - 3: [[3-Rules/Bestiaries/Monster Core/H/Hunting Spider|Hunting Spider]]

```encounter
name: Random One - Prism Widow Nest
party:  The Shattering
creatures:
  - 1: [[Giant Tarantula, Prism Widow]]
  - 3: [[Hunting Spider, Prism Spider]]
```

#### Tactics
The Prism Widows are ambush predators. Initially two spiders remain hidden above while the other two remain concealed among crystal formations.    

The spiders focus on isolated targets, creatures caught in webs and lightly armored prey.

They attempt to: 
1. Immobilize targets.
2. Separate prey from allies.
3. Overwhelm isolated creatures.

Unlike many predators, the spiders are patient. If prey escapes the nest, the spiders rarely pursue beyond its boundaries.

#### Features of the Area
**Crystal Web Network** Much of the battlefield is covered in webs. Areas containing webbing are difficult terrain. Creatures that enter a webbed square for the first time each round must succeed at a DC 20 Reflex save or become [[immobilized]] until they Escape.
**Suspended Cocoons** Dozens of prey bundles hang throughout the grove. The cocoons provide cover. Some contain useful loot. Others contain unpleasant surprises.
**Crystalized Silk Bridges** Certain sections of webbing have become reinforced by crystal growth. These can support Medium creatures and may be used to traverse portions of the battlefield above ground level.
**Resonant Strands** The webs carry vibrations exceptionally well. A creature that critically fails a [[Skills#Stealth|Stealth]] check automatically alerts all spiders within the encounter area.

After combat, characters may examine the nest. A successful DC 20 [[Skills#Perception|Perception]] or [[Skills#Survival|Survival]] check reveals the remains from multiple expeditions.  The player also discovers one cocoon less than a week old and it's victim is missing. The cocoon was cut open from the inside.

> [!tip]+ Treasure
> If the the spiders are harvested check the tables below. Several of the cocoons have the remains of previous victims in them.  There's little of value, but if the players are persistent and open all of them or with a successful DC 20 [[Skills#Perception|Perception]] check they find 22 gp and a [[glimmering-missive|Glimmering Missive]].
> 
> - [[S.#3-Rules/Bestiaries/Monster Core/G/Giant Tarantula Giant Tarantula|Giant Tarantula Harvest]]
> - [[S.#3-Rules/Bestiaries/Monster Core/H/Hunting Spider Hunting Spider|Hunting Spider Harvest]]
> - [ ] gp::22
> - [ ] consumable::[[glimmering-missive|Glimmering Missive]] [ilvl::4] [gp::30]

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Resonant Burrower
- [x] Severe (120 XP) Level 5

> [!note]+ Read Aloud
> The forest becomes increasingly difficult to navigate. Trees lie uprooted in every direction. Long furrows stretch through the earth, cutting across the landscape without regard for terrain or obstacles. Several crystal formations have been split cleanly in half. The destruction continues for hundreds of feet.
> 
> Then the ground trembles. A faint vibration passes beneath your boots. Moments later, another follows. Closer.
> 
> The earth suddenly erupts in a spray of dirt, shattered roots, and crystal fragments as a massive armored beast bursts from below. Crystal growths cover portions of its thick hide, glowing faintly beneath layers of stone-like scales. Its jaws open wide.  The vibration returns. This time accompanied by a roar.

**Description** The party enters a region of the Deep Wilds where the forest floor has been utterly devastated. Trees lean at odd angles, roots have been torn free from the earth, and long trenches carve through the landscape as though something enormous has repeatedly tunneled beneath the surface. Crystal formations protrude from the exposed earth, many fractured or shattered from violent impacts. The ground occasionally vibrates beneath your feet. Not enough to be an earthquake. Enough to suggest movement.

This encounter should feel like the party has wandered into the territory of a living natural disaster. The creature's arrival should be sudden and violent.

The creature uses the statistics of a Bulette with the following narrative changes:
- Crystal growths emerge from its armored plating.
- Its movements create harmonic vibrations through the ground.
- Portions of its body glow with faint resonance patterns.
- It appears unnaturally large even for a Bulette.
- Nearby crystal formations react to its presence.
- When the Bulette uses its Leap or Charge abilities, nearby crystal formations emit violent harmonic tones.

At the start of the encounter, place the following foes on the map: 
 - 1: [[3-Rules/Bestiaries/Bestiary 1/B/Bulette|Bulette]]

```encounter
name: Random One - Resonant Burrower
party:  The Shattering
creatures:
  - 1: [[Bulette, Resonant Burrower]]
```

#### Tactics
The Resonant Burrower is an ambush predator. It prefers to attack from below, disrupt enemy formations, focus on isolated or vulnerable targets and use mobility to create chaos. The Burrower frequently emerges, attacks, and repositions. It has little fear of most opponents and relies on its durability and shock value to overwhelm prey. Unlike intelligent predators, it fights primarily through instinct.

If reduced below one-quarter HP, it may retreat underground if an escape route exists.

#### Features of the Area
**Unstable Ground** Large portions of the battlefield have been undermined by tunneling. A creature that Strides more than half its Speed through unstable terrain must succeed at a DC 20 Reflex save or fall [[prone]].
**Burrow Trenches** The creature's tunnels have collapsed portions of the terrain. These trenches provide lesser cover and count as difficult terrain.
**Crystal Shard Fields** Areas of shattered crystal litter the battlefield. Creatures entering these spaces take 1 piercing damage. The Resonant Burrower ignores this damage.
**Resonance Veins** Large crystal formations protrude from the earth. A successful DC 20 [[Skills#Arcana|Arcana]] or [[Skills#Nature|Nature]] check identifies these as unusually active and yet oddly stable.

> [!tip]+ Treasure
> If the the Bulette is harvested check the tables below. The players with a successful DC 20 [[Skills#Survival|Survival]] check can make their way back to the creature lair.  There they find the remains of several creatures as well as a pair of humanoid skeletons.  One of them is wearing a serviceable [[lamellar-breastplate]] and next to the other lays a [[fighters-fork|Fighter's Fork]]
> 
> - [[B.#3-Rules/Bestiaries/Bestiary 1/B/Bulette Bulette|Bulette Harvest]]
> - [ ] permanent::[[lamellar-breastplate|Lamellar Breastplate]] [ilvl::0] [gp::7]
> - [ ] permanent::[[fighters-fork|Fighter's Fork]] [ilvl::3] [gp::50]

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Gravity Scar
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> The forest changes gradually. At first, you notice a fallen branch suspended several feet above the ground. Then another.
> 
> Pebbles drift lazily through the air nearby. A patch of grass grows sideways along the trunk of a tree. Ahead, an entire section of forest appears distorted. Trees lean at impossible angles without falling. Loose leaves drift through the air like slow-moving fish in water. Crystal formations float several feet above the forest floor, turning gently as though caught in an unseen current.
> 
> Your stomach briefly lurches. For a moment, it feels as though the ground is no longer beneath your feet. Then the sensation passes.

**Description** The party discovers a region where gravity itself has been damaged. Trees grow at impossible angles. Stones hover inches above the ground. Fallen leaves drift lazily through the air before abruptly changing direction. The area feels wrong in a way that instinct immediately recognizes. The laws of the world are no longer entirely reliable here.

The phenomenon is a direct consequence of the Shattering, not the Dungeon. The area should inspire awe before concern, but nothing here is actively hostile.

A successful DC 20 [[Skills#Arcana|Arcana]], [[Skills#Nature|Nature]], or [[Skills#Occultism|Occultism]] check reveals that there are multiple gravitational vectors existing simultaneously.  The effect itself appears stable. A character who critically succeeds notices something remarkable. The anomaly does not appear random. Certain floating objects follow precise and repeating trajectories. When mapped carefully, these movements form geometric patterns. The significance of these patterns remains unknown, but they suggest the scar may be operating according to rules that are not immediately apparent.

Crossing the Gravity Scar safely requires careful movement. One character may lead the group using [[Skills#Acrobatics|Acrobatics]], [[Skills#Survival|Survival]] or [[Skills#Arcana|Arcana]] at DC 20
- **Critical Success** The party navigates the anomaly safely. Each character gains a +1 circumstance bonus to their next [[Skills#Acrobatics|Acrobatics]] or Reflex save within the next 24 hours as they adapt to unusual movement.
- **Success** The party crosses safely.
- **Failure** The party loses time navigating the distorted terrain. Add 1 hour to travel time.
- **Critical Failure** A sudden gravitational shift throws the party off balance. All physical skill checks for the next 24 hours suffer a -2 penalty due to the players severe disorientation.

#### Features of the Area
**Distorted Gravity** Gravity fluctuates unpredictably throughout the area. Creatures moving through the scar must occasionally compensate for sudden changes in weight and momentum.
**Floating Debris** Objects ranging from pebbles to entire crystal formations drift through the region. These objects create difficult terrain but also provide unusual opportunities for movement and observation.
**Shattered Physics** The area does not follow consistent physical rules.
**Crystal Suspension** Many crystal formations float above the forest floor. Some have remained suspended for years. Others appear to have arrived recently.

> [!tip]+ Treasure
> Characters who spend 10 minutes collecting unusual crystal formations may attempt a DC 20 [[Skills#Crafting|Crafting]] or [[Skills#Arcana|Arcana]] check. On a success they find `dice: 1d4` [[Prismatic Crystal Shards]]; `dice: 2d4` on a critical success.
> 
> - [ ] consumable::[[prismatic-crystal-shard\|Prismatic Crystal Shard]] [ilvl::1] [gp::0.5] 

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Missing Expedition
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> The smell of smoke reaches you long before you see the camp. Not fresh smoke. The lingering scent of a fire kept burning far longer than necessary.
> 
> The clearing ahead is surrounded by hastily constructed barricades of fallen logs and sharpened stakes. Canvas tents sag beneath layers of crystal dust, while bedrolls and equipment lie scattered across the ground. Someone is still here. 
> 
> A gaunt figure steps from behind one of the barricades, crossbow raised with trembling hands. Their clothes bear Springrun's colors. Their face is hollow with exhaustion. For several long seconds they simply stare. Then, in a cracked voice: 
> 
> "...You're real?"

**Description** Several days ago, a Springrun survey expedition ventured into the Deep Wilds to investigate reports of unusual crystal growth located deep within the Prismatic Canopy. They never returned. 

The party eventually discovers the expedition's final campsite. Unlike previous abandoned camps, this one is still occupied. Just not in the way anyone expected.

This encounter is about mystery, horror, and compassion. Combat should only occur if the players create it. The survivors are exhausted, frightened, and psychologically strained. Nobody has a complete understanding of what happened. Each survivor witnessed different events. The players should slowly reconstruct the expedition's fate.

The original expedition consisted of **Captain Elian Voss** (Expedition Leader), **Mara Fen**, Crystalwright, **Tomas Greycliff**, Hunter **2 Springrun Surveyors** and **1 Porter**. Of the original six members two are dead and one is missing.  The survivors are: 
- **Captain Elian Rask** The expedition leader. He is calm, rational and running entirely on determination. He knows something is wrong but refuses to speculate. His only priority is getting everyone home.
- **Mara Fen** Crystalwright apprentice. She has become obsessed with her notes. She constantly sketches resonance patterns. Many of the diagrams appear nonsensical. Some are disturbingly accurate.
- **Tomas Greycliff** Hunter. He barely speaks. He refuses to travel after sunset. Whenever resonance is mentioned, he unconsciously reaches for his weapon.

> [!note]+ Call Out
> ### Investigation Challenge
> 
> After spending at least an hour speaking with the survivors and examining the camp, each character may attempt one of the following skill checks at DC 20: [[Skills#Diplomacy|Diplomacy]], [[Skills#Survival|Survival]], [[Skills#Medicine|Medicine]], [[Skills#Arcana|Arcana]], [[Skills#Occultism|Occultism]] or [[Skills#Society|Society]]. Record the number of successes with a critical success counting as two successes.
> 
> **1 Success** The expedition became lost.
> **3 Successes** The forest behaved unpredictably. Trails changed. Landmarks disappeared.
> **5 Successes** The expedition heard harmonic vibrations every night. Nobody could determine their source.
> **7 Successes** One surveyor became convinced something beneath the forest was calling to them. They disappeared during the night. No tracks. No struggle. The survivors admit something they have told no one else. One evening... The missing surveyor calmly stood. Walked into the forest. Ignored every attempt to stop them. Never looked back.

#### Features of the Area
**Distorted Gravity** Gravity fluctuates unpredictably throughout the area. Creatures moving through the scar must occasionally compensate for sudden changes in weight and momentum.
**Floating Debris** Objects ranging from pebbles to entire crystal formations drift through the region. These objects create difficult terrain but also provide unusual opportunities for movement and observation.
**Shattered Physics** The area does not follow consistent physical rules.
**Crystal Suspension** Many crystal formations float above the forest floor. Some have remained suspended for years. Others appear to have arrived recently.

> [!tip]+ Treasure
> Characters who spend 10 minutes collecting unusual crystal formations may attempt a DC 20 [[Skills#Crafting|Crafting]] or [[Skills#Arcana|Arcana]] check. On a success they find `dice: 1d4` [[Prismatic Crystal Shards]]; `dice: 2d4` on a critical success.
> 
> - [ ] consumable::[[prismatic-crystal-shard\|Prismatic Crystal Shard]] [ilvl::1] [gp::0.5] 

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Seeker Gone Obsessive
- [ ] Low (30 XP) Level 5

> [!note]+ Read Aloud
> The camp is unlike any you've seen. Every nearby tree bears careful markings. Lengths of colored cord stretch between branches. Small crystal shards have been arranged into intricate geometric patterns across the forest floor. Maps cover a flat stone. Hundreds of notes are pinned beneath knives driven into fallen logs. A man kneels among them, sketching furiously. He doesn't acknowledge your approach. Instead he speaks while continuing to write. "...You're standing on yesterday." Only then does he glance upward.
> 
> His eyes are bloodshot. His beard unkempt. His smile strangely genuine. "Oh."
> 
> "Visitors." 
> 
> "Good, I need someone to check my measurements."

**Description** The party discovers a surprisingly organized camp nestled beneath an overhang of crystal-covered stone. Maps, journals, crystal samples, strings tied between trees, and dozens of carved trail markers cover the area.

At first the camp appears abandoned. Then someone speaks. The players have discovered a lost adventurer, **Alden Marr**. Alden has survived alone in the Deep Wilds for nearly three weeks. He is exhausted, dehydrated, sleep deprived, and utterly consumed by his investigation. He has no desire to fight. 

Alden is formerly one of Springrun's most respected Seekers. Three weeks ago he volunteered to investigate the Deep Wilds. He never returned. Not because he couldn't. Because he chose not to. Alden is **not insane**. He is brilliant. Players should initially wonder if he can be trusted. By the end they should realize he's one of the most knowledgeable people they've met. 

The players will find that Alden is endlessly curious, polite, distracted and surprisingly cheerful.

> [!note]+ Call Out
> ### Social Challenge
> 
> Winning Alden's trust is easy. Keeping him focused is difficult. Each character may attempt one of the following skill checks at DC 20: [[Skills#Diplomacy|Diplomacy]], [[Skills#Nature|Nature]], [[Skills#Arcana|Arcana]], [[Skills#Occultism|Occultism]] or [[Skills#Society|Society]]. Record the number of successes with a critical success counting as two successes.
> 
> **1 Success** Alden explains he is mapping resonance.
> **3 Successes** He demonstrates that certain resonance patterns repeat every day.
> **5 Successes** He has discovered stable paths through portions of the Deep Wilds. The party gains a +2 circumstance bonus to one future navigation check.
> **7 Successes** He reveals he has been intentionally following resonance gradients rather than trails. This has allowed him to predict Crystal Blooms and Resonant Thunder. He quietly admits something that finally unsettles him. "The resonance isn't random. It changes, but I haven't yet figured out the trigger."

If the party takes some time to study Alden's notes they discover a treasure trove of information.  Resonance hot spots, migrating crystal growth and stable campsites are all marked.  Any player who succeeds at a DC 20 [[Skills#Arcana|Arcana]] or [[Skills#Survival|Survival]], check after studying the information gains a +2 circumstance bonus to all navigation checks made in the Deep Wilds for the remainder of Act 1. A critical success reveals something remarkable. He has been recording resonance pulses for weeks. They are **becoming stronger**. Very slowly. His notes speculate:
- "It's as if there is something 'leaking' resonance into the environment."

Should the players attempt to convince Alden to leave they'll quickly find out that he does NOT want to. Not because he's compelled to stay, but because he believes he's close to understanding the Deep Wilds.

The party can convince him with a Victory Point challenge requiring 6 VP before 3 failures, using skills such as:
- **Diplomacy** (appeal to duty or concern for Springrun)
- **Society** (remind him of the value of sharing discoveries)
- **Nature** or **Arcana** (demonstrate genuine understanding of his work)
- **Medicine** (show evidence that his physical condition is impairing his judgment)

On success, Alden reluctantly agrees, "...Someone has to make sure this doesn't die with me."

On failure, he politely refuses, promising he'll return "after one more observation."

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Crystalhide Ankylosaurus
- [ ] Severe (120 XP) Level 5

> [!note]+ Read Aloud
> The forest floor is churned into deep trenches where enormous feet have passed. Several young trees have been snapped cleanly in half, their trunks glittering with fresh crystal splinters. 
> 
> A low, vibrating bellow rolls through the woods. Branches explode outward as two massive horned beasts burst from the undergrowth, crystal-encrusted hide shimmering like stained glass in the afternoon sun.

**Description** The Crystalhorn Ankylosaurus are normally peaceful grazers that migrate through the Prismatic Canopy. Recently, the crystal growths along their bony hides have begun resonating with one another, causing entire herds to panic when startled. The party encounters two adults separated from the rest of the herd, frightened and dangerously aggressive.

Unlike predators, these creatures aren't trying to kill the party—they're simply trying to remove a perceived threat.

A DC 20 [[Skills#Nature|Nature]] check reveals that these animals aren't corrupted. They're terrified. 

At the start of the encounter, place the following foes on the map: 
 - 2: [[3-Rules/Bestiaries/Monster Core/A/Ankylosaurus|Ankylosaurus]]

```encounter
name: Random One - Crystalhide Ankylosaurus
party:  The Shattering
creatures:
  - 2: [[Ankylosaurus, Crystalhide Ankylosaurus]]
```

#### Tactics
Both creatures Charge immediately. They attempt to separate the party. If one falls, the other fights with reckless determination before attempting to flee.

#### Features of the Area
**Broken Trees and Fallen Logs** Broken trees provide cover while fallen logs in the area create difficult terrain.

> [!tip]+ Treasure
> If the Ankylosaurus are harvested check the tables below.
> 
> - [[d.#3-Rules/Bestiaries/Monster Core/A/Ankylosaurus Ankylosaurus|Ankylosaurus Harvest]]

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: Hollow Grove Treants
- [ ] Severe (120 XP) Level 5

> [!note]+ Read Aloud
> The trees seem unusually symmetrical. Too symmetrical.
> 
> As you step farther into the grove, enormous roots slowly pull themselves from the earth. Two towering trees straighten into impossible shapes. Ancient eyes open within the bark. 
> 
> It looks as if the forest has decided you do not belong.

**Description** These ancient guardians once watched over a sacred grove long forgotten by civilization. The increasing resonance leaking from the Deep Wilds has made them suspicious of all intruders.

Unlike ordinary arboreals, crystalline veins run through their bark, glowing softly whenever they speak or move.

The players may attempt either [[Skills#Diplomacy|Diplomacy]] or [[Skills#Nature|Nature]] at DC 22 to diffuse the situation. The Wardens will talk about a time when the crystal growths were small. They know the forest is changing. They simply don't understand why.

At the start of the encounter, place the following foes on the map: 
 - 2: [[Arboreal Sapstriker|Arboreal Sapstriker]]

```encounter
name: Random One - Hollow Grove Treants
party:  The Shattering
creatures:
  - 2: [[Arboreal Sapstriker]]
```

#### Tactics
Each Warden controls different sections of the battlefield. They attempt to separate the party with roots and focus attacks on anyone damaging nearby trees.

If reduced below one-third HP, one attempts negotiation rather than continuing the fight.

#### Features of the Area
**Undergrowth** Dense undergrowth makes the entire combat area difficult terrain.
**Flowers** Crystal flowers shed a brilliant light increasing all attempts at [[Skills#Stealth|Stealth]] a Hard DC.

> [!tip]+ Treasure
> If the Arboreal Sapstrikers are slain they may harvested.  Check the table below. If either are spared, the creatures reveal a hidden cache of forgotten explorer supplies.  There the players find the following: [[aeon-stone-azure-briolette|Aeon Stone (Azure Briolette)]], [[healing-potion-moderate|Healing Potion (Moderate)]] x2 and [[crystal-shards-moderate|Crystal Shards (Moderate)]] x2.
> 
> - [[d.#3-Rules/Bestiaries/Monster Core/A/Ankylosaurus Ankylosaurus|Ankylosaurus Harvest]]
> - [ ] permanent::[[aeon-stone-azure-briolette|Aeon Stone (Azure Briolette)]] [ilvl::4] [gp::85] 
> - [ ] consumable::[[healing-potion-moderate|Healing Potion (Moderate)]] [ilvl::6] [gp::50] 
> - [ ] consumable::[[healing-potion-moderate|Healing Potion (Moderate)]] [ilvl::6] [gp::50] 
> - [ ] consumable::[[crystal-shards-moderate|Crystal Shards (Moderate)]] [ilvl::4] [gp::16] 
> - [ ] consumable::[[crystal-shards-moderate|Crystal Shards (Moderate)]] [ilvl::4] [gp::16] 

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Random Encounter: The Glass Garden
- [ ] Severe (120 XP) Level 5

> [!note]+ Read Aloud
> The forest gradually falls silent. Birdsong disappears and even the insects seem unwilling to cross the narrow ravine ahead.
> 
> Crystal formations blanket the stone walls, catching shafts of sunlight and scattering them into hundreds of shifting rainbows. At first glance, dozens of beautiful crystal statues stand throughout the clearing—deer frozen mid-leap, wolves caught in snarls, birds with wings forever outstretched.
> 
> Then you notice... a humanoid figure. Its expression is NOT serene, but terrified.

Give the players an opportunity to examine the area. Careful observation before entering the clearing can reveal the danger. 

A DC 20 [[Skills#Survival|Survival]] check identifies large reptilian tracks entering and leaving the ravine. On a critical success, the player recognizes the tracks as belonging to two separate creatures.

A DC 20 [[Skills#Nature|Nature]] check allows the player to recognize that the statues are not sculptures. They are petrified creatures. On a critical success the player can determine that many of the statues are relatively recent. One even appears to be wearing expedition gear from within the past few months.

After the players have had a chance to reconnoiter the area read the following: 
> [!note]+ Read Aloud
> Just then, a faint scraping sound echoes across the crystal floor. Something large moves just beyond the reflected light.

**Description** Deep within the Prismatic Canopy lies a secluded ravine where crystalline growths blanket the surrounding cliffs like sheets of translucent glass. Local hunters avoid the area, referring to it only as The Glass Garden. They claim the stone statues scattered throughout the ravine are not ancient monuments, but the remains of those who ventured too close.

The truth is far stranger.

A mated pair of Crystal Basilisks has claimed the ravine as its territory. Over years of exposure to the Dungeon's resonance, their petrifying gaze has transformed from dull stone into radiant crystal, leaving behind eerily lifelike sculptures that glitter among the trees.

The creatures rarely leave the ravine, but the crystal formations surrounding their lair have become rich sources of valuable Primal Crystals, attracting prospectors despite the danger.

At the start of the encounter, place the following foes on the map: 
 - 3: [[3-Rules/Bestiaries/Monster Core/B/Basilisk|Basilisk]]

```encounter
name: Random One - The Glass Garden
party:  The Shattering
creatures:
  - 3: [[Basilisk]]
```

#### Tactics
**Crystal Petrification** Rather than dull gray stone, victims slowly become translucent crystal. Veins of shimmering color spread beneath the skin before hardening into brilliant faceted crystal. Recovered victims retain tiny crystalline flecks within their eyes, hair, or skin—a harmless but unsettling reminder of their ordeal.

The basilisks are patient ambush predators. They rarely reveal themselves immediately. During round one, one basilisk remains hidden among crystal formations while the other investigates intruders. It attempts to position enemies where both creatures can threaten them with their gaze.

In round two, the second basilisk emerges, attempting to flank while the first pressures characters already affected by petrification.

If reduced below 30 hp, the wounded basilisk retreats toward a narrow tunnel leading deeper into the ravine. The second attempts to cover its mate's escape rather than fight recklessly.

#### Features of the Area
**Crystal Formations** The large crystal pillars provide cover. A creature adjacent to one gains **Lesser Cover**.
**Razor Crystal Fields** Scattered patches of broken crystal count as difficult terrain. Whenever a creature Strides more than half its Speed through a field, it takes `dice: 1d6` slashing damage from razor-sharp fragments.
**Brilliant Reflections** The crystal walls constantly refract sunlight. A creature that critically fails a Strike against a Crystal Basilisk is [[Dazzled|Dazzled]] until the end of its next turn as reflected light momentarily blinds it.

> [!tip]+ Treasure
> Once the basilisks are defeated or driven away, the party may safely search the ravine. If the basilisks are slain they may harvested.  Check the table below. If the players explore the creatures lair on a DC 18 [[Skills#Perception|Perception]] check they will find hidden beneath a collapsed crystal shelf is the remains of a previous Seeker expedition. The cache contains a waterproof field journal documenting the discovery of the ravine. A partially completed map marking several nearby crystal deposits, granting the party a circumstance bonus on future exploration checks within this region if they take time to study it and valuable to the Springrun Council. Two [[healing-potion-lesser|Healing Potion (Lesser)]], [[armor-potency-1|+1]] [[3-Rules/Character Building/Equipment/R/ready|Ready]] [[chain-shirt]], [[mirror-goggles-lesser|Mirror Goggles (Lesser)]], 32 gp and 85 sp.
> 
> - [[b.#3-Rules/Bestiaries/Monster Core/B/Basilisk Basilisk|Basilisk Harvest]]
> - [ ] permanent::[[armor-potency-1|+1]] [ilvl::5] [gp::160] 
> - [ ] permanent::[[3-Rules/Character Building/Equipment/R/ready|Ready]] [ilvl::6] [gp::200] 
> - [ ] permanent::[[chain-shirt|Chain Shirt]] [ilvl::0] [gp::5] 
> - [ ] permanent::[[mirror-goggles-lesser|Mirror Goggles (Lesser)]] [ilvl::5] [gp::135] 
> - [ ] consumable::[[healing-potion-lesser|Healing Potion (Lesser)]] [ilvl::3] [gp::12] 
> - [ ] consumable::[[healing-potion-lesser|Healing Potion (Lesser)]] [ilvl::3] [gp::12] 

[[ACT I - FIRST CONTACT#Prismatic Canopy Random Encounters|Return to Encounter Table]]

### Prismatic Canopy Set Encounter: The Crystal Giant
- [ ] Low (30 XP) Level 5

![[prismatic-canopy-crystal-giant.png]]

> [!note]+ Read Aloud  
> The forest gradually grows quiet as you continue along the trail. Birds fall silent, insects cease their constant chorus, and even the breeze seems reluctant to disturb the clearing ahead.
> 
> Emerging from the hillside is the upper half of a colossal humanoid figure, its body carved from dark stone laced with shimmering crystal. Towering trees cling to its shoulders, their roots disappearing into cracks within the ancient form. One enormous arm remains buried beneath the earth while the other stretches outward, its open hand resting upon a broad stone shelf.
> 
> The giant's eyes are closed, its face calm and solemn, as though it has slept here for centuries. Soft pulses of colored light drift through the crystal veins beneath its surface before fading once more into stillness.

The Crystal Giant is one of the oldest mysteries in the Prismatic Canopy. No written records describe its construction, and no surviving culture claims responsibility for its existence. Local legends contradict one another so thoroughly that even experienced Seekers treat the Giant as an unsolved curiosity rather than a historical site.

The statue itself appears carved from seamless stone infused with naturally grown crystal unlike any known Aetherium deposit. Despite centuries—perhaps millennia—of exposure to the elements, it shows virtually no signs of erosion.

The surrounding clearing possesses an unusual tranquility. Wildlife enters and leaves without fear, predatory animals rarely hunt within sight of the Giant, and the subtle resonance common throughout the Deep Wilds seems strangely muted here.

Nothing about the Giant appears magical in the traditional sense.

Yet something about it feels...unfinished.

Characters exploring the Giant may attempt the following checks.

|Skill|DC|Information|
|:--|:-:|:--|
|**Arcana**|22|The crystal resembles unrefined Aetherium, but its internal structure is unlike any naturally occurring specimen.|
|**Crafting**|22|The transition between stone and crystal is flawless. Neither carving nor crystal growth could have produced this result using known techniques.|
|**Nature**|20|Plants and wildlife within the clearing are exceptionally healthy. Even aggressive creatures appear calmer while nearby.|
|**Occultism**|24|The Giant possesses no spirit, magical aura, or lingering consciousness. Nevertheless, it evokes the unmistakable feeling that it was never completed.|
|**Religion**|24|No divine iconography or sacred markings are present. If this monument honored anyone, its creator deliberately left no indication of whom.|
|**Perception**|23|Hidden high upon the Giant's shoulder is a smooth stone plaque completely devoid of carvings, symbols, or inscriptions.|

If characters attempt to damage the statue, chips of crystal break away normally but lose their brilliance within minutes, becoming nothing more than ordinary quartz. The Giant does not react to any spell, ritual, or attempt at communication.

#### Features of the Area
- The clearing surrounding the Giant is roughly 250 feet across.
- The Giant's visible torso rises nearly 80 feet above the forest floor.
- Climbing onto the Giant requires successful [[Skills#Athletics|Athletics]] checks appropriate for the weather and climbing equipment.
- The enormous hand forms a natural overlook large enough to comfortably camp upon.
- Fine pulses of colored light travel through the crystal veins every few minutes.
- The stone remains pleasantly warm regardless of weather.
- Rain falling over the surrounding forest often seems noticeably lighter within the clearing.

#### Random Events

If the party spends more than an hour exploring or resting here, roll or choose one.

|d6|Event|
|:-:|---|
|1|A herd of deer quietly enters the clearing, rests near the Giant's hand for several minutes, then departs.|
|2|A pulse of colored light briefly travels through every visible crystal vein before fading.|
|3|The surrounding forest becomes completely silent for nearly a minute before natural sounds gradually return.|
|4|One character has the distinct sensation that the Giant has taken a slow breath. Nothing else occurs.|
|5|Rain falls everywhere beyond the clearing while the Giant remains perfectly dry.|
|6|A tiny crystal bird lands upon the Giant's shoulder, sings a single note unlike any natural birdcall, then flies away.|

#### Rumors

Characters asking around Springrun or Castlemere may hear one or more of the following stories.

|d6|Rumor|
|:-:|---|
|1|The Giant walked into the hills and simply fell asleep.|
|2|Only its upper body is visible; the rest remains buried deep beneath the earth.|
|3|During eclipses, its face slowly turns toward the moon.|
|4|The gods themselves do not know who built it.|
|5|The Giant is waiting for someone to finish carving it.|
|6|Six more Giants exist somewhere in the world, each facing a different direction.|

[[ACT I - FIRST CONTACT#Prismatic Canopy Story Encounters|Return to Story Table]]

### Prismatic Canopy Set Encounter: The Hollow Market
- [ ] Low (30 XP) Level 5

![[prismatic-canopy-hollow-market.png]]

> [!note]+ Read Aloud  
> The trail narrows beneath ancient trees whose trunks have grown together into enormous hollow arches. Beyond them, warm lantern light flickers through the forest despite the absence of any visible road or settlement.
> 
> The clearing beyond is unlike anything you've seen in the Prismatic Canopy.
> 
> Wooden stalls fashioned from living branches curve around a great hollow stump. Colorful banners sway overhead despite the still air, while dozens of travelers quietly browse the market's wares.
> 
> Merchants of every ancestry smile as you approach. Some wear elaborate robes, others simple traveling clothes, but all seem strangely...comfortable.
> 
> Somewhere nearby, a violin begins to play.

The Hollow Market appears only occasionally within the Prismatic Canopy. No one has successfully mapped its location, and those who leave often cannot find it again.

The market is peaceful, bustling, and surprisingly ordinary. Travelers barter for food, curiosities, maps, stories, handcrafted goods, and unusual trinkets. Prices are generally fair, although merchants often seem more interested in unusual trades than coin.

No merchant openly discusses where the market came from or where it goes. Visitors who ask receive only amused smiles.

The market is protected by an unspoken code of hospitality. Violence is almost unheard of. Everyone seems determined to keep it that way. Should violence break out every merchant immediately ceases what they are doing. The music stops and every visitor silently watches the aggressor. Within moments, the offending creature finds itself peacefully escorted outside the market by individuals who are surprisingly difficult to resist. No weapons are drawn unless absolutely necessary. Anyone removed from the market cannot locate it again for at least one year.

#### Investigation

|Skill|DC|Information|
|:--|:-:|:--|
|**Diplomacy**|20|Merchants are unusually friendly and willing to gossip after a successful conversation.|
|**Society**|22|No recognizable guild symbols or national affiliations appear anywhere in the market.|
|**Perception**|22|Many visitors arrive from paths that disappear moments later.|
|**Arcana**|24|The entire clearing exists within an area of remarkably stable ambient mana unlike the surrounding Deep Wilds.|
|**Occultism**|24|The market feels slightly disconnected from the surrounding forest, almost as though it exists in a space adjacent to reality.|
|**Nature**|20|None of the nearby wildlife enters the market itself, yet none appear frightened by it either.|

#### Features of the Area
- Roughly thirty merchant stalls surround the clearing.
- Warm lanterns provide bright light throughout the market.
- Music is always audible, though the musicians are never in the same place twice.
- Fresh food is always available regardless of season.
- Comfortable benches, campfires, and communal tables encourage conversation.
- No refuse or litter can be found anywhere.

#### Random Events

Roll once every hour spent in the market.

|d6|Event|
|:-:|---|
|1|A storyteller gathers a crowd to recount an obviously exaggerated tale about an adventurer.|
|2|A merchant insists a character sample an unfamiliar but delicious fruit at no charge.|
|3|A traveling bard begins playing a tune every visitor somehow recognizes.|
|4|A child asks a character to help retrieve a runaway paper lantern.|
|5|A merchant quietly offers to purchase an unusual item the party recently acquired.|
|6|For just a moment, every lantern extinguishes simultaneously before relighting a heartbeat later. No one else seems concerned.|

#### Rumors

Visitors may learn one rumor after spending at least thirty minutes talking with merchants.

|d6|Rumor|
|:-:|---|
|1|The Hollow Market has existed longer than any kingdom.|
|2|You cannot steal from the market without losing something far more valuable.|
|3|The market chooses who may find it.|
|4|Once each century, the market appears beneath a different sky.|
|5|Some merchants have never left the market.|
|6|Every bargain made here is remembered forever.|

[[ACT I - FIRST CONTACT#Prismatic Canopy Story Encounters|Return to Story Table]]

### Deep Wilds Set Encounter: The Heartroot
- [ ] Low (30 XP) Level 5

![[deep-wilds-heartroot.png]]

> [!note]+ Read Aloud  
> The air grows warmer with every step, carrying the scent of damp earth and flowering vines. The forest around you becomes impossibly dense, ancient trunks twisting together into living walls draped with curtains of glowing moss. At the center of a vast natural chamber stands an enormous tree unlike any you've ever seen.
> 
> Its trunk is wider than a castle keep, disappearing high into the emerald canopy before its branches vanish from sight. Massive roots spread outward in every direction, some arching overhead like bridges while others plunge deep beneath the forest floor. Beneath the bark, veins of brilliant crystal pulse with soft crimson light.
> 
> Slowly. Steadily. Like the beat of a colossal heart.

The Heartroot is among the oldest living organisms known within the Deep Wilds. Whether it is a single tree, a colony of interconnected growths, or something entirely unique remains unknown.

Unlike the unstable crystal growths found elsewhere, the Heartroot's crystalline veins exhibit a remarkably consistent rhythm. Creatures lingering nearby often find themselves unconsciously matching their breathing to the slow pulses.

The area surrounding the Heartroot is strikingly peaceful. Even natural predators avoid hunting within sight of the tree, while wounded animals occasionally gather beneath its roots to rest.

No evidence suggests the tree is sentient. Yet many who visit leave convinced they were being watched.

There are no hostile creatures unless the party attacks the Heartroot.

**If characters deliberately attempt to damage the tree** the crystal pulses immediately cease and every sound within the clearing falls silent. Any nearby wildlife flees. After several moments, the pulses slowly resume as though nothing had happened. 

The tree never retaliates directly. This moment should leave the party wondering whether they made a terrible mistake.

#### Investigation

|Skill|DC|Information|
|:--|:-:|:--|
|**Nature**|22|The tree is vastly older than any known species in the region. Its biology shares characteristics with several unrelated trees but matches none completely.|
|**Arcana**|24|The crystal veins channel ambient magical energy with extraordinary efficiency, yet no spell or ritual appears responsible.|
|**Occultism**|24|The rhythmic pulses resemble resonance found near Dungeons but are perfectly stable and exceptionally slow.|
|**Medicine**|20|Nearby creatures exhibit reduced stress and accelerated natural healing while resting beneath the Heartroot.|
|**Perception**|22|Small crystal seeds occasionally emerge from cracks in the bark before dissolving into harmless motes of light.|
|**Religion**|24|Although many might mistake this place for sacred ground, no divine presence can be detected.|

#### Features of the Area
- The clearing measures nearly 300 feet across.
- The trunk exceeds 80 feet in diameter.
- Enormous roots create elevated walkways and natural alcoves.
- Soft crimson light provides dim illumination throughout the clearing.
- The rhythmic pulses can be felt through the ground as subtle vibrations.
- Climbing the tree is possible, but its upper canopy disappears hundreds of feet overhead.

#### Random Events

Roll once for every hour the party remains in the clearing.

|d6|Event|
|:-:|---|
|1|Hundreds of tiny glowing insects emerge from beneath the roots before disappearing into the canopy.|
|2|A family of woodland creatures quietly curls up beneath a nearby root to sleep.|
|3|The crystal veins brighten for three slow pulses before returning to normal.|
|4|Every flower in the clearing simultaneously opens, then closes several moments later.|
|5|A gentle breeze passes through despite the complete absence of wind elsewhere.|
|6|For a single heartbeat, every character feels as though something immense has acknowledged their presence. No further sign follows.|

> [!tip]+ Treasure
> The tree produces no harvestable materials, and any bark, leaves, or crystal removed from it rapidly decay into ordinary organic matter.Characters spending at least one uninterrupted hour resting beneath the Heartroot gain a profound sense of calm.
> 
> **Heartroot's Blessing**
> Once before their next daily preparations, each character may reroll a failed Recovery Check or Treat Wounds check affecting them, taking the better result. This benefit can only be gained once per week. 

[[ACT I - FIRST CONTACT#Prismatic Canopy Story Encounters|Return to Story Table]]

### Deep Wilds Set Encounter: The Crystal Graveyard
- [ ] Low (30 XP) Level 5

![[deep-wilds-crystal-graveyard.png]]

> [!note]+ Read Aloud  
> The forest begins to thin, its towering trees giving way to a broad clearing carpeted in pale moss and fractured crystal. The vibrant colors of the Prismatic Canopy seem strangely muted here, as though even the light has grown quiet.
> 
> Then you see them. Bones. Hundreds of them.
> 
> Some lie half-buried beneath roots older than memory. Others rise from the earth like weathered monuments, their surfaces transformed into shimmering crystal that catches the filtered light in muted rainbows.
> 
> The skeletons belong to creatures unlike any you've ever seen. Some possess impossibly long necks. Others bear six wings, dozens of ribs, or skulls with no recognizable eyes.
> 
> No scavengers disturb the remains. The entire clearing rests in absolute silence.

The Crystal Graveyard spans several acres within the Deep Wilds. It contains the fossilized remains of countless enormous creatures whose bones have gradually transformed into dense crystalline structures over untold ages. No two skeletons appear to belong to the same species. Many are unlike anything described in recorded history.

Unlike ordinary crystal formations, the crystalline bones exhibit almost no resonance. Instead, they seem to absorb sound, contributing to the area's unsettling stillness. Despite the abundance of remains, no signs of violence are evident. Most skeletons appear carefully arranged by time and nature rather than catastrophe.

Characters who disturb the skeletons discover that the crystal bones are remarkably durable. Breaking even a small fragment produces a sharp, bell-like tone that echoes across the clearing far longer than expected. Nothing immediately responds. Whether something heard the sound is left unanswered.

#### Investigation

|Skill|DC|Information|
|:--|:-:|:--|
|**Nature**|22|None of the skeletons resemble any known creature native to Aetheria.|
|**Arcana**|24|The crystalization seems to have occurred naturally over an immense span of time rather than through magic.|
|**Occultism**|24|There are no lingering spirits or supernatural hauntings despite the countless dead.|
|**Society**|22|No carvings, tools, or burial markers suggest intelligent intervention.|
|**Crafting**|22|The crystal replacing the bones is unlike unrefined Aetherium and has become part of the fossil itself.|
|**Perception**|23|Several skeletons seem positioned as though facing the same distant point deep within the forest.|

#### Features of the Area
- The clearing stretches nearly 500 feet across.
- Crystalized skeletons range from the size of wolves to creatures over 100 feet long.
- Sound is noticeably muffled throughout the area.
- The ground is stable but uneven due to buried bones and exposed crystal.
- Pale flowers grow only in the spaces between skeletons.
- Sunlight filtering through the canopy scatters into soft rainbows across the crystal remains.

#### Random Events

Roll once for every hour spent exploring.

|d6|Event|
|:-:|---|
|1|A breeze passes through the clearing, producing soft musical tones from tiny crystal fractures.|
|2|A ray of sunlight causes one enormous ribcage to shimmer with every color of the canopy.|
|3|A family of crystal butterflies settles upon one skull before silently taking flight together.|
|4|Every sound briefly seems distant, as though heard through deep water.|
|5|One character notices a tiny flower blooming from the eye socket of an immense skull.|
|6|For just a moment, everyone has the unmistakable feeling they are standing among honored dead rather than abandoned remains.|

## Chapter 3 — The Discovery

![[deep-wilds-dungeon.png]]

> [!note]+ Read Aloud  
> Long before you see it, the forest begins to change.
> 
> The constant chorus of the Deep Wilds fades until only your own breathing remains. Crystal formations growing among the roots become larger, their facets catching the light in subtle flashes of emerald and violet. Even the trees seem to bend away from a single point ahead, as though respecting an ancient boundary.
> 
> At the center of a broad clearing stands an immense stone archway. Unlike the weathered ruins scattered throughout the wilderness, this monument appears untouched by time. Massive roots weave through its base without disturbing the carefully worked stone, while living vines and crystal growths climb its pillars in intricate patterns that seem almost intentional.
> 
> Set within the arch rests an enormous pair of stone doors, closed tight. Their surface is carved with flowing designs of twisting vines, blooming flowers, crystalline branches, and unfamiliar runes that shimmer faintly beneath the moss.
> 
> Though motionless...
> 
> ...the archway somehow feels attentive.
> 
> As your eyes linger upon the runes, several brighten ever so slightly, as if acknowledging your presence.

#### Description
The archway is not the remnant of a ruined building. It is the Dungeon's entrance.

Each Dungeon possesses a unique archway whose design reflects the nature of the pocket dimension beyond. Some resemble cathedral doors, others ancient trees, polished crystal, volcanic stone, or architecture unlike any civilization has ever built. No two are identical, but all share several common characteristics recognized by experienced Dungeon Seekers.

The archway always exists physically within the world. It possesses substantial doors that can be opened and closed normally, though they are often massive and extraordinarily well-crafted. The stone bears no signs of erosion despite centuries of exposure, and even vegetation growing across its surface seems to complement rather than obscure its design.

Only when the doors are opened does the true entrance reveal itself. Instead of whatever should lie beyond, the opening is filled with a perfectly smooth curtain of luminous energy. This portal does not illuminate the surrounding clearing, nor does it reveal anything of the Dungeon itself. Its surface resembles still liquid glass, utterly opaque.

The color of the portal immediately communicates the Dungeon's basic tier to those familiar with Dungeon lore:
- **Iron** — Deep crimson
- **Bronze** — Burnished amber
- **Silver** — Brilliant argent
- **Gold** — Radiant gold

Beyond the portal lies the Dungeon's pocket dimension—a space entirely disconnected from the surrounding world. 

The archway itself can be studied without opening the Dungeon. The runes carved throughout its frame communicate information regarding the Dungeon's attunement, current stability, and other characteristics to those capable of interpreting them. Throughout the investigation, the party should gradually realize something unsettling. The archway does not merely display information. It appears to notice those attempting to understand it.

#### Investigation
This encounter uses the **Reading the Archway** Victory Point challenge. Characters may attempt [[Skills#Arcana|Arcana]], [[Skills#Occultism|Occultism]], [[Skills#Religion|Religion]], or  [[Skills#Nature|Nature]] checks as described in your Dungeon Reading subsystem. Award information according to the Victory Point thresholds.

> [!tip]+ Flavor
> #### Reading the Archway (Victory Point Challenge)
> **2 VP — Basic Understanding** The runes are not decorative. They are a written language designed to communicate information about the Dungeon itself. The archway can be interpreted with sufficient knowledge.
> **4 VP — Deeper Understanding** With additional insight, the party deciphers much more of the archway's purpose. They successfully determine:
> - **Attunement:** Growth, Crystal, and Resonance.
> - **Dungeon Tier:** Iron.
> - **Current Stability:** Stable.
> The party also realizes something deeply unsettling. The archway does not simply display information. It appears to respond—however subtly—to careful observation. As individual characters study the runes, tiny portions brighten or shift almost imperceptibly beneath their gaze. Whether this is merely coincidence or something more cannot be determined.
> **6 VP — Hidden Insight** Only an exceptional interpretation reveals the final secret. The archway is not merely reacting to observation. It is **evaluating** those who stand before it. Exactly **what** it measures cannot be determined. Describe it like this: As you finish tracing the final sequence of runes, a strange certainty settles over you.  For just the briefest moment... you have the overwhelming feeling that the archway now knows something about **you**. The sensation vanishes almost immediately.
> 
> **Three Failures** Characters misunderstand portions of the runes. Examples include:
> - Assuming the Dungeon was built by an ancient civilization.
> - Believing the runes are merely magical locks.
> - Mistaking Stability for danger level.
> - Concluding the portal is an illusion rather than a genuine extradimensional space.
> - The portal is a permanent magical effect maintained by powerful spellcasters.
> 
> These misconceptions should be naturally corrected through later exploration.

#### Features of the Area
- The clearing measures roughly 150 feet across.
- No vegetation grows within 20 feet of the archway.
- Crystal formations naturally point toward the entrance.
- Sound is noticeably muted.
- The archway radiates no overwhelming magical aura despite its impossible nature.

### Crossing the Threshold

> [!note]+ Read Aloud  
> The massive stone doors yield with surprising ease. They open without groaning hinges or grinding stone.
> 
> Instead... they move almost silently.
> 
> Beyond the doorway is no corridor. No chamber. No glimpse of what lies within.
> 
> The opening is filled completely by a perfectly smooth curtain of crimson light, its surface as still as polished glass. It casts no shadows, gives off no warmth, and reveals nothing beyond itself.
> 
> For a long moment... nothing happens. The forest behind you remains quiet. The archway waits.
> 
> The instant the first of you reaches forward and crosses the threshold... the world you know disappears.
> 
> There is no sensation of falling. No flash of light. No rush of magic. For the briefest heartbeat there seems to be nothing at all.
> 
> Then, you feel it. Not on your skin or in your mind.  Somewhere deeper. Like the unmistakable sensation of another living creature turning its attention toward you.
> 
> Not hostile but also, not welcoming. Simply...
> 
> **aware.**
> 
> Ahead, beneath an unfamiliar sky...
> 
> somewhere impossibly distant...
> 
> something stirs.
> 
> You cannot hear words or see a face. Yet every instinct tells you the same impossible truth.
> 
> **Something knows you have arrived.**
> 
> ...
> 
> **Welcome, Seekers.**