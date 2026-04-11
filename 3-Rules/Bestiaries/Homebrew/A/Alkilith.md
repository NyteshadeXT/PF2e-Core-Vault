---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Alkilith"
tags: 
  - pf2e/creature/type/demon
  - pf2e/creature/level/12
statblock: inline
name: "Alkilith"
level: 12
---

```statblock
layout: Basic Pathfinder 2e Layout
source: "Converted from D&D 3e (Omox baseline)"
name: "Alkilith"
level: "Creature 12"
token: "[[alkilith.png]]"
size: "Large"
trait_01: "Demon"
trait_02: "Fiend"
trait_03: "Ooze"
trait_04: "Abyssal"

modifier: 22
perception:
  - name: "Perception"
    desc: "+22; __darkvision__, __imprecise scent 60__"

languages: "Abyssal; telepathy 100 ft."

skills:
  - name: "Skills"
    desc: "__Athletics__: +26; __Stealth__: +20; __Occultism__: +23"

abilityMods: [6, 1, 5, -2, 2, 0]

abilities_top:
  - name: "Abyssal Gate Flesh"
    desc: "The alkilith is fused to a surface (typically a wall, doorway, or archway) and cannot be moved. It can extend pseudopods up to 20 feet."

  - name: "Corrupt Portal"
    desc: " (divine, conjuration, abyssal) The alkilith twists nearby space. Any teleportation or planar travel within 60 feet requires a DC 30 flat check or is redirected to a random adjacent space and the creature takes `dice: 4d6` mental damage."

  - name: "Acidic Form"
    desc: "A creature that hits the alkilith with an unarmed Strike or non-reach melee weapon takes `dice: 2d6` acid damage."

abilities_mid:
  - name: "Warping Presence"
    desc: " (aura, divine, mental) 30 feet. The area ripples with abyssal influence and counts as difficult terrain. Enemies in the aura take a –2 status penalty to Will saves."

  - name: "Attack of Opportunity"
    desc: "⬲ Pseudopod only."

abilities_bot:
  - name: "Warp Flesh"
    desc: " (curse, polymorph, divine) The target must succeed at a DC 32 Fortitude save or become twisted by abyssal energies.\n__Failure__ [[enfeebled|enfeebled 2]] and [[clumsy|clumsy 1]] for 1 minute.\n__Critical Failure__ As failure, but also [[slowed|slowed 1]] for 1 round."

  - name: "Spawn Rift"
    desc: "⬺ (divine, conjuration) Once every `dice: 1d4` rounds, the alkilith tears open a minor abyssal rift. One creature appears in an adjacent square `dice: 1d100`:\n- 1 [[3-Rules/Bestiaries/Standalone Adventures/Rusthenge/D/Dretch|Dretch]] (75% chance)\n- or 1 [[3-Rules/Bestiaries/Monster Core/B/Brimorak|Brimorak]] (25% chance)\nThe rift closes at the end of the alkilith’s next turn."

  - name: "Engulf Portal"
    desc: "⬺ The alkilith attempts to engulf a creature within reach. DC 32 Reflex save.\n__Failure__ The creature is pulled partially into the alkilith’s body, taking `dice: 4d8` acid damage and becoming [[grabbed]].\n__Critical Failure__ The creature is fully engulfed (restrained, `dice: 4d8` acid damage each round)."

speed: 30 feet

ac: 32
armorclass:
  - name: AC
    desc: "32; __Fort__ +25, __Ref__ +18, __Will__ +22"

hp: 230
health:
  - name: HP
    desc: "230; __Resistances__ acid 15; __Weaknesses__ cold iron 10; __Immunities__ precision, prone"

attacks:
  - name: "Pseudopod"
    desc: "⬻ Pseudopod +25 ([[reach|reach 20 feet]], [[magical]]); __Damage__ `dice: 2d10+10` bludgeoning plus `dice: 2d6` acid and Warp Flesh"

sourcebook: "Custom conversion (Omox baseline)"
```