---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Valorus.png
pronounced: Val-or-us
aliases:
  - The General, Warbringer
alignment: True Neutral
portfolio: War, Combat, Strategy, Valor, Tactics, Bravery
domains: Might
favored_weapon: Longsword
symbol: Crossed swords over a shield
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
**Valorus: God of War and Combat**
Valorus stands as a symbol of martial prowess, strength, and honor on the battlefield. His domain encompasses the physical and spiritual aspects of warfare, from tactical brilliance to raw, unrelenting violence. As a deity, Valorus represents both the strategic side of war and the intense chaos of combat. He is revered by warriors, generals, and all those who fight for their cause, be it for conquest, defense, or personal glory.

He rules over the domain of War, Combat, Strategy, and Victory. His influence is felt in every battle waged across the mortal and divine realms. In the cosmic hierarchy, Valorus is both a pragmatic leader and a powerful enforcer, often consulted by other gods when conflict arises between realms or when divine intervention in mortal wars is necessary. While not the most powerful deity, Valorus commands immense respect due to the inevitable nature of war, which makes him an important and indispensable figure in the pantheon.

Valorus’s principles are centered around the virtues of strength, discipline, courage, and tactical brilliance. He teaches that true warriors seek victory not only through brute force but also through strategy, preparation, and wisdom. He respects those who fight for just causes but also understands the necessity of conflict as a means of resolving disputes or asserting dominance. While Valorus is associated with bloodshed, he values honorable combat above all else. He detests cowardice, betrayal, or dishonorable tactics such as treachery or backstabbing. His followers are expected to fight with integrity, respecting their opponents as fellow warriors, even in the heat of battle. Valorus believes that strength is forged in the fires of combat. He encourages both mortals and gods to face their challenges head-on, seeing every battle as an opportunity to grow stronger and wiser. He often tests his followers with trials of strength and endurance, rewarding those who prove themselves worthy. As much as Valorus represents the chaos of combat, he also embodies the brilliance of military strategy. His wisdom is sought by generals and rulers, and he favors those who can lead armies with both tactical insight and personal courage. Valorus teaches that a great leader must understand the battlefield as an extension of their will, coordinating troops with precision and vision.

Valorus often interacts with mortals through inspiration on the battlefield. Soldiers may feel his presence when they experience a sudden surge of courage in battle, or when they realize a brilliant tactic that turns the tide of combat. In rare cases, Valorus may manifest as a warrior to fight alongside a chosen champion or to test their strength directly. He frequently blesses warriors, knights, and generals who exemplify his values of honor, strength, and leadership. These chosen champions may receive his divine guidance in times of need, often appearing as visions in moments of doubt or critical decision-making. Some are even granted magical weapons or armor imbued with his power, symbolizing his favor. 

Valorus’s followers include war-priests, who lead troops into battle while invoking his blessings for victory. His temples often double as fortresses or training grounds, where warriors are drilled in both combat and military tactics. These sacred spaces serve as sanctuaries where soldiers can find spiritual strength and seek guidance from Valorus.

In art and mythology, Valorus is typically depicted as a mighty warrior clad in shining armor, often wielding a massive sword or spear. His armor is etched with intricate designs symbolizing both victory and protection, and his helmet, crowned with laurels, represents the honor of leadership and valor. He is often shown standing on the battlefield, a calm and composed figure amid the chaos of war, symbolizing his command over the forces of combat. Valorus’s symbols include the sword, shield, and the laurel wreath. The sword represents the offensive power of war, the shield symbolizes the defense of one’s people and land, and the laurel wreath signifies victory and honor. In times of great wars or conflicts, Valorus may manifest as a colossal warrior spirit, appearing in dreams or battlefields as an awe-inspiring figure whose presence fills warriors with resolve and determination. His sacred manifestations often appear as blazing swords or banners seen in the heat of battle, signs that the god has taken notice of a significant conflict. Myths often recount Valorus leading armies of both mortals and divine beings against forces of chaos or invasion. These stories emphasize his role as the ultimate general and tactician, whose strength and leadership are unmatched in the realms of gods and mortals alike. One prominent myth describes Valorus helping [[Aurelius]] defeat a massive demonic invasion, using both brilliant strategies and overwhelming strength to seal the breach between worlds.

Valorus holds a unique place in the pantheon as both a patron of war and a god who tempers war with honor and strategy. His influence extends far beyond the battlefield, shaping how societies view leadership, honor, and justice in times of conflict. Through his teachings, warriors learn that combat is not just a path to destruction but a means of proving one’s worth, defending the weak, and restoring balance. Valorus’s presence in the world acts as a constant reminder that conflict is inevitable, but it can be approached with purpose and discipline. As a result, his worshipers are not only soldiers and generals but also rulers, tacticians, and those who seek to balance strength with wisdom in their pursuit of victory.

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
[[Aurelius]] and Valorus share a strong alliance, rooted in their mutual desire to maintain order through honorable means. Valorus provides the military strength and tactical guidance to uphold [[Aurelius]]’s ideals of justice and civilized order. This friendship reflects the balance between war and justice—[[Aurelius]] supports wars that are just and necessary, while [[Valorus]] ensures they are waged with honor. Together, they often collaborate in times of great conflict, forming a divine partnership that ensures warfare remains a tool of justice and protection rather than mindless destruction.

 [[Aegis]] and Valorus are closely aligned, as both gods focus on defense and protection, though their methods differ. Valorus’s focus on combat complements [[Aegis]]’s emphasis on vigilance and safeguarding the vulnerable. Valorus respects [[Aegis]]’s dedication to shielding those who cannot fight for themselves, while [[Aegis]] values Valorus’s ability to lead armies to victory, particularly when protecting the innocent. Their partnership plays out in how mortals perceive their domains; warriors often invoke [[Aegis]] for protection before battles and Valorus for the strength to win.

While their domains seem quite different, Valorus holds great respect for [[Arcarios]]’s intellect and strategic mind. [[Arcarios]]’s mastery over the arcane arts provides Valorus with an advantage on the battlefield, especially in magical warfare or conflicts where mystical forces come into play. In turn, [[Arcarios]] recognizes the necessity of Valorus’s expertise in combat to defend against chaotic or destructive magical forces. Together, they symbolize the fusion of physical combat and magical warfare, reflecting a world where battle is fought not just with swords but with spells and arcane power.

### **Divine Rivalries and Adversaries**
One of Valorus’s most bitter rivalries is with [[Kataklysmos]]. Valorus represents controlled, honorable conflict, while [[Kataklysmos]] embodies unchecked chaos and rampant destruction. Where Valorus seeks structure and purpose in war, [[Kataklysmos]] relishes in carnage without reason or strategy.  Their rivalry reflects a cosmic battle between order and chaos. Valorus’s disdain for [[Kataklysmos]] stems from the belief that war must serve a purpose—whether to defend, conquer, or resolve conflict—whereas [[Kataklysmos]] seeks to annihilate for the sheer joy of destruction. Mortals often invoke Valorus’s name to bring discipline and honor to battlefields tainted by chaos and savagery.

Valorus also stands opposed to [[Zerathos]], whose domain of madness and radical change threatens the stability Valorus seeks to preserve. [[Zerathos]]’s embrace of erratic, unpredictable change goes against Valorus’s core belief in discipline, planning, and tactical warfare. This opposition manifests in divine and mortal struggles where the forces of madness seek to disrupt order. Valorus fights against [[Zerathos]]’s influence, believing that chaos and irrationality have no place on the battlefield. Mortals who serve Valorus often view [[Zerathos]] as a dangerous force, one whose unpredictable nature must be countered with iron-willed resolve.

While [[Malakar]] and Valorus do not directly oppose each other in terms of warfare, their domains are fundamentally opposed. Valorus, as the god of war and combat, values strength and vitality, whereas [[Malakar]] represents the forces that corrupt and weaken life. Disease and rot are insidious enemies to the strength and resilience that Valorus cherishes. This enmity translates into Valorus’s followers striving to combat the spread of plagues or corruption in times of war. In warfare, Valorus’s priests and champions often lead efforts to purify the battlefield of [[Malakar]]’s pestilence and restore vitality to the wounded.

[[Morvael]], as the god of undeath, stands in stark contrast to Valorus’s respect for the warrior’s honorable death. Valorus believes in the valor of dying with honor on the battlefield, whereas [[Morvael]] represents the rejection of death’s finality through undeath. This fundamental difference in values leads to a deep animosity between the two deities. Valorus despises the unnatural prolonging of life through necromancy, viewing it as a perversion of the natural order of combat and sacrifice. Mortal followers of Valorus often crusade against undead forces and necromancers, seeing their existence as an affront to the god’s principles of honor in life and death.

Valorus’s network of relationships shapes his actions and influence in both the divine and mortal realms. His friendships with gods like [[Aurelius]] and [[Aegis]] bolster his role as the enforcer of honor, justice, and protection. These relationships allow Valorus to act as a stabilizing force in the pantheon, ensuring that conflicts are resolved through discipline and purpose rather than reckless violence. His rivalries with gods like [[Kataklysmos]] and [[Zerathos]] embody the eternal struggle between order and chaos, with Valorus fighting to maintain a structured approach to warfare. His adversarial stance toward [[Malakar]] and [[Morvael]] highlights his reverence for life, honor, and the natural order, opposing forces that corrupt or pervert these ideals.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## The Church
Valorus’s teachings emphasize discipline, honor, and the pursuit of victory through tactical prowess and bravery. Followers are encouraged to uphold principles of valor and chivalry, protecting the weak and defending their homeland with unwavering courage. Valorus teaches that war, while destructive, can also forge alliances, test mettle, and ensure survival in a hostile world. He stresses the importance of strategy in minimizing casualties and achieving decisive victories.

The Church of Valorus is often found in military academies, barracks, and fortified citadels. Temples are designed as bastions of defense, featuring training grounds, armories, and halls adorned with trophies of past battles. The clergy, known as Battle-Masters, are seasoned warriors, tacticians, and commanders who dedicate their lives to preparing for war and imparting military wisdom.

### Hierarchy Titles
- **High Marshal:** The supreme leader of the church, responsible for overseeing military strategy and the defense of territories.
- **Warlord:** Senior clergy who lead armies and command military campaigns, strategizing to secure victories and expand influence.
- **Champion:** Clergy who excel in single combat and serve as inspirational figures on the battlefield, rallying troops to overcome adversity.
- **Tactician:** Clergy who specialize in military tactics and battlefield logistics, ensuring efficient coordination and deployment of forces.

### Day-to-Day Activities
Followers of Valorus engage in activities that promote martial training, strategic planning, and readiness for conflict. They conduct drills, hone combat skills, and study military history and tactics. Offerings to Valorus include weapons, armor, and victorious campaigns that demonstrate the effectiveness of their training and strategies.

### Important Ceremonies/Holy Days
- **The Feast of Blades:** Celebrated during the equinoxes, where warriors gather to compete in martial contests, showcasing their skills and honoring fallen comrades.
- **The March of Valor:** A procession held during lunar eclipses, where followers march in formation to honor heroes of past battles and reaffirm their commitment to defending their beliefs.
- **The Vigil of Shields:** A ritual where followers pledge oaths of loyalty and service, symbolizing their readiness to defend their homeland and uphold the principles of honor and valor.

### Priestly Vestments and Adventuring Garb
Priests of Valorus wear armor adorned with symbols of war and valor, reflecting their dedication to martial discipline and defense. Their attire is practical yet dignified, designed to withstand combat while instilling confidence and respect among allies and foes alike. They carry warhammers as symbols of their readiness to engage in battle and enforce justice on behalf of their deity. High-ranking priests may wear enchanted armor that enhances their combat prowess and inspires courage in their followers.

In their adventuring garb, priests of Valorus favor heavy armor and practical clothing suitable for prolonged combat and defense. They wear enchanted shields and helmets that offer protection against enemy attacks and enhance their leadership abilities on the battlefield. Warhammers are their weapon of choice, chosen for their versatility in both offensive strikes and defensive maneuvers. Their gear is designed to support their role as protectors and champions, aiding them in their quest to uphold honor, defend their beliefs, and ensure victory in the face of adversity.

## Notes

### **Worshipers and Venerators**

- **The Iron Legion**  
  A military order dedicated to Valorus, the Iron Legion represents the epitome of disciplined, honorable warfare. Its soldiers and commanders are among the most skilled tacticians and warriors, striving to embody Valorus’s principles of strength, honor, and leadership. The Iron Legion fights not for wealth or glory but to uphold justice and defend the defenseless.  
  To the Iron Legion, Valorus is the perfect warrior, and they venerate him as both a patron and a guiding force in their campaigns. The Legion’s generals often pray for his divine insight before battles, and its warriors seek his strength in the heat of combat. Their devotion ensures that Valorus’s influence remains strong in mortal conflicts.

- **The Order of the Shield and Sword**  
  This religious order is composed of war-priests, paladins, and clerics who serve both as spiritual leaders and frontline warriors. They see combat as a divine act, blessed by Valorus, and believe that by fighting in his name, they cleanse the world of corruption and chaos. Members of this order are trained not only in martial prowess but also in the philosophy of war as a force for good.  
  The Order often leads armies blessed by Valorus’s favor, invoking his name for victory in just causes. They also act as emissaries, negotiating peace and instilling respect for honorable combat among rulers and generals.

- **Warriors of the Conclave**  
  In [[Ardentia City]], the [[Arcane Conclave]] holds Valorus in high regard for his role in guiding strategic warfare. While not a warrior-god in the strictest sense, Valorus’s influence on military tactics is valued by the [[Terramore Academy]] and others involved in magical warfare. The city's elite warriors often combine magic and martial skill, looking to Valorus as a symbol of balance between physical and magical combat.






### Affiliated Orders
- **The Order of the Iron Fist:** An elite group of warriors and knights who swear oaths of allegiance to Valorus, undertaking quests and crusades to uphold justice and protect the innocent.
- **The Legion of the Red Hand:** A formidable army composed of devout followers and seasoned veterans, standing ready to defend against external threats and maintain order within territories.



