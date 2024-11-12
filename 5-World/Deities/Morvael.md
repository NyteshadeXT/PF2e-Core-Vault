---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Morvael.png
pronounced: More-vail
aliases:
  - The Risen, Profaner
alignment: Lawful Evil
portfolio: Undeath, Necromancy, Corruption, Chaos
domains: Undeath
favored_weapon: Scythe
symbol: A skull with glowing eyes
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
**God of Undeath**

Morvael is the God of Undeath, ruling over the liminal space between life and death. Unlike deities of death who oversee the peaceful transition of souls to the afterlife, Morvael represents the defiance of death, embodying the unnatural prolongation of existence through undeath. His domain encompasses necromancy, souls bound to bodies, immortality through undeath, and the twisted perversion of the natural cycle of life and death. In the cosmic hierarchy, he is often regarded with fear and disdain by other deities, especially those who value the sanctity of life, death, and the afterlife. However, his power is undeniable, as undeath is a powerful and feared force that cannot be ignored.

Morvael’s place in the pantheon is as the antithesis of natural death and decay, an entity whose influence lingers at the edges of existence. He is both an adversary and a tool for other gods—occasionally sought after by darker entities for his mastery over necromantic forces, yet despised by those who guard the natural order of life and death.

Morvael’s philosophy is centered on the rejection of mortality and the pursuit of eternal existence. He teaches that death is a weakness, a failure of the living to harness true power. To him, undeath represents the ultimate freedom, the liberation of the soul from the limitations of the flesh and the shackles of the natural order. Mortals who seek power or fear death are drawn to his teachings, seduced by the promise of immortality and control over life and death.

His values are intrinsically tied to dominion over the dead and mastery of necromancy. He respects those who have the will to transcend mortality, be it through lichdom, vampirism, or other forms of undeath. However, he scorns those who view life as sacred or those who accept death as inevitable. In Morvael’s view, existence is a battlefield, and the dead who rise again are the warriors who refuse to be conquered by death.

Morvael interacts with mortals primarily through dark rites, necromantic rituals, and through his agents, such as liches, death knights, and vampires. He rarely intervenes directly, but his influence is felt in areas where the dead do not rest, where necromancers ply their trade, or where graveyards teem with restless souls. He values those who seek out necromantic knowledge, particularly those willing to sacrifice their humanity for the power of undeath. Though feared by the masses, Morvael is revered by necromancers, liches, and those who seek eternal life. Mortals who follow him often end up as his agents, cursed with immortality but bound to his will, their souls held in thrall for the power they gained.

Morvael also feeds off the despair and fear of death. His influence can be felt in places of mass tragedy, battlefields, and regions afflicted by plague, where death is ever-present and those left behind often seek forbidden means to avoid their fate.

Morvael is a cold and calculating god, embodying the unfeeling nature of undeath itself. Unlike the passionate gods of life or chaos, Morvael’s demeanor is one of detachment. He views the world through a lens of power and control, seeing death as merely another state to manipulate. Mortals are tools or vessels for his greater plans, and their suffering or emotions are of no concern to him. In mythology, he is often depicted as ruthless and merciless, offering the gift of eternal life, but at a grave cost—one’s soul.

Despite his cold nature, Morvael respects ambition and strength. He offers power to those who dare seek it, particularly through the dark arts of necromancy, and he rewards those who prove themselves by defying death.

In art and mythology, Morvael is often depicted as a cloaked and skeletal figure, wielding a staff adorned with skulls or a blade that siphons life. His imagery is dark and foreboding, often incorporating symbols of death such as skulls, bones, and grave markers. In some depictions, he is shown with an ethereal crown, signifying his dominion over the dead, or seated upon a throne of bones, lording over legions of undead. His religious texts, often written in forbidden tomes, focus on the secrets of immortality and necromantic rituals. These grimoires detail how to prolong life through undeath, how to bind souls to bodies, and how to raise the dead as servants. Morvael’s followers believe that through these teachings, they can ascend to immortality, albeit in a twisted form.

Morvael’s primary symbol is a skull with glowing eyes, representing undeath and the soul trapped within the dead body. Another common symbol is the black crescent moon, representing the eternal night and the shadows of death in which Morvael thrives. Morvael may manifest in areas of great death and despair, such as plague-ridden cities or battlefields littered with corpses. His presence is often marked by an unnatural cold, the sudden stillness of the air, and the sensation of being watched by unseen eyes. His followers often craft bone effigies or skeletal idols, which are used in necromantic rites and as symbols of his power. These idols are revered as conduits to Morvael’s divine essence, used in rituals to raise the dead or to commune with spirits.

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
Morvael and [[Kataklysmos]] share a dark synergy rooted in destruction and upheaval. While Morvael seeks to conquer death by raising the dead, [[Kataklysmos]] seeks to obliterate the natural order entirely. They occasionally work together to plunge the world into chaos and decay, with Morvael benefiting from the devastation [[Kataklysmos]] leaves behind by harvesting the dead for his armies. Morvael has often appeared during cataclysmic events triggered by [[Kataklysmos]], amplifying the destruction by ensuring that the dead do not rest. Their combined influence has led to the rise of plague-ridden lands where life withers and the dead walk. 

[[Zerathos]]’ penchant for madness and unpredictability sometimes aligns with Morvael’s manipulation of life and death. [[Zerathos]] finds fascination in the way undeath warps the mind, often driving the undead mad, while Morvael views [[Zerathos]]’ chaos as an opportunity to expand his reach over those who have lost their sanity and fear death. The two have collaborated during periods of great social upheaval, when mortals were vulnerable to both madness and the allure of necromancy. Morvael has often taken advantage of such moments to recruit new followers and raise the dead in service to his domain. Though not frequently allied, their paths cross when madness and undeath coincide, particularly in places where societies crumble, and the lines between life and death blur.

### **Divine Rivalries and Adversaries**
[[Elara]]’s devotion to life, healing, and the sanctity of death makes her Morvael’s most vehement adversary. Where [[Elara]] seeks to restore the natural cycle of life and death, Morvael defies it, turning death into an eternal prison of undeath. Their followers are locked in constant battle, with [[Elara]]’s clerics often being the primary force opposing necromancers and undead hordes.
Since time immemorial, [[Elara]] has thwarted Morvael’s attempts to expand his influence. She is frequently depicted in religious texts purging the corruption of undeath and restoring peace to those trapped by Morvael’s machinations. [[Elara]]’s temples and followers work tirelessly to combat the spread of necromancy and free the souls trapped in undead vessels. Her clerics are known to bless graveyards, ensuring that the dead remain at peace and out of Morvael’s reach.

As the embodiment of order and justice, [[Aurelius]] views Morvael as a force of corruption that disturbs the lawful balance of life and death. [[Aurelius]]' followers, particularly paladins and inquisitors, hunt down necromancers, destroy undead abominations, and seek to cleanse the world of Morvael’s influence. Their conflict is often depicted as a battle between order and chaos, with [[Aurelius]] standing as the shield against the undead scourge that Morvael unleashes upon the world. [[Aurelius]]' influence over mortal governments and justice systems ensures that necromancy is widely outlawed in many regions. His inquisitors have led campaigns against Morvael’s worshippers, burning necromantic texts and hunting down his cults.

[[Lysandra]]’s dominion over light and darkness positions her as a dual force against Morvael’s spread of undeath. The light symbolizes the banishment of death’s corruption, while darkness represents the unknown, where undeath may fester. Her worshippers respect the balance of life and death, but they view Morvael’s defiance of this natural cycle as an abomination. Morvael’s presence is often diminished by [[Lysandra]]’s celestial light, with her followers working to protect the living from the undead’s reach. Her myths often depict her casting divine light to banish the legions of the undead, forcing them back into the shadows. [[Lysandra]]’s followers maintain sacred places where the dead are honored and protected from necromantic interference. Her influence keeps Morvael’s power in check, particularly in lands where her temples are strong.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## The Church
Morvael's teachings center around the power found in the perversion of life and the embrace of undeath. Followers are taught to reject the natural order of life and death, seeking to transcend mortality through necromancy and corruption. Chaos is seen as a path to ultimate power, with the destruction of the living seen as a necessary step to achieve dominance over death.

The Church of Morvael operates in secretive, decayed locations such as abandoned crypts and hidden catacombs. Temples are adorned with necromantic symbols and relics of the dead, serving as centers for dark rituals and the raising of undead minions. The clergy, known as Deathbringers, are practitioners of necromancy and experts in the manipulation of life and death.

### Hierarchy Titles
- **High Deathbringer:** The supreme leader of the church, responsible for orchestrating grand necromantic rituals and spreading Morvael's influence.
- **Necromaster:** Senior clergy skilled in the dark arts of necromancy, responsible for training new initiates and overseeing the creation of undead servants.
- **Soulbinder:** Clergy who specialize in trapping and manipulating souls, often acting as spiritual guides to the undead.
- **Bonewarden:** Clergy tasked with guarding sacred crypts and ensuring the protection and control of undead minions.

### Day-to-Day Activities
Followers of Morvael engage in activities that promote the spread of undeath and corruption. They perform dark rituals to raise the dead, create undead minions, and corrupt living beings. Offerings to Morvael include bones, necromantic artifacts, and successful acts of corruption and desecration.

### Important Ceremonies/Holy Days
- **The Night of the Dead:** Celebrated during the darkest night of the year, where followers invoke Morvael's blessings to raise powerful undead servants and spread chaos.
- **The Ritual of Eternal Servitude:** A ceremony where powerful followers undergo a transformation into liches or other forms of undead, pledging their eternal service to Morvael.
- **The Eclipse of Souls:** Held during solar eclipses, when the barriers between life and death are thinnest, allowing for powerful necromantic rituals and communion with the dead.

### Priestly Vestments and Adventuring Garb
Priests of Morvael wear tattered, dark robes adorned with bones and necromantic symbols. Their attire is designed to inspire fear and reverence, reflecting the god's dominion over undeath and corruption. They often wear skull masks or veils, symbolizing their connection to the dead and the macabre nature of their rites.

In their adventuring garb, priests of Morvael favor dark, practical clothing that allows for ease of movement and concealment. They wear enchanted cloaks that grant them resistance to necrotic energies and enhance their abilities to control undead creatures. Scythes are their weapon of choice, chosen for their ability to harvest souls and symbolizing their embrace of death's power.

## Notes


#### **Organizations and Worshippers:**

1. **The Cabal of Eternal Night**:
   - **Nature**: A powerful sect of necromancers, liches, and death priests who venerate Morvael as the supreme force over death. They believe that through undeath, they can transcend mortal limitations and gain eternal life.
   - **Perception**: The Cabal sees Morvael as the ultimate liberator from the weakness of mortality. They believe that undeath is the highest form of existence, granting freedom from disease, aging, and the passage of time.
   - **Role**: This organization serves as Morvael’s most dedicated followers, spreading his influence by raising the dead and initiating new members into the dark arts. They often infiltrate societies, seeking knowledge of necromancy, lost artifacts, and opportunities to turn death into power.

2. **The Cult of the Deathless King**:
   - **Nature**: A shadowy cult devoted to seeking out the secrets of lichdom and eternal life through undeath.
   - **Perception**: The cult views Morvael as the guardian of the ultimate secret—how to cheat death and live forever. They consider death to be a temporary setback, something that can be overcome through their god’s teachings.
   - **Role**: The cult is known for delving into ancient tombs, conducting horrific rituals, and enslaving the souls of the dead to expand their necromantic power. They actively recruit those who fear death or seek revenge beyond the grave.

3. **The Plaguebearers**:
   - **Nature**: A faction that combines Morvael’s undeath with [[Malakar]]’s plagues. They spread death and disease, ensuring that those who die rise again as undead servants of Morvael.
   - **Perception**: They see death as the first step in a greater plan of power, spreading plagues to create armies of undead under Morvael’s command.
   - **Role**: Plaguebearers are often sent into populated areas to spread disease and weaken societies from within, paving the way for necromancers to harvest the dead.




## Affiliated Orders
- **The Order of the Crypt:** Guardians who protect sacred burial sites and necromantic temples, ensuring their sanctity and the safety of the undead within.
- **The Necrotic Hand:** A group of elite necromancers and assassins who serve Morvael directly, carrying out missions to spread undeath and corruption.