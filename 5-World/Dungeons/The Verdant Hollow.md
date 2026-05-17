---
tags:
  - #Location
  - #Dungeon
art: zz-Attachments/verdant-hollow.png
pronounced: "VAIR-duhnt HOL-oh"
aliases:
  - The Hollow
  - The Green Maw
dungeon_rank: Lesser
dungeon_type: Living Wilderness
seed_status: Unclaimed
primary_attunement: Growth
secondary_attunement: Fungus, Hunt, Magic
location: Deep Wilds of the Prismatic Canopy
region: Prismatic Canopy
discovered_by: Unknown
controlled_by: None
associated_factions:
  - [[Springrun Council]]
  - [[Dungeon Seekers Guild]]
  - [[Arcane Exchange Consortium]]
entry_condition: Open
danger_level: Moderate
recommended_level: 1-5
environment_tags:
  - Jungle
  - Overgrowth
  - Wetlands
  - Bioluminescence
  - Living Terrain
theme: Life flourishing beyond natural balance
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
> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
>> **Pronounced** |  `INPUT[textArea:pronounced]` |
>> **Aliases** | `INPUT[list:aliases]` |
>> **Dungeon Rank** | `INPUT[DungeonRank][:dungeon_rank]` |
>> **Dungeon Type** | `INPUT[textArea:dungeon_type]` |
>> **Seed Status** | `INPUT[SeedStatus][:seed_status]` |
>> **Primary Attunement** | `INPUT[textArea:primary_attunement]` |
>> **Secondary Attunement** | `INPUT[textArea:secondary_attunement]` |
>> **Defenses** | `INPUT[Defence][:defence]` |
>> **Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |
>> **Controlled By** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Associated Factions** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>
>> [!metadata|metadataoption]- Demographics
>> #### Demographics
>>  |
>> ---|---|
>> **Entry Condition** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):dominion]` |
>> **Danger Level** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):ruler]` |
>> **Recommended Level** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):leader]` |
>> **Resonance Traits** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Environment** | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` |
>> **Theme**| `INPUT[Religion][:religion]` |

> [!infobox]
> ##  `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Dungeon Profile
>  |
> ---|---|
> **Dungeon Rank** | `VIEW[{dungeon_rank}][text]` |
> **Dungeon Type** | `VIEW[{dungeon_type}][text]` |
> **Seed Status** | `VIEW[{seed_status}][text]` |
> **Resonance** | `VIEW[{dungeon_type}][text]` |
> **Danger Level** | `VIEW[{danger_level}][text]` |
> **Recommended Level** | `VIEW[{recommended_level}][text]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

> [!recite]- Introduction
> A script for the GM to read when the party arrive to this location for the first time.

> [!metadata|map]- Map
> ```zoommap
> image: zz-Attachments/Assets/MapPlaceholder.png
> # markers is optional; defaults to <image>.markers.json
> # markers: Assets/Map.jpg.markers.json
> 
> # Map view limits
> minZoom: 0.3
> maxZoom: 8
> 
> # Size & interactivity
> height: 760px
> width: 30%
> resizable: true
> resizeHandle: native     # left | right | both | native
> render: canvas           # or: dom
> 
> # Responsive display (fit into width, no wheel/pinch/dblclick pan/zoom)
> responsive: false        # true → always fit; disables pan/zoom gestures
> 
> # Storage (optional)
> # storage: note          # default is json; use "note" to store markers inline
> # id: map-1              # optional stable id for inline storage (per code block)
> 
> # Alignment / wrapping (optional)
> align: left             # left | center | right
> wrap: true               # wrap text; useful with left/right alignment
> view:
>   zoom: 0.7513
>   centerX: 0.486849
>   centerY: 0.510427
> ```

> [!metadata|district]- Districts
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(districttype, ", ") AS Type
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "District")
> SORT districttype ASC, file.name ASC
> ```

> [!metadata|location]- Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(location), ", ") AS "Location", join(link(organization), ", ") AS "Organization(s)"
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "POI")
> SORT tags DESC, poitype ASC, file.name ASC
> ```

> [!metadata|organizations]- Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "5-World"
> WHERE econtains(location, this.file.link) AND contains(tags, "Organization")
> SORT tags DESC, file.name ASC
> ```

> [!metadata|characters]- Characters
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(occupation, ", ") AS "Occupations", join(link(organization), ", ") AS "Organizations"
> FROM "5-World"
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

## Dungeon Ecology

The Verdant Hollow contains one of the most biologically diverse ecosystems yet documented within a Lesser Dungeon.

### Flora

Towering luminous ferns, carnivorous blossoms, and enormous fungal shelves dominate much of the Dungeon. Many plants exhibit predatory or parasitic behavior.

Notable flora includes:
- Glowcap Fungus
- Bloodvine Creepers
- Ember Orchids
- Ironroot Moss
- Dreamspore Pods
- Pulseblooms

### Fauna

The Hollow supports dense populations of territorial and highly adaptive creatures.

Common sightings include:
- Razorleaf Raptors
- Mossback Toads
- Thornhide Boars
- Spore Monkeys
- Prismwing Insects
- Root Serpents

### Chimeric Life

Certain creatures display unstable hybridization seemingly caused by prolonged resonance exposure. These entities often possess fused anatomical traits, volatile essence organs, or regenerative abnormalities.

Documented examples include:
- Bloommaws
- Mycelial Stalkers
- Verdant Huskers
- Thornbound Wretches

### Resource Extraction

The Hollow is especially valuable for:
- Regenerative herbs
- Poison glands
- Fungal alchemical reagents
- Essence-reactive roots
- Chimeric monster organs
- Rare cooking ingredients
- Mutagenic crystal growths
- Living wood suitable for magical crafting

## Layout & Structure

The Verdant Hollow resembles an ecosystem more than a traditional Dungeon.

### Traversal Style

The Dungeon combines:
- Semi-shifting pathways
- Layered ecological regions
- Dense exploration routes
- Environmental survival challenges
- Living terrain hazards

Many pathways are formed by gigantic roots large enough to serve as bridges and tunnels.

### Known Regions

#### The Rootway Descent

A massive network of roots spiraling downward from the entrance.

Threats include:
- Ambush predators
- Collapsing pathways
- Carnivorous vines

Resources:
- Ironroot Moss
- Resonant sap

#### The Flooded Grotto

Warm underground wetlands filled with glowing fungal colonies and stagnant pools.

Threats include:
- Toxic spores
- Amphibious predators
- Disease-bearing insects

Resources:
- Glowcap Fungus
- Alchemical slime
- Bioluminescent spores

#### The Blooming Expanse

An enormous open cavern illuminated by giant flowers suspended from the ceiling.

Threats include:
- Pollen storms
- Territorial pack predators
- Hallucinogenic plants

Resources:
- Ember Orchids
- Dreamspore Pods
- Pollinated crystal dust

#### The Heartroot Chamber

A massive living chamber deep within the Hollow where roots pulse like veins around an unseen core.

Threats include:
- Elite chimeric creatures
- Aggressive environmental responses
- Violent resonance surges

Resources:
- Seed-touched materials
- Pure resonance sap
- Unstable essence growths

## Encounters & Hazards

### Common Creatures

- Razorleaf Raptors
- Root Serpents
- Thornhide Boars
- Spore Monkeys

### Elite Threats

- Bloommaws
- Mycelial Stalkers
- Verdant Huskers

### Apex Entities

- The Hollow Guardian
- The Root Tyrant
- The Bloomheart Beast

### Environmental Hazards

- Spore clouds
- Digestive pollen
- Living vines
- Regenerating terrain
- Sudden overgrowth
- Sinkroot pits

### Dungeon Events

Periodic resonance surges trigger rapid environmental transformations throughout the Dungeon. Entire chambers may bloom violently within minutes, while dormant predators awaken in response to heavy intrusion.

Rarely, the Hollow enters a “feeding cycle,” during which all native life becomes dramatically more aggressive.

## The Seed

The Verdant Hollow’s Seed has never been directly observed, though explorers believe it rests somewhere beneath the Heartroot Chamber.

### Known Properties

- Generates accelerated biological growth
- Produces vast quantities of essence-rich organic matter
- Influences mutation and adaptation
- Sustains the Dungeon’s regenerative ecosystem

### Claimed Seeds

Most scholars believe removing the Seed would cause the Hollow’s ecosystem to collapse rapidly, potentially transforming the surrounding forest as stored energies discharge outward.

### Unclaimed Seeds

As long as the Seed remains intact, the Dungeon slowly expands its influence into the surrounding wilderness.

## Factions & Activity

| Faction | Goals | Presence |
|---|---|---|
| [[Springrun Council]] | Secure resources and protect trade routes | Moderate |
| [[Dungeon Seekers Guild]] | Exploration and mapping | High |
| [[Arcane Exchange Consortium]] | Acquire rare materials and specimens | Moderate |
| Independent Hunters | Harvest monster parts | High |

## Current Events

Several expeditions have recently disappeared within the Hollow after reports of unusually intelligent creature behavior near the Heartroot Chamber.

Researchers from the Arcane Exchange Consortium have begun paying premium rates for intact chimeric organs recovered from deeper regions of the Dungeon.

Meanwhile, nearby settlements report increasing incidents of mutated wildlife emerging from the forest surrounding the Hollow.

## Secrets (GM Only)

> [!danger]- GM Secrets
>
> The Verdant Hollow was originally formed around a fragment of divine life essence buried beneath the Prismatic Canopy during the Shattering.
>
> The Hollow is not merely growing outward — it is attempting to construct a stable biological intelligence capable of protecting the Seed.
>
> Certain chimeric creatures within the Dungeon are failed attempts at creating a perfect guardian organism.
>
> The Heartroot Chamber itself is partially sentient and responds to repeated patterns of intrusion.
>
> If left unchecked for decades, the Hollow may eventually begin assimilating portions of the surrounding forest into a permanent Dungeon biome.

## Adventure Hooks

- A Springrun expedition vanished after discovering a “breathing forest” deep within the Hollow.
- A rare flower needed to cure a deadly disease blooms only during resonance surges.
- Hunters report a massive unseen creature dragging prey beneath the roots.
- A Chimeracrafter seeks intact organs from a newly discovered mutant predator.
- Strange spores are beginning to infect travelers near Springrun.

## Notes

The Verdant Hollow serves as an ideal introductory Dungeon because it demonstrates:
- Dungeon ecology
- Resource harvesting
- Resonance effects
- Chimeric mutation
- Dynamic environments
- Living Dungeon behavior

The Hollow should feel simultaneously beautiful and deeply unnatural.

# Reading the Archway — The Verdant Hollow
Warm mist rises continuously from the sinkhole entrance to The Verdant Hollow. Massive roots coil around an ancient stone archway partially consumed by moss, fungal shelves, and luminous green growths. Emerald runes pulse faintly beneath layers of living vegetation, occasionally disappearing as roots slowly shift across the stone.

The air smells of wet earth, blooming flowers, and rot.

The runes do not appear carved. They appear grown.

## Victory Point Challenge (Level 2)

>
>> [!column | 4 no-t no-i] 
>>> ### Basic Understanding (2 VP)
>>> **Primary Attunement:** Growth
>>> **Dungeon Rank:** Lesser
>>> **Stability:** Shifting
>>> The archway’s rune patterns emphasize uncontrolled biological expansion. Roots pulse rhythmically beneath the stone like veins carrying sap through a living body. The party understands that the Dungeon is alive in some capacity.  Growth and adaptation are central themes within the Dungeon.  The internal environment likely changes over time.
>>
>>> ### Detailed Understanding (4 VP)
>>> **Secondary Attunement:** Fungus, Hunt, Magic
>>> **Warning Runes:** Regeneration, Predation, Spore Hazard, Living Terrain
>>> The archway reveals repeated spiral structures suggesting territorial predator behavior, rapidly recovering ecosystems and magical biological mutation.
>>
>>> ### Deep Understanding (6 VP)
>>> The party begins recognizing deeper resonance irregularities within the archway. They learn:
>>> - portions of the rune structure appear newly formed
>>> - root patterns subtly reposition over time
>>> - some warning runes seem partially concealed beneath fungal growth
>>> - the Dungeon reacts dynamically to prolonged intrusion
>>> - heavily damaged regions likely regenerate rapidly
>>>
>>> The party also realizes:
>>> - the Dungeon’s ecology is not naturally balanced
>>> - creatures within may adapt unusually quickly
>>> - the Hollow behaves more like an ecosystem defending itself than a static location
>>>
>>> Characters achieving this level of understanding gain a +1 circumstance bonus to the first Survival or initiative roll made within the Dungeon.
>>
>>> ### Hidden Understanding (10 VP)
>>> The party uncovers resonance structures hidden beneath the visible rune lattice. 
>>> **Hidden Attunement:** Hunger
>>> The party realizes the Verdant Hollow is not merely overgrown. It is feeding. The root structures surrounding the archway form a subtle inward spiral pattern resembling consuming jaws when viewed as a complete resonance sequence.


|Category|Value|
|---|---|
|**Level**|2|
|**Complexity**|Moderate|
|**Victory Points Needed**|Variable|
|**Maximum Failures**|3|
|**Traits**|Exploration, Magical, Dungeon|


---

# Relevant Skills

## Arcana (DC 16)

Interpret magical resonance, essence interactions, and arcane growth patterns.

### Critical Success

Gain 2 VP instead of 1 and immediately identify the [[Magic]] secondary attunement.

---

## Nature (DC 15)

Analyze ecological behavior, predatory structures, and biological resonance.

### Critical Success

Gain 2 VP instead of 1 and reveal the Regeneration warning rune.

---

## Occultism (DC 17)

Discern hidden resonance layering and concealed metaphysical patterns.

### Critical Success

Gain 2 VP instead of 1 and recognize evidence of a suppressed attunement beneath the visible rune structure.

Occultism is the most reliable path toward discovering [[Hunger]].

---

## Religion (DC 16)

Interpret symbolic resonance structure and ancient metaphysical design principles.

### Critical Success

Gain 2 VP instead of 1 and recognize that the archway follows intentional cosmological architecture rather than natural formation.

---

# Secondary Skills

## Perception (DC 15)

Notice:

- concealed rune fragments
    
- recently shifted root growth
    
- inconsistencies within the visible patterns
    

### Success

Grant the next character a +1 circumstance bonus on their check.

### Critical Success

Additionally notice that some runes appear newer than the surrounding structure.

---

## Society (DC 14)

Recall expedition rumors and Seekers Guild records regarding the Hollow.

### Success

Gain 1 VP. This can only grant VP once.

The party learns:

- paths inside the Hollow reportedly “change”
    
- burned regions regrow rapidly
    
- several expeditions vanished deeper within
    

---

## Crafting (DC 15)

Analyze the physical construction of the archway and the interaction between stone and living growth.

### Success

Gain 1 VP. This can only grant VP once.

The character realizes:

- the stone structure predates the surrounding vegetation
    
- the roots are integrating into the archway itself
    
- the Dungeon appears to be actively absorbing the structure over time
    

---

# Failure States

Failures represent:

- misleading resonance patterns
    
- obscured rune structures
    
- incorrect assumptions
    
- Dungeon interference
    
- overconfidence
    

The GM should not explicitly state when the party has failed the challenge.

Instead, failed interpretations may:

- omit warning runes
    
- conceal dangerous attunements
    
- overemphasize harmless resonance
    
- provide false confidence regarding the Dungeon’s behavior
    

Example misinformation might include:

- interpreting [[Hunt]] as merely territorial wildlife
    
- mistaking regenerative resonance for benevolent life magic
    
- overlooking signs of active predatory adaptation
    

The Dungeon does not lie directly.

It encourages misunderstanding.