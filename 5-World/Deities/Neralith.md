---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Neralith.png
pronounced: Near-a-lith
aliases:
  - Mother Time, The Gate Keeper, Fatespinner
alignment: True Neutral
portfolio: Time, Fate, Death
domains: Time, Fate, Death
favored_weapon: Chakram
symbol: An hourglass with flowing sands that turn into a spiral
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
**Goddess of Time, Fate, and Death**

Neralith, the Goddess of Time, Fate, and Death, holds a position of immense power and profound influence within the cosmic hierarchy. As the weaver of fate, the keeper of time, and the arbiter of death, she governs the most fundamental forces of existence. Her dominion extends over the life spans of all beings, the immutable flow of time, and the inevitable conclusion of mortality. Neralith stands as the final judge of all souls, guiding them through the passage of death and into whatever lies beyond.

Her domain encompasses time, fate, and death, all interwoven aspects of existence that she alone controls. She ensures that all events unfold according to their destined course, from the smallest choices of mortals to the grand cosmic events that shape the universe. Mortals fear and respect her, for she alone determines when their lives end, and she oversees the fates of all souls, judging them impartially after death.

As a member of the pantheon, Neralith is above the mortal understanding of good and evil. Her role is not to punish or reward but to enforce the balance of life and death and the passage of time. This makes her a distant yet unavoidable figure, one who commands reverence from all beings. She is neither cruel nor kind, merely inevitable.

Neralith’s primary principles revolve around the inevitability of time, fate, and death. Her core values include:
- **Balance**: Neralith believes in the natural cycle of existence, where life, death, and time must remain in harmony. Interference with this balance, such as cheating death or altering the course of fate, is considered a violation of her will.
- **Inevitability**: All things come to an end, and Neralith ensures that this truth holds. She sees death as not the end, but a necessary transition in the cosmic order. Time marches forward, and fate is immutable; she ensures these forces remain constant.
- **Judgment and Fairness**: As the final judge of the dead, Neralith weighs the deeds of souls upon their passing. Her judgment is unbiased, as she does not favor good over evil, but simply looks at whether the soul fulfilled its fate.
- **Patience and Detachment**: Neralith is patient and unhurried, as time bends to her will. She is aloof from mortal affairs, observing the unfolding of events with **quiet detachment**, ensuring the threads of fate are woven without intervention.

Neralith interacts with mortals primarily through her *agents and clerics*, who serve as *guides, seers, and death’s intermediaries*. Her followers perform rites for the dead, ensure that the dying are at peace, and sometimes deliver prophetic insights into the fates of individuals or nations. Mortals do not seek Neralith’s favor lightly, as invoking her name is often associated with finality and transition.

With other divine beings, Neralith holds a neutral and detached stance. She is respected by all but feared by many, as her domain over time, fate, and death makes her a cosmic force that even the gods cannot escape. While she does not directly engage in conflicts or alliances, her decisions can shape the destiny of gods and mortals alike. When conflicts arise over the manipulation of fate or resurrection of the dead, Neralith may act, but otherwise, she remains above divine squabbles.

Neralith is characterized by her detached demeanor, reflecting the inevitability of her domain. She is calm, patient, and inscrutable, existing beyond the need for emotion or attachment. To mortals, she often seems distant, even cold, as she views the passage of time and the end of life with serene acceptance. Neralith rarely shows favoritism or personal intervention in the lives of mortals, trusting that fate will guide them to their appropriate end. However, when someone attempts to escape death, reverse time, or alter fate, she becomes an unyielding force of correction, ensuring that the cosmic balance is maintained. This often makes her appear ruthless, but in truth, she merely enforces the natural order. Her primary trait is her unwavering neutrality. She neither celebrates life nor mourns death; she simply guides all things through their course. In moments of direct interaction, she speaks with certainty** and finality**, embodying the weight of inevitability.

Neralith is often depicted as a figure of paradoxical beauty, both ageless and timeless, representing the duality of life and death. Artistic representations show her as a woman with silver hair and eyes that reflect the stars, symbolizing her dominion over time and fate. She is often depicted wearing a cloak of shifting colors, moving through shades of dawn, dusk, and midnight, indicating the passage of time. In some depictions, Neralith carries a spindle of fate, weaving the threads of mortal lives, while in others, she holds a scythe, symbolizing her role in cutting the threads of life when fate dictates. Her most iconic representation is a clock or hourglass held in her hand, with sand slipping through the glass representing the inevitability of death. In mythology, Neralith is often spoken of in terms of inevitability and transition. She is known as the Silent Watcher or the Weaver of Fate, who observes without interfering. Many stories speak of those who try to cheat fate or death, only to be reminded of Neralith’s unrelenting power. In these stories, she is not malevolent, but a cosmic force who restores the balance.

The symbols most associated with Neralith are an hourglass, symbolizing the passage of time and the inescapable end of life.  A spindle or loom representing fate and the weaving of mortal lives. The scythe, a  universal symbol of death, indicating her role as the reaper of souls. Finally, a clock or sundial, representing her dominion over the flow of time and its eternal march forward.

Her sacred places are often temples of stillness, where time seems to slow or stand still. These places serve as sanctuaries for reflection, where followers meditate on the inevitability of death and the course of fate. Her followers frequently leave offerings of silver coins, which are said to represent the payment to Neralith for safe passage into the afterlife.

Neralith holds a place of universal reverence among mortals, even if many fear her. All know that they will one day face her judgment, and even the gods acknowledge her power. She is seen as one of the most powerful deities, governing forces that even gods must submit to in the end. In the mortal world, Neralith’s influence can be found in burial rites, prophecies, and even the governance of time, as some rulers seek to align their calendars and decisions with the flow of fate as predicted by her clerics.

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
Neralith shares a profound respect with [[Thalor]], the god of knowledge and wisdom. Their domains often intersect, as [[Thalor]] seeks to uncover the hidden truths of the cosmos while Neralith governs the unfolding of those truths through time and fate. The two are often seen as complementary forces, with Neralith ensuring the flow of knowledge through time and [[Thalor]] guiding the wise toward understanding that knowledge. Their friendship is built on mutual respect and a shared belief in the inevitability of truth and the importance of balance in the universe.

Despite their seemingly opposed domains, Neralith and [[Elara]] maintain a respectful and balanced relationship. While Neralith governs death and the end of life, [[Elara]] presides over life and renewal. The two goddesses recognize the cyclical nature of life and death, understanding that both are essential to the continuation of the universe. They are not close allies, but their followers often work in harmony, performing rituals that honor both life and death in a natural, respectful cycle.

[[Aegis]] and Neralith share a quiet camaraderie, as both understand the importance of protecting the natural order. [[Aegis]] respects Neralith’s role in maintaining the flow of time and ensuring that death comes to all in its proper course. Their relationship is one of mutual trust, with [[Aegis]] often acting as a defender of the balance that Neralith enforces. [[Aegis]]' followers, particularly those who value protection over destruction, often venerate Neralith for ensuring the passage of time and the eventual peace of death.

### **Divine Rivalries and Adversaries**
Neralith and [[Kataklysmos]] are often at odds, as their domains are in direct conflict. While Neralith represents order, structure, and the inevitable flow of time, [[Kataklysmos]] thrives in disorder and upheaval. [[Kataklysmos]] seeks to disrupt the natural order of life, death, and fate, often attempting to bend or break the threads of fate that Neralith so carefully weaves. Their rivalry is one of cosmic opposition, with Neralith constantly working to restore balance after [[Kataklysmos]]’ chaotic incursions. This enmity shapes much of Neralith’s vigilance in the pantheon, as she views [[Kataklysmos]] as the greatest threat to the natural order.

Neralith holds a strong antagonism toward [[Morvael]], as the god of undeath represents a perversion of her domain. While death is a natural part of life, undeath is an abomination that defies the finality of death and the flow of time. [[Morvael]]’s necromancers and followers who practice raising the dead are often Neralith’s most hated enemies, as they disturb the balance she upholds. Their interactions are marked by hostility, with Neralith constantly working to dismantle the forces of undeath and return souls to their proper place in the afterlife.

[[Zerathos]], like [[Kataklysmos]], represents an existential threat to Neralith’s order. While not as destructive as [[Kataklysmos]], [[Zerathos]]' domain over madness and uncontrollable change presents a challenge to the structured and inevitable nature of fate. Neralith views [[Zerathos]] as a wild card, one who disturbs the order of the cosmos with unpredictable changes and twists of fate. Their relationship is not one of outright conflict but of constant tension, as Neralith seeks to mitigate the chaos and madness [[Zerathos]] brings into the world.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## The Church
Neralith’s teachings revolve around the acceptance of time’s passage, the embrace of one’s fate, and the inevitability of death. Her followers are encouraged to understand and respect the flow of time and to see death not as an end but as a natural part of existence. Fate is seen as a complex tapestry, where every thread is interconnected. Neralith teaches that while some aspects of fate are unchangeable, individuals have the power to shape certain parts of their destinies through their actions and choices.

The Church of Neralith is often found in serene, timeless places such as ancient groves, secluded monasteries, and cryptic catacombs. Temples are designed to reflect the passage of time and the beauty of fate’s intricate design, often featuring hourglasses, spirals, and symbols of life and death. The clergy, known as Chronomancers, dedicate their lives to understanding the mysteries of time, fate, and death, guiding others to accept their fate and the natural cycle of life.

### Hierarchy Titles
- **High Chronomancer:** The supreme leader of the church, overseeing the interpretation of fate and the balance of life and death.
- **Fateweaver:** Senior clergy who specialize in reading the threads of fate and understanding the flow of time, often serving as advisors and prophets.
- **Deathwarden:** Clergy who tend to the dead and perform rituals to honor the passage of souls, ensuring their journey to the afterlife.
- **Timekeeper:** Clergy responsible for maintaining the sacred places of worship and the relics that symbolize the passage of time and fate.

### Day-to-Day Activities
Followers of Neralith engage in activities that promote the understanding and acceptance of time, fate, and death. They perform rituals to honor the deceased, study ancient prophecies, and assist others in coming to terms with their destinies. Offerings to Neralith include timepieces, personal mementos of loved ones, and acts that respect the natural order of life and death.

### Important Ceremonies/Holy Days
- **The Turning of the Sands:** Celebrated during the solstices, marking the passage of time and the cyclical nature of life and death.
- **The Weaving of Fate:** A ceremony where followers gather to share and interpret omens and prophecies, seeking guidance from Neralith on their destinies.
- **The Veil of Shadows:** Held during lunar eclipses, symbolizing the thin veil between life and death, where followers honor the dead and perform rituals of passage.
- **The Hour of Reflection:** A day of introspection and meditation, where followers contemplate their place in the tapestry of fate and the flow of time.

### Priestly Vestments and Adventuring Garb
Priests of Neralith wear robes adorned with symbols of time and fate, often featuring intricate patterns that resemble the flow of sands and the weave of a tapestry. Their attire reflects their connection to the mystical forces of time and death. They often carry hourglasses or other timekeeping devices as symbols of their office and tools of their rituals. High-ranking priests may wear robes enchanted with protective spells and symbols of their mastery over time and fate.

In their adventuring garb, priests of Neralith favor practical yet elegant clothing that allows for ease of movement and the casting of spells. They wear enchanted cloaks and robes that enhance their abilities to perceive and manipulate time and fate. Chakrams are their weapon of choice, chosen for their symbolic connection to the cyclical nature of time and their effectiveness in combat. Their gear is designed to support their mystical pursuits and protect them in their quest to understand the mysteries of time, fate, and death.

## Notes


### **Organizations, Followers, and Worshippers**

1. **The Weavers of Fate**:
   One of the most prominent organizations devoted to Neralith, the Weavers of Fate are an ancient order of **oracles, seers, and priests** who serve as intermediaries between the goddess and the mortal world. These followers believe they are chosen to interpret the threads of fate and guide individuals, cities, and nations through their destined paths. They are often called upon to perform divinations, preside over **funerary rites**, and act as mediators when it comes to determining the will of fate. The Weavers see Neralith as an impartial, cosmic force and view their role as protectors of her vision for the future. They are instrumental in preventing tampering with fate and death, particularly by necromancers or other deities who attempt to alter the course of destiny.

2. **The Silent Watchers**:  
   This secretive group reveres Neralith in her aspect as the **Goddess of Time**. The Silent Watchers are **timekeepers and scholars**, devoted to preserving historical records, calendars, and the passage of time itself. They believe that by carefully watching the flow of time and ensuring its proper recording, they honor Neralith’s will. They play an important role in maintaining **chronological order** in the world, often acting as advisors to kings and leaders in matters of prophecy and the future.

3. **The Eternal Vigil**:
   A militant sect of Neralith's followers, the Eternal Vigil, is dedicated to combating **undead** and anyone who attempts to manipulate the natural cycle of death. They act as enforcers of Neralith’s law, seeking out necromancers, liches, and others who would disturb the balance of life and death. They see themselves as **Neralith’s chosen warriors**, defending the sanctity of the grave and the inevitability of death.

---








## Affiliated Orders
- **The Order of the Eternal Spiral:** An elite group of seers and mystics who delve into the mysteries of time and fate, providing guidance and prophecy.
- **The Guardians of the Veil:** A group of dedicated priests and warriors who protect the sacred places of death and ensure the proper respect for the deceased.