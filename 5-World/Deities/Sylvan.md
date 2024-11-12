---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Sylvan.png
pronounced: Sil-vin
aliases:
  - Greenfather, Beast Lord, The Surviver
alignment: True Neutral
portfolio: Nature, Seasons, Beasts, Survival
favored_weapon: Quarterstaff
symbol: Tree intertwined with vines, changing with the seasons
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
**God of Nature and the Seasons**

Sylvan embodies the forces of the natural world and the eternal cycle of growth, decay, and renewal. His domain encompasses all living things, from the smallest plants to the mightiest beasts, as well as the turning of the seasons that govern the rhythms of life. As a deity, Sylvan represents balance and harmony within nature, serving as both its protector and its living force.

He holds a pivotal place in the cosmic hierarchy as the embodiment of the natural world itself. His influence is vast, stretching across the forests, mountains, oceans, and skies. He governs the seasons, ensuring the orderly progression from spring to winter and back again, and he oversees the cycle of life and death in nature. Unlike some gods who seek control over mortal affairs, Sylvan’s focus is on maintaining the balance of ecosystems and the health of the natural world, acting more as a steward of nature than an active ruler.

In the cosmic hierarchy, Sylvan is regarded as a neutral deity, neither aligned with order nor chaos, good nor evil. His allegiance is solely to nature and its cycles, making him both a guardian and enforcer of natural laws. Other gods of life, death, and creation often seek his wisdom or ally with him to maintain the balance of life on the material plane.

Sylvan’s values are rooted in the natural order, and he emphasizes balance, growth, and the interconnectedness of all things. His most important principles are:
- **Harmony and Balance**: Sylvan believes that nature must remain in balance, and disruption of this balance—whether by mortals, gods, or unnatural forces—must be corrected. He allows the strong to thrive but ensures the weak are also given the chance to endure, embodying the idea of survival with purpose and dignity.
  - **Cyclical Nature**: Life and death are part of an eternal cycle, and both are necessary. Sylvan teaches his followers that death is not an end but a transformation, making way for new growth. This principle extends to the changing seasons, where each season plays its vital role in the health of the world.
- **Respect for Nature**: Mortals and immortals alike are expected to respect nature, neither exploiting it nor neglecting it. Sylvan’s followers often act as protectors of the wilderness, ensuring that forests are not razed for expansion, animals are not hunted to extinction, and resources are used sustainably.
- **The Power of Renewal**: Just as the earth regenerates after a fire, Sylvan teaches that renewal is inherent in all things. He values adaptability and believes that even in destruction, there is opportunity for rebirth and restoration.

Sylvan interacts with mortals indirectly, often through signs and omens in nature. His influence is felt in the blooming of spring, the harvest of autumn, and the biting cold of winter. Mortals may receive his blessings in the form of bountiful harvests, healthy forests, or good weather, but those who harm the natural world may feel his wrath through storms, droughts, or animal attacks. He is a distant but ever-present force, guiding mortals to live in harmony with nature without overt intervention.

Sylvan is typically portrayed as a calm and patient deity, slow to anger but swift to act when the balance of nature is threatened. He is not a god of extremes but prefers equilibrium—he can bring both fierce storms and gentle rains, nurture life and facilitate decay. His divine personality reflects the qualities of nature itself: sometimes nurturing, sometimes harsh, but always maintaining the larger cycle of existence. 

In art and mythology, Sylvan is often depicted as a shapeshifter, appearing in many forms that reflect different aspects of nature. He might take the form of a towering oak tree, an enormous stag, a wild wolf, or even a rolling storm. He is often shown as half-beast, half-man, symbolizing his connection to all life, and he frequently carries a staff made of living wood or wears a crown of leaves. His appearance shifts with the seasons, embodying the vitality of spring, the abundance of summer, the decay of autumn, and the stillness of winter.

One of Sylvan’s primary symbols is the tree, often depicted as a mighty oak or a world tree connecting all forms of life. It represents both growth and the connection between the heavens, earth, and underworld. Sylvan is frequently represented by the cycle of seasons, each corresponding to an aspect of his nature. In religious texts or art, these are shown as four distinct figures—each embodying one season—or as a circular wheel symbolizing the eternal cycle of nature. He is often depicted wearing an antlered crown, a symbol of his dominion over the wild and his role as a protector of animals and wildlife.

Sylvan is revered by many groups, particularly those who live close to nature such as druids, rangers, and farmers. His worship is often conducted in sacred groves, where rituals are performed to ensure good harvests, healthy livestock, and the protection of wild places. His followers strive to live in harmony with the land, and many see it as their duty to protect the wilderness from deforestation, pollution, or destruction.

In mythology**, Sylvan is seen as one of the oldest gods, predating many of the younger deities and watching over the creation of the world’s first forests, oceans, and mountains. He is a god of patience, allowing time for nature to unfold as it must, but he is also a force of reckoning when balance is disturbed, sending storms or wild beasts to restore equilibrium.

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
Sylvan shares a strong, symbiotic relationship with [[Elara]], the goddess of life. Their domains are intertwined, with [[Elara]] embodying the creation and renewal of life and Sylvan ensuring that life is nurtured and grows in harmony with nature. The two deities are often seen as partners in the cycle of life, with [[Elara]] guiding the birth and health of living creatures while Sylvan oversees their place in the natural world. Together, they maintain the balance of creation, fertility, and the flourishing of ecosystems. Their cooperation reflects the natural order, where life and nature coexist symbiotically. In religious practice, druids and healers often venerate both deities, seeking their combined blessings for bountiful harvests, healthy forests, and the preservation of life. Festivals celebrating the changing of the seasons often honor both Sylvan and [[Elara]], marking their shared role in ensuring life’s continuity.

While their domains differ, Sylvan has a friendly relationship with [[Liriel]], as both gods respect the freedom and unpredictability of nature. [[Liriel]]’s wanderers and travelers often invoke Sylvan’s blessings when venturing through untamed wilderness, seeking protection from natural hazards and the guidance of his creatures. In return, Sylvan's followers, especially those who serve as rangers or pathfinders, look to [[Liriel]] when navigating the more unpredictable aspects of the wild. This alliance highlights the interplay between freedom and nature, where the untamed aspects of the world inspire exploration and discovery, while nature itself provides the canvas for such ventures.

While Sylvan and [[Aurelius]] seem to represent opposing forces—nature and civilization—they share a mutual respect based on the balance between chaos and order. [[Aurelius]]’s role in maintaining civilization can be seen as complementary to Sylvan’s domain, as humans build societies that, when in harmony with nature, do not disrupt the natural order. Their relationship, while sometimes tense, reflects the belief that order and nature can coexist, though they both oppose forces that seek to undermine balance (such as [[Kataklysmos]] and other chaotic deities). In ancient myths, Sylvan and [[Aurelius]] are sometimes depicted as negotiating the boundaries of civilization, with [[Aurelius]] crafting laws that respect nature’s domain, and Sylvan allowing for the growth of sustainable settlements within the wild.

### **Divine Rivalries and Adversaries**
[[Malakar]] represents the antithesis of Sylvan’s values. While Sylvan accepts the necessity of death and decay as part of the natural cycle, [[Malakar]]’s influence over corruption and disease disrupts the balance that Sylvan seeks to maintain. Their rivalry is born from Sylvan’s disdain for [[Malakar]]’s perversion of decay into something malignant and destructive, rather than an opportunity for renewal. This conflict has played out in myths where Sylvan fights to protect forests and ecosystems from [[Malakar]]’s plagues, preventing unnatural rot and pestilence from spreading unchecked. [[Malakar]]’s followers, who often include those seeking to harness disease and corruption for power, view Sylvan as an obstacle to their goals, while Sylvan’s worshippers see [[Malakar]]’s influence as an unnatural blight that must be resisted.

As the embodiment of chaos and destruction, [[Kataklysmos]] represents everything Sylvan despises. Where Sylvan values balance and renewal, [[Kataklysmos]] seeks to upend the natural order through unchecked destruction. Their adversarial relationship is one of the most intense in the pantheon, as Sylvan’s role is to protect the natural world from the very forces of chaos that [[Kataklysmos]] embodies. In legends, Sylvan is often depicted as the defender of nature against the wild storms and destructive forces unleashed by [[Kataklysmos]]. Their ongoing conflict represents the eternal struggle between nature’s delicate balance and the unpredictable, destructive forces that threaten to destroy it.

Sylvan’s relationship with [[Morvael]], the god of undeath, is one of fundamental opposition. Sylvan views undeath as an aberration, an unnatural state that disrupts the cycle of life and death. Where death should lead to decay and renewal, [[Morvael]]’s intervention keeps the dead trapped in a state of unnatural stasis, which Sylvan cannot tolerate. Sylvan’s followers, particularly druids and nature priests, see undead as a violation of nature, and often engage in rituals to purify corrupted lands or combat the spread of necromancy. This rivalry is seen as a cosmic battle between the forces of life and the unnatural persistence of undeath, shaping much of Sylvan’s interactions with other divine and mortal entities.

Sylvan's relationship with [[Zerathos]], the god of madness and change, is strained. While Sylvan acknowledges that change is an essential part of nature (e.g., seasons changing, life evolving), [[Zerathos]]'s brand of chaotic and uncontrolled transformation is an affront to the ordered cycles Sylvan oversees. The two deities often come into conflict when [[Zerathos]]’s influence threatens to warp natural laws, particularly when his madness leads to unnatural mutations or environmental chaos. In religious texts, [[Zerathos]] is sometimes depicted as a dangerous force that upsets the natural order, and Sylvan’s followers see it as their duty to contain or neutralize such chaotic influences to preserve the balance of the world.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## The Church
Sylvan’s teachings emphasize respect for all living things, the preservation of natural habitats, and the wisdom gained from observing the cycles of the seasons. Followers are encouraged to live in harmony with nature, cultivate sustainable practices, and develop survival skills that honor the interconnectedness of all life. Sylvan teaches that through understanding and respect for the natural world, individuals can find strength, resilience, and spiritual fulfillment. He stresses the importance of safeguarding biodiversity and protecting endangered species. The Church of Sylvan can be found in sacred groves, remote wilderness sanctuaries, and among nomadic tribes that follow seasonal migrations. Temples are designed to blend with natural surroundings, featuring open-air sanctuaries, arboreal altars, and shelters crafted from organic materials. The clergy, known as Wardens, are druids, rangers, and herbalists who dedicate their lives to preserving ecosystems and promoting sustainable living.

### Hierarchy Titles
- **High Warden:** The supreme leader of the church, responsible for overseeing conservation efforts and maintaining balance within natural ecosystems.
- **Wildmaster:** Senior clergy who commune with beasts and spirits of the wild, guiding rituals and ceremonies that honor nature’s cycles.
- **Harvester:** Clergy who specialize in herbalism and sustainable agriculture, cultivating crops and medicinal plants in harmony with the environment.
- **Pathfinder:** Clergy who explore and map natural landscapes, discovering hidden sanctuaries and ancient groves to protect from exploitation.

### Day-to-Day Activities
Followers of Sylvan engage in activities that promote conservation, sustainable living, and spiritual communion with nature. They tend to sacred groves, conduct rituals to honor seasonal changes, and educate communities on the importance of biodiversity. Offerings to Sylvan include seeds, herbs, and efforts to restore and protect natural habitats that demonstrate reverence for the balance of life.

### Important Ceremonies/Holy Days
- **The Festival of Greening:** Celebrated during the spring equinox, where followers gather to plant trees, renew gardens, and celebrate the rebirth of life in nature.
- **The Hunt’s Rest:** A ritual held during autumnal equinoxes, where followers give thanks for the bounty of the hunt, honoring the sacrifice of beasts for sustenance.
- **The Moonlit Vigil:** A ceremony conducted during lunar eclipses, where followers meditate under the stars, seeking guidance from Sylvan and the spirits of the wild.

### Priestly Vestments and Adventuring Garb
Priests of Sylvan wear attire that blends with natural surroundings, crafted from leaves, bark, and animal hides. Their clothing is adorned with symbols of wildlife and seasonal cycles, reflecting their dedication to preserving natural harmony. They carry quarterstaffs as symbols of their connection to the earth and their readiness to defend sacred groves and wilderness sanctuaries. High-ranking priests may wear cloaks enchanted with spells that enhance their ability to commune with beasts and influence the natural world.

In their adventuring garb, priests of Sylvan favor lightweight and practical clothing that allows for ease of movement and camouflage in natural environments. They wear enchanted amulets and rings that offer protection against natural hazards and enhance their ability to communicate with animals. Quarterstaffs are their weapon of choice, chosen for their versatility in both combat and rituals that honor nature’s spirits. Their gear is designed to support their role as protectors of the wild, aiding them in their quest to maintain balance and harmony in the natural world.

## Notes



### **Organizations and Followers**

#### **Druids and Rangers**
Sylvan’s most devoted followers are **druids, rangers, and other nature-based worshipers** who strive to protect the natural world. These groups are often organized into **circles** or **groves**, sacred spaces where they commune with nature and perform rituals to maintain harmony between mortals and the wild. Druids in particular view themselves as **guardians of the natural order**, and they often take a **proactive role in protecting forests, animals, and ecosystems** from destruction, whether by mortal hands or divine forces.

Rangers who serve Sylvan act as protectors of the wilderness, guiding travelers through dangerous areas and ensuring that the balance of nature is upheld. They often fight against those who would harm the natural world, from poachers to necromancers who seek to raise undead in sacred groves.










## Affiliated Orders
- **The Circle of Seasons:** A druidic order that studies the intricate balance of the seasons, influencing weather patterns and ensuring fertility of the land.
- **The Pack Wardens:** A network of rangers and animal caretakers who protect endangered species, track poachers, and enforce laws against wildlife exploitation.