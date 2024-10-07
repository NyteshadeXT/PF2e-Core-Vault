---
noteicon: Settlement
tags:
  - "#Location"
  - "#Settlement"
art: zz_Attachments/Ardentia.png
pronounced: Are-dent-sha
settlementtype: Metropolis
terrain:
  - Floating Island
defence: Formidable
aliases:
  - The Crystal City
location:
  - "[[Aetherial Highlands]]"
governmenttype:
  - Magocracy
dominion:
  - "[[Arcane Conclave]]"
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
>> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Art
>> #### Art
>>  |
>> ---|---|
> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
>> **Pronounced** |  `INPUT[textArea:pronounced]`
>> **Aliases** | `INPUT[list:aliases]` |
>> **Type** | `INPUT[SettlementType][:settlementtype]` |
>> **Terrain** | `INPUT[Terrain][inlineListSuggester:terrain]` |
>> **Defences** | `INPUT[Defence][:defence]`
>> **Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |
>
>> [!metadata|metadataoption]- Demographics
>> #### Demographics
>>  |
>> ---|---|
>> **Dominion** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):dominion]` |
>> **Rulers** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):ruler]` |
>> **Leaders** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):leader]` |
> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Government Type** | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` |
>> **Population** |  `INPUT[textArea:population]`
>
>> [!metadata|metadataoption]- Commerce
>> #### Commerce
>>  |
>> ---|---|
>> **Imports** | `INPUT[Goods][inlineListSuggester:import]` |
>> **Exports** | `INPUT[Goods][inlineListSuggester:export]` |

> [!infobox]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Type** | `VIEW[{settlementtype}][text]` |
> **Terrain** | `VIEW[{terrain}][text]` |
> **Defences** | `VIEW[{defence}]` |
> **Location** | `VIEW[{location}][link]` |
> ###### Demographics
>  |
> ---|---|
> **Rulers** | `VIEW[{ruler}][link]` |
> **Leaders** | `VIEW[{leader}][link]` |
> **Dominion** | `VIEW[{dominion}][link]` |
> **Government Type** | `VIEW[{governmenttype}][text]` |
> **Population** | `VIEW[{population}][text]` |
> ###### Commerce
>  |
> ---|---|
> **Imports** | `VIEW[{import}][text]` |
> **Exports** | `VIEW[{export}][text]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>
> [!recite]- Introduction
> A script for the GM to read when the party arrive to this location for the first time.

> [!metadata|map]- Map
> ```leaflet
> id: Ardentia_City
> image: [[Ardentia City Map.png]]
> lock: true
> recenter: true
> noScrollZoom: false
> ### Use this [Copy of Obsidian Leaflet Bounds Calculator - Google Sheets](https://docs.google.com/spreadsheets/d/1ogWXlChwcNa5qnl0P1M-DDDKhLatiazNU2XVCMOwzyo/edit?gid=0#gid=0) to work out your map's bounds.
> bounds: [[0, 0], [7.45, 7.45]]
> height: 1000px
> width: 88%
> lat: 3.72
> long: 3.72
> minZoom: 7
> maxZoom: 18
> defaultZoom: 7
> zoomDelta: 1
> unit: feet
> scale: 500
> darkMode: false
> ```
> [[Ardentia City Map.png|Show]]

> [!metadata|district]- Districts
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(districttype, ", ") AS Type
> FROM "Campaign"
> WHERE econtains(location, this.file.link) AND contains(tags, "District")
> SORT districttype ASC, file.name ASC

> [!metadata|location]- Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(location), ", ") AS "Location", join(link(organization), ", ") AS "Organization(s)"
> FROM "Campaign"
> WHERE econtains(location, this.file.link) AND contains(tags, "POI")
> SORT tags DESC, poitype ASC, file.name ASC

> [!metadata|organizations]- Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "Campaign"
> WHERE econtains(location, this.file.link) AND contains(tags, "Organization")
> SORT tags DESC, file.name ASC

> [!metadata|characters]- Characters
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(occupation, ", ") AS "Occupations", join(link(organization), ", ") AS "Organizations"
> FROM "Campaign"
> WHERE econtains(location, this.file.link) AND contains(tags, "Character") AND !contains(condition, "Dead")
> SORT tags DESC, file.name ASC

> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "Campaign"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC

## Overview
Ardentia City is strategically situated around a massive Dungeon that formed at the heart of the city following the meteor strike. This city-state, found in the [[Aetherial Highlands]], occupies a important position within the fractured world, making it a crucial hub for trade, diplomacy, and magical research.

The architecture of Ardentia City reflects its magical prowess and technological advancements. Towering spires and grand citadels dominate the skyline, adorned with intricate carvings, arcane symbols, and shimmering enchantments. Crystalline building shimmer in the sunlight.  The streets are bustling with activity, lined with market stalls, alchemical workshops, and libraries filled with ancient tomes and scrolls. At the center of the [[Seeker's Quarter]] of the city stands the imposing edifice of the [[Arcane Exchange Consortium Headquarters]] where the Dungeon Seed can be found, its pulsating energies visible even from afar. This dungeon, known as the [[Aetherial Observatory]], has become a focal point for adventurers and scholars alike.  The [[Isle of Learning]] supports [[Terramore Academy]] and the [[Aetherial Cathedral]], home to the worshipers of [[Arcarios]].  The island simply know to locals as [[Haven]] is where most average citizens can be found.  Beings of all ethnicities and backgrounds can be found here.  [[Haven]] is dominated by the [[Bloodstone Arena]] in it's southwest corner where battles are fought to become the next Bloodstone Champion.

The Shattered Ward, a small section of the city walled off from Haven dates back to Eldric's Crossroads and remains a dangerous place.  Above the Shattered Ward floats the Gilded Cage, the cities prison.  High Perch serves as the home of Ardentia Cities rulers and is surrounded by the Merchant's Circle.  Home to the many merchants, artisans and upper-class residents within the city, it is the largest and most vibrant district of Ardentia City.

The [[Aetherial Observatory]] is a marvel of arcane architecture and a challenge for even the most seasoned adventurers. Contained within this dungeon are floating islands connected by crystalline bridges. It is filled with puzzles and challenges related to the manipulation of gravitational forces. The core is located at the highest point, requiring adventurers to solve puzzles and traverse the floating islands to reach it. The crystalline bridges are not just pathways but are imbued with arcane energy that requires precise timing and magical acumen to navigate.

Ardentia City is governed by [[Arcane Conclave]], a council of powerful mages and scholars who wield authority over magical affairs and political matters. [[Arcane Conclave|The Conclave]] comprises representatives from various magical disciplines, whose decisions shape the destiny of Ardentia City and its surrounding territories.  While [[Arcane Conclave|the Conclave]] manages the city’s day-to-day operations and overarching policies, [[Terramore Academy]] holds an equal amount of authority in magical affairs and politics. This renowned institution is not only a center of learning but also a formidable power in its own right. The Academy’s influence is felt throughout the city, as its scholars and students often collaborate with [[Arcane Conclave|the Conclave]], ensuring that Ardentia remains at the forefront of magical innovation and governance.

The primary focus of Ardentia City is harnessing and utilizing the Dungeon Seed's magical energies. [[Arcane Conclave|The Conclave]] and the Academy oversee a multitude of magical endeavors, including research into new spells, enchantments, and artifacts, as well as the study of otherworldly phenomena and planar travel. The city-state serves as a center of learning and innovation, attracting scholars and seekers of arcane knowledge from far and wide.

Ardentia City's strategic location and magical resources make it a thriving center of trade and commerce. Merchants and traders flock to the city-state to exchange exotic goods, magical artifacts, and rare materials harvested from the surrounding territories. The markets of Ardentia City are a bustling hive of activity, where seekers and entrepreneurs seek fortune and fame amidst the wonders of the fractured world.

Ardentia City's reputation as a center of magical mastery and opportunity attracts seekers seeking fame, fortune, and glory. Brave souls delve into the depths of the [[Aetherial Observatory]] in search of ancient artifacts, hidden knowledge, and untold treasures. The observatory's unique challenges and its core's elusive location make it a prime destination for adventurers. Meanwhile, scholars and academics come to Ardentia City to study at its prestigious academies, libraries, and magical colleges, eager to unlock the secrets of the fractured world..




### 1. **The Shattered Ward**
- **Description:** The **Shattered Ward** is a small, ruined section of Ardentia City that has been walled off from the rest of **Haven**. This area suffered the most damage during the meteor strike and has never been fully restored. Darkened, crumbling buildings, broken streets, and residual pockets of unstable arcane energy make it a dangerous place. Rumors abound of strange magical phenomena, haunting whispers, and mysterious figures lurking in the shadows.
- **Notable Features:** Above the Shattered Ward floats **The Gilded Cage**, the city's prison—a small, rocky island kept suspended in the air by massive chains. It is said that the most dangerous criminals and political dissidents are kept here, watched over by arcane sentinels and powerful wards.

### 2. **The Merchant’s Circle**
- **Description:** **The Merchant’s Circle** is one of the largest and most vibrant districts of Ardentia City. This area houses the many merchants, artisans, and upper-class residents who thrive on trade, craftsmanship, and commerce. The district features a series of interconnected marketplaces, artisan guildhalls, luxurious townhouses, and opulent manors. Here, exotic goods from across the fractured world can be found, and every street hums with the sound of negotiation and trade.
- **Notable Features:** The district is known for its **Bazaar of Wonders**, a sprawling market where rare magical items, precious materials, and enchanted curiosities are sold. It's also home to the **Hall of Artisans**, a prestigious guild that oversees craftsmanship and trade within the city.

### 3. **The High Perch**
- **Description:** **The High Perch** is the most exclusive and heavily guarded district, situated on an elevated island within the heart of Ardentia City. This is where the rulers of the city—the **Arcane Conclave**—reside, along with their closest advisors and the most influential scholars of **Terramore Academy**. The High Perch is characterized by its majestic spires, private villas, and serene gardens, where politics and arcane mastery intertwine. The entire district is protected by powerful wards and shielded from the rest of the city by high walls and magical barriers.
- **Notable Features:** At the center of the High Perch stands the **Citadel of the Conclave**, an imposing fortress of crystalline architecture where the Conclave convenes to govern the city. Nearby, the **Ethereal Gardens** offer a sanctuary of beauty and magic, filled with rare plants and magical creatures.




## History
### Ardentia City: From Meteor Strike to Modern Metropolis

#### The Meteor Strike and the Birth of Ardentia City
A little over a decade ago, a massive meteor struck the world, creating a cataclysmic event that reshaped the entire region. At the time, there was a small, unremarkable settlement on the site—a minor trading outpost known as Eldric's Crossroads, named after the merchant who had founded it at the intersection of several trade routes. The outpost had little importance beyond its role as a waypoint for travelers and caravans traversing the Highlands.

The meteor's impact devastated Eldric's Crossroads, but it also unearthed a mystical source of immense power: a Dungeon Seed. The Seed, now exposed at the heart of the impact site, began radiating arcane energies, distorting reality around it and gradually forming what is now known as the [[Aetherial Observatory]]—a dungeon filled with floating islands, crystalline bridges, and powerful magical anomalies.

#### The Founding of Ardentia City
The discovery of the Dungeon Seed sparked immediate interest from scholars, mages, and adventurers across the fractured world. At first, a chaotic influx of seekers flooded the ruins of Eldric's Crossroads, hoping to explore the newly formed dungeon and uncover its secrets. However, the unorganized nature of this influx led to clashes, both with the dungeon's challenges and among the rival groups themselves.

Recognizing the potential of the [[Aetherial Observatory]] and the surrounding area, a small cadre of powerful mages and scholars took the initiative to bring order to the chaos. This group, calling themselves the [[Arcane Conclave]], established a temporary council to govern the new settlement. They began by erecting protective wards around the most dangerous areas of the dungeon and setting up makeshift lodgings for the scholars, adventurers, and merchants arriving daily. They also instituted a set of laws and regulations to govern access to the [[Aetherial Observatory]] and manage disputes among the various factions.

With the leadership of the [[Arcane Conclave]], the new city—dubbed Ardentia City in honor of the meteor's fiery descent—began to take shape. The initial efforts of [[Arcane Conclave|the Conclave]] to impose order attracted further waves of settlers, merchants, and craftsmen, all eager to take part in what was quickly becoming a thriving hub of activity.

#### The Rise of the Arcane Conclave
To further assert their influence, the [[Arcane Conclave]] partnered with the [[Arcane Exchange Consortium]], a fledgling trade consortium for the trade of magical goods, rare materials, and artifacts discovered within the [[Aetherial Observatory]].  They also brokered deals with merchants and other city-states, encouraging trade and investment in the burgeoning city. Over time, [[Arcane Conclave|the Conclave]]'s control over both magical and economic affairs made them the undisputed rulers of Ardentia City.

[[Arcane Conclave|The Conclave]] solidified its power by leveraging its control over access to the [[Aetherial Observatory]]. As the only group capable of managing and mitigating the dangerous magical energies emanating from the Seed, the Conclave quickly gained legitimacy and authority in the eyes of the growing population. They formalized their role as the governing body of Ardentia City, establishing a council composed of representatives from various magical disciplines, each of whom contributed unique expertise in arcane studies, magical engineering, or diplomacy.

#### The Founding of Terramore Academy
In the second year after the meteor strike, [[Arcane Conclave|the Conclave]] initiated the construction of [[Terramore Academy]] on what would become known as the [[Isle of Learning]]. The academy was envisioned as a center for magical education and research, where the most promising students and scholars from across the world could come to study and experiment. This institution quickly gained a reputation for excellence, attracting talent and resources from far and wide.

[[Terramore Academy]] also played a key political role; it became a crucial ally of [[Arcane Conclave|the Conclave]] by providing a steady supply of educated and loyal individuals who would support the city's governance. The academy's faculty and students often collaborated with [[Arcane Conclave|the Conclave]] on major projects and shared in the benefits of the magical discoveries emerging from the [[Aetherial Observatory]].

#### Significant Events in Ardentia’s Development
1. **The First Expeditionary Conflict (Year 3 Post-Meteor):** As the Dungeon Seed's energies continued to manifest strange and dangerous phenomena, various groups within the city sought to explore its depths for profit or fame. A conflict broke out between rival factions of adventurers, leading to a battle within the [[Aetherial Observatory]]. [[Arcane Conclave|The Conclave]] intervened, establishing an agreement with the [[Dungeon Seekers Guild]], which regulated dungeon exploration and awarded licenses to those deemed capable of handling its dangers. This event cemented [[Arcane Conclave|the Conclave]]'s role as the protector of order and stability within Ardentia City and it's enviorns.
2. **The Bloodstone Trials (Year 5 Post-Meteor):** Seeking to unify the diverse population and offer a spectacle to keep the populace entertained, [[Arcane Conclave|the Conclave]] inaugurated the first **Bloodstone Trials** at the newly completed **[[Bloodstone Arena]]**. These trials were a series of gladiatorial contests, magical duels, and skill challenges that culminated in the crowning of the **Bloodstone Champion**. The Trials quickly became a beloved tradition, fostering a sense of communal identity and providing an outlet for the competitive spirit of Ardentia Cities citizens.
3. **The Gravitational Shift Incident (Year 7 Post-Meteor):** A particularly intense surge of energy originating from the [[Aetherial Observatory]] triggered a massive gravitational anomaly in the city, causing buildings and people to levitate uncontrollably. [[Arcane Conclave|The Conclave]] and [[Terramore Academy]] worked together to contain the anomaly and stabilize the area. The incident led to the establishment of the [[Aetherial Stabilization Corps]], a specialized group responsible for monitoring and managing the unpredictable effects of the Dungeon Seed's energies.
4. **The Conclave-Terramore Pact (Year 8 Post-Meteor):** To ensure continued collaboration and prevent power struggles, the [[Arcane Conclave]] and [[Terramore Academy]] formalized their partnership with the Conclave-Terramore Pact. The pact defined their respective roles in the city’s governance and solidified the academy’s influence in political matters, ensuring that magical research and education remained a central priority for Ardentia City.
5. **The Consolidation of the Arcane Exchange Consortium (Year 9 Post-Meteor):** The partnership between [[Arcane Conclave|the Conclave]] and the Consortium blossomed, turning the Consortium into a powerful trade entity within and beyond the city. This move not only boosted Ardentia's economy but also positioned it as a global center for magical trade. The Consortium Headquarters was built in the heart of the Seeker's Quarter, close to the [[Aetherial Observatory]] , making it a bustling hub for commerce.

#### The Modern Era
As Ardentia City enters its second decade since the meteor strike, it stands as a vibrant and dynamic settlement with a unique identity rooted in its origins. Governed by the [[Arcane Conclave]] and supported by [[Terramore Academy]], the city is a place where magic, commerce, and culture intersect. Its strategic location around the [[Aetherial Observatory]] continues to attract adventurers, scholars, and merchants, fostering a constant influx of new ideas, talents, and opportunities.

Ardentia remains a symbol of resilience and adaptation in the face of cataclysmic change, embodying the spirit of innovation and discovery in the fractured world. Its history is a testament to the power of collaboration and the relentless pursuit of knowledge, even amidst the unpredictability of magical forces.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present pulse of life within this settlement. What current events are shaping the daily life of its inhabitants? Explore the recent developments, ongoing activities, or societal changes that are influencing the atmosphere here. Dive into the immediate concerns, celebrations, or challenges faced by the residents. How are these current events impacting the dynamics and future trajectory of this settlement?


### 1. **The Arcane Symposium**
The **Arcane Conclave** is hosting an international **Arcane Symposium**, a grand gathering of mages, scholars, and magical engineers from across the fractured world. The symposium focuses on the latest advancements in magical research, enchantment techniques, and arcane technology. It's a week-long event featuring lectures, demonstrations, and debates on topics like planar travel, the harnessing of Dungeon Seed energies, and the study of new arcane phenomena. However, rumors suggest that some participants have ulterior motives—ranging from political agendas to attempts at acquiring forbidden knowledge from the Aetherial Observatory.

### 2. **The Merchant Uprising**
A faction of merchants, dissatisfied with the Arcane Exchange Consortium’s growing monopoly over trade within the city, is secretly organizing a coalition to challenge the Consortium's control. They claim that the Consortium's exclusive trade agreements and high tariffs are stifling smaller businesses and exploiting local resources. Tensions are rising as they rally for more transparency and fairer trade practices. The Conclave is monitoring the situation closely, wary of any disturbance that could destabilize the city's economy.

### 3. **Aetherial Observations and Anomalies**
The **Aetherial Observatory** is experiencing a series of unprecedented arcane anomalies, such as temporal distortions, spatial rifts, and the appearance of previously unknown magical creatures. The **Aetherial Stabilization Corps** is stretched thin, attempting to manage these anomalies and prevent them from spilling out into the city. Some adventurers are taking advantage of the situation to explore deeper into the dungeon, hoping to discover the source of these new phenomena, while others suspect that the Dungeon Seed itself might be evolving—or even communicating.

### 4. **Bloodstone Arena Scandal**
The most recent **Bloodstone Trials** have been marred by controversy as a prominent contender, believed to be the favorite to win, was disqualified after allegations of magical doping. The scandal has sparked a heated debate among citizens, with some calling for stricter regulations and others accusing the Arcane Conclave of using the Trials to manipulate public opinion. Meanwhile, rumors circulate that the disqualified contender is planning to expose corruption within the Arena's management.

### 6. **Mysterious Disappearances in Haven**
Several residents of **Haven**, the district where most of the average citizens live, have mysteriously vanished over the past few weeks. Initially, these disappearances were thought to be isolated incidents, but the pattern has now caught the attention of the city guard. There are whispers of a shadowy organization abducting people for unknown purposes, possibly linked to illegal magical experiments or a growing criminal underworld. The Conclave has increased its patrols in Haven and is offering a reward for any information leading to the discovery of those responsible.

### 8. **A Surge in Planar Activity**
There has been an unusual increase in planar activity near the city, with reports of strange creatures and beings appearing from other planes. This has led to speculation that a **Planar Rift** may have opened somewhere within the Aetherial Observatory or even within the city itself. The Conclave and Terramore Academy have jointly formed a task force to investigate the cause and prevent any dangerous planar incursions. Meanwhile, local merchants and adventurers are eager to exploit the potential opportunities—such as rare materials or exotic creatures—created by the rift.

### 9. **Rising Tensions with Terramore Academy**
Although the **Conclave-Terramore Pact** has kept relations stable, there are signs of growing tension between the Arcane Conclave and **Terramore Academy**. Some academy scholars feel that the Conclave is exerting too much control over magical research, particularly regarding the Dungeon Seed. They argue for more academic freedom and fewer restrictions on what can be studied and by whom. The Conclave, in turn, is concerned about the potential dangers of unrestricted research and the possibility of rogue experiments threatening the city's safety. Secret negotiations are underway to address these differences, but both sides are preparing for the possibility of a more public confrontation.

## Notes



