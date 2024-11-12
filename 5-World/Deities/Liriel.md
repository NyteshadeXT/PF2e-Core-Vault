---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Liriel.png
pronounced: Lie-re-el
aliases:
  - The Wanderer, Lady of Journeys, Lady Luck
alignment: Chaotic Good
portfolio: Exploration, Travel, Discovery, Adventure, Good Fortune, Skill
domains: Travel, Luck, Freedom
favored_weapon: Longbow
symbol: A compass rose with wings
deitypower: Greater God
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
>> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>
>> [!metadata|metadataoption]- Bio
>> #### Bio
>>  |
>> ---|---|
>> **Pronounced** |  `INPUT[textArea:pronounced]` |
>> **Aliases** | `INPUT[list:aliases]` |
>> **Alignment** | `INPUT[Alignment][:alignment]` |
>
>> [!metadata|metadataoption]- Deity Info
>> #### Deity Info
>>  |
>>---|---|
>> **Portfolio** | `INPUT[textArea:portfolio]` |
>> **Domains** | `INPUT[textArea:domains]` |
>> **Favored Weapon** |  `INPUT[textArea:favored_weapon]` |
>> **Symbol** |  `INPUT[textArea:symbol]` |
>> **Occupations** | `INPUT[Occupation][inlineListSuggester:occupation]` |
>> **Power** | `INPUT[DeityPower][:deitypower]` |
>> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Owned Locations** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):ownedlocation]` |
>> **Current Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |
>> **Condition** | `INPUT[Condition][:condition]` |
>
>> [!metadata|metadataoption]- Party Info
>> #### Party Info
>>  |
>> ---|---|
>> **Traveling With** | `INPUT[inlineListSuggester(optionQuery(#Party AND !"z_Templates"), useLinks(partial)):whichparty]` |
>> **Party 1 Relation** | `INPUT[Party1Relation][:party1relation]` |

> [!infobox]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Bio
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Alignment** | `VIEW[{alignment}]` |
> ###### Info
>  |
> ---|---|
> **Owned Locations** | `VIEW[{ownedlocation}][link]` |
> **Current Location** | `VIEW[{location}][link]` |
> **Condition** | `VIEW[{condition}]` |


# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

> [!metadata|organizations]- Related Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "Campaign"
> WHERE econtains(worship, this.file.link) AND contains(tags, "Organization")
> SORT organizationtype ASC, file.name ASC

> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "Campaign"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC

## Overview
**The Goddess of Exploration, Travel, and Luck**

Liriel governs the domains of Exploration, Travel, and Luck, embodying the spirit of adventure, the thrill of the unknown, and the serendipity that guides wanderers. Her influence extends to all aspects of movement, discovery, and chance, making her a patron of travelers, explorers, merchants, and adventurers. She is the wind in the sails, the sudden twist of fate, and the guiding star in a dark night.
  
Liriel is a neutral and dynamic force within the pantheon. She holds an intermediary role, often moving between different realms and planes, creating bridges between the known and unknown. She is not directly concerned with grand cosmic conflicts but rather focuses on encouraging movement, discovery, and the pursuit of knowledge and experience. She is often seen as a mediator or messenger among the gods, respected for her neutrality and insight into the unpredictable nature of existence.

Liriel values freedom, curiosity, adaptability, and courage. She believes in the importance of the journey itself, rather than the destination, and encourages her followers to embrace the unknown, take risks, and learn from every experience. She views life as an ever-unfolding path, full of twists, turns, and opportunities for growth. Liriel values spontaneity and independence and has little patience for those who are rigid, overly cautious, or afraid of venturing beyond their comfort zones.

Liriel is a benevolent and approachable deity who enjoys interacting with mortals. She often appears in disguise, perhaps as a fellow traveler, a mysterious guide, or a fortune-teller, testing mortals’ courage, wit, and willingness to take risks. She favors those who show a spirit of adventure, flexibility in the face of adversity, and a love for exploration. Liriel might bless a wandering merchant with a profitable trade route, help a lost soul find their way home, or place a lucky charm in the path of an unsuspecting traveler.

Liriel maintains a friendly and neutral stance toward most other deities, though she has a few closer connections. She often clashes with gods who represent stagnation and restriction, seeing them as antithetical to her ideals. However, she also finds allies among gods who value freedom, discovery, and the unknown. She shares a playful rivalry with [[Neralith]], as she believes in the power of choice and chance rather than predetermined paths. 

Liriel is a playful, unpredictable, and free-spirited deity. She delights in surprises, unexpected outcomes, and sudden turns of events. She is known to have a sense of humor and enjoys a good trick or riddle. Liriel is not bound by formality or tradition and encourages creativity, spontaneity, and the breaking of boundaries. She is empathetic but maintains a sense of detachment, understanding that every journey involves both joy and hardship. She often displays an air of mischief and light-heartedness. She is portrayed as having a bright, knowing smile, eyes that seem to hold a thousand secrets, and a quick wit that can charm or disarm. Her followers describe her as both a friend and a teacher, one who guides through experience rather than doctrine.

Liriel is often depicted as a wandering figure dressed in traveling garb—cloaks, boots, and light armor that allows for freedom of movement. She may carry a walking staff and compass and is sometimes shown with a star map or a bag full of curiosities collected from distant lands. Her hair, often windblown or cascading like a river, represents the ever-moving journey. In some depictions, she is surrounded by symbols of luck, like four-leaf clovers, coins, or lucky dice.

In mythology, Liriel is often the protagonist of stories involving lost heroes, epic quests, and fortunate accidents. Tales of her intervening in critical moments—leading a hero to a hidden artifact, helping a desperate family find a safe haven, or changing the course of a battle with a sudden storm—are common in folklore. She is also said to have a fondness for transforming herself into animals such as foxes, birds, or butterflies, often appearing to those who are lost or in need of guidance.

Liriel is associated with several sacred symbols. A compass rose with wings is the most frequent. Represents her role as a guide and patron of travelers as well as freedom and the lightness of travel.  It's also not uncommon for symbols within her temples like an open road symbolizing the endless journey of life or a crescent moon represents the unknown, the mysteries of the night, and the inner journey of self-discovery.

Liriel is known to manifest as a flickering flame that dances in the distance, leading people toward new discoveries or away from danger. At times, she appears as a golden butterfly flitting along a path or as a silhouette on a hill under the crescent moon, encouraging mortals to follow and seek new horizons. H

Liriel’s significance lies in her role as a bridge between realms and experiences. She reminds both gods and mortals that existence is a journey filled with discovery and change, advocating for courage in the face of uncertainty and the embrace of all that is unknown. Her influence inspires exploration, fosters curiosity, and champions the belief that luck favors the bold.

> [!column|2 no-title]
>
> 
>> [!metadata|portfolio] Portfolio
> `VIEW[{portfolio}][text]`
>
>> [!metadata|domains] Domains
> `VIEW[{domains}][text]`
> 
>> [!metadata|favored_weapon] Favored Weapon
> `VIEW[{favored_weapon}][text]`
>
>> [!metadata|symbol] Symbol
> `VIEW[{symbol}][text]`

## Goals
### Example #1

> [!kirk|info] Prompt (Remove me)
> Unravel the ambitions and objectives that drive this deity forward. Explore their overarching goals, whether it involves maintaining cosmic balance, guiding mortals, seeking enlightenment, or pursuing other divine endeavors. Describe how their goals align with their principles and domain. Do they seek to expand their influence, uphold certain values, or achieve specific milestones? How do these goals shape their interactions with mortals, other deities, and the world at large?

## Acquaintances
### **Divine Friendships and Alliances**

Liriel and [[Elara]] share a close, mutually beneficial friendship. Liriel respects [[Elara]]'s commitment to life and renewal, recognizing that every journey, whether physical or spiritual, requires healing and mercy along the way. [[Elara]], in turn, sees Liriel as a source of inspiration and growth, encouraging mortals to venture beyond their comfort zones and embrace the unknown. They often work together to protect travelers, with Liriel guiding them and [[Elara]] offering comfort and healing during the journey.

Liriel maintains a playful and curious alliance with [[Arcarios]]. She sees the pursuit of arcane knowledge as another form of exploration and enjoys the mystery and wonder that magic can bring to the world. [[Arcarios]] appreciates Liriel's adventurous spirit, often sharing secrets of hidden realms or magical paths with her. Their relationship is one of mutual respect and collaboration, where magic and exploration intersect.

Liriel and [[Illyria]] share a dynamic partnership. Both deities value innovation, creativity, and discovery, making them natural allies. Liriel’s influence over travel and exploration often brings new ideas and resources to [[Illyria]]'s domain of invention and crafting. Together, they inspire mortals to embark on creative journeys, to build, invent, and transform the world around them. They often collaborate in moments where exploration leads to new creations or inventions, each one complementing the other’s sphere of influence.

Liriel’s domain of exploration aligns with [[Verena]]’s interest in commerce. The expansion of trade routes and exploration of new territories would be beneficial to both deities, making them natural allies. Merchants and explorers might offer prayers to both deities before embarking on new ventures, seeking luck from Liriel and wealth from [[Verena]].

### **Divine Rivalries and Adversaries**
Liriel and [[Aurelius]] often find themselves at odds. While [[Aurelius]] represents structure, law, and the stability of civilization, Liriel embodies the unpredictability of travel, exploration, and luck. [[Aurelius]] views Liriel's love for chaos and chance as a challenge to his principles of order and rule, while Liriel sees [[Aurelius]] as overly rigid and controlling. Their rivalry is marked by tension between freedom and structure, spontaneity and law. However, there is a begrudging respect between them, as both understand that order and chaos are essential forces in the cosmos.

While both Liriel and [[Kataklysmos]] share a connection to chaos, their approaches are fundamentally different. Liriel embraces chaos as a tool for discovery, growth, and serendipity, while [[Kataklysmos]] revels in its destructive and violent aspects. Liriel sees [[Kataklysmos]] as reckless and malevolent, a force that turns her beloved unpredictability into devastation. [[Kataklysmos]], in turn, views Liriel's attempts to find meaning in chaos as naive and weak. Their conflict often represents the duality of chaos: creation versus destruction, opportunity versus annihilation.

Liriel and [[Aegis]] share a complex, neutral relationship. While [[Aegis]] values protection and vigilance, often guarding against risks that come with travel and exploration, Liriel promotes taking those risks as part of life’s journey. They occasionally collaborate when protection is needed for travelers or when an unexpected danger threatens the innocent. However, they often disagree on the balance between caution and adventure.

Liriel and [[Thalor]] have a neutral relationship characterized by mutual curiosity. [[Thalor]] respects Liriel's role in encouraging exploration and learning through experience, while Liriel values the wisdom and knowledge that [[Thalor]] represents. However, Liriel's preference for unstructured, spontaneous discovery contrasts with [[Thalor]]'s more methodical pursuit of knowledge. Their interactions are marked by an understanding that different paths can lead to enlightenment.

#### **Shaping of the Deity’s History, Principles, and Actions:**
Liriel's relationships have shaped her history and principles in many ways. Her alliances with [[Elara]] and [[Illyria]] have reinforced her values of growth, creativity, and innovation, pushing her to support those who seek to expand their horizons. Her rivalry with [[Aurelius]] has made her even more steadfast in promoting freedom, flexibility, and adventure, often encouraging mortals to challenge the established order and think outside the confines of tradition. Her conflict with [[Kataklysmos]] has strengthened her belief in the constructive potential of chaos and the necessity of risk for positive change.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## The Church
Liriel's teachings emphasize the importance of exploration, the joy of discovery, and the value of the journey itself. Followers are encouraged to seek out new experiences, embrace change, and push beyond their comfort zones. Liriel teaches that the world is vast and filled with wonders waiting to be discovered, and that personal growth comes from venturing into the unknown. She also stresses the importance of respect for the lands and cultures encountered during travels.

Temples dedicated to Liriel are often found at crossroads, ports, mountain passes, and city gates—places of transition and movement. They are designed to be welcoming places for travelers, offering maps, supplies, and guidance for their journeys. Her shrines are often simple, little more than waystones or markers adorned with her symbols, and can be found along well-traveled roads, forest paths, and even deep wilderness. These shrines usually feature offerings of coins, flowers, and items left by travelers seeking her blessing.

Liriel's followers include travelers, merchants, sailors, explorers, rogues, and nomads. Her priests and priestesses are often wanderers themselves, moving from place to place, offering blessings for safe journeys, and sharing tales of distant lands. Festivals dedicated to her often celebrate travel, discovery, and storytelling, with contests of luck, feats of endurance, and mapmaking challenges. The clergy, known as Pathfinders, are seasoned explorers and guides who dedicate their lives to assisting others in their travels. 

### Hierarchy Titles
- **High Pathfinder:** The supreme leader of the church, responsible for overseeing expeditions and guiding the faithful in their journeys.
- **Trailblazer:** Senior clergy who lead exploration missions, charting new territories and discovering ancient ruins.
- **Wayfarer:** Clergy who assist travelers and pilgrims, offering guidance, protection, and hospitality along their journeys.
- **Cartographer:** Clergy responsible for mapping and documenting new lands, creating charts and guides for adventurers and traders.

### Day-to-Day Activities
Followers of Liriel engage in activities that promote exploration, travel, and discovery. They lead expeditions into uncharted territories, conduct trade missions, and offer aid to travelers in need. Offerings to Liriel include maps, artifacts from distant lands, and successful expeditions that expand the knowledge of the world.

### Important Ceremonies/Holy Days
- **The Festival of Caravans:** Celebrated during the equinoxes, where travelers gather to share tales of their journeys and trade exotic goods from distant lands.
- **The Rite of Passage:** A ceremony held for young adventurers and explorers, marking their readiness to embark on their first solo journeys.
- **The Pilgrimage of Stars:** A sacred journey undertaken by followers to visit distant temples and sacred sites of Liriel, strengthening their bond with the goddess.

### Priestly Vestments and Adventuring Garb
Priests of Liriel wear practical yet elegant attire suitable for travel and exploration. Their clothing is adorned with symbols of the compass rose and wings, reflecting their devotion to guiding others through journeys. They often carry longbows as symbols of their readiness to protect travelers and defend against dangers encountered along the way. High-ranking priests may wear enchanted cloaks that aid in navigation and protection during expeditions.

In their adventuring garb, priests of Liriel favor lightweight and versatile clothing that allows for ease of movement and endurance during long journeys. They wear enchanted cloaks and boots that offer protection from the elements and enhance their ability to traverse varied terrain. Longbows are their weapon of choice, chosen for their effectiveness in both hunting and defending against threats encountered in the wilderness. Their gear is designed to support their role as guides and explorers, aiding them in their quest to uncover the mysteries of the world.

## Notes

#### **Organizations, Influential Figures, and Powerful Beings that Venerate Liriel:**

1. **Organizations:**
   - **The Wayfarers’ Guild:** A widespread network of travelers, explorers, merchants, and adventurers who seek to chart new lands, discover hidden secrets, and push the boundaries of the known world. This guild venerates Liriel as their patron and often holds festivals in her honor, celebrating new discoveries and the spirit of exploration. Members of the guild believe that Liriel guides them on their journeys, offering them luck and protection in exchange for their courage and willingness to explore the unknown.
   - **The Pilgrim’s Path:** A loose coalition of wandering priests, storytellers, and scholars who dedicate themselves to traveling the world, sharing knowledge, stories, and experiences. They see Liriel as a guide and mentor, believing that true wisdom comes from experience and exploration. They often act as spiritual guides for those on pilgrimages or quests, invoking Liriel’s blessings for safe passage and insight.

2. **Influential Figures:**
   - **Aldara Windseer:** A famed explorer and cartographer who has mapped many of the world's uncharted regions. She is a devout follower of Liriel, believing that every journey is a test set by the goddess to uncover the world's mysteries. Aldara is often depicted in tales as receiving visions or guidance from Liriel, who appears to her in the form of a golden fox or as a fellow traveler with a knowing smile.
   - **Varin the Fortunate:** A notorious gambler and rogue known for his incredible luck and uncanny ability to navigate danger. He attributes his success to his devotion to Liriel, claiming that she favors those who take bold risks and live life on the edge. Varin has founded a group known as **The Gambler’s Hand**, a band of fortune-seekers who believe that luck is the greatest tool in any adventurer's arsenal.

3. **Powerful Beings:**
   - **The Wandering Spirit, Selune:** A celestial being said to be one of Liriel’s messengers. Selune takes the form of a spectral wanderer who appears to those who are lost, offering guidance through riddles or enigmatic advice. Those who have encountered Selune claim that she has the power to **alter fate**, nudging events toward favorable outcomes for those who remain true to their quest.

#### **Perception and Roles in the Deity’s Sphere of Influence:**

- **Perception by Worshippers:** Followers of Liriel perceive her as a **benevolent and encouraging deity** who is both a protector and a challenger. They see her as a guide who does not coddle but instead inspires them to be bold, curious, and daring. They believe that she rewards those who take risks and are open to new experiences, often providing small signs, symbols, or omens that guide them on their path.

- **Roles in the Deity’s Sphere of Influence:**
  - **The Wayfarers' Guild** serves as a direct extension of Liriel's will, acting as scouts, explorers, and pathfinders, constantly pushing the boundaries of the known world.
  - **The Pilgrim’s Path** focuses on the **spiritual journey** and promotes the idea that life itself is an exploration, encouraging personal growth through experience.
  - **Aldara Windseer** and **Varin the Fortunate** exemplify different aspects of Liriel’s influence: the adventurous spirit and the embrace of chance, respectively, serving as models for her followers.
  - **Selune, the Wandering Spirit**, acts as a bridge between the divine and mortal realms, delivering Liriel's guidance directly to those who seek it.





## Affiliated Orders
- **The Order of the Horizon:** An elite group of explorers and adventurers who undertake daring missions to explore new frontiers and uncover hidden treasures.
- **The Wayfarers' Guild:** A network of guides and merchants who facilitate safe travel and trade across vast distances, ensuring the smooth flow of commerce and knowledge.
