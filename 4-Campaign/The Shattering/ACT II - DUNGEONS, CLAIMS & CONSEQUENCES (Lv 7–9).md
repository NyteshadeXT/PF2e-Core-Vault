---
tags:
  - "#Adventure"
art: zz-Attachments/Assets/PlaceholderImage.png
quicknote: ""
whichparty: "[[The Shattering Dashboard]]"
adventure_status: Not Started
adventure_level: 7th to 9th
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

# Act II - Dungeons, Claims and Consequences
> [!kirk|info] Prompt (Remove me) 
> Provide an overarching overview of this adventure. What is the central theme or conflict driving the narrative? Outline the potential quests or objectives that the players may embark on. Consider the variety of challenges, encounters, or tasks they might face. Additionally, describe how the adventure begins. What inciting incident or call to action propels the players into the unfolding storyline? Use this section to set the stage, introduce key elements, and establish the initial motivations that will guide the players throughout the adventure.

## Chapter 1 — The Verdant Hollow







**Theme:** Dungeon Delve and Competition without understanding

# First Incursion
The first delve should:
- be relatively small
- avoid explaining everything
- establish rules through experience

Goals:
- survive
- retrieve proof
- map part of the interior
- escape alive

The incursion should reveal:
- the Essence system
- Dungeon resources
- strange materials
- impossible ecology
- creatures unlike surface fauna
- evidence that the Dungeon repairs or resets

This is where the players begin realizing the Dungeon is a renewable source of power, danger, and wealth. That realization changes the world.

The damage reduction and AC penalty (halving the AC bonus rounded down) create a powerful narrative beat: **The world the PCs know is obsolete inside the Hollow.**
- **The Level 0 Solution:** Since players will need to add the "Dungeon" trait to their items, you can utilize the **Creature Cores**. Alchemists and mages already use these to grind into powders or create magical elixirs.
- **The "Coating" Mechanic:** The players might find that "painting" their blades with an emulsion of **Creature Core dust** and **Dungeon Essence** temporarily bypasses the damage reduction. This forces a "resource management" loop early in the campaign.
- **Evolution:** By Act II, they should be finding gear with "Dungeon Traits" or using **Awakening Stones** to permanently bond their signature items to the Aetheria Fracta reality.

---

#  News Spreads
The Dungeon’s existence cannot remain secret. News reaches:
- Springrun
- Castlemere
- traders
- prospectors
- scholars
- opportunists

And suddenly the frontier changes overnight.

## Springrun’s Response
Springrun sees:
- opportunity
- growth
- discovery
- trade
- advancement

The town begins transforming into:
- an expedition hub
- a prospecting center
- a Dungeon economy

## Castlemere’s Response
Castlemere sees:
- threat
- instability
- heresy
- potential military danger

They likely advocate:
- containment
- regulation
- control
- religious scrutiny
- armed oversight

---

👉 End of Act:  **Both cities stake interest**

- Expeditions from both cities begin
	- Rival expedition confrontation
- Conflicting objectives:
    - Secure vs exploit
- First failures occur:
    - Lost teams
    - Changing layouts: “It changed while we were inside…”
    - Unexplained phenomena
    - First attempt to “control” the Dungeon fails
- PCs revisit previously cleared area → reset

👉 Escalation: The Dungeon begins affecting the surrounding wilds









I think this is a strong direction because it shifts the campaign from **"discovering a mysterious place"** to **"learning how to live with a living ecosystem."** Act 1 established that something is wrong in the Deep Wilds. Act 2 answers _what_ it is while creating far more questions than answers.

I'd structure it something like this:

---

# Act 2 - Into the Living Dungeon

## Overview

The discovery of the Dungeon changes everything.

The first expedition confirms that the doorway does not lead to ancient ruins or forgotten halls, but to a vast living realm unlike anything recorded since the Shattering. Within its borders, monsters, plants, minerals, and even the laws governing life appear to operate according to unfamiliar principles. It is here that the party first awakens to the **Confluence System**, allowing them to channel Essence drawn directly from the Dungeon itself.

At first, the Dungeon appears to function like an extraordinary source of untapped wealth. Expeditions return carrying rare materials, Monster Cores, and stories of impossible landscapes. Yet every triumph is accompanied by new mysteries. Paths refuse to remain mapped. Defeated monsters reappear. Harvested resources return as though reclaimed by the Dungeon itself.

As word spreads, both Springrun and Castlemere organize increasingly ambitious expeditions. Their differing philosophies quickly lead to conflict. Springrun sees opportunity and survival through cooperation with the Dungeon, while Castlemere believes it must be secured, contained, and ultimately controlled.

Neither approach survives first contact.

The Dungeon resists ownership in ways no one anticipated.

Outside its boundaries, the Deep Wilds begin changing more rapidly than before. Crystal growth accelerates, creatures grow stranger, and regions once considered safe begin exhibiting impossible phenomena. It becomes increasingly clear that the instability surrounding the Dungeon is not merely a consequence of its existence—but a response to those attempting to understand it.

The party finds themselves among the few explorers capable of surviving repeated incursions. Every expedition reveals new truths, but also reminds them that the Dungeon is not simply a place to conquer.

It is alive.

---

# Major Story Beats

## 1. First Incursion

The party crosses the threshold for the first time.

This expedition serves as the players' introduction to the Dungeon's fundamental rules.

They discover:

- the Confluence System
    
- Essence abilities
    
- Monster Cores
    
- Dungeon resources
    
- strange flora and fauna
    
- environmental hazards unlike anything outside
    

More importantly, they discover that the Dungeon feels...

_aware._

---

## 2. The Ecology of the Dungeon

Rather than endless monsters, the Dungeon possesses an ecosystem.

Players begin noticing:

- predators hunting prey
    
- monsters competing for territory
    
- harvestable plants
    
- fungal networks
    
- living crystal formations
    
- renewable resources
    

It resembles a functioning world more than a constructed maze.

---

## 3. Expectations Shattered

Nothing behaves the way experienced adventurers expected.

Maps become unreliable.

Some doors appear only once.

Rooms disappear.

Entire sections are missing upon return.

No one understands why.

Theories begin to circulate.

---

## 4. The First Reset

After leaving and returning...

Everything has changed.

Monsters have returned.

Harvested resources have regrown.

Destroyed structures have been rebuilt.

Previously explored routes have shifted.

The Dungeon heals itself.

This revelation completely changes how expeditions are planned.

---

## 5. News Spreads

Springrun and Castlemere react immediately.

New factions arrive:

- Dungeon Seekers Guild
    
- Arcane Exchange Consortium
    
- Arcane scholars
    
- mercenary companies
    
- independent prospectors
    

The frontier begins transforming into an active expedition hub.

---

## 6. Conflicting Objectives

The settlements quickly diverge.

### Springrun

- sustainable exploration
    
- coexistence
    
- learn from the Dungeon
    
- support independent Seekers
    

### Castlemere

- establish military control
    
- permanent fortifications
    
- secure entrances
    
- exploit strategic resources
    

The party increasingly becomes caught between both approaches.

---

## 7. First Major Failures

Early optimism gives way to tragedy.

Several expeditions disappear.

Others emerge missing members.

One group reports:

> "The hallway behind us wasn't there anymore."

Another insists:

> "We climbed the same staircase for six hours."

Another returns convinced weeks have passed...

though only a single day elapsed outside.

Rumors begin replacing certainty.

---

## 8. Attempting Control

Someone attempts to tame the Dungeon.

Possibilities include:

- sealing corridors
    
- magical anchors
    
- permanent camps
    
- warding circles
    
- attempts to harvest resources at industrial scale
    

Every attempt fails.

Sometimes catastrophically.

The Dungeon simply adapts.

---

## 9. Return to the Beginning

The party revisits the very first area they cleared.

Nothing remains.

Everything has returned.

Different monsters occupy familiar territory.

The Dungeon remembers...

but does not preserve.

---

## 10. Resonance Escalates

As expeditions increase, so do disturbances outside.

The Deep Wilds become noticeably more unstable.

Examples include:

- migrating crystal growth
    
- shifting gravity
    
- altered weather
    
- aggressive wildlife
    
- new Dungeon-born creatures
    
- expanding resonance zones
    

The players begin suspecting that exploration itself may be influencing the surrounding world.

---

# Central Themes

### Discovery

The players are the first generation to truly explore living Dungeons.

---

### Adaptation

Old adventuring knowledge no longer applies.

Success belongs to those willing to learn.

---

### Competing Philosophies

Can a Dungeon be harvested responsibly?

Should it be controlled?

Should it be left alone?

---

### The Illusion of Mastery

Every apparent breakthrough reveals a deeper mystery.

The Dungeon continually demonstrates that it operates on rules humanity has yet to understand.

---

# Ending the Act

The act should conclude with a revelation that fundamentally reframes the campaign.

Rather than merely realizing that the Dungeon resets, the party uncovers evidence that **the Dungeon is reacting to the growing number of incursions**. Its changing layouts, accelerating repairs, and expanding resonance are not random—they are adaptive responses.

This raises a troubling possibility: the instability threatening the Deep Wilds is no longer solely the lingering aftermath of the Shattering. Humanity's attempts to exploit or dominate the Dungeon may be pushing it into a defensive state, one that increasingly spills beyond its threshold.

The question driving Act 3 becomes clear:

> **Can the Dungeon be understood before its responses reshape the world around it?**

This ending naturally shifts the campaign from exploration and discovery to investigation and difficult choices, while preserving the Dungeon's role as a living, evolving force rather than a static environment to be conquered.