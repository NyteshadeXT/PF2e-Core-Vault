---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Arcarios.png
pronounced: Are-car-ee-os
aliases:
  - Guardian of the Wellspring
deitypower: Greater God
portfolio: Magic, Arcane Knowledge, Mysticism
domains: |
  Magic
symbol: An open book with a swirling vortex, a silver crescent moon over a tome or a wand entwined with a serpent
favored_weapon: Staff
alignment: True Neutral
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
**Arcarios: God of Magic, Arcane Knowledge, and Mysticism**

Arcarios governs the vast domain of magic, encompassing all forms of arcane knowledge, mystical arts, and the unseen threads of power that weave through existence. His domain stretches from the primal sources of magic in the natural world to the most intricate rituals practiced by mages and mystics. As the keeper of all arcane secrets, Arcarios holds sway over spells, enchantments, and the raw, untamed forces of magic itself. His power is said to be limitless within his domain; he can bend reality, reshape existence, and grant or deny the arcane power that mortals and gods alike covet.

Arcarios is considered a neutral force, driven neither by benevolence nor malevolence, but by a deep-seated pursuit of understanding, mastery, and the perpetuation of magic. His influence touches all beings who wield or wish to understand magic, and he is often sought for knowledge, insight, or the unlocking of hidden potential. He frequently acts as an arbiter or mediator among the gods, especially in matters involving magical laws or disputes over cosmic truths.

The pursuit of knowledge, the mastery of magic, and the relentless quest for understanding the universe's mysteries are all things Arcarios values. His principles are built upon the idea that magic is a fundamental, neutral force that should be studied, respected, and wielded with wisdom and responsibility. He teaches that magic is neither inherently good nor evil; it is a tool that reflects the intent of its wielder. However, he also emphasizes the importance of balance, cautioning against reckless use of magic or seeking power for its own sake. Those who seek his favor or guidance are expected to be dedicated scholars, cautious practitioners, and curious explorers of the unknown.

Arcarios is known to be aloof and enigmatic in his dealings with both mortals and other gods. He seldom intervenes directly in mortal affairs but may send visions, omens, or subtle nudges to those he deems worthy or in need of guidance. He favors those who demonstrate a genuine thirst for knowledge, a respect for the mysteries of magic, and an understanding of its consequences. Among the gods, Arcarios is respected for his wisdom and arcane mastery, often acting as a counselor or advisor. He maintains a complex relationship with [[Kataklysmos]], god of Chaos and Destruction, often finding himself at odds with the latter’s disregard for magical laws and boundaries, yet strangely fascinated by the unpredictable results of chaos interacting with arcane forces.

He is portrayed as calm, contemplative, and endlessly curious. He is not quick to anger but is not indifferent to slights against the arcane arts or reckless abuse of magical power. When provoked, he exhibits a cold, calculating demeanor, employing his vast knowledge to outmaneuver foes rather than resorting to brute force. His demeanor reflects his belief that true mastery lies in understanding every facet of magic, from its origins to its applications.

In art, Arcarios is often depicted as a figure cloaked in deep, rich robes adorned with arcane symbols and runes that seem to shift and change as they are observed. His visage is often hidden, with only his eyes visible, which are said to glow with an otherworldly light that reflects the boundless depths of his knowledge. He is frequently shown holding a staff or tome, symbols of his authority over magic and knowledge, or with a circle of arcane glyphs surrounding him. Mythological stories often depict Arcarios as a seeker, eternally wandering the realms of existence in search of forgotten truths or lost spells. He is often accompanied by spectral manifestations or magical constructs that serve as his aides, guards, or repositories of knowledge.

Arcarios’ most common symbol is an *open arcane book surrounded by a swirling vortex*. This symbol is often used by his followers in rituals, wards, and on magical items to invoke his favor or protection. Other symbols include a *silver crescent moon over a tome*, signifying hidden knowledge revealed under the right circumstances, and a *wand entwined with a serpent*, representing wisdom, power, and the mysteries of transformation. He often manifests in visions as a shifting silhouette or a figure made of pure, radiant energy, with robes flowing like liquid shadow. His voice is said to be both a whisper in the ear and a roar in the mind, carrying with it the weight of ages and the promise of forgotten wisdom.

Arcarios holds a pivotal role in the pantheon and the world. His influence is seen in every aspect of magical practice and study, from the most basic cantrip to the grandest ritual. Temples dedicated to him often double as libraries or schools of magic, where scholars and mages gather to study and teach. His followers, known as the Arcanists, are typically scholars, mages, seers, and those who seek to expand their understanding of the arcane arts. They are often tasked with protecting arcane knowledge, uncovering forgotten magic, and preserving the balance between the use and misuse of mystical forces. Arcarios is seen as both a guiding light and a cautionary presence in the magical world, embodying the limitless potential and inherent dangers of the arcane. His influence ensures that magic remains a vibrant, powerful force, ever-present yet enigmatic, bound by the wisdom of those who seek to master it.

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
Arcarios and [[Thalor]] share a deep, mutual respect rooted in their shared dedication to knowledge. While [[Thalor]] represents a broader spectrum of knowledge encompassing philosophy, science, and wisdom, Arcarios focuses on the mysteries of magic and the arcane. Their alliance is built on collaboration; they often exchange insights, seek counsel from one another, and occasionally engage in joint ventures to uncover forgotten lore or hidden truths. This partnership has reinforced Arcarios’ principles of balance and wisdom in the pursuit of knowledge. [[Thalor]]'s broader perspective often tempers Arcarios' intense focus on magic, encouraging him to consider the broader consequences of magical actions on all realms of existence.

Arcarios and [[Elara]] rarely interact directly, but they maintain a cordial understanding. [[Elara]]'s role in healing and renewal often brings her into contact with those who wield restorative or protective magics, a subset of Arcarios’ domain. They share a mutual respect for each other's realms, as both are vital to maintaining balance within the cosmos.  This connection has strengthened Arcarios’ awareness of the role magic plays in life and healing, encouraging him to support magical endeavors that align with preservation and renewal, though always with an eye toward balance and the natural order.

Arcarios and [[Aurelius]] have a relationship marked by cautious respect. While both deities value order, their approaches differ: [[Aurelius]] enforces law and justice through structures and edicts, while Arcarios believes in the natural laws of magic, which can be more fluid and subjective. They often find common cause in opposing [[Kataklysmos]]’ chaos but diverge on the means to maintain balance. This relationship pushes Arcarios to consider the moral and societal implications of magic, though he remains wary of [[Aurelius]]’ rigid views, preferring to promote a more nuanced approach to magical laws and regulations.

[[Aegis]] and Arcarios share a supportive relationship, as both gods are dedicated to the protection of certain aspects of existence. [[Aegis]] protects the mortal realm, while Arcarios guards the mysteries of the arcane. They often cooperate to safeguard powerful magical artifacts or knowledge from falling into the wrong hands, and their followers frequently collaborate in these endeavors. [[Aegis]]’ emphasis on vigilance and protection has reinforced Arcarios’ role as a guardian of arcane knowledge. It encourages him to take a more proactive stance in shielding dangerous magical secrets from those who would misuse them.

### **Divine Rivalries and Adversaries**
Arcarios and [[Kataklysmos]] have a complex and multifaceted relationship. As the embodiment of chaos and destruction, [[Kataklysmos]] often stands in direct opposition to Arcarios’ efforts to maintain balance and order in the use of magic. However, Arcarios is also strangely fascinated by the unpredictable nature of chaos and the creative potential it holds. This dynamic results in a rivalry marked by grudging respect and occasional collaboration when their goals align, particularly in the exploration of chaotic magic or unstable arcane phenomena. This rivalry has led Arcarios to develop a more adaptive approach to magic, understanding that chaos is an intrinsic part of its nature. It has also sharpened his resolve to prevent the reckless destruction that [[Kataklysmos]] often sows and to safeguard arcane knowledge from those who might abuse it for chaotic ends.

While Arcarios appreciates the transformative aspects of change, [[Zerathos]]' domain over madness often brings them into conflict. [[Zerathos]]’ followers sometimes invoke unstable or forbidden forms of magic, leading to clashes with Arcarios' more measured and controlled approach. However, Arcarios understands that change, even in its most maddening forms, can lead to new arcane discoveries, so he maintains a tense tolerance of [[Zerathos]]. This relationship has made Arcarios more vigilant in protecting his secrets and arcane lore from being twisted into forms of magic that could lead to widespread harm or madness. He has also become more contemplative about the nature of change and its role in the evolution of magic.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## The Church
Arcarios's teachings emphasize the pursuit of magical knowledge and mastery of the arcane arts. Followers are encouraged to explore the depths of magic, seeking to understand its mysteries and harness its power. Arcarios teaches that magic is a neutral force that can shape reality according to the will of the practitioner. Whether used for creation or destruction, healing or harm, the true value of magic lies in its potential and the wisdom of its wielder.

The Church of Arcarios is often found in grand libraries, ancient towers, and arcane academies. Temples are designed to be repositories of magical knowledge and places of learning, filled with tomes, scrolls, and magical artifacts. The clergy, known as Arcanists, are dedicated to the study and teaching of magic, guiding both novices and masters in their arcane pursuits.

### Hierarchy Titles
- **Archmage:** The supreme leader of the church, responsible for overseeing the study and practice of magic and maintaining the balance of arcane power.
- **Magister:** Senior clergy who are masters of various schools of magic, responsible for teaching and mentoring new initiates.
- **Spellbinder:** Clergy who specialize in the casting and creation of spells, often serving as researchers and scholars within the temple.
- **Warden of the Arcane:** Clergy tasked with safeguarding magical knowledge and artifacts, ensuring their proper use and protection.

### Day-to-Day Activities
Followers of Arcarios engage in activities that promote the study and practice of magic. They conduct experiments, study ancient texts, and create new spells and magical items. Offerings to Arcarios include rare magical components, ancient tomes, and successful acts of arcane mastery. The church also offers training and guidance to those who seek to understand and harness the power of magic.

### Important Ceremonies/Holy Days
- **The Conclave of Magic:** Celebrated during the equinoxes, where followers gather to share knowledge, conduct rituals, and demonstrate their magical prowess.
- **The Arcane Eclipse:** A ceremony held during lunar eclipses, believed to be a time when the veil between realms is thinnest, allowing for powerful rituals and divination.
- **The Rite of Mastery:** A rite of passage for new initiates, where they demonstrate their magical abilities and swear an oath to the pursuit of arcane knowledge.
- **The Festival of Spells:** A day of celebration and competition, where followers showcase their spellcasting skills and magical creations.

### Priestly Vestments and Adventuring Garb
Priests of Arcarios wear robes adorned with symbols of magic and arcane runes. Their attire is designed to reflect their connection to the mystical forces and their dedication to the study of magic. They often carry staffs or wands as symbols of their office and tools of their trade. High-ranking priests may wear elaborate robes enchanted with protective spells and symbols of their mastery.

In their adventuring garb, priests of Arcarios favor practical yet ornate clothing that allows for ease of movement and the casting of spells. They wear enchanted cloaks and robes that enhance their magical abilities and provide protection against arcane and physical threats. Staffs or wands are their preferred weapons, often imbued with powerful enchantments and symbols of their connection to the god of magic. Their gear is designed to support their arcane pursuits and protect them in their quest for magical knowledge.

## Notes

### **Mortal Organizations and Worshipers:**

1. **The Arcanists (Primary Followers and Scholars):**
   - **Nature of Group:** The Arcanists are an influential order of mages, scholars, and magical researchers dedicated to the study, preservation, and advancement of arcane knowledge. They are headquartered in grand libraries and magical academies, many of which double as temples to Arcarios. 
   - **Perception of Arcarios:** The Arcanists view Arcarios as the ultimate patron of magic and knowledge. They see him as a guide and protector, a source of inspiration in their relentless quest to uncover the secrets of the universe. The order actively seeks his favor through rituals, scholarly pursuits, and the collection of lost or forbidden magical tomes.
   - **Impact on Arcarios:** The Arcanists serve as his primary agents in the mortal realm, extending his influence and acting as stewards of his domain. Their pursuit of magical knowledge aligns closely with Arcarios’ goals, and they often take on missions to recover or protect ancient magical artifacts, tomes, and secrets.

2. **The Custodians of the Veil (Guardians of Mystical Boundaries):**
   - **Nature of Group:** The Custodians of the Veil are a secretive sect dedicated to maintaining the balance between the mortal realm and the arcane dimensions. They monitor magical practices, ensuring that magic does not destabilize the natural order or allow extraplanar entities to gain undue influence.
   - **Perception of Arcarios:** They see Arcarios as the keeper of balance and seek his wisdom to discern the boundaries of responsible magic use. The Custodians often pray to him for guidance in their duties, and their rituals emphasize protection, sealing, and binding.
   - **Impact on Arcarios:** This group helps Arcarios maintain the balance he seeks between magic and the world, serving as enforcers of his will where needed. Their activities often align with his objectives to prevent chaos or madness from spreading unchecked.

3. **The Guild of Enchanters (Craftsmen and Artisans of Magic):**
   - **Nature of Group:** A powerful guild that specializes in the creation of magical items, enchantments, and arcane constructs. They value creativity, innovation, and the craftsmanship involved in the magical arts.
   - **Perception of Arcarios:** They see Arcarios as a divine patron who embodies the highest principles of their craft. To them, Arcarios is both an inspiration for innovation and a benchmark of mastery. They often dedicate their most significant creations to him in hopes of gaining his blessing.
   - **Impact on Arcarios:** The guild’s activities bolster Arcarios’ influence over the material applications of magic. Their enchanted creations serve as testaments to his power and expertise, spreading his name and reputation throughout the mortal realms.

4. **The Mystics of the Shifting Veil (Seekers of Divine Revelation):**
   - **Nature of Group:** A group of oracles, seers, and mystics who focus on the divine aspects of magic and prophecy. They delve into the arcane currents that flow through reality, interpreting visions, omens, and magical phenomena.
   - **Perception of Arcarios:** They revere Arcarios as the divine source of mystical insight, believing that he grants visions and prophecies to guide those he favors. They often perform rituals to open their minds to his influence, seeing him as both a revealer and concealer of truth.
   - **Impact on Arcarios:** This group expands his reach into the metaphysical and prophetic domains, allowing him to influence the spiritual aspects of magic. They act as his mouthpieces, spreading his teachings and interpretations of his will among mortals.

- **The Order of the Enchanted Tome:** An elite group of scholars and spellcasters dedicated to the preservation and expansion of magical knowledge.
- **The Circle of the Arcane:** A network of powerful mages who collaborate on grand magical projects and protect the world from arcane threats.