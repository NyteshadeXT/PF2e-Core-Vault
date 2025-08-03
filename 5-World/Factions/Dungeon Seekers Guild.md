---
tags:
  - Organization
art: zz-Attachments/Dungeon Seekers Guild Emblem.png
pronounced: Dungeon Seekers Guild
organizationtype:
  - Association
  - Guild
head:
  - "[[Belegar Cragstone]]"
location:
  - "[[Ardentia City]]"
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
> **Type** | `INPUT[OrganizationType][inlineListSuggester:organizationtype]` |
> **Hierarchy** | `INPUT[Null][suggester(optionQuery("Campaign/Organizations/Hierarchies"), useLinks(partial)):hierarchy]` | 
> **Head** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):head]` |
> **Steward** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):steward]` |
> **Parent Organization** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
> **Worship** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):worship]` |
> **HQ** | `INPUT[Null][suggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):hq]` |
> **Operating Areas** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |

> [!infobox]+
> # `=this.file.name`
> ###### `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Info
> | |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Type** | `VIEW[{organizationtype}][text]` |
> **Hierarchy** | `VIEW[{hierarchy}][link]` |
> **Head** | `VIEW[{head}][link]` |
> **Steward** | `VIEW[{steward}][link]` |
> **Parent Organization** | `VIEW[{organization}][link]` |
> **Worship** | `VIEW[{worship}][link]` |
> **HQ** | `VIEW[{hq}][link]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

> [!kirk|info] Info (Remove me)
> Organization: Organizations can be anywhere from a small band of misfits to an entire Nation.

> [!metadata|geography]- Geography
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(terrain, ", ") AS Terrain, join(link(dominion), ", ") AS "Dominion"
> FROM "Campaign"
> WHERE contains(tags, "Geography") AND econtains(organization, this.file.link)
> SORT dominion ASC, file.name ASC

> [!metadata|county]- County
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(terrain, ", ") AS Terrain, join(link(dominion), ", ") AS "Dominion"
> FROM "Campaign"
> WHERE contains(tags, "County") AND econtains(organization, this.file.link)
> SORT dominion ASC, file.name ASC

> [!metadata|settlements]- Settlements
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, settlementtype AS Type, defence AS Defences, join(link(dominion), ", ") AS "Dominion"
> FROM "Campaign"
> WHERE contains(tags, "Settlement") AND econtains(organization, this.file.link)
> SORT dominion ASC, file.name ASC

> [!metadata|district]- Districts
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(districttype, ", ") AS Type
> FROM "Campaign"
> WHERE contains(tags, "District") AND econtains(organization, this.file.link)
> SORT districttype ASC, file.name ASC

> [!metadata|location]- Locations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(organization), ", ") AS "Organization(s)"
> FROM "Campaign"
> WHERE contains(tags, "POI") AND econtains(organization, this.file.link)
> SORT poitype ASC, file.name ASC

> [!metadata|organizations]- Child Organizations
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "Campaign"
> WHERE contains(tags, "Organization") AND econtains(organization, this.file.link)
> SORT organizationtype ASC, file.name ASC

> [!metadata|characters]- Characters
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, join(occupation, ", ") AS "Occupations", join(link(organization), ", ") AS "Organizations"
> FROM "Campaign"
> WHERE contains(tags, "Character") AND econtains(organization, this.file.link) AND !contains(condition, "Dead")
> SORT tags DESC, file.name ASC

> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "Campaign"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC

## Overview

> [!kirk|info] Prompt (Remove me)
> The Dungeon Seekers Guild stands as a beacon for those who crave adventure, seek forgotten knowledge, and thrive in the heart of danger. Their banners flutter across continents, and their name echoes through taverns and royal courts alike.
> 
> The guild's primary purpose is to explore dungeons in any of their various forms; subterranean labyrinths, cursed crypts, and forgotten temples.  They seek to uncover relics, unravel magical mysteries, and reclaim Creature Cores from defeated foes and even Dungeon Cores when necessary or required. Dungeon Seekers vie for fame. Their deeds are sung in taverns, etched on stone tablets, and whispered by bards. Fortune follows—the spoils of war, artifacts, and contracts from wealthy patrons. The Dungeon Seekers guild works has an excellent relationship with [[Arcane Exchange Consortium]] and the two are regular partners.
> 
> Amongst the leaders of the Dungeon Seekers guild are:
> - Guildmaster [[Belegar Cragstone]]: A grizzled dwarf with a runic hammer. His beard holds tales of countless dungeons. Belegar assigns quests, negotiates contracts, and ensures the guild's survival.
> - [[Nadria the Core Whisperer]]: A mysterious sorceress who senses Creature Cores. Her eyes glow when near hidden treasures. Nadria deciphers ancient runes, unlocking dungeon secrets.
> - Captain [[Riven Stormblade]]:  Head of the guilds peacekeeping forces.  A swashbuckling rogue who leads particularly dangers or high-profile dungeon expeditions. His cutlass has tasted the blood of many guardians. Riven's charisma rallies the guild, and his map-making skills guide them through perilous mazes.
> 
> Members of the Dungeon Seekers guild have several perks.  Dungeon Delving Contracts are the primary form of income for the guild.  Nobles, scholars, and factions hire the guild to explore specific dungeons. They seek artifacts, forbidden knowledge, or strategic advantages. The guild negotiates fees, shares, and exclusivity rights.  Creature Core Retrieval is the second major income source.  Guild members specialize in reclaiming Creature Cores from defeated monsters. These cores fuel magic item creation and spellcasting allowing guild members access to a wide array of items and crafters.  The guild's alchemists refine the cores into elixirs, potions, and magical tonics.  The Dungeon Seekers guild also provides training and mentorship so that novices who join the guild receive proper training. They learn trap detection, combat tactics, and deciphering ancient scripts. Experienced Seekers mentor them, sharing battle scars and wisdom.
> 
> The Dungeon Seekers guild is not without its own mysteries.  Whispers persist that a dungeon exists where the wind itself guards a Dungeon treasure vault, The Lost Vault of Zephyrion. The Seekers hunt for its location as the legend says the vault contains the source of the treasure which are mysteriously found in Dungeons.   Some claim that a legendary Seeker, known as the Phantom Seeker, roams between worlds—a ghostly figure who appears in dire moments. The Phantom Seeker guides lost seekers, vanishing when their purpose is fulfilled.
> 
> Create an encompassing overview of this organization's essence. Explore its purpose, structure, values, and significance within the world. Highlight the unique traits that define this group, delving into its history, goals, and impact on its members and the surrounding society. What distinguishes this organization, and how does it operate within the larger context of the world?

## Culture

> [!kirk|info] Prompt (Remove me)
> Detail the culture embedded within this organization. What is its mission statement or core philosophy? Explore its code of conduct, values, and ethical guidelines that guide its members. How does this organization recruit new members, and what criteria do they look for? Define the hierarchy or ranks within the group and the significance of each level. Additionally, describe any uniforms, symbols, or insignia that members might wear to signify their affiliation. How do these cultural elements shape the identity and operations of this organization?

### Example
## Acquaintances

> [!kirk|info] Prompt (Remove me)
> Map out the network of relationships this organization maintains with other groups and individuals. Who are their allies, rivals, or adversaries? Detail the nature of these connections, whether they're alliances based on shared interests, longstanding rivalries, or uneasy truces. What events or conflicts have shaped these relationships? Furthermore, explore the interactions and dealings this organization has with influential individuals or entities outside its circle. How do these connections influence the organization's operations and goals?

## Current Events

> [!kirk|info] Info (Remove me)
> Zoom into the present landscape of this organization. What is currently happening within its ranks? Detail ongoing developments, internal conflicts, or achievements. Is the organization facing challenges, undergoing reforms, or enjoying newfound success? Furthermore, what are its current objectives or endeavors? Explore the immediate goals or missions the organization is striving to accomplish. How are these current events and goals influencing the actions and dynamics within the group?

## History

> [!kirk|info] Info (Remove me)
> Trace the roots and evolution of this organization through time. Explore its founding, pivotal moments, and transformative events that shaped its trajectory. What were the circumstances that led to its creation? Detail significant milestones, challenges, or triumphs that have defined its history. How has the organization adapted to changes, crises, or conflicts over the years? Uncover the legacy and historical narrative that have molded this group into what it is today.

## Notes


### **The Dungeon Seekers Guild & The Wyld Paths**

#### **Overview**

The **Dungeon Seekers Guild** maintains a network of **mystic portals** that allow its members to quickly travel between its various guildhalls scattered across Aetheria. These portals do not function like traditional teleportation spells; instead, they lead into a mysterious and ancient **fey realm** known as **The Wyld**.

---

### **The Wyld**

- **Nature:** A vast, twilight realm of shifting trees, bioluminescent plants, eerie silence, and unpredictable magic. The Wyld is a living domain, ancient and sentient in its own strange way. The entire region is dominated by the **Endless Forest**, broken only by winding paths that cut through the undergrowth like narrow rivers of safety.
    
- **Time & Space:** Time flows unpredictably in the Wyld. A short walk on the paths could take hours or days in the material world—or vice versa. Distances are elastic; the Wyld reshapes around the needs or moods of the traveler… or the forest itself.
    
- **Danger:** Travelers are **strictly forbidden to leave the paths.** Legends tell of Guild members who wandered into the trees, only to return decades later… or not at all. Some never left the Wyld but were changed by it—twisted, enchanted, or worse.
    

---

### **Path System & Navigation**

- **The Pathways:** These are narrow, moss-covered roads that seem to remain untouched by time. No underbrush crosses them, and they are lined with ghostly white stones that glow faintly under moonlight.
    
- **Crossroads & Monoliths:** At intersections, travelers find ancient **stone monoliths**, each engraved with shifting fey runes. These serve as both orientation markers and magical "checkpoints."
    
- **Runed Token:**
    
    - A small, intricately carved stone or crystal given to each authorized Guild member.
        
    - **Functions:**
        
        - Glows softly when near a monolith.
            
        - Displays directional glyphs when placed into the slot on a monolith’s base, guiding the traveler along the correct path.
            
        - **Key to Exit:** At designated **Waygates** (the exit portals), the token must be placed into a pedestal to activate the gate and leave the Wyld.
            
        - If lost or stolen, the traveler becomes **trapped in the Wyld**—potentially forever.
            

---

### **Guild Protocols & Warnings**

- **"Stay on the Path":** The first and most important rule for any Dungeon Seeker. Repeated in initiation oaths, carved on guildhall walls, and written in multiple languages on the first page of the Guild travel manual.
    
- **No Unauthorized Entry:** Non-Guild members cannot enter or exit the Wyld without a runed token. Even if they follow a member in, they may become lost when separated or disoriented.
    
- **Travel Restrictions:**
    
    - Only open to members of a certain rank or higher (could be a cool in-world reward for players).
        
    - Dangerous areas of the Wyld are sealed off unless a sanctioned mission is assigned.
        

---

### **Adventure Hooks & Encounters**

1. **A Missing Seeker:** A high-ranking Seeker went missing weeks ago after leaving the path. The Guild hires the party to enter the Wyld and recover them—or what remains.
    
2. **Fey Interference:** Something is altering the monolith glyphs, leading Guild members astray. Is it a rogue fey lord, or a deeper corruption?
    
3. **Token Theft:** A player's runed token is stolen by a mischievous forest spirit. Now they must recover it before the next crossroads… or face the Wyld's wrath.
    
4. **Wild Companion:** An animal (or strange creature) begins following a party member from the Wyld. It seems harmless—until it starts whispering dreams at night.
    
5. **Wyld-Borne Mutation:** Time spent in the Wyld leaves strange magical traces. A PC gains a minor magical boon… or curse.
    

---

### **Optional Mechanics (for Pathfinder 2e)**

- **Runed Token (Item, Unique, Invested)**
    
    - **Usage:** Slotless item.
        
    - **Effect:** Can be placed into a monolith to reveal the correct path via visible glyphs. Grants a +2 circumstance bonus to **Survival** checks to navigate the Wyld while on the path.
        
    - **While in Possession:** You are immune to disorientation from Wyld time shifts unless you leave the path.
        
    - **Resonance Effect:** Once per day, cast _know direction_ as an innate primal spell.
        
- **Leaving the Path (Optional Subsystem):**
    
    - Treat the Wyld as a **Hazardous Exploration Zone.**
        
    - Every 10 minutes off the path, roll a **Will Save (DC varies with depth)**:
        
        - **Success:** You maintain direction.
            
        - **Failure:** You become disoriented and suffer a **mental effect** (confusion, hallucinations, time loss).
            
        - **Critical Failure:** You attract the attention of something… watching.
            

---

Would you like a map layout for the Wyld Paths or the design of a token or monolith next?

##### You said:

The Runed Token needs a better name. It should be a consumable item, good for only one trip through the Wyld. Some background on how the Seekers Guild learned of this place would be helpful. Fey creatures exist in the Wyld as well, but for some reason don't molest travelers how stick to the Paths.

###### ChatGPT said:

Perfect—those added details help sharpen the aesthetic and mystery of the Wyld travel system. Let’s upgrade that **Runed Token**, give it a compelling name, tie it to some Guild lore, and fold in the fey presence and behavior. Here's a revised version based on all that:

---

## **Item: Wyldpass Charm**

**Item Level:** Varies (typically 5+)  
**Type:** Consumable, Magical, Unique  
**Bulk:** —  
**Price:** ~150 gp (base tier)  
**Traditions:** Primal, Arcane

### **Description**

The **Wyldpass Charm** is a small, delicately carved token made from moonstone, bonewood, or shimmering amber. Each one is inscribed with primal runes that softly pulse when near a **Wyld Path** monolith. It is a one-time-use item crafted by Guild-aligned arcanists and feybinders using reagents sourced from both the material world and the Wyld.

### **Activation (Interact)**

When inserted into a **monolith** or a **Waygate pedestal**, the Wyldpass Charm does the following:

- **At Monoliths:** Glows with a directional rune visible only to the holder. Grants a +2 item bonus to Survival checks to follow the correct Wyld Path.
    
- **At Waygates:** Unlocks and activates the portal to the desired destination.
    
- Once a Waygate is used, the charm burns away in a flash of green-white flame, leaving only a faint scent of lavender and petrichor.
    

### **Fail State**

If a charm is destroyed, lost, or consumed before exiting:

- The traveler cannot exit the Wyld and is **trapped**.
    
- Their presence begins to draw **the interest of the Forest.**
    

---

## **Lore: The Guild’s Discovery of the Wyld**

When the **Dungeon Seekers Guild** was still young—barely more than a network of glory-seekers and ruin-raiders—a band of Seekers vanished during an expedition beneath the roots of an ancient forest known as the **Gloamgrove**. Weeks later, a single member reappeared at a Guildhall far across the continent. She claimed to have walked between “the trees that are not trees, and stars that never move,” guided by strange lights and whispers.

She brought with her a seed. Not a plant, but a **seed of space**, crackling with latent planar energy. The Guild’s arcanists studied it, opening it into a **portal**—and stepping for the first time into the **Wyld**.

Since then, the **Feyroad Accord** was struck: a silent, unspoken agreement between the Dungeon Seekers and the mysterious forces of the Wyld. So long as travelers stay **on the Path**, they are not hunted, toyed with, or led astray. Why this is so remains one of the Guild’s most closely guarded mysteries.

---

## **Fey Behavior in the Wyld**

- **Watchers, Not Guides:** Fey creatures **observe** travelers from the trees. Glimmering eyes peek from between branches. Whispers echo just beyond hearing.
    
- **Non-Aggression on the Path:** Fey do not attack or interfere with Path-bound travelers. This “pact” is unspoken but absolute—breaking it is considered a violation of ancient law.
    
- **Crossing the Path:** Some fey may walk across the path but never linger. They often leave subtle gifts (a mushroom, a feather, a whispered warning) or riddles spoken in Sylvan.
    
- **Temptations from the Forest:**
    
    - Lost loved ones.
        
    - Calls for help.
        
    - Faint music.
        
    - Precious items glittering beneath tree roots.
        
    
    These are **traps**, either natural effects of the Wyld or the games of the fey who hunger for amusement.
    

---

## **Adventure Seeds / Secrets**

- **Feyroad Accord Origins:** The seed that opened the first portal was actually the gift (or trap?) of a fey **Archduke of Crossroads**—a figure who may demand payment soon.
    
- **Lost Path:** A branch of the Wyld Paths has gone dark. No monolith responds to charms. The Guild needs someone brave (or foolish) enough to walk it.
    
- **Counterfeit Charms:** Someone is forging Wyldpass Charms—and travelers using them are not returning. The forgeries are good… but the Wyld knows the difference.
    

---

Would you like me to stat out the Archduke of Crossroads as a powerful unique fey being tied to this whole system?

##### You said:

Yes. The Archduke should be a very high level challenge for players in my Pathfinder 2nd Edition campaign.

###### ChatGPT said:

Excellent. Here's a high-level, Pathfinder 2e-appropriate unique fey that embodies mystery, manipulation, and the deadly nature of stepping off the path.

---

markdown

CopyEdit

`--- name: The Archduke of Crossroads level: 20 type: Unique Fey Noble alignment: CN traits: Fey, Unique, Archfey, Primal perception: +36; darkvision, fey sense (imprecise 60 ft.), see invisibility languages: Sylvan, Common, Aklo; telepathy 120 ft. skills: Arcana +35, Deception +39, Diplomacy +37, Nature +34, Occultism +35, Society +32, Stealth +34, Survival +33, Thievery +30 str: +5 dex: +8 con: +7 int: +6 wis: +7 cha: +9 ac: 44 fort: +33 reflex: +36 will: +35 hp: 450; regeneration 30 (deactivated for 1 round by cold iron or true name) resistances: cold 20, electricity 20, mental 20, precision 10 weaknesses: cold iron 15, true name 20 speed: 40 ft., teleport 120 ft. ---  ### **Aura of the Wyld** (*aura*, *primal*, *illusion*) 60 feet Creatures within the aura must succeed at a DC 38 Will save or see the terrain around the Archduke as a shifting maze of forests and paths. On a failure, all movement through difficult terrain costs double. On a critical failure, targets are **confused** for 1 round as the Wyld grips their mind.  ---  ### **Melee** **Feyblade** +38 (cold iron, finesse, magical), Damage 3d10+13 slashing plus 2d6 mental and *Wyldbind*  **Wyldbind (curse, primal)** – The Archduke’s weapon binds a creature to the forest. A creature struck must succeed at a DC 38 Will save or become **Anchored** to the Wyld. Anchored creatures cannot teleport or Plane Shift, and treat all terrain as difficult. A 7th-level *remove curse* or *miracle* is required to end the effect.  ---  ### **Primal Spellcasting** (DC 42, attack +34) The Archduke casts primal spells as a 20th-level caster. - **Cantrips (9th):** *detect magic, ghost sound, tanglefoot, guidance* - **9th:** *nature’s enmity, maze, shapechange* - **8th:** *moment of renewal, tsunami, uncontrollable dance* - **7th:** *plane shift, tree stride, reverse gravity* - **6th:** *flesh to stone, dominate, disintegrate* - **5th:** *banishment, cloudkill, geas* - **4th:** *confusion, dimension door* - **3rd:** *suggestion, haste* - **2nd:** *entangle, invisibility* - **1st:** *charm, illusory disguise*  ---  ### **Feylord’s Decree** ◆◆ (emotion, enchantment, primal) The Archduke issues a command in Sylvan that echoes in all minds within 60 feet. All creatures must attempt a DC 38 Will save. - **Critical Failure:** Controlled for 3 rounds. - **Failure:** Fascinated and flat-footed for 2 rounds. - **Success:** Stunned 1. - **Critical Success:** Unaffected.  ---  ### **Cloak of the Crossroads** ✦✦ (concentrate, primal, teleportation) – **1/day** The Archduke vanishes in a swirl of autumn leaves and reappears anywhere he has stood in the past 24 hours. As a free action, he may also **swap places** with a creature within 120 feet who has failed a save against his spells or abilities within the last minute (Will save DC 38 negates).  ---  ### **Twisting Path ◆◆ (illusion, primal)** Targets up to 3 creatures he can see. The terrain under their feet becomes a twisting illusion. Each must make a DC 38 Reflex save: - **Critical Failure:** Target is *teleported* 100 feet in a random direction and is prone, confused, and flat-footed for 2 rounds. - **Failure:** Target is teleported 50 feet in a random direction and is flat-footed for 1 round. - **Success:** Target is dazzled for 1 round. - **Critical Success:** Unaffected.  ---  ### **Fey Trickster (reaction) ✦** Trigger: A creature within 60 feet fails a Will save. Effect: The Archduke can redirect the effect to a second target within 30 feet of the original. That target must save against the same effect.  ---  ## **Roleplay and Lore**  The **Archduke of Crossroads** appears as a tall, androgynous fey being with antlers like woven branches, a cloak of moth wings, and eyes like burning stars. Their voice echoes with layered tones—whispers in all directions at once. They **never lie**, but their truths twist like the Paths they rule.  - The **Wyld Paths** are theirs. Each portal, monolith, and turn owes allegiance to their ancient claim. - They **allow** the Dungeon Seekers Guild to travel the Wyld—but are owed for it. - They are bound by rules older than gods—but the rules can be broken for a price. - Every Wyldpass is a **favor**, and they **never forget a debt**.  ---  Would you like a Wyldpass Charm crafting recipe next? Or a sidebar with rumors and signs of the Archduke's presence?`

##### You said:

This is fantastic. Thank you!

###### ChatGPT said:

You're very welcome! I'm so glad you like it—this kind of eerie, high-level fey power fits beautifully into your world. If you ever want to develop a Wyldpass crafting system, design an encounter along the Paths, or create a mysterious Wyld-altered guildhall, I’d love to help bring those ideas to life too.

And if your players ever _do_ stray off the path… well, the Archduke will be watching. 🌿✨

Let me know what you’d like to build next!

Search

Reason

ChatGPT can make mistakes. Check important info.

?