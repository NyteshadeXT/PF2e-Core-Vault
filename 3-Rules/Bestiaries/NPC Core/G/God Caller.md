---
title: "God Caller"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.ADbAoVOiHrRFYtkW" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/10
  - remaster
statblock: inline
name: "God Caller"
level: 10
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "God Caller"
level: "Creature 10"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 19
perception:
  - name: "Perception"
    desc: "+19; "
languages: "Common, Fey; telepathy 100 feet (with eidolon only)"
skills:
  - name: "Skills"
    desc: "Athletics: +20, Intimidation: +21, Nature: +19, Religion: +15, Survival: +15"
abilityMods: [4, 2, 1, 0, 3, 5]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 29
armorclass:
  - name: AC
    desc: "29; __Fort__ +18, __Ref__ +16, __Will__ +19"
hp: 150
health:
  - name: ""
  - name: HP
    desc: "150"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/War Flail|+1 Striking War Flail]], [[Equipment/Explorer's Clothing|+1 Explorer's Clothing]], [[Equipment/Magic Wand (2nd-Rank Spell)|Wand of Environmental Endurance (Rank 2)]]"
  - name: "Bonded Eidolon"
    desc: "  The god caller fights alongside a mystical ally called an eidolon, most likely the [[NPC Core/Beast Eidolon|Beast Eidolon]]. The eidolon has the standard number of actions, uses its normal stat block, and counts toward the encounter's XP budget normally. The eidolon must remain within 100 feet of the god caller, or its physical form will dissolve. The god caller can make their eidolon take form or disappear with the Manifest Eidolon action."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Fist"
    desc: "+20 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 10 bludgeoning"

  - name: "**Melee** `pf2:1` War Flail"
    desc: "+21 (disarm, magical, sweep, trip)\n__Damage__  2d10 + 10 bludgeoning"

  - name: "Primal Spontaneous Spells"
    desc: "DC 29, attack +21; __5th __ (2 slots) _[[Spells/Howling Blizzard|Howling Blizzard]]_, _[[Spells/Impaling Spike|Impaling Spike]]_; __4th __ (2 slots) _[[Spells/Wall of Fire|Wall of Fire]]_, _[[Spells/Weapon Storm|Weapon Storm]]_\n__Cantrips__  __(5th)__ _[[Spells/Electric Arc|Electric Arc]]_, _[[Spells/Gouging Claw|Gouging Claw]]_, _[[Spells/Guidance|Guidance]]_, _[[Spells/Light|Light]]_, _[[Spells/Tangle Vine|Tangle Vine]]_"

  - name: "Beseech the Spirits"
    desc: "`pf2:1` (concentrate,primal) **Frequency** once per day\n* * *\n\n**Effect** The god caller reaches out to local entities for enhanced perception and perspective. The god caller gains lifesense 60 feet and all-around vision for 10 minutes. The god caller can't use this ability again until after propitiating the spirits during their next daily preparation."

  - name: "Manifest Eidolon"
    desc: "`pf2:3` (concentrate,manipulate,primal,teleportation) The god caller causes their eidolon to manifest in a space adjacent to them if it's unmanifested, or to unmanifest and disappear from physical reality if it was already manifested."

  - name: "Tandem Trick"
    desc: " (primal) **Frequency** once per round\n* * *\n\n**Effect** The god caller uses a team tactic with their eidolon, chosen from the following list, with the listed number of actions and traits.\n\n*   **Enlarge** `pf2:2` (concentrate, manipulate) The god caller casts [[Spells/Enlarge|Enlarge]] on their eidolon even if the eidolon is beyond range or line of effect. The god caller doesn't need to expend a spell slot, and can choose 2nd or 4th rank.\n*   **Tandem Strike** `pf2:2` The god caller makes a Strike and their eidolon can Strike as a reaction. Both attacks count toward the god caller's multiple attack penalty, but the penalty doesn't increase until both attacks have been made.\n*   **Transfer** `pf2:1` The god caller transfers 50 HP from themself to their eidolon or vice versa. If the creature losing HP has 50 HP or fewer, this effect transfers as many HP as possible without reducing that creature below 1 HP.\n*   **Transpose** `pf2:1` (concentrate, manipulate, teleportation) The god caller and their eidolon teleport to swap places."
 
```

```encounter-table
name: God Caller
creatures:
  - 1: God Caller
```



The summoners called god callers have a magical link to eidolons, revered as gods by the people of Sarkoris. Though this NPC is based on Sarkorian god callers, they can be adapted to different types of summoners by changing out the eidolon for another creature and making thematic tweaks to skills and spells.

* * *

Hidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.

* * *

## God Callers and the Divine

Some spirits called by god callers of Sarkoris are divine beings capable of granting spells. Consider granting a god caller NPC a cleric focus spell appropriate to one of the god's domains if they worship such a deity (using the same DC and spell attack as their primal spells). For instance, the Stag Mother of the Forest of Stones might grant the savor the sting domain spell from the pain domain.
