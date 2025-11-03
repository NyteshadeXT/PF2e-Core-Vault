---
title: "Shroud Moss"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.4VNR5BjSTspzsVYC" 
tags:
  - pf2e/creature/type/fungus
  - pf2eMonster
  - pf2e/creature/level/18
  - remaster
statblock: inline
name: "Shroud Moss"
level: 18
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #212: A Voice in the Blight"
name: "Shroud Moss"
level: "Creature 18"
rare_03: [[Rare]]
alignment: ""
size: "Medium"
trait_01: [[fungus]]
modifier: 31
perception:
  - name: "Perception"
    desc: "+31; Darkvision"
languages: "Chthonian; Spore telepathy 100 feet"
skills:
  - name: "Skills"
    desc: "Acrobatics: +32, Deception: +35, Intimidation: +35, Stealth: +32"
abilityMods: [-5, 6, 9, 5, 5, 9]
speed: 25 feet,  fly 40 feet
sourcebook: "_Pathfinder #212: A Voice in the Blight_"
ac: 42
armorclass:
  - name: AC
    desc: "42; __Fort__ +36, __Ref__ +30, __Will__ +27"
hp: 400
health:
  - name: ""
  - name: HP
    desc: "400; __Weaknesses__ fire 15, slashing 15; __Resistances__ bludgeoning 15, piercing 20"
abilities_top:
  - name: ""

  - name: "Spore Telepathy"
    desc: "  A shroud moss can communicate via telepathy with any creature within its sporecloud aura, doing so in that creature's native language."

abilities_mid:
  - name: ""
  - name: "Filament Body"
    desc: "  A shroud moss's body is physical, but much lighter and flexible than normal. They can move through openings down to 1 inch in diameter with ease and are treated as Tiny creatures for all effects affected by a creature's size. A shroud moss adjusts its saving throws against wind-based effects down by one degree of success."

  - name: "[[Bestiary Ability Glossary/Frightful Presence|Frightful Presence]]"
    desc: " (aura,emotion,fear,mental) **Requirements** Assume Shape is active.\n\n60 feet DC 37 Will check\n* * *\n\nA creature that first enters the area must attempt a Will save.\n\nRegardless of the result of the saving throw, the creature is temporarily immune to this monster's Frightful Presence for 1 minute.\n* * *\n\n**Critical Success** The creature is unaffected by the presence.\n\n**Success** The creature is [[Conditions/Frightened|Frightened 1]].\n\n**Failure** The creature is [[Conditions/Frightened|Frightened 2]].\n\n**Critical Failure** The creature is [[Conditions/Frightened|Frightened 4]]."

  - name: "Sporecloud"
    desc: " (aura,primal) 60 feet. The shroud moss constantly exudes a transparent cloud of spores; creatures in the aura can communicate with the shroud moss via telepathy. A creature that ends its turn in the aura is exposed to grayshroud. The sporecloud's range is reduced to 5 feet until the end of the shroud moss's next turn whenever the shroud moss is exposed to winds stronger than a gentle breeze."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Tendril"
    desc: "+32 ()\n__Damage__  1d6 poison 3d8 + 8 slashing"

  - name: "**Ranged** `pf2:1` Spore Pod"
    desc: "+32 (range increment 60 feet)\n__Damage__  6d8 poison plus grayshroud"

  - name: "Assume Shape"
    desc: "`pf2:1` (concentrate,illusion,primal) The shroud moss assumes the ghostly (and often unsettlingly distorted) shape of the creature from whose physical remains it grew from, or from a creature it damaged this round, for 1 minute. While in this form, the shroud moss's frightful presence aura is active, and its tendril attacks inflict an additional 3d6 mental damage as feelings of betrayal and imminent death wrack the target's mind. This increases to 5d6 mental damage if the shroud moss attacks the creature it stole this shape from."

  - name: "Grayshroud"
    desc: " (disease) **Saving Throw** DC 40 Fortitude check\n\n**Stage 1** [[Conditions/Fatigued|Fatigued]] (1 day)\n\n**Stage 2** [[Conditions/Drained|Drained 1]] and fatigued (1 day)\n\n**Stage 3** [[Conditions/Drained|Drained 2]] and fatigued (1 day)\n\n**Stage 4** [[Conditions/Drained|Drained 3]], fatigued, and can't speak (1 day)\n\n**Stage 5** death"
 
```

```encounter-table
name: Shroud Moss
creatures:
  - 1: Shroud Moss
```



Shroud mosses are often confused for ghosts, as they appear as a shimmering, insubstantial imprint of a deceased creature. In truth, nothing of the deceased remains within a shroud moss. Rather, what appears to be a ghost is an image created by clouds of shimmering spores surrounding the wispy tendrils of the moss itself. When not disguised by a stolen shape, a shroud moss appears as a mass of gray-green tendrils of moss capable of shifting its shape into the basic framework of a creature, looking not unlike a free-standing humanoid nervous system with a mass of tangles where a brain would be.

## Grayshroud Sufferers

Those who become infected with grayshroud may at first assume they're just suffering from overexertion or lack of sleep, but once they become drained by the disease, their flesh turns increasingly gray and is riddled with flaky sheets as their skin takes on the appearance of peeling bark. Those who die from grayshroud move on to the afterlife as normal, but their remains spawn a new shroud moss who adds their form to its stolen shapes.
