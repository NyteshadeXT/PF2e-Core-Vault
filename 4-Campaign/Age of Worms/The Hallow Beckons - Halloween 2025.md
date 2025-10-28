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

### Battlefield Features

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
>  Harley raises a trembling hand, and the lanterns bow their carved faces toward her in silence. A faint path of light unfurls through the fallen leaves — a trail of softly burning embers leading deeper into the Hollow.  As you follow the trail, the forest grows quieter. The twisted branches lean closer together overhead, and the air grows heavy with the scent of smoke and decay. Faint shapes move among the trees — echoes of dancers long gone, faces pale and empty.  In the distance, music drifts through the fog: a broken waltz played on phantom strings. The path opens into a moonlit clearing, and there stands a pavilion of black silk and silver bones.

The pavilion once served as the centerpiece of Harley’s All Hallows revel — a place of laughter, dance, and delight. Now it’s deserted, the air thick with stillness. Masks hang from silver threads across the tent’s interior, swaying gently as if breathing.

Each mask represents an _emotion_, _memory_, or _aspect_ of Harley’s fey essence, now fractured by Kyuss’s corruption.  The puzzle is about restoring balance — finding which masks still belong to her, and which have been hollowed out by the Worm God’s influence.

### 🪞 Environment Details

|Feature|Description|
|---|---|
|**The Pavilion**|A circular tent 40 feet across, its floor covered in rotted leaves and withered garlands. The canopy’s silk ripples like water.|
|**Hanging Masks**|A dozen masks float or hang in midair, each whispering faintly. Four are key to the puzzle (Joy, Fear, Love, Despair); the others are hollow echoes that lead to danger.|
|**Haunting Music**|A spectral waltz drifts from nowhere. PCs who listen for a full round hear faint laughter and weeping mixed within the notes.|
|**The Silver Effigies**|Four faceless statues stand equidistant in the pavilion, hands outstretched as if waiting for something. Each is carved with faint fey runes.|

### 🧩 The Puzzle of the Hollow Masks

**Objective:**  
Place the correct four masks on the matching effigies to restore harmony and open the way forward. Each round of investigation or action progresses time; with each failure, the corruption grows.

---

#### 🕰️ Puzzle Setup

Each mask is whispering phrases hinting at its nature.  
For example:

|Mask|Hint|Correct Statue|
|---|---|---|
|**Mask of Joy**|“Once I laughed until I cried… now I only remember the tears.”|The effigy holding a cracked goblet.|
|**Mask of Fear**|“Every light casts a shadow… and mine always stares back.”|The effigy clutching its own face.|
|**Mask of Love**|“I burned too bright, and now my heart is ash.”|The effigy whose chest bears a hollow flame rune.|
|**Mask of Despair**|“When the dance ends, all that’s left is silence.”|The kneeling effigy with open palms.|

---

#### 🧩 Skill Checks

Each PC can attempt one check per round.

|Skill|Use|DC|
|---|---|---|
|**Occultism (DC 25)**|Identify which masks radiate true fey essence.||
|**Religion (DC 23)**|Detect Kyuss corruption in the masks or effigies.||
|**Society (DC 24)**|Match emotional symbolism and gestures to the correct effigy.||
|**Performance (DC 25)**|Emulate the emotion the mask represents to awaken it safely.||
|**Arcana (DC 26)**|Identify runic correspondences on the effigies.||
|**Perception (DC 22)**|Notice faint green veins pulsing through corrupted masks.||

Each correct placement counts as **1 success**.  
Each failed attempt counts as **1 failure**.  
After **4 successes**, the puzzle is solved.  
After **3 failures**, the _Broken Masquerade_ manifests.

---

### 💀 The Broken Masquerade (Haunt)

If the corruption overtakes the pavilion:

> The masks twist in unison, their hollow eyes flaring green. Phantom dancers appear — faceless, jerking marionettes — and laughter turns to screams.

**Haunt (Level 7)**

- **Stealth:** +18 to notice
    
- **Trigger:** 3 failed puzzle attempts
    
- **Effect (1 action):**
    
    - All creatures in the pavilion must attempt a **Will DC 26** save.
        
    - **Success:** Frightened 1.
        
    - **Failure:** Frightened 2 and 2d8 mental damage.
        
    - **Critical Failure:** Frightened 3, 4d8 mental damage, and the character is **Stupefied 1** for 1 minute.
        
- **Deactivation:** 2 actions, DC 25 Religion or Occultism to recenter the corrupted essence.
    
- **Special:** If Harley assists, add +2 circumstance bonus to the check.
    

---

### ✨ Resolution

Once the puzzle is solved or the haunt dispelled, the pavilion’s music softens into a gentle lullaby. The masks rehang themselves along the canopy’s edge, now glowing with warm candlelight instead of sickly green.

> [!note]+ **Read Aloud**
> 
> Harley exhales in relief. “My memories… they remember me again,” she whispers. “Thank you.”
> 
> Her eyes drift toward the dark forest beyond the pavilion. “But the Hollow’s heart still beats with worm-song. Beneath the roots, the rot stirs. We must end it… before it ends me.”

With a wave of her hand, the pavilion folds itself into darkness — revealing a spiral path descending beneath the roots of the grove, glowing faintly green.






