---
tags:
  - "#Adventure"
art: zz-Attachments/PlaceholderImage.png
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
Each All Hallow’s Eve, Harley’s domain flares with eerie vitality: spirits walk, the veil thins, and revels of fey and mortal alike fill her autumn wood.  But this year, something is terribly wrong — the lantern lights burn sickly green, and worms of Kyuss writhe through the roots of her sacred trees. When Harley summons the heroes, they must cleanse her realm before it is consumed by the Worm God’s corruption.

## Opening Scene — _The Hollow Beckons_
> [!note]+ **Read Aloud**
> 
> The chill of late autumn creeps through your bones as you wake in the middle of the night — not to darkness, but to a wavering glow.
> 
> Hanging in the air at the foot of your beds, a rent of orange-gold light shimmers like the reflection of a fire upon still water. It hums faintly, a sound between laughter and a sigh. Cold wind spills from it, carrying the scent of fallen leaves, candle smoke, and damp earth after rain.
> 
> From beyond the glow comes a whisper, half a plea and half a command:
> 
> **“Come. My revel rots…”**

As the portal steadies, faint silhouettes of trees sway in impossible directions, and you glimpse lanterns flickering deep within. The voice fades, leaving only the sound of rustling leaves and the faint patter of something wet striking the ground — like rain, or worms falling from the boughs.

**The Portal:** A circular rift of orange-amber light about six feet across, framed by drifting oak leaves that never touch the ground. [[Skills#Arcana|Arcana]] or [[Skills#Nature|Nature]] (DC 23) all the player to recognize it as a planar tear. A [[Skills#Religion|Religion]] (DC 25) detects faint necromantic contamination — Kyuss’s touch is attempting to bleed into the fey plane. 

If the party hesitates the light starts to pulses violently, and the portal begins to collapse inward like a draining whirlpool. Entering now requires a Reflex save DC 20 or the edges lash for `dice: 2d6` slashing damage before forcefully drawing them through.
   
Once the heroes cross, they arrive in a twilight forest of russet and black leaves, every tree hung with swaying jack-o’-lanterns. The air is unnaturally still. Crickets chirp in reverse; each note echoes backward into silence.

> [!note]+ **Read Aloud**
> The portal fades behind you, leaving only the ghost-light of lanterns to paint the clearing. From between two hollow oaks steps a woman clad in a gown as black as midnight ink. Her long gloves shimmer like polished silk, but her skin is pale as porcelain, cracked by a single black scar running beneath both eyes.
> 
> Her hair, the color of smoke, is swept up with crooked sticks and bits of hay that glitter faintly with emberlight. Her eyes — featureless pools of orange — fix upon you with weary intensity.
> 
> “You came,” she breathes, voice lilting and heavy with strain. “Good. My Hollow is sick. Lanterns burn with hunger instead of joy. The worms… they whisper even to the roots.”
> 
> She reaches out a gloved hand, fingertips trembling. “It's my understanding you have seen this before.  Please. Help me cleanse what festers before the night ends.”

Give the players some time to talk with Harley and understand what is happening.  She's be helpful but elusive at times.  Once they have run out of questions or Harley starts getting board proceed with Encounter 1 below.

### Encounter 1 - The Lantern Grove
Should the PCs agree, read the following: 

> [!note]+ **Read Aloud**
> The world around you suddenly flares with orange light — and you find yourselves standing in the heart of an autumn grove. Hundreds of jack-o’-lanterns hang suspended from blackened branches, their carved faces flickering with sickly green fire. The air is thick with the scent of mold and ash.
> 
> At the center of the grove stands Harley, her gown billowing like smoke though no wind blows. Her orange eyes shimmer with dread.
> 
> “This is the heart of my Hollow,” she whispers. “Once it glowed with joy and laughter. Now the lanterns hunger.”
> 
> As she raises her hand, several of the lanterns twist on their cords — their carved grins warping into screaming maws as green fire spills out. “They are no longer mine…  I can work on holding the corruption mostly at bay, but you must destroy the corrupt lanterns!”

The Lantern Grove is the corrupted heart of Harley’s domain — a place of eternal twilight where jack-o’-lantern spirits once danced and sang. Now, infected with Kyuss Worms, they’ve become ravenous mockeries of their former selves. The party must either destroy or purify these _Lantern Husks_ to restore stability to the Hollow. Once the last is dealt with, the grove’s light steadies and Harley can explain the true extent of the infestation.

![[lantern-grove-halloween.png|left wtall]]

> [!danger]+ Kyuss Worm Hazard (Triggered Effect)
> When the _Rotting Treant_ or a _Lantern Husk_ dies, `dice: 1d4` wriggling Kyuss Worms scatter into adjacent squares.
> 
> **Hazard:** Level 6 (Moderate); Stealth +17; 
> **Trigger:** a creature enters a space containing worms. 
> **Effect:** DC 25 Reflex save or a worm burrows beneath the skin (1 persistent acid + 1 persistent negative damage; DC 23 Medicine to Treat Wounds to remove). 
> **Automatic Resolution:** 1 minute of exposure to positive damage, area fire, or a Heal spell kills the worms.

#### Battlefield Features

```encounter
name: The Lantern Grove
party: Age of Worms
creatures:
  - 3: Lantern Husk
```

|Feature|Details|
|---|---|
|**Lantern Trees**|20-ft-high black-barked trees hung with hundreds of glowing gourds. Climbing a tree requires a DC 22 [[skills#Athletics\|Athletics]] check; they can be used for cover.|
|**Fungal Mire**|Patches of soft earth seethe with pale mycelium. Entering costs 10 ft of movement and requires a DC 20 Reflex save or become [[Slowed\|Slowed 1]] until end of next turn.|
|**Lantern Light**|40-ft-radius dim light area. Green flames pulse erratically; all fear effects gain +1 DC while within the grove.|
|**Corruption Pulse**|Every 3 rounds, one tree erupts with wormlight — all creatures within 15 ft must succeed at a DC 24 Fortitude save or take `dice: 2d6` acid damage and become [[Sickened\|Sickened 1]]. (A successful DC 26 [[skills#Occultism\|Occultism]] or [[skills#Religion\|Religion]] check suppresses the pulse for 1 minute.) **Protect Harley** — she channels magic to hold the planar boundaries together. If she takes more than 30 damage, the corruption spreads, increasing the Corruption Pulse DC by +2.|

When the final corrupted creature falls, the grove’s flames dim and re-ignite in warm orange hues. The oppressive hum fades to distant laughter and rustling leaves.

> [!note]+ **Read Aloud**
> Harley exhales a trembling breath. “It’s done — for now.” She traces a circle in the air, and the lanterns bow in silent thanks.
> 
> “You’ve done well, my darlings. Her smile flickers, thin and uncertain. “But the rot runs deeper than the roots of this place alone. Come — the Hollow’s heart still festers.”

### Encounter 2 - The Pavilion of Hollow Masks
![[pavilion-of-hallow-masks.png|right wtall]]

> [!note]+ **Read Aloud**
>  Harley raises a trembling hand, and the lanterns bow their carved faces toward her in silence. A faint path of light unfurls through the fallen leaves — a trail of softly burning embers leading deeper into the Hollow.  The path winds through silent trees until the lantern-light fades to a dull ember glow. Ahead, a pavilion of black silk and silver bones shimmers in the mist. Inside, dozens of masks drift in slow circles above four faceless statues. The air is heavy — every breath thick with smoke and rot. Harley steps beside you, her gown whispering like leaves. Her orange eyes dim, the black scar beneath them seeming deeper than before.
> 
> “This is where I kept my memories,” she says softly. “Each mask — a moment, an emotion. But the worms have hollowed them — turned joy to hunger, love to pain. They feed upon what I once was.”
> 
> She touches one of the silver effigies; it hisses and smokes beneath her glove. “The corruption twists my essence. If the wrong mask is worn, the Hollow will drown in its own despair.”
> 
> Her gaze fixes on you. “You must restore what’s true. Find which memories still carry my light, and place them upon the waiting faces. But beware — the worms despise healing. Here, even your kindness will wither until the rite is done.”

The pavilion once served as the centerpiece of Harley’s All Hallows revel — a place of laughter, dance, and delight. Now it’s deserted, the air thick with stillness. Masks hang from silver threads across the tent’s interior, swaying gently as if breathing.

Each mask represents an _emotion_, _memory_, or _aspect_ of Harley’s fey essence, now fractured by Kyuss’s corruption.  The puzzle is about restoring balance — finding which masks still belong to her, and which have been hollowed out by the Worm God’s influence.

#### Environment Details

|Feature|Description|
|---|---|
|**The Pavilion**|A circular tent 40 feet across, its floor covered in rotted leaves and withered garlands. The canopy’s silk ripples like water.|
|**Hanging Masks**|A dozen masks float or hang in midair, each whispering faintly. Four are key to the puzzle (Joy, Fear, Love, Despair); the others are hollow echoes that lead to danger.|
|**Haunting Music**|A spectral waltz drifts from nowhere. PCs who listen for a full round hear faint laughter and weeping mixed within the notes.|
|**The Silver Effigies**|Four faceless statues stand equidistant in the pavilion, hands outstretched as if waiting for something. Each is carved with faint fey runes.|

#### The Puzzle of the Hollow Masks
The heroes must restore the Pavilion’s balance by placing the correct masks upon the proper effigies while resisting the corrupting whispers of Kyuss’s rot. Each skill roll contributes toward earning Victory Points (success) or Complications (failure). Earn **8 Victory Points** before accruing **3 Complications** to cleanse the Pavilion and restore Harley’s fractured essence.

When the players arrive, the pavilion’s spectral music begins to play. Four effigies stand waiting for masks representing **Joy, Fear, Love, and Despair**. The remaining masks (corrupted ones) whisper lies or project horrifying memories of decay. Each “round” of play represents 1 minute of investigation, interaction, or performance in the Pavilion.  If more then two rounds occur without a success or a complication a complication will automatically be triggered.

##### Skill Actions

|Skill|DC|Effect|
|---|---|---|
|**Occultism**|25|Analyze magical resonances in the masks to determine which retain fey essence. A success grants 1 VP. A critical success grants 2 VP. A failure triggers a Complication.|
|**Religion**|23|Detect the corruptive touch of Kyuss and identify which effigies are tainted. Success grants 1 VP and cleanses one effigy temporarily.|
|**Performance**|25|Recreate the emotion of a mask through dance, gesture, or song, awakening its connection to Harley’s spirit. Success grants 1 VP. A critical success calms the surrounding corruption, granting +1 circumstance bonus to subsequent checks for 1 round.|
|**Society**|24|Interpret the effigies’ symbolism and link gestures to emotions. Success grants 1 VP.|
|**Arcana**|26|Match arcane runes across the pavilion to mask sigils. Success grants 1 VP; failure produces a pulse of green flame, causing 1d6 acid damage to all nearby.|
|**Perception**|22|Notice faint wormlike movements or glowing veins within corrupted masks, identifying one false mask. Success grants 1 VP.|
|**Diplomacy**|25|Appease the whispering spirits by addressing them directly, granting a temporary lull in the haunting chorus. Success prevents the next Complication.|
|**Intimidation**|25|Command the corrupted spirits to silence, disrupting a Complication in progress (Reaction). Critical success earns 1 VP.|
|**Assisting (Any)**|DC 20|Aiding another’s roll grants +1 circumstance bonus on success, +2 on critical success.|

##### Complications
Each time the group accrues a failure, the corruption deepens.  On 3 Complications, the _Broken Masquerade Haunt_ manifests.

|Complication|Description|
|---|---|
|**Wormlight Pulse**|A burst of green fire erupts (`dice: 2d6` acid, DC 24 Reflex half).|
|**Echo of Despair**|All PCs take a –1 status penalty to Will saves until the end of the scene.|
|**Broken Masquerade**|The haunt triggers — faceless dancers manifest (see Encounter 2B).|

> [!danger]+ The Broken Masquerade (Haunt)
> If the corruption overtakes the pavilion: The masks twist in unison, their hollow eyes flaring green. Phantom dancers appear — faceless, jerking marionettes — and laughter turns to screams.
> 
> ##### **Haunt (Level 7)**
> **Stealth:** +18 to notice
> **Trigger:** 3 failed puzzle attempts
> **Effect (1 action):** All creatures in the pavilion must attempt a **Will DC 26** save each round The Broken Masquerade is active.   Conditions my replenish and higher failure conditions will overrule lower failure conditions.
> 
>> **Success:** [[Frightened|Frightened 1]].
>> **Failure:** [[Frightened|Frightened 2]] and `dice: 2d8` mental damage.
>> **Critical Failure:** [[Frightened|Frightened 3]], `dice: 4d8` mental damage, and the character is [[Stupefied|Stupefied 1]] for 1 minute.
>
> **Deactivation:** 2 actions, DC 25 [[Skills#Religion|Religion]] or [[Skills#Occultism|Occultism]] to recenter the corrupted essence.

##### Resolution

###### **Success (8 VP before 3 Complications):**
> [!note]+ Read Aloud
> The pavilion’s lights shift from green to amber. The masks sigh in unison, then hang still once more. The air clears, and Harley steps forward, her tone soft and full of gratitude.
> 
> “You’ve reminded me who I was before the rot set in… I am in your debt, my darlings.”

Harley regains full control of her domain. PCs gain a _Fey Favor_ (award each PC a hero point). The path to the corrupted heart opens.

###### **Failure (3 Complications before 8 VP):**
> [!note]+ Read Aloud
> The pavilion’s silk tears, and laughter turns to screams. The masks twist into warped visages, merging into a single monstrous face. The Broken Masquerade begins…

Trigger the _Broken Masquerade Haunt_ immediately as a combat encounter (moderate threat, Level 7).

##### ✨ Resolution
Once the puzzle is solved or the haunt dispelled, the pavilion’s music softens into a gentle lullaby. The masks rehang themselves along the canopy’s edge, now glowing with warm candlelight instead of sickly green.

> [!note]+ **Read Aloud**
> Harley exhales in relief. “My memories… they remember me again,” she whispers. “Thank you.”
> 
> Her eyes drift toward the dark forest beyond the pavilion. “But the Hollow’s heart still beats with worm-song. Beneath the roots, the rot stirs. We must end it… before it ends me.”\
> 
> With a wave of her hand, the pavilion folds itself into darkness — revealing a spiral path descending beneath the roots of the grove, glowing faintly green.

### Encounter 3 - The Worm Beneath the Roots
![[worm-beneath-the-roots.png|left wtall]]

> [!note]+ **Descent to the Hollow’s Heart**
> A foul warmth rises from below — the stench of rot and stagnant water mingling with the faint scent of autumn leaves. As you descend, the roots grow slick with a pulsing green secretion. The light fades to murky emerald, and whispers echo in your minds — hungry, maddening murmurs promising rebirth through decay. The tunnel opens into a vast cavern of intertwined roots and fungal masses; translucent sacs filled with glowing green ichor, shot through with twitching veins and tiny wormlike movements beneath their surface. At its center lies a churning pool of luminous slime where worms writhe through the bark of an enormous, half-dead tree. A twisted figure kneels before it — a fey knight, his silver armor now blackened and weeping acid, his voice a rasping whisper: “All things rot, all beauty feeds the Worm. Even she.”

### 🌱 Lore: The Kyuss Growths

The **Kyuss Growths** are not mere fungus — they are _worm-nests of corruption_ that have merged with Harley’s world-tree heart.  
Each growth pulses with necrotic energy, feeding both the **Worm-Rotted Fey Knight** and the Hollow’s infection.

**Mechanically:**  
They act as both environmental hazards and secondary objectives — the heroes must destroy or purify them to prevent the Hollow’s complete collapse.

### Battlefield Features

```encounter
name: The Worm Beneath the Roots
party: Age of Worms
creatures:
  - 3: Kyuss Growth, 40, 24, 0
  - 1: Environmental Corruption, hidden
```


|Element|Level|Role|
|---|---|---|
|**Worm-Rotted Fey Knight**|8 (Elite Template)|Primary Foe|

---

### ⚔️ The Worm-Rotted Fey Knight

_(Use the **Worm That Walks (Lvl 8, B2 p. 286)** as a base, reflavored as a corrupted fey warrior with armor and blade instead of robes.)_

#### Modifications:
- **Armor and Weapon:** Treat its melee Strike as a _corroded greatsword_ (+20 to hit, 2d10+8 slashing + 1d6 acid).
- **Aura (Wormlight Miasma):** 15 ft aura; living creatures take 2d6 acid damage when starting their turn in the aura (DC 25 Fort half).
- **Fey Essence (Weakness):** Positive damage 10.
- **Phase Step (Reaction):** When damaged by positive energy, the knight flickers between corporeal and incorporeal for 1 round (Resist all 5).

#### Tactics:
The Worm-Rotted Fey Knight begins combat between the Growths, defending them. Each round a Growth remains intact, the knight gains 5 temporary HP at the start of his turn. When reduced below half HP, he retreats toward the pool, attempting to merge with the central Growth to trigger the **Worm Ascension** (a one-time, area-wide eruption of worms).
    

> [!danger]+ The Kyuss Growths (Hazard)
> **Level:** 6 **Complexity:** Simple (HP-based, 3 total in area)
> 
> Each Growth is a pulsating cyst of corruption feeding the knight.
> 
> **Perception DC** 22 (obvious visually)
> **AC** 24
> **Fort Save DC** 24
> **HP** 40 (Hardness 10)
> **Immunity** Mental, Visual
> **Weakness** Positive 10, Fire 5
> **On Destroyed** The Growth bursts in a 10-ft. radius of acid and worm fragments (`dice: 2d6` acid damage, DC 24 Reflex half).
> 
> **Special:** Each active Growth grants the Fey Knight a +1 status bonus to attack and damage rolls.  Destroying a Growth removes one bonus (stacking).

> [!danger]+ Environmental Corruption (Hazard)
> At the end of each round, roll `dice: 1d4` causing one of the following random effects occurs:
>
>> 1) Roots lash out (attack +18, `dice: 2d8` bludgeoning, DC 23 Reflex to avoid).
>> 2) Acidic seep erupts from the floor (5-ft. radius, `dice: 2d6` acid, DC 24 Reflex).
>> 3) Wormlight Pulse — DC 24 Fort save or [[Sickened|Sickened 1]].
>> 4) The cavern groans, causing falling debris (`dice: 2d8` bludgeoning, DC 25 Reflex half).

---

### 🕯️ Resolution

#### **Success:**

> The last Growth bursts, its ooze sizzling away into pale smoke. The knight screams as his form unravels into a cloud of burning worms that turn to ash before touching the ground.
> 
> The cavern heaves as orange light seeps through the bark — the Hollow’s heart restored. The whispers fade, and Harley descends through the roots, her gown trailing starlight and shadow.
> 
> “You’ve done what I could not,” she says quietly. “My heart beats again… thanks to you.”

**Effect:** The corruption recedes. All environmental damage ends. The party can finally rest — Harley restores full vitality with fey healing light.

#### **Failure:**

> The knight merges with the heart-tree, and a massive worm bursts from the roots, flooding the chamber in green flame.  
> Harley screams as she’s dragged upward by black roots — and the Hollow collapses into shadow.

Campaign consequence: The Hollow becomes a permanent Kyuss-tainted zone; Harley’s future aid is lost until cleansed through another ritual.

---

### 🧠 GM Notes

- Emphasize **environmental chaos** — acid dripping, roots thrashing, green glow dimming as Growths are destroyed.
    
- Track Growth HP openly so players feel their progress.
    
- The knight’s dialogue is half madness, half reverence toward “the Worm That Reigns Beneath.”
    
- When the first Growth falls, he screams, _“You kill the seed, but you cannot kill the soil!”_
    
- Harley may appear midway (at half HP threshold) to bolster morale, granting the party a **+1 status bonus on Will saves** for the rest of combat.




