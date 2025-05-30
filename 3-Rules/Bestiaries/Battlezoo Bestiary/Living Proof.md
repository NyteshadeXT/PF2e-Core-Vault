---
title: "Living Proof"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.wclFBoscXaBK7cLP" 
tags:
  - pf2e/creature/type/construct
  - pf2e/creature/type/minion
  - pf2eMonster
  - pf2e/creature/level/1
statblock: inline
name: "Living Proof"
level: 1
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/living_proof.webp| ]]
source: "Battlezoo Bestiary"
name: "Living Proof"
level: "Creature 1"

alignment: ""
size: "tiny"
trait_01: [[construct]]
trait_02: [[minion]]
modifier: 7
perception:
  - name: "Perception"
    desc: "+7; Darkvision"
languages: "Common; (can&#x27;t speak any language)"
skills:
  - name: "Skills"
    desc: "Acrobatics: +6, Arcana: +6, Crafting: +6"
abilityMods: [-4, 4, 0, 5, 1, -5]
speed: 15 feet,  fly 15 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 14
armorclass:
  - name: AC
    desc: "14; __Fort__ +4, __Ref__ +10, __Will__ +6"
hp: 20
health:
  - name: ""
  - name: HP
    desc: "20; __Immunities__  bleed,  death effects,  disease,  doomed,  drained,  fatigued,  healing,  nonlethal attacks,  paralyzed,  poison,  sickened,  unconscious,  spirit,  vitality,  void; __Weaknesses__ fire 3, slashing 3"
abilities_top:
  - name: ""

  - name: "Execute the Formula"
    desc: " (alchemical,exploration,manipulate) A living proof is bursting with knowledge and eager to help in the creation of alchemy both new and old;\n\n**Requirements** The living proof can spend 10 uninterrupted minutes working and has not made an item with this ability in the last hour;\n\n**Effect** The living proof creates a 1st-, 2nd-, or 3rd-level alchemical bomb or elixir without expending any resources. The item becomes inert in 1 hour. A living proof can have only one such item in existence at a time. After using this ability, the living proof becomes [[Conditions/Slowed|Slowed 1]] for 1 hour."

abilities_mid:
  - name: ""
  - name: "Sudden Infusion"
    desc: "`pf2:0` (alchemical) **Trigger** The living proof is reduced to 0 HP;\n* * *\n\n**Effect** The alchemical and mathematical knowledge animating the living proof becomes unstable and is released in an explosive burst.\n\nAny unattended alchemical items within 20 feet of the living proof become inert. Any alchemists within 20 feet each regain 1d4 infused reagents."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Paper"
    desc: "+5 (nonlethal)\n__Damage__  1d4 + 2 slashing"

  - name: "**Ranged** `pf2:1` Math Bomb"
    desc: "+9 (range increment 20 feet, splash)\n__Damage__  1d6 + 3 force"

  - name: "Arcane Innate Spells"
    desc: "DC 14, attack +6; __1st __  _[[Spells/Force Barrage|Magic Missile]]_, _[[Spells/Force Barrage|Magic Missile]]_\n__Cantrips__  __(1st)__ _[[Spells/Read Aura|Read Aura]]_, _[[Spells/Sigil|Sigil]]_"

  - name: "Entangling Math Bomb"
    desc: "`pf2:2` (splash) The living proof manifests a physical form for the mathematical symbols on its page to create a powerful bomb. The living proof throws a bomb that deals 2d6 piercing damage and 1 piercing splash damage. Each damaged creature must succeed at a DC 14 Reflex save or become [[Conditions/Stupefied|Stupefied 1]] for 1 minute ([[Conditions/Stupefied|Stupefied 2]] on a critical failure)."
 
```

```encounter-table
name: Living Proof
creatures:
  - 1: Living Proof
```



Alchemists have been known to spend countless hours and days working on new formulae in order to expand their repertoire of elixirs and explore the frontiers of alchemical knowledge. Under certain conditions, this devotion to the study of math, science, and transmutation can take on a life all its own. When a potentially powerful recipe or formula is left on the crafting table half- finished, it can manifest the will to pick up where its creator left off. Overnight, the composition feverishly works itself into completion and beyond, forming an incomprehensible proof that has a mind of its own. Alchemists have come to lovingly call these mathematically animated pages living proofs.

Physically, living proofs are usually composed of nothing more than parchment and ink. They mobilize by folding and re-folding themselves like origami. Though this talent allows living proofs to take on just about any shape, they tend to choose forms that resemble miniature versions of their creators or, rarely, some other creature important to the proof. For example, a living proof written in snake's blood might take the guise of a papery serpent. Similarly, a living proof whose first sight upon animating is that of a caged specimen such as a chimera or owlbear might model itself after such a monster.

Although most living proofs dedicate themselves to one particular area of study, the occasional specimen might become a polymath if they were designed by a particularly genius alchemist. If abandoned or forgotten, a living proof may wander from its laboratory to seek a new master to inspire and aid, though they are otherwise loyal assistants. Sometimes this loyalty goes a bit too far—more than one alchemist apprentice has wound up injured after dawdling in their master's lab after hours and stumbling upon a seemingly mundane sheet of parchment come to life.

## Unusual Materials

Living proofs made of unusual materials—such as vellum, stone tablets, or even chalkboards—are not unknown. Such specimens typically have different resistances and weaknesses depending on the material they are made of.

## Monster Part Subsystem

**Living Proof Creature 1**

**Monster Parts** 3.5/7/13 gp

**Eligible Refinements** weapons (piercing, slashing), armor (light), perception item, skill items (Acrobatics, Arcana, Crafting)

**Eligible Imbued Properties** bane, dexterity, energy resistant (negative, positive), force, intelligence, sensory (darkvision), spells (Arcane: magic missile, read aura, sigil), wild, winged
