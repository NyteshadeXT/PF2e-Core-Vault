---
tags:
  - "#Character"
  - "#NPC"
  - "#Deity"
art: zz_Attachments/Elara.png
pronounced: i-lar-a
aliases:
  - The Healing Light, Lady of Renewal
alignment: Neutral Good
portfolio: Life, Healing, Renewal, Mercy
domains: Healing, Sun, Protection
favored_weapon: Scimitar
symbol: Dove with a lily
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
**Goddess of Life, Healing, Renewal, and Mercy**

Elara is the goddess of Life, Healing, Renewal, and Mercy. She reigns over all things that pertain to the nurturing and sustenance of life. Her domain is expansive, reaching from the smallest seed to the grandest creature, touching every living being with her divine essence. In the cosmic hierarchy, Elara occupies a vital role as the caretaker of life itself. She is revered not only for her healing powers but also for her profound mercy, which grants second chances, renewal, and redemption. Among the gods, she is seen as a gentle force of compassion, often mediating disputes and advocating for life in all its forms.

Elara embodies the principles of mercy, compassion, renewal, and the sanctity of life. She values every living being, believing that all deserve a chance to grow, heal, and transform. To her, mercy is not weakness but the greatest strength, as it creates opportunities for change and understanding. She is known for her endless patience and willingness to forgive, always advocating for rehabilitation over punishment, nurturing over destruction.

Elara is a gentle and nurturing deity, often appearing calm and serene even in times of great strife. Her demeanor is soft, welcoming, and understanding, marked by a deep empathy for all beings. She is compassionate and kind but firm in her convictions that every soul deserves a chance to seek redemption or renewal. Unlike many deities, Elara rarely resorts to violence or force; instead, she prefers to guide others through healing words and acts of kindness. Elara is particularly protective of the vulnerable—children, the sick, the elderly, and those whose lives have been unjustly marred by suffering. She takes great interest in mortals, often interacting with them directly or through her avatars. Her presence is described as soothing and warm, akin to the feeling of a comforting embrace or the first rays of dawn after a long, dark night.

In art and religious iconography, Elara is frequently depicted as a graceful woman of radiant beauty, with an aura of soft, golden or emerald light surrounding her. Her hair is often portrayed as a flowing cascade of silver or green, symbolizing the natural world's renewal. She is typically shown with a serene smile, her hands extended in a gesture of offering or healing. Elara is often portrayed alongside symbols of life and renewal, such as blooming flowers, fresh leaves, running water, or the rising sun. In many depictions, she carries a staff entwined with ivy or laurel, symbolizing growth and continuity. A pair of gentle, nurturing hands is another common motif, often cupping a small seed or a newborn creature.

In religious texts, Elara is described as the "Mother of Mercy," "Bearer of Life," and the "Restorer of Souls." Stories often recount her acts of compassion, such as healing entire villages afflicted by plague, bringing peace to warring factions, or comforting spirits lost between life and death. One popular myth tells of Elara journeying to the depths of the underworld to save the soul of a mortal who had died unjustly, negotiating with death itself to secure a second chance for the innocent.

Elara's most sacred symbols include the lily, representing purity and renewal; the dove, symbolizing peace and mercy; and the oak leaf, which embodies strength in growth and renewal. She often manifests as a soft, warm light or as a gentle breeze carrying the scent of fresh flowers. At times, she appears as a figure cloaked in silver and green robes, her hands glowing with a gentle healing light. Her sacred animals include the deer, representing gentleness and grace, and the phoenix, embodying renewal and rebirth. Her sacred plants include lavender for healing and peace, and willow for resilience and renewal.

Elara holds a significant role in the pantheon, especially among mortals. Her influence is felt in every corner of the world where life struggles to grow, heal, or renew. She is a symbol of hope in dark times, a beacon of mercy when all seems lost. Her followers include healers, midwives, caregivers, and anyone who values life and seeks to alleviate suffering. Her divine influence is also felt in natural cycles: the blooming of flowers in spring, the regeneration of forests after a fire, the healing of wounds, and the quiet mercy of a gentle death for those who have suffered too long. Her temples are often places of healing and refuge, where the sick and the weary find comfort and care.

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
Elara shares a close and balanced relationship with [[Aurelius]]. While [[Aurelius]] upholds law and order, Elara offers the mercy and compassion that temper justice with empathy. They complement each other, forming a powerful alliance in the cosmic balance. This friendship emphasizes the importance of mercy within justice and underscores that laws should serve the greater good of life and renewal. Their followers often collaborate, with Elara’s clerics serving in [[Aurelius]]' courts as counselors or advocates for rehabilitation and mercy. Together, they maintain the balance between justice and compassion in mortal societies.

Elara and [[Arcarios]] share a mutually respectful relationship, built on a shared love for the mysteries of life and magic. They often collaborate to explore the deeper mysteries of existence, where life and magic intertwine. This relationship has expanded Elara’s understanding of life beyond the physical realm, including the arcane and the spiritual. It also aligns her with those who use magic for healing and renewal. Elara’s followers often work with the disciples of [[Arcarios]] in magical healing practices or in seeking arcane solutions to plagues and diseases. Her temples frequently provide sanctuary for mages seeking rest or renewal.

### **Divine Rivalries and Adversaries**
Elara views [[Kataklysmos]] as her antithesis. While she nurtures and heals, [[Kataklysmos]] seeks to destroy and sow chaos. She sees his actions as a threat to the balance of life and mercy she holds dear. This rivalry strengthens Elara’s resolve to protect and renew life in the face of chaos and destruction. She becomes the counterbalance, mending what [[Kataklysmos]] breaks. Elara often sends her followers to aid areas struck by chaos or destruction, healing the wounded and restoring the devastated. Her clerics are often found in the wake of disasters, working tirelessly to undo the damage wrought by [[Kataklysmos]]' followers.

Elara has a complicated relationship with [[Zerathos]]. While she respects the necessity of change, she opposes madness that harms the innocent or destroys without purpose. This relationship pushes Elara to advocate for meaningful, positive change that preserves life and renews hope, rather than change that leads to suffering or madness. Elara’s clerics often intervene in places where [[Zerathos]]’ influence leads to madness or despair, offering healing and counseling to those affected by chaotic changes.

Life and death, healing and decay—Elara and [[Malakar]] represent two sides of an eternal cycle. While they may not always engage in open conflict, their domains naturally oppose one another. [[Malakar]]'s influence spreads when Elara’s forces falter, making him her perpetual adversary. Mortals might invoke Elara’s name to repel [[Malakar]]’s blights, especially in times of plague.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within the divine realm. Describe the current actions, involvements, or initiatives of this deity. Are they undertaking new endeavors, guiding mortals, or engaging in conflicts with other divine entities? Additionally, explore any recent events or developments that have affected the deity's influence or relationship with mortals or other deities. How are these current events shaping their standing within the pantheon or their interactions with worshippers?

## The Church
Elara teaches that life is sacred and must be protected and nurtured. Healing and renewal are paramount, and mercy should be extended to all beings. Her followers are encouraged to bring light into the darkest places, offer comfort to the suffering, and work tirelessly to heal the wounds of both body and spirit.

The Church of Elara is beloved by the public, known for its charitable works and healing services. Temples are often serene sanctuaries located near natural sources of light and water, symbolizing the connection to life and renewal. Clergy members are known as Healers, Lightbringers, and Wardens, each fulfilling specific roles within the church hierarchy. Healers focus on medical and spiritual healing, Lightbringers spread Elara's teachings, and Wardens protect the temples and those in need.

### Hierarchy Titles
- **High Luminary**: The highest-ranking clergy member, overseeing major temples and regional church activities.
- **Healer**: Senior clergy specializing in healing and renewal practices.
- **Lightbringer**: Clergy responsible for teaching and spreading Elara's doctrines.
- **Warden**: Clergy dedicated to protecting the vulnerable and the church's sanctuaries.

### Day-to-Day Activities
Members of the Church of Elara are involved in various activities, including providing medical care, offering counseling and spiritual guidance, conducting renewal rituals, and protecting those in need. They are expected to tithe a portion of their income to the church and dedicate their time to acts of healing and mercy.

### Important Ceremonies/Holy Days
- **Festival of Renewal**: An annual celebration of life and healing, where the sick are healed and the community comes together in joy.
- **Day of Light**: Commemorating Elara's first appearance, marked by rituals that emphasize renewal and hope.
- **Mercy's Embrace**: A time for acts of charity and compassion, where followers are encouraged to extend mercy to those in need.

### Priestly Vestments and Adventuring Garb
Priests of Elara wear robes of white and green, symbolizing purity and renewal. Healers wear robes adorned with symbols of the sun and nature, while Lightbringers often carry lanterns or staves of light. Wardens don more practical garments, ready to protect and serve.

Clerics of Elara in the field typically wear practical, light armor that allows for freedom of movement, adorned with the symbol of a sunburst. This garb reflects their role as healers and protectors, enabling them to provide aid and mercy even in the most challenging environments.

## Notes

**3. Organizations and Followers:**

- **The Order of the Healing Light:**
  - **Perception of Elara:** This order views Elara as the ultimate source of healing and renewal, dedicating their lives to her principles of mercy and compassion. They see themselves as her hands on earth, tasked with alleviating suffering.
  - **Role in Elara’s Sphere of Influence:** The Healing Light is the primary enforcers of Elara's healing and mercy, establishing hospitals, sanctuaries, and hospices in her name. They are widely respected and welcomed in nearly all realms.
  - **Impact on Interactions:** Their widespread

- **Order of the Dawn**: A knightly order sworn to protect the church and its healing missions.
- **Guardians of Light**: A group dedicated to spreading Elara's healing light and teachings.





