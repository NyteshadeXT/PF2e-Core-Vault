---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Zerathos.png
pronounced: Zer-a-thos
aliases:
  - Lord of Madness, Harbringer of Change
alignment: Chaotic Neutral
portfolio: Madness, Change, Mutation, Chaos, Transformation
domains: Change, Abomination
favored_weapon: Warhammer
symbol: Twisted spiril
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
**Zerathos, the God of Madness and Change**
Zerathos represents the chaotic and unpredictable aspects of existence, embodying both the creative and destructive potential of transformation. As a deity, Zerathos inhabits a liminal space between order and chaos, governing the forces that disrupt established structures, beliefs, and realities. His domain encompasses not only mental instability and irrationality but also the transformative power of upheaval, revolution, and metamorphosis.

Zerathos occupies a unique role in the cosmic hierarchy as a god whose power lies in destabilizing the status quo. While other gods may represent stability, structure, or clear moral frameworks, Zerathos thrives in ambiguity and flux. He is neither fully malevolent nor benevolent, but rather a chaotic force whose influence brings change—often through unsettling, unpredictable, and sometimes violent means. He holds sway over madness, where the boundaries between reality and delusion blur, and over change, whether it is the gradual evolution of ideas or sudden cataclysmic upheaval.

Zerathos operates on the fringes of divine society, often interacting with other gods in ways that disrupt their carefully laid plans. His power is feared and respected, though rarely understood. While some deities might seek to limit or contain his influence, they are often reminded that his presence is necessary for growth, innovation, and renewal—even when it comes at a terrible cost.

The principles of Zerathos are paradoxical, reflecting the inherent contradictions of his nature:
- **Change as a constant**: Zerathos embodies the belief that nothing is permanent, and all things must change—whether through evolution or destruction.
- **The beauty of madness**: Where others see madness as a curse, Zerathos views it as a gateway to new perspectives and untapped creativity. He encourages embracing chaos, even when it leads to instability or suffering.
- **Subversion of the norm**: Zerathos revels in the breakdown of societal structures and established norms. He seeks to shatter conventional wisdom, bringing about revolution and transformation in both mortal and divine realms.
- **Freedom through chaos**: Zerathos teaches that true freedom comes from breaking free of rigid control. Madness, while dangerous, is a form of liberation from the confines of reality and reason.

Zerathos’ interactions with mortals are often disruptive, but also filled with unexpected opportunities for growth and transformation. He influences artists, revolutionaries, mystics, and madmen, often driving them to create, rebel, or explore the unknown. His touch is seen in moments of great inspiration but also in periods of chaos and mental breakdown. To the devout, Zerathos offers visions and revelations that can both enlighten and destroy. His boons often come with a price—clarity wrapped in madness, or change accompanied by pain.

In the realm of the divine, Zerathos is an unpredictable figure. He is neither loyal nor treacherous, acting on whims and impulses that make alliances with him precarious. Gods of order, law, and stability often view him with suspicion or outright hostility. However, deities associated with chaos, destruction, or transformation may find him an occasional ally, though they never fully trust him.

Zerathos is erratic, impulsive, and mercurial in behavior. His moods and actions can shift in an instant, reflecting his nature as a god of change. He may appear benevolent one moment, offering insight and revelation, only to plunge his followers into madness or upheaval the next. He does not adhere to moral absolutes, instead seeing existence as a fluid, ever-shifting reality where change is the only constant. His motivations are complex and often beyond comprehension, even to those who worship him.

One of Zerathos’ most distinctive traits is his fascination with the human mind and the ways it can be unraveled. He enjoys pushing mortals to their mental limits, testing how far they can go before they break or emerge transformed. He is also drawn to moments of great change in the mortal world—revolutions, societal collapses, and personal epiphanies all hold his interest.

Zerathos is often depicted as a figure whose form is constantly shifting, never fixed in one appearance. Artists render him as a being of many faces, each one representing a different aspect of his chaotic nature—some beautiful, others grotesque. His body might morph between humanoid and monstrous forms, emphasizing his association with unpredictability and metamorphosis. In religious texts, Zerathos is portrayed as both a trickster and a visionary. Myths often describe him as a bringer of madness who also gifts individuals with insights that change the course of history. His actions are rarely straightforward, often leaving mortals and gods alike confused by his true intentions. However, even in his most destructive moments, he is credited with sparking necessary change, even if it comes at a high cost.

Zerathos’ sacred symbols are often abstract and difficult to interpret, reflecting his inscrutable nature. The spiral, a symbol of transformation and cyclical change, is frequently associated with him. Broken mirrors or fractured glass are also common symbols, representing the shattered boundaries between reality and madness. Manifestations of Zerathos are typically strange and unsettling. He might appear as a swirling mass of shifting forms, his voice a cacophony of contradictory whispers and shouts. His presence is often heralded by bizarre phenomena—changes in the environment that defy logic, sudden shifts in mood or perception, or outbreaks of madness in those nearby. Religious texts dedicated to Zerathos are known for their cryptic nature, often written in riddles or abstract symbols that require intense mental focus (or the acceptance of madness) to decipher. His temples are places of disarray, filled with strange sculptures and chaotic art that reflect the unpredictability of his influence.

Zerathos is a necessary force in the pantheon, representing the inevitable disruptions that lead to transformation. While feared by many, he is also respected for his role in breaking stagnation and prompting growth, albeit through painful or disorienting means. His influence ensures that no system, belief, or being remains static, and his presence looms over moments of great upheaval or revelation.

In the mortal world, Zerathos is both revered and feared. Those who worship him often do so with a sense of awe and terror, knowing that his gifts can bring enlightenment or madness, prosperity or ruin. Revolutionaries, visionaries, and the mentally unhinged are drawn to him, seeking to tap into his chaotic power to change the world or themselves. However, even his most devoted followers know that Zerathos is a dangerous deity whose favor is as unpredictable as the madness he spreads.

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
Zerathos and [[Kataklysmos]] share a deep connection due to their mutual association with chaos and unpredictability. While [[Kataklysmos]] is the embodiment of raw, destructive force, Zerathos revels in the mental and spiritual upheaval that follows such devastation. Their relationship is one of respect for their shared dominion over disruption, with [[Kataklysmos]] providing the chaos that Zerathos turns into madness and new forms. Together, they represent the destructive and creative aspects of chaos.
  
[[Elara]] may seem an odd ally for Zerathos, but their connection lies in their shared domain over transformation. While [[Elara]] represents the healing and renewal of life, Zerathos views madness as a transformative force for those who can survive it. Their relationship is one of tension, as [[Elara]] seeks to mend and renew what Zerathos often breaks, but they share a grudging respect for each other's roles in the cosmic cycle of death and rebirth.

### **Divine Rivalries and Adversaries**
The god of order is the direct antithesis of Zerathos. Where [[Aurelius]] stands for structure, laws, and the maintenance of civilization, Zerathos seeks to dissolve those very systems. Their rivalry is ancient and deeply rooted in their opposing philosophies. [[Aurelius]] views Zerathos as a destructive force that threatens civilization’s stability, while Zerathos sees [[Aurelius]] as a stagnant force that resists the necessary chaos of change. Their clashes often play out in mortal realms, where Zerathos' cults work to undermine structures that [[Aurelius]]' followers work tirelessly to build.

Though they both value the pursuit of truth, Zerathos and [[Thalor]] represent opposite approaches. [[Thalor]] seeks wisdom through logic, learning, and reason, while Zerathos values knowledge gained through madness, intuition, and the breakdown of the rational mind. They are philosophical rivals, with [[Thalor]] viewing Zerathos as a corrupter of the mind, and Zerathos mocking [[Thalor]]’s rigid adherence to reason as a limitation to true enlightenment.

[[Aegis]] stands as one of Zerathos’ most vocal adversaries, representing a force that shields mortals from the chaos and madness that Zerathos spreads. [[Aegis]] sees Zerathos as an existential threat to the safety and mental well-being of mortals. Their conflict is one of preservation versus corruption, with [[Aegis]] working to protect minds and structures from Zerathos' influence, while Zerathos seeks to break those very protections.

While [[Valorus]] and Zerathos might seem like potential allies due to their shared affinity for conflict, they are bitter enemies. [[Valorus]] believes in disciplined, honorable warfare, while Zerathos brings madness to the battlefield, turning soldiers into berserkers or causing disarray in armies. Zerathos finds the chaos of war appealing but despises [[Valorus]]' structured, controlled approach to combat. Their clashes often manifest in battles between disciplined soldiers and mad zealots.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## The Church
Followers of Zerathos embrace change in all its forms, viewing madness as a path to enlightenment. They believe that true wisdom comes from breaking free of societal norms and embracing the chaos within and around them. Transformation, whether physical, mental, or spiritual, is seen as the highest form of worship. Stability is an illusion, and the only constant is change.

The Church of Zerathos is as unpredictable as the deity himself. Temples can range from grand, labyrinthine structures to temporary camps that move with the whims of their leaders. The clergy, known as the Shattered, are often seen as mad by outsiders but are revered within the church for their deep connection to Zerathos's chaotic nature.

### Hierarchy Titles
- **Harbinger of Whispers:** The highest-ranking clergy member, guiding the church through visions and signs of change.
- **Mindshaper:** Senior clergy who delve into the depths of madness, guiding others through transformative experiences.
- **Chaos Herald:** Clergy who spread Zerathos's influence by initiating change and disruption in established systems.
- **Fractureborn:** Clergy responsible for maintaining the chaotic energy of the church, often through rituals and ceremonies.

### Day-to-Day Activities
The Shattered engage in rituals that embrace chaos and transformation, often involving substances that alter perception or induce madness. They work to disrupt established orders, believing that through destruction comes rebirth. Tithes to the church often take the form of personal sacrifices, be it sanity, stability, or treasured belongings, symbolizing the embrace of change.

### Important Ceremonies/Holy Days
- **The Spiral Dance:** Held during eclipses, followers dance in wild, unpredictable patterns, embracing the chaos of the celestial event.
- **The Night of Fractures:** A ceremony where followers break and remold objects, symbols of their own transformation and the constant change they worship.
- **The Madness Revel:** A time of feasting and wild celebration, where followers indulge in mind-altering substances and embrace their inner madness.

### Priestly Vestments and Adventuring Garb
Priests of Zerathos wear robes adorned with fractal patterns and shifting colors, symbolizing the ever-changing nature of their deity. Masks that depict distorted, ever-shifting faces are common, reflecting the madness they embrace. High-ranking priests may wear cloaks or garments enchanted to constantly change their appearance.

In their adventuring garb, priests of Zerathos favor clothing that allows for freedom of movement and unpredictability in combat. Patchwork armor made from a variety of materials, often scavenged or transformed, is typical. They carry weapons that symbolize their chaotic nature, such as warhammers or flails, and often use tools and artifacts that can induce madness or cause unexpected effects.
## Notes





### **Influential Mortal Organizations and Figures**

#### **Cults of Zerathos**
The mortal worship of Zerathos is as fragmented and unpredictable as the deity himself. His followers are often drawn from those who have experienced great personal upheaval—whether mental, emotional, or societal. These cults tend to operate in the shadows, attracting individuals who seek change, or those who have fallen into madness and see Zerathos as a source of truth beyond reason. There are no large temples dedicated to Zerathos; instead, his worshipers gather in secret, often in locations where madness has taken hold, such as abandoned places, ruins, or sites of historical upheaval.

- **The Whispered Minds**: One of the most prominent sects of Zerathos' followers, the Whispered Minds believe that true knowledge can only be gained by embracing madness. They perform rituals that involve sensory deprivation and hallucinogens, attempting to push the mind beyond its limits. They are often sought by those desperate for answers that cannot be found through traditional means of learning. Many go mad in their pursuits, but those who survive their experiences with the Whispered Minds often become prophets or oracles.

- **The Order of the Shattered Mirror**: This cult believes that Zerathos’ touch is a gift that allows one to see the truth hidden behind the illusion of reality. They revere broken mirrors as sacred objects and seek to “shatter” the minds of others to help them attain enlightenment. They are known for spreading chaos in stable societies, instigating rebellions, and sowing discord wherever they can. Their influence is particularly dangerous in political circles, where they work to destabilize governments and usher in periods of great upheaval.

#### **Influential Figures**
- **The Prophet of Echoes**: A mortal who claims to have been driven mad by a direct vision of Zerathos, the Prophet of Echoes is both feared and revered in equal measure. Speaking in cryptic riddles, the Prophet has amassed a following of zealots who believe that their master’s words contain hidden knowledge about the future of the world. They wander from city to city, spreading Zerathos’ influence through whispers, visions, and violent upheaval.

- **Lorana the Shifter**: Once a scholar devoted to [[Thalor]], Lorana’s encounter with Zerathos left her mind forever altered. She abandoned her studies of logic and wisdom, instead embracing the unpredictable nature of change. Now known as “the Shifter,” Lorana travels the world, bringing change wherever she goes. Her motives are unclear, and she appears in cities or nations seemingly at random, always preceding a period of upheaval or transformation. Some view her as a prophet of Zerathos, while others see her as a harbinger of destruction.






### Affiliated Orders
- **The Order of the Vortex:** An elite group of chaos warriors who serve Zerathos directly, often tasked with missions to disrupt and transform other societies.
- **The Mad Seers:** A network of prophets and visionaries who use their madness to foresee changes and guide the church accordingly.