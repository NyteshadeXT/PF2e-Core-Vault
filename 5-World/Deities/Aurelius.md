---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Aurelius.png
pronounced: O-rail-e-us
deitypower: Greater God
portfolio: Order, Justice, Civilization, Leadership, Rulership
domains: |
  Protection, Knowledge, Cities
symbol: Scales of justice
favored_weapon: Warhammer
aliases:
  - The Just Arbiter, Lord of Order
alignment: Lawful Good
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
**God of Order, Justice, Civilization, Leadership, and Rulership**

Aurelius is the divine embodiment of order, justice, and the structure of civilization. His domain encompasses all aspects of leadership, governance, and the laws that bind society together. As the ultimate arbiter of justice and the architect of civilization, Aurelius wields power over all systems of governance, from the smallest village council to the grandest empires. He has dominion over laws, courts, and the leaders who enforce them, and his influence is felt in every aspect of societal order, from the crafting of laws to the meting out of punishment. His powers manifest in various ways: the ability to enforce justice, establish and dissolve governments, bestow wisdom and authority upon rulers, and inspire unity and discipline among his followers. Aurelius is said to have the power to fortify the walls of cities, strengthen the resolve of armies, and protect the innocent while condemning the guilty. His influence ensures that order is maintained and justice prevails.

Aurelius holds a prominent position in the cosmic hierarchy as a pillar of stability and law. He is often seen as the counterbalance to the more chaotic deities, particularly [[Kataklysmos]], the God of Chaos and Destruction. Aurelius’ role is that of the judge, ruler, and enforcer of cosmic balance. His presence is crucial in maintaining harmony among the divine and mortal realms, preventing the forces of chaos from overwhelming the structures of civilization and order. Other gods respect him for his unwavering commitment to justice and order, and he is often called upon to mediate disputes among the divine.

Aurelius embodies the principles of law, justice, leadership, and the rule of order. He values fairness, discipline, and the proper exercise of authority. Aurelius teaches that a well-ordered society is essential for the prosperity of all and that laws must be created and enforced to maintain the balance between freedom and security. He believes in the inherent goodness of a structured civilization, where every person knows their place and fulfills their duties for the greater good.

His core values include:
- **Justice:** The fair and impartial treatment of all individuals, with punishment for the guilty and protection for the innocent.
- **Leadership:** The idea that true leadership is a sacred duty, and rulers are entrusted to serve their people with wisdom, strength, and integrity.
- **Order:** The belief that order must be maintained at all costs, as chaos is the enemy of civilization and progress.
- **Duty:** The notion that every person has a role to play in the greater framework of society, and fulfilling one's duty is a divine mandate.
- **Civilization:** The development and sustenance of culture, governance, law, and all aspects of organized society.

Aurelius is an active deity who frequently involves himself in mortal affairs, particularly in matters of justice, governance, and leadership. He is known to appear in moments of great crisis to provide counsel or aid to leaders who call upon him in good faith. Aurelius favors those who uphold justice, defend the innocent, and maintain order in their realms. His followers often see him as a guiding hand in their decisions and a protector against corruption and tyranny.

Among the divine, Aurelius is respected for his authority and sense of fairness. He often takes on the role of mediator, ensuring that the gods adhere to their agreements and that conflicts do not escalate beyond control. He is known to have a complicated relationship with deities who represent chaos or defiance, like [[Kataklysmos]], and a cautious alliance with gods who share his desire for order but differ in methods, such as [[Arcarios]].

Aurelius is typically portrayed as a stern, commanding presence who is unwavering in his convictions. He is dignified and just, holding himself to the highest standards of conduct and expecting the same from others. Aurelius is not swayed by emotion or sentimentality; his decisions are always guided by principles of law and fairness. He is patient and methodical, often taking the time to weigh all sides of an argument before rendering a judgment. However, he is also firm and unyielding when it comes to enforcing justice or maintaining order, believing that the ends justify the means if it serves the greater good of civilization.

In art, Aurelius is typically depicted as a regal figure, clad in gleaming armor or robes of deep crimson and gold, symbolizing his authority and role as a protector of order. He often holds a scepter or a scales of justice in one hand and a sword in the other, representing his dual role as both judge and enforcer. His face is usually portrayed as calm, stern, and resolute, with eyes that seem to pierce through deception and falsehood. Mythology often portrays Aurelius as the founder of the first cities, the drafter of the first laws, and the divine adviser to mortal kings and queens. He is said to have gifted humanity with the concepts of justice and governance, guiding early civilizations in their growth and development. Many tales recount how Aurelius descended from the heavens to preside over important trials, arbitrate disputes between gods or mortals, or help restore order during times of great turmoil.

Aurelius’ most prominent symbol is the *Scales of Justice*, representing fairness, balance, and the impartial application of the law. Aurelius is known to manifest in a variety of forms, often as a noble figure bathed in golden light, with an aura of authority that commands respect and reverence. His voice is said to be deep and resonant, carrying the weight of a thousand verdicts. In moments of great need, he has appeared as a warrior in radiant armor, wielding a sword that burns with divine fire, or as a towering judge, his robes shifting like marble and gold.

Aurelius holds significant sway over the concepts of order and governance in both the divine and mortal realms. His influence is evident in the laws that govern societies, the leaders who rise to prominence, and the structures that uphold civilizations. Temples dedicated to Aurelius often serve as courts, centers of governance, or training grounds for future leaders. His followers include judges, lawmakers, rulers, soldiers, and anyone who serves to uphold order and justice.

Aurelius' network of relationships and followers has shaped his history and current actions. His alliances with other gods of order, justice, and protection solidify his role as a stabilizing force in the pantheon, while his opposition to chaotic deities like [[Kataklysmos]] drives him to constantly defend against the forces that would disrupt the balance he seeks to maintain. His worshipers, from the judges and warriors to the statesmen and leaders, ensure that his values are reflected in the societies they govern and protect. Through them, Aurelius maintains his vigilance over the mortal realm, ensuring that order and justice continue to prevail in a world constantly threatened by chaos and disorder.

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
Aurelius shares a close alliance with [[Elara]], as both deities value the sanctity of life and the preservation of order within the natural and societal realms. They often work together to maintain balance between justice and mercy. This friendship emphasizes Aurelius' understanding that true justice must include compassion and mercy, recognizing that healing and renewal are essential parts of maintaining a just society. Aurelius often collaborates with [[Elara]]'s followers to provide aid in areas afflicted by disease, war, or famine, ensuring that justice is tempered with empathy. Temples of Aurelius are sometimes also places of healing, reflecting this shared value.

Aurelius and [[Aegis]] share a strong bond based on their mutual commitment to defending the innocent and maintaining order. While Aurelius provides the law and structure, [[Aegis]] ensures that these are safeguarded against internal and external threats. This alliance reinforces Aurelius’ role as a guardian of civilization, stressing that justice is meaningless without the ability to protect the structures and lives it governs. Aurelius often calls upon [[Aegis]]’ followers in times of crisis to protect cities and fortresses under siege or to guard important judicial events and trials. Their combined forces have thwarted many invasions by chaotic or destructive entities.

[[Thalor]] and Aurelius have a scholarly friendship founded on a shared respect for wisdom, law, and the pursuit of knowledge. Aurelius relies on [[Thalor]]'s wisdom to ensure that his judgments are informed and just. This relationship strengthens Aurelius’ belief that a fair society is one that values wisdom and knowledge as much as justice, promoting education and enlightenment alongside law. Temples dedicated to Aurelius often feature libraries or schools, where the laws of the land are studied alongside philosophy and history. The two gods' followers frequently collaborate to educate rulers and leaders in both law and knowledge.

### **Divine Rivalries and Adversaries**
[[Kataklysmos]] stands as Aurelius' greatest adversary. The two deities represent diametrically opposed forces: order versus chaos, creation versus destruction. [[Kataklysmos]] seeks to unmake what Aurelius builds, tearing down the structures of civilization in favor of anarchic freedom. This rivalry has shaped Aurelius into a vigilant and unyielding force, constantly on guard against the spread of chaos. He has become more authoritarian in his stance, believing that even a small crack in the order could lead to chaos overrunning the world. Aurelius often sends his followers to hunt down cults of [[Kataklysmos]] or to restore order in regions ravaged by disasters, natural or otherwise. His followers, particularly the Legion of the Iron Crown, are vigilant against chaos cultists and revolutionaries.

Aurelius and [[Zerathos]] are locked in a conflict that centers on their fundamental philosophies. Where Aurelius stands for order and stability, [[Zerathos]] embodies change, unpredictability, and the breaking of boundaries. This rivalry has further entrenched Aurelius in his belief that change must be controlled and gradual, governed by law, and never allowed to devolve into madness or unrestrained transformation. Aurelius' followers often clash with the cults of [[Zerathos]], especially in urban centers where sudden change or instability threatens the established order. His clergy often serve as mediators, ensuring that changes within societies happen through lawful means rather than chaotic upheaval.

Aurelius shares a nuanced relationship with [[Arcarios]], marked by both respect and wariness. Aurelius sees magic as a powerful tool for maintaining order and enforcing laws, but he is wary of [[Arcarios]]' emphasis on personal power and the unpredictable nature of arcane forces. This relationship has led Aurelius to advocate for regulation of magic use, establishing laws governing arcane practices to prevent misuse or chaos. Aurelius’ followers often work with those of [[Arcarios]] to ensure that magic is used responsibly. However, they also act as regulators, creating laws and guidelines for the use of magic within society. In cities under Aurelius' influence, magic users may need permits or licenses to practice, and their actions are monitored closely.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## The Church
Aurelius teaches that laws are the foundation of a stable society and must be upheld above all else. Justice must be delivered impartially, and the rule of law must be maintained to ensure the prosperity of civilization. Followers are encouraged to seek knowledge, protect their communities, and act as arbiters of justice in their daily lives.

The Church of Aurelius is highly respected and influential in many civilized regions. Temples are often grand structures situated at the hearts of cities, symbolizing the central role of law in society. Worshipers of Aurelius are often, but not only, judges, law enforcers and paladins. Clergy members are known as Judges, Sentinels, and Scribes, each fulfilling specific roles within the church hierarchy. Judges oversee legal matters and adjudicate disputes, Sentinels protect the community and enforce the law, while Scribes maintain records and pursue knowledge.

### Hierarchy Titles
- **High Justicar**: The highest-ranking clergy member in a given region.
- **Judge**: Senior clergy responsible for significant legal and religious decisions.
- **Sentinel**: Clergy dedicated to protecting the community and enforcing laws.
- **Scribe**: Clergy who maintain records, study laws, and teach others.

### Day-to-Day Activities
Members of the Church of Aurelius are involved in various activities, including administering justice, advising rulers, teaching the principles of law and order, and protecting the community. They are expected to tithe a portion of their income to the church and offer sacrifices of time and effort to maintain societal order.

### Important Ceremonies/Holy Days
- **Day of Judgement**: An annual event where major legal disputes are resolved and justice is celebrated.
- **Founding Day**: Commemorating the establishment of laws in various regions.
- **Lawgiver's Vigil**: A time of reflection and study, where followers renew their commitment to Aurelius's teachings.

### Priestly Vestments and Adventuring Grab
Priests of Aurelius wear robes of white and gold, symbolizing purity and justice. Judges wear elaborately embroidered robes during ceremonies, while Sentinels don more practical garments for enforcement duties. Scribes often wear simpler, functional attire suitable for their scholarly pursuits.

Clerics of Aurelius in the field typically wear sturdy, practical armor adorned with the symbol of a balanced scale. This garb reflects their dual role as protectors and enforcers of law, allowing them to carry out their duties effectively even in dangerous environments.

## Notes


**6. Key Influential Figures:**

- **Justicar High Arbiter Seraphine Valtoris:**
  - **Role:** The head of the Order of the Golden Scales, known for her unparalleled wisdom and strict adherence to Aurelius’ principles. She serves as a chief judge in several realms and advises many rulers.
  - **Perception of Aurelius:** Sees Aurelius as the embodiment of perfect justice. Believes her role is to enact his will with absolute fairness, devoid of personal bias.
  - **Impact:** Seraphine’s influence has led to several reforms in mortal justice systems, bringing many societies closer to Aurelius’ ideals.

- **General Marcus Tyran of the Iron Crown:**
  - **Role:** The commanding general of the Legion of the Iron Crown, Marcus is known for his military prowess and unwavering loyalty to Aurelius. He has led campaigns against chaos cultists and rogue elements seeking to undermine civilization.
  - **Perception of Aurelius:** Views Aurelius as the supreme commander, whose laws must be enforced at any cost.
  - **Impact:** Marcus’ campaigns have established Aurelius' presence in numerous territories, solidifying the god's role as a protector of civilization.

- **Senator Clarissa of the Senate of Light:**
  - **Role:** A prominent member of the Senate of Light, Clarissa is known for her diplomatic skills and her efforts to bring Aurelius’ principles of governance into practice in new territories.
  - **Perception of Aurelius:** Sees Aurelius as the ideal ruler and works tirelessly to



### **Followers and Worshipers:**

1. **The Order of the Golden Scales (Judges and Arbitrators):**
   - **Nature of Group:** A prestigious order of judges, lawkeepers, and arbitrators who serve as the final authority in legal matters across various realms. They are often called upon to preside over trials, mediate disputes, and ensure that justice is served according to the principles of Aurelius.
   - **Perception of Aurelius:** They see Aurelius as the ultimate judge and strive to emulate his impartiality and fairness. Their motto, “Justice in His Name,” reflects their dedication to upholding his ideals.
   - **Impact on Aurelius:** This order extends Aurelius’ influence over mortal justice systems, serving as his eyes and hands in the mortal realm, ensuring that laws are respected and order maintained.

  - **Perception of Aurelius:** The Golden Scales view Aurelius as the ultimate source of justice and law. They see themselves as his direct representatives, tasked with the divine duty to maintain justice in all courts and civilizations.
  - **Role in Aurelius’ Sphere of Influence:** This order serves as the primary enforcers of Aurelius' principles among mortals, ensuring that his laws are respected and adhered to. They wield significant political influence in various realms, often acting as advisors to rulers and governors.
  - **Impact on Interactions:** Their presence in mortal courts and governments strengthens Aurelius' influence in the mortal world, making him a key player in lawmaking and governance.



2. **The Legion of the Iron Crown (Warriors of Civilization):**
   - **Nature of Group:** A militant order dedicated to defending the structures of civilization. They are both warriors and builders, trained to protect cities, fortify borders, and lead armies in defense of justice and order.
   - **Perception of Aurelius:** They see Aurelius as their patron and protector, the divine general who leads them in the battle against chaos and tyranny. They often invoke his name in their battle cries and prayers.
   - **Impact on Aurelius:** This legion represents Aurelius’ martial aspect, extending his protection to the physical structures of society. They act as defenders of civilization, ensuring that order is upheld even in the face of external threats.

  - **Perception of Aurelius:** The Legion views Aurelius as their divine commander, whose orders they are bound to follow to defend civilization and order. They see themselves as the vanguard against the forces of chaos.
  - **Role in Aurelius’ Sphere of Influence:** The Legion serves as Aurelius’ military arm, defending cities, enforcing laws, and quelling uprisings that threaten the fabric of society.
  - **Impact on Interactions:** They often clash with followers of [[Kataklysmos]] and [[Zerathos]], acting as a buffer against chaos and instability. Their actions amplify Aurelius' influence over regions under threat.



3. **The Senate of Light (Council of Leaders):**
   - **Nature of Group:** A council of rulers, governors, and statesmen who meet periodically to discuss governance, law, and the promotion of civilization. This group seeks to embody the ideals of just rule and leadership that Aurelius represents.
   - **Perception of Aurelius:** They see Aurelius as the ideal leader and lawgiver, whose guidance they seek in matters of governance. They believe that by following his principles, they can create a just and prosperous society.
   - **Impact on Aurelius:** The Senate serves to spread Aurelius’ influence through policy and governance, shaping societies in accordance with his principles. Their actions help maintain the divine balance he represents in the mortal realm.


  - **Perception of Aurelius:** The Senate sees Aurelius as the divine patron of leadership and governance. They believe that by adhering to his principles, they can create a prosperous and just society.
  - **Role in Aurelius’ Sphere of Influence:** This group extends Aurelius' control over political affairs, spreading his doctrines of just rule and lawful governance. They work to craft policies that reflect his values.
  - **Impact on Interactions:** The Senate’s influence helps maintain Aurelius' standing in the political and social hierarchies of mortal realms, often mediating between conflicting factions to uphold his ideals.

