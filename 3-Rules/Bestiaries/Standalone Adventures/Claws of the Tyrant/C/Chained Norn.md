---
title: "Chained Norn"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.claws-of-the-tyrant-bestiary.Actor.rjV4XOnJemV8lKJu" 
tags:
  - pf2e/creature/type/undead
  - pf2eMonster
  - pf2e/creature/level/20
  - remaster
statblock: inline
name: "Chained Norn"
level: 20
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Claws of the Tyrant"
name: "Chained Norn"
level: "Creature 20"
rare_03: [[Unique]]
alignment: ""
size: "Large"
trait_01: [[undead]]
modifier: 41
perception:
  - name: "Perception"
    desc: "+41; Greater Darkvision, Lifesense 120 Feet, Truesight"
languages: "Common, Fey, Jotun; truespeech"
skills:
  - name: "Skills"
    desc: "Crafting: +36, Deception: +35, Intimidation: +37, Medicine: +38, Occultism: +34, Performance: +31, Religion: +34, Lore (all): +28"
abilityMods: [7, 6, 6, 6, 10, 7]
speed: 35 feet,  fly 35 feet
sourcebook: "_Pathfinder Claws of the Tyrant_"
ac: 46
armorclass:
  - name: AC
    desc: "46; __Fort__ +34, __Ref__ +30, __Will__ +38; +1 status to all saves vs. magic"
hp: 375
health:
  - name: ""
  - name: HP
    desc: "375; __Immunities__  off-guard,  void; __Weaknesses__ cold iron 20"
abilities_top:
  - name: ""

  - name: "Broken Fate"
    desc: " (misfortune) The chained norn automatically rolls a 1 when she rolls initiative."

  - name: "Broken Triumvirate"
    desc: "  The chained norn's fate has been severed from the rest of the norns. She can't join a triumvirate or willingly take a hostile action against a norn."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Regeneration|Regeneration 20 (Deactivated by Cold Iron)]]"
    desc: "  This monster regains the listed number of Hit Points each round at the beginning of its turn. Its [[Conditions/Dying|Dying]] condition never increases beyond Dying 3 as long as its regeneration is active. However, if it takes damage of a type listed in the regeneration entry, its regeneration deactivates until the end of its next turn. Deactivate the regeneration before applying any damage of a listed type, since that damage might kill the monster by bringing it to Dying 4."

  - name: "Broken Fates Aura"
    desc: " (aura,mental,misfortune,occult) 60 feet. Creatures other than norns in the aura must attempt a DC 42 Will check save. On a successful save, the creature is temporarily immune to the broken fates aura for 24 hours. On a failure, the creature can't benefit from effects with the fortune trait for 24 hours."

  - name: "Rewind Fate"
    desc: "`pf2:r` (misfortune,occult) **Trigger** A creature within 120 feet would succeed on an attack or skill check\n* * *\n\n**Effect** The creature must attempt the attack or skill check again, rolling twice and taking the worse result."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Hand of Fate"
    desc: "+38 (agile, magical, reach 10 feet)\n__Damage__  4d10 + 15 void plus sever-fate"

  - name: "Occult Innate Spells"
    desc: "DC 42, attack +0; __10th __  _[[Spells/Freeze Time|Freeze Time]]_; __9th __  _[[Spells/Execute|Execute]]_, _[[Spells/Phantasmagoria|Phantasmagoria]]_, _[[Spells/Retrocognition|Retrocognition]]_; __8th __  _[[Spells/Migration|Migration]]_, _[[Spells/Quandary|Quandary]]_; __7th __  _[[Spells/Dispel Magic|Dispel Magic (At Will)]]_, _[[Spells/Read Omens|Read Omens (At Will)]]_, _[[Spells/Spellwrack|Spellwrack (At Will)]]_\n__Cantrips__  __(10th)__ _[[Spells/Detect Magic|Detect Magic]]_\n__Constant__  __(10th)__ _[[Spells/Hidden Mind|Hidden Mind]]_, _[[Spells/Truesight|Truesight]]_, _[[Spells/Truespeech|Truespeech]]_"

  - name: "Rituals"
    desc: "_Collective Memories_, _Geas_"

  - name: "Fated"
    desc: "  When a creature is subject to a misfortune effect from a norn and a fortune effect from any source other than a norn (or vice versa), the norn's effect automatically counteracts the other effect and then takes place normally, rather than the two effects canceling each other out. If both the fortune and misfortune effect are from a norn, then the two cancel each other out as normal. At the GM's discretion, powerful entities related to fate or luck, like Desna, Magdh, or Pharasma, can't have their effects negated by this ability."

  - name: "Sever Fate"
    desc: " (occult) When a norn deals void damage with a Strike, she regains 10 Hit Points. The target must succeed at a DC 39 Fortitude check save or become [[Conditions/Drained|Drained 1]] ([[Conditions/Drained|Drained 2]] on a critical failure).\n\nFurther void damage dealt by the norn increases the drained condition value by 1 on a failed save (or by 2 on a critical failure), to a maximum of [[Conditions/Drained|Drained 4]]."
 
```

```encounter-table
name: Chained Norn
creatures:
  - 1: Chained Norn
```


Variant norn

Ancient beyond imagining, norns are powerful fey women who hold in their hands the physical manifestation of fate and destiny in the form of golden thread. They watch over all life, intervening with reluctance when called upon—or with a vengeance when the strands of fate are twisted and abused by lesser beings. They cut imposing figures, standing 14 feet tall and weighing 800 pounds.

Norns' relationship with the Eldest of the First World is complex. Many among norns serve Magdh the Three, the triune Eldest who some norns believe to be the first norn triumvirate bound together into one entity, as Magdh has three bodies: a Maiden, a Mother, and a Matriarch. Magdh claims to be watching the threads of fate for some ominous prophesied cataclysm, and in addition to assisting in her divinations, Magdh expects the norns who serve her to follow her cryptic commands to help nudge the future away from the brink. However, norns are powerful beings in their own right, themselves capable of granting divine power, and many balk at serving the enigmatic demigod. These norns find the other Eldest even more alien and challenging to interact with, for they believe that while the Eldest wield great power, even these powerful beings should not be granted leave to meddle with fate as much as they desire.

While even the weakest of the Eldest could destroy an unaffiliated norn with ease, they tend to obey the proclamations and judgments of norns when they are spoken. These norns, for their part, use their perceived neutrality judiciously. They know better than to issue too many demands to the Eldest, lest the capricious demigods grow frustrated. And so the balance of power remains tenuous between unaffiliated norns and the Eldest, as it has for eons. Norns know that it's merely a matter of time before the Eldest lose their respect for this tradition and start acting entirely as they please, despite norns' best efforts to rein in their most disruptive actions.

## Followers of Fate

In the mortal Universe, some mortals worship norns as deities, while others, especially witches and bards, admire them as patrons or muses. Those who uphold norns as deities are known as Followers of Fate. Norns neither discourage this veneration nor go out of their way to support such worship. Clerics who venerate norns might worship a specific norn or norn triumvirate, or all norns as a whole, but they gain the same benefits regardless of their choice. The religious symbol of Followers of Fate is a pair of shears cutting a golden thread, and their areas of concern are destiny, fate, and the aging process.
