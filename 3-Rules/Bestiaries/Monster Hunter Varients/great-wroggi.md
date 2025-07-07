---
obsidianUIMode: preview
noteType: pf2eMonster
tags:
  - pf2e/creature/type/beast
  - pf2e/creature/level/6
statblock: inline
name: Great Wroggi
level: 6
---

```statblock
columns: 2
forcecolumns: true
layout: Pathfinder 2e Creature Layout
token: "[[great-wroggi.png|Show to Players]]"
source: Monster Hunter Conversion
name: "Great Wroggi"
level: "Creature 6"
rare_03: ""
alignment: ""
size: "[[large]]"
traits:
  - "[[beast]]"
  - "[[magical]]"
  - "[[poison]]"
modifier: 13
perception: 
  - name: "Perception"
    desc: "+13; darkvision, scent (imprecise) 60 feet"
languages: —
skills:
  - Acrobatics: +14
  - Athletics: +16
  - Stealth: +15 (+2 in dim light or fog)
  - Survival: +12
attributes:
  - str: 5
  - dex: 4
  - con: 4
  - int: -2
  - wis: 2
  - cha: 1
speed: 40 feet
source: "_Monster Hunter Conversion_"
ac: 25
saves:
  - fort: 14
  - ref: 13
  - will: 11
  - note: +1 status to all saves vs. magic
hp: 140
immunities:
  - [[poison]]

abilities_mid:
  - name: Toxic Alpha
    desc: "Lesser wroggi and other poison-resistant swamp predators give Great Wroggi a wide berth. The area in a 10-foot emanation around the Great Wroggi is lightly obscured by a noxious haze. All creatures (except the Great Wroggi) in this area take a –1 circumstance penalty to Perception checks and Fortitude saves."

  - name: Venom Glands
    desc: "The Great Wroggi’s bite and breath attacks carry paralytic toxins. A creature that takes persistent poison damage from the Wroggi must succeed at a DC 22 Fortitude save at the end of each of its turns or become [[clumsy 1]] until the poison ends.<br><br><blockquote>__Breakable__ **AC** 22; **HP** 15; **Effect** The persistent poison damage dealt by its jaws and Poison Cloud is reduced by 2 (minimum 1). Its **Venom Glands** ability no longer applies the [[clumsy]] condition.</blockquote>"

abilities_bot:
  - name: Poison Cloud
    desc: "`pf2:1` (arcane, poison) **Frequency** 1/round **Effect** The Great Wroggi exhales a toxic cloud in a 15-foot cone. All creatures in the area must attempt a DC 23 Fortitude save.<br>- **Critical Success**: Unaffected.<br>- **Success**: Sickened 1.<br>- **Failure**: Sickened 2 and 1d6 persistent poison damage.<br>- **Critical Failure**: Unconscious for 1 round, then Sickened 2 and 1d6 persistent poison damage.<br><br><blockquote>__Breakable__ **AC** 23; **HP** 20; **Effect** Located on the head.  The Wroggi can no longer use **Poison Cloud** until the part is healed. It also becomes [[stupefied 1]] and takes a –2 penalty to spell DCs and poison-related effects.</blockquote>"

  - name: Tactical Retreat
    desc: "`pf2:0` **Trigger** A creature critically fails its save against Poison Cloud.  **Effect** The Great Wroggi Steps and becomes concealed until the end of its next turn as it vanishes into the haze."

attacks:
  - name: "___Melee___ `pf2:1` jaws"
    desc: "(magical, poison) +17 __Damage__ 2d10+5 piercing plus 1d4 persistent poison"

  - name: "___Melee___ `pf2:1` claw"
    desc: "(magical, agile) +15 __Damage__ 2d6+5 slashing"

  - name: "___Melee___ `pf2:1` tail swipe"
    desc: "(magical, reach 10 feet, trip) +14 __Damage__ 2d8+5 bludgeoning <br><br><blockquote>__Breakable__ **AC** 22; **HP** 18; **Effect** The Wroggi loses access to its **Tail Swipe** attack. It also becomes [[Off-Guard]] for 1 round after the break due to imbalance.</blockquote>"

```

```encounter-table
name: Great Wroggi
creatures:
  - 1: Great Wroggi
  - 1: Head 20, 23, 0, hidden
  - 1: Tail 18, 22, 0, hidden
  - 1: Venom Sacs 15, 22, 0, hidden

```

---
noteType: battlezoo/monster-parts
tags:
  - pf2e/monster-parts
  - pf2e/crafting
  - monster/great-wroggi
source: Monster Hunter Conversion
name: Great Wroggi
level: 6
rarity: uncommon
---

### 🦴 Harvest Table: Great Wroggi (Creature 6)

| Part Name         | Trait Tags                           | Harvest DC | Yield (Units) | Use Type         | Notes                                                  |
|-------------------|---------------------------------------|------------|----------------|------------------|---------------------------------------------------------|
| Wroggi Hide       | [[3-Rules/Trait Reference/P/poison]], [[resilient]], [[hide]]   | DC 20      | 2d4            | Armor            | Scaled hide resistant to venom and light cuts           |
| Alpha Venom Sac   | [[3-Rules/Trait Reference/P/poison]], [[volatile]], [[core]]    | DC 22      | 1d3            | Consumable Core  | Extremely potent concentrated venom                     |
| Fanged Maw        | [[bite]], [[toxic]], [[offense]]      | DC 21      | 1d3            | Weapon Additive  | Infuses weapons with paralytic toxin                    |
| Hood Frill        | [[display]], [[fear]], [[distracting]]| DC 20      | 1d2            | Magical Focus    | Used in intimidation gear or hypnotic accessories       |
| Mucosal Glands    | [[3-Rules/Trait Reference/P/poison]], [[alchemical]], [[coating]]| DC 19     | 1d2            | Alchemical Coating| Used for slick or nauseating salves                     |

**Critical Success:** Double units for that part. **Failure:** Gain no usable units of that type.

---

## 🔨 Crafting Suggestions

### 🧥 Armor
**Wroggi Hide Mantle (Level 6, Uncommon)**  
- *Base Armor:* Medium (Hide, Scale)  
- *Effect:* Gain resistance 2 to poison damage and a +1 item bonus to Fortitude saves against poisons  
- *Bonus Effect (if Hood Frill integrated):* Once per day, activate as a single action to Demoralize all enemies within 15 feet (DC = class DC)

---

### ☠️ Weapon Additive
**Fang Venom Infusion (Additive, Level 6)**  
- *Add To:* Piercing or slashing weapons  
- *Effect:* Gain the [[toxic]] trait (DC 21 Fort save vs. 1d6 persistent poison)  
- *Bonus:* On a critical hit, target becomes [[clumsy 1]] for 1 minute unless they succeed at a Fortitude save

---

### 💀 Consumable Core
**Wroggi Neurotoxin Vial (Consumable, Level 6)**  
- *Use:* Injury poison or splash bomb  
- *Effect (injury):* DC 22 Fort save  
  - **Success:** Sickened 1  
  - **Failure:** 1d6 poison, Sickened 2, and Clumsy 1 for 1 minute  
  - **Crit Failure:** As above, plus Stunned 1  
- *Effect (splash):* Sickened 1 on a failed DC 22 Fort save in 10-ft burst

---

### 🧪 Alchemical Coating
**Caustic Slime Paste (Consumable, Level 5)**  
- *Use:* Apply to melee weapon  
- *Effect:* For 1 minute, attacks deal 1 additional poison damage and leave a trail that makes squares difficult terrain (1 round duration)

---

## 🧷 Optional Monster Trait Summary
- `[[poison]]`: Delivers persistent damage or status effects
- `[[volatile]]`: Adds potent but unstable effects
- `[[offense]]`: Tied to weapons and damaging items
- `[[display]]`: Flashy or fear-inducing parts
- `[[alchemical]]`: Used in brews, toxins, salves

---

Would you like me to:
- Proceed with the **Lesser Wroggi** part and crafting table?
- Combine this and Tetranadon’s material into a printable player-facing handout?
- Add example item statblocks using the Battlezoo Parts system formatting?
