# Turns
Turns Player Core 436
**Start your Turn** Your durations measured in rounds decrease by 1; use one triggered action with a trigger of “your turn begins”; attempt a recovery check if you’re dying; regain your 3 actions and 1 reaction.
**Act** Use your actions.
**End your Turn** End anything that lasts until the end of your turn; take persistent damage and attempt to recover from it; use one triggered action with a trigger of “your turn ends”.

# Basic Actions
**Aid** DC 15 check to give a +1 circumstance bonus to assisted skill check or attack roll (crit success: +2, +3 if master, +4 if legendary). 
**Crawl** `pf2:1` (move) Move 5 feet while prone.
**Delay** `pf2:0` Select this when your turn begins; take your turn later.
**Drop Prone** `pf2:1` (move) Fall prone.
**Escape** `pf2:1` (attack) Attempt to get free when grappled, restrained, or immobilized. Use unarmed attack modifier, Acrobatics, or Athletics.
**Interact** `pf2:1` (manipulate) Grab an object, open a door, draw an item, or do a similar action.
**Leap** `pf2:1` (move) Jump horizontally 10 feet (15 feet if your Speed is 30 feet or more), or vertically 3 feet and horizontally 5 feet.
**Ready** `pf2:2` (concentrate) Prepare to take a single action or free action as a reaction with a trigger you designate.
**Release** `pf2:0` (manipulate) Release something you’re holding without triggering reactions.
**Seek** `pf2:1` (concentrate, secret) Scan a 30ft area for signs of creatures or objects using Perception.
**Sense Motive** `pf2:1` (concentrate, secret) See if a creature's behavior is abnormal. 
**Stand** `pf2:1` (move) You stand up from prone. 
**Step** `pf2:1` (move) Move 5 feet without triggering reactions.
**Stride** `pf2:1` (move) Move up to your Speed.
**Strike** `pf2:1` (attack) Attack with a weapon or unarmed attack.
**Take Cover** `pf2:1` Gain cover, or get greater cover if you have cover.

# Speciality Basic Actions
**Arrest a Fall** [reaction] Use Acrobatics or Reflex to slow your fall while flying.
**Avert Gaze** `pf2:1` Get a +2 circumstance bonus against visual abilities.
**Burrow** `pf2:1` (move) Move up to your burrow Speed.
**Dismiss** `pf2:1` (concentrate) End an effect that states you can dismiss it.
**Fly** `pf2:1` (move) Move up to your fly Speed. Moving upward counts as traveling through difficult terrain. You can move straight down 10 feet for every 5 feet of movement you spend. If you’re airborne at the end of your turn and didn’t Fly this round, you fall.
**Grab an Edge** [reaction] (manipulate) Use Acrobatics or Reflex to try to catch something stoping a fall.
**Mount** `pf2:1` (move) Get on an allied animal bigger than you to ride it or dismount if you are already mounted.
**Point Out** `pf2:1` (auditory, manipulate, visual) Reveal unobserved creature.
**Raise a Shield** `pf2:1` Put up a shield to get its bonus to AC.
**Sustain** `pf2:1` Choose one of your effects that has a sustained duration or lists a special benefit when you Sustain it.

# Death and Dying
**Knocked Out** When reduced to 0 HP, move your initiative to directly before the creature or effect that reduced you to 0 HP. Gain dying 1, or dying 2 if the damage came from a critical hit or your critical failure on a save. A nonlethal effect makes you unconscious at 0 HP and doesn’t give you the dying condition. If you have the wounded condition, increase your dying value by an amount equal to your wounded value.

**Dying** You are unconscious and bleeding out or otherwise at death's door. If you ever reach dying 4, you die. Attempt a recovery check at the start of your turn to determine whether you get better or worse. If you ever have 1 HP or more, you lose the dying condition. Any time you lose the dying condition, increase your wounded value by 1. If you take damage while dying, increase the dying value by 1 (or 2 on an enemy’s critical success or your critical failure).

**Recovery Checks** At the start of your turn when you’re dying, attempt a flat check (DC 10 + your dying value).
- **Critical Success** Your dying value is reduced by 2.
- **Success** Your dying value is reduced by 1.
- **Failure** Your dying value increases by 1.
- **Critical Failure** Your dying value increases by 2.

**Wounded** Any time you gain the dying condition or increase it for any reason, add your wounded value to the amount you gain or increase your dying value. The wounded condition ends if you receive HP from Treat Wounds, or if you’re restored to full HP and rest for 10 minutes.

**Doomed** The maximum dying value at which you die is reduced by your doomed value. If your maximum dying value is reduced to 0, you instantly die. Your doomed value decreases by 1 each time you get a full night’s rest.

# Unconscious
You’re sleeping, or you’ve been knocked out. You can’t act. You take a –4 status penalty to AC, Perception, and Reflex saves, and you have the blinded and off-guard conditions.  

If you’re unconscious because you’re dying, you can’t wake up as long as you have 0 Hit Points. If you’re restored to 1 Hit Point or more via healing, you lose the dying and unconscious conditions and can act normally on your next turn.

Otherwise, you can’t wake up from unconsciousness while you have 0 Hit Points. If you’re unconscious and have 1 or more Hit Points, you wake up in one of five ways.
• You take damage, provided the damage doesn’t drop you to 0 HP.
• You receive healing, other than natural healing from resting.
• Someone nudges or shakes you awake with an Interact action.
• If there’s loud noise, at the start of your turn attempt a Perception check against the noise’s DC, waking up if you succeed. If creatures are attempting to stay quiet, this uses their Stealth DC.
• The GM decides you wake up either because you have had a restful night’s sleep or something disrupted that restful sleep.

# Treat Wounds

| Proficiency | DC  | Success Healing | Critical Healing | 
| ----------- | --- | --------------- | ---------------- |
| Trained     | 15  | 2d8             | 4d8              |
| Expert*     | 20  | 2d8+10          | 4d8+10           |
| Master*     | 30  | 2d8+30          | 4d8+30           |
| Legendary*  | 40  | 2d8+50          | 4d8+50           |
*Rolling against a higher DC is optional but required for healing bonus.

# Terrain
**Difficult Terrain** Each square costs 5 extra feet of movement.
**Greater Difficult Terrain** Each square costs 10 extra feet of movement.
**Hazardous Terrain** Moving through hazardous terrain deals damage.
**Narrow Surface** Off-guard and must Balance to cross. When you’re hit or fail a save, succeed at a Reflex save or fall.
**Uneven Ground** Off-guard and might need to Balance or fall prone. When you’re hit or fail a save, succeed at a Reflex save or fall.
**Incline** You need to Climb to ascend an incline. You’re off-guard while Climbing.
	
# Cover
Draw a line from the center of the attacker’s space or burst to the center of the target’s space.
**Lesser Cover** +1 circumstance bonus to AC if line passes through creatures but no objects.
**Cover** +2 circumstance bonus to AC, Reflex saves against area effects, and Stealth checks to Hide or Sneak. You can use Take Cover (Player Core 418) to increase this to greater cover.
**Greater Cover** As cover, but a +4 bonus.

# Hero Points
Give out 1 Hero Point to each PC at the start of the session. Give out roughly 1 more per hour of play, for a heroic act or a moderate or major accomplishment. Hero Points can be spent in two ways.
**Spend 1 Hero Point** to reroll a check and use the second result. This is a fortune effect.
**Spend all your Hero Points** to avoid death. You can do this when your dying condition would increase. Lose the dying condition and stabilize with 0 Hit Points. Don’t gain or increase your wounded value from losing the dying condition in this way, but if you already had that condition you don’t lose it or decrease it.

# Simple DCs 

| Rank      | DC  |
| --------- | --- |
| Untrained | 10  |
| Trained   | 15  |
| Expert    | 20  |
| Master    | 30  |
| Legendary | 40  | 

# DCs by Level

| Level | DC  | Level | DC  |
| ----- | --- | ----- | --- |
| 0     | 14  | 13    | 31  |
| 1     | 15  | 14    | 32  |
| 2     | 16  | 15    | 34  |
| 3     | 18  | 16    | 35  |
| 4     | 19  | 17    | 36  |
| 5     | 20  | 18    | 38  |
| 6     | 22  | 19    | 39  |
| 7     | 23  | 20    | 40  |
| 8     | 24  | 21    | 42  |
| 9     | 26  | 22    | 44  |
| 10    | 27  | 23    | 46  |
| 11    | 28  | 24    | 48  |
| 12    | 30  | 25    | 50  |

| Spell Level | DC  |
| ----------- | --- |
| 1st         | 15  |
| 2nd         | 18  |
| 3rd         | 20  |
| 4th         | 23  |
| 5th         | 26  |
| 6th         | 28  |
| 7th         | 31  |
| 8th         | 34  |
| 9th         | 36  |
| 10th*       | 39  |
* If a spell is uncommon or rare, adjust difficulty accordingly.

# DC Adjustments

| Difficulty                | Adjustment | Rarity   |
| ------------------------- | ---------- | -------- |
| Incredibly easy           | -10        | -        |
| Very easy                 | -5         | -        |
| Easy                      | -2         | -        |
| Hard (uncommon)           | +2         | Uncommon |
| Very hard (rare)          | +5         | Rare     |
| Incredibly hard (Unique ) | +10        | Unique   | 

# Specific Skill DCs
**Craft** Use a DC of the item’s level, adjusted for rarity.
**Earn Income Tasks** The task level is typically the settlement’s level, and its DC uses the task level. Typical levels: village 0–1, town 2–4, city 5–7.
**Gather Information** Set a simple DC based on the availability of the information about the subject; adjust upward if the character seeks in-depth information.
**Identify Magic or Learn a Spell** Use the DC for the spell or item’s level, adjusted by rarity; use the incredibly hard adjustment for cursed items.
**Recall Knowledge** Set a simple DC; if the character tries again for more knowledge, adjust the DC one step higher each time until they fail or attempt an incredibly hard check.
**Sense Direction** Pick a simple DC: trained in normal wilderness, expert in deep forest/underground, master or legendary in weird/surreal environments.
**Social Skills** Use Will DC if known; if not, improvise a level.
**Subsist** Use a simple DC, with a trained DC for a typical situation. Adjust for disposition of the environment.
**Track** Select a simple DC and adjust for circumstances, or a Survival DC if the quarry Covers Tracks.
**Train an Animal** Use the level of the animal as the baseline and adjust the DC up if the trick is especially difficult or down if the animal is especially domesticated.

# Creature Identification
Use the creature’s level, adjusted for rarity and fame. Success recalls a well-known attribute; critical success adds something more subtle.

| Creature Trait | Skill          |
| -------------- | -------------- |
| Aberration     | Occultism      |
| Animal         | Nature         |
| Astral         | Occultism      |
| Beast          | Arcana, Nature |
| Celestial      | Religion       |
| Construct      | Arcana, Nature |
| Dragon         | Arcana         |
| Dream          | Occultism      |
| Elemental      | Arcana, Nature |
| Ethereal       | Occultism      |
| Fey            | Nature         |
| Fiend          | Religion       |
| Fungus         | Nature         |
| Humanoid       | Society        |
| Montor         | Religion       |
| Ooze           | Occultism      |
| Plant          | Nature         |
| Shade          | Religion       |
| Spirit         | Occultism      |
| Time           | Occultism      | 
| Undead         | Religion       |

# Detecting Creatures
**Observed** A creature you’re observed by knows where you are and can target you normally.
**Concealed** A creature that you’re concealed from must succeed at a DC 5 flat check when targeting you with a non-area effect.
**Hidden** A creature you’re hidden from knows the space you’re in. It is off-guard to you, and must succeed at a DC 11 flat check to affect you. You can Hide to become hidden, and Seek to find hidden creatures.
**Undetected** When you are undetected by a creature, it’s off-guard to you, can’t see you, has no idea what space you occupy, and can’t target you. It can try to guess your square by picking a square and attempting an attack. This works like targeting a hidden creature, but the flat check and attack roll are rolled in secret by the GM.
**Unnoticed** A creature you’re unnoticed by is totally unaware of your presence.
**Invisible** You’re undetected by everyone relying on sight as their only precise sense. You can’t become observed while invisible except via special abilities or magic.

# Exploration Activities
You must move at half speed to use any of these activities.
**Avoid Notice** Use Stealth to avoid being noticed.
**Defend** Raise a Shield before your first turn begins.
**Detect Magic** (concentrate) Detect magic at regular intervals.
**Follow the Expert** (audible, concentration, visual) Gain bonus with a skill from an expert ally. Add your level if untrained, and get +2 circumstance bonus (+3 if ally is master, +4 if ally is legendary).  Does not slow travel.
**Hustle** Move at double Speed for up to Con × 10 minutes (minimum 10 minutes).
**Investigate** (concentrate) Use Recall Knowledge to discover clues.
**Repeat a Spell** (concentrate) Repeatedly cast the same spell. Spell must be one you can cast in 2 actions or fewer.
**Scout** (concentrate) Party members get +1 circumstance bonus to their initiative rolls.
**Search** (concentrate) Seek for hidden doors and hazards.
**Sustain an Effect** (concentrate) Sustain an effect with a sustained duration (typically 10 minutes).

# Falling Damage
When you fall more than 5 feet, take bludgeoning damage equal to half the distance you fell. If you take any damage, you land prone. If you fall into water or a soft substance, calculate damage as though the fall were 20 feet shorter, 30 if you intentionally dove in (up to the depth of the substance).

# Structures 

| Door            | Climb DC | Hardness, HP (BT) |
| --------------- | -------- | ----------------- |
| Wood            | 20       | 10, 40 (20)       |
| Stone           | 30       | 14, 56 (28)       |
| Reinforced wood | 15       | 15, 60 (30)       |
| Iron            | 30       | 18, 72 (36)       |

| Wall              | Climb DC | Hardness, HP (BT) |
| ----------------- | -------- | ----------------- |
| Crumbling masonry | 15       | 10, 40 (20)       |
| Wooden slats      | 15       | 10, 40 (20)       |
| Masonry           | 20       | 14, 56 (28)       |
| Hewn stone        | 30       | 14, 56 (28)       |
| Iron              | 40       | 18, 72 (36)       |

| Portcullis | Climb DC | Hardness, HP (BT) |
| ---------- | -------- | ----------------- |
| Wood       | 10       | 10, 40 (20)       |
| Iron       | 10       | 18, 72 (36)       |

# Force Open

| Structure              | Force Open DC |
| ---------------------- | ------------- |
| Stuck door or window   | 15            | 
| Exceptionally stuck    | 20            |
| Lift wooden portcullis | 20*           |
| Lift iron portcullis   | 30*           |
| Bend metal bars        | 30            |
* Use the Thievery DC of the locking mechanism if it’s higher.

# Travel Speed

| Speed   | Feet per Minute | Miles per Hour | Miles per Day |
| ------- | --------------- | -------------- | ------------- |
| 10 feet | 100             | 1              | 8             |
| 15 feet | 150             | 1-1/2          | 12            |
| 20 feet | 200             | 2              | 16            |
| 25 feet | 250             | 2-1/2          | 20            |
| 30 feet | 300             | 3              | 24            |
| 35 feet | 350             | 3-1/2          | 28            |
| 40 feet | 400             | 4              | 32            |
| 50 feet | 500             | 5              | 40            |
| 60 feet | 600             | 6              | 48            |

# Environmental Damage
| Category | Damage    |
| -------- | --------- |
| Minor    | 1d6-2d6   |
| Moderate | 4d6-6d6   |
| Major    | 8d6-12d6  |
| Massive  | 18d6-24d6 |

# XP Awards 
| Accomplishment | XP Award |
| -------------- | -------- |
| Minor          | 10 XP    |
| Moderate*      | 30 XP    |
| Major*         | 80 XP    |
* Typically awards a Hero Point as well.

| Adversary or Hazard Level | XP for Simple Hazard | XP for Creature or Complex Hazard |
| ------------------------- | -------------------- | --------------------------------- |
| Party level – 4           | 2 XP                 | 10 XP                             |
| Party level – 3           | 3 XP                 | 15 XP                             |
| Party level – 2           | 4 XP                 | 20 XP                             | 
| Party level – 1           | 6 XP                 | 30 XP                             |
| Party level               | 8 XP                 | 40 XP                             |
| Party level + 1           | 12 XP                | 60 XP                             |
| Party level + 2           | 16 XP                | 80 XP                             |
| Party level + 3           | 24 XP                | 120 XP                            |
| Party level + 4           | 32 XP                | 160 XP                            |

# Encounter Budget 

| Difficulty | XP Budget  | Character Adjustment |
| ---------- | ---------- | -------------------- |
| Trivial    | 40 or less | 10 or less           |
| Low        | 60         | 20                   |
| Moderate   | 80         | 20                   |
| Severe     | 120        | 30                   |
| Extreme    | 160        | 40                   |
