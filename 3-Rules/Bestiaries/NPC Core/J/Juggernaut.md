---
title: "Juggernaut"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.RT4du8iTXLoCgBnm" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/13
  - remaster
statblock: inline
name: "Juggernaut"
level: 13
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Juggernaut"
level: "Creature 13"
rare_03: [[Rare]]
alignment: ""
size: "Large"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 21
perception:
  - name: "Perception"
    desc: "+21; Darkvision"
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +27, Crafting: +26, Intimidation: +26, Engineering Lore: +24"
abilityMods: [8, 3, 4, 2, 2, 2]
speed: 20 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 33
armorclass:
  - name: AC
    desc: "33; __Fort__ +25, __Ref__ +19, __Will__ +21"
hp: 250
health:
  - name: ""
  - name: HP
    desc: "250; __Resistances__ cold 10"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "Juggernaut Armor, [[Equipment/Artisan's Toolkit|Artisan's Toolkit (Blacksmithing)]], [[Equipment/Repair Toolkit|Repair Toolkit]]"
  - name: "Integrated Weapon"
    desc: "  A juggernaut's armor includes one integrated melee weapon, such as a diamond-tipped rotary saw blade, massive pneumatic drill, or heavy spiked gauntlet. The specifics don't change the damage dealt by its Strikes, but determines whether it deals bludgeoning, piercing, or slashing damage. A juggernaut with tools and a workshop can spend 2 hours to swap their armor's integrated weapon."

  - name: "Power Source"
    desc: "  Juggernaut armor requires a power source built into the armor—such as a steam boiler, Stasian coil, or alchemical reservoir. This determines a damage type—cold, electricity, fire, or poison—for certain abilities."

abilities_mid:
  - name: ""
  - name: "Galvanized Plating"
    desc: "  The juggernaut has resistance 10 to the damage type of the armor's power source."

  - name: "Self-Destruct"
    desc: "`pf2:r`  **Trigger** The juggernaut is reduced to 0 Hit Points\n* * *\n\n**Effect** The juggernaut collapses and their armor emits a steady ticking sound. At the beginning of what would have been the juggernaut's next turn, the armor's power source explodes, destroying it completely and dealing 10d6 damage in a 30-foot emanation with a DC 33 Reflex check save. The explosion deals the damage type of the armor's power source. An adjacent creature can cancel the self-destruct sequence by succeeding at a DC 33 Thievery check to [[Actions/disable-device dc=33|disable-device dc=33]]{Disable a Device}."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Integrated Weapon"
    desc: "+27 ()\n__Damage__  3d8 + 12 untyped"

  - name: "**Melee** `pf2:1` Plated Fist"
    desc: "+27 ()\n__Damage__  3d4 + 14 bludgeoning"

  - name: "Energy Projector"
    desc: "`pf2:2` (alchemical) A juggernaut carries a powerful cannon-like projectile weapon that requires two hands to wield and deals 14d6 damage to all creatures in its area with a DC 31 basic save; the damage type, area, and save are based on the armor's power source, as listed below. Once activated, Energy Projector can't be used again for 1d4 rounds.\n\n*   **Cold** 30-foot cone of cold (DC 31 Reflex check)\n*   **Electricity** 60-foot line of electricity (DC 31 Reflex check)\n*   **Fire** 30-foot cone of fire (DC 31 Reflex check)\n*   **Poison** 30-foot cone of poison gas (DC 31 Fortitude check)"

  - name: "Jump Jets"
    desc: "`pf2:1` (alchemical) The juggernaut gains a Fly speed of 15 feet until the end of their current turn. If the juggernaut isn't on solid ground when they lose their fly Speed, they fall. After the effect ends, the juggernaut can't use Jump Jets again for 1 round."

  - name: "[[Bestiary Ability Glossary/Trample|Trample]]"
    desc: "`pf2:3`  Medium or smaller, plated fist, DC 33 Reflex check\n* * *\n\nThe monster Strides up to double its Speed and can move through the spaces of creatures of the listed size, Trampling each creature whose space it enters. The monster can attempt to Trample the same creature only once in a single use of Trample. The monster deals the damage of the listed Strike, but trampled creatures can attempt a basic Reflex save at the listed DC (no damage on a critical success, half damage on a success, double damage on a critical failure)."
 
```

```encounter-table
name: Juggernaut
creatures:
  - 1: Juggernaut
```



The heavy suit of mechanical metal armor a juggernaut wears is custom-built and highly complex and specialized to its wearer. Other creatures can't make use of the armor unless they have similar skill and customize it thoroughly.

* * *

Although relatively uncommon across much of Golarion, the frequently eccentric but undeniably brilliant minds who create elaborate devices of clockwork, gunpowder, and steam often loom much larger in the public eye than their numbers would suggest.
