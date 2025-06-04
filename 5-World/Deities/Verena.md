---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz-Attachments/Verena.png
pronounced: Veer-ee-na
alignment: True Neutral
portfolio: Commerce, Wealth, Trade, Prosperity, Merchants, Greed, Ambition
domains: Wealth
favored_weapon: Rapier
symbol: Scales balanced with coins
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
**Goddess of Commerce and Wealth**

Verena holds a critical role within the cosmic hierarchy, overseeing the ebb and flow of trade, prosperity, ambition, and even greed. Her domain covers not only material wealth but the complex webs of commerce that bind civilizations together. In the pantheon, she acts as the divine patron of merchants, traders, and those who seek to accumulate riches or influence through enterprise and cunning.

Verena governs the realms of commerce, wealth, trade, prosperity, merchants, ambition, and even greed. She represents both the honorable pursuit of success and the dangerous allure of unbridled ambition. Her cosmic role places her at the center of economic activities, ensuring the smooth flow of resources and wealth across realms and societies. She is often seen as a mediator of exchanges between mortals, guiding transactions and trade deals while setting the natural boundaries of success and excess.

In the pantheon, Verena balances between gods of order and chaos, as her domains involve both structured trade and the occasional chaotic bursts of ambition and greed that drive innovation or collapse. She does not shy away from the more selfish side of wealth acquisition, understanding that ambition, even when unchecked, can be a driving force for progress.

Verena is a pragmatist who sees wealth as a tool for growth, power, and stability, but also as a double-edged sword that can lead to corruption and downfall. She values ambition, entrepreneurship, and the clever use of resources. Those who seek her favor are encouraged to be both industrious and strategic, using their talents to create and accumulate. However, she also respects the natural give-and-take of commerce and cautions against hoarding wealth in ways that stifle trade and prosperity for others.
- **Ambition**: Verena encourages mortals to pursue their goals, no matter how high or difficult. She sees ambition as the engine that drives societies forward.
- **Wealth**: She teaches that wealth is both a means to power and a reflection of personal or societal success. However, unchecked greed is seen as a form of self-destruction.
- **Commerce and Trade**: Verena values trade as the lifeblood of civilization. Through trade, resources are shared, wealth is generated, and relationships between nations are solidified.

While she promotes prosperity, Verena does not discourage ambition for personal gain, understanding that greed and the desire for more can fuel growth. However, she sets an unseen boundary, where excessive greed leads to ruin, reminding her followers of the delicate balance between wealth and destruction.

Verena interacts with mortals primarily through their economic lives. Merchants, traders, and bankers often invoke her name before making deals, asking for her blessings in negotiation and transaction. She is seen as the divine facilitator of agreements, ensuring both parties gain something, though not necessarily equally. Her most devout followers are those who engage in commerce or seek to better themselves through ambition. This includes not only merchants and traders but also those who pursue wealth through less scrupulous means, such as thieves, gamblers, and speculators. Verena is not a moralistic deity; she appreciates the complexity of human desires and does not judge the methods her followers use to achieve success, so long as they understand that risks are part of the game. Verena’s favor can manifest as sudden windfalls of luck, advantageous trade deals, or the collapse of competitors, but she also can withhold prosperity, allowing those who become too greedy to fall into debt or ruin.

Verena is typically depicted as a golden-clad figure, often with scales in one hand and a coin in the other, symbolizing balance and wealth. In some depictions, her scales weigh not just material wealth but ambition and risk, reflecting her dual nature as both a guide for prosperity and a test of greed. Her appearance is usually regal, with a commanding yet welcoming demeanor, representing her role as the facilitator of commerce. In mythology, Verena is often the mediator of divine disputes over resources or territory, leveraging her position as the goddess of trade to broker deals between rival deities. She is also known for granting blessings to mortals who show cleverness or strategic foresight in their endeavors, rewarding those who excel in the art of commerce. At the same time, she is also invoked in cautionary tales where unchecked greed leads to downfall, showing her awareness of both sides of wealth.

Her symbols include a Golden Coin, the universal symbol of wealth and commerce.  It is often etched with her visage. The Scales which represent balance, fairness in trade, and the weighing of ambition and greed.  Finally, a Merchant’s Ledger.  Usually found in temples dedicated to her, the ledger symbolizes the careful management of wealth and transactions. Temples dedicated to Verena are often located in bustling markets or trade centers. These temples double as places of worship and commerce, with priests of Verena serving as advisors to merchants, traders, and bankers.

Verena’s worshipers are typically merchants, bankers, entrepreneurs, and traders, but also those who seek personal advancement through ambition, such as politicians or even thieves. In her worship, success is equated with divine favor, and the accumulation of wealth is seen as a sign of being blessed by the goddess. Her temples are grandiose and often function as centers of commerce. The faithful offer her tributes in the form of gold or precious items before making important business deals or seeking her favor in times of economic uncertainty.

Verena’s influence stretches far beyond wealth itself. She represents the heartbeat of civilization—the trade routes, the ambitions of empires, the rise and fall of fortunes. Her presence is felt in every coin exchanged, every contract signed, and every risk taken in the pursuit of success. In a world where commerce drives progress and greed fuels both innovation and corruption, Verena’s hand guides the destiny of both individuals and nations.

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
Verena enjoys a strong alliance with [[Aurelius]], as the domains of order and commerce are closely intertwined. Without [[Aurelius]]'s laws and justice, the stability necessary for trade and wealth accumulation would be compromised. Verena respects [[Aurelius]]’s focus on fairness and structure, and they often collaborate to establish trade routes, enforce contracts, and maintain the balance of power between kingdoms and empires. [[Aurelius]], in turn, relies on Verena’s influence to sustain prosperous civilizations.
  
Verena’s relationship with [[Sylvan]] is one of mutual respect. The natural world provides the resources necessary for commerce—crops, raw materials, and trade goods—while Verena ensures these resources flow through society in a way that fosters growth. Together, they form a symbiotic relationship where prosperity and nature are interconnected, particularly in agrarian societies that rely on trade to thrive.

[[Thalor]] and Verena share a respect for the pursuit of knowledge and wisdom, as intellectual advancements often lead to economic progress. In Verena’s temples, there is always a section dedicated to the pursuit of financial wisdom and trade secrets, where the influence of [[Thalor]] can be felt. Their collaboration manifests in joint efforts to support libraries, trade guilds, and centers of learning that enhance both scholarship and commerce.

Verena and [[Valorus]] might represent the interconnectedness of war and commerce. Wars create opportunities for trade and economic shifts, which Verena could exploit, while [[Valorus]] revels in the conflict itself. While not necessarily allies, they might share an understanding of their intertwined interests. Merchants might fund wars that serve their own ambitions, while warriors bring wealth back to their homelands, further strengthening Verena’s influence.

### **Divine Rivalries and Adversaries**
Verena’s relationship with [[Kataklysmos]] is tense and often adversarial. While Verena understands that ambition sometimes requires a spark of chaos to ignite innovation, [[Kataklysmos]]’s embrace of pure destruction threatens the stability upon which trade and prosperity rely. Their encounters are often ones of conflict, where Verena strives to preserve the structures of commerce that [[Kataklysmos]] seeks to unravel. However, in moments of opportunity, Verena may seek to harness chaos for her own ends, making their relationship one of unpredictable volatility.

Verena sees [[Malakar]] as a force that undermines all she stands for. Corruption, rot, and disease are threats to prosperity and trade, and she works tirelessly to stave off his influence over mortals. While Verena acknowledges that corruption exists within commerce, she views [[Malakar]]’s unchecked spread of decay as destructive to the very systems that allow civilizations to thrive. Their interactions are marked by opposition, with Verena seeking to contain or purify [[Malakar]]’s impact on economies and societies.

### **Divine Neutral or Distant Relations**
Verena and [[Morvael]] operate in largely separate spheres, but their interactions are occasionally intertwined. Undeath offers little in terms of commerce and wealth, but [[Morvael]]’s ability to disrupt the natural order can have indirect impacts on trade. Verena views [[Morvael]] as a distant and eerie figure whose influence is more peripheral to her concerns, though she remains wary of his potential to upset the flow of life that sustains commerce.

While Verena relies on [[Lysandra]]’s control of the celestial cycles to dictate the rhythm of trade seasons, their interactions are mostly passive. The cycles of day and night, seasons, and time are essential to Verena’s sphere, but [[Lysandra]]’s focus on balance and light or darkness does not directly align with Verena’s core principles of ambition and wealth.

These relationships shape Verena's actions and principles, reinforcing her belief in balance within commerce. While ambition drives her, she respects the necessity of order and nature, knowing that unchecked greed or chaos can lead to downfall. Her rivalries with [[Kataklysmos]] and [[Malakar]] highlight her focus on stability and growth, while her alliances with [[Aurelius]] and [[Sylvan]] emphasize her pragmatic approach to building prosperous societies.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## The Church
> [!caption|left]
> ![[Verena Holy Symbol.png]]
> Holy Symbol of Verena

Verena’s teachings emphasize the virtues of fair trade, entrepreneurial spirit, and responsible stewardship of wealth. Followers are encouraged to pursue opportunities for economic growth, uphold principles of honesty and integrity in business dealings, and contribute to the prosperity of their communities. Verena teaches that wealth, when used wisely, can improve quality of life, fund charitable endeavors, and stimulate innovation and cultural exchange. She stresses the importance of balancing personal gain with social responsibility.

The Church of Verena can be found in bustling marketplaces, financial centers, and guild halls. Temples are designed as centers of economic activity, featuring marketplaces, banks, and halls for trade negotiations. The clergy, known as Stewards, are skilled negotiators, bankers, and economic advisors who dedicate their lives to promoting financial stability and prosperity.

### Hierarchy Titles

- **High Steward:** The supreme leader of the church, responsible for overseeing economic policies and promoting fair trade practices.
- **Merchant Prince/Princess:** Senior clergy who lead merchant guilds and oversee international trade agreements, fostering economic growth and diplomatic relations.
- **Master Negotiator:** Clergy who specialize in mediation and arbitration, resolving disputes and facilitating trade negotiations for the benefit of all parties.
- **Treasury Keeper:** Clergy responsible for managing temple finances, ensuring the equitable distribution of wealth and funding charitable initiatives.

### Day-to-Day Activities
Followers of Verena engage in activities that promote commerce, trade, and financial stewardship. They oversee market transactions, manage investments, and advise on economic policies. Offerings to Verena include coins, gems, and successful business ventures that demonstrate the prosperity brought about by their financial acumen.

### Important Ceremonies/Holy Days
- **The Festival of Plenty:** Celebrated during harvest seasons, where merchants gather to showcase their goods and exchange blessings for a prosperous year ahead.
- **The Pact of Coin:** A ritual where followers pledge oaths of honesty and fairness in business dealings, reaffirming their commitment to upholding the principles of commerce and trade.
- **The Treasury Feast:** A banquet held during lunar eclipses, where followers contribute to a communal fund that supports charitable causes and economic development projects.

### Priestly Vestments and Adventuring Garb
Priests of Verena wear attire that reflects their role as stewards of wealth and prosperity. Their clothing is adorned with symbols of commerce and financial acumen, conveying a sense of authority and trustworthiness. They often carry rapiers as symbols of their readiness to defend economic interests and uphold principles of fairness in business dealings. High-ranking priests may wear robes enchanted to enhance their negotiation skills and amplify their influence in economic matters.

In their adventuring garb, priests of Verena prefer elegant yet practical attire suitable for business negotiations and travel. They wear enchanted rings and amulets that protect them from financial fraud and enhance their ability to assess market trends. Rapiers are their weapon of choice, chosen for their finesse and versatility in both combat and business negotiations. Their gear is designed to support their role as diplomats and economic advisors, aiding them in their quest to promote prosperity, foster trade relations, and protect financial interests across the realms.

## Notes




### **Organizations, Influential Figures, and Powerful Beings**
Verena’s influence on the mortal world extends through various organizations, guilds, and powerful figures that venerate her in their pursuit of wealth and success. These groups are central to her power base and play critical roles in shaping how her principles are enacted in the material realm.

#### **Merchant Guilds**
The most prominent organizations devoted to Verena are the **Merchant Guilds**, vast networks of traders and merchants who rely on Verena’s blessings for successful trade. These guilds often serve as the de facto leaders of commerce in cities and empires, operating under the auspices of Verena’s temples. They see her as a divine guide who protects them from ruin while helping them accumulate wealth through wisdom and ambition. These guilds often organize festivals in Verena’s honor, where tribute is offered, and new trade agreements are blessed by her clergy.

#### **Trade Consortia**
Large **trade consortia**, which operate on a more international scale, revere Verena as a patron of enterprise and ambition. They focus on expanding trade routes across borders, monopolizing key resources, and pushing the boundaries of commerce. These organizations often see Verena’s teachings as a way to balance ambition with pragmatism, knowing that she rewards cleverness and enterprise but punishes overreach and unchecked greed. The leaders of these consortia frequently seek divine counsel from Verena’s clergy when making risky investments or negotiating trade deals.



### Affiliated Orders
- **The Guild of Merchants:** An influential network of traders and business leaders who uphold the principles of fair trade and economic cooperation, promoting prosperity across regions and cultures.
- **The Bankers’ Alliance:** A consortium of financial institutions and investment firms that manage temple funds and provide loans to support economic growth and infrastructure projects.
