---
tags:
  - "#Location"
  - "#Region"
art: zz-Attachments/region-prismatic-canopy.png
pronounced: pris-mat-ic can-o-pee
terrain:
  - Forest
  - River
  - Ruins
  - Waterfalls
  - Hills
organization:
location:
aliases:
dominion:
---


> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Art
>> #### Art
>>  |
>> ---|---|
> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[textArea:pronounced]`
> **Aliases** | `INPUT[list:aliases]` |
> **Terrain** | `INPUT[Terrain][inlineListSuggester:terrain]` |
> **Dominion** | `INPUT[inlineListSuggester(optionQuery(#Character OR #Organization AND !"z_Templates"), useLinks(partial)):dominion]` |
> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
> **Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |

> [!infobox]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Terrain** | `VIEW[{terrain}][text]` |
> **Dominion** | `VIEW[{dominion}][link]` |
> **Location** | `VIEW[{location}][link]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

> [!metadata|map]- Map
> ```leaflet
> id: TBD
> image: [[PlaceholderImage.png]]
> lock: true
> recenter: true
> noScrollZoom: false
> ### Use this [LINK](https://docs.google.com/spreadsheets/d/1jKQxktYSUFcCJhEkAAPr1wMVBTqUdpEfA5XveUXI17I/edit?usp=sharing) to work out your map's bounds.
> ### bounds: [[0,0], [0, 0]] (Remove the ### and these parentheses with the content within from this line to enable the bounds)
> height: 600px
> width: 640px
> lat: 0
> long: 0
> minZoom: 1
> maxZoom: 6.5
> defaultZoom: 1
> zoomDelta: 0.5
> unit: miles
> scale: 1
> darkMode: false
> ```

> [!metadata|settlements]- Settlements
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, settlementtype AS Type, defence AS Defences, join(link(dominion), ", ") AS "Dominion"
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "Settlement")
> SORT nation ASC, file.name ASC
> ```

> [!metadata|location]- Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(organization), ", ") AS "Organization(s)", join(link(dominion), ", ") AS "Dominion"
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "POI")
> SORT tags DESC, poitype ASC, file.name ASC
> ```

> [!metadata|organizations]- Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "5-World"
> WHERE contains(location, this.file.link) AND contains(tags, "Organization")
> SORT organizationtype ASC, file.name ASC
> ```

> [!metadata|characters]- Characters
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(occupation, ", ") AS "Occupations", join(link(organization), ", ") AS "Organizations"
> FROM "Campaign"
> WHERE econtains(location, this.file.link) AND contains(tags, "Character") AND !contains(condition, "Dead")
> SORT tags DESC, file.name ASC
> ```

> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "5-World"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC
> ```

## Overview 

The Prismatic Canopy is a realm of wonder and beauty, where the canopy above is adorned with crystalline leaves that shimmer and dance in the sunlight. Each leaf refracts light in a kaleidoscope of colors, painting the forest with a mesmerizing and ever-changing tapestry of hues. Sunbeams filter through the canopy, casting prismatic rays that illuminate the forest floor in a dazzling display of light and shadow.  The vibrant hues of the Prismatic Canopy have attracted a diverse array of creatures that have adapted to the unique environment. From iridescent birds with feathers that gleam like precious gemstones to insects with wings that shimmer in the sunlight, the forest is teeming with life that is as colorful as it is diverse. These creatures have evolved specialized traits and abilities to thrive amidst the crystalline leaves, forming intricate ecosystems that are as beautiful as they are complex.

The Prismatic Canopy is not only a place of natural beauty but also a treasure trove of rare and valuable crystals. Embedded within the crystalline leaves and hidden beneath the forest floor are precious gems and minerals that are coveted by seekers and collectors alike. From sparkling diamonds to shimmering sapphires, the forest holds untold riches waiting to be unearthed by those brave enough to delve into its depths.

The Prismatic Canopy is a sought-after destination for seekers and explorers seeking both natural beauty and valuable treasures. Travelers from far and wide flock to the forest in search of rare crystals and exotic creatures, drawn by the allure of its vibrant hues and shimmering light. Yet, the forest is not without its dangers, and those who venture too deep may find themselves ensnared by the enchanting beauty of the Prismatic Canopy, unable to escape its captivating embrace.  Legends speak of guardian spirits that dwell within the depths of the Prismatic Canopy, ancient beings that watch over the forest and protect its treasures from would-be plunderers. These ethereal entities are said to be as elusive as they are powerful, appearing only to those who show reverence for the natural beauty of the forest and respect for its inhabitants. Those who earn the favor of the guardian spirits may find themselves blessed with good fortune and safe passage through the enchanted realm.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Capture the pulse of the present moment by examining current events. Dive into the ongoing occurrences, societal shifts, or global happenings that are shaping the world today. Analyze the trends, controversies, or innovations unfolding in real-time. What stories are making headlines, and how might these current events influence the future trajectory of the society?

## History

> [!kirk|info] Prompt (Remove me)
> Delve into the historical legacy of the inhabitants of this region. Explore the diverse cultures, migrations, and societal developments that have shaped the people's identity and contributed to the region's tapestry. Investigate the stories of resilience, innovations, and cultural amalgamations that reflect the rich history within this region. How have the people's experiences and interactions shaped the course of this region's history?

## Notes

> [!tip]+ Flora of the Prismatic Canopy
> ### Prismbloom Orchids
> Large translucent flowers that grow in clusters along the trunks of ancient trees. During daylight, their petals refract sunlight into shifting rainbows that dance across the forest floor. At night, the flowers softly glow with stored magical energy. Travelers sometimes follow these blooms only to discover the flowers subtly rearrange their orientation each evening, creating entirely different “paths.”
> 
> - **Useful Properties:** Petals can be distilled into ingredients for illusion magic, invisibility elixirs, or chromatic spell catalysts.
> - **Hazard:** Overexposure to concentrated pollen causes hallucinations and distorted depth perception.
> - **Rumor:** Some believe Prismblooms grow where the veil between planes is weakest.
> 
> ### Embervine Creepers
> Thick crimson vines that pulse faintly like veins carrying molten light beneath their bark. They wrap around ruined stonework and dead trees, siphoning heat and magical energy. When disturbed, the vines rapidly tighten and emit bursts of hot ash.
> 
> - **Useful Properties:** Sap burns with nearly smokeless flame and is prized by alchemists.
> - **Hazard:** When cut, the vines scream with a high-pitched resonance that attracts predators.
> - **Visual Detail:** The vines leave glowing ember-like footprints across bark and stone.
> 
> ### Whisperleaf Ferns
> Silver-blue ferns that react to nearby speech. Their fronds rustle in response to voices, often repeating fragmented whispers hours after conversations occurred nearby. Entire groves sometimes murmur with echoes from travelers long gone.
> 
> - **Useful Properties:** Sages use preserved leaves in memory rituals and divination.
> - **Hazard:** Particularly large groves can disorient travelers by repeating misleading sounds.
> - **Adventure Hook:** A Whisperleaf grove repeatedly whispers the name of a missing expedition member.
> 
> ### Skyglass Reeds
> Tall crystal-like reeds that grow along elevated rivers and floating stone shelves. Wind passing through them creates haunting harmonic tones that can be heard for miles. The sound shifts based on atmospheric magic currents.
> 
> - **Useful Properties:** The hollow reeds are used in magical instruments and resonance-based spell foci.
> - **Hazard:** Violent storms can cause the reeds to shatter explosively into razor fragments.
> - **Interesting Feature:** Some Dungeon Seekers use the reeds as crude weather predictors.
> 
> ### Moonveil Moss
> A pale luminescent moss that grows only on surfaces touched by moonlight. The moss absorbs ambient mana and glows brighter near portals, Dungeon entrances, or dimensional anomalies.
> 
> - **Useful Properties:** Can be brewed into low-lightvision tonics.
> - **Hazard:** Creatures coated in fresh Moonveil Moss become easier to track at night.
> - **Behavior:** The moss slowly creeps toward magical disturbances over time.

---

> [!tip]+ Fauna of the Prismatic Canopy
> ### Glimmerfox
> A sleek fox-like creature with crystalline fur that refracts light into mirrored afterimages. Glimmerfoxes are intelligent scavengers that steal magical trinkets, gemstones, and potion bottles. When startled, they split into several illusionary duplicates before fleeing.
> 
> - **Behavior:** Extremely curious and playful unless cornered.
> - **Threat Level:** Low individually, but frustrating in groups.
> - **Interesting Trait:** Their tails flicker with colors matching nearby emotional states.
> 
> ### Canopy Striders
> Massive six-legged herbivores resembling a blend of elk and giraffe. Their elongated bodies allow them to walk between the enormous roots and elevated branches of the forest. Moss and small ecosystems grow along their backs.
> 
> - **Behavior:** Generally peaceful unless young are threatened.
> - **Useful Resource:** Shed crystalline antlers are valuable magical crafting components.
> - **Visual Detail:** Tiny birds and lizards live symbiotically on their hides.
> 
> ### Prismwing Drakes
> Small draconic predators with translucent wings resembling stained glass. They nest high within floating stone formations and hunt by bending light around themselves. Packs descend silently before attacking.
> 
> - **Behavior:** Territorial and highly intelligent.
> - **Threat Level:** Moderate.
> - **Special Ability:** Their scales briefly flash with elemental energy when threatened.
> 
> ### Hollowroot Burrowers
> Blind insectoid tunnelers with bark-like chitin and glowing mandibles. They tunnel beneath the forest floor feeding on magically infused roots. Their movement destabilizes terrain and occasionally collapses ruins or pathways.
> 
> - **Behavior:** Avoid light and vibrations.
> - **Threat Level:** Dangerous in swarms.
> - **Adventure Hook:** A settlement’s crystal energy grid begins failing because Burrowers are feeding on underground conduits.
> 
> ### Lumen Moths
> Large moths with bioluminescent wing patterns resembling constellations. They gather near magical disturbances and Dungeon entrances in enormous swarms. Scholars believe they are instinctively drawn to dimensional instability.
> 
> - **Behavior:** Harmless individually.
> - **Strange Effect:** Prolonged observation of their wing patterns can induce prophetic dreams.
> - **Cultural Note:** Some local villagers interpret their migration patterns as omens.
>
> ### Thornmaw Stalker
> A panther-like apex predator covered in thorny bark plates and bioluminescent fungal growths. The creature can flatten itself against tree trunks, becoming nearly indistinguishable from the surrounding forest. It ambushes prey with explosive bursts of speed.
> 
> - **Behavior:** Solitary and patient.
> - **Threat Level:** High.
> - **Special Trait:** Wounds inflicted by its claws occasionally sprout invasive crystal growths if untreated.
> 
> ### Echo Harriers
> Floating avian predators with elongated featherless wings and translucent bodies. These creatures hunt by detecting sound vibrations. They are especially aggressive toward metal armor, machinery, or loud spellcasting.
> 
> - **Behavior:** Circle silently before attacking.
> - **Special Ability:** Emit sonic bursts capable of shattering crystal structures.
> - **Visual Detail:** Their internal organs glow faintly during flight.

> [!tip]+ Environmental Phenomena
> - **Color Rain:** Sudden rainstorms where droplets refract into impossible colors and temporarily alter spell effects.
> - **Gravity Hollows:** Areas where gravity weakens, allowing falling leaves, stones, or creatures to drift upward.
> - **Crystal Bloom Events:** Overnight eruptions of Aetherium crystal growths from the forest floor.
> - **Songwinds:** Magical winds carrying distant voices, music, or ancient memories through the trees.
> - **Living Paths:** Trails that subtly shift location between journeys.
