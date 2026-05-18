---
tags:
  - "#Adventure"
art: zz-Attachments/assets/PlaceholderImage.png
whichparty: "[[The Shattering Dashboard]]"
adventure_status: Not Started
adventure_level: "5"
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
>> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
>> **Aliases** | `INPUT[list:aliases]` |
>> **Quick Notes** |  `INPUT[textArea:quicknote]`
>> **Which Party** | `INPUT[Null][suggester(optionQuery(#Party AND !"z_Templates"), useLinks(partial)):whichparty]` |
>> **Adventure Status** | `INPUT[Status][:adventure_status]` |
>> **Adventure Level**|`INPUT[textArea:adventure_level]`|

> [!infobox]
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> #### Adventure Info
>  |
> ---|---|
> **Party** | `VIEW[{whichparty}][link]` |
> **Status** | `VIEW[{adventure_status}]` |
> **Adventure Level** | `VIEW[{adventure_level}]` |

# **`=this.file.name`**

> [!metadata|quests]- Quests
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, quicknote AS Notes, status AS Status
> FROM "5-World"
> WHERE econtains(tags, "Quest") AND econtains(adventure, this.file.link)
> SORT file.name ASC
> ```

## Overview
Springrun stands at the edge of the known world, a fragile frontier settlement carved from the untamed wilderness surrounding the Prismatic Canopy. Built by settlers, prospectors, and adventurers seeking opportunity amid the ruins of a shattered age, the town survives only through constant vigilance and the thin supply lines connecting it to the open road.

Castlemere stands as a grim bastion upon the frontier, a heavily fortified settlement raised where the wild edges of the Prismatic Canopy press against the last reaches of ordered civilization. Founded by disciplined settlers, soldiers, and zealots determined to impose stability upon a fractured world, the town endures through rigid law, constant patrols, and the strength of its stone walls. Where other frontier communities adapt to the wilderness, Castlemere seeks to contain it, holding fast against the growing dangers stirring beyond its walls.

The two settlements maintain an uneasy coexistence...

Recently, troubling reports have begun filtering outward from the region. Trade caravans have vanished along the forest trails. Hunters speak of strange sounds echoing beneath the earth at night. Wildlife once common to the surrounding woods has grown increasingly aggressive, while isolated travelers tell stories of shimmering crystal growths spreading through the roots of the forest itself.

In response to these growing dangers, Springrun has quietly begun calling for outside aid.

Each member of the party arrives with their own reasons for answering that summons. Some may seek coin, others opportunity, knowledge, redemption, or simple survival in the wilds beyond civilization. Whatever their motivations, their journey toward Springrun quickly reveals that the settlement’s troubles are neither isolated nor ordinary.

As the party travels along the increasingly dangerous trails bordering the Prismatic Canopy, they encounter the first signs of a growing instability spreading through the wilderness — an omen of far greater dangers lurking beneath the surface of the region.

The prologue begins upon the trail to Springrun, where the party’s journey is interrupted by a violent ankhrav ambush along a partially collapsed section of road. What first appears to be little more than an unusually aggressive monster attack soon reveals evidence of a much larger threat lurking beneath the forest floor.

## Prologue

### The Broken Trail
**Encounter Difficulty: Moderate **   
- [ ] Moderate (100 XP) Level 5

![[the-broken-trail.png|right hs-med]]

> [!note]+ Read Aloud
> The forest grows quieter the farther you travel down the trail to Springrun from the open road. Towering trees with bark streaked in faint iridescent color loom overhead, their leaves whispering softly in a wind you cannot feel.
> 
> The trail ahead suddenly dips where the earth has partially collapsed inward. Fresh gouges cut through the mud and roots nearby, as though something large dragged itself beneath the surface.
> 
> Then comes the growl.
> 
> Shapes burst from the underbrush as insectoid horrors erupt from the softened ground itself, spraying dirt and shattered roots into the air.

**Description** This encounter occurs along a partially collapsed stretch of trail skirting the outer edge of the Prismatic Canopy. The ground here has become unstable due to extensive tunneling activity beneath the surface. Strange crystalline veins can occasionally be seen embedded within exposed roots and stones, pulsing faintly when disturbed.

The ankhravs are agitated and unusually aggressive. The creatures have been displaced outward from deeper nesting tunnels by the presence of a much larger predator deeper within the brood network — the Ankhrav Hive Mother encountered later.

The encounter is intended to foreshadow:
- unstable wilderness conditions near the Canopy
- subterranean dangers
- mutation and ecological disruption
- the increasing influence of Dungeon-like environmental instability

At the start of the encounter, place the following foes on the map:
- 5: [[Ankhrav]] B

```encounter
name: The Broken Trail
party: The Shattering
creatures:
  - 5: Ankhrav
```

#### Tactics
The ankhravs begin hidden beneath loose soil and root-covered terrain near the collapsed section of trail.
	- Two ankhravs erupt from the ground during the first round to engage the front line.
	- The remaining ankhravs emerge from flanking positions during round two, attempting to isolate vulnerable targets.
	- Ankhravs instinctively focus on prone or restrained targets whenever possible.
	- If an ankhrav critically hits with its jaws, nearby ankhravs aggressively press the same target.
	- The creatures retreat only if at least three ankhravs are slain.

#### Features of the Area
- **Collapsed Trail** The collapsed trail section is considered difficult terrain.
- **Loose Soil and Roots** Loose soil and roots provide several areas of lesser cover.
- **Burrow Holes** Burrow holes dot the encounter area. A creature forced prone adjacent to one must succeed at a DC 20 Reflex save or slide 5 feet into unstable ground, becoming off-guard until they spend an Interact action to reposition themselves.
- **Light** The canopy overhead heavily obscures the sky, creating dim lighting throughout the encounter area and faint crystal growths protrude from exposed roots and stones, emitting dim light in a 5-foot radius.

> [!tip]+ Treasure  
> Careful examination of the ankhrav tunnels reveals partially dissolved remains from previous victims. Hidden within the debris:
> - [x]  gp::18
> - [x]  sp::42
> - [x]  consumable::[[healing-potion-lesser|Lesser Healing Potion]] [ilvl::3] [gp::12]
> - [x]  consumable::[[antivenom-potion|Antivenom Potion]] [ilvl::2] [gp::7]

### The Crystal Maw

**Encounter Difficulty: Severe**
- [ ]  Severe (120 XP) Level 5

> [!note]+ Read Aloud
> Among the collapsed earth and tunnel entrances are unmistakable signs that the ankhravs have only recently expanded into this region. The tunnels are fresh, unstable, and numerous. Broken crates and partially dissolved trade goods lie scattered beneath the soil alongside the remains of a merchant wagon dragged underground only days ago.

A successful DC 18 [[Skills#Survival|Survival]] check reveals the creatures are not wandering hunters. They are establishing a new brood territory radiating outward from a much larger central nest somewhere deeper within the forest. If left unchecked, the ankhravs will likely continue attacking travelers along the Springrun trail. With the settlement already isolated from the open road by the surrounding wilderness, even a handful of lost caravans could place serious strain on the town’s supplies and trade.

![[the-crystal-maw.png|right hs-med]]

Assuming the players investigate the tunnels further, read the following:
> [!note]+ Read Aloud  
> After traveling for some distance down the tunnels they widen into a shattered hollow where the earth has collapsed beneath the roots of several massive trees. Pale crystal formations jut from the walls and ceiling like jagged teeth, casting fractured light across churned soil and broken bone.
> 
> The air vibrates with a low, almost musical hum. Then the ground trembles.
> 
> A massive shape tears upward from beneath the center of the chamber, crystal shards cascading from its armored hide as a monstrous insectile horror rises before you. Its mandibles split wide with a wet screech that echoes through the hollow.

**Description**  This encounter takes place within the primary brood hollow beneath the outer edge of the Prismatic Canopy. The chamber was once a natural cavern before extensive ankhrav tunneling destabilized the surrounding terrain. Strange crystalline growths have spread throughout the area, feeding upon latent magical energies saturating the region.

The Ankhrav Hive Mother has become partially altered by prolonged exposure to these energies. Veins of translucent crystal protrude from sections of its carapace and glow faintly whenever the creature burrows or sprays acid.

This creature is responsible for displacing nearby predators and increasing attacks along the Springrun trail network. The ankhravs encountered previously were merely outer brood defenders attempting to protect the nesting grounds.

At the start of the encounter, place the following foes on the map:

- 1: [[Ankhrav Hive Mother]] R

```encounter
name: The Crystal Maw
party: The Shattering
creatures:
  - 1: Ankhrav Hive Mother
```

#### Tactics
The Hive Mother fights with brutal territorial aggression and makes full use of the unstable terrain.
	- The Hive Mother begins partially submerged beneath loose earth near the center of the chamber. During the first round, it erupts upward beneath the closest cluster of PCs.
	- It prioritizes targets who appear heavily armored or who deal significant damage.
	- If multiple enemies cluster together, it uses its acid spray to punish grouped positioning.
	- The creature frequently Burrows between attacks to reposition and pressure vulnerable backline characters.
	- At half HP, the crystal growths along its body destabilize violently. Beginning the following round, crystal eruptions occur throughout the chamber at initiative 20.

> [!warning]
> ##### Crystal Eruption
> At initiative 20 after the Hive Mother reaches half HP:
> - One random 10-foot burst within the chamber erupts with razor crystal growths.
> - Creatures in the area must attempt a DC 21 Reflex save.
> 	- **Critical Success:** No effect.
> 	- **Success:** 1d6 slashing damage.
> 	- **Failure:** 2d6 slashing damage and off-guard until the start of their next turn.
> 	- **Critical Failure:** 2d6 slashing damage, off-guard, and 1d6 persistent bleed damage.
> 
> This environmental effect represents unstable magical resonance reacting to the Hive Mother’s distress.

#### Features of the Area
- The chamber is approximately 70 feet across with uneven terrain throughout.
- **Light** Crystal clusters emit dim multicolored light.
- **Loose Earth** Several sections of loose earth are difficult terrain.
- **Burrow Tunnels** Burrow tunnels large enough for Medium creatures connect to the chamber walls.
- **Crystal Formations** Climbing atop major crystal formations requires a DC 18 Athletics check. Crystal formations provide standard cover. A creature shoved into a crystal formation takes `dice: 1d6` piercing damage.

> [!tip]+ Treasure  
> The brood hollow contains partially dissolved equipment and valuables gathered from previous victims dragged below ground. Nestled within the central crystal formation:
> - [x]  gp::55
> - [x]  sp::120
> - [x]  permanent::[[Weapon Potency (+1)|+1]] [[Striking]] [[Spear]] [ilvl::4] [gp::100]
> - [x]  consumable::[[healing-potion-moderate|Moderate Healing Potion]] [ilvl::6] [gp::50]
> - [x]  consumable::[[acid-flask-moderate|Acid Flask (Moderate)]] [ilvl::3] [gp::10]
> 
> A successful DC 22 [[Skills#Arcana|Arcana]] or [[Skills#Occultism|Occultism]] check reveals the crystals within the chamber are not naturally occurring. Their magical resonance resembles the unstable energies associated with Dungeon manifestations and Shattering scars found elsewhere within Aetheria Fracta.