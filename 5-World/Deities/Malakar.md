---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Malakar.png
pronounced: Mal-a-car
aliases:
  - Corruptor, Decayed One
alignment: Neutral Evil
portfolio: Decay, Corruption, Rot, Plague, Disease
domains: |
  Plague
favored_weapon: Flail
symbol: A withered tree with blackened roots
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
**Malakar: God of Decay, Corruption, Rot, Plague, and Disease**

Malakar presides over the darker aspects of existence—decay, rot, plague, and disease. His influence extends to all that withers and decomposes, from the physical bodies of living creatures to the corrupting forces in nature and society. He is the embodiment of entropy and the inevitable breakdown of all things, making him a powerful and feared figure in the pantheon.

In the cosmic hierarchy, Malakar holds a position of dread but necessity. His domain is often viewed with revulsion, but mortals and gods alike understand that decay is a fundamental part of the cycle of life and death. Without decay, there would be no renewal, and corruption serves as a counterbalance to purity. Though he is often shunned by mortals, his power is immense, for disease and decay spare no one, touching all forms of life.

Malakar does not actively seek the destruction of all things, but his presence ensures that nothing remains untouched by time's corrupting hand. He embraces the natural cycle of death and decomposition and believes in the transformative power of rot, viewing it as a means for change—though rarely in a positive sense.

Malakar values inevitability and transformation through decay. In his view, nothing remains pristine forever, and all purity is eventually sullied. He teaches that those who resist change and fear death or corruption are misguided, for decay is the only true constant. His worshipers embrace the reality that life’s perfection is fleeting, and they believe that through corruption, new forms of existence can emerge—often darker and more twisted.

Interaction with mortals is marked by indifference or cruelty. Malakar does not care for the well-being of mortals and is often seen as a bringer of suffering. Plagues, epidemics, and rot are his gifts, manifestations of his presence in the world. He does not seek worship in the traditional sense, but those who serve him do so out of a morbid respect or desire for power over life’s inevitable decay. His followers may view him as a force to appease or a source of dark knowledge, granting them the ability to spread disease or manipulate decay for their own gain.

In some instances, Malakar might offer boons to mortals, such as immunity to disease or the ability to control the spread of rot. However, such gifts come at a price—usually a gradual loss of health or vitality, as the recipient slowly succumbs to the very forces they hoped to control.

Malakar is cold, detached, and patient. He does not need to rush, for he knows that time is on his side. Everything eventually succumbs to decay, and he is content to let the world rot at its own pace. He takes no joy in destruction, nor does he revel in the suffering of mortals, but he views such events as inevitable and necessary. His detachment can make him seem aloof or uncaring, though this is due to his belief in the futility of resistance against his influence. At times, Malakar may show a twisted sense of mercy, relieving suffering by hastening the decay of those who are dying or diseased. In other cases, he may draw out the process, prolonging agony as a reminder of life’s fragility. His behavior is unpredictable, and he values nothing beyond the certainty of corruption.

Malakar is often depicted as a skeletal figure or a corpse-like being covered in mold, fungi, and rot. His body appears partially decayed, with one half representing the skeletal remains of death, while the other half is still intact, albeit corrupted and diseased. His presence is often marked by swarms of insects, such as flies or maggots, feeding on the decay he fosters. Artists may portray him holding a withered staff, from which blackened vines or fungi sprout, symbolizing his ability to corrupt all forms of life.

In mythology, Malakar is known as a bringer of plagues and a harbinger of doom. His legends are often tales of entire cities or kingdoms being laid low by his influence, whether through blight, famine, or pestilence. He rarely appears to mortals directly but manifests in the slow decline of their surroundings, leaving behind ruined fields, diseased populations, and crumbling infrastructure. His name is whispered in fear, and many myths focus on attempts to stave off his influence through desperate measures. Religious texts dedicated to Malakar emphasize decay as a natural part of life’s cycle, encouraging his followers to embrace disease and rot as pathways to transformation. Some darker sects even teach that the act of corrupting others—either through poisoning, spreading disease, or destroying structures—brings one closer to Malakar’s essence.

Malakar’s primary symbol is a withered, rotting tree, often depicted with fungi or mushrooms growing from its bark. This represents the slow process of decay and the fertile ground that rot creates for new, albeit twisted, forms of life. Another common symbol associated with Malakar is a swarm of flies or locusts, representing his dominion over pestilence and corruption. His sacred color is a sickly green, often associated with mold or rot, and his followers use this hue in their rituals and symbols. Some cults also use bones or decayed objects as holy relics, believing that such items are imbued with Malakar’s power. Manifestations of Malakar’s presence are subtle but horrifying. A village stricken by sudden disease, crops that rot overnight, or a well that becomes poisoned are all seen as signs that Malakar has touched the area. His rare direct manifestations might take the form of a decaying animal or a sickly figure who spreads plague in their wake.

Malakar is a counterbalance to gods like [[Elara]], the goddess of Life and Renewal. While [[Elara]] fosters growth and healing, Malakar ensures that all things eventually succumb to decay. This dichotomy places him in opposition to the forces of life and purity, though his role is crucial in the cosmic cycle. His influence is often seen in times of great suffering or upheaval, when disease and corruption run rampant. Though feared, Malakar’s presence in the pantheon is necessary. Without decay, the world would stagnate, and new growth would never occur. He embodies the darker side of nature, ensuring that nothing remains eternal and that all things must eventually return to the earth.

Malakar’s influence on mortal life is pervasive yet often unseen until it is too late. He represents the slow, creeping forces of decay that destroy civilizations, individuals, and ecosystems. Even those who do not worship him must acknowledge his power, for no one can escape the inevitable reach of corruption and rot.

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
Malakar and [[Zerathos]] share a deep connection as both represent forces of entropy and transformation. While [[Zerathos]] embodies chaotic and unpredictable change, Malakar is the inevitable decay that follows. Together, they form a dark synergy that perpetuates destruction and renewal in a grotesque manner. Their relationship is one of mutual respect, as they understand that each complements the other’s role in the cosmic balance. The spread of madness often leads to the collapse of order, providing the fertile ground for Malakar’s rot and decay to take hold.
  
[[Kataklysmos]] and Malakar are not directly allied, but their domains often overlap. Chaos breeds destruction, which in turn fosters the spread of disease and corruption. While [[Kataklysmos]] revels in sudden, explosive destruction, Malakar’s rot is slower, more insidious. They are not companions, but they frequently benefit from each other's work, particularly in cataclysmic events where widespread decay follows mass destruction.

Surprisingly, Malakar and [[Illyria]] have a paradoxical relationship. While [[Illyria]] fosters creation and innovation, Malakar’s decay is often a necessary part of her creations being recycled and transformed. Some myths suggest that [[Illyria]] sees Malakar as a necessary evil, for without destruction and decay, the world would stagnate. [[Illyria]]’s creations are often born anew from the remnants of what Malakar has rotted away, forming a cyclic partnership of decay and rebirth. 

### **Divine Rivalries and Adversaries**
As the embodiment of life, healing, and renewal, [[Elara]] stands as Malakar’s most profound opposite. Their relationship is defined by eternal opposition, as [[Elara]] works to protect life and restore what decays, while Malakar corrupts and rots everything she nurtures. They are locked in a constant struggle, with Malakar spreading disease and rot, and [[Elara]] healing and restoring vitality. The tension between them represents the balance of life and death in the world. Their rivalry shapes the mortal realm, as healing magic and disease constantly battle for dominance.

Malakar’s principles of decay and corruption clash with [[Aurelius]]’ ideals of order and structure. Where [[Aurelius]] represents stability, civilization, and law, Malakar embodies the forces that break down those structures. Their interactions are often hostile, with [[Aurelius]] viewing Malakar as a threat to all forms of order. Civilizations that fall into corruption and decay are seen as failures of [[Aurelius]]’ influence and victories for Malakar. This opposition has led to a historical enmity between their followers, with clerics of [[Aurelius]] often fighting against the corrupting forces of Malakar’s plagues and rot.

[[Lysandra]] represents the duality of light and darkness, whereas Malakar represents a force that corrupts and decays both. She holds no direct enmity toward Malakar but sees his influence as a threat to the balance of cosmic forces. Her stars, moons, and sunlight are symbols of hope and renewal, while Malakar's rot festers in the dark places beyond her light. Their relationship is more one of tension than direct hostility, as [[Lysandra]] seeks to illuminate what Malakar tries to consume in shadows and decay.

### **Shaping of Malakar’s History and Principles:**
Malakar’s relationships with these deities have deeply influenced his role in the cosmos. His ongoing rivalry with [[Elara]] represents the eternal cycle of life and death, where rot and disease are seen as natural elements of existence. His enmity with [[Aurelius]] reveals his disdain for the rigidity of civilization and structure, preferring the chaos that emerges when order breaks down. His connection with [[Zerathos]] and [[Kataklysmos]] has driven him to embrace the role of a destroyer, while his strange relationship with [[Illyria]] shows that even decay has a place in the renewal of creation. Malakar’s principles of inevitable decay are reinforced by these relationships, as he sees the struggles of life and order as temporary and futile. His belief in the inevitability of entropy has only deepened through his interactions with his divine adversaries.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## The Church
Malakar's teachings focus on the inevitability of decay and the power found in corruption. His followers are taught to embrace the rot and spread corruption, believing that decay is a natural and powerful force. Corruption is seen as a means to achieve power, with the decay of morals, bodies, and structures being the true path to dominance. Malakar teaches that everything, no matter how pure, will eventually succumb to rot.

The Church of Malakar operates in hidden, decayed locations such as abandoned buildings, diseased swamps, and underground catacombs. Temples are adorned with symbols of rot and pestilence, serving as centers for dark rituals and the spreading of corruption. The clergy, known as Corruptors, revel in the spread of decay and the manipulation of life into states of corruption.

### Hierarchy Titles
- **High Corruptor:** The supreme leader of the church, responsible for orchestrating grand rituals of decay and spreading Malakar's influence.
- **Blightmaster:** Senior clergy skilled in the dark arts of pestilence and corruption, responsible for training new initiates and overseeing the spread of disease.
- **Rotpriest:** Clergy who specialize in the manipulation of rot and decay, often acting as agents of corruption within communities.
- **Decaywarden:** Clergy tasked with maintaining the places of rot and ensuring the spread of corruption within and beyond the church's influence.

## Day-to-Day Activities
Followers of Malakar engage in activities that promote decay and corruption. They perform dark rituals to spread disease, corrupt living beings, and rot the foundations of society. Offerings to Malakar include diseased plants, corrupted artifacts, and successful acts of corruption and decay.

## Important Ceremonies/Holy Days
- **The Night of Rot:** Celebrated during the longest night of the year, where followers invoke Malakar's blessings to spread powerful diseases and rot.
- **The Rite of Corruption:** A ceremony where followers pledge themselves to Malakar by corrupting something pure, symbolizing their dedication to decay.
- **The Eclipse of Decay:** Held during solar eclipses, when the power of decay is believed to be at its peak, allowing for powerful rituals of corruption.

## Affiliated Orders
- **The Order of the Blight:** An elite group of corruptors who spread disease and decay, often serving as the vanguard for Malakar's influence.
- **The Rotting Hand:** A group of assassins and spies who use corruption and decay to destabilize and weaken their enemies.

## Priestly Vestments
Priests of Malakar wear tattered, rotting robes adorned with symbols of pestilence and decay. Their attire is designed to reflect the god's dominion over rot and corruption. They often wear masks made of bone or wood, symbolizing their connection to the decay of life and nature. Their vestments are often infused with diseased plants and corrupted materials, enhancing their aura of corruption.

## Adventuring Garb
In their adventuring garb, priests of Malakar favor practical clothing that allows for ease of movement and the spreading of corruption. They wear enchanted cloaks that grant them resistance to disease and enhance their abilities to corrupt their surroundings. Flails are their weapon of choice, chosen for their symbolic connection to the spreading of decay and their effectiveness in combat. Their gear is often imbued with necrotic energies, enhancing their ability to spread rot and corruption.

## Notes




### **Mortal Organizations and Followers:**

#### **The Cult of the Withered Tree:**
The most prominent organization dedicated to Malakar is the **Cult of the Withered Tree**, which views rot and decay as the true, unavoidable fate of all life. They venerate Malakar as the god who strips away the illusion of immortality and reveals the beauty in decay. The cult often works in secret, spreading diseases, corrupting crops, and infiltrating governments with the intent of hastening the downfall of societies. They believe that Malakar’s gift of decay is not to be feared but embraced, as it leads to transformation and renewal.

The cult often includes necromancers, plaguebearers, and those who seek to manipulate the forces of rot. They see themselves as shepherds of decay, bringing Malakar’s teachings to those who resist the natural cycle. While many view them as a destructive force, they believe they serve a higher purpose in spreading decay to reset the balance of life.

#### **The Fungal Cabal:**
A more clandestine group of Malakar’s followers is known as **The Fungal Cabal**, an order of druids and alchemists who worship decay in a more naturalistic sense. They view Malakar as a god of decomposition that fosters rebirth through the nutrients of death. These druids cultivate mushrooms, fungi, and other forms of rot, believing that these represent the continuation of life through death. They also work to hasten the decay of unnatural creations, such as constructs, cities, and manufactured goods, viewing these as obstacles to the natural cycle.



