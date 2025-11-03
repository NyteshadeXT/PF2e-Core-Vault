---
title: "Root Rotter"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.blWhrVgjP5rIqb3q" 
tags:
  - pf2e/creature/type/fungus
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/9
  - remaster
statblock: inline
name: "Root Rotter"
level: 9
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #210: Whispers in the Dirt"
name: "Root Rotter"
level: "Creature 9"
rare_03: [[Rare]]
alignment: ""
size: "Medium"
trait_01: [[fungus]]
trait_02: [[undead]]
trait_03: [[unholy]]
modifier: 18
perception:
  - name: "Perception"
    desc: "+18; Darkvision"
languages: "Chthonian, Common, Elven; Telepathy 30 feet fungi only"
skills:
  - name: "Skills"
    desc: "Acrobatics: +20, Athletics: +17, Nature: +15, Stealth: +18"
abilityMods: [6, 5, 4, 0, 3, 2]
speed: 30 feet
sourcebook: "_Pathfinder #210: Whispers in the Dirt_"
ac: 26
armorclass:
  - name: AC
    desc: "26; __Fort__ +17, __Ref__ +20, __Will__ +16"
hp: 195
health:
  - name: ""
  - name: HP
    desc: "195, void healing; __Immunities__  bleed,  death effects,  disease,  paralyzed,  poison,  unconscious; __Weaknesses__ holy 10, slashing 10"
abilities_top:
  - name: ""

  - name: "Fungus Sense"
    desc: "  A root rotter has imprecise tremorsense to detect the vibrations of creatures who are within a region of fungal terrain shared by the root rotter."

abilities_mid:
  - name: ""
  - name: "Fungal Empowerment"
    desc: "  If the root rotter is touching fungal terrain at the start of its turn, they regain 10 healing Hit Points and are [[Conditions/Quickened|Quickened]] that turn; they can use the extra action only to Stride or Strike."

  - name: "Fungal Mind"
    desc: " (primal) Root rotters communicate telepathically with each other. While within telepathic range of at least one other root rotter, they gain a +2 circumstance bonus to initiative rolls, Perception checks, and saving throws against mental effects. If one root rotter is aware of a combatant, all members of the fungal mind within range are aware of it."

  - name: "[[Bestiary Ability Glossary/Void Healing|Void Healing]]"
    desc: "  A creature with void healing draws health from void energy rather than vitality energy. It is damaged by vitality damage and is not healed by vitality healing effects. It does not take void damage, and it is healed by void effects that heal undead."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Jaws"
    desc: "+21 (magical, poison, unarmed, unholy)\n__Damage__  2d8 + 9 piercing plus rotter-infestation 1d8 poison plus rotter-infestation"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+21 (agile, magical, unarmed, unholy)\n__Damage__  2d8 + 9 bludgeoning"

  - name: "Disperse"
    desc: "`pf2:3` (magical,poison,unholy) **Requirements** The root rotter has 25 Hit Points or fewer\n* * *\n\n**Effect** The root rotter destroys themself. Thorny fungal roots explode from their body, dealing 10d6 piercing damage in a 10-foot emanation (DC 25 Reflex check save). Any creature who fails the save is exposed to rotter infestation."

  - name: "Fungal Root"
    desc: "`pf2:2` (divine,poison,unholy) **Requirements** The root rotter is standing in fungal terrain\n* * *\n\n**Effect** Fungal roots reach out to snag a nearby foe. An enemy within 30 feet of the root rotter takes 4d6 piercing damage and must attempt a DC 27 Reflex check saving throw.\n* * *\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature takes half damage and becomes [[Conditions/Clumsy|Clumsy 1]] until the end of its next turn.\n\n**Failure** The creature takes full damage and becomes clumsy 1 with an unlimited duration. In addition, the creature is [[Conditions/Restrained|Restrained]] ([[Actions/Escape|Escape]] DC 27) for 1 minute.\n\n**Critical Failure** As failure but double damage. In addition, the creature is exposed to rotter infestation."

  - name: "Rotter Infestation"
    desc: " (disease,divine) **Saving Throw** DC 27 Fortitude check\n\n**Onset** 1 day\n\n**Stage 1** [[Conditions/Drained|Drained 1]] (1 day)\n\n**Stage 2** [[Conditions/Drained|Drained 2]] and can sense the presence of root rotters within 30 feet as an imprecise sense (1 round)\n\n**Stage 3** as stage 2, but transformation into a root rotter upon death (1 day)"
 
```

```encounter-table
name: Root Rotter
creatures:
  - 1: Root Rotter
```



Root rotters are all that remain of the unfortunate elven residents of Greengold. Some died in the initial bursts of Jeharlu spores, while others succumbed to infestation by sinmolds. Fungus now riddles their bodies, wrapping around their brains and nerves to reanimate them.

## Corruption Spreaders

A root rotter that remains in place for 24 hours causes a 5-foot emanation to become overgrown with foul-smelling unpleasant fungus. This spread increases by 5 feet for each additional 24 hours the root rotter remains motionless, to a maximum area of a 60-foot emanation after 12 days of motionless lurking. This fungus is permanent as long as it has a source of nourishment but can be destroyed as easily as any patch of mundane fungus.
