---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Aegis.png
pronounced: A-gee-iss
aliases:
  - Lord Protector
  - Vigilant One
deitypower: Greater God
portfolio: Protection, Vigil, Guardianship, Duty, Loyalty, Obedience
domains: |
  Protection, Vigil, Duty
symbol: A shield emblazoned with an eye
favored_weapon: Shield
alignment: Lawful Neutral
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
**God of Protection and Vigilance** 

Aegis wields dominion over shields, wards, and protective magics. He have the power to form barriers against all forms of harm, enhance fortifications, and bless defenders with resilience and courage. Aegis can sense threats from great distances and grant their followers the insight to see through deception and foresee danger. He also possess the ability to bolster mortal and divine guardians alike, imbuing them with unwavering determination and indomitable strength.  He is known to manifest in moments of crisis as a spectral shield or a wall of light that deflects attacks or shields the vulnerable. Sometimes, he will appear as a protective guardian spirit in dreams, warning of impending threats or guiding lost souls to safety.

Aegis occupies a crucial position among the gods, serving as the eternal guardian and watchful sentinel of the divine realm and mortal world. A trusted figure, Aegis is often called upon to arbitrate conflicts or protect weaker deities and mortals from external threats. In the cosmic hierarchy, he serves as a counterbalance to deities of chaos, destruction, and change, like [[Kataklysmos]] and [[Zerathos]]. Aegis is often allied with gods of order, justice, and life, such as [[Aurelius]] and [[Elara]], forming a protective triad that champions stability and the preservation of life.

He embodies the principles of vigilance, steadfastness, and self-sacrifice. His divine mission is to protect the innocent, defend the helpless, and uphold the sanctity of life. Aegis values vigilance as the highest form of duty, believing that constant awareness and preparedness are essential to ward off dangers. He encourages his followers to be unwavering in their defense of what is just and righteous, urging them to stand as sentinels against the encroaching shadows of the world.

Aegis is a guardian deity who interacts with mortals through his champions, clerics and other clergy. He often grants blessings to those who demonstrate courage, resilience, and a willingness to defend others, particularly those in dire need. When mortals pray to Aegis, they often seek protection, fortitude, or guidance in times of conflict or danger. Aegis manifests through omens—such as a sudden calm in the midst of chaos or the appearance of a spectral shield before an impending attack. Among the divine, Aegis is a mediator and protector, respected even by opposing forces for his integrity and fairness. He is known to intervene in divine conflicts to maintain balance and prevent excessive harm. Aegis maintains a wary relationship with gods like [[Kataklysmos]] and [[Zerathos]], opposing their more chaotic or destructive tendencies but sometimes collaborating with them when a greater existential threat looms.

Aegis is often depicted as vigilant, stern, and uncompromising with a reputation for patience and calmness in the face of adversity but swift to act when danger arises. Aegis embodies a stoic demeanor, valuing discipline and resilience over rash actions. However, he can be fierce and relentless when defending those under his protection or upholding their principles. Aegis’s compassion is practical; he believe in doing what must be done to ensure safety and security, even if it means making difficult choices or sacrifices.

Aegis is typically depicted in art as a powerful figure clad in resplendent armor, often holding a great shield or standing beside a fortified wall. In some representations, his eyes are depicted as radiant beacons, symbolizing their vigilance and ability to see through darkness and deception. Aegis is often shown with a stern, determined expression, emphasizing his unwavering resolve.

Mythologically, Aegis is often described in stories of great defense or protection, such as the tale of the **Fortress of the Last Stand**, where Aegis held off a legion of darkness to protect a sacred site, or the legend of **The Shield Eternal**, where he defended a mortal city against an onslaught of celestial beasts.

Aegis holds immense significance in the pantheon as the embodiment of protection, duty, and vigilance. His influence spans across realms and mortals alike, as he provide a sense of safety and security to those who fear the unknown or the malevolent forces of the world. Aegis is revered by guards, soldiers, healers, and all who seek to protect their loved ones or communities. He is a symbol of hope for those in peril and a beacon of strength for those who stand against overwhelming odds.

In the broader context of the fractured world, Aegis represents the resolve to preserve life and light amidst chaos and uncertainty. His presence reassures mortals and deities that, regardless of the turmoil, there will always be guardians watching over them, ready to defend against the encroaching darkness.

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

## History
Aegis was born in the Cosmic Forge, a metaphysical crucible where the fundamental forces of the universe converged to shape the first gods. While some deities emerged from elemental chaos or the void, Aegis is believed to have been forged from the primal essence of order and light. Legends say that when the Great Forge sparked to life for the first time, Aegis arose as a manifestation of divine purpose—a deity shaped by the need for protection, vigilance, and the safeguarding of existence itself.

One of the earliest myths involving Aegis is the "Sentinel Against the Void." In the infancy of the cosmos, a primordial entity of darkness, known as Nihilath, sought to consume all creation, plunging existence into eternal night. While the other gods rallied to create and build the foundations of the world, Aegis stood as the first line of defense against the encroaching shadows. Aegis is said to have held back the void with a great shield of light forged from the first sunrise, standing vigilant and unyielding as the cosmos continued to grow. For eons, Aegis maintained this vigil, a lone sentinel warding off the annihilation of all things. This story marks the beginning of Aegis's divine role as protector and guardian.

During the Age of Formation, when mortals first began to awaken and discover their place in the universe, they were vulnerable to both divine whim and cosmic forces beyond their understanding. Aegis, moved by the fledgling strength and fragility of these new beings, chose to take on the mantle of their protector. The tales of Aegis shielding mortal settlements from rampaging giants, monstrous beasts, and even divine wrath became foundational myths in many cultures. One of the most famous stories, "The Shield of Valor," tells how Aegis stood in defiance against a rogue fire god who sought to raze a mortal city. Aegis is said to have interposed their divine shield between the firestorm and the city, deflecting the flames until the other gods could intervene. This narrative established Aegis's place among the pantheon as a steadfast defender of mortals.

A pivotal moment in Aegis's history is known as "The Great Betrayal." In a bid to expand his own domain and power, a god of shadows and deception, Nyxalis, sought to subvert Aegis’s unwavering vigilance. Nyxalis forged an alliance with [[Zerathos]], the God of Madness and Change, creating an elaborate illusion that sowed confusion and doubt among the gods. While Aegis was deceived for a time, believing an impending threat lay to the east, Nyxalis launched an assault on Aegis’s own celestial fortress in the west. Upon discovering the betrayal, Aegis returned with fury and unparalleled resolve. They reforged his shield using the remains of the fallen and crushed Nyxalis’s forces in a divine duel that lasted for days, ultimately banishing Nyxalis to the [[Shadow Abyss]]. This event is often cited as the moment Aegis became known not just for his protection, but for his retributive justice and fierce vengeance against those who would harm the innocent. The Great Betrayal also hardened Aegis's attitude towards other deities, making them more cautious, vigilant, and wary of alliances.

During a celestial phenomenon called the "Eternal Night," when the stars aligned in a way that blocked out the sun for thirty days, creatures of darkness and malevolence swarmed the mortal realms. Aegis took up a solitary vigil during this time, standing guard over the mortal cities, temples, and villages. Stories tell of Aegis walking among the shadows, their shield glowing like a beacon, repelling countless attacks from dark forces. This vigil has become a symbol of endurance and unwavering commitment to protection. The mortal celebration of "Shield's Light," held annually during the darkest month, honors Aegis’s deeds during this period.




#### **Transformative Moments and Shifts in Power**

- **The Binding of the Cataclysmic Gates:**
  Aegis played a critical role in binding the Cataclysmic Gates, ancient portals through which entities from unknown realms sought to invade the mortal world. Alongside [[Aurelius]] and [[Elara]], Aegis embarked on a quest to locate and seal these gates. The process required immense divine power and sacrifice; Aegis channeled a portion of their own essence into a series of divine wards, forever diminishing some of their strength but ensuring the gates could not be reopened. This act of self-sacrifice elevated Aegis in the eyes of mortals and gods alike, cementing their reputation as a deity willing to diminish their own power for the sake of others.

- **The Reforging of the Shield:**
  After the Great Betrayal and the loss of trust among the gods, Aegis took a self-imposed exile in the Hall of Infinite Mirrors, a metaphysical plane where gods confront their own fears, desires, and faults. Here, they reforged their shield, imbuing it with newfound resilience and the ability to reflect attacks. This transformation was not just physical but also symbolic of Aegis's internal evolution from a purely defensive force to a balanced entity capable of both protection and measured retribution.

#### **Transformative Moments and Shifts in Divine Existence**

- **The Oath of Eternal Vigilance:**
  Aegis’s most transformative moment came with the Oath of Eternal Vigilance, a vow made before the entire pantheon during a celestial council. Sworn to protect all realms from any threat, whether divine, mortal, or cosmic, this oath binds Aegis’s essence to the defense of existence itself. It has given Aegis a unique status as the appointed guardian of both the divine and mortal realms, a position that elevates them above mere participation in the pantheon to a role of overarching responsibility.

- **The Balance of Retribution and Mercy:**
  Over time, Aegis has evolved from a purely protective figure to a more balanced deity who embodies both mercy and retribution. This shift was influenced by their experiences, betrayals, and alliances. Followers of Aegis speak of their deity as a "shield with two edges," representing the dual aspects of their power—protection and justice. This evolution has allowed Aegis to navigate the complexities of divine politics and mortal affairs with greater flexibility and depth.

## Acquaintances
### **Divine Friendships and Alliances**
Aegis and [[Aurelius]] share a strong alliance rooted in their shared commitment to order, justice, and the protection of civilization. They are often depicted as comrades in arms, standing side by side to defend the righteous and uphold the laws that govern both mortals and deities. [[Aurelius]] sees Aegis as a stalwart defender whose vigilance maintains the balance of order. This alliance has reinforced Aegis’s role as a guardian of law and protector of the innocent. Aegis has often joined [[Aurelius]] in battles against forces of chaos or tyranny, cementing their bond as allies in the cosmic struggle against injustice. Aegis supports [[Aurelius]] in any divine efforts to strengthen the rule of law or protect settlements from external threats. The two often collaborate on matters of divine intervention, such as guiding their respective followers toward righteous causes or defending vulnerable communities.

Aegis and [[Elara]] maintain a close friendship, with Aegis often acting as a protector of life and healing. [[Elara]], in turn, blesses those who serve as guardians and defenders, offering healing and renewal to those who stand in harm's way. Their relationship is built on mutual respect and a shared understanding of the value of life and protection. This bond has strengthened Aegis's emphasis on safeguarding the vulnerable and shielding those who heal. The cooperation between Aegis and [[Elara]] has often resulted in miraculous rescues, where both protection and healing were necessary for survival. Aegis frequently calls upon [[Elara]]’s aid to protect the lives of their followers, especially during dire situations. Temples dedicated to both deities often stand side by side, reflecting their intertwined worship and mutual support.

Aegis and [[Thalor]] share a respectful relationship based on mutual trust. Aegis values [[Thalor]]'s wisdom and often seeks guidance on complex matters of strategy, vigilance, and perception. [[Thalor]] respects Aegis's commitment to protecting the knowledge bearers and guarding the sanctity of wisdom. Aegis's alliance with [[Thalor]] has shaped their belief in vigilance beyond physical protection, emphasizing mental awareness, insight, and the importance of knowledge in defense. Aegis encourages their followers to be not just brave but also wise and observant. Aegis collaborates with [[Thalor]]’s followers, providing protection to scholars and sages on dangerous quests. Together, they sponsor missions to recover lost knowledge, guard sacred texts, and defend libraries and centers of learning.

### **Divine Rivalries and Adversaries**
Aegis stands in stark opposition to [[Kataklysmos]], viewing the god of chaos and destruction as an existential threat to everything they protect. Their rivalry is one of principle; while Aegis embodies order, protection, and vigilance, [[Kataklysmos]] represents the forces that seek to unravel and destroy. This rivalry has solidified Aegis's principles of unwavering vigilance and readiness against chaos. Aegis’s followers are taught to expect the unexpected and to always be prepared to defend against sudden upheaval or destruction. Aegis constantly monitors [[Kataklysmos]]'s actions, guiding their followers to thwart the god of chaos's schemes wherever they arise. They engage in frequent confrontations in mortal realms, with Aegis often reinforcing bastions of order against chaotic incursions.

Aegis views [[Zerathos]] as a dangerous and unpredictable adversary. While not directly opposed in every instance, [[Zerathos]]’s penchant for madness and unpredictable change makes them a frequent source of conflict for Aegis, who values stability and vigilance. This opposition has reinforced Aegis's emphasis on maintaining sanity, stability, and fortifications against unforeseen mental or spiritual attacks. Followers of Aegis are often vigilant against the influence of madness or corruption, prepared to act against insidious threats. Aegis's followers are often tasked with countering cults and activities dedicated to [[Zerathos]], serving as guardians against the spread of madness. Aegis may ally with other deities temporarily to counter any particularly dangerous actions initiated by [[Zerathos]].

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## The Church
The Church of Aegis is often found in fortified temples and watchtowers, symbolizing their role as protectors. Temples are designed as bastions of safety, providing refuge for the needy and training grounds for guardians. The clergy, known as Wardens, are dedicated to the protection of their communities and the training of new defenders.

Aegis's teachings focus on the importance of protection and the duty to guard those who cannot defend themselves. His followers are encouraged to remain ever vigilant, ready to stand against any threat. The ideals of bravery, sacrifice, and unwavering duty are central to his faith. Aegis teaches that true strength lies in the defense of others and that vigilance is the key to maintaining peace and safety.

### Hierarchy Titles
- **High Warden:** The supreme leader of the church, responsible for overseeing the defense of communities and the training of new Wardens.
- **Shieldbearer:** Senior clergy who lead defensive efforts and train new recruits in the arts of protection and vigilance.
- **Guardian:** Clergy who focus on the day-to-day protection of the temple and its surrounding community, acting as local protectors.
- **Sentinel:** Clergy who specialize in reconnaissance and surveillance, ensuring that any threats are detected and neutralized before they can cause harm.

### Day-to-Day Activities
Followers of Aegis engage in activities that promote safety and vigilance. They train in martial skills, fortify communities, and provide protection to those in need. They also conduct regular patrols and maintain watchful eyes over their surroundings, ready to respond to any threat. Offerings to Aegis include shields, protective amulets, and acts of bravery in defense of others.

### Important Ceremonies/Holy Days
- **The Shielding:** Celebrated during the solstices, where followers perform rituals to reinforce protective wards and fortifications.
- **The Vigil:** A ceremony held on the longest night of the year, where followers stay awake and keep watch, symbolizing their dedication to vigilance.
- **The Guardian's Oath:** A rite of passage for new recruits, where they swear an oath to protect the weak and uphold the principles of Aegis.
- **The Day of Sacrifice:** A day of remembrance for those who have fallen in the line of duty, honoring their bravery and dedication.

### Priestly Vestments and Adventuring Garb
Priests of Aegis wear armor adorned with the symbols of their faith, often including a shield emblazoned with an eye. Their attire is both practical for combat and symbolic of their protective role. They also wear cloaks or tabards in colors that represent vigilance, such as deep blue or silver, often with intricate embroidery symbolizing watchfulness and guardianship.

In their adventuring garb, priests of Aegis favor sturdy armor that allows for both mobility and protection. They carry shields as their primary weapon, often enchanted to provide additional defensive capabilities. Their gear is designed to withstand the rigors of battle while offering the maximum protection to themselves and those they defend. They also carry tools for fortification and first aid, ensuring they can protect and heal their allies in the field.

## Notes

#### **Organizations and Groups that Venerate Aegis**

1. **The Order of the Unyielding Shield**
   - **Description:** A militant order of paladins and clerics who venerate Aegis as their divine patron. They see themselves as the physical manifestation of Aegis’s will, charged with defending the innocent, maintaining peace, and guarding against threats both mortal and divine.
   - **Perception of Aegis:** They view Aegis as the ultimate protector and example of courage and vigilance. To them, Aegis is the embodiment of duty, and they strive to emulate their deity’s unyielding resolve in their own lives.
   - **Role and Influence:** The Order frequently acts as peacekeepers and defenders, providing aid to communities under threat. They are often involved in diplomatic missions, protective services, and even leading crusades against forces of chaos or destruction. Their actions expand Aegis's influence in mortal realms, acting as a bulwark against threats.

2. **The Sentinels of Light**
   - **Description:** A secretive organization of watchmen, spies, and scouts who dedicate themselves to Aegis. They work behind the scenes to monitor threats, gather intelligence, and prevent dangers before they can materialize.  
   - **Perception of Aegis:** They view Aegis as the vigilant eye, constantly watching over the world to safeguard it from unseen threats. They revere Aegis’s ability to foresee and prevent dangers and strive to replicate this vigilance.
   - **Role and Influence:** The Sentinels of Light work as the hidden eyes and ears of Aegis, uncovering plots, neutralizing threats quietly, and ensuring that peace is maintained. They provide crucial intelligence to other followers of Aegis, extending the deity’s protective reach.

3. **The Shieldbearers of [[Elara]]**
   - **Description:** An allied group of healers and defenders who honor both Aegis and [[Elara]]. They are known for providing sanctuary and healing to those in need while standing ready to defend their wards. 
   - **Perception of Aegis:** They see Aegis as the protective force that allows them to perform their duties safely, guarding their sanctuaries and patients. They honor Aegis with prayers for protection and blessings of resilience.
   - **Role and Influence:** The Shieldbearers act as the bridge between Aegis's defensive might and [[Elara]]’s healing grace, serving in war-torn regions or dangerous locales, protecting the wounded, and ensuring that those who cannot defend themselves are kept safe.

