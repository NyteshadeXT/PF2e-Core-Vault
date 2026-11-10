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

> [!metadata|quests]- Quests
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, quicknote AS Notes, status AS Status
> FROM "5-World"
> WHERE econtains(tags, "Quest") AND econtains(adventure, this.file.link)
> SORT file.name ASC
> ```

# Act II - Dungeons, Claims and Consequences
## Chapter 1 — The Deep Hallow Dungeon

**I’d use a Castlemere recovery team for the encounter, then end with evidence that the Dungeon’s influence has reached Springrun.** That brings both of your Act 2 conflicts into play: people competing over the Dungeon, and the Dungeon exceeding everyone’s expectations.

For a six-week break, I’d aim for a cliffhanger with a clear, memorable image and an immediate question to answer when you return.

### The encounter: “For the Safety of the Frontier”

As the PCs prepare to leave the vicinity of the Dungeon, another group emerges behind them. These are **Castlemere-sponsored adventurers carrying a limited commission to survey the entrance and recover dangerous materials.** Their leader has decided that this gives her authority over everyone else’s discoveries.

They have survived their expedition, but barely. One has a splinted arm. Another carries a wrapped bundle that occasionally shines through the cloth. Their exhaustion makes them more dangerous: they desperately need something to show for their losses.

Their leader calls out:

> “You there. Hold a moment.”
> 
> The woman descending from the archway wears Castlemere’s colors over battered armor. Her eyes settle on your packs.
> 
> “By commission of Castlemere, materials recovered from this site must be examined before entering a settlement. Set your packs down. Anything hazardous comes with us.”

**Their real objective:** secure one valuable Dungeon discovery and the party’s account of the interior. They would prefer to obtain both through intimidation.

**Their justification:** they witnessed something inside that genuinely frightened them. They believe uncontrolled exploration could endanger the frontier. That belief conveniently supports their desire to control the rewards.

Use four distinct personalities:

|Member|What they want|What could change their behavior|
|---|---|---|
|**Captain Veyra Holt**, expedition leader|Return with proof that her expedition succeeded|A credible agreement that preserves her standing|
|**Orren Pell**, contracted arcanist|Examine a particular discovery the PCs carry|Access to study it, without taking possession|
|**Brannic Vale**, hired enforcer|Get paid and get home|Serious resistance or evidence Veyra exceeded her commission|
|**Tessa Reed**, local guide|Leave before anyone else dies|The PCs openly challenging the attempted seizure|

Veyra’s commission authorizes her to lead **her own expedition**. It grants no authority to search travelers or confiscate Springrun’s discoveries. Let the players uncover that through questions, inspecting the document, or pressing the other team members.

**Make the hostility tangible.** While Veyra speaks, Brannic moves to block the trail. Orren points at a specific visible item:

> “That one. Whatever else they’re carrying, we need that one.”

That turns a vague disagreement into a decision the players can act on.

Possible resolutions:

- **Negotiation:** exchange limited information or agree to an examination in Springrun with witnesses.
    
- **Intimidation or exposure:** force Veyra to retreat from her claim, earning a recurring rival.
    
- **Combat:** the team tries to seize the chosen object and withdraw. They surrender or retreat when the fight turns decisively against them.
    
- **An unexpected alliance:** Tessa reveals what happened to their missing companion, giving both groups a reason to cooperate.
    

I’d make this a **moderate encounter if the PCs are depleted**, with the confrontation itself providing the tension. Exact creatures and numbers should wait on their current level and condition.

One useful revelation, regardless of resolution:

> “We marked every junction,” Tessa says. “On the way back, the marks were still there. The junctions weren’t.”

That reinforces the living Dungeon without explaining it.

At the start of the encounter, place the following foes on the map: 
 - 1: [[Watchmage]]
 - 1: [[3-Rules/Bestiaries/NPC Core/W/Watch Officer|Watch Officer]]
 - 1: [[3-Rules/Bestiaries/NPC Core/T/Tracker|Tracker]]
 - 1: [[Captain Of The Guard-Weak]]

```encounter
name: EncounterName
party: PartyName
creatures:
 - 1: [[Watchmage, Orren Pell]]
 - 1: [[Watch Officer, Brannic Vale]]
 - 1: [[Tracker, Tessa Reed]]
 - 1: [[Captain Of The Guard-Weak, Captain Veyra Holt]]
```

#### Tactics
Use a broad clearing with scattered trees and fallen logs. Veyra and Brannic advance together, Orren stays behind them, and Tessa moves outward to establish bow range. Give both sides access to cover and room to maneuver.

Their objective remains **compelling surrender and taking the Dungeon discovery**. They stop attacking fallen PCs and demand capitulation when they gain an advantage. If two team members fall, or Veyra falls and Orren comes under pressure, the survivors attempt to negotiate or retreat. That leaves room for these NPCs to become recurring rivals while still delivering a serious fight tonight.

**Veyra Holt — Weak Captain of the Guard** I would have her fight beside Brannic, pushing an opposing frontline character away from Orren or opening a route toward whoever carries the desired discovery.
**Orren Pell — Watchmage** Open with **haste on Veyra** if she can immediately engage. Use **slow** against a PC applying significant pressure. Support with bow attacks while keeping the two melee fighters between himself and the party.
**Brannic Vale — Watch Officer** Use him to establish flanking with Veyra or intercept a PC approaching Orren. His lower level makes him a manageable target, but ignoring him allows the Castlemere formation to function.
**Tessa Reed — Tracker** Position Tessa along the clearing’s edge, targeting whichever PC threatens Orren. She can remain the team’s reluctant participant, but **have her fight initially** if you want the full Severe encounter. Her objections become consequential when the team starts losing.










## Chapter 2: The Quintessence Breakthrough
Talandra Bael's experiment actually works. The explosion isn't the result of Quintessence failing or becoming unstable. It's the consequence of successfully unlocking an energy source that her existing equipment was never designed to contain.

This distinction is important. Quintessence should emerge from the encounter as something extraordinarily valuable, not another dangerous material that people are afraid to use. The breakthrough should also introduce a larger mystery: Quintessence doesn't merely provide energy. Under the right conditions, it can impose stability upon the chaotic Aetheric energy that powers civilization.

### What actually happened?
Talandra Bael took the Quintessence into her underground workshop.

Aetheric Crystals contain enormous quantities of magical energy, but that energy is inherently chaotic. Conventional Aetheric Furnaces burn the crystals, releasing only a fraction of their potential energy in a usable form. The remainder is lost through unpredictable magical discharges, heat, and residual resonance.

Aetheric Syphons offer greater control, drawing energy from crystals through carefully constructed containment enchantments. However, the unstable nature of the energy requires the syphon to operate at a fraction of its theoretical capacity.

Talandra suspected that Quintessence might solve this problem.

She placed a small quantity of Quintessence into the stabilizing chamber of her experimental Aetheric Syphon and began drawing energy from a standard Aetheric Crystal.

The results were immediate.

The usual violent fluctuations disappeared. The crystal's chaotic resonance settled into a perfectly uniform rhythm. For the first time, Talandra watched a syphon extract nearly the full potential of an Aetheric Crystal without losing most of its energy to instability.

Then the containment runes began to glow.

The Quintessence wasn't merely smoothing the energy already being extracted. It was allowing the syphon to draw energy at a rate far beyond its intended capacity.

The flow intensified.

The containment enchantments strained. The bronze conduits began to glow white-hot. The syphon's regulating rings accelerated until their engraved runes blurred into circles of violet light.

Talandra attempted to shut down the apparatus, but the enormous flow of stabilized energy had overwhelmed the containment enchantments.

The resulting magical discharge tore through the workshop, shaking the foundations of Springrun.

And the syphon continued drawing energy.

## The crucial limitation — Quintessence consumption

I particularly like your idea that Quintessence eventually exhausts itself and crumbles into dust.

I'd establish the following properties:

- Quintessence is consumed through use. As it stabilizes chaotic Aetheric energy, it gradually expends its own stored energy.
    
- Consumption depends on throughput. The more Aetheric energy it stabilizes, the faster it is consumed.
    
- Exhaustion is irreversible. Once depleted, Quintessence crumbles into fine, inert dust. It cannot simply be recharged by conventional Aetheric technology.
    
- Stabilization is temporary. When Quintessence is exhausted, any Aetheric energy still being extracted reverts to its naturally chaotic state.
    

This introduces an important additional danger to Talandra's experiment.

The uncontrolled flow of stabilized energy is already overwhelming the syphon. But as the Quintessence rapidly depletes, the system faces a second catastrophe.

When the Quintessence finally crumbles, the enormous volume of energy passing through the apparatus will abruptly return to its unstable form.

The containment enchantments, already operating beyond their limits, will be unable to withstand that transition.

The first explosion was caused by too much energy. The second will be caused by that energy suddenly becoming chaotic again.

That gives the players a very clear and urgent problem to solve.

## An important distinction for the setting

I would establish that the Quintessence does not actually create additional Aetheric energy.

Instead, it makes existing energy usable.

A conventional Aetheric Furnace might burn through several crystals to accomplish what a Quintessence-enhanced system could achieve with one. The exact efficiency can remain undefined until we develop the economics.

This also means that Quintessence is valuable even in very small quantities. It doesn't replace Aetheric Crystals or eliminate the need to mine them. It dramatically improves their usefulness.

And because Quintessence can only be recovered from Dungeons, those locations become strategically important resources.

Springrun and Castlemere aren't simply competing over a mysterious ruin anymore. They're potentially competing over the most valuable energy resource discovered since the Shattering.

## One question worth resolving

Should Aetheric Crystals be physically consumed when their energy is extracted, regardless of whether a furnace or syphon is used?

My preference would be yes, but with different efficiencies.

An Aetheric Furnace rapidly burns crystals, leaving behind a mineral residue. An Aetheric Syphon slowly drains their energy, eventually leaving an inert crystal husk.

That maintains a consistent rule: Aetheric Crystals are finite fuel, while Quintessence is a consumable resource that dramatically improves how efficiently that fuel can be used.

It also creates a compelling foundation for the setting's economy, magical industry, and the eventual political struggle over Dungeon access.




























































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

