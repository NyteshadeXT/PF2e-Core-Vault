---
obsidianUIMode: preview
noteType: pf2eMonster
tags:
  - pf2e/creature/type/beast
  - pf2e/creature/level/2
statblock: inline
name: Wroggi
level: 2
---

```statblock
columns: 2
forcecolumns: true
layout: Pathfinder 2e Creature Layout
token: "[[great-wroggi.png|Show to Players]]"
source: Monster Hunter Conversion
name: "Wroggi"
level: "Creature 2"
alignment: ""
size: "[[medium]]"
traits:
  - "[[beast]]"
  - "[[poison]]"
modifier: 7
perception: 
  - name: "Perception"
    desc: "+8; scent (imprecise) 30 feet"
languages: —
skills:
  - Acrobatics: +9
  - Athletics: +7
  - Stealth: +8
  - Survival: +6
attributes:
  - str: 2
  - dex: 3
  - con: 2
  - int: -2
  - wis: 2
  - cha: 0
speed: 35 feet
source: "_Monster Hunter Conversion_"
ac: 17
saves:
  - fort: 6
  - ref: 9
  - will: 5
hp: 32
immunities:
  - [[poison]]

abilities_mid:
  - name: Pack Coordination
    desc: "The Wroggi gains a +1 circumstance bonus to attack rolls and Reflex saves while within 10 feet of another Wroggi or the Great Wroggi."

  - name: Toxic Trail
    desc: "(poison) While moving, the Wroggi leaves behind faint poison residue in a 5-foot-wide trail. The first creature to move through this trail each round must attempt a DC 16 Fortitude save or become [[sickened 1]] (sickened 2 on a critical failure). This trail persists until the start of the Wroggi’s next turn."

abilities_bot:
  - name: Poison Spit
    desc: "`pf2:1` (arcane, poison) **Effect** The Wroggi spits a glob of poison at a creature within 20 feet. That creature must attempt a DC 18 Reflex save.<br>- **Success**: Clumsy 1 for 1 round.<br>- **Failure**: 1d6 poison damage and Clumsy 1 for 1 round.<br>- **Critical Failure**: 1d6 poison damage and Clumsy 1 for 1 minute."

attacks:
  - name: "___Melee___ `pf2:1` jaws"
    desc: "(magical, poison) +10 __Damage__ 1d8+2 piercing plus 1d4 persistent poison"

  - name: "___Melee___ `pf2:1` claw"
    desc: "(magical, agile) +8 __Damage__ 1d6+2 slashing"

```

---
noteType: battlezoo/monster-parts
tags:
  - pf2e/monster-parts
  - pf2e/crafting
  - monster/wroggi
source: Monster Hunter Conversion
name: Wroggi
level: 2
rarity: common
---

### 🦴 Harvest Table: Wroggi (Creature 2)

| Part Name         | Trait Tags                           | Harvest DC | Yield (Units) | Use Type         | Notes                                                       |
|-------------------|---------------------------------------|------------|----------------|------------------|--------------------------------------------------------------|
| Wroggi Scale      | [[hide]], [[resilient]], [[natural]]  | DC 16      | 1d4            | Armor            | Thin but flexible scale plating used in hidework             |
| Minor Venom Gland | [[poison]], [[alchemical]], [[core]]  | DC 18      | 1d2            | Consumable Core  | Milder venom suitable for darts or light blade toxins        |
| Curved Fang       | [[bite]], [[offense]], [[toxic]]      | DC 17      | 1d3            | Weapon Additive  | Often used in daggers, short blades, or blowdart weapons     |
| Neck Frill        | [[display]], [[illusion]], [[focus]]  | DC 16      | 1d2            | Magical Focus    | Colored frill vibrates when agitated; used in distraction magic|
| Viscid Residue    | [[slick]], [[alchemical]], [[coating]]| DC 16      | 1d2            | Alchemical Coating| Slippery ooze that can be refined into escape salves         |

**Critical Success:** Double the units. **Failure:** Gain no usable part of that type.

---

## 🔨 Crafting Suggestions

### 🧥 Armor
**Scaled Wroggi Vest (Level 3, Common)**  
- *Base Armor:* Light (Hide or Explorer’s)  
- *Effect:* +1 item bonus to saves vs. poison and ingested toxins  
- *Bonus (if Frill integrated):* Once per day, gain +2 to a Deception check to Feint

---

### ☠️ Weapon Additive
**Venom Fang Scrape (Additive, Level 3)**  
- *Add To:* Light melee or thrown weapons  
- *Effect:* Gain the [[toxic]] trait (DC 17 Fort save vs. 1d4 persistent poison)  
- *Bonus:* You can choose to delay the poison effect by 1 round after hitting

---

### 🧪 Alchemical Coating
**Slippery Muck Paste (Consumable, Level 2)**  
- *Use:* Apply to your hands, feet, or bindings  
- *Effect:* For 1 minute, gain a +2 circumstance bonus to Escape or Acrobatics checks made to move through tight spaces or avoid [[grappled]] or [[entangled]] conditions

---

### 💀 Consumable Core
**Wroggi Sting Vial (Level 3, Injury Poison)**  
- *Effect:* DC 17 Fortitude save  
  - **Success**: Sickened 1 for 1 round  
  - **Failure**: 1d4 poison, Sickened 1 for 1 minute  
  - **Critical Failure**: 1d4 poison, Sickened 2, and Flat-footed for 1 round

---

## 🧷 Optional Monster Trait Summary
- `[[core]]`: Lower-grade version compared to Great Wroggi's Alpha Venom Sac
- `[[slick]]`: Escape-based items and grease effects
- `[[illusion]]`: Used in distraction spells or low-level magical trinkets

---

Would you like all three tables (Tetranadon, Great Wroggi, Wroggi) combined into:
- A **player-facing crafting handout** for use in-game?
- A **printer-friendly PDF** for physical use at your table?
- Or integrated into **Obsidian.md templates** for crafting logs or loot records?
