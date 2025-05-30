---
title: "Demolitionist"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.ICvWcraGWylA1k9d" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Demolitionist"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Demolitionist"
level: "Creature 4"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Athletics: +9, Crafting: +12, Intimidation: +10, Thievery: +11, Explosive Lore: +14"
abilityMods: [1, 3, 3, 4, 0, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__ +11, __Ref__ +13, __Will__ +6"
hp: 60
health:
  - name: ""
  - name: HP
    desc: "60; __Resistances__ fire 5"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Light Mace|Light Mace]], [[Equipment/Leather Armor|Leather Armor]], 5x Mine, 10x Dynamite, Wall Charge, [[Equipment/Backpack|Bag of Explosives]]"
abilities_mid:
  - name: ""
  - name: "Explosive Demise"
    desc: " (fire) When the demolitionist is reduced to 0 Hit Points while they have any explosives still in their bag, the remaining explosives detonate, unleashing an explosion of fire upon all creatures in a 30-foot emanation. Each creature in the area takes 3d6 fire damage with a DC 19 Reflex check save."

  - name: "Replenish Explosives"
    desc: "  The demolitionist can replenish their stock of explosives with 4 hours of downtime."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Light Mace"
    desc: "+13 (agile, finesse, shove)\n__Damage__  1d4 + 7 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+13 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 7 bludgeoning"

  - name: "Plant Mine"
    desc: "`pf2:1` (fire,manipulate) `pf2:1` to `pf2:2`\n* * *\n\nThe demolitionist plants a mine in an adjacent square. If a creature moves onto a space with a mine, the mine explodes. This deals 3d8 fire damage to the creature with a DC 21 Reflex check save. The demolitionist can use 2 actions to Plant a Mine to hide the mine, granting it a Stealth DC of 21. Creatures that didn't see the mine as it was planted must actively search for it (using the [[Actions/Search|Search]] activity while exploring or the [[Actions/Seek|Seek]] action in an encounter)."

  - name: "Toss Dynamite"
    desc: "`pf2:2` (fire,manipulate) The demolitionist quickly throws a stick of dynamite up to 20 feet away that explodes in 5-foot burst. Creatures within the burst take 4d4 fire damage with a DC 21 Reflex check save."

  - name: "Wall Charge"
    desc: "`pf2:3` (fire,manipulate) The demolitionist plants a powerful wall charge on a flat surface such as a door or wall. Once the charge is planted, it explodes after 1 minute, dealing 60 fire damage to the surface and ignoring up to 15 of the surface's Hardness. The explosive also deals 5d6 fire damage to creatures within 30 feet of the explosive with a DC 25 Reflex check save."
 
```

```encounter-table
name: Demolitionist
creatures:
  - 1: Demolitionist
```



While most engineers take immense pride in their work constructing something that may survive many lifetimes, the demolitionist takes pride in destroying such pompous things in the most spectacular way possible. Every design has a flaw, and that flaw usually involves large quantities of explosives. Demolitionists are often pragmatic and calculated, taking great care to destroy whatever lies before them as efficiently as possible.

* * *

Although relatively uncommon across much of Golarion, the frequently eccentric but undeniably brilliant minds who create elaborate devices of clockwork, gunpowder, and steam often loom much larger in the public eye than their numbers would suggest.
