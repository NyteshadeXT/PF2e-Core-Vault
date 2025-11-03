---
title: "Forlorn Artist"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.t5H1GbGqLLCU79cd" 
tags:
  - pf2e/creature/type/elf
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/2
  - remaster
statblock: inline
name: "Forlorn Artist"
level: 2
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Forlorn Artist"
level: "Creature 2"

alignment: ""
size: "Medium"
trait_01: [[elf]]
trait_02: [[humanoid]]
modifier: 7
perception:
  - name: "Perception"
    desc: "+7; Low-Light Vision"
languages: "Common, Elven; one regional language"
skills:
  - name: "Skills"
    desc: "Crafting: +11, Diplomacy: +9, Society: +8, Art Lore (+13 for visual arts): +11"
abilityMods: [0, 3, -1, 4, 1, 3]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +3, __Ref__ +9, __Will__ +9; +1 circumstance vs. emotion effects"
hp: 26
health:
  - name: ""
  - name: HP
    desc: "26"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Rapier|Rapier]], [[Equipment/Leather Armor|Leather Armor]], Art Supplies"
  - name: "Art Specialist"
    desc: "  For encounters involving crafting or evaluating art, the forlorn artist is a 4th-level challenge."

abilities_mid:
  - name: ""
  - name: "Flick Ink"
    desc: "`pf2:r`  **Trigger** The artist is targeted with a melee or ranged Strike by a creature within 15 feet\n* * *\n\n**Effect** The artist flings ink in the attacker's eyes. The attacker must succeed at a DC 18 Reflex check save or be [[Conditions/Blinded|Blinded]]. This takes effect before the attacker targets the artist. The blindness lasts until the end of the target's next turn, but the creature can Interact to rub its eyes to attempt a new save to end the condition."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Rapier"
    desc: "+9 (deadly d8, disarm, finesse)\n__Damage__  1d6 + 4 piercing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+9 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 4 bludgeoning"

  - name: "Arcane Innate Spells"
    desc: "DC 18, attack +10\n__Cantrips__  __(1st)__ _[[Spells/Figment|Figment]]_, _[[Spells/Prestidigitation|Prestidigitation]]_, _[[Spells/Sigil|Sigil]]_"

  - name: "Cry of Ages"
    desc: "`pf2:1`  The artist channels their loneliness into a wordless wail that forces others to contemplate their mortality. Each enemy in a 30-foot emanation must succeed at a DC 17 Will check save or be [[Conditions/Frightened|Frightened 1]]. A creature that critically fails is also [[Conditions/Stupefied|Stupefied 1]] for 1 minute. Each creature is then temporarily immune for 1 minute."
 
```

```encounter-table
name: Forlorn Artist
creatures:
  - 1: Forlorn Artist
```



Forlorn elves, who spend their lives among shorter-lived peoples, often grow morose from constant loss. Some channel this melancholy into their art.

* * *

Elves' long lives give them centuries to delve into studies, artistry, or exploration.
