---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Kataklysmos.png
pronounced: cat-a-clys-mos
aliases:
  - The Ruinous One, Lord of Anarchy, The Destroyer
alignment: Chaotic Evil
portfolio: Chaos, Destruction, Catastrophes, Anarchy
domains: Destruction, Fire
favored_weapon: Greatsword
symbol: An eight-pointed star
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
**God of Chaos and Destruction**

Kataklysmos is the God of Chaos and Destruction, embodying the primal and unpredictable forces that break down order, disrupt stability, and sow discord throughout the cosmos. His domain encompasses all forms of chaotic energy and destructive power, from natural disasters like earthquakes, storms, and volcanic eruptions to war, social upheaval, and the collapse of civilizations. In the cosmic hierarchy, Kataklysmos holds a crucial but often maligned position; he is the harbinger of change, the force that shatters stagnant structures, and the catalyst that compels all creation to confront its own fragility and impermanence.

He is regarded as a necessary, albeit terrifying, aspect of existence—feared by many, yet begrudgingly respected by those who understand that destruction can clear the way for new growth and transformation. Kataklysmos is not a deity who seeks worship in the traditional sense; rather, he thrives on the raw energy of chaos itself, finding power in the unpredictability and upheaval that he incites.

Kataklysmos is driven by the principles of entropy, transformation through destruction, and the breaking of established norms. He values chaos, unpredictability, and the inevitable collapse of all things. For him, destruction is not inherently evil but rather an essential force of existence that drives change and evolution. He believes that without destruction, there can be no true creation, and without chaos, there can be no progress. He holds contempt for stagnation, permanence, and order, seeing them as prisons that trap potential. Kataklysmos revels in tearing down what others build up, believing that from the ashes of destruction comes the raw material for something new, something different, and perhaps something greater.

Kataklysmos is a volatile and mercurial deity, driven by a relentless urge to disrupt and dismantle. He is capricious, unpredictable, and often inscrutable in his motives. His behavior can range from cold and calculating to wildly erratic, reflecting the chaotic forces he represents. At times, he is almost playful in his destruction, delighting in the irony or absurdity of certain events. At other times, he is a terrifying force of nature, unstoppable and all-consuming.

He interacts with mortals and other divine entities as an agent of upheaval, often provoking them to act against their own best interests, sowing discord, or instigating conflict. He may appear as a whisper in the ear of a king, sowing seeds of paranoia and mistrust, or manifest as a sudden storm that destroys crops and homes. Unlike many gods, he does not seek followers for worship; instead, he is drawn to those who embody chaos, conflict, and rebellion, often acting as a dark muse to the desperate, the mad, and the broken.

Kataklysmos is depicted as a dark and fearsome figure, often cloaked in shadows or surrounded by swirling storms and flames. His form is fluid and ever-changing, sometimes appearing as a towering figure of ash and smoke, other times as a whirlwind of sharp blades and jagged rocks. His eyes are often depicted as voids or as orbs of swirling chaos, reflecting his nature as an embodiment of disorder. His hands may appear as claws, tendrils of smoke, or skeletal remains, capable of ripping apart the very fabric of existence.

In mythology, Kataklysmos is often described as the "Breaker of Chains," the "Unmaker," and the "Endbringer." Stories frequently recount his acts of cataclysmic destruction, such as tearing down the mighty towers of the proud, sinking islands into the sea, or sparking wars that last for generations. His myths often serve as cautionary tales, reminding mortals and gods alike of the impermanence of all things and the folly of becoming too attached to what can so easily be undone.

Kataklysmos's symbols are the shattered tower, representing the fall of great structures and the whirling storm, symbolizing chaos and upheaval. A common motif associated with him is the crack or fracture, reflecting his nature as a disruptor of stability.  He often manifests as a sudden natural disaster—a burst of lightning, a crack in the earth, or a cyclone tearing through a city. He may also appear as a dark figure with shifting, indistinct features or as an ominous shadow that flickers like smoke or fire.

Kataklysmos is a god of immense, though often destructive, significance. He is a constant reminder of the impermanence of all things and the inevitability of change. While many fear or despise him, others see him as a necessary force for progress and transformation, even if his methods are violent and unpredictable. 

Kataklysmos’s influence is felt most keenly in times of crisis—during wars, plagues, famines, and natural disasters. His presence is a reminder of the fragility of existence and the ever-present potential

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
Kataklysmos and [[Zerathos]] are allies united by their shared desire to upend stability and disrupt order, but their methods and end goals often diverge. While Kataklysmos embodies purposeful destruction that clears the way for new growth, [[Zerathos]] revels in chaotic transformation without clear direction or purpose. This alliance has shaped Kataklysmos's principles by reinforcing the idea that chaos should have some kind of end or purpose. The collaboration between these two deities often leads to periods of intense upheaval, where structures and societies are both torn down and thrown into disarray. Currently, Kataklysmos and [[Zerathos]] work together to incite rebellion and discord in a mortal city-state, with Kataklysmos focusing on destroying the physical structures and societal norms, while [[Zerathos]] spreads madness among the ruling class. However, tensions simmer beneath the surface as Kataklysmos grows wary of [[Zerathos]]'s increasingly erratic behavior.
   
 [[Arcarios]] and Kataklysmos maintain a relationship of cautious neutrality. While [[Arcarios]] values the pursuit of knowledge, which often requires a certain level of order, he also understands that magic itself can be chaotic and unpredictable. He respects the role Kataklysmos plays in breaking down outdated structures, which can sometimes lead to new discoveries and innovations in magic. This neutrality has influenced Kataklysmos to occasionally tolerate the presence of magical societies, especially if they are pushing boundaries or experimenting in ways that could lead to chaos. In some cases, Kataklysmos has even spared certain arcane institutions, considering them useful catalysts for disruption. Kataklysmos has not directly acted against [[Arcarios]] but has been monitoring certain magical experiments that might yield explosive or destabilizing results. Should these experiments threaten to create a new, oppressive order, he may intervene.

### **Divine Rivalries and Adversaries**
[[Illyria]] stands in direct opposition to Kataklysmos. She represents the forces of creation, inspiration, and constructive progress, which is fundamentally opposed to the destruction and chaos that Kataklysmos brings. [[Illyria]] views Kataklysmos as a mindless force of entropy that threatens the fruits of creativity and invention. This rivalry has led Kataklysmos to embrace his role as the destroyer of false permanence and structures he perceives as confining or stagnant. It has driven him to actively undermine [[Illyria]]’s works, breaking down her creations to reinforce his belief that nothing is eternal. Kataklysmos is currently targeting several great cities known for their artistic and architectural wonders, sending natural disasters and inciting internal conflicts to disrupt their stability, counteracting [[Illyria]]’s efforts to foster a new renaissance of innovation and creativity.

Kataklysmos and [[Aurelius]] are mortal enemies. [[Aurelius]] represents law, order, and the stability of civilizations, standing as a bulwark against the very chaos that Kataklysmos seeks to unleash. [[Aurelius]] views Kataklysmos as a threat to peace, justice, and societal progress. Their conflict is a cosmic struggle between order and chaos, often manifesting in wars, political conflicts, and natural disasters in the mortal realm. Kataklysmos’s antagonism with [[Aurelius]] has hardened his stance against any form of order, making him more destructive and unyielding. Kataklysmos has inspired several factions to rise up against regimes that worship [[Aurelius]], sowing seeds of rebellion and discord. He has also unleashed devastating storms upon cities that are strongholds of [[Aurelius]]’s faith, directly challenging the order and law these cities uphold.

Kataklysmos views [[Elara]]’s focus on healing and renewal as a direct counter to his domain of destruction. However, he understands the necessity of life and renewal, even if he seeks to constantly challenge and test it through chaos. Their opposition has made Kataklysmos even more determined to prove that destruction is a fundamental and unavoidable force in the cycle of existence. [[Elara]]’s compassion and mercy stand in stark contrast to his indifferent stance, emphasizing his belief in survival of the fittest. Kataklysmos occasionally disrupts areas where [[Elara]]’s followers are most active, particularly during times of healing or recovery after a disaster. He sees this as a necessary reminder of life’s fragility.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## The Church
Kataklysmos preaches that chaos and destruction are necessary forces in the universe. Through destruction, there is renewal and change. He encourages his followers to embrace the chaotic aspects of life and to sow disorder wherever they go. His creed emphasizes the impermanence of all things and the inevitability of change through destruction.

The church of Kataklysmos is feared and respected. It attracts those who revel in chaos and destruction, including warriors, pyromancers, and those who have suffered great loss and seek to bring the same to others. Temples dedicated to Kataklysmos are often hidden in remote locations or within ruins, built from the remnants of destroyed structures. The clergy, known as Harbingers of Ruin, operate in a loose hierarchy, with titles such as Chaos Bringer, Destroyer Priest, and Anarchic High Priest.

### Hierarchy Titles
- Anarchic High Priest: The highest-ranking clergy member, overseeing major temples and guiding the church’s activities towards greater chaos and destruction.
- Chaos Bringer: Senior clergy who specialize in spreading disorder and inciting catastrophic events.
- Shadow: Covert operatives within the clergy who incite anarchy and rebellion in political and social structures.
- Desolation Keeper: Clergy who maintain the temples and sacred sites of Kataklysmos, ensuring they reflect his chaotic and destructive nature.

### Day-to-Day Activities
Followers of Kataklysmos engage in activities that promote chaos and destruction. This can include acts of sabotage, inciting riots, and waging war. They are expected to tithe spoils of destruction to their temples and perform sacrifices that reflect the chaos and ruin they worship. Priests are often involved in rituals that invoke destructive forces, aiming to disrupt the order and bring about change through catastrophe.

## Important Ceremonies/Holy Days
Kataklysmos's followers celebrate several unholy days, often coinciding with natural disasters or significant battles. The Cataclysmic Convergence, marking the anniversary of the great meteor impact, is the most significant. During this time, massive rituals and sacrifices are performed to honor their deity. Other holy days are more spontaneous, declared in the aftermath of significant destructive events, and involve revelry and ceremonies that celebrate the resulting chaos.

### Priestly Vestments and Adventuring Garb
Priests of Kataklysmos wear vestments that symbolize chaos and destruction. These are often ragged, scorched, or bloodstained robes in dark, ominous colors such as black, red, and purple. The materials are typically durable, designed to withstand the destructive environments in which they operate. Symbols of ruin and chaos are prominently displayed on their garments, often in the form of shattered icons or fiery emblems.

When adventuring, priests of Kataklysmos favor practical, rugged clothing that allows for mobility and protection. Their gear is often reinforced to withstand battle and environmental hazards. They carry symbols of their god, such as a miniature greatsword or a token representing chaos, to remind them of their destructive mission. Their attire is designed to strike fear into their enemies, embodying the chaos and ruin they bring.

## Notes

**Organizations and Influential Figures:**

1. **Cult of the Shattered World:**
   - **Perception of Kataklysmos:**  
     The cult sees Kataklysmos as a liberator and harbinger of inevitable change, believing that by embracing chaos and destruction, they can free themselves from the illusions of permanence and false stability.
   - **Roles and Influence:**  
     The cult actively seeks to dismantle political and social structures, inciting rebellions, revolutions, and acts of terrorism. They view themselves as instruments of Kataklysmos’s will, bringing necessary destruction to pave the way for new growth.
   - **Impact on Kataklysmos’s Interactions:**  
     The cult serves as a mortal extension of Kataklysmos’s desire to destroy order and stability. Their actions often draw his favor, and he may empower them with chaotic abilities or create opportunities for further upheaval.

2. **The Sowers of Discord:**
   - **Perception of Kataklysmos:**  
     This group venerates Kataklysmos as a force of cosmic balance. They believe destruction is necessary to clear the way for new beginnings and view themselves as catalysts for change, keeping societies from becoming stagnant.
   - **Roles and Influence:**  
     The Sowers of Discord operate in the shadows, using sabotage, espionage, and manipulation to bring about instability and chaos. They play a more covert role in Kataklysmos’s plans, acting as instigators and influencers rather than outright destroyers.
   - **Impact on Kataklysmos’s Interactions:**  
     Kataklysmos uses the Sowers of Discord to sow chaos more subtly, allowing him to affect change without overt displays of power. Their actions provide the groundwork for larger, more devastating events that he can capitalize on.

3. **The Ashen Vanguard:**
   - **Perception of Kataklysmos:**  
     A militant sect that views Kataklysmos as the only true god who understands the transient nature of all things. They believe in his divine right to reduce all existence to ash so that something new might emerge.
   - **Roles and Influence:**  
     The Ashen Vanguard takes a direct, violent approach, waging wars and razing cities in his name. They believe that through utter destruction, they bring about divine balance. They are known for their ruthless tactics and willingness to destroy themselves to serve their god’s will.
   - **Impact on Kataklysmos’s Interactions:**  
     The Ashen Vanguard acts as the sword of Kataklysmos, carrying out his most violent and direct interventions in the mortal realm. They are his enforcers, feared across the realms for their fanaticism and dedication to the god of chaos.

4. **The Defiled Architects:**
   - **Perception of Kataklysmos:**  
     This group sees themselves as anti-builders; they believe their purpose is to tear down every structure, both physical and societal, to its core. They view Kataklysmos as the ultimate critic, who rejects flawed creations.
   - **Roles and Influence:**  
     The Defiled Architects infiltrate cities, guilds, and temples, working from within to destabilize foundations—both literal and figurative. They aim to prove that everything built by mortals is inherently flawed and deserves to be undone.
   - **Impact on Kataklysmos’s Interactions:**  
     Their actions align with Kataklysmos’s principles, and he occasionally rewards them with visions of weak points in existing structures or knowledge of new, chaotic techniques for demolition.


**1. Followers and Organizations:**

- **The Cult of the Shattered World:**
  - **Perception of Kataklysmos:** This cult views Kataklysmos as a divine liberator, one who breaks the chains of oppressive order and reveals the truth of existence—that all things must end, and all structures must eventually fall.
  - **Role in Kataklysmos's Sphere of Influence:** The cultists act as agents of chaos, often inciting rebellion, causing destruction, or undermining social orders in his name. They believe that by spreading chaos and disorder, they are hastening the renewal of the world.

- **The Sowers of Discord:**
  - **Perception of Kataklysmos:** This group venerates Kataklysmos as a force of cosmic balance, believing that destruction is necessary to make way for new creation. They view themselves as instruments of fate, ensuring that nothing remains static for too long.
  - **Role in Kataklysmos's Sphere of Influence:** The Sowers of Discord manipulate events behind the scenes, setting into motion conflicts, crises, and catastrophes to keep societies from becoming stagnant. They serve as the hidden hand of chaos, guiding events toward upheaval.

