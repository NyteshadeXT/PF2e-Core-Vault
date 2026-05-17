---
tags:
  - "#Adventure"
art: zz-Attachments/Assets/PlaceholderImage.png
quicknote: ""
whichparty: "[[The Shattering Dashboard]]"
adventure_status: Not Started
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
> [!kirk|info] Prompt (Remove me)
> Provide an overarching overview of this adventure. What is the central theme or conflict driving the narrative? Outline the potential quests or objectives that the players may embark on. Consider the variety of challenges, encounters, or tasks they might face. Additionally, describe how the adventure begins. What inciting incident or call to action propels the players into the unfolding storyline? Use this section to set the stage, introduce key elements, and establish the initial motivations that will guide the players throughout the adventure.

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
- basic provisions sufficient for several days of wilderness travel, including [[Rations|preserved rations]] , [[Waterskin|waterskins]], [[Lantern (Hooded)|hooded lanterns]] fitted with low-grade crystal batteries, [[rope]] and [[climbing-kit|climbing kits]];
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




## Optional Rule: The Forest Watches




A1-T26


---

# Act 1 — The Hollow Beneath the Canopy

# Act Structure Overview

# Chapter 3 — The Discovery
The party eventually finds the Dungeon archway. This should be a major moment. Not merely:
> “You find a dungeon entrance.”

Instead:
- the environment changes around it
- sound becomes distorted
- the archway feels _aware_
- runes shift subtly
- crystal growth bends toward it
- wildlife avoids the area completely

Most importantly: **The Dungeon Does Not Match Expectations**

This is critical. The setting likely assumes:
- ruins are static
- dungeons are old structures
- magical sites behave predictably

Instead the PCs discover:
- the archway reacts to observers
- the structure beyond does not align spatially
- rooms rearrange subtly
- creatures appear ecosystemically connected
- the Dungeon seems partially alive
- the archway can be _read_

This is your opportunity to introduce:
- Victory Point archway interpretation
- attunement concepts
- Dungeon “watching” behavior
- resonance
- instability
- regeneration concepts

The players should leave this scene understanding they have discovered something fundamentally new.

---

# Chapter 4 — First Incursion
The first delve should:
- be relatively small
- avoid explaining everything
- establish rules through experience

Goals:
- survive
- retrieve proof
- map part of the interior
- escape alive

The incursion should reveal:
- the Essence system
- Dungeon resources
- strange materials
- impossible ecology
- creatures unlike surface fauna
- evidence that the Dungeon repairs or resets

This is where the players begin realizing the Dungeon is a renewable source of power, danger, and wealth. That realization changes the world.

---

# End of Act 1 — News Spreads
This is your true climax. The Dungeon’s existence cannot remain secret. News reaches:
- Springrun
- Castlemere
- traders
- prospectors
- scholars
- opportunists

And suddenly the frontier changes overnight.

## Springrun’s Response
Springrun sees:
- opportunity
- growth
- discovery
- trade
- advancement

The town begins transforming into:
- an expedition hub
- a prospecting center
- a Dungeon economy

## Castlemere’s Response
Castlemere sees:
- threat
- instability
- heresy
- potential military danger

They likely advocate:
- containment
- regulation
- control
- religious scrutiny
- armed oversight

---

# Strong Ending Scene
A great Act 1 closing image might be:
- prospectors arriving
- caravans forming
- mercenaries entering the region
- scholars arguing over theories
- soldiers marching from Castlemere
- crystals beginning to spread further
- the archway subtly changing

And perhaps, for the first time…

the Dungeon opens wider.

---

# What Act 1 Accomplishes
By the end of the act, the players should understand:

## Personally
- they are among the first true delvers
- they survived where others failed
- they discovered something world-changing

## Mechanically
- how Dungeon exploration differs from normal adventuring
- how archways function
- how resonance/instability works
- that Dungeons are dynamic

## Politically
- the frontier is about to transform
- Springrun and Castlemere will clash ideologically
- outside powers will soon arrive

## Cosmologically
- the world does not understand Dungeons
- these places may predate modern civilization
- the Shattering may have awakened something ancient rather than created it




The damage reduction and AC penalty (halving the AC bonus rounded down) create a powerful narrative beat: **The world the PCs know is obsolete inside the Hollow.**
- **The Level 0 Solution:** Since players will need to add the "Dungeon" trait to their items, you can utilize the **Creature Cores**. Alchemists and mages already use these to grind into powders or create magical elixirs.
- **The "Coating" Mechanic:** In Act I, the players might find that "painting" their blades with an emulsion of **Creature Core dust** and **Dungeon Essence** temporarily bypasses the damage reduction. This forces a "resource management" loop early in the campaign.
- **Evolution:** By Act II, they should be finding gear with "Dungeon Traits" or using **Awakening Stones** to permanently bond their signature items to the Aetheria Fracta reality.

👉 End of Act:  **Both cities stake interest**