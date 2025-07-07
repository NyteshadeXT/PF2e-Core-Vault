---
obsidianUIMode: preview
noteType: pf2eMonster
tags:
  - pf2e/creature/type/beast
  - pf2e/creature/level/7
statblock: inline
name: Tetranadon
level: 7
---

```statblock
columns: 2
forcecolumns: true
layout: Pathfinder 2e Creature Layout
token: "[[tetranadon.png|Show to Players]]"
source: Monster Hunter Conversion
name: "Tetranadon"
level: "Creature 7"
size: "[[huge]]"
traits:
  - "[[beast]]"
  - "[[magical]]"
  - "[[water]]"
  - "[[earth]]"
modifier: 14
perception:
  - name: "Perception"
    desc: "+15; tremorsense (imprecise) 30 feet, scent (imprecise) 60 feet, darkvision"
languages: —
skills:
  - Acrobatics: +12
  - Athletics: +20
  - Intimidation: +13
  - Stealth: +9 (+13 in swamps or underbrush)
  - Survival: +13
attributes:
  - str: 6
  - dex: 1
  - con: 6
  - int: -2
  - wis: 2
  - cha: 1
speed: 30 feet, swim 25 feet
ac: 26
saves:
  - fort: 18
  - ref: 12
  - will: 15
  - note: +1 status to all saves vs. magic
hp: 180
resistances:
  - [[bludgeoning]] 5
  - [[cold]] 5
immunities:
  - [[prone]] (while inflated)

abilities_mid:
  - name: Inflated Bulk
    desc: >
      When Tetranadon uses *Gorging Gulp*, it becomes [[enlarged]] and gains 20 temporary HP. While in this state, it gains a +2 status bonus to Fortitude saves, resistance 5 to all physical damage (except slashing), and its melee Strikes deal +2 damage. This lasts for 3 rounds or until it uses Belly Slam. Tetranadon can't be knocked [[prone]] while inflated.<br><br><blockquote>__Breakable__ **AC** 24; **HP** 25; **Effect** Located on the gut. When broken, Tetranadon immediately deflates, loses temporary HP from Inflated Bulk, and can't use *Gorging Gulp* for 1 minute.</blockquote>

  - name: Amphibious Charger
    desc: >
      Tetranadon can move through difficult terrain caused by mud, brush, or shallow water without penalty. Once per round, it can ignore the movement penalty from forced movement effects (e.g., shove, gust of wind).

abilities_bot:
  - name: Gorging Gulp ⬻
    desc: >
      (arcane, transmutation) Tetranadon devours a massive quantity of earth and vegetation, becoming bloated with power. It gains the **Inflated Bulk** benefit. This action can be used once every 1d4 rounds.<br><br><blockquote>__Breakable__ See Inflated Bulk.</blockquote>

  - name: Belly Slam ⬺
    desc: >
      **Requirements**: Tetranadon is currently inflated.  
      **Effect**: Tetranadon leaps up to 15 feet in a straight line and crashes down. All creatures in a 10-foot burst at the destination take 4d10+6 bludgeoning damage (DC 24 basic Reflex). On a failed save, creatures also fall prone. The area becomes difficult terrain.<br><br><blockquote>__Breakable__ See Inflated Bulk. This ability is disabled if the gut is broken.</blockquote>

  - name: Shell Shatter ⬻
    desc: >
      Tetranadon slams its forelimbs together, sending rocky debris flying in a 20-foot cone. Each creature in the area must attempt a DC 25 Reflex save or take 3d6 slashing damage and become [[clumsy 1]] for 1 round.<br><br><blockquote>__Breakable__ **AC** 23; **HP** 20; **Effect** Located on forelimbs. Tetranadon cannot use *Shell Shatter* while the arms are broken and takes a –2 penalty to Athletics checks to Grapple or Shove.</blockquote>

attacks:
  - name: "___Melee___ `pf2:1` jaws"
    desc: "(magical) +18 __Damage__ 2d12+6 piercing"

  - name: "___Melee___ `pf2:1` forelimb slam"
    desc: "(magical, shove) +18 __Damage__ 2d10+6 bludgeoning<br><br><blockquote>__Breakable__ See Shell Shatter.</blockquote>"

  - name: "___Melee___ `pf2:1` tail sweep"
    desc: "(magical, reach 15 feet, trip) +16 __Damage__ 2d8+6 bludgeoning<br><br><blockquote>__Breakable__ **AC** 22; **HP** 15; **Effect** The tail sweep loses the [[trip]] trait and suffers a –2 penalty to attack rolls using the tail.</blockquote>"
```

```encounter-table
name: Tetranadon Solo Challenge
creatures:
  - 1: Tetranadon
  - 1: Gut 25, 24, 0, hidden
  - 1: Forelimbs 20, 23, 0, hidden
  - 1: Tail 15, 22, 0, hidden
```

---
noteType: battlezoo/monster-parts
tags:
  - pf2e/monster-parts
  - pf2e/crafting
  - monster/tetranadon
source: Monster Hunter Conversion
name: Tetranadon
level: 7
rarity: uncommon
---

### 🦴 Harvest Table: Tetranadon (Creature 7)

| Part Name         | Trait Tags                         | Harvest DC | Yield (Units) | Use Type         | Notes                                                  |
|-------------------|-------------------------------------|------------|----------------|------------------|---------------------------------------------------------|
| Tetranadon Hide   | [[3-Rules/Trait Reference/E/earth]], [[resilient]], [[hide]]  | DC 21      | 2d4            | Armor            | Dense, waterproof scales; ideal for layered defense     |
| Water-Gorged Gut  | [[3-Rules/Trait Reference/W/water]], [[volatile]], [[core]]   | DC 23      | 1d3            | Consumable Core  | Stores immense pressure and moisture                    |
| Tail Musculature  | [[3-Rules/Trait Reference/E/earth]], [[forceful]], [[limb]]   | DC 20      | 1d4            | Weapon Additive  | Used in blunt-force kinetic strikes                     |
| Sumo Shell        | [[3-Rules/Trait Reference/E/earth]], [[deflecting]], [[plate]]| DC 22      | 1d3            | Armor Core       | Shard-lined bones resist impact and deflect blows       |
| Tetranadon Saliva | [[3-Rules/Trait Reference/W/water]], [[slick]], [[coating]]   | DC 20      | 1d2            | Alchemical Coating| Slick, oily secretion used to lower friction or grip    |

**On a Critical Success**, double the number of units gained from that part. On a failure, gain no usable part of that type.

---

## 🔨 Crafting Suggestions

### 🛡️ Armor
**Tetranadon Shellplate (Level 8, Uncommon)**  
- *Base Armor:* Heavy armor (e.g., Scale or Splint)  
- *Effect:* Grants resistance 2 to bludgeoning damage while standing on natural ground  
- *Bonus Effect (if infused with Water-Gorged Gut):* You cannot be forcibly moved more than 5 feet unless you are [[willing]]

---

### ⚔️ Weapon Additive
**Forceful Tail Grip (Additive, Level 7)**  
- *Add To:* Bludgeoning melee weapons  
- *Effect:* Gains [[forceful]] and [[shove]] traits  
- *Bonus:* On a critical hit, the target must succeed at a DC 22 Reflex save or fall [[prone]]

---

### 🧪 Alchemical Coating
**Slick Shell Oil (Consumable, Level 6)**  
- *Use:* Apply to self or armor  
- *Effect:* For 1 minute, gain +2 circumstance bonus to checks to Escape or avoid being [[grappled]]  
- *Bonus:* Once during the duration, ignore an effect that would [[restrain]] you

---

### 💧 Consumable Core
**Hydroburst Bomb (Consumable, Level 7)**  
- *Use:* Thrown (range 30 feet), splash  
- *Effect:* 4d6 bludgeoning + 2d6 water damage in 10-ft burst (DC 23 basic Reflex); creatures that fail are [[knocked prone]]  
- *Special:* If used in rain, the burst increases to 15 feet and gains +2 damage to both components

---

## 🎁 Optional: Monster Part Traits Summary
- `[[earth]]`: Related to durability, structure, or impact
- `[[water]]`: Related to fluidity, moisture, pressure
- `[[core]]`: Rare essence used for crafting powerful one-of-a-kind effects
- `[[resilient]]`: Boosts Fortitude-based interactions
- `[[deflecting]]`: Used in items that help avoid being hit
- `[[slick]]`: Used in anti-control or escape-based mechanics

---

Would you like this formatted as a printable crafting handout for your players, or should I proceed to generate a matching loot/crafting table for the **Great Wroggi** and **Wroggi** next?
