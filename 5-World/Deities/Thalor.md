---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Thalor.png
pronounced: Thal-or
aliases:
  - Keeper of Wisdom, Patron of Scholars, Lord of Knowledge
alignment: True Neutral
portfolio: Knowledge, Wisdom, Learning, Scholarship
domains: Knowledge, Magic, Glyph
favored_weapon: Quarterstaff
symbol: Open book with a quill
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
**God of Knowledge, Wisdom, Learning, and Scholarship**

Thalor is a central figure in the divine hierarchy, representing the pursuit of truth, the accumulation of knowledge, and the power of wisdom. As the embodiment of intellect and enlightenment, Thalor’s influence extends across both the mortal and divine realms, encouraging inquiry, education, and thoughtful reflection.  He governs the domains of Knowledge, Wisdom, Learning, and Scholarship, overseeing the flow of information, discovery of truths, and preservation of knowledge across the universe. He is considered the patron of scholars, sages, librarians, and philosophers, and his blessings are often invoked by those who seek insight into both the mundane and the arcane.

In the cosmic hierarchy, Thalor holds a revered position among the gods, often seen as a mediator or advisor due to his deep well of wisdom. Other gods frequently turn to him for counsel, especially when facing complex decisions or philosophical dilemmas. His vast intellect makes him an arbiter of divine conflicts, often acting as a neutral party who can weigh the merits of both sides and offer guidance rooted in logic and wisdom. Despite his calm and composed demeanor, Thalor’s influence is profound, as knowledge forms the foundation upon which many divine and mortal actions are based.


Thalor embodies several core principles:
- **Pursuit of Knowledge:** He encourages mortals and deities alike to seek out knowledge in all its forms, believing that the pursuit of understanding is a sacred duty. The acquisition of knowledge is not just for personal gain but is seen as a way to enrich the world and elevate civilization.
- **Wisdom in Action:** While knowledge is important, Thalor values wisdom—the practical and thoughtful application of knowledge. He teaches that understanding the right course of action comes from careful contemplation, experience, and empathy.
- **Preservation of Truth:** Thalor emphasizes the importance of truth and integrity in all matters of learning. His followers are encouraged to seek out the truth no matter the cost, to preserve history, and to safeguard ancient knowledge.
- **Learning as a Lifelong Journey:** Thalor holds that the process of learning never ends. Mortals and gods alike should continuously expand their understanding of the world around them, always questioning, exploring, and growing in knowledge.

Thalor’s interaction with mortals is often subtle but deeply impactful. He grants inspiration to scholars, inventors, and philosophers, helping guide their discoveries and intellectual pursuits. His influence is often felt in moments of profound insight or when one unlocks a difficult puzzle or mystery. Followers of Thalor—academics, scribes, and students—are typically drawn to libraries, universities, and archives, where they can devote themselves to learning and the spread of knowledge. These places are often considered sacred to Thalor, and his presence is said to watch over them, ensuring that knowledge is protected and passed down through generations.

Thalor is often depicted as a calm, thoughtful, and contemplative deity. He rarely acts in haste, preferring to consider all angles before making decisions. His demeanor is that of a patient scholar or philosopher, willing to listen and weigh all sides of an argument before providing his counsel. Unlike more militant or aggressive gods, Thalor seeks to solve problems through reason and dialogue rather than force, which sets him apart from more impetuous deities.

His most distinctive trait is his omniscient insight. It is said that Thalor can see across time, observing all that has been and all that will be. His deep understanding of the past, present, and future makes him an invaluable source of wisdom, though he rarely interferes directly in mortal affairs, preferring to provide mortals with the tools they need to discover solutions on their own.

In art and mythology, Thalor is commonly depicted as an elderly sage, often clad in robes with intricate designs that represent the interconnectedness of knowledge. He is shown seated in grand libraries, surrounded by tomes, scrolls, and magical artifacts, often holding a book or a quill. His gaze is usually serene, emphasizing his wisdom and contemplation. In religious texts, Thalor is credited with granting mortals the gift of writing and scholarship, allowing them to preserve knowledge for future generations. Myths describe him as the teacher of great mortal scholars and philosophers, guiding their thoughts and helping them reach groundbreaking insights.

Thalor’s most common symbol is the open book and a quill, representing the pursuit of knowledge and the infinite nature of learning. An owl is frequently associated with Thalor, symbolizing wisdom, keen observation, and silent insight. A quill and scroll representing scholarship and the recording of knowledge, sacred tools that help preserve wisdom for future generations are often associated with Thalor as well.

Temples dedicated to Thalor often resemble grand libraries or universities, housing sacred texts and offering places for study and contemplation. His clergy are usually librarians, archivists, or teachers, and they spend much of their time preserving knowledge, copying ancient texts, and advising rulers on matters of policy and ethics.

Thalor’s influence extends far beyond academia. In the pantheon, he is the guiding hand behind many decisions, providing wisdom and clarity when conflicts arise between deities. His teachings influence the way mortals approach life’s challenges, encouraging them to seek wisdom before action, to value truth, and to view learning as an ever-expanding journey.

The organizations that venerate Thalor, such as universities, scholarly circles, and magical academies, often hold great sway in mortal societies, acting as advisors to kings and keepers of history. These institutions, grounded in Thalor’s principles, work to preserve knowledge and wisdom as the foundations of civilization, ensuring that humanity does not repeat the mistakes of the past and that future generations continue to advance in understanding.

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
Thalor and [[Aurelius]] maintain a strong bond, built on mutual respect for order, law, and knowledge. Thalor often provides [[Aurelius]] with the wisdom needed to craft laws and maintain a just society, while [[Aurelius]] ensures that this wisdom is applied in fair and structured ways. The two gods often collaborate when it comes to mortal leadership, with Thalor advising on the moral and intellectual aspects of law, while [[Aurelius]] enforces it. This partnership shapes Thalor’s principles of orderly pursuit of knowledge and influences his role in guiding rulers, philosophers, and lawmakers.

As both gods are concerned with knowledge and the unknown, Thalor and [[Arcarios]] share a close relationship. While [[Arcarios]] focuses on the mystical and arcane aspects of knowledge, Thalor brings clarity and rational understanding to these areas. Their combined forces often drive magical research, and together they represent the intellectual and arcane branches of learning. Thalor’s partnership with [[Arcarios]] has shaped his principle of maintaining balance between logic and magic, ensuring that the pursuit of the arcane remains grounded in wisdom.

Thalor and [[Elara]] have a complementary relationship, with [[Elara]] relying on Thalor’s wisdom for the development of healing practices, medicine, and natural remedies. In return, Thalor often calls upon [[Elara]] for advice on matters of life and renewal. Together, they guide mortals in the study of healing arts and natural sciences, promoting the idea that knowledge should be used for the benefit of all living things.

### **Divine Rivalries and Adversaries**
Thalor and [[Zerathos]] represent two extremes of understanding: Thalor embodies logic and order, while [[Zerathos]] revels in the chaos and madness of unfathomable knowledge. Their rivalry is rooted in their opposing philosophies on the nature of knowledge itself. Thalor believes in the pursuit of knowledge as a structured and ordered process, while [[Zerathos]] values disorder and unpredictability. Their interactions often take the form of philosophical duels, where Thalor advocates for clarity and understanding, while [[Zerathos]] seeks to disrupt and distort the known world.

Thalor sees [[Kataklysmos]] as the antithesis of his goals. Where Thalor seeks to preserve knowledge and advance civilization through wisdom, [[Kataklysmos]] desires to destroy and unravel the world. Thalor’s teachings promote the long-term growth and preservation of societies, while [[Kataklysmos]] brings chaos and ruin. The two deities are locked in opposition, with Thalor often working to counteract [[Kataklysmos]]’s destructive forces by providing mortals with the knowledge to rebuild and protect their cultures.

Thalor’s disdain for [[Malakar]] stems from the god’s association with corruption and the degradation of knowledge. While Thalor seeks to preserve and pass down knowledge for future generations, [[Malakar]] embodies the decay of both body and mind, threatening the integrity of learning and civilization. This opposition leads to a philosophical battle between the decay of enlightenment and the growth of wisdom.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## The Church
Thalor teaches that knowledge is the key to enlightenment and that wisdom must guide one's actions. His followers are encouraged to seek knowledge in all its forms, from scholarly pursuits to introspection and meditation. Thalor's teachings emphasize the importance of critical thinking, rationality, and ethical conduct. He promotes the dissemination of knowledge and the pursuit of truth for the betterment of society.

The Church of Thalor is highly respected, especially among scholars, academics, and those who value learning. Temples are often libraries, universities, or centers of learning, where scribes, scholars, and philosophers gather to study and exchange ideas. Clergy members are known as Sages, Scholars, and Loremasters, each specializing in different aspects of knowledge and wisdom.

### Hierarchy Titles
- **High Sage**: The highest-ranking clergy member, overseeing major centers of learning and academic pursuits.
- **Scholar**: Senior clergy specializing in specific fields of study or academic disciplines.
- **Loremaster**: Clergy responsible for preserving and interpreting ancient texts and knowledge.
- **Scribe**: Clergy tasked with copying and disseminating important texts and scrolls.

### Day-to-Day Activities
Members of the Church of Thalor are involved in various activities, including teaching, research, writing, and mentoring. They are responsible for maintaining libraries, archives, and schools, as well as advising rulers and leaders on matters of governance and policy. Thalor's followers are expected to dedicate themselves to the pursuit of knowledge and to share their wisdom with others.

### Important Ceremonies/Holy Days
- **Festival of Enlightenment**: An annual celebration of knowledge and wisdom, where scholars and intellectuals gather to share their discoveries and insights.
- **Day of Reflection**: A day dedicated to introspection and meditation, where followers of Thalor contemplate the mysteries of the universe and seek inner wisdom.
- **Feast of Learning**: A feast held in honor of scholars and educators, where contributions to the advancement of knowledge are recognized and celebrated.

### Priestly Vestments and Adventuring Garb
Priests of Thalor wear robes of deep blue or violet, symbolizing their dedication to knowledge and wisdom. Sages wear elaborate garments adorned with symbols of learning, while Scholars don simpler attire suitable for their role in academia. Loremasters often carry scrolls or tomes containing ancient wisdom, and Scribes are typically seen with writing implements and parchment.

Clerics of Thalor in the field typically wear practical, comfortable clothing suitable for long hours of study and exploration. Their garb includes items such as traveling cloaks, satchels for carrying books and scrolls, and spectacles for reading. They carry symbols of the deity such as amulets or pendants inscribed with runes of wisdom.

## Notes


### **Organizations, Influential Figures, and Worshipers**

Thalor’s worshipers are diverse, but they tend to be scholars, philosophers, archivists, wizards, and anyone devoted to the pursuit of knowledge. His influence extends to both mortal and divine organizations, many of which hold considerable power in societies across the world.

- **The **Lorekeepers’ Guild**:** This powerful organization consists of **librarians, historians, and scholars** who dedicate their lives to preserving knowledge. They operate great archives and libraries in Thalor’s name, ensuring that ancient texts, scientific discoveries, and arcane lore are safeguarded for future generations. The guild views Thalor as the ultimate guardian of knowledge and seeks his guidance in all matters of scholarship.

- **The **Scribes of the Infinite Tome**:** A religious order devoted to the **recording of history and magical research**, the Scribes are tasked with chronicling the major events of the world, as well as delving into forgotten realms of knowledge. The order venerates Thalor as the **eternal author**, believing that his wisdom is infinite and ever-expanding. The Scribes act as teachers, advisors, and custodians of knowledge, working closely with rulers and mages to ensure that wisdom is never lost.

- **The University of Everbright**: One of the most prestigious academies in the world, this university is **dedicated to the pursuit of all forms of knowledge**—from philosophy to magic, from history to mathematics. The university's faculty and students view Thalor as the **patron of intellectual pursuits**, praying to him for insight before exams, experiments, or groundbreaking discoveries. The institution is often seen as the **intellectual heart of Thalor’s followers**, attracting scholars from across the land who seek his favor.

- **Arcanists of the Tower Eternal**: This group of **mages and arcane scholars** worship Thalor in conjunction with [[Arcarios]], as they believe that the divine partnership between **knowledge and magic** is key to unlocking the deepest mysteries of the cosmos. The Arcanists see Thalor as a mentor and guide in their magical studies, relying on his wisdom to interpret ancient spells and unravel the complex threads of arcane power.







## Affiliated Orders:
- **Order of the Tome**: A society of scholars and librarians dedicated to the preservation and dissemination of knowledge.
- **Council of Sages**: A group of wise advisors who offer counsel to rulers and leaders on matters of governance and policy.