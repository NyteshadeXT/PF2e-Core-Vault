---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Illyria.png
pronounced: Ill-lyr-ee-a
aliases:
  - The Creator
alignment: Chaotic Good
portfolio: Creativity, Crafting, Invention, Inspiration, Creation
domains: Inspiration
favored_weapon: Glaive
symbol: An artist's palette with a quill and hammer crossed over it
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
**Goddess of Creativity, Crafting, Invention, Inspiration, and Creation**

Illyria is the goddess of Creativity, Crafting, Invention, Inspiration, and Creation. She presides over the birth of new ideas, the art of making, and the endless drive to innovate and transform. Her domain includes everything from the spark of inspiration in a poet’s mind to the forge where a blacksmith hammers out new tools, from the brushstrokes on a canvas to the architecture of grand cathedrals. In the cosmic hierarchy, Illyria is regarded as the Muse of the Divine, the source of all creative endeavors and the patron of all who seek to bring something new into the world. She occupies a vital role as a catalyst for progress and change, often collaborating with other deities to breathe life into their plans through invention and innovation.

Illyria embodies the principles of creativity, innovation, self-expression, and the endless pursuit of new ideas. She values originality, ingenuity, and the courage to explore the unknown. For her, creation is both a form of self-expression and a fundamental aspect of existence. She believes in progress through invention, growth through experimentation, and transformation through creative thought. To Illyria, every mistake is an opportunity to learn, and every success is a stepping stone to a new challenge.

Illyria is a dynamic and vibrant deity, constantly moving and shifting in her thoughts and actions. She is full of boundless energy and curiosity, often seen exploring the limits of her own creativity. Her personality is multifaceted—at times she is intense and focused, lost in a whirlwind of ideas; at other times, she is light-hearted and whimsical, delighting in the unpredictable nature of inspiration. She is highly supportive of those who dare to create, regardless of their medium or skill level. She encourages experimentation, even in the face of failure, and is known for her forgiving nature when mistakes are made in the pursuit of innovation. Her interactions with mortals and other divine beings are often characterized by a playful yet driven nature, always seeking to inspire or challenge those around her to think outside the box.

Illyria is less interested in tradition or convention and more focused on what *could be*. She often nudges mortals and deities alike toward novel approaches, favoring bold experiments over established norms. Her demeanor is infectious, with a sense of wonder and enthusiasm that is hard to resist.

Illyria is often depicted as a striking figure, her form ever-changing to reflect the fluid nature of creativity. In some depictions, she appears as a radiant woman with bright eyes and hair that shifts through a spectrum of colors, representing the myriad possibilities of creation. Her attire varies—sometimes she wears the practical garb of a blacksmith or inventor, at other times the elegant robes of an artist or poet. She is often portrayed holding tools of creation, such as a hammer, quill, paintbrush, or a loom, each glowing with a divine light.

In mythology, Illyria is described as the "Mother of Invention," the "Muse of the Divine," and the "Eternal Creator." Tales often recount her great acts of creativity, such as crafting the first tools for mortals, teaching them to build and create, or inspiring great works of art and literature. One popular myth tells of how Illyria, upon seeing the world in darkness, fashioned the first stars by scattering her silver tears across the sky.

Illyria's symbols is an artist's palette with a quill and hammer crossed over it.  Illyria often manifests as a burst of light or a cascade of sparks, reflecting the sudden and often unpredictable nature of inspiration. She may also appear as a voice in the mind of a creator or as a fleeting vision that stirs the heart with new ideas.

Illyria is a deity of tremendous significance to artists, inventors, craftsmen, and anyone who seeks to bring something new into the world. Her influence is felt in every spark of creativity, every act of creation, and every moment of inspiration. She is worshipped by a diverse range of followers, from blacksmiths to poets, architects to alchemists. Her temples are less traditional than most; they are often workshops, galleries, theaters, and academies where creativity is celebrated and nurtured.

Her influence extends to all aspects of creation, from the mundane to the divine. She plays a crucial role in maintaining the balance between stasis and progress, constantly challenging the status quo and driving the cosmos toward innovation and evolution.

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
Illyria and [[Arcarios]] share a deep bond built on their mutual love for discovery and creation. [[Arcarios]] provides the arcane energy and mystical knowledge, while Illyria channels that into practical, tangible forms. Together, they foster magical innovation. This alliance reinforces Illyria’s value of merging creativity with knowledge, and it helps bridge the gap between the mundane and the magical in invention. Their followers frequently collaborate in magical and technological endeavors, blending arcane energies with new inventions, leading to the creation of powerful enchanted artifacts and revolutionary spells.

Illyria and [[Elara]] have a harmonious relationship. While [[Elara]] nurtures life, Illyria inspires the creativity needed to sustain and enrich it. They often work together to create solutions to natural problems and advance society. This friendship emphasizes creativity as a means to heal and renew, reinforcing the idea that creation can be a force for positive change. Illyria’s followers often assist [[Elara]]’s clerics by creating innovative healing tools, medicines, and devices, or developing new methods to restore devastated lands.

### **Divine Rivalries and Adversaries**
Illyria and [[Zerathos]] have a contentious relationship. While both embody change, Illyria values purposeful, creative change, whereas [[Zerathos]] revels in chaos and madness. Illyria sees [[Zerathos]]’ uncontrolled chaos as wasteful and destructive, rather than productive. This rivalry sharpens Illyria's focus on creativity with purpose and intent. She becomes a force against mindless destruction and chaos, advocating for structured innovation. Illyria’s followers often counteract the influence of [[Zerathos]] by creating order and stability through their works, reinforcing the value of creativity that builds rather than destroys.

Illyria sees [[Kataklysmos]] as a direct adversary. His domain of destruction is the polar opposite of her creative energies. She actively works against his efforts to destroy what has been created. This opposition solidifies her commitment to preserving the fruits of creation and crafting objects and ideas that can endure even in the face of chaos and destruction. Her followers are often at the forefront of rebuilding efforts after disasters caused by [[Kataklysmos]], using their skills to restore what was lost and to create structures or devices resistant to future destruction.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## The Church
Illyria’s teachings emphasize the power of imagination, the joy of creation, and the transformative impact of innovation. Followers are encouraged to embrace their creative instincts, pursue new ideas fearlessly, and push the boundaries of what is possible. Illyria teaches that every creation, whether artistic, technological, or magical, is an expression of the divine spark within mortals. She also stresses the responsibility of creators to consider the consequences of their innovations and to use their talents for the betterment of society.

The Church of Illyria can be found in bustling artisan districts, academic workshops, and centers of innovation. Temples are designed to foster creativity and collaboration, providing workshops, studios, and laboratories where followers can experiment and create. The clergy, known as Artificers, are skilled artisans, inventors, and scholars who dedicate their lives to advancing knowledge and inspiring new creations.

### Hierarchy Titles
- **Master Artificer:** The supreme leader of the church, responsible for guiding the direction of creative endeavors and fostering innovation.
- **Inventor-in-Residence:** Senior clergy who lead research and development projects, pioneering new technologies and magical advancements.
- **Craftmaster:** Clergy who specialize in traditional crafts and artistic disciplines, preserving cultural heritage and mentoring new artisans.
- **Visionary:** Clergy who inspire and mentor young creators, fostering creativity and guiding them towards innovative breakthroughs.

### Day-to-Day Activities
Followers of Illyria engage in activities that promote creativity, invention, and artistic expression. They collaborate on projects, teach workshops, and host exhibitions to showcase their creations. Offerings to Illyria include works of art, innovative designs, and successful inventions that push the boundaries of knowledge and imagination.

### Important Ceremonies/Holy Days
- **The Festival of Invention:** Celebrated during the solstices, where artisans and inventors gather to unveil their latest creations and compete for recognition.
- **The Artisan’s Gala:** A ceremony honoring master craftsmen and artists, showcasing their finest works and celebrating their contributions to society.
- **The Forge of Inspiration:** A ritual where followers seek divine guidance and inspiration from Illyria, meditating on creative visions and breakthrough ideas.
- **The Illumination Procession:** A parade held during lunar eclipses, where followers carry lanterns and display illuminated artworks, symbolizing the enlightenment brought by creativity.

### Priestly Vestments and Adventuring Garb
Priests of Illyria wear attire that reflects their dedication to creativity and craftsmanship. Their clothing is adorned with symbols of artistic tools and design elements, embodying the spirit of innovation. They often carry glaives as symbols of their readiness to defend creative pursuits and uphold the sanctity of artistic expression. High-ranking priests may wear robes enchanted with spells that enhance their crafting abilities and inspire creativity in those around them.

In their adventuring garb, priests of Illyria favor practical yet stylish attire that allows for freedom of movement and the expression of their creative spirit. They wear enchanted cloaks and gloves that protect them during their creative pursuits and enhance their artistic skills. Glaives are their weapon of choice, chosen for their versatility in both combat and artistic endeavors. Their gear is designed to support their role as innovators and creators, aiding them in their quest to inspire new ideas and push the boundaries of knowledge and imagination.


## Notes


**3. Organizations and Followers:**

- **The Guild of Artisans and Innovators:**
  - **Perception of Illyria:** This guild venerates Illyria as their divine patron and muse, viewing her as the ultimate source of all creative inspiration. They believe that all inventions, from the simplest tool to the grandest architectural marvel, are gifts from her.
  - **Role in Illyria’s Sphere of Influence:** The guild is a central

- **The Guild of Innovators:** An elite group of inventors and technomancers who push the boundaries of magical and technological advancements, solving challenges and improving quality of life.
- **The Artisan Collective:** A network of artists and craftsmen who collaborate on large-scale projects, beautifying cities and spreading cultural appreciation through their works.